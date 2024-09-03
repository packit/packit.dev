"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"validate-config",date:new Date("2021-03-18T07:48:36.000Z"),sidebar_position:30},o="packit validate-config",c={unversionedId:"cli/validate-config",id:"cli/validate-config",title:"validate-config",description:"Validate the Packit configuration file.",source:"@site/docs/cli/validate-config.md",sourceDirName:"cli",slug:"/cli/validate-config",permalink:"/docs/cli/validate-config",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/validate-config.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"validate-config",date:"2021-03-18T07:48:36.000Z",sidebar_position:30},sidebar:"autogenerated",previous:{title:"push-updates",permalink:"/docs/cli/push-updates"},next:{title:"build",permalink:"/docs/cli/build/"}},l={},p=[{value:"Help",id:"help",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"packit-validate-config"},(0,i.kt)("inlineCode",{parentName:"h1"},"packit validate-config")),(0,i.kt)("p",null,"Validate the Packit configuration file."),(0,i.kt)("h2",{id:"help"},"Help"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: packit validate-config [OPTIONS] [PATH_OR_URL]\n\n  Validate PackageConfig.\n\n  - checks missing values\n  - checks incorrect types\n  - checks whether monitoring is enabled if 'pull_from_upstream` is used\n\n  PATH_OR_URL argument is a local path or a URL to a git repository with\n  packit configuration file\n\nOptions:\n  --offline   Do not make remote API calls requiring network access.\n  -h, --help  Show this message and exit.\n")))}d.isMDXComponent=!0}}]);