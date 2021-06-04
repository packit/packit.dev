---
title: "Creating CentOS Stream 9 source-git repositories"
draft: false
weight: 1
---

# Creating CentOS Stream 9 source-git repositories

Source-git repos for CentOS Stream 9 are stored as separate repositories in
https://gitlab.com/redhat/centos-stream/src in `c9s` branches.

Here is how the repositories should be set up:

* They are open to the public (for contributions).

* Issues are disabled (BZ is the official bug tracker).

* Merge requests are enabled.

* Description is set:
  ```
  Source repo for CentOS Stream package $package.
  You can contribute here by following https://wiki.centos.org/Contribute/CentOSStream/
  ```

* `c9s` branch is protected, though force-pushes are allowed from maintainers (for sake of rebasing).


## How to create such repo

[using `packit source-git init`]({{< ref "/docs/cli/source-git/init" >}})


## Pushing the repository to GitLab

We have an identity,
[centos-stream-packit](https://gitlab.com/centos-stream-packit), which has
permissions to create new repositories in the namespace.

Here comes a sample script utilizing ogr and python-gitlab to create a new repo
to satisfy the requirements above:
```
import ogr
import os

TARGET_GROUP = "redhat/centos-stream/src"
GITLAB_TOKEN = os.getenv("GITLAB_TOKEN")

gitlab_service = ogr.GitlabService(GITLAB_TOKEN)
target_group = gitlab_service.gitlab_instance.groups.get(TARGET_GROUP)

repo_name = "edk2"
project = gitlab_service.gitlab_instance.projects.create({
    "name": repo_name,
    "namespace_id": target_group.id,
    "description": (
        f"Source repo for CentOS Stream package \"{repo_name}\". "
        "You can contribute here by following https://wiki.centos.org/Contribute/CentOSStream/"
    ),
    "issues_enabled": False,
    "visibility": "public",
})
project.protectedbranches.create(
    {"name": "c9s", "push_access_level": "40", "merge_access_level": "40"}
)
```
