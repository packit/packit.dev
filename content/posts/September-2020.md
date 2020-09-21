---
title: "September 2020"
date: 2020-09-04T12:07:03+02:00
draft: false
---

## Week 36 (August 31th - September 4th)

- We store the submission time of SRPM builds now ([packit-service#795](https://github.com/packit/packit-service/pull/795) by [Anchit]).
- [Shreyas] improved implementation of the build status reporting ([packit-service#740](https://github.com/packit/packit-service/pull/740)).
- [Anchit] enhanced the `/koji-builds` endpoint to be more consistent with `/copr-builds` endpoint ([packit-service#791](https://github.com/packit/packit-service/pull/791)).

[anchit]: https://github.com/IceWreck
[shreyas]: https://github.com/shreyaspapi

## Week 37 (September 7th - September 11th)

- Stage now uses [Tokman](https://github.com/packit/tokman) to get access tokens for GitHub, which should resolve race condition when running parallel jobs
  (Tokman by [Hunor], ogr integration by [Matej]).
- [Franta] has addressed problems with Testing-Farm cluster with custom response on PRs that links to more information ([pinned info](https://github.com/packit/packit-service/issues/803), [packit-service#798](https://github.com/packit/packit-service/pull/798)).

[hunor]: https://github.com/csomh
[matej]: https://github.com/mfocko
[franta]: https://github.com/lachmanfrantisek

## Week 38 (September 21st - September 18th)

- The combination of the source-git patches with existing patches now works well
  ([packit#963](https://github.com/packit/packit/pull/963)).
- Service now mostly supports also GitLab as you can see
  [here](https://gitlab.com/packit-service/hello-world/-/merge_requests/10)
  or [here](https://gitlab.com/packit-service/src/drpm/-/merge_requests/2).
  A lot of small issues were fixed in the last week
  ([packit-service#806](https://github.com/packit/packit-service/pull/806),
  [packit-service#812](https://github.com/packit/packit-service/pull/812),
  [packit-service#814](https://github.com/packit/packit-service/pull/814),
  [packit-service#815](https://github.com/packit/packit-service/pull/815),
  [packit-service#816](https://github.com/packit/packit-service/pull/816)
  ).
- Created Copr projects are now prefixed with the hostname
  for non-GitHub services and also support multipart namespaces
  ([packit-service#819](https://github.com/packit/packit-service/pull/819)).
- [Laura] fixed two issues with the testing-farm, our testing runner service
  ([packit-service#808](https://github.com/packit/packit-service/pull/808),
  [packit-service#809](https://github.com/packit/packit-service/pull/809)).
  It now works also on Pagure and GitLab.

[laura]: https://github.com/lbarcziova
