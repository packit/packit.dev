"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[95222],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(n),m=i,d=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var g=2;g<a;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var r=n(58168),i=(n(96540),n(15680));const a={title:"(Tests) job triggering improvements",date:new Date("2023-07-11T06:46:18.000Z"),authors:"lbarczio",tags:["configuration"]},o=void 0,s={permalink:"/posts/manual-triggering",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/manual-triggering/index.md",source:"@site/posts/manual-triggering/index.md",title:"(Tests) job triggering improvements",description:"Recently, we received multiple contributions from the Strimzi team, specifically Jakub Stejskal",date:"2023-07-11T06:46:18.000Z",formattedDate:"July 11, 2023",tags:[{label:"configuration",permalink:"/posts/tags/configuration"}],readingTime:2.88,hasTruncateMarker:!0,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"(Tests) job triggering improvements",date:"2023-07-11T06:46:18.000Z",authors:"lbarczio",tags:["configuration"]},prevItem:{title:"Call for volunteers: help to test us the release syncing using staging instance",permalink:"/posts/verify-sync-release-volunteers"},nextItem:{title:"Introducing monorepository support",permalink:"/posts/monorepos"}},l={authorsImageUrls:[void 0]},g=[{value:"Manual-only triggering of jobs",id:"manual-only-triggering-of-jobs",level:2},{value:"Triggering test jobs based on labels and identifiers",id:"triggering-test-jobs-based-on-labels-and-identifiers",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:g},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Recently, we received multiple contributions from the Strimzi team, specifically ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Frawless"},"Jakub Stejskal"),"\nand ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/kornys"},"David Kornel"),",\nfor the functionality of manual triggering of jobs and other related improvements, mostly focusing on the testing\nUX. We are very happy about these and would like to showcase the results of their awesome contributions."),(0,i.yg)("p",null,"Strimzi team wanted to onboard Packit to ease their testing in pull requests, but they have had multiple test suites that could run\nfor a long time, and they did not want to run all of the test suites for each new commit in a pull request."),(0,i.yg)("p",null,"Let's now look together at what they implemented to solve their usecase."),(0,i.yg)("h2",{id:"manual-only-triggering-of-jobs"},"Manual-only triggering of jobs"),(0,i.yg)("p",null,"Firstly, a new configuration option ",(0,i.yg)("a",{parentName:"p",href:"/docs/configuration/jobs#manual_trigger"},(0,i.yg)("inlineCode",{parentName:"a"},"manual_trigger"))," was introduced.\nWith this new configuration option, users can enable triggering Packit jobs only manually and avoid specified jobs being\nautomatically triggered when, e.g., a new commit arrives to a pull request.\nThe only thing needed to make this work is to add ",(0,i.yg)("inlineCode",{parentName:"p"},"manual_trigger: true")," to the job's definition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"- job: tests\n  trigger: pull_request\n  targets:\n    - centos-stream-9-x86_64\n  skip_build: true\n  manual_trigger: true\n")),(0,i.yg)("p",null,"This new configuration option allows saving resources and running builds or tests, e.g. only when the pull request is ready for\ntesting and can be especially useful for projects having huge test plans."),(0,i.yg)("h2",{id:"triggering-test-jobs-based-on-labels-and-identifiers"},"Triggering test jobs based on labels and identifiers"),(0,i.yg)("p",null,"The above solution is very easy to use; however, there might be use cases where the users don\u2019t want to trigger all the jobs.\nA particular example could be running a smoke test job before running the sanity one."),(0,i.yg)("p",null,"To solve this, for the test jobs, Jakub and David introduced 2 new ways to trigger a specific job."),(0,i.yg)("p",null,"The first one is to trigger the job based on the configured ",(0,i.yg)("a",{parentName:"p",href:"/docs/configuration/upstream/tests#optional-parameters"},(0,i.yg)("inlineCode",{parentName:"a"},"identifier")),". To trigger a test job with ",(0,i.yg)("inlineCode",{parentName:"p"},"identifier: regression-operators")," in the\njob configuration, the Packit comment command will be:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/packit test --identifier regression-operators\n")),(0,i.yg)("p",null,"That command will execute the job with this specific identifier, nothing else."),(0,i.yg)("p",null,"And what if someone wants to execute more than one job? Users can easily use multiple identifiers in a comma-separated list:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/packit test --identifier regression-operators,regression-components\n")),(0,i.yg)("p",null,"But specifying a longer list of identifiers every time might get a little bit annoying,\nespecially when the identifiers are usually used together repeatedly."),(0,i.yg)("p",null,"To improve the UX, there was introduced ",(0,i.yg)("a",{parentName:"p",href:"/docs/configuration/upstream/tests#optional-parameters"},(0,i.yg)("inlineCode",{parentName:"a"},"labels"))," configuration field that can group together multiple jobs.\nEach job can contain a list of ",(0,i.yg)("inlineCode",{parentName:"p"},"labels")," in their definition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"- job: tests\n  trigger: pull_request\n  identifier: regression-operators\n  targets:\n    - centos-stream-9-x86_64\n  skip_build: true\n  manual_trigger: true\n  labels:\n    - regression\n    - sanity\n\n- job: tests\n  trigger: pull_request\n  identifier: regression-components\n  targets:\n    - centos-stream-9-x86_64\n  skip_build: true\n  manual_trigger: true\n  labels:\n    - regression\n\n- job: tests\n  trigger: pull_request\n  identifier: acceptance-operators\n  targets:\n    - centos-stream-9-x86_64\n  skip_build: true\n  manual_trigger: true\n  labels:\n    - acceptance\n    - sanity\n")),(0,i.yg)("p",null,"With this, one can comment"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/packit test --labels regression\n")),(0,i.yg)("p",null,"and the comment will trigger all jobs that contain ",(0,i.yg)("inlineCode",{parentName:"p"},"regression")," in the list of labels in the job configuration.\nIt is again also possible to specify a comma-separated list of labels:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/packit test --labels regression,sanity\n")),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"As already mentioned, these improvements were made as contributions from outside of the Packit team, and it was such\na nice experience to collaborate with someone new! And this brings us to a reminder:\nAnyone can contribute! So if you are missing some features, feel free to open a pull request, and we will gladly help\nyou so that your feature can land in our production!"))}c.isMDXComponent=!0}}]);