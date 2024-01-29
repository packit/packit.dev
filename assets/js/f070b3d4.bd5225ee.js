"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Propose downstream",sidebar_position:5},s="job: propose_downstream",i={unversionedId:"configuration/upstream/propose_downstream",id:"configuration/upstream/propose_downstream",title:"Propose downstream",description:"Land a new upstream release in Fedora (or CentOS Stream). This job only makes sure the changes",source:"@site/docs/configuration/upstream/propose_downstream.md",sourceDirName:"configuration/upstream",slug:"/configuration/upstream/propose_downstream",permalink:"/docs/configuration/upstream/propose_downstream",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/upstream/propose_downstream.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Propose downstream",sidebar_position:5},sidebar:"autogenerated",previous:{title:"VM Image Builds",permalink:"/docs/configuration/upstream/vm_image_build"},next:{title:"Downstream jobs",permalink:"/docs/category/downstream-jobs"}},p={},l=[{value:"Supported triggers",id:"supported-triggers",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Example",id:"example",level:2},{value:"Syncing the release to CentOS Stream",id:"syncing-the-release-to-centos-stream",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"job-propose_downstream"},(0,a.kt)("inlineCode",{parentName:"h1"},"job: propose_downstream")),(0,a.kt)("p",null,"Land a new upstream release in Fedora (or CentOS Stream). This job only makes sure the changes\nhappen in dist-git - no builds. A pull request is created as a result."),(0,a.kt)("admonition",{title:"CentOS Stream support",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We newly support ",(0,a.kt)("inlineCode",{parentName:"p"},"propose-downstream")," also for CentOS Stream. The workflow is the same as for Fedora, but there are few\nconfiguration specifics, see ",(0,a.kt)("a",{parentName:"p",href:"#syncing-the-release-to-centos-stream"},"the subsection below"),".")),(0,a.kt)("h2",{id:"supported-triggers"},"Supported triggers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"release"))),(0,a.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dist_git_branches")," - a (list of) branches in dist-git where packit should work (defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," which represents ",(0,a.kt)("em",{parentName:"li"},"Fedora Rawhide"),").\nYou can also use the ",(0,a.kt)("a",{parentName:"li",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,\nplease see the details ",(0,a.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent"},"here"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: propose_downstream\n  trigger: release\n- job: propose_downstream\n  trigger: release\n  dist_git_branches:\n    - f39\n")),(0,a.kt)("p",null,"This config would update Fedora Rawhide and Fedora 39 dist-git branches."),(0,a.kt)("h2",{id:"syncing-the-release-to-centos-stream"},"Syncing the release to CentOS Stream"),(0,a.kt)("p",null,"Recently, we have implemented support for ",(0,a.kt)("inlineCode",{parentName:"p"},"propose-downstrem")," also for CentOS Stream. This means that you can now configure\nthe upstream release to trigger release syncing the same way as for Fedora to CentOS Stream dist-git repositories\nhosted in ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/redhat/centos-stream/rpms"},"https://gitlab.com/redhat/centos-stream/rpms"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This integration has just been added, so we will be happy if you could help us\ntest it out and improve it! If you come across any issues or have suggestions for improvement,\nplease take a moment to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/issues/new"},"report them to us"),".\nWe value general feedback as well, so don't hesitate to ",(0,a.kt)("a",{parentName:"p",href:"/#contact"},"reach out"),"!")),(0,a.kt)("p",null,"To sync the release to CentOS Stream, you currently need to specify the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pkg_tool: centpkg")," (the default is ",(0,a.kt)("inlineCode",{parentName:"li"},"fedpkg"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dist_git_branches"),":  ",(0,a.kt)("inlineCode",{parentName:"li"},"c8s")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"c9s"),". ")),(0,a.kt)("p",null,"Besides that, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"specify the ",(0,a.kt)("a",{parentName:"li",href:"/docs/configuration#packages"},(0,a.kt)("inlineCode",{parentName:"a"},"packages"))," with distinct items for Fedora and CentOS Stream.\nFor each ",(0,a.kt)("inlineCode",{parentName:"li"},"packages")," item, include configuration specifics tailored to the respective environment. This may\nbe setting the ",(0,a.kt)("inlineCode",{parentName:"li"},"pkg_tool")," option and, in case of different specfiles being used in Fedora and CentOS Stream,\nspecifying distinct ",(0,a.kt)("inlineCode",{parentName:"li"},"actions")," for downloading the specfiles as needed."),(0,a.kt)("li",{parentName:"ol"},"specify the particular packages in the jobs (as ",(0,a.kt)("inlineCode",{parentName:"li"},"packages: [my-package-fedora]")," for Fedora-related jobs and\n",(0,a.kt)("inlineCode",{parentName:"li"},"[packages: my-package-centos]")," for CentOS Stream-related job)")),(0,a.kt)("p",null,"Here is an example of such a configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ndownstream_package_name: nispor\nupstream_project_url: https://github.com/nispor/nispor\nissue_repository: https://github.com/nispor/nispor\nupdate_release: false\nupstream_package_name: nispor\nupstream_tag_template: v{version}\ncopy_upstream_release_description: false\n\npackages:\n  nispor-fedora:\n    actions:\n      post-upstream-clone:\n        - wget https://src.fedoraproject.org/rpms/nispor/raw/rawhide/f/nispor.spec\n  nispor-centos:\n    pkg_tool: centpkg\n    actions:\n      post-upstream-clone:\n        - wget https://gitlab.com/redhat/centos-stream/rpms/nispor/-/raw/c9s/nispor.spec\n\njobs:\n  - job: propose_downstream\n    trigger: release\n    packages: [nispor-fedora]\n    dist_git_branches:\n      - fedora\n\n  - job: propose_downstream\n    trigger: release\n    packages: [nispor-centos]\n    dist_git_branches:\n      - c9s\n")))}d.isMDXComponent=!0}}]);