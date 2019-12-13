---
title: "December 19"
date: 2019-12-13
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

## Week 50

### packit

- If there is no `upstream_package_name`/`downstream_package_name` given in `.packit.yaml`, they now default to the name of the GitHub repo. ([#624](https://github.com/packit-service/packit/pull/624))
- If no `jobs` are defined in `.packit.yaml` packit by default runs `build` job on `fedora-stable` targets and `propose_downstream` on `fedora-all` branches. ([#625](https://github.com/packit-service/packit/pull/625))
- `build` command has nicer output. ([#630](https://github.com/packit-service/packit/pull/630))
- Smaller fixes. ([#630](https://github.com/packit-service/packit/pull/630), [#636](https://github.com/packit-service/packit/pull/636))

### packit service

- Creates a new issue when `propose-update` fails. ([#300](https://github.com/packit-service/packit-service/pull/300))
- Better reports failed submitting of a Copr build. ([#301](https://github.com/packit-service/packit-service/pull/301))
