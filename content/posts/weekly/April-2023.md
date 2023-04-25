---
title: "Packit April 2023"
date: 2023-04-17T15:00:00+01:00
weight: 53
---

## Weeks 14–15 (April 3rd – April 17th)

- `packit source-git` related commands can skip dist-git repos, where the git trailer is not found, when looking for the right dist-git dir where to work. ([packit#1938](https://github.com/packit/packit/pull/1938))
- Tmt tests can now be run with fmf root outside of git root ([packit#1936](https://github.com/packit/packit/pull/1936))
- Commits created by Packit no longer contain the "Signed-off-by" tag. ([packit#1934](https://github.com/packit/packit/pull/1934))
- Packit's source_git functionality installs/loads the `_packitpatch` script in a more reliable manner that doesn't rely on deprecated setuptools functionality. ([packit#1926](https://github.com/packit/packit/pull/1926))
- Packit now supports monorepo configuration in CLI ([packit#1864](https://github.com/packit/packit/pull/1864))
- Packit should now correctly catch the logs if any of the user actions fail during `propose_downstream`. ([packit#1939](https://github.com/packit/packit/pull/1939))
- Packit now resets `Release` field in dist-git spec file to 1 when the version in upstream spec file is not up-to-date with the release that triggered `propose_downstream`. ([packit#1940](https://github.com/packit/packit/pull/1940))

## Week 16 (April 18th – April 24th)

- Packit now complies with [PEP 621](https://peps.python.org/pep-0621/) and stores project metadata in `pyproject.toml`. ([packit#1913](https://github.com/packit/packit/pull/1913))
- Packit now properly respects `upstream_ref` for tags that start with "a", "b", "c", "e", "n", "r", "s". ([packit#1943](https://github.com/packit/packit/pull/1943))
- Packit Service now supports multi package configuration (a.k.a. monorepo configuration). ([packit-service#1982](https://github.com/packit/packit-service/pull/1982))
