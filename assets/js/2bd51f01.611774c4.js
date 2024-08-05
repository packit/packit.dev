"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[15],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Introduction to specfile library",date:new Date("2024-01-12T00:00:00.000Z"),authors:"nforro",tags:["specfile"]},r="Introduction to specfile library",s={permalink:"/posts/specfile-introduction",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/specfile-introduction/index.md",source:"@site/posts/specfile-introduction/index.md",title:"Introduction to specfile library",description:"Have you ever wanted to make changes in an RPM spec file programmatically? specfile library",date:"2024-01-12T00:00:00.000Z",formattedDate:"January 12, 2024",tags:[{label:"specfile",permalink:"/posts/tags/specfile"}],readingTime:3.875,hasTruncateMarker:!0,authors:[{name:"Nikola Forr\xf3",email:"nforro@redhat.com",url:"https://github.com/nforro",imageURL:"https://github.com/nforro.png",key:"nforro"}],frontMatter:{title:"Introduction to specfile library",date:"2024-01-12T00:00:00.000Z",authors:"nforro",tags:["specfile"]},prevItem:{title:"Customize AWS cloud images with Image Builder and Packit",permalink:"/posts/aws-and-image-builder"},nextItem:{title:"Experiences using Packit for a Rust executable Project",permalink:"/posts/experiences_with_rust"}},l={authorsImageUrls:[void 0]},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Bumping release",id:"bumping-release",level:3},{value:"Switching to <code>%autochangelog</code>",id:"switching-to-autochangelog",level:3},{value:"Iterating through tags",id:"iterating-through-tags",level:3},{value:"More info and links",id:"more-info-and-links",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Have you ever wanted to make changes in an RPM spec file programmatically? ",(0,i.kt)("em",{parentName:"p"},"specfile")," library\nhas been created for that very purpose. It is a pure Python library that allows you to conveniently\nedit different parts of a spec file while doing its best to keep the resulting changeset minimal\n(no unnecessary whitespace changes etc.)."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The library is packaged for Fedora, EPEL 9 and EPEL 8 and you can simply install it with dnf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install python3-specfile\n")),(0,i.kt)("p",null,"On other systems, you can use pip (just note that it requires RPM Python bindings to be installed):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install specfile\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's have a look at a few simple examples of how to use the library."),(0,i.kt)("h3",{id:"bumping-release"},"Bumping release"),(0,i.kt)("p",null,"To bump release and add a new changelog entry, we could use the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from specfile import Specfile\n\nwith Specfile("example.spec") as spec:\n    spec.release = str(int(spec.expanded_release) + 1)\n    spec.add_changelog_entry("- Bumped release for test purposes")\n')),(0,i.kt)("p",null,"Let's take a look at what happens here:"),(0,i.kt)("p",null,"We instantiate ",(0,i.kt)("inlineCode",{parentName:"p"},"Specfile")," class with a path to our spec file and use it as a context manager\nto automatically save all changes upon exiting the context."),(0,i.kt)("p",null,"We then use ",(0,i.kt)("inlineCode",{parentName:"p"},"expanded_release")," property to get the current value of ",(0,i.kt)("inlineCode",{parentName:"p"},"Release")," tag after macro expansion.\nWe assume it is numeric, so we simply convert it to integer, add 1, convert the result back to string\nand assign the new value to ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," property."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"expanded_release")," properties exclude dist tag (usually ",(0,i.kt)("inlineCode",{parentName:"p"},"%{?dist}"),") - for convenience,\nit is ignored when reading and preserved unmodified when writing. If that's not what you want, you can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"raw_release"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"expanded_raw_release")," properties instead.")),(0,i.kt)("p",null,"Finally, we add a new changelog entry. We don't specify any other arguments but content,\nso the author is determined automatically using the same procedure as ",(0,i.kt)("inlineCode",{parentName:"p"},"rpmdev-packager")," uses\nand date is set to current day."),(0,i.kt)("h3",{id:"switching-to-autochangelog"},"Switching to ",(0,i.kt)("inlineCode",{parentName:"h3"},"%autochangelog")),(0,i.kt)("p",null,"To make a switch from traditional changelog to ",(0,i.kt)("inlineCode",{parentName:"p"},"%autochangelog"),", we could do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pathlib\nfrom specfile import Specfile\n\nspec = Specfile("example.spec", autosave=True)\n\nwith spec.sections() as sections:\n    entries = sections.changelog[:]\n    sections.changelog[:] = ["%autochangelog"]\n\npathlib.Path("changelog").write_text("\\n".join(entries) + "\\n")\n')),(0,i.kt)("p",null,"Let's take a look at what happens here:"),(0,i.kt)("p",null,"We instantiate ",(0,i.kt)("inlineCode",{parentName:"p"},"Specfile")," class with a path to our spec file and we also set ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave")," argument\nthat ensures that any changes are saved automatically as soon as possible."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"specfile")," heavily relies on context managers. Here we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"sections()")," method that returns\na context manager that we can use to manipulate spec file sections. Upon exiting the context,\nany modifications done are propagated to the internal representation stored in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Specfile")," instance,\nand since ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave")," is set, they are immediately saved to the spec file as well."),(0,i.kt)("p",null,"First, we store a copy of the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"%changelog")," section. The content is represented\nas a list of lines."),(0,i.kt)("p",null,'Then we replace the content with a single line - "%autochangelog".'),(0,i.kt)("p",null,'Finally, we save the stored content into a "changelog" file.'),(0,i.kt)("h3",{id:"iterating-through-tags"},"Iterating through tags"),(0,i.kt)("p",null,"Contexts can be nested. Here is a code that iterates through all ",(0,i.kt)("em",{parentName:"p"},"package")," sections\n(including the first, implicitly named one; also known as ",(0,i.kt)("em",{parentName:"p"},"preamble"),") and prints expanded value\nof all ",(0,i.kt)("inlineCode",{parentName:"p"},"Requires")," tags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'spec = Specfile("example.spec")\n\nwith spec.sections() as sections:\n    for section in sections:\n        # normalized name of a section is lowercased\n        if section.normalized_name != "package":\n            continue\n        with spec.tags(section) as tags:\n            for tag in tags:\n                # normalized name of a tag is capitalized\n                if tag.normalized_name != "Requires":\n                    continue\n                print(f"Section: {section.id}, Tag: {tag.name}, Value: {tag.expanded_value}")\n')),(0,i.kt)("p",null,"Let's take a look at what happens here:"),(0,i.kt)("p",null,"We instantiate ",(0,i.kt)("inlineCode",{parentName:"p"},"Specfile")," class with a path to our spec file. This time we don't set ",(0,i.kt)("inlineCode",{parentName:"p"},"autosave")," because\nwe are not doing any modifications (though we could still save any changes explicitly using ",(0,i.kt)("inlineCode",{parentName:"p"},"save()")," method)."),(0,i.kt)("p",null,"Then we use ",(0,i.kt)("inlineCode",{parentName:"p"},"sections()"),' context manager and iterate through sections; we skip sections not called "package"\n(the initial ',(0,i.kt)("em",{parentName:"p"},"%")," is ommited for convenience)."),(0,i.kt)("p",null,"After that we use ",(0,i.kt)("inlineCode",{parentName:"p"},"tags()")," context manager and pass the current section as an argument. This allows us\nto iterate through tags in the current section. Without any argument, we would get a list of tags in ",(0,i.kt)("em",{parentName:"p"},"preamble"),',\nthe very first section in a spec file. We skip tags not called "Requires" and finally print the values\nof ',(0,i.kt)("inlineCode",{parentName:"p"},"Requires"),' tags after macro expansion. We also print tag names (not normalized) and section IDs - those are\nsection names followed by options, e.g. "package -n alternative-name-for-example".'),(0,i.kt)("h2",{id:"more-info-and-links"},"More info and links"),(0,i.kt)("p",null,"Are you interested in more details, trying the library out or even contributing? You can find ",(0,i.kt)("em",{parentName:"p"},"specfile")," source code on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit/specfile"},"GitHub"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit/specfile/blob/main/README.md"},"README")," for more tips and usage examples.\nYou can also check out the ",(0,i.kt)("a",{parentName:"p",href:"https://packit.dev/specfile/api/specfile"},"API reference"),"."))}d.isMDXComponent=!0}}]);