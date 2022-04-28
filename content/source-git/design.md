---
title: Source-git design
date: 2018-12-31T23:59:59+01:00
weight: 1
---

# Source-git design

This document serves as a detailed description of source-git. Please bear in
mind that some things are a subject to change. Paragraphs marked with "‼️💣️"
are known to require further work to be better defined.

## What is source-git?

Source-git is a repository format and the related processes, tooling and bots,
that are intended to enable using forks of the upstream projects to maintain,
update and build packages in a distribution. By "distribution" we mean
distributions in the RHEL ecosystem (Fedora Linux, CentOS Stream and RHEL),
but the tools and processes probably could be applied to any RPM based
distribution.

## Motivation

Traditionally dist-git is the format used to maintain, develop and release
software in these distributions. In dist-git the source archive of an upstream
release is stored in the lookaside cache, while downstream (distribution
specific) changes are checked-in as patch files in Git. This layout resembles
SRPMs, and so it's easily consumed by build systems, but it makes it somewhat
difficult for humans to make sense of the content. Additionally, transforming
upstream content (which most of the time originates from a Git repo) to
dist-git has become a tedious activity, with a plethora of tooling available
to do very similar things.

The dist-git format also has the side effect of making the adoption of modern
Git-workflows somewhat more difficult (reviewing changes in patch-files
requires a higher cognitive effort) and raising the bar for new contributors,
who know how to contribute using Git, but need to learn about dist-git before
touching any package.

With source-git the goal is to:
- Enable using these well-known Git-workflows in packaging activities.
- Automate and standardize the tedious task of converting from one repository
  format to the other.
  
If you think about it, "source-git" is really just good old plain "Git", used
as it meant to be used by Linus.

## Premises

One of the fundamentally useless manual activities when maintaining a package
in Fedora is transforming source code from one Git repository format to
another.  Git is distributed. Dist-git content is mostly boilerplate or
regurgitated data.

Using an upstream format during packaging makes collaboration easier, and
lowers the entry barrier for new contributors by enabling a development
workflow which they are already familiar with.

Linux distributions gain an advantage from having patches incorporated
upstream and not carrying them downstream.

Human effort should not be focused on repetitive, automatable tasks related to
churn and moving code around.

Dist-git is used as a store of state for build tools (like Koji). Reinventing
dist-git itself fundamentally, would mean reinventing a lot of tooling.

## An addon to dist-git

We recognize, that an extensive ecosystem of tooling and services was
developed to work with dist-git, and because of this replacing dist-git in the
immediate future is not feasible. On the long run though, once source-git
proved itself, this can become possible.

This is why we think about source-git as *an addon to dist-git*.

Content of source-git repository is equivalent to dist-git, but uses upstream
format: source files instead of tarballs, Git commits instead of patches.

Bots are responsible to transform and maintain content in dist-git, so that
humans can do all the work in source-git. If bots fail, humans can still step
in and do the work. Bots and humans use the same tools to do the
transformation.

All tooling already in place that interacts with dist-git continues to
interact with dist-git. Bots are responsible to bring CI results from dist-git
to source-git for convenience.

This means that using source-git to maintain a package adds an overhead
compared to directly working in dist-git. Though on the positive side, enables
packagers and contributors to use a Git workflow they are already familiar
with from upstream projects.

Source-git might not be a solution for many packages at the early stages, and
might not be a solution at all for some packages. This is why, *source-git is
opt-in*, and can be opted out at any point in time if so decided.

## Repository location

Source-git repositories are hosted and shared in a Git forge chosen by the
distribution. This helps the community developing the distribution to be in
control of these repositories.

Teams of developers maintaining packages in multiple distributions can choose
to have a single repository at a location of their choice, have dedicated
branches for each distribution, and sync these branches to the source-git
repositories of each distribution. 

## Layout

A source-git repository is based on a fork of the upstream project.

The files required to create the package for the distribution are stored in
the `.distro` directory.

This includes:

* the spec file,
* other files required to be present in dist-git (test files, scripts used in
  building the package, package configuration etc.),
* a `source-git.yaml` file to configure how the content of the repo should be
  transformed to dist-git.

## History and branching

By default, branching in source-git mirrors branching in dist-git. In a
source-git context, let's call these branches "downstream branches".

Downstream branches share their history with the upstream release they are
based upon, and contain additional commits to add the `.distro` directory and
its content, and to introduce downstream changes to the upstream source code.

![Source-git example](/source-git-diagram.png)

When transforming content to dist-git, tooling
* prepares and uploads the source archive to dist-git's lookaside cache;
* generates patch files for downstream changes, if any, and updates the spec
  file accordingly (changes to `.distro` are filtered out);
* updates other files in dist-git with the content of `.distro` (except
  `source-git.yaml`).

The way patch files are generated and included in the spec file is controlled
by Git-trailers in the commit messages of downstream commits.

## Configuration

`.distro/source-git.yaml` tells tooling how to interact with the source-git
repo, including:

* where to pull upstream changes from;
* how the content of the source-git repo should be transformed to dist-git;
  * how to generate or get the source archive to be uploaded to the lookaside
    cache;
  * how to generate patches from downstream commits;
* the dist-git repo and branch tracked.

The configuration format is based on the [Packit configuration]({{< ref
configuration.md >}}).

Placing this configuration file in a branch in source-git indicates that the
source-git branch should be auto-maintained. The configuration file may be
removed to turn off auto-maintenance of the branch.

For an example see [Configure syncing to distgit]({{< ref
"create-source-git.md#configure-syncing-to-dist-git" >}}).

‼️💣️ Content from a source-git repository can be committed to a dist-git
repository only if the target dist-git branch makes a reference to the
source-git repo and branch from which the update originates.

> TODO: have an explicit documentation of `source-git.yaml`.

## Workflows

Contribution to source-git happens through pull requests (aka. merge
requests).

Bots create mirror PRs in dist-git for each source-git PR opened, and make CI
results of those mirror PRs available in source-git.

‼️💣️ Changes merged in source-git are synced to dist-git.

Updates created in dist-git are synced back to source-git via pull requests
opened by bots. This functionality serves to accommodate changes done by
provenpackagers across multiple repositories.

Commits need to be signed in order to be transformed to dist-git.

Bots sign the commits they create.

> TODO: Rebase or merge?
