"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Week 39 in Packit",date:new Date("2023-10-02T00:00:00.000Z"),tags:["2023-September",2023,"September"]},o=void 0,l={permalink:"/posts/weekly/2023/week-39",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/week-39.md",source:"@site/weekly/2023/week-39.md",title:"Week 39 in Packit",description:"Week 39 (September 26th \u2013 October 2nd)",date:"2023-10-02T00:00:00.000Z",formattedDate:"October 2, 2023",tags:[{label:"2023-September",permalink:"/posts/weekly/tags/2023-september"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"September",permalink:"/posts/weekly/tags/september"}],readingTime:.74,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Week 39 in Packit",date:"2023-10-02T00:00:00.000Z",tags:["2023-September","2023","September"]},nextItem:{title:"Week 38 in Packit",permalink:"/posts/weekly/2023/week-38"}},p={authorsImageUrls:[]},c=[{value:"Week 39 (September 26th \u2013 October 2nd)",id:"week-39-september-26th--october-2nd",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-39-september-26th--october-2nd"},"Week 39 (September 26th \u2013 October 2nd)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When using packit CLI you can now specify bugs resolved by an update by ",(0,a.kt)("inlineCode",{parentName:"li"},"-b")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--resolve-bug")," option for ",(0,a.kt)("inlineCode",{parentName:"li"},"propose-downstream")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"pull-from-upstream")," commands. The values will be added by default to the changelog and commit message and provided in ",(0,a.kt)("inlineCode",{parentName:"li"},"commit-message")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"changelog-entry")," actions as ",(0,a.kt)("inlineCode",{parentName:"li"},"PACKIT_RESOLVED_BUGS")," env variable. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2094"},"packit#2094"),")"),(0,a.kt)("li",{parentName:"ul"},"Packit-service now automatically adds bugzilla created by Upstream Release Monitoring as ",(0,a.kt)("inlineCode",{parentName:"li"},"- Resolves {bugzilla} ")," to the changelog (or commit if autochangelog is used) and provides the value in ",(0,a.kt)("inlineCode",{parentName:"li"},"commit-message")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"changelog-entry")," actions as ",(0,a.kt)("inlineCode",{parentName:"li"},"PACKIT_RESOLVED_BUGS")," env variable. When retriggering the ",(0,a.kt)("inlineCode",{parentName:"li"},"pull-from-upstream")," from comment, one can also specify the bug(s) as ",(0,a.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream --resolved-bugs rhbz#123,rhbz#125")," and Packit will do the same. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2193"},"packit-service#2193"),")"),(0,a.kt)("li",{parentName:"ul"},"You can now configure ",(0,a.kt)("inlineCode",{parentName:"li"},"notifications.failure_comment.message")," also for downstream jobs, where the configured message will be used as an extension of the comment added by default by Packit. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2199"},"packit-service#2199"),")")))}u.isMDXComponent=!0}}]);