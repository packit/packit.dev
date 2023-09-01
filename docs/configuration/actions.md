---
title: Actions
date: 2019-06-28
sidebar_position: 3
---

# Actions

You can probably find yourself in a situation where some part of the packit workflow needs to be
tweaked for your package.

Packit supports actions, which can be used to change the default implementation
of some steps in the workflow. Packit is able to execute multiple
commands for a single action. Each action accepts a list of commands. By
default, the commands are executed using python's
[subprocess](https://docs.python.org/3/library/subprocess.html) module without
shell. If you need a shell (e.g. you want to utilize an environment variable,
subprocesses, pipelines, expansion or any shell syntax in your command), just
wrap your command in a bash process:
```shell
bash -c "my fancy $command | grep success"
```

> It's important to quote the content of the `-c` option so shell interprets it
> correctly as a single option input.

All actions are also executed inside Packit Service. The service
creates a new sandbox environment where the command is run.

Actions have a default behaviour which you can override, hooks don't have any -
hooks are a way for you to perform operations following a certain packit event,
e.g. cloning an upstream repo.

Currently, these are the actions you can use:

## Command matrix

### Syncing the release
These apply to `propose-downstream` command/job and `pull-from-upstream` job.

|        | name                  | working directory | when run                                                              | description                             |
|--------|-----------------------|-------------------|-----------------------------------------------------------------------|-----------------------------------------|
| [hook] | `post-upstream-clone` | upstream git repo | after cloning of the upstream repo (main) and before other operations |                                         |
| [hook] | `pre-sync`            | upstream git repo | after cloning and checkout to the correct (release) branch            |                                         |
|        | `prepare-files`       | upstream git repo | after cloning, checking out of both upstream and dist-git repos       | replace patching and archive generation |
|        | `create-patches`      | upstream git repo | after sync of upstream files to the downstream                        | replace patching                        |
|        | `get-current-version` | upstream git repo | when the current version needs to be found                            | expect version as a stdout parameter    |
|        | `changelog-entry`     | upstream git repo | when adding a new changelog entry to the specfile                     | stdout is used as a changelog entry     |


### Creating SRPM

These apply to the `srpm` command and building in COPR.

|        | name                  | working directory | when run                                                              | description                                          |
|--------|-----------------------|-------------------|-----------------------------------------------------------------------|------------------------------------------------------|
| [hook] | `post-upstream-clone` | upstream git repo | after cloning of the upstream repo (main) and before other operations |                                                      |
|        | `get-current-version` | upstream git repo | when the current version needs to be found                            | expect version as a stdout                           |
|        | `create-archive`      | upstream git repo | when the archive needs to be created                                  | replace the code for creating an archive             |
|        | `create-patches`      | upstream git repo | after sync of upstream files to the downstream                        | replace patching                                     |
|        | `fix-spec-file`       | upstream git repo | after creation of a tarball and before running rpmbuild command       | this action changes spec file to use the new tarball |
|        | `changelog-entry`     | upstream git repo | when adding a new changelog entry to the specfile                     | stdout is used as a changelog entry                  |

## Actions details

All actions are executed in a locked-down OpenShift pod. Your commands are
invoked with arbitrary UIDs from a high range. Some tools may experience
problems with these UIDs, such as `tar`. You can observe an error like this:
```
tar: value 1021440000 out of uid_t range 0..2097151
tar: Exiting with failure status due to previous errors
```

For `tar`, it's [recommended](https://github.com/packit/packit.dev/issues/192#issuecomment-729594207)
to use the `pax` format (`tar -H pax`).

If you run into similar issues with other tools, please consult documentation or maintainers of the project.

### `create-archive`

It is expected to return a relative path within the repository to the generated
archive. If there are more steps, then one of them has to return the archive
name. The best practice is to do it from the last step and print it: `bash -c
'echo path/to/archive-$VERSION.tar.gz'`.

If you can, please place the generated archive in the same directory as your
spec file.

If your project uses multiple archives, you should handle manipulation of your
spec file yourself in the `fix-spec-file` action. You also have to put all the
archives (spec file sources) in the same directory as your spec file.  Packit
expects that project only have a single archive set as `Source0` — it does not
have a mechanism to manipulate more sources right now.

### `fix-spec-file`

By default, this action updates the spec file so it's possible to have a proper
reference of the archive in the `%prep` section and unpack it during the build
properly. The action tries to perform 3 operations on a spec file:

1. It replaces Source configured by
   [`spec_source_id`](/docs/configuration/#spec_source_id) (default `Source0`)
   with a local path to the generated archive.

2. It changes the first `%setup` (or `%autosetup`) macro in `%prep` and adds
   `-n` so the generated tarball can be unpacked (it tries to extract the
   directory name directly from the archive or uses the configured
   [`archive_root_dir_template`](/docs/configuration#archive_root_dir_template)).

3. It updates Version and Release in the spec file.

If you provide your own implementation, none of the above happens.

For example a package may define multiple Sources. In such a case, the default
implementation of `fix-spec-file` won't be able to update `%prep` correctly.
You can instead use the `sed` program to set the new Sources correctly, e.g.
```yaml
actions:
  fix-spec-file:
  # define one of the Source variables correctly
  - sed -i my_specfile_path -e "s/https.*only-vendor.tar.xz/my_correct_tarball_path/"
  # fill in Release as if packit would have done it
  - bash -c "sed -i -r \"s/Release:(\s*)\S+/Release:\1${PACKIT_RPMSPEC_RELEASE}%{?dist}/\" my_specfile_path"
```

## Environment variables set by packit

Additionally, packit sets several environment variables for the actions:

`PACKIT_UPSTREAM_PROJECT_NAME` — set to the `upstream_package_name` value, if any  
`PACKIT_DOWNSTREAM_PROJECT_NAME` — set to the `downstream_package_name` value, if any  
`PACKIT_CONFIG_PACKAGE_NAME` — set to the package name key for the `packages` dictionary in a monorepo project,
falls back to the `downstream_package_name` or, if not set, to `upstream_package_name`


There are also action-specific environment variables:

**fix-spec-file**

`PACKIT_PROJECT_VERSION` — current version of the project (coming from `git describe`)  
`PACKIT_PROJECT_COMMIT` — commit hash of the top commit  
`PACKIT_PROJECT_ARCHIVE` — expected name of the archive  
`PACKIT_RPMSPEC_RELEASE` — value for spec file's `%release` field which packit would set  

**create-archive**

`PACKIT_PROJECT_VERSION` — current version of the project (coming from `git describe`)
`PACKIT_PROJECT_NAME_VERSION` — current name and version of the project (coming from `git describe`)

**changelog-entry**

`PACKIT_PROJECT_VERSION` — version to be set in the specfile, set when relevant 
(e.g. when syncing upstream release downstream)

**release synchronization actions** (`propose-downstream` and `pull-from-upstream`)  
*post-upstream-clone*
*pre-sync*
*prepare-files*
*create-patches*

`PACKIT_UPSTREAM_REPO` — absolute path to cloned upstream git repo  
`PACKIT_DOWNSTREAM_REPO` — absolute path to cloned downstream git repo

If you want to see the content of those variables, you can print using `echo`
in the specific action:
```yaml
actions:
  fix-spec-file:
  - bash -c "echo PACKIT_PROJECT_VERSION=${PACKIT_PROJECT_VERSION}"
```

and then make sure to run `packit` with the `--debug` option:
```
$ packit --debug srpm
...
2021-09-15 09:01:36.821 commands.py       DEBUG  Command: bash -c echo PACKIT_PROJECT_VERSION=${PACKIT_PROJECT_VERSION}
2021-09-15 09:01:36.826 logging.py        INFO   PACKIT_PROJECT_VERSION=0.14.0
```

-----

Actions can be defined like this in your `.packit.yaml`:

```yaml
specfile_path: package.spec
files_to_sync:
  - packit.yaml
  - package.spec
upstream_package_name: package
downstream_package_name: package
dist_git_url: https://src.fedoraproject.org/rpms/package.git
actions:
  prepare-files: "make prepare"
  create-archive:
  - "make archive"
  - bash -c "ls -1 ./package-*.tar.gz"
  changelog-entry:
  - bash -c "echo - New release ${PACKIT_PROJECT_VERSION}"
```
