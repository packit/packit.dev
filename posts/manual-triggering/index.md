---
title: (Tests) job triggering improvements
date: 2023-07-11T08:46:18+02:00
authors: lbarczio
tags:
  - configuration
---

Recently, we received multiple contributions from the Strimzi team, specifically [Jakub Stejskal](https://github.com/Frawless)
and [David Kornel](https://github.com/kornys),
for the functionality of manual triggering of jobs and other related improvements, mostly focusing on the testing
UX. We are very happy about these and would like to showcase the results of their awesome contributions.

<!--truncate-->

Strimzi team wanted to onboard Packit to ease their testing in pull requests, but they have had multiple test suites that could run
for a long time, and they did not want to run all of the test suites for each new commit in a pull request.

Let's now look together at what they implemented to solve their usecase.

## Manual-only triggering of jobs

Firstly, a new configuration option [`manual_trigger`](/docs/configuration/jobs#manual_trigger) was introduced.
With this new configuration option, users can enable triggering Packit jobs only manually and avoid specified jobs being
automatically triggered when, e.g., a new commit arrives to a pull request.
The only thing needed to make this work is to add `manual_trigger: true` to the job's definition:

```yaml
- job: tests
  trigger: pull_request
  targets:
    - centos-stream-9-x86_64
  skip_build: true
  manual_trigger: true
```

This new configuration option allows saving resources and running builds or tests, e.g. only when the pull request is ready for
testing and can be especially useful for projects having huge test plans.

## Triggering test jobs based on labels and identifiers

The above solution is very easy to use; however, there might be use cases where the users don’t want to trigger all the jobs.
A particular example could be running a smoke test job before running the sanity one.

To solve this, for the test jobs, Jakub and David introduced 2 new ways to trigger a specific job.

The first one is to trigger the job based on the configured [`identifier`](/docs/configuration/upstream/tests#optional-parameters). To trigger a test job with `identifier: regression-operators` in the
job configuration, the Packit comment command will be:

    /packit test --identifier regression-operators

That command will execute the job with this specific identifier, nothing else.

And what if someone wants to execute more than one job? Users can easily use multiple identifiers in a comma-separated list:

    /packit test --identifier regression-operators,regression-components

But specifying a longer list of identifiers every time might get a little bit annoying,
especially when the identifiers are usually used together repeatedly.

To improve the UX, there was introduced [`labels`](/docs/configuration/upstream/tests#optional-parameters) configuration field that can group together multiple jobs.
Each job can contain a list of `labels` in their definition:

```yaml
- job: tests
  trigger: pull_request
  identifier: regression-operators
  targets:
    - centos-stream-9-x86_64
  skip_build: true
  manual_trigger: true
  labels:
    - regression
    - sanity

- job: tests
  trigger: pull_request
  identifier: regression-components
  targets:
    - centos-stream-9-x86_64
  skip_build: true
  manual_trigger: true
  labels:
    - regression

- job: tests
  trigger: pull_request
  identifier: acceptance-operators
  targets:
    - centos-stream-9-x86_64
  skip_build: true
  manual_trigger: true
  labels:
    - acceptance
    - sanity
```

With this, one can comment

    /packit test --labels regression

and the comment will trigger all jobs that contain `regression` in the list of labels in the job configuration.
It is again also possible to specify a comma-separated list of labels:

    /packit test --labels regression,sanity

## Conclusion

As already mentioned, these improvements were made as contributions from outside of the Packit team, and it was such
a nice experience to collaborate with someone new! And this brings us to a reminder:
Anyone can contribute! So if you are missing some features, feel free to open a pull request, and we will gladly help
you so that your feature can land in our production!
