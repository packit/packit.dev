"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[9454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=r(87462),i=(r(67294),r(3905));const n={title:"Week 17 in Packit",date:new Date("2024-04-29T00:00:00.000Z"),authors:"lbarczio",tags:["2024-April",2024,"April"]},l=void 0,o={permalink:"/posts/weekly/2024/week-17",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-17.md",source:"@site/weekly/2024/week-17.md",title:"Week 17 in Packit",description:"Week 17 (April 23rd \u2013 April 29th)",date:"2024-04-29T00:00:00.000Z",formattedDate:"April 29, 2024",tags:[{label:"2024-April",permalink:"/posts/weekly/tags/2024-april"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"April",permalink:"/posts/weekly/tags/april"}],readingTime:.48,hasTruncateMarker:!1,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Week 17 in Packit",date:"2024-04-29T00:00:00.000Z",authors:"lbarczio",tags:["2024-April","2024","April"]},nextItem:{title:"Week 16 in Packit",permalink:"/posts/weekly/2024/week-16"}},p={authorsImageUrls:[void 0]},c=[{value:"Week 17 (April 23rd \u2013 April 29th)",id:"week-17-april-23rd--april-29th",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"week-17-april-23rd--april-29th"},"Week 17 (April 23rd \u2013 April 29th)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have fixed the syncing of ACLs during CentOS Stream release syncing.\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2298"},"packit#2298"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"koji_build")," job has a new ",(0,i.kt)("inlineCode",{parentName:"li"},"sidetag_group")," option that allows to perform a downstream Koji build in a sidetag.\nA new sidetag will be created for each configured ",(0,i.kt)("inlineCode",{parentName:"li"},"dist_git_branch")," if it doesn't already exist.\nThis represents the first step towards multi-package Bodhi updates. Stay tuned for further advancements!\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2409"},"packit-service#2409"),")"),(0,i.kt)("li",{parentName:"ul"},"We have fixed an issue when ",(0,i.kt)("inlineCode",{parentName:"li"},"copr_build")," job status checks were sometimes wrongly updated with a misleading\nmessage after a SRPM build failure. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2406"},"packit-service#2406"),")")))}m.isMDXComponent=!0}}]);