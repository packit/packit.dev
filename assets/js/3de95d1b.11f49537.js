"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[68254],{3724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={title:"Testing Changes"},o="How do I test my changes?",l={unversionedId:"testing-changes",id:"testing-changes",title:"Testing Changes",description:"In all cases, you first need to get or generate expected secrets in secrets//dev/.",source:"@site/deployment/testing-changes.md",sourceDirName:".",slug:"/testing-changes",permalink:"/deployment/testing-changes",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/testing-changes.md",tags:[],version:"current",frontMatter:{title:"Testing Changes"},sidebar:"autogenerated",previous:{title:"Redict",permalink:"/deployment/specifics/redict"},next:{title:"Generating TLS Certificates",permalink:"/deployment/tls-certs"}},c={},p=[{value:"<code>docker-compose</code> (quick &amp; dirty)",id:"docker-compose-quick--dirty",level:2},{value:"<code>oc cluster up</code> (slow &amp; better)",id:"oc-cluster-up-slow--better",level:2},{value:"MiniShift",id:"minishift",level:2},{value:"Staging (quick &amp; reliable, but don&#39;t break it)",id:"staging-quick--reliable-but-dont-break-it",level:2},{value:"Zuul",id:"zuul",level:2},{value:"How are the secrets encrypted?",id:"how-are-the-secrets-encrypted",level:3},{value:"Test Deployment locally with OpenShift Local",id:"test-deployment-locally-with-openshift-local",level:3},{value:"Using Vagrant",id:"using-vagrant",level:4},{value:"Using tmt",id:"using-tmt",level:4}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"how-do-i-test-my-changes"},"How do I test my changes?"),(0,r.yg)("p",null,"In all cases, you first need to ",(0,r.yg)("a",{parentName:"p",href:"secrets#running-a-servicebot-locally"},"get or generate expected secrets in ",(0,r.yg)("inlineCode",{parentName:"a"},"secrets/{SERVICE}/dev/")),"."),(0,r.yg)("h2",{id:"docker-compose-quick--dirty"},(0,r.yg)("inlineCode",{parentName:"h2"},"docker-compose")," (quick & dirty)"),(0,r.yg)("p",null,"Before you follow ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/packit/packit-service/blob/main/CONTRIBUTING.md#running-packit-service-locally"},"Running packit-service locally"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"secrets#running-a-servicebot-locally"},"get/generate the secrets")),(0,r.yg)("li",{parentName:"ul"},"run ",(0,r.yg)("inlineCode",{parentName:"li"},"DEPLOYMENT=dev make render-secrets-from-templates")," to create ",(0,r.yg)("inlineCode",{parentName:"li"},"packit-service.yaml")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"fedora.toml")," from their templates and ",(0,r.yg)("inlineCode",{parentName:"li"},"extra-vars.yml")),(0,r.yg)("li",{parentName:"ul"},"copy the ",(0,r.yg)("inlineCode",{parentName:"li"},"secrets/{SERVICE}/dev/*")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"secrets/{SERVICE}/dev/")," in cloned ",(0,r.yg)("inlineCode",{parentName:"li"},"packit-service")," repo")),(0,r.yg)("h2",{id:"oc-cluster-up-slow--better"},(0,r.yg)("inlineCode",{parentName:"h2"},"oc cluster up")," (slow & better)"),(0,r.yg)("p",null,"Because we run the service in OpenShift the more reliable way to test it\nis to run an Openshift cluster locally and deploy the service there.\n",(0,r.yg)("inlineCode",{parentName:"p"},"oc cluster up")," spawns the Openshift (v3) cluster.\n",(0,r.yg)("a",{parentName:"p",href:"secrets#running-a-servicebot-locally"},"Create ",(0,r.yg)("inlineCode",{parentName:"a"},"secrets/packit/dev/")),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"cd vars/packit; cp dev_template.yml dev.yml")," and\nin ",(0,r.yg)("inlineCode",{parentName:"p"},"dev.yml")," set ",(0,r.yg)("inlineCode",{parentName:"p"},"api_key")," to the output of ",(0,r.yg)("inlineCode",{parentName:"p"},"oc whoami -t"),"."),(0,r.yg)("p",null,"Run ",(0,r.yg)("inlineCode",{parentName:"p"},"DEPLOYMENT=dev make deploy"),".\nThat will also push locally built images (",(0,r.yg)("inlineCode",{parentName:"p"},":dev"),") into the cluster's registry\n(make sure you have ",(0,r.yg)("inlineCode",{parentName:"p"},"push_dev_images: true")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"vars/packit/dev.yml"),")."),(0,r.yg)("h2",{id:"minishift"},"MiniShift"),(0,r.yg)("p",null,"Similar to above 'oc cluster up' you can run ",(0,r.yg)("a",{parentName:"p",href:"https://www.okd.io/minishift/"},"minishift")," to get\na local OpenShift cluster.\nIn addition to the above, you need to use ",(0,r.yg)("inlineCode",{parentName:"p"},"docker")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"oc"),"\nfrom the minishift environment after you start minishift:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ eval $(minishift docker-env)\n$ eval $(minishift oc-env)\n$ oc config use-context minishift\n")),(0,r.yg)("p",null,"and then build worker & service images (",(0,r.yg)("inlineCode",{parentName:"p"},"make worker; make service")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"packit-service")," repo)\nwith Docker, before you run ",(0,r.yg)("inlineCode",{parentName:"p"},"DEPLOYMENT=dev make deploy"),"."),(0,r.yg)("h2",{id:"staging-quick--reliable-but-dont-break-it"},"Staging (quick & reliable, but don't break it)"),(0,r.yg)("p",null,"If you're fairly sure your changes won't do any harm,\nyou can temporarily get hold of staging instance for that."),(0,r.yg)("p",null,"For example, in case of ",(0,r.yg)("inlineCode",{parentName:"p"},"packit-worker"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"in cloned ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service"},"packit-service repo"),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"make worker")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"podman tag quay.io/packit/packit-worker:dev quay.io/packit/packit-worker:stg")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"podman push quay.io/packit/packit-worker:stg")))),(0,r.yg)("li",{parentName:"ul"},"in deployment: ",(0,r.yg)("inlineCode",{parentName:"li"},"DEPLOYMENT=stg make import-images"))),(0,r.yg)("p",null,"Once you're done you should ",(0,r.yg)("a",{parentName:"p",href:"continuous-deployment#reverting-to-older-deploymentrevisionimage"},"revert to older image"),".\nOr it will be automatically replaced once a packit-service PR is merged."),(0,r.yg)("h2",{id:"zuul"},"Zuul"),(0,r.yg)("p",null,"We have to encrypt the secrets, because we are using them in Zuul CI.\nThis repository provides helpful playbook to do this with one command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DEPLOYMENT=stg make zuul-secrets\n")),(0,r.yg)("h3",{id:"how-are-the-secrets-encrypted"},"How are the secrets encrypted?"),(0,r.yg)("p",null,"Zuul provides a public key for every project. The ansible playbook downloads Zuul repository and pass the project tenant and name as parameters to encryption script. This script then encrypts files with public key of the project.\nFor more information please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://ansible.softwarefactory-project.io/docs/user/zuul_user.html#create-a-secret-to-be-used-in-jobs"},"official docs"),"."),(0,r.yg)("h3",{id:"test-deployment-locally-with-openshift-local"},"Test Deployment locally with OpenShift Local"),(0,r.yg)("p",null,"For using OpenShift Local you need a ",(0,r.yg)("em",{parentName:"p"},"pull secret"),", download it here: ",(0,r.yg)("a",{parentName:"p",href:"https://console.redhat.com/openshift/create/local"},"https://console.redhat.com/openshift/create/local"),". Save it in a file called ",(0,r.yg)("inlineCode",{parentName:"p"},"secrets/openshift-local-pull-secret.yml")," following this format:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"---\npull_secret: <<< DOWNLOADED PULL SECRET CONTENT >>>\n")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"secrets#running-a-servicebot-locally"},"Populate the ",(0,r.yg)("inlineCode",{parentName:"a"},"secrets")," dir (",(0,r.yg)("inlineCode",{parentName:"a"},"secrets/{SERVICE}/dev/"),") with the other secrets.")),(0,r.yg)("p",null,"You can choose if you want to use a Virtual Machine created by Vagrant or one created by tmt."),(0,r.yg)("p",null,"Calling a test multiple times, modifyng and debugging it is simpler in a Vagrant VM."),(0,r.yg)("p",null,"The tmt environment ensure a more reproducible test."),(0,r.yg)("h4",{id:"using-vagrant"},"Using Vagrant"),(0,r.yg)("p",null,"Create and start the OpenShift Local cluster in a Vagrant VM with (it takes as long as an hour in my X1 ThinkPad):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd containers; make oc-cluster-create\n")),(0,r.yg)("p",null,"Once OC is up and running you can test the ",(0,r.yg)("inlineCode",{parentName:"p"},"packit-service")," deployment with the command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd containers; make tmt-vagrant-test\n")),(0,r.yg)("p",null,"This command will connect tmt to the Vagrant virtual machine and run the deploy test there (",(0,r.yg)("inlineCode",{parentName:"p"},"make test-deploy"),").\nYou can run the test as many times as you want as long as the virtual machine is up and running and the ",(0,r.yg)("inlineCode",{parentName:"p"},"crc cluster")," is started (",(0,r.yg)("inlineCode",{parentName:"p"},"make oc-cluster-up")," after every ",(0,r.yg)("inlineCode",{parentName:"p"},"make oc-cluster-down"),").\nYou can skip the ",(0,r.yg)("inlineCode",{parentName:"p"},"tmt")," environment and run the test directly inside the VM:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd containers;\nmake oc-cluster-ssh\n")),(0,r.yg)("p",null,"Inside the Vagrant VM as vagrant user you do:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd /vagrant\nSHARED_DIR=/vagrant make test-deploy\n")),(0,r.yg)("p",null,"You can directly work on the cluster:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"oc login -u kubeadmin https://api.crc.testing:6443\noc project myproject\noc describe node\noc describe pods\noc describe pod packit-worker-0\n...\n")),(0,r.yg)("p",null,"You can destroy the ",(0,r.yg)("inlineCode",{parentName:"p"},"libvirt")," machine with ",(0,r.yg)("inlineCode",{parentName:"p"},"cd containers; make oc-cluster-destroy")," and re-create it again with ",(0,r.yg)("inlineCode",{parentName:"p"},"cd containers; make oc-cluster-create"),"."),(0,r.yg)("h4",{id:"using-tmt"},"Using tmt"),(0,r.yg)("p",null,"You can test the packit-service deployment using a tmt created local VM with the command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"make tmt-local-test\n")),(0,r.yg)("p",null,"It is quite hard to change a test inside a tmt created VM and debug it.\nBut, in case you need it this is a list of commands that can be handy:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"tmt run --id deployment --until execute\ntmt run --id deployment prepare --force\ntmt run --id deployment login --step prepare:start\ntmt run --id deployment execute --force\ntmt run --id deployment login --step execute:start\ntmt run --id deployment finish\ntmt clean runs\ntmt clean guests\nvirsh list --all\n")))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);