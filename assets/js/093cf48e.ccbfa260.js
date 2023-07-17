"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3264],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Implementation",authors:"jkyjovsk"},o=void 0,s={unversionedId:"monitoring/adoption-metrics/implementation",id:"monitoring/adoption-metrics/implementation",title:"Implementation",description:"Instrumenting",source:"@site/research/monitoring/adoption-metrics/implementation.md",sourceDirName:"monitoring/adoption-metrics",slug:"/monitoring/adoption-metrics/implementation",permalink:"/research/monitoring/adoption-metrics/implementation",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/monitoring/adoption-metrics/implementation.md",tags:[],version:"current",frontMatter:{title:"Implementation",authors:"jkyjovsk"},sidebar:"autogenerated",previous:{title:"What adoption metrics Packit team wants to measure",permalink:"/research/monitoring/adoption-metrics/define-adoption-metrics"},next:{title:"Error Budgets",permalink:"/research/monitoring/error-budgets/"}},l={},p=[{value:"Instrumenting",id:"instrumenting",level:2},{value:"Prometheus",id:"prometheus",level:3},{value:"Gathering data and displaying them into graphs",id:"gathering-data-and-displaying-them-into-graphs",level:2},{value:"Grafana",id:"grafana",level:3},{value:"But... :)",id:"but-",level:4},{value:"But\xb2",id:"but",level:4},{value:"Only dashboard",id:"only-dashboard",level:3},{value:"Only packit.dev",id:"only-packitdev",level:3},{value:"Provide link to Grafana/Dashboard on packit.dev menu",id:"provide-link-to-grafanadashboard-on-packitdev-menu",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},h="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"instrumenting"},"Instrumenting"),(0,r.kt)("h3",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"(Docs available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus/client_python"},"here"),")"),(0,r.kt)("p",null,"We will reuse the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/blob/main/packit_service/service/app.py#L52"},(0,r.kt)("inlineCode",{parentName:"a"},"/metrics")),"\nendpoint."),(0,r.kt)("p",null,"From what I understand, the new measured values will need to be added to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/blob/main/packit_service/worker/monitoring.py#L29"},"Pushgateway"),".\nThen use/reuse the metrics definitions in the code ->\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus/client_python#instrumenting"},"how to"),".\nIf needed, you can define your\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus/client_python#custom-collectors"},"own collectors")," but the basic\nones should be enough."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"gathering-data-and-displaying-them-into-graphs"},"Gathering data and displaying them into graphs"),(0,r.kt)("p",null,"The data will be gathered from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint."),(0,r.kt)("p",null,"To aggregate the data dynamically in real time, we will use\n",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"promql queries"),"."),(0,r.kt)("p",null,"We have a few options here, each has some pros and cons which are described in each point."),(0,r.kt)("h3",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"Probably the easiest way to go since grafana provides out-of-the-box support for prometheus.\nWe have also some experience with duo prometheus && grafana, so it should be easier for someone\nwhom run into a problem with this (he/she can ask someone (=^ \u25e1 ^=))."),(0,r.kt)("p",null,"Also since we already have a grafana dashboard listening on ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint, it should be\nfairly easy to visualize gathered data - just creating a new panel and navigate in the GUI\nto edit panel and providing a reasonable\n",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"promql queries"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/next/getting-started/get-started-grafana-prometheus/"},"grafana docs")),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"out-of-the-box support"),(0,r.kt)("li",{parentName:"ul"},"the easiest solution"),(0,r.kt)("li",{parentName:"ul"},"nice fancy dynamic graphs"),(0,r.kt)("li",{parentName:"ul"},"creating / deleting / editing graphs is easy and well described in the\n",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/next/getting-started/get-started-grafana-prometheus/"},"docs")),(0,r.kt)("li",{parentName:"ul"},"these graphs should be dynamic (when we want to see graphs in a given period - we can\ndynamically change this period)")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"visibility: only internal folks will be able to see the graphs (since our current dashboard\nis visible only for internal people and I don't expect that we will create another but public\ndashboard for everyone just so they can see it)")),(0,r.kt)("p",null,"And it seems like there is no option how to make our grafana dashboard public.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://community.grafana.com/t/making-selected-dashboards-public/873"},"this thread")),(0,r.kt)("h4",{id:"but-"},"But... :)"),(0,r.kt)("p",null,"It seems like there is a way to share grafana dashboard (e.g. via packit.dev)."),(0,r.kt)("p",null,"There are some ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/blog/2019/05/16/worth-a-look-public-grafana-dashboards/"},"projects"),"\nthat have made their dashboards public for a variety of uses. So we may decide to make our own\ngrafana dashboard and we can share our metrics via (periodic)\n",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/sharing/share-dashboard/#publish-a-snapshot"},"snapshots")," or\nprovide a ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/sharing/share-dashboard/#use-direct-link"},"link"),"."),(0,r.kt)("h4",{id:"but"},"But\xb2"),(0,r.kt)("p",null,"And it seems like there is another way to share and ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/plugins/grafana-image-renderer/"},"render"),"\neven panels from internal dashboard and show to users only relevant graphs (no requirement for\nour own grafana dashboard)."),(0,r.kt)("p",null,"It's also possible to share an ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/sharing/share-panel/"},"individual panel"),"\nso we can share individual panels via packit dashboard (if possible) and render them there.\nAlso I didn't found a reason why we can't share our individual panels (to render it, packit dashboard\nshould have access to our internal grafana dashboard - but it is possible, isn't it?)\nso it should be possible to share it on packit dashboard (and provide a link there in packit.dev menu)\nwith our internal grafana."),(0,r.kt)("p",null,"To render these panels we must install the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/plugins/grafana-image-renderer/?tab=installation"},"Grafana Image Renderer plugin")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"(These options below (dashboard and packit.dev) are pain in the ass - especially to safely gather\nand display the data from prometheus. I do not recommend to choose them since I spent quite some\ntime to figure out how to do this but still a lot of implementation details are unknown to me)"),(0,r.kt)("h3",{id:"only-dashboard"},"Only dashboard"),(0,r.kt)("p",null,"Way harder to implement since we have to aggregate and dynamically display the data into\ngraphs by ourselves."),(0,r.kt)("p",null,"We can reuse the javascript code we have and just create a subpage (let's say\ndashboard.packit.dev/adoption-metrics), gather the data and then display these metrics. I probably\ngot at least some answer to the question of how to export data and work with it in this\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/#nodemonitoringwithprometheus"},"article"),".\nHowever, we still won't be able to get and view some fancy charts."),(0,r.kt)("p",null,"Once we (somehow) gather the data - it should be easy to display them via ",(0,r.kt)("a",{parentName:"p",href:"https://jscharting.com/examples/chart-types/"},"charts"),"."),(0,r.kt)("p",null,"Long story short: it will be easier just to implement the\n",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/getting_started/#using-the-expression-browser"},"/graph"),"\nendpoint which prometheus provides and view data there. But it has its limitations - it's not\npossible to view some advanced fancy graphs which grafana may provide."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"only-packitdev"},"Only packit.dev"),(0,r.kt)("p",null,"The hardest option for implementation part (lot of evil javascript programming) since we have to\nimplement the javascript code from a scratch + the same things as described in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard"),"\nsection above."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"users can see the metric directly on our webpage")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lot of extra work required"),(0,r.kt)("li",{parentName:"ul"},"lot of javascript coding ;)")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"provide-link-to-grafanadashboard-on-packitdev-menu"},"Provide link to Grafana/Dashboard on packit.dev menu"),(0,r.kt)("p",null,"It is also possible to implement the first(/second) option (grafana/dashboard) and provide a link\nto the page in packit.dev - so we will not reinvent the wheel, just provide a link via\npackit.dev menu and pretend like it is also available on packit.dev."),(0,r.kt)("p",null,"The menu on packit.dev page may look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:a(54560).Z,width:"294",height:"505"})),(0,r.kt)("p",null,"And user can click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Adoption metrics")," option, and be redirected to the grafana/dashboard\nwith the real implementation."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Overall the simplest solution is the Grafana option. It will be quite challenging if we want to\nmake our dashboard publicly visible but it's still easier than gathering the data and displaying\nthem by ourselves (dashboard option)."),(0,r.kt)("p",null,"The dashboard option requires gathering data and providing it as a graphs\nwhich will lead to more time required to complete the implementation. The advantage is that these\ngraphs will be available to public out-of-the-box. However, as I provided above,\nit's really challenging to provide the data on our packit dashboard."),(0,r.kt)("p",null,"The hardest solution is implementing it on packit.dev page - which I do not recommend.\nWe can implement the alternative (last) option instead and save some time."))}c.isMDXComponent=!0},54560:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packit-dev-menu-6d7e2ecd2f530a67fc2222ee4c9ba1e5.png"}}]);