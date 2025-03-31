"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[23744],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>h});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const i={title:"Week 13 in Packit",date:new Date("2025-03-31T00:00:00.000Z"),authors:"nforro",tags:["2025-March",2025,"March"]},o=void 0,c={permalink:"/posts/weekly/2025/week-13",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2025/week-13.md",source:"@site/weekly/2025/week-13.md",title:"Week 13 in Packit",description:"Week 13 (March 25th \u2013 March 31st)",date:"2025-03-31T00:00:00.000Z",formattedDate:"March 31, 2025",tags:[{label:"2025-March",permalink:"/posts/weekly/tags/2025-march"},{label:"2025",permalink:"/posts/weekly/tags/2025"},{label:"March",permalink:"/posts/weekly/tags/march"}],readingTime:.355,hasTruncateMarker:!1,authors:[{name:"Nikola Forr\xf3",email:"nforro@redhat.com",url:"https://github.com/nforro",imageURL:"https://github.com/nforro.png",key:"nforro"}],frontMatter:{title:"Week 13 in Packit",date:"2025-03-31T00:00:00.000Z",authors:"nforro",tags:["2025-March","2025","March"]},nextItem:{title:"Week 11 in Packit",permalink:"/posts/weekly/2025/week-11"}},l={authorsImageUrls:[void 0]},p=[{value:"Week 13 (March 25th \u2013 March 31st)",id:"week-13-march-25th--march-31st",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"week-13-march-25th--march-31st"},"Week 13 (March 25th \u2013 March 31st)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"We have fixed an issue that could cause subsequent runs\nof ",(0,n.yg)("inlineCode",{parentName:"li"},"propose_downstream"),"/",(0,n.yg)("inlineCode",{parentName:"li"},"pull_from_upstream")," to fail if upstream git repo\ncontains submodules that are manipulated with in actions.\n(",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2768"},"packit-service#2768"),")"),(0,n.yg)("li",{parentName:"ul"},"Packit now supports ",(0,n.yg)("inlineCode",{parentName:"li"},"--base-nvr")," option when submitting scans to OpenScanHub.\nThe base NVR is pulled in from Koji to perform a differential scan.\n(",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2569"},"packit#2569"),")"),(0,n.yg)("li",{parentName:"ul"},"Packit CLI now submits Koji builds in parallel.\n(",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2568"},"packit#2568"),")")))}m.isMDXComponent=!0}}]);