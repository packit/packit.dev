"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[54049],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,y=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={sidebar_label:"formatter",title:"specfile.formatter"},i=void 0,l={unversionedId:"api/specfile/formatter",id:"api/specfile/formatter",title:"specfile.formatter",description:"format\\_expression",source:"@site/specfile/api/specfile/formatter.md",sourceDirName:"api/specfile",slug:"/api/specfile/formatter",permalink:"/specfile/api/specfile/formatter",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/formatter.md",tags:[],version:"current",frontMatter:{sidebar_label:"formatter",title:"specfile.formatter"},sidebar:"autogenerated",previous:{title:"exceptions",permalink:"/specfile/api/specfile/exceptions"},next:{title:"macro_definitions",permalink:"/specfile/api/specfile/macro_definitions"}},p={},s=[{value:"format_expression",id:"format_expression",level:4},{value:"formatted",id:"formatted",level:4}],c={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(f,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h4",{id:"format_expression"},"format","_","expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def format_expression(expression: str, line_length_threshold: int = 80) -> str\n")),(0,a.yg)("p",null,"Formats the specified Python expression."),(0,a.yg)("p",null,"Only supports a small subset of Python AST that should be sufficient for use in ",(0,a.yg)("inlineCode",{parentName:"p"},"__repr__()"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"expression")," - Python expression to reformat."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"line_length_threshold")," - Threshold for line lengths. It","'","s not a hard limit,\nit can be exceeded in some cases.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns"),":"),(0,a.yg)("p",null,"  Formatted expression."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Raises"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SyntaxError")," - If the expression is not parseable."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SpecfileException")," - If there is an unsupported AST node in the expression.")),(0,a.yg)("h4",{id:"formatted"},"formatted"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def formatted(function: Callable[..., str]) -> Callable[..., str]\n")),(0,a.yg)("p",null,"Decorator for formatting the output of ",(0,a.yg)("inlineCode",{parentName:"p"},"__repr__()"),"."))}u.isMDXComponent=!0}}]);