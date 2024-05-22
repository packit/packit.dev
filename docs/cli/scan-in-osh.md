---
title: scan-in-osh
date: 2024-05-22
sidebar_position: 41

---

# `packit scan-in-osh`

Builds a SRPM file and performs a scan in [OpenScanHub](https://openscanhub.fedoraproject.org/).

## Help

    Usage: packit scan-in-osh [OPTIONS] [PATH_OR_URL]

      Perform a scan through OpenScanHub. You need a valid kerberos ticket and set
      `dns_canonicalize_hostname=false` in Kerberos configurations. Documentation
      can be found at https://fedoraproject.org/wiki/OpenScanHub.

    Options:
      -p, --package TEXT  Package to build, if more than one available, like in a
                          monorepo configuration. Use it multiple times to select
                          multiple packages.Defaults to all the packages listed
                          inside the config.
      --target TEXT       Chroot to build in. (defaults to 'fedora-
                          rawhide-x86_64')
      --base-srpm TEXT    Base SRPM to perform a differential build
      --comment TEXT      Comment for the build
      -h, --help          Show this message and exit.
