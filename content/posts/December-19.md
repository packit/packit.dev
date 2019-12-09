---
title: "December 19"
date: 2019-12-06
draft: false
---

## Week 49

### ogr & packit

- ogr-0.9.0 has been released greatly restructured. ([#291](https://github.com/packit-service/ogr/pull/291/files))
- `packit status` (CLI) now shows also latest Copr builds. ([#579](https://github.com/packit-service/packit/pull/579))
- Target aliases (currently `fedora-development`, `fedora-stable`, `fedora-all`) can now be used in the packit config file. ([#619](https://github.com/packit-service/packit/pull/619))
- When doing a new update in Fedora dist-git, packit now by default creates a new pull request instead of pushing directly to dist-git. ([#622](https://github.com/packit-service/packit/pull/622))

### packit service

- Does not set test checks when tests are not configured. ([#275](https://github.com/packit-service/packit-service/pull/275))
- Supports target aliases and dist-git branches aliases. ([#277](https://github.com/packit-service/packit-service/pull/277), [#285](https://github.com/packit-service/packit-service/pull/285))
- Nicely formats errors from OpenShift API. ([#283](https://github.com/packit-service/packit-service/pull/283))
- Runs Copr build when user adds a `/packit build` comment into a PR. ([#290](https://github.com/packit-service/packit-service/pull/290))
