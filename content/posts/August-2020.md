---
title: "August 2020"
date: 2020-08-13
draft: false
---

## Week 32 (August 3rd - August 7th) and 33 (August 10th - August 13th)

- Last week, we renamed our GitHub organisation to `packit`.
  That user was inactive for a long time and [Hunor]'s request was successful.
- The Copr project settings are now changed only if needed. If we can't edit the settings,
  we ask for the admin access to the Copr project and the service shows you a table with
  the changes if you want to do the edit manually.
  ([packit#921](https://github.com/packit/packit/pull/921),
  [packit-service#764](https://github.com/packit/packit-service/pull/764))
- [Matej] fixed an old bug with the custom command for creating archives.
  The archive was not found when building SRPM because of the incorrect processing
  of the paths from the command output.
  ([packit#923](https://github.com/packit/packit/pull/923))

[hunor]: https://github.com/csomh
[matej]: https://github.com/mfocko
