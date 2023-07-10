---
title: in-mock
date: 2022-07-25
weight: 25
---

# `packit build in-mock`

Create RPMs in mock using content of the upstream repository.

## Help

    Usage: packit build in-mock [OPTIONS] [PATH_OR_URL]
    
      Build RPMs in mock using content of the upstream repository.
    
      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory.
    
    Options:
      --upstream-ref TEXT       Git ref of the last upstream commit in the current
                                branch from which packit should generate patches
                                (this option implies the repository is source-
                                git).
      --release-suffix TEXT     Specifies release suffix. Allows to override
                                default generated:{current_time}.{sanitized_curren
                                t_branch}{git_desc_suffix}
      --default-release-suffix  Allows to use default, packit-generated, release
                                suffix when some release_suffix is specified in
                                the configuration.
      -r, --root TEXT           Uses specified chroot configuration. If ends with
                                '.cfg', then it is treated as full path to the
                                mock configuration.
      -p, --package TEXT        Package to build, if more than one available, like
                                in a monorepo configuration. Use it multiple times
                                to select multiple packages.Defaults to all the
                                packages listed inside the config.
      -h, --help                Show this message and exit.
