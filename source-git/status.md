---
title: Packit’s statement on Source-git for 2023/Q3
date: 2023-06-22T23:59:59+01:00
sidebar_position: 2
---
# Packit’s statement on Source-git for 2023/Q3

The Packit team has worked on the source-git project for a few years (with varying priority) and a lot of research, prototyping and coding has been done. The goal of this document is to provide a status update on the source-git project and set clear expectations for the future.

Source-git is a workflow to efficiently maintain software downstream using the upstream git history with layering custom content on top as git commits and respective RPM spec file patches.

## Current state

By today (June 22, 2023), there is an existing tooling for source-git manipulation and a service allowing people to contribute to CentOS Stream via the source-git repositories.

### CLI interface for local usage

* There is a `packit source-git` subcommand providing multiple commands that enable initialising a source-git repository, syncing the content between source-git and dist-git and obtaining the status of the sync.
* The usage is documented here: https://packit.dev/source-git/work-with-source-git/
* Sahana Prasad Hebbur Narasimha Prasad uses the tooling for `openssl` and [made a talk about that on DevConf.CZ 23](https://www.youtube.com/watch?v=0j5ZglF0PT8).
* This tooling is a part of Packit’s CLI tool (`packit` RPM package in Fedora/EPEL8).

### Service integration for CentOS Stream

#### Workflow
* People can request a source-git repository to be placed into https://gitlab.com/redhat/centos-stream/src 
* Contributors can submit contributions on the source level (in the source-git repository).
* The automation generates a corresponding dist-git merge request and syncs back the CI results.
* Documentation: https://docs.centos.org/en-US/stream-contrib/contributing/source-git/

#### Implementation
* A separate instance of Packit service is deployed and maintained.
  * Most of the code is shared with Packit (such as deployment or architecture).
  * The worker implementation differs and is located in a separate [repository](https://github.com/packit/hardly).

## What to expect from source-git and Packit team?

Packit Team exists to *automate and ease the work of maintainers and developers both in the communities and those that are foundational to Red Hat’s Open Hybrid Cloud Strategy.*

**Given the purpose and the fact that there are fewer people in the team, we agreed on not continuing the active development of source-git for now.**

Here are the main reasons:
* There are 60-70 packages which have a high number of patches (more than 10) in every distribution.
  * It’s a small number of projects that have high expectations of the solution and few of them even already have some source-git solution (and don’t need to migrate unless it provides better experience or functionality). On the other hand, the benefit of having the source-git solution maintained by someone else can be huge for those projects.
  * On the other efforts (mentioned below), the audience is much bigger.
* As we see it now, source-git as a whole is a huge effort trying to solve a lot of problems. Instead, we can split it into smaller tasks and resolve them one by one. (And the full source-git might be a result of it, or not.)
  * A lot is already happening on behalf of the Packit project, e.g. upstream builds/tests, releasing to CentOS Stream.
  * Also, source-git is a huge project and it’s hard to make it real as a whole. (Ideally, this needs to be done for both Fedora and RHEL/Stream which is not an easy task – politically and technically.)
* We can spend our time on other efforts to support both internal and external customers/users more effectively. Here are the alternatives being considered:
  * Integration of Packit with HMS (which is currently the company’s priority). We are planning a [*Developer build experience*](https://github.com/packit/research/issues/175).
  * Being part of RHEL on GitLab initiative (being discussed).
  * Providing tooling for CentOS Stream. (Currently being done in collaboration with Gris Ge, but the team can put more effort here.)
  * Enhancing the current Packit workflows. Supporting internal/external teams in upstream projects (saving time by helping the shift left movement) by improving the current integration with Copr, internal/public Testing Farm, maintenance automation, VM image builds. (We can save more time/money. More accurate data is being collected.)
* What can people expect from now on?
  * CLI supporting the basic source-git manipulation is provided as part of the `packit` Fedora/EPEL8 package that can be installed in a local environment or a container.
    * Initialising a source-git repository, syncing the content between source-git and dist-git and obtaining the status of the sync are the supported use cases.
  * Integration for gitlab.com/redhat/centos-stream/src is being deployed.
    * This integration takes care of opening a new dist-git merge request for any source-git merge request and synchronising the CI statuses back.
  * Critical fixes are being resolved to maintain the current feature set.
  * The team will not implement any new functionality, but we encourage or can help others to do it.
  * The team will check the demand and the priority of this feature on a quarterly basis to update the priority of this effort.

## FAQ

### I really want this feature to be implemented. What can we do?
You can definitely reach out to the team and we can discuss what needs to be done. We can either help you implement this, or (in case of higher demand) Packit team will implement this for you. The Packit team will not pick any new work without strong justification.

### Is the source-git dead?
No. This is just about deprioritising this effort. Packit team regularly checks the priorities and if the demand for this increases, the team will prioritise this again.

### Can we do something to move this effort forward? 
Yes, either bring multiple other teams and reach out to us, or we are willing to pass this to a new team to continue the work.

### Can we do something to help this succeed in the future?
Yes, simplify the distribution workflow itself and reduce differences between Fedora and RHEL/Stream. Ask the Red Hat “Operating System CI” (OSCI) team and/or [Veronika Kabatova](https://github.com/veruu) about how you can help.

### Why don’t we remove dist-git completely? Wouldn’t it be easier?
It would be really nice, but it’s a bold move that needs to be planned and done properly to be accepted. We, as a Packit team, don’t have enough people and power to do this. This shouldn’t be a decision of the Packit team, but we can be asked to do the implementation once it’s agreed on. (Because of this, we went with an opt-in approach instead. Note the ratio of packages potentially interested in source-git.)

### Was the work on this a waste of time?
We still think that the dist-git approach needs to be improved to make the distribution work more efficient. We’ve learned a lot and collected some valuable data/feedback that can be reused. The developed solution still provides some value and can be built upon. The source-git work was done as part of the Packit project which is successful as a whole. Having it as an extra deployment made us do the project more modular.
Also, to move forward as a team/company, we need to try new things, but we need to realise when to stop or slow down.

### What could have been done better?
Changing the core part of a development workflow, source code handling, is a huge task. We intended to do this in all three distributions: RHEL, Fedora Linux and CentOS Stream. That is a humongous scope, especially when the infrastructure behind these distros is changing. Having more reasonable expectations and smaller work items could result in more use of our source-git workflow. Now that gitlab.com is becoming the centerpiece for all sources, it will be more manageable to implement complex workflow changes.
