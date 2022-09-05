---
title: September 2022
date: 2022-09-05
weight: 58
---

## Week 35 (August 30th – September 5th)

- SRPMs for Copr builds are built in Copr by default for Packit GitHub app installations since September 6, 2022.
  For older installations, you can set the `srpm_build_deps` config option to use Copr as a builder.
  Let us know if you hit any issue with the new implementation. We are going to slowly decommission the old implementation
  and are happy to help with the transition. ([packit-service#1636](https://github.com/packit/packit-service/pull/1636))
- More indexes added to the database have further improved API/dashboard response times. ([packit-service#1639](https://github.com/packit/packit-service/pull/1639))
- When submitting Testing Farm tests, Packit will now retry multiple times in case there is a failure.
  ([packit-service#1605](https://github.com/packit/packit-service/pull/1605))
- We have implemented checking the available composes before submitting the tests for both internal and public Testing
  Farm. ([packit-service#1628](https://github.com/packit/packit-service/pull/1628))
