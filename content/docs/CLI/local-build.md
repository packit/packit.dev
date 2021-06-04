---
title: "local-build"
date: 2021-03-18T08:52:33+01:00
draft: false
weight: 25
---

# local-build

Create RPMs using content of the upstream repository.


## Help

    Usage: packit local-build [OPTIONS] [PATH_OR_URL]

      Create RPMs using content of the upstream repository.

      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory

    Options:
      --upstream-ref TEXT  Git ref of the last upstream commit in the current
                           branch from which packit should generate patches (this
                           option implies the repository is source-git).

      -h, --help           Show this message and exit.

