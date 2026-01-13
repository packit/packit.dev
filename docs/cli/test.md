---
title: test
date: 2025-09-15
sidebar_position: 8
---

# `packit test`

Run tmt tests locally using content from the upstream repository, mimicking the behavior of the tmt functionality.

By default, if no RPM paths are passed, packit builds RPMs from the current repository's source code using `mock`, then runs tmt tests in a container environment. This enables local debugging and iteration without requiring commits or CI pipeline triggers.

You can override test behavior and build configuration directly from the command line using various options like `--target`, `--plan`, `--rpm-paths`, and `--clean-before`/`--no-clean-before`.

The command supports two main workflows:

- Auto-build workflow: Build RPMs from source code and run tmt tests on the built RPM. This is triggered when there's no `--rpm-paths` passed via the CLI.
- Pre-built RPM workflow: Test existing RPM files, Paths to the RPMs are passed with the `--rpm-paths` option.

## Requirements

* Upstream project is using git.
* Packit config file placed in the upstream repository.
* `tmt` (Test Management Tool) available in the system.
* Mock build system configured (for auto-build workflow).

## Tutorial

1. Place a config file for packit in the root of your upstream repository.


2. Basic local testing (auto-build workflow):
    ```
    $ packit test
    Building SRPM...
    Running mock build for target fedora-rawhide-x86_64...
    Generated RPMs: my-package-1.0-1.fc40.x86_64.rpm
    Running tmt tests...
    summary: 3 tests executed, 3 passed
    ```


3. Auto build workflow with Test on specific target:
    ```
    $ packit test --target fedora:39
    Building SRPM...
    Running mock build for target fedora-39-x86_64...
    Generated RPMs: my-package-1.0-1.fc39.x86_64.rpm
    Running tmt tests on fedora:39...
    summary: 3 tests executed, 3 passed
    ```

4. Test pre-built RPMs:

    ```
    $ packit test --rpm-paths ./my-package-1.0-1.rpm
    Running tmt tests with provided RPMs...
    summary: 3 tests executed, 3 passed
    ```

5. Test specific plans only:

    ```
    $ packit test --plan smoke-tests
    Building SRPM...
    Running mock build for target fedora-rawhide-x86_64...
    Generated RPMs: my-package-1.0-1.fc40.x86_64.rpm
    Running tmt plans: smoke-tests, integration...
    summary: 5 tests executed, 5 passed
    ```

6. Skip cleanup of tmt artifacts for faster iteration:
    ```
    $ packit test --no-clean-before --target centos:stream9
    Skipping tmt cleanup...
    Building SRPM...
    Running mock build for target centos-stream-9-x86_64...
    Generated RPMs: my-package-1.0-1.el9.x86_64.rpm
    Running tmt tests on centos:stream9...
    summary: 3 tests executed, 3 passed
    ```
    NB: This may cause some side effects like disk space exhaustion.

## Help

    Usage: packit test [OPTIONS] [PATH_OR_URL]

      Run tmt tests locally using content from the upstream repository.

      This command builds RPMs from the current repository state and runs tests in
      containerized environments, mimicking Packit's testing service behavior for
      local debugging and development.

    Options:
      -p, --package TEXT              Package to source build, if more than one
                                      available, like in a monorepo configuration.
                                      Use it multiple times to select multiple
                                      packages.Defaults to all the packages listed
                                      inside the config.
      --rpm_paths TEXT                Path to RPM file(s) to test. Can be used
                                      multiple times.If not provided, RPMs will be
                                      built automatically from source.
      --target TEXT                   Container image for the testing environment,
                                      e.g., `fedora:39`, `centos:stream9`.
      --plan TEXT                     List of specific tmt plans to run. Can be
                                      used multiple times. If not specified, all
                                      plans are executed.
      --clean-before / --no-clean-before
                                      Run 'tmt clean --all' before starting the
                                      test (default: disabled).
      -h, --help                      Show this message and exit.
