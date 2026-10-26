---
title: How our SLOs are built
sidebar_position: 12.5
---

# How our SLOs are built

This page is for those who want to know more about Packit's
[Service Level Objectives](./service-level-objectives.md) (SLOs): the Service
Level Indicators (SLIs) we use to track them, how we measure them and why we
picked them. Other teams can use it as a guide when defining their own SLOs.

## Job outcomes

The objectives talk about jobs (builds and tests) ending with a status. To make
them unambiguous, we distinguish these outcomes:

- **success**: the job finished and everything is awesome
- **failure**: the job finished and wasn't successful: the PR needs to be fixed
- **error**: infrastructure problems prevented the job from completing

Only _success_ and _failure_ count as good outcomes for our objectives. Both
give you a real answer about your change. An _error_ means Packit (or a service
it depends on) let you down.

## Indicators

To know how we are doing against the objectives, we measure these indicators:

| Objective | Indicators                                                                                                                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SLO1      | Time it takes Packit to set the first status on a PR or commit after receiving the event. Number of PRs or commits whose first status took longer than 25 seconds (a looser limit than the 15 seconds of SLO1). |
| SLO2      | Number of Copr builds queued, started and finished. Time from a Copr build finishing to Packit reporting the final status. Time from accepting a Copr build to it finishing.                                     |
| SLO3      | Number of test runs queued, started and finished. Time from submitting a test run to Packit setting its final status.                                                                                            |

The counters tell us how many jobs entered and left the pipeline. If jobs are
queued or started but never finish, it shows up as a gap between the numbers.
The durations tell us how long our users wait.

Both SLO1 indicators are recorded only when Packit sets a first status. An event
that Packit drops completely, without setting any status, does not show up in
either of them.

## How we measure

All the other teams around us use the Prometheus + Grafana combo, so this is
our choice as well. Packit pushes the metrics to a Prometheus Pushgateway, and
the indicators are visualised in two Grafana dashboards: **Packit** and
**Fedora CI**.

Durations are recorded as Prometheus
[histograms](https://prometheus.io/docs/concepts/metric_types/#histogram). The
histogram buckets are aligned with the SLO time thresholds (for example 15
seconds for SLO1 and 12 hours for SLO3), so we can directly compute
[what percentage of the measured jobs](https://prometheus.io/docs/practices/histograms/)
finished within the threshold, instead of relying on averages.

The histograms record only the time, whatever the outcome of the job. This means
the current indicators approximate SLO2 and SLO3 rather than compute them
exactly:

- The time to the final test status is recorded for every finished test run,
  including runs that ended with an error or were canceled. A Testing Farm
  error reported within 12 hours therefore counts as within the threshold.
- The time to the final build status is recorded only when Packit reports
  success or failure. A build that ends with an error on Packit's side is
  missing from the histogram completely.
- Packit reports every unsuccessful Copr build as a failure, including builds
  that failed because of a Copr infrastructure problem. Such builds are
  measured as failures, even though they are errors by the definitions above.
- A failed build is not reported, and so not measured, when its SRPM build has
  already failed (Packit has reported that failure already) or when a newer
  build for the same target exists.

Unfortunately, we cannot share our Grafana instance with you since it's hidden
behind a firewall.

## Why these objectives and indicators

Before defining the objectives, we asked the most active users of Packit
(projects such as anaconda, cockpit, systemd and others) what they expect from
the service in terms of latency, reliability and availability. The objectives
are derived from their answers.

### SLO1: A quick first status

The most consistent request was a quick "accepted" status: an indication that
Packit has seen the change and will deal with it. Users were fine with waiting
minutes or even hours for the results, as long as they knew the request had been
picked up. Their expectations for this status ranged from 5 seconds to a minute.
No status at all is frustrating, both for our users and for us, because it's
impossible to tell whether Packit is working or has dropped the event. Hence the
first objective is about the first status only, with a strict time limit and a
high percentage.

In late 2022, the SLO1 limit was raised from 15 to 30 seconds to cover setting
all statuses ([packit-service#1776](https://github.com/packit/packit-service/pull/1776)).
In March 2023, SLO1 was changed to the current definition: the first status
within 15 seconds.

### SLO2: Builds end with a real answer

Copr builds for pull requests are Packit's core functionality. What matters to
users is that a build ends with a real answer (success or failure) and is not
interrupted by an infrastructure error. Users told us an error rate of about 5
to 10% is something they would tolerate at the beginning.

Build duration is not something we control: some builds take minutes, others
take hours. An objective defined from the moment we accept the build would
therefore depend mostly on the project being built. That's why SLO2 measures
the part Packit is responsible for: reporting the final result once Copr has
finished the build.

### SLO3: Tests with a lower target

Tests are similar to builds, but they run in Testing Farm, which is outside of
our control and is a more complex system (provisioning machines, running tests,
collecting logs). That's why the percentage is lower and the time limit covers
the whole test run.

### Indicators follow the objectives

We did not start by collecting all the metrics we could get. We picked
indicators that answer the question "are we meeting the objective?" directly:
how long it takes to set a status, and how many jobs entered and left each stage.
This keeps the dashboards small and the alerts meaningful.

## Guidance for other teams

If you are defining SLOs for your own service, this is what worked for us:

- **Ask your users first.** Talk to the most frequent users of your service
  and ask about latency, error rate, throughput and availability. Their answers
  are more valuable than the current numbers in your dashboards.
- **Start small.** Some teams (for example
  [CKI](https://cki-project.org/docs/hacking/rfcs/cki-004-slo/#created-slos-based-on-the-feedback))
  have a comprehensive set of SLOs. Instead of taking the same route, we started
  with three objectives and add more objectives and indicators over time.
- **Measure what you control.** If a part of the workflow is owned by
  another service (Copr builds, Testing Farm), either measure only your part or
  set a lower target.
- **Use distributions, not averages.** "99% of requests within 15 seconds" says
  much more than "15 seconds on average", which can hide problems in the tail.
- **Avoid 100%.** Insisting on perfection slows down development. The error
  budget gives you room to ship new features while keeping the service
  reliable.
- **Revisit the targets.** Loose targets are fine at the beginning. Tighten
  them, or drop objectives nobody talks about, as you learn more.

## Background

This page supersedes the original research on error budgets, which is kept
only for historical reasons:
[github.com/packit/research/../error-budgets](https://github.com/packit/research/tree/main/research/monitoring/error-budgets).
It contains the full notes from Google's SRE book and the collected
[expectations of our users](https://github.com/packit/research/blob/main/research/monitoring/error-budgets/users-expectations.md).
