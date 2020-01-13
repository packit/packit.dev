---
title: "January 2020"
date: 2020-01-17
draft: false
---

## Week 1

### packit

- Correctly updates version on srpm build. ([#642](https://github.com/packit-service/packit/pull/642))
- Downloads all URL sources before srpm build. ([#643](https://github.com/packit-service/packit/pull/643))

### packit service

- Runs on Fedora 31. ([#303](https://github.com/packit-service/packit-service/pull/303), [#304](https://github.com/packit-service/packit-service/pull/304))
- Correctly checks list of whitelisted repositories when issue comment is added. ([#309](https://github.com/packit-service/packit-service/pull/309))

## Week 2

### packit

- Incorporates lots of SRPM related improvements. ([#646](https://github.com/packit-service/packit/pull/646), [#650](https://github.com/packit-service/packit/pull/650), [#651](https://github.com/packit-service/packit/pull/651), [#652](https://github.com/packit-service/packit/pull/652), [#653](https://github.com/packit-service/packit/pull/653))
- Better handles when Copr owner is not set. ([#648](https://github.com/packit-service/packit/pull/648))

### packit service

- Fixes SRPM exceptions/errors handling. ([#311](https://github.com/packit-service/packit-service/pull/311), [#317](https://github.com/packit-service/packit-service/pull/317))
- Has loading of config fixed. ([#318](https://github.com/packit-service/packit-service/pull/318))

## Week 3

### packit

- Uses [Marshmallow](https://pypi.org/project/marshmallow) for configuration schema. ([#657](https://github.com/packit-service/packit/pull/657))
- Is able to build in [Koji](https://koji.fedoraproject.org) from upstream/source-git. ([#658](https://github.com/packit-service/packit/pull/658))
- Doesn't download remote sources when "sources" path exists in upstream. ([#659](https://github.com/packit-service/packit/pull/659))
- Configuration file allows list syntax in action commands. ([#663](https://github.com/packit-service/packit/pull/663))
- Configuration can use a new option to exclude paths from patching. ([#666](https://github.com/packit-service/packit/pull/666))
- Has few less bugs. ([#660](https://github.com/packit-service/packit/pull/660), [#661](https://github.com/packit-service/packit/pull/661), [#664](https://github.com/packit-service/packit/pull/664), [#667](https://github.com/packit-service/packit/pull/667))

### packit service

- Uses [Marshmallow](https://pypi.org/project/marshmallow) for configuration schema. ([#320](https://github.com/packit-service/packit-service/pull/320))
- Runs build for test job even when it's not explicitly configured. ([#324](https://github.com/packit-service/packit-service/pull/324))
- Reports invalid or missing packit config. ([#328](https://github.com/packit-service/packit-service/pull/328))
- Status workflow has been changed and simplified. ([#338](https://github.com/packit-service/packit-service/pull/338))
- Minor fixes. ([#323](https://github.com/packit-service/packit-service/pull/323), [#326](https://github.com/packit-service/packit-service/pull/326), [#329](https://github.com/packit-service/packit-service/pull/329), [#331](https://github.com/packit-service/packit-service/pull/331), [#335](https://github.com/packit-service/packit-service/pull/335), [#336](https://github.com/packit-service/packit-service/pull/336))
