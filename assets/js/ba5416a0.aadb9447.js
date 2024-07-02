"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[15024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,k=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},65980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Week 13 in Packit",date:new Date("2024-04-02T00:00:00.000Z"),authors:"nforro",tags:["2024-March",2024,"March"]},i=void 0,c={permalink:"/posts/weekly/2024/week-13",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2024/week-13.md",source:"@site/weekly/2024/week-13.md",title:"Week 13 in Packit",description:"Week 13 (March 27th \u2013 April 2nd)",date:"2024-04-02T00:00:00.000Z",formattedDate:"April 2, 2024",tags:[{label:"2024-March",permalink:"/posts/weekly/tags/2024-march"},{label:"2024",permalink:"/posts/weekly/tags/2024"},{label:"March",permalink:"/posts/weekly/tags/march"}],readingTime:.475,hasTruncateMarker:!1,authors:[{name:"Nikola Forr\xf3",email:"nforro@redhat.com",url:"https://github.com/nforro",imageURL:"https://github.com/nforro.png",key:"nforro"}],frontMatter:{title:"Week 13 in Packit",date:"2024-04-02T00:00:00.000Z",authors:"nforro",tags:["2024-March","2024","March"]},prevItem:{title:"Week 14 in Packit",permalink:"/posts/weekly/2024/week-14"},nextItem:{title:"Week 12 in Packit",permalink:"/posts/weekly/2024/week-12"}},p={authorsImageUrls:[void 0]},l=[{value:"Week 13 (March 27th \u2013 April 2nd)",id:"week-13-march-27th--april-2nd",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-13-march-27th--april-2nd"},"Week 13 (March 27th \u2013 April 2nd)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The default behaviour of changelog entry generation has been changed to comply with Fedora Packaging Guidelines\n(see the relevant Fedora Packaging Committee ",(0,a.kt)("a",{parentName:"p",href:"https://pagure.io/packaging-committee/issue/1339"},"discussion"),').\nFrom now on, the default changelog entry is "- Update to version \\<version',">",'".\nUsers can still affect this behaviour using custom commands in the ',(0,a.kt)("inlineCode",{parentName:"p"},"changelog-entry")," action\nor with the ",(0,a.kt)("inlineCode",{parentName:"p"},"copy_upstream_release_description")," configuration option.\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/pull/2253"},"packit#2253"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"',"[packit]",'" prefix has been removed from default dist-git commit message titles in order to prevent\nunnecessary noise in autogenerated changelog. Users can override this using the ',(0,a.kt)("inlineCode",{parentName:"p"},"commit-message")," action.\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/pull/2263"},"packit#2263"),")"))))}u.isMDXComponent=!0}}]);