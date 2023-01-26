---
title: Examples 
date: 2022-09-22
weight: 1
---

# Configuration examples 

## Examples for actions
You can find detailed documentation for actions [here](/docs/actions).

### Getting version
{{< details title="Getting version from specfile" >}}
```yaml
get-current-version:
  - grep -oP '^Version:\s+\K\S+' my-package.spec
```

or with a command from `rpm-build` package that will honor the macros:

```yaml
get-current-version:
  - rpmspec -q --queryformat "%{VERSION}\n" *spec |head -n1
```
{{< /details >}}

{{< details title="Getting version for Python packages with setup.py" >}}
```yaml
get-current-version:
  - python3 setup.py --version
```
{{< /details >}}

### Manipulating spec file
{{< details title="Downloading specfile from the dist-git repo" >}}
```yaml
post-upstream-clone:
  - "wget https://src.fedoraproject.org/rpms/my-package/raw/main/f/my-package.spec -O my-package.spec"
```
{{< /details >}}

{{< details title="Setting the Sources correctly in case of multiple Sources" >}}
```yaml
fix-spec-file:
  # define one of the Source variables correctly
  - sed -i my_specfile_path -e "s/https.*only-vendor.tar.xz/my_correct_tarball_path/"
  # fill in %release as if packit would have done it
  - bash -c "sed -i my_specfile_path -r \"s/Release:(\s*)\S+/Release:\1${PACKIT_RPMSPEC_RELEASE}%{?dist}/\""
```
{{< /details >}}

### Custom archive creation
{{< details title="Creating archive with custom make target" >}}
```yaml
create-archive:
  - make release
  - bash -c "ls -1t ./my-package-*.tar.gz | head -n 1"
```
{{< /details >}}

{{< details title="Creating archive for Python packages with setup.py" >}}
```yaml
create-archive:
  - python3 setup.py sdist --dist-dir .
  - bash -c "ls -1t ./my-package-*.tar.gz | head -n 1"
```
{{< /details >}}

### Custom changelog generation
{{< details title="Using changelog entry from a file" >}}
```yaml
changelog-entry:
  - cat .changelog_entry
```
{{< /details >}}


## Examples for jobs
You can find detailed documentation for jobs [here](/docs/configuration#supported-jobs).

### Builds


{{< details title="Running builds in Copr" >}}
```yaml
- job: copr_build
  trigger: pull_request
  targets:
    - fedora-all
```
{{< /details >}}

{{< details title="Running builds in custom Copr project" >}}
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
{{< /details >}}


{{< details title="Running more types of builds in Copr" >}}
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
{{< /details >}}

{{< details title="Running builds in Koji" >}}
```yaml
- job: upstream_koji_build
  trigger: pull_request
  targets:
    - fedora-all
```
{{< /details >}}

### Tests

{{< details title="Running tests in Testing Farm" >}}
```yaml
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
```
{{< /details >}}

{{< details title="Running tests in internal Testing Farm instance" >}}
```yaml
- job: tests
  targets:
    - fedora-all
  use_internal_tf: True
  ```
{{< /details >}}

{{< details title="Running only tests (without builds)">}}
```yaml
- job: tests
  targets:
    - fedora-all
  skip_build: True
```
{{< /details >}}

{{< details title="Defining mapping between build and test targets" >}}
```yaml
- job: tests
  targets:
    epel-7-x86_64:
      distros: [centos-7, oraclelinux-7]
    epel-8-x86_64:
      distros: [centos-8, oraclelinux-8]
  ```
{{< /details >}}

{{< details title="Specifying where the FMF metadata are placed (other than default)" >}}
```yaml
- job: tests
  trigger: pull_request
  targets:
    - fedora-all
  fmf_url: "https://gitlab.cee.redhat.com/baseos-qe/tmt.git"
  fmf_ref: main
  ```
{{< /details >}}

{{< details title="Running more types of tests" >}}
```yaml
jobs:
- job: tests
  trigger: pull_request
  targets:
    - fedora-all

- job: tests
  trigger: pull_request
  identifier: "internal-tests"
  targets:
    - fedora-all
  use_internal_tf: True
  ```
{{< /details >}}

{{< details title="Providing custom tmt context" >}}
```yaml
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
{{< /details >}}

### Fedora release automation

{{< details title="Creating dist-git pull requests on upstream releases" >}}
```yaml
- job: propose_downstream
  trigger: release
  dist_git_branches: 
    - fedora-all
```
{{< /details >}}

{{< details title="Creating dist-git pull requests on upstream releases defined in the dist-git repository" >}}
```yaml
upstream_project_url: https://github.com/packit/packit
...
jobs:
- job: pull_from_upstream
  trigger: release
  dist_git_branches: 
    - fedora-all
```
{{< /details >}}

{{< details title="Running Koji builds when the Packit pull requests in dist-git are merged" >}}
```yaml
- job: koji_build
  trigger: commit
  dist_git_branches:
    - fedora-all
```
{{< /details >}}

{{< details title="Running Koji builds as a reaction to merging PRs or committing in dist-git by specified users" >}}
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
{{< /details >}}

{{< details title="Creating Bodhi updates automatically for successful Koji builds" >}}
```yaml
- job: bodhi_update
  trigger: commit
  dist_git_branches:
    - fedora-branched # rawhide updates are created automatically
```
{{< /details >}}

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
