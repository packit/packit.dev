"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[85215],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const i={title:"Development",sidebar_position:4},l=void 0,o={unversionedId:"development",id:"development",title:"Development",description:"Links",source:"@site/fedora-ci/development.md",sourceDirName:".",slug:"/development",permalink:"/fedora-ci/development",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/fedora-ci/development.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Development",sidebar_position:4},sidebar:"autogenerated",previous:{title:"Configuration",permalink:"/fedora-ci/configuration"}},p={},s=[{value:"Links",id:"links",level:2},{value:"Current plan",id:"current-plan",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"links"},"Links"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://fedoraproject.org/wiki/Changes/PackitDistgitCI"},"Fedora change proposal"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Original proposal of this change, including the time plan and detailed description."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/issues/2692"},"Tracking issue"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Plan of the tasks to be implemented."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/discussions/2520"},"Discussions"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"For ideas or suggestions to discuss, feel free to add a discussion topic."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/issues/new?template=fedora-ci.yml"},"Issue tracker"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"For filing bug, new features, etc."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service"},"Source code"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Source code of the CI implementation. This will be moved to a separate repository."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://matrix.to/#/#packit:fedora.im?web-instance%5Belement.io%5D=chat.fedoraproject.org"},"#packit:fedora.im"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Matrix channel for answering any questions.")))),(0,n.yg)("h2",{id:"current-plan"},"Current plan"),(0,n.yg)("ul",{className:"contains-task-list"},(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Phase 1: Introduce scratch builds for Fedora dist-git PRs (opt-in)."),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Phase 2 (In progress): Implement installability checks (opt-in)."),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Phase 3: Implement support for user-defined TMT tests (opt-in)."),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Final Phase: Transition to the new Packit-based CI as the default mechanism, replacing Fedora CI.")))}m.isMDXComponent=!0}}]);