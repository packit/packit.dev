---
title: Retriggering
sidebar_position: 2
---

You can retrigger CI jobs in dist-git pull requests by posting comments that include the appropriate `/packit-ci` commands, as outlined below.

## Scratch builds

To retrigger a scratch build, add the following comment to the pull request:

```
/packit-ci scratch-build
```

Only packagers can retrigger scratch builds.
