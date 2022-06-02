---
title: "DevConf.cz Mini Workshop"
date: 2022-06-02
---

# DevConf.cz Mini Workshop: Packit and Fedora: downstream story continues

## Competition

### Rules

- package for a team
- points for various usage of Packit
- sources: [packit.dev/docs](https://packit.dev/docs) and present Packit team members
- time: 25 minutes (timer on screen)
- winner is the team with the most points and the first one if multiple teams get all the points

### Packages

- python-readthedocs-sphinx-ext
  - https://github.com/readthedocs/readthedocs-sphinx-ext
  - https://src.fedoraproject.org/rpms/python-readthedocs-sphinx-ext
  - hint: remove the patch from specfile (patch already merged upstream)
- golang-github-spacemonkeygo-openssl
  - https://github.com/spacemonkeygo/openssl
  - https://src.fedoraproject.org/rpms/golang-github-spacemonkeygo-openssl
  - hint: in specfile, remove the line with commit and move the line with version before the %gometa
- golang-github-10gen-escaper
  - https://github.com/10gen/escaper
  - https://src.fedoraproject.org/rpms/golang-github-10gen-escaper
  - hint: in specfile, remove the line with commit and move the line with version before the %gometa
- nyancat
  - https://github.com/klange/nyancat
  - http://src.fedoraproject.org/rpms/nyancat
- - your package

### Hints

- Create a fork of the GitHub project.
- To make the work easier, put your specfile to the upstream project (=fork).
  (There is a way how to avoid this but requires some tweaking.)

### Scoring

- point for every successful task
- claim of completion in form of URL sent to <<add a GitHub discussion thread URL>>
- full descriptions of the tasks follows:

#### (1) PR Copr build

A Copr build is triggered for GitHub pull-requests
for all released Fedora versions.
There is at least one successful build.
Use a URL of the pull-request with successful build to claim this.

#### (2) Copr project for stable branch

There is a permanent Copr project created and maintained by Packit
used for new commits pushed to the `stable` branch in the upstream repository.
There is at least one successful build in it.
Use a GitHub commits view URL to claim this (e.g. https://github.com/packit/packit/commits/stable).

#### (3) Installation test

Installation test is run for a submitted pull-request checking
that the package not only can be build but also installed.
Use a URL of the pull-request with successful test run to claim this.

#### (4) Smoke test

For each pull-request, the smoke test is run.
The test case should contain one simple command checking the presence of the package
and that the package can be used/run/...
(e.g. some help command for CLI tools, library import, ...)
Use a URL of the pull-request with successful test run to claim this.

#### (5) Scratch build

A new scratch build is triggered in Koji for a submitted upstream pull-requests
for all development versions of Fedora.
Use a URL of the pull-request with successful scratch build to claim this.

#### (6) Dist-git update

There is a dist-git pull-request created for the last released Fedora version
once there is a new upstream release.
Create a new fictive release `98.76.54` to trigger that.
(Hint: Don't forget to bump the version in specfile.)
Use a URL of of the pull-request to claim this.

#### (7) Koji build

The package is setup to trigger Koji build for new dist-git commits
done for merged pull-request submitted by user `packit` and for new pushes done by user `packit-stg`.
Use a URL of one of the dist-git pull-requests submitting this change to claim this.

#### (8) Bodhi update

The package is setup to create a Bodhi update for successful Koji builds
for all the branched Fedora versions.
Use a URL of one of the dist-git pull-requests submitting this change to claim this.

#### (9) Questionnaire: bonus task

The workshop is also a really nice opportunity to see users trying
to setup Packit, fighting with the documentation and hitting various obstacles.
Since we want to learn from that experience and ideally fix those issues,
please complete [this form](https://forms.gle/KFeHYafnSEDcEALL6)
once you are done with other tasks.
