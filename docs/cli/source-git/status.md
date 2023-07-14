---
title: status
sidebar_position: 2

---

# `packit source-git status`

Examine the sync status of a source-git and a dist-git repository.

This command informs whether the commits in source-git and dist-git are
in sync or about the ranges of commit that need to be synchronized using
`update-source-git` and `update-dist-git` commands in order to make them
synced. If possible, the status command aims to provide instructions on
how to sync the repositories.

## Help

    $ packit source-git status --help   
    Usage: packit source-git status [OPTIONS] SOURCE_GIT DIST_GIT
    
      Tell the synchronization status of a source-git and a dist-git repo.
    
      This command checks the commit history in the provided source-git and dist-
      git repos and informs about the range of commits to be synchronized from
      dist-git to source-git or the other way around, or informs that the
      repositories are in sync.
    
      If possible, the status command also provides instructions on how to
      synchronize the repositories.
    
    Options:
      -h, --help  Show this message and exit.
