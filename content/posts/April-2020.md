---
title: "April 2020"
date: 2020-04-03
draft: false
---

## Week 14 (March 30th - April 3rd)

### packit

* Fix web URLs for Copr builds owned by groups [(#778)]
* Create downstream spec if it's not there (propose-update) [(#779)]
* Change the way how packit does archives (always create a tar.gz archive and `%prep` needs to deal with it) [(#781)]

### packit-service
* Several fixes and improvments after moving from Redis to postgreSQL
* Use the configured COPR project when triggering Testing Farm (Fixes: tests to fail in repos which use build in their own COPR namespace) [(#524)]


[(#778)]: https://github.com/packit-service/packit/pull/778
[(#779)]: https://github.com/packit-service/packit/pull/779
[(#781)]: https://github.com/packit-service/packit/pull/781
[(#490)]: https://github.com/packit-service/packit-service/pull/524
