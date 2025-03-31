"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[74825],{324:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=t(58168),l=(t(96540),t(15680));const r={title:"Packit Service deployment improvements",authors:"sakalosj"},i=void 0,o={unversionedId:"deployment/deployment-improvements/index",id:"deployment/deployment-improvements/index",title:"Packit Service deployment improvements",description:"Motivation",source:"@site/research/deployment/deployment-improvements/index.md",sourceDirName:"deployment/deployment-improvements",slug:"/deployment/deployment-improvements/",permalink:"/research/deployment/deployment-improvements/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/deployment/deployment-improvements/index.md",tags:[],version:"current",frontMatter:{title:"Packit Service deployment improvements",authors:"sakalosj"},sidebar:"autogenerated",previous:{title:"Deploy a testing instance",permalink:"/research/deployment/deploy-packit-pr"},next:{title:"Distributed workers",permalink:"/research/deployment/distributed-workers/"}},p={},m=[{value:"Motivation",id:"motivation",level:2},{value:"Current Flow",id:"current-flow",level:2},{value:"Research",id:"research",level:2},{value:"Installation source",id:"installation-source",level:3},{value:"Image build approach",id:"image-build-approach",level:3},{value:"High level build flow strategies",id:"high-level-build-flow-strategies",level:3},{value:"OpenShift vs. Public service",id:"openshift-vs-public-service",level:4},{value:"OpenShift",id:"openshift",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Discussion output",id:"discussion-output",level:2}],u={toc:m},s="wrapper";function g(e){let{components:a,...t}=e;return(0,l.yg)(s,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"motivation"},"Motivation"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"docker image related dependencies -\npackit image which is providing dependencies for packit-service image, adding unwanted complexity and delays in deployment")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"dependencies on fedora rpm release -"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"for packit-service - deployment depends on rpm deployment, which can be quite long (to fix typo you have to go through whole rpm deployment process)"),(0,l.yg)("li",{parentName:"ul"},"for 3rd party packages - we are facing issues when package was not released as rpm for all required OS versions")))),(0,l.yg)("p",null,"Areas to be covered:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"how we handle dependencies in code(rpm vs github)"),(0,l.yg)("li",{parentName:"ul"},"how we handle container image dependencies (s2i vs base_image-final_image)"),(0,l.yg)("li",{parentName:"ul"},"how we will handle overall flow")),(0,l.yg)("h2",{id:"current-flow"},"Current Flow"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"new commit in master/stable branch"),(0,l.yg)("li",{parentName:"ol"},"image build is automatically triggered in dockerhub. There is some delay, but it can be triggered manually"),(0,l.yg)("li",{parentName:"ol"},"new image is pulled to OpenShift via OpenShift cron job and pods are rebuild:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"prod every Sunday at 2:00"),(0,l.yg)("li",{parentName:"ul"},"stg every hour")))),(0,l.yg)("h2",{id:"research"},"Research"),(0,l.yg)("h3",{id:"installation-source"},"Installation source"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"github"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"pros:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"current changes in other projects are always in place - useful especially for stg branch"))),(0,l.yg)("li",{parentName:"ul"},"cons:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Handling of dependencies is harder (we need to mix ",(0,l.yg)("inlineCode",{parentName:"li"},"rpm")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"PyPI")," versions)."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"rpm:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"pros:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"All dependencies are installed similarly and automatically via ",(0,l.yg)("inlineCode",{parentName:"li"},"rpm"),"."))),(0,l.yg)("li",{parentName:"ul"},"cons:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"very long deployment process")))))),(0,l.yg)("h3",{id:"image-build-approach"},"Image build approach"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"s2i: Source-to-Image (S2I) is a tool for building reproducible, Docker-formatted container images. It produces ready-to-run images by injecting application source into a container image and assembling a new image. The new image incorporates the base image (the builder) and built source and is ready to use with the docker run command. S2I supports incremental builds, which re-use previously downloaded dependencies, previously built artifacts, etc."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"pros:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"separating code and image development - probably advantage in bigger projects where development and devops is separated"))),(0,l.yg)("li",{parentName:"ul"},"cons:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"not copying .git to image, using default paths (/opt/app/src), maybe others which can probably require our scripts rework"))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"normal image build (eg. ",(0,l.yg)("inlineCode",{parentName:"p"},"docker build ..."),"):"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"pros:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"already in use in our environment"),(0,l.yg)("li",{parentName:"ul"},"no need to implement additional tool"),(0,l.yg)("li",{parentName:"ul"},"clean approach")))))),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"image name"),(0,l.yg)("th",{parentName:"tr",align:null},"build time"),(0,l.yg)("th",{parentName:"tr",align:null},"size"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ps_normal_github_base"),(0,l.yg)("td",{parentName:"tr",align:null},"4m42.531s"),(0,l.yg)("td",{parentName:"tr",align:null},"797MB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ps_normal_github_final"),(0,l.yg)("td",{parentName:"tr",align:null},"0m12.925s"),(0,l.yg)("td",{parentName:"tr",align:null},"797MB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"----------------------------------"),(0,l.yg)("td",{parentName:"tr",align:null},"-----------"),(0,l.yg)("td",{parentName:"tr",align:null},"------------")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ps_normal_rpm_base"),(0,l.yg)("td",{parentName:"tr",align:null},"5m8.026s"),(0,l.yg)("td",{parentName:"tr",align:null},"804MB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ps_normal_rpm_final"),(0,l.yg)("td",{parentName:"tr",align:null},"0m15.766s"),(0,l.yg)("td",{parentName:"tr",align:null},"804MB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"----------------------------------"),(0,l.yg)("td",{parentName:"tr",align:null},"-----------"),(0,l.yg)("td",{parentName:"tr",align:null},"------------")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ps_s2i_github_base"),(0,l.yg)("td",{parentName:"tr",align:null},"4m38.620s"),(0,l.yg)("td",{parentName:"tr",align:null},"1.12GB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ps_s2i_github_final"),(0,l.yg)("td",{parentName:"tr",align:null},"0m10.715s"),(0,l.yg)("td",{parentName:"tr",align:null},"1.12GB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"----------------------------------"),(0,l.yg)("td",{parentName:"tr",align:null},"-----------"),(0,l.yg)("td",{parentName:"tr",align:null},"------------")))),(0,l.yg)("h3",{id:"high-level-build-flow-strategies"},"High level build flow strategies"),(0,l.yg)("h4",{id:"openshift-vs-public-service"},"OpenShift vs. Public service"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"OpenShift:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"pros:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"flexible"),(0,l.yg)("li",{parentName:"ul"},"no waiting in queue"))),(0,l.yg)("li",{parentName:"ul"},"cons:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"additional maintenance"),(0,l.yg)("li",{parentName:"ul"},"additional resources = additional costs/failures because of resource limit"))))),(0,l.yg)("li",{parentName:"ul"},"Public service:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"pros:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"our current approach - no radical changes required"),(0,l.yg)("li",{parentName:"ul"},"simple and straightforward"),(0,l.yg)("li",{parentName:"ul"},"free"))),(0,l.yg)("li",{parentName:"ul"},"cons:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"dependency on external service"),(0,l.yg)("li",{parentName:"ul"},"long queue time in case of service issue/high load")))))),(0,l.yg)("h4",{id:"openshift"},"OpenShift"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Source-to-Image - (",(0,l.yg)("inlineCode",{parentName:"li"},"sourceStrategy")," in OC configuration) is using s2i tool for image deployment")),(0,l.yg)("p",null,"Links:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build"},"s2i details"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/dev_guide/builds/build_strategies.html#source-to-image-strategy-options"},"s2i strategy options"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://www.openshift.com/blog/create-s2i-builder-image"},"s2i tool blog"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Image Stream - current configuration")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Custom Build - need more details"))),(0,l.yg)("h2",{id:"conclusion"},"Conclusion"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Source-to-image (S2I) - no performance improvements, bigger image"),(0,l.yg)("li",{parentName:"ul"},"RPM vs github:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"from performance perspective basically same results"),(0,l.yg)("li",{parentName:"ul"},"github repos should not have issues with OS version - will make deployment easier"))),(0,l.yg)("li",{parentName:"ul"},"splitting image to base + final, will improve build times")),(0,l.yg)("h2",{id:"discussion-output"},"Discussion output"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"GitHub will be used for installing internal projects",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Dependencies have to be installed via RPM's for security reasons"),(0,l.yg)("li",{parentName:"ul"},"There are 2 sources of dependencies - spec file and setup.cfg - both have to be taken into account"))),(0,l.yg)("li",{parentName:"ul"},"Deployment will use the same branch (master/stable) for all internal projects")))}g.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(t),y=l,d=s["".concat(p,".").concat(y)]||s[y]||g[y]||r;return t?n.createElement(d,i(i({ref:a},u),{},{components:t})):n.createElement(d,i({ref:a},u))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);