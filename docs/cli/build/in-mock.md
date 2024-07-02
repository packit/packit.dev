---
title: in-mock
date: 2022-07-25
sidebar_position: 25
---

# `packit build in-mock`

Create RPMs in mock using content of the upstream repository.

:::tip
If you get `ERROR: Non-existing Mock config 'default'`, make sure the `/etc/mock/default.cfg`
file/symlink is valid or use the `-r` or `--root` option to specify a chroot, for example:

```
packit build in-mock --root=fedora-40-x86_64
```
:::

## Help


