---
title: Week 49 in Packit
date: 2023-12-11
authors: mmassari
tags:
  - 2023-December
  - 2023
  - December
---

## Week 49 (December 5th – December 11th)

- We have introduced new configuration options `test_command.default_labels` and `test_command.default_identifier` that are used by default when running `/packit test` comment command without any arguments (instead of specifying them via `--labels`/`--identifier`). ([packit-service#2270](https://github.com/packit/packit-service/pull/2270))

- We have fixed a bug that GithubRelease.url returned an API URL. ([ogr#824](https://github.com/packit/ogr/pull/824))
