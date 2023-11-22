---
title: Examples 
date: 2022-09-22
sidebar_position: 4
---

# Configuration examples 

## Examples for actions
You can find detailed documentation for actions [here](/docs/configuration/actions).

### Getting version
<details>
  <summary>Getting version from specfile</summary>

```yaml
get-current-version:
  - grep -oP '^Version:\s+\K\S+' my-package.spec
```

or with a command from `rpm-build` package that will honor the macros:

```yaml
get-current-version:
  - rpmspec -q --queryformat "%{VERSION}\n" *spec |head -n1
```

</details>

<details>
  <summary>Getting version for Python packages with setup.py</summary>

```yaml
get-current-version:
  - python3 setup.py --version
```

</details>

<details>
  <summary>Getting version for Ruby packages from the gemspec</summary>

```yaml
get-current-version:
  - ruby -rrubygems -e 'puts Gem::Specification::load(Dir.glob("*.gemspec").first).version'
```

</details>

### Manipulating spec file
<details>
  <summary>Downloading specfile from the dist-git repo</summary>

```yaml
post-upstream-clone:
  - "wget https://src.fedoraproject.org/rpms/my-package/raw/main/f/my-package.spec -O my-package.spec"
```

</details>

<details>
  <summary>Setting the Sources correctly in case of multiple Sources</summary>

```yaml
fix-spec-file:
  # define one of the Source variables correctly
  - sed -i my_specfile_path -e "s/https.*only-vendor.tar.xz/my_correct_tarball_path/"
  # fill in %release as if packit would have done it
  - bash -c "sed -i my_specfile_path -r \"s/Release:(\s*)\S+/Release:\1${PACKIT_RPMSPEC_RELEASE}%{?dist}/\""
```

</details>

### Custom archive creation
<details>
  <summary>Creating archive with custom make target</summary>

```yaml
create-archive:
  - make release
  - bash -c "ls -1t ./my-package-*.tar.gz | head -n 1"
```

</details>

<details>
  <summary>Creating archive for Python packages with setup.py</summary>

```yaml
create-archive:
  - python3 setup.py sdist --dist-dir .
  - bash -c "ls -1t ./my-package-*.tar.gz | head -n 1"
```

</details>

<details>
  <summary>Creating archive with git submodules</summary>

```yaml
create-archive:
  - git submodule update --init
  # Create an archive file with the ‹pkg› directory prefix
  - bash -c 'git ls-files --recurse-submodules | tar --transform "s|^|pkg/|" -caf .packit/pkg.tar.gz -T-'
  - echo '.packit/pkg.tar.gz'
```

</details>

### Custom changelog generation
<details>
  <summary>Using changelog entry from a file</summary>

```yaml
changelog-entry:
  - cat .changelog_entry
```

</details>

### Creating source archive using 'tito' during release syncing
<details>
  <summary>Using pre-sync for running tito</summary>

```yaml
actions:
  pre-sync:
    - tito build -o . --tgz

files_to_sync:
  - src:
    - "<my-package>-*.tar.gz"
    dest: .
```

</details>


