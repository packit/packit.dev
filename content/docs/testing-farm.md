---
title: Testing Farm
weight: 4
aliases: [/testing-farm]
---

# Testing Farm

[Testing Farm][tf] is Packit's testing system.
Test execution is managed by [tmt][tmt] tool.

## Enable Testing

In order to enable test execution simply include `tests` jobs in the `.packit.yaml` configuration:

```yaml
jobs:
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
* **tmt_plan** - Run plans by the given name. Can be passed as a regular
  expression.
* **tf_post_install_script** - Bash script as a string to run during the guest provisioning. 
* **skip_build** - Whether to skip the build phase and only run tests (defaults to false). 
  Enabling this will cause no Copr build to be built and installed into the testing environment, 
  only submitting request to Testing Farm (the selected components to be installed should be part of the TMT definitions).
* **env** - A dictionary you can use to set any environment variable that will be available in the Testing Farm
  environment where the tests are run.

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
samples live in `.fmf` files inside tests or plans directories.

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

[`rpminspect`](https://github.com/rpminspect/rpminspect) can analyze your SRPMs
and give you information related to licensing, metadata, manpages, desktop app
metadata, file ownership & permissions and much much more.

Here's a tmt plan you can use to have rpminspect invoked on SRPMs produced by Packit:

```yaml
summary:
    Fetch SRPM and check it with rpminspect
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
