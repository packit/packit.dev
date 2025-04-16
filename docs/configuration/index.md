---
title: Configuration
sidebar_position: 7
---

# Configuration

Packit uses a configuration file in the upstream repository. The config file is written in YAML language.

You should place the file in the root of your upstream repo. Packit accepts these names:

* `.packit.yaml`
* `.packit.yml`
* `packit.yaml`
* `packit.yml`

Both Packit Service and Packit CLI use this configuration file.

:::tip Writing complex configurations

See the [Packit Service jobs configuration](/docs/configuration/jobs.md) section for some tips on how to configure
complex config files.

:::

## Top-level keys

Here you can see a list of options that can be defined at the top-level and
shared by all of the jobs.

#### packages

(*dict*) This key was introduced mainly to enable support for monorepositories, upstream repositories
mapping to multiple downstream packages. It holds a dictionary of `{<package_name>: <package_configuration>}` where
package configuration consists of the keys introduced in [Package-specific keys section](#package-specific-keys)
(the only exception is the [`upstream_project_url`](#upstream_project_url) which can be defined only on the top level).

A configuration utilising the `packages` key may look like this:
```yaml
packages:

  python-copr:
    downstream_package_name: python-copr
    upstream_package_name: copr
    paths: 
      - ./python
    specfile_path: python-copr.spec
    files_to_sync: 
      - python-copr.spec

  copr-cli:
    downstream_package_name: copr-cli
    upstream_package_name: copr-cli
    paths: 
      - ./cli
    specfile_path: copr-cli.spec
    files_to_sync: 
      - copr-cli.spec
```

If the configuration doesn't include the `packages` key, it is expected that there is only one package
and the package-specific options can be defined on the top level:

```yaml
downstream_package_name: python-copr
upstream_package_name: copr
paths: 
  - ./python
specfile_path: python-copr.spec
files_to_sync: 
  - python-copr.spec
```

#### jobs

(*list of dicts*) A list of job definitions for Packit Service: see
[Packit Service jobs configuration](configuration/jobs) for details.

### Package-specific keys
#### paths
(*list*) List of relative paths in the upstream repository, which should be considered for the particular package
(used mainly for monorepositories). Defaults to the root of the repository (`["./"]`).

The first item of the list changes the working directory from which `specfile_path` is calculated and where other
actions and commands are run from.

Other entries in this field list have no effect currently.

#### specfile_path

(*string*) Relative path to a spec file within the upstream repository.
If not specified, defaults to:
1. `<downstream_package_name>.spec` if [`downstream_package_name`](#downstream_package_name)
is set (`<downstream_package_name>.spec` in all the `paths` when using `paths`).
2. (*deprecated*) Else recursively search the tree and use the first spec file found
(Recursively search all the `paths` of the package when using `paths`).

Both in 1. and 2., when `paths` are defined, they are searched in the order in which they are defined in the configuration.

If there are only test jobs with `skip_build` option defined (more about it [here](configuration/upstream/tests)), 
spec file doesn't need to be present and its path doesn't need to be defined in the config.

:::caution

The functionality to recursively search for a specfile is deprecated and it's
going to be [removed](https://github.com/packit/packit/issues/1799) in a
future version (>0.64.0) of Packit. We recommend projects to explicitly set
`specfile_path` or rely on the `<downstream_package_name>.spec` default, by
setting `downstream_package_name`.

:::

#### upstream_package_name

(*string*) Name of the upstream repository (e.g. in PyPI), defaults to the
name of the GitHub repository; it's used when working with the upstream project,
as a release archive name and as a directory name in that archive.

:::info

Previously known as `upstream_project_name`, which has been deprecated since Packit
0.7.0

:::

#### upstream_project_url

(*string*) URL of the upstream git project (e.g.
`https://github.com/packit/packit`).

:::info

Do not confuse this with the URL of upstream tarball. In case of
[`propose_downstream`](/docs/configuration/upstream/propose_downstream),
[`pull_from_upstream`](/docs/configuration/downstream/pull_from_upstream),
[`koji_build`](/docs/configuration/downstream/koji_build) and
[`bodhi_update`](/docs/configuration/downstream/bodhi_update) jobs,
upstream tarball URL is taken from spec file or from [sources](#sources).

:::

This URL is used for cloning the upstream git repository. Furthermore during
`sync-release` runs it can be used to generate changelog for the proposed update
from the git log of the upstream repository or release description (specific to
GitHub and GitLab).

:::tip

Using the upstream repository during `sync-release` runs doesn't imply that the
sources from hostings such as PyPI are being ignored.

:::

This setting also allows you to use Packit CLI from the dist-git repository as
Packit clones the upstream, if needed.

#### create_pr (only in CLI)

(*bool*) When doing a new update in Fedora dist-git, should packit create a
new pull request (defaults to `true`) or push directly to dist-git (if set to
`false`). This option can be used only locally in the CLI, but can be overriden
via `--pr/--no-pr` option. Deployed Packit (on GitHub or GitLab) ignores this
setting, because Packit Team **does not** endorse automated release from created
release to the Bodhi update **without any quality assurance**.

#### merge_pr_in_ci

(*bool*) When Packit clones your repository while creating RPMs from your pull
requests, it by default merges the pull request checkout into the main
repository branch to be sure the changes are up to date. You can disable this
behaviour by setting this field to `false` which will make Packit to work with
your pull request git ref as it is.

When your pull request can not be fast-forward-merged into the target
branch, setting this key to `false` can be especially useful not to generate 
RPM packages with an NVR referencing an unknown hash (the one created by the 
Packit merge commit).


#### sync_changelog

(*bool*) When doing a new update in Fedora dist-git, the specfile changelog
is synchronized when set to `true`. By default (`false`), everything but the changelog
part is synchronized. Use this only when your changelogs are in sync since this overwrites the changelog in the downstream.

#### update_release

(*bool*) Packit by default modifies Release in the spec file when
creating a SRPM. If you don't want this, you can prevent it with

    update_release: false

This option only applies to SRPM creation and doesn't affect [`propose_downstream`](#propose_downstream)
and [`pull_from_upstream`](#pull_from_upstream) jobs.

#### upload_sources

(*bool*) . By setting this option to `false`, Packit does not upload the archive to lookaside cache when
synchronising the release (either via
[`propose_downstream`](/docs/configuration/upstream/propose_downstream)
or [`pull_from_upstream`](/docs/configuration/downstream/pull_from_upstream)
jobs) before creating a pull request.
Disable this if you are not sure if the archive can be stored
in the lookaside cache because of licensing or other reasons.
Just don't forget to upload the archive manually.
When disabled, the CI in dist-git might fail because
of the missing archive in the lookaside cache.

#### release_suffix

(*templated string*) String that can be used to override the default release suffix
generated by Packit. The suffix will be expanded, and you can use following variables:

* `PACKIT_PROJECT_VERSION` - version from `git describe`
* `PACKIT_RPMSPEC_RELEASE` - release from specfile
* `PACKIT_PROJECT_COMMIT` - commit SHA from which the SRPM is built
* `PACKIT_PROJECT_BRANCH` - branch from which the SRPM is built

Example usage:

    release_suffix: "dev.{PACKIT_PROJECT_BRANCH}"

When unset, default release suffix that is generated by Packit is following:

    {original_release_number}.{current_time}.{sanitized_current_branch}{git_desc_suffix}

It is also possible to define `release_suffix` at the top-level of your packit
config. In that situation all jobs and SRPM, Copr, Koji and RPM build from CLI
will inherit the `release_suffix` that you have set. We **advise** caution when
doing such thing, because inheriting the release suffix value by Copr or Koji
build may easily cause confusion, break the ordering of the NVRs of the RPMs and
also may cause usage of RPMs **that are not meant** for production use. In such
scenarios, please try to make sure RPMs built by Packit are easily
distinguishable from the RPMs meant for production use. To prevent the
inheritance, you can define:

    release_suffix: null

If you don't want the release to be modified at all, see [update_release](#update_release).

This option only applies to SRPM creation and doesn't affect [`propose_downstream`](#propose_downstream)
and [`pull_from_upstream`](#pull_from_upstream) jobs.

#### files_to_sync

(*list of strings or dicts*) A list of relative paths to files in the upstream
repo which are meant to be copied to dist-git during an update.

:::info

All files in the dist-git repo are committed using `git add -A`. Make sure all
artifacts are ignored either directly using glob patterns in `.gitignore` or
indirectly, e.g. when Packit runs `fedpkg new-sources`, if you do not want to
include the files in the commit.

Files to be uploaded to lookaside cache also use this interface, where all files
mentioned in the spec file's `Source` are uploaded to the lookaside cache, *unless*
the file is already being tracked in dist-git. **Note:** this implies that new
`Source` files are [always added][packit#2365] as lookaside cache as part of an
update even if they should be tracked in dist-git instead. 

:::

Spec file path and config file path are always included by `packit init`
but can be manually removed from the list.

Under the hood this will use `rsync --archive` to synchronise the paths
between the upstream and the dist-git repo.

The fields for a dictionary item in the list are the following:

- *src*: A single path or a list of paths in the upstream repo that should be synced to dist-git.
- *dest*: Path in the dist-git repo, where paths in `src` should be synced to.
- *mkpath*: Flag to indicate if missing path components in `dest` should be created or not (default: false).
- *delete*: Flag to indicate if extra content from `dest` should be deleted (default: false).
- *filters*: List of [rsync filter rules] to be used during syncing. Note that the rules apply relative
  to the source and/or destination path (e.g. a `protect` filter applies relative to `dest` path)

[rsync filter rules]: https://www.man7.org/linux/man-pages/man1/rsync.1.html#FILTER_RULES
[packit#2365]: https://github.com/packit/packit/issues/2365

##### Examples:

Copy a file from root of the upstream repo to dist-git:

```yaml
files_to_sync:
  - packit.spec
```

If you copy `packit.yaml` downstream, you can then take advantage of
`sync-from-downstream` command:

```yaml
files_to_sync:
  - .packit.yaml
```

Rename or change the path of the synced file in dist-git:

```yaml
files_to_sync:
  - src: packit.spec
    dest: redhat/packit.spec
```

Paths also support globs. Copy everything from `fedora-packaging` folder and
put it to the root of the dist-git repo:

```yaml
files_to_sync:
  - src: fedora-packaging/*
    dest: .
```

Sync the entire content of the `fedora-packaging` directory, and delete extra
content found in the root of the dist-git repo; protect `.git*` files and the
`sources` file from deletion:
```yaml
files_to_sync:
  - src: fedora-packaging/
    dest: .
    delete: true
    filters:
    - "protect .git*"
    - "protect sources"
```

Specify multiple source files to copy:

```yaml
files_to_sync:
  - src:
    - package.spec
    - some-file
    dest: .
```

Set `mkpath` to `true` to create missing path components in dist-git.
In the example below, `subdir` is created if missing.

```yaml
files_to_sync:
  - src: some.file
    dest: subdir/some.file
    mkpath: true
```

:::info

This option is a successor to `synced_files` that has been deprecated and removed.

:::

#### create_sync_note

(*bool*) Create or update a *README.packit* file in dist-git when doing a new update,
telling that the repository is maintained by Packit and marking the version of `packit` creating the update.
By default, this option is set to `true`. When set to `false`, *README.packit* is not created or updated.
(A previously created *README.packit* needs to be removed manually).


#### upstream_ref

(*string*) Git reference to last upstream git commit (for source-git repos).
Can be set to commit hash, tag or a branch name. You can also use globbing pattern
to find a tag. In case you want to use globbing pattern for a branch, prefix the
pattern with `branches/`, e.g. for a branch matching `*-release` set to `branches/*-release`.

#### downstream_package_name

(*string*) Name of the RPM package in Fedora, defaults to the name of the
GitHub repository. In case of using the `packages` key, the defaults are the keys of the dictionary.

#### dist_git_namespace

(*string*) Namespace in dist-git URL (defaults to `rpms`).

#### dist_git_base_url

(*string*) URL of dist-git server, defaults to https://src.fedoraproject.org/
(has to end with a slash).

#### ~~create_tarball_command~~ (deprecated)

Please use [`create-archive` action](/docs/configuration/actions/)

#### ~~current_version_command~~ (deprecated)

Please use [`get-current-version` action](/docs/configuration/actions/)

#### actions

(*string*) Custom actions/hooks overwriting the default behavior of packit
(more in [Actions](/docs/configuration/actions/)).

#### allowed_gpg_keys

(*list of string*) A list of gpg-key fingerprints; if specified, one of the
configured keys have to sign the last commit when updating in downstream; add
GitHub key (`5DE3E0509C47EA3CF04A42D34AEE18F83AFDEB23`) if you want to use
this on code merged via GitHub web interface.

#### spec_source_id

(*int or string*) Numeric ID of Source inside spec file which packit should
change when setting path to the newly generated tarball, can be also full name
of the macro. Defaults to `Source0` or `Source`, whichever is found first in
the spec file.

#### upstream_tag_template

(*string*) Packit by default expects git tags to match versions (e.g. when
doing the [`propose-downstream` command](/docs/cli/propose-downstream/)) -
if you are using a different tagging scheme, let's say `v1.2.3`
you can then set this parameter to `v{version}` and
packit will fill in the version argument.

#### archive_root_dir_template

(string) In the [`fix-spec-file` action](configuration/actions/) Packit changes first `%setup` (or `%autosetup`) macro
in `%prep` and adds `-n` so the generated tarball can be unpacked. For this
purpose, it requires the name of the directory in the source archive. For tar archives
with one directory, Packit gets it automatically. If Packit is not able to extract it
from the archive with the tar python module, it is possible to specify it explicitly
with this option.

Default value is `{upstream_pkg_name}-{version}`.

You can use following tags in string:
* `{upstream_pkg_name}` - name of the upstream package
* `{version}` - package version

#### patch_generation_ignore_paths

(*list of strings*) In a source-git repo, when packit is generating patches,
it excludes changes to the spec file and packit.yaml by default: with this
option you can precisely specify paths to exclude.

#### patch_generation_patch_id_digits

(*integer*) The number of digits (minimum width) used for patch IDs when
adding `PatchN` tags to a spec-file while updating dist-git from a source-git
repository.  Defaults to 4, that is, patches will look like `PatchNNNN:
<patch_name>`, and leading zeros are added, if needed. A value of 0 means "no
minimum width".

#### notifications
##### pull_request
###### successful_build
(*bool*)
Enable comment with instructions how to install a package with the change implemented in the pull request. 
This comment will be posted by Packit after a successful build of a pull request is done. 

The default behaviour is not to send the comment. To enable the comment, this should be the configuration:

```yaml
notifications:
  pull_request:
    successful_build: true
```

##### failure_comment
###### message
(*string*)
A message that will be posted as a comment in case of a job failure. 
Same as for other keys, you can define this option at the top-level, applying it to all jobs, or configure it 
on a job level, enabling you to have specific messages for each job or opt not to have a message for certain 
jobs. By default, no message is posted on job failure.

To prevent duplication,  Packit posts a comment only when its content differs from the previous comment in the specific 
pull request or commit.
To include dynamic content, you can use multiple placeholders which will be automatically replaced (consider using this in relation to the duplication of comments):

  - `{commit_sha}`: replaced with the actual commit SHA provided by Packit
  - `{logs_url}`: replaced with the url to the service's logs, the service can be Copr, Koji or Testing Farm depending on the Packit job
  - `{packit_dashboard_url}`: replaced with the Packit dashboard url for the job
  - `{external_dashboard_url}`: url to the service dashboard, the service can be Copr or Koji depending on the Packit job

You can use this also e.g. to tag a user/namespace that should be notified about the failure.

Configuration example:
```yaml
jobs:
  - job: copr_build
    trigger: pull_request
    targets:
      - fedora-rawhide
    notifications:
      failure_comment:
        message: "One of the tests failed for {commit_sha}. @admin check logs {logs_url}, packit dashboard {packit_dashboard_url} and external service dashboard {external_dashboard_url}"

  - job: tests
    trigger: pull_request
    targets:
      - fedora-rawhide
```

Notified failure comment example using the above configuration:
```
One of the tests failed for e6baab8. @admin check logs https://download.copr.fedorainfracloud.org/results/packit-stg/majamassarini-teamcity-messages-7/fedora-rawhide-x86_64/06606596-python-teamcity-messages/builder-live.log, packit dashboard https://dashboard.stg.packit.dev/results/copr-builds/40742 and external service dashboard https://copr.fedorainfracloud.org/coprs/build/6606596/
```

For jobs related to the release automation (`propose_downstream`, `pull_from_upstream`, `koji_build` and `bodhi_update`),
this message is used as an extension of the comment added by default by Packit. For these, the `commit_sha` is not provided.

##### failure_issue
###### create
(*bool*)
Whether to create an upstream issue for [`propose_downstream`](/docs/configuration/upstream/propose_downstream) failures. Defaults to
`true`.

#### issue_repository

Use this key to be notified about errors of the downstream jobs (Koji build, Bodhi update, pull from upstream).
The value can be a URL of any GitHub/GitLab/Pagure project where issues are enabled and Packit has an identity on that git forge instance.
Alternatively, you can set up a dedicated project for receiving such notifications.
(Let us know if you need another instance to be supported.)
It does not need to be an upstream repository (and in case you do not maintain it, it also **should not** be).

By default, no issue will be created so Packit doesn't unintentionally spam any repository.
(E.g. Since those jobs are defined in downstream, upstream project does not need to be aware of Packit.)

By enabling this setting, Packit will either create a new issue or add a comment to an already existing issue.
In that case, the issue will be reused and a new comment will be added.

When a downstream job (e.g. Koji build or Bodhi update) fails,
you can re-trigger the failed job by  
`/packit koji-build` or `/packit create-update` comment in the opened issue by Packit.
The Packit app has to be installed in the issue repository and the 
user, who commented, needs to have write permissions
into the repository in order for the retriggering to work.

#### copy_upstream_release_description

(*bool*) When doing a new update in Fedora dist-git, the [GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)
 or [GitLab](https://docs.gitlab.com/ee/user/project/releases/) upstream release description is copied to the specfile changelog when set to `true`. By default (`false`),
`Update to version <version>` is set as a changelog entry instead (in both cases, Packit also adds a reference
to the bugzilla about a new upstream release if there is one).
But be aware that the release description is copied as is, without any processing
and the result needs to fulfill the spec-file syntax.
Be specially careful when using characters like `%` that can be interpreted as macros.
Also, use `-` for bullet points instead of `*` so the line is not interpreted as a new changelog entry.

e.g.
- `copy_upstream_release_description = True`:
```
%changelog
* Thu Oct 15 2020 Packit Service <user-cont-team+packit-service@redhat.com> - 0.18.0-1
Packit got new archive_root_dir_template config option to get custom archive root dir.
You can find more info in the documentation.
```
- `copy_upstream_release_description = False` (default):
```
%changelog
* Thu Oct 15 2020 Packit Service <user-cont-team+packit-service@redhat.com> - 0.18.0-1
- Update to version 0.18.0
```

#### sources
(*list of dicts*) A list of sources to override the URLs of `SourceX` entries in the spec-file.
```yaml
sources:
  - path: rsync-3.1.3.tar.gz
    url: https://git.centos.org/sources/rsync/c8s/82e7829c0b3cefbd33c233005341e2073c425629
```
`path` is the path relative to the directory with sources where the source will be placed. If a `SourceX` entry with
corresponding basename exists in the spec-file, the source will be downloaded from the `url` found in the configuration
instead of the location defined in the spec-file.

#### srpm_build_deps
(*list of strings*) A list of RPM dependencies that are needed for your actions to be run when building a SRPM.
The dependencies are installed into the Copr build environment each time the build is triggered.

#### packit_instances
(*list of strings*) If you want to help us with catching issues or need some feature sooner than other users,
you can use our staging instance that has the freshest code we have.
For that, you can specify the instance(s) that will react to your jobs by using this configuration option.
It uses `["prod"]` as the default, but you can set both (`["prod", "stg"]`) or just stage (`["stg"]`).
You can also have a different setup for each job -- see [how the overriding works](#overriding-global-parameters)
in the config file.

For the details on how to enable staging instance, please see [the onboarding guide](/docs/guide/#staging-instance).

#### upstream_tag_include
(*string*) This field requires a Python regex pattern. It's used with `re.match` to:
- include tags: When identifying the latest upstream tag, this pattern filters in specific tags.
- in Packit Service: In `propose_downstream` and `pull_from_upstream` jobs, it determines whether a specific release 
should trigger a reaction. However, for `pull_from_upstream`, it is applied only when the 
`upstream_project_url` is configured.

#### upstream_tag_exclude
(*string*) This field requires a Python regex pattern. It's used with `re.match` to:
- exclude tags: When identifying the latest upstream tag, this pattern omits certain tags.
- in Packit Service: In `propose_downstream` and `pull_from_upstream` jobs, it determines whether a specific release 
should trigger a reaction. However, for `pull_from_upstream`, it is applied only when the 
`upstream_project_url` is configured.

#### prerelease_suffix_pattern
(*string*) This field requires a partial Python regex pattern. It is used to match recognized pre-release suffixes.
The first capturing group must capture the delimiter between a base version and a pre-release suffix and can be empty
in case there is no delimiter. It defaults to `([.\-_~^]?)(alpha|beta|rc|pre(view)?)([.\-_]?\d+)?`.
This is a safe default that shouldn't produce any false positives and you may need to adjust it if your project uses
a different versioning scheme.

For example, you can use the following regex to conform to [PEP440](https://peps.python.org/pep-0440/):

    prerelease_suffix_pattern: "([.\\-_]?)(a(lpha)?|b(eta)?|r?c|pre(view)?)([.\\-_]?\\d+)?"

Or you can undefine the option to opt-out from pre-release processing:

    prerelease_suffix_pattern: null

#### prerelease_suffix_macro
(*string*) Name of a macro that controls whether spec file version is a pre-release and contains the pre-release suffix.
If Packit detects, based on [`prerelease_suffix_pattern`](#prerelease_suffix_pattern), a pre-release version,
this macro will be uncommented, otherwise it will be commented out. See [pre-releases with Packit](/docs/pre-releases)
for more details.


#### version_update_mask
(*string*) This field can be used to filter upstream versions when syncing the releases e.g. to avoid main version bump on the stable Fedora version.
This check **does not run for the rawhide branch**, if you want to skip releases in rawhide use *upstream_tag_exclude*.
The value requires a Python regex pattern and is used with `re.match` function.
 The old version contained in the *dist-git target branch specfile* and the *newly released version in upstream* 
 have both to match this reg exp and the matching value has to be the same otherwise Packit will not sync the 
 release downstream.
 Take as an example a `version_update_mask` set to `\d+\.\d+\.`, 
 *3.8.0* as specfile *version*  and  *3.9.0* as a new upstream *release tag*, the versions are matching but the 
 matched values are not the same, thus Packit will not create a *3.9.0*  pull request release on dist-git target 
 branch. If there is an *3.8.1* release, the matched values (=`3.8`) are the same and pull request is created.


#### test_command
##### default_identifier
The identifier (refer to [`identifier`](/docs/configuration/upstream/tests#optional-parameters)) utilised by default when
the `/packit test` comment command is invoked without arguments 
(see [related docs](/docs/configuration/upstream/tests#running-tests-with-a-specific-identifier)).
This allows commonly used job to be triggered without the need for manual specification. 
For instance, rather than specifying frequently used job via `--identifier` each time, such as `/packit test --identfier my-id`, 
you can configure the following:

```yaml
test_command:
  default_identifier: my-id
```
As a result, invoking `/packit test` will be automatically interpreted as `/packit test --identfier my-id`.

##### default_labels
A list of labels (refer to [`labels`](/docs/configuration/upstream/tests#optional-parameters)) utilised by default when
the `/packit test` comment command is invoked without arguments 
(see [related docs](/docs/configuration/upstream/tests#running-a-group-of-tests-with-the-same-label)).
This allows commonly used job combinations to be triggered without the need for manual specification. 
For instance, rather than specifying frequently used jobs via `--labels` each time, such as `/packit test --labels regression,upgrade`, 
you can configure the following:
```yaml
test_command:
  default_labels:
    - regression
    - upgrade
```
As a result, invoking `/packit test` will be automatically interpreted as `/packit test --labels regression,upgrade`.

:::info
`default_identifier` and `default_labels` are not supposed to be used simultaneously. You should configure
only one of these options.
:::

#### parse_time_macros

(*dict*) Macros to be explicitly defined or undefined at spec file parse time.
To undefine a macro, set its value to `null`.
This can be useful for instance when the spec file is OS-specific and Packit runs on a different OS
(Packit Service currently runs on Fedora 41).

For example, `%cargo_prep` macro used in Rust packages accepts `-V` option on EL but not on Fedora.
To make sure Packit is able to parse a spec file that uses `%cargo_prep -V` on both OSes,
you can undefine the macro at parse time:

```yaml
specfile_path: some-rust-package.spec
parse_time_macros:
  cargo_prep: null
```

:::info

This has no effect at build time, any macros overriden or undefined using this option
will have their usual values during SRPM and RPM build.

:::

#### require
##### label
In this section, you can specify the label requirements for a pull request. 
It is used to define conditions for jobs that should be triggered based on the presence or absence of specific labels.
You can specify 2 nested options:

###### present

(*list*)  Labels that must be present (at least one of them) on the PR for the specified job to be triggered.

###### absent

(*list*)  Labels that must be absent (none of these can be present) on the PR for the 
specified job to be triggered.

Example for the `require` section configuration:

```yaml
require:
  label:
    present:
      - bug
      - enhancement
    absent:
      - WIP
      - on-hold

```

#### status_name_template

:::caution

This is an experimental feature, right now it's not possible to retrigger Packit
jobs using custom status name via GitHub Checks re-run.

:::

:::warning

This setting allows you to **fully** customize the status name for the Packit
jobs. You need to guarantee that each job expands to a unique status name.

If this requirement isn't satisfied, it is possible for concurrent jobs sharing
the same status name to override each other's statuses.

:::

(*string*)  Template that can be used to modify the (commit) status name that
Packit uses by default. It is used in the following manner:

```py
status_name_template.format(…)
```

The template follows the [Format String Syntax](https://docs.python.org/3/library/string.html#formatstrings).

This allows for automation with GitHub merge queues, or any other tools that
depend on the consistent status naming.

We provide the following variables:
- `job_name`, e.g., `rpm-build`, `testing-farm`
- `chroot`, e.g., `fedora-rawhide-ppc64le` (Copr), `RHEL-8.10.0-Nightly-x86_64` (internal TF)
- `event`, e.g., `‹branch name›`
- `identifier`
- `package` - useful for monorepo setups, otherwise defaults to the generated package name from backward-compatibility layer

#### sig

(*string*)  Specifies the SIG (special interest group). This option is used
during cloning of the dist-git repos that are maintained in the SIG namespaces.

#### sync_test_job_statuses_with_builds

(*bool*) When set to `true` (the default), test job statuses are updated together with their corresponding
build job statuses. When set to `false`, while test jobs are waiting for their corresponding build jobs
to finish, their statuses remain in pending state and only build job statuses are updated, for example with
`SRPM build is in progress...` or `Starting RPM build...`.

#### osh_diff_scan_after_copr_build

(*bool*) Whether to run a differential scan in [OpenScanHub](https://openscanhub.fedoraproject.org/) 
after the Copr build successfully completes.
This is an experimental feature and for now runs only for `fedora-rawhide-x86_64`. Defaults to `true`.
The scan is run only for Copr builds triggered by pull requests, and only if there is 
also a Copr build job with `trigger: commit` present in the configuration.
Additionally, the target branch of the pull request must match the branch specified in 
the configuration for that job. For more details on setting up such a job, refer to
[this documentation](/docs/configuration/upstream/copr_build.md).

:::info
This functionality is an initial prototype and both configuration and functionality
will likely change in the future.
We will be happy for any feedback regarding it, [please contact us](https://github.com/packit/packit/discussions/2371)!
:::

#### csmock_args

(*string*) An option to set arguments of `csmock` (the tool used inside [OpenScanHub](https://openscanhub.fedoraproject.org/)). For instance, you can specify arguments like `--cppcheck-add-flag=--enable=style` to check styling issues as seen in [this example run](https://openscanhub.fedoraproject.org/task/10066/) triggered from [this](https://github.com/avahi/avahi/pull/641) testing pull-request on Avahi.

#### osh_options

A set of additional options passed to `osh-cli` for additional customizations of the functionality.

##### analyzer

(*string*) List of analyzers to be passed to `osh-cli`. Use comma as a separator, e.g. `gcc,clang,cppcheck`.

```yaml
osh_options:
  analyzer: "gcc, shellcheck"
```

##### config

(*string*) Used to specify mock config name to be passed to `osh-cli`. If value is not set in the config, default value `"fedora-rawhide-x86_64"` is used.

```yaml
osh_options:
  config: "fedora-rawhide-x86_64"
```

##### profile

(*string*) Used to specify predefined scanning profile to be passed to `osh-cli`.

```yaml
osh_options:
  profile: "dev"
```

## Aliases

To not need to change the config file when the new system version is released,
Packit provides multiple aliases to reference a subset of the active
releases:
* `fedora-all` - all active releases, which includes released and branched
  versions and Rawhide (e.g. `fedora-34`, `fedora-35`, `fedora-36`,
  `fedora-rawhide`).
* `fedora-stable` — the current (two or three) released and supported
  versions (e.g. `fedora-34`, `fedora-35`).
* `fedora-development` — development versions of Fedora; the branched
  version is used only when available (e.g. `fedora-36`, `fedora-rawhide`)
* `fedora-latest` — the last versioned Fedora (not a Rawhide), regardless if
  it's released or still under development.
* `fedora-latest-stable` — the latest released Fedora version (e.g.
  `fedora-35`).
* `fedora-branched` — all branched releases, that is: everything, except
Rawhide (e.g. `fedora-34`, `fedora-35`, `fedora-36`).
* `epel-all` - current active [EPEL](https://docs.fedoraproject.org/en-US/epel/)
versions (e.g. `epel-7`, `epel-8`, `epel-9`)

The aliases above can be used both to specify targets when [building in
Copr](/docs/configuration/upstream/copr_build) or [running tests](/docs/configuration/upstream/tests),
and to reference dist-git branches of different system versions
(e.g. for [`propose_downstream` job](/docs/configuration/upstream/propose_downstream)
or downstream jobs like [`koji_build`](/docs/configuration/downstream/koji_build)
or [`bodhi_update`](/docs/configuration/downstream/bodhi_update)).

:::info

You can combine aliases with architecture where appropriate (e.g. in Copr targets).
You can do this by suffixing the alias with
an architecture (e.g. `fedora-stable-aarch64`).
By default, the `x86_64` architecture is used.

:::

The information about releases [is retrieved from Bodhi](https://bodhi.fedoraproject.org/releases/) and because of the
cache and required availability on Copr, it might take a while to get the
newest state.

### EPEL minor version aliases

Starting with EPEL 10, there are [different dist-git branches](https://docs.fedoraproject.org/en-US/epel/branches/#_epel_10)
and Koji targets for currently active minor versions:

* The main/default branch/target called `epelX` (e.g. `epel10`) that represents
  the latest (leading) minor release and corresponds to CentOS Stream X.
* The `epelX.Y` (e.g. `epel10.0`) branch/target that represents
  the previous (trailing) minor release and corresponds to RHEL X.Y.

:::info

See the [EPEL 10 proposal](https://discussion.fedoraproject.org/t/epel-10-proposal)
for more information, FAQ and discussion about this change and don't hesitate to provide
your feedback through proper channels, for instance
the [epel-devel](https://lists.fedoraproject.org/archives/list/epel-devel@lists.fedoraproject.org/)
mailing list.

:::

To give you flexibility in what distributions you want to target with your EPEL builds,
Packit provides these aliases:

* `epel-X` — the current/leading minor release (e.g. `epel10`)
* `epel-X-branched` — the branched/trailing minor release (e.g. `epel10.0`)
* `epel-X-all` — both minor releases (e.g. `epel10`, `epel10.0`)

:::note

The `epel-all` alias includes all active minor versions of all active major EPEL releases.

:::

:::info

For Copr builds all EPEL 10 minor version aliases are currently mapped to the `epel-10` target.
This is subject to change.

:::

## User configuration file

:::danger

Since API tokens are a very sensitive information, please **DO NOT** ever store
them in a public (such as a GitHub repository). The configuration file here is
located on your workstation, please **DO NOT** confuse it with a config file for
your project - that one is described above in the first section of this
document.

:::

When running Packit as a tool locally, it is convenient to use a configuration
file to provide data such as API tokens. Packit respects `XDG_CONFIG_HOME`
environment variable. If not set, it looks inside `~/.config/` directory.

The acceptable names are the same as for the package config:

* `.packit.yaml`
* `.packit.yml`
* `packit.yaml`
* `packit.yml`

### Values

| Key name                   | Type   | Description                                                                                       |
|----------------------------|--------|---------------------------------------------------------------------------------------------------|
| `debug`                    | bool   | enable debug logs                                                                                 |
| `fas_user`                 | string | username in Fedora account system; this is utilized when authenticating with Bodhi using Kerberos |
| `kerberos_realm`           | string | Kerberos realm to use for authentication, example "FEDORAPROJECT.ORG"                             |
| `authentication`           | dict   | tokens for services (GitHub, Pagure)                                                              |
| `upstream_git_remote`      | string | name of the git remote to discover upstream project URL from                                      |
| `redhat_api_refresh_token` | string | Red Hat API token, can be obtained [here](https://access.redhat.com/management/api)               |

#### Authentication dictionary

The `authentication` is a dictionary where:
* key is a hostname, url or name that can be mapped to a service-type, for example `github.com` or `pagure`
* value is a dictionary with keys: `token` and `instance_url` (optional)

##### Example

```yaml
authentication:
    github.com:
        token: mnbvcxz123456
    pagure:
        token: qwertyuiop098765
        instance_url: https://src.fedoraproject.org
```

The GitHub token is needed when packit interacts with GitHub API,
get it at https://github.com/settings/tokens (getting full read & write repo scope should be enough).
The Pagure token is needed to access REST API,
get it at https://src.fedoraproject.org/settings#nav-api-tab
(you need at least `fork_project`, `modify_project`, `pull_request_comment` and `pull_request_create` ACLs).

Specifying tokens as direct keys `github_token` and `pagure_user_token`
has been deprecated and will be removed in future versions.