## Examples for jobs
You can find detailed documentation for jobs [here](/docs/configuration#supported-jobs).

### Builds


<details>
  <summary>Running builds in Copr for all pull requests</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
```

</details>

<details>
  <summary>Running builds in Copr for pull requests with 'main' target branch</summary>

```yaml
- job: copr_build
  trigger: pull_request
  branch: main
  targets:
    - fedora-all
```

</details>

<details>
  <summary>Running builds in custom Copr project for pushes to 'main'</summary>

Configuring building in Copr project `@oamg/convert2rhel`:
```yaml
- job: copr_build
  trigger: commit
  branch: main
  owner: "@oamg"
  project: convert2rhel
  targets:
    - epel-6-x86_64
    - epel-7-x86_64
    - epel-8-x86_64
```

</details>


<details>
  <summary>Running more types of builds in Copr</summary>

```yaml
jobs:
- job: copr_build
  trigger: pull_request
  identifier: fedora
  targets:
    - fedora-all
    
- job: copr_build 
  trigger: pull_request
  specfile_path: epel8/python-specfile.spec
  identifier: epel8
  actions:
    create-archive:
      - python3 setup.py sdist --dist-dir ./epel8/
      - bash -c "ls -1t ./epel8/*.tar.gz | head -n 1"
  targets:
    - epel-8
```

</details>

<details>
  <summary>Running builds in Koji for all pull requests</summary>

```yaml
- job: upstream_koji_build
  trigger: pull_request
  targets:
    - fedora-all
```

</details>

<details>
  <summary>Running builds in Koji for pull requests with 'main' target branch</summary>

```yaml
- job: upstream_koji_build
  trigger: pull_request
  branch: main
  targets:
    - fedora-all
```

</details>

<details>
  <summary>Utilising custom failure message</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
  notifications:
    failure_comment:
      message: >
        Some builds failed for commit {commit_sha}.
        @admin, please check."
```

</details>

### Tests

<details>
  <summary>Running tests in Testing Farm for all pull requests</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
     
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
```

</details>

<details>
  <summary>Running tests in Testing Farm for pull requests with 'main' target branch</summary>

```yaml
- job: copr_build
  trigger: pull_request
  branch: main
  targets:
    - fedora-all
     
- job: tests
  trigger: pull_request
  branch: main
  targets:
    - fedora-all
```

</details>

<details>
  <summary>Running tests in internal Testing Farm instance</summary>

Please, let us know if you want to use the internal Testing Farm;
we have to enable it for you.
```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - epel-8-x86_64
    
- job: tests
  trigger: pull_request
  targets:
    epel-8-x86_64:
      distros: [RHEL-8.8.0-Nightly]
  use_internal_tf: True
```

</details>

<details>
  <summary>Running only tests (without builds)</summary>

```yaml
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
  skip_build: True
```

</details>

<details>
  <summary>Defining mapping between build and test targets</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - epel-7-x86_64
    - epel-8-x86_64
    
- job: tests
  trigger: pull_request
  targets:
    epel-7-x86_64:
      distros: [centos-7, oraclelinux-7]
    epel-8-x86_64:
      distros: [centos-8, oraclelinux-8]
  ```

</details>

<details>
  <summary>Specifying where the FMF metadata are placed in the current repository</summary>

```yaml
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
  fmf_path: .distro/tmt
  ```

</details>

<details>
  <summary>Specifying where the FMF metadata are placed outside the current repository</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
    
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
  fmf_url: "https://gitlab.cee.redhat.com/baseos-qe/tmt.git"
  fmf_ref: main
  ```

</details>

<details>
  <summary>Running more types of tests with different settings</summary>

```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
    
- job: tests
  trigger: pull_request
  identifier: "postgres-12-pgoutput"
  targets:
    - fedora-all
  tf_extra_params:
    test:
      tmt:
        name: postgres
    environments:
      - variables:
          POSTGRESQL_VERSION: 12
          DECODER_PLUGIN: pgoutput


- job: tests
  trigger: pull_request
  identifier: "postgres-15-decoderbufs"
  targets:
    - fedora-all
  tf_extra_params:
    test:
      tmt:
        name: postgres
    environments:
      - variables:
          POSTGRESQL_VERSION: 15
          DECODER_PLUGIN: decoderbufs

```

</details>

<details>
  <summary>Providing custom tmt context</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
     
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
  tf_extra_params:
    environments:
      - tmt:
          context:
            how: "full"
  ```

</details>

<details>
  <summary>Tag cloud resources in Testing Farm</summary>

Tag cloud resources in Testing Farm to a specific Red Hat team or a project. If you are not a Red Hat employee, this section is not relevant for you.
Make sure to update `sst_change_me` to your RHEL SST name or name
of the project. If not set, cloud costs are reported against
`Packit Service`. The `BusinessUnit` key name is required, please
do not change it.
```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
    
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
  # Tag cloud resources for tmt
  tf_extra_params:
    environments:
      - settings:
          provisioning:
            tags:
              BusinessUnit: sst_change_me
```

</details>

<details>
  <summary>Providing additional Testing Farm artifacts</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
     
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
  tf_extra_params:
    environments:
      - artifacts:
          - type: repository
            id: https://my.repo/repository
  ```

</details>

<details>
  <summary>Utilising custom failure message</summary>

```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
     
- job: tests
  identifier: revdeps
  trigger: pull_request
  targets:
    - fedora-all
  notifications:
    failure_comment:
      message: >
        Reverse dep tests failed for commit {commit_sha}.
        @admin, please check."

```

</details>

### Fedora release automation

<details>
  <summary>Creating dist-git pull requests on upstream releases</summary>

```yaml
- job: propose_downstream
  trigger: release
  dist_git_branches: 
    - fedora-all
```

</details>

<details>
  <summary>Creating dist-git pull requests on upstream releases defined in the dist-git repository</summary>

```yaml
upstream_project_url: https://github.com/packit/packit
...
jobs:
- job: pull_from_upstream
  trigger: release
  dist_git_branches: 
    - fedora-all
```

</details>

<details>
  <summary>Creating dist-git pull requests on upstream releases matching specified tag pattern defined in the dist-git repository</summary>

```yaml
upstream_project_url: https://github.com/packit/packit
...
jobs:
- job: pull_from_upstream
  trigger: release
  dist_git_branches: 
    - fedora-all
  upstream_tag_include: "^2\\..+"
  upstream_tag_exclude: "^.+\\.1\\..+"
```

</details>

<details>
  <summary>Running Koji builds when the Packit pull requests in dist-git are merged</summary>

```yaml
- job: koji_build
  trigger: commit
  dist_git_branches:
    - fedora-all
```

</details>

<details>
  <summary>Running Koji builds as a reaction to merging PRs or committing in dist-git by specified users</summary>

```yaml
- job: koji_build
  trigger: commit
  dist_git_branches:
    - fedora-all
  allowed_pr_authors:
    - packit
    - the-fas-username-to-allow
  allowed_committers:
    - packit
    - another-fas-username-to-allow
```

</details>

<details>
  <summary>Creating Bodhi updates automatically for successful Koji builds</summary>

```yaml
- job: bodhi_update
  trigger: commit
  dist_git_branches:
    - fedora-branched # rawhide updates are created automatically
```

</details>

## Get inspired
You can also look directly into configuration files of some other projects using Packit:
- [Systemd](https://github.com/systemd/systemd/blob/main/.packit.yml)
- [Anaconda](https://github.com/rhinstaller/anaconda/blob/master/.packit.yml)
- [Ogr](https://github.com/packit/ogr/blob/main/.packit.yaml)
- [Convert2rhel](https://github.com/oamg/convert2rhel/blob/main/.packit.yaml)
- [Cockpit project](https://github.com/cockpit-project/cockpit/blob/main/packit.yaml)
- [Tmt](https://github.com/teemtee/tmt/blob/main/.packit.yaml)
- [Osbuild](https://github.com/osbuild/osbuild-composer/blob/main/.packit.yaml)
- [Leapp repository](https://github.com/oamg/leapp-repository/blob/master/.packit.yaml)
