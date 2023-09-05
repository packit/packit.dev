---
title: "Call for volunteers: help to test us the release syncing using staging instance"
date: 2023-09-05T14:46:18+02:00
authors: lbarczio
tags:
  - downstream
  - pull-from-upstream
  - propose-downstream
  - staging
---

In the upcoming months, we plan to migrate our service to a new cluster. However, this may affect `propose_downstream`
and `pull_from_upstream` jobs due to the new firewall rules. The problematic aspects could be:

- commands you run in your `actions` during syncing the release involving interactions with external servers
- downloading your sources from various hosting services (crates.io, npm, gems, etc.)

To smoothen this transition, we kindly encourage you to enable one of these jobs on our already migrated staging instance.
This recommendation is particularly important if you belong to one of the groups affected by the two previous points.
This proactive step will help us identify and address any issues promptly.

Both instances can be run at the same time and the behaviour can be configured via the `packit_instances` configuration key,
which is by default set to `["prod"]`. Picking just one instance is required only for `koji_build` and `bodhi_update` jobs since
both instances work with the production instances of Fedora systems. To avoid too much noise in your dist-git PRs, you
may enable the `pull_from_upstream`/`propose_downstream` job for only one target, resulting in only one additional PR created.

Here's how you can enable one of the jobs on the staging instance:

- `pull-from-upstream`:
  The only thing needed is to duplicate the job in your Packit config using `packit_instances` configuration option. Example:

```yaml
- job: pull_from_upstream
  trigger: release
  packit_instances: ["stg"]
  dist_git_branches:
    - fedora-rawhide
```

- `propose-downstream`:
  For this job, you first need to [enable our staging Github app](/docs/guide/#staging-instance)
  (you should be already automatically approved if you had been previously approved for production instance).
  After that, similarly to `pull-from-upstream`, you only need to duplicate the job in your Packit config using `packit_instances`. Example:

```yaml
- job: propose_downstream
  trigger: release
  packit_instances: ["stg"]
  dist_git_branches:
    - fedora-rawhide
```

:::info

When merging the PRs created by Packit, please don't forget to merge the PRs created by the production instance
if you have a follow-up `koji_build` job enabled to ensure your builds will not be skipped
(or you can allow builds for staging instance as well, see [allowed_pr_authors](/docs/configuration/downstream/koji_build#optional-parameters))).

:::

We would be happy if you could then report any problems to [us](#contact). We appreciate your collaboration in ensuring a seamless migration. Your Packit team!
