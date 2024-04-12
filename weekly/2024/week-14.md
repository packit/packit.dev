---
title: Week 14 in Packit
date: 2024-04-08
authors: flachman
tags:
  - 2024-April
  - 2024
  - April
---

## Week 14 (April 2nd – April 8th)

- We have fixed a race condition that could occur when multiple `copr_build` jobs sharing a Copr project but having different targets were running at the same time. ([packit#2274](https://github.com/packit/packit/pull/2274))
- We have fixed reporting of tests with `manual_trigger: True`. ([packit-service#2389](https://github.com/packit/packit-service/pull/2389))
