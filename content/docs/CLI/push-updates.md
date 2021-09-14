---
title: "push-updates"
date: 2021-03-18T08:52:56+01:00
draft: false
weight: 20
---

# `packit push-updates`

Push the Bodhi updates that have been in testing for more than 'Stable days' (7 by default)
to the stable.


## Help

    Usage: packit push-updates [OPTIONS] [PATH_OR_URL]

      Find all Bodhi updates that have been in testing for more than 'Stable
      days' (7 by default) and push them to stable.

    Options:
      --update-alias TEXT  For example FEDORA-2019-ee5674e22c
      -h, --help           Show this message and exit.
