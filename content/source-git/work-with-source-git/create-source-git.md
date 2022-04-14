---
title: Create a source-git repo
date: 2020-02-20
weight: 5
---

# How to create a source-git repository?

This guide walks through the steps to create a source-git repository from an
upstream project.

> We have a dedicated command which automates most of the steps described below:
> [`packit source-git init`]({{< ref "/docs/CLI/source-git/init.md" >}})

Consider joining the [Fedora Source-git SIG] if you are interested in the
development of the source-git workflow.

The process to construct a source-git repository and a branch to track
downstream (distribution) work, which then can be synced to dist-git has the
following steps:

1. Identify the upstream Git repository and Git commit corresponding to the
   current version of the software, as available in the distribution.
2. Create and populate a `.distro` subdirectory in the upstream working tree
   to hold the files needed to package and test the software in the
   distribution.
3. Configure syncing to dist-git in `.distro/source-git.yaml`.
4. Remove the references to the downstream (distribution) patches from the
   spec-file and apply these patches as Git-commits.
5. Test the source-git repository by trying to sync the content to the
   corresponding dist-git repository.

As an example, let's see the steps one would need to take to create a source-git
repository for [acl] and a branch to track distribution work in Fedora Rawhide.

## Identify the upstream Git repository and version

Let's search for an official project URL for *acl* [in the spec-file for Fedora
Rawhide]. This could be done by using the web interface for
[src.fedoraproject.org], too, but as the dist-git repository is needed later on,
it makes sense to clone it using `fedpkg`:

    $ mkdir rpms
    $ fedpkg clone -a acl rpms/acl
    Cloning into 'rpms/acl'...
    remote: Enumerating objects: 699, done.
    remote: Counting objects: 100% (699/699), done.
    remote: Compressing objects: 100% (473/473), done.
    remote: Total 699 (delta 359), reused 442 (delta 207), pack-reused 0
    Receiving objects: 100% (699/699), 129.66 KiB | 316.00 KiB/s, done.
    Resolving deltas: 100% (359/359), done.
    $ git -C rpms/acl status
    On branch rawhide
    Your branch is up to date with 'origin/rawhide'.

    nothing to commit, working tree clean

The dist-git repo is cloned in an `rpms` directory, and the corresponding
source-git repository will be created in a `src` directory later on. This
directory structure helps to keep multiple dist-git and source-git
repositories separate and nicely organized.

The `URL` tag in the spec-file tells, that [acl] is hosted at
https://savannah.nongnu.org/projects/acl. Following the links from that page
we can look up the URL of the project's Git repository, and use the `https`
one to clone it:

    $ mkdir src
    $ git clone https://git.savannah.gnu.org/git/acl.git src/acl
    Cloning into 'src/acl'...
    remote: Counting objects: 3687, done.
    remote: Compressing objects: 100% (962/962), done.
    remote: Total 3687 (delta 2705), reused 3687 (delta 2705)
    Receiving objects: 100% (3687/3687), 707.18 KiB | 1.22 MiB/s, done.
    Resolving deltas: 100% (2705/2705), done.
    $ git -C src/acl status
    On branch master
    Your branch is up to date with 'origin/master'.

    nothing to commit, working tree clean

From the version field of the spec-file we can tell that Fedora Rawhide has
*acl* version 2.3.1. We search the upstream Git repository for the tag which
points to the commit corresponding to this version. This commit is going to be
the starting point of the `rawhide` branch on which the distribution work
in Fedora Rawhide is going to be tracked.

    $ cd src/acl
    $ git tag --list | grep 2.3.1
    v2.3.1
    $ git checkout -B rawhide v2.3.1
    Switched to a new branch 'rawhide'


## Create and populate the `.distro` subdirectory

In source-git, files required to package and test the software in a
distribution are stored in a `.distro` subdirectory. This allows keeping these
files separate from the source code. The distribution agnostic name was
chosen in order to enable the easy sharing of the packaging work between
different distributions.

