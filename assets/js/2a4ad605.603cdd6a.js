"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(r),k=n,h=s["".concat(c,".").concat(k)]||s[k]||u[k]||i;return r?a.createElement(h,o(o({ref:t},m),{},{components:r})):a.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},30639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"Week 50 in Packit",date:new Date("2024-12-16T00:00:00.000Z"),authors:"mfocko",tags:["2024-December",2024,"December"]},o=void 0,p={permalink:"/posts/weekly/2024/week-50",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-50.md",source:"@site/weekly/2024/week-50.md",title:"Week 50 in Packit",description:"Week 50 (December 10th \u2013 December 16th)",date:"2024-12-16T00:00:00.000Z",formattedDate:"December 16, 2024",tags:[{label:"2024-December",permalink:"/posts/weekly/tags/2024-december"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"December",permalink:"/posts/weekly/tags/december"}],readingTime:.69,hasTruncateMarker:!1,authors:[{name:"Matej Focko",email:"mfocko@redhat.com",url:"https://github.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mfocko"}],frontMatter:{title:"Week 50 in Packit",date:"2024-12-16T00:00:00.000Z",authors:"mfocko",tags:["2024-December","2024","December"]},nextItem:{title:"Week 48 in Packit",permalink:"/posts/weekly/2024/week-48"}},c={authorsImageUrls:[void 0]},l=[{value:"Week 50 (December 10th \u2013 December 16th)",id:"week-50-december-10th--december-16th",level:2}],m={toc:l},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"week-50-december-10th--december-16th"},"Week 50 (December 10th \u2013 December 16th)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We have added a ",(0,n.kt)("inlineCode",{parentName:"p"},"--resultdir")," option for building in mock via our CLI\n(",(0,n.kt)("inlineCode",{parentName:"p"},"packit build in-mock"),").\n(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/pull/2475"},"packit#2475"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/specfile"},"specfile")," users, there is a new\nconvenience method ",(0,n.kt)("inlineCode",{parentName:"p"},"Sections.get_or_create()")," that allows you to manipulate\na section without checking if it exists first. If a section doesn't exist, it\nwill be appended to the end. For example, this will work properly even on\nspec files without ",(0,n.kt)("inlineCode",{parentName:"p"},"%changelog"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'with spec.sections() as sections:\n    changelog = sections.get_or_create("changelog")\n    changelog[:] = ["%autochangelog"]\n')),(0,n.kt)("p",{parentName:"li"},"(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/specfile/pull/441"},"specfile#441"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We have also switched our base images from ",(0,n.kt)("em",{parentName:"p"},"CentOS 9 Stream")," to ",(0,n.kt)("em",{parentName:"p"},"Fedora 41")," to\nallow you using the features from the latest ",(0,n.kt)("em",{parentName:"p"},"rpm 4.20"),".\n(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/deployment/pull/622"},"deployment#622"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We have unified status names for VM Image builds.\n(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2679"},"packit-service#2679"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We have started building ",(0,n.kt)("a",{parentName:"p",href:"https://quay.io/organization/packit"},"our container images"),"\nfor alternative architectures.\n(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/pull/2675"},"packit-service#2675"),")"))))}u.isMDXComponent=!0}}]);