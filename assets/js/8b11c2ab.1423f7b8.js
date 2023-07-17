"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[9400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"in-copr",date:new Date("2019-07-16T00:00:00.000Z"),sidebar_position:35},a="packit build in-copr",l={unversionedId:"cli/build/copr",id:"cli/build/copr",title:"in-copr",description:"Submit a Copr build of the present content in the upstream repository.",source:"@site/docs/cli/build/copr.md",sourceDirName:"cli/build",slug:"/cli/build/copr",permalink:"/docs/cli/build/copr",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/build/copr.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"in-copr",date:"2019-07-16T00:00:00.000Z",sidebar_position:35},sidebar:"autogenerated",previous:{title:"in-mock",permalink:"/docs/cli/build/mock"},next:{title:"source-git",permalink:"/docs/category/source-git"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Help",id:"help",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packit-build-in-copr"},(0,o.kt)("inlineCode",{parentName:"h1"},"packit build in-copr")),(0,o.kt)("p",null,"Submit a ",(0,o.kt)("a",{parentName:"p",href:"https://copr.fedorainfracloud.org"},"Copr")," build of the present content in the upstream repository."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upstream git repository on GitHub."),(0,o.kt)("li",{parentName:"ul"},"Packit config file placed in the upstream repository."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~/.config/copr"))),(0,o.kt)("p",null,"A minimum copr configure file is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[copr-cli]\ncopr_url = https://copr.fedorainfracloud.org\ngssapi = true\n")),(0,o.kt)("p",null,"This uses GSSAPI (see ",(0,o.kt)("a",{parentName:"p",href:"https://fedoraproject.org/wiki/Infrastructure/Kerberos#How_to_use_kerberos_auth_with_Fedora_Infrastructure"},(0,o.kt)("inlineCode",{parentName:"a"},"fkinit")),"\nfor more details). Alternatively you can use copr API token available ",(0,o.kt)("a",{parentName:"p",href:"https://copr.fedorainfracloud.org/api/"},"here"),"."),(0,o.kt)("h2",{id:"tutorial"},"Tutorial"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/"},"Place a config file for packit in the root of your upstream repository."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The command below would create a SRPM from the present content of a repo and perform ",(0,o.kt)("inlineCode",{parentName:"p"},"copr-cli build")," with it. If you need to specify a project name/owner or chroots, see the options in help."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ cd my/ustream/project/\n$ packit build in-copr\n")))),(0,o.kt)("h2",{id:"help"},"Help"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: packit build in-copr [OPTIONS] [PATH_OR_URL]\n\n    Build selected upstream project in Copr.\n  \n    PATH_OR_URL argument is a local path or a URL to the upstream git\n    repository, it defaults to the current working directory.\n  \n  Options:\n    --wait / --no-wait            Wait for the build to finish\n    --owner TEXT                  Copr user, owner of the project. (defaults to\n                                  username from copr config)\n    --project TEXT                Project name to build in. Will be created if\n                                  does not exist. (defaults to the first found\n                                  project value in the config file or 'packit-\n                                  cli-{repo_name}-{branch/commit}')\n    --targets TEXT                Comma separated list of chroots to build in.\n                                  (defaults to 'fedora-rawhide-x86_64')\n    --description TEXT            Description of the project to build in.\n    --instructions TEXT           Installation instructions for the project to\n                                  build in.\n    --list-on-homepage            Created copr project will be visible on copr's\n                                  home-page.\n    --preserve-project            Created copr project will not be removed after\n                                  60 days.\n    --additional-repos TEXT       URLs to additional yum repos, which can be\n                                  used during build. Comma separated. This\n                                  should be baseurl from .repo file. E.g.:\n                                  http://copr-be.cloud.fedoraproject.org/results\n                                  /rhughes/f20-gnome-3-12/fedora-$releasever-$ba\n                                  search/\n    --upstream-ref TEXT           Git ref of the last upstream commit in the\n                                  current branch from which packit should\n                                  generate patches (this option implies the\n                                  repository is source-git).\n    --request-admin-if-needed     Ask for admin permissions when we need to\n                                  change settings of the copr project and are\n                                  not allowed to do so.\n    --enable-net / --disable-net  Copr build is built with explicitly enabled\n                                  network access or disabled\n    --release-suffix TEXT         Specifies release suffix. Allows to override\n                                  default generated:{current_time}.{sanitized_cu\n                                  rrent_branch}{git_desc_suffix}\n    --default-release-suffix      Allows to use default, packit-generated,\n                                  release suffix when some release_suffix is\n                                  specified in the configuration.\n    --module-hotfixes             Created copr project will have module_hotfixes\n                                  set to True\n    -p, --package TEXT            Package to build, if more than one available,\n                                  like in a monorepo configuration. Use it\n                                  multiple times to select multiple\n                                  packages.Defaults to all the packages listed\n                                  inside the config.\n    -h, --help                    Show this message and exit.\n")))}d.isMDXComponent=!0}}]);