---
title: Source-git patch metadata
weight: 3
---

# Source-git patch metadata

Patch metadata have been superseded by
[Git-native trailers]({{< ref "source-git/work-with-source-git/control-patch-generation" >}}).
This old patch metadata format is still supported if none of
the Git-trailers are found in any of the commits.

The metadata are a way for users and creators of source-git repos to be in
control of how packit generates patch files from downstream commits. Users are
not meant to set most of these - our tooling does that:
[dist2src](https://github.com/packit/dist-git-to-source-git) and `packit
source-git init`.

Ideally maintainers would just commit changes to source-git repos and have
`%autosetup` to apply all the patches during `%prep`.

Example of patch metadata in one of commits in systemd source-git for CentOS
Stream 8:
```
$ git log HEAD

commit 38e6b5b3059410530e0d5287de595cbf4574988b (HEAD -> c8s, upstream/c8s)
Author: Lennart Poettering <lennart@poettering.net>
Date:   Mon Feb 4 10:23:43 2019 +0100

    pam-systemd: use secure_getenv() rather than getenv()

    And explain why in a comment.

    (cherry picked from commit 83d4ab55336ff8a0643c6aa627b31e351a24040a)

    CVE-2019-3842

    Resolves: #1687514

    patch_name: 0563-pam-systemd-use-secure_getenv-rather-than-getenv.patch
    present_in_specfile: true
    location_in_specfile: 563

diff --git a/src/login/pam_systemd.c b/src/login/pam_systemd.c
...
```

You can see the patch metadata are stored in the commit message on the last 3
lines.

## Metadata

The metadata are stored in commit messages and have a key-value format parsed as
yaml. The list of keys follows.

### `patch_name`

**Type**: str

**Default**: the default comes from `git-format-patch`: "By default, each
output file is numbered sequentially from 1, and uses the first line of the
commit message"

**Content**: file name of the patch

**Example**: "my-fancy.patch"

Patch file generated from the commit will have this name. This
is useful when a patch is already defined in the spec file and we need to make
the patch file match that `Patch` spec file entry.

It is also used to merge multiple adjacent commits to a single patch file, by
setting the same value for `patch_name` in their metadata.

### `description`

**Type**: str

**Default**: empty string

**Example**: "This patch is cherry-picked from upstream commit ea45faaa and
resolves build failures on arm."

Human-friendly description of the patch file to be put above the spec file entry.

### `present_in_specfile`

**Type**: bool

**Default**: false (the default behaviour does not expect the patch is defined
in the spec)

**Example**: false

Is the patch present in spec? If yes, then don't create a new entry in the spec
file. If no, add it to the spec.

### `ignore`

**Type**: bool

**Default**: false

**Example**: true

Skip this git commit when processing patches. This is handy for commits which
change files in source-git repos but are not in an archive or are not meant to
be utilized in `%prep`.

### `squash_commits` (deprecated)

**Type**: bool

**Default**: false

**Example**: false

This key is **deprecated** as of `packit 0.35.0`, and replaced by setting the
same [`patch_name`](#patch_name) in the commit message of adjacent commits, which should end
up in the same patch file.

This option is meant to be used to support `git-am` patch applications.
`git-am` enables you to have multiple git commits for a single patch file.
When creating source-git repos with `packit source-git init`, only the last
commit of a patch would be annotated with metadata.

Example:

```
40c3a04 (HEAD -> main) patch 3, commit 3           ┃  this is a single patch file
61647c6 patch 3, commit 2                          ┃  consisting of 3 commits
89e9eff patch 3, commit 1\n\nsquash_commits: true  ┣━ because all leading commits are merged into the first patch
8afd939 patch 2, commit 1\n\nsquash_commits: true  ┣━ a single commit patch
3a2cff0 patch 1, commit 2\n\nsquash_commits: true  ┣━ commit 1 and commit 2 are part of the first patch
b2b8e06 patch 1, commit 1                          ┃
d689043 downstream packaging\n\nignore: true
b677988 (tag: 0.1.0) upstream release 0.1.0
```

### `no_prefix`

**Type**: bool

**Default**: false

**Example**: true

Do not prepend leading `a/` or `b/` in the patch files. Use this when applying
patches with `%patch -p1`.


## Dropped metadata

### `location_in_specfile`

This attribute meant to represent ID of the patch within a spec file but it
never worked like that so we dropped it completely. The problem was that rpm
does not provide such information when applying patches: it provides a number
which is an unrelated internal iterator. We are planning to supersede
`location_in_specfile` with `patch_id`:
https://issues.redhat.com/browse/PACKIT-1376
