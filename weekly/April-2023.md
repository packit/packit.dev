---
title: "Packit April 2023"
date: 2023-04-17T15:00:00+01:00
tags:
  - 2023
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

## Week 17-18 (April 25th – May 3rd)

- Detection of `%autorelease` usage in dist-git spec file during `propose-downstream` and `pull-from-upstream` has been improved and Packit will always preserve it. ([packit#1949](https://github.com/packit/packit/pull/1949))
- We have fixed an issue that prevented you from building in Copr and Koji on release in the GitLab upstream. ([packit-service#2027](https://github.com/packit/packit-service/pull/2027))
- TMT tests can now be run with FMF root outside of git root. ([packit-service#2007](https://github.com/packit/packit-service/pull/2007))
- When reacting to branch pushes, Packit now correctly checks whether the branch name matches the configuration for the test jobs with configured `commit` trigger. ([packit-service#2015](https://github.com/packit/packit-service/pull/2015))
- The `propose-downstream` job triggered by an issue comment now correctly loads the configuration from the upstream repository. ([packit-service#2021](https://github.com/packit/packit-service/pull/2021))
- Packit is newly on Mastodon. Or, more specifically, on Fosstodon.
  Follow [@packit@fosstodon.org](https://fosstodon.org/@packit) and be one of the first to know about all the news!
