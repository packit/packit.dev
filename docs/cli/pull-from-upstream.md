---
title: pull-from-upstream
date: 2024-02-22
sidebar_position: 8
---

# `packit pull-from-upstream`

This is a detailed documentation for the update functionality of packit. The
command creates a new pull request in Fedora (or CentOS Stream) using the selected or the latest
upstream release. This command is meant to be called from **dist-git repository**.


## Requirements

* Upstream git repository on GitHub/GitLab.
* Upstream release (git tag) where version in spec file is equivalent to
  the name of the git tag (or `upstream_tag_template` is configured).
* Packit config file placed in the dist-git repository.
* Pagure API tokens for Fedora (or CentOS Stream) Dist-git.
* Valid Fedora (or CentOS Stream) Kerberos ticket.


## Help


