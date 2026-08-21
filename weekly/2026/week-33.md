---
title: Week 33 in Packit
date: 2026-08-17
authors: mfocko
tags:
  - 2026-August
  - 2026
  - August
---

## Week 33 (August 11th – August 17th)

- The `ForgejoService.get_project_from_url()` method has been updated to ensure repository names are parsed accurately. It now correctly removes the `.git` extension from the repository name, addressing an issue where the extension was previously retained. ([ogr#1005](https://github.com/packit/ogr/pull/1005))
