---
title: Copr builds
sidebar_position: 1
---

# `job: copr_build`

Create an SRPM and submit an RPM build to [Fedora Copr](https://copr.fedorainfracloud.org/) build system.


## Supported triggers

* **pull_request** - check out content of the pull request
* **commit** - reacts to new commits to the specified branch
* **release** - check out content of the tag associated with the release


## Required parameters

* **targets** - (a list of) mock chroot(s) where the build is going to be
  executed (example `fedora-rawhide-x86_64`, defaults to `fedora-stable`): for
  more info [see below](#available-copr-build-targets). Does not need to be
  defined if using a custom Copr project (we fetch targets from the Copr settings).

### Example

```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-stable
    - centos-stream-8-x86_64
```

With this configuration, you'll get builds in all stable fedora releases
(excluding rawhide) and the CentOS Stream.

## Optional parameters

* **branch** - the name of the branch we want to build for when using **commit** trigger 
(defaults to the repository's default branch) or target branch when using **pull_request** trigger
  (default behaviour is reacting to all pull requests in the repository).
* **timeout** - (seconds) give up watching a build after timeout, defaults to 7200s, i.e. 2 hours.
* **owner** - a namespace in Copr where the build should happen (defaults to packit).
  Prefix with `@` in case of a group.
* **project** - a name of the Copr project (defaults to `"{github_namespace}-{repository_name}-{pr_id}"`)
* **additional_repos** - a list of additional buildroot repositories
* **bootstrap** - mock bootstrap setup. Accepted values are:
  * `default` - use default configuration from `mock-core-configs` package
  * `on` - enable bootstrapping
  * `off` - disable bootstrapping
  * `image` - enable bootstrapping and initialize the bootstrap chroot from a container image
* **list_on_homepage** - The project will be shown on Copr frontend homepage if set to `True`.
  Defaults to `False`.
  The value is represented as `unlisted_on_hp` in Copr project settings.
* **preserve_project** - The project will not be removed after 60 days if set to `True`.
  Defaults to `False`.
  The value is represented as `delete_after_days` in Copr project settings
  (`True` is `-1` and `False` is `60`).
* **enable_net** - Specifies whether created Copr build should have access to network during its build.
  Defaults to `False` (Copr default, switched to `False` in June 2022).
* **identifier** - Suffix added to the name of a GitHub check run. 
  For example if you [set this to "mock"](https://github.com/rpm-software-management/mock/pull/902/checks?check_run_id=6530714905), then a check run for Rawhide would be
  named "rpm-build:fedora-rawhide-x86\_64:mock".
:::caution
Make sure to configure this option if you are having multiple `copr_build` jobs in the configuration,
otherwise the reporting may be incorrect.
:::
* **module_hotfixes** - The project will have `module_hotfixes=1` in the Copr generated repo files.
  This is useful when you build packages that need to be installed in a modular context.
  Defaults to `False`.
* **follow_fedora_branching** - The project will get branched automatically by
  the Copr. This setting is useful if you're releasing to the Copr.
  Defaults to `False`.
* **osh_diff_scan_after_copr_build** - Whether to run a differential scan in [OpenScanHub](https://openscanhub.fedoraproject.org/) 
after the Copr build successfully completes. See more details [here](/docs/configuration#osh_diff_scan_after_copr_build).

###  Top level keys affecting a Copr build
Beside the job specific keys above you can specify a set of top level keys 
(or package level keys in a monorepo configuration) 
that can change the behaviour of your Copr builds:

* [**merge_pr_in_ci**](https://packit.dev/docs/configuration#merge_pr_in_ci)
* [**update_release**](https://packit.dev/docs/configuration#update_release)
* [**release_suffix**](https://packit.dev/docs/configuration#release_suffix)
* [**srpm_build_deps**](https://packit.dev/docs/configuration#srpm_build_deps)

## Using a custom Copr project
When using a custom Copr project (by specifying `project` and `owner`) you need to:
  - allow Packit to build in your custom Copr project,
  - allow builds from your forge project.

### Allow Packit to build in your custom project

When using a custom `owner`, Packit Service asks for `builder` permission the
first time it tries to build in the project. In case the configuration of the
Copr project (e.g. adding new `targets`) need to be updated, Packit Service asks
for `admin` permission. You need to approve these requests in the Copr project
settings.

If you do not want to give us `admin` permission, you can update the project
settings manually in Copr based on the guidance Packit Service gives.

You can also directly edit the permissions yourself without waiting for the Packit request 
by running:

    $ copr-cli edit-permissions --builder packit [--admin packit] <project>

Boolean values (`list_on_homepage`, `preserve_project` and `follow_fedora_branching`) are not updated when you use custom `owner`.

### Allow builds from forges

When using a custom `project`, the GitHub or Gitlab repo has to be listed in the
**Packit allowed forge projects** field in the **Copr project settings** so that the Copr builds can be actually run.
As an example the string *github.com/osbuild/osbuild* has to be inserted
into https://copr.fedorainfracloud.org/coprs/g/osbuild/osbuild/edit/#packit_forge_projects_allowed.

![Copr allowed forge projects example](../../img/copr_allowed_forges.png)


## Target-specific configuration

You can define a specific build configuration for different targets (chroots in
context of Copr). For example, there are packages that are architecture-specific and not available for all architectures. Or you may want [modules](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/installing_managing_and_removing_user-space_components/introduction-to-modules_using-appstream)
enabled for builds in CentOS Stream 8.

[Copr allows specifying additional packages, modules and repos](https://python-copr.readthedocs.io/en/latest/client_v3/proxies.html#project-chroot) for individual targets.

Setting this in packit.yaml requires targets to be a mapping. If you require
this functionality, this is the preferred solution over specifying multiple
jobs.

### Example 
```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets:
    centos-stream-8:
      additional_repos:
       - http://koji.katello.org/releases/yum/foreman-nightly/el8/x86_64/
      additional_modules: "foreman:el8,ruby:2.7,nodejs:12,postgresql:12"
    fedora-rawhide: {}
    fedora-37: {}
```

In this case, both Fedora targets don't have anything specific and would use
packages and modules from the base distro, while CentOS Stream 8 will use a
custom yum repo and 4 specific modules.

You can define these three options:
* `additional_packages` (list) – install additional packages before the build
* `additional_repos` (list) – enable these yum repositories before installing any packages
* `additional_modules` (str) – enable these modules before installing packages,
  specified as comma-separated string: `MODULE:STREAM,MODULE2:STREAM2,...`


## Available Copr build targets

There are multiple places where you can get the latest list of available build targets:
* Open your Copr project, then click "Settings" > "Build options" > "Chroots" -
these are the same values packit accepts.

* Install package `copr-cli` and run:
```
$ copr-cli list-chroots
centos-stream-8-aarch64
centos-stream-8-x86_64
custom-1-i386
custom-1-x86_64
epel-6-i386
epel-6-x86_64
epel-7-aarch64
epel-7-x86_64
epel-8-aarch64
epel-8-x86_64
fedora-32-aarch64
fedora-32-armhfp
…
```

* You can also use the [aliases provided by Packit](/docs/configuration/#aliases)
  to not need to change the config file when the new system version is released.

  By default, the `x86_64` architecture will be used, but you can
  override the default e.g. `fedora-stable-aarch64`.
  This applies to bare Copr chroots as well, so for example `epel-8` is equivalent to `epel-8-x86_64`.

* If you are using custom Copr repository for your Copr builds, you don't have
  to define the targets at all and they will be deduced from your custom Copr
  project.
