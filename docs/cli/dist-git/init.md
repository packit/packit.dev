---
title: init
sidebar_position: 1
---

# `packit dist-git init`

Create a Packit's dist-git configuration for release syncing to Fedora.

## Help

    Usage: packit dist-git init [OPTIONS] [OTHER_ARGS]... [PATH_OR_URL]

      Create the initial Packit dist-git configuration for Fedora release syncing
      based on the input parameters.

      This command adds `.packit.yaml` file to the dist-git repository either:

       1. specified by path (defaults to current working directory)

       2. specified by URL (`https://src.fedoraproject.org/rpms/<package>`) -
      clones the repository and adds the config in there. Ideally use this with
      --clone-path option, otherwise the repository is cloned to a temporary
      directory that is then removed.

      By default, all 3 jobs (`pull_from_upstream`, `koji_build`, `bodhi_update`)
      for release syncing are configured. You can use --no-pull, --no-koji-build
      or --no-bodhi-update  options to not add some of the jobs (at the moment,
      Bodhi updates are created only for  Koji builds built by Packit, therefore
      --no-koji-build implies also no Bodhi update job).

      You can either create the Packit config file only locally (default), or
      create a pull request (using --create-pr option) or push directly to the
      dist-git's default branch (--push-to-distgit).

      See 'packit init', if you want to initialize a repository as an upstream
      repo.

      Examples

      Local generation for dist-git repo in current working directory:

          $ packit dist-git init --upstream-git-url https://github.com/packit/packit .

      Local generation for dist-git repo specified by URL that will be cloned to
      `<my-package>` dir:

          $ packit dist-git init --upstream-git-url https://github.com/packit/packit --clone-path
          `<my-package>` https://src.fedoraproject.org/rpms/packit

      Using arbitrary configuration options that are not provided as the command
      options (the working dir needs to be specified in this case):

          $ packit dist-git init --upstream-git-url https://github.com/packit/packit
          --my-option option-value .

    Options:
      --upstream-git-url TEXT         URL to the upstream GIT repository
      --upstream-git-url-command TEXT
                                      Command to get the URL of the upstream git
                                      repository
      --upstream-tag-template TEXT    Template applied for upstream tags if they
                                      differ from versions. E.g. 'v{version}'
      --upstream-tag-include TEXT     Python regex used for filtering upstream
                                      tags to include.
      --upstream-tag-exclude TEXT     Python regex used for filtering upstream
                                      tags to exclude.
      --version-update-mask TEXT      Python regex used for comparison of the old
                                      and the new version.
      --issue-repository TEXT         URL of a git repository that can be used for
                                      reporting errors in form of issues.
      --no-pull                       Do not include the pull from upstream job in
                                      the config
      --no-koji-build                 Do not include the Koji build job in the
                                      config
      --allowed-committers TEXT       Comma separated list of allowed_committers
                                      used for Koji builds
      --allowed-pr-authors TEXT       Comma separated list of allowed_pr_authors
                                      used for Koji builds
      --no-bodhi-update               Do not include the Bodhi update job in the
                                      config
      --actions-file FILE             Yaml file with 'actions' that should be used
                                      for the config
      --dist-git-branches TEXT        Comma separated list of target branches in
                                      dist-git to release into. (defaults to
                                      rawhide)
      -p, --push-to-distgit           Push the generated Packit config to the
                                      dist-git repository's rawhide
      -c, --create-pr                 Create a PR with generated Packit config
      -f, --force                     Reset config to default if already exists.
      --clone-path TEXT               Path to clone the dist-git repo into (if
                                      path_or_url is URL). Otherwise clone the
                                      repo in a temporary directory.
      --commit-msg TEXT               Commit message used when creating a PR (also
                                      for the title) or pushing to dist-git.
                                      Default: 'Add Packit configuration for
                                      automating release syncing'
      -h, --help                      Show this message and exit.
