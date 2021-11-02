---
title: "Configuration"
draft: false
disableToc: false
weight: 7
---

# Configuration

Packit uses a configuration file in the upstream repository. The config file is written in YAML language.

You should place the file in the root of your upstream repo. Packit accepts these names:

* `.packit.yaml`
* `.packit.yml`
* `.packit.json`
* `packit.yaml`
* `packit.yml`
* `packit.json`

Both Packit Service and packit tool use this configuration file.


## Top level keys

#### specfile_path

(*string*) Relative path to a spec file within the upstream repository.
If not specified, defaults to:
1. `downstream_package_name.spec` if [`downstream_package_name`](#downstream_package_name)
is set.
2. Else recursively search the tree and use the first spec file found.

#### upstream_project_name

(*string*) Deprecated since packit-0.7.0, use `upstream_package_name` instead.

#### upstream_package_name

(*string*) Name of the upstream repository (e.g. in PyPI), defaults to the
name of the Github repository; it's used when working with the upstream project,
as a release archive name and as a directory name in that archive.

#### upstream_project_url

(*string*) URL of the upstream project (e.g.
`https://github.com/packit/packit`).

#### create_pr

(*bool*) When doing a new update in Fedora dist-git, should packit create a
new pull request (defaults to `true`) or push directly to dist-git (if set to
`false`).


#### sync_changelog

(*bool*) When doing a new update in Fedora dist-git, the specfile changelog
is synchronised when set to `true`. By default (`false`), everything but the changelog
part is synchronized. Use this only when your changelogs are in sync since this overwrites the changelog in the downstream.

#### synced_files

(*list of strings or dicts*) A list of relative paths to files in the upstream
repo which are meant to be copied to dist-git during an update (spec file path
and config file path are set every time by default).

Under the hood this will use `rsync --archive` to synchronise the paths
between the upstream and the dist-git repo.

The fields for a dictionary item in the list are the following:

- *src*: A single path or a list of paths in the upstream repo that should be synced to dist-git.
- *dest*: Path in the dist-git repo, where paths in `src` should be synced to.
- *mkpath*: Flag to indicate if missing path components in `dest` should be created or not (default: false).
- *delete*: Flag to indicate if extra content from `dest` should be deleted (default: false).
- *filters*: List of [rsync filter rules] to be used during syncing.

[rsync filter rules]: https://www.man7.org/linux/man-pages/man1/rsync.1.html#FILTER_RULES

##### Examples:

Copy a file from root of the upstream repo to dist-git:

```yaml
synced_files:
  - packit.spec
```

If you copy `packit.yaml` downstream, you can then take advantage of
`sync-from-downstream` command:

```yaml
synced_files:
  - .packit.yaml
```

Rename or change the path of the synced file in dist-git:

```yaml
synced_files:
  - src: packit.spec
    dest: redhat/packit.spec
```

Paths also support globs. Copy everything from `fedora-packaging` folder and
put it to the root of the dist-git repo:

```yaml
synced_files:
  - src: fedora-packaging/*
    dest: .
```

Sync the entire content of the `fedora-packaging` directory, and delete extra
content found in the root of the dist-git repo; protect `.git*` files and the
`sources` file from deletion:
```yaml
synced_files:
  - src: fedora-packaging/
    dest: .
    delete: true
    filters:
    - "protect .git*"
    - "protect sources"
```

Specify multiple source files to copy:

```yaml
synced_files:
  - src:
    - package.spec
    - some-file
    dest: .
```

Set `mkpath` to `true` to create missing path components in dist-git.
In the example below, `subdir` is created if missing.

```yaml
synced_files:
  - src: some.file
    dest: subdir/some.file
    mkpath: true
```

#### upstream_ref

(*string*) Git reference to last upstream git commit (for source-git repos).
Can be set to commit hash, tag or a branch name. You can also use globbing pattern
to find a tag. In case you want to use globbing pattern for a branch, prefix the
pattern with `branches/`, e.g. for a branch matching `*-release` set to `branches/*-release`.

#### downstream_package_name

(*string*) Name of the RPM package in Fedora, defaults to the name of the
Github repository.

#### dist_git_namespace

(*string*) Namespace in dist-git URL (defaults to `rpms`).

#### dist_git_base_url

(*string*) URL of dist-git server, defaults to https://src.fedoraproject.org/
(has to end with a slash).

#### create_tarball_command (**deprecated**)

Please use [`create-archive` action](/docs/actions/)

#### current_version_command (**deprecated**)

Please use [`get-current-version` action](/docs/actions/)

#### actions

(*string*) Custom actions/hooks overwriting the default behavior of packit
(more in [Actions](/docs/actions/)).

#### jobs

(*list of dicts*) A list of job definitions for packit service: see
[below](#supported-jobs) for details.

#### allowed_gpg_keys

(*list of string*) A list of gpg-key fingerprints; if specified, one of the
configured keys have to sign the last commit when updating in downstream; add
GitHub key (`5DE3E0509C47EA3CF04A42D34AEE18F83AFDEB23`) if you want to use
this on code merged via GitHub web interface.

#### spec_source_id

(*int or string*) Numeric ID of Source inside spec file which packit should
change when setting path to the newly generated tarball, can be also full name
of the macro. Defaults to `Source0` or `Source`, whichever is found first in
the spec file.

#### upstream_tag_template

(*string*) Packit by default expects git tags to match versions (e.g. when
doing the `propose-downstream` command) - if you are using a different tagging
scheme, let's say `v1.2.3` you can then set this parameter to `v{version}` and
packit will fill in the version argument.

#### archive_root_dir_template

(string) In the [`fix-spec-file` action](/docs/actions/) Packit changes first `%setup` (or `%autosetup`) macro
in `%prep` and adds `-n` so the generated tarball can be unpacked. For this
purpose, it requires the name of the directory in the source archive. For tar archives
with one directory, Packit gets it automatically. If Packit is not able to extract it
from the archive with the tar python module, it is possible to specify it explicitly
with this option.

Default value is `{upstream_pkg_name}-{version}`.

You can use following tags in string:
* `{upstream_pkg_name}` - name of the upstream package
* `{version}` - package version

#### patch_generation_ignore_paths

(*list of strings*) In a source-git repo, when packit is generating patches,
it excludes changes to the spec file and packit.yaml by default: with this
option you can precisely specify paths to exclude.

#### patch_generation_patch_id_digits

(*integer*) The number of digits (minimum width) used for patch IDs when
adding `PatchN` tags to a spec-file while updating dist-git from a source-git
repository.  Defaults to 4, that is, patches will look like `PatchNNNN:
<patch_name>`, and leading zeros are added, if needed. A value of 0 means "no
minimum width".

#### notifications

There is only one notification configuration you can set up right now: enable
the "Congratulations!" comment which will packit send after a successful build of a
pull request is done.

The default behaviour is not to send the comment with instructions how to install a
package with the change implemented in the pull request:

```yaml
notifications:
  pull_request:
    successful_build: false
```

You can enable the commenting by setting `successful_build` to `true`.

#### copy_upstream_release_description
(*bool*) When doing a new update in Fedora dist-git, the Github upstream release description
is copied to the specfile changelog when set to `true`. By default (`false`),
commit message titles (first line of a commit message) are copied.
e.g.
- `copy_upstream_release_description = True`:
```
%changelog
* Thu Oct 15 2020 Packit Service <user-cont-team+packit-service@redhat.com> - 0.18.0-1
Packit got new archive_root_dir_template config option to get custom archive root dir.
You can find more info in the documentation.
```
- `copy_upstream_release_description = False` (default):
```
%changelog
* Thu Oct 15 2020 Packit Service <user-cont-team+packit-service@redhat.com> - 0.18.0-1
- Use inner archive directory in %setup macro
- Use archive_root_dir_template
```

#### sources
(*list of dicts*) A list of sources to override the URLs of `SourceX` entries in the spec-file.
```yaml
sources:
  - path: rsync-3.1.3.tar.gz
    url: https://git.centos.org/sources/rsync/c8s/82e7829c0b3cefbd33c233005341e2073c425629
```
`path` is the path relative to the directory with sources where the source will be placed. If a `SourceX` entry with
corresponding basename exists in the spec-file, the source will be downloaded from the `url` found in the configuration
instead of the location defined in the spec-file.

### Minimal sample config

This is a sample config which is meant for [packit](https://github.com/packit/packit) itself.

```yaml
# packit is named packitos on PyPI b/c packit name was already taken
upstream_package_name: packitos
```

## Packit-as-a-Service

Packit service doesn't have any web interface to configure it,
so the only way to change its behaviour is via the config file you just read about.

When you open a pull request against your upstream repository, packit service
picks up configuration file from your pull request, not from the branch against
the PR is opened. This way, you can polish your .packit.yaml and see the
results right away. (for more info, please see [packit-service#48](https://github.com/packit/packit-service/issues/48))

### Packit service jobs

Once the service starts handling events of your repository, it needs to have a
clear definition of what it should do.

The tasks the packit service should do are defined in section `jobs`. The section is a list of dicts:
```yaml
jobs:
- {key: value}
- {}
```

If there is no `jobs` section in the configuration file, jobs default to:
```yaml
jobs:
- job: copr_build
  trigger: pull_request
  metadata:
    targets: fedora-stable

- job: tests
  trigger: pull_request
  metadata:
    targets: fedora-stable

- job: propose_downstream
  trigger: release
  metadata:
    dist_git_branches:
      - fedora-all
```

If you do not want to use the jobs then the `jobs` section in the configuration file should be empty:
```yaml
jobs: []

```

Every job has two mandatory keys:

1. `job` - name of the job (you can imagine this as a CLI command)
2. `trigger` - what is the trigger for the job?

Every job only supports a specific set of triggers.

Jobs can also accept additional configuration in a key `metadata` which has dict as a value:
```yaml
jobs:
- job: some-job
  trigger: ran-out-of-beer
  metadata:
    key: value
```


##### Overriding global parameters

You are able to override your global parameters (such as `specfile_path`,
`downstream_package_name`, `actions`...) for every job. This is very useful
when you want to set up a build or a test matrix using different parameters or
configuration. It's also useful when your release workflow differs between
Fedora and EPEL.

In order to do such a thing, just set a value you want to override in the
respective job.

Example:
```yaml
specfile_path: package.spec
jobs:
- job: some-job
  trigger: ran-out-of-beer
  metadata:
    key: value
  specfile_path: somewhere/else/package.spec
```

In this example, the job `some-job` would override `specfile_path` to
`somewhere/else/package.spec` instead of using `./package.spec`.


#### Supported jobs

**copr\_build**

Create a SRPM and submit an RPM build to [Fedora COPR](https://copr.fedorainfracloud.org/) build system.

Supported triggers:

* **pull_request** -- check out content of the pull request
* **commit** -- reacts to new commits to the specified branch
* **release** -- check out content of the tag associated with the release

Required metadata:

* **targets** - a (list of) mock chroot(s) where the build is going to be
  executed (example `fedora-rawhide-x86_64`): for more info [see below](#available-copr-build-targets).
* **branch** - the name of the branch we want to build for when using **commit** trigger

Optional metadata:

* **timeout** - (seconds) give up watching a build after timeout, defaults to 7200s, i.e. 2 hours
* **owner** - a namespace in Copr where the build should happen (defaults to packit)
* **project** - a name of the Copr project (defaults to `"{github_namespace}-{repository_name}-{pr_id}"`)
* **additional_repos** - a list of additional buildroot repositories
* **list_on_homepage** -- The project will be shown on Copr frontend homepage if set to `True`.
  Defaults to `False`.
  The value is represented as `unlisted_on_hp` in Copr project settings.
* **preserve_project** -- The project will not be removed after 60 days if set to `True`.
  Defaults to `False`.
  The value is represented as `delete_after_days` in Copr project settings
  (`True` is `-1` and `False` is `60`).

When using a custom `owner`, Packit Service asks for `builder` permission the
first time it tries to build in the project. In case the configuration of the
Copr project (e.g. adding new `targets`) need to be updated, Packit Service asks
for `admin` permission. You need to approve these requests in the Copr project
settings.

If you do not want to give us `admin` permission, you can update the project
settings manually in Copr based on the guidance Packit Service gives.

Boolean values (`list_on_homepage` and `preserve_project`) are not updated when
you use custom `owner`.

**Example**

```yaml
jobs:
- job: copr_build
  trigger: pull_request
  metadata:
    targets:
      - fedora-stable
      - centos-stream-8-x86_64
```

With this configuration, you'll get builds in all stable fedora releases
(excluding rawhide) and the CentOS stream.


##### Available COPR build targets
There are multiple places where you can get the latest list of available build targets:
* Open your COPR project, then click "Settings" > "Build options" > "Chroots" -
these are the same values packit accepts.

* Install package `copr-cli` and run:
```
$ copr-cli list-chroots
centos-stream-8-aarch64
centos-stream-8-x86_64
custom-1-i386
custom-1-x86_64
epel-6-i386
epel-6-x86_64
epel-7-aarch64
epel-7-x86_64
epel-8-aarch64
epel-8-x86_64
fedora-32-aarch64
fedora-32-armhfp
...
```

* You can use aliases
  * `fedora-stable` — supported versions of Fedora (e.g. Fedora 33 and 34)
  * `fedora-development` — development versions of Fedora, the branched version is used only when available (e.g. Fedora 35 +
    Rawhide)
  * `fedora-latest` — the last versioned Fedora (not a Rawhide), it's not relevant if it is released or still developed
  * `fedora-all` — `fedora-stable` + `fedora-development`
  * `epel-all` — all available versions of epel (currently `el-6`, `epel-7` and `epel-8`)

  The information about releases is get from Bodhi and because of the cache and
  required availability on Copr, it might take a while to get the newest state.

  By default, the `x86_64` architecture will be used, but you you can
  override the default e.g. `fedora-stable-aarch64`.


**production\_build** (in preview, no reporting yet)

Create a SRPM and submit an RPM build
to [Fedora Koji](https://koji.fedoraproject.org/koji/) build system.

At the moment it is not possible to run non-scratch production builds from upstream.
For more info, please see [the following issue](https://pagure.io/releng/issue/9801).
However, it is still possible to run scratch builds.

Supported triggers:

* **pull_request** -- check out content of the pull request
* **commit** -- reacts to new commits to the specified branch
* **release** -- check out content of the tag associated with the release

Required metadata:

* **branch** -- the name of the branch we want to build for when using **commit** trigger

Optional metadata:

* **targets** -- a (list of) targets we want to build for,
  list of supported targets can be listed using with `koji list-targets`
* **scratch** -- defaults to `false`, use to create scratch (test) builds
  instead of the real production builds

**propose_downstream**

Land a new upstream release in Fedora. This job only makes sure the changes
happen in Fedora dist-git - no builds. The global key `create_pr` controls
whether a pull request is created or changes are pushed directly.

Supported triggers: **release**.

Optional metadata:

* **dist_git_branches** - a (list of) branch(es) in dist-git where packit should work (defaults to `main`).
  You can also use `fedora-development`, `fedora-stable` and `fedora-all` aliases
  to not need to change the config file when the new system version is released.

**Example**

```yaml
jobs:
- job: propose_downstream
  trigger: release
- job: propose_downstream
  trigger: release
  metadata:
    dist_git_branches:
      - f32
```

This config would update Fedora Rawhide and Fedora 32 dist-git branches.

**tests**

See more about tests [here](http://packit.dev/testing-farm/).

## User configuration file

When running packit as a tool locally, it is convenient to use a configuration
file to provide data such as API tokens. Packit respects `XDG_CONFIG_HOME`
environment variable. If not set, it looks inside `~/.config/` directory.

The acceptable names are the same as for the package config:

* `.packit.yaml`
* `.packit.yml`
* `.packit.json`
* `packit.yaml`
* `packit.yml`
* `packit.json`


### Values

 Key name                     | Type            | Description
------------------------------|-----------------|----------------------------------------------------------------------
 `debug`                      | bool            | enable debug logs
 `fas_user`                   | string          | username in Fedora account system (to perform kinit if needed)
 `authentication`             | dict            | tokens for services (GitHub, Pagure)
 `upstream_git_remote`        | string          | name of the git remote to discover upstream project URL from

The `authentication` is a dictionary where:
* key is a hostname, url or name that can be mapped to a service-type, for example `github.com` or `pagure`
* value is a dictionary with keys: `token` and `instance_url` (optional)

e.g.:
```yaml
authentication:
    github.com:
        token: mnbvcxz123456
    pagure:
        token: qwertyuiop098765
        instance_url: https://src.fedoraproject.org
```

The GitHub token is needed when packit interacts with Github API,
get it at https://github.com/settings/tokens (getting full read & write repo scope should be enough).
The Pagure token needed to access REST API,
get it at https://src.fedoraproject.org/settings#nav-api-tab

Specifying tokens as direct keys `github_token` and `pagure_user_token`
has been deprecated and will be removed in future versions.

Since API tokens are a very sensitive information, please do NOT ever store
them in a public (such as a GitHub repository). The configuration file here is
located on your workstation, please do NOT confuse it with a config file for
your project - that one is described above in the first section of this
document.

#### Server-side configuration

These values are used to configure packit service. No need to bother with them, they serve as a documentation for us, packit service developers.

 Key name                     | Type            | Description
------------------------------|-----------------|----------------------------------------------------------------------
 `keytab_path`                | string          | path to a Kerberos keytab file (requires `fas_user` to be set)
 `github_app_id`              | string          | github app ID used for authentication
 `github_app_cert_path`       | string          | path to a certificate associated with a github app
 `webhook_secret`             | string          | when specified in a Github App settings, GitHub uses it to create a hash signature with each payload
