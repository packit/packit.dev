---
title: October 2022
date: 2022-10-10
weight: 57
---

## Week 40 (October 4th – October 10th)

- Packit now correctly selects a Testing Farm compose when it's specified correctly in the configuration without an architecture suffix. ([packit-service#1689](https://github.com/packit/packit-service/pull/1689))
- We have fixed an issue that prevented Packit to work correctly on merge requests on GitLab instances. ([packit-service#1683](https://github.com/packit/packit-service/pull/1683))
- Packit Service will now replace invalid characters for the Copr projects using the default naming scheme. ([packit-service#1684](https://github.com/packit/packit-service/pull/1684))
- When we report to set `Packit allowed forge projects` in the Copr projects, the link for the group projects is now correct. ([packit-service#1680](https://github.com/packit/packit-service/pull/1680))
- It is now possible to filter changelog entries by specifying lower bound EVR, upper bound EVR or both. ([specfile#104](https://github.com/packit/specfile/pull/104))
