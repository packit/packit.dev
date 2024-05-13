"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Internal Testing Farm Ranch"},i="Approve a project for using internal Testing Farm ranch",p={unversionedId:"internal_tf",id:"internal_tf",title:"Internal Testing Farm Ranch",description:"Add the project namespace to the enabledprojectsforinternaltf list in secrets/packit/prod/packit-service.yaml.j2",source:"@site/deployment/internal_tf.md",sourceDirName:".",slug:"/internal_tf",permalink:"/deployment/internal_tf",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/internal_tf.md",tags:[],version:"current",frontMatter:{title:"Internal Testing Farm Ranch"},sidebar:"autogenerated",previous:{title:"Images",permalink:"/deployment/images"},next:{title:"Monitoring",permalink:"/deployment/monitoring/"}},c={},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"approve-a-project-for-using-internal-testing-farm-ranch"},"Approve a project for using internal Testing Farm ranch"),(0,o.kt)("p",null,"Add the project namespace to the ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled_projects_for_internal_tf")," list in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/packit/deployment/blob/main/secrets/packit/prod/packit-service.yaml.j2"},"secrets/packit/prod/packit-service.yaml.j2")),(0,o.kt)("p",null,"Changes in config won't land automatically in production, you also need to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/packit/deployment/tree/main/secrets#update-secrets-in-openshift"},"update the config manually with our script")," or via ",(0,o.kt)("a",{parentName:"p",href:"https://console-openshift-console.apps.auto-prod.gi0n.p1.openshiftapps.com/k8s/ns/packit-prod/secrets/packit-config"},"Web Console")," and restart all the services:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ oc rollout restart deploy/packit-service\n$ oc rollout restart sts/packit-worker-short-running\n$ oc rollout restart sts/packit-worker-long-running\n")),(0,o.kt)("p",null,"To list all workflows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ oc get deploy\n$ oc get sts\n")))}m.isMDXComponent=!0}}]);