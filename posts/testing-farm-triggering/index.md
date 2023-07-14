---
title: "Running tests with builds from another PR"
date: 2022-12-21
weight: 93
authors: fnecas
---

Do you contribute to projects which depend on each other?
Would you like to test changes spanning multiple repositories together before merging them to the main branch?
Then look no further, Packit's new feature of the Testing Farm integration is what you are looking for!

<!--truncate-->

### How it works

To enable such testing, there is no additional configuration required in your `packit.yaml`, the typical [Testing Farm configuration](/docs/testing-farm/) is sufficient.
Once you open a pull request with some changes, tests are going to run as usual with all dependencies being installed based on the test definition, e.g. from Fedora repositories.
To trigger tests with builds from a pull request in another repository, add a comment to the pull request of the form:

    /packit test <namespace>/<repo>#<pr-id>

Based on this comment, Testing Farm will first install the recent successful builds created by Packit in the given pull request and then run the tests.
In order for this to work, there must be successful builds for the targets that you are running tests for.
For example, if you are testing against Fedora 36, the pull request that you want to install builds from must contain a successful Fedora 36 build by Packit.

Let's look at a simple example to demonstrate this feature better.
The Packit CLI uses a library called `specfile` to modify RPM spec files.
Recently, `specfile` has added a new feature which makes accessing the `Epoch` field in the spec file more convenient and we would like to make use of this feature.
However, the changes have not made it to a Fedora release yet, trying to use this feature will result in an error:

![Tests in Testing Farm fail](img/testing_farm_failed.png)

![Test log in Testing Farm](img/testing_farm_failed_log.png)

As we can see in the screenshots, during artifact installation, the latest `specfile` release from Fedora was installed, however it lacks the feature that we are looking to test.
Let's now retrigger the tests, but specify that we want to install builds from the pull request in `specfile` which introduced the changes:

![Retriggering tests with builds from another PR](img/testing_farm_retrigger.png)

Hooray! The copr builds from PR 165 were installed before the tests were run in Testing Farm which enabled us to test the feature inside Packit CLI.

### Wrapping up

We hope that this new feature makes upstream testing even more convenient than it previously was.
The feature is still quite new, and we would love to hear what you think about it.
As always, if you run into any trouble or have any ideas how to improve this functionality,
do not hesitate to [reach out to us](/#contact).
We will be happy to help.
