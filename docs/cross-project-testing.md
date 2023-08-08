---
title: Setting up cross-project testing
sidebar_position: 9
---
# Setting up cross-project testing
Cross-project testing enables you to ensure the compatibility and reliability of interconnected repositories.
And with a little bit of configuration on Packit and tmt parts, it can be easily automated within Packit!

Big kudos to [Martin Pitt](https://github.com/martinpitt/) who experimented with these settings in 
[`cockpit` repositories](https://github.com/cockpit-project/) and wrote an amazing blog post about it!
If you are interested in all the details, make sure to read the 
[full blog post](https://cockpit-project.org/blog/tmt-cross-project-testing.html). Alternatively, the following sections
will describe the needed configuration for setting it up.
 
After determining the dependency (or dependencies) you want to test, the configuration is relatively easy:
1. For the dependent repository, Packit should be configured to build every commit of the `main` branch, or any other
similar branch containing recent changes, into a dedicated Copr repository.
2. For the dependency repository, you should add a separate Packit test job with a tmt test plan to run on all pull requests. 

Let's break down these steps using examples from the `cockpit` setup (where `cockpit-podman` depends on the `cockpit` repo)!

### Configuring Packit builds on commits of the dependent repository
The goal here is to build the most recent code (usually in the `main` branch) of the repo in a dedicated Copr repository, 
which can be easily done using Packit.
Firstly a new dedicated [Copr](https://copr.fedorainfracloud.org) project needs to be created and configured as needed.
For Packit to build in this project, the `Packit allowed forge projects` needs to be filled as well.

Then you can configure a Packit `copr_build` job to do a build in the new Copr repo for each commit that lands in the desired 
branch of the dependent repo (in this example `main` branch of `cockpit-podman`):
```yaml
- job: copr_build
  trigger: commit
  branch: "^main$"
  owner: "@cockpit"
  project: "main-builds"
  preserve_project: True
```

You will need to approve the `packit` Copr user to be able to trigger builds in the Copr repo. 

The additional details of the setup are described [here](/docs/configuration/upstream/copr_build#using-a-custom-copr-project).

### Configuring the test plan 
After that, a new test plan `plans/<your-project>.fmf` needs to be added to the dependency repository, which selects the
tests you want to run from this repo. Unfortunately, it is impossible to auto-import all plans
at the moment (but this may be useful since you can select a subset of tests that apply to the tested dependency).

So this is mostly a copy of the dependent repo test plan, with one modification: they should not run by default, 
but only in a `revdeps` tmt context. The test plan can then look like this (an example from `cockpit`):
```yaml
# reverse dependency test
enabled: false

adjust+:
  when: revdeps == yes
  enabled: true

discover:
    how: fmf
    url: https://github.com/cockpit-project/cockpit-podman
    ref: "main"
execute:
    how: tmt

/podman-system:
    summary: Run cockpit-podman system tests
    discover+:
        test: /test/browser/system

# ... possibly more test plans here
```
For the other plans in this repository, you should mark it to not run in the `revdeps` scenario:
```yaml
adjust+:
  when: revdeps == yes
  enabled: false
```

### Configuring the Packit test job
Finally, to plug everything together, a Packit test job needs to be configured that will run the `revdeps` context test plan 
against the builds from `main` branch of the dependent repo by specifying [`tf_extra_params`](https://packit.dev/docs/configuration/upstream/tests#optional-parameters).
The key here is to install the latest `main` build from the dependency: we are making sure we are not breaking `cockpit`.
Make sure to also give it a meaningful `identifier` so that you can differentiate the statuses:

```yaml
  - job: tests
    identifier: revdeps
    trigger: pull_request
    targets:
      - fedora-latest-stable
    tf_extra_params:
      environments:
        - artifacts:
          - type: repository-file
            id: https://copr.fedorainfracloud.org/coprs/g/cockpit/main-builds/repo/fedora-$releasever/group_cockpit-main-builds-fedora-$releasever.repo
          tmt:
            context:
              revdeps: "yes"
```