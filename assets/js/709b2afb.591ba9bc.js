"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[9022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={title:"TITO",authors:"flachman"},o=void 0,l={unversionedId:"automation-tools/tito",id:"automation-tools/tito",title:"TITO",description:"- Tito is a tool for managing RPM based projects using git for their source code repository.",source:"@site/research/automation-tools/tito.md",sourceDirName:"automation-tools",slug:"/automation-tools/tito",permalink:"/research/automation-tools/tito",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/automation-tools/tito.md",tags:[],version:"current",frontMatter:{title:"TITO",authors:"flachman"},sidebar:"autogenerated",previous:{title:"RPKG",permalink:"/research/automation-tools/rpkg"},next:{title:"Celery",permalink:"/research/category/celery"}},s={},p=[{value:"\u2795",id:"",level:2},{value:"\u2796",id:"-1",level:2},{value:"Usecases",id:"usecases",level:2},{value:"Tagging",id:"tagging",level:3},{value:"Building",id:"building",level:3},{value:"Releases",id:"releases",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tito is a tool for managing RPM based projects using git for their source code repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dgoodwin/tito"}," \ud83d\udcbb github.com/dgoodwin/tito")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/pypi/pyversions/tito.svg",alt:"PyPI - Python Version"}),", ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/tito/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/tito.svg",alt:"PyPI"})),", ",(0,i.kt)("a",{parentName:"li",href:"https://src.fedoraproject.org/rpms/tito"}," \ud83d\udce6 fedora packages"))),(0,i.kt)("h2",{id:""},"\u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dgoodwin/tito#custom-builders--taggers--releasers"},"custom builders/taggers/releasers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"releasers: ",(0,i.kt)("inlineCode",{parentName:"li"},"man 8 releasers.conf")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--ofline")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--dry-run")," mode"),(0,i.kt)("li",{parentName:"ul"},"multiple packages in one repository")),(0,i.kt)("h2",{id:"-1"},"\u2796"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PythonAPI not specified and documented:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dgoodwin/tito/issues/165"},"[issue] Provide/document a Python API")),(0,i.kt)("li",{parentName:"ul"},"README.md:",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Also, there are no guarantees that tito will not change in future releases, meaning that your custom implementations may occasionally need to be updated.")))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"usecases"},"Usecases"),(0,i.kt)("h3",{id:"tagging"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/dgoodwin/tito#tagging-packages"},"Tagging")),(0,i.kt)("p",null,"Tag new releases with incremented RPM version or release."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"bump the version/release in spec file"),(0,i.kt)("li",{parentName:"ol"},"auto-generate spec file changelog based on git history since last tag"),(0,i.kt)("li",{parentName:"ol"},"commit changes"),(0,i.kt)("li",{parentName:"ol"},"git tag")),(0,i.kt)("h3",{id:"building"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/dgoodwin/tito#custom-builders--taggers--releasers"},"Building")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create reliable tar.gz files with consistent checksums from any tag.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Build source and binary rpms off any tag."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ tito build --help\nUsage: tito build [options]\n\nOptions:\n  --tgz                 Build .tar.gz\n  --srpm                Build srpm\n  --rpm                 Build rpm\n  :\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Build source and binary "test" rpms off most recently committed code.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"tito build --test\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Build multiple source rpms with appropriate disttags for submission to the Koji build system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Build packages off an "upstream" git repository, where modifications in the "downstream" git repository will be applied as a patch in the source rpm. (',(0,i.kt)("a",{parentName:"p",href:"https://github.com/dgoodwin/tito/blob/0942baa1217ad31cd5c4cbb8750de3db15410672/src/tito/builder/main.py#L701"},"UpstreamBuilder"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manage all of the above for a git repository with many disjoint packages within it."))),(0,i.kt)("h3",{id:"releases"},"Releases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"multiple release implementations"),(0,i.kt)("li",{parentName:"ul"},"blog posts by msuchy:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://miroslav.suchy.cz/blog/archives/2013/12/29/how_to_build_in_copr/"},"How to build in Copr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://miroslav.suchy.cz/blog/archives/2013/12/17/how_to_create_new_release_of_rpm_package_in_5_seconds/"},"How to create new release of RPM package in 5 seconds"))))))}m.isMDXComponent=!0}}]);