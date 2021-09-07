---
title: "September 2021"
date: 2021-09-06
draft: false
weight: 71
---

## Week 35 (August 30th - September 3rd)

- A bug in Packit that caused purging or syncing upstream changelog
  (when not configured) from specfile when running `propose-downstream` was fixed.
  New behavior preserves downstream changelog and in case there are either
  no entries or no %changelog section present, it is created with a new entry.
  ([packit#1349](https://github.com/packit/packit/pull/1349))
