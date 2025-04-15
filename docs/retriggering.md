---
title: Retriggering
sidebar_position: 7
---

## Comments
In general, you can put a `/packit <job-you-want-to-trigger>` comment
to trigger the Packit job manually.

### copr_build
So for [Copr builds](/docs/configuration/upstream/copr_build), Packit is able to trigger new builds based on a pull request comment:

    /packit copr-build

or the shorter version

    /packit build

So whenever you run into a flake or feel like you want to retrigger, just type
that comment into the PR and enjoy some fine, fresh builds.

It is also possible to re-trigger only the failed builds using a pull request comment

    /packit rebuild-failed

The same can be used to retrigger jobs configured with either `commit` or `release` 
trigger by specifying the respective arguments, using commit comments:

    /packit build --commit <branch-name>

or

    /packit build --release <tag-name>

If no additional arguments are provided, Packit defaults to the commit trigger on the repository's 
default branch. The job will execute only if a corresponding job configuration exists for the 
specified branch or release and if the commit is included on the specified branch or tag.

### propose_downstream
For [`propose_downstream`](/docs/configuration/upstream/propose_downstream), you need to place this comment to any issue: 

    /packit propose-downstream


### tests

For retriggering the [`tests`](/docs/configuration/upstream/tests) jobs, you can use a pull-request comment:

    /packit test
    

And to re-trigger only the failed tests, you can use

    /packit retest-failed

For testing, there is possible to specify also other arguments for more advanced use-cases, see 
the details [here](/docs/configuration/upstream/tests#running-tests-with-builds-from-another-pull-request).

The same can be used to retrigger jobs configured with either `commit` or `release` 
trigger by specifying the respective arguments, using commit comments:

    /packit test --commit <branch-name>

or

    /packit test --release <tag-name>

If no additional arguments are provided, Packit defaults to the commit trigger on the repository's 
default branch. The job will execute only if a corresponding job configuration exists for the 
specified branch or release and if the commit is included on the specified branch or tag.

### upstream_koji_build

For retriggering the [`upstream_koji_build`](/docs/configuration/upstream/upstream_koji_build) jobs, you can 
again use a pull-request comment:

    /packit upstream-koji-build

### vm_image_build

[VM Image builds](/docs/configuration/upstream/vm_image_build) are not triggered automatically at all.
To trigger them, you need to post a pull-request comment:

    /packit vm-image-build

every time.


:::caution

The requirements stated [above](#approval) apply, so if you see this message

    Only users with write or admin permissions to the repository can trigger
    Packit-as-a-Service

it means the author of the comment does not have write access to the
repository so the build cannot be scheduled. This is a perfect case for
maintainers of the repository to post `/packit build` in the PR to get a build.

:::

### pull_from_upstream
Packagers can retrigger the job
via a comment in any dist-git pull request:

    /packit pull-from-upstream

This will take the Packit configuration file from the default branch of the dist-git
  repository (`rawhide`), same as if the job was triggered by a new release. To use the configuration file from the dist-git pull request you are commenting on, you can add an argument:

    /packit pull-from-upstream --with-pr-config

### koji_build

Packagers can retrigger a build by a comment in a dist-git pull request:

    /packit koji-build

The build will be triggered for the target branch of the pull request using the most recent commit on the target branch
(NOT the HEAD commit of the pull request). 

If Packit created an issue in the configured `issue_repository`, you can place the same comment in that
issue to retrigger the builds (see [`issue_repository`](/docs/configuration#issue_repository) for details).

### bodhi_update
Packagers with write access to the dist-git repository can retrigger an update by a comment in a dist-git pull request:

    /packit create-update

The update will be triggered for the target branch of the pull request. 

If Packit created an issue in the configured `issue_repository`, you can place the same comment in that
issue to retrigger the updates (see [`issue_repository`](/docs/configuration#issue_repository) for details).


##  GitHub Checks UI
In GitHub Checks interface, it is also possible to re-trigger a specific task just by clicking on `Re-run`
for the particular check:

![Re-run GitHub check](img/github/github-check-rerun.png)

The button is available only for users with write permissions to the repository.
