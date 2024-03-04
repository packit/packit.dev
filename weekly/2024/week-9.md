---
title: Week 9 in Packit
date: 2024-03-04
authors: mfocko
tags:
  - 2024-February
  - 2024
  - February
---

## Week 9 (February 27th – March 4th)

- We have fixed the bug about Packit overwriting the final state of the build in case the build start is being processed later than the end of the build. ([packit-service#2358](https://github.com/packit/packit-service/pull/2358))
- We have improved the reporting of configuration errors in GitLab. ([packit-service#2357](https://github.com/packit/packit-service/pull/2357))
- `GitLabProject.get_file_content()` can now correctly handle file paths starting with `./`. ([ogr#844](https://github.com/packit/ogr/pull/844))
