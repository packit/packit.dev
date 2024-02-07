"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(r),k=n,d=s["".concat(l,".").concat(k)]||s[k]||u[k]||i;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},57200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Week 49 in Packit",date:new Date("2023-12-11T00:00:00.000Z"),authors:"mmassari",tags:["2023-December",2023,"December"]},o=void 0,c={permalink:"/posts/weekly/2023/week-49",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/week-49.md",source:"@site/weekly/2023/week-49.md",title:"Week 49 in Packit",description:"Week 49 (December 5th \u2013 December 11th)",date:"2023-12-11T00:00:00.000Z",formattedDate:"December 11, 2023",tags:[{label:"2023-December",permalink:"/posts/weekly/tags/2023-december"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"December",permalink:"/posts/weekly/tags/december"}],readingTime:.26,hasTruncateMarker:!1,authors:[{name:"Maja Massarini",email:"mmassari@redhat.com",url:"https://github.com/majamassarini",imageURL:"https://github.com/majamassarini.png",key:"mmassari"}],frontMatter:{title:"Week 49 in Packit",date:"2023-12-11T00:00:00.000Z",authors:"mmassari",tags:["2023-December","2023","December"]},prevItem:{title:"Week 50 in Packit",permalink:"/posts/weekly/2023/week-50"},nextItem:{title:"Packit workshop - Fedora Community Edition",permalink:"/posts/weekly/2023/packit-workshop"}},l={authorsImageUrls:[void 0]},p=[{value:"Week 49 (December 5th \u2013 December 11th)",id:"week-49-december-5th--december-11th",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"week-49-december-5th--december-11th"},"Week 49 (December 5th \u2013 December 11th)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We have introduced new configuration options ",(0,n.kt)("inlineCode",{parentName:"p"},"test_command.default_labels")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"test_command.default_identifier")," that are used by default when running ",(0,n.kt)("inlineCode",{parentName:"p"},"/packit test")," comment command without any arguments (instead of specifying them via ",(0,n.kt)("inlineCode",{parentName:"p"},"--labels"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"--identifier"),"). (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2270"},"packit-service#2270"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We have fixed a bug that GithubRelease.url returned an API URL. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/ogr/pull/824"},"ogr#824"),")"))))}u.isMDXComponent=!0}}]);