---
title: in-image-builder
date: 2022-10-20T00:00:00+01:00
sidebar_position: 25
---

# `packit build in-image-builder`

Create a VM image in Image Builder defined in your "packit.yaml" using your Copr builds.


## Requirements

* Be familiar with Red Hat Image Builder:
  * https://www.redhat.com/en/blog/using-hosted-image-builder-its-api
  * https://console.redhat.com/docs/api/image-builder
  * https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/composing_a_customized_rhel_system_image/index
* Red Hat API token set as `redhat_api_refresh_token` in `~/.config/packit.yaml`; the token can be obtained [here](https://access.redhat.com/management/api)
* Packit config with a `vm_image_build` job defined


## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/)

2. Add a [`vm_image_build` job](/docs/configuration/upstream/vm_image_build).

2. Submit a request to Red Hat Image Builder:
    ```
    $ cd my/ustream/project/
    $ packit build in-image-builder my-new-fancy-image
    ```

3. Navigate to the [Image Builder web interface](https://console.redhat.com/insights/image-builder) to use your image once the build is complete.


As of December 2022, Packit Github app can now submit builds to Red Hat Image
Builder, for more details see the `vm_image_build` job description.


## Help

    Usage: packit build in-image-builder [OPTIONS] IMAGE_NAME [PATH_OR_URL]
    
      Create a VM image in Image Builder.
    
      ### EXPERIMENTAL ###
    
      This command is experimental and the integration with Image Builder will be
      changed in a backwards incompatible way in the future.
    
      Packit loads image build configuration from your packit.yaml file.
    
      When `--job-config-index` is not specified, the job configuration is loaded
      from your .packit.yaml and the first matching vm_image_build job is used.
    
      IMAGE_NAME is the name of the image to be created. Please pick something
      unique so it's easy to identify for you in the Image Builder interface and
      can be well associated with the image content.
    
      [PATH_OR_URL] argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory
    
    Options:
      --job-config-index INTEGER  Use N-th job definition to load configuration
                                  for the image build. The type needs to be
                                  vm_image_build.
      --wait / --no-wait          Wait for the build to finish
      -p, --package TEXT          Package to build, if more than one available,
                                  like in a monorepo configuration. Use it
                                  multiple times to select multiple
                                  packages.Defaults to all the packages listed
                                  inside the config.
      -h, --help                  Show this message and exit.

