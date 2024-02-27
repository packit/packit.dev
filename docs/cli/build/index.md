---
title: build
date: 2022-07-15
chapter: false
sidebar_position: 40

---

# `packit build`

Subcommand that groups all RPM build related commands together.

## Possible ways to build an RPM

* [`locally`](/docs/cli/build/locally)
* [`in-mock`](/docs/cli/build/in-mock)
* [`in-copr`](/docs/cli/build/in-copr)
* [`in-koji`](/docs/cli/build/in-koji)
* [`in-image-builder`](/docs/cli/build/in-image-builder)

## Help

    Usage: packit build [OPTIONS] COMMAND [ARGS]...

      Subcommand to collect build related functionality

    Options:
      --srpm FILE  Build the SRPM from FILE instead of implicit SRPM build.
      -h, --help   Show this message and exit.

    Commands:
      in-copr  Build selected upstream project in Copr.
      in-image-builder  Create a VM image in Image Builder.
      in-koji  Build selected upstream project in Fedora.
      in-mock  Build RPMs in mock using content of the upstream repository.
      locally  Create RPMs using content of the upstream repository.
