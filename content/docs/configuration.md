---
title: "Configuration"
draft: false
disableToc: false
weight: 4
---

Packit uses a configuration file in the upstream repository. The config file is written in YAML language.

You should place the file in the root of your upstream repo. Packit accepts these names:

* `.packit.yaml`
* `.packit.yml`
* `.packit.json`
* `packit.yaml`
* `packit.yml`
* `packit.json`

Both Packit-as-a-Service and packit tool use this configuration file.


## Top level keys

#### specfile_path

(*string*) Relative path to a spec file within the upstream repository (if not
specified, Packit will recursively search the tree and use the first spec file
found).

#### upstream_project_name

(*string*) Deprecated since packit-0.7.0, use `upstream_package_name` instead.

#### upstream_package_name

(*string*) Name of the upstream repository (e.g. in PyPI), defaults to the
name of the Github repository; this is used in `%prep` section to generate an
archive.

#### upstream_project_url

(*string*) URL of the upstream project (e.g.
`https://github.com/packit-service/packit`).

#### create_pr

(*bool*) When doing a new update in Fedora dist-git, should packit create a
new pull request (defaults to `true`) or push directly to dist-git (if set to
`false`).

#### synced_files

(*list of strings or dicts*) A list of relative paths to files in the upstream
repo which are meant to be copied to dist-git during an update (spec file path
and config file path are set every time by default).

#### upstream_ref

(*string*) Git reference to last upstream git commit (for source-git repos).

#### downstream_package_name

(*string*) Name of the RPM package in Fedora, defaults to the name of the
Github repository.

#### dist_git_namespace

(*string*) Namespace in dist-git URL (defaults to "rpms").

#### dist_git_base_url

(*string*) URL of dist-git server, defaults to https://src.fedoraproject.org/
(has to end with a slash).

#### create_tarball_command

(*list of strings*) A command which generates upstream tarball in the directory with the specfile
(defaults to `git archive -o "{specfile_dir}/{package_name}-{version}.tar.gz" --prefix
"{package_name}-{version}/" HEAD`).

#### current_version_command

(*list of strings*) A command which prints current upstream version (hint:
`git describe`) (defaults to `git describe --tags --match '*.*'`).

#### actions

(*string*) Custom actions/hooks overwriting the default behavior of packit
(more in [Actions](/docs/actions/)).

#### jobs

(*list of dicts*) A list of job definitions for packit service: see
[below](#supported-jobs) for details.

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
doing the `propose-update` command) - if you are using a different tagging
scheme, let's say `v1.2.3` you can then set this parameter to `v{version}` and
packit will fill in the version argument.

#### patch_generation_ignore_paths

(*list of strings*) In a source-git repo, when packit is generating patches,
it excludes changes to the spec file and packit.yaml by default: with this
option you can precisely specify paths to exclude.

#### notifications

There is only one notifcation configuration you can set up right now: disable
the "Congratulations!" comment which packit sends after a successful build of a
pull request is done.

The default behaviour is to send the comment with instructions how to install a
package with the change implemented in the pull request:
```
notifications:
  pull_request:
    successful_build: true
```

You can disable the commenting by setting `successful_build` to `false`.

### Minimal sample config

