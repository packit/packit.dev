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
In the [Architecture](#architecture) section you will find information about Testing Farm's internals.

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

### Test Environment

We currently support running tests in an x86_64 virtual machine only. The system is using qemu-kvm with hardware acceleration. You have full root access in the machine. The test environment currently cannot be easily changed.

Additional machine specs:

- RAM: 2 GB
- HDD: 4 GB

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

## Issues & RFEs

If you have found an issue or have an RFE, please use Testing Farm's general project to [file an issue][issues].

## Architecture

### High Level Overview

Testing Farm is a containerized application running on Kubernetes.
It consists of [4 main components](#components).
It's source code is located under the [testing-farm organization][testing-farm-organization] on gitlab.com.

Currently Testing Farm is deployed on Centos CI Openshift, where it runs it's components and uses the same cluster as the testing infrastructure.
See section [Test Environment](#test-environment) for more information about the test environment.

### Components

#### API

API is a REST API endpoint used for integration with other services.
Packit Service uses this API to trigger tests.
For each trigger request the API runs a [Worker](#worker) on the cluster as a separate pod.

The [Console](#console) component uses it to get the logs of the [Workers](#worker).
Each trigger request MUST contain a unique pipeline ID, generated by the requester, which identifies the request and result and is used to access the console and testing artifacts.

The API is currently in version 0 and it is expected to change.

The source code of the API is located in the [testing-farm/api][testing-farm-api] project.

#### Console

Is a React.js application that uses API's console endpoint to access the Worker's pod console.
Currently it is the main entrypoint for a user.
Packit users can access the console by clicking the `Details` link in the Github PR test results.

![testing-details](/packit-github-tf-details.png)

Console provides also a link to produced test artifacts.

![testing-farm-console](/testing-farm-console.png)

The source code of the Console is located in the [testing-farm/console][testing-farm-console] project.

#### Artifacts

Artifacts component provides access to the artifact storage to the end users.
Artifacts are stored on a persistent volume storage which is shared with all the workers.
Artifacts are not accessed directly, but via the [Console](#console).

The source code of the Artifacts is located in the [testing-farm/artifacts][testing-farm-artifacts] project.

#### Worker

Worker is a container image which runs the testing workloads.
Each worker is run in a separate pod.

The worker can be easily run from your localhost and if it has access to /dev/kvm, it can run basically the same workloads as CI.
We will use it in the future to provide a seamless experience to the end users to reproduce the tests on your localhost.

If you want to try out worker now, you can easily run some tests from a repository with FMF tests with the command bellow.

    podman run --device /dev/kvm quay.io/testing-farm/cruncher cruncher --git-url https://github.com/packit/hello-world --keep-instance

The option `--keep-instance` will keep the VM reserved and you will be presented in the worker logs how to connect to the machine via ssh.

The source code of the Worker is located in the [testing-farm/cruncher][testing-farm-worker] project.

[fmf]: https://fmf.readthedocs.io/
[tmt]: https://tmt.readthedocs.io/
[spec]: https://tmt.readthedocs.io/en/latest/spec.html
[beakerlib]: https://github.com/beakerlib/beakerlib/wiki/man
[selinux]: https://src.fedoraproject.org/tests/selinux/
[systemd-tests]: https://github.com/systemd-rhel/tests
[testing-farm-organization]: https://gitlab.com/testing-farm
[testing-farm-api]: https://gitlab.com/testing-farm/api
[testing-farm-artifacts]: https://gitlab.com/testing-farm/artifacts
[testing-farm-console]: https://gitlab.com/testing-farm/console
[testing-farm-worker]: https://gitlab.com/testing-farm/cruncher
[issues]: https://gitlab.com/testing-farm/general/issues
