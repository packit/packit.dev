---
title: propose-downstream
date: 2019-06-28
sidebar_position: 7
---

# `packit propose-downstream`

This is a detailed documentation for the update functionality of packit. The
command creates a new pull request in Fedora (or CentOS Stream) using a selected or latest
upstream release. This command is meant to be called from **upstream repository**.


## Requirements

* Upstream git repository on GitHub/GitLab.
* Upstream release (read, git tag) where version in spec file is equivalent to
  the name of the git tag (or `upstream_tag_template` is configured).
* Packit config file placed in the upstream repository.
* Spec file present in the upstream repository and is correct in a given
  release.
* Pagure API tokens for Fedora (or CentOS Stream) Dist-git.
* GitHub API token.
* Valid Fedora (or CentOS Stream) Kerberos ticket.

:::tip CentOS Stream support

We newly support `propose-downstream` also for CentOS Stream, see the configuration specifics 
[here](/docs/configuration/upstream/propose_downstream#syncing-the-release-to-centos-stream).

:::

## Tutorial

* Place a file called `.packit.yaml` or `packit.yaml` in the root of your upstream repository.
   * The configuration is described [in this document](/docs/configuration/).
   * Please get inspired from [an existing config](https://github.com/packit/packit/blob/main/.packit.yaml).

* Place a spec file into your upstream project (and make sure that
  `specfile_path` in the config has a correct value).
   * This spec file will be then used to perform the update in Fedora (or CentOS Stream).
   * When you create a new upstream release, you should also update the spec file.
   * Once your upstream release is out (and the spec file is really up to
     date), you can use Packit to release it into Fedora (or CentOS Stream).

* Create a new upstream release. The spec file needs to be included in the ref
  for upstream release, because packit checks out the tag for the upstream
  release before copying files downstream.

* Once you have performed the upstream release (and the new archive is up),
  run `packit propose-downstream` in a working directory of your upstream
  repository:
  ```
  $ git clone https://github.com/user-cont/colin.git

  $ cd colin

  $ packit propose-downstream
  using "master" dist-git branch
  syncing ./colin.spec
  INFO: Downloading file from URL https://files.pythonhosted.org/packages/source/c/colin/colin-0.3.0.tar.gz
  100%[=============================>]     3.18M  eta 00:00:00
  downloaded archive: /tmp/tmpaanrpgjz/colin-0.3.0.tar.gz
  uploading to the lookaside cache
  PR created: https://src.fedoraproject.org/rpms/colin/pull-request/4
  ```

  As you can see, one of the things `propose-downstream` does is, it downloads the
  upstream release tarball and uploads it to the lookaside cache. [This is
  required by the Fedora Packaging
  Guidelines](https://fedoraproject.org/wiki/Packaging:SourceURL#Referencing_Source).
Then it copies the files listed in `files_to_sync` (which by default includes the spec file) from the upstream repo to downstream and creates the downstream PR.

## Help


