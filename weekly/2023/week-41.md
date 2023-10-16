---
title: Week 41 in Packit
date: 2023-10-16
tags:
  - 2023-October
  - 2023
  - October
---

## Week 41 (October 10th – October 16th)

- (_breaking_) Packit no longer accepts `packit.json` or `.packit.json` as a configuration file name.
  ([packit#2123](https://github.com/packit/packit/pull/2123))
- We have implemented several improvements in syncing the release downstream:
  - Packit now updates ACL of its own dist-git forks to allow users and groups with commit rights to the original
    dist-git repo to push directly to a fork. ([packit#2112](https://github.com/packit/packit/pull/2112))
  - Packit now also properly cleans up the branch after syncing the release which should prevent unwanted files
    (e.g. tarballs) being committed to dist-git. ([packit#2125](https://github.com/packit/packit/pull/2125))
  - We have adjusted the way how Packit includes the resolved bugzillas in the commit messages created when syncing the release
    downstream so that the resolved bugzillas are included in changelog when using `%autochangelog`.
    ([packit#2126](https://github.com/packit/packit/pull/2126))
- Packit now reacts to retriggering comments for downstream jobs by commenting on the same issue/PR and
  providing information about the jobs. ([packit-service#2222](https://github.com/packit/packit-service/pull/2222))
- We have fixed an issue that prevented you from running the jobs on the GitLab.com due to failing resolution
  of the upstream/downstream relationship for the cloned project. ([packit#2120](https://github.com/packit/packit/pull/2120))
- Packit now triggers the build for the `/packit test` comment command if the last build was not successful.
  ([packit-service#2228](https://github.com/packit/packit-service/pull/2228))

And special thanks to [@SpyTec](https://github.com/SpyTec)
for multiple wonderful [dashboard improvements](https://github.com/packit/dashboard/pulls?q=is%3Apr+author%3ASpyTec+merged%3A2023-10-10..2023-10-16)!
