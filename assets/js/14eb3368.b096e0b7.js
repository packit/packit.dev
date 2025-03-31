"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[46969],{4267:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),r=a(20053),i=a(21312),l=a(17559),c=a(32252);function s(e){let{className:t}=e;const a=(0,c.r)();return a.badge?n.createElement("span",{className:(0,r.A)(t,l.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},27719:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(58168),r=a(96540),i=a(21312),l=a(39022);function c(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.A,(0,n.A)({},t,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.A,(0,n.A)({},a,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},34136:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(96540),r=a(69024),i=a(81754),l=a(86025),c=a(20053),s=a(75489),o=a(16654),m=a(21312);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:a}=e;return n.createElement(s.A,{href:t,className:(0,c.A)("card padding--lg",d.cardContainer)},a)}function h(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.A)("text--truncate",d.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,c.A)("text--truncate",d.cardDescription),title:i},i))}function b(e){let{item:t}=e;const a=(0,i._o)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const a=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const a=(0,i.$S)();return n.createElement(E,{items:a.items,className:t})}function E(e){const{items:t,className:a}=e;if(!t)return n.createElement(g,e);const r=(0,i.d1)(t);return n.createElement("section",{className:(0,c.A)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(p,{item:e})))))}var f=a(27719),A=a(51878),N=a(4267),k=a(71243),T=a(51107);const _={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function L(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.A)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.$S)();return n.createElement("div",{className:_.generatedIndexPage},n.createElement(A.A,null),n.createElement(k.A,null),n.createElement(N.A,null),n.createElement("header",null,n.createElement(T.A,{as:"h1",className:_.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(E,{items:a.items,className:_.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(f.A,{previous:t.navigation.previous,next:t.navigation.next})))}function x(e){return n.createElement(n.Fragment,null,n.createElement(L,e),n.createElement(y,e))}},39022:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053),i=a(75489);function l(e){const{permalink:t,title:a,subLabel:l,isNext:c}=e;return n.createElement(i.A,{className:(0,r.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},51107:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(58168),r=a(96540),i=a(20053),l=a(21312),c=a(6342),s=a(75489);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.p)();if("h1"===t||!a)return r.createElement(t,(0,n.A)({},m,{id:void 0}));const u=(0,l.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.A)({},m,{className:(0,i.A)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(s.A,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},51878:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(96540),r=a(20053),i=a(44586),l=a(75489),c=a(21312),s=a(44070),o=a(17559),m=a(55597),d=a(32252);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(c.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.A,{to:a,onClick:r},n.createElement(c.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.A)(),{pluginId:c}=(0,s.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,m.g1)(c),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,s.HW)(c),p=u??(g=v).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,r.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:v.label,to:p.path,onClick:()=>d(v.name)})))}function p(e){let{className:t}=e;const a=(0,d.r)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},71243:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(58168),r=a(96540),i=a(20053),l=a(17559),c=a(81754),s=a(99169),o=a(75489),m=a(21312),d=a(86025);function u(e){return r.createElement("svg",(0,n.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.A)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function p(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.A,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function g(e){let{children:t,active:a,index:l,addMicrodata:c}=e;return r.createElement("li",(0,n.A)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){const e=(0,c.OF)(),t=(0,s.Dt)();return e?r.createElement("nav",{className:(0,i.A)(l.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(g,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(p,{href:t.href,isLast:n},t.label))})))):null}}}]);