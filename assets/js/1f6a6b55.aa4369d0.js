"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[69203],{15680:(e,i,n)=>{n.d(i,{xA:()=>g,yg:()=>d});var t=n(96540);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var i=t.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},g=function(e){var i=c(e.components);return t.createElement(s.Provider,{value:i},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},p=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,d=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?t.createElement(d,r(r({ref:i},g),{},{components:n})):t.createElement(d,r({ref:i},g))}));function d(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49993:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const o={title:"Configuration versioning",authors:"lbarczio"},r=void 0,l={unversionedId:"ux/configuration-versioning",id:"ux/configuration-versioning",title:"Configuration versioning",description:"Example use cases we would like to solve with this:",source:"@site/research/ux/configuration-versioning.md",sourceDirName:"ux",slug:"/ux/configuration-versioning",permalink:"/research/ux/configuration-versioning",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/ux/configuration-versioning.md",tags:[],version:"current",frontMatter:{title:"Configuration versioning",authors:"lbarczio"},sidebar:"autogenerated",previous:{title:"Automatic Configuration Updates",permalink:"/research/ux/automatic-config-updates"},next:{title:"Improve Packit Service event processing",permalink:"/research/ux/improve-service-processing"}},s={},c=[{value:"Existing support",id:"existing-support",level:2},{value:"Versioning jobs aside from the whole config",id:"versioning-jobs-aside-from-the-whole-config",level:2},{value:"Implementation details for the whole config versioning",id:"implementation-details-for-the-whole-config-versioning",level:2},{value:"Versioning",id:"versioning",level:3},{value:"How this could work",id:"how-this-could-work",level:3},{value:"Plan",id:"plan",level:2}],g={toc:c},u="wrapper";function m(e){let{components:i,...n}=e;return(0,a.yg)(u,(0,t.A)({},g,n,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Example use cases we would like to solve with this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Example 1: Image builder job - it will probably evolve over time depending on the requirements"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/packit.dev/issues/443"},"Example 2"),": Changing interpretation of job overrides from replacing the values to merging")),(0,a.yg)("h2",{id:"existing-support"},"Existing support"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"no support from Marshmallow, ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/marshmallow-code/marshmallow/issues/1107"},"see")),(0,a.yg)("li",{parentName:"ul"},"in general, I have not found any existing support to do this"),(0,a.yg)("li",{parentName:"ul"},"some tips from the issue above:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"utilising ",(0,a.yg)("inlineCode",{parentName:"li"},"render_module")," (from ",(0,a.yg)("a",{parentName:"li",href:"https://marshmallow.readthedocs.io/en/3.0/api_reference.html#marshmallow.Schema.Meta"},"this class"),") - a class that defines loads and dumps, which defaults to json,\ncould be a good place to intercept the raw data on a per-schema basis"),(0,a.yg)("li",{parentName:"ul"},"migrating the raw data before deserializing to avoid maintaining a schema history")))),(0,a.yg)("h2",{id:"versioning-jobs-aside-from-the-whole-config"},"Versioning jobs aside from the whole config"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"this would be mostly beneficial for versioning only one job type (e.g. vm_image_build)"),(0,a.yg)("li",{parentName:"ul"},"since all the job-related fields in the job config are grouped in a class together, this would not be straightforward"),(0,a.yg)("li",{parentName:"ul"},"we could have specific fields that would be versioned and have own schema\ne.g. in case of Image builder job having some field that would introduce a nested schema\nand we could have different versions of these: e.g.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'- job: vm_image_build\n    trigger: pull_request\n    image_builder_metadata:\n      version: 1\n      image_request:\n        packages_to_install: [packit]\n        owner: packit\n        project: packit-dev\n      image_customizations:\n        image_type: aws\n        image_architecture: x86_64\n        image_account_id: "727920394381"\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'- job: vm_image_build\n    trigger: pull_request\n    image_builder_metadata:\n      version: 2\n      image_distribution: rhel-8\n      image_type: aws\n      image_architecture: x86_64\n      image_account_id: "727920394381"\n      packages_to_install: [packit]\n      owner: packit\n      project: packit-dev\n')),(0,a.yg)("p",null,"and schemas:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class ImageBuilderMetadataV1(ImageBuilderMetadataSchema):\n    image_distribution = fields.String(missing=None)\n    image_request = fields.Dict(missing=None)\n    image_customizations = fields.Dict(missing=None)\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class ImageBuilderMetadataV2(ImageBuilderMetadataSchema):\n    image_distribution = fields.String(missing=None)\n    image_type: fields.String(missing=None)\n    image_architecture = fields.String(missing=None)\n    image_account_id = fields.String(missing=None)\n    packages_to_install = fields.String(missing=None)\n    owner = fields.String(missing=None)\n    project = fields.String(missing=None)\n")),(0,a.yg)("p",null,"and the config object would have all the fields and the code could handle both"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"from the coding perspective this would not be a problem - the version would be detected either from whole config\nor directly from the ",(0,a.yg)("inlineCode",{parentName:"li"},"image_builder_metadata")),(0,a.yg)("li",{parentName:"ul"},"but this may be confusing to users - versioning some configuration field apart from the whole config,",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"if we would do both whole config versioning and only fields versioning, this would become\ncomplicated and we would need to solve integration of both")))),(0,a.yg)("h2",{id:"implementation-details-for-the-whole-config-versioning"},"Implementation details for the whole config versioning"),(0,a.yg)("h3",{id:"versioning"},"Versioning"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"for each backwards incompatible change, we would bump the version"),(0,a.yg)("li",{parentName:"ul"},"there would be a default version, options:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'1 - since 1 would be the version "before starting the versioning", it would be the most\nnatural that if there is no version specified, the version is 1 (Docker does the same)'),(0,a.yg)("li",{parentName:"ul"},"always the latest: we would need to enforce with introducing the first backwards incompatible change\nthat all projects have the version set in their configs to 1 or use the changed schema (we could\nopen PRs to projects with the config change, ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/research/issues/159"},"see"),")"))),(0,a.yg)("li",{parentName:"ul"},"this would be properly documented, we can get inspired by Docker,\n",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/compose/compose-file/compose-versioning/#versioning"},"see"),", the documentation\nwould also include Packit version that starts supporting the particular configuration schema")),(0,a.yg)("h3",{id:"how-this-could-work"},"How this could work"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"check the version in ",(0,a.yg)("inlineCode",{parentName:"li"},"PackageConfig.get_from_dict()")," (use the default if not present)"),(0,a.yg)("li",{parentName:"ul"},"import the schema classes matching that version:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'if version == "1":\n    from packit.schema.v1 import PackageConfigSchema\nelif version == "2":\n    from packit.schema.v2 import PackageConfigSchema\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"this would allow partially redefining schema classes or reexporting existing schema classes, e.g. in ",(0,a.yg)("inlineCode",{parentName:"li"},"packit.schema.v2"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"from packit.schema.v1 import PackageConfigSchema as PackageConfigSchemaV1\n# reexport as v2, without a change\nfrom packit.schema.v1 import JobConfig\n\nclass PackageConfigSchema(PackageConfigSchemaV1):\n    # override some fields\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"we would need to make sure that load-dump-load results in same representation"),(0,a.yg)("li",{parentName:"ul"},"config classes would not be versioned - all config schema versions need to be migrated when loading\nthe configuration to the latest state of the configuration object")),(0,a.yg)("h2",{id:"plan"},"Plan"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"consider also relation to ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/packit/research/issues/159"},"this issue"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"if we would introduce some change that would break the compatibility, we would open PRs for each repository that\nuses the particular configuration field"),(0,a.yg)("li",{parentName:"ul"},"this could not be sufficient for all use cases"))),(0,a.yg)("li",{parentName:"ul"},"decide whether we want to support versioning of only some fields"),(0,a.yg)("li",{parentName:"ul"},"decide what would be the default if version not specified in the config (and plan\nif we want to open PRs to existing projects with introducing ",(0,a.yg)("inlineCode",{parentName:"li"},"version")," field and providing link to\nexplaining documentation)"),(0,a.yg)("li",{parentName:"ul"},"with the next introduction of backwards incompatible change/ or right away, start versioning the schema")))}m.isMDXComponent=!0}}]);