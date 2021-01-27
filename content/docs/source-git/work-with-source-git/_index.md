---
title: "Working with source-git"
date: 2020-06-24T23:59:59+01:00
draft: false
weight: 3
bookCollapseSection: true
---

# Working with source-git

This document is focused on how Packit treats a source-git repo.

If you are looking for the design concept of source-git, please [read it
here]({{< ref "/docs/source-git/design.md" >}}).

The source-git concept is fairly simple - take an upstream repo and
shove downstream content on top of it. Easy right?

Packit is then able to work with such a repo and:

* Create SRPMs

* Sync the state into dist-git

* And you are able to utilize all features of Packit-as-a-Service: RPM builds
  of PRs, tests on those builds, and getting feedback in pull (merge) requests.

Let's describe all of these in detail.

### Example

Let's have a look at source-git repo for pacemaker package:

    $ git log --online
    bd12722 (HEAD -> c8s-test, origin/c8s-test, master) downstream packaging
    7201e28 Refactor: controller: remove unused argument
    91c557c Refactor: controller: convert active_op_t booleans to bitmask
    2e90063 Refactor: controller: rename struct recurring_op_s to active_op_t
    3ee90ce (tag: source-git-start) pacemaker-2.0.3 base

We have 5 commits:
* bd12722 - top commit, contains a spec file so Packit won't create a patch file out of this one
* 7201e28 - the 3rd downstream patch
* 91c557c - the 2nd downstream patch
* 2e90063 - the 1st downstream patch
* 3ee90ce - the bottom commit, equals to an unpacked upstream tarball

packit.yaml has only two lines:

    $ cat .packit.yaml
    ---
    specfile_path: "fedora/systemd.spec"
    upstream_ref: "v247.1"
    patch_generation_ignore_paths: ["fedora"]

As you can see, we are telling Packit, that commit tagged as `v247.1` should
resemble the 247.1 upstream release and the corresponding release tarball which
is used during the build process. Commits on top are converted to patch files
if they change code. [`patch-generation-ignore-paths:`]({{< ref
"configuration.md#patch-generation-ignore-paths" >}}) says that changes to this
paths (files, folders) should not be incorporated into patches: `fedora/`
folder contains all the downstream packaging content.


### Rebase or merge?

A common workflow in the world of open source development is to accept
[pull](https://guides.github.com/introduction/flow/) or
[merge](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html)
requests and have merge commits in the git history. If the PRs are not rebased
against the main branch before the merge, the merge commits in the git-history
may be heavily intertwined. Packit is able to work with such a state by
creating an ephemeral branch with linear history and generate the patch files
out of it. You can find more details in [the pull
request](https://github.com/packit/packit/pull/766) where this was developed.

Picking up latest upstream changes into your downstream source-git repo has
multiple solutions and it's up to you to pick the one which suits your workflow
best:

1. **Rebase against the main upstream branch** (a.k.a. `git pull --rebase
   upstream master`). This solution implies that you are able to perform the
   force-push operation (e.g. Fedora and CentOS dist-git instances don't allow
   force-pushes). Packit will not help you with the rebase process in any way
   and it's up to you to complete the rebase.
2. **Create a new branch for every upstream release**. No rebase needed — may
   require good branch hygiene since the number of branches can skyrocket. No
   dedicated help from Packit again, you are running all the `git` commands.
3. **Merge upstream changes** (a.k.a. `git merge upstream/master`). Does not
   alter existing git history, yet makes it more complicated.


### Common "how-tos" with source-git

We have subsections covering common downstream maintainer use cases:
* [Updating a spec file]({{< ref "update-spec.md" >}})
* [Pulling fixes from upstream]({{< ref "pull-upstream-fixes.md" >}})
* [Building current source-git checkout locally]({{< ref "build-locally.md" >}})
* [Proposing your source-git content to dist-git]({{< ref "propose-to-dist-git.md" >}})

