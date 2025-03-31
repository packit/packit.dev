"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[68212],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,u=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(u,l(l({ref:t},g),{},{components:n})):a.createElement(u,l({ref:t},g))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16559:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/erd_how_to_get-e357e0c2d228dc4f20b6c4eb33c7caf0.png"},19501:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/copr_runs-faa20b2dd7f1cae72f5d4d2b732145cd.png"},21263:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/erd-d0707c145ea588ddbe9aba167342fe4f.png"},21766:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/object_model_2-4e1e45357fa3dbb9ae16aa07ed9b4f68.png"},46653:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/object_model_1-98eb910aa9ddd0af166a0546e3464b25.png"},54291:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/erd_only_one-aa5125c7ff5ecdda313490b30ecc8eb6.png"},56957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const r={title:"Database refresh",authors:["flachman","mfocko"]},l=void 0,o={unversionedId:"database/refresh",id:"database/refresh",title:"Database refresh",description:"Usecases",source:"@site/research/database/refresh.md",sourceDirName:"database",slug:"/database/refresh",permalink:"/research/database/refresh",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/database/refresh.md",tags:[],version:"current",frontMatter:{title:"Database refresh",authors:["flachman","mfocko"]},sidebar:"autogenerated",previous:{title:"\u2039commit_sha\u203a refactor follow-up",permalink:"/research/database/refactoring_project_events_and_commit_sha"},next:{title:"Analysis of production DB",permalink:"/research/database/whats-in-production-database"}},s={},p=[{value:"Usecases",id:"usecases",level:2},{value:"How to deal with chroots?",id:"how-to-deal-with-chroots",level:2},{value:"How to do pipelines?",id:"how-to-do-pipelines",level:2},{value:"Check-runs UX",id:"check-runs-ux",level:3},{value:"Effectiveness of the queries",id:"effectiveness-of-the-queries",level:2},{value:"Migrations",id:"migrations",level:3},{value:"Project/trigger/commit related models",id:"projecttriggercommit-related-models",level:2},{value:"Naming",id:"naming",level:2},{value:"Downstream workflow",id:"downstream-workflow",level:2},{value:"Follow-up issues",id:"follow-up-issues",level:2}],g={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"usecases"},"Usecases"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Show the whole workflow to the user."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"It's not clear what it is."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For each step, we get:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"previous step"),(0,i.yg)("li",{parentName:"ul"},"next steps"),(0,i.yg)("li",{parentName:"ul"},"other steps from this group (e.g. other chroots for this build)"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"It is possible to rerun the whole workflow.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"It is possible to rerun one step (and all the follow-up steps).")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"It is possible to rerun a part of one step (and the follow-up step(s))."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"E.g. one chroot."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For project, we get all workflows.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For project, we get all events.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For event, we get all workflows.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For event, we get a project.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For each step, we get event.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For each step, we get project."))),(0,i.yg)("h2",{id:"how-to-deal-with-chroots"},"How to deal with chroots?"),(0,i.yg)("p",null,"Have a grouping model for all chroots that are related. In Copr, all the chroots are build together and we can group those builds together, but where the grouping does not exists, we can do it manually (=implement the logic on our side)."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(19501).A,width:"820",height:"544"})),(0,i.yg)("h2",{id:"how-to-do-pipelines"},"How to do pipelines?"),(0,i.yg)("p",null,"We can create a new ",(0,i.yg)("inlineCode",{parentName:"p"},"Step")," model that will be a middle point between ",(0,i.yg)("inlineCode",{parentName:"p"},"Pipeline")," and build/test model. The ",(0,i.yg)("inlineCode",{parentName:"p"},"Step")," model can also track the relation to other ",(0,i.yg)("inlineCode",{parentName:"p"},"Steps"),". One test/build can be connected to multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"Steps"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"No ",(0,i.yg)("inlineCode",{parentName:"li"},"n:m")," mapping between ",(0,i.yg)("inlineCode",{parentName:"li"},"Pipeline")," and test/build model is needed."),(0,i.yg)("li",{parentName:"ul"},"Sharing of test/build is possible if we retrigger part of the workflow.")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(21263).A,width:"833",height:"556"})),(0,i.yg)("p",null,"We just need to make sure that there is only one build/test item linked to one ",(0,i.yg)("inlineCode",{parentName:"p"},"Step"),":"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(54291).A,width:"819",height:"544"})),(0,i.yg)("p",null,"Here are the queries we need to do:"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(16559).A,width:"831",height:"552"})),(0,i.yg)("p",null,"The following two images show the ",(0,i.yg)("inlineCode",{parentName:"p"},"Pipeline")," from the object point of view."),(0,i.yg)("p",null,"The whole pipeline retriggered:"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(21766).A,width:"820",height:"544"})),(0,i.yg)("p",null,"Only build retriggered:"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(46653).A,width:"819",height:"543"})),(0,i.yg)("h3",{id:"check-runs-ux"},"Check-runs UX"),(0,i.yg)("p",null,"Currently, user can request a rerun for a single chroot using the ",(0,i.yg)("inlineCode",{parentName:"p"},"retry")," button. With that, there will be a new pipeline for each chroot we re-trigger. To be able to group all the retried chroots, we can create a ",(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/rest/guides/getting-started-with-the-checks-api#check-runs-and-requested-actions"},"so-called requested action")," to re-trigger all or all failed. We can also provide choise of the step to re-trigger."),(0,i.yg)("h2",{id:"effectiveness-of-the-queries"},"Effectiveness of the queries"),(0,i.yg)("p",null,"For the regular queries covering multiple entries that goes across the database, it might be better to create them as one query and not relly on the ORM."),(0,i.yg)("h3",{id:"migrations"},"Migrations"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For the model that groups the Copr chroots together, we need to group them by ",(0,i.yg)("inlineCode",{parentName:"li"},"copr_id")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"SRPMBuildModel"),"."),(0,i.yg)("li",{parentName:"ul"},"For the model that groups the Koji chroots together, we need to group them by ",(0,i.yg)("inlineCode",{parentName:"li"},"SRPMBuildModel"),".\n(There is no connection on the Koji level.) For the future, we need to do this ourselves."),(0,i.yg)("li",{parentName:"ul"},"In case of ",(0,i.yg)("inlineCode",{parentName:"li"},"TF"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"SRPMBuildModel")," is probably the only way, but this doesn't cover the test retrigger and test-only scenario.\nWe can use ",(0,i.yg)("inlineCode",{parentName:"li"},"TFTTestRunModel.submitted_time"),"."),(0,i.yg)("li",{parentName:"ul"},"When adding the ",(0,i.yg)("inlineCode",{parentName:"li"},"StepModel"),":",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Each build/test model will have a new ",(0,i.yg)("inlineCode",{parentName:"li"},"StepModel"),"."),(0,i.yg)("li",{parentName:"ul"},"Currently, ",(0,i.yg)("inlineCode",{parentName:"li"},"RunModel")," connects builds/tests together -- we can use this info to connect ",(0,i.yg)("inlineCode",{parentName:"li"},"StepModels")," together.")))),(0,i.yg)("h2",{id:"projecttriggercommit-related-models"},"Project/trigger/commit related models"),(0,i.yg)("p",null,"Currently:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Project for trigger not effective to get for multiple entries."),(0,i.yg)("li",{parentName:"ul"},"It's more a git reference than a trigger."),(0,i.yg)("li",{parentName:"ul"},"Commit is spread across the models (in build/test models and release).")),(0,i.yg)("p",null,"Proposal:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Rename ",(0,i.yg)("inlineCode",{parentName:"li"},"JobTriggerModel")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"CommitModel")," and add a ",(0,i.yg)("inlineCode",{parentName:"li"},"commit_hash")," attribute there."),(0,i.yg)("li",{parentName:"ul"},"Remove the ",(0,i.yg)("inlineCode",{parentName:"li"},"commit_sha")," attributes from the other classes."),(0,i.yg)("li",{parentName:"ul"},"Connect ",(0,i.yg)("inlineCode",{parentName:"li"},"CommitModel")," directly to the ",(0,i.yg)("inlineCode",{parentName:"li"},"ProjectModel")," to make the queries more effective (DAG structure shouldn't be a problem: ",(0,i.yg)("inlineCode",{parentName:"li"},"ProjectModel")," <- ",(0,i.yg)("inlineCode",{parentName:"li"},"PR/Branch/Release")," <- ",(0,i.yg)("inlineCode",{parentName:"li"},"CommitModel")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"ProjectModel")," <- ",(0,i.yg)("inlineCode",{parentName:"li"},"CommitModel"),")."),(0,i.yg)("li",{parentName:"ul"},"Commit can be connected to multiple objects:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"models in different projects (PR from fork, same branch in multiple repos)"),(0,i.yg)("li",{parentName:"ul"},"PR and branch (PR created from the same repo)"),(0,i.yg)("li",{parentName:"ul"},"branch and release (release created from this branch)"),(0,i.yg)("li",{parentName:"ul"},"-> The easiest solution is probably to have a different model for each occurrence. Grouping can still be done.")))),(0,i.yg)("h2",{id:"naming"},"Naming"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Remove ",(0,i.yg)("inlineCode",{parentName:"li"},"Model")," from the names."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"RunModel")," is confusing -> ",(0,i.yg)("inlineCode",{parentName:"li"},"PipelineModel"),"."),(0,i.yg)("li",{parentName:"ul"},"Because of the chroot grouping, we can have a following models (",(0,i.yg)("inlineCode",{parentName:"li"},"SomethingRunModel")," groups multiple ",(0,i.yg)("inlineCode",{parentName:"li"},"SomethingModels")," together.):",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SRPMBuild")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CoprBuildChroot")," + ",(0,i.yg)("inlineCode",{parentName:"li"},"CoprBuild"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"KojiBuildChroot")," + ",(0,i.yg)("inlineCode",{parentName:"li"},"KojiBuild"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"TestRunChroot"),"+ ",(0,i.yg)("inlineCode",{parentName:"li"},"TestRun")))),(0,i.yg)("li",{parentName:"ul"},"For steps, we can use ",(0,i.yg)("inlineCode",{parentName:"li"},"PipelineStepModel"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"JobTriggerModel")," is technically not a trigger, it's a project/git reference -> ",(0,i.yg)("inlineCode",{parentName:"li"},"ProjectReferenceModel")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"CommitModel"),"?")),(0,i.yg)("h2",{id:"downstream-workflow"},"Downstream workflow"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Both Koji build and Bodhi update can be connected to the dist-git commit.")),(0,i.yg)("h2",{id:"follow-up-issues"},"Follow-up issues"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Naming (remove word model, ",(0,i.yg)("inlineCode",{parentName:"li"},"s/RunModel/Pipeline"),", new build/test naming):\n",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/issues/1326"},"packit-service#1326")),(0,i.yg)("li",{parentName:"ol"},"Introduce models for group of chroots.\n",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/issues/1327"},"packit-service#1327")),(0,i.yg)("li",{parentName:"ol"},"Change ",(0,i.yg)("inlineCode",{parentName:"li"},"JobTriggerModel")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"CommitModel"),"/",(0,i.yg)("inlineCode",{parentName:"li"},"ProjectReference"),", add a ",(0,i.yg)("inlineCode",{parentName:"li"},"commit")," argument and connect to the project model.\n",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/issues/1328"},"packit-service#1328")),(0,i.yg)("li",{parentName:"ol"},"Introduce ",(0,i.yg)("inlineCode",{parentName:"li"},"PipelineStep")," model that connects ",(0,i.yg)("inlineCode",{parentName:"li"},"Pipelines")," and build/test models (the group ones, not chroot models)\nand save the first step in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Pipeline")," model.\n",(0,i.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/issues/1329"},"packit-service#1329"))))}m.isMDXComponent=!0}}]);