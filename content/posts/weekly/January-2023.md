---
title: "Packit January 2023"
date: 2023-01-02T15:00:00+01:00
weight: 57
---

## Week 0 🌄 (December 20th 2022 – January 2nd 2023)

- ogr now raises `GitForgeInternalError` rather than `PagureAPIException` when
  getting 50x response from the Pagure API. This should increase usability as
  those tasks will be retried.
  ([ogr#762](https://github.com/packit/ogr/pull/762))
- Packit now puts the correct release number into the changelog when the
  Release tag is reset during propose-downstream.
  ([packit#1816](https://github.com/packit/packit/pull/1816)))
