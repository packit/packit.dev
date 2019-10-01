---
title: "Packit Guide"
draft: false
disableToc: false
weight: 3
---

## Agenda

Being fully on-board of the packit train may take some time and effort. This is
why we decided to split the on-boarding process into multiple checkpoints:

1. Have packit tooling installed locally.
2. RPM builds pass on your laptop.
3. You are approved to use packit-service.
4. The project has successful builds inside the service.
5. Packit service handles Fedora Rawhide updates for you.


## The guide

We welcome all the suggestions to this guide, feel free to [open a new issue
here](https://github.com/packit-service/packit.dev/issues/new).

### Have packit tooling installed locally.

In order to start using packit, it's a best practice to install the tooling
locally. All the logic is baked inside `packit` command - so once `packit srpm`
(the command to create a source RPM locally from the current snapshot of the
project) starts passing for you, it's very likely it will work inside the
packit service as well.

This is how you can install packit if you are on Fedora Linux:

```
$ dnf install --enablerepo=updates-testing packit
```

We publish packit to PyPI and it's available as `packitos` project — **packit
at PyPI is something different**

```
$ pip3 install --user packitos
```

You can also help us test the latest development snapshot by installing packit
directly from the master branch:

```
$ pip3 install --user git+https://github.com/packit-service/packit
```

### RPM builds pass on your laptop.

Once you install packit locally, it's time to fill `.packit.yaml` — the
configuration file packit is using.

The documentation file has a document on its own: [configuration]({{< ref
"/docs/configuration" >}}).

Packit supports actions and hooks: you can define commands on your own which
would replace packit's implementation (e.g. get version, or create a tarball)
or run specific commands after the upstream repo is cloned. Please read more
about actions here: [actions]({{< ref "/docs/actions" >}}).

Packit needs an RPM spec file to build your package. The spec file does not
need to be included in the upstream repo and can be generated on the fly or
downloaded (e.g. from Fedora dist-git). Please check out our [FAQ]({{< ref
"/faq" >}}) to read about some other common questions.

You can also read more about the SRPM process in [the document]({{< ref
"/docs/cli/srpm" >}}) dedicated to the `srpm` command.

Is your `packit srpm` finally passing? If not, feel free to reach out to us. If
yes, let's proceed to the next level.

### Running from the dist-git repository

When you are not allowed or do not want to run packit command from the upstream git repository,
you can run commands from the cloned dist-git repository in the same way as you do from upstream.
Make sure, that you specify the `upstream_project_url` in your configuration.

### You are approved to use packit-service.

In order to start using packit service, the killer GitHub app, you need to
install it in your GitHub projects. Then we need to approve you (usually takes
only a few hours).

This process is described in detail over [here]({{< ref "packit-as-a-service" >}}).

### The project has successful builds inside the service.

If a SRPM can be created locally, all should be good in the service as well.
That's the theory. In practice, your laptop and packit service sandbox
environment are vastly different. One thing which can happen easily is that a
command is not available in the sandbox. Also, all the commands are ran using
an unprivileged user - you can't install anything or perform any privileged
operation. In any case, feel free to reach out to us if you are having troubles
and we'd be glad to help.

In order to get RPM builds for every change in your project, you need add a
section `jobs` inside your .packit.yaml and set up a job to do RPM builds for
every change in a PR:
```
jobs:
- job: copr_build
  trigger: pull_request
  metadata:
    targets:
    - fedora-29-x86_64
    - fedora-30-x86_64
    - fedora-rawhide-x86_64
```

Jobs are nicely described over [here]({{< ref "/docs/configuration#jobs" >}}).

If you are looking for an inspiration for your .packit.yaml, check [packit's
config file](https://github.com/packit-service/packit/blob/master/.packit.yaml)
since we try to use all the latest features.

### Packit service handles Fedora Rawhide updates for you.

So you already have `jobs` section in your config. Let's extend it with another
job to push new upstream releases to Fedora rawhide.

```
jobs:
- job: propose_downstream
  trigger: release
  metadata:
    dist-git-branch: master
```

Pretty clear I'd say: when a new upstream release happens, propose it to
dist-git master branch: Fedora Rawhide. Packit enables you to decide whether
you want to do a direct push or create a pull request:

1. If you want direct pushes, you need to set a global config option `create_pr` to `false`:
  ```
  create_pr: false
  jobs:
  - job: propose_downstream
    trigger: release
    metadata:
      dist-git-branch: master
  ```
  Packit user in Fedora is not a proven packager, so you need to grant [packit
  user](https://src.fedoraproject.org/user/packit) the ability to push.
2. Creating pull requests is easy. `create_pr` defaults to true so the config starting this section is good enough.

