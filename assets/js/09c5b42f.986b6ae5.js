"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[90600],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Requirements for the specfile library",authors:"flachman"},i=void 0,o={unversionedId:"specfiles/library-requirements",id:"specfiles/library-requirements",title:"Requirements for the specfile library",description:"Manipulation",source:"@site/research/specfiles/library-requirements.md",sourceDirName:"specfiles",slug:"/specfiles/library-requirements",permalink:"/research/specfiles/library-requirements",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/specfiles/library-requirements.md",tags:[],version:"current",frontMatter:{title:"Requirements for the specfile library",authors:"flachman"},sidebar:"autogenerated",previous:{title:"Specfiles",permalink:"/research/category/specfiles"},next:{title:"Counting patches in specfiles",permalink:"/research/specfiles/packages-with-patches/"}},c={},s=[{value:"Manipulation",id:"manipulation",level:2},{value:"Version and release",id:"version-and-release",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Sources",id:"sources",level:2},{value:"Comments",id:"comments",level:2},{value:"Patches",id:"patches",level:2},{value:"Functionality used from rebase-helper but not connected to the spec-files",id:"functionality-used-from-rebase-helper-but-not-connected-to-the-spec-files",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"manipulation"},"Manipulation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We create a Python object by specifying a path of the spec-file and (optionally) path to spec-file sources\n(the directory with the spec-file)."),(0,r.kt)("li",{parentName:"ul"},"(optional) After a change, we can reload the content (can be done by recreating of the object)."),(0,r.kt)("li",{parentName:"ul"},"After the manipulation, the content is synced to the file or, we have a way to do this explicitly."),(0,r.kt)("li",{parentName:"ul"},"Be able to copy a section of spec-file to another object."),(0,r.kt)("li",{parentName:"ul"},"When reading the values, we want to be able to have both version with macros expanded\nand raw without expansion."),(0,r.kt)("li",{parentName:"ul"},"When changing the spec-file, we want to operate on the raw spec-file.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All changes results in a minimal and local diff.")))),(0,r.kt)("h2",{id:"version-and-release"},"Version and release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The version and release fields can be get."),(0,r.kt)("li",{parentName:"ul"},"We can set the new version. If release is not specified, reset the release number to 1.")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can get the content of the changelog."),(0,r.kt)("li",{parentName:"ul"},"We can add a new changelog entry:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"By providing only the changelog text."),(0,r.kt)("li",{parentName:"ul"},"Optionally, field like ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"email")," can be specified.\n(Defaults of bumbspec are used by default.)")))),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can get the sources and patches."),(0,r.kt)("li",{parentName:"ul"},"We can download the sources from a lookaside cache."),(0,r.kt)("li",{parentName:"ul"},"We can download remote sources (sources in form of URL)."),(0,r.kt)("li",{parentName:"ul"},"We can change the value of a source."),(0,r.kt)("li",{parentName:"ul"},"We can get archive name for source.")),(0,r.kt)("h2",{id:"comments"},"Comments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For patches and other fields, we want to add a comment without a need to manipulate with the file directly."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What about having a get/set ",(0,r.kt)("inlineCode",{parentName:"p"},"comment")," value for various spec-file attributes for comment lines right above the item without any non-comment line?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# this is\n# the comment\n# for the first source\nSource1: source1.tar\n\n# this is not a comment for the second source\n\nSource2: source2.tar\n")))))),(0,r.kt)("h2",{id:"patches"},"Patches"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can get the patches.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Including the comment above (see the section above)."))),(0,r.kt)("li",{parentName:"ul"},"We can add a new patch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Automatically pick the right number."),(0,r.kt)("li",{parentName:"ul"},"Check if the patch isn't already present."),(0,r.kt)("li",{parentName:"ul"},"If there already are patches, then the patch is added after them."),(0,r.kt)("li",{parentName:"ul"},"If there are no existing patches, the patch is added after Source definitions"),(0,r.kt)("li",{parentName:"ul"},"Be able to set a comment used above the patch line (see the section above)."))),(0,r.kt)("li",{parentName:"ul"},"Concept of applied patches. (Probably source-git specific.)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Behave like a commented patch."),(0,r.kt)("li",{parentName:"ul"},"We are able to list the applied patches."),(0,r.kt)("li",{parentName:"ul"},"We can apply the patches = comment the patch."))),(0,r.kt)("li",{parentName:"ul"},"We can remove all the patches.")),(0,r.kt)("h1",{id:"other-content"},"Other content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can get and replace the method used in ",(0,r.kt)("inlineCode",{parentName:"li"},"prep")," section (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"autosetup"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"autopatch"),",...)."),(0,r.kt)("li",{parentName:"ul"},"Get URL tag.")),(0,r.kt)("h1",{id:"workflows-can-be-implemented-elsewhere-but-would-be-nice"},"Workflows (can be implemented elsewhere but would be nice)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bumbspec: change version and add a new changelog entry."),(0,r.kt)("li",{parentName:"ul"},"Be able to copy content of the whole spec-file to another object and be able to ignore a section during that (e.g. whole content but the changelog).")),(0,r.kt)("h2",{id:"functionality-used-from-rebase-helper-but-not-connected-to-the-spec-files"},"Functionality used from rebase-helper but not connected to the spec-files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the upstream version using ",(0,r.kt)("a",{parentName:"li",href:"https://fedoraproject.org/wiki/Upstream_release_monitoring?rd=Upstream_Release_Monitoring"},"Upstream Release Monitoring"),".")))}m.isMDXComponent=!0}}]);