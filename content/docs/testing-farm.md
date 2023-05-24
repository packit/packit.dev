---
title: Testing Farm
weight: 4
aliases: [/testing-farm]
---

# Testing Farm

[Testing Farm][tf] is Packit's testing system.
Test execution is managed by [tmt][tmt] tool.

## Enable Testing

In order to enable test execution simply include `tests` and required `copr_build` jobs in the `.packit.yaml` configuration:

```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets:
  - fedora-all
  
- job: tests
  trigger: pull_request
  targets:
  - fedora-all
```
The test job by default requires Copr build to be built before running tests, and then
it is installed into the testing environment.

If you want to run tests without a Copr build, the test job needs to include `skip_build` (described below) option in the job configuration:
```yaml
  jobs:
  - job: tests
    trigger: pull_request
    targets:
    - fedora-all
    skip_build: true
```

If you want to run multiple `tests` jobs for the same trigger with different configurations, you need to specify 
the `identifier` options (see `Optional parameters` below):
```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets:
  - fedora-all
  
- job: tests
  trigger: pull_request
  identifier: first
  targets:
  - fedora-rawhide
  
- job: tests
  trigger: pull_request
  identifier: second
  targets:
  - fedora-latest-stable
```

Required parameters:
* **targets** - Specify which "builds" you want to test.
[As with copr_build job](/docs/configuration#available-copr-build-targets) you can use
specific targets such as `fedora-34-x86_64`. Or just the distro part,
like `centos-stream-8`, in which case the architecture is `x86_64`.

You can also use the [aliases provided by Packit](/docs/configuration#aliases)
to not need to change the config file when the new system version is released.

Each target is then mapped to a [(tmt) distro](https://tmt.readthedocs.io/en/latest/spec/context.html#dimension)
and to a [Testing farm's compose](https://api.dev.testing-farm.io/v0.1/composes)
when submitting a test. You can override the default (target to distro) mapping by
specifying `targets` as a dictionary instead of as a list.
In the following example, the `epel-8-x86_64` build will be tested on `centos-8`
distro (otherwise the default would be `centos-stream-8`) and for
`epel-7-x86_64` build the default mapping (to `centos-7` distro) will be used:
```yaml
  targets:
    epel-8-x86_64:
      distros: [centos-8]
    epel-7-x86_64: {}
```

Optional parameters:
* **fmf_url** - Git repository containing the metadata (FMF) tree.
  Use any format acceptable by the git clone command.
* **fmf_ref** - Branch, tag or commit specifying the desired git revision.
  Defaults to "master" when **fmf_url** is specified and **fmf_ref** is not.
* **fmf_path** - Path to the fmf root (the parent path where `.fmf` folder is located) relative to the git root.
  Defaults to `.` (git root).
* **tmt_plan** - Run plans by the given name. Can be passed as a regular
  expression.
* **tf_post_install_script** - Bash script as a string to run during the guest provisioning. 
* **tf_extra_params** - a free-form dictionary that allows specifying extra parameters to the Testing Farm. 
For a complete list of parameters, refer to the [Testing Farm documentation](https://testing-farm.gitlab.io/api/#operation/requestsPost). 
The dictionary must follow the structure of the Testing Farm request. Options specified in the dictionary have the 
highest precedence, i.e. can override Packit's defaults. They are being merged with the Packit's values, the only exception
is the `artifacts` list, which is combined with the artifact passed by Packit. Also, beware of indentation-sensitivity of the YAML format. 
You can verify that the option is processed correctly using a [YAML parser](https://yaml-online-parser.appspot.com/). Refer to the [configuration examples](/docs/configuration/examples/#tests) for more information.
* **skip_build** - Whether to skip the build phase and only run tests (defaults to false). 
  Enabling this will cause no Copr build to be built and installed into the testing environment, 
  only submitting request to Testing Farm (the selected components to be installed should be part of the TMT definitions).
* **env** - A dictionary you can use to set any environment variable that will be available in the Testing Farm
  environment where the tests are run.
* **identifier** – Suffix added to the name of a GitHub check run. This is needed
  when you have multiple `tests` jobs with different configuration. For
  example if you set this to `e2e-tests`, then a check run for Rawhide would be
  named `testing-farm:fedora-rawhide-x86_64:e2e-tests`.

There are also environment variables set by Packit:
* `PACKIT_FULL_REPO_NAME`
* `PACKIT_UPSTREAM_NAME`
* `PACKIT_UPSTREAM_URL`
* `PACKIT_DOWNSTREAM_NAME`
* `PACKIT_DOWNSTREAM_URL`
* `PACKIT_PACKAGE_NAME`
* `PACKIT_PACKAGE_NVR`
* `PACKIT_BUILD_LOG_URL`
* `PACKIT_SRPM_URL`
* `PACKIT_COMMIT_SHA`
* `PACKIT_COPR_PROJECT`, e.g. `packit/packit-releases`
* `PACKIT_COPR_RPMS`, space-separated list of RPMs that were built in Copr

And there are also pairs of variables for pull-request jobs:
* `PACKIT_SOURCE_SHA` and `PACKIT_TARGET_SHA`
* `PACKIT_SOURCE_BRANCH` and `PACKIT_TARGET_BRANCH`
* `PACKIT_SOURCE_URL` and `PACKIT_TARGET_URL`

Note that some variables do not need to be set if the value is unknown, irrelevant or not-configured.

## Restart Testing

The testing will automatically start after an update to the pull request
(and successful Copr build if `skip_build` is false).
To trigger retesting manually (can come handy in case of infrastructure
issues for example), you can use the following comment in the pull request:

    /packit test

Or if you want to re-trigger only failed tests, you can use the following comment
in the pull request:

    /packit retest-failed

## Running tests with builds from another pull request
It is also possible to run the tests with Copr builds built by Packit in another pull request 
(in a different repository). This can be useful when you are working on a change that spans 
multiple projects and needs to be tested together.
These tests are possible to trigger only via a comment containing the argument specifying the pull request as:

    /packit test <namespace>/<repo>#<pr_id>

The requirement is that in the specified PR, there were recent successful builds created by Packit
for the targets configured in the repository with the "main" pull request.
This is a new feature, so the behaviour may be adjusted in the future. 
Please reach out back to us for help or with your suggestions.

## Creating Tests

The easiest way to get started with defining tests is to use the [tmt][tmt] tool
which will help you with the setup.
Please follow [tmt's guide][tmt-guide] to get started.

### Example test structure

Once your project is initialized, this is how your structure can look like:
```
$ tmt
Found 3 tests: /tests/full, /tests/smoke and /tests_recording.
Found 4 plans: /plans/full, /plans/rpmlint, /plans/session-recording and /plans/smoke.
Found 0 stories.

$ ls -1 plans/
full.fmf
main.fmf
rpmlint.fmf
session-recording.fmf
smoke.fmf
```

## More Examples

Get inspiration for a quick start from a couple of real-life examples! These
samples live in `.fmf` files inside tests or plans directories. You can also have a look 
at [tmt examples site](https://tmt.readthedocs.io/en/stable/examples.html).

### Using Filters

Use a custom `filter` in the discover step in order to choose relevant tests only:

```yaml
discover:
    how: fmf
    filter: "tier: 1"
    url: https://src.fedoraproject.org/tests/selinux
```

### Prepare Step

The `prepare` step can be used to define how test environment should be prepared before testing.
Provide one or more paths to ansible playbooks:

```yaml
prepare:
    how: ansible
    playbook:
        - setup/packages.yml
```

### Apache Test

Here is an example of a simple integration test for the web server `httpd` and `curl` utility:

```yaml
execute:
    script:
      - dnf -y install httpd curl
      - systemctl start httpd
      - echo foo > /var/www/html/index.html
      - curl http://localhost/ | grep foo
```

The plan above defines only the `execute` step.
Individual shell commands are provided as a list.
Testing will fail if any of the commands returns a non-zero exit status.

### Systemd Tests

Below you can find a bit more interesting example of a `systemd` test configuration:

```yaml
summary:
    Basic set of quick smoke tests for systemd.
discover:
    how: fmf
    filter: "tier: 1 & distro: rhel-8"
    url: "https://github.com/systemd-rhel/tests"
prepare:
    how: ansible
    playbook: [setup/packages.yml]
execute:
    how: tmt
```

This plan enables a set of Tier 1 tests from the shared [systemd tests][systemd-tests] repository.
The meaning of individual attributes is as follows:

- summary — an optional but useful attribute describing high-level purpose of the plan.
- discover — instructs to fetch tests from given repository and select relevant ones by provided `filter`.
- prepare — specifies which ansible playbook should be applied to prepare environment for testing.
- execute — defines that the `tmt` should be used for running the tests.

### FMF Tests

Here's a real-life example of tests enabled for the [fmf][fmf] package.
There are several plans defined under the [plans](https://github.com/psss/fmf/tree/master/plans) directory.
The `smoke` plan enables a super basic test checking availability of the `fmf` command:

```yaml
summary:
    Just a basic smoke test
execute:
    script: fmf --help
```

Plan `features` is used to execute all available beakerlib tests from the `fmf` repository:

```yaml
summary:
    Essential command line features
discover:
    how: fmf
    url: https://github.com/psss/fmf
execute:
    how: tmt
```

It is also possible to select only a subset of available tests.
This is demonstrated by the `docs` plan.
Use an fmf `filter` like `tier:1` to select tests for execution.
You can also reference a specific feature area instead:

```yaml
summary:
    Ensure that documentation is present
discover:
    how: fmf
    url: https://github.com/psss/fmf
    filter: coverage:/stories/docs.*
execute:
    how: tmt
```

See the [stories](https://github.com/psss/fmf/tree/master/stories) directory to get some inspiration for organizing stories and requirements.

### Running linters

Running linters on your code is easy to set up using Testing Farm and tmt.
Linters are tools which you can install from the distribution, and they usually
just require a path to files which they check. Here is a plan which you can use
to run `rpmlint` on your spec file.

#### rpmlint

We are checking our spec files with rpmlint in our project:
* [ogr - plans/linters.fmf](https://github.com/packit/ogr/blob/main/plans/linters.fmf)
* [Packit - plans/rpmlint.fmf](https://github.com/packit/packit/blob/main/plans/rpmlint.fmf)

```yaml
summary:
    Execute rpmlint on the spec file
discover:
    how: shell
    tests:
      - name: rpmlint
        test: rpmlint packit.spec
prepare:
  - name: packages
    how: install
    package:
    - rpmlint
execute:
    how: tmt
```

#### rpminspect

[`rpminspect`](https://github.com/rpminspect/rpminspect) can analyze your packages
and give you information related to licensing, metadata, manpages, desktop app
metadata, file ownership & permissions and much much more.

Here's a tmt plan you can use to have rpminspect invoked on SRPMs produced by Packit:

```yaml
summary:
    Check rpm files with rpminspect
discover:
    how: shell
    tests:
      - name: rpminspect
        test: rpminspect-fedora /tmp/*.src.rpm
prepare:
  - name: packages
    how: install
    package:
    - rpminspect
    - rpminspect-data-fedora
  - how: shell
    script: cd /tmp && curl -O ${PACKIT_SRPM_URL}
execute:
    how: tmt
```

You can run rpminspect also using the CentOS Stream configuration. This should prepare you before opening CentOS Stream dist-git MRs.
```yaml
summary:
    Check rpm files with rpminspect
discover:
    how: shell
    tests:
      - name: rpminspect SRPM
        test: rpminspect-centos -v -t VERIFY --profile=centos-stream-9-devel /tmp/*.src.rpm
prepare:
  - name: packages
    how: install
    package:
    - rpminspect
    - rpminspect-data-centos
  - how: shell
    script: cd /tmp && curl -O ${PACKIT_SRPM_URL}
execute:
    how: tmt
```

Since rpminspect is under active development, you should consider installing the latest version from this Copr project: https://copr.fedorainfracloud.org/coprs/dcantrell/rpminspect/

You can also inspect binary RPM files, [we will make this easy to do as well in future](https://github.com/packit/packit.dev/issues/607).

## Testing Farm API

Packit Service communicates with Testing Farm via its [API][testing-farm-api].

## Issues & RFEs

If you have found an issue or have an RFE, you can file an [issue in nucleus project][issues].

[fmf]: https://fmf.readthedocs.io/
[tmt]: https://tmt.readthedocs.io/
[tmt-guide]: https://tmt.readthedocs.io/en/latest/guide.html
[fedora-tmt]: https://docs.fedoraproject.org/en-US/ci/tmt
[spec]: https://tmt.readthedocs.io/en/latest/spec.html
[systemd-tests]: https://github.com/systemd-rhel/tests
[testing-farm-api]: https://testing-farm.gitlab.io/api
[issues]: https://gitlab.com/testing-farm/general/-/issues
[tf]: https://docs.testing-farm.io/general/0.1/index.html
