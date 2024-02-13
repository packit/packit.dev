---
title: Week 6 in Packit
date: 2024-02-12
authors: mmassari
tags:
  - 2024-February
  - 2024
  - February
---

## Week 6 (February 6th – February 12th)

- Packit now searches for bugzilla about new release created by Upstream Release Monitoring to reference each time it syncs the release downstream. ([packit#2229](https://github.com/packit/packit/pull/2229))
- We have introduced new CLI command `packit dist-git init` that initializes Packit configuration for release automation in dist-git repository. ([packit#2225](https://github.com/packit/packit/pull/2225))
- We have introduced new configuration options `require.label.present` and `require.label.absent`. By configuring these you can specify labels that need to be present or absent on a pull request for Packit to react on such PR. ([packit-service#2333](https://github.com/packit/packit-service/pull/2333))
- Interface for labels was unified and `labels` property for PullRequest and Issue now return list of PRLabel and IssueLabel respectively. ([ogr#839](https://github.com/packit/ogr/pull/839))
