"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[71420],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,m=s["".concat(l,".").concat(f)]||s[f]||y[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(58168),n=(r(96540),r(15680));const i={title:"Week 2 in Packit",date:new Date("2024-01-15T00:00:00.000Z"),authors:"lbarczio",tags:["2024-January",2024,"January"]},o=void 0,c={permalink:"/posts/weekly/2024/week-2",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-2.md",source:"@site/weekly/2024/week-2.md",title:"Week 2 in Packit",description:"Week 2 (January 9th \u2013 January 15th)",date:"2024-01-15T00:00:00.000Z",formattedDate:"January 15, 2024",tags:[{label:"2024-January",permalink:"/posts/weekly/tags/2024-january"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"January",permalink:"/posts/weekly/tags/january"}],readingTime:.195,hasTruncateMarker:!1,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Week 2 in Packit",date:"2024-01-15T00:00:00.000Z",authors:"lbarczio",tags:["2024-January","2024","January"]},prevItem:{title:"Week 3 in Packit",permalink:"/posts/weekly/2024/week-3"},nextItem:{title:"Week 1 in Packit",permalink:"/posts/weekly/2024/week-1"}},l={authorsImageUrls:[void 0]},u=[{value:"Week 2 (January 9th \u2013 January 15th)",id:"week-2-january-9th--january-15th",level:2}],p={toc:u},s="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(s,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"week-2-january-9th--january-15th"},"Week 2 (January 9th \u2013 January 15th)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"We have fixed the behaviour of identifying the most recent git tag. This has previously caused issues\nwhen building SRPMs for projects with different version tags in different branches.\n(",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2302"},"packit-service#2302"),")")))}y.isMDXComponent=!0}}]);