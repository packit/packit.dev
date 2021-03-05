---
title: "March 2021"
date: 2021-03-04T16:40:16+01:00
draft: false
---

# March 2021

## Week 9 (March 1st - March 5th)

- Tomas improved the performance of sandcastle, all the user-defined actions now run in one sandbox.
  This should also speed up the SRPM builds. ([packit#1129](https://github.com/packit/packit/pull/1129))
- You can view the results of jobs directly in our dashboard, kudos to Anchit. ([dashboard#73](https://github.com/packit/dashboard/pull/73))
- Jirka implemented setting of the [environment context](https://tmt.readthedocs.io/en/latest/spec/context.html)
  when running the Testing farm tests. ([packit-service#1008](https://github.com/packit/packit-service/pull/1008))
- In Packit there is a new configuration option `sources` which overrides the URLs defined in specfiles.
  ([packit#1131](https://github.com/packit/packit/pull/1131), [packit#1143](https://github.com/packit/packit/pull/1143))