Let's create and populate this directory:

    $ mkdir .distro
    $ rsync --archive --delete \
            --filter 'exclude *.patch' \
            --filter 'exclude sources' \
            --filter 'exclude .git*' \
            ../../rpms/acl/ .distro/
    $ tree -a .distro/
    .distro/
    ├── acl-2.3.1.tar.gz.sig
    ├── acl.spec
    └── tests
        ├── cmd-line-options
        │   ├── Makefile
        │   ├── PURPOSE
        │   ├── runtest.sh
        │   └── test-core.sh
        └── tests.yml

    2 directories, 7 files

A quick explanation of the filters used in the rsync-command above:
- Patch-files are not copied from dist-git. They will become part of the
  source-git repository as Git commits at a later step.
- The `sources` file, used in dist-git to reference the source-archives in the
  lookaside-cache is excluded. Upstream sources are part of the working tree
  in source-git.
- The `.git` directory of the dist-git repo, and other `.git*` files are
  excluded. These are specific to the dist-git repository. They are
  re-created later on, as needed, using a content specific to source-git.

As gitignore rules in the upstream repo and dist-git might be different, we
need to reset these for the `.distro` directory. In the case of *acl* for
example the top-level `.gitignore` has a rule to exclude `Makefile`s, but the
tests in dist-git have a `Makefile`, which need to become part of the
source-git repo.

Because the `.gitignore` file in dist-git has no other ignore rules than the
one for the source-code archives, there are no other rules to be added to
`.distro/.gitignore`.

    $ cat > .distro/.gitignore
    # Reset gitignore rules
    !*

## Configure syncing to dist-git

Now, let's create the configuration which is going to be used when syncing
content to dist-git. This is used to control certain aspects of syncing
content to dist-git when using `packit source-git update-dist-git`.

Create a file called `.distro/source-git.yaml` with the following content:

```yaml
---
upstream_project_url: https://git.savannah.nongnu.org/git/acl.git
upstream_ref: v2.3.1
downstream_package_name: acl
specfile_path: .distro/acl.spec
patch_generation_ignore_paths:
  - .distro/
patch_generation_patch_id_digits: 1
sync_changelog: true
files_to_sync:
  - src: .distro/
    dest: .
    delete: true
    filters:
      - "protect .git*"
      - "protect sources"
      - "exclude source-git.yaml"
      - "exclude .gitignore"
```

`upstream_project_url` is the URL of the upstream repository. This is saved to
be used by future operations.

`upstream_ref` is the Git ref to be used to tell where upstream history ends
and downstream history starts. Packit uses this value to tell which version of
the source-archive to download from the URL specified in `Source`, in order to
be uploaded to dist-git's lookaside-cache.

`downstream_package_name` tells `packit` the name of the package.

`specfile_path` specifies where the specfile is to be found.

`patch_generation_ignore_paths` lists the paths which should be ignored when
generating downstream patches, to be added in dist-git. As `.distro` is the
place where the files related to packaging are stored, set the configuration
to ignore this path, so that there are no patch files generated for it.

`patch_generation_patch_id_digits` tells Packit how many digits are used, at
minimum, when adding `PatchN` tags to the spec-file. The patch in `acl` is in
the form of `Patch1`, doesn't have a minimum width, so set this value to 0.

Setting `sync_changelog` to `true` tells Packit to sync the changelog in the
spec-file as is. This disables Packit's functionality to automatically update
the changelog when syncing to dist-git.

`files_to_sync` controls the way files are synced when updating dist-git. In
the context of the current source-git structure this means to syncing the
content of `.distro` with the root of the dist-git repo. This is what the
`src` and `dest` fields configure.

`delete: true` causes files not in `src` to be deleted from `dest`.

`filters` is a list of `rsync` filters to be used to protect paths in `dest`
and exclude paths in `src` from the sync operation.

You can think about the `files_to_sync` section as describing the reverse of
the rsync-command used to copy content from dist-git to `.distro`.

We plan to make most of this configuration implicit, so most of it might
not be required in the future.

