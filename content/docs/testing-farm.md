---
title: "Testing Farm"
draft: false
disableToc: false
weight: 4
aliases: [/testing-farm]
---

# Testing Farm

Testing Farm is Packit's testing system.
It is a containerized service for running tests.
Test execution is configured via [Flexible Metadata Format][fmf],
according to the [Metadata Specification][spec].

Go through the [User Guide](#user-guide) to get a quick start introduction.
See the [Examples](#examples) section to get some more inspiration.
The [Support Matrix](#support-matrix) gives overview of what's currently supported.

## User Guide

The easiest way to get started is to use the [tmt][tmt] tool which will help you with the setup.
Install the latest stable version directly from Fedora. See [docs][tmt] for more installation options.

    sudo dnf install -y tmt

### Enable Testing

In order to enable test execution simply include `tests` jobs in the `.packit.yaml` configuration:

```yaml
    jobs:
    - job: tests
      trigger: pull_request
      metadata:
        targets:
        - fedora-all
```

You can use `fedora-development`, `fedora-stable` or release specific targets such as `fedora-31-x86_64` for test targets as well.

### Smoke Test

Let's enable a very simple smoke test which will run your application and check the exit code.
Change to the root of the project git repository and use the `tmt init` command to initialize the metadata.
For the simple smoke test we'll be using the `mini` template:

    $ cd ~/git/did
    $ tmt init --template mini
    Tree '/home/psss/git/did' initialized.
    Applying template 'mini'.
    Directory '/home/psss/git/did/plans' created.
    Plan '/home/psss/git/did/plans/example.fmf' created.

Let's see what the example plan contains:

    $ cat plans/example.fmf
    summary:
        Basic smoke test
    execute:
        script: tmt --help

Update the `script` line with the desired command line which should be executed as a test.
It's also possible to provide several commands to be executed in this way:

```yaml
    summary:
        Basic smoke test
    execute:
        script:
            - did --help
            - did --test
```

You might want to rename the plan to something more reasonable like `smoke.fmf`.
When commiting new changes, make sure you include the special `.fmf` directory as well.
It marks the root of the metadata tree and is needed for proper metadata detection.

    $ git add plans .fmf

Now just create a new pull request and you're done!

### BeakerLib Test

Let's have a bunch of beakerlib tests stored in a git repository with their [metadata][spec].
See the shared [tests/selinux][selinux] repository for an example of such tests.
In order to enable these tests we will use `tmt plan create` to create the template for us:

    $ tmt init
    Tree '/home/psss/git/did' initialized.

    $ tmt plan create /plans/integration --template full
    Directory '/home/psss/git/did/plans' created.
    Plan '/home/psss/git/did/plans/integration.fmf' created.

Here's what we get in the `integration.fmf` file:

```yaml
    summary:
        Essential command line features
    discover:
        how: fmf
        repository: https://github.com/psss/tmt
    prepare:
        how: ansible
        playbooks: plans/packages.yml
    execute:
        how: beakerlib
```

Let's update the summary and repository link to point to the right location.
The `prepare` section can be used to prepare the environment for testing.
As we don't have any extra requirements we can safely remove it for now.
The resulting `integration.fmf` will look like this:

```yaml
    summary:
        Run integration tests for all SELinux components
    discover:
        how: fmf
        repository: https://src.fedoraproject.org/tests/selinux
    execute:
        how: beakerlib
```

That's it. Now just commit the changes and create a new pull request.
Make sure you include the special `.fmf` directory in the commit as well.
It marks the root of the metadata tree and is needed for proper metadata detection.

    $ git add plans .fmf

Now let's wait for the results from Packit directly in the pull request!

### Restart Testing

The testing will be automatically started after an update to the pull request and successful copr build.
To trigger retesting manually (can come handy in case of infrastructure issues for example), you can use the following comment in the pull request:

    /packit test

### Support Matrix

Currently only a subset of the metadata specification is implemented:
It is possible to run [BeakerLib](#beakerlib-tests) tests and arbitrary [shell](#shell-tests) commands.
List of supported steps and implementations:

- Discover: fmf
- Prepare: ansible
- Execute: shell, beakerlib

See the [Metadata Specification][spec] for a detailed description of individual test steps.

### Debugging and Reproducing

We are working on an easy way how to develop new tests, debug and reproduce issues for failed runs.
Until that is ready, your best option is to spin up a new Fedora Docker container or run the Fedora Cloud Base qcow2 manually via qemu-kvm or libvirt.
See the [Worker](#worker) section for details how to run the tool locally.

## Examples

Get inspiration for a quick start from a couple of real-life examples!

### Using Filters

Use a custom `filter` in the discover step in order to choose relevant tests only:

```yaml
    discover:
        how: fmf
        filter: "tier: 1"
        repository: https://src.fedoraproject.org/tests/selinux
```

### Prepare Step

The `prepare` step can be used to define how test environment should be prepared before testing.
Provide one or more paths to ansible playbooks:

```yaml
    prepare:
        how: ansible
        playbooks:
            - setup/packages.yml
```

### Apache Test

Here is an example of a simple integration test for the web server `httpd` and `curl` utility:

```yaml
    /apache/smoke:
        execute:
            script:
            - dnf -y install httpd curl
            - systemctl start httpd
            - echo foo > /var/www/html/index.html
            - curl http://localhost/ | grep foo
```

Plan `/apache/smoke` defines only the `execute` step.
Individual shell commands are provided as a list.
Testing will fail if any of the commands returns a non-zero exit status.

### Systemd Tests

Below you can find little bit more interesting example of a `systemd` test configuration:

```yaml
    /systemd/smoke:
        summary:
            Basic set of quick smoke tests for systemd.
        discover:
            how: fmf
            filter: "tier: 1 & distro: rhel-8"
            repository: "https://github.com/systemd-rhel/tests"
        prepare:
            how: ansible
            playbooks: [setup/packages.yml]
        execute:
            how: beakerlib
```

This plan enables a set of Tier 1 tests from the shared [systemd tests][systemd-tests] repository.
The meaning of individual attributes is as follows:

- Summary — an optional but useful attribute describing high-level purpose of the plan.
- Discover — instructs to fetch tests from given repository and select relevant ones by provided `filter`.
- Prepare — specifies which ansible playbook should be applied to prepare environment for testing.
- Execute — defines that the beakerlib framework should be used for running the tests.

### FMF Tests

Here's a real-life example of tests enabled for the [fmf][fmf] package.
There are several plans defined under the [plans](https://github.com/psss/fmf/tree/master/plans) directory.
The `smoke` plan enables a super basic test checking availability of the `fmf` command:

```yaml
    summary:
    	Just a basic smoke test
    execute:
    	how: shell
    	script: fmf --help
```

Plan `features` is used to execute all available beakerlib tests from the `fmf` repository:

```yaml
    summary:
    	Essential command line features
    discover:
    	how: fmf
    	repository: https://github.com/psss/fmf
    execute:
    	how: beakerlib
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
    	repository: https://github.com/psss/fmf
    	filter: coverage:/stories/docs.*
    execute:
    	how: beakerlib
```

See the [stories](https://github.com/psss/fmf/tree/master/stories) directory to get some inspiration for organizing stories and requirements.

## Testing Farm API

Packit Service communicates with Testing Farm via its [API][testing-farm-api].

## Issues & RFEs

If you have found an issue or have an RFE, you can file an [issue in nucleus project][issues].

[fmf]: https://fmf.readthedocs.io/
[tmt]: https://tmt.readthedocs.io/
[spec]: https://tmt.readthedocs.io/en/latest/spec.html
[beakerlib]: https://github.com/beakerlib/beakerlib/wiki/man
[selinux]: https://src.fedoraproject.org/tests/selinux/
[systemd-tests]: https://github.com/systemd-rhel/tests
[testing-farm-api]: https://testing-farm.gitlab.io/api
[issues]: https://gitlab.com/testing-farm/nucleus/-/issues
