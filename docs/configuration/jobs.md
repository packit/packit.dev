---
title: Packit Service jobs configuration 
date: 2023-07-03
sidebar_position: 1
---

# Packit Service jobs configuration

Packit Service doesn't have any web interface, but its behaviour can be configured via the config file 
generally described [here](/docs/configuration).

The tasks Packit Service should do should be defined in the `jobs` section. The section is a list of dictionaries:
```yaml
jobs:
- {key: value}
- {}
```

When there is an action (pull request, commit, etc.) in the upstream repository, Packit Service takes the config 
file from the relevant git ref (release tag for release, PR head for pull requests, related dist-git commit for downstream jobs).
Then, it tries to find a matching job in the `jobs` sections for the particular event (e.g. for pull request, jobs with
`pull_request` trigger are matched).

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

Do not forget that you can also define common Packit config options at the
top level (such as `targets` or `actions`) and only override them when
needed in the `jobs` or `packages` section.

For more complex structures it can be useful to have yaml-anchors that are ignored,
in which case you can use the top-level `_` key, for example:
```yaml
_:
  basic-test: &template-basic-test
    job: tests
    trigger: pull_request
    targets:
      - centos-stream-8-x86_64
      - centos-stream-9-x86_64
      - fedora-all

jobs:

- <<: *template-basic-test
  identifier: kernel-rt-sanity
  labels:
    - kernel-rt
  env:
    RPM_NAME=kernel-rt

- <<: *template-basic-test
  identifier: kernel-sanity
  labels:
    - kernel
  env:
    RPM_NAME=kernel
```

This is typically useful when creating a number of tests which needs various
parameters, but many parameters stay same. For compatibility reasons, you can
also define a job that is not executed by setting `trigger` to `ignore`. The
above example can be rewritten as:
```yaml
jobs:
- &template-basic-test
  job: tests
  trigger: ignore
  targets:
    - centos-stream-8-x86_64
    - centos-stream-9-x86_64
    - fedora-all

- <<: *template-basic-test
  identifier: kernel-rt-sanity
  trigger: pull_request
  labels:
    - kernel-rt
  env:
    RPM_NAME=kernel-rt

- <<: *template-basic-test
  identifier: kernel-sanity
  trigger: pull_request
  labels:
    - kernel
  env:
    RPM_NAME=kernel
```
However, using the `_` placeholder key is preferred as it provides more flexibility.

## Configuration keys
#### job
(*str*) name of the job (you can imagine this as a CLI command).

#### trigger
(*str*) what is the trigger for the job? Every job only supports a specific set of triggers.
You can also use the special value `ignore` that indicates not to execute the job at all 
(used for templates or temporarily disabled jobs).

#### packages
(*list*) Optional, list of package object names (when using monorepositories). If a job object has no such key, 
all packages of a monorepo should be handled. The package object names need to be defined
in the [`packages`](/docs/configuration#packages) dictionary.

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

#### manual_trigger
(*bool*) Option that enables triggering the job only manually (via pull-request/issue comment or rerunning GitHub check).
Defaults to `false`.

### Overriding global parameters in jobs

You are able to override your global parameters (such as [`specfile_path`](/docs/configuration#specfile_path),
[`downstream_package_name`](/docs/configuration#downstream_package_name),
[`actions`](/docs/configuration/actions)...) for every job. This is very useful
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

In this example, the job `some-job` would override [`specfile_path`](/docs/configuration#specfile_path) to
`somewhere/else/package.spec` instead of using `./package.spec`.

## Supported jobs

* Upstream jobs
  1. [`copr_build`](upstream/copr_build)
  2. [`tests`](upstream/tests)
  3. [`upstream_koji_build`](upstream/upstream_koji_build)
  4. [`vm_image_build`](upstream/vm_image_build)
  5. [`propose_downstream`](upstream/propose_downstream)
* Downstream jobs
  1. [`pull_from_upstream`](downstream/pull_from_upstream)
  2. [`koji_build`](downstream/koji_build)
  3. [`bodhi_update`](downstream/bodhi_update)
