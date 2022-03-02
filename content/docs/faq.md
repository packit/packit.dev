---
title: "FAQ"
date: 2019-07-24
disableToc: false
weight: 5
aliases: [/faq]
---

# FAQ

## Can I use the packit service as soon as I install it into my repository?

Thanks for your interest in Packit Service! In order to start using the
service, your repository or namespace needs to be allowed.
For each installation we create a new issue in our
[allowlist tracker](https://github.com/packit/notifications/issues/)
to resolve this.
Just be aware that we are now onboarding Fedora contributors who have
a valid [Fedora Account System](https://fedoraproject.org/wiki/Account_System) account
and have signed [FPCA](https://fedoraproject.org/wiki/Legal:Fedora_Project_Contributor_Agreement).
So provide us enough information (your FAS account) in the issue.

## Can I use packit service for any GitHub repository?

Since Packit Service builds your PRs in Fedora COPR build service, by using
Packit-as-a-service, your software needs to comply with [COPR
rules](https://docs.pagure.org/copr.copr/user_documentation.html#what-i-can-build-in-copr).
If any of these points are violated, we'll remove the builds and may put you on
a blocklist so you won't be able to use the service again.

## How can I contact you?

If you encounter a problem while using packit or Packit Service, please open an
[upstream issue](https://github.com/packit/packit-service/issues/new).
In case of any other questions, feel free to contact
[us](https://github.com/orgs/packit/teams/the-packit-team):

- **#packit** on [Libera.Chat](https://libera.chat/)
- **hello@packit.dev**

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
[Pagure](https://src.fedoraproject.org), [Koji](https://koji.fedoraproject.org),
[Bodhi](https://bodhi.fedoraproject.org)) together.

## Can we use Packit with Gitlab?

Yes!

GitLab doesn't have an app functionality and we don't use the
[Integrations](https://docs.gitlab.com/ee/user/project/integrations/overview.html)
as it doesn't solve authentication.
To enable Packit, you need to manually configure a webhook.

Go to `Settings` -> `Webhooks` and add https://prod.packit.dev/api/webhooks/gitlab or
https://stg.packit.dev/api/webhooks/gitlab as `URL`.
Select `Push events`, `Comments`, `Issues events` and `Merge request events` as `Triggers`.
Do not provide `Secret token` yet and click `Add webhook`.
You should see the created hook at the bottom of the page now.
Select `Test` and for example `Merge requests events`.
At the top of the page appears a red
`Hook executed successfully but returned HTTP 401 "X-Gitlab-Token not in request.headers"`.
Wait a bit and check `Issues` of the project and after a while there should be
a new confidential `Packit-Service Authentication` issue with instructions how to finish the setup.

## How can I download RPM spec file if it is not part of upstream repository?

If you do not want to have the RPM spec file in your upstream repository,
you can download it in [actions](/docs/actions/) section.

Add [actions](/docs/actions/) section to your packit.yaml configuration file and
download the spec file in a hook `post_upstream_clone`.
Packit service has a limited set of commands available so please use `wget` or `curl`.

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
  metadata:
    targets:
      - centos-stream-8-x86_64
```

## After adding tests I see error 'No FMF metadata found.'

If you encounter this error when running tests via Testing Farm,
it means you forgot to initialize the metadata tree with `fmf init`
and include the `.fmf` directory in the pull request.
See [Testing Farm documentation](/docs/testing-farm) for more information.

## Does packit work with [rpmautospec](https://docs.pagure.org/Fedora-Infra.rpmautospec/)?

Good that you ask. It does, packit works with rpmautospec quite nicely.

Before you start, please make sure that you follow [latest documentation for rpmautospec](https://docs.pagure.org/Fedora-Infra.rpmautospec/).

rpmautospec utilizes two RPM macros:

1. `autorel` — to populate `Release`
2. `autochangelog` — to figure out changelog

If you want your upstream spec file to also work well when `rpmautospec-rpm-macros` is not installed, set `Release` to this:

    Release:  %{?autorel}%{!?autorel:1}

This construct uses `autorel` macro if it's defined, and if it's not, it sets release to 1.

For `%changelog`, you don't need to include the changelog file upstream and you can have it downstream only, which makes sense - changelog is specific to a release.

## How do I install dependencies for my commands in packit-service?

We are running all commands, defined by you, in a sandbox which is locked-down.
At the moment we don't have any mechanism for you to define the dependencies
you need and us making them available for you.

In the mean time we are solving these requests one by one, so [please reach out
to us](#how-can-i-contact-you).

## A command failed in packit-service: how do I reproduce it locally?

Please read [this document on how to reproduce locally]({{< ref "reproduce-locally.md" >}}).
