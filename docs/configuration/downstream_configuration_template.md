---
title: Downstream configuration template
sidebar_position: 2
---

This is a template for configuration of Packit's Fedora release automation (dist-git only).

## How to use the template
1. copy the content
2. create a `packit.yaml`/`.packit.yaml` file in root directory of your dist-git repository in your `rawhide` branch
and paste the content
3. resolve the TODOs
4. (optionally) run [`packit validate-config`](/docs/cli/validate-config) to make sure the configuration is valid

## Template
```yaml
# See the documentation for more information:
# https://packit.dev/docs/configuration/

# TODO fill in the URL to the upstream Git repo (one that can be passed to anonymous `git clone`)
upstream_project_url: https://github.com/<upstream-repository>

# TODO optionally uncomment and fill in the URL of repository where you want to be notified via issues about errors
#issue_repository: https://github.com/<my-repo-for-issues>

# TODO unless upstream tags match the version strings, you need to uncomment this and adjust the template to match the upstream tag format
# https://packit.dev/docs/configuration#upstream_tag_template
#upstream_tag_template: v{version}

# TODO uncomment and adjust if you want Packit to filter upstream tags that should be reacted upon
# https://packit.dev/docs/configuration#upstream_tag_include
# https://packit.dev/docs/configuration#upstream_tag_exclude
#upstream_tag_include: <python-regex>
#upstream_tag_exclude: <python-regex>

jobs:
# https://packit.dev/docs/configuration/downstream/pull_from_upstream
# TODO make sure there is Fedora mapping for the upstream project in https://release-monitoring.org/projects/
# TODO make sure Monitoring status on the left side at https://src.fedoraproject.org/rpms/<your-package> is set to Monitoring (or Monitoring and scratch builds)
- job: pull_from_upstream
  trigger: release
  dist_git_branches:
    # TODO adjust the list of branches for which the release should be synced
    - fedora-all
  
  # TODO customization of changelog entry of the new release and Packit's commit message
  # default behaviour:
  # - changelog entry contains `git log` output and references the bugzilla about new release
  # - commit message contains info about the upstream release and references the bugzilla about new release  
  # you can choose one of the following options below to customize the behaviour:
  
  # option 1: generate your custom changelog entry and/or commit message
  # uncomment and adjust the commands to your needs
  
  #actions:
  #  commit-message:
  #  - bash -c 'echo "Update to ${PACKIT_PROJECT_VERSION}"'
  #  - bash -c '[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\n" | sed "s/^/- Resolves /"'
  #  - bash -c 'echo "- Upstream tag - ${PACKIT_UPSTREAM_TAG}"'
  #  - bash -c 'echo "- Upstream commit - ${PACKIT_UPSTREAM_COMMIT}"'
  #  changelog-entry:
  #  - bash -c 'echo "- Update to ${PACKIT_PROJECT_VERSION}"'
  #  - bash -c '[ -z "$PACKIT_RESOLVED_BUGS" ] || echo ${PACKIT_RESOLVED_BUGS} | tr " " "\n" | sed "s/^/- Resolves /"'

  # option 2: enable copy_upstream_release_description flag so that upstream release description is set as 
  # changelog entry (works for GitHub and GitLab upstreams only)
  #copy_upstream_release_description: true

# TODO remove if you do not want to have Koji builds automatically triggered by Packit
# https://packit.dev/docs/configuration/downstream/koji_build
- job: koji_build
  trigger: commit
  # TODO uncomment and adjust if you want to allow Koji builds to be triggered by other events than Packit's merged PRs
  # https://packit.dev/docs/configuration/downstream/koji_build#optional-parameters
  #allowed_pr_authors: ['packit', 'all_admins']
  #allowed_committers: ['all_admins']
  # TODO adjust the list of branches for which the the builds should be triggered
  dist_git_branches:
    - fedora-all

# TODO remove if you do not want to have Bodhi updates automatically triggered by Packit
# https://packit.dev/docs/configuration/downstream/bodhi_update
- job: bodhi_update
  trigger: commit
  # TODO adjust the list of branches for which the updates should be created
  dist_git_branches:
    - fedora-branched
```
