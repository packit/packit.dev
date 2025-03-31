"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[59812],{11905:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),r=(a(96540),a(15680));const o={title:"Automatic pulling of upstream releases to Fedora",date:new Date("2023-01-23T08:23:44.000Z"),authors:"lbarczio",tags:["downstream"]},i=void 0,s={permalink:"/posts/pull-from-upstream",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/pull-from-upstream/index.md",source:"@site/posts/pull-from-upstream/index.md",title:"Automatic pulling of upstream releases to Fedora",description:"In the previous year, we automated the Fedora downstream release process in Packit.",date:"2023-01-23T08:23:44.000Z",formattedDate:"January 23, 2023",tags:[{label:"downstream",permalink:"/posts/tags/downstream"}],readingTime:3.955,hasTruncateMarker:!0,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Automatic pulling of upstream releases to Fedora",date:"2023-01-23T08:23:44.000Z",authors:"lbarczio",tags:["downstream"]},prevItem:{title:"2022 for Packit",permalink:"/posts/2022-features"},nextItem:{title:"Running tests with builds from another PR",permalink:"/posts/testing-farm-triggering"}},p={authorsImageUrls:[void 0]},l=[{value:"Setup",id:"setup",level:2},{value:"Upstream release monitoring",id:"upstream-release-monitoring",level:3},{value:"Packit configuration",id:"packit-configuration",level:3},{value:"<code>pull_from_upstream</code> in action",id:"pull_from_upstream-in-action",level:2},{value:"Few words in the end",id:"few-words-in-the-end",level:2}],c={toc:l},u="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In the previous year, we ",(0,r.yg)("a",{parentName:"p",href:"/posts/downstream-automation"},"automated")," the Fedora downstream release process in Packit.\nThe first step of the release process, propagating the upstream release to Fedora,\nis covered by the ",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/upstream/propose_downstream"},(0,r.yg)("inlineCode",{parentName:"a"},"propose_downstream"))," job.\nThis job updates the sources in Fedora, the spec file, and other needed files and creates pull requests with the changes\nin the dist-git repository."),(0,r.yg)("p",null,"The downside of this job is that for its execution, users need to install Packit Service GitHub/GitLab\napp since this job reacts only to GitHub/GitLab release webhooks.\nHowever, the person who maintains the package in Fedora may not be the upstream maintainer and may not have admin access\nto the upstream GitHub/GitLab repository."),(0,r.yg)("p",null,"To cover this case, we came up with a new job called ",(0,r.yg)("inlineCode",{parentName:"p"},"pull_from_upstream"),", which aims to update Fedora dist-git similarly\nto ",(0,r.yg)("inlineCode",{parentName:"p"},"propose_downstream"),", but is configured directly in the dist-git repository.\nLet's now look at how to set it up and how it works."),(0,r.yg)("h2",{id:"setup"},"Setup"),(0,r.yg)("h3",{id:"upstream-release-monitoring"},"Upstream release monitoring"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pull_from_upstream")," job reacts to a new bug in ",(0,r.yg)("a",{parentName:"p",href:"https://bugzilla.redhat.com/"},"Bugzilla")," about a new upstream version\nof a project. The bug is automatically created by\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/package-maintainers/Upstream_Release_Monitoring/"},"Upstream Release Monitoring"),".\nTo enable the Upstream Release Monitoring:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the upstream project (if it is not there yet)\nto ",(0,r.yg)("a",{parentName:"p",href:"https://release-monitoring.org/"},"Anitya")," and configure the mapping to a Fedora package:\n",(0,r.yg)("img",{alt:"Project in Anitya",src:a(38719).A,width:"598",height:"705"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enable the monitoring in the dist-git repository (",(0,r.yg)("a",{parentName:"p",href:"https://src.fedoraproject.org"},"Fedora Package Sources"),"):"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Monitoring in dist-git",src:a(90149).A,width:"539",height:"521"})),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"In Anitya, there are multiple backends you can configure the mapping for.\nBesides GitHub or GitLab, you can use e.g. PyPI, pagure, or\n",(0,r.yg)("a",{parentName:"p",href:"https://release-monitoring.org/static/docs/user-guide.html#backends"},"many others"),".\nAlso, be aware that there can be a delay in retrieving the new version,\nso the update to Fedora is usually not created instantly (e.g. for Python projects,\nit is better to configure PyPI backend rather than GitHub since the monitoring\nthere is much less delayed).")),(0,r.yg)("h3",{id:"packit-configuration"},"Packit configuration"),(0,r.yg)("p",null,"To automatically pull the upstream release as a reaction to the bug in Bugzilla, ",(0,r.yg)("inlineCode",{parentName:"p"},"pull_from_upstream")," job\nneeds to be defined in the default branch\n(",(0,r.yg)("inlineCode",{parentName:"p"},"rawhide"),") of the dist-git repository in the Packit configuration file (see\n",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/downstream/pull_from_upstream"},"our documentation"),"). The ",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/#upstream_project_url"},(0,r.yg)("inlineCode",{parentName:"a"},"upstream_project_url")),"\nneeds to be a URL pointing to a Git repository so that we can do ",(0,r.yg)("inlineCode",{parentName:"p"},"git")," commands on it.\nIf not specified, upstream repository is not being cloned."),(0,r.yg)("h2",{id:"pull_from_upstream-in-action"},(0,r.yg)("inlineCode",{parentName:"h2"},"pull_from_upstream")," in action"),(0,r.yg)("p",null,"Let's showcase the new job in action for the latest release of\n",(0,r.yg)("a",{parentName:"p",href:"https://pypi.org/project/packitos/"},"Packit itself"),"."),(0,r.yg)("p",null,"As you can see in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Setup")," section above, the Upstream Release Monitoring is configured:\nthere is a PyPI project ",(0,r.yg)("inlineCode",{parentName:"p"},"packitos")," in Anitya\nwith configured mapping to the Fedora package ",(0,r.yg)("inlineCode",{parentName:"p"},"packit")," and the monitoring in the\n",(0,r.yg)("a",{parentName:"p",href:"https://src.fedoraproject.org/rpms/packit"},(0,r.yg)("inlineCode",{parentName:"a"},"packit")," dist-git repository")," is enabled.\nWe could configure the mapping in Anitya from the GitHub project directly instead, and it would work as well. Just be aware that\nfor each Fedora package, there can be a mapping only from one project."),(0,r.yg)("p",null,"In Packit configuration file, we have configured the job and related options:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"upstream_project_url: https://github.com/packit/packit\nissue_repository: https://github.com/packit/packit\ncopy_upstream_release_description: true\n\njobs:\n  - job: pull_from_upstream\n    trigger: release\n    dist_git_branches:\n      - fedora-all\n      - epel-8\n")),(0,r.yg)("p",null,"You can see that version ",(0,r.yg)("inlineCode",{parentName:"p"},"0.66.0")," of Packit (",(0,r.yg)("inlineCode",{parentName:"p"},"packitos")," in PyPI) was released:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Packit release PyPI",src:a(85166).A,width:"1128",height:"456"})),(0,r.yg)("p",null,"When Upstream Release Monitoring retrieved this new version, it created a new bug:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Bugzilla",src:a(83175).A,width:"448",height:"179"})),(0,r.yg)("p",null,"This triggered Packit, and after checking the Packit configuration in dist-git\nand finding the ",(0,r.yg)("inlineCode",{parentName:"p"},"pull_from_upstream")," job, this job was run."),(0,r.yg)("p",null,"Using the ",(0,r.yg)("inlineCode",{parentName:"p"},"upstream_project_url")," from the configuration, Packit was able to get the needed information\nfrom the corresponding GitHub release:\n",(0,r.yg)("img",{alt:"Packit release GitHub",src:a(21011).A,width:"1142",height:"645"})),(0,r.yg)("p",null,"As a result, pull requests for configured branches were created.\nHere is an example of one of the created pull requests and part of its content:\n",(0,r.yg)("img",{alt:"Dist-git PR",src:a(30540).A,width:"743",height:"323"}),"\n",(0,r.yg)("img",{alt:"Pull request content",src:a(39955).A,width:"1110",height:"950"})),(0,r.yg)("p",null,"Since we have configured the ",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,r.yg)("inlineCode",{parentName:"a"},"issue_repository")),", we could be\nalso notified about errors:\n",(0,r.yg)("img",{alt:"Pull from upstream issue",src:a(35281).A,width:"930",height:"474"})),(0,r.yg)("admonition",{title:"Update July 2023",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It is now also possible to retrigger the job, see\n",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/downstream/pull_from_upstream#retriggering"},"the details"),".")),(0,r.yg)("p",null,"Also, if you need to do any change in the pull request, you need to locally fetch the source branch\nof the Packit's pull request and push it (with a fix) to your fork (as it is not possible to push to the branch\ncreated in the Packit's fork):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"git fetch ssh://$USER.fedoraproject.org/forks/packit/rpms/$YOUR_PACKAGE.git refs/heads/*:refs/remotes/packit/*\ngit cherry-pick packit/$VERSION-$BRANCH-update-pull_from_upstream\n")),(0,r.yg)("h2",{id:"few-words-in-the-end"},"Few words in the end"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pull_from_upstream")," has just been implemented; therefore, we encourage you to help\ntest it out and make it perfect! There are still some limitations (e.g. regarding upstreams,\nsee ",(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/downstream/pull_from_upstream"},"documentation"),"), which we are trying to resolve as soon as possible.\nWe believe this functionality\ncould be beneficial for maintainers of Fedora packages and could even be integrated further.\nAny ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/packit/packit-service/issues/new"},"suggestions")," and feedback are welcomed\n(see ",(0,r.yg)("a",{parentName:"p",href:"/#contact"},"contacts"),")."),(0,r.yg)("p",null,"If you are interested in details of customization of\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"pull_from_upstream")," job and in the whole downstream automation, make sure to check out\n",(0,r.yg)("a",{parentName:"p",href:"/docs/fedora-releases-guide"},"our Fedora release guide")," as well!"))}g.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},21011:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/packit-gh-release-8041fa5c1f87fee966813e716db076f1.png"},30540:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pull-from-upstream-pr-084101cf1b0cbbefbf0797ef6638c0d8.png"},35281:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pull-from-upstream-issue-0699d8c149066d81d53dd2318043eabc.png"},38719:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/anitya-project-895fdf4a3840fb0f008e6e004219b65e.png"},39955:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/pull-from-upstream-content-1465ffb64bb623bf4bda8d5accef38d0.png"},83175:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/packit-release-bugzilla-2b6ecea0deabb2e89a2c4e57838bfca8.png"},85166:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/packit-release-pypi-d9a9d2675c7d4349e41b296190e10665.png"},90149:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dist-git-monitoring-072d1b24827060d7f1818cc11c3e47df.png"}}]);