---
title: August 2022
date: 2022-08-01
weight: 59
---

## Week 30 (July 26th–August 1st)

- Packit has switched to `python-specfile` library for handling spec files. This may cause some issues to pop up. ([packit#1588](https://github.com/packit/packit/pull/1588))
- Packit CLI can now build RPMs in mock. For more information see https://packit.dev/docs/cli/build/mock ([packit#1662](https://github.com/packit/packit/pull/1662))
- When using Packit before being allowed, Packit newly links an approval issue where the self-approval can be performed. ([packit-service#1596](https://github.com/packit/packit-service/pull/1596))
- A downstream koji-build can now be re-triggered by adding a comment containing `/packit koji-build` into a dist-git pull request with target branch corresponding to the branch the build should be acted upon. ([packit-service#1586](https://github.com/packit/packit-service/pull/1586))

## Week 31 (August 2nd – August 8th)

- Action `fix_spec_file` can change a spec file - Packit now preserves that change.
  ([packit#1679](https://github.com/packit/packit/pull/1679))
- BREAKING CHANGE: fixed an issue where the repo was searched for the specfile
  before checking if `downstream_package_name` is set, and
  `<downstream_package_name>.spec` can be used as the `specfile_path`.
  ([packit#1663](https://github.com/packit/packit/pull/1663))

## Week 32 (August 9th – August 15th)

- We have fixed an issue when propose downstream didn't retry to download sources that were not yet available at the time of the first attempt. ([packit-service#1609](https://github.com/packit/packit-service/pull/1609))
- When creating Copr builds, Packit will now retry multiple times in case there is a GitHub outage or an internal error. ([packit-service#1589](https://github.com/packit/packit-service/pull/1589))

## Week 33 (August 16th – August 22nd)

- Packit CLI can now submit VM images in [Red Hat Image Builder](https://console.redhat.com/insights/image-builder).
  All build-related commands have now consistent `--wait` / `--no-wait` options.
  ([packit#1666](https://github.com/packit/packit/pull/1666))
- Packit `prepare-sources` command now has a `--create-symlinks` / `--no-create-symlinks` option,
  which enables copying the archive instead of symlinking. This will be used in the Copr environment,
  where symlinking the archive previously caused issues.
  ([packit#1682](https://github.com/packit/packit/pull/1682))
- We have fixed the handling of the situation when Packit lacks permission to update a Copr project.
  ([packit#1684](https://github.com/packit/packit/pull/1684))
- Dashboard should now load data for [jobs](https://dashboard.packit.dev/jobs) faster because
  the database querying has been improved and also queries are done only when needed.
  ([packit-service#1617](https://github.com/packit/packit-service/pull/1617),
  [dashboard#189](https://github.com/packit/dashboard/pull/189))
