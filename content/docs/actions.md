---
title: "Actions"
date: 2019-06-28
draft: false
disableToc: false
weight: 1
---

You can probably find yourself in a situation where some part of the packit workflow needs to be
tweaked for your package.

Packit supports actions, a way to change default implementation for a command of your choice.
Packit is able to execute more commands. Each action can accept list of commands.

All the actions are also executed inside Packit-as-a-Service. The service
creates a new sandbox environment where the command is ran.

Actions have a default behaviour which you can override, hooks don't have any -
hooks are a way for you to perform operations after packit does a specific
event, e.g. clones an upstream repo.

Currently, these are the actions you can use:

### `propose-update` command

|        | name                  | working directory | when run                                                                          | description                               |
| ------ | --------------------- | ----------------- | --------------------------------------------------------------------------------  | ----------------------------------------- |
| [hook] | `post-upstream-clone` | upstream git repo | after cloning of the upstream repo (master) and before other operations           |                                           |
| [hook] | `pre-sync`            | upstream git repo | after cloning and checkout to the correct (release) branch                        |                                           |
|        | `prepare-files`       | upstream git repo | after cloning, checking out of both upstream and dist-git repos                   | replace patching and archive generation   |
|        | `create-patches`      | upstream git repo | after sync of upstream files to the downstream                                    | replace patching                          |
|        | `create-archive`      | upstream git repo | when the archive needs to be created                                              | replace the code for creating an archive  |
|        | `get-current-version` | upstream git repo | when the current version needs to be found                                        | expect version as a stdout                |


### Creating SRPM

These applies to `srpm` command and building in COPR.

|        | name                  | working directory | when run                                                                          | description                               |
| ------ | --------------------- | ----------------- | --------------------------------------------------------------------------------  | ----------------------------------------- |
| [hook] | `post-upstream-clone` | upstream git repo | after cloning of the upstream repo (master) and before other operations           |                                           |
|        | `get-current-version` | upstream git repo | when the current version needs to be found                                        | expect version as a stdout                |
|        | `create-archive`      | upstream git repo | when the archive needs to be created                                              | replace the code for creating an archive  |
|        | `create-patches`      | upstream git repo | after sync of upstream files to the downstream                                    | replace patching                          |


-----

In your package config they can be defined like this:

```yaml
specfile_path: package.spec
synced_files:
  - packit.yaml
  - package.spec
upstream_project_name: package
downstream_package_name: package
dist_git_url: https://src.fedoraproject.org/rpms/package.git
actions:
  prepare-files: "make prepare"
  create-archive:
  - "make archive"
  - "ls"
```
