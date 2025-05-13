---
title: validate
date: 2021-03-18T08:48:36+01:00
sidebar_position: 30
---
# `packit config validate`

Validate the Packit configuration file.


## Help

    Usage: packit config validate [OPTIONS] [PATH_OR_URL]

      Validate PackageConfig.

      - checks missing values
      - checks incorrect types
      - checks whether monitoring is enabled if 'pull_from_upstream` is used

      PATH_OR_URL argument is a local path or a URL to a git repository with
      packit configuration file config: Optional path to a specific Packit
      configuration file.

    Options:
      --offline               Do not make remote API calls requiring network
                              access.
      -c, --config-path PATH  Path to a specific Packit configuration file.
      -h, --help              Show this message and exit.
