"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,b=s["".concat(l,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(b,o(o({ref:t},m),{},{components:r})):n.createElement(b,o({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 50 in Packit",author:"nforro",date:new Date("2023-12-18T00:00:00.000Z"),tags:["2023-December",2023,"December"]},o=void 0,c={permalink:"/posts/weekly/2023/week-50",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/week-50.md",source:"@site/weekly/2023/week-50.md",title:"Week 50 in Packit",description:"Week 50 (December 12th \u2013 December 18th)",date:"2023-12-18T00:00:00.000Z",formattedDate:"December 18, 2023",tags:[{label:"2023-December",permalink:"/posts/weekly/tags/2023-december"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"December",permalink:"/posts/weekly/tags/december"}],readingTime:.315,hasTruncateMarker:!1,authors:[{name:"nforro"}],frontMatter:{title:"Week 50 in Packit",author:"nforro",date:"2023-12-18T00:00:00.000Z",tags:["2023-December","2023","December"]},nextItem:{title:"Week 49 in Packit",permalink:"/posts/weekly/2023/week-49"}},l={authorsImageUrls:[void 0]},p=[{value:"Week 50 (December 12th \u2013 December 18th)",id:"week-50-december-12th--december-18th",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-50-december-12th--december-18th"},"Week 50 (December 12th \u2013 December 18th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have fixed a bug preventing a release from being synced downstream if the changelog to be set is empty.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2183"},"packit#2183"),")"),(0,a.kt)("li",{parentName:"ul"},"We have fixed a bug of not running Koji builds for Packit dist-git PRs with multiple commits if the last commit\nof the PR did not contain a spec file change.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2275"},"packit-service#2275"),")")))}u.isMDXComponent=!0}}]);