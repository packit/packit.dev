---
title: Week 4 in Packit
date: 2024-01-29
authors: mfocko
tags:
  - 2024-January
  - 2024
  - January
---

## Week 4 (January 23rd – January 29th)

- `pull-from-upstream` and `propose-downstream` commands now have the `--sync-acls` option that enables syncing the ACLs between dits-git repo and fork. The default behaviour was, however, **changed to not sync** the ACLs. ([packit#2214](https://github.com/packit/packit/pull/2214))
- Packit now properly handles exceptions when syncing ACLs during release syncing. ([packit#2213](https://github.com/packit/packit/pull/2213))
- `allowed_pr_authors` and `allowed_committers` now allow specifying groups and also aliases `all_admins` and `all_committers` (corresponding to the access to the repository). ([packit-service#2320](https://github.com/packit/packit-service/pull/2320))
- ogr now supports 2 new methods for Pagure: one for getting users with specified access rights and one for getting members of a group. ([ogr#834](https://github.com/packit/ogr/pull/834))
