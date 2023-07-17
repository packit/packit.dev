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
This is the only key that can appear only inside [`packages`](#packages) dictionary values.

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

This option is a successor to `synced_files` that has been already deprecated.

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

Please use [`create-archive` action](configuration/actions/)

#### ~~current_version_command~~ (deprecated)

Please use [`get-current-version` action](configuration/actions/)

#### actions

(*string*) Custom actions/hooks overwriting the default behavior of packit
(more in [Actions](configuration/actions/)).

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

There is only one notification configuration you can set up right now: enable
the "Congratulations!" comment which will packit send after a successful build of a
pull request is done.

The default behaviour is not to send the comment with instructions how to install a
package with the change implemented in the pull request:

```yaml
notifications:
  pull_request:
    successful_build: false
```

You can enable the commenting by setting `successful_build` to `true`.

#### issue_repository

Use this key to be notified about errors of the downstream jobs (Koji build, Bodhi update, pull from upstream).
The value can be a URL of any GitHub/GitLab/Pagure project including dist-git
where issues are enabled and Packit has an identity on that git forger instance.
Alternatively, you can set up a dedicated project for receiving such notifications.
(Let us know if you need another instance to be supported.)
It does not need to be an upstream repository,
you can also enable an issue tracker for the dist-git repository
and use this as a place for those notifications.
Or, you can set up a dedicated project for receiving such notifications.

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
commit message titles (first line of a commit message) are copied.
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
- Use inner archive directory in %setup macro
- Use archive_root_dir_template
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

Just be aware that:
* You still need to install [the staging GitHub application](https://github.com/apps/packit-as-a-service-stg).
* Staging application has fewer resources and can be a bit slower in responses.
* If you use both instances, you will have twice the number of commit statuses.
* Picking just one instance might be better for downstream jobs since
  both instances will work with the production instances of Fedora systems.

Please, let us know when something looks weird or does not work with the staging app.
By doing that, you are helping us to be sure that we don't break your use-case.


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
Copr](configuration/upstream/copr_build) or [running tests](configuration/upstream/tests),
and to reference dist-git branches of different system versions
(e.g. for [`propose_downstream` job](configuration/upstream/propose_downstream)
or downstream jobs like [`koji_build`](configuration/downstream/koji_build)
or [`bodhi_update`](configuration/downstream/bodhi_update)).

The information about releases is retrieved from Bodhi and because of the
cache and required availability on Copr, it might take a while to get the
newest state.

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
The Pagure token needed to access REST API,
get it at https://src.fedoraproject.org/settings#nav-api-tab

Specifying tokens as direct keys `github_token` and `pagure_user_token`
has been deprecated and will be removed in future versions.
