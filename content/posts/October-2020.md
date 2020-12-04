---
title: "October 2020"
date: 2020-10-15
draft: false
weight: 82
---

## Week 41 (October 5th - October 9th)

- [franta] made triggering of jobs more reliable and in correct situations ([packit-service#837](https://github.com/packit/packit-service/pull/837))

[franta]: https://github.com/lachmanfrantisek

## Week 42 (October 12th - October 16th)

Nothing significant happened during this week. The only change was that Hunor
[resolved](https://github.com/packit/packit-service/pull/850) a problem when sentry client library ([the alert service](https://sentry.io/) we use) caused errors in stage
environment and hence the problem didn't make it to production.

We have also released a new version of packit: [0.18](https://github.com/packit/packit/releases/tag/0.18.0).

## Week 43 (October 19th - October 24th)

We finally had a week with plenty updates!

- We found out the hard way that one cannot build in [Fedora koji](https://koji.fedoraproject.org/koji/) directly
  from SRPM unless it's a scratch build. The discussion with Fedora rel-eng is
  happening at [pagure.io/releng/issue/9801](https://pagure.io/releng/issue/9801) and in the meantime, all koji builds
  will be halted on our side since we know they cannot succeed. Do `scratch: true` for koji builds before this gets resolved.
- Packit creates a symlink for a generated archive at the root of the project.
  So far it only did it from a relative path and now absolute paths are
  supported as well. This is useful when your specfile is placed in a
  subdirectory and rpmbuild can't find the archive.
- There is a new usability improvement to proposing a new downstream update. If
  the PR is already created, packit won't create it again. You will no longer
  receive duplicate downstream PRs in dist-git.
- When doing a new downstream update, packit doesn't sync %changelog since
  those are usually out of sync between upstream and downstream. Packit creates
  a new entry for the new release in the downstream. There is a new packit.yaml
  configuration option `sync_changelog` which bypasses this behaviour and
  copies the %changelog from upstream and overwrites the downstream changelog.
  Please use this option only when your changelogs are in sync. [Documentation](https://packit.dev/docs/configuration/#sync_changelog)

## Week 44 (October 26th - October 30th)

No user-facing changes in packit(-service) this week.
