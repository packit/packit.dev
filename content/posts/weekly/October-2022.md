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

## Week 41 (October 11th – October 17th)

- Packit now correctly authenticates with Bodhi 6 and therefore creates Bodhi updates. 🚀 ([packit#1746](https://github.com/packit/packit/pull/1746), [packit-service#1704](https://github.com/packit/packit-service/pull/1704))
- There are two changes in the naming of the service jobs:
  The `build` job type name has been deprecated. It aimed to be an alias when Packit supported just one build type.
  There are currently more types of builds and just `build` can be misleading. Please, be explicit and use `copr_build` instead.
  The `production_build` name for upstream Koji build is misleading because it is not used to run production/non-scratch
  builds and because it can be confused with the `koji_build` job that is triggered for dist-git commits.
  (The `koji_build` job can trigger both scratch and non-scratch/production builds.)
  To be explicit, use `upstream_koji_build` for builds triggered in upstream and `koji_build` for builds triggered in downstream.
  Users will get a neutral status describing the change when the old names are in use. The status will become a warning
  starting in November and the old names will be removed by the end of the year. ([packit-service#1656](https://github.com/packit/packit-service/pull/1656))
- We've fixed the Markdown table format in the GitHub checks page, which was broken when the user's repo was not allowed to use Packit. ([packit-service#1688](https://github.com/packit/packit-service/pull/1688))
