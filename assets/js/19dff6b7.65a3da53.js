"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[87130],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||y[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={title:"Week 30 in Packit",date:new Date("2024-07-29T00:00:00.000Z"),authors:"mfocko",tags:["2024-July",2024,"July"]},o=void 0,l={permalink:"/posts/weekly/2024/week-30",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-30.md",source:"@site/weekly/2024/week-30.md",title:"Week 30 in Packit",description:"Week 30 (July 23rd \u2013 July 29th)",date:"2024-07-29T00:00:00.000Z",formattedDate:"July 29, 2024",tags:[{label:"2024-July",permalink:"/posts/weekly/tags/2024-july"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"July",permalink:"/posts/weekly/tags/july"}],readingTime:.54,hasTruncateMarker:!1,authors:[{name:"Matej Focko",email:"mfocko@redhat.com",url:"https://github.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mfocko"}],frontMatter:{title:"Week 30 in Packit",date:"2024-07-29T00:00:00.000Z",authors:"mfocko",tags:["2024-July","2024","July"]},prevItem:{title:"Week 31 in Packit",permalink:"/posts/weekly/2024/week-31"},nextItem:{title:"Week 29 in Packit",permalink:"/posts/weekly/2024/week-29"}},c={authorsImageUrls:[void 0]},p=[{value:"Week 30 (July 23rd \u2013 July 29th)",id:"week-30-july-23rd--july-29th",level:2}],s={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"week-30-july-23rd--july-29th"},"Week 30 (July 23rd \u2013 July 29th)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"packit pull-from-upstream")," now allows omitting ",(0,a.yg)("inlineCode",{parentName:"li"},"upstream_project_url")," in the configuration in which case the interaction with the upstream repository is skipped during release syncing. (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2354"},"packit#2354"),")"),(0,a.yg)("li",{parentName:"ul"},"We have added the initial version of functionality for running scans in OpenScanHub. You can read more about this functionality\n",(0,a.yg)("a",{parentName:"li",href:"https://packit.dev/docs/configuration#osh_diff_scan_after_copr_build"},"here"),". (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2472"},"packit-service#2472"),")"),(0,a.yg)("li",{parentName:"ul"},"Added a new configuration option ",(0,a.yg)("inlineCode",{parentName:"li"},"sync_test_job_statuses_with_builds")," that controls whether test job statuses are updated together with their corresponding build job statuses. When set to ",(0,a.yg)("inlineCode",{parentName:"li"},"false"),", while tests jobs are waiting for their corresponding build jobs to finish, their statuses remain in pending state and only build job statuses are updated. (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2470"},"packit-service#2470"),")")))}y.isMDXComponent=!0}}]);