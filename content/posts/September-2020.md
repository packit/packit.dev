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

## Week 38 (September 14th - September 18th)

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
- [Laura] fixed two testing-farm related issues
  ([packit-service#808](https://github.com/packit/packit-service/pull/808),
  [packit-service#809](https://github.com/packit/packit-service/pull/809)).
  You can now use `test` job also on Pagure and GitLab thanks to that.

[laura]: https://github.com/lbarcziova

## Week 39 (September 21st - September 25th)

- Packit-service can be configured to work with private namespaces. This is plumbing work which we need right now for CentOS Stream. We are not planning to enable this for GitHub - packit-service will still work only for public repositories, private ones are ignored. [packit-service#831](https://github.com/packit/packit-service/pull/831)
- If git tag contains more information than just version (e.g. `pkg_name-v1.2.3`), it is possible to use upstream_tag_template to extract version from the tag, which will be used in a subsequent task. [doc](https://packit.dev/docs/configuration/#upstream_tag_template) [packit#959](https://github.com/packit/packit/pull/959)
- Added support for globbing pattern in upstream_ref. [doc](https://packit.dev/docs/configuration/#upstream_ref) [packit#960](https://github.com/packit/packit/pull/960)
- Packit `--remote` is global option now and available for all commands. Because of this `sync-from-downstream --remote` was renamed to `--remote-to-push`. Remote can now be specified in the user's config (via upstream_git_remote parameter). [packit#977](https://github.com/packit/packit/pull/977)

Following bugs were fixed:

- Packit dropping leading zeros in version. [packit#814](https://github.com/packit/packit/pull/814)
- Packit CLI issue caused by picking incorrect copr project name. [packit#971](https://github.com/packit/packit/pull/971)

## Week 40 (September 28th - October 2nd)

- Packit-service is now explicitly checking if requested copr-build targets exist and if not, the user is informed about it. [packit-service#835](https://github.com/packit/packit-service/pull/835)
- We have improved the way how packit updates `%setup` line in a spec file - you are now able to set content of `-n` option via archive_root_dir_template config option, it defaults to `{upstream-pkg-name}`. [doc](https://github.com/packit/packit.dev/pull/167) [packit#834](https://github.com/packit/packit-service/pull/834)
- Packit is able to generate a patch file with format-patch without leading a/ and b/ in the patch diff. Required for patches in dist-git which are applied with -p0.
- Contribution guidelines were updated, now we have one shared [link](https://github.com/packit/contributing).
