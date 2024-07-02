"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[41863],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var l=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?l.createElement(m,n(n({ref:t},p),{},{components:a})):l.createElement(m,n({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,n[1]=o;for(var u=2;u<r;u++)n[u]=a[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},90559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=a(87462),i=(a(67294),a(3905));const r={title:"Dashboard",authors:["jscotka",{name:"Anchit Bajaj",email:"ab@abifog.com",url:"https://github.com/IceWreck",image_url:"https://github.com/IceWreck.png"}]},n=void 0,o={unversionedId:"ui/dashboard/index",id:"ui/dashboard/index",title:"Dashboard",description:"Development moved to separated Dashboard project",source:"@site/research/ui/dashboard/index.md",sourceDirName:"ui/dashboard",slug:"/ui/dashboard/",permalink:"/research/ui/dashboard/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/ui/dashboard/index.md",tags:[],version:"current",frontMatter:{title:"Dashboard",authors:["jscotka",{name:"Anchit Bajaj",email:"ab@abifog.com",url:"https://github.com/IceWreck",image_url:"https://github.com/IceWreck.png"}]},sidebar:"autogenerated",previous:{title:"User Interface",permalink:"/research/category/user-interface"},next:{title:"Improvements",permalink:"/research/ui/dashboard/dashboard-improvements"}},s={},u=[{value:"UI",id:"ui",level:2},{value:"Utils",id:"utils",level:3},{value:"UI/UX",id:"uiux",level:3},{value:"Routing and Templating",id:"routing-and-templating",level:2},{value:"1) Only React:",id:"1-only-react",level:3},{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"2) Flask + React:",id:"2-flask--react",level:3},{value:"Pros",id:"pros-1",level:4},{value:"Cons",id:"cons-1",level:4},{value:"3) Flask",id:"3-flask",level:3},{value:"Pros",id:"pros-2",level:4},{value:"Cons",id:"cons-2",level:4},{value:"4) Grafana Research + Observations",id:"4-grafana-research--observations",level:3},{value:"Dashboard - List of Features",id:"dashboard---list-of-features",level:2},{value:"Home Page",id:"home-page",level:3},{value:"Jobs Page",id:"jobs-page",level:3},{value:"Build Info Page",id:"build-info-page",level:3},{value:"Build Logs Page",id:"build-logs-page",level:4},{value:"Projects Page",id:"projects-page",level:3},{value:"Specific Project View",id:"specific-project-view",level:4},{value:"Status",id:"status",level:3},{value:"Installations",id:"installations",level:3},{value:"Testing Farm",id:"testing-farm",level:3},{value:"Caching",id:"caching",level:3},{value:"FAQ",id:"faq",level:3},{value:"About",id:"about",level:3},{value:"API",id:"api",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Development moved to separated ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit-service/dashboard"},"Dashboard project")),(0,i.kt)("h2",{id:"ui"},"UI"),(0,i.kt)("h3",{id:"utils"},"Utils"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SCSS is a superset of CSS with variable support and better query selection. It is compiled to ",(0,i.kt)("em",{parentName:"li"},"readable")," CSS.")),(0,i.kt)("h3",{id:"uiux"},"UI/UX"),(0,i.kt)("p",null,"Patternfly has two official variants."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Patternfly HTML: Its a CSS Framework. Zero inbuilt support for JavaScript. User has to take care of interactive components + animations themselves."),(0,i.kt)("li",{parentName:"ul"},"Patternfly React: Complete UI toolkit. Components are interactive by default. Inbuilt support for charts and datatables, which follow a similar design pattern.")),(0,i.kt)("p",null,"Note: They also have a slack for community support."),(0,i.kt)("h2",{id:"routing-and-templating"},"Routing and Templating"),(0,i.kt)("p",null,"We have multiple options availible for routing (url handling, changing pages) and templating."),(0,i.kt)("p",null,"Patternfly has official React bindings so I'm just skipping discussion about React alternatives."),(0,i.kt)("h3",{id:"1-only-react"},"1) Only React:"),(0,i.kt)("p",null,"Since the dashboard will fetch all data from the API, we can make it entirely client side. Using Fetch/Axios, the browser will fetch the json directly from the API, no middleman involved. Controlling the routes in the URL is possible beacuse react-router uses the HTML5 History API. After compiling the JSX to JS, we will have static HTML/CSS/JS which can be served from apache, nginx etc or even GitHub pages."),(0,i.kt)("h4",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serving static files is faster than wsgi + python."),(0,i.kt)("li",{parentName:"ul"},"One language for everything."),(0,i.kt)("li",{parentName:"ul"},"Single page web app."),(0,i.kt)("li",{parentName:"ul"},"Using React + Patternfly's extra React only features like charts and datatables is leaner than importing Patternfly HTML + jQuery + some charts library + datatables library + other plugins.")),(0,i.kt)("h4",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Might not be extensible. There will be a lot of extra work if we ever need to add a backend feature that can't be done via the ",(0,i.kt)("strong",{parentName:"li"},"public")," API"),(0,i.kt)("li",{parentName:"ul"},"Using a JavaScript framework is bad for SEO."),(0,i.kt)("li",{parentName:"ul"},"Specifying the packit-service deployment link via environment variable is simply not possible without using a backend like Flask. We will have to hardcode the API URL."),(0,i.kt)("li",{parentName:"ul"},"A large json file from the API will cause slower loading because the clients's browser will have to fetch it entirely before parsing it. (Not a major issue since our API supports pagination and we can modify the API)"),(0,i.kt)("li",{parentName:"ul"},"We will have to remake the deployment playbooks beacuse we eliminated the python part.")),(0,i.kt)("h3",{id:"2-flask--react"},"2) Flask + React:"),(0,i.kt)("p",null,"Unlike Angular or Vue frameworks, React is a library. We can call it when needed, for selective pages or even parts of a page. We will fetch items from the API, directly to the browser but when needed we have the ability to do API -> Flask Server -> Browser (like we do currently, as of May 2020)."),(0,i.kt)("p",null,"Routes can be rendered by both Flask and React."),(0,i.kt)("h4",{id:"pros-1"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is extensible and we can add backend features whenever we need."),(0,i.kt)("li",{parentName:"ul"},"Deployment process does not change."),(0,i.kt)("li",{parentName:"ul"},"Single page web app."),(0,i.kt)("li",{parentName:"ul"},"Using React + Patternfly's extra React only features like charts and datatables is leaner than importing Patternfly HTML + jQuery + some charts library + datatables library + other plugins.")),(0,i.kt)("h4",{id:"cons-1"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Codebase (and tests) will be split across multiple languages.")),(0,i.kt)("h3",{id:"3-flask"},"3) Flask"),(0,i.kt)("p",null,"This is what we are doing currently (May 2020). All the templating + routing logic will be handled server side. JavaScript will still be used but not for routing or rendering the contents. If we go with this, I suggest using Bootstrap + Themes over Patternfly HTML because Patternfly HTML does not have any default behaviour for UI components unlike Bootstrap which provides basic inbuilt javascript for interactivity."),(0,i.kt)("h4",{id:"pros-2"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It will somewhat work even with JavaScript disabled."),(0,i.kt)("li",{parentName:"ul"},"Reliable, just works, less setup for development.")),(0,i.kt)("h4",{id:"cons-2"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will have to use more third party libs for charts, datatables which might not provide a consistent look. (Or we can import the charts component of patternfly-react, making this a subset of option 2)"),(0,i.kt)("li",{parentName:"ul"},"The entire page will load when going to another page instead of loading just a part of the page.")),(0,i.kt)("h3",{id:"4-grafana-research--observations"},"4) Grafana Research + Observations"),(0,i.kt)("p",null,"Quick setup for experimentation. Default username/password: admin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'podman run -d -p 8300:3000 -u="root"  --name=grafana -v /home/icewreck/Development/Packit/grafana:/var/lib/grafana:z grafana/grafana\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grafana was built for and is suited towards real time data monitoring, time series analytics or something that changes very frequently (network or sensor data, system load, etc), but can be for other purposes."),(0,i.kt)("li",{parentName:"ul"},"It has the concept of single page dashboards i.e. you host multiple services and then use a single instance of grafana to monitor all of them. Each service is supposed to have a seperate page/dashboard. Dashbords for different services can be installed from their ",(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/dashboards?orderBy=name&direction=asc"},"dashboard store.")),(0,i.kt)("li",{parentName:"ul"},"Its a visualization software with little support for other data and we will have to make lots of custom widgets/plugins"),(0,i.kt)("li",{parentName:"ul"},"Looks cool!"),(0,i.kt)("li",{parentName:"ul"},"Grafana fetches data by directly plugging into a database (called a data-source), so we will have to provide credentials to packit-service's postgres. We will have to provide raw SQL commands for every graph and these will have to be changed every time we modify our models.py file."),(0,i.kt)("li",{parentName:"ul"},"Even postgres feels like a second class citizen compared to ",(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/getting-started/timeseries/"},"time series databases.")),(0,i.kt)("li",{parentName:"ul"},"Alternatively, grafana can use our JSON API as a data-source but thats only possible by using a third party plugin. (",(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/plugins/simpod-json-datasource"},"https://grafana.com/grafana/plugins/simpod-json-datasource"),")"),(0,i.kt)("li",{parentName:"ul"},"There is no way of adding buttons or formatting inside tables (It may be possible, but I cannot find it) unless we make our own plugins for a customizable table."),(0,i.kt)("li",{parentName:"ul"},"Grafana stores layout configuration and all fetched data in its own database (sqlite by default) which is redundant because we store all build data in the packit-service postgresql database as well."),(0,i.kt)("li",{parentName:"ul"},"Backup and restore will be difficult. (unless we use sqlite as database and copy-paste that sqlite file) (Edit: Incorrect, layout can be exported to json which can be copy -pasted into the correct folder for recreation)"),(0,i.kt)("li",{parentName:"ul"},"Recreating the dashboard from CI will be difficult as layouts are stored in the above mentioned database. (Edit: Incorrect, look at ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/acouvreur/ssh-log-to-influx"},"https://github.com/acouvreur/ssh-log-to-influx")," A standalone grafana instance along with this dashboard can be created via scripts)"),(0,i.kt)("li",{parentName:"ul"},"It has a cli but it can only change settings or passwords and install plugins."),(0,i.kt)("li",{parentName:"ul"},"We cannot remove the ",(0,i.kt)("em",{parentName:"li"},"upgrade to grafana enterprise banner")," in the settings panel."),(0,i.kt)("li",{parentName:"ul"},"Replacing the grafana logo in the title bar with packit's own is not possible. (unless we edit the source, which is hacky and not ideal)"),(0,i.kt)("li",{parentName:"ul"},"Help menu, login button, settings icon, documentation buttons cannot be removed."),(0,i.kt)("li",{parentName:"ul"},"Large, publically visible buttons point to grafana documentation, which will be misleading in packit-service's dashboard."),(0,i.kt)("li",{parentName:"ul"},"We cannot control the URL scheme."),(0,i.kt)("li",{parentName:"ul"},"I haven't found a way to do something like recursive json. Eg: (GET and display all builds info and if a user a wants it, find build_id from the all builds json and then do a GET request to fetch another json file for detailed info regarding that build_id)"),(0,i.kt)("li",{parentName:"ul"},"Tests ?"),(0,i.kt)("li",{parentName:"ul"},"Adapting it for our use case will be a literal hackfest with tons of plugins thrown in to make it work.")),(0,i.kt)("h2",{id:"dashboard---list-of-features"},"Dashboard - List of Features"),(0,i.kt)("h3",{id:"home-page"},"Home Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number of successful and failed builds. (bar chart with dual bars for successful/failed) (toggle for weekly/monthly/yearly)"),(0,i.kt)("li",{parentName:"ul"},"Number of successful out of total builds of all time. (donut chart)"),(0,i.kt)("li",{parentName:"ul"},"Total number of projects (100% filled donut chart)"),(0,i.kt)("li",{parentName:"ul"},"Total number of installations (100% filled donut chart)"),(0,i.kt)("li",{parentName:"ul"},"Manually triggered vs automatic builds. (line chart) (toggle for weekly/monthly/yearly)"),(0,i.kt)("li",{parentName:"ul"},"Top 5 most active projects. (Data List) (toggle for weekly/monthly/all-time)"),(0,i.kt)("li",{parentName:"ul"},"Builds per chroot (donut chart)"),(0,i.kt)("li",{parentName:"ul"},"Testing farm usage chart")),(0,i.kt)("h3",{id:"jobs-page"},"Jobs Page"),(0,i.kt)("p",null,"A searchable, sortable datatable listing all the ",(0,i.kt)("a",{parentName:"p",href:"https://packit.dev/docs/configuration/#packit-service-jobs"},"jobs")," executed by packit service.\nFields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Job Type (tests or copr_build)"),(0,i.kt)("li",{parentName:"ul"},"Trigger (Link to PR or release which triggered this)"),(0,i.kt)("li",{parentName:"ul"},"Choots and their status"),(0,i.kt)("li",{parentName:"ul"},"Git Ref"),(0,i.kt)("li",{parentName:"ul"},"Pull Requests"),(0,i.kt)("li",{parentName:"ul"},"Web Logs URL"),(0,i.kt)("li",{parentName:"ul"},"Build ID"),(0,i.kt)("li",{parentName:"ul"},"Repo Name and Link")),(0,i.kt)("h3",{id:"build-info-page"},"Build Info Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Package/Project Name"),(0,i.kt)("li",{parentName:"ul"},"SRPM Name"),(0,i.kt)("li",{parentName:"ul"},"Repository URL"),(0,i.kt)("li",{parentName:"ul"},"Link to trigger (pull request or release)"),(0,i.kt)("li",{parentName:"ul"},"Copr Build ID"),(0,i.kt)("li",{parentName:"ul"},"PR ID (where applicable)"),(0,i.kt)("li",{parentName:"ul"},"Project ID"),(0,i.kt)("li",{parentName:"ul"},"Build Submitted, Started, Finished Time"),(0,i.kt)("li",{parentName:"ul"},"List of chroots"),(0,i.kt)("li",{parentName:"ul"},"Status per chroot"),(0,i.kt)("li",{parentName:"ul"},"Instructions to quick enable and install that build"),(0,i.kt)("li",{parentName:"ul"},"List + download link of built RPMS, their size, etc"),(0,i.kt)("li",{parentName:"ul"},"Link to the testing farm results page."),(0,i.kt)("li",{parentName:"ul"},"Link to the logs page.")),(0,i.kt)("h4",{id:"build-logs-page"},"Build Logs Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once a build has finished, copr creates a web directory listing with downloadable build related files like some log files, the built rpms, etc."),(0,i.kt)("li",{parentName:"ul"},"The build logs are in text files like build.log.gz and builder-live.log.gz"),(0,i.kt)("li",{parentName:"ul"},"These files will be rendered on the logs page inside some sort of monospace text widget."),(0,i.kt)("li",{parentName:"ul"},"SRPM logs, build logs and the live builder log (tabs to switch between them)."),(0,i.kt)("li",{parentName:"ul"},"Dropdown to switch between the log pages of chroots/targets of the same build id.")),(0,i.kt)("h3",{id:"projects-page"},"Projects Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total number of projects (100% filled donut chart)"),(0,i.kt)("li",{parentName:"ul"},"Small gallery style cards for every project. (filters to sort by most builds, user namespace, recent activity)")),(0,i.kt)("h4",{id:"specific-project-view"},"Specific Project View"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Project ID"),(0,i.kt)("li",{parentName:"ul"},"Total Number of PRs that used packit-service"),(0,i.kt)("li",{parentName:"ul"},"Total number of builds"),(0,i.kt)("li",{parentName:"ul"},"List of all builds related to that projects, from newest to oldest. (data list)"),(0,i.kt)("li",{parentName:"ul"},"Each build will open the detailed build view")),(0,i.kt)("h3",{id:"status"},"Status"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Packit Service status and downtime reports."),(0,i.kt)("li",{parentName:"ul"},"Total number of calls to the GitHub API per hour. (sparkline chart)"),(0,i.kt)("li",{parentName:"ul"},"Number of fedmsgs per hour. (sparkline chart)")),(0,i.kt)("h3",{id:"installations"},"Installations"),(0,i.kt)("p",null,"List of namespaces and then a collapsable sublist of repos which have packit-service enabled."),(0,i.kt)("h3",{id:"testing-farm"},"Testing Farm"),(0,i.kt)("p",null,"(To be added later)"),(0,i.kt)("h3",{id:"caching"},"Caching"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cache common API requests in the dashboard so as to not overload packit-service with repititive requests."),(0,i.kt)("li",{parentName:"ul"},"Sqlite ",(0,i.kt)("a",{parentName:"li",href:"https://sqlite.org/inmemorydb.html"},"can run in-memory")," for caching."),(0,i.kt)("li",{parentName:"ul"},"There is also ",(0,i.kt)("a",{parentName:"li",href:"https://pythonhosted.org/Flask-Caching/"},"Flask-Caching")," but it requires additional backends which might be overkill."),(0,i.kt)("li",{parentName:"ul"},"(We might not need this at all)")),(0,i.kt)("h3",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"The FAQ page will either link to the FAQ page on packit.dev or just live-render the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit-service/packit.dev/blob/master/content/faq/_index.md"},"FAQ markdown file")," from the packit.dev repo on the dashbpoard. This way we can have a single content source while respecting the desogn scheme of both the website and the dashboard."),(0,i.kt)("h3",{id:"about"},"About"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/pull-requests endpoint"),(0,i.kt)("li",{parentName:"ul"},"/projects endpoint (possibly merge with the installations endpoint)"),(0,i.kt)("li",{parentName:"ul"},"Fetch selective copr builds instead of all of them in the builds list (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit-service/packit-service/issues/633"},"https://github.com/packit-service/packit-service/issues/633"),")"),(0,i.kt)("li",{parentName:"ul"},"Other API endpoints for charts, stats, etc. (Discuss later)")))}d.isMDXComponent=!0}}]);