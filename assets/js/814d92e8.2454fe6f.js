"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2861],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var i=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,o=function(e,r){if(null==e)return{};var t,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return i.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},h=i.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return t?i.createElement(m,s(s({ref:r},c),{},{components:t})):i.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=h;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<n;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},42536:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const n={title:"Improve Packit Service event processing",authors:"lbarczio"},s=void 0,a={unversionedId:"ux/improve-service-processing",id:"ux/improve-service-processing",title:"Improve Packit Service event processing",description:"Problematic parts of the process",source:"@site/research/ux/improve-service-processing.md",sourceDirName:"ux",slug:"/ux/improve-service-processing",permalink:"/research/ux/improve-service-processing",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/ux/improve-service-processing.md",tags:[],version:"current",frontMatter:{title:"Improve Packit Service event processing",authors:"lbarczio"},sidebar:"autogenerated",previous:{title:"Configuration versioning",permalink:"/research/ux/configuration-versioning"}},l={},p=[{value:"Problematic parts of the process",id:"problematic-parts-of-the-process",level:2},{value:"Suggestions for improvements",id:"suggestions-for-improvements",level:2},{value:"Can we uninstall a repo? - Not receive events, after some period of time when we didn\u2019t produce any meaningful work.",id:"can-we-uninstall-a-repo---not-receive-events-after-some-period-of-time-when-we-didnt-produce-any-meaningful-work",level:4},{value:"Add higher prio to tasks from repos who are active users",id:"add-higher-prio-to-tasks-from-repos-who-are-active-users",level:4},{value:"Prefiltering in fedmsg",id:"prefiltering-in-fedmsg",level:4},{value:"Recording metrics about tasks",id:"recording-metrics-about-tasks",level:4},{value:"TODOs:",id:"todos",level:2}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"problematic-parts-of-the-process"},"Problematic parts of the process"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"setting GH statuses is the slowest part of the short running tasks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this shows mainly in projects with a lot of targets configured):")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[2022-04-12 21:44:01,874: DEBUG/ForkPoolWorker-1] Status reporter will report for GithubProject(namespace=\"osbuild\", repo=\"osbuild\"), commit=937afa51b19f5c78b552e77694d80845e69f2a84, pr=1003\n[2022-04-12 21:44:01,874: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:centos-stream-9-x86_64': SRPM build is in progress...\n[2022-04-12 21:44:02,553: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-36-ppc64le': SRPM build is in progress...\n[2022-04-12 21:44:02,900: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-34-ppc64le': SRPM build is in progress...\n[2022-04-12 21:44:03,255: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:centos-stream-8-x86_64': SRPM build is in progress...\n[2022-04-12 21:44:03,631: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-35-ppc64le': SRPM build is in progress...\n[2022-04-12 21:44:03,977: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:epel-8-aarch64': SRPM build is in progress...\n[2022-04-12 21:44:04,371: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-36-aarch64': SRPM build is in progress...\n[2022-04-12 21:44:04,698: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-36-s390x': SRPM build is in progress...\n[2022-04-12 21:44:05,064: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-34-aarch64': SRPM build is in progress...\n[2022-04-12 21:44:05,431: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-35-x86_64': SRPM build is in progress...\n[2022-04-12 21:44:06,107: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:centos-stream-8-aarch64': SRPM build is in progress...\n[2022-04-12 21:44:06,445: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-34-x86_64': SRPM build is in progress...\n[2022-04-12 21:44:06,794: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-rawhide-ppc64le': SRPM build is in progress...\n[2022-04-12 21:44:07,169: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-35-s390x': SRPM build is in progress...\n[2022-04-12 21:44:07,538: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-rawhide-x86_64': SRPM build is in progress...\n[2022-04-12 21:44:07,870: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-35-aarch64': SRPM build is in progress...\n[2022-04-12 21:44:08,215: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-36-x86_64': SRPM build is in progress...\n[2022-04-12 21:44:08,541: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:centos-stream-9-aarch64': SRPM build is in progress...\n[2022-04-12 21:44:08,893: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-34-s390x': SRPM build is in progress...\n[2022-04-12 21:44:09,227: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:epel-8-x86_64': SRPM build is in progress...\n[2022-04-12 21:44:09,576: DEBUG/ForkPoolWorker-1] Setting Github status check 'in_progress' for check 'rpm-build:fedora-rawhide-aarch64': SRPM build is in progress...\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"we probably can't fasten the process of creating check runs"),(0,o.kt)("li",{parentName:"ul"},"overall, the scaling of short-running worker should help with this"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"processing event when there is no config file"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"finding out there is no config file takes few seconds (on average around 2, but this depends probably on the repo size,\nI have seen also a log with 4 seconds duration)"),(0,o.kt)("li",{parentName:"ul"},"we support more file formats/names (packit.yaml, packit.json, .packit.yaml, ...)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"[.]","packit.json should be removed if noone uses it"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the target expansion is also done more times during one processing, we could improve it (using properties and setting build/test targets only once),\nbut the process takes milliseconds, so this is not problematic from a time perspective"))),(0,o.kt)("h2",{id:"suggestions-for-improvements"},"Suggestions for improvements"),(0,o.kt)("h4",{id:"can-we-uninstall-a-repo---not-receive-events-after-some-period-of-time-when-we-didnt-produce-any-meaningful-work"},"Can we uninstall a repo? - Not receive events, after some period of time when we didn\u2019t produce any meaningful work."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the documentation provides info on how to list installations, get a specific installation, delete, suspend it\n(when a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account)\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/apps"},"https://docs.github.com/en/rest/reference/apps")),(0,o.kt)("li",{parentName:"ul"},"we could have a periodic job which would check the installations and if an installed repo does not contain a config file\nafter some time limit (e.g. a month after installation), uninstall it",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if the app is installed on a namespace - at least one repo with a config file?")))),(0,o.kt)("h4",{id:"add-higher-prio-to-tasks-from-repos-who-are-active-users"},"Add higher prio to tasks from repos who are active users"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"in service we could get the repo name and check it in DB and accordingly route the tasks to different queues\n(as we do currently for long and short running tasks)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'the info about "active" users would be updated in the worker tasks'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"do we want to have it only binary? for this we could proceed similarly as with short/long running queues",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"run at least one job for the repo"),(0,o.kt)("li",{parentName:"ol"},"no jobs run"))),(0,o.kt)("li",{parentName:"ul"},"or something more granular - this would require utilization of Celery ",(0,o.kt)("inlineCode",{parentName:"li"},"priority"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"suggestions:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"avoid overloading service by one project. (Decrease priority if we have at least X jobs already running for this namespace/project/PR.)"),(0,o.kt)("li",{parentName:"ol"},"historically active users. (Increase priority if a project has at least X jobs during the last week/month/...)"),(0,o.kt)("li",{parentName:"ol"},"decrease priority for some triggers -- e.g. Decrease priority if the trigger is push/release."),(0,o.kt)("li",{parentName:"ol"},"increase/decrease priority for some projects -- e.g. set it in the service-config. (Test projects can have lower priority, some privileged projects higher.)"))))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"what ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celeryq.dev/en/master/faq.html#does-celery-support-task-priorities"},"Celery docs")," tells about priorities:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Does Celery support task priorities?\n\nAnswer: Yes, RabbitMQ supports priorities since version 3.5.0, and the Redis transport emulates priority support.\n\nYou can also prioritize work by routing high priority tasks to different workers.\nIn the real world this usually works better than per message priorities. You can use this in combination with rate limiting,\nand per message priorities to achieve a responsive system.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the priority can be set when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"task.apply_async()")))),(0,o.kt)("h4",{id:"prefiltering-in-fedmsg"},"Prefiltering in fedmsg"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we already do prefiltering - e.g.checking Packit user for Copr builds"),(0,o.kt)("li",{parentName:"ul"},"can we do something more here?")),(0,o.kt)("h4",{id:"recording-metrics-about-tasks"},"Recording metrics about tasks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we should first start recording more tasks-related metrics to get more insights",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"task duration"),(0,o.kt)("li",{parentName:"ul"},"the rate of tasks processing repos without a config file"),(0,o.kt)("li",{parentName:"ul"},"?")))),(0,o.kt)("h2",{id:"todos"},"TODOs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"more metrics"),(0,o.kt)("li",{parentName:"ol"},"drop ",(0,o.kt)("inlineCode",{parentName:"li"},"[.]packit.json")," from config file names we support")),(0,o.kt)("p",null,"then depending on the metrics some optional: 3. periodical uninstalling of unactive repos 4. higher priority for tasks handling active projects"))}d.isMDXComponent=!0}}]);