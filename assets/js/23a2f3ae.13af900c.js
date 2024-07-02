"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[22511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Generating TLS Certificates"},i="Obtaining a Let's Encrypt TLS cert using certbot",l={unversionedId:"tls-certs",id:"tls-certs",title:"Generating TLS Certificates",description:"CertBot manual//certbot.eff.org/docs/using.html#manual",source:"@site/deployment/tls-certs.md",sourceDirName:".",slug:"/tls-certs",permalink:"/deployment/tls-certs",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/tls-certs.md",tags:[],version:"current",frontMatter:{title:"Generating TLS Certificates"},sidebar:"autogenerated",previous:{title:"Testing Changes",permalink:"/deployment/testing-changes"},next:{title:"Variable files",permalink:"/deployment/vars"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run certbot to obtain the challenges",id:"run-certbot-to-obtain-the-challenges",level:2},{value:"Update DNS record",id:"update-dns-record",level:2},{value:"Update secrets in the vault",id:"update-secrets-in-the-vault",level:2},{value:"Re-deploy secrets for all services and environments",id:"re-deploy-secrets-for-all-services-and-environments",level:2},{value:"How to inspect a certificate",id:"how-to-inspect-a-certificate",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"obtaining-a-lets-encrypt-tls-cert-using-certbot"},"Obtaining a Let's Encrypt TLS cert using ",(0,a.kt)("inlineCode",{parentName:"h1"},"certbot")),(0,a.kt)("p",null,"CertBot manual: ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/docs/using.html#manual"},"https://certbot.eff.org/docs/using.html#manual")),(0,a.kt)("p",null,"The process is manual but would be awesome to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/research/blob/main/research/internal-automation/cert-management.md"},"make it automated 100%"),"."),(0,a.kt)("p",null,"We are using multi-domain wildcard certificates for the following domains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.packit.dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.stream.packit.dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.fedora-source-git.packit.dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.stg.packit.dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.stg.stream.packit.dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.stg.fedora-source-git.packit.dev"))),(0,a.kt)("p",null,"In case the procedure bellow does not work,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/packit/deployment/blob/008f5eaad69a620c54784f1fc19c7c775af9ec7d/README.md#obtaining-a-lets-encrypt-cert-using-certbot"},"previously used http challenge"),"\ncan be used instead.\nBe aware that the http challenge approach is more complex, includes destructive actions and longer downtime."),(0,a.kt)("p",null,"tl;dr"),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Check prerequisites."),(0,a.kt)("li",{parentName:"ol"},"Run certbot to obtain the challenges."),(0,a.kt)("li",{parentName:"ol"},"Configure DNS TXT records based on values requested in 2."),(0,a.kt)("li",{parentName:"ol"},"Update secrets repository."),(0,a.kt)("li",{parentName:"ol"},"Re-deploy stg&prod."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If certbot is executed against multiple domains, step 3. is repeated for each domain.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Make sure the DNS is all set up:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ dig prod.packit.dev\n; <<>> DiG 9.18.10 <<>> prod.packit.dev\n;; QUESTION SECTION:\n;prod.packit.dev.       IN  A\n;; ANSWER SECTION:\nprod.packit.dev.    49  IN  CNAME   router-default.apps.auto-prod.gi0n.p1.openshiftapps.com.\nrouter-default.apps.auto-prod.gi0n.p1.openshiftapps.com. 49 IN A 52.211.65.65\nrouter-default.apps.auto-prod.gi0n.p1.openshiftapps.com. 49 IN A 52.210.199.25\n")),(0,a.kt)("p",null,"Check if you have access to packit.dev domain in\n",(0,a.kt)("a",{parentName:"p",href:"https://domains.google.com/m/registrar/packit.dev"},"Google Domains"),"."),(0,a.kt)("p",null,"Install certbot locally: ",(0,a.kt)("inlineCode",{parentName:"p"},"dnf install certbot"),"."),(0,a.kt)("h2",{id:"run-certbot-to-obtain-the-challenges"},"Run certbot to obtain the challenges"),(0,a.kt)("p",null,"Run certbot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ certbot certonly --config-dir ~/.certbot --work-dir ~/.certbot --logs-dir ~/.certbot --manual --preferred-challenges dns --email hello@packit.dev -d prod.packit.dev -d stg.packit.dev -d dashboard.packit.dev -d dashboard.stg.packit.dev -d workers.packit.dev -d workers.stg.packit.dev -d prod.stream.packit.dev -d stg.stream.packit.dev -d prod.fedora-source-git.packit.dev -d stg.fedora-source-git.packit.dev\n")),(0,a.kt)("p",null,"You will be asked to set TXT record for every domain requested:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nPlease deploy a DNS TXT record under the name:\n\n_acme-challenge.abcxyz.packit.dev.\n\nwith the following value:\n\n123456abcdef\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nPress Enter to Continue\n")),(0,a.kt)("h2",{id:"update-dns-record"},"Update DNS record"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://domains.google.com/m/registrar/packit.dev/dns"},"Google Domains"),"\nand create/set the corresponding value:\nTXT record called ",(0,a.kt)("inlineCode",{parentName:"p"},"_acme-challenge.abcxyz.packit.dev"),".\nIf those records already exist (from previous run), don't create new records,\njust edit current ones (or first delete the old ones and then create new ones)."),(0,a.kt)("p",null,"Wait till it's distributed - in another terminal watch nslookup\nand once it returns the configured value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[~/]$ watch -d nslookup -q=TXT _acme-challenge.abcxyz.packit.dev\nServer:         127.0.0.53\nAddress:        127.0.0.53#53\n\nNon-authoritative answer:\n_acme-challenge.packit.dev      text = "123456abcdef"\n\nAuthoritative answers can be found from:\n\nCtrl+c\n')),(0,a.kt)("p",null,"Go to the terminal with certbot command waiting for your action and hit Enter."),(0,a.kt)("p",null,"Repeat this for all requested domains.\n(Or to save time, first change/add all TXT records, then ",(0,a.kt)("inlineCode",{parentName:"p"},"nslookup"),"\nthe last one and once you have the correct answer, hit Enter )"),(0,a.kt)("h2",{id:"update-secrets-in-the-vault"},"Update secrets in the vault"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bitwarden.com/help/attachments/#upload-a-file"},"Upload"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"fullchain.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"privkey.pem")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.certbot/live/prod.packit.dev/"),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-tls-certs")," item in our shared ",(0,a.kt)("inlineCode",{parentName:"p"},"Packit")," collection in Bitwarden vault."),(0,a.kt)("h2",{id:"re-deploy-secrets-for-all-services-and-environments"},"Re-deploy secrets for all services and environments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"oc login \u2039cluster\u203a; oc project \u2039project\u203a")," and"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"for cert in fullchain privkey; do scripts/update_oc_secret.sh packit-secrets ~/.certbot/live/prod.packit.dev/${cert}.pem; done\n")),(0,a.kt)("p",null,"or update ",(0,a.kt)("inlineCode",{parentName:"p"},"api_key")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"vars/{packit|stream|fedora-source-git}/{prod|stg}.yml")," and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`SERVICE=\u2039service\u203a DEPLOYMENT=\u2039deployment\u203a make deploy TAGS=secrets`\n")),(0,a.kt)("p",null,"You can also update the ",(0,a.kt)("inlineCode",{parentName:"p"},"packit-secrets")," secret via the web console\n(",(0,a.kt)("inlineCode",{parentName:"p"},"Actions")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Secret"),"), but last time it probably (it happened at the same time)\nmangled also the ",(0,a.kt)("inlineCode",{parentName:"p"},"fedora.keytab"),", so just be aware that this might happen."),(0,a.kt)("p",null,"Restart (or scale down and up) ",(0,a.kt)("inlineCode",{parentName:"p"},"packit-service"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"packit-dashboard")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," for them to use the new certs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ for deploy in packit-service packit-dashboard nginx; do oc rollout restart deploy/${deploy}; done\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-inspect-a-certificate"},"How to inspect a certificate"),(0,a.kt)("p",null,"If you want to inspect local certificates, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"certtool")," (",(0,a.kt)("inlineCode",{parentName:"p"},"gnutls-utils")," package)\nto view the cert's metadata:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ certtool -i < ~/.certbot/live/packit.dev/fullchain.pem\nX.509 Certificate Information:\n    Version: 3\n    Serial Number (hex): 04f4864b597f9c0859260d88e04cfabfeeac\n    Issuer: CN=R3,O=Let's Encrypt,C=US\n    Validity:\n        Not Before: Wed Feb 17 14:46:25 UTC 2021\n        Not After: Tue May 18 14:46:25 UTC 2021\n")))}u.isMDXComponent=!0}}]);