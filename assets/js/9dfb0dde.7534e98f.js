"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[8210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Monitoring"},a="Monitoring of Packit Service",p={unversionedId:"monitoring/index",id:"monitoring/index",title:"Monitoring",description:"Pushgateway",source:"@site/deployment/monitoring/index.md",sourceDirName:"monitoring",slug:"/monitoring/",permalink:"/deployment/monitoring/",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/monitoring/index.md",tags:[],version:"current",frontMatter:{title:"Monitoring"},sidebar:"autogenerated",previous:{title:"Internal Testing Farm Ranch",permalink:"/deployment/internal_tf"},next:{title:"Logs",permalink:"/deployment/monitoring/logs"}},s={},c=[{value:"Pushgateway",id:"pushgateway",level:2},{value:"Flower",id:"flower",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring-of-packit-service"},"Monitoring of Packit Service"),(0,o.kt)("h2",{id:"pushgateway"},"Pushgateway"),(0,o.kt)("p",null,"To record ",(0,o.kt)("em",{parentName:"p"},"Packit Service"),"-related metrics from Celery tasks we are going to use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/pushgateway"},"Prometheus Pushgateway")," which is\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/packit/deployment/blob/main/openshift/pushgateway.yml.j2"},"deployed")," in our cluster.\nIt can collect the metrics from the workers and provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint for Prometheus.\nThere is a Prometheus instance running in OpenShift PSI, which is going to\nscrape the ",(0,o.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint and then it will be possible\nto visualize them. Therefore the ",(0,o.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint needs to be publicly\naccessible - it is exposed on ",(0,o.kt)("a",{parentName:"p",href:"https://workers.packit.dev/metrics"},"https://workers.packit.dev/metrics")," for metrics\nof the production instance and ",(0,o.kt)("a",{parentName:"p",href:"https://workers.stg.packit.dev/metrics"},"https://workers.stg.packit.dev/metrics"),"\nfor metrics of the staging instance.\nWe use nginx (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/packit/deployment/blob/main/openshift/nginx.yml.j2"},"definition"),") to serve as a reverse\nproxy for the pushgateway, which enables us to allow only ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," requests and\nforward these to pushgateway (workers can send ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," requests internally)."),(0,o.kt)("h2",{id:"flower"},"Flower"),(0,o.kt)("p",null,"To record ",(0,o.kt)("em",{parentName:"p"},"celery")," related metrics from Celery tasks we are going to use\n",(0,o.kt)("a",{parentName:"p",href:"http://mher.github.io/flower/prometheus-integration.html#prometheus-integration"},"Flower Prometheus Integration"),"."))}u.isMDXComponent=!0}}]);