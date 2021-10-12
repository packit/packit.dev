---
title: "October 2021"
date: 2021-10-04T11:00:11+02:00
draft: false
weight: 70
---

## Week 39 (September 27th - October 1st)

- Clicking on logo on [dashboard](https://dashboard.packit.dev/) no longer
  opens a new page, but rather reloads the current one.
- We consider [Pipelines view](https://dashboard.packit.dev/pipelines) on
  dashboard to be ready for production use. We're planning to improve the user
  experience when using pipelines with easier navigation and filtering
  options.
- Building the latest development versions of
  [packit](https://github.com/packit/packit) and
  [ogr](https://github.com/packit/ogr) was moved to the
  [packit/packit-dev](https://copr.fedorainfracloud.org/coprs/packit/packit-dev/)
  Copr repo.

## Week 40 (October 4th - October 8th)

- [A bug](https://github.com/packit/packit/issues/1255) in Packit causing
  issues with local build when the branch was named with prefix `rpm` has been
  fixed.
- To fulfill requests regarding updating targets on Copr repositories, Packit
  Service will sync targets for the projects created by Packit Service (e.g.
  pull requests, or non-set Copr repository for releases and branch builds)
  and for Copr repositories **not owned by Packit** will try to extend the
  list if necessary.
- If you trigger packit jobs with one of `/packit _` commands, our bot gives
  you a 👍 reaction to let you know that we are working on it.
- Rerunning of failed tasks via Github Checks interface is now supported. You are now free to click those "Re-run" links.
- [ogr documentation](https://packit.github.io/ogr/) is converted to
  Google-style docstrings. In case there are any discrepancies, missing docs
  or docstrings in different format, please open an issue.
