---
title: "February 2023"
date: 2023-02-13T15:00:00+01:00
weight: 53
---

## Weeks 5–6 (February 1st – February 13th)

- You can now use `--srpm` option with the `packit build locally` CLI command. ([packit#1810](https://github.com/packit/packit/pull/1810))
- You will newly see news about Packit as a footer of the GitHub check runs summary. ([packit-service#1881](https://github.com/packit/packit-service/pull/1881))
- Packit now groups related builds and test runs (e.g. triggered by the same event, just different chroots) together. In the future, this will allow better presentation of the overall pipelines (e.g. in the dashboard). We now also create database entries before sending requests to external service (e.g. Testing Farm), therefore failures will be more visible in the dashboard. ([packit-service#1787](https://github.com/packit/packit-service/pull/1787))
