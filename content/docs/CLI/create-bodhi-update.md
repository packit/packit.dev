---
title: create-bodhi-update
date: 2019-06-28
weight: 5
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

    Usage: packit create-update [OPTIONS] [PATH_OR_URL]

      Create a bodhi update for the selected upstream project

      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory

    Options:
      --dist-git-branch TEXT          Comma separated list of target branches in
                                      dist-git to create bodhi update in.
                                      (defaults to repo's default branch)
      --koji-build TEXT               Koji build (NVR) to add to the bodhi update
                                      (can be specified multiple times)
      --update-notes TEXT             Bodhi update notes
      --update-type [security|bugfix|enhancement|newpackage]
                                      Type of the bodhi update
      -b, --resolve-bugzillas BUGZILLA_IDS
                                      Bugzilla IDs that are resolved with the
                                      update
      -h, --help                      Show this message and exit.
