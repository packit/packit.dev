"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[10160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,f=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},54038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 18 in Packit",date:new Date("2024-05-06T00:00:00.000Z"),authors:"nforro",tags:["2024-April",2024,"April"]},o=void 0,l={permalink:"/posts/weekly/2024/week-18",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-18.md",source:"@site/weekly/2024/week-18.md",title:"Week 18 in Packit",description:"Week 18 (April 30th \u2013 May 6th)",date:"2024-05-06T00:00:00.000Z",formattedDate:"May 6, 2024",tags:[{label:"2024-April",permalink:"/posts/weekly/tags/2024-april"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"April",permalink:"/posts/weekly/tags/april"}],readingTime:.49,hasTruncateMarker:!1,authors:[{name:"Nikola Forr\xf3",email:"nforro@redhat.com",url:"https://github.com/nforro",imageURL:"https://github.com/nforro.png",key:"nforro"}],frontMatter:{title:"Week 18 in Packit",date:"2024-05-06T00:00:00.000Z",authors:"nforro",tags:["2024-April","2024","April"]},prevItem:{title:"Week 19 in Packit",permalink:"/posts/weekly/2024/week-19"},nextItem:{title:"Week 17 in Packit",permalink:"/posts/weekly/2024/week-17"}},p={authorsImageUrls:[void 0]},c=[{value:"Week 18 (April 30th \u2013 May 6th)",id:"week-18-april-30th--may-6th",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-18-april-30th--may-6th"},"Week 18 (April 30th \u2013 May 6th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Packit will now upload to lookaside cache sources that are not specified by URLs\nand are present in the dist-git repo during release sync. Additionally, all the actions\nran during syncing release will provide the ",(0,a.kt)("inlineCode",{parentName:"li"},"PACKIT_PROJECT_VERSION")," environment variable.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2297"},"packit#2297"),")"),(0,a.kt)("li",{parentName:"ul"},"We have introduced a new ",(0,a.kt)("inlineCode",{parentName:"li"},"status_name_template")," option that allows you to configure\nstatus name for a Packit job. For further details have a look at our\n",(0,a.kt)("a",{parentName:"li",href:"https://packit.dev/docs/configuration#status_name_template"},"docs"),".\nThis feature is still experimental and at the moment it is not possible\nto retry such jobs via GitHub Checks' re-run.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2402"},"packit-service#2402"),")")))}m.isMDXComponent=!0}}]);