---
title: Propose your source-git content to dist-git
date: 2021-01-27T23:59:59+01:00
weight: 50
---

# Propose your source-git content to dist-git

Once your changes are merged into a source-git repo, the final step is to
propose those changes to dist-git and get a production build. Alternatively,
you can open a dist-git merge request just to trigger the dist-git checks or
see how the changes would look in dist-git.

If you want to change something in the spec file, this is the right time to
bump release, add a `%changelog` entry or adjust macros. Packit will copy the
content of the source-git spec to the dist-git repo.


### Update local dist-git checkout

The first step is to update a local clone of a dist-git repo:

    $ packit source-git update-dist-git $SOURCE_GIT_REPO_PATH $DIST_GIT_REPO_PATH

This command does not push any changes - everything happens only in your local
environment. We advise you to inspect the changes done in your dist-git repo
before pushing them out to be sure about them.

If you are satisfied with the changes, put them in a new branch, push them out
and create a merge request:

    $ git switch -C resolve-bz-1234567
    $ git push $USER_ID

The premise is that the remote of your fork is named `$USER_ID` as this is how
`centpkg fork` does it. Once pushed, create the merge request in your browser.

From this point, you should follow the standard dist-git contribution process.

Our team is working on simplifying this workflow so some steps described above
will be automated in the future.
