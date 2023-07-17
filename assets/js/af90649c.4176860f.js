"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[1705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={title:"Verifying the sync status of source-git and dist-git repos",authors:"csomh"},s=void 0,a={unversionedId:"source-git/sync-status",id:"source-git/sync-status",title:"Verifying the sync status of source-git and dist-git repos",description:"A source-git repo is in sync with the corresponding dist-git repo, if an attempt",source:"@site/research/source-git/sync-status.md",sourceDirName:"source-git",slug:"/source-git/sync-status",permalink:"/research/source-git/sync-status",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/source-git/sync-status.md",tags:[],version:"current",frontMatter:{title:"Verifying the sync status of source-git and dist-git repos",authors:"csomh"},sidebar:"autogenerated",previous:{title:"Splitting source-git and upstream",permalink:"/research/source-git/split-the-stream"},next:{title:"Updating source-git",permalink:"/research/source-git/update"}},c={},l=[{value:"CLI proposals",id:"cli-proposals",level:2},{value:"Marking the origin of synced content",id:"marking-the-origin-of-synced-content",level:2},{value:"Identifying commits to sync",id:"identifying-commits-to-sync",level:2},{value:"Example",id:"example",level:3},{value:"Proposed tasks",id:"proposed-tasks",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A source-git repo is in sync with the corresponding dist-git repo, if an attempt\nto sync the former to the later (by running ",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git update-dist-git"),")\ndoes not produce any change in the dist-git repo."),(0,r.kt)("p",null,"Being out-of-sync can mean:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are commits in source-git which were not yet transferred to dist-git."),(0,r.kt)("li",{parentName:"ul"},"There are commits in dist-git, which were not created as an update from\nsource-git, and need to be synced back to it."),(0,r.kt)("li",{parentName:"ul"},"Both of the above (source-git and dist-git history has diverged).")),(0,r.kt)("p",null,'From an operational point of view, dist-git changes will need to be synced\nback to source-git, before accepting content to be transformed from source-git\nto dist-git, in order to be able to preserve dist-git as the "blessed" place\nto store the sources. In other words: all new changes to be synced from\nsource-git to dist-git should be based on a commit matching the current state\nin dist-git.'),(0,r.kt)("p",null,"In order to help with this, both update commands\n(",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git update-dist-git")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git update-source-git"),")\nshould refuse to update the destination repository if the head commit in the\ndestination repository doesn't have it's pair commit among the ancestors of\nthe current head commit in the source repository. Nevertheless, it should be\npossible to override this with a ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," flag, to allow developers to\noverride tooling or human errors and bring the repositories back in sync."),(0,r.kt)("h2",{id:"cli-proposals"},"CLI proposals"),(0,r.kt)("p",null,"The na\xefve way to check if the two repositories are in sync is to run\n",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git update-dist-git"),". But this goes over the entire process to\ntransform content from source-git to dist-git, which might not be practical\nwhen looking just for the information whether the repos are in sync, and if\nthey are not, to tell the (range of) commits to be synced."),(0,r.kt)("p",null,"Note, that the list of commits (or rather the range of commits) to be synced is\nrelevant only when syncing from dist-git to source-git. Transformation in the\nother direction always considers the commits since ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_ref"),", so in this\ncase the range of outstanding commits would only serve as an information for the\nuser."),(0,r.kt)("p",null,"The CLI for the sync-check can be implemented as a new sub-command for\n",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    $ packit source-git status src/acl rpms/acl\n")),(0,r.kt)("p",null,"The command would have the following outputs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Print the range of commits (as a Git-revision, i.e: ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD~<n>.."),") in\nsource-git which need to be synced to dist-git, if any."),(0,r.kt)("li",{parentName:"ul"},"Print the range of commits (as a Git-revision, i.e: ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD~<n>.."),") in\ndist-git which need to be synced to source-git, if any."),(0,r.kt)("li",{parentName:"ul"},"Print a message that the repositories are in sync if that's the case.")),(0,r.kt)("h2",{id:"marking-the-origin-of-synced-content"},"Marking the origin of synced content"),(0,r.kt)("p",null,"In order to be able to tell whether a commit in the dist-git or source-git\nhistory has originated from the corresponding sibling repository the ",(0,r.kt)("em",{parentName:"p"},"full\nhash")," of the source commit should be recorded. This can be done with some\ndedicated ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-interpret-trailers"},"Git-trailers"),", appended at the end of the commit messages."),(0,r.kt)("p",null,"Commits created by ",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git update-dist-git")," in dist-git repositories\nshould have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    From-source-git-commit: <head-commit-hash>\n")),(0,r.kt)("p",null,"Commits created by ",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git update-source-git")," in source-git\nrepositories, and the commit at the tip of the branch, created by\n",(0,r.kt)("inlineCode",{parentName:"p"},"packit source-git init")," should have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    From-dist-git-commit: <head-commit-hash>\n")),(0,r.kt)("h2",{id:"identifying-commits-to-sync"},"Identifying commits to sync"),(0,r.kt)("p",null,"Search the commits of the current branch in each repository and look for the\nlast (latest) commit which has the Git-trailers above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git log -1 --grep='^From-source-git-commit: .\\+$'\n$ git log -1 --grep='^From-dist-git-commit: .\\+$'\n")),(0,r.kt)("p",null,"Identify the pair-commits from the other repository."),(0,r.kt)("p",null,"Tell which pair is the latest. The commits to be synced are the ones newer\nthan the latest pair."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Given the following history:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Source-git                    Dist-git\n\n   E *\n     |\n   D *                           * 4\n     |                           |\n   C * (From: 3)  <------------  * 3\n     |                           |\n   B * ------------\x3e  (From: B)  * 2\n     |                           |\n   A * (From: 1)  <------------- * 1\n")),(0,r.kt)("p",null,"Commit ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," in source-git and commit ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," in dist-git would be found as the ones\nhaving the Git-trailers."),(0,r.kt)("p",null,"The commit pairs would be: ",(0,r.kt)("inlineCode",{parentName:"p"},"B-2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"C-3"),"."),(0,r.kt)("p",null,"The newest pair is ",(0,r.kt)("inlineCode",{parentName:"p"},"C-3"),", so ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD~2..")," needs to be synced from source-git to\ndist-git and ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD~1..")," needs to be synced from dist-git to source-git. (In\nother words: the history of source-git and dist-git has diverged.)"),(0,r.kt)("h2",{id:"proposed-tasks"},"Proposed tasks"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"source-git")," commands to mark the commit origin with Git-trailers"),(0,r.kt)("li",{parentName:"ol"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"source-git update-*")," commands to check the sync-status"),(0,r.kt)("li",{parentName:"ol"},"Implement checking the sync-status")))}m.isMDXComponent=!0}}]);