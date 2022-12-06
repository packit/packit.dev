---
title: "December 2022"
date: 2022-12-05T13:51:33+01:00
weight: 55
---

## Week 48 (November 29th – December 5th)

- `packit propose-downstream` now uploads all remote sources (those specified as URLs) and the
  source specified by `spec_source_id` (whether remote or not) to lookaside. Previously, only Source0
  was uploaded. Source0 is no longer treated specially, but as `spec_source_id` is `Source0` by default,
  Source0 is still being uploaded by default unless `spec_source_id` is overriden.
  ([packit#1778](https://github.com/packit/packit/pull/1778))
- [A VM image build](/docs/configuration##vm_image_build) can be triggered inside a PR via a comment
  command `/packit vm-image-build` (the job needs to be defined in the configuration).
  This feature is experimental and is still being tested.
  ([packit-service#1761](https://github.com/packit/packit-service/pull/1761))
- `Section` and `Tag` objects in `specfile` library now have `normalized_name` property for more convenient comparison.
  There is a new method, `Specfile.get_active_macros()`, to get active macros in the context of the spec file.
  The underlying `rpm.spec` instance is now exposed as `Specfile.rpm_spec` property.
  There is a new utility class for parsing NEVRA strings. ([specfile#141](https://github.com/packit/specfile/pull/141))
