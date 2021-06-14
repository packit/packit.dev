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

* And you are able to utilize all features of Packit Service: RPM builds
  of PRs, tests on those builds, and getting feedback in pull (merge) requests.


### Example

Let's have a look at source-git repo for systemd package:

    $ git log --online
    67e6197f91 Apply patch 0001-test-path-util-ignore-test-failure.patch
    419ec28428 Apply patch 0001-test-path-util-do-not-fail-if-the-fd_is_mount_point-.patch
    36d3e907dd Apply patch use-bfq-scheduler.patch
    419e249eea add packit.yaml
    49615ae7c6 add downstream distribution sources
    dc057df84c (tag: v247.1) scope: on unified, make sure to unwatch all PIDs once they've been moved to the cgroup scope

We can see 6 commits:
* 67e6197f91 - HEAD commit, a downstream patch
* 419ec28428 - a downstream patch
* 36d3e907dd - a downstream patch
* 419e249eea - a commit with packit.yaml
* 49615ae7c6 - all the downstream sources: spec file, presets, ...
* dc057df84c - upstream commit representing the 247.1 release followed by the rest of the upstream history

packit.yaml looks like this:

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
may be heavily intertwined. We are mentioning this because packit works with
the recent git history.

Packit is able to work with a git history where merge commits have parents
behind [`upstream_ref`]({{<ref "configuration.md#upstream_ref" >}}). When it
detects such state, packit creates an ephemeral branch with linear history and
generates patch files out of it. You can find more details in [the pull
request](https://github.com/packit/packit/pull/766) where this was developed.

Picking up latest upstream changes into your downstream source-git repo has
multiple solutions and it's up to you to pick the one which suits your workflow
best:

1. **Rebase against the main upstream branch** (a.k.a. `git pull --rebase
   upstream main`). This solution implies that you are able to perform the
   force-push operation (e.g. Fedora and CentOS dist-git instances don't allow
   force-pushes). This solution creates the cleanest git-history though
   force-pushing is not a best practices for working with a shared git-branch
   so we suggest to use this only when necessary (e.g. when updating to a new
   upstream release).
2. **Create a new branch for every upstream release**. No rebase needed — may
   require good branch hygiene since the number of branches can skyrocket. This
   is probably the easiest and most straightforward solution.
3. **Merge upstream changes** (a.k.a. `git merge upstream/main`). Does not
   alter existing git history, yet makes it more complicated. You also need to
   make sure that downstream code changes (meaning, downstream patches) need to
   be on top of the `upstream_ref` git ref so packit can process them
   correctly.


### Common "how-tos" with source-git

We have subsections covering common downstream maintainer use cases:
* [Updating a spec file]({{< ref "update-spec.md" >}})
* [Pulling fixes from upstream]({{< ref "pull-upstream-fixes.md" >}})
* [Building current source-git checkout locally]({{< ref "build-locally.md" >}})
* [Proposing your source-git content to dist-git]({{< ref "propose-to-dist-git.md" >}})

