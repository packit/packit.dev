---
title: Fallback Guide
sidebar_position: 8
---

# Fallback Guide

Packit Service automates several recurring packaging actions on your behalf
(Copr builds, dist-git pull requests, Koji builds, Bodhi updates, …).
From time to time, the automation can fail for reasons that are out of your
control — an outage of an upstream service (Copr, Koji, dist-git, Bodhi,
release-monitoring), an infrastructure problem on the Packit side, a
temporarily broken release of `packit`, an expired token, etc.

This guide shows you how to **manually reproduce each automated action** with
the [Packit CLI](/docs/cli/) (or the underlying tooling) so that you are never
blocked on a release just because the service is down. Each section maps a
service job to the equivalent local command, the credentials it needs and the
gotchas to be aware of.

:::warning Packit CLI doesn't interact with Packit service

The Packit CLI is **not** a client of the Packit Service — it does not go
through `prod.packit.dev` / `stg.packit.dev`, does not use the Packit Service
identity, and the resulting build/PR/update will not show up in the
[Packit Dashboard](https://dashboard.packit.dev/). Instead, `packit` talks
directly to GitHub/GitLab, dist-git, Copr, Koji, Bodhi and Testing Farm
**using your own credentials** (the tokens and Kerberos ticket configured
below). So expect the PR author, Copr build owner, Koji submitter and Bodhi
update author to be **you**, not Packit.

:::

:::tip Try retriggering first

Before falling back to the CLI, check the [retriggering guide](/docs/retriggering)
— most transient failures can be recovered by simply commenting a retrigger command such as `/packit create-update` or `/packit build`
again on the relevant pull request, commit or issue.

:::

## Common prerequisites

Most of the commands below need the same baseline. Set this up once and you
can use it for any of the fallbacks.

### 1. Install Packit CLI

See the [CLI installation docs](/docs/cli/#installation). The shortest path on
Fedora:

```
$ sudo dnf install packit
```

If you want to match the exact code Packit Service is running:

* **production** — `sudo dnf copr enable packit/packit-stable && sudo dnf install packit`
* **staging** — `sudo dnf copr enable packit/packit-dev && sudo dnf install packit`

### 2. Configure credentials

Create `~/.config/packit.yaml` with the tokens you need. Only the ones needed
for the fallback you intend to run are mandatory. See the
[user configuration reference](/docs/configuration#user-configuration-file)
for the full schema.

```yaml
authentication:
    github.com:
        # https://github.com/settings/tokens (repo scope)
        token: <github-pat>
    pagure:
        # https://src.fedoraproject.org/settings#nav-api-tab
        # ACLs: fork_project, modify_project, pull_request_comment, pull_request_create
        token: <fedora-pagure-token>
        instance_url: https://src.fedoraproject.org

# Optional: lets bodhi/koji authenticate automatically via Kerberos
fas_user: <your-fas-username>
kerberos_realm: FEDORAPROJECT.ORG
```

Get a Kerberos ticket whenever an action talks to Fedora infra:

```
$ kinit <your-fas-username>@FEDORAPROJECT.ORG
# or, equivalently:
$ fkinit -u <your-fas-username>
```

For Copr you need `~/.config/copr` (download it from
<https://copr.fedorainfracloud.org/api/>):

```ini
[copr-cli]
copr_url = https://copr.fedorainfracloud.org
gssapi = true
```

### 3. Clone the right repo

Each fallback expects to run either from an **upstream** working copy or from
the **dist-git** working copy. The job-by-job table below makes it explicit
for each command.

:::tip Running in a container

If you don't want to install anything locally, run packit from its container
image and mount your config/secrets in:

```
$ podman run -ti --rm \
    -v ~/.config/packit.yaml:/root/.config/packit.yaml:z \
    -v ~/.config/copr:/root/.config/copr:z \
    -v ~/.ssh:/root/.ssh:z \
    -v $PWD:/src:z \
    quay.io/packit/packit bash
```

:::

## Quick reference

| Service job | Where to run | Manual fallback |
| --- | --- | --- |
| [`copr_build`](#copr_build) | upstream checkout | `packit build in-copr` |
| [`tests`](#tests) | upstream checkout | `tmt run` locally / Testing Farm CLI |
| [`upstream_koji_build`](#upstream_koji_build) | upstream checkout | `packit build in-koji --scratch` |
| [`propose_downstream`](#propose_downstream) | upstream checkout | `packit propose-downstream` |
| [`pull_from_upstream`](#pull_from_upstream) | dist-git checkout | `packit pull-from-upstream` |
| [`koji_build`](#koji_build) | dist-git checkout | `fedpkg build` (or `packit build in-koji`) |
| [`bodhi_update`](#bodhi_update) | dist-git checkout | `packit create-update` (or `bodhi updates new`) |

---

## copr_build

* **Service job:** [`copr_build`](/docs/configuration/upstream/copr_build)
* **Run from:** upstream working copy, checked out at the commit/tag/PR HEAD
  the service would have built.
* **Needs:** `~/.config/copr`, valid Kerberos ticket *or* Copr API token.

```
$ git checkout <commit-or-tag-or-pr-merge>
$ packit build in-copr \
    --owner <copr-owner> \
    --project <copr-project> \
    --targets <chroot1>,<chroot2>
```

If you omit `--owner` / `--project` / `--targets`, packit reuses what is
configured in `.packit.yaml` (or generates a `packit-cli-…` project, which is
fine for a one-off rebuild).

For pull requests, run on the merged state to match what the service does:

```
$ git fetch origin pull/<pr-id>/head:pr-<pr-id>
$ git checkout <target-branch>
$ git merge --no-edit pr-<pr-id>
$ packit build in-copr
```

:::caution Authentication scope

`packit build in-copr` builds **using your Copr identity**, not Packit's.
Make sure you have `builder` permission in the target Copr project, or run
against your own Copr namespace.

:::

If only the SRPM step matters (e.g. you want to inspect what the service
would have submitted), use [`packit srpm`](/docs/cli/srpm) or
[`packit prepare-sources`](/docs/cli/prepare-sources) instead.

---

## tests

* **Service job:** [`tests`](/docs/configuration/upstream/tests)
* **Run from:** upstream working copy.
* **Needs:** [`tmt`](https://tmt.readthedocs.io/) for local runs, or a
  Testing Farm API token for remote runs.

Packit CLI itself does **not** submit Testing Farm runs, but you can run the
same `fmf`/`tmt` plans locally or submit them yourself.

**Run the plan locally with tmt (closest to what Testing Farm executes):**

```
$ tmt run --all provision --how container plan --name <plan-name>
```

Swap `--how container` for `--how virtual` if your tests need a VM.

**Submit the run to Testing Farm directly with the `testing-farm` CLI:**

```
$ testing-farm request \
    --git-url <upstream-repo> \
    --git-ref <commit-or-pr-merge> \
    --compose Fedora-Rawhide \
    --arch x86_64
```

If the test job has `skip_build: false`, you typically also want to supply
your own Copr build via `--artifact 'id=<copr-build-id>;type=fedora-copr-build;packages=<pkg>'`
to mirror what Packit Service does. See the
[Testing Farm API docs](https://api.testing-farm.io) for the full request
schema.

---

## upstream_koji_build

* **Service job:** [`upstream_koji_build`](/docs/configuration/upstream/upstream_koji_build)
* **Run from:** upstream working copy.
* **Needs:** valid Fedora Kerberos ticket.

Only **scratch** builds are supported from upstream — same as in the service.

```
$ kinit <fas-user>@FEDORAPROJECT.ORG
$ packit build in-koji --scratch --from-upstream \
    --koji-target <target>
```

`--from-upstream` makes packit build the SRPM from the current checkout and
submit it directly to Koji (this is the mode the service uses). Drop it if
you want to fall back to `fedpkg build --scratch` semantics against dist-git.

See [`packit build in-koji`](/docs/cli/build/in-koji) for all options.

---

## propose_downstream

* **Service job:** [`propose_downstream`](/docs/configuration/upstream/propose_downstream)
* **Run from:** upstream working copy, checked out at the **release tag**.
* **Needs:** `github_token`, `pagure_user_token`, Fedora/CentOS Kerberos ticket.

```
$ git fetch --tags
$ git checkout <release-tag>
$ packit propose-downstream \
    --dist-git-branch <branch1>,<branch2>
```

This will:

1. Clone dist-git to a temporary directory.
2. Sync `files_to_sync` from the upstream tag.
3. Upload sources to the lookaside cache (this step is **bypassed** by the
   service for CentOS Stream — running the CLI is actually the recommended
   way to make sure that step happens; see the
   [CentOS Stream note](/docs/configuration/upstream/propose_downstream#syncing-the-release-to-centos-stream)).
4. Open the dist-git pull request(s).

Re-run a specific subset of branches with `--dist-git-branch f40,f41`. Pass
`--resolve-bug rhbz#123,rhbz#124` to attach Bugzilla references to the
changelog, mirroring what the service does for
[release-monitoring](https://release-monitoring.org/) bugs.

See [`packit propose-downstream`](/docs/cli/propose-downstream) for all
options.

---

## pull_from_upstream

* **Service job:** [`pull_from_upstream`](/docs/configuration/downstream/pull_from_upstream)
* **Run from:** dist-git working copy.
* **Needs:** `pagure_user_token`, Fedora/CentOS Kerberos ticket;
  optionally `github_token` if `upstream_project_url` is configured.

```
$ fedpkg clone <package>
$ cd <package>
$ packit pull-from-upstream \
    --dist-git-branch <branch1>,<branch2> \
    --resolve-bug rhbz#<bz-id>
```

`pull_from_upstream` reuses the same code path as `propose_downstream` but
reads the configuration from the **dist-git default branch (`rawhide`)**.
That means the dist-git checkout must contain (or be branched from) a
`.packit.yaml`.

If you want to use the config from the current dist-git checkout / PR rather
than the default branch, use `--no-pr` to push directly, or test locally with
`--dist-git-path .`. The corresponding service-side flag is
`/packit pull-from-upstream --with-pr-config`.

See [`packit pull-from-upstream`](/docs/cli/pull-from-upstream).

---

## koji_build

* **Service job:** [`koji_build`](/docs/configuration/downstream/koji_build)
* **Run from:** dist-git working copy of the merged branch.
* **Needs:** valid Fedora Kerberos ticket, packager group membership.

The simplest fallback is just `fedpkg`:

```
$ fedpkg clone <package>
$ cd <package>
$ fedpkg switch-branch <branch>
$ git pull
$ fedpkg build
```

If you prefer to keep the same wrapper the service uses, packit can do it as
well:

```
$ packit build in-koji --dist-git-branch <branch>
```

:::tip Multiple branches

The service builds for every branch listed in `dist_git_branches`. Either run
`fedpkg build` once per branch, or:

```
$ for b in f40 f41 rawhide; do
    fedpkg switch-branch $b && git pull && fedpkg build --nowait
  done
```

:::

For builds tagged into a sidetag group (`sidetag_group` in `.packit.yaml`),
the service also tags the build for you. After a manual `fedpkg build`,
either trigger Packit again via `/packit koji-build` on the same dist-git PR
or tag manually:

```
$ koji tag-build <sidetag-name> <nvr>
```

---

## bodhi_update

* **Service job:** [`bodhi_update`](/docs/configuration/downstream/bodhi_update)
* **Run from:** dist-git working copy (or anywhere if you pass the NVR
  explicitly).
* **Needs:** Bodhi credentials (Kerberos TGT + `fas_user`/`kerberos_realm`
  in `~/.config/packit.yaml`, or interactive browser auth).

```
$ packit create-update \
    --dist-git-branch <branch> \
    --koji-build <nvr> \
    --update-notes "<notes>" \
    --update-type bugfix \
    --resolve-bug rhbz#<bz-id>
```

If `--koji-build` is omitted, packit picks the latest Koji build of the
package on that branch — same heuristic the service uses.

:::tip Creating updates from sidetagged builds

If you need to create a Bodhi update from a sidetagged build, use the
same build NVR when running `packit create-update` with the `--koji-build`
parameter as shown above.

:::

Without packit, use the upstream Bodhi client directly:

```
$ bodhi updates new \
    --type bugfix \
    --notes "<notes>" \
    --close-bugs \
    --bugs <bz-id> \
    <nvr>
```

To push updates that have spent their time in testing (Packit also automates
this in some configurations), use:

```
$ packit push-updates
```

See [`packit create-update`](/docs/cli/create-update) and
[`packit push-updates`](/docs/cli/push-updates).

---

## When even the fallback fails

If the CLI keeps failing the same way the service does, the problem is
probably **upstream of Packit** (Copr, Koji, Bodhi, dist-git, Testing Farm,
release-monitoring). A few useful pointers:

* [Fedora infrastructure status](https://status.fedoraproject.org/)
* [Copr status](https://copr.fedorainfracloud.org/status/)
* [Bodhi status](https://bodhi.fedoraproject.org/)
* [Packit Dashboard](https://dashboard.packit.dev/) — to see whether the
  service has retried since.

If the CLI succeeds where the service fails, please
[open an issue](https://github.com/packit/packit-service/issues/new) or
[reach out to us](/#contact) so we can fix the automation.
