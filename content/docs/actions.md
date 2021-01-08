---
title: "Actions"
date: 2019-06-28
draft: false
disableToc: false
weight: 8
---

# Actions

You can probably find yourself in a situation where some part of the packit workflow needs to be
tweaked for your package.

Packit supports actions, a way to change default implementation for a command
of your choice.  Packit is able to execute more commands. Each action can
accept a list of commands. By default, the commands are executed directly and
not in a shell - if you need shell, just wrap your command like this: `bash -c
"my fancy $command | grep success"`.

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
|        | `fix-spec-file`            | upstream git repo | after creation of a tarball and before running rpmbuild command                   | this action changes spec file to use the new tarball                          |

**create-archive** - is expected to return a relative path to the archive - relative within the repository. If there are more steps, then one of them has to return the archive name.

**fix-spec-file** — this action performs these 3 operations on a spec file:

1. Replaces `Source0` with a local path to the generated tarball
2. Changes first %setup (or %autosetup) macro in %prep and adds `-n` so the generated tarball can be unpacked
3. Changes %version

As an example how to use this, a package may define more Sources - in such a
case, default implementation of fix-spec-file won't be able to update %prep
correctly. You can write a simple shell script and use sed to set the new
Sources correctly, e.g. `sed -i packaging/fedora/snapd.spec -e
"s/https.*only-vendor.tar.xz/$correct_tarball_path/"`


#### Environment variables set by packit

Additionally, packit sets a few env vars for specific actions

**fix-spec-file**

`PACKIT_PROJECT_VERSION` — current version of the project (coming from `git describe`)
`PACKIT_PROJECT_COMMIT` — commit hash of the top commit
`PACKIT_PROJECT_ARCHIVE` — expected name of the archive

**create-archive**

`PACKIT_PROJECT_VERSION` — current version of the project (coming from `git describe`)
`PACKIT_PROJECT_NAME_VERSION` — current name and version of the project (coming from `git describe`)


-----

In your package config they can be defined like this:

```
specfile_path: package.spec
synced_files:
  - packit.yaml
  - package.spec
upstream_package_name: package
downstream_package_name: package
dist_git_url: https://src.fedoraproject.org/rpms/package.git
actions:
  prepare-files: "make prepare"
  create-archive:
  - "make archive"
  - "ls"
```
