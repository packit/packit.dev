"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[54473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,y=u["".concat(c,".").concat(k)]||u[k]||m[k]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},67327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 22 in Packit",date:new Date("2024-06-03T00:00:00.000Z"),authors:"lbarczio",tags:["2024-May",2024,"May"]},o=void 0,l={permalink:"/posts/weekly/2024/week-22",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-22.md",source:"@site/weekly/2024/week-22.md",title:"Week 22 in Packit",description:"Week 22 (May 28th \u2013 June 3rd)",date:"2024-06-03T00:00:00.000Z",formattedDate:"June 3, 2024",tags:[{label:"2024-May",permalink:"/posts/weekly/tags/2024-may"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"May",permalink:"/posts/weekly/tags/may"}],readingTime:.185,hasTruncateMarker:!1,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Week 22 in Packit",date:"2024-06-03T00:00:00.000Z",authors:"lbarczio",tags:["2024-May","2024","May"]},prevItem:{title:"Week 24 in Packit",permalink:"/posts/weekly/2024/week-24"},nextItem:{title:"Week 21 in Packit",permalink:"/posts/weekly/2024/week-21"}},c={authorsImageUrls:[void 0]},p=[{value:"Week 22 (May 28th \u2013 June 3rd)",id:"week-22-may-28th--june-3rd",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-22-may-28th--june-3rd"},"Week 22 (May 28th \u2013 June 3rd)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue with pushing to CentOS Stream dist-git on GitLab is now resolved.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2433"},"packit-service#2433"),")"),(0,a.kt)("li",{parentName:"ul"},"Check for ",(0,a.kt)("inlineCode",{parentName:"li"},"allowed_pr_authors"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"allowed_committers")," configuration before running Koji production builds is now more reliable.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2435"},"packit/packit-service#2435"),")")))}m.isMDXComponent=!0}}]);