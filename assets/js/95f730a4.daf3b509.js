"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[31922],{13006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const i={title:"Week 36 in Packit",date:new Date("2024-09-09T00:00:00.000Z"),authors:"lbarczio",tags:["2024-September",2024,"September"]},o=void 0,p={permalink:"/posts/weekly/2024/week-36",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-36.md",source:"@site/weekly/2024/week-36.md",title:"Week 36 in Packit",description:"Week 36 (September 3rd \u2013 September 9th)",date:"2024-09-09T00:00:00.000Z",formattedDate:"September 9, 2024",tags:[{label:"2024-September",permalink:"/posts/weekly/tags/2024-september"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"September",permalink:"/posts/weekly/tags/september"}],readingTime:.445,hasTruncateMarker:!1,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Week 36 in Packit",date:"2024-09-09T00:00:00.000Z",authors:"lbarczio",tags:["2024-September","2024","September"]},prevItem:{title:"Week 37 in Packit",permalink:"/posts/weekly/2024/week-37"},nextItem:{title:"Week 34 in Packit",permalink:"/posts/weekly/2024/week-34"}},l={authorsImageUrls:[void 0]},c=[{value:"Week 36 (September 3rd \u2013 September 9th)",id:"week-36-september-3rd--september-9th",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"week-36-september-3rd--september-9th"},"Week 36 (September 3rd \u2013 September 9th)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Packit now supports passing custom arguments to various static analyzers through ",(0,a.yg)("inlineCode",{parentName:"li"},"--csmock-args")," CLI option and ",(0,a.yg)("inlineCode",{parentName:"li"},"csmock_args")," configuration. (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2402"},"packit#2402"),")"),(0,a.yg)("li",{parentName:"ul"},"When syncing a new release, Packit can now avoid diverging git branches by reusing the commit from one branch when opening pull requests into other branches. (These pull requests can be merged in fast-forward mode.)\nUse the new syntax for ",(0,a.yg)("inlineCode",{parentName:"li"},"dist_git_branches")," as in this example to utilise this functionality:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n  "rawhide": {\n    "fast_forward_merge_into": ["f40"]\n   },\n  "fedora-stable": {}\n}\n')),(0,a.yg)("p",null,"(",(0,a.yg)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2478"},"packit-service#2478"),")"))}u.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,y=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);