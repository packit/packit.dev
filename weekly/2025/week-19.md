---
title: Week 19 in Packit
date: 2025-05-13
authors: flachman
tags:
  - 2025-May
  - 2025
  - May
---

## Week 19 (May 5th – May 13th)

- You can now validate a Packit config passed to the Packit CLI via a path, e.g., `packit config validate -c /tmp/my-custom-packit-config.yml`. ([packit#2556](https://github.com/packit/packit/pull/2556))
- Packit now runs custom TMT tests as part of CI on dist-git pull requests ([documentation](https://packit.dev/fedora-ci/jobs#custom-test-plans)). ([packit-service#2792](https://github.com/packit/packit-service/pull/2792))
- We have fixed posting duplicated comments about invalid configurations. ([packit-service#2788](https://github.com/packit/packit-service/pull/2788))
