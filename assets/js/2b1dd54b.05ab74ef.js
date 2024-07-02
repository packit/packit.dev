"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[86008],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),k=i,m=u["".concat(p,".").concat(k)]||u[k]||h[k]||n;return a?r.createElement(m,l(l({ref:t},s),{},{components:a})):r.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},40143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={title:"February 2023",date:new Date("2023-02-13T14:00:00.000Z"),tags:[2023]},l=void 0,o={permalink:"/posts/weekly/February-2023",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/February-2023.md",source:"@site/weekly/February-2023.md",title:"February 2023",description:"Weeks 5\u20136 (February 1st \u2013 February 13th)",date:"2023-02-13T14:00:00.000Z",formattedDate:"February 13, 2023",tags:[{label:"2023",permalink:"/posts/weekly/tags/2023"}],readingTime:2.255,hasTruncateMarker:!1,authors:[],frontMatter:{title:"February 2023",date:"2023-02-13T14:00:00.000Z",tags:["2023"]},prevItem:{title:"March 2023",permalink:"/posts/weekly/March-2023"},nextItem:{title:"January 2023",permalink:"/posts/weekly/January-2023"}},p={authorsImageUrls:[]},c=[{value:"Weeks 5\u20136 (February 1st \u2013 February 13th)",id:"weeks-56-february-1st--february-13th",level:2},{value:"Week 7 (February 14th \u2013 February 20th)",id:"week-7-february-14th--february-20th",level:2},{value:"Week 8 (February 21st \u2013 February 27th)",id:"week-8-february-21st--february-27th",level:2},{value:"Week 9 (February 28th \u2013 March 6th)",id:"week-9-february-28th--march-6th",level:2}],s={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"weeks-56-february-1st--february-13th"},"Weeks 5\u20136 (February 1st \u2013 February 13th)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can now use ",(0,i.kt)("inlineCode",{parentName:"li"},"--srpm")," option with the ",(0,i.kt)("inlineCode",{parentName:"li"},"packit build locally")," CLI command. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1810"},"packit#1810"),")"),(0,i.kt)("li",{parentName:"ul"},"You will newly see news about Packit as a footer of the GitHub check runs summary. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1881"},"packit-service#1881"),")"),(0,i.kt)("li",{parentName:"ul"},"Packit now groups related builds and test runs (e.g. triggered by the same event, just different chroots) together. In the future, this will allow better presentation of the overall pipelines (e.g. in the dashboard). We now also create database entries before sending requests to external service (e.g. Testing Farm), therefore failures will be more visible in the dashboard. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1787"},"packit-service#1787"),")")),(0,i.kt)("h2",{id:"week-7-february-14th--february-20th"},"Week 7 (February 14th \u2013 February 20th)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Packit now provides ",(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_PROJECT_VERSION")," environment variable when running ",(0,i.kt)("inlineCode",{parentName:"li"},"changelog-entry")," action. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1853"},"packit#1853"),")"),(0,i.kt)("li",{parentName:"ul"},"Packit CLI now requires bodhi in version 7.0.0 at minimum. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1844"},"packit#1844"),")"),(0,i.kt)("li",{parentName:"ul"},"You can now specify branches for a job triggered by a commit with a regex. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1909"},"packit-service#1909"),")")),(0,i.kt)("h2",{id:"week-8-february-21st--february-27th"},"Week 8 (February 21st \u2013 February 27th)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packit validate-config")," CLI command now provides details about errors when it cannot parse the config file. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1861"},"packit#1861"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--update-release"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"--no-update-release")," CLI flag now affects only ",(0,i.kt)("inlineCode",{parentName:"li"},"Release"),", not ",(0,i.kt)("inlineCode",{parentName:"li"},"Version"),". (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1857"},"packit#1857"),")"),(0,i.kt)("li",{parentName:"ul"},"Packit does fewer API calls when searching for the package configuration file in remote repositories. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1846"},"packit#1846"),")"),(0,i.kt)("li",{parentName:"ul"},"Commit statuses/check names will now contain the name of the branch or release for the build and test jobs with ",(0,i.kt)("inlineCode",{parentName:"li"},"commit")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"release")," trigger.\nThis will prevent the collision of the names. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1920"},"packit-service#1920"),")")),(0,i.kt)("h2",{id:"week-9-february-28th--march-6th"},"Week 9 (February 28th \u2013 March 6th)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aliases logic was updated to account for the upcoming Fedora release (Bodhi now marks such release as ",(0,i.kt)("inlineCode",{parentName:"li"},"frozen"),"). From now on, Fedora 38 updates will be created even when the release is frozen. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1863"},"packit#1863"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packit validate-config")," now correctly checks glob-patterns in 'files_to_sync' (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1865"},"packit#1865"),") and provides details about errors when it cannot parse a config file. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1861"},"packit#1861"),")"),(0,i.kt)("li",{parentName:"ul"},"Pull-from-upstream jobs are now displayed on our dashboard \ud83e\udd73 ",(0,i.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"https://dashboard.packit.dev/jobs/pull-from-upstreams")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1951"},"packit-service#1951"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1939"},"packit-service#1939"),")"),(0,i.kt)("li",{parentName:"ul"},"Packit will no longer automatically request access to the forks on GitLab. This will prevent us from spamming one-time contributors with requesting the access, whereas the regular contributors can add Packit following the instructions from the comments on the MRs, so they can receive the results of Packit pipeline right from the commit statuses. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1946"},"packit-service#1946"),")"),(0,i.kt)("li",{parentName:"ul"},'Packit will retry tasks that are interrupted by a worker shutdown. This should improve throughput and reduce cases where there is no outcome, i.e. "builds should have been done but nothing happened". (',(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/1935"},"packit-service#1935"),")"),(0,i.kt)("li",{parentName:"ul"},"OGR now understands a few community-hosted GitLab instances that could not be determined automatically from the hostname. Thanks to that, you don't need to hardcode these instances to be mapped correctly. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/ogr/pull/775"},"ogr#775"),")")),(0,i.kt)("p",null,"Thank you, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SpyTec"},"@SpyTec")," for so many ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit/dashboard/pulls?q=is%3Apr+author%3ASpyTec"},"wonderful changes in our dasbhoard"),"."))}h.isMDXComponent=!0}}]);