"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[36837],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var i=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(r),g=n,y=h["".concat(c,".").concat(g)]||h[g]||u[g]||o;return r?i.createElement(y,a(a({ref:t},l),{},{components:r})):i.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=r(58168),n=(r(96540),r(15680));const o={title:"Diverged history",date:new Date("2023-03-14T00:00:00.000Z"),sidebar_position:70},a="Diverged history",s={unversionedId:"work-with-source-git/fix-diverged-history",id:"work-with-source-git/fix-diverged-history",title:"Diverged history",description:"It can easily happen that the history of the source-git and dist-git",source:"@site/source-git/work-with-source-git/fix-diverged-history.md",sourceDirName:"work-with-source-git",slug:"/work-with-source-git/fix-diverged-history",permalink:"/source-git/work-with-source-git/fix-diverged-history",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/source-git/work-with-source-git/fix-diverged-history.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Diverged history",date:"2023-03-14T00:00:00.000Z",sidebar_position:70},sidebar:"autogenerated",previous:{title:"Sync back changes made in dist-git",permalink:"/source-git/work-with-source-git/sync-from-dist-git"}},c={},p=[],l={toc:p},h="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(h,(0,i.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"diverged-history"},"Diverged history"),(0,n.yg)("p",null,"It can easily happen that the history of the source-git and dist-git\nrepositories get diverged.\nSee ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/packit/research/tree/main/source-git-sync-status#example"},"this document"),"\nfor more info about how packit checks the sync status."),(0,n.yg)("p",null,"Packit considers the histories of those repositories as diverged when\n",(0,n.yg)("strong",{parentName:"p"},"both of them")," have as a HEAD commit one of the following changes: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A change which has not been synced to the other repository."),(0,n.yg)("li",{parentName:"ul"},"The change has been synced but the ",(0,n.yg)("inlineCode",{parentName:"li"},"From-[source|dist]-git-commit")," git\ntrailer is missing ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/issues/1883"},"for some reason"),"."),(0,n.yg)("li",{parentName:"ul"},"The change couldn't have been synced because it's \"empty\", i.e. it generates\nno change when synced to the other repo. Examples of such changes: ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"a change in .distro/source-git.yaml or other file which is not synchronized between repositories"),(0,n.yg)("li",{parentName:"ul"},"mass rebuild in a package which uses rpmautospec\n(results in an empty commit in the dist-git repo)")))),(0,n.yg)("p",null,"When you then try to synchronize those repositories either way, you get"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"PackitException: '.../src/package' and '.../rpms/package' have diverged.\nSync status needs to be reestablished manually.\nThe first source-git commit to be synced is 'abc'.\nThe first dist-git commit to be synced is 'xyz'.\n")),(0,n.yg)("p",null,"To sync them manually try to re-run the command with the ",(0,n.yg)("inlineCode",{parentName:"p"},"-f/--force")," switch,\nwhich doesn't check the synchronization status."),(0,n.yg)("p",null,'If you need to synchronise the "empty" change, you have to manually add\nan empty commit to the other repository'),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'git commit --allow-empty -m "From-dist-git-commit HEAD"')," - to the source-git\nrepo OR "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'git commit --allow-empty -m "From-source-git-commit HEAD"')," - to the dist-git\nrepo. Where ",(0,n.yg)("inlineCode",{parentName:"li"},"HEAD")," is the sha of HEAD commit of the other repo.\nThere will be an easier way once\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/packit/packit/issues/1884"},"packit/packit#1884")," is implemented.")))}u.isMDXComponent=!0}}]);