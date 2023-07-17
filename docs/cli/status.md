---
title: status
date: 2021-03-18T08:53:12+01:00
sidebar_position: 15
---

# `packit status`

This command displays latest information related to the project - downstream
pull requests, upstream releases, builds in Koji and Copr and updates in Bodhi.


## Help

    Usage: packit status [OPTIONS] [PATH_OR_URL]

      Display status.

      - latest downstream pull requests
      - versions from all downstream branches
      - latest upstream releases
      - latest builds in Koji
      - latest builds in Copr
      - latest updates in Bodhi

    Options:
      -p, --package TEXT  Package to update, if more than one available, like in a
                          monorepo configuration. Use it multiple times to select
                          multiple packages.Defaults to all the packages listed
                          inside the config.
      -h, --help  Show this message and exit.


