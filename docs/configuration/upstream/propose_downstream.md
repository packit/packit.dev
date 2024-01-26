---
title: Propose downstream
sidebar_position: 5
---

# `job: propose_downstream`

Land a new upstream release in Fedora (or CentOS Stream). This job only makes sure the changes
happen in dist-git - no builds. A pull request is created as a result.

:::tip CentOS Stream support

We newly support `propose-downstream` also for CentOS Stream. The workflow is the same as for Fedora, but there are few
configuration specifics, see [the subsection below](#syncing-the-release-to-centos-stream).

:::

## Supported triggers

* **release**

## Optional parameters

* **dist_git_branches** - a (list of) branches in dist-git where packit should work (defaults to `main` which represents _Fedora Rawhide_).
  You can also use the [aliases provided by Packit](/docs/configuration#aliases)
  to not need to change the config file when the new system version is released.

:::info
Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,
please see the details [here](/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent).
:::

## Example

```yaml
jobs:
- job: propose_downstream
  trigger: release
- job: propose_downstream
  trigger: release
  dist_git_branches:
    - f39
```

This config would update Fedora Rawhide and Fedora 39 dist-git branches.



## Syncing the release to CentOS Stream

Recently, we have implemented support for `propose-downstrem` also for CentOS Stream. This means that you can now configure
the upstream release to trigger release syncing the same way as for Fedora to CentOS Stream dist-git repositories
hosted in https://gitlab.com/redhat/centos-stream/rpms.

:::caution

This integration has just been added, so we will be happy if you could help us
test it out and improve it! If you come across any issues or have suggestions for improvement, 
please take a moment to [report them to us](https://github.com/packit/packit-service/issues/new). 
We value general feedback as well, so don't hesitate to [reach out](/#contact)!

:::

To sync the release to CentOS Stream, you currently need to specify the following parameters:
- `pkg_tool: centpkg` (the default is `fedpkg`)
- `dist_git_branches`:  `c8s` and/or `c9s`. 

Besides that, you need to:
1. specify the [`packages`](/docs/configuration#packages) with distinct items for Fedora and CentOS Stream. 
For each `packages` item, include configuration specifics tailored to the respective environment. This may
be setting the `pkg_tool` option and, in case of different specfiles being used in Fedora and CentOS Stream, 
specifying distinct `actions` for downloading the specfiles as needed.
2. specify the particular packages in the jobs (as `packages: [my-package-fedora]` for Fedora-related jobs and 
`[packages: my-package-centos]` for CentOS Stream-related job)

Here is an example of such a configuration:
```yaml
---
downstream_package_name: nispor
upstream_project_url: https://github.com/nispor/nispor
issue_repository: https://github.com/nispor/nispor
update_release: false
upstream_package_name: nispor
upstream_tag_template: v{version}
copy_upstream_release_description: false

packages:
  nispor-fedora:
    actions:
      post-upstream-clone:
        - wget https://src.fedoraproject.org/rpms/nispor/raw/rawhide/f/nispor.spec
  nispor-centos:
    pkg_tool: centpkg
    actions:
      post-upstream-clone:
        - wget https://gitlab.com/redhat/centos-stream/rpms/nispor/-/raw/c9s/nispor.spec

jobs:
  - job: propose_downstream
    trigger: release
    packages: [nispor-fedora]
    dist_git_branches:
      - fedora

  - job: propose_downstream
    trigger: release
    packages: [nispor-centos]
    dist_git_branches:
      - c9s
```
