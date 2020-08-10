---
title: "How to source-git?"
date: 2020-02-20
draft: false
weight: 2
---


This is a practical introduction to source-git using a real example.

If you are interested in the theory behind source-git, please read [the
specification]({{< ref "docs/source-git/design.md" >}}).


## Let's create a source-git repo

I choose systemd from Fedora 31 for this example.


### What do we need?

3 things:

1. Systemd upstream repo.
2. Fedora 31 dist-git repo of systemd.
3. New local git repo.

Let's set all of this up. We'll start with an empty git repository:

```bash
$ mkdir systemd-source-git
$ cd systemd-source-git
$ git init .
Initialized empty Git repository in /home/tt/t/systemd-source-git/.git/
```

We'll add fedora and upstream remotes, and then we'll fetch them:

```bash
$ git remote add upstream https://github.com/systemd/systemd.git
$ git remote add fedora ssh://ttomecek@pkgs.fedoraproject.org/rpms/systemd.git
$ git fetch -q upstream
$ git fetch -q fedora
```

Systemd also has a dedicated repository with backports to the older releases.
This is how systemd is packaged in Fedora.

```bash
$ git remote add upstream-stable https://github.com/systemd/systemd-stable.git
$ git fetch -q upstream-stable
```

### We can start now

When we open the Fedora 31 systemd spec file, we can see that upstream uses
version `243.7`. There's a corresponding tag `v243.7` in `upstream-stable`.
We'll start a new git branch in our repo named `2437-sg` (sg as source-git):

```bash
$ git switch -C 2437-sg v243.7
Switched to a new branch '2437-sg'
```

Right now we have the upstream history which lead to the 243.7 release.
Alternatively we could just unpack the upstream tarball and have the history in
a single commit.

### Layering downstream content on top of upstream

Let's get files from the `fedora/f31` branch.

```bash
$ git checkout fedora/f31 -- .
$ git status
On branch 2437-sg
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   .gitignore
	new file:   0002-Revert-units-set-NoNewPrivileges-for-all-long-runnin.patch
	new file:   0998-resolved-create-etc-resolv.conf-symlink-at-runtime.patch
	new file:   20-grubby.install
	new file:   20-yama-ptrace.conf
	new file:   464a73411c13596a130a7a8f0ac00ca728e5f69e.patch
	new file:   inittab
	new file:   purge-nobody-user
	new file:   sources
	new file:   split-files.py
	new file:   sysctl.conf.README
	new file:   systemd-journal-gatewayd.xml
	new file:   systemd-journal-remote.xml
	new file:   systemd-udev-trigger-no-reload.conf
	new file:   systemd-user
	new file:   systemd.spec
	new file:   triggers.systemd
	new file:   yum-protect-systemd.conf
```

We have a bunch of new files from f31 branch in the root.
We'll move them now to the `fedora/` directory:

```bash
$ mkdir fedora
$ mv $(git diff --name-only --cached) fedora/
```

and we should also clean our working tree:

```bash
$ git reset HEAD .
Unstaged changes after reset:
M       .gitignore

$ git restore .gitignore
```

...and commit the fedora content now:

```bash
$ git add fedora
```

We don't want to commit those patch files:
```bash
$ git restore --staged fedora/0002-Revert-units-set-NoNewPrivileges-for-all-long-runnin.patch fedora/0998-resolved-create-etc-resolv.conf-symlink-at-runtime.patch fedora/464a73411c13596a130a7a8f0ac00ca728e5f69e.patch
```

We also (currently) have to remove them from the spec file.
Packit will automatically generate patches from the additional commits and
add them to the spec when generating a SRPM or proposing downstream update.

We can now commit the files in `fedora/` directory:
```bash
$ git commit -m 'add fedora packaging'
[2437-sg 578bda8d7d] add fedora packaging
 15 files changed, 3077 insertions(+)
 create mode 100644 fedora/.gitignore
 create mode 100755 fedora/20-grubby.install
 create mode 100644 fedora/20-yama-ptrace.conf
 create mode 100644 fedora/inittab
 create mode 100755 fedora/purge-nobody-user
 create mode 100644 fedora/sources
 create mode 100644 fedora/split-files.py
 create mode 100644 fedora/sysctl.conf.README
 create mode 100644 fedora/systemd-journal-gatewayd.xml
 create mode 100644 fedora/systemd-journal-remote.xml
 create mode 100644 fedora/systemd-udev-trigger-no-reload.conf
 create mode 100644 fedora/systemd-user
 create mode 100644 fedora/systemd.spec
 create mode 100644 fedora/triggers.systemd
 create mode 100644 fedora/yum-protect-systemd.conf
```


### Applying downstream patches
We are getting to the core of source-git: we work with code in it, not with
patches. But first we need to instruct packit from which point in history start
downstream patches.
Add [upstream_ref](https://packit.dev/docs/configuration/#upstream-ref)
key into `.packit.yaml`:

```
upstream_ref: 2437-sg-start
```

Commit and tag it:

```bash
$ git commit -am "upstream_ref -> .packit.yaml"

$ git tag 2437-sg-start HEAD
```

Now we can apply the downstream patches:

```bash
$ git am fedora/464a73411c13596a130a7a8f0ac00ca728e5f69e.patch
Applying: udev: use bfq as the default scheduler

$ git am fedora/0002-Revert-units-set-NoNewPrivileges-for-all-long-runnin.patch
Applying: Revert "units: set NoNewPrivileges= for all long-running services"

$ git am fedora/0998-resolved-create-etc-resolv.conf-symlink-at-runtime.patch
Applying: resolved: create /etc/resolv.conf symlink at runtime

$ git log --oneline| head -n 3
5fc8885d47 resolved: create /etc/resolv.conf symlink at runtime
81c37ac6f6 Revert "units: set NoNewPrivileges= for all long-running services"
d9f29507fe udev: use bfq as the default scheduler
```

(This is not the case for systemd, but)
If the patches are not in git format you need to apply them with `patch`:
```bash
$ patch -p1 --verbose --fuzz=0 <fedora/some-fix.patch

$ git commit -am "some fix"
```

And that's it, this is our source-git repo! You can check it out over
[here](https://github.com/packit/systemd-source-git).

### Working with source-git

Run `packit srpm` and see that packit generates an upstream tarball plus
downstream patches and puts everything along with a spec file into a SRPM.
The same applies to `propose-update`, `local-build` or `copr-build` commands.

Alternatively you can use `--upstream-ref` option instead of putting
the `upstream_ref` into `.packit.yaml`


## Wrap up
As you can see, it is a lot of work to create the source-git repo. We are
planning on automating it — creating a dedicated command in packit.

We also have a bunch of packit code related to source-git already done, but the
overall experience is not done end-to-end.