## Update the spec-file and apply the downstream patches

In dist-git downstream changes are stored as patch-files, which then are
referenced in the spec-file and applied during `%prep` when building the
package. In source-git we want the same changes to become Git commits in the
repository. This also means, that it would be semantically weird to reference
the patch-files in the spec-file. As there are no patch-files in the
source-git repo.

So let's remove the following lines from `.distro/acl.spec`:

```
# avoid permission denied problem with LD_PRELOAD in the test-suite
Patch1: 0001-acl-2.2.53-test-runwrapper.patch

```

Pay attention not to modify any other part of the spec-file, except deleting
these lines. Saving `.distro/acl.spec` with an editor which is configured to
strip white-space from the end of lines will result in unnecessary diff-chunks
when syncing content back to dist-git.

Note, that *acl* is using `%autosetup` to apply the patches in `%prep`, this
is why the `%prep` section doesn't need an update. Because `packit source-git
update-dist-git` doesn't support adding the `%patch` macros when adding
patches to the spec-file during syncing, currently only packages using
`%autosetup` are supported. At the time of writing, adding support for `%setup`
is still not decided.

At this point, the `.distro` directory is ready, and can be commited as the
first commit on the `rawhide` branch.

    $ git add .distro/
    $ git commit -m'Initialize as a source-git repository'
    [rawhide c333206] Initialize as a source-git repository
     9 files changed, 736 insertions(+)
     create mode 100644 .distro/.gitignore
     create mode 100644 .distro/acl-2.3.1.tar.gz.sig
     create mode 100644 .distro/acl.spec
     create mode 100644 .distro/source-git.yaml
     create mode 100644 .distro/tests/cmd-line-options/Makefile
     create mode 100644 .distro/tests/cmd-line-options/PURPOSE
     create mode 100755 .distro/tests/cmd-line-options/runtest.sh
     create mode 100755 .distro/tests/cmd-line-options/test-core.sh
     create mode 100644 .distro/tests/tests.yml

The `rawhide` branch in the source-git repo has its first downstream commit
now:

    $ git log --oneline v2.3.1..
    c333206 (HEAD -> rawhide) Initialize as a source-git repository

Now, apply the only downstream patch from dist-git. We're using `git am` in
this case, but depending on the type of the patch-files in dist-git, you might
need to use `git apply`:

    $ git am ../../rpms/acl/0001-acl-2.2.53-test-runwrapper.patch

The `rawhide` branch now also has the downstream change in the source-code as
a commit:

    $ git log --oneline v2.3.1..
    7054794 (HEAD -> rawhide) test/runwrapper: copy the preloaded library
    c333206 Initialize as a source-git repository

The only thing left to do is to make sure that the patch-file generated from
this commit is going to keep its name (and not use the default name generated
by `git format-patch`), and that the [patch status] line is going to be
included above the patch when it's added back to the spec-file while syncing
to dist-git.

Packit understands [Git-trailers] which can be included in the commit
message, and used to tweak how patch-files are generated and included in the
spec-file. You can include the patch status with the help of the `Patch-status`
field, and specify the patch-file name with `Patch-name`.

One more Git-trailer that should be added in this step is
`From-dist-git-commit`, which can be used later on to tell which dist-git
commit was used to create this source-git repository.

Amend the last commit...

    $ git commit --amend

...and edit the commit message to include this field at the end of it.

```
test/runwrapper: copy the preloaded library

... to a temporary directory because the original location might
not be accessible by other users.

Patch-name: 0001-acl-2.2.53-test-runwrapper.patch
Patch-status: |-
    avoid permission denied problem with LD_PRELOAD in the test-suite
