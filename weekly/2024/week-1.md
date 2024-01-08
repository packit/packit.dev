---
title: Week 1 in Packit
date: 2024-01-08
author: nforro
tags:
  - 2024-January
  - 2024
  - January
---

## Week 1 (January 2nd – January 8th)

- We have changed the behaviour of loading Packit configuration for `koji_build` and `bodhi_update` jobs.
  For both of them, the behaviour is the same as for `pull_from_upstream` - the configuration is taken
  from the default branch of the dist-git repository (usually `rawhide`) and other branches are ignored.
  ([packit-service#2295](https://github.com/packit/packit-service/pull/2295))
