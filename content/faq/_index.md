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
In case of any other questions, feel free to contact us:
**user-cont-team@redhat.com**.

### How can I download RPM spec file if it is not part of upstream repository?

If you do not want to have the RPM spec file in your upstream repository,
you can download it in [actions](/docs/actions/) section.

Add [actions](/docs/actions/) section to your packit.yaml configuration file and
download the spec file in a hook `post_upstream_clone`.
Packit service has a limited set of commands available so please use `wget` or `curl`.

The configuration file with downloading the RPM spec file now looks like this:

```yaml
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
```yaml
specfile_path: my-project.spec
upstream_package_name: my-project-src
downstream_package_name: my-project
actions:
    post-upstream-clone: "make generate-spec"
```

Where the "generate-spec" make target could look like this:
```make
generate-spec:
    sed -e 's/@@VERSION@@/$(VERSION)/g' my-project.spec.template >my-project.spec
```

As a practical example, [cockpit-podman
project](https://github.com/cockpit-project/cockpit-podman) is using this
functionality.


### Can I use CentOS Stream with packit service?

Yes, you can! It's very simple, just add `centos-stream-x86_64` as a target for
the `copr_build` job:
```yaml
jobs:
- job: copr_build
  trigger: pull_request
  metadata:
    targets:
      - centos-stream-x86_64
```

### After adding tests I see error 'No FMF metadata found.'

If you encounter this error when running tests via Testing Farm, it means you forgot to initialize the metadata tree with `fmf init` and include the `.fmf` directory in the pull request. See [Testing Farm documentation](/testing-farm) for more information.
