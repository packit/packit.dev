"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[34763],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,f=h["".concat(c,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(58168),i=(n(96540),n(15680));const r={title:"Automation of FAS verification in Packit Service",date:new Date("2022-05-24T00:00:00.000Z"),authors:"lbarczio",tags:["fas"]},o=void 0,s={permalink:"/posts/fas-verification-automation",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/fas-verification-automation/index.md",source:"@site/posts/fas-verification-automation/index.md",title:"Automation of FAS verification in Packit Service",description:"As you may already know, for using Packit Service",date:"2022-05-24T00:00:00.000Z",formattedDate:"May 24, 2022",tags:[{label:"fas",permalink:"/posts/tags/fas"}],readingTime:2.055,hasTruncateMarker:!0,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"Automation of FAS verification in Packit Service",date:"2022-05-24T00:00:00.000Z",authors:"lbarczio",tags:["fas"]},prevItem:{title:"Running tests with builds from another PR",permalink:"/posts/testing-farm-triggering"},nextItem:{title:"Downstream automation is here",permalink:"/posts/downstream-automation"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},h="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(h,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"As you may already know, for using Packit Service\nGitHub App we ",(0,i.yg)("a",{parentName:"p",href:"/docs/guide/#2-approval"},"require our users to have a valid Fedora Account System account"),".\nWe were verifying the newcomers until now manually, but in recent weeks, we have implemented an automated solution\nfor it. Let's take a closer look at how it is done currently and what have we improved!"),(0,i.yg)("p",null,"Formerly, the process of verification by us started by waiting for the users to provide\nus their FAS username, then checking whether the provided FAS account\nexists and matches, and finally, manually adding the account to our allowlist in the database. For the communication with\nnew users, we have used our ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/packit/notifications/issues"},(0,i.yg)("inlineCode",{parentName:"a"},"packit/notifications")),"\nrepository on GitHub where we created an issue for each new installation."),(0,i.yg)("p",null,"Although in general, this worked, it required human interaction and since we are not available 24/7, the verification wasn't immediate.\nWe wanted to simplify the process for both users and us.\nSince in FAS, everyone can set their GitHub login that is then publicly available, we decided to utilize this setting."),(0,i.yg)("p",null,"So how does the verification work now?"),(0,i.yg)("p",null,"For each new GitHub installation, we first check whether there isn't a FAS account with the same login as the one\nthat triggered the installation. If we find such an account, we check whether the ",(0,i.yg)("inlineCode",{parentName:"p"},"GitHub Username")," in this FAS account matches\nthe GitHub login of the one that triggered the installation. To get the information about the FAS accounts, we\nuse the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/fedora-infra/fasjson-client"},(0,i.yg)("inlineCode",{parentName:"a"},"fasjson-client")," library"),".\nIf this check doesn't prove any match, we create an issue in the\n",(0,i.yg)("inlineCode",{parentName:"p"},"packit/notifications")," repository as previously. This is what it looks like:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Issue in packit/notifications",src:n(65700).A,width:"926",height:"467"})),(0,i.yg)("p",null,"As you can see, it contains instructions on how to trigger the verification automatically. So, everything the person who installed the app needs to do is set the ",(0,i.yg)("inlineCode",{parentName:"p"},"GitHub Username")," field in their FAS account (if they don't have it set\nalready) and then provide the FAS login via Packit comment command ",(0,i.yg)("inlineCode",{parentName:"p"},"/packit verify-fas the-fas-account"),"."),(0,i.yg)("p",null,"Once the user does this, our service runs the same verification again (with the FAS username provided in the command) and informs users about the status\nvia a comment in the same issue. The successful verification looks like this:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Successful verification",src:n(76533).A,width:"932",height:"397"})),(0,i.yg)("p",null,"This should save both users and our time and hopefully make the onboarding process smoother for the newcomers.\nSince this is a pretty new feature,\nlet us know whether there is something that is not clear so that we can improve it."))}p.isMDXComponent=!0},65700:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/notifications-repo-issue-aca66e4b420cfe5d05c205fcf0020f92.png"},76533:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/verify-fas-355a7111420aea52229c20f33a86322c.png"}}]);