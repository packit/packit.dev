"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[61929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_label:"changelog",title:"specfile.changelog"},i=void 0,o={unversionedId:"api/specfile/changelog",id:"api/specfile/changelog",title:"specfile.changelog",description:"ChangelogEntry",source:"@site/specfile/api/specfile/changelog.md",sourceDirName:"api/specfile",slug:"/api/specfile/changelog",permalink:"/specfile/api/specfile/changelog",draft:!1,editUrl:"https://github.com/packit/specfile/tree/main/docs/specfile/api/specfile/changelog.md",tags:[],version:"current",frontMatter:{sidebar_label:"changelog",title:"specfile.changelog"},sidebar:"autogenerated",previous:{title:"specfile",permalink:"/specfile/api/specfile/"},next:{title:"conditions",permalink:"/specfile/api/specfile/conditions"}},p={},s=[{value:"ChangelogEntry",id:"changelogentry",level:2},{value:"__init__",id:"__init__",level:4},{value:"evr",id:"evr",level:4},{value:"extended_timestamp",id:"extended_timestamp",level:4},{value:"day_of_month_padding",id:"day_of_month_padding",level:4},{value:"assemble",id:"assemble",level:4},{value:"Changelog",id:"changelog",level:2},{value:"__init__",id:"__init__-1",level:4},{value:"filter",id:"filter",level:4},{value:"parse",id:"parse",level:4},{value:"get_raw_section_data",id:"get_raw_section_data",level:4},{value:"guess_packager",id:"guess_packager",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"changelogentry"},"ChangelogEntry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ChangelogEntry()\n")),(0,l.kt)("p",null,"Class that represents a changelog entry. Changelog entry consists of\na header line starting with ",(0,l.kt)("em",{parentName:"p"},"*"),", followed by timestamp, author and optional\nextra text (usually EVR), and one or more content lines."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"header")," - Header of the entry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content")," - List of lines forming the content of the entry.")),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(header: str,\n             content: List[str],\n             following_lines: Optional[List[str]] = None) -> None\n")),(0,l.kt)("p",null,"Initializes a changelog entry object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"header")," - Header of the entry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content")," - List of lines forming the content of the entry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"following_lines")," - Extra lines that follow the entry.")),(0,l.kt)("h4",{id:"evr"},"evr"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef evr() -> Optional[EVR]\n")),(0,l.kt)("p",null,"EVR (epoch, version, release) of the entry."),(0,l.kt)("h4",{id:"extended_timestamp"},"extended","_","timestamp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef extended_timestamp() -> bool\n")),(0,l.kt)("p",null,"Whether the timestamp present in the entry header is extended (date and time)."),(0,l.kt)("h4",{id:"day_of_month_padding"},"day","_","of","_","month","_","padding"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef day_of_month_padding() -> str\n")),(0,l.kt)("p",null,"Padding of day of month in the entry header timestamp"),(0,l.kt)("h4",{id:"assemble"},"assemble"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef assemble(cls,\n             timestamp: Union[datetime.date, datetime.datetime],\n             author: str,\n             content: List[str],\n             evr: Optional[str] = None,\n             day_of_month_padding: str = "0",\n             append_newline: bool = True) -> "ChangelogEntry"\n')),(0,l.kt)("p",null,"Assembles a changelog entry."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")," - Timestamp of the entry.\nSupply ",(0,l.kt)("inlineCode",{parentName:"li"},"datetime")," rather than ",(0,l.kt)("inlineCode",{parentName:"li"},"date")," for extended format."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"author")," - Author of the entry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content")," - List of lines forming the content of the entry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"evr")," - EVR (epoch, version, release) of the entry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"day_of_month_padding")," - Padding to apply to day of month in the timestamp."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"append_newline")," - Whether the entry should be followed by an empty line.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  New instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"ChangelogEntry")," class."),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Changelog(UserList[ChangelogEntry])\n")),(0,l.kt)("p",null,"Class that represents a changelog. It behaves like a list of changelog entries,\nordered from bottom to top - the top (newest) entry has index ",(0,l.kt)("em",{parentName:"p"},"-1"),", the bottom\n(oldest) one has index ",(0,l.kt)("em",{parentName:"p"},"0"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," - List of individual entries.")),(0,l.kt)("h4",{id:"__init__-1"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(data: Optional[List[ChangelogEntry]] = None,\n             predecessor: Optional[List[str]] = None) -> None\n")),(0,l.kt)("p",null,"Initializes a changelog object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," - List of individual changelog entries."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"predecessor")," - List of lines at the beginning of a section\nthat can","'","t be parsed into changelog entries.")),(0,l.kt)("h4",{id:"filter"},"filter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def filter(since: Optional[Union[str, EVR]] = None,\n           until: Optional[Union[str, EVR]] = None) -> "Changelog"\n')),(0,l.kt)("p",null,"Filters changelog entries with EVR between since and until."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"since")," - Optional lower bound. If specified, entries with EVR higher\nthan or equal to this will be included."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"until")," - Optional upper bound. If specified, entries with EVR lower\nthan or equal to this will be included.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  Filtered changelog."),(0,l.kt)("h4",{id:"parse"},"parse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef parse(cls, section: Section) -> "Changelog"\n')),(0,l.kt)("p",null,"Parses a ",(0,l.kt)("inlineCode",{parentName:"p"},"%changelog")," section."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"section")," - Section to parse.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  New instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"Changelog")," class."),(0,l.kt)("h4",{id:"get_raw_section_data"},"get","_","raw","_","section","_","data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_raw_section_data() -> List[str]\n")),(0,l.kt)("p",null,"Reconstructs section data from changelog."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  List of lines forming the reconstructed section data."),(0,l.kt)("h4",{id:"guess_packager"},"guess","_","packager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def guess_packager() -> str\n")),(0,l.kt)("p",null,"Guesses the name and e-mail of a packager to use for changelog entries.\nThis function uses logic similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"rpmdev-packager")," utility."),(0,l.kt)("p",null,"The following places are searched for this value (in this order):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$RPM_PACKAGER")," environment variable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%packager")," macro"),(0,l.kt)("li",{parentName:"ul"},"git config"),(0,l.kt)("li",{parentName:"ul"},"Unix username")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  A string to use for the changelog entry author.\nIf nothing was detected, an empty string is returned."))}u.isMDXComponent=!0}}]);