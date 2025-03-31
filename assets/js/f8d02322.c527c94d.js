"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[97272],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>d});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),c=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(p.Provider,{value:a},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=c(t),u=n,d=y["".concat(p,".").concat(u)]||y[u]||m[u]||i;return t?r.createElement(d,l(l({ref:a},s),{},{components:t})):r.createElement(d,l({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[y]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21647:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(58168),n=(t(96540),t(15680));const i={title:"Deprecation policy",authors:"mfocko"},l=void 0,o={unversionedId:"deprecation/index",id:"deprecation/index",title:"Deprecation policy",description:"- Deprecated PyPI package is used for deprecation",source:"@site/research/deprecation/index.md",sourceDirName:"deprecation",slug:"/deprecation/",permalink:"/research/deprecation/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/deprecation/index.md",tags:[],version:"current",frontMatter:{title:"Deprecation policy",authors:"mfocko"},sidebar:"autogenerated",previous:{title:"Workers scaling",permalink:"/research/deployment/workers-scaling"},next:{title:"Migration from Flask to FastAPI",permalink:"/research/fast-api/"}},p={},c=[{value:"Choice of library",id:"choice-of-library",level:2}],s={toc:c},y="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(y,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Deprecated")," PyPI package is used for deprecation"),(0,n.yg)("li",{parentName:"ul"},"annotate deprecated functions with ",(0,n.yg)("inlineCode",{parentName:"li"},"@depracted")," decorator, optionally with message"),(0,n.yg)("li",{parentName:"ul"},"functions will be removed in the 5th release after the release in which they were\ndeprecated"),(0,n.yg)("li",{parentName:"ul"},"template for warning: ",(0,n.yg)("inlineCode",{parentName:"li"},"since {version}, will be removed in {version}: {alternative/message}"))),(0,n.yg)("h2",{id:"choice-of-library"},"Choice of library"),(0,n.yg)("p",null,"Looked into the options suggested by @lachmanfrantisek which were:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"Deprecated")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"seems as a good choice, offers decorator that has optional parameters such as version or custom message"),(0,n.yg)("li",{parentName:"ul"},"live GitHub repo"),(0,n.yg)("li",{parentName:"ul"},"fast release cycle"),(0,n.yg)("li",{parentName:"ul"},"has only enhancements in issues"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://deprecated.readthedocs.io/en/latest/?badge=latest"},"docs")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"@deprecated(reason='', version='', action='always', category=<class 'DeprecationWarning'>)"),"\nfrom docs, all properties are optional, you can add reason (usually alternative) or version in which it was deprecated"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"Python-Deprecated")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"dead version of ",(0,n.yg)("inlineCode",{parentName:"li"},"Deprecated"),", which is probably kept in PyPI just for backward-compatibility"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"deprecationlib")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"seems like hobby project, only one information in decorator (alternative function name)"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"Dandelyon")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"looks like nice project"),(0,n.yg)("li",{parentName:"ul"},"offers multiple decorators"),(0,n.yg)("li",{parentName:"ul"},"doesn't seem to be very active"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"deprecate")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"dead project"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"deprecation")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"not very active"),(0,n.yg)("li",{parentName:"ul"},"multiple issues"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"libdeprecation")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"dead version of ",(0,n.yg)("inlineCode",{parentName:"li"},"deprecation")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"warnings")," (built-in module)"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"seems like a lot of copy pasting of the same code, or manual implementation of ",(0,n.yg)("inlineCode",{parentName:"li"},"@deprecated"))))))}m.isMDXComponent=!0}}]);