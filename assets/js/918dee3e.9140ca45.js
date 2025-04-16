"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[98031],{13942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const i={title:"Week 48 in Packit",date:new Date("2024-12-02T00:00:00.000Z"),authors:"mmassari",tags:["2024-November",2024,"November"]},o=void 0,l={permalink:"/posts/weekly/2024/week-48",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-48.md",source:"@site/weekly/2024/week-48.md",title:"Week 48 in Packit",description:"Week 48 (November 26th \u2013 December 2nd)",date:"2024-12-02T00:00:00.000Z",formattedDate:"December 2, 2024",tags:[{label:"2024-November",permalink:"/posts/weekly/tags/2024-november"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"November",permalink:"/posts/weekly/tags/november"}],readingTime:.57,hasTruncateMarker:!1,authors:[{name:"Maja Massarini",email:"mmassari@redhat.com",url:"https://github.com/majamassarini",imageURL:"https://github.com/majamassarini.png",key:"mmassari"}],frontMatter:{title:"Week 48 in Packit",date:"2024-12-02T00:00:00.000Z",authors:"mmassari",tags:["2024-November","2024","November"]},prevItem:{title:"Week 49 in Packit",permalink:"/posts/weekly/2024/week-49"},nextItem:{title:"Week 47 in Packit",permalink:"/posts/weekly/2024/week-47"}},c={authorsImageUrls:[void 0]},s=[{value:"Week 48 (November 26th \u2013 December 2nd)",id:"week-48-november-26th--december-2nd",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"week-48-november-26th--december-2nd"},"Week 48 (November 26th \u2013 December 2nd)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"There is a new action/hook, ",(0,n.yg)("inlineCode",{parentName:"li"},"post-modifications"),", that is executed after all modifications to the spec file are done and in case of syncing release after all remote sources are downloaded and before uploading to lookaside cache. You can use it for example to construct an additional source that depends on the primary source (that may not yet be available in other actions). (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2474"},"packit#2474"),")"),(0,n.yg)("li",{parentName:"ul"},"We have fixed ",(0,n.yg)("inlineCode",{parentName:"li"},"/packit retest-failed")," which was retriggering also non failed tests. (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2665"},"packit-service#2665"),")"),(0,n.yg)("li",{parentName:"ul"},"Packit now includes dashboard links when reporting errors for Koji builds and Bodhi updates. (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2663"},"packit-service#2663"),")"),(0,n.yg)("li",{parentName:"ul"},"We have improved Koji builds and Bodhi updates errors displaying. (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/dashboard/pull/497"},"dashboard#497"),")")))}u.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>b});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);