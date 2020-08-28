---
title: "August 2020"
date: 2020-08-13
draft: false
---

## Week 32 (August 3rd - August 7th) and 33 (August 10th - August 13th)

- We renamed our GitHub organisation to `packit`.
  That user had been inactive for a long time and [Hunor]'s request was successful.
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

## Week 34 (August 17th - August 20th)

- [Tomas] tought packit how to merge related commits, which were previously created
  by git-am applying of a multiple commit patch. ([packit#933](https://github.com/packit/packit/pull/933))
- [Anchit] added new `/api/srpm-builds/` endpoint.
- Service now requests 'builder' permission for custom projects if needed.
- [Franta] fixed a problem with only one job executed executed for 2 build definitions for the same trigger.

[anchit]: https://github.com/IceWreck
[franta]: https://github.com/lachmanfrantisek
[tomas]: https://github.com/TomasTomecek

## Week 35 (August 24th - August 28th)

- [Tomas] improved logging of the Packit actions' output. ([packit#950](https://github.com/packit/packit/pull/950))
- [Anchit] fixed and enhanced the `/api/srpm-builds` endpoint.
  ([packit-service#788](https://github.com/packit/packit-service/pull/788))

[tomas]: https://github.com/TomasTomecek
[anchit]: https://github.com/IceWreck
