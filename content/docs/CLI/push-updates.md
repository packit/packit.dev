---
title: push-updates
date: 2021-03-18T08:52:56+01:00
weight: 20
---

# `packit push-updates`

Push the Bodhi updates that have been in testing for more than 'Stable days' (7 by default)
to the stable.

If you are not authenticated with the bodhi server, please make sure that you
navigate in your browser to the URL provided by the bodhi-client and then paste
the `code=XX...` to the terminal when prompted.

If you set `fas_user` and `kerberos_realm` in your "~/.config/packit.yaml" and
have an active Kerberos TGT, you will be automatically authenticated.


## Help

    Usage: packit push-updates [OPTIONS] [PATH_OR_URL]

      Find all Bodhi updates that have been in testing for more than 'Stable
      days' (7 by default) and push them to stable.

    Options:
      --update-alias TEXT  For example FEDORA-2019-ee5674e22c
      -h, --help           Show this message and exit.
