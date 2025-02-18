---
title: What maintainers should know before adopting Packit for downstream release automation 
sidebar_position: 8
---
# What maintainers should know before adopting Packit for downstream release automation 

## Responsibilities

Packit is designed to **assist** maintainers, not to **replace** them.

Maintainers retain key responsibilities:
- reviewing and merging Packit-created pull requests
- maintaining package quality
- ensuring updates don't break dependant packages

:::tip `version_update_mask`

The default Packit onboarding configuration enables automated releases only for `rawhide`. 

When extending the automation to branched Fedoras and EPELs, consider using [`version_update_mask`](https://packit.dev/docs/configuration#version_update_mask) to prevent introducing breaking changes into stable distributions.

:::

:::warning missing notifications

Pull requests, Koji builds and Bodhi updates are created by Packit FAS account, making it the default notification recipient.

To stay informed about Packit-triggered activities in the Fedora ecosystem, [configure notification settings accordingly](https://packit.dev/docs/fedora-releases-guide/fedora-notifications).

There is an [open issue](https://github.com/packit/packit-service/issues/2404) for Bodhi update notifications.

:::

## Monitoring and observability

Track *Packit Service* activity through:
- the pull request updates and 
- the [Packit Dashboard](https://dashboard.packit.dev/).

Packit Service responds to every valid command in pull requests. Missing response indicates:
- Incorrect command syntax
- Packit Service outage

Check service status at [https://status.packit.dev/](https://status.packit.dev/).

## Recovery procedures

### Service-based retriggering

Each job configured in `packit.yml` can be retriggered via dist-git pull request comments. See the [complete list of commands](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding#retriggering).

### Manual CLI Operations

During service outages, maintain workflow using Packit CLI:

1. Install [Packit CLI](https://packit.dev/docs/cli)
2. [Configure required tokens](https://packit.dev/docs/configuration#user-configuration-file)
3. Verify setup (if not already working in service):
   - Follow [dist-git onboarding guide](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding)
   - Validate config with `packit validate-config`

#### Troubleshooting Issues

**Missing pull request for release:**

Use [`packit pull_from_upstream`](https://packit.dev/docs/cli/pull-from-upstream) when [release-monitoring](https://release-monitoring.org/) detects updates but pull requests aren't created.

**Missing Koji build:**

The release pull request is merged (and contains a change in the version value) but a Koji build isn't triggered.

- Check [`allowed_pr_authors`](https://packit.dev/docs/configuration/downstream/koji_build#optional-parameters)
- Trigger build manually with [`packit build in-koji`](https://packit.dev/docs/cli/build/in-koji)

When using Packit CLI to create pull requests, ensure your FAS account is added to the `allowed_pr_authors` list to trigger Koji builds automatically. This enables the expected build workflow for maintainer-created pull requests.

**Missing Bodhi update:**

The Koji build is created but there is no Bodhi update.

- Packit does not create Bodhi updates for `rawhide`, they are automatically created by Bodhi.
- Verify [`allowed_builders`](https://packit.dev/docs/configuration/downstream/bodhi_update#optional-parameters)
- Create manually using [`packit create-update`](https://packit.dev/docs/cli/create-update)

For updates on non-rawhide branches, verify your FAS account is included in the `allowed_builders` list. When submitting Koji builds via Packit CLI, automatic Bodhi update creation requires your FAS account to be explicitly authorized in this configuration.

## Customization options

Packit works best with simple package structures:
- Single source
- Single patch
- Straightforward spec file

For complex packages, customize Packit using:
- [Actions/hooks](https://packit.dev/docs/configuration/actions)
- Reference [configuration examples](https://packit.dev/docs/configuration/examples#examples-for-actions)

### `changelogs`
Customize `changelogs` generation [following these examples](https://packit.dev/docs/configuration/examples#custom-changelog-generation)

### side tags - releasing multiple packages in a single update
[Follow this guide](https://packit.dev/docs/fedora-releases-guide/releasing-multiple-packages) to enable builds in `side-tags`.

## Ecosystem Awareness

Before adoption, review similar packages in the same ecosystem for best practices and configuration patterns.