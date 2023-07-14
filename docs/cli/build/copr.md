---
title: in-copr
date: 2019-07-16
sidebar_position: 35
---

# `packit build in-copr`

Submit a [Copr](https://copr.fedorainfracloud.org) build of the present content in the upstream repository.

## Requirements

* Upstream git repository on GitHub.
* Packit config file placed in the upstream repository.
* `~/.config/copr`

A minimum copr configure file is:
```
[copr-cli]
copr_url = https://copr.fedorainfracloud.org
gssapi = true
```
This uses GSSAPI (see [`fkinit`](https://fedoraproject.org/wiki/Infrastructure/Kerberos#How_to_use_kerberos_auth_with_Fedora_Infrastructure)
for more details). Alternatively you can use copr API token available [here](https://copr.fedorainfracloud.org/api/).

## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/)

2. The command below would create a SRPM from the present content of a repo and perform `copr-cli build` with it. If you need to specify a project name/owner or chroots, see the options in help.
    ```
    $ cd my/ustream/project/
    $ packit build in-copr
    ```

## Help

    Usage: packit build in-copr [OPTIONS] [PATH_OR_URL]

        Build selected upstream project in Copr.
      
        PATH_OR_URL argument is a local path or a URL to the upstream git
        repository, it defaults to the current working directory.
      
      Options:
        --wait / --no-wait            Wait for the build to finish
        --owner TEXT                  Copr user, owner of the project. (defaults to
                                      username from copr config)
        --project TEXT                Project name to build in. Will be created if
                                      does not exist. (defaults to the first found
                                      project value in the config file or 'packit-
                                      cli-{repo_name}-{branch/commit}')
        --targets TEXT                Comma separated list of chroots to build in.
                                      (defaults to 'fedora-rawhide-x86_64')
        --description TEXT            Description of the project to build in.
        --instructions TEXT           Installation instructions for the project to
                                      build in.
        --list-on-homepage            Created copr project will be visible on copr's
                                      home-page.
        --preserve-project            Created copr project will not be removed after
                                      60 days.
        --additional-repos TEXT       URLs to additional yum repos, which can be
                                      used during build. Comma separated. This
                                      should be baseurl from .repo file. E.g.:
                                      http://copr-be.cloud.fedoraproject.org/results
                                      /rhughes/f20-gnome-3-12/fedora-$releasever-$ba
                                      search/
        --upstream-ref TEXT           Git ref of the last upstream commit in the
                                      current branch from which packit should
                                      generate patches (this option implies the
                                      repository is source-git).
        --request-admin-if-needed     Ask for admin permissions when we need to
                                      change settings of the copr project and are
                                      not allowed to do so.
        --enable-net / --disable-net  Copr build is built with explicitly enabled
                                      network access or disabled
        --release-suffix TEXT         Specifies release suffix. Allows to override
                                      default generated:{current_time}.{sanitized_cu
                                      rrent_branch}{git_desc_suffix}
        --default-release-suffix      Allows to use default, packit-generated,
                                      release suffix when some release_suffix is
                                      specified in the configuration.
        --module-hotfixes             Created copr project will have module_hotfixes
                                      set to True
        -p, --package TEXT            Package to build, if more than one available,
                                      like in a monorepo configuration. Use it
                                      multiple times to select multiple
                                      packages.Defaults to all the packages listed
                                      inside the config.
        -h, --help                    Show this message and exit.

