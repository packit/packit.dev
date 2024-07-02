"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[35695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Logs aggregations",authors:"jpopelka"},i=void 0,l={unversionedId:"monitoring/logs-aggregation/index",id:"monitoring/logs-aggregation/index",title:"Logs aggregations",description:"We (Packit) want to have access to logs from our worker pods even after",source:"@site/research/monitoring/logs-aggregation/index.md",sourceDirName:"monitoring/logs-aggregation",slug:"/monitoring/logs-aggregation/",permalink:"/research/monitoring/logs-aggregation/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/monitoring/logs-aggregation/index.md",tags:[],version:"current",frontMatter:{title:"Logs aggregations",authors:"jpopelka"},sidebar:"autogenerated",previous:{title:"GitHub API Call Rate Limits",permalink:"/research/monitoring/github-api-call-inventory/"},next:{title:"Metrics",permalink:"/research/monitoring/metrics"}},s={},p=[{value:"Options",id:"options",level:2},{value:"Testing Farm\u2019s Loki",id:"testing-farms-loki",level:3},{value:"CKI\u2019s Loki in Managed Platform",id:"ckis-loki-in-managed-platform",level:3},{value:"Managed Loki on Grafana cloud",id:"managed-loki-on-grafana-cloud",level:3},{value:"OpenShift Logging subsystem",id:"openshift-logging-subsystem",level:3},{value:"OpenShift Logging subsystem with Loki",id:"openshift-logging-subsystem-with-loki",level:4},{value:"Splunk",id:"splunk",level:3}],u={toc:p},c="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We (Packit) want to have access to logs from our worker pods even after\nthe pods are restarted (due to image or cluster update).\nAnd ideally, logs from all workers aggregated in one place so that one does\nnot have to grep several logs. We don\u2019t need it for staging,\nbut would rather test it on staging first."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"testing-farms-loki"},"Testing Farm\u2019s Loki"),(0,o.kt)("p",null,"Initially, we wanted to use ",(0,o.kt)("a",{parentName:"p",href:"http://loki.tft.osci.redhat.com"},"TestingFarm's Loki"),",\nbut we realized it's in VPN and hence can't be reached by a ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/clients/promtail/"},"Promtail"),"\nsidecar container running in the Automotive cluster(s) outside the VPN."),(0,o.kt)("h3",{id:"ckis-loki-in-managed-platform"},"CKI\u2019s Loki in Managed Platform"),(0,o.kt)("p",null,"CKI has a Loki instance as well, but it\u2019s also in VPN."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Michael Hofmann, Jun 3rd, 10:22 AM\nWe've been thinking of moving it to MP+ where you can have external access to it as well, but this is on our backlog\n")),(0,o.kt)("h3",{id:"managed-loki-on-grafana-cloud"},"Managed Loki on Grafana cloud"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://go2.grafana.com/loki-grafana-cloud.html"},"Free forever access"),":\n50GB of logs, 14-day retention for logs, access for up to 3 (!) team members"),(0,o.kt)("h3",{id:"openshift-logging-subsystem"},"OpenShift Logging subsystem"),(0,o.kt)("p",null,"A cluster admin can deploy the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/logging/cluster-logging.html"},"logging subsystem")," to aggregate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Container logs generated by user applications running in the cluster"),(0,o.kt)("li",{parentName:"ul"},"Logs generated by infrastructure components")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/logging/cluster-logging.html#cluster-logging-about-components_cluster-logging"},"subsystem uses EFK stack")," (modified ELK stack), i.e."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.elastic.co/products/elasticsearch"},"Elasticsearch (ES)"),": An object store where all logs are stored. Optimized and tested for short-term storage, approximately seven days."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.fluentd.org/architecture"},"Fluentd"),": Gathers logs from nodes and feeds them to Elasticsearch"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/kibana/current/introduction.html"},"Kibana"),": A web UI for Elasticsearch to view the logs")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/logging/cluster-logging-deploying.html"},"logging subsystem can be installed")," by deploying the Red Hat OpenShift Logging and OpenShift Elasticsearch Operators."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pros: The operators are (should be) easy to install, set up, and upgrade"),(0,o.kt)("li",{parentName:"ul"},"Cons: Elasticsearch (or Loki, see below) are memory-intensive applications.")),(0,o.kt)("h4",{id:"openshift-logging-subsystem-with-loki"},"OpenShift Logging subsystem with Loki"),(0,o.kt)("p",null,"Since 4.9 one can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/logging/cluster-logging-release-notes.html#cluster-logging-about-loki"},"use Loki as an alternative")," to Elasticsearch. However, it\u2019s still a Technology Preview feature as of 4.10.\nWe initially wanted to use Loki, because that\u2019s what OSCI/CKI uses,\nbut we are open to any technology, so the default ES is fine."),(0,o.kt)("h3",{id:"splunk"},(0,o.kt)("a",{parentName:"h3",href:"https://source.redhat.com/departments/it/splunk"},"Splunk")),(0,o.kt)("p",null,"There\u2019s already a ",(0,o.kt)("a",{parentName:"p",href:"https://console-openshift-console.apps.auto-stage.c58b.p1.openshiftapps.com/k8s/ns/openshift-security/splunkforwarder.managed.openshift.io~v1alpha1~SplunkForwarder/splunkforwarder"},"splunkforwarder"),"\nset up on the Automotive clusters, but it\u2019s either not completely configured\nor we don\u2019t have access to the data in Splunk because we (jpopelka, ttomecek)\ndon\u2019t see any auto-","[stage|prod]"," related events in Splunk."),(0,o.kt)("p",null,"Other teams using Splunk:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OSCI - they forward logs to Splunk via Jenkins plugin. AStepanov says that\nPSI is configured to automatically forward all pods` logs to Splunk.\nBut I couldn\u2019t find anything packit-validation jobs (they run in PSI) related in Splunk."),(0,o.kt)("li",{parentName:"ul"},"Copr (internal) - ",(0,o.kt)("a",{parentName:"li",href:"https://pagure.io/rhcopr/maint/blob/master/f/maint/share/rhcopr-maint/ansible/playbooks/include/backend/copr-backend.yml#_235"},"uses existing ansible role"),"\nto ",(0,o.kt)("a",{parentName:"li",href:"https://docs.engineering.redhat.com/pages/viewpage.action?spaceKey=EXD&title=Instructions+on+Log+forwarding+-+Syslog"},"forward logs to Splunk via syslog"),"\n, AFAIK this can't be used outside VPN"),(0,o.kt)("li",{parentName:"ul"},"Image builder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Their composer runs in a ROSA cluster as well and uses a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/osbuild/osbuild-composer/blob/main/templates/composer.yml#L123"},"Fluentd sidecar"),"\ncontainer which communicates with the main container via syslog and forwards\nthe logs to Splunk\u2019s HTTP Event Collector (HEC)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"Image builder&#39;s composer",src:n(78547).Z,width:"777",height:"408"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/osbuild/osbuild-composer/blob/main/templates/composer.yml#L272"},"Fluentd config"))))),(0,o.kt)("p",null,"I (jpopelka) decided to follow how the composer does that, i.e."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"have a Fluentd (with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/splunk/fluent-plugin-splunk-hec"},"fluent-plugin-splunk-hec"),")\nrunning in a sidecar container, which would forward logs to Splunk's HEC"),(0,o.kt)("li",{parentName:"ul"},"let Celery log also ",(0,o.kt)("a",{parentName:"li",href:"https://docs.fluentd.org/input/syslog"},"to the Fluentd via syslog"))))}g.isMDXComponent=!0},78547:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/composer-51e7be868275f86ed5b73850c43032db.png"}}]);