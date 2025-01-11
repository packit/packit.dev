"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[42022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),h=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=h(a),u=o,m=l["".concat(p,".").concat(u)]||l[u]||d[u]||n;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var h=2;h<n;h++)s[h]=a[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var r=a(87462),o=(a(67294),a(3905));const n={title:"Packit in 2024",date:new Date("2024-12-23T00:00:00.000Z"),authors:"flachman",tags:[2024,"yearly-features","summary"]},s="Packit in 2024",i={permalink:"/posts/packit-in-2024",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/packit-in-2024/index.md",source:"@site/posts/packit-in-2024/index.md",title:"Packit in 2024",description:"We are reaching the end of the year and it\u2019s a good time to look back at the Packit highlights of this year. And it was a year!",date:"2024-12-23T00:00:00.000Z",formattedDate:"December 23, 2024",tags:[{label:"2024",permalink:"/posts/tags/2024"},{label:"yearly-features",permalink:"/posts/tags/yearly-features"},{label:"summary",permalink:"/posts/tags/summary"}],readingTime:5.99,hasTruncateMarker:!1,authors:[{name:"Franti\u0161ek Lachman",email:"flachman@redhat.com",url:"https://github.com/lachmanfrantisek",imageURL:"https://github.com/lachmanfrantisek.png",key:"flachman"}],frontMatter:{title:"Packit in 2024",date:"2024-12-23T00:00:00.000Z",authors:"flachman",tags:["2024","yearly-features","summary"]},prevItem:{title:"Advanced usage of the specfile library",permalink:"/posts/specfile-advanced"},nextItem:{title:"Packit 1.0.0 countdown - action may be required",permalink:"/posts/packit_1_0_0_action_required"}},p={authorsImageUrls:[void 0]},h=[],c={toc:h},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are reaching the end of the year and it\u2019s a good time to look back at the Packit highlights of this year. And it was a year!"),(0,o.kt)("p",null,"We didn\u2019t take a winter sleep, and at the very start of the year, we ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/posts/specfile-introduction"},"announced")," the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/packit/specfile"},"Python library for parsing specfiles"),". (Mainly written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nforro"},"Nikola"),".) We had been successfully using it for some time and it was time to give the benefit to others. Thanks to that, there is now a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dcermak/rpm-spec-language-server"},"language Server for RPM spec files"),"."),(0,o.kt)("p",null,"A lot usually happens in Brussels at the turn of January and February. And this time, we were present as well for the first time. ",(0,o.kt)("a",{parentName:"p",href:"https://mastodonczech.cz/@lachmanfrantisek"},"Franti\u0161ek")," (joined by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ukulekek"},"Evgeny"),") presented on ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Eqb6IqG7Jek"},"CentOS Connect how Packit and Testing Farm can be beneficial to the CentOS community"),". Also, at this conference, there was a meetup of the ",(0,o.kt)("a",{parentName:"p",href:"https://sigs.centos.org/integration/"},"CentOS Integration SIG")," which ",(0,o.kt)("a",{parentName:"p",href:"https://fosstodon.org/@m4tt_314"},"Matej")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mastodonczech.cz/@lachmanfrantisek"},"Franti\u0161ek")," joined. The main event in Brussels is the ",(0,o.kt)("a",{parentName:"p",href:"https://fosdem.org/2024/"},"FOSDEM conference"),", a big conference consisting of multiple so-called rooms. ",(0,o.kt)("a",{parentName:"p",href:"https://mastodonczech.cz/@lachmanfrantisek"},"Franti\u0161ek")," took ",(0,o.kt)("a",{parentName:"p",href:"https://fosdem.org/2024/schedule/event/fosdem-2024-2881-upstream-and-downstream-best-friends-forever-/"},"an interactive session")," in the Distribution room about the relationship between upstream and downstream."),(0,o.kt)("p",null,"During the whole year, we have made many improvements so more packages can use Packit\u2019s Fedora release automation. Since many packages can benefit from Packit right away, we\u2019ve introduced an ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/docs/cli/dist-git/init"},"onboarding command")," capable of preparing a configuration file and also moving it to dist-git \u2013 either via pull requests or direct push."),(0,o.kt)("p",null,"For some time, Packit has been able to build VM images thanks to the prototype integration with the ",(0,o.kt)("a",{parentName:"p",href:"https://console.redhat.com/insights/image-builder"},"Image Builder service"),". To promote this functionality and see if there is enough demand to continue development, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/majamassarini"},"Maja")," prepared a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.redhat.com/articles/2024/04/02/customize-aws-cloud-images-rhel-image-builder-and-packit#"},"blog post")," for RedHat\u2019s Developer Portal (also ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/posts/aws-and-image-builder"},"available")," on Packit\u2019s webpage)."),(0,o.kt)("p",null,"As each year, the team met in person in June in Brno \u2013 both to gather and discuss Packit-related topics and also to be part of DevConf.CZ conference. To not need to dive into everything happening during that time in this text, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/posts/devconf-2024"},"our blog post"),". We organised a successful workshop in the Red Hat Brno office and took multiple talks, notably a ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7n8pypmrQh4"},"showcase")," of user success stories presented by our fellow users."),(0,o.kt)("p",null,"During summer and again after a couple of years, we had the pleasure to have a student working on a Packit-related task as part of the Google Summer of Code. This time, the functionality was going outside of the Fedora ecosystem, namely to support OBS (the openSUSE build and distribution service). We want to thank ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rxbryan"},"Brian Elle")," who worked on this, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dcermak"},"Dan \u010cerm\xe1k")," who took the lead on this from the openSUSE side and is currently polishing the code so it can be introduced into Packit\u2019s codebase without worrying about maintainability."),(0,o.kt)("p",null,"Another regular event during the year is a Fedora yearly conference \u2013 ",(0,o.kt)("a",{parentName:"p",href:"https://fedoraproject.org/flock/2024/"},"Flock"),". This time happening in Rochester and thanks to Fedora\u2019s sponsorship, both ",(0,o.kt)("a",{parentName:"p",href:"https://fosstodon.org/@lbarcziova"},"Laura")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mastodonczech.cz/@lachmanfrantisek"},"Franti\u0161ek")," could take part. Similar to DevConf.CZ we\u2019ve covered all the details in a ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/posts/flock_2024_diary"},"separate blog post"),". Just to mention the talks presented, we took ",(0,o.kt)("a",{parentName:"p",href:"https://cfp.fedoraproject.org/flock-2024/talk/HCBLBX/"},"one")," session covering Fedora automation and our journey to it and a ",(0,o.kt)("a",{parentName:"p",href:"https://cfp.fedoraproject.org/flock-2024/talk/SHQHK8/"},"second one")," with ",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/@jhavlin:fedora.im?web-instance%5Belement.io%5D=chat.fedoraproject.org"},"Jan Havl\xedn")," from the Testing Farm to show people various testing use cases and all the news that was delivered on this field."),(0,o.kt)("p",null,"The second half of the year was spent finishing all the initiatives we\u2019d worked on for some time. The long-awaited feature was not to require a git upstream for Fedora release automation. This wasn\u2019t so simple because of the old decision to build Packit on the concept of related git repositories \u2013 one representing upstream and one downstream. (And maybe one for the source-git, but that\u2019s a ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/source-git/status"},"story")," for another time.) Luckily, all the hard work was done and many packages can now use Packit."),(0,o.kt)("p",null,"Another feature and another change of Packit\u2019s internal plumbings is the way to ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/posts/non-git-upstreams-support"},"avoid having divergent branching")," when releasing to multiple Fedora (or EPEL) branches. Thanks to this, the commits between branches can now be shared and the history can be linear."),(0,o.kt)("p",null,"This is still not all. Another huge feature spreading across multiple packages is ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/docs/fedora-releases-guide/releasing-multiple-packages"},"the support for side-tags"),". It\u2019s a vast improvement and enabler for various package groups that need to control many packages together. And it\u2019s finally there!"),(0,o.kt)("p",null,"And this is still not all for this year. We love collaborating on features and one such collaboration was/is with ",(0,o.kt)("a",{parentName:"p",href:"https://fosstodon.org/@siteshwar"},"Siteshwar Vashisht")," on integrating Packit with ",(0,o.kt)("a",{parentName:"p",href:"https://openscanhub.dev/"},"OpenScanHub")," so Packit users can run static analysis without much effort. Later during the year, we managed to properly report differential scans (so you can check only new findings.) If you are interested in this (or would like to know why one needs to care), look at Situ\u2019s presentation on ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rcuIvAttWgY&pp=ygUdZGV2Y29uZiBzaXRlc2h3YXIgb3BlbnNjYW5odWI%3D"},"DevConf.CZ")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lp7UECNg7qY"},"Cauldron")," conference. You can also visit Brussels next year and ",(0,o.kt)("a",{parentName:"p",href:"https://mastodonczech.cz/@lachmanfrantisek"},"Franti\u0161ek")," and ",(0,o.kt)("a",{parentName:"p",href:"https://fosstodon.org/@siteshwar"},"Siteshwar Vashisht")," ",(0,o.kt)("a",{parentName:"p",href:"https://cfp.fedoraproject.org/centos-connect-2025/talk/review/EW7PWKP8E3FJPVYHUTARFZRNURYZBTDA"},"should present")," the integration on the ",(0,o.kt)("a",{parentName:"p",href:"https://connect.centos.org/"},"CentOS Connect"),". Feedback for this functionality is welcome ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/discussions/2371"},"here"),"."),(0,o.kt)("p",null,"After all these big achievements and many small and big improvements, the ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/posts/packit_1_0_0_action_required"},"time has come to release Packit v1.0.0"),". Everything is now prepared, and we are giving people time to update their configuration files. (Since we love automation and pull request-based workflows, the affected users should have received a pull request with the changes required.)"),(0,o.kt)("p",null,"So, quite a strong year, wasn\u2019t it?"),(0,o.kt)("p",null,"If you rather want to check some hard data, let\u2019s look at the usage trend charts from last year. We\u2019ve managed to double the number of projects! As you can see, there is a strong trend in the Fedora automation space overnumbering the projects with upstream Copr builds and/or tests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Trend chart of onboarded project in year 2024",src:a(51855).Z,width:"1412",height:"433"})),(0,o.kt)("p",null,"And now, we are slowly moving towards the next year. So, what you can expect from us?"),(0,o.kt)("p",null,"We have two ideas on how to have a bigger impact (a positive one, we truly believe) in Fedora. Since we believe Fedora is about community, we have prepared two Fedora Change Proposals so everyone can provide feedback on what we would like to introduce."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discussion.fedoraproject.org/t/f42-change-proposal-automated-onboarding-to-packit-release-automation-for-new-packages-system-wide/139530"},"F42 Change Proposal: Automated onboarding to Packit release automation for new packages (system-wide)")," (Yes, we would like to bring Packit to new packages and ideally to people who might not be aware of Packit.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fedoraproject.org/wiki/Changes/PackitDistgitCI"},"Packit as a dist-git CI")," (We believe we can build on our successful collaboration with Testing Farm and provide a better dist-git CI for Fedora.)")),(0,o.kt)("p",null,"We would also like to give our dashboard more love. We used to prioritise other features, but we can\u2019t postpone it forever. With the help of ",(0,o.kt)("a",{parentName:"p",href:"https://snug.moe/@Venefilyn"},"Freya"),", we plan to start with user research and try to make the dashboard more user-friendly as part of ",(0,o.kt)("a",{parentName:"p",href:"https://packit.dev/posts/project-mycorrhiza"},"Project Mycorrhiza"),"."),(0,o.kt)("p",null,"To be closer to Fedora, we would also like to move our deployments to the Fedora OpenShift Cluster. The discussions are ongoing, and luckily, we might be able to do this soon."),(0,o.kt)("p",null,"And if you want to meet us in person, a good chance is ",(0,o.kt)("a",{parentName:"p",href:"https://connect.centos.org/"},"CentOS Connect"),", ",(0,o.kt)("a",{parentName:"p",href:"http://DevConf.CZ"},"DevConf.CZ")," or ",(0,o.kt)("a",{parentName:"p",href:"https://fedoraproject.org/flock/"},"Flock"),"."),(0,o.kt)("p",null,"Hopefully, the following year will be at least as successful as the previous one. Thanks everyone for your support. We have the pleasure to have a friendly and grateful userbase that is a pleasure to work with and for. All the best for the new year!"))}d.isMDXComponent=!0},51855:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2024-onboarding-chart-79dab44b5c3b112d3d062fb63872ed43.png"}}]);