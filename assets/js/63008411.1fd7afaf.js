"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[17796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Workflow engines",authors:"lbarcziova"},i=void 0,l={unversionedId:"workflow-engines/index",id:"workflow-engines/index",title:"Workflow engines",description:"- this research aims to describe workflow engines that could improve the state of the service, in particular",source:"@site/research/workflow-engines/index.md",sourceDirName:"workflow-engines",slug:"/workflow-engines/",permalink:"/research/workflow-engines/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/workflow-engines/index.md",tags:[],version:"current",frontMatter:{title:"Workflow engines",authors:"lbarcziova"},sidebar:"autogenerated",previous:{title:"Job cancelling",permalink:"/research/ux/job-cancelling"},next:{title:"Airflow",permalink:"/research/workflow-engines/airflow"}},s={},c=[{value:"Conclusion, next steps",id:"conclusion-next-steps",level:2}],p={toc:c},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"this research aims to describe workflow engines that could improve the state of the service, in particular\nhow the logic around job dependencies could be eased by usage of these")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"you can find separate files describing tools that were proposed to be researched more:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/research/workflow-engines/airflow"},"Airflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/research/workflow-engines/argo-workflows"},"Argo workflows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/research/workflow-engines/temporal"},"Temporal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/research/workflow-engines/selinon"},"Selinon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/research/workflow-engines/prefect"},"Prefect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/research/workflow-engines/celery-canvas"},"(Celery Canvas)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"besides that, I found some great articles and resources overviewing some of these:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"overview and comparison of Argo, Airflow and Prefect: ",(0,o.kt)("a",{parentName:"li",href:"https://neptune.ai/blog/argo-vs-airflow-vs-prefect-differences"},"https://neptune.ai/blog/argo-vs-airflow-vs-prefect-differences")),(0,o.kt)("li",{parentName:"ul"},"Prefect vs Celery: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/PrefectHQ/prefect/issues/1689"},"https://github.com/PrefectHQ/prefect/issues/1689")),(0,o.kt)("li",{parentName:"ul"},"multiple 1 to 1 comparisons of some of the mentioned tools: ",(0,o.kt)("a",{parentName:"li",href:"https://www.datarevenue.com/en-blog/airflow-vs-luigi-vs-argo-vs-mlflow-vs-kubeflow"},"https://www.datarevenue.com/en-blog/airflow-vs-luigi-vs-argo-vs-mlflow-vs-kubeflow")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"how are job dependencies managed in other services?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"explicit dependencies/steps"),(0,o.kt)("li",{parentName:"ul"},"mostly own implementation of the logic:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/harness/drone/blob/e63b8f9326969220df73b9d74349405eb86c1073/operator/manager/teardown.go#L278"},"https://github.com/harness/drone/blob/e63b8f9326969220df73b9d74349405eb86c1073/operator/manager/teardown.go#L278")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/buildbot/buildbot/blob/90c1ce112443449b34527a2f6124b7b2ec78de2f/master/buildbot/process/build.py#L550C9-L550C22"},"https://github.com/buildbot/buildbot/blob/90c1ce112443449b34527a2f6124b7b2ec78de2f/master/buildbot/process/build.py#L550C9-L550C22")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gocd/gocd/blob/d46db3f41f08cfcbe2cc8bc5b2c8c846baa6a978/server/src/main/java/com/thoughtworks/go/server/domain/PipelineConfigDependencyGraph.java#L77C49-L77C49"},"https://github.com/gocd/gocd/blob/d46db3f41f08cfcbe2cc8bc5b2c8c846baa6a978/server/src/main/java/com/thoughtworks/go/server/domain/PipelineConfigDependencyGraph.java#L77C49-L77C49"))))))),(0,o.kt)("h2",{id:"conclusion-next-steps"},"Conclusion, next steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the logic behind mapping the event + configuration to the tasks and their dependencies\nneeds to be done on our side, the tools can help with the orchestration of the dependencies\nafter we define them"),(0,o.kt)("li",{parentName:"ul"},"without much changed needed, we could try utilising Celery Canvas to help us with\nscheduling tasks based on the dependencies we specify"),(0,o.kt)("li",{parentName:"ul"},"other tools mostly provide support for more complex usecases, but from the ones that were listed,\nI can see Airflow/Prefect could fit into what we do in Packit - the downside of using these\nis more complex deployment than we have now"),(0,o.kt)("li",{parentName:"ul"},"as for Airflow/Prefect, Airflow is a more stable tool that has great documentation, provides variety of\nfeatures and a lot of people already handled the problems we would need to handle; Prefect might be on the other hand more light-weight",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"I definitely suggest reading the previously mentioned ",(0,o.kt)("a",{parentName:"li",href:"https://neptune.ai/blog/argo-vs-airflow-vs-prefect-differences"},"comparison blogpost")))),(0,o.kt)("li",{parentName:"ul"},"some of the tools offer features for waiting for an external event (such as message on a messaging bus), we could\nutilise these (e.g. Airflow's Sensors)"),(0,o.kt)("li",{parentName:"ul"},"some of the solutions could help us get rid of sandcastle (KubernetesExecutor in Airflow)")))}u.isMDXComponent=!0}}]);