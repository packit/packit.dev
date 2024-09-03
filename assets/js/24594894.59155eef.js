"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[37667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,f=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},72663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Call for volunteers: help to test us the release syncing using staging instance",date:new Date("2023-09-05T12:46:18.000Z"),authors:"lbarczio",tags:["downstream","pull-from-upstream","propose-downstream","staging"]},s=void 0,i={permalink:"/posts/verify-sync-release-volunteers",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/verify-sync-release-volunteers/index.md",source:"@site/posts/verify-sync-release-volunteers/index.md",title:"Call for volunteers: help to test us the release syncing using staging instance",description:"In the upcoming months, we plan to migrate our service to a new cluster. However, this may affect propose_downstream",date:"2023-09-05T12:46:18.000Z",formattedDate:"September 5, 2023",tags:[{label:"downstream",permalink:"/posts/tags/downstream"},{label:"pull-from-upstream",permalink:"/posts/tags/pull-from-upstream"},{label:"propose-downstream",permalink:"/posts/tags/propose-downstream"},{label:"staging",permalink:"/posts/tags/staging"}],readingTime:1.84,hasTruncateMarker:!0,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Call for volunteers: help to test us the release syncing using staging instance",date:"2023-09-05T12:46:18.000Z",authors:"lbarczio",tags:["downstream","pull-from-upstream","propose-downstream","staging"]},prevItem:{title:"Experiences using Packit for a Rust executable Project",permalink:"/posts/experiences_with_rust"},nextItem:{title:"(Tests) job triggering improvements",permalink:"/posts/manual-triggering"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the upcoming months, we plan to migrate our service to a new cluster. However, this may affect ",(0,o.kt)("inlineCode",{parentName:"p"},"propose_downstream"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"pull_from_upstream")," jobs due to the new firewall rules. The problematic aspects could be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"commands you run in your ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")," during syncing the release involving interactions with external servers"),(0,o.kt)("li",{parentName:"ul"},"downloading your sources from various hosting services (crates.io, npm, gems, etc.)")),(0,o.kt)("p",null,"To smoothen this transition, we kindly encourage you to enable one of these jobs on our already migrated staging instance.\nThis recommendation is particularly important if you belong to one of the groups affected by the two previous points.\nThis proactive step will help us identify and address any issues promptly."))}m.isMDXComponent=!0}}]);