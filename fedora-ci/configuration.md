---
title: Configuration
sidebar_position: 3
---

Fedora CI is now enabled by default for all Fedora dist-git repositories with a global default configuration.

If you need to opt out, you can request your repository to be added to the
`fedora_ci.disabled_projects` list in the
[deployment configuration](https://github.com/packit/deployment/blob/main/secrets/packit/prod/packit-service.yaml.j2)
by submitting a [pull request](https://github.com/packit/deployment/pulls).

## Opting out of ELN

Packages with high PR traffic and long build times may want to skip ELN scratch builds and tests.
To opt out, open a [pull request](https://github.com/packit/deployment/pulls) adding your project URL
to `fedora_ci.disabled_projects_for_eln` in the
[deployment configuration](https://github.com/packit/deployment/blob/main/secrets/packit/prod/packit-service.yaml.j2):

```yaml
fedora_ci:
  disabled_projects_for_eln:
    - https://src.fedoraproject.org/rpms/your-package
```

The project will still run regular Fedora CI scratch builds and tests, only ELN will be skipped.

## Opting out of Log Detective

[Log Detective](https://log-detective.com/) analyzes failed Koji build logs to help identify the root cause.
To opt out of this analysis for your project, open a [pull request](https://github.com/packit/deployment/pulls)
adding your project URL to `fedora_ci.disabled_projects_for_logdetective` in the
[deployment configuration](https://github.com/packit/deployment/blob/main/secrets/packit/prod/packit-service.yaml.j2):

```yaml
fedora_ci:
  disabled_projects_for_logdetective:
    - https://src.fedoraproject.org/rpms/your-package
```
