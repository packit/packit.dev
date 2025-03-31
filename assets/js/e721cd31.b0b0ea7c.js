"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[61713],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>k});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),g=i,k=m["".concat(l,".").concat(g)]||m[g]||u[g]||n;return r?a.createElement(k,o(o({ref:t},s),{},{components:r})):a.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},94001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var a=r(58168),i=(r(96540),r(15680));const n={title:"Week 40 in Packit",date:new Date("2024-10-07T00:00:00.000Z"),authors:"mfocko",tags:["2024-October",2024,"October"]},o=void 0,c={permalink:"/posts/weekly/2024/week-40",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-40.md",source:"@site/weekly/2024/week-40.md",title:"Week 40 in Packit",description:"Week 40 (October 1st \u2013 October 7th)",date:"2024-10-07T00:00:00.000Z",formattedDate:"October 7, 2024",tags:[{label:"2024-October",permalink:"/posts/weekly/tags/2024-october"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"October",permalink:"/posts/weekly/tags/october"}],readingTime:.85,hasTruncateMarker:!1,authors:[{name:"Matej Focko",email:"mfocko@redhat.com",url:"https://github.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mfocko"}],frontMatter:{title:"Week 40 in Packit",date:"2024-10-07T00:00:00.000Z",authors:"mfocko",tags:["2024-October","2024","October"]},prevItem:{title:"Week 41 in Packit",permalink:"/posts/weekly/2024/week-41"},nextItem:{title:"Week 39 in Packit",permalink:"/posts/weekly/2024/week-39"}},l={authorsImageUrls:[void 0]},p=[{value:"Week 40 (October 1st \u2013 October 7th)",id:"week-40-october-1st--october-7th",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(m,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"week-40-october-1st--october-7th"},"Week 40 (October 1st \u2013 October 7th)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"packit validate-config")," now checks for the existence of the downstream package. (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2436"},"packit#2436"),")"),(0,i.yg)("li",{parentName:"ul"},"Packit now allows building VM images via CLI without any Copr repository specified. (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2434"},"packit#2434"),")"),(0,i.yg)("li",{parentName:"ul"},"We have unified interface of passing resolved bugs (e.g., Bugzillas as of now) to Packit CLI and via comments. Both CLI and comments now use ",(0,i.yg)("inlineCode",{parentName:"li"},"--resolve-bug")," switch (comments accept comma-separated list of bugs, CLI accepts the switch multiple times (also ",(0,i.yg)("inlineCode",{parentName:"li"},"-b"),")).\n(",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2428"},"packit#2428")," and ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2560"},"packit-service#2560"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"packit init")," now adds working directories that are used in ",(0,i.yg)("inlineCode",{parentName:"li"},"packit prepare-sources")," into the ",(0,i.yg)("inlineCode",{parentName:"li"},".gitignore")," file in the same directory where Packit config resides. (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2431"},"packit#2431"),")"),(0,i.yg)("li",{parentName:"ul"},"Before triggering the non-scratch Koji builds, we now check whether there is not already a build in progress or completed for the same NVR. (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2559"},"packit-service#2559"),")"),(0,i.yg)("li",{parentName:"ul"},"We have improved the error reporting for failed downstream jobs. (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2544"},"packit-service#2544"),")"),(0,i.yg)("li",{parentName:"ul"},"We have fixed an issue that caused inconsistencies with the expected behaviour stated by the documentation when adding duplicitous reactions to GitLab comments. (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/ogr/pull/861"},"ogr#861"),")")))}u.isMDXComponent=!0}}]);