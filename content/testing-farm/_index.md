---
title: "Testing Farm"
draft: false
disableToc: false
weight: 4
---

Testing Farm is Packit's testing system.
It is a containerized service for running tests.
Test execution is configured via [Flexible Metadata Format][fmf],
according to the [L1 Metadata][l1] and [L2 Metadata][l2] specification.

Currently only a subset of the metadata specification is implemented:
It is possible to run [BeakerLib](#beakerlib-tests) tests and arbitrary [shell](#shell-tests) commands.
See [Examples](#examples) and [Support Matrix](#support-matrix) for more details.

If you are interested in Testing Farm's architecture, see the section [Architecture](#architecture).

## User Guide

### Add Tests

Test configuration is stored directly in the project repository.
Make sure that you have `fmf` package [installed][install] on your system.
In order to start, initialize the metadata tree in the root directory of your git repository.

    fmf init

The initialization will create `.fmf` directory in your repository which you **must** add in your pull request otherwise Testing Farm will not find your tests.

For small projects store test config in a single `ci.fmf` file.
If your config grows consider using [elasticity][elasticity] to organize your config into multiple files.
Here's a minimal example showing how to enable a simple smoke test:

    /test/build/smoke:
        execute:
            how: shell
            commands:
            - /usr/bin/binary --help

The first line defines name of the test set.
It is possible to define multiple testsets in the config to cover multiple scenarios.
Tests can be fetched from a remote repository as well.
Use the `discover` step to reference the remote repository:

    /test/build/smoke:
        discover:
            how: fmf
            repository: "https://github.com/systemd-rhel/tests"
        execute:
            how: beakerlib

Use custom `filter` in order to choose relevant tests only:

    discover:
        how: fmf
        filter: "tier: 1 & distros: rhel-8"
        repository: "https://github.com/systemd-rhel/tests"

The `prepare` step can be used to define how test environment should be prepared before testing.
Currently only ansible playbooks are supported:

    prepare:
        how: ansible
        playbooks:
            - ci/rhel-8.yml

See the [L2 Metadata][l2] specification for a detailed description of the individual test steps and the whole concept.

### Enable Testing

In order to enable test execution simply include `copr_build` and `tests` jobs in the `.packit.yaml` configuration:

    ...

    jobs:
    - job: copr_build
      trigger: pull_request
      metadata:
        targets:
        - fedora-29-x86_64
        - fedora-30-x86_64
        - fedora-rawhide-x86_64

    - job: tests
      trigger: pull_request
      metadata:
        targets:
        - fedora-29-x86_64
        - fedora-30-x86_64
        - fedora-rawhide-x86_64

Same as for `copr_build` targets, you can use `fedora-development`, `fedora-stable`
and `fedora-all` aliases for test targets as well.

That's it! Since now you should see testing feedback in your pull requests.

### Restart Testing

The testing will be automatically started after an update to the pull request and successful copr build. To trigger retesting manually (can come handy in case of infrastructure issues for example), you can use the following comment in the pull request:

    /packit test

### Support Matrix

Currently supported steps and implementations:

* Discover: fmf
* Prepare: ansible
* Execute: shell, beakerlib

### Test Environment

We currently support running tests in an x86_64 virtual machine only. The system is using qemu-kvm with hardware acceleration. You have full root access in the machine. The test environment currently cannot be easily changed.

Additional machine specs:

* RAM: 2 GB
* HDD: 4 GB

### Debugging and Reproducing

We are working on an easy way how to develop new tests, debug and reproduce issues for failed runs.
Until that is ready, your best option is to spin up a new Fedora Docker container or run the Fedora Cloud Base qcow2 manually via qemu-kvm or libvirt.
See the [Worker](#worker) section for details how to run the tool locally.


## Examples

Get inspiration for a quick start from a couple of real-life examples!

### Shell Tests

Here is an example of a simple integration test for the web server `httpd` and `curl` utility:

    /test/build/smoke:
        execute:
            how: shell
            commands:
            - dnf -y install httpd curl
            - systemctl start httpd
            - echo foo > /var/www/html/index.html
            - curl http://localhost/ | grep foo

Single testset `/test/build/smoke` defines only the `execute` step.
Individual shell commands are provided as a list.
Testing will fail if any of the commands returns a non-zero exit status.

### BeakerLib Tests

Below you can find little bit more interesting example of a `systemd` test configuration:

    /test/pull-request/smoke:
        summary:
            Basic set of quick smoke tests for systemd.
        discover:
            how: fmf
            filter: "tier: 1 & distros: rhel-8"
            repository: "https://github.com/systemd-rhel/tests"
        prepare:
            how: ansible
            playbooks: [ci/rhel-8.yml]
        execute:
            how: beakerlib

This testset enables a set of Tier 1 tests from the shared [systemd tests][systemd-tests] repository.
The meaning of individual attributes is as follows:

* Summary — an optional but useful attribute describing high-level purpose of the testset.
* Discover — instructs to fetch tests from given repository and select relevant ones by provided `filter`.
* Prepare — specifies which ansible playbook should be applied to prepare environment for testing.
* Execute — defines that the beakerlib framework should be used for running the tests.

### FMF Tests

Here's a real-life example of tests enabled for the [fmf][fmf] package.
There are several testsets defined under the [testsets](https://github.com/psss/fmf/tree/master/testsets) directory.
The `smoke` testset enables a super basic test checking availability of the `fmf` command:

	summary:
		Just a basic smoke test
	execute:
		how: shell
		commands:
			- fmf --help

Testset `features` is used to execute all available beakerlib tests from the `fmf` repository:

	summary:
		Essential command line features
	discover:
		how: fmf
		repository: https://github.com/psss/fmf
	execute:
		how: beakerlib

It is also possible to select only a subset of available tests.
This is demonstrated by the `docs` testset.
Use an fmf `filter` like `tier:1` to select tests for execution.
You can also reference a specific feature area instead:

	summary:
		Ensure that documentation is present
	discover:
		how: fmf
		repository: https://github.com/psss/fmf
		filter: coverage:/stories/docs.*
	execute:
		how: beakerlib

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

    podman run --device /dev/kvm quay.io/testing-farm/cruncher cruncher --git-url https://github.com/packit-service/hello-world --keep-instance

The option `--keep-instance` will keep the VM reserved and you will be presented in the worker logs how to connect to the machine via ssh.

The source code of the Worker is located in the [testing-farm/cruncher][testing-farm-worker] project.

[fmf]: https://fmf.readthedocs.io/
[elasticity]: https://fmf.readthedocs.io/en/latest/features.html#elasticity
[install]: https://fmf.readthedocs.io/en/latest/overview.html#install

[l1]: https://pagure.io/fedora-ci/metadata/blob/master/f/l1
[l2]: https://pagure.io/fedora-ci/metadata/blob/master/f/l2
[beakerlib]: https://github.com/beakerlib/beakerlib/wiki/man
[systemd-tests]: https://github.com/systemd-rhel/tests

[testing-farm-organization]: https://gitlab.com/testing-farm
[testing-farm-api]: https://gitlab.com/testing-farm/api
[testing-farm-artifacts]: https://gitlab.com/testing-farm/artifacts
[testing-farm-console]: https://gitlab.com/testing-farm/console
[testing-farm-worker]: https://gitlab.com/testing-farm/cruncher

[issues]: https://gitlab.com/testing-farm/general/issues
