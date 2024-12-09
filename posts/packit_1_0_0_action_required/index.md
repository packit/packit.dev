---
title: "Packit 1.0.0 countdown - action may be required"
date: 2024-12-09T12:00:00+00:00
authors: mmassari
tags:
  - configuration
---

After 105 minor releases we are almost ready to announce our first major release, Packit 1.0.0!

<!--truncate-->

## What's New

We will **remove all long-deprecated keys from the configuration file**.

`packit-service` jobs are tied with `packit CLI`. The _packit configuration code_ is defined in the `packit` package and used by the `packit-service`.
So be aware that for those projects still using the deprecated keys in their `packit.yaml` configuration file we have created a migration pull request.

Please, **check if you have any new PR for your project created by the packit-service bot account, review and merge it**. Otherwise, you might experience issues with the `packit-service` jobs once the new packit version is released.

We plan to release Packit 1.0.0 in **January 2025**.

### List of removed keys

- Job type `build` has been changed to [`copr_build`](https://packit.dev/docs/configuration/upstream/copr_build).
- Job type `production_build` has been changed to [`upstream_koji_build`](https://packit.dev/docs/configuration/upstream/upstream_koji_build).
- Key `upstream_project_name` has been changed to [`upstream_package_name`](https://packit.dev/docs/configuration#upstream_package_name).
- Key `synced_files` has been changed to [`files_to_sync`](https://packit.dev/docs/configuration#files_to_sync).

The job types were renamed for clarity when we introduced more job types.
The `upstream_project_name` was renamed to `upstream_package_name` to be more specific.
The `files_to_sync` key has a more explicit behavior than the old `synced_files` key.
