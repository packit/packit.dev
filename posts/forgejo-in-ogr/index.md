---
title: Forgejo is now supported in ogr
date: 2026-02-10T14:00:00+01:00
authors: akucerov
tags:
  - Forgejo
  - ogr
---

# Forgejo is now supported in ogr

We are happy to announce that the ogr library now supports yet another open-source git forge — [Forgejo](https://forgejo.org/). This brings the total number of supported forges to four. Thank you to all external contributors and especially [mynk8](https://github.com/mynk8) who helped to turn this part of the project into reality!

<!-- truncate -->

# What is ogr?

[Ogr](https://github.com/packit/ogr) stands for **One Git library to Rule**. It is a library offering a unified API for multiple git forges, meaning that it makes it possible to communicate with all supported git forges using the same set of methods. Historically, the list of supported forges consisted of **GitHub**, **GitLab** and **Pagure**. This list has now been expanded to include **Forgejo** as well.

Here is a short example showcasing how to create a new issue in a repository using ogr:

```
from ogr import ForgejoService

service = ForgejoService(instance_url="https://codeberg.org", token="...")
project = service.get_project(namespace="owner", repo="repo")

project.create_issue(title="Issue title", body="Issue description")
```

For more information see our [documentation](https://packit.github.io/ogr/) and [Jupyter notebook examples](https://github.com/packit/ogr/tree/main/examples).

# What this means for Packit

With the added support of Forgejo in ogr, it is now possible for us to work on support of Forgejo as dist-git in Packit. If interested, you can track our progress on the upcoming addition in [this epic](https://github.com/packit/packit-service/issues/2861).
