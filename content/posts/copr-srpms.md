---
title: Building SRPMs in Copr
date: 2022-03-07T12:57:40+01:00
weight: 96
---

### Introduction

If you use Packit to build RPMs for your upstream code changes, likely,
you have already read about how does Packit build your [SRPMs](http://ftp.rpm.org/max-rpm/s1-rpm-miscellania-srpms.html).
If not, then just a short recap:
Each time an RPM build is triggered, Packit builds an SRPM and then submits
the created SRPM file to Copr where Copr takes care of building the actual RPMs.
Since you can modify the behaviour of building SRPMs by defining [actions](/docs/actions/),
this process needs to be run in an isolated environment. For this, we implemented our
[sandboxing mechanism](https://github.com/packit/sandcastle),
which simply runs the provided commands in an Openshift pod freshly created for each build.

#### Problems of the previous workflow for SRPM builds

This is a pretty good-functioning workflow, but it has some downsides which have become more and more annoying
with the growing user base. Because of the resources, we have set limits for Openshift pods running at one time.
This directly affects how many SRPM builds can run in parallel. As a result, when there are too many requests for (S)RPM builds,
some can get stuck in the queue while waiting for other builds to finish. Another inconvenience coming with pods being
always freshly created is copying the needed data into
and from the pod. This has also cost us some months of desperate debugging of weird errors.
Another disadvantage is that users cannot easily configure dependencies for their actions run during building SRPMs.
We have to install the dependencies manually on-demand, but of course, which is not flexible.

We were thinking about improving the process for a long time but never reached any clear conclusion.
Then in one of our architecture meetings, when we tried to solve another
issue related to our sandboxing solution, Pavel Raiskup from Copr team asked us why didn't
we build the SRPMs directly in Copr. We knew that there is a way of building SRPMs in Copr,
but weren't aware of the details and how would this fit our use case.

### Implementation of the Copr SRPMs

After some research of the [Copr custom source method](https://docs.pagure.org/copr.copr/custom_source_method.html), we
decided to give it a try. To make Copr build the SRPMs, Copr needs to be provided
with a script that will prepare the sources used to build an SRPM.
Therefore, we created the `packit prepare-sources` command, which mostly reuses existing code that is run also in the sandbox
workflow. It prepares the specfile, archive and other sources and then moves
them to a separate directory. So with the new implementation,
with each request to run (S)RPM build, Packit sends a dynamically created "script" to Copr that invokes our new command.
Here is what the script can look like:

    #!/bin/sh
    git config --global user.email "hello@packit.dev"
    git config --global user.name "Packit"
    resultdir=$PWD
    packit -d prepare-sources --result-dir "$resultdir" --pr-id 676 --job-config-index 2 https://github.com/packit/ogr

You can see that a pull request should be checked out or which job defined
in your Packit job config is the trigger of this action. And that's it! Copr finds the sources and builds SRPM from them.
Packit listens to the messages about the start and end of the build and similarily as for RPM builds, reports the
state via commit statuses/checks and provides the URL with the logs.

### Deployment phases

Since this change is pretty significant, we wanted to start using this workflow gradually and catch all the problems
before we get rid of the previous workflow for SRPMs.
At first, we tested how does the new solution work in our projects. The only disadvantage
was that the actual build process
takes a little longer than in sandcastle as we get an isolated environment where all the packages are installed for each new build.
On the other hand, Copr usually starts the build very soon after it is submitted, so no long wait time until some other build is finished.
In the initial implementation, we installed a list of dependencies
[which are present](https://github.com/packit/sandcastle/blob/ece539650770fea057877f0c97074acf506fada4/files/install-rpm-packages.yaml#L5) in our
sandbox which also increased the build time a bit.

So as the following step we added the functionality to define dependencies for actions in the
Packit config file with [`srpm_build_deps` key](/docs/configuration/#srpm_build_deps).

Example of how the configuration of `srpm_build_deps` can look like:

```yaml
actions:
  create-archive:
    - "python3 setup.py sdist --dist-dir ."
    - "sh -c 'echo packitos-$(python3 setup.py --version).tar.gz'"
  get-current-version:
    - "python3 setup.py --version"

srpm_build_deps:
  - python3-pip
  - python3-setuptools_scm
```

We also decided that presence of this key in the config will be for some period an indicator to build the SRPMs in Copr. With this approach, anyone can configure
their dependencies and play with adding and adjusting them as needed without directly breaking
the builds in their repository. When the builds in the PR pass, the configuration change can be merged and the new approach
will be used for the whole repository. We wanted
to kick off this process and therefore started opening PRs with dependencies configuration for projects that use
the RPM builds functionality the most. During this phase, you can reach out to us with your feedback, so we can
improve it even more!

As a next step, we use the new approach for GitHub app installations made since September 6, 2022.

The last step will be to get rid of using our sandbox for building SRPMs at all. We do not have an exact date
for this currently and will act accordingly to your feedback, but we are looking forward to that moment.
Since we don't want to break your CI results because of missing dependencies, we will use the previously linked list of deps.
As the list is pretty long, we encourage you to define your dependencies on your own. If you
bump into any troubles with setting up SRPM builds in Copr, please, reach out to us, we will be glad to help!
