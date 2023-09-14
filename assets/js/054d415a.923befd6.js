"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},65681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"How to do Fedora releases with Packit",sidebar_position:8},o="How to do Fedora releases with Packit",l={unversionedId:"fedora-releases-guide",id:"fedora-releases-guide",title:"How to do Fedora releases with Packit",description:"Let's split the release process into single steps:",source:"@site/docs/fedora-releases-guide.md",sourceDirName:".",slug:"/fedora-releases-guide",permalink:"/docs/fedora-releases-guide",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/fedora-releases-guide.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to do Fedora releases with Packit",sidebar_position:8},sidebar:"autogenerated",previous:{title:"update-source-git",permalink:"/docs/cli/source-git/update-source-git"},next:{title:"Setting up cross-project testing",permalink:"/docs/cross-project-testing"}},s={},p=[{value:"Propose downstream or pull from upstream",id:"propose-downstream-or-pull-from-upstream",level:2},{value:"Resolving specfile and version",id:"resolving-specfile-and-version",level:3},{value:"Propose downstream job",id:"propose-downstream-job",level:2},{value:"New upstream release",id:"new-upstream-release",level:4},{value:"Upload archive to lookaside cache",id:"upload-archive-to-lookaside-cache",level:4},{value:"Update dist-git content",id:"update-dist-git-content",level:4},{value:"Retriggering",id:"retriggering",level:4},{value:"Pull from upstream job",id:"pull-from-upstream-job",level:2},{value:"Trying it out",id:"trying-it-out",level:4},{value:"Retriggering",id:"retriggering-1",level:4},{value:"Koji build job",id:"koji-build-job",level:2},{value:"Retriggering",id:"retriggering-2",level:4},{value:"Bodhi update job",id:"bodhi-update-job",level:2},{value:"Retriggering",id:"retriggering-3",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-do-fedora-releases-with-packit"},"How to do Fedora releases with Packit"),(0,i.kt)("p",null,"Let's split the release process into single steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#new-upstream-release"},"New upstream release")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#upload-archive-to-lookaside-cache"},"Upload archive to lookaside cache")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#update-dist-git-content"},"Update dist-git content")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#koji-build-job"},"Koji builds")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#bodhi-update-job"},"Bodhi updates"))),(0,i.kt)("p",null,"Doing Fedora releases with Packit means utilising these jobs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#propose-downstream-job"},(0,i.kt)("inlineCode",{parentName:"a"},"propose_downstream"))," or ",(0,i.kt)("a",{parentName:"li",href:"#pull-from-upstream-job"},(0,i.kt)("inlineCode",{parentName:"a"},"pull_from_upstream"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#koji-build-job"},(0,i.kt)("inlineCode",{parentName:"a"},"koji_build"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#bodhi-update-job"},(0,i.kt)("inlineCode",{parentName:"a"},"bodhi_update")))),(0,i.kt)("p",null,"Every job takes care of a different part of the release process."),(0,i.kt)("h2",{id:"propose-downstream-or-pull-from-upstream"},"Propose downstream or pull from upstream"),(0,i.kt)("p",null,"There are two jobs that can help you to get your new release to Fedora.\nThey differ in the way they are triggered and configured but share the implementation."),(0,i.kt)("p",null,"The push workflow is configured and started in the upstream repository,\nunlike the pull workflow that is configured in dist-git."),(0,i.kt)("p",null,"Here are the key differences between the two:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null),(0,i.kt)("th",null,"propose-downstream"),(0,i.kt)("th",null,"pull-from-upstream")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Packit Service"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Have a ",(0,i.kt)("code",null,".packit.yaml")," in ",(0,i.kt)("b",null,"upstream")," repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: propose-downstream:\n    ...\n")),(0,i.kt)("p",null,"Triggered by a new release in ",(0,i.kt)("b",null,"upstream project"),"."),(0,i.kt)("p",null,"It creates ",(0,i.kt)("i",null,"dist-git")," pull requests with the content of the release.")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Have a ",(0,i.kt)("code",null,".packit.yaml")," in ",(0,i.kt)("b",null,"dist-git")," repo (main or rawhide branch):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: pull-from-upstream:\n    ...\n")),(0,i.kt)("p",null,"Triggered by a new release in ",(0,i.kt)("b",null,"upstream project"),"."),(0,i.kt)("p",null,"It creates ",(0,i.kt)("i",null,"dist-git")," pull requests with the content of the release and the packit config taken from dist-git main/rawhide branch."))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Packit CLI"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Have a ",(0,i.kt)("code",null,".packit.yaml")," in ",(0,i.kt)("b",null,"upstream")," repo, clone repo and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"packit propose-downstream\n")),(0,i.kt)("p",null,"It creates ",(0,i.kt)("i",null,"dist-git")," pull requests with the content of the release and the packit config taken from local clone.")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Have a ",(0,i.kt)("code",null,".packit.yaml")," in ",(0,i.kt)("b",null,"dist-git")," repo, clone repo and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"packit pull-from-upstream\n")),(0,i.kt)("p",null,"It creates ",(0,i.kt)("i",null,"dist-git")," pull requests with the content of the release and the packit config taken from local clone.")))),(0,i.kt)("h3",{id:"resolving-specfile-and-version"},"Resolving specfile and version"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null),(0,i.kt)("th",null,"propose-downstream"),(0,i.kt)("th",null,"pull-from-upstream")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Packit Service"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Version is retrieved from ",(0,i.kt)("b",null,"upstream project release event"),"."),(0,i.kt)("p",null,"Specfile is retrieved from ",(0,i.kt)("b",null,"upstream repo"),".")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Version is retrieved from ",(0,i.kt)("b",null,"https://release-monitoring.org event"),"."),(0,i.kt)("p",null,"Specfile is retrieved from ",(0,i.kt)("b",null,"dist-git repo"),"."))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Packit CLI"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Version is retrieved from the ",(0,i.kt)("b",null,"latest upstream project release tag")," if not ",(0,i.kt)("b",null,"specified"),"."),(0,i.kt)("p",null,"Specfile is retrieved from the ",(0,i.kt)("b",null,"upstream repo")," unless the ",(0,i.kt)("code",null,"--local-project")," option is used.")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Version is retrieved from the ",(0,i.kt)("b",null,"latest upstream project release tag")," if not ",(0,i.kt)("b",null,"specified"),"."),(0,i.kt)("p",null,"Specfile is retrieved from the ",(0,i.kt)("b",null,"local dist-git repo clone"),".")))),(0,i.kt)("h2",{id:"propose-downstream-job"},"Propose downstream job"),(0,i.kt)("p",null,"For enabling the propose downstream job, you need to have\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/#1-set-up-packit-integration"},"Packit Service installed"),"\nand have a ",(0,i.kt)("inlineCode",{parentName:"p"},"propose_downstream")," job in the configuration file for the given upstream repository\n(this job is also run by default if there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"jobs")," section\nin the configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#packit-service-jobs"},"jobs configuration"),").\nThe ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/propose_downstream"},"propose_downstream job")," should be then configured like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: propose_downstream\n  trigger: release\n  dist_git_branches:\n    - main\n")),(0,i.kt)("p",null,"You can adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist_git_branches")," field to include the\ndist-git branches you want to update and also utilise ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#aliases"},"aliases"),"\ninstead of using hardcoded versions."),(0,i.kt)("h4",{id:"new-upstream-release"},"New upstream release"),(0,i.kt)("p",null,"The process of releasing a new version starts in the upstream repository by creating a\nnew upstream release. Packit gets the information about the newly created release (not a git tag) from GitHub/GitLab,\nloads the config from the release commit and if there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"propose_downstream")," job\ndefined, the workflow begins. If you want to restrict what releases with corresponding tags Packit should react on,\nyou can utilise the configuration options ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_tag_include"},(0,i.kt)("inlineCode",{parentName:"a"},"upstream_tag_include"))," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_tag_exclude"},(0,i.kt)("inlineCode",{parentName:"a"},"upstream_tag_exclude")),"."),(0,i.kt)("h4",{id:"upload-archive-to-lookaside-cache"},"Upload archive to lookaside cache"),(0,i.kt)("p",null,"The upstream archive needs to be downloaded by Packit first and then uploaded to the lookaside cache.\nBy default, Packit downloads sources defined in the specfile that contain URLs.\nYou can override these URLs via ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#sources"},(0,i.kt)("inlineCode",{parentName:"a"},"sources"))," configuration key."),(0,i.kt)("p",null,"For Python packages, you can use a\n",(0,i.kt)("a",{parentName:"p",href:"https://packaging.python.org/guides/publishing-package-distribution-releases-using-github-actions-ci-cd-workflows"},"GitHub action"),"\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit/packit/blob/main/.github/workflows/pypi-publish.yml"},"example setup of Packit itself"),")\nthat automatically builds and uploads the archive to PyPI\non each new release. Then during propose downstream, Packit tries to download the archive from the provided URL.\nIf the download fails because the upstream archive is not available at the time of running the job,\nthe job is scheduled to be retried later. "),(0,i.kt)("h4",{id:"update-dist-git-content"},"Update dist-git content"),(0,i.kt)("p",null,"After saving the archive in the lookaside cache,\nPackit updates the dist-git content (mainly ",(0,i.kt)("inlineCode",{parentName:"p"},"sources")," file and spec file) via pull requests for the specified branches.\nYou can configure which files in the upstream repo should be copied to dist-git during an update\nvia ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#files_to_sync"},(0,i.kt)("inlineCode",{parentName:"a"},"files_to_sync"))," configuration key."),(0,i.kt)("p",null,"The version in the spec file is set to the version that Packit gets from the upstream tag\ncorresponding to the release that triggered the job. If the version and tag differ,\nyou can specify the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_tag_template"},(0,i.kt)("inlineCode",{parentName:"a"},"upstream_tag_template")),"\nconfiguration option so that Packit can extract the correct version."),(0,i.kt)("p",null,"If you use ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#copy_upstream_release_description"},(0,i.kt)("inlineCode",{parentName:"a"},"copy_upstream_release_description: true")),",\nthe changelog entry will use the GitHub/GitLab release description field.\n(Just make sure the formatting is compatible with spec file.\nE.g. use ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," for lists to not create multiple changelog entries.)\nThere is also ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#sync_changelog"},(0,i.kt)("inlineCode",{parentName:"a"},"sync_changelog"))," configuration option to enable syncing\nthe whole changelog."),(0,i.kt)("p",null,"Be aware that Packit does not sign-off its commits so it can't open pull requests\nif the ",(0,i.kt)("inlineCode",{parentName:"p"}," Enforce signed-off commits in pull-request")," option is set in the dist-git project settings."),(0,i.kt)("p",null,"During proposing a new update, you will get updates of the job status via commit statuses/checks\non the release commit. These will provide links to our dashboard where you can find all the information about\nthe job including the logs. You can also check all propose downstream runs in\n",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.packit.dev/jobs/propose-downstreams"},"this view"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dashboard view for propose downstreams",src:a(4163).Z,width:"1518",height:"408"})),(0,i.kt)("p",null,"After Packit successfully creates the dist-git pull requests,\nit's on downstream CI systems and maintainer(s) to check the changes and merge\nthe pull requests."),(0,i.kt)("h4",{id:"retriggering"},"Retriggering"),(0,i.kt)("p",null,"Users with write or admin permissions to the repository can retrigger an\nupdate via a comment in any open issue in the upstream repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit propose-downstream\n")),(0,i.kt)("h2",{id:"pull-from-upstream-job"},"Pull from upstream job"),(0,i.kt)("admonition",{title:"New feature",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Starting January 2023, we have provided a new way to get fresh\nupstream releases in Fedora Linux.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/pull_from_upstream"},(0,i.kt)("inlineCode",{parentName:"a"},"pull_from_upstream")," job")," is\ndefined in dist-git only and provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"propose_downstream"),"\nfunctionality. This means that Packit doesn't need to be set up in the\nupstream project: everything is configured in Fedora dist-git. So when a new\nupstream release happens and\n",(0,i.kt)("a",{parentName:"p",href:"https://release-monitoring.org/"},"release-monitoring.org")," detects it, you'll\nget dist-git pull requests with it automatically. If you want to restrict what releases with corresponding tags Packit should react on,\nyou can utilise the configuration options ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_tag_include"},(0,i.kt)("inlineCode",{parentName:"a"},"upstream_tag_include"))," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/#upstream_tag_exclude"},(0,i.kt)("inlineCode",{parentName:"a"},"upstream_tag_exclude")),"."),(0,i.kt)("p",null,"For customization of the job, you may need to define additional configuration options, most commonly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the version from release monitoring and Git tag differ,\nyou should specify the ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/#upstream_tag_template"},(0,i.kt)("inlineCode",{parentName:"a"},"upstream_tag_template")),"."),(0,i.kt)("li",{parentName:"ul"},"You can configure which files (if any) in the upstream repo should be copied to dist-git during an update\nvia ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/#files_to_sync"},(0,i.kt)("inlineCode",{parentName:"a"},"files_to_sync"))," configuration key."),(0,i.kt)("li",{parentName:"ul"},"By default, Packit downloads sources defined in the spec file that contain URLs.\nYou can override these URLs via ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration#sources"},(0,i.kt)("inlineCode",{parentName:"a"},"sources"))," configuration key."),(0,i.kt)("li",{parentName:"ul"},"You may utilise some of the ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/actions/#syncing-the-release"},"actions"),"\nfor overriding the Packit default behaviour, for example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for the changelog entry generation, if you do not want the default ",(0,i.kt)("inlineCode",{parentName:"p"},"git log")," output, you can use your own command(s):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'changelog-entry:\n  - bash -c "echo - New release ${PACKIT_PROJECT_VERSION}"\n')))))),(0,i.kt)("p",null,"You can check all the job runs with details and logs in ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"this view"),".\nYou can also configure a repository where we should\nopen issues in case of errors during the job via ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,i.kt)("inlineCode",{parentName:"a"},"issue_repository")),"\nconfiguration key."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dashboard view for pull_from_upstream",src:a(8841).Z,width:"1485",height:"398"})),(0,i.kt)("h4",{id:"trying-it-out"},"Trying it out"),(0,i.kt)("p",null,"If you are interested in this functionality and want to try it out, you can trigger the job from a pull request."),(0,i.kt)("p",null,"If there is a new release pending for your package (bugzilla has been opened by ",(0,i.kt)("a",{parentName:"p",href:"https://release-monitoring.org/"},"release-monitoring.org")," but no rebase done in dist-git yet), do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a ",(0,i.kt)("inlineCode",{parentName:"li"},"rawhide"),"-based pull request with Packit configuration defining the ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/downstream/pull_from_upstream"},(0,i.kt)("inlineCode",{parentName:"a"},"pull_from_upstream")," job")),(0,i.kt)("li",{parentName:"ul"},"comment ",(0,i.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream --with-pr-config")," on the pull request"),(0,i.kt)("li",{parentName:"ul"},"check the ",(0,i.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"dashboard")),(0,i.kt)("li",{parentName:"ul"},"if everything went well, review the pull request(s) in your dist-git repository created by Packit"),(0,i.kt)("li",{parentName:"ul"},"if you are happy with the results, merge your pull request")),(0,i.kt)("p",null,"If there is no pending release and your package has been rebased at least once in the past, you can still try the job using a new testing branch:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a branch pointing to a commit before the last rebase, name it e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"packit-test")," and push it (directly to dist-git, not to your fork)"),(0,i.kt)("li",{parentName:"ul"},"create a ",(0,i.kt)("inlineCode",{parentName:"li"},"rawhide"),"-based pull request with Packit configuration defining the ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/downstream/pull_from_upstream"},(0,i.kt)("inlineCode",{parentName:"a"},"pull_from_upstream")," job")),(0,i.kt)("li",{parentName:"ul"},"in the configuration, set the ",(0,i.kt)("inlineCode",{parentName:"li"},"dist_git_branches")," option of the ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_from_upstream")," job to the name of the testing branch"),(0,i.kt)("li",{parentName:"ul"},"comment ",(0,i.kt)("inlineCode",{parentName:"li"},"/packit pull-from-upstream --with-pr-config")," on the pull request"),(0,i.kt)("li",{parentName:"ul"},"check the ",(0,i.kt)("a",{parentName:"li",href:"https://dashboard.packit.dev/jobs/pull-from-upstreams"},"dashboard")),(0,i.kt)("li",{parentName:"ul"},"if everything went well, review the pull request in your dist-git repository created by Packit"),(0,i.kt)("li",{parentName:"ul"},"if you are happy with the results, you can change the ",(0,i.kt)("inlineCode",{parentName:"li"},"dist-git-branches")," attribute to whatever you want, merge your pull request and wait for the next upstream release")),(0,i.kt)("h4",{id:"retriggering-1"},"Retriggering"),(0,i.kt)("p",null,"Packagers with write access to the dist-git repository can retrigger the job\nvia a comment in any dist-git pull request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit pull-from-upstream\n")),(0,i.kt)("p",null,"This will take the Packit configuration file from the default branch of the dist-git\nrepository (",(0,i.kt)("inlineCode",{parentName:"p"},"rawhide"),"), same as if the job was triggered by a new release. To use the configuration file from the dist-git pull request you are commenting on, you can add an argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit pull-from-upstream --with-pr-config\n")),(0,i.kt)("h2",{id:"koji-build-job"},"Koji build job"),(0,i.kt)("p",null,"After having the dist-git content updated, you can easily automate also building in Koji.\nYou can simply configure Packit to react to the new commits in your dist-git repository and create\nKoji builds by having\na Packit configuration (when using ",(0,i.kt)("inlineCode",{parentName:"p"},"propose_downstream")," job, you can configure Packit to sync the file) in your\ndist-git repository that includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"koji_build")," job.\nThen, if Packit is informed (via fedora-messaging bus) about a new commit in the configured dist-git branch, it submits a new build in Koji\nlike maintainers usually do. (The commits without any spec file change are skipped.)"),(0,i.kt)("p",null,"By default, only merged pull requests created by Packit are being acted upon, but\nyou can override this behaviour by specifying\n",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_pr_authors")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_committers")," in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/koji_build"},"job configuration"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/koji_build"},"koji_build job")," can be configured like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: koji_build\n  trigger: commit\n  dist_git_branches:\n    - fedora-all\n")),(0,i.kt)("p",null,"There is no UI provided by Packit for the job,\nbut it is visible across Fedora systems (as you can see in the following image).\nThe koji build behaves as it was created manually, and you can utilise\n",(0,i.kt)("a",{parentName:"p",href:"https://apps.fedoraproject.org/notifications/about"},"Fedora Notifications"),"\nto be informed about the builds. Also, you can configure a repository where should we\nopen issues in case of errors during the job via ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,i.kt)("inlineCode",{parentName:"a"},"issue_repository"))," configuration key."),(0,i.kt)("h4",{id:"retriggering-2"},"Retriggering"),(0,i.kt)("p",null,"You can retrigger a build by a comment in a dist-git pull request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit koji-build\n")),(0,i.kt)("p",null,"The build will be triggered for the target branch of the pull request using the most recent commit on the target branch\n(NOT the HEAD commit of the pull request). The user who posts this comment needs to be a packager."),(0,i.kt)("p",null,"If Packit created an issue in the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"issue_repository"),", you can place the same comment in that\nissue to retrigger the builds (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,i.kt)("inlineCode",{parentName:"a"},"issue_repository"))," for details)."),(0,i.kt)("h2",{id:"bodhi-update-job"},"Bodhi update job"),(0,i.kt)("p",null,"Lastly, you can again similarly to Koji builds, configure Packit to react to successful Koji builds and create\nBodhi updates by having a Packit configuration in your dist-git repository that includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"bodhi_update")," job.\nOnce Packit is informed (via fedora-messaging bus) about the successful Koji build for the configured branch,\nit creates a new update for that branch in Bodhi for you."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/downstream/bodhi_update"},"bodhi_update job")," can be configured like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: bodhi_update\n  trigger: commit\n  dist_git_branches:\n    - fedora-branched # rawhide updates are created automatically\n")),(0,i.kt)("p",null,"The packit config is loaded from the commit the build is triggered from.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"issue_repository")," configuration key mentioned in the Koji build job applies here as well."),(0,i.kt)("h4",{id:"retriggering-3"},"Retriggering"),(0,i.kt)("p",null,"You can retrigger an update by a comment in a dist-git pull request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit create-update\n")),(0,i.kt)("p",null,"The update will be triggered for the target branch of the pull request. The user who\nposts this comment needs to be a packager and have write access to the dist-git repository."),(0,i.kt)("p",null,"If Packit created an issue in the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"issue_repository"),", you can place the same comment in that\nissue to retrigger the updates (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#issue_repository"},(0,i.kt)("inlineCode",{parentName:"a"},"issue_repository"))," for details)."))}c.isMDXComponent=!0},4163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/propose-downstream-dashboard-7c31911f7c34936f2e400290b2bc451d.png"},8841:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pull-from-upstream-dashboard-8e183c53a30af5215b9503c006435941.png"}}]);