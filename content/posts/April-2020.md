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
[(#490)]: https://github.com/packit-service/packit-service/pull/524
