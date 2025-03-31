"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[76130],{1551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=t(58168),a=(t(96540),t(15680));const l={sidebar_label:"options",title:"specfile.options"},o=void 0,r={unversionedId:"api/specfile/options",id:"api/specfile/options",title:"specfile.options",description:"Token",source:"@site/specfile/api/specfile/options.md",sourceDirName:"api/specfile",slug:"/api/specfile/options",permalink:"/specfile/api/specfile/options",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/options.md",tags:[],version:"current",frontMatter:{sidebar_label:"options",title:"specfile.options"},sidebar:"autogenerated",previous:{title:"macros",permalink:"/specfile/api/specfile/macros"},next:{title:"prep",permalink:"/specfile/api/specfile/prep"}},p={},s=[{value:"Token",id:"token",level:2},{value:"Positionals",id:"positionals",level:2},{value:"__init__",id:"__init__",level:4},{value:"insert",id:"insert",level:4},{value:"Options",id:"options",level:2},{value:"__init__",id:"__init__-1",level:4},{value:"positional",id:"positional",level:4},{value:"tokenize",id:"tokenize",level:4}],g={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,i.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"token"},"Token"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class Token(collections.abc.Hashable)\n")),(0,a.yg)("p",null,"Class that represents a single token in an option string."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Attributes"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"type")," - Token type."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"value")," - Token value.")),(0,a.yg)("h2",{id:"positionals"},"Positionals"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class Positionals(collections.abc.MutableSequence)\n")),(0,a.yg)("p",null,"Class that represents a sequence of positional arguments."),(0,a.yg)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'def __init__(options: "Options") -> None\n')),(0,a.yg)("p",null,"Initializes a positionals object."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"options")," - ",(0,a.yg)("inlineCode",{parentName:"li"},"Options")," instance this object is tied with.")),(0,a.yg)("h4",{id:"insert"},"insert"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def insert(i: int, value: Union[int, str]) -> None\n")),(0,a.yg)("p",null,"Inserts a new positional argument at the specified index."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"i")," - Requested index."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"value")," - Value of the positional argument.")),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class Options(collections.abc.MutableMapping)\n")),(0,a.yg)("p",null,"Class that represents macro options."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Attributes"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"optstring")," - getopt-like option string containing recognized option characters.\nOption characters are ASCII letters, upper or lower-case.\nIf such a character is followed by a colon, the option\nrequires an argument."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"defaults")," - Dict specifying default arguments to options.")),(0,a.yg)("h4",{id:"__init__-1"},"_","_","init","_","_"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def __init__(\n        tokens: List[Token],\n        optstring: Optional[str] = None,\n        defaults: Optional[Dict[str, Union[bool, int, str]]] = None) -> None\n")),(0,a.yg)("p",null,"Initializes an options object."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"tokens")," - List of tokens in an option string."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"optstring")," - String containing recognized option characters.\nOption characters are ASCII letters, upper or lower-case.\nIf such a character is followed by a colon, the option\nrequires an argument."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"defaults")," - Dict specifying default arguments to options.")),(0,a.yg)("h4",{id:"positional"},"positional"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"@property\ndef positional() -> Positionals\n")),(0,a.yg)("p",null,"Sequence of positional arguments."),(0,a.yg)("h4",{id:"tokenize"},"tokenize"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef tokenize(option_string: str) -> List[Token]\n")),(0,a.yg)("p",null,"Tokenizes an option string."),(0,a.yg)("p",null,"Follows the same rules as ",(0,a.yg)("inlineCode",{parentName:"p"},"poptParseArgvString()")," that is used by RPM."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"option_string")," - Option string.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns"),":"),(0,a.yg)("p",null,"  List of tokens."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Raises"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"OptionsException")," - If the option string is untokenizable.")))}c.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||l;return t?i.createElement(m,o(o({ref:n},g),{},{components:t})):i.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[u]="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);