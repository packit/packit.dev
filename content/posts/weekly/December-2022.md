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

## Week 49 (December 6th – December 12th)

- Packit now correctly handles a race condition when it tries to create bodhi
  updates for builds that are not yet tagged properly. CLI exprience was also
  improved for this case.
  ([packit#1803](https://github.com/packit/packit/pull/1803))
- Packit now resets the `Release` tag during `propose-downstream` if the version
  is updated and the `Release` tag has not explicitly been overridden in the
  upstream specfile.
  ([packit#1801](https://github.com/packit/packit/pull/1801))
- If you still don't build SRPMs in Copr you'll get a warning status that you
  should use `srpm_build_deps` to be sure that we don't break your workflow once
  we switch to building all SRPMs in Copr in January.
  ([packit-service#1804](https://github.com/packit/packit-service/pull/1804))
- We've increased internal task retry backoff time in Packit GitHub app from 3 to
  7 seconds. We hope this will increase success for network flakes and _random_
  infrastructure issues. Creation of bodhi updates should be now more reliable too
  as Packit will try more times (from 2 to 5).
  ([packit-service#1800](https://github.com/packit/packit-service/pull/1800))
- Tags enclosed in conditional macro expansions are not ignored anymore.
  ([specfile#156](https://github.com/packit/specfile/pull/156))
- Context managers (`Specfile.sections()`, `Specfile.tags()` etc.) can now be nested
  and combined together (with one exception - `Specfile.macro_definitions()`), and
  it is also possible to use tag properties (e.g. `Specfile.version`, `Specfile.license`)
  inside them. It is also possible to access the data directly, avoiding the `with`
  statement, by using the `content` property (e.g. `Specfile.tags().content`), but
  be aware that no modifications done to such data will be preserved. You must use
  `with` to make changes.
  ([specfile#153](https://github.com/packit/specfile/pull/153))
