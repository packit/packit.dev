---
title: "April 2020"
date: 2020-04-03
draft: false
---

## Week 14 (March 30th - April 3rd)

### packit

* Fix web URLs for Copr builds owned by groups [(#778)].
* Create downstream spec if it's not there (propose-update) - this used to happen when using packit on a newly created package in Fedora which did not have spec fille added yet. [(#779)]
* Packit no longer inspects archive extension set in `Source` and creates `.tar.gz` by default - this should be more flexible and prevent issues for "non-standard" archive names. [(#781)]

### packit-service
* Several fixes and improvements after switching data store from Redis to PostgreSQL.
* Use the configured COPR project when triggering Testing Farm (tests no longer fail for projects which are built in their own COPR namespace) [(#524)].

[(#778)]: https://github.com/packit-service/packit/pull/778
[(#779)]: https://github.com/packit-service/packit/pull/779
[(#781)]: https://github.com/packit-service/packit/pull/781
[(#524)]: https://github.com/packit-service/packit-service/pull/524

## Week 15 (March 6th - April 9th)

### packit

* [Tomáš] finished teaching `packit srpm` to [linearise extremely complex Git
  histories], in order to get patches that can be applied when building the
  SRPM.
* [Jirka] made the schema validation code [Marshmallow3 compatible]. This
  enables building `packit` in Fedora 32 and Rawhide.

### packit-service

* [Franta] [fixed] an issue with [parsing release events].
* [Jirka] made code [Marshmallow3] compatible in this project, too.

[Tomáš]: https://github.com/TomasTomecek
[Jirka]: https://github.com/jpopelka
[Franta]: https://github.com/lachmanfrantisek
[linearise extremely complex Git histories]: https://github.com/packit-service/packit/pull/766
[Marshmallow3 compatible]: https://github.com/packit-service/packit/pull/775
[Marshmallow3]: https://github.com/packit-service/packit-service/pull/538
[fixed]: https://github.com/packit-service/packit-service/pull/541
[parsing release events]: https://github.com/packit-service/packit-service/issues/536
