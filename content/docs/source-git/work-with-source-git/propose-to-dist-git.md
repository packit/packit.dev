---
title: "Propose your source-git content to dist-git"
date: 2021-01-27T23:59:59+01:00
draft: false
weight: 3
---

# Propose your source-git content to dist-git

Once your changes are merged into a source-git repo, the final step is to
propose those changes to dist-git and get a production build.

For both, we have CLI commands in Packit which are meant to be run from the
source-git's repo checkout.


### Propose...

    $ packit propose-downstream --dist-git-branch main

The command above will take content of your source-git repository and creates a
pull request for the matching dist-git repo (and dist-git's branch) with the
spec file, additional sources and downstream patches.

If you want to change something in the spec file, this is the right time to
bump release, add a `%changelog` entry or adjust macros. Packit will copy the
content of the source-git spec file downstream.

Once the PR is up, you should wait for all the builds and tests to finish and
succeed to be sure that all is good. When all checks shine with green, you are
welcome to merge and celebrate for doing an update using source-git.


### ...and build

You can either check out the dist-git repository yourself and perform `fedpkg
build` as you're used to doing or run the following command from the same
terminal session:

    $ packit build --dist-git-branch main
