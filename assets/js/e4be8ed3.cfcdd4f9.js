"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[70133],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),y=a,f=s["".concat(c,".").concat(y)]||s[y]||m[y]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},66313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"Week 24 in Packit",date:new Date("2024-06-18T00:00:00.000Z"),authors:"flachman",tags:["2024-June",2024,"June"]},o=void 0,l={permalink:"/posts/weekly/2024/week-24",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-24.md",source:"@site/weekly/2024/week-24.md",title:"Week 24 in Packit",description:"Week 24 (June 11th \u2013 June 17th)",date:"2024-06-18T00:00:00.000Z",formattedDate:"June 18, 2024",tags:[{label:"2024-June",permalink:"/posts/weekly/tags/2024-june"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"June",permalink:"/posts/weekly/tags/june"}],readingTime:.27,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Week 24 in Packit",date:"2024-06-18T00:00:00.000Z",authors:"flachman",tags:["2024-June","2024","June"]},prevItem:{title:"Week 25 in Packit",permalink:"/posts/weekly/2024/week-25"},nextItem:{title:"Week 22 in Packit",permalink:"/posts/weekly/2024/week-22"}},c={authorsImageUrls:[void 0]},p=[{value:"Week 24 (June 11th \u2013 June 17th)",id:"week-24-june-11th--june-17th",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"week-24-june-11th--june-17th"},"Week 24 (June 11th \u2013 June 17th)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"We have fixed a bug that caused inconsistency between the promised environment variables (from the docs) and the environment that has been actually provided. Now you should have access to ",(0,a.yg)("inlineCode",{parentName:"li"},"PACKIT_UPSTREAM_REPO")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"PACKIT_DOWNSTREAM_REPO")," (in case of ",(0,a.yg)("inlineCode",{parentName:"li"},"propose_downstream")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"pull_from_upstream")," jobs), in the ",(0,a.yg)("inlineCode",{parentName:"li"},"post-upstream-clone")," action. (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2327"},"packit#2327"),")")))}m.isMDXComponent=!0}}]);