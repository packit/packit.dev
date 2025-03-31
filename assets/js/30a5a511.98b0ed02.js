"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[38104],{13086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var i=r(58168),o=(r(96540),r(15680));const n={title:"Working with source-git",date:new Date("2020-06-24T22:59:59.000Z"),sidebar_position:10},a="Working with source-git",c={unversionedId:"work-with-source-git/index",id:"work-with-source-git/index",title:"Working with source-git",description:"For the design concept of source-git, please read here. These pages are focused on how to work",source:"@site/source-git/work-with-source-git/index.md",sourceDirName:"work-with-source-git",slug:"/work-with-source-git/",permalink:"/source-git/work-with-source-git/",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/source-git/work-with-source-git/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Working with source-git",date:"2020-06-24T22:59:59.000Z",sidebar_position:10},sidebar:"autogenerated",previous:{title:"Service integration for CentOS Stream shut down",permalink:"/source-git/shutdown"},next:{title:"Create a source-git repo",permalink:"/source-git/work-with-source-git/create-source-git"}},s={},u=[],g={toc:u},l="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(l,(0,i.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"working-with-source-git"},"Working with source-git"),(0,o.yg)("p",null,"For the design concept of source-git, please ",(0,o.yg)("a",{parentName:"p",href:"/source-git/design"},"read here"),". These pages are focused on how to work\nsource-git repositories using the ",(0,o.yg)("inlineCode",{parentName:"p"},"packit")," CLI."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/create-source-git"},"Create a source-git repo")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/update-spec"},"Updating a spec file")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/pull-upstream-fixes"},"Pulling fixes from upstream")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/control-patch-generation"},"Controlling patch generation")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/build-locally"},"Building current source-git checkout locally")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/propose-to-dist-git"},"Proposing your source-git content to dist-git")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/sync-from-dist-git"},"Sync back changes made in dist-git")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"work-with-source-git/fix-diverged-history"},"Fix diverged history"))))}p.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>f});var i=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},g=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,f=l["".concat(s,".").concat(d)]||l[d]||p[d]||n;return r?i.createElement(f,a(a({ref:t},g),{},{components:r})):i.createElement(f,a({ref:t},g))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<n;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);