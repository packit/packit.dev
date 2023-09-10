---
title: FAQ
date: 2019-07-24
sidebar_position: 100

---from-downstream [OPTIONS] [PATH_OR_URL]

  Copy synced files from Fedora dist-git into upstream by opening a pull
  request.

  PATH_OR_URL argument is a local path or a URL to the upstream git
  repository, it defaults to the current working directory

Options:
  --dist-git-branch TEXT  Comma separated list of target branches in dist-git
                          to sync from. (defaults to repo's default branch)
  --upstream-branch TEXT  Target branch in upstream to sync to. (defaults to
                          repo's default branch)
  --no-pr                 Do not create a pull request to upstream repository.
  --fork / --no-fork      Push to a fork before creating a pull request.
  --remote-to-push TEXT   Name of the remote where packit should push. If this
                          is not specified, push to a fork if the repo can be
                          forked.
  -f, --force             Don't discard changes in the git repo by default,
                          unless this is set.
  -p, --package TEXT      Package to sync back, if more than one available,
                          like in a monorepo configuration. Use it multiple
                          times to select multiple packages.Defaults to all
                          the packages listed inside the config.
  -x, --exclude TEXT      File to exclude from sync
  -h, --help              Show this message and exit.

# FAQ

## Can I use the packit service as soon as I install it into my repository?

Thanks for your interest in Packit Service! In order to start using the
service, your repository or namespace needs to be allowed.
Just be aware that we are now onboarding Fedora contributors who have
a valid [Fedora Account System](https://fedoraproject.org/wiki/Account_System) account.
For more details on how to get allowed for our service, please read
about the process [here](/docs/guide/#2-approval).

## Can I use packit service for any GitHub repository?

Since Packit Service builds your PRs in Fedora Copr build service, by using
Packit-as-a-service, your software needs to comply with [Copr
rules](https://docs.pagure.org/copr.copr/user_documentation.html#what-i-can-build-in-copr).
If any of these points are violated, we'll remove the builds and may put you on
a blocklist, so you won't be able to use the service again.

## How can I contact you?

If you encounter a problem while using packit or Packit Service, please open an
[upstream issue](https://github.com/packit/packit-service/issues/new).
In case of any other questions, feel free to [contact us](/#contact).

## Why do I have to maintain .packit.yaml and a spec file upstream?

[We are working](https://github.com/packit/packit/issues/574) on simplifying the `.packit.yaml` so it's as small as possible.
We will also handle all potentially backward incompatible changes of `.packit.yaml`.
`Spec` file can be downloaded (see specific question below) from [Fedora Pagure](https://src.fedoraproject.org) instead of having it included in the upstream repository.

## But what are the benefits?

Packit makes it trivial to run your project as part of an OS.
It provides feedback to your project at the time when the changes are being developed
so you can fix incompatible code when you are working on it, not when it's already released.
When you push commits to a pull request, you'll get RPM build and test results right away.

## Why Fedora?

We've started with Fedora Linux because we work for Red Hat and we ❤ Fedora.

## How is Packit different from other services?

Packit connects the existing services ([Copr](https://copr.fedorainfracloud.org),
[Fedora dist-git](https://src.fedoraproject.org), [Koji](https://koji.fedoraproject.org),
[Bodhi](https://bodhi.fedoraproject.org)) together.

## Can we use Packit with Gitlab?

Yes! You can find instructions at the [Packit Service page](/docs/guide#gitlab).

## How can I download RPM spec file if it is not part of upstream repository?

If you do not want to have the RPM spec file in your upstream repository,
you can download it in [actions](/docs/configuration/actions/) section.

Add [`actions`](/docs/configuration/actions/) section to your packit.yaml configuration file and
download the spec file in a hook `post_upstream_clone`. The environment where
these commands are run is limited, so make sure to install relevant packages
using the [`srpm_build_deps`](/docs/configuration/#srpm_build_deps) option.

The configuration file with downloading the RPM spec file now looks like this:

```yaml
specfile_path: packit.spec
files_to_sync:
  - packit.spec
  - .packit.yaml
upstream_package_name: packitos
downstream_package_name: packit
actions:
    post-upstream-clone: "wget https://src.fedoraproject.org/rpms/packit/raw/main/f/packit.spec -O packit.spec"
srpm_build_deps:
  - wget
```

## I have a template of a spec file in my repo: can packit work with it?

Yes!

The solution is, again, actions and hooks. Just render the spec after the upstream repo is cloned:

```yaml
specfile_path: my-project.spec
upstream_package_name: my-project-src
downstream_package_name: my-project
actions:
    post-upstream-clone: "make generate-spec"
```

Where the "generate-spec" make target could look like this:

    generate-spec:
        sed -e 's/@@VERSION@@/$(VERSION)/g' my-project.spec.template >my-project.spec

As a practical example, [cockpit-podman
project](https://github.com/cockpit-project/cockpit-podman) is using this
functionality.

## Can I use CentOS Stream with packit service?

Yes, you can! It's very simple, just add `centos-stream-8-x86_64` as a target for
the `copr_build` job:

```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets:
    - centos-stream-8-x86_64
```

## After adding tests I see error 'No FMF metadata found.'

If you encounter this error when running tests via Testing Farm,
it means you forgot to initialize the metadata tree with `fmf init`
and include the `.fmf` directory in the pull request.
See [Testing Farm documentation](/docs/testing-farm) for more information.

## Does packit work with rpmautospec?

Good that you ask. It does, packit works with rpmautospec quite nicely.

Before you start, please make sure that you follow [latest documentation for rpmautospec](https://docs.pagure.org/Fedora-Infra.rpmautospec/).

rpmautospec utilizes two RPM macros:

1. `autorelease` — to populate `Release`
2. `autochangelog` — to figure out changelog

If you want your upstream spec file to also work well when `rpmautospec-rpm-macros` is not installed, set `Release` to this:

    Release:  %{?autorelease}%{!?autorelease:1%{?dist}}

This construct uses `autorelease` macro if it's defined, and if it's not, it sets release to `1%{?dist}`.

For `%changelog`, you don't need to include the changelog file upstream.
You can have it downstream only, which makes sense - changelog is specific to a release.

## How do I install dependencies for my commands in packit-service?

For installations made before September 6, 2022,
Packit runs all the commands, defined by you, in a sandbox which is locked-down.

As for the actions needed during SRPM builds, we are transitioning into a solution where SRPMs are built directly in Copr
and  therefore for these actions, you can define your dependencies via [`srpm_build_deps`
key](/docs/configuration/#srpm_build_deps) in the configuration file. 
You can read more about this transition [here](/posts/copr-srpms).

## A command failed in packit-service: how do I reproduce it locally?

Please read [this document on how to reproduce locally](reproduce-locally).
