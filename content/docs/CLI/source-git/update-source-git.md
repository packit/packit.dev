---
title: update-source-git
weight: 6

---

# `packit source-git update-source-git`

Sync changes made in a dist-git repository back to the corresponding
source-git repository.

This is to enable engineers and bots to capture and sync back changes done
in dist-git (by provenpackagers during rebuilds, for example). This is why
changes to the source and patches are not supported! If a package has a
source-git repository set up, the expectation is that the bulk of the
packaging work is going to happen there.

## Help

    $ packit source-git update-source-git --help
    Usage: packit source-git update-source-git [OPTIONS] DIST_GIT SOURCE_GIT
                                                   REVISION_RANGE

      Update a source-git repository based on a dist-git repository.

      Update a source-git repository with the selected checkout of a spec file and
      additional packaging files from a dist-git repository.

      Revision range represents part of dist-git history which is supposed to be
      synchronized. Use `HEAD~..` if you want to synchronize the last commit from
      dist-git. For more information on possible revision range formats, see
      gitrevisions(7).

      If patches or the sources file in the spec file changed, the command exits
      with return code 2. Such changes are not supported by this command, code
      changes should happen in the source-git repo.

      Inapplicable changes to the .gitignore file are ignored since the file may
      not be synchronized between dist-git and source-git.

      This command, by default, performs only local operations and uses the
      content of the source-git and dist-git repositories as it is, no checkout or
      fetch is performed.

      After the synchronization is done, packit will inform about the changes it
      has performed and about differences between source-git and dist-git prior to
      the synchronization process.

      Dist-git commit messages are preserved and used when creating new source-git
      commits, but a 'From-dist-git-commit' trailer is appended to them to mark
      the hash of the dist-git commit from which they are created.

      Examples

      Take the last commit (HEAD) of systemd dist-git repo and copy the spec file
      and other packaging files into the source-git repo:

          $ packit source-git update-source-git rpms/systemd src/systemd HEAD~..

      Synchronize changes from the last three dist-git commits:

          $ packit source-git update-source-git rpms/systemd src/systemd HEAD~3..

    Options:
      -h, --help  Show this message and exit.
