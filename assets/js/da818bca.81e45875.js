"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[4195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(a),k=r,g=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},75449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Week 34 in Packit",date:new Date("2024-08-27T00:00:00.000Z"),authors:"flachman",tags:["2024-August",2024,"August"]},l=void 0,o={permalink:"/posts/weekly/2024/week-34",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-34.md",source:"@site/weekly/2024/week-34.md",title:"Week 34 in Packit",description:"Week 34 (August 20st \u2013 August 27th)",date:"2024-08-27T00:00:00.000Z",formattedDate:"August 27, 2024",tags:[{label:"2024-August",permalink:"/posts/weekly/tags/2024-august"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"August",permalink:"/posts/weekly/tags/august"}],readingTime:.425,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Week 34 in Packit",date:"2024-08-27T00:00:00.000Z",authors:"flachman",tags:["2024-August","2024","August"]},prevItem:{title:"Week 36 in Packit",permalink:"/posts/weekly/2024/week-36"},nextItem:{title:"Week 33 in Packit",permalink:"/posts/weekly/2024/week-33"}},p={authorsImageUrls:[void 0]},c=[{value:"Week 34 (August 20st \u2013 August 27th)",id:"week-34-august-20st--august-27th",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"week-34-august-20st--august-27th"},"Week 34 (August 20st \u2013 August 27th)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull-from-upstream")," is now supported also without specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream_project_url")," in the configuration. For such cases, the upstream repository will not be detected and cloned during release syncing. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2398"},"packit#2398"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist-git init")," command now allows ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream-git-url")," not to be specified. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2387"},"packit#2387"),")"),(0,r.kt)("li",{parentName:"ul"},"You can newly tag builds of a package into a sidetag group by using ",(0,r.kt)("inlineCode",{parentName:"li"},"/packit koji-tag")," comment command. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2507"},"packit-service#2507"),")"),(0,r.kt)("li",{parentName:"ul"},"Thanks to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/LecrisUT"},"Cristian Le"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"epel-10")," is now correctly mapped to a ",(0,r.kt)("inlineCode",{parentName:"li"},"centos-stream-10")," when running tests. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2508"},"packit-service#2508"),")")))}m.isMDXComponent=!0}}]);