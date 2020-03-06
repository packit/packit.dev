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

