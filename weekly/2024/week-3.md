---
title: Week 3 in Packit
date: 2024-01-22
authors: flachman
tags:
  - 2024-January
  - 2024
  - January
---

## Week 3 (January 16th – January 22nd)

- Packit now properly handles exceptions when syncing ACLs during release syncing. ([packit#2213](https://github.com/packit/packit/pull/2213))
- We have fixed a bug in handling chroot-specific configuration once the chroots themselves are updated. ([packit#2194](https://github.com/packit/packit/pull/2194))
- We have increased the number of retries of Fedora release syncing for situations where the tarball is uploaded some time after the release happens. ([packit-service#2307](https://github.com/packit/packit-service/pull/2307))
- There is a new API endpoint `/bodhi-updates` for getting information about Bodhi updates submitted by Packit. ([packit-service#2310](https://github.com/packit/packit-service/pull/2310))
- For `/packit test` command, you can now also use `-i` and `--id` aliases for `--identifier` option. ([packit-service#2309](https://github.com/packit/packit-service/pull/2309))
