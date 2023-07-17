---
title: "Handling of Release field in propose_downstream job"
date: 2023-05-23T12:00:00
authors: nforro
tags:
  - specfile
  - propose-downstream
---

We have recently made some fixes to the process of handling the `Release` field regarding the `%autorelease` macro, so let's take that opportunity to explain how it works.

<!--truncate-->

You can maintain the `Release` field manually, you can use a dummy value or you can take advantage of the `%autorelease` macro.

### Maintaining `Release` manually

You can maintain the `Release` field manually as you would do downstream, for example you could bump the value every time you make changes to the spec file and reset it to _1_ when you release a new version.

Packit will not touch the value unless it detects a change in `Version` and no change in `Release`. In such case it will reset `Release` to _1_ in the dist-git spec file, to ensure that the resulting NVR is not higher than any existing NVR in dist-git (that could have been already created by `propose_downstream` in a different branch for example).

You most likely want to enable the `sync_changelog` option so that your upstream `%changelog` is synchronized to dist-git as well.

### Using a dummy value

You can use a value like _0_ or _1_ and never touch it, Packit will make sure it is set to _1_ in the dist-git spec file.
You can do this if you don't care about upstream `%changelog`, i.e. you have `sync_changelog` disabled and use `copy_upstream_release_description` or the `changelog-entry` action to generate it downstream.

### Using `%autorelease`

You can use the `%autorelease` macro in the `Release` field and the `%autochangelog` macro in `%changelog`. In this case Packit will not change anything, it will only synchronize changes made to the arguments of the macro (if any).

If you want to start using `%autorelease` and `%autochangelog`, you should [do the change](https://docs.pagure.org/fedora-infra.rpmautospec/opting-in.html) in dist-git before releasing a new version upstream and triggering `propose_downstream` job, otherwise Packit will continue to set `Release` to _1_ in the dist-git spec file.

## `%autorelease` in dist-git

No matter how you maintain the `Release` field in your upstream spec file, Packit will never overwrite the `%autorelease` macro if it is used in the dist-git spec file.
