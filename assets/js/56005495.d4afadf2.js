"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[9738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?i.createElement(b,l(l({ref:t},d),{},{components:n})):i.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"build",date:new Date("2022-07-15T00:00:00.000Z"),chapter:!1,sidebar_position:40},l="packit build",o={unversionedId:"cli/build/index",id:"cli/build/index",title:"build",description:"Subcommand that groups all RPM build related commands together.",source:"@site/docs/cli/build/index.md",sourceDirName:"cli/build",slug:"/cli/build/",permalink:"/docs/cli/build/",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/build/index.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"build",date:"2022-07-15T00:00:00.000Z",chapter:!1,sidebar_position:40},sidebar:"autogenerated",previous:{title:"validate-config",permalink:"/docs/cli/validate-config"},next:{title:"in-koji",permalink:"/docs/cli/build/koji"}},c={},p=[{value:"Possible ways to build an RPM",id:"possible-ways-to-build-an-rpm",level:2},{value:"Help",id:"help",level:2}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packit-build"},(0,r.kt)("inlineCode",{parentName:"h1"},"packit build")),(0,r.kt)("p",null,"Subcommand that groups all RPM build related commands together."),(0,r.kt)("h2",{id:"possible-ways-to-build-an-rpm"},"Possible ways to build an RPM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/build/local"},(0,r.kt)("inlineCode",{parentName:"a"},"locally"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/build/mock"},(0,r.kt)("inlineCode",{parentName:"a"},"in-mock"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/build/copr"},(0,r.kt)("inlineCode",{parentName:"a"},"in-copr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/build/koji"},(0,r.kt)("inlineCode",{parentName:"a"},"in-koji"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/build/in-image-builder"},(0,r.kt)("inlineCode",{parentName:"a"},"in-image-builder")))),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage: packit build [OPTIONS] COMMAND [ARGS]...\n\n  Subcommand to collect build related functionality\n\nOptions:\n  --srpm FILE  Build the SRPM from FILE instead of implicit SRPM build.\n  -h, --help   Show this message and exit.\n\nCommands:\n  in-copr  Build selected upstream project in Copr.\n  in-image-builder  Create a VM image in Image Builder.\n  in-koji  Build selected upstream project in Fedora.\n  in-mock  Build RPMs in mock using content of the upstream repository.\n  locally  Create RPMs using content of the upstream repository.\n")))}s.isMDXComponent=!0}}]);