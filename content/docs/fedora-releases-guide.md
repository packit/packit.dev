---
title: How to do Fedora releases with Packit
weight: 9
---
# How to do Fedora releases with Packit

Let's split the release process into single steps:
1. New upstream release 
2. Uploading archive to lookaside cache
3. Updating dist-git content 
4. Koji builds
5. Bodhi updates

Doing Fedora releases with Packit means utilising our 3 jobs - `propose_downstream`, `koji_build` and 
`bodhi_update` - where each of the jobs takes care of a different part of the release process.

## Propose downstream job
For enabling the propose downstream job, you need to have
[Packit Service installed](/docs/guide/#1-set-up-packit-integration)
and have a `propose_downstream` job in the configuration file for the given upstream repository.
The [propose_downstream job](/docs/configuration/#propose_downstream) should be then configured like this:

```yaml
jobs:
- job: propose_downstream
  trigger: release
  dist_git_branches:
    - main
```
You can adjust the `dist_git_branches` field to include the
dist-git branches you want to update and also utilise [aliases](/docs/configuration/#aliases) 
instead of using hardcoded versions.

#### New upstream release
The process of releasing a new version starts in the upstream repository by creating a 
new upstream release. Packit gets the information about the newly created release (not a git tag) from GitHub,
loads the config from the release commit and if there is a `propose_downstream` job
defined, the workflow begins.
Users with write or admin permissions to the repository can retrigger an
update via a comment in any open issue:

    /packit propose-downstream

#### Uploading archive to lookaside cache
The upstream archive needs to be downloaded by Packit first and then uploaded to the lookaside cache.
By default, Packit downloads sources defined in the specfile that contain URLs.
You can override these URLs via [`sources`](/docs/configuration#sources) configuration key.

For Python packages, you can use a 
[GitHub action](https://packaging.python.org/guides/publishing-package-distribution-releases-using-github-actions-ci-cd-workflows)
([example setup of Packit itself](https://github.com/packit/packit/blob/main/.github/workflows/pypi-publish.yml))
that automatically builds and uploads the archive to PyPI 
on each new release. Then during propose downstream, Packit tries to download the archive from the provided URL.
If the download fails because the upstream archive is not available at the time of running the job, 
the job is scheduled to be retried later. 

#### Updating dist-git content
After saving the archive in the lookaside cache,
Packit updates the dist-git content (mainly `sources` file and spec file) via pull requests for the specified branches.
You can configure which files in the upstream repo should be copied to dist-git during an update
via [`files_to_sync`](/docs/configuration/#files_to_sync) configuration key.

The version in the spec file is set to the version that Packit gets from the upstream tag 
corresponding to the release that triggered the job. If the version and tag differ, 
you can specify the [`upstream_tag_template`](/docs/configuration/#upstream_tag_template)
configuration option so that Packit can extract the correct version.

If you use [`copy_upstream_release_description: true`](/docs/configuration/#copy_upstream_release_description),
the changelog entry will use the GitHub release description field.
(Just make sure the formatting is compatible with spec file.
E.g. use `-` instead of `*` for lists to not create multiple changelog entries.)
There is also [`sync_changelog`](/docs/configuration/#sync_changelog) configuration option to enable syncing 
the whole changelog.


During proposing a new update, you will get updates of the job status via commit statuses/checks
on the release commit. These will provide links to our dashboard where you can find all the information about 
the job including the logs. You can check all propose downstream runs in `Propose Downstreams` tab in [`Jobs` 
section of our dashboard](https://dashboard.packit.dev/jobs).

![Dashboard view for propose downstreams](/images/propose-downstream-dashboard.png)

After Packit successfully creates the dist-git pull requests, 
it's on downstream CI systems and maintainer(s) to check the changes and merge
the pull requests.

## Koji build job
After having the dist-git content updated, you can easily automate also building in Koji.
You can simply configure Packit to react to the new commits in your dist-git repository and create
Koji builds by having
a Packit configuration (when using `propose_downstream` job, you can configure Packit to sync the file) in your 
dist-git repository that includes a `koji_build` job.
Then, if Packit is informed (via fedora-messaging bus) about a new commit in the configured dist-git branch, it submits a new build in Koji
like maintainers usually do. (The commits without any spec file change are skipped.)

By default, only merged pull requests created by Packit are being acted upon, but 
you can override this behaviour by specifying
`allowed_pr_authors` and/or `allowed_committers` in the [job configuration](/docs/configuration/#koji_build). 

The [koji_build job](/docs/configuration/#koji_build) can be configured like this:

```yaml
jobs:
- job: koji_build
  trigger: commit
  dist_git_branches:
    - fedora-all
```

There is no UI provided by Packit for the job,
but it is visible across Fedora systems (as you can see in the following image).
The koji build behaves as it was created manually, and you can utilise
[Fedora Notifications](https://apps.fedoraproject.org/notifications/about)
to be informed about the builds. Also, you can configure a repository where should we
open issues in case of errors during the job via [`issue_repository`](/docs/configuration#issue_repository) configuration key.

You can retrigger a build by typing `/packit koji-build` in the pull request Pagure interface.


## Bodhi update job
Lastly, you can again similarly to Koji builds, configure Packit to react to successful Koji builds and create
Bodhi updates by having a Packit configuration in your dist-git repository that includes a `bodhi_update` job.
Once Packit is informed (via fedora-messaging bus) about the successful Koji build for the configured branch,
it creates a new update for that branch in Bodhi for you.

The [bodhi_update job](/docs/configuration/#bodhi_update) can be configured like this:

```yaml
jobs:
- job: bodhi_update
  trigger: commit
  dist_git_branches:
    - fedora-branched # rawhide updates are created automatically
```

The packit config is loaded from the commit the build is triggered from.
Just don't forget to give `commit` rights to `packit` FAS user
for your package in dist-git settings so Packit can create the update for you.
The `issue_repository` configuration key mentioned in the Koji build job applies here as well.

