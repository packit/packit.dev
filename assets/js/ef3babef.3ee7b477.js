"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[24069],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,g=u["".concat(p,".").concat(y)]||u[y]||m[y]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},24549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(58168),n=(r(96540),r(15680));const o={title:"Packit workshop - Fedora Community Edition",date:new Date("2023-12-05T00:00:00.000Z"),authors:"mmassari",tags:["2023-December",2023,"December"]},i="Packit workshop - Fedora Community Edition",s={permalink:"/posts/weekly/2023/packit-workshop",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/packit-workshop.md",source:"@site/weekly/2023/packit-workshop.md",title:"Packit workshop - Fedora Community Edition",description:"We, the packit team, are happy to invite you to our upcoming workshop about pulling upstream releases to Fedora using Packit.",date:"2023-12-05T00:00:00.000Z",formattedDate:"December 5, 2023",tags:[{label:"2023-December",permalink:"/posts/weekly/tags/2023-december"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"December",permalink:"/posts/weekly/tags/december"}],readingTime:.965,hasTruncateMarker:!1,authors:[{name:"Maja Massarini",email:"mmassari@redhat.com",url:"https://github.com/majamassarini",imageURL:"https://github.com/majamassarini.png",key:"mmassari"}],frontMatter:{title:"Packit workshop - Fedora Community Edition",date:"2023-12-05T00:00:00.000Z",authors:"mmassari",tags:["2023-December","2023","December"]},prevItem:{title:"2023",permalink:"/posts/weekly/2023"},nextItem:{title:"2022",permalink:"/posts/weekly/2022"}},p={authorsImageUrls:[void 0]},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"We, the packit team, are happy to invite you to our upcoming workshop about pulling upstream releases to Fedora using Packit."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"When: Wed, Jan 10, 9:30 AM - Wed, Jan 10, 12:30 PM (GMT+1)")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Where: Online!")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Who should attend:")," Anyone who maintains a package in Fedora or EPEL and would like to automate syncing the upstream releases for it. The automation is most suitable for simple packages with straightforward update processes (e.g. without patches, or need to build in side-tags). It works without access to the upstream repository."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"No package?")," It\u2019s not an issue. The workshop can help you understand the Fedora release process and the services involved. During the workshop, you can help someone else automate their package or ask someone around if you can help with the maintenance (that\u2019s usually very welcome!). You can also bring an orphaned package back to life!"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Can\u2019t make it this time?")," You can also follow our ",(0,n.yg)("a",{parentName:"p",href:"https://packit.dev/docs/fedora-releases-guide"},"documentation")," and ask for help in case of any issue: #packit:fedora.im (Matrix)."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"If you want to join us please fill ",(0,n.yg)("a",{parentName:"strong",href:"https://forms.gle/WnEN3KXnhRS2cf1E7"},"this form")," or contact us on Matrix, and we will send you further details!")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Looking forward to seeing you!")))}m.isMDXComponent=!0}}]);