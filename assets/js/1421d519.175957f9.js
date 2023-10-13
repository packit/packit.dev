"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[5496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,d=m["".concat(o,".").concat(g)]||m[g]||c[g]||l;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Examples",date:new Date("2022-09-22T00:00:00.000Z"),sidebar_position:4},s="Configuration examples",i={unversionedId:"configuration/examples",id:"configuration/examples",title:"Examples",description:"Examples for actions",source:"@site/docs/configuration/examples.md",sourceDirName:"configuration",slug:"/configuration/examples",permalink:"/docs/configuration/examples",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/examples.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Examples",date:"2022-09-22T00:00:00.000Z",sidebar_position:4},sidebar:"autogenerated",previous:{title:"Actions",permalink:"/docs/configuration/actions"},next:{title:"Packit CLI",permalink:"/docs/cli/"}},o={},u=[{value:"Examples for actions",id:"examples-for-actions",level:2},{value:"Getting version",id:"getting-version",level:3},{value:"Manipulating spec file",id:"manipulating-spec-file",level:3},{value:"Custom archive creation",id:"custom-archive-creation",level:3},{value:"Custom changelog generation",id:"custom-changelog-generation",level:3},{value:"Examples for jobs",id:"examples-for-jobs",level:2},{value:"Builds",id:"builds",level:3},{value:"Tests",id:"tests",level:3},{value:"Fedora release automation",id:"fedora-release-automation",level:3},{value:"Get inspired",id:"get-inspired",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-examples"},"Configuration examples"),(0,r.kt)("h2",{id:"examples-for-actions"},"Examples for actions"),(0,r.kt)("p",null,"You can find detailed documentation for actions ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/actions"},"here"),"."),(0,r.kt)("h3",{id:"getting-version"},"Getting version"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Getting version from specfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"get-current-version:\n  - grep -oP '^Version:\\s+\\K\\S+' my-package.spec\n")),(0,r.kt)("p",null,"or with a command from ",(0,r.kt)("inlineCode",{parentName:"p"},"rpm-build")," package that will honor the macros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'get-current-version:\n  - rpmspec -q --queryformat "%{VERSION}\\n" *spec |head -n1\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Getting version for Python packages with setup.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"get-current-version:\n  - python3 setup.py --version\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Getting version for Ruby packages from the gemspec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"get-current-version:\n  - ruby -rrubygems -e 'puts Gem::Specification::load(Dir.glob(\"*.gemspec\").first).version'\n"))),(0,r.kt)("h3",{id:"manipulating-spec-file"},"Manipulating spec file"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Downloading specfile from the dist-git repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'post-upstream-clone:\n  - "wget https://src.fedoraproject.org/rpms/my-package/raw/main/f/my-package.spec -O my-package.spec"\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Setting the Sources correctly in case of multiple Sources"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'fix-spec-file:\n  # define one of the Source variables correctly\n  - sed -i my_specfile_path -e "s/https.*only-vendor.tar.xz/my_correct_tarball_path/"\n  # fill in %release as if packit would have done it\n  - bash -c "sed -i my_specfile_path -r \\"s/Release:(\\s*)\\S+/Release:\\1${PACKIT_RPMSPEC_RELEASE}%{?dist}/\\""\n'))),(0,r.kt)("h3",{id:"custom-archive-creation"},"Custom archive creation"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Creating archive with custom make target"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'create-archive:\n  - make release\n  - bash -c "ls -1t ./my-package-*.tar.gz | head -n 1"\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Creating archive for Python packages with setup.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'create-archive:\n  - python3 setup.py sdist --dist-dir .\n  - bash -c "ls -1t ./my-package-*.tar.gz | head -n 1"\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Creating archive with git submodules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"create-archive:\n  - git submodule update --init\n  # Create an archive file with the \u2039pkg\u203a directory prefix\n  - bash -c 'git ls-files --recurse-submodules | tar --transform \"s|^|pkg/|\" -caf .packit/pkg.tar.gz -T-'\n  - echo '.packit/pkg.tar.gz'\n"))),(0,r.kt)("h3",{id:"custom-changelog-generation"},"Custom changelog generation"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Using changelog entry from a file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"changelog-entry:\n  - cat .changelog_entry\n"))),(0,r.kt)("h2",{id:"examples-for-jobs"},"Examples for jobs"),(0,r.kt)("p",null,"You can find detailed documentation for jobs ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#supported-jobs"},"here"),"."),(0,r.kt)("h3",{id:"builds"},"Builds"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running builds in Copr for all pull requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running builds in Copr for pull requests with 'main' target branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  branch: main\n  targets:\n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running builds in custom Copr project for pushes to 'main'"),(0,r.kt)("p",null,"Configuring building in Copr project ",(0,r.kt)("inlineCode",{parentName:"p"},"@oamg/convert2rhel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- job: copr_build\n  trigger: commit\n  branch: main\n  owner: "@oamg"\n  project: convert2rhel\n  targets:\n    - epel-6-x86_64\n    - epel-7-x86_64\n    - epel-8-x86_64\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running more types of builds in Copr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n- job: copr_build\n  trigger: pull_request\n  identifier: fedora\n  targets:\n    - fedora-all\n    \n- job: copr_build \n  trigger: pull_request\n  specfile_path: epel8/python-specfile.spec\n  identifier: epel8\n  actions:\n    create-archive:\n      - python3 setup.py sdist --dist-dir ./epel8/\n      - bash -c "ls -1t ./epel8/*.tar.gz | head -n 1"\n  targets:\n    - epel-8\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running builds in Koji for all pull requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: upstream_koji_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running builds in Koji for pull requests with 'main' target branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: upstream_koji_build\n  trigger: pull_request\n  branch: main\n  targets:\n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Utilising custom failure message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n  notifications:\n    failure_comment:\n      message: >\n        Some builds failed for commit {commit_sha}.\n        @admin, please check."\n'))),(0,r.kt)("h3",{id:"tests"},"Tests"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running tests in Testing Farm for all pull requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n     \n- job: tests\n  trigger: pull_request\n  targets:\n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running tests in Testing Farm for pull requests with 'main' target branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  branch: main\n  targets:\n    - fedora-all\n     \n- job: tests\n  trigger: pull_request\n  branch: main\n  targets:\n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running tests in internal Testing Farm instance"),(0,r.kt)("p",null,"Please, let us know if you want to use the internal Testing Farm;\nwe have to enable it for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  targets:\n    - epel-8-x86_64\n    \n- job: tests\n  trigger: pull_request\n  targets:\n    epel-8-x86_64:\n      distros: [RHEL-8.8.0-Nightly]\n  use_internal_tf: True\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running only tests (without builds)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: tests\n  trigger: pull_request\n  targets:\n    - fedora-all\n  skip_build: True\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Defining mapping between build and test targets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  targets:\n    - epel-7-x86_64\n    - epel-8-x86_64\n    \n- job: tests\n  trigger: pull_request\n  targets:\n    epel-7-x86_64:\n      distros: [centos-7, oraclelinux-7]\n    epel-8-x86_64:\n      distros: [centos-8, oraclelinux-8]\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Specifying where the FMF metadata are placed in the current repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: tests\n  trigger: pull_request\n  targets:\n    - fedora-all\n  fmf_path: .distro/tmt\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Specifying where the FMF metadata are placed outside the current repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n    \n- job: tests\n  trigger: pull_request\n  targets:\n    - fedora-all\n  fmf_url: "https://gitlab.cee.redhat.com/baseos-qe/tmt.git"\n  fmf_ref: main\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running more types of tests with different settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n    \n- job: tests\n  trigger: pull_request\n  identifier: "postgres-12-pgoutput"\n  targets:\n    - fedora-all\n  tf_extra_params:\n    test:\n      tmt:\n        name: postgres\n    environments:\n      - variables:\n          POSTGRESQL_VERSION: 12\n          DECODER_PLUGIN: pgoutput\n\n\n- job: tests\n  trigger: pull_request\n  identifier: "postgres-15-decoderbufs"\n  targets:\n    - fedora-all\n  tf_extra_params:\n    test:\n      tmt:\n        name: postgres\n    environments:\n      - variables:\n          POSTGRESQL_VERSION: 15\n          DECODER_PLUGIN: decoderbufs\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Providing custom tmt context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n     \n- job: tests\n  trigger: pull_request\n  targets:\n    - fedora-all\n  tf_extra_params:\n    environments:\n      - tmt:\n          context:\n            how: "full"\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Tag cloud resources in Testing Farm"),(0,r.kt)("p",null,"Tag cloud resources in Testing Farm to a specific Red Hat team or a project. If you are not a Red Hat employee, this section is not relevant for you.\nMake sure to update ",(0,r.kt)("inlineCode",{parentName:"p"},"sst_change_me")," to your RHEL SST name or name\nof the project. If not set, cloud costs are reported against\n",(0,r.kt)("inlineCode",{parentName:"p"},"Packit Service"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessUnit")," key name is required, please\ndo not change it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n    \n- job: tests\n  trigger: pull_request\n  targets:\n    - fedora-all\n  # Tag cloud resources for tmt\n  tf_extra_params:\n    environments:\n      - settings:\n          provisioning:\n            tags:\n              BusinessUnit: sst_change_me\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Providing additional Testing Farm artifacts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n     \n- job: tests\n  trigger: pull_request\n  targets:\n    - fedora-all\n  tf_extra_params:\n    environments:\n      - artifacts:\n          - type: repository\n            id: https://my.repo/repository\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Utilising custom failure message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- job: copr_build\n  trigger: pull_request\n  targets:\n    - fedora-all\n     \n- job: tests\n  identifier: revdeps\n  trigger: pull_request\n  targets:\n    - fedora-all\n  notifications:\n    failure_comment:\n      message: >\n        Reverse dep tests failed for commit {commit_sha}.\n        @admin, please check."\n\n'))),(0,r.kt)("h3",{id:"fedora-release-automation"},"Fedora release automation"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Creating dist-git pull requests on upstream releases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: propose_downstream\n  trigger: release\n  dist_git_branches: \n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Creating dist-git pull requests on upstream releases defined in the dist-git repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"upstream_project_url: https://github.com/packit/packit\n...\njobs:\n- job: pull_from_upstream\n  trigger: release\n  dist_git_branches: \n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Creating dist-git pull requests on upstream releases matching specified tag pattern defined in the dist-git repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'upstream_project_url: https://github.com/packit/packit\n...\njobs:\n- job: pull_from_upstream\n  trigger: release\n  dist_git_branches: \n    - fedora-all\n  upstream_tag_include: "^2\\\\..+"\n  upstream_tag_exclude: "^.+\\\\.1\\\\..+"\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running Koji builds when the Packit pull requests in dist-git are merged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: koji_build\n  trigger: commit\n  dist_git_branches:\n    - fedora-all\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Running Koji builds as a reaction to merging PRs or committing in dist-git by specified users"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: koji_build\n  trigger: commit\n  dist_git_branches:\n    - fedora-all\n  allowed_pr_authors:\n    - packit\n    - the-fas-username-to-allow\n  allowed_committers:\n    - packit\n    - another-fas-username-to-allow\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Creating Bodhi updates automatically for successful Koji builds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job: bodhi_update\n  trigger: commit\n  dist_git_branches:\n    - fedora-branched # rawhide updates are created automatically\n"))),(0,r.kt)("h2",{id:"get-inspired"},"Get inspired"),(0,r.kt)("p",null,"You can also look directly into configuration files of some other projects using Packit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/systemd/systemd/blob/main/.packit.yml"},"Systemd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rhinstaller/anaconda/blob/master/.packit.yml"},"Anaconda")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/ogr/blob/main/.packit.yaml"},"Ogr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oamg/convert2rhel/blob/main/.packit.yaml"},"Convert2rhel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cockpit-project/cockpit/blob/main/packit.yaml"},"Cockpit project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/teemtee/tmt/blob/main/.packit.yaml"},"Tmt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/osbuild/osbuild-composer/blob/main/.packit.yaml"},"Osbuild")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oamg/leapp-repository/blob/master/.packit.yaml"},"Leapp repository"))))}c.isMDXComponent=!0}}]);