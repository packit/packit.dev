---
title: How to do Fedora releases with Packit
sidebar_position: 5
---
# How to do Fedora releases with Packit

Let's split the release process into single steps:
1. [New upstream release](#new-upstream-release)
2. [Upload archive to lookaside cache](#upload-archive-to-lookaside-cache)
3. [Update dist-git content](#update-dist-git-content)
4. [Koji builds](#koji-build-job)
5. [Bodhi updates](#bodhi-update-job)

Doing Fedora releases with Packit means utilising these jobs:
1. [`propose_downstream` or `pull_from_upstream`](#propose-downstream-or-pull-from-upstream)
2. [`koji_build`](#koji-build-job)
3. [`bodhi_update`](#bodhi-update-job)

Every job takes care of a different part of the release process.

:::tip
In this page, you can find all the details of the release process automation covered by Packit.

If you are a **downstream package maintainer** and would like to see the information on how to onboard to using 
Packit in dist-git, see [dist-git onboarding guide](dist-git-onboarding.md) directly.

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
[`upstream_tag_exclude`](/docs/configuration/#upstream_tag_exclude). However, these are currently taken into consideration only when the 
`upstream_project_url` is configured with `pull_from_upstream` job or for `propose_downstream` job.

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

The changelog entry generated by default is `- Update to version <version>` followed by a reference to the bugzilla 
about new release (if there is one).
If you use [`copy_upstream_release_description: true`](/docs/configuration/#copy_upstream_release_description),
the changelog entry will use the GitHub/GitLab release description field.
(Just make sure the formatting is compatible with spec file.
E.g. use `-` instead of `*` for lists to not create multiple changelog entries.)
There is also [`sync_changelog`](/docs/configuration/#sync_changelog) configuration option to enable syncing 
the whole changelog.
You can also utilize a [custom `changelog-entry` action](/docs/configuration/actions#syncing-the-release) if you would like to override the default behaviour.

        actions:
          changelog-entry:
            - bash -c 'echo "- New release ${PACKIT_PROJECT_VERSION}"'

Besides the configuration of changelog via Packit, you can also use `%autochangelog` macro to
generate the changelog entries automatically, see 
[details](https://docs.pagure.org/Fedora-Infra.rpmautospec/autochangelog.html). In that case, Packit will not touch 
the changelog at all.


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

##### Actions - use your own commands/scripts
- You may utilise some of the [actions](/docs/configuration/actions/#syncing-the-release)
for overriding the Packit default behaviour, for example:
  - for the **changelog entry generation**, if you do not want the default `Update to version <version>`, you can use your own command(s)
    (here, the first one gets the git log between the corresponding tag and the tag before that one and the second
    command links the bugzilla(s)):
  
        changelog-entry:
          - bash -c 'git log --no-merges --pretty="format:- %s (%an)" $(git describe --tags --abbrev=0 ${PACKIT_PROJECT_UPSTREAM_TAG}^)..${PACKIT_PROJECT_UPSTREAM_TAG} --'
          - bash -c '[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\n" | sed "s/^/- Resolves /"'
  
  - for a **custom commit message** for commit created by Packit:

        commit-message:
          - bash -c 'echo -e "Rebase to new upstream release ${PACKIT_PROJECT_VERSION}\n"'
          - bash -c '[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\n" | sed "s/^/- Resolves /"'
  - for **source archive(s) generation**, you can utilise e.g. `pre-sync` action, see 
  [this example](/docs/configuration/examples#custom-archive-creation-for-release-syncing)

#### Keep dist-git branches non-divergent

If you want to keep your dist-git branches from diverging,
you can use the new `dist_git_branches` syntax:
  
```yaml
  dist_git_branches:
    rawhide:
      fast_forward_merge_into: [fedora-branched]
    epel-9: {}    
      
```

In this example, Packit runs the downstream synchronization process for the
`rawhide` and `epel-9` branches as usual. But Packit also opens a new pull request reusing the commit from `rawhide` for every
`fedora-branched` branch so it can be fast-forwarded when merging.

:::warning How to reconcile divergent branches

If you are already using Packit then your branches can have diverged.
You need to reconcile them before using the new dist_git_branches 
syntax.
For the configuration example above and for the state of the branched
Fedora releases as today, you need to do:

```
git checkout rawhide
git merge f39
git merge f40
git merge f41
```

You shouldn't have any conflict.
But, if you have a conflict in the `.gitignore` file it is safe to 
keep changes both from rawhide and the incoming branch.
If you have a conflict in the changelog section of the specfile,
then you must pay attention to **merge all the missing changelogs** 
in rawhide and to list them **in the right order** 
(newest changelogs come first). 
Once rawhide is ready you can do

```
git checkout f39; git merge --ff-only rawhide
git checkout f40; git merge --ff-only rawhide
git checkout f41; git merge --ff-only rawhide
```

:::


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

By default, only successful Koji builds created by Packit are being acted upon, but 
you can override this behaviour by specifying
`allowed_builders` in the [job configuration](/docs/configuration/downstream/bodhi_update).

For a configuration example and retriggering, see [dist-git onboarding](./dist-git-onboarding.md#bodhi-update-job).


## Permission overview

The downstream automation is a pipeline of jobs:
propose_downstream/pull_from_upstream -> Packit PR merge -> koji_build -> bodhi_update
or:
dist-git push/non-Packit PR merge -> koji_build -> bodhi_update

This chain can break (resulting in no followup job) if the permissions are not configured correctly in the Packit configuration.

### packit PR merge/dist-git push -> Koji build

A Koji build can be triggered by a merged pull request, a direct push or a PR comment.

* If you only merge Packit created pull requests, you don't need to specify other settings.
* If you open your own pull request and you want Packit to automatically trigger a Koji build when you merge it you need to be in the [`allowed_pr_authors`](https://packit.dev/docs/configuration/downstream/koji_build#optional-parameters) list, even in case the PR contains commits created by Packit.
On the other hand, if you want to break the chain because, for example, you want to build the package by yourself in a side-tag then you can create a new pull request containing Packit commits and you have to make sure you are not in the [`allowed_pr_authors`](https://packit.dev/docs/configuration/downstream/koji_build#optional-parameters) list.
* If you push Packit commits directly to dist-git (not merging Packit pull request) but you still want Packit to react and trigger a Koji build then you need to add yourself to the [`allowed_committers`](https://packit.dev/docs/configuration/downstream/koji_build#optional-parameters) list; Packit is commit *author* but you are the *committer*.
* If you want to trigger a Koji build by a PR comment you need be in the `packager` dist-git group.

:::caution
We are solving a bug https://github.com/packit/packit-service/issues/2359
This bug can cause an inconsistent behaviour (you may end up with triggered or not triggered Koji builds, even if your configuration is ok)
when you try to reuse Packit commits in new pull requests or direct pushes.
:::

### Koji build -> Bodhi update

A Bodhi update is triggered by a finished Koji build or a PR comment.

* If the Koji builds are always submitted by Packit you don't need to specify other settings.
* If you submit the Koji builds on your own, Packit can still automatically create the Bodhi updates but you need to be specified in the [`allowed_builders`](https://packit.dev/docs/configuration/downstream/bodhi_update#optional-parameters) list.
* If you want to trigger a Bodhi update by a PR comment you need to have *write permissions* on the project and be in the `packager` dist-git group.