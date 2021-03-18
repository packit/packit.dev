---
title: "propose-downstream"
date: 2019-06-28
draft: false
disableToc: false
weight: 7
---

# propose-downstream

This is a detailed documentation for the update functionality of packit. The
command creates a new pull request in Fedora using a selected or latest
upstream release.


## Requirements

* Upstream git repository on Github.
* Upstream release (read, git tag) where version in spec file is equivalent to
  the name of the git tag.
* Packit config file placed in the upstream repository.
* Spec file present in the upstream repository and is correct in a given
  release.
* Pagure API tokens for Fedora Dist-git.
* Github API token.
* Valid Fedora Kerberos ticket.


## Tutorial

* Place a file called `.packit.yaml` or `packit.yaml` in the root of your upstream repository.
   * The configuration is described [in this document](/docs/configuration/).
   * Please get inspired from [an existing config](https://github.com/user-cont/colin/blob/master/.packit.yaml) in
     colin project.

* Place a spec file into your upstream project (and make sure that
  `specfile_path` in the config has a correct value).
   * This spec file will be then used to perform the update in Fedora.
   * When you create a new upstream release, you should also update the spec file.
   * Once your upstream release is out (and the spec file is really up to
     date), you can use packit to release it into Fedora.

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
  Then it takes the spec file from the upstream repo, copies it downstream (while
  also all the files set in the `synced_files`) and creates the downstream PR.


## Help

    Usage: packit propose-downstream [OPTIONS] [PATH_OR_URL] [VERSION]
    
      Land a new upstream release in Fedora.
    
      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory
    
      VERSION argument is optional, the latest upstream version will be used by
      default
    
    Options:
      --dist-git-branch TEXT  Comma separated list of target branches in dist-git
                              to release into. (defaults to repo's default branch)
    
      --dist-git-path TEXT    Path to dist-git repo to work in. Otherwise clone
                              the repo in a temporary directory.
    
      --local-content         Do not checkout release tag. Use the current state
                              of the repo. This option is set by default for
                              source-git repos
    
      --force-new-sources     Upload the new sources also when the archive is
                              already in the lookaside cache.
    
      --no-pr                 Do not create a pull request to downstream
                              repository.
    
      --upstream-ref TEXT     Git ref of the last upstream commit in the current
                              branch from which packit should generate patches
                              (this option implies the repository is source-git).
    
      -f, --force             Don't discard changes in the git repo by default,
                              unless this is set.
    
      -h, --help              Show this message and exit.
