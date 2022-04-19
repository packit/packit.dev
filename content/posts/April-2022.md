---
title: "April 2022"
date: 2022-04-04T12:40:16+01:00
weight: 62
---

## Week 13 (March 29th - April 4th)

- We have implemented `get_contributors` function in ogr that can be used for getting contributors to the project on GitHub (set of logins) and GitLab (set of authors).
  ([ogr#692](https://github.com/packit/ogr/pull/692))
- When multiple propose downstream attempts for the same PR fail, the error messages are sent to to the same issue (as comments), instead of creating multiple new issues.
  ([packit#1427](https://github.com/packit/packit-service/pull/1427))
- Downstream synchronization of the Packit configuration file (aka `packit.yaml`) is now working properly again.
  ([packit#1532](https://github.com/packit/packit/pull/1532))
- `packit source-git update-dist-git` and `packit source-git update-source-git` now check the synchronization of source-git and dist-git repositories prior to doing the update. If the update can't be done, for example, because the histories have diverged, the command provides instructions on how to synchronize the repositories.
  A `--force` option is available to try to update the destination repository anyway.
  ([packit#1534](https://github.com/packit/packit/pull/1534))
- When using `post_upstream_clone` to generate your spec-file,
  Packit now correctly checks out a release before the action is run.
  ([packit#1542](https://github.com/packit/packit/pull/1542))

## Week 14 (April 5th - April 11th)

- We have introduced two new build and test target aliases: `fedora-latest-stable` resolves to the latest stable Fedora
  Linux release, while `fedora-branched` resolves to all branched releases (all Fedora Linux release, except `rawhide`).
  ([packit#1546](https://github.com/packit/packit/pull/1546))
- We have reverted the functionality of Packit that allowed you to have set **only** specific targets for Copr repositories.
  This functionality was introduced a while ago and was found to be not very beneficial in cases of differently
  configured Copr jobs building in parallel in the same Copr repository. This is an implementation detail in the end,
  but Copr project chroots are now only added and never subtracted
  (every build has precisely specified targets based on the copr_build job definition).
  ([packit#1551](https://github.com/packit/packit/pull/1551))
- If you are using our stage instance, we make it listen only on `/packit-stg` comment commands so you can now differentiate
  between the instances when commanding Packit via pull-request or issue comments.
  For the production instance, you can continue using `/packit` prefix as you are used to.
  ([packit-service#1432](https://github.com/packit/packit-service/pull/1432))
- A new configuration option `downstream_branch_name` has been added, which is meant to be used in source-git projects
  and allows users to customize the name of the branch in dist-git which corresponds to the current source-git branch.
  ([packit#1555](https://github.com/packit/packit/pull/1555))
- `revision-range` argument of the source-git `update-source-git` command is now optional. If not specified,
  dist-git commits with no counterpart in source-git are synchronized.
  ([packit#1547](https://github.com/packit/packit/pull/1547))

## Week 15 (April 12th - April 14th)

- We have implemented reporting of status for the propose-downstream job which means that you can now
  see the progress of the job via check runs/commit statuses on the particular release commits.
  ([packit-service#1435](https://github.com/packit/packit-service/pull/1435))
