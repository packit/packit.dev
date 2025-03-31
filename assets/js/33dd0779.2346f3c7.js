"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[91774],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return a?i.createElement(m,o(o({ref:t},g),{},{components:a})):i.createElement(m,o({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(58168),n=(a(96540),a(15680));const r={title:"Error Budgets",authors:["csomh","jpopelka"]},o=void 0,l={unversionedId:"monitoring/error-budgets/index",id:"monitoring/error-budgets/index",title:"Error Budgets",description:"Next steps for Packit",source:"@site/research/monitoring/error-budgets/index.md",sourceDirName:"monitoring/error-budgets",slug:"/monitoring/error-budgets/",permalink:"/research/monitoring/error-budgets/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/monitoring/error-budgets/index.md",tags:[],version:"current",frontMatter:{title:"Error Budgets",authors:["csomh","jpopelka"]},sidebar:"autogenerated",previous:{title:"Implementation",permalink:"/research/monitoring/adoption-metrics/implementation"},next:{title:"Definitions of SLOs and SLIs for Packit",permalink:"/research/monitoring/error-budgets/SLOs-SLIs"}},s={},u=[{value:"Next steps for Packit",id:"next-steps-for-packit",level:2},{value:"TL;DR: Notes and background",id:"tldr-notes-and-background",level:2},{value:"Defining the &quot;Error Budget&quot; Cookbook",id:"defining-the-error-budget-cookbook",level:3},{value:"Principles",id:"principles",level:3},{value:"Embracing Risk",id:"embracing-risk",level:3},{value:"Managing Risk",id:"managing-risk",level:5},{value:"Risk Tolerance of Services",id:"risk-tolerance-of-services",level:5},{value:"Target level of availability",id:"target-level-of-availability",level:5},{value:"Motivation for Error Budgets",id:"motivation-for-error-budgets",level:3},{value:"Forming an Error Budget",id:"forming-an-error-budget",level:5},{value:"Benefits",id:"benefits",level:5},{value:"Service Level Objectives",id:"service-level-objectives",level:3},{value:"Indicators",id:"indicators",level:5},{value:"Objectives",id:"objectives",level:5},{value:"Agreements",id:"agreements",level:5},{value:"What Do You and Your Users Care About?",id:"what-do-you-and-your-users-care-about",level:5},{value:"Collecting Indicators",id:"collecting-indicators",level:5},{value:"Aggregation",id:"aggregation",level:5},{value:"Standardize Indicators",id:"standardize-indicators",level:5},{value:"Objectives in Practice",id:"objectives-in-practice",level:3},{value:"Defining Objectives",id:"defining-objectives",level:5},{value:"Choosing targets",id:"choosing-targets",level:5},{value:"Control Measures",id:"control-measures",level:5},{value:"Managing Expectations",id:"managing-expectations",level:5}],g={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,i.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"next-steps-for-packit"},"Next steps for Packit"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Identify stakeholders who can help us to define our SLO"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Project which are the most frequent users of the service."),(0,n.yg)("li",{parentName:"ul"},"Prominent users:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/rhinstaller/anaconda"},"rhinstaller/anaconda")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/nmstate/nmstate"},"nmstate/nmstate")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/systemd/systemd"},"systemd/systemd")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/oamg/convert2rhel"},"oamg/convert2rhel")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/psss/tmt"},"psss/tmt")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/avocado-framework/avocado"},"avocado-framework/avocado")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/rpm-software-management/dnf"},"rpm-software-management/dnf")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/fedora-modularity/libmodulemd"},"fedora-modularity/libmodulemd")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/containerbuildsystem/atomic-reactor"},"containerbuildsystem/atomic-reactor")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/OpenSCAP/oval-graph"},"OpenSCAP/oval-graph")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/rpm-software-management/libdnf"},"rpm-software-management/libdnf")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/containerbuildsystem/osbs-client"},"containerbuildsystem/osbs-client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/psss/fmf"},"psss/fmf")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/abrt/retrace-server"},"abrt/retrace-server")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/cockpit-project/cockpit-podman"},"cockpit-project/cockpit-podman")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/storaged-project/blivet"},"storaged-project/blivet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/OpenSCAP/OVAL-visualization-as-graph"},"OpenSCAP/OVAL-visualization-as-graph")))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Discuss and document their expectations. At a minimum in terms of\n(questions are provided as an example):"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"latency",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"How fast should builds/tests start? (First feedback from the service\nthat something is happening.)"),(0,n.yg)("li",{parentName:"ul"},"How fast should job results become available?"))),(0,n.yg)("li",{parentName:"ul"},"throughput",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"How many builds/tests/jobs should the service handle?"))),(0,n.yg)("li",{parentName:"ul"},"error rate",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"How many if the jobs can fail due to causes not related to the\nbuild/test?"))),(0,n.yg)("li",{parentName:"ul"},"availability",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"What percentage of PRs/branches should be handled by the service?"))),(0,n.yg)("li",{parentName:"ul"},"durability",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"How long should job results stay available?")))),(0,n.yg)("p",{parentName:"li"},"Look at the ",(0,n.yg)("a",{parentName:"p",href:"https://cki-project.org/docs/hacking/rfcs/cki-004-slo/"},"CKI SLOs"),"."),(0,n.yg)("p",{parentName:"li"},"Collected expectations are in a ",(0,n.yg)("a",{parentName:"p",href:"/research/monitoring/error-budgets/users-expectations"},"separate document"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Figure out which of the expectations identified in the previous step can be\nmeasured with an indicator. What are these indicators (SLIs)? What are the\nSLOs?"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"We might want to check whether the SLOs make sense to the stakeholders."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Capture/produce the indicators (metrics/monitoring)")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Track indicators to know how we are doing against our targets (SLOs). This\nmeans setting up monitoring dashboards and alerts, and making sure we have\nthe process in place to become aware and take action (if needed) in case\nobjectives are in danger to be missed."))),(0,n.yg)("h2",{id:"tldr-notes-and-background"},"TL;DR: Notes and background"),(0,n.yg)("h3",{id:"defining-the-error-budget-cookbook"},'Defining the "Error Budget" Cookbook'),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.google.com/document/d/1LkTDrwLnT7Z6_Ql9rrH80ts3yNyKW0fDAXwbHm6KRIM/edit#heading=h.f3pony0nfxb"},"The Cookbook")," gathers best practices and necessary steps to define an error\nbudget, capturing the know-how from teams who already did this work."),(0,n.yg)("h3",{id:"principles"},"Principles"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Embracing Risk"),(0,n.yg)("li",{parentName:"ul"},"Service Level Objectives"),(0,n.yg)("li",{parentName:"ul"},"Eliminating Toil"),(0,n.yg)("li",{parentName:"ul"},"Monitoring"),(0,n.yg)("li",{parentName:"ul"},"Automation"),(0,n.yg)("li",{parentName:"ul"},"Release Engineering"),(0,n.yg)("li",{parentName:"ul"},"Simplicity")),(0,n.yg)("h3",{id:"embracing-risk"},"Embracing Risk"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://sre.google/sre-book/embracing-risk/"},"Chapter from the Google SRE book"),"."),(0,n.yg)("p",null,"Building extremely reliable services turns out to be very expensive and\ndifficult. Focusing on this could limit the teams ability to deliver new\nfeatures. And many times, it doesn't even make sense: user experience might be\ndominated by other, less reliable components. A user using a 99% reliable\nnetwork connection, won't be able to tell the difference between 99.99% and\n99.999% reliability of a service."),(0,n.yg)("p",null,"Due to this, focus should rather be given on finding the optimum balance\nbetween service uptime and availability and spending time on developing new\nfeatures."),(0,n.yg)("h5",{id:"managing-risk"},"Managing Risk"),(0,n.yg)("p",null,'"Unreliable systems can quickly erode users\' confidence".'),(0,n.yg)("p",null,"Balance between developing features that diminish failures as opposed to\ndevelop features that are directly visible or usable by end users."),(0,n.yg)("p",null,'"strive to make the service reliable enough, but not more reliable than it\nneeds to be"'),(0,n.yg)("p",null,'"an objective metric to represent the property of a system we want to optimize"'),(0,n.yg)("p",null,"A target helps with assessing current performance and track improvements and\ndegradations."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"time-based availability \u2192 uptime (",(0,n.yg)("a",{parentName:"li",href:"https://sre.google/sre-book/availability-table/#appendix_table-of-nines"},"availability table"),") - This might not be\nrelevant in all the cases, though. For example, Google being a globally\ndistributed service, it's up to some degree all the time at some part of the\nGlobe."),(0,n.yg)("li",{parentName:"ul"},"aggregate availability \u2192 request success rate - not all requests are equal,\nbut from an user point of view calculating with and overall success rate is\nusually a good approximation.")),(0,n.yg)("p",null,"Quarterly availability targets, tracked on a weekly or even daily basis."),(0,n.yg)("h5",{id:"risk-tolerance-of-services"},"Risk Tolerance of Services"),(0,n.yg)("p",null,"It's OK to have a lower availability target in order to give space for quicker\ninnovation."),(0,n.yg)("p",null,"Background error rate of ISPs: 0.01%\u20131% according to the book."),(0,n.yg)("h5",{id:"target-level-of-availability"},"Target level of availability"),(0,n.yg)("p",null,"Different groups of users might have antithetical availability and performance\nexpectations for the same service, depending on their usage scenario."),(0,n.yg)("p",null,"To resolve this conflict, the infrastructure (deployment) of the service can\nbe partitioned, each partition serving users with some specific set of\nrequirements. This approach will also allow externalizing the difference in\ncost for different levels of services, which in turn can motivate users to\nchoose the level of service with the lowest cost that still meets their needs."),(0,n.yg)("h3",{id:"motivation-for-error-budgets"},"Motivation for Error Budgets"),(0,n.yg)("p",null,"Inherent tension between development teams (aiming for product velocity) and\nSRE (aiming for reliability)."),(0,n.yg)("p",null,"There is also a tension in how a service is understood, devs know more about\ndevelopment, SRE knows more about operation."),(0,n.yg)("p",null,"Typical areas of tension:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"software fault tolerance"),(0,n.yg)("li",{parentName:"ul"},"testing"),(0,n.yg)("li",{parentName:"ul"},"push (release) frequency"),(0,n.yg)("li",{parentName:"ul"},"canary duration and size")),(0,n.yg)("p",null,"Proving the optimal balance is difficult, and can be driven by politics and\nbecome a function of negotiating skills."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},'"Hope is not a strategy"')),(0,n.yg)("p",null,"Instead there should be an objective metric that can guide negotiations in a\nreproducible way."),(0,n.yg)("h5",{id:"forming-an-error-budget"},"Forming an Error Budget"),(0,n.yg)("p",null,"Based on the service level objective (SLO)."),(0,n.yg)("p",null,"Defines a clear, objective metric that determines how unreliable a service is\nallowed to be within a quarter."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Product Management defines the SLO, which sets an expectation for the\nuptime."),(0,n.yg)("li",{parentName:"ol"},"Monitoring system (neutral third party) measures the uptime."),(0,n.yg)("li",{parentName:"ol"},'The previous two define the "budget" of how much "unreliability" is left in\nthe quarter.'),(0,n.yg)("li",{parentName:"ol"},"As long as there is error budget remaining, releases can be pushed.")),(0,n.yg)("h5",{id:"benefits"},"Benefits"),(0,n.yg)("p",null,"Discussions/decisions around release velocity can be driven by the error\nbudget."),(0,n.yg)("p",null,"External factors that reduce the SLO are also eat into the error budget (infra\ninstability) - shared responsibility for uptime."),(0,n.yg)("p",null,"Helps to highlight the cost of reliability targets, in terms of both\ninflexibility and slow innovation."),(0,n.yg)("h3",{id:"service-level-objectives"},"Service Level Objectives"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://sre.google/sre-book/service-level-objectives/"},"SLO Chapter")),(0,n.yg)("p",null,"Understand which behaviours matter for the service, and who to measure and\nevaluate those behaviours."),(0,n.yg)("p",null,"Service level indicators (SLIs), objectives (SLOs), and agreements (SLAs)."),(0,n.yg)("h5",{id:"indicators"},"Indicators"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"request latency - how long does it take to return a response to a request"),(0,n.yg)("li",{parentName:"ul"},"error rate"),(0,n.yg)("li",{parentName:"ul"},"system throughput"),(0,n.yg)("li",{parentName:"ul"},'availability - 99.95% = "three and a half nines" availability')),(0,n.yg)("p",null,"Ideally, an SLI directly measures a service level of interest, but sometimes\nonly a proxy is available."),(0,n.yg)("h5",{id:"objectives"},"Objectives"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"a target value or range of values for a service level that is measured by an\nSLI.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"SLI \u2264 target"),(0,n.yg)("li",{parentName:"ul"},"lower bound \u2264 SLI \u2264 upper bound"))),(0,n.yg)("li",{parentName:"ul"},"sharing SLOs with users helps setting expectations and avoid over- or\nunder-reliance."),(0,n.yg)("li",{parentName:"ul"},"Intentionally taking a service to outage in order to not to exceed it's\nservice level objective.")),(0,n.yg)("h5",{id:"agreements"},"Agreements"),(0,n.yg)("p",null,'Explicit or implicit contract with the users that includes consequences of\nmeeting or missing the SLOs they contain: "what happens if the SLOs aren\'t\nmet?"'),(0,n.yg)("p",null,"SRE don't get involved in constructing SLAs (that's a business and product\nfunction), however they are helping to avoid triggering the consequences of\nmissed SLOs and define SLIs."),(0,n.yg)("h5",{id:"what-do-you-and-your-users-care-about"},"What Do You and Your Users Care About?"),(0,n.yg)("p",null,"Not every metric from a monitoring system needs to become an SLI."),(0,n.yg)("p",null,"An understanding of user expectations should drive selecting a few indicators."),(0,n.yg)("p",null,"Services can be usually categorised as:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"User-facing serving systems",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"availability - Could we respond to the request?"),(0,n.yg)("li",{parentName:"ul"},"latency - How long did it take to respond?"),(0,n.yg)("li",{parentName:"ul"},"throughput - How many requests could we handle?"))),(0,n.yg)("li",{parentName:"ul"},"Storage systems",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"latency - How long does it take to read/write data?"),(0,n.yg)("li",{parentName:"ul"},"availability - Can data be accessed on demand?"),(0,n.yg)("li",{parentName:"ul"},"durability - Is the data still there when it's needed? (aka data\nintegrity)"))),(0,n.yg)("li",{parentName:"ul"},"Big data systems (ex: data processing pipelines)",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"throughput - How much data is being processed?"),(0,n.yg)("li",{parentName:"ul"},"end-to-end latency - How long does it take the data to progress from\ningestions to completion?"))),(0,n.yg)("li",{parentName:"ul"},"All systems should care about ",(0,n.yg)("strong",{parentName:"li"},"correctness")," - but this is often a\nproperty of the data in the system rather than the infrastructure, and so\nit's usually not an SRE responsibility to meet.")),(0,n.yg)("p",null,"Where does Packit-as-a-Service fit in the above categorisation?"),(0,n.yg)("h5",{id:"collecting-indicators"},"Collecting Indicators"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"server side monitoring (for example, with Prometheus)"),(0,n.yg)("li",{parentName:"ul"},"periodic log analysis"),(0,n.yg)("li",{parentName:"ul"},"client-side collection")),(0,n.yg)("h5",{id:"aggregation"},"Aggregation"),(0,n.yg)("p",null,"Needs to be done with care as it might hide issues in the tails."),(0,n.yg)("p",null,"Better to think about indicators in terms of ",(0,n.yg)("strong",{parentName:"p"},"distribution"),' than averages:\n"99% of requests receive a response within 200ms" vs "requests on average\nreceive a response within 200ms".'),(0,n.yg)("p",null,"Don't assume data is normally distributed without first verifying it."),(0,n.yg)("h5",{id:"standardize-indicators"},"Standardize Indicators"),(0,n.yg)("p",null,"Standardize common definitions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'aggregation intervals: "averaged over 1 minute"'),(0,n.yg)("li",{parentName:"ul"},'aggregation regions: "all the tasks in the cluster"'),(0,n.yg)("li",{parentName:"ul"},'measurement frequency: "every 10 seconds"'),(0,n.yg)("li",{parentName:"ul"},'which requests are included: "HTTP GETs from black-box monitoring jobs"'),(0,n.yg)("li",{parentName:"ul"},'how the data is acquired: "throughout our monitoring, measured at the server"')),(0,n.yg)("h3",{id:"objectives-in-practice"},"Objectives in Practice"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Start by thinking and/or finding out what users care about. - Often this is\ndifficult or impossible to measure, so some approximation is needed.")),(0,n.yg)("h5",{id:"defining-objectives"},"Defining Objectives"),(0,n.yg)("p",null,"SLOs should specify how they are measured and the conditions under which they\nare valid."),(0,n.yg)("p",null,"It's unrealistic and undesirable to insist that SLOs will be met 100% of the\ntime - this can reduce the rate of innovation and deployment and require\ncostly solutions."),(0,n.yg)("p",null,"An error budget is just an SLO for meeting other SLOs."),(0,n.yg)("h5",{id:"choosing-targets"},"Choosing targets"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Don't pick a target based on current performance"),(0,n.yg)("li",{parentName:"ul"},"Keep it simple - complicate aggregations are more difficult to reason about."),(0,n.yg)("li",{parentName:"ul"},'Avoid absolutes - things like: scale "infinitely"'),(0,n.yg)("li",{parentName:"ul"},"Have as few SLOs as possible - if an SLO is never part of conversations,\nbetter drop it. Also: not all product attributes can be turned into an SLO."),(0,n.yg)("li",{parentName:"ul"},"Perfection can wait - better to start with loose targets and revisit them\nover time.")),(0,n.yg)("h5",{id:"control-measures"},"Control Measures"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Monitor and measure SLIs"),(0,n.yg)("li",{parentName:"ol"},"Compare SLIs to SLOs and decide whether or not action is needed"),(0,n.yg)("li",{parentName:"ol"},"Figure out what needs to be done to meet the target."),(0,n.yg)("li",{parentName:"ol"},"Do it.")),(0,n.yg)("p",null,"The SLO helps figuring out when to take action."),(0,n.yg)("h5",{id:"managing-expectations"},"Managing Expectations"),(0,n.yg)("p",null,"SLOs can help drive users' expectations. A few caveats:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Keep a safety margin - internal vs advertised SLOs give room to respond to\nchronic problems."),(0,n.yg)("li",{parentName:"ul"},"Don't overachieve - users react to the reality not to the promise.")))}p.isMDXComponent=!0}}]);