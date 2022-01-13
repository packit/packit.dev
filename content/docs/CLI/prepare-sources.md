---
title: "prepare-sources"
date: 2021-12-8
disableToc: false
weight: 8
---

# `packit prepare-sources`

Prepares sources for a new SRPM build using the content of the upstream repository.
Applies the same as for `packit srpm`, but instead of building a SRPM in the end,
prepared sources are moved to the `result-dir`.


## Requirements

* Upstream project is using git.
* Packit config file placed in the upstream repository.


## Help


    Usage: packit prepare-sources [OPTIONS] [PATH_OR_URL]
    
      Prepare sources for a new SRPM build using content of the upstream
      repository. Determine version, create an archive or download upstream and
      create patches for sourcegit, fix/update the specfile to use the right
      archive, download the remote sources. Behaviour can be customized by
      specifying actions (post-upstream-clone, get-current-version, create-
      archive, create-patches, fix-spec-file) in the configuration.
    
      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory
    
    Options:
      --result-dir DIR            Copy the sources into DIR. By default,
                                  `prepare_sources_result` directory in the
                                  current working directory is created.
    
      --upstream-ref TEXT         Git ref of the last upstream commit in the
                                  current branch from which packit should generate
                                  patches (this option implies the repository is
                                  source-git).
    
      --bump / --no-bump          Specifies whether to bump version or not.
      --release-suffix TEXT       Specifies release suffix. Allows to override
                                  default generated:{current_time}.{sanitized_curr
                                  ent_branch}{git_desc_suffix}
    
      --ref TEXT                  Git reference to checkout.
      --pr-id TEXT                Specifies PR to checkout.
      --merge-pr / --no-merge-pr  Specifies whether to merge PR into the base
                                  branch in case pr-id is specified.
    
      -h, --help                  Show this message and exit.


