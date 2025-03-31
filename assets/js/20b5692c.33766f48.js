"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[83896],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const s={title:"status",date:new Date("2021-03-18T07:53:12.000Z"),sidebar_position:15},i="packit status",o={unversionedId:"cli/status",id:"cli/status",title:"status",description:"This command displays latest information related to the project - downstream",source:"@site/docs/cli/status.md",sourceDirName:"cli",slug:"/cli/status",permalink:"/docs/cli/status",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/status.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"status",date:"2021-03-18T07:53:12.000Z",sidebar_position:15},sidebar:"autogenerated",previous:{title:"sync-from-downstream",permalink:"/docs/cli/sync-from-downstream"},next:{title:"push-updates",permalink:"/docs/cli/push-updates"}},l={},c=[{value:"Help",id:"help",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"packit-status"},(0,a.yg)("inlineCode",{parentName:"h1"},"packit status")),(0,a.yg)("p",null,"This command displays latest information related to the project - downstream\npull requests, upstream releases, builds in Koji and Copr and updates in Bodhi."),(0,a.yg)("h2",{id:"help"},"Help"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Usage: packit status [OPTIONS] [PATH_OR_URL]\n\n  Display status.\n\n  - latest downstream pull requests\n  - versions from all downstream branches\n  - latest upstream releases\n  - latest builds in Koji\n  - latest builds in Copr\n  - latest updates in Bodhi\n\nOptions:\n  -p, --package TEXT  Package to update, if more than one available, like in a\n                      monorepo configuration. Use it multiple times to select\n                      multiple packages.Defaults to all the packages listed\n                      inside the config.\n  -h, --help          Show this message and exit.\n")))}d.isMDXComponent=!0}}]);