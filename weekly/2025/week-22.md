---
title: Week 22 in Packit
date: 2025-06-02
authors: mfocko
tags:
  - 2025-May
  - 2025
  - May
---

## Week 22 (May 26th – June 1st)

- We have added a new `run-condition` action that can be used to conditionally
  disable downstream jobs during the execution and aims to solve the following
  [issue](https://github.com/packit/packit-service/issues/2777). ([`packit#2608`](https://github.com/packit/packit/pull/2608), [`packit-service#2810`](https://github.com/packit/packit-service/pull/2810))

- We got a contribution for a typo in the error message when our Packit CLI
  tracebacks. Thanks a lot for the contribution, @mulkieran. ([`packit#2612`](https://github.com/packit/packit/pull/2612))

- We have improved validation of the job trigger. ([`packit#2616`](https://github.com/packit/packit/pull/2616))

- We have fixed an issue realted to the handling of minor EPEL releases. ([`packit#2619`](https://github.com/packit/packit/pull/2619))
