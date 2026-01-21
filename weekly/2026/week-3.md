---
title: Week 3 in Packit
date: 2026-01-20
authors: mmassari
tags:
  - 2026-January
  - 2026
  - January
---

## Week 3 (January 14th – January 20th)

- For Fedora CI, we are now providing direct links to Koji/Testing Farm instead of our dashboard, when possible. ([packit-service#2943](https://github.com/packit/packit-service/pull/2943))
- Packit as Fedora CI now triggers ELN builds and test jobs on `rawhide` pull requests of onboarded ELN packages that don't have designated `eln` branch. ([packit-service#2950](https://github.com/packit/packit-service/pull/2950))
- We have fixed a race condition that was preventing completed Testing Farm tests from being reported by the Packit service on the dashboard and in pull requests. ([packit-service#2952](https://github.com/packit/packit-service/pull/2952))
