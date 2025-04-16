"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[43123],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),g=r,d=s["".concat(l,".").concat(g)]||s[g]||h[g]||o;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=n(58168),r=(n(96540),n(15680));const o={title:"GitHub API Call Rate Limits",authors:"csomh"},a=void 0,c={unversionedId:"monitoring/github-api-call-inventory/index",id:"monitoring/github-api-call-inventory/index",title:"GitHub API Call Rate Limits",description:"Inventory of GitHub API calls made during a pipeline run",source:"@site/research/monitoring/github-api-call-inventory/index.md",sourceDirName:"monitoring/github-api-call-inventory",slug:"/monitoring/github-api-call-inventory/",permalink:"/research/monitoring/github-api-call-inventory/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/monitoring/github-api-call-inventory/index.md",tags:[],version:"current",frontMatter:{title:"GitHub API Call Rate Limits",authors:"csomh"},sidebar:"autogenerated",previous:{title:"Error Budgets",permalink:"/research/monitoring/error-budgets/users-expectations"},next:{title:"Logs aggregations",permalink:"/research/monitoring/logs-aggregation/"}},l={},p=[{value:"Inventory of GitHub API calls made during a pipeline run",id:"inventory-of-github-api-calls-made-during-a-pipeline-run",level:2},{value:"Collecting metrics on GitHub API calls",id:"collecting-metrics-on-github-api-calls",level:2},{value:"Approach 1: Patch PyGithub to inject a metric object",id:"approach-1-patch-pygithub-to-inject-a-metric-object",level:3},{value:"Approach 2: Use a proxy",id:"approach-2-use-a-proxy",level:3}],u={toc:p},s="wrapper";function h(e){let{components:t,...o}=e;return(0,r.yg)(s,(0,i.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"inventory-of-github-api-calls-made-during-a-pipeline-run"},"Inventory of GitHub API calls made during a pipeline run"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{target:"_blank",href:n(51341).A},"this Jupyter Notebook"),"."),(0,r.yg)("h2",{id:"collecting-metrics-on-github-api-calls"},"Collecting metrics on GitHub API calls"),(0,r.yg)("p",null,"We want to count the number of GitHub API calls, so that we can produce an\nindicator about the average API calls per pipeline run. Such an indicator\ncould help us notice if code changes result in an increase in the API calls\nmade, and so making it more likely that the call rate limits are reached in\ncertain orgs."),(0,r.yg)("p",null,"Packit and Packit-Service interact with GitHub through ogr, which in turn\nrelies on PyGithub."),(0,r.yg)("h3",{id:"approach-1-patch-pygithub-to-inject-a-metric-object"},"Approach 1: Patch PyGithub to inject a metric object"),(0,r.yg)("p",null,"The first thing, that was explored is if PyGithub could be patched in some way\nin order to enable Prometheus metrics collection. This would be possible, by\npatching ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/PyGithub/PyGithub/blob/master/github/Requester.py"},"Requester")," to accept a Prometheus metric object and use it. This\nthen could be used to pass down a metrics collector object (for example a\nCounter) from PackitAPI through ogr to PyGithub."),(0,r.yg)("p",null,"Going through the whole flow:"),(0,r.yg)("p",null,"In packit-service GithubProjects are obtained with\n",(0,r.yg)("inlineCode",{parentName:"p"},"ServiceConfig.get_project()"),". This method (implemented in\n",(0,r.yg)("inlineCode",{parentName:"p"},"packit.config.config.Config"),") will need to be updated to take a\n",(0,r.yg)("inlineCode",{parentName:"p"},"github_call_counter")," object and pass it down to ",(0,r.yg)("inlineCode",{parentName:"p"},"ogr.get_project()"),"."),(0,r.yg)("p",null,"Here ",(0,r.yg)("inlineCode",{parentName:"p"},"ogr.factory.get_project()")," would pass it down to ",(0,r.yg)("inlineCode",{parentName:"p"},"GithubService")," which\nthen would pass it down to ",(0,r.yg)("inlineCode",{parentName:"p"},"GithubProject"),", which then would pass it down to\nthe PyGithub ",(0,r.yg)("inlineCode",{parentName:"p"},"Github")," object, so that it can be used as ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/PyGithub/PyGithub/blob/e414c3227bb15819b443b4474f1aded433011bda/github/MainClass.py#L122"},"a new property of the\n",(0,r.yg)("inlineCode",{parentName:"a"},"Requester")),", in order to be able to pass it to the connection, and\nincremented every time ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/PyGithub/PyGithub/blob/e414c3227bb15819b443b4474f1aded433011bda/github/Requester.py#L129"},"a response is received"),"."),(0,r.yg)("p",null,"Patching PyGithub could be done while building the service and the worker\nimages. The patches could be also submitted upstream, to get some feedback on\nthe approach and maybe incorporate them in PyGithub."),(0,r.yg)("h3",{id:"approach-2-use-a-proxy"},"Approach 2: Use a proxy"),(0,r.yg)("p",null,"An another solution that ",(0,r.yg)("em",{parentName:"p"},"might")," work is to update the hosts files in the\nservice and worker images and route all connections to GitHub through an\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/"},"NGINX proxy pod"),", and then use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nginxinc/nginx-prometheus-exporter"},"NGINX Prometheus Exporter")," to expose some\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nginxinc/nginx-prometheus-exporter#http"},"HTTP metrics"),", which then could be interpreted as metrics on GitHub API\ncalls. Exposing these metrics\u2014so that they can be scraped\u2014would require\nsetting up a new route, something like ",(0,r.yg)("inlineCode",{parentName:"p"},"github-calls.packit.dev"),". I did not\ntry this approach, so some more time should be spent on this, to figure out if\nit would indeed work."))}h.isMDXComponent=!0},51341:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/github-api-call-inventory-7a83ac085ea342507f722cdace0bb171.ipynb"}}]);