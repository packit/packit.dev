"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=n,f=u["".concat(c,".").concat(k)]||u[k]||m[k]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},19023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Week 5 in Packit",date:new Date("2024-02-05T00:00:00.000Z"),authors:"mmassari",tags:["2024-February",2024,"February"]},o=void 0,l={permalink:"/posts/weekly/2024/week-5",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-5.md",source:"@site/weekly/2024/week-5.md",title:"Week 5 in Packit",description:"Week 5 (January 30th \u2013 February 5th)",date:"2024-02-05T00:00:00.000Z",formattedDate:"February 5, 2024",tags:[{label:"2024-February",permalink:"/posts/weekly/tags/2024-february"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"February",permalink:"/posts/weekly/tags/february"}],readingTime:.355,hasTruncateMarker:!1,authors:[{name:"Maja Massarini",email:"mmassari@redhat.com",url:"https://github.com/majamassarini",imageURL:"https://github.com/majamassarini.png",key:"mmassari"}],frontMatter:{title:"Week 5 in Packit",date:"2024-02-05T00:00:00.000Z",authors:"mmassari",tags:["2024-February","2024","February"]},nextItem:{title:"Week 4 in Packit",permalink:"/posts/weekly/2024/week-4"}},c={authorsImageUrls:[void 0]},p=[{value:"Week 5 (January 30th \u2013 February 5th)",id:"week-5-january-30th--february-5th",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"week-5-january-30th--february-5th"},"Week 5 (January 30th \u2013 February 5th)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"packit validate-config")," now checks whether the Upstream Release Monitoring for the package is correctly configured if ",(0,n.kt)("inlineCode",{parentName:"li"},"pull_from_upstream")," job is present in the configuration. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2226"},"packit#2226"),")"),(0,n.kt)("li",{parentName:"ul"},"There is a new global configuration option ",(0,n.kt)("inlineCode",{parentName:"li"},"parse_time_macros")," that allows to configure macros to be explicitly defined or undefined at spec file parse time. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2222"},"packit#2222"),")"),(0,n.kt)("li",{parentName:"ul"},"We have added additional retries and improvements for task processing. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2326"},"packit-service#2326"),")")))}m.isMDXComponent=!0}}]);