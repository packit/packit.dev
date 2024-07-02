"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[82909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Fedora package candidates for source-git",authors:"ttomecek"},i=void 0,s={unversionedId:"source-git/fedora-spec-files/index",id:"source-git/fedora-spec-files/index",title:"Fedora package candidates for source-git",description:"This research crams through all fedora spec files to find out:",source:"@site/research/source-git/fedora-spec-files/index.md",sourceDirName:"source-git/fedora-spec-files",slug:"/source-git/fedora-spec-files/",permalink:"/research/source-git/fedora-spec-files/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/source-git/fedora-spec-files/index.md",tags:[],version:"current",frontMatter:{title:"Fedora package candidates for source-git",authors:"ttomecek"},sidebar:"autogenerated",previous:{title:"Updates of source-git repos (archived)",permalink:"/research/source-git/dist-git-to-src-git/updates"},next:{title:"Source-git in Zuul",permalink:"/research/source-git/in-zuul"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This research crams through ",(0,n.kt)("a",{parentName:"p",href:"https://pkgs.fedoraproject.org/repo/rpm-specs-latest.tar.xz"},"all fedora spec files")," to find out:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Packages with most downstream patches"),(0,n.kt)("li",{parentName:"ul"},"If they use %autosetup, %setup, %patch, %autopatch"),(0,n.kt)("li",{parentName:"ul"},"How often they were updated in F34")),(0,n.kt)("p",null,"The research was done using ",(0,n.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"a jupyter notebook"),"."),(0,n.kt)("p",null,"Let's navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/packit/research/tree/main/research/fedora-spec-files"},"directory")," with this research to visualize the data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ cd fedora-spec-files\n")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"A Containerfile is provided with a list of all dependencies so we can gather and visualize the data. Let's build it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ make build\n\nCOMMIT fedora-spec-research\n--\x3e 525fd72aeba\nSuccessfully tagged localhost/fedora-spec-research:latest\n525fd72aebaeda0e4648bad7646d9169f81b7ab541ffebc76312c35faa10da7f\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Once built, we need to gather data about the packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ make generate-data\n")),(0,n.kt)("p",null,"You can rerun this step any time you want. The data is saved as ",(0,n.kt)("inlineCode",{parentName:"p"},"data.json"),"."),(0,n.kt)("p",null,"Once the file is available, we can run jupyter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ make run\n")),(0,n.kt)("p",null,'Open the given link in your browser and navigate to notebook "fedora-spec-files.ipynb".'),(0,n.kt)("p",null,'You should now click Kernel > "Restart & Run All" to see the current data visualized.'))}d.isMDXComponent=!0}}]);