This is a sample config which is meant for [packit](https://github.com/packit-service/packit) itself.

```
# packit is named packitos on PyPI b/c packit name was already taken
upstream_package_name: packitos
```

### More examples of `synced_files`

```
synced_files:
  # copy a file from root of the upstream repo to dist-git
  - packit.spec

  # if you copy packit.yaml downstream, you can then take advantage of
  # `sync-from-downstream` command
  - .packit.yaml

  # src: a file in root of the upstream repository
  # dest: path within the downstream repository
  - src: packit.spec
    dest: redhat/packit.spec

  # also supports globbing: copy everything from fedora-packaging folder and
  # put it to the root of the dist-git repo
  - src: fedora-packaging/*
    dest: .

  # you can specify multiple source files as well:
  - src:
    - package.spec
    - some-file
    dest: .
```

## Packit-as-a-Service

As of July 2019, packit service doesn't have any web interface, so the only way
to change its behaviour is via the config file you just read about.

When you open a pull request against your upstream repository, packit service
picks up configuration file from your pull request, not from the branch against
the PR is opened. This way, you can polish your .packit.yaml and see the
results right away. (for more info, please see [packit-service#48](https://github.com/packit-service/packit-service/issues/48))


### Packit service jobs

Once the service starts handling events of your repository, it needs to have a
clear definition of what it should do.

The tasks the packit service should do are defined in section `jobs`. The section is a list of dicts:
```
jobs:
- {key: value}
- {}
```

If there is no `jobs` section in the configuration file, jobs default to:
```
jobs:
- job: tests
  trigger: pull_request
  metadata:
    targets: fedora-stable

- job: propose_downstream
  trigger: release
  metadata:
    dist-git-branch: fedora-all
```

If you do not want to use the jobs then the `jobs` section in the configuration file should be empty:
```
jobs: []

```

Every job has two mandatory keys:

1. `job` - name of the job (you can imagine this as a CLI command)
2. `trigger` - what is the trigger for the job?

Every job only supports a specific set of triggers.

Jobs can also accept additional configuration in a key `metadata` which has dict as a value:
```
jobs:
- job: some-job
  trigger: ran-out-of-beer
  metadata:
    key: value
```


#### Supported jobs

**copr\_build**

Create a SRPM and submit an RPM build to [Fedora COPR](https://copr.fedorainfracloud.org/) build system.

Supported triggers:

* **pull_request** -- check out content of the pull request
* **release** -- check out content of the tag associated with the release

Required metadata:

* **targets** - a list of mock chroots where to build (if you navigate to
  settings of your COPR project, you'll be able able to see the list of
  available values, alternatively you can install package `copr-cli` in Fedora and
  see the list via `copr-cli list-chroots`. You can use `fedora-development`,
  `fedora-stable` and `fedora-all` aliases as a target. By default, the `x86_64` architecture
  will be used, but you can use e.g. `fedora-stable-aarch64` if you need.

Optional metadata:

* **timeout** - (seconds) give up watching a build after timeout, defaults to 7200s, i.e. 2 hours
* **owner** - a namespace in COPR where the build should happen (defaults to packit)
* **project** - a name of the copr project (defaults to `"{github_namespace}-{repository_name}-{pr_id}"`)

If you want to build in your own COPR namespace, you need to [grant packit
permissions](https://docs.pagure.org/copr.copr/user_documentation.html?highlight=permissions#can-i-give-access-to-my-repo-to-my-team-mate)
to build inside. The way COPR does this right now is that we, from the packit
side, need to do a request for permissions. Please reach out to us via
user-cont-team@redhat.com and we'd be glad to help you.

**Example**

```
jobs:
- job: copr_build
  trigger: pull_request
  metadata:
    targets:
      - fedora-stable
      - centos-stream-x86_64
```

With this configuration, you'll get builds in all stable fedora releases
(excluding rawhide) and the CentOS stream.


**sync\_from\_downstream**

Pick up a change (mass rebuild, proven packager rebuild or a fix) from Fedora
dist-git and send it to upstream repository.

Supported triggers: **commit**.

**Example**

```
jobs:
- job: sync_from_downstream
  trigger: commit
```

**propose_downstream**

Land a new upstream release in Fedora. This job only makes sure the changes
happen in Fedora dist-git - no builds. The global key `create_pr` controls
whether a pull request is created or changes are pushed directly.

Supported triggers: **release**.

Optional metadata:

* **dist-git-branch** - a branch in dist-git where packit should work (defaults to `master`).
  You can also use `fedora-development`, `fedora-stable` and `fedora-all` aliases
  to not need to change the config file when the new system version is released.

**Example**

```
jobs:
- job: propose_downstream
  trigger: release
- job: propose_downstream
  trigger: release
  metadata:
    dist-git-branch: f30
```

This config would update Fedora Rawhide and Fedora 30 dist-git branches.


**tests**


See more about tests [here](http://packit.dev/testing-farm/).


## User configuration file

When running packit as a tool locally, it is convenient to use a configuration
file to provide data such as API tokens. Packit respects `XDG_CONFIG_HOME`
environment variable. If not set, it looks inside `~/.config/` directory.

The acceptable names are the same as for the package config:

* `.packit.yaml`
* `.packit.yml`
* `.packit.json`
* `packit.yaml`
* `packit.yml`
* `packit.json`


### Values

 Key name                     | Type            | Description
------------------------------|-----------------|----------------------------------------------------------------------
 `debug`                      | bool            | enable debug logs
 `fas_user`                   | string          | username in Fedora account system (to perform kinit if needed)
 `authentication`             | dict            | tokens for services (GitHub, Pagure)

The `authentication` is a dictionary where:
* key is a hostname, url or name that can be mapped to a service-type, for example `github.com` or `pagure`
* value is a dictionary with keys: `token` and `instance_url` (optional)

e.g.:
```
authentication:
    github.com:
        token: mnbvcxz123456
    pagure:
        token: qwertyuiop098765
        instance_url: https://src.fedoraproject.org
```

The GitHub token is needed when packit interacts with Github API,
get it at https://github.com/settings/tokens (getting full read & write repo scope should be enough).
The Pagure token needed to access REST API,
get it at https://src.fedoraproject.org/settings#nav-api-tab

Specifying tokens as direct keys `github_token` and `pagure_user_token`
has been deprecated and will be removed in future versions.

Since API tokens are a very sensitive information, please do NOT ever store
them in a public (such as a GitHub repository). The configuration file here is
located on your workstation, please do NOT confuse it with a config file for
your project - that one is described above in the first section of this
document.

#### Server-side configuration

These values are used to configure packit service. No need to bother with them, they serve as a documentation for us, packit service developers.

 Key name                     | Type            | Description
------------------------------|-----------------|----------------------------------------------------------------------
 `keytab_path`                | string          | path to a Kerberos keytab file (requires `fas_user` to be set)
 `github_app_id`              | string          | github app ID used for authentication
 `github_app_cert_path`       | string          | path to a certificate associated with a github app
 `webhook_secret`             | string          | when specified in a Github App settings, GitHub uses it to create a hash signature with each payload
