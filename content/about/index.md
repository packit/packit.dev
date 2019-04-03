---
title: "About"
date: 2019-03-22T18:13:04+01:00
draft: false
---

Packit provides tooling and automation to integrate upstream open source projects into Fedora operating system.

### Github

https://github.com/packit-service/packit


### The key principles of packit

* Reuse existing tools and services where it makes sense: don't reinvent the
  wheel.

* You can consume packit in two forms:
  * Packit tool can run on your laptop and you run commands you want.
  * Packit service reacts to events and performs actions which you
    defined in your `packit.yaml`.

* We don't break backwards compatibility just like that.

* Packit has a deprecation policy:
  * We can mark a behaviour as deprecated.
  * Deprecated content can be removed or changed after at least 3 minor
    releases.
  * Deprecated content is advertised in our
    [changelog](https://github.com/packit-service/packit/blob/master/CHANGELOG.md),
    printed in terminal or tracked in your issue tracker.

* We care about artifacts which Fedora supports: at the moment it's RPMs,
  modules and container images.
  * Our initial focus is solely on RPMs.

* Packit respects Fedora guidelines.

* We want latest content in Fedora Rawhide, but only if it works (the new
  content can be built and tests are passing).

<!--more-->
