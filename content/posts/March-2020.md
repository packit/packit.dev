---
title: "March 2020"
date: 2020-03-06
draft: false
---

## Week 10 (March 2nd - March 6th)

### packit

- The generate command is now deprecated in favour of the init command
  [(#728)], contributed by [@shreyaspapi](https://github.com/shreyaspapi).

### packit-service

- When a non-collaborator creates a PR, packit says that only "Collaborators
  can trigger packit-service" - this message has been improved to better match
  the reality [(#445)].
- Packit service no longer posts comments on pull requests when a SRPM can't be
  created - the logs should be now aviable in the service's logs view available
  when clocking on the commit status check URL [(#447)].
- Commands to control packit service can now be embedded in a comment
  (previously, the whole comment was treated as a command) - hence you can now
  create a comment to give an update and also trigger packit [(#433)],
  contributed by [@IceWreck](https://github.com/IceWreck).
- We have improved monitoring of packit-service by using more sentry.io's
  features [(#458)].
- You can now disable the functionality when packit service comments on a PR
  when it gets built for the first time (`notifications: {pull_request: {successful_build:: false}}` in your packit.yaml), hi
  [Lars](https://github.com/larskarlitski)! [(#455)].

[(#728)]: https://github.com/packit-service/packit/pull/728
[(#445)]: https://github.com/packit-service/packit-service/pull/445
[(#447)]: https://github.com/packit-service/packit-service/pull/447
[(#433)]: https://github.com/packit-service/packit-service/pull/433
[(#458)]: https://github.com/packit-service/packit-service/pull/458
[(#455)]: https://github.com/packit-service/packit-service/pull/455

## Week 11 (March 9th - March 13th)

### packit

- We have changed how packit treats version and release in the spec file [(#748)].
  - We handle the `git-describe` output better which should help when tags
    contain dashes [(#759)].
- When packit adds source-git patches into a spec file it adds them outside
  of rpm macros now [(#760)].
- In pull request pipelines we run the packit-service tests so that we are sure we
  do not break the service [(#752)].

### packit-service

- Comments from packit-service about successful `propose-update` in the issue
  which triggered the update now include the URL of the new pull-request in Fedora [(#472)].
- We have done some major refactoring how jobs are processed
  [(#476)], [(#746)], [(#453)].
- Development and debugging of the packit-service should be easier now, we
  documented how to run packit-service locally [(#473)].

[(#746)]: https://github.com/packit-service/packit/pull/746
[(#748)]: https://github.com/packit-service/packit/pull/748
[(#752)]: https://github.com/packit-service/packit/pull/752
[(#759)]: https://github.com/packit-service/packit/pull/759
[(#760)]: https://github.com/packit-service/packit/pull/760
[(#472)]: https://github.com/packit-service/packit-service/pull/472
[(#473)]: https://github.com/packit-service/packit-service/pull/473
[(#476)]: https://github.com/packit-service/packit-service/pull/476
[(#453)]: https://github.com/packit-service/packit-service/pull/453

## Week 12 (March 16th - March 20th)

### packit

- When you are executing `copr-build` command, you do not
  need to set the project name if this value is defined in
  the `copr_build` job in the configuration file [(#763)].
- All patches generated from a source-git repo are now prefixed with a number
  so they are easy to sort [(#765)].
- We improved the behaviour when loading the authentication in the config file -
  users are warned only if deprecated keys are used, no more confusing messages when
  you do not have `authentication` key in the configuration [(#754)].

### packit-service

- We periodically check the status of the copr-build so that we do not need to rely
  on the Fedora message bus. This should avoid failures in build status reporting [(#490)].
- `Propose-update` triggered by comment in Github now recognizes also pre-releases [(#498)].
- Several bugs in how we report results from Testing farm have been fixed and Testing
  farm results should now appear correctly in commit status checks
  [(#496)], [(#505)], [(#510)], [(#513)].

[(#765)]: https://github.com/packit-service/packit/pull/765
[(#754)]: https://github.com/packit-service/packit/pull/754
[(#763)]: https://github.com/packit-service/packit/pull/763
[(#490)]: https://github.com/packit-service/packit-service/pull/490
[(#498)]: https://github.com/packit-service/packit-service/pull/498
[(#497)]: https://github.com/packit-service/packit-service/pull/497
[(#496)]: https://github.com/packit-service/packit-service/pull/496
[(#505)]: https://github.com/packit-service/packit-service/pull/505
[(#510)]: https://github.com/packit-service/packit-service/pull/510
[(#513)]: https://github.com/packit-service/packit-service/pull/513

## Week 13 (March 23th - March 27th)

- New Packit version 0.9.0 was released.
- Packit Service now mostly uses PostgreSQL instead of Redis as a backend,
  which will result in more responsive API and Dashboard.
