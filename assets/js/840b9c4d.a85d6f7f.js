"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[44e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"propose-downstream",date:new Date("2019-06-28T00:00:00.000Z"),sidebar_position:7},i="packit propose-downstream",s={unversionedId:"cli/propose-downstream",id:"cli/propose-downstream",title:"propose-downstream",description:"This is a detailed documentation for the update functionality of packit. The",source:"@site/docs/cli/propose-downstream.md",sourceDirName:"cli",slug:"/cli/propose-downstream",permalink:"/docs/cli/propose-downstream",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/propose-downstream.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"propose-downstream",date:"2019-06-28T00:00:00.000Z",sidebar_position:7},sidebar:"autogenerated",previous:{title:"create-update",permalink:"/docs/cli/create-update"},next:{title:"prepare-sources",permalink:"/docs/cli/prepare-sources"}},p={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Help",id:"help",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packit-propose-downstream"},(0,a.kt)("inlineCode",{parentName:"h1"},"packit propose-downstream")),(0,a.kt)("p",null,"This is a detailed documentation for the update functionality of packit. The\ncommand creates a new pull request in Fedora (or CentOS Stream) using a selected or latest\nupstream release. This command is meant to be called from ",(0,a.kt)("strong",{parentName:"p"},"upstream repository"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upstream git repository on GitHub/GitLab."),(0,a.kt)("li",{parentName:"ul"},"Upstream release (read, git tag) where version in spec file is equivalent to\nthe name of the git tag (or ",(0,a.kt)("inlineCode",{parentName:"li"},"upstream_tag_template")," is configured)."),(0,a.kt)("li",{parentName:"ul"},"Packit config file placed in the upstream repository."),(0,a.kt)("li",{parentName:"ul"},"Spec file present in the upstream repository and is correct in a given\nrelease."),(0,a.kt)("li",{parentName:"ul"},"Pagure API tokens for Fedora (or CentOS Stream) Dist-git."),(0,a.kt)("li",{parentName:"ul"},"GitHub API token."),(0,a.kt)("li",{parentName:"ul"},"Valid Fedora (or CentOS Stream) Kerberos ticket.")),(0,a.kt)("admonition",{title:"CentOS Stream support",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We newly support ",(0,a.kt)("inlineCode",{parentName:"p"},"propose-downstream")," also for CentOS Stream, see the configuration specifics\n",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/propose_downstream#syncing-the-release-to-centos-stream"},"here"),".")),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Place a file called ",(0,a.kt)("inlineCode",{parentName:"p"},".packit.yaml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"packit.yaml")," in the root of your upstream repository."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The configuration is described ",(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/"},"in this document"),"."),(0,a.kt)("li",{parentName:"ul"},"Please get inspired from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/blob/main/.packit.yaml"},"an existing config"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Place a spec file into your upstream project (and make sure that\n",(0,a.kt)("inlineCode",{parentName:"p"},"specfile_path")," in the config has a correct value)."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This spec file will be then used to perform the update in Fedora (or CentOS Stream)."),(0,a.kt)("li",{parentName:"ul"},"When you create a new upstream release, you should also update the spec file."),(0,a.kt)("li",{parentName:"ul"},"Once your upstream release is out (and the spec file is really up to\ndate), you can use Packit to release it into Fedora (or CentOS Stream)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a new upstream release. The spec file needs to be included in the ref\nfor upstream release, because packit checks out the tag for the upstream\nrelease before copying files downstream.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once you have performed the upstream release (and the new archive is up),\nrun ",(0,a.kt)("inlineCode",{parentName:"p"},"packit propose-downstream")," in a working directory of your upstream\nrepository:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ git clone https://github.com/user-cont/colin.git\n\n$ cd colin\n\n$ packit propose-downstream\nusing "master" dist-git branch\nsyncing ./colin.spec\nINFO: Downloading file from URL https://files.pythonhosted.org/packages/source/c/colin/colin-0.3.0.tar.gz\n100%[=============================>]     3.18M  eta 00:00:00\ndownloaded archive: /tmp/tmpaanrpgjz/colin-0.3.0.tar.gz\nuploading to the lookaside cache\nPR created: https://src.fedoraproject.org/rpms/colin/pull-request/4\n')),(0,a.kt)("p",{parentName:"li"},"  As you can see, one of the things ",(0,a.kt)("inlineCode",{parentName:"p"},"propose-downstream")," does is, it downloads the\nupstream release tarball and uploads it to the lookaside cache. ",(0,a.kt)("a",{parentName:"p",href:"https://fedoraproject.org/wiki/Packaging:SourceURL#Referencing_Source"},"This is\nrequired by the Fedora Packaging\nGuidelines"),".\nThen it copies the files listed in ",(0,a.kt)("inlineCode",{parentName:"p"},"files_to_sync")," (which by default includes the spec file) from the upstream repo to downstream and creates the downstream PR."))),(0,a.kt)("h2",{id:"help"},"Help"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: packit propose-downstream [OPTIONS] [PATH_OR_URL] [VERSION]\n\n  Land a new upstream release in Fedora using upstream packit config.\n\n  PATH_OR_URL argument is a local path or a URL to the upstream git\n  repository, it defaults to the current working directory\n\n  VERSION argument is optional, the latest upstream version will be used by\n  default\n\nOptions:\n  --dist-git-branch TEXT  Comma separated list of target branches in dist-git\n                          to release into. (defaults to all branches)\n  --dist-git-path TEXT    Path to dist-git repo to work in. Otherwise clone\n                          the repo in a temporary directory.\n  --force-new-sources     Upload the new sources also when the archive is\n                          already in the lookaside cache.\n  --pr / --no-pr          Create a pull request to downstream repository or\n                          push directly. If not set, defaults to value set in\n                          configuration.\n  -f, --force             Don't discard changes in the git repo by default,\n                          unless this is set.\n  -b, --resolve-bug TEXT  Bug(s) that are resolved with the update, e.g.\n                          rhbz#123 (multiple can be specified)\n  --sync-acls             Sync ACLs between dist-git repo and the fork, is\n                          considered only with --pr option.\n  -p, --package TEXT      Package to sync downstream, if more than one\n                          available, like in a monorepo configuration. Use it\n                          multiple times to select multiple packages.Defaults\n                          to all the packages listed inside the config.\n  --local-content         Do not checkout release tag. Use the current state\n                          of the repo. This option is set by default for\n                          source-git repos\n  --upstream-ref TEXT     Git ref of the last upstream commit in the current\n                          branch from which packit should generate patches\n                          (this option implies the repository is source-git).\n  -h, --help              Show this message and exit.\n")))}d.isMDXComponent=!0}}]);