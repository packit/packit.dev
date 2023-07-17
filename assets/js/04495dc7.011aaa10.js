"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[3513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?i.createElement(h,r(r({ref:t},m),{},{components:n})):i.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Making decisions in our projects",authors:["ttomecek",{name:"Michael Hofmann",email:"mh21@mh21.de",url:"https://github.com/mh21",image_url:"https://github.com/mh21.png"}],sidebar_position:1},r=void 0,s={unversionedId:"making-decisions/index",id:"making-decisions/index",title:"Making decisions in our projects",description:"We'd like to have a predictable way of making decisions so that we are not",source:"@site/research/making-decisions/index.md",sourceDirName:"making-decisions",slug:"/making-decisions/",permalink:"/research/making-decisions/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/making-decisions/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Making decisions in our projects",authors:["ttomecek",{name:"Michael Hofmann",email:"mh21@mh21.de",url:"https://github.com/mh21",image_url:"https://github.com/mh21.png"}],sidebar_position:1},sidebar:"autogenerated",previous:{title:"Research notes",permalink:"/research/"},next:{title:"Tools/libraries similar or related to the Packit",permalink:"/research/automation-tools/"}},l={},c=[{value:"Open Decision Framework",id:"open-decision-framework",level:2},{value:"FESCo",id:"fesco",level:2},{value:"UK Government suggestion for voting in charities",id:"uk-government-suggestion-for-voting-in-charities",level:2},{value:"&quot;Board Voting: Common Steps &amp; Tips for Better Decision-Making&quot;",id:"board-voting-common-steps--tips-for-better-decision-making",level:2},{value:"Franta&#39;s suggestion about decision making in Teal organizations",id:"frantas-suggestion-about-decision-making-in-teal-organizations",level:2},{value:"Consent Decision Making",id:"consent-decision-making",level:2},{value:"CKI&#39;s feedback mechanism",id:"ckis-feedback-mechanism",level:2},{value:"Democracy 2.1",id:"democracy-21",level:2},{value:"Proposal",id:"proposal",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We'd like to have a predictable way of making decisions so that we are not\nblocked on picking vim over emacs. I mean solution A over solution B."),(0,a.kt)("h2",{id:"open-decision-framework"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/red-hat-people-team/open-decision-framework/blob/master/ODF-community.md"},"Open Decision Framework")),(0,a.kt)("p",null,"This is the Red Hat's framework for making open, transparent and democratic\ndecisions in organizations."),(0,a.kt)("p",null,"We can use it for making large-scale decisions which affect multiple\nstakeholders and where implementation would take a considerable effort.\nAlthough that's not what we need here, we need to be able to make quick\ndemocratic decisions within one sprint."),(0,a.kt)("p",null,"I am amazed that the framework champions these type of questions and\nsuggestions which can help us decide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whose problem are we trying to solve?"),(0,a.kt)("li",{parentName:"ul"},"Who else could be impacted?"),(0,a.kt)("li",{parentName:"ul"},"Who has solved a similar problem?"),(0,a.kt)("li",{parentName:"ul"},"Who is likely to disagree, dissent, reject, or opt out? Who else may care?"),(0,a.kt)("li",{parentName:"ul"},"Gather input from internal customers and those who you will need help from (surveys, interviews, focus groups, etc.)"),(0,a.kt)("li",{parentName:"ul"},"Remain open to new information and perspectives"),(0,a.kt)("li",{parentName:"ul"},"Consider peer-to-peer feedback and communication options in addition to formal channels"),(0,a.kt)("li",{parentName:"ul"},"How will we monitor mailing lists and other feedback channels after the launch?"),(0,a.kt)("li",{parentName:"ul"},"How willing are we to make revisions based on feedback?"),(0,a.kt)("li",{parentName:"ul"},"What's a reasonable window of time for additional input and refinement?"),(0,a.kt)("li",{parentName:"ul"},"Did we overlook something important? How do we address it?")),(0,a.kt)("h2",{id:"fesco"},(0,a.kt)("a",{parentName:"h2",href:"https://docs.fedoraproject.org/en-US/fesco/"},"FESCo")),(0,a.kt)("p",null,"Decisions in FESCo are the daily bread so we can get an inspiration here. They\nhave a well-thought voting mechanism:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"One week for FESCo members to vote ",(0,a.kt)("inlineCode",{parentName:"p"},"+1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),". After the period accept if 3\n",(0,a.kt)("inlineCode",{parentName:"p"},"+1"),"s were received without a negative vote and vice versa.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Immediately accept or reject when getting 7 votes of the same type.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After a week, discuss the topic and decide."))),(0,a.kt)("p",null,"This also sounds like a too complicated solution for us although I like the\naspect of: discuss when unsure, accept/reject in agreement."),(0,a.kt)("h2",{id:"uk-government-suggestion-for-voting-in-charities"},(0,a.kt)("a",{parentName:"h2",href:"https://www.gov.uk/guidance/charity-meetings-making-decisions-and-voting#follow-voting-rules-if-applicable"},"UK Government suggestion for voting in charities")),(0,a.kt)("p",null,"Simple and clear: members cast votes on meetings :) just like we do with grooming."),(0,a.kt)("h2",{id:"board-voting-common-steps--tips-for-better-decision-making"},(0,a.kt)("a",{parentName:"h2",href:"https://boardable.com/blog/board-voting/"},'"Board Voting: Common Steps & Tips for Better Decision-Making"')),(0,a.kt)("p",null,"Interesting (and biased) blog post which describes in detail the process of\nvoting in non-profit organizations."),(0,a.kt)("h2",{id:"frantas-suggestion-about-decision-making-in-teal-organizations"},(0,a.kt)("a",{parentName:"h2",href:"https://reinventingorganizationswiki.com/theory/decision-making/"},"Franta's suggestion about decision making in Teal organizations")),(0,a.kt)("p",null,"A thorough and well-explained comparison between types of organization and the\ndecision making process followed by a fascinating read about the Teal decision\nmaking."),(0,a.kt)("p",null,"Funnily enough, the advice the article is giving is contrary to my current\nproposal ('duh). They advise for the decision maker to make a call based on\nresearch, advices and being the subject matter expert. I instead suggested to\nhave a consensus on a decision. The argument from the article is that reaching\nconsensus is too expensive time-wise and resource-wise. I'd still try what I\npropose and reevaluate what's the most optimal process for us after a period of\ntime."),(0,a.kt)("p",null,"We can definitely still learn from the article so I strongly suggest reading it."),(0,a.kt)("h2",{id:"consent-decision-making"},(0,a.kt)("a",{parentName:"h2",href:"https://thedecider.app/consent-decision-making"},"Consent Decision Making")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"winner")),(0,a.kt)("p",null,"Another fascinating process to make decisions with a clear process how to reach\ndecisions."),(0,a.kt)("h2",{id:"ckis-feedback-mechanism"},(0,a.kt)("a",{parentName:"h2",href:"https://cki-project.org/docs/hacking/rfcs/cki-001-cki-feedback-mechanism/"},"CKI's feedback mechanism")),(0,a.kt)("p",null,"CKI team uses the ",(0,a.kt)("em",{parentName:"p"},"Request For Comments")," mechanism to formally propose a change\nso the team can provide feedback without requiring eventual consensus."),(0,a.kt)("h2",{id:"democracy-21"},(0,a.kt)("a",{parentName:"h2",href:"https://vitalplus.org/demokracie-2-1-rozhodovat-jinak-a-lepe/"},"Democracy 2.1")),(0,a.kt)("p",null,'A new way of voting proposal created by a Czech mathematician which enables\npeople to cast +2 and -1 votes. The pitch is that it would eliminate "the bad\nguys" getting to parliament.'),(0,a.kt)("h2",{id:"proposal"},"Proposal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the Consent Decision Making process since it leaves plenty of room for a\ndiscussion and addressing objections.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The owner of a topic is empowered to make a decision while being supported by\nthe team.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If we are still unable to make a decision, we can use a voting mechanism\n(e.g. the Democracy 2.1 scheme).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reevaluate after a few sprints pass."))))}d.isMDXComponent=!0}}]);