From-dist-git-commit: 08c7e74d0a58c9483d2f4f55a3fba2baffb09c3a

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Author:    Kamil Dudka <kdudka@redhat.com>
# Date:      Tue Jul 3 10:46:58 2018 +0200
#
# On branch rawhide
# Changes to be committed:
#	modified:   test/runwrapper
#
```

Save and exit.

## Test the source-git repository

Try creating an update in the dist-git repository from the source-git
repository you've just created. All the changes below are local.

    $ cd ../../
    $ packit --config src/acl/.distro/source-git.yaml source-git update-dist-git --pkg-tool fedpkg src/acl rpms/acl
    2021-05-21 17:19:49.158 api.py            INFO   Won't be doing kinit, no credentials provided.
    2021-05-21 15:19:50.103 distgit.py        INFO   Archive 'acl-2.3.1.tar.gz' found in lookaside cache (skipping upload).

Now check the dist-git repo to see if there are any changes:

    $ git -C rpms/acl status
    On branch rawhide
    Your branch is up to date with 'origin/rawhide'.

    nothing to commit, working tree clean

A clean working tree in this case means, that the transformation of source-git
to dist-git resulted in the same content. Which is good.

Try adding a new, dummy, change in source-git and update dist-git again, to
see a new patch being added:

    $ cd src/acl
    $ echo 'A dummy change' >> README
    $ git diff
    diff --git a/README b/README
    index abcfdc6..05c4af6 100644
    --- a/README
    +++ b/README
    @@ -11,3 +11,4 @@ information and references to other related manual
    pages.

     For more information on the build process, please refer to
      doc/PORTING.
      +A dummy change
    $ git commit -aF-
    (reading log message from standard input)
    Add a dummy change

    description: a patch to try things out
    [rawhide fb34af6] Add a dummy change
     1 file changed, 1 insertion(+)

    $ cd ../../
    $ packit --config src/acl/.distro/source-git.yaml source-git update-dist-git --pkg-tool fedpkg src/acl rpms/acl
    2021-05-27 16:46:38.574 api.py            INFO   Won't be doing kinit, no credentials provided.
    2021-05-27 14:46:39.747 distgit.py        INFO   Archive 'acl-2.3.1.tar.gz' found in lookaside cache (skipping upload).

Check the diff in dist-git and the new patch generated from source-git:

    $ git -C rpms/acl diff
    diff --git a/acl.spec b/acl.spec
    index 2bf7182..ac7bc75 100644
    --- a/acl.spec
    +++ b/acl.spec
    @@ -15,6 +15,9 @@ Source: https://download-mirror.savannah.gnu.org/releases/acl/acl-%{version}.tar
     # avoid permission denied problem with LD_PRELOAD in the test-suite
     Patch1: 0001-acl-2.2.53-test-runwrapper.patch

    +# a patch to try things out
    +Patch2: 0002-Add-a-dummy-change.patch
    +
     License: GPLv2+
     URL: https://savannah.nongnu.org/projects/acl

    $ cat rpms/acl/0002-Add-a-dummy-change.patch
    From fb34af687e2b650920775647a7c8d149c60403eb Mon Sep 17 00:00:00 2001
    From: =?UTF-8?q?Hunor=20Csomort=C3=A1ni?= <csomh@redhat.com>
    Date: Thu, 27 May 2021 16:42:19 +0200
    Subject: [PATCH 2/2] Add a dummy change

    description: a patch to try things out
    ---
     README | 1 +
     1 file changed, 1 insertion(+)

    diff --git a/README b/README
    index abcfdc6..05c4af6 100644
    --- a/README
    +++ b/README
    @@ -11,3 +11,4 @@ information and references to other related manual pages.

     For more information on the build process, please refer to
     doc/PORTING.
    +A dummy change
    --
    2.31.1

[acl]: https://savannah.nongnu.org/projects/acl
[Fedora Source-git SIG]: https://fedoraproject.org/wiki/SIGs/Source-git
[in the spec-file for Fedora Rawhide]: https://src.fedoraproject.org/rpms/acl/blob/rawhide/f/acl.spec
[src.fedoraproject.org]: https://src.fedoraproject.org/
[patch status]: https://docs.fedoraproject.org/en-US/packaging-guidelines/PatchUpstreamStatus/
[Git-trailers]: {{< ref "control-patch-generation" >}}
