---
title: Packit Service jobs configuration 
date: 2023-07-03
weight: 1
---

# Packit Service jobs configuration

Packit Service doesn't have any web interface to configure it,
so the only way to change its behaviour is via the config file generally described [here](/docs/configuration).

When you open a pull request against your upstream repository, packit service
picks up configuration file from your pull request, not from the branch against
the PR is opened. This way, you can polish your .packit.yaml and see the
results right away. (for more info, please see [packit-service#48](https://github.com/packit/packit-service/issues/48))

Once the service starts handling events of your repository, it needs to have a
clear definition of what it should do.

The tasks the packit service should do are defined in section `jobs`. The section is a list of dicts:
```yaml
jobs:
- {key: value}
- {}
```

If there is no `jobs` section in the configuration file, jobs default to:
```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets: [fedora-stable]

- job: tests
  trigger: pull_request
  targets: [fedora-stable]

- job: propose_downstream
  trigger: release
  dist_git_branches:
    - fedora-all
```

If you do not want to use the jobs then the `jobs` section in the configuration file should be empty:
```yaml
jobs: []

```

Packit configuration supports [YAML Merge Key syntax](https://yaml.org/type/merge.html), which can be used to reduce duplication of configuration. Please see the example:
```yaml
# before
jobs:
- job: copr_build
  trigger: pull_request
  targets:
  - centos-stream-8-x86_64
  - centos-stream-9-x86_64
  - fedora-all

- job: copr_build
  trigger: commit
  branch: main
  targets:
  - centos-stream-8-x86_64
  - centos-stream-9-x86_64
  - fedora-all

# after
jobs:
- &copr
  job: copr_build
  trigger: pull_request
  targets:
  - centos-stream-8-x86_64
  - centos-stream-9-x86_64
  - fedora-all

- <<: *copr
  trigger: commit
  branch: main
```

## Configuration keys
#### job
(*str*) name of the job (you can imagine this as a CLI command).

#### trigger
(*str*) what is the trigger for the job? Every job only supports a specific set of triggers.

#### packages
(*list*) Optional, list of package object names (when using monorepositories). If a job object has no such key, all packages of a monorepo should be handled.

Here is an example of the configuration of the job including the `packages`:
```yaml
jobs:
  - job: copr_build
    trigger: pull_request
    targets:
      - fedora-all
      - epel-8
    packages:
      - copr-frontend
      - copr-backend
```

### Overriding global parameters in jobs

You are able to override your global parameters (such as [`specfile_path`](#specfile_path),
[`downstream_package_name`](#downstream_package_name),
[`actions`](#actions)...) for every job. This is very useful
when you want to set up a build or a test matrix using different parameters or
configuration. It's also useful when your release workflow differs between
Fedora and EPEL.

In order to do such a thing, just set a value you want to override in the
respective job.

Example:
```yaml
specfile_path: package.spec
jobs:
- job: some-job
  trigger: ran-out-of-beer
  targets: [fedora-stable]
  specfile_path: somewhere/else/package.spec
```

In this example, the job `some-job` would override [`specfile_path`](#specfile_path) to
`somewhere/else/package.spec` instead of using `./package.spec`.

## Supported jobs

* Upstream jobs
  1. [`copr_build`](../upstream/copr_build)
  2. [`tests`](../upstream/tests)
  3. [`upstream_koji_build`](../upstream/upstream_koji_build)
  4. [`vm_image_build`](../upstream/vm_image_build)
  5. [`propose_downstream`](../upstream/propose_downstream)
* Downstream jobs
  1. [`pull_from_upstream`](../downstream/pull_from_upstream)
  2. [`koji_build`](../downstream/koji_build)
  3. [`bodhi_update`](../downstream/bodhi_update)