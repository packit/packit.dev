---
title: "November 2020"
date: 2020-11-06T13:16:55+01:00
draft: false
---

## Week 45 (November 2nd - November 6th)

- [Laura] implemented an option for packit to copy description from a release into
  a changelog when running `propose-update`. Also the default message has been changed
  to the list of commit messages from last release. ([packit#1004](https://github.com/packit/packit/pull/1004))
- [Jano] improved handling of build targets in packit. ([packit#986](https://github.com/packit/packit/pull/986))
- [Tomas] improved an experience of a contributor to source-git in case the contributor
  doesn't follow git-am patches style that is used. ([packit#1000](https://github.com/packit/packit/pull/1000))

## Week 46 (November 9th - November 13th)

- [Tomas] improved the UX of logging in the CLI. ([packit#1014](https://github.com/packit/packit/pull/1014))
- [Jano] improved logic of acquiring current version in the CLI. ([packit#1013](https://github.com/packit/packit/pull/1013))
- We appreciate getting feedback from our users, if you could find some time to
  do so, there is an [open issue](https://github.com/packit/packit-service/issues/859)
  for it.

## Week 47 (November 16th - November 20th)

- [Matej] fixed [an
  issue](https://github.com/packit/packit-service/issues/774) with Packit CLI,
  enabling recursive search for spec-files
  ([packit#1005](https://github.com/packit/packit/pull/1005)).
- [Laura] made Copr builds to be part of the default jobs. This will cause
  build jobs to explicitly run, and display their own result flags in PRs,
  next to the test results. We hope this to be a more friendly behaviour for
  our new users ([packit#1024](https://github.com/packit/packit/pull/1024)).

[laura]: https://github.com/lbarcziova
[jano]: https://github.com/sakalosj
[tomas]: https://github.com/TomasTomecek
[matej]: https://github.com/mfocko
