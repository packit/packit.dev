"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[82912],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),g=t,y=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return a?r.createElement(y,o(o({ref:n},c),{},{components:a})):r.createElement(y,o({ref:n},c))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:t,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},30491:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(58168),t=(a(96540),a(15680));const l={sidebar_label:"macros",title:"specfile.macros"},o=void 0,i={unversionedId:"api/specfile/macros",id:"api/specfile/macros",title:"specfile.macros",description:"Macro",source:"@site/specfile/api/specfile/macros.md",sourceDirName:"api/specfile",slug:"/api/specfile/macros",permalink:"/specfile/api/specfile/macros",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/macros.md",tags:[],version:"current",frontMatter:{sidebar_label:"macros",title:"specfile.macros"},sidebar:"autogenerated",previous:{title:"macro_definitions",permalink:"/specfile/api/specfile/macro_definitions"},next:{title:"options",permalink:"/specfile/api/specfile/options"}},p={},s=[{value:"Macro",id:"macro",level:2},{value:"Macros",id:"macros",level:2},{value:"dump",id:"dump",level:4},{value:"expand",id:"expand",level:4},{value:"remove",id:"remove",level:4},{value:"define",id:"define",level:4},{value:"reinit",id:"reinit",level:4}],c={toc:s},m="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"macro"},"Macro"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"class Macro(collections.abc.Hashable)\n")),(0,t.yg)("p",null,"Class that represents a RPM macro."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Attributes"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," - Name of the macro."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"options")," - Options (parameters) of the macro."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"body")," - Macro body."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"level")," - Macro level (source)."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"used")," - Indicates that the macro has been used (expanded).")),(0,t.yg)("h2",{id:"macros"},"Macros"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"class Macros()\n")),(0,t.yg)("h4",{id:"dump"},"dump"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef dump(cls) -> List[Macro]\n")),(0,t.yg)("p",null,"Dumps all macros defined in the global context."),(0,t.yg)("p",null,"This is not 100% accurate, since macros can be defined multiple times,\nbut only the last definition is listed."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returns"),":"),(0,t.yg)("p",null,"  List of ",(0,t.yg)("inlineCode",{parentName:"p"},"Macro")," instances."),(0,t.yg)("h4",{id:"expand"},"expand"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef expand(expression: str) -> str\n")),(0,t.yg)("p",null,"Expands an expression in the global context."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"expression")," - Expression to expand.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Returns"),":"),(0,t.yg)("p",null,"  Expanded expression."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Raises"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"RPMException")," - If expansion error occurs.")),(0,t.yg)("h4",{id:"remove"},"remove"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef remove(cls, macro: str) -> None\n")),(0,t.yg)("p",null,"Removes all definitions of a macro in the global context."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"macro")," - Macro name.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Raises"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"MacroRemovalException")," - If there were too many unsuccessful\nretries to remove the macro.")),(0,t.yg)("h4",{id:"define"},"define"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef define(cls, macro: str, body: str) -> None\n")),(0,t.yg)("p",null,"Defines a macro in the global context."),(0,t.yg)("p",null,"Removes all existing definitions first. It is not possible to define a macro\nwith options. The new macro will always have ",(0,t.yg)("inlineCode",{parentName:"p"},"MacroLevel.OLDSPEC")," level."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"macro")," - Macro name."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"body")," - Macro body.")),(0,t.yg)("h4",{id:"reinit"},"reinit"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef reinit(cls, level_threshold: MacroLevel = MacroLevel.RPMRC) -> None\n")),(0,t.yg)("p",null,"Reinitializes macros in the global context."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"level_threshold")," - Only macros up to this level remain defined.")))}u.isMDXComponent=!0}}]);