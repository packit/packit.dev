---
title: VM Image Builds
sidebar_position: 4
---

# `job: vm_image_build`

## Supported triggers

* **pull_request** 

## Required parameters

* **copr_chroot** -- name of the chroot to use for installing packages in the image

Image Parameters (Packit does not sanitize these and just passes them to Image Builder;
check [Image Builder's API
documentation](https://console.redhat.com/docs/api/image-builder) for details).

* **image_request** -- values passed to [the "image_requests" field](https://console.redhat.com/docs/api/image-builder/v1#operations-default-ComposeImage) of Image Builder's API
* **image_customizations** -- values passed to [the "customizations" field](https://console.redhat.com/docs/api/image-builder/v1#operations-default-ComposeImage) of Image Builder's API
* **image_distribution** -- name of the "base image" (examples: rhel-90, fedora-36)

## Optional parameters

* **owner** -- Copr project owner
* **project** -- Copr project name

Image builds are only triggered after a collaborator places a comment `/packit
vm-image-build` in a pull request. The image builds are **NOT** submitted
automatically. This is a subject to change as we improve the integration in future.


## Example

```yaml
jobs:
- job: vm_image_build
  trigger: pull_request
  image_request:
    architecture: x86_64
    image_type: aws
    upload_request:
      type: aws
      options:
        share_with_accounts: ["123456789"]
  image_customizations:
    packages: [foo-bar]
  image_distribution: fedora-36
  owner: john-foo
  project: foo-bar-martini
  copr_chroot: fedora-36-x86_64
```