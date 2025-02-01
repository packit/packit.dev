"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[87742],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>b});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(i),s=a,b=d["".concat(u,".").concat(s)]||d[s]||p[s]||r;return i?n.createElement(b,o(o({ref:t},c),{},{components:i})):n.createElement(b,o({ref:t},c))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=i[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},72733:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=i(87462),a=(i(67294),i(3905));const r={title:"in-image-builder",date:new Date("2022-10-19T23:00:00.000Z"),sidebar_position:25},o="packit build in-image-builder",l={unversionedId:"cli/build/in-image-builder",id:"cli/build/in-image-builder",title:"in-image-builder",description:'Create a VM image in Image Builder defined in your "packit.yaml" using your Copr builds.',source:"@site/docs/cli/build/in-image-builder.md",sourceDirName:"cli/build",slug:"/cli/build/in-image-builder",permalink:"/docs/cli/build/in-image-builder",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/build/in-image-builder.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"in-image-builder",date:"2022-10-19T23:00:00.000Z",sidebar_position:25},sidebar:"autogenerated",previous:{title:"in-obs",permalink:"/docs/cli/build/in-obs"},next:{title:"in-mock",permalink:"/docs/cli/build/in-mock"}},u={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Help",id:"help",level:2}],c={toc:m},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packit-build-in-image-builder"},(0,a.kt)("inlineCode",{parentName:"h1"},"packit build in-image-builder")),(0,a.kt)("p",null,'Create a VM image in Image Builder defined in your "packit.yaml" using your Copr builds.'),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be familiar with Red Hat Image Builder:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.redhat.com/en/blog/using-hosted-image-builder-its-api"},"https://www.redhat.com/en/blog/using-hosted-image-builder-its-api")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.redhat.com/docs/api/image-builder"},"https://console.redhat.com/docs/api/image-builder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/composing_a_customized_rhel_system_image/index"},"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/composing_a_customized_rhel_system_image/index")))),(0,a.kt)("li",{parentName:"ul"},"Red Hat API token set as ",(0,a.kt)("inlineCode",{parentName:"li"},"redhat_api_refresh_token")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.config/packit.yaml"),"; the token can be obtained ",(0,a.kt)("a",{parentName:"li",href:"https://access.redhat.com/management/api"},"here")),(0,a.kt)("li",{parentName:"ul"},"Packit config with a ",(0,a.kt)("inlineCode",{parentName:"li"},"vm_image_build")," job defined")),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/"},"Place a config file for packit in the root of your upstream repository."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/vm_image_build"},(0,a.kt)("inlineCode",{parentName:"a"},"vm_image_build")," job"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Submit a request to Red Hat Image Builder:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ cd my/ustream/project/\n$ packit build in-image-builder my-new-fancy-image\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.redhat.com/insights/image-builder"},"Image Builder web interface")," to use your image once the build is complete."))),(0,a.kt)("p",null,"As of December 2022, Packit Github app can now submit builds to Red Hat Image\nBuilder, for more details see the ",(0,a.kt)("inlineCode",{parentName:"p"},"vm_image_build")," job description."),(0,a.kt)("h2",{id:"help"},"Help"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: packit build in-image-builder [OPTIONS] IMAGE_NAME [PATH_OR_URL]\n\n  Create a VM image in Image Builder.\n\n  ### EXPERIMENTAL ###\n\n  This command is experimental and the integration with Image Builder will be\n  changed in a backwards incompatible way in the future.\n\n  Packit loads image build configuration from your packit.yaml file.\n\n  When `--job-config-index` is not specified, the job configuration is loaded\n  from your .packit.yaml and the first matching vm_image_build job is used.\n\n  IMAGE_NAME is the name of the image to be created. Please pick something\n  unique so it's easy to identify for you in the Image Builder interface and\n  can be well associated with the image content.\n\n  [PATH_OR_URL] argument is a local path or a URL to the upstream git\n  repository, it defaults to the current working directory\n\nOptions:\n  --job-config-index INTEGER  Use N-th job definition to load configuration\n                              for the image build. The type needs to be\n                              vm_image_build.\n  --wait / --no-wait          Wait for the build to finish\n  -p, --package TEXT          Package to build, if more than one available,\n                              like in a monorepo configuration. Use it\n                              multiple times to select multiple\n                              packages.Defaults to all the packages listed\n                              inside the config.\n  -h, --help                  Show this message and exit.\n")))}p.isMDXComponent=!0}}]);