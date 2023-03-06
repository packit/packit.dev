---
title: "Packit February 2023"
date: 2023-02-13T15:00:00+01:00
weight: 53
---

## Weeks 5–6 (February 1st – February 13th)

- You can now use `--srpm` option with the `packit build locally` CLI command. ([packit#1810](https://github.com/packit/packit/pull/1810))
- You will newly see news about Packit as a footer of the GitHub check runs summary. ([packit-service#1881](https://github.com/packit/packit-service/pull/1881))
- Packit now groups related builds and test runs (e.g. triggered by the same event, just different chroots) together. In the future, this will allow better presentation of the overall pipelines (e.g. in the dashboard). We now also create database entries before sending requests to external service (e.g. Testing Farm), therefore failures will be more visible in the dashboard. ([packit-service#1787](https://github.com/packit/packit-service/pull/1787))

## Week 7 (February 14th – February 20th)

- Packit now provides `PACKIT_PROJECT_VERSION` environment variable when running `changelog-entry` action. ([packit#1853](https://github.com/packit/packit/pull/1853))
- Packit CLI now requires bodhi in version 7.0.0 at minimum. ([packit#1844](https://github.com/packit/packit/pull/1844))
- You can now specify branches for a job triggered by a commit with a regex. ([packit-service#1909](https://github.com/packit/packit-service/pull/1909))

## Week 8 (February 21st – February 27th)

- `packit validate-config` CLI command now provides details about errors when it cannot parse the config file. ([packit#1861](https://github.com/packit/packit/pull/1861))
- `--update-release`/`--no-update-release` CLI flag now affects only `Release`, not `Version`. ([packit#1857](https://github.com/packit/packit/pull/1857))
- Packit does fewer API calls when searching for the package configuration file in remote repositories. ([packit#1846](https://github.com/packit/packit/pull/1846))
- Commit statuses/check names will now contain the name of the branch or release for the build and test jobs with `commit` or `release` trigger.
  This will prevent the collision of the names. ([packit-service#1920](https://github.com/packit/packit-service/pull/1920))

## Week 9 (February 28th – March 6th)

- Aliases logic was updated to account for the upcoming Fedora release (Bodhi now marks such release as `frozen`). From now on, Fedora 38 updates will be created even when the release is frozen. ([packit#1863](https://github.com/packit/packit/pull/1863))
- `packit validate-config` now correctly checks glob-patterns in 'files_to_sync' ([packit#1865](https://github.com/packit/packit/pull/1865)) and provides details about errors when it cannot parse a config file. ([packit#1861](https://github.com/packit/packit/pull/1861))
- Pull-from-upstream jobs are now displayed on our dashboard 🥳 https://dashboard.packit.dev/jobs/pull-from-upstreams ([packit-service#1951](https://github.com/packit/packit-service/pull/1951), [packit-service#1939](https://github.com/packit/packit-service/pull/1939))
- Packit will no longer automatically request access to the forks on GitLab. This will prevent us from spamming one-time contributors with requesting the access, whereas the regular contributors can add Packit following the instructions from the comments on the MRs, so they can receive the results of Packit pipeline right from the commit statuses. ([packit-service#1946](https://github.com/packit/packit-service/pull/1946))
- Packit will retry tasks that are interrupted by a worker shutdown. This should improve throughput and reduce cases where there is no outcome, i.e. "builds should have been done but nothing happened". ([packit-service#1935](https://github.com/packit/packit-service/pull/1935))
- OGR now understands a few community-hosted GitLab instances that could not be determined automatically from the hostname. Thanks to that, you don't need to hardcode these instances to be mapped correctly. ([ogr#775](https://github.com/packit/ogr/pull/775))

Thank you, [@SpyTec](https://github.com/SpyTec) for so many [wonderful changes in our dasbhoard](https://github.com/packit/dashboard/pulls?q=is%3Apr+author%3ASpyTec).
