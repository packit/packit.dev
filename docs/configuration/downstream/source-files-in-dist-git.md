---
title: Tracking Source files in dist-git
sidebar_position: 5
---

# Tracking `Source` files in dist-git instead of the lookaside cache

By default, every file referenced by a `Source*` tag in the spec file is
uploaded to the lookaside cache during a release synchronization
(`propose_downstream` / `pull_from_upstream`), **unless** the file is already
tracked by Git in the dist-git repository.

This is the right default for tarballs (`Source0`) and large binary artifacts,
but it is not what you want for small, text-like files that ship together with
the spec file in dist-git, such as:

- `systemd` unit files (`pkg.service`, `pkg.socket`, …)
- `tmpfiles.d` / `sysusers.d` snippets
- desktop entries (`pkg.desktop`)
- ad-hoc configuration templates referenced from `%install`

If you simply add such a file as a new `Source` in the upstream spec file and
let Packit propose the update, the file ends up in the lookaside cache the
first time the change is synced downstream. On subsequent updates the file is
already tracked by Git in dist-git, so the issue does not occur again — but the
initial upload is hard to undo.

This guide shows how to use Packit [actions](/docs/configuration/actions) to
keep a new `Source` file in dist-git's Git history right from the first
synchronization. The same recipe is the recommended workaround for
[packit/packit#2365][packit#2365].

## How Packit decides where a `Source` file goes

When Packit handles sources during release synchronization, it:

1. downloads remote sources (those with a URL) into the dist-git working
   directory,
2. inspects which of those files are already present in dist-git's **Git
   index** (`git_tracked_files`),
3. runs the [`post-modifications`](/docs/configuration/actions#post-modifications)
   action,
4. collects local sources (without a URL) that exist in the dist-git working
   directory but are not in the Git index,
5. uploads everything from steps 2 and 4 to the lookaside cache.

The key observation is step 2 and step 4: anything that is **already in the
Git index of dist-git** by the time `_handle_sources` runs is excluded from the
lookaside-cache upload.

## The recipe

Add the new file to your upstream repository, list it in
[`files_to_sync`](/docs/configuration/#files_to_sync) so that Packit copies it
into dist-git, and use a Packit action to `git add` the file on the dist-git
side **before** sources are processed:

```yaml
specfile_path: pkg.spec
files_to_sync:
  - pkg.spec
  - pkg.service       # ship the systemd unit alongside the spec
upstream_package_name: pkg
downstream_package_name: pkg

actions:
  # Stage the file in dist-git's Git index so Packit treats it as VCS-tracked
  # and does NOT upload it to the lookaside cache.
  post-modifications:
    - bash -c 'cd "${PACKIT_DOWNSTREAM_REPO}" && git add pkg.service'
```

After the first successful `propose_downstream`/`pull_from_upstream` run,
`pkg.service` is committed to dist-git. The action keeps working on subsequent
runs (`git add` of an unmodified, already-tracked file is a no-op), so it is
safe to leave it in the configuration permanently.

### Which action should I use?

`post-modifications` runs after upstream archives have been downloaded and
filtered, but **before** local `Source` files are collected for the lookaside
upload. This makes it the natural choice for files referenced as
`Source: pkg.service` (no URL).

If the file is referenced by a **URL**, e.g.
`Source1: https://example.com/pkg.service`, Packit will treat it as a remote
upstream archive and filter the Git-tracked list *before* `post-modifications`
runs. In that case, use [`pre-sync`](/docs/configuration/actions) instead and
stage the file from `${PACKIT_UPSTREAM_REPO}` into `${PACKIT_DOWNSTREAM_REPO}`
yourself:

```yaml
actions:
  pre-sync:
    - bash -c 'cp "${PACKIT_UPSTREAM_REPO}/pkg.service" "${PACKIT_DOWNSTREAM_REPO}/"'
    - bash -c 'cd "${PACKIT_DOWNSTREAM_REPO}" && git add pkg.service'
```

The variables `PACKIT_UPSTREAM_REPO` and `PACKIT_DOWNSTREAM_REPO` are exposed
to every release-synchronization action — see
[Release-synchronization actions](/docs/configuration/actions#release-synchronization-actions).

### Multiple files

For more than one file, list them in `files_to_sync` and stage them in a single
command. Using `git add -- <paths>` keeps the action robust against future
files that match dot-prefixes or unusual names:

```yaml
files_to_sync:
  - pkg.spec
  - pkg.service
  - pkg.socket
  - pkg.sysusers

actions:
  post-modifications:
    - bash -c 'cd "${PACKIT_DOWNSTREAM_REPO}" && git add -- pkg.service pkg.socket pkg.sysusers'
```

## Verifying the result

When the synchronization PR is opened in dist-git, check:

1. the dist-git commit contains the new file (it is *added*, not just present
   in the working tree),
2. the dist-git `sources` file is **not** updated to reference the new file,
3. the lookaside cache for the package does not contain the new file.

If the file still ends up in the lookaside cache, double-check that:

- the file is listed in `files_to_sync` and the path matches what is in
  dist-git after the sync,
- the action runs in `${PACKIT_DOWNSTREAM_REPO}` (the dist-git checkout), not
  in the upstream working directory,
- the file is referenced as a plain `Source:` (no URL) — see the note about
  `pre-sync` above for URL-based sources.

[packit#2365]: https://github.com/packit/packit/issues/2365
