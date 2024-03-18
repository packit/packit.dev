"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6982],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return i?n.createElement(g,o(o({ref:t},u),{},{components:i})):n.createElement(g,o({ref:t},u))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},54345:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={title:"Koji builds",sidebar_position:2},o="job: koji_build",s={unversionedId:"configuration/downstream/koji_build",id:"configuration/downstream/koji_build",title:"Koji builds",description:"Trigger the build in",source:"@site/docs/configuration/downstream/koji_build.md",sourceDirName:"configuration/downstream",slug:"/configuration/downstream/koji_build",permalink:"/docs/configuration/downstream/koji_build",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/downstream/koji_build.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Koji builds",sidebar_position:2},sidebar:"autogenerated",previous:{title:"Pull from upstream",permalink:"/docs/configuration/downstream/pull_from_upstream"},next:{title:"Bodhi updates",permalink:"/docs/configuration/downstream/bodhi_update"}},l={},p=[{value:"Supported triggers",id:"supported-triggers",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Processing of dist-git events from Pagure",id:"processing-of-dist-git-events-from-pagure",level:2},{value:"Example",id:"example",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"job-koji_build"},(0,a.kt)("inlineCode",{parentName:"h1"},"job: koji_build")),(0,a.kt)("p",null,"Trigger the build in\n",(0,a.kt)("a",{parentName:"p",href:"https://koji.fedoraproject.org/koji/"},"Fedora Koji")," build system\nas a reaction to a new dist-git commit.\nA Packit config file needs to be in the dist-git repository\nto allow this job to be triggered.\nPackit loads the config from the default dist-git branch (usually ",(0,a.kt)("inlineCode",{parentName:"p"},"rawhide"),"). Packit configs on other branches are ignored."),(0,a.kt)("p",null,"The build is triggered only for commits with a spec-file change."),(0,a.kt)("p",null,"By default, only merged pull requests created by Packit are being acted upon so the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/fesco/Provenpackager_policy/"},"proven packager\nworkflow")," is\npreserved, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/issues/1490"},"details\nhere"),". You can override this behaviour by specifying\n",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_pr_authors")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_committers")," in the job configuration (see below). For direct pushes, the committer needs to\nbe specified in the  ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_committers")," and for merged pull requests the author of the PR needs to be\nspecified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_pr_authors"),"."),(0,a.kt)("p",null,"Packit provides an overview of its own builds ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.packit.dev/jobs/downstream-koji-builds"},"here"),"."),(0,a.kt)("p",null,"The koji build behaves as it was created manually, and you can utilise\n",(0,a.kt)("a",{parentName:"p",href:"https://apps.fedoraproject.org/notifications/about"},"Fedora Notifications"),"\nto be informed about the builds. Also, you can configure a repository where should we\nopen issues in case of errors during the job via ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,a.kt)("inlineCode",{parentName:"a"},"issue_repository"))," configuration key."),(0,a.kt)("p",null,"For retriggering the job, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/fedora-releases-guide/dist-git-onboarding#retriggering"},"our release guide"),"."),(0,a.kt)("p",null,"For Koji builds from upstream, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/upstream_koji_build"},(0,a.kt)("inlineCode",{parentName:"a"},"upstream_koji_build")),"."),(0,a.kt)("admonition",{title:"Downstream configuration template",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use our ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/downstream_configuration_template"},"downstream configuration template"),"\nfor creating your Packit configuration in dist-git repository.")),(0,a.kt)("admonition",{title:"Automate the setup",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also use ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli/dist-git/init"},"packit dist-git init")," CLI command to create your\nPackit dist-git configuration.")),(0,a.kt)("h2",{id:"supported-triggers"},"Supported triggers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"commit")," - reacts to new commits to the specified branch (in dist-git)")),(0,a.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dist_git_branches")," - the name of the dist-git branch we want to build for when using ",(0,a.kt)("strong",{parentName:"li"},"commit")," trigger.\nYou can also use the ",(0,a.kt)("a",{parentName:"li",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released.")),(0,a.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scratch")," - defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", use to create scratch (test) builds\ninstead of the real production builds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"allowed_pr_authors")," - a list of PR authors whose merged pull requests will trigger Koji builds\n(defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"['packit']"),"). As each item of the list you can specify:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name of a FAS account, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"my-fas")),(0,a.kt)("li",{parentName:"ul"},"name of a group - starting with ",(0,a.kt)("inlineCode",{parentName:"li"},"@"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"@my-sig")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"all_admins")," alias - allowing all users with admin access to the dist-git repo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"all_committers")," alias - allowing all users with commit access to the dist-git repo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"allowed_committers")," - a list of committers whose direct pushes to dist-git will trigger Koji builds\n(defaults to an empty list). It is enough to configure the ",(0,a.kt)("inlineCode",{parentName:"li"},"allowed_pr_authors")," option if you want to have Koji builds\ntriggered only by merged pull requests.\nSimilarly to the previous option, as each item of the list you can specify:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name of a FAS account, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"my-fas")),(0,a.kt)("li",{parentName:"ul"},"name of a group - starting with ",(0,a.kt)("inlineCode",{parentName:"li"},"@"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"@my-sig")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"all_admins")," alias - allowing all users with admin access to the dist-git repo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"all_committers")," alias - allowing all users with commit access to the dist-git repo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"require.label")," - you can specify labels that have to be present/absent on a pull request\nin order to trigger the build when it is merged. See configuration details ",(0,a.kt)("a",{parentName:"li",href:"/docs/configuration#require"},"here"),".")),(0,a.kt)("h2",{id:"processing-of-dist-git-events-from-pagure"},"Processing of dist-git events from Pagure"),(0,a.kt)("admonition",{title:"Processing of dist-git events from Pagure",type:"info"},(0,a.kt)("mermaid",{parentName:"admonition",value:'flowchart TD;\n  S[Event is registered]\n  F{Specfile changed}\n  A{Type of event}\n  B{"Is build configured\n  for the branch?"}\n  C{"Has commit been\n  pushed by Pagure?"}\n  D{"Has the commit\n  been pushed\n  by someone in\n  <code>allowed_committers</code>?"}\n  E{"Is it a PR merge?"}\n  G{"Is the PR author in\n  <code>allowed_pr_authors</code>?"}\n  H{"Is the actor\n  a packager?"}\n  I{"If it is a PR merge, \n  are there configured labels\n   (present/absent) in the configuration?"}\n  J{"Do the configured labels \n  match the labels on PR?"}\n\n  OK(((Run build)))\n  NOK((Skip build))\n\n  S --\x3e F\n  F -. No   .-> NOK\n  F -. Yes  .-> A\n\n  A -- Comment --\x3e H\n  H -. No      .-> NOK\n  H -- Yes     --\x3e OK\n\n  A -- Push --\x3e I\n  I -- Yes --\x3e J\n  I -- No --\x3e B\n  J -- Yes --\x3e B\n  J -- No --\x3e NOK\n  \n  B -. No   .-> NOK\n  B -- Yes  --\x3e C\n  C -- Yes  --\x3e E\n  C -. No   .-> D\n  D -. No   .-> NOK\n  D -- Yes  --\x3e OK\n  E -. No   .-> NOK\n  E -- Yes  --\x3e G\n  G -. No   .-> NOK\n  G -- Yes  --\x3e OK'}),(0,a.kt)("p",{parentName:"admonition"},"Because of the potential issues with rendering:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"dotted lines represent ",(0,a.kt)("em",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ul"},"continous lines represent ",(0,a.kt)("em",{parentName:"li"},"yes")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'issue_repository: https://github.com/my-username/packit-notifications\n\njobs:\n- job: koji_build\n  trigger: commit\n  allowed_committers: ["jsmith"]\n  dist_git_branches:\n    - fedora-all\n    - epel-8\n')))}c.isMDXComponent=!0}}]);