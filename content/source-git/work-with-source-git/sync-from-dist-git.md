---
title: Sync back changes made in dist-git
date: 2022-02-22
weight: 60
---

# Sync back changes made in dist-git

Although we recommend for all packaging work to be done in source-git once it
was decided to adopt the source-git workflow, some changes are going to keep
happening in dist-git, like the bumping of release numbers by
[provenpackagers](https://docs.fedoraproject.org/en-US/fesco/Provenpackager_policy/)
during re-builds.

In order to prevent the content of the source-git repository from diverging
from dist-git, these changes need to be synced back to source-git.

Use the `packit source-git update-source-git` command to do this:

    $ packit source-git update-source-git <DIST_GIT_REPO_PATH> <SOURCE_GIT_REPO_PATH> <RANGE>

The command works offline, so it's up to the developer to inspect and push the
changes synced back to source-git (or open an MR).

The command above will refuse to update the source-git repository, if any of
the dist-git commits in `<RANGE>` changed the source of the package or any of
the patch-files. We expect such changes to be done in source-git, or if they
need to happen in dist-git, to be synced back manually.
