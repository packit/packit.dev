---
title: "March 2020"
date: 2020-03-06
draft: false
---

## Week 10 (March 2nd - March 6th)


### packit
* The generate command is now deprecated in favour of the init command
  [(#728)], contributed by [@shreyaspapi](https://github.com/shreyaspapi)


### packit-service
* When a non-collaborator creates a PR, packit says that only "Collaborators
  can trigger packit-service" - this message has been improved to better match
  the reality [(#445)]
* Packit service no longer posts comments on pull requests when a SRPM can't be
  created - the logs should be now aviable in the service's logs view available
  when clocking on the commit status check URL [(#447)]
* Commands to control packit service can now be embedded in a comment
  (previously, the whole comment was treated as a command) - hence you can now
  create a comment to give an update and also trigger packit [(#433)],
  contributed by [@IceWreck](https://github.com/IceWreck)
* We have improved monitoring of packit-service by using more sentry.io's
  features [(#458)]
* You can now disable the functionality when packit service comments on a PR
  when it gets built for the first time (`notifications: {pull_request:
  {successful_build:: false}}` in your packit.yaml), hi
  [Lars](https://github.com/larskarlitski)! [(#455)]


[(#728)]: https://github.com/packit-service/packit/pull/728
[(#445)]: https://github.com/packit-service/packit-service/pull/445
[(#447)]: https://github.com/packit-service/packit-service/pull/447
[(#433)]: https://github.com/packit-service/packit-service/pull/433
[(#458)]: https://github.com/packit-service/packit-service/pull/458
[(#455)]: https://github.com/packit-service/packit-service/pull/455


## Week 11 (March 9th - March 13th)

[generated with `upsint get-changes`]

### packit
* More Specfile.add_patches() changes, by [@jpopelka](https://github.com/jpopelka), [#760](https://github.com/packit-service/packit/pulls/760)
  * description: "SourceX might be in a macro and I don't see a better way how to not add the patches inside the macro."
  * commit: Silence blake & flake8
  * commit: [Specfile.add_patches()] find first empty line after last SourceX
  * commit: [Specfile.add_patches()] find all SourceX
* fix_spec: make it more reliable and readable, by [@TomasTomecek](https://github.com/TomasTomecek), [#759](https://github.com/packit-service/packit/pulls/759)
  * description: '* we now rsplit git-describe output which should help when people use\n  dashes in tags\n* the code is now shorter and more readable'
  * commit: fix_spec: make it more reliable and readable
* packit, don't touch version, change release, by [@TomasTomecek](https://github.com/TomasTomecek), [#748](https://github.com/packit-service/packit/pulls/748)
  * description: "Example:\r\n```\r\npackit-0.8.1-1.20200305174322588258.104.g14f3e25.fc31.src.rpm\r\n```\r\n\r\nTODO:\r\n* [x] get rid of the version stuff\r\n* [x] doks -
actually, there is not much to document here\r\n* [x] fix tests\r\n* [x] The template string for the release is not gonna be configurable.\r\n* [x] test this with our bigges
t customers to make sure we're not breaking them (tried with packit, ogr, osbuild and tmt)\r\n\r\nFixes #693\r\n\r\nSigned-off-by: Tomas Tomecek <ttomecek@redhat.com>"
  * commit: packit, don't touch version, change release only by default
* PackitAPI.sync_release() returns new PullRequest, by [@jpopelka](https://github.com/jpopelka), [#758](https://github.com/packit-service/packit/pulls/758)
  * description: 'in order to put the PR url in service generated issue comment, example:\r\nhttps://github.com/packit-service/ogr/issues/348#issuecomment-596541601'
  * commit: PackitAPI.sync_release() returns new PullRequest
* fork fork -> fork 'fork', by [@jpopelka](https://github.com/jpopelka), [#757](https://github.com/packit-service/packit/pulls/757)
  * description: "previously:\r\nAbout to force push changes to branch 0.11.0-f32-update of a fork fork of the dist-git repo\r\n\r\nnow:\r\nAbout to force push changes to br
anch '0.11.0-f32-update' of a fork 'fork' of the dist-git repo."
  * commit: fork fork -> fork 'fork'
* [PackageConfigSchema.specfile_path_pre()] better log messages, by [@jpopelka](https://github.com/jpopelka), [#755](https://github.com/packit-service/packit/pulls/755)
  * description: 'The "Path to spec file is not set." (seen in #465) is a bit confusing.'
  * commit: import typing -> from typing import
  * commit: [PackageConfigSchema.specfile_path_pre()] better log messages
* store info about git HEAD in the image, by [@TomasTomecek](https://github.com/TomasTomecek), [#753](https://github.com/packit-service/packit/pulls/753)
  * description: ''
  * commit: store info about git HEAD in the image
* Split job and jobconfig (packit), by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#746](https://github.com/packit-service/packit/pulls/746)
  * description: '- Split the JobTriggerType to one related to config and one for actual triggers.'
  * commit: Split the JobTriggerType to one related to config and one for actual triggers
* Rename packit generate to packit init, by [@shreyaspapi](https://github.com/shreyaspapi), [#728](https://github.com/packit-service/packit/pulls/728)
  * description: '#701 I have done the changes, please check if this is what you meant.'
  * commit: Renaming generate to init with aliasing


### packit-service

* Add koji build handlers and simplify the handler decorators, by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#480](https://github.com/packit-service/packit-service/pulls/480)
  * description: "- Simplify the decorators for handlers.\n- Add handlers for Koji builds and add missing 'use_for' to PushKojiBuild.\n- Use commit and push triggers for Push* build handlers to be compatible between github and fedmsg terminology."
  * commit: Simplify the decorators for handlers
  * commit: Add handlers for Koji builds and add missing 'use_for' to PushKojiBuild
* fix p-s deployment in zuul, by [@TomasTomecek](https://github.com/TomasTomecek), [#483](https://github.com/packit-service/packit-service/pulls/483)
  * description: '```\nzuul,dev.yml: simplify and reduce footprint\n\nand also use the p-s images which we build, needz\nhttps://github.com/packit-service/deployment/pull/69\n```\n\n\\+ p-s-image.yaml: simplify the playbook'
  * commit: zuul,dev.yml: simplify and reduce footprint
  * commit: p-s-image.yaml: simplify the playbook
* Rework mapping, by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#476](https://github.com/packit-service/packit-service/pulls/476)
  * description: "- Make the mapping of handlers to events work and easier to use.\r\n  - Testing farm results and Copr events are handled as other events.\r\n  - Mapping support multiple triggers for one job and get's a correct config part.\r\n- Fixes: #465\r\n\r\nTODO:\r\n- [x] More tests (more combinations of triggers and configs).\r\n- [x] Check the commenting.\r\n- [x] Add docs for the decorators.\r\n- [ ] Remove internal job type (e.g. `copr_end`) from the `JobType` enum in packit. (After this PR, it can contain only the config-relevant values.)"
  * commit: Unify the naming of the mapping dictionaries
  * commit: Use previous behaviour for comments
  * commit: Make the mapping of handlers to events work and easier to use
* Use project_dir variable in playbooks, by [@lbarcziova](https://github.com/lbarcziova), [#468](https://github.com/packit-service/packit-service/pulls/468)
  * description: ''
  * commit: Use project_dir variable in playbooks
* Easier local development of p-s, by [@TomasTomecek](https://github.com/TomasTomecek), [#473](https://github.com/packit-service/packit-service/pulls/473)
  * description: '* make debugging of p-s easier\n* document how to run p-s httpd locally\n* put httpd config for p-s in this repo'
  * commit: make debugging of p-s easier
  * commit: document how to run p-s httpd locally
  * commit: put httpd config for p-s in this repo
* more tests to exercise /packit comment parsing, by [@TomasTomecek](https://github.com/TomasTomecek), [#475](https://github.com/packit-service/packit-service/pulls/475)
  * description: ''
  * commit: more tests to exercise /packit comment parsing
* images: store git HEAD info in the image, by [@TomasTomecek](https://github.com/TomasTomecek), [#467](https://github.com/packit-service/packit-service/pulls/467)
  * description: ''
  * commit: images: store git HEAD info in the image
  * commit: dockerfiles,shell: start lines with operators for consistency
* [GitHubIssueCommentProposeUpdateHandler] include new PR url, by [@jpopelka](https://github.com/jpopelka), [#472](https://github.com/packit-service/packit-service/pulls/472)
  * description: 'requires https://github.com/packit-service/packit/pull/758'
  * commit: [GitHubIssueCommentProposeUpdateHandler] include new PR url
* Fix valueerror when no-action-needed PR comment is followed by a space., by [@IceWreck](https://github.com/IceWreck), [#474](https://github.com/packit-service/packit-service/pulls/474)
  * description: 'Fixes #463 '
  * commit: Fix valueerror when no-action-needed PR comment is followed by a space.
* Fix job type attribute, by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#471](https://github.com/packit-service/packit-service/pulls/471)
  * description: '- Fix old naming of the job.type and build alias matching.\n- Fixes #470\n- Fixes RED-HAT-0P-2B0\n- Add some tests.'
  * commit: Fix old naming of the job.type and build alias matching
* Fix sentry in worker, by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#462](https://github.com/packit-service/packit-service/pulls/462)
  * description: '- Configure sentry only for the first time.\r\n- Fixes RED-HAT-0P-2AV (I hope.)'
  * commit: Explicitly require lazy_object_proxy
  * commit: Configure sentry only for the first time
* Install sentry in the worker image, by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#460](https://github.com/packit-service/packit-service/pulls/460)
  * description: '- Add the sentry instalation back to the worker image.'
  * commit: Install sentry in the worker image
* Split job and jobconfig (service), by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#453](https://github.com/packit-service/packit-service/pulls/453)
  * description: '- Split the JobTriggerType to one related to config and one for actual triggers.\r\n- Requires: https://github.com/packit-service/packit/pull/746\r\n\r\nTODO:\r\n- [x] mapping of the `TheJobTriggerType` to `JobConfigTriggerType`.\r\n- [x] tests for config with multiple triggers for one job\r\n- [x] test the build workflow for other build triggers (skipped, since we need to use right trigger for received events from copr.)'
  * commit: Add tests for release/push builds
  * commit: Implement mapping from job trigger to config trigger
  * commit: Split the JobTriggerType to one related to config and one for actual triggers
* Sentry integration for service, by [@lachmanfrantisek](https://github.com/lachmanfrantisek), [#458](https://github.com/packit-service/packit-service/pulls/458)
  * description: '- Use sentry for service.\n- Add other integrations.\n- Fixes: https://github.com/packit-service/packit-service/issues/454'
  * commit: Use sentry for service and add other integrations

