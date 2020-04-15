---
title: "FAQ"
date: 2019-07-24
draft: false
disableToc: false
---

### Can I use the packit service as soon as I install it into my repository?

Thanks for your interest in Packit Service!  In order to start using the
service you need to be whitelisted, which is an action to be done by us.  Once
we put you on the whitelist, we'll get in touch with you.  We are now
on-boarding Fedora contributors (with a Fedora Account System account).

### Can I use packit service for any GitHub repository?

Since packit service builds your PRs in Fedora COPR build service, by using
Packit-as-a-service, your software needs to comply with [COPR
rules](https://docs.pagure.org/copr.copr/user_documentation.html#what-i-can-build-in-copr).
If any of these points are violated, we'll remove the builds and may put you on
a blacklist so you won't be able to use the service again.

### How can I contact you?

If you encounter a problem while using Packit-as-a-service, please open an
[upstream issue](https://github.com/packit-service/packit-service/issues/new).
In case of any other questions, feel free to contact
[us](https://github.com/orgs/packit-service/teams/the-packit-team):

* [freenode](https://freenode.net) **#packit**
* **user-cont-team@redhat.com**

### Why do I have to maintain .packit.yaml and a spec file upstream?
[We are working](https://github.com/packit-service/packit/issues/574) on simplifying the `.packit.yaml` so it's as small as possible.
We will also handle all potentially backward incompatible changes of `.packit.yaml`.
`Spec` file can be downloaded (see specific question below) from [Fedora Pagure](https://src.fedoraproject.org) instead of having it included in the upstream repository.

### But what are the benefits?
Packit makes it trivial to run your project as part of an OS.
It provides feedback to your project at the time when the changes are being developed so you can fix incompatible code when you are working on it, not when it's already released.
When you push commits to a pull request, you'll get RPM build and test results right away.

### Why Fedora?
We've started with Fedora Linux because we work for Red Hat and we ❤ Fedora.

### How is Packit different from other services?
Packit connects the existing services ([Copr](https://copr.fedorainfracloud.org), [Pagure](https://src.fedoraproject.org), [Koji](https://koji.fedoraproject.org), [Bodhi](https://bodhi.fedoraproject.org)) together.

### Can we use Packit with Gitlab?
Packit service is closely tied to GitHub right now because most of the projects are hosted on GitHub.
[Let us know](https://github.com/packit-service/packit-service/issues/249) if you'd like to see Gitlab support.

### How can I download RPM spec file if it is not part of upstream repository?
If you do not want to have the RPM spec file in your upstream repository,
you can download it in [actions](/docs/actions/) section.

Add [actions](/docs/actions/) section to your packit.yaml configuration file and
download the spec file in a hook `post_upstream_clone`.
Packit service has a limited set of commands available so please use `wget` or `curl`.

The configuration file with downloading the RPM spec file now looks like this:

```
specfile_path: packit.spec
synced_files:
  - packit.spec
  - .packit.yaml
upstream_package_name: packitos
downstream_package_name: packit
actions:
    post-upstream-clone: "wget https://src.fedoraproject.org/rpms/packit/raw/master/f/packit.spec"
```

### I have a template of a spec file in my repo: can packit work with it?

Yes!

The solution is, again, actions and hooks. Just render the spec after the upstream repo is cloned:
```
specfile_path: my-project.spec
upstream_package_name: my-project-src
downstream_package_name: my-project
actions:
    post-upstream-clone: "make generate-spec"
```

Where the "generate-spec" make target could look like this:
```
generate-spec:
    sed -e 's/@@VERSION@@/$(VERSION)/g' my-project.spec.template >my-project.spec
```

As a practical example, [cockpit-podman
project](https://github.com/cockpit-project/cockpit-podman) is using this
functionality.


### Can I use CentOS Stream with packit service?

Yes, you can! It's very simple, just add `centos-stream-x86_64` as a target for
the `copr_build` job:
```
jobs:
- job: copr_build
  trigger: pull_request
  metadata:
    targets:
      - centos-stream-x86_64
```

### After adding tests I see error 'No FMF metadata found.'

If you encounter this error when running tests via Testing Farm, it means you forgot to initialize the metadata tree with `fmf init` and include the `.fmf` directory in the pull request. See [Testing Farm documentation](/testing-farm) for more information.


### Does packit work with [rpmautospec](https://docs.pagure.org/Fedora-Infra.rpmautospec/)?

Good that you ask. It does, packit works with rpmautospec quite nicely.

Before you start, please make sure that you follow [latest documentation for rpmautospec](https://docs.pagure.org/Fedora-Infra.rpmautospec/).

rpmautospec utilizes two RPM macros:
1. `autorel` — to populate `Release`
2. `autochangelog` — to figure out changelog

If you want your upstream spec file to also work well when `rpmautospec-rpm-macros` is not installed, set `Release` to this:
```
Release:  %{?autorel}%{!?autorel:1}
```

This construct uses `autorel` macro if it's defined, and if it's not, it sets release to 1.

For `%changelog`, you don't need to include the changelog file upstream and you can have it downstream only, which makes sense - changelog is specific to a release.
