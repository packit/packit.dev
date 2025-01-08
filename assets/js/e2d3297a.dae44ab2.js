"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[52774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"sections",title:"specfile.sections"},l=void 0,o={unversionedId:"api/specfile/sections",id:"api/specfile/sections",title:"specfile.sections",description:"Section",source:"@site/specfile/api/specfile/sections.md",sourceDirName:"api/specfile",slug:"/api/specfile/sections",permalink:"/specfile/api/specfile/sections",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/sections.md",tags:[],version:"current",frontMatter:{sidebar_label:"sections",title:"specfile.sections"},sidebar:"autogenerated",previous:{title:"prep",permalink:"/specfile/api/specfile/prep"},next:{title:"sourcelist",permalink:"/specfile/api/specfile/sourcelist"}},s={},p=[{value:"Section",id:"section",level:2},{value:"__init__",id:"__init__",level:4},{value:"normalized_name",id:"normalized_name",level:4},{value:"id",id:"id",level:4},{value:"normalized_id",id:"normalized_id",level:4},{value:"is_script",id:"is_script",level:4},{value:"Sections",id:"sections",level:2},{value:"get_or_create",id:"get_or_create",level:4},{value:"parse",id:"parse",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"section"},"Section"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Section(collections.UserList)\n")),(0,a.kt)("p",null,"Class that represents a spec file section."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - Name of the section (without the leading ","'","%","'",")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - Options of the section."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," - List of lines forming the content of the section,\nnot including newline characters.")),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name: str,\n             options: Optional[Options] = None,\n             delimiter: str = "",\n             separator: str = "\\n",\n             data: Optional[List[str]] = None) -> None\n')),(0,a.kt)("p",null,"Initializes a section object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - Name of the section (without the leading ","'","%","'",")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - Options of the section."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delimiter")," - Delimiter separating name and option string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"separator")," - String separating name and options from section content,\ndefaults to newline."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," - List of lines forming the content of the section,\nnot including newline characters.")),(0,a.kt)("h4",{id:"normalized_name"},"normalized","_","name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef normalized_name() -> str\n")),(0,a.kt)("p",null,"Normalized name of the section. All characters are lowercased."),(0,a.kt)("h4",{id:"id"},"id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef id() -> str\n")),(0,a.kt)("p",null,"ID of the section (name and options, without the leading ","'","%","'",")."),(0,a.kt)("h4",{id:"normalized_id"},"normalized","_","id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef normalized_id() -> str\n")),(0,a.kt)("p",null,"Normalized ID of the section. All characters of name are lowercased."),(0,a.kt)("h4",{id:"is_script"},"is","_","script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef is_script() -> bool\n")),(0,a.kt)("p",null,"Whether the content of the section is a shell script."),(0,a.kt)("h2",{id:"sections"},"Sections"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Sections(UserList[Section])\n")),(0,a.kt)("p",null,"Class that represents all spec file sections, hence the entire spec file."),(0,a.kt)("p",null,"Sections can be accessed by index or conveniently by id as attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# print the third line of the first section\nprint(sections[0][2])\n\n# remove the last line of %prep section\ndel sections.prep[-1]\n\n# replace the entire %prep section\nsections.prep = ['line 1', 'line 2']\n\n# delete %changelog\ndel sections.changelog\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," - List of individual sections. Preamble is expected to always be the first.")),(0,a.kt)("h4",{id:"get_or_create"},"get","_","or","_","create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_or_create(id: str) -> Section\n")),(0,a.kt)("p",null,"Gets an existing section by ID or creates a new section with the given ID.\nNew section will be appended to the end."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - ID of the section (name and options, without the leading ","'","%","'",").")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  Existing or newly created section as an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Section")," class."),(0,a.kt)("h4",{id:"parse"},"parse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef parse(cls,\n          lines: List[str],\n          context: Optional["Specfile"] = None) -> "Sections"\n')),(0,a.kt)("p",null,"Parses given lines into sections."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lines")," - Lines to parse."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"Specfile")," instance that defines the context for macro expansions.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  New instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Sections")," class."))}u.isMDXComponent=!0}}]);