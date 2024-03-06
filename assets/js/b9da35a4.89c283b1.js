"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[6682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Testing Farm",sidebar_position:2},s="Testing Farm",l={unversionedId:"configuration/upstream/tests",id:"configuration/upstream/tests",title:"Testing Farm",description:"Testing Farm is Packit's testing system.",source:"@site/docs/configuration/upstream/tests.md",sourceDirName:"configuration/upstream",slug:"/configuration/upstream/tests",permalink:"/docs/configuration/upstream/tests",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/upstream/tests.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Testing Farm",sidebar_position:2},sidebar:"autogenerated",previous:{title:"Copr builds",permalink:"/docs/configuration/upstream/copr_build"},next:{title:"Koji builds",permalink:"/docs/configuration/upstream/upstream_koji_build"}},o={},p=[{value:"Enable Testing",id:"enable-testing",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Restart Testing",id:"restart-testing",level:2},{value:"Running tests with builds from another pull request",id:"running-tests-with-builds-from-another-pull-request",level:2},{value:"Running tests with a specific identifier",id:"running-tests-with-a-specific-identifier",level:2},{value:"Running a group of tests with the same label",id:"running-a-group-of-tests-with-the-same-label",level:2},{value:"Creating Tests",id:"creating-tests",level:2},{value:"Example test structure",id:"example-test-structure",level:3},{value:"More Examples",id:"more-examples",level:2},{value:"Using Filters",id:"using-filters",level:3},{value:"Prepare Step",id:"prepare-step",level:3},{value:"Apache Test",id:"apache-test",level:3},{value:"Systemd Tests",id:"systemd-tests",level:3},{value:"FMF Tests",id:"fmf-tests",level:3},{value:"Running linters",id:"running-linters",level:3},{value:"rpmlint",id:"rpmlint",level:4},{value:"rpminspect",id:"rpminspect",level:4},{value:"csmock",id:"csmock",level:3},{value:"Testing Farm API",id:"testing-farm-api",level:2},{value:"Issues &amp; RFEs",id:"issues--rfes",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing-farm"},"Testing Farm"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.testing-farm.io"},"Testing Farm")," is Packit's testing system.\nTest execution is managed by ",(0,i.kt)("a",{parentName:"p",href:"https://tmt.readthedocs.io/"},"tmt")," tool."),(0,i.kt)("h2",{id:"enable-testing"},"Enable Testing"),(0,i.kt)("p",null,"In order to enable test execution simply include ",(0,i.kt)("inlineCode",{parentName:"p"},"tests")," and required ",(0,i.kt)("inlineCode",{parentName:"p"},"copr_build")," jobs in the ",(0,i.kt)("inlineCode",{parentName:"p"},".packit.yaml")," configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: copr_build\n  trigger: pull_request\n  targets:\n  - fedora-all\n\n- job: tests\n  trigger: pull_request\n  targets:\n  - fedora-all\n")),(0,i.kt)("p",null,"The test job by default requires Copr build to be built before running tests, and then\nit is installed into the testing environment."),(0,i.kt)("p",null,"If you want to run tests without a Copr build, the test job needs to include ",(0,i.kt)("inlineCode",{parentName:"p"},"skip_build")," (described below) option in the job configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  jobs:\n  - job: tests\n    trigger: pull_request\n    targets:\n    - fedora-all\n    skip_build: true\n")),(0,i.kt)("p",null,"If you want to run multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"tests")," jobs for the same trigger with different configurations, you need to specify\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," options (see ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional parameters")," below):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: copr_build\n  trigger: pull_request\n  targets:\n  - fedora-all\n  \n- job: tests\n  trigger: pull_request\n  identifier: first\n  targets:\n  - fedora-rawhide\n  \n- job: tests\n  trigger: pull_request\n  identifier: second\n  targets:\n  - fedora-latest-stable\n")),(0,i.kt)("p",null,"If you want to trigger tests via pull request comment and not by every new commit into the pull request, the test job needs to include ",(0,i.kt)("inlineCode",{parentName:"p"},"manual_trigger")," (described below) option in the job configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  jobs:\n  - job: tests\n    trigger: pull_request\n    targets:\n    - fedora-all\n    skip_build: true\n    manual_trigger: true\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you have both build and follow-up test jobs with ",(0,i.kt)("inlineCode",{parentName:"p"},"manual_trigger: true"),", you will need to post\n2 comments: first ",(0,i.kt)("inlineCode",{parentName:"p"},"/packit build")," comment command and after the builds are successful ",(0,i.kt)("inlineCode",{parentName:"p"},"/packit test")," comment command.")),(0,i.kt)("p",null,"Another useful config is ",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  jobs:\n  - job: tests\n    trigger: pull_request\n    targets:\n    - fedora-all\n    skip_build: true\n    manual_trigger: true\n    identifier: regression-upgrade\n    labels:\n      - upgrade\n      - regression\n      \n  - job: tests\n    trigger: pull_request\n    targets:\n    - fedora-all\n    skip_build: true\n    manual_trigger: true\n    identifier: upgrade\n    labels:\n      - regression\n")),(0,i.kt)("p",null,"For more info see ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/tests#running-group-of-tests-with-same-label"},"Running group of tests with same label")),(0,i.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"targets"),' - Specify which "builds" you want to test.\n',(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/upstream/copr_build#available-copr-build-targets"},"As with copr_build job")," you can use\nspecific targets such as ",(0,i.kt)("inlineCode",{parentName:"li"},"fedora-34-x86_64"),". Or just the distro part,\nlike ",(0,i.kt)("inlineCode",{parentName:"li"},"centos-stream-8"),", in which case the architecture is ",(0,i.kt)("inlineCode",{parentName:"li"},"x86_64"),".")),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released."),(0,i.kt)("p",null,"Each target is then mapped to a ",(0,i.kt)("a",{parentName:"p",href:"https://tmt.readthedocs.io/en/latest/spec/context.html#dimension"},"(tmt) distro"),"\nand to a ",(0,i.kt)("a",{parentName:"p",href:"https://api.dev.testing-farm.io/v0.1/composes"},"Testing farm's compose"),"\nwhen submitting a test. You can override the default (target to distro) mapping by\nspecifying ",(0,i.kt)("inlineCode",{parentName:"p"},"targets")," as a dictionary instead of as a list (make sure to include the architecture\nof the target, e.g. not ",(0,i.kt)("inlineCode",{parentName:"p"},"epel-8")," but ",(0,i.kt)("inlineCode",{parentName:"p"},"epel-8-x86_64"),")."),(0,i.kt)("p",null,"In the following example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"epel-8-x86_64")," build will be tested on ",(0,i.kt)("inlineCode",{parentName:"p"},"centos-8"),"\ndistro (otherwise the default would be ",(0,i.kt)("inlineCode",{parentName:"p"},"centos-stream-8"),") and for\n",(0,i.kt)("inlineCode",{parentName:"p"},"epel-7-x86_64")," build the default mapping (to ",(0,i.kt)("inlineCode",{parentName:"p"},"centos-7")," distro) will be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  targets:\n    epel-8-x86_64:\n      distros: [centos-8]\n    epel-7-x86_64: {}\n")),(0,i.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fmf_url")," - Git repository containing the metadata (FMF) tree.\nUse any format acceptable by the git clone command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fmf_ref"),' - Branch, tag or commit specifying the desired git revision.\nDefaults to "master" when ',(0,i.kt)("strong",{parentName:"li"},"fmf_url")," is specified and ",(0,i.kt)("strong",{parentName:"li"},"fmf_ref")," is not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fmf_path")," - Path to the fmf root (the parent path where ",(0,i.kt)("inlineCode",{parentName:"li"},".fmf")," folder is located) relative to the git root.\nDefaults to ",(0,i.kt)("inlineCode",{parentName:"li"},".")," (git root)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tmt_plan")," - Run plans by the given name. Can be passed as a regular\nexpression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tf_post_install_script")," - Bash script as a string to run during the guest provisioning. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tf_extra_params")," - A free-form dictionary that allows specifying extra parameters to the Testing Farm.\nFor a complete list of parameters, refer to the ",(0,i.kt)("a",{parentName:"li",href:"ttps://api.testing-farm.io/redoc#operation/request_a_new_test_v0_1_requests_post"},"Testing Farm documentation"),".\nThe dictionary must follow the structure of the Testing Farm request. Options specified in the dictionary have the\nhighest precedence, i.e. can override Packit's defaults. They are being merged with the Packit's values, the only exception\nis the ",(0,i.kt)("inlineCode",{parentName:"li"},"artifacts")," list, which is combined with the artifact passed by Packit. Also, beware of indentation-sensitivity of the YAML format.\nYou can verify that the option is processed correctly using a ",(0,i.kt)("a",{parentName:"li",href:"https://yaml-online-parser.appspot.com/"},"YAML parser"),". Refer to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/examples/#tests"},"configuration examples")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"skip_build")," - Whether to skip the build phase and only run tests (defaults to false).\nEnabling this will cause no Copr build to be built and installed into the testing environment,\nonly submitting request to Testing Farm (the selected components to be installed should be part of the TMT definitions)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"env")," - A dictionary you can use to set any environment variable that will be available in the Testing Farm\nenvironment where the tests are run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"identifier")," \u2013 Suffix added to the name of a GitHub check run. This is needed\nwhen you have multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"tests")," jobs with different configuration. For\nexample if you set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"e2e-tests"),", then a check run for Rawhide would be\nnamed ",(0,i.kt)("inlineCode",{parentName:"li"},"testing-farm:fedora-rawhide-x86_64:e2e-tests"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"manual_trigger")," - Whether to trigger Testing Farm jobs only manually (via pull request comment ",(0,i.kt)("inlineCode",{parentName:"li"},"/packit test"),"  (",(0,i.kt)("inlineCode",{parentName:"li"},"/packit-stg test")," for staging instance) or rerunning the check in the GitHub UI) or not (defaults to false). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"labels")," - List of labels that group several jobs together. Users then use them when manually triggering the jobs like ",(0,i.kt)("inlineCode",{parentName:"li"},"/packit test --labels regression,upgrade"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"use_internal_tf")," - Whether to use the internal Testing Farm infrastructure (defaults to false).\nThis requires additional approval from our side (please, ",(0,i.kt)("a",{parentName:"li",href:"#contact"},"contact us")," in case you want to use it). ")),(0,i.kt)("p",null,"There are also environment variables set by Packit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_FULL_REPO_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_UPSTREAM_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_UPSTREAM_URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_DOWNSTREAM_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_DOWNSTREAM_URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_PACKAGE_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_PACKAGE_NVR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_BUILD_LOG_URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_SRPM_URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_COMMIT_SHA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_COPR_PROJECT"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"packit/packit-releases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_COPR_RPMS"),", space-separated list of RPMs that were built in Copr")),(0,i.kt)("p",null,"And there are also pairs of variables for pull-request jobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_SOURCE_SHA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_TARGET_SHA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_SOURCE_BRANCH")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_TARGET_BRANCH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_SOURCE_URL")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PACKIT_TARGET_URL"))),(0,i.kt)("p",null,"Note that some variables do not need to be set if the value is unknown, irrelevant or not-configured."),(0,i.kt)("h2",{id:"restart-testing"},"Restart Testing"),(0,i.kt)("p",null,"The testing will automatically start after an update to the pull request\n(and successful Copr build if ",(0,i.kt)("inlineCode",{parentName:"p"},"skip_build")," is false).\nTo trigger retesting manually (can come handy in case of infrastructure\nissues for example), you can use the following comment in the pull request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit test\n")),(0,i.kt)("p",null,"Or if you want to re-trigger only failed tests, you can use the following comment\nin the pull request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit retest-failed\n")),(0,i.kt)("h2",{id:"running-tests-with-builds-from-another-pull-request"},"Running tests with builds from another pull request"),(0,i.kt)("p",null,"It is also possible to run the tests with Copr builds built by Packit in another pull request\n(in a different repository). This can be useful when you are working on a change that spans\nmultiple projects and needs to be tested together.\nThese tests are possible to trigger only via a comment containing the argument specifying the pull request as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/packit test <namespace>/<repo>#<pr_id>\n")),(0,i.kt)("p",null,'The requirement is that in the specified PR, there were recent successful builds created by Packit\nfor the targets configured in the repository with the "main" pull request.\nThis is a new feature, so the behaviour may be adjusted in the future.\nPlease reach out back to us for help or with your suggestions.'),(0,i.kt)("h2",{id:"running-tests-with-a-specific-identifier"},"Running tests with a specific identifier"),(0,i.kt)("p",null,"It is possible to run a specific job via ",(0,i.kt)("inlineCode",{parentName:"p"},"/packit test")," command.\nThe user just needs to specify the argument ",(0,i.kt)("inlineCode",{parentName:"p"},"--identifier <job_identifier>")," and Packit will trigger only the job with this identifier.\nThe whole command should look like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"/packit test --identifier my-job-id"),".\nYou can also configure ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#default_identifier"},(0,i.kt)("inlineCode",{parentName:"a"},"test_command.default_identifier"))," to allow commonly used jobs\nto be triggered without the need for manual specification."),(0,i.kt)("h2",{id:"running-a-group-of-tests-with-the-same-label"},"Running a group of tests with the same label"),(0,i.kt)("p",null,"Users can trigger a specific group of jobs that has a specific value in the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," option.\nThe command to pick up these jobs is ",(0,i.kt)("inlineCode",{parentName:"p"},"/packit test --labels regression,upgrade")," where either ",(0,i.kt)("inlineCode",{parentName:"p"},"regression")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," must be present in ",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," option for the job.\nThe labels should be in the format of comma-separated string.\nYou can also configure ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#default_labels"},(0,i.kt)("inlineCode",{parentName:"a"},"test_command.default_labels"))," to allow commonly used job combinations\nto be triggered without the need for manual specification."),(0,i.kt)("h2",{id:"creating-tests"},"Creating Tests"),(0,i.kt)("p",null,"The easiest way to get started with defining tests is to use the ",(0,i.kt)("a",{parentName:"p",href:"https://tmt.readthedocs.io/"},"tmt")," tool\nwhich will help you with the setup.\nPlease follow ",(0,i.kt)("a",{parentName:"p",href:"https://tmt.readthedocs.io/en/latest/guide.html"},"tmt's guide")," to get started."),(0,i.kt)("h3",{id:"example-test-structure"},"Example test structure"),(0,i.kt)("p",null,"Once your project is initialized, this is how your structure can look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ tmt\nFound 3 tests: /tests/full, /tests/smoke and /tests_recording.\nFound 4 plans: /plans/full, /plans/rpmlint, /plans/session-recording and /plans/smoke.\nFound 0 stories.\n\n$ ls -1 plans/\nfull.fmf\nmain.fmf\nrpmlint.fmf\nsession-recording.fmf\nsmoke.fmf\n")),(0,i.kt)("h2",{id:"more-examples"},"More Examples"),(0,i.kt)("p",null,"Get inspiration for a quick start from a couple of real-life examples! These\nsamples live in ",(0,i.kt)("inlineCode",{parentName:"p"},".fmf")," files inside tests or plans directories. You can also have a look\nat ",(0,i.kt)("a",{parentName:"p",href:"https://tmt.readthedocs.io/en/stable/examples.html"},"tmt examples site"),"."),(0,i.kt)("h3",{id:"using-filters"},"Using Filters"),(0,i.kt)("p",null,"Use a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," in the discover step in order to choose relevant tests only:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'discover:\n    how: fmf\n    filter: "tier: 1"\n    url: https://src.fedoraproject.org/tests/selinux\n')),(0,i.kt)("h3",{id:"prepare-step"},"Prepare Step"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare")," step can be used to define how test environment should be prepared before testing.\nProvide one or more paths to ansible playbooks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"prepare:\n    how: ansible\n    playbook:\n        - setup/packages.yml\n")),(0,i.kt)("h3",{id:"apache-test"},"Apache Test"),(0,i.kt)("p",null,"Here is an example of a simple integration test for the web server ",(0,i.kt)("inlineCode",{parentName:"p"},"httpd")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," utility:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"execute:\n    script:\n      - dnf -y install httpd curl\n      - systemctl start httpd\n      - echo foo > /var/www/html/index.html\n      - curl http://localhost/ | grep foo\n")),(0,i.kt)("p",null,"The plan above defines only the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," step.\nIndividual shell commands are provided as a list.\nTesting will fail if any of the commands returns a non-zero exit status."),(0,i.kt)("h3",{id:"systemd-tests"},"Systemd Tests"),(0,i.kt)("p",null,"Below you can find a bit more interesting example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," test configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'summary:\n    Basic set of quick smoke tests for systemd.\ndiscover:\n    how: fmf\n    filter: "tier: 1 & distro: rhel-8"\n    url: "https://github.com/systemd-rhel/tests"\nprepare:\n    how: ansible\n    playbook: [setup/packages.yml]\nexecute:\n    how: tmt\n')),(0,i.kt)("p",null,"This plan enables a set of Tier 1 tests from the shared ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/systemd-rhel/tests"},"systemd tests")," repository.\nThe meaning of individual attributes is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"summary \u2014 an optional but useful attribute describing high-level purpose of the plan."),(0,i.kt)("li",{parentName:"ul"},"discover \u2014 instructs to fetch tests from given repository and select relevant ones by provided ",(0,i.kt)("inlineCode",{parentName:"li"},"filter"),"."),(0,i.kt)("li",{parentName:"ul"},"prepare \u2014 specifies which ansible playbook should be applied to prepare environment for testing."),(0,i.kt)("li",{parentName:"ul"},"execute \u2014 defines that the ",(0,i.kt)("inlineCode",{parentName:"li"},"tmt")," should be used for running the tests.")),(0,i.kt)("h3",{id:"fmf-tests"},"FMF Tests"),(0,i.kt)("p",null,"Here's a real-life example of tests enabled for the ",(0,i.kt)("a",{parentName:"p",href:"https://fmf.readthedocs.io/"},"fmf")," package.\nThere are several plans defined under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/psss/fmf/tree/master/plans"},"plans")," directory.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"smoke")," plan enables a super basic test checking availability of the ",(0,i.kt)("inlineCode",{parentName:"p"},"fmf")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"summary:\n    Just a basic smoke test\nexecute:\n    script: fmf --help\n")),(0,i.kt)("p",null,"Plan ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," is used to execute all available beakerlib tests from the ",(0,i.kt)("inlineCode",{parentName:"p"},"fmf")," repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"summary:\n    Essential command line features\ndiscover:\n    how: fmf\n    url: https://github.com/psss/fmf\nexecute:\n    how: tmt\n")),(0,i.kt)("p",null,"It is also possible to select only a subset of available tests.\nThis is demonstrated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," plan.\nUse an fmf ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"tier:1")," to select tests for execution.\nYou can also reference a specific feature area instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"summary:\n    Ensure that documentation is present\ndiscover:\n    how: fmf\n    url: https://github.com/psss/fmf\n    filter: coverage:/stories/docs.*\nexecute:\n    how: tmt\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/psss/fmf/tree/master/stories"},"stories")," directory to get some inspiration for organizing stories and requirements."),(0,i.kt)("h3",{id:"running-linters"},"Running linters"),(0,i.kt)("p",null,"Running linters on your code is easy to set up using Testing Farm and tmt.\nLinters are tools which you can install from the distribution, and they usually\njust require a path to files which they check. Here is a plan which you can use\nto run ",(0,i.kt)("inlineCode",{parentName:"p"},"rpmlint")," on your spec file."),(0,i.kt)("h4",{id:"rpmlint"},"rpmlint"),(0,i.kt)("p",null,"We are checking our spec files with rpmlint in our project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/ogr/blob/main/plans/linters.fmf"},"ogr - plans/linters.fmf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/blob/main/plans/rpmlint.fmf"},"Packit - plans/rpmlint.fmf"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"summary:\n    Execute rpmlint on the spec file\ndiscover:\n    how: shell\n    tests:\n      - name: rpmlint\n        test: rpmlint packit.spec\nprepare:\n  - name: packages\n    how: install\n    package:\n    - rpmlint\nexecute:\n    how: tmt\n")),(0,i.kt)("h4",{id:"rpminspect"},"rpminspect"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rpminspect/rpminspect"},(0,i.kt)("inlineCode",{parentName:"a"},"rpminspect"))," can analyze your packages\nand give you information related to licensing, metadata, manpages, desktop app\nmetadata, file ownership & permissions and much much more."),(0,i.kt)("p",null,"Here's a tmt plan you can use to have rpminspect invoked on SRPMs and binary RPMs built in Copr\n(these are available by Testing Farm in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/share/test-artifacts"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"summary:\n    Check rpm files with rpminspect\ndiscover:\n    how: shell\n    tests:\n      - name: rpminspect SRPM and RPMs\n        test: for rpm in /var/share/test-artifacts/*.rpm; do rpminspect-fedora -E metadata $rpm; done\nprepare:\n  - name: packages\n    how: install\n    package:\n    - rpminspect\n    - rpminspect-data-fedora\nexecute:\n    how: tmt\nadjust:\n    enabled: false\n    when: distro == centos-stream-9\n")),(0,i.kt)("p",null,"You can run rpminspect also using the CentOS Stream configuration (see also the ",(0,i.kt)("inlineCode",{parentName:"p"},"adjust")," section in the snippets).\nThis should prepare you before opening CentOS Stream dist-git MRs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"summary:\n    Check rpm files with rpminspect\ndiscover:\n    how: shell\n    tests:\n      - name: rpminspect SRPM and RPMs\n        test: for rpm in /var/share/test-artifacts/*.rpm; do rpminspect-centos -E metadata -v -t VERIFY --profile=centos-stream-9-devel $rpm; done\nprepare:\n  - name: packages\n    how: install\n    package:\n    - rpminspect\n    - rpminspect-data-centos\nexecute:\n    how: tmt\nadjust:\n    enabled: false\n    when: distro == fedora\n")),(0,i.kt)("p",null,"As these plans rely on the Testing Farm environment (downloaded RPMs), they are not reproducible manually, but you can reproduce them\nvia ",(0,i.kt)("inlineCode",{parentName:"p"},"tmt-reproducer.sh")," provided by Testing Farm."),(0,i.kt)("p",null,"Since rpminspect is under active development, you should consider installing the latest version from this Copr project: ",(0,i.kt)("a",{parentName:"p",href:"https://copr.fedorainfracloud.org/coprs/dcantrell/rpminspect/"},"https://copr.fedorainfracloud.org/coprs/dcantrell/rpminspect/")),(0,i.kt)("h3",{id:"csmock"},"csmock"),(0,i.kt)("p",null,"You can not only run linters on your SRPM file but also run static/dynamic analysis using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/csutils/csmock"},"csmock"),"."),(0,i.kt)("p",null,"Here is a test definition of the check: (The result manipulation is here to be able to see the html report directly on the Testing Farm Result page.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"summary:\n    Check SRPM files with csmock\ndiscover:\n    how: shell\n    tests:\n      - name: csmock\n        test: \"csmock --all-tools /tmp/*.src.rpm -o $TMT_TEST_DATA --force && echo -e '- result: pass' > $TMT_TEST_DATA/results.yaml || echo -e '- result: fail' > $TMT_TEST_DATA/results.yaml ; echo -e '  name: /\\n  log:\\n  - scan.log\\n  - scan-results.html' >> $TMT_TEST_DATA/results.yaml\"\n        result: custom\n        require: bash\nprepare:\n  - name: packages\n    how: install\n    package:\n    - csmock\n  - how: shell\n    script: cd /tmp && curl -O ${PACKIT_SRPM_URL}\nexecute:\n    how: tmt\n")),(0,i.kt)("h2",{id:"testing-farm-api"},"Testing Farm API"),(0,i.kt)("p",null,"Packit Service communicates with Testing Farm via its ",(0,i.kt)("a",{parentName:"p",href:"https://api.testing-farm.io"},"API"),"."),(0,i.kt)("h2",{id:"issues--rfes"},"Issues & RFEs"),(0,i.kt)("p",null,"If you have found an issue or have an RFE, you can file an ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/testing-farm/general/-/issues"},"issue in nucleus project"),"."))}c.isMDXComponent=!0}}]);