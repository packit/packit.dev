---
title: create-update
date: 2019-06-28
sidebar_position: 5
---

# `packit create-update`

Create a new bodhi update for the latest Fedora build of the upstream project.

## Requirements

* Upstream git repository on GitHub.
* Packit config file placed in the upstream repository.


## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/).

2. Once the [builds are done](/docs/cli/build/), you can run the `create-update` command.
   If you don't specify the koji builds packit takes latest build.
   ```
   $ packit create-update --dist-git-branch f35 https://github.com/packit/packit.git
   Bodhi OIDC authentication follows.
   Authenticating... Please open your browser to:
   https://id.fedoraproject.org/openidc/Authorization?response_type=code...
   Paste here the code that you got after logging in: code=d4d8e70c-ea...
   Login successful!

   Bodhi update FEDORA-2019-b72add0dcd:
   - https://bodhi.fedoraproject.org/updates/FEDORA-2019-b72add0dcd
   - stable_karma: 3
   - unstable_karma: -3
   - notes: "New upstream release 0.42.0"
   ```

If you are not authenticated with the bodhi server, please make sure that you
navigate in your browser to the URL provided by the bodhi-client and then paste
the `code=XX...` to the terminal when prompted.

If you set `fas_user` and `kerberos_realm` in your "~/.config/packit.yaml" and
have an active Kerberos TGT, you will be automatically authenticated.

## Help


