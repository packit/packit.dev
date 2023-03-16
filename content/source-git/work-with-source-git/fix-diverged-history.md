---
title: Diverged history
date: 2023-03-14
weight: 70
---

# Diverged history

It can easily happen that the history of the source-git and dist-git
repositories get diverged.
See [this document](https://github.com/packit/research/tree/main/source-git-sync-status#example)
for more info about how packit checks the sync status.

Packit considers the histories of those repositories as diverged when
**both of them** have as a HEAD commit one of the following changes: 

* A change which has not been synced to the other repository.
* The change has been synced but the `From-[source|dist]-git-commit` git
  trailer is missing [for some reason](https://github.com/packit/packit/issues/1883).
* The change couldn't have been synced because it's "empty", i.e. it generates
  no change when synced to the other repo. Examples of such changes: 
  - a change in .distro/source-git.yaml or other file which is not synchronized between repositories
  - mass rebuild in a package which uses rpmautospec
    (results in an empty commit in the dist-git repo)

When you then try to synchronize those repositories either way, you get

    PackitException: '.../src/package' and '.../rpms/package' have diverged.
    Sync status needs to be reestablished manually.
    The first source-git commit to be synced is 'abc'.
    The first dist-git commit to be synced is 'xyz'.

To sync them manually try to re-run the command with the `-f/--force` switch,
which doesn't check the synchronization status.

If you need to synchronise the "empty" change, you have to manually add
an empty commit to the other repository
- `git commit --allow-empty -m "From-dist-git-commit HEAD"` - to the source-git
  repo OR 
- `git commit --allow-empty -m "From-source-git-commit HEAD"` - to the dist-git
  repo. Where `HEAD` is the sha of HEAD commit of the other repo.
There will be an easier way once
[packit/packit#1884](https://github.com/packit/packit/issues/1884) is implemented.
