---
title: "How to create a source-git repository from upstream?"
date: 2020-02-20
draft: false
weight: 2
---

This guide goes into the depths of how can one create a source-git repo from
the upstream project manually using git without any help from another tooling.

As an example for the purpose of this guide, we will create a source-git
repository for [chrony](https://chrony.tuxfamily.org/).



## Prerequisites

* code
* RPM spec file


## Code

The first choice we need to make is to pick the base for our source-git repo or
in other words, which upstream release are we using as a base?

The next step is to figure out how do we obtain the upstream archive (which is
usually set as `Source0` in the spec file). We have two choices here:
1. If we define `upstream_ref` in packit.yaml, packit will download the archive
   which is set in the spec file - this implies that the archive corresponds
   with git ref set in `upstream_ref`, content-wise.
2. Without `upstream_ref`, packit will by default create an archive using `git
   archive` and set it in the spec file as `Source0`.

Let's have a look at how we can do this with chrony. We'll start by cloning the
upstream repo:
```
$ git clone https://git.tuxfamily.org/chrony/chrony.git/
$ cd chrony/
```

At the time of writing this guide:
* We have chrony 4.0 in Fedora Rawhide
* 4.0 git tag is also the HEAD of upstream git master (hash:
  d327cfea5a4b5f7385056be8b18f4c5fab01ad13)

In order for us to continue, we need to be able to either generate an archive
from the current HEAD, or download one. This is always going to be specific to
projects or may depend on what you intend to achieve.

The use case we cover here is to use a source-git repo for maintenance in
Fedora Rawhide. This implies we want to download the 4.0 archive from upstream.
Let's do it!

We are going to create a new branch, fedora-rawhide, to be the source-git for
rawhide.
```
$ git checkout -B fedora-rawhide 4.0
```


## RPM spec file

It's most convenient to have the spec file stored in the source-git repo since
you are in full control of everything.

Here lies another decision for you: to pick the source of your spec file.

Since our use case is clear, Fedora Rawhide package maintenance, we'll gonna
pick our spec file from [rawhide](https://src.fedoraproject.org/rpms/chrony/tree/master):
```
$ mkdir fedora/
$ cd fedora/
$ curl -O https://src.fedoraproject.org/rpms/chrony/raw/master/f/chrony.spec
```

As we inspect the spec file, we can see there is an additional source,
`chrony.dhclient`, which we also need to fetch in order to be able to build
chrony.

```
$ curl -O https://src.fedoraproject.org/rpms/chrony/raw/master/f/chrony.dhclient
```

Let's commit our changes:
```
$ cd ../
$ git add .
$ git commit -m "Fedora downstream packaging"
```

How does our git history look now?

```
$ git log --oneline HEAD^^..
3d2f796 (HEAD -> fedora-rawhide) Fedora downstream packaging
d327cfe (tag: 4.0, origin/master, origin/HEAD, master) nts: save new server keys on start
```

### Downstream patches

It's a common practice to pick up fixes from the master branch of an upstream
project and backport them to the current (older) version of a package in a
distribution. Alternatively to accommodate changes specific to the distribution
which are not merged upstream.

In this stage, we are going to apply all downstream patches we have defined in
our spec file.

Right now there is only a single patch chrony has in rawhide, let's apply it:
```
$ curl -O https://src.fedoraproject.org/rpms/chrony/raw/master/f/chrony-nm-dispatcher-dhcp.patch
$ git am chrony-nm-dispatcher-dhcp.patch
Applying: examples/nm-dispatcher.dhcp: use sysconfig, detect dhclient
```

The problem we have right now is that:
1. the patch is applied in the spec file
2. the change is applied in git
3. packit does not know about the connection between the patch applied in spec
   and the git commit

Let's correct that:
```
$ git commit --amend
```

and append to the end of the commit message
```
present_in_specfile: true
patch_name: chrony-nm-dispatcher-dhcp.patch
```

Now packit knows that a patch corresponding to this commit is already applied
in spec file and its name is "chrony-nm-dispatcher-dhcp.patch".

We can remove the patch file since it's no longer needed:
```
$ rm chrony-nm-dispatcher-dhcp.patch
```


## Building with packit

We almost have all we need to build with packit: we just need to tell packit
where the spec file is placed in the repository and which git ref represents the
4.0 release.
```
$ cat >.packit.yaml <<EOF
---
specfile_path: fedora/chrony.spec
upstream_ref: '4.0'
patch_generation_ignore_paths: ["fedora/"]
EOF
$ git add .packit.yaml
$ git commit -m "add .packit.yaml"
```

Let's break down the config file:
* We tell packit where the spec file is
* The git tag 4.0 is set as corresponding to the archive defined in the spec
  file
* And finally, when packit tries to generate patches for every commit, we
  indicate that it should ignore changes to the folder "fedora/" (because it
  would try to create a patch for "chrony.dhclient")

For more info on packit's configuration, please head on to [the configuration page]({{< ref "/docs/configuration.md" >}}).

That's it, the build should now work:
```
$ packit srpm
Input directory is an upstream repository.
Patch chrony-nm-dispatcher-dhcp.patch does not exist
100%[=============================>]   195.00   eta 00:00:00 
100%[=============================>]     1.63K  eta 00:00:00 
SRPM: /home/tt/g/packit/packit.dev/chrony/chrony-4.0-2.g384bb4bd.fc33.src.rpm
```

now we can rebuild the SRPM in mock
```
$ mock --rebuild -r fedora-rawhide-x86_64 chrony-4.0-2.g384bb4bd.fc33.src.rpm
```
