"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[51189],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},l),{},{components:a})):n.createElement(k,o({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Packit 1.0.0 countdown - action may be required",date:new Date("2024-12-09T12:00:00.000Z"),authors:"mmassari",tags:["configuration"]},o=void 0,p={permalink:"/posts/packit_1_0_0_action_required",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/packit_1_0_0_action_required/index.md",source:"@site/posts/packit_1_0_0_action_required/index.md",title:"Packit 1.0.0 countdown - action may be required",description:"After 105 minor releases we are almost ready to announce our first major release, Packit 1.0.0!",date:"2024-12-09T12:00:00.000Z",formattedDate:"December 9, 2024",tags:[{label:"configuration",permalink:"/posts/tags/configuration"}],readingTime:.985,hasTruncateMarker:!0,authors:[{name:"Maja Massarini",email:"mmassari@redhat.com",url:"https://github.com/majamassarini",imageURL:"https://github.com/majamassarini.png",key:"mmassari"}],frontMatter:{title:"Packit 1.0.0 countdown - action may be required",date:"2024-12-09T12:00:00.000Z",authors:"mmassari",tags:["configuration"]},prevItem:{title:"Packit in 2024",permalink:"/posts/packit-in-2024"},nextItem:{title:"Packit dashboard and Project Mycorrhiza",permalink:"/posts/project-mycorrhiza"}},c={authorsImageUrls:[void 0]},s=[{value:"What&#39;s New",id:"whats-new",level:2},{value:"List of removed keys",id:"list-of-removed-keys",level:3}],l={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After 105 minor releases we are almost ready to announce our first major release, Packit 1.0.0!"),(0,r.kt)("h2",{id:"whats-new"},"What's New"),(0,r.kt)("p",null,"We will ",(0,r.kt)("strong",{parentName:"p"},"remove all long-deprecated keys from the configuration file"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"packit-service")," jobs are tied with ",(0,r.kt)("inlineCode",{parentName:"p"},"packit CLI"),". The ",(0,r.kt)("em",{parentName:"p"},"packit configuration code")," is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packit")," package and used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"packit-service"),".\nSo be aware that for those projects still using the deprecated keys in their ",(0,r.kt)("inlineCode",{parentName:"p"},"packit.yaml")," configuration file we have created a migration pull request."),(0,r.kt)("p",null,"Please, ",(0,r.kt)("strong",{parentName:"p"},"check if you have any new PR for your project created by the packit-service bot account, review and merge it"),". Otherwise, you might experience issues with the ",(0,r.kt)("inlineCode",{parentName:"p"},"packit-service")," jobs once the new packit version is released."),(0,r.kt)("p",null,"We plan to release Packit 1.0.0 in ",(0,r.kt)("strong",{parentName:"p"},"January 2025"),"."),(0,r.kt)("h3",{id:"list-of-removed-keys"},"List of removed keys"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Job type ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," has been changed to ",(0,r.kt)("a",{parentName:"li",href:"https://packit.dev/docs/configuration/upstream/copr_build"},(0,r.kt)("inlineCode",{parentName:"a"},"copr_build")),"."),(0,r.kt)("li",{parentName:"ul"},"Job type ",(0,r.kt)("inlineCode",{parentName:"li"},"production_build")," has been changed to ",(0,r.kt)("a",{parentName:"li",href:"https://packit.dev/docs/configuration/upstream/upstream_koji_build"},(0,r.kt)("inlineCode",{parentName:"a"},"upstream_koji_build")),"."),(0,r.kt)("li",{parentName:"ul"},"Key ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream_project_name")," has been changed to ",(0,r.kt)("a",{parentName:"li",href:"https://packit.dev/docs/configuration#upstream_package_name"},(0,r.kt)("inlineCode",{parentName:"a"},"upstream_package_name")),"."),(0,r.kt)("li",{parentName:"ul"},"Key ",(0,r.kt)("inlineCode",{parentName:"li"},"synced_files")," has been changed to ",(0,r.kt)("a",{parentName:"li",href:"https://packit.dev/docs/configuration#files_to_sync"},(0,r.kt)("inlineCode",{parentName:"a"},"files_to_sync")),".")),(0,r.kt)("p",null,"The job types were renamed for clarity when we introduced more job types.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_project_name")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_package_name")," to be more specific.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"files_to_sync")," key has a more explicit behavior than the old ",(0,r.kt)("inlineCode",{parentName:"p"},"synced_files")," key."))}u.isMDXComponent=!0}}]);