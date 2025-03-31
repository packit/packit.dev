"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[37595],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,g=d["".concat(p,".").concat(c)]||d[c]||h[c]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},49349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const i={title:"Authentication with remote platforms",authors:"ttomecek"},o=void 0,l={unversionedId:"ui/dashboard/oauth",id:"ui/dashboard/oauth",title:"Authentication with remote platforms",description:"Dashboard \u2190 GitHub",source:"@site/research/ui/dashboard/oauth.md",sourceDirName:"ui/dashboard",slug:"/ui/dashboard/oauth",permalink:"/research/ui/dashboard/oauth",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/ui/dashboard/oauth.md",tags:[],version:"current",frontMatter:{title:"Authentication with remote platforms",authors:"ttomecek"},sidebar:"autogenerated",previous:{title:"Improvements",permalink:"/research/ui/dashboard/dashboard-improvements"},next:{title:"Improving packit.dev",permalink:"/research/ui/website-improvements"}},p={},s=[{value:"Dashboard \u2190 GitHub",id:"dashboard--github",level:2},{value:"0. Initiation",id:"0-initiation",level:3},{value:"1. Redirect",id:"1-redirect",level:3},{value:"2. Back to dashboard",id:"2-back-to-dashboard",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Fedora",id:"fedora",level:2},{value:"Note",id:"note",level:3},{value:"GitLab",id:"gitlab",level:2},{value:"Benefits to users",id:"benefits-to-users",level:2},{value:"Dashboard next steps",id:"dashboard-next-steps",level:2}],u={toc:s},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"dashboard--github"},"Dashboard \u2190 GitHub"),(0,n.yg)("p",null,"This is nicely documented on ",(0,n.yg)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps"},'Github\'s "Authorizing OAuth Apps"'),"."),(0,n.yg)("h3",{id:"0-initiation"},"0. Initiation"),(0,n.yg)("p",null,'A user goes to our dashboard, fools around and clicks "Log in via GitHub".'),(0,n.yg)("h3",{id:"1-redirect"},"1. Redirect"),(0,n.yg)("p",null,"We will redirect the user to GitHub where they authenticate and authorize our dashboard to obtain data from GitHub. We should request perms to know user's repositories, public orgs and pull requests so we can obtain the list in the next step."),(0,n.yg)("p",null,"We need to supply ",(0,n.yg)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#1-request-a-users-github-identity"},"some data to GitHub"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"GET https://github.com/login/oauth/authorize\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"client_id")," \u2014 our GitHub app ID")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"redirect_url")," \u2014 either the page within dashboard where the login process started or the personalized view")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"login"),' \u2014 "Suggests a specific account to use for signing in and authorizing the app.", we don\'t have that info')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"scope")," \u2014 we only need read-only access so far (except for check runs, it would make sense to perform re-run for the dashboard)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"state"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"allow_signup")," \u2014 all blank"))),(0,n.yg)("h3",{id:"2-back-to-dashboard"},"2. Back to dashboard"),(0,n.yg)("p",null,"Once approved, we're back to dashboard via ",(0,n.yg)("inlineCode",{parentName:"p"},"redirect_url"),"."),(0,n.yg)("p",null,"GitHub granted us a temporary ",(0,n.yg)("inlineCode",{parentName:"p"},"code")," which we can use to get a proper API token to make GitHub requests on behalf of the user."),(0,n.yg)("p",null,"We concluded that we'd implement the logic in javascript for now to get the data from GitHub and then use it to personalize the dashboard."),(0,n.yg)("h3",{id:"conclusion"},"Conclusion"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Get a proper token after the redirect.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Obtain data from GitHub or get it from p-s' REST API")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Visualize"))),(0,n.yg)("h2",{id:"fedora"},"Fedora"),(0,n.yg)("p",null,"We'd like to use ",(0,n.yg)("a",{parentName:"p",href:"https://fedoraproject.org/wiki/Infrastructure/Authentication"},"Fedora's OpenID Connect"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"to get the FAS username so we can automate the onboarding process")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"to authenticate the user in order to provide interface for the Fedora workflow"))),(0,n.yg)("p",null,"The OpenID connect workflow is very similar to GitHub's OAuth workflow hence I'm not gonna go through the details."),(0,n.yg)("p",null,"There is a javascript library to work with OpenID Connect: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/openid/AppAuth-JS"},"https://github.com/openid/AppAuth-JS")),(0,n.yg)("h3",{id:"note"},"Note"),(0,n.yg)("p",null,"We'll need to get a new scope registered for us, see the list in Fedora's docs to get an idea."),(0,n.yg)("h2",{id:"gitlab"},"GitLab"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/api/oauth2.html"},"Very similar")," to GitHub's OAuth mechanism, except they want the services to create several values (",(0,n.yg)("inlineCode",{parentName:"p"},"STATE"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"CODE_VERIFIER")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"CODE_CHALLENGE"),") before initiating the process to make sure it's secure."),(0,n.yg)("h2",{id:"benefits-to-users"},"Benefits to users"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"They can see content they own (pull requests, repositories, pipeline runs), users don't really care about other repos.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"And in future have a single place to interact with all of their projects via dashboard, both in upstream and downstream."))),(0,n.yg)("h2",{id:"dashboard-next-steps"},"Dashboard next steps"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Implement the redirect mechanism for GitHub Oauth")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"I don't think we should create a new GitHub app specifically for the dashboard, we should keep using the one we have.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"We can either"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a personalized dashboard with a list of repos, orgs, pipeline runs and PRs")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Or we can order the existing views so that user's content is first and sorted by time it was modified (recently modified content first)")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Implement Fedora OpenID Connect workflow."))))}h.isMDXComponent=!0}}]);