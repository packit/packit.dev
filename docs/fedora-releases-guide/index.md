---
title: How to do Fedora releases with Packit
sidebar_position: 8
---
# How to do Fedora releases with Packit

Let's split the release process into single steps:
1. [New upstream release](#new-upstream-release)
2. [Upload archive to lookaside cache](#upload-archive-to-lookaside-cache)
3. [Update dist-git content](#update-dist-git-content)
4. [Koji builds](#koji-build-job)
5. [Bodhi updates](#bodhi-update-job)

Doing Fedora releases with Packit means utilising these jobs:
1. [`propose_downstream`](#propose-downstream-job) or [`pull_from_upstream`](#pull-from-upstream-job)
2. [`koji_build`](#koji-build-job)
3. [`bodhi_update`](#bodhi-update-job)

Every job takes care of a different part of the release process.

:::tip
In this page, you can find all the details of the release process automation covered by Packit.

If you are a downstream package maintainer and would like to see the information
on how to onboard to using Packit in dist-git, see [dist-git onboarding](./dist-git-onboarding.md) directly.

:::

## Propose downstream or pull from upstream

There are two jobs that can help you to get your new release to Fedora.
They differ in the way they are triggered and configured but share the implementation.

1. [propose_downstream](/docs/configuration/upstream/propose_downstream) - push workflow is configured and started in the upstream repository,
2. [pull_from_upstream](/docs/configuration/downstream/pull_from_upstream) - pull workflow that is configured in dist-git.

Here are the key differences between the two:

<table>
<tr>
<th></th>
<th>propose-downstream</th>
<th>pull-from-upstream</th>
</tr>

<tr>
<th>Packit Service</th>
<td><p>Have a <code>.packit.yaml</code> in <b>upstream</b> repo:</p>


```yaml
jobs:
- job: propose-downstream:
    ...
```

  <p>Triggered by a new release in <b>upstream project</b>.</p>
  <p>It creates <i>dist-git</i> pull requests with the content of the release.</p>
</td>
<td><p>Have a <code>.packit.yaml</code> in <b>dist-git</b> repo (main or rawhide branch):</p>

```yaml
jobs:
- job: pull-from-upstream:
    ...
```

  <p>Triggered by a new release in <b>upstream project</b>.</p>
  <p>It creates <i>dist-git</i> pull requests with the content of the release and the packit config taken from dist-git main/rawhide branch.</p>
</td>
</tr>

<tr>
<th>Packit CLI</th>
<td><p>Have a <code>.packit.yaml</code> in <b>upstream</b> repo, clone repo and run:</p>

  ```
  packit propose-downstream
  ```

  <p>It creates <i>dist-git</i> pull requests with the content of the release and the packit config taken from local clone.</p>
</td>
<td><p>Have a <code>.packit.yaml</code> in <b>dist-git</b> repo, clone repo and run:</p>

  ```
  packit pull-from-upstream
  ```

  <p>It creates <i>dist-git</i> pull requests with the content of the release and the packit config taken from local clone.</p>
</td>
</tr>
</table>

#### Resolving specfile and version

<table>
<tr>
<th></th>
<th>propose-downstream</th>
<th>pull-from-upstream</th>
</tr>

<tr>
<th>Packit Service</th>
<td>
  <p>Version is retrieved from <b>upstream project release event</b>.</p>
  <p>Specfile is retrieved from <b>upstream repo</b>.</p>
</td>
<td>
  <p>Version is retrieved from <b>https://release-monitoring.org event</b>.</p>
  <p>Specfile is retrieved from <b>dist-git repo</b>.</p>
</td>
</tr>

<tr>
<th>Packit CLI</th>
<td>
  <p>Version is retrieved from the <b>latest upstream project release tag</b> if not <b>specified</b>.</p>
  <p>Specfile is retrieved from the <b>upstream repo</b> unless the <code>--local-project</code> option is used.</p>
</td>
<td>
  <p>Version is retrieved from the <b>latest upstream project release tag</b> if not <b>specified</b>.</p>
  <p>Specfile is retrieved from the <b>local dist-git repo clone</b>.</p>
</td>
</tr>
</table>



### New upstream release
The process of releasing a new version starts in the upstream repository by creating a 
new upstream release. If you want to restrict what releases with corresponding tags Packit should react on, 
you can utilise the configuration options [`upstream_tag_include`](/docs/configuration/#upstream_tag_include) and
[`upstream_tag_exclude`](/docs/configuration/#upstream_tag_exclude).

### Upload archive to lookaside cache
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

If you don't want Packit to upload sources to lookaside cache before the pull request is opened,
set `upload_sources` to `false`. By disabling the upload, you need to take care of this yourself
and the builds triggered by dist-git CI will fail because of the missing archive in the lookaside cache.

### Update dist-git content
After saving the archive in the lookaside cache,
Packit updates the dist-git content (mainly `sources` file and spec file) via pull requests for the specified branches.
You can configure which files in the upstream repo should be copied to dist-git during an update
via [`files_to_sync`](/docs/configuration/#files_to_sync) configuration key.

The version in the spec file is set to the version that Packit gets from the upstream tag 
corresponding to the release that triggered the job. If the version and tag differ, 
you can specify the [`upstream_tag_template`](/docs/configuration/#upstream_tag_template)
configuration option so that Packit can extract the correct version.

If you use [`copy_upstream_release_description: true`](/docs/configuration/#copy_upstream_release_description),
the changelog entry will use the GitHub/GitLab release description field.
(Just make sure the formatting is compatible with spec file.
E.g. use `-` instead of `*` for lists to not create multiple changelog entries.)
There is also [`sync_changelog`](/docs/configuration/#sync_changelog) configuration option to enable syncing 
the whole changelog.
You can also utilize a [custom `changelog-entry` action](/docs/configuration/actions#syncing-the-release).

        actions:
          changelog-entry:
            - bash -c 'echo "- New release ${PACKIT_PROJECT_VERSION}"'



Be aware that Packit does not sign-off its commits so it can't open pull requests
if the ` Enforce signed-off commits in pull-request` option is set in the dist-git project settings.

After Packit successfully creates the dist-git pull requests, 
it's on downstream CI systems and maintainer(s) to check the changes and merge
the pull requests.

#### Customization
For customization of the `propose_downstream`/`pull_from_upstream`, you may need to define additional configuration options, most commonly:
- If the version from release monitoring and Git tag differ, 
you should specify the [`upstream_tag_template`](/docs/configuration/#upstream_tag_template).
- You can configure which files (if any) in the upstream repo should be copied to dist-git during an update
via [`files_to_sync`](/docs/configuration/#files_to_sync) configuration key.
- By default, Packit downloads sources defined in the spec file that contain URLs.
You can override these URLs via [`sources`](/docs/configuration#sources) configuration key.
- You may utilise some of the [actions](/docs/configuration/actions/#syncing-the-release)
for overriding the Packit default behaviour, for example:
  - for the changelog entry generation, if you do not want the default `git log` output, you can use your own command(s):
  
        changelog-entry:
          - bash -c 'echo "- New release ${PACKIT_PROJECT_VERSION}"'
          - bash -c '[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\n" | sed "s/^/- Resolves /"'
  
  - for a custom commit message for commit created by Packit:

        commit-message:
          - bash -c 'echo -e "Rebase to new upstream release ${PACKIT_PROJECT_VERSION}\n"'
          - bash -c '[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\n" | sed "s/^/- Resolves /"'


#### Keeping dist-git branches non-divergent
Packit currently syncs the release in a way that the branches become divergent (you can follow 
the request to change this behaviour [here](https://github.com/packit/packit/issues/1724)). 

However, if you wish to keep your dist-git branches in sync, you can configure Packit to propose updates exclusively 
to `rawhide` (by specifying `dist_git_branches: fedora-rawhide`) and you can locally merge it with the stable release branches. 
The following example demonstrates how to achieve this for a single branch (`f39` in this case):
```bash
# Clone the dist-git repository if you haven't done so already
fedpkg clone $PACKAGE
# or
git clone ssh://$YOUR_USER@pkgs.fedoraproject.org/rpms/$PACKAGE.git

# Alternatively, pull the rawhide changes only
git pull origin rawhide

# Switch to the desired branch and merge it with the updated rawhide branch
git checkout f39
git merge rawhide
git push origin f39
```
## Koji build job
After having the dist-git content updated, you can easily automate also building in Koji.
You can simply configure Packit to react to the new commits in your dist-git repository and create
Koji builds by having
a Packit configuration (when using `propose_downstream` job, you can configure Packit to sync the file) in your 
default branch (usually `rawhide`) of the dist-git repository that includes a `koji_build` job.
Then, if Packit is informed (via fedora-messaging bus) about a new commit in the configured dist-git branch, it submits a new build in Koji
like maintainers usually do. (The commits without any spec file change are skipped.)

By default, only merged pull requests created by Packit are being acted upon, but 
you can override this behaviour by specifying
`allowed_pr_authors` and/or `allowed_committers` in the [job configuration](/docs/configuration/downstream/koji_build).

For a configuration example and retriggering, see [dist-git onboarding](./dist-git-onboarding.md#koji-build-job).

## Bodhi update job
Lastly, you can again similarly to Koji builds, configure Packit to react to successful Koji builds and create
Bodhi updates by having a Packit configuration in your 
default branch (usually `rawhide`) of the dist-git repository that includes a `bodhi_update` job.
Once Packit is informed (via fedora-messaging bus) about the successful Koji build for the configured branch,
it creates a new update for that branch in Bodhi for you.

For a configuration example and retriggering, see [dist-git onboarding](./dist-git-onboarding.md#bodhi-update-job).
