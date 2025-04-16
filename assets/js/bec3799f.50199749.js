"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3459],{13612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const i={title:"Building SRPMs in Copr",authors:["lbarczio","mfocko"]},o=void 0,l={unversionedId:"integrations/building-srpm-in-copr/index",id:"integrations/building-srpm-in-copr/index",title:"Building SRPMs in Copr",description:"Copr provides an option to use their custom source method",source:"@site/research/integrations/building-srpm-in-copr/index.md",sourceDirName:"integrations/building-srpm-in-copr",slug:"/integrations/building-srpm-in-copr/",permalink:"/research/integrations/building-srpm-in-copr/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/integrations/building-srpm-in-copr/index.md",tags:[],version:"current",frontMatter:{title:"Building SRPMs in Copr",authors:["lbarczio","mfocko"]},sidebar:"autogenerated",previous:{title:"Integrations",permalink:"/research/category/integrations"},next:{title:"Statistics as of September '22",permalink:"/research/integrations/building-srpm-in-copr/september-2022"}},p={},s=[{value:"How to use the custom source method to create sources",id:"how-to-use-the-custom-source-method-to-create-sources",level:2},{value:"How did I test the functionality",id:"how-did-i-test-the-functionality",level:4},{value:"Plan how to build SRPMs in Copr in Packit Service",id:"plan-how-to-build-srpms-in-copr-in-packit-service",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Copr provides an option to use their ",(0,a.yg)("a",{parentName:"p",href:"https://docs.pagure.org/copr.copr/custom_source_method.html"},"custom source method"),"\nto create sources for SRPM."),(0,a.yg)("h2",{id:"how-to-use-the-custom-source-method-to-create-sources"},"How to use the custom source method to create sources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"required script in any scripting language and chroot where the script is executed (defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"fedora-latest-x86_64"),")"),(0,a.yg)("li",{parentName:"ul"},"output of the script: specfile, optionally any other file needed to successfully build a source RPM from that spec file (tarballs, patches)"),(0,a.yg)("li",{parentName:"ul"},"script is executed under non-privileged user -> packages needed for running script should be specified as a list of (srpm)build-dependencies"),(0,a.yg)("li",{parentName:"ul"},"optional parameters:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"builddeps: list of packages"),(0,a.yg)("li",{parentName:"ul"},"resultdir: dir with output files (defaults to current working directory)"))),(0,a.yg)("li",{parentName:"ul"},"cannot be run separately without creating a copr build\n(we cannot use it for koji builds)"),(0,a.yg)("li",{parentName:"ul"},"in ",(0,a.yg)("inlineCode",{parentName:"li"},"python-copr")," we would call this method (currently we use ",(0,a.yg)("inlineCode",{parentName:"li"},"create_from_file"),"):")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'    def create_from_custom(self, ownername, projectname, script, script_chroot=None,\n                           script_builddeps=None, script_resultdir=None, buildopts=None,\n                           project_dirname=None):\n        """\n        Create a build from custom script.\n\n        :param str ownername:\n        :param str projectname:\n        :param script: script to execute to generate sources\n        :param script_chroot: [optional] what chroot to use to generate\n            sources (defaults to fedora-latest-x86_64)\n        :param script_builddeps: [optional] list of script\'s dependencies\n        :param script_resultdir: [optional] where script generates results\n            (relative to cwd)\n        :param str project_dirname:\n        :return: Munch\n        """\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"logs from building the SRPM stored in separate file, ",(0,a.yg)("a",{parentName:"p",href:"https://download.copr.fedorainfracloud.org/results/lbarczio/ogr-test-custom/srpm-builds/01967579/builder-live.log.gz"},"example"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"current process for creating SRPM in Packit:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"create_srpm")," method of ",(0,a.yg)("inlineCode",{parentName:"li"},"PackitAPI")," class, ",(0,a.yg)("inlineCode",{parentName:"li"},"PackitAPI")," has the info about package config,\nlocal project, user config"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"create_srpm")," calls these methods of ",(0,a.yg)("inlineCode",{parentName:"li"},"Upstream")," class:",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"run_action(actions=ActionName.post_upstream_clone)"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"run user-defined action for what to do after cloning of the upstream repo"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"prepare_upstream_for_srpm_creation(upstream_ref=upstream_ref)"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"upstream_ref: git ref to upstream commit"),(0,a.yg)("li",{parentName:"ul"},"determine version, create an archive or download upstream and create patches for sourcegit,\nfix/update the specfile to use the right archive, download the remote sources, user-defined actions\nused also here, e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"ActionName.create_archive")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"create_srpm(srpm_path=output_file, srpm_dir=srpm_dir)"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"run ",(0,a.yg)("inlineCode",{parentName:"li"},"rpmbuild")," command"))))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"we need to group the functionality of cloning the particular repo version, running 1. and 2. step from current process,\nmove the needed files into ",(0,a.yg)("inlineCode",{parentName:"p"},"resultdir")," -> dedicated CLI command/method - this will be used in the script")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"we need to get the required info into the script:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"info about project version",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"git ref"),(0,a.yg)("li",{parentName:"ul"},"pr_id"),(0,a.yg)("li",{parentName:"ul"},"repo name + namespace / url"))),(0,a.yg)("li",{parentName:"ul"},"job config"),(0,a.yg)("li",{parentName:"ul"},"do we need anything from service config? we have the secrets there, so we can't pass the whole service config")))),(0,a.yg)("h4",{id:"how-did-i-test-the-functionality"},"How did I test the functionality"),(0,a.yg)("p",null,"I used our ",(0,a.yg)("inlineCode",{parentName:"p"},"packit srpm")," command for testing:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'script = """\n#!/bin/sh\n\nresultdir=$PWD\n\ngit clone https://github.com/packit/ogr ogr\ncd ogr\npackit -d srpm\n\ntarball=$(echo fedora/ogr-*.tar.gz)\nmv fedora/python-ogr.spec "$resultdir"\nmv "$tarball" "$resultdir"\n"""\n')),(0,a.yg)("p",null,"and then called:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'copr_client.build_proxy.create_from_custom(ownername="lbarczio", projectname="ogr-test-custom", script=script,\n                           script_builddeps=["git", "packit", "python3-wheel", "python3-pip", "python3-setuptools",\n                            "python3-setuptools_scm", "python3-setuptools_scm_git_archive"])\n')),(0,a.yg)("h3",{id:"plan-how-to-build-srpms-in-copr-in-packit-service"},"Plan how to build SRPMs in Copr in Packit Service"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"create CLI command or only Packit API method for preparing sources (would mostly use existing functionality, described above)"),(0,a.yg)("li",{parentName:"ul"},"implement creation of the script (Python/bash - Python would be easier for handling with configs)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"script will be created dynamically each time"),(0,a.yg)("li",{parentName:"ul"},"pass the needed arguments and use the method/command"))),(0,a.yg)("li",{parentName:"ul"},"implement using the script for creating SRPMS for Copr builds",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"use copr API to submit SRPM build:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'copr_client.build_proxy.create_from_custom(ownername=owner, projectname=project, script=script, script_builddeps=["git", "packit", ...])')),(0,a.yg)("li",{parentName:"ul"},"find out what exactly will be the ",(0,a.yg)("inlineCode",{parentName:"li"},"builddeps")," for SRPM creation (check which I needed to include when testing earlier)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"currently, we have some builddeps hardcoded in workers added on demand of some of our users,\nthose need to be included"),(0,a.yg)("li",{parentName:"ul"},"in future, we could implement mechanism for specifying builddeps for the action itself",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"those would be included dynamically"))))))),(0,a.yg)("li",{parentName:"ul"},"make sure we receive messages about SRPM state in fedmsg (we already have some processing in Packit Service,\ncheck whether the format is up to date\n",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/blob/950b865018b843be2addc68d0606491fca57343c/packit_service/worker/handlers/copr.py#L189"},"here"),"\nand ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit-service/blob/950b865018b843be2addc68d0606491fca57343c/packit_service/worker/handlers/copr.py#L268"},"here"),")"),(0,a.yg)("li",{parentName:"ul"},"create new handlers for SRPM state change / extend the CoprBuildStartHandler/CoprBuildEndHandler",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"report the SRPM state to user (checks/statuses)"),(0,a.yg)("li",{parentName:"ul"},"create/update SRPM model in our DB"),(0,a.yg)("li",{parentName:"ul"},"provide the link with SRPM logs"))))),(0,a.yg)("li",{parentName:"ul"},"for Koji builds, still use the old way for now")))}d.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);