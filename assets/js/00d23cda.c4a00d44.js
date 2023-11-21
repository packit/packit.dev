"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[365],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51934:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={title:"Pre-releases",sidebar_position:9},i="Setting up pre-releases with Packit",s={unversionedId:"pre-releases",id:"pre-releases",title:"Pre-releases",description:"There are two ways how to support pre-releases in a spec file.",source:"@site/docs/pre-releases.md",sourceDirName:".",slug:"/pre-releases",permalink:"/docs/pre-releases",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/pre-releases.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Pre-releases",sidebar_position:9},sidebar:"autogenerated",previous:{title:"How to do Fedora releases with Packit",permalink:"/docs/fedora-releases-guide"},next:{title:"Setting up cross-project testing",permalink:"/docs/cross-project-testing"}},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-pre-releases-with-packit"},"Setting up pre-releases with Packit"),(0,a.kt)("p",null,"There are two ways how to support pre-releases in a spec file."),(0,a.kt)("p",null,"The simpler way relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"%version_no_tilde")," macro from ",(0,a.kt)("inlineCode",{parentName:"p"},"rust-srpm-macros")," (not present on EL < 9)\nthat converts a pre-release version with ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," back to upstream version. An optional argument defines upstream delimiter\nthat defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),".\nHere is an example of a spec file using this macro:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-specfile"},"Version:        3.28.0~rc3\n\n...\n\nSource0:        https://example.com/files/v%{version_no_tilde}/%{name}-%{version_no_tilde}.tar.gz\n\n...\n\n%prep\n%autosetup -p1 -n %{name}-%{version_no_tilde}\n")),(0,a.kt)("p",null,"If upstream version doesn't have a delimiter, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"3.28.0b5"),", you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"%{version_no_tilde %{quote:%nil}}"),"."),(0,a.kt)("p",null,"The second, more complex way requires you to define a macro, typically called ",(0,a.kt)("inlineCode",{parentName:"p"},"prerelease")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"prerel"),", and package version\n(value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Version")," tag) and upstream version are constructed depending on whether it is defined or commented out.\nHere is an example of such a spec file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-specfile"},"%global base_version 3.28.0\n%global prerelease rc3\n\n%global package_version %{base_version}%{?prerelease:~%{prerelease}}\n%global upstream_version %{base_version}%{?prerelease:-%{prerelease}}\n\n...\n\nVersion:        %{package_version}\n\n...\n\nSource0:        https://example.com/files/v%{upstream_version}/%{name}-%{upstream_version}.tar.gz\n\n...\n\n%prep\n%autosetup -p1 -n %{name}-%{upstream_version}\n")),(0,a.kt)("p",null,"And a bit more complex example that achieves the same (but this time there is no delimiter in upstream version\nand tarball URL is slightly different):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-specfile"},"%global majorver 3\n%global minorver 28\n%global patchver 0\n%global prerel rc3\n\n%if 0%{?prerel:1}\n%global package_version %{majorver}.%{minorver}.%{patchver}~%{prerel}\n%global upstream_version %{majorver}.%{minorver}.%{patchver}%{prerel}\n%else\n%global package_version %{majorver}.%{minorver}.%{patchver}\n%global upstream_version %{majorver}.%{minorver}.%{patchver}\n%endif\n\n...\n\nVersion:        %{package_version}\n\n...\n\nSource0:        https://example.com/files/v%{majorver}.%{minorver}/%{name}-%{upstream_version}.tar.gz\n\n...\n\n%prep\n%autosetup -p1 -n %{name}-%{upstream_version}\n")),(0,a.kt)("p",null,"Packit supports both ways. There is a config option ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration#prerelease_suffix_pattern"},(0,a.kt)("inlineCode",{parentName:"a"},"prerelease_suffix_pattern")),"\nthat defines a regex that is used to determine if a version is a pre-release or not.\nIt defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"([.\\-_~^]?)(alpha|beta|rc|pre(view)?)([.\\-_]?\\d+)?")," and you can adjust it if your project uses\na different versioning scheme or undefine it to opt-out from pre-release processing. The first capturing group of the regex\nshould capture the delimiter and can be empty if there is none.\nIf a pre-release is detected, the delimiter is replaced with ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," to ensure proper sorting by RPM. You can also configure\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration#prerelease_suffix_macro"},(0,a.kt)("inlineCode",{parentName:"a"},"prerelease_suffix_macro"))," option to correspond to a pre-release macro\nin your spec file and this macro will be commented out or uncommented accordingly."))}m.isMDXComponent=!0}}]);