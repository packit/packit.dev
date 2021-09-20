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

## Week 36 (September 6th - September 10th)

- `packit source-git init` was updated to try to apply patches with `git am` first, and use `patch` only when this fails, in order to keep the commit message of Git-formatted (mbox) patch files in the source-git history. ([packit#1358](https://github.com/packit/packit/pull/1358))

## Week 37 (September 13th - September 17th)

- Now you can find URL pointing directly to testing farm results on GitHub Checks page. ([packit-service#1215](https://github.com/packit/packit-service/pull/1215))
- Ogr now supports reacting to the comment with a given reaction, getting them in list and deleting them (only when reaction is added by using ogr API). ([ogr#636](https://github.com/packit/ogr/pull/636))
- Packit now provides `PACKIT_RPMSPEC_RELEASE` environment variable in actions. ([packit#1363](https://github.com/packit/packit/pull/1363))
- Dashboard no longer shrinks Copr/Koji icons when being open in narrow view. ([dashboard#140](https://github.com/packit/dashboard/pull/140))
