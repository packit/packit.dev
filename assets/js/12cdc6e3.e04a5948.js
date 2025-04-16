"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[37104],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const i={title:"Fedora Source-git"},c="Fedora Source-git Bot Deployment Specifics",a={unversionedId:"specifics/fedora-source-git",id:"specifics/fedora-source-git",title:"Fedora Source-git",description:"Production",source:"@site/deployment/specifics/fedora-source-git.md",sourceDirName:"specifics",slug:"/specifics/fedora-source-git",permalink:"/deployment/specifics/fedora-source-git",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/specifics/fedora-source-git.md",tags:[],version:"current",frontMatter:{title:"Fedora Source-git"},sidebar:"autogenerated",previous:{title:"Clusters",permalink:"/deployment/specifics/clusters"},next:{title:"Packit Service",permalink:"/deployment/specifics/packit-service"}},p={},s=[{value:"Production",id:"production",level:2},{value:"Staging",id:"staging",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"fedora-source-git-bot-deployment-specifics"},"Fedora Source-git Bot Deployment Specifics"),(0,o.yg)("h2",{id:"production"},"Production"),(0,o.yg)("p",null,"Production instance runs in ",(0,o.yg)("inlineCode",{parentName:"p"},"fedora-source-git-prod")," project @ ",(0,o.yg)("inlineCode",{parentName:"p"},"auto-prod")," cluster.\nIt serves ",(0,o.yg)("a",{parentName:"p",href:"https://gitlab.com/fedora/src/"},"gitlab.com/fedora/src/ repos"),'.\nA group webhook is set to send "Merge request events" to ',(0,o.yg)("a",{parentName:"p",href:"https://prod.fedora-source-git.packit.dev/api/webhooks/gitlab"},"API"),"."),(0,o.yg)("p",null,"Example:\n",(0,o.yg)("a",{parentName:"p",href:"https://src.fedoraproject.org/rpms/python-httpretty/pull-request/19"},"dist-git MR"),"\ncreated from a\n",(0,o.yg)("a",{parentName:"p",href:"https://gitlab.com/fedora/src/python-httpretty/-/merge_requests/2"},"source-git MR"),"."),(0,o.yg)("h2",{id:"staging"},"Staging"),(0,o.yg)("p",null,"There's no staging instance yet."))}d.isMDXComponent=!0}}]);