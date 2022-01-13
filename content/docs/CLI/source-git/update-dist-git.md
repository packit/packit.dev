---
title: update-dist-git
weight: 5

---

# `packit source-git update-dist-git`

Transform the content from a source-git repository in a dist-git format, and
update the corresponding dist-git repository.

## Help

    $ packit source-git update-dist-git --help
    Usage: packit-dev source-git update-dist-git [OPTIONS] SOURCE_GIT DIST_GIT

      Update a dist-git repository using content from a source-git repository

      Update a dist-git repository with patches created from the commits between
      <upstream_ref> and the current HEAD of the source-git repo.

      This command, by default, performs only local operations and uses the
      content of the source-git and dist-git repository as it is: does not
      checkout branches or fetches remotes.

      A commit in dist-git is created only if a commit message is provided with
      --message or --file.

      The source archives are retrieved from the upstream URLs specified in the
      spec-file and uploaded to the lookaside cache in dist-git only if '--pkg-
      tool' is specified.

      Examples:

      To update a dist-git repo from source-git without uploading the source-
      archive to the lookaside cache and creating a commit with the updates, run:

          $ packit -c src/curl/.distro/source-git.yaml source-git update-dist-git \
                  src/curl rpms/curl

      To also commit the changes and upload the source-archive to the lookaside-
      cache specify -m and --pkg-tool:

          $ packit -c src/curl/.distro/source-git.yaml source-git update-dist-git \
                  -m'Update from source-git' --pkg-tool fedpkg \
                  src/curl rpms/curl

    Options:
      --upstream-ref TEXT  Git ref of the last upstream commit in the current
                           branch from which packit should generate patches (this
                           option implies the repository is source-git).
      --pkg-tool TEXT      Name or path of the packaging tool used to work with
                           sources in the dist-git repo. A variant of 'rpkg'.

                           Skip retrieving and uploading source archives to the
                           lookaside cache if not specified.
      -m, --message <msg>  Commit the changes in the dist-git repository and use
                           <msg> as the commit message.

                           Mutually exclusive with -F.
      -F, --file <file>    Commit the changes in the dist-git repository and take
                           the commit message from <file>. Use - to read from the
                           standard input.
      -h, --help           Show this message and exit.
