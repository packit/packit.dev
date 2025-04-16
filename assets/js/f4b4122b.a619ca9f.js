"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7358],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={},i="Meetings",s={unversionedId:"meetings",id:"meetings",title:"Meetings",description:"Our team meetings are organised similarly each week. We have Standup meetings on Monday, Tuesday and Thursday morning and all the other team meetings happen on Thursdays to make our team schedule compact.",source:"@site/agile/meetings.md",sourceDirName:".",slug:"/meetings",permalink:"/agile/meetings",draft:!1,editUrl:"https://github.com/packit/agile/tree/main/docs/agile/meetings.md",tags:[],version:"current",frontMatter:{},sidebar:"autogenerated",previous:{title:"How Packit team does Kanban?",permalink:"/agile/kanban"},next:{title:"Packit team roles",permalink:"/agile/roles"}},l={},c=[{value:"Standups",id:"standups",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Refinement meeting",id:"refinement-meeting",level:2},{value:"Retrospectives",id:"retrospectives",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"meetings"},"Meetings"),(0,r.yg)("p",null,"Our team meetings are organised similarly each week. We have ",(0,r.yg)("a",{parentName:"p",href:"#standup"},"Standup")," meetings on Monday, Tuesday and Thursday morning and all the other team meetings happen on Thursdays to make our team schedule compact."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"As part of our role-rotation practice, all the regular weekly meetings are facilitated by the Kanban Lead](./roles#kanban-lead) of the week.")),(0,r.yg)("h2",{id:"standups"},"Standups"),(0,r.yg)("p",null,"We have standups 3 times a week (Mondays, Tuesdays and Thursdays) to talk about what we have been working on, issues we are facing and what we are planning to work on next. Reserve the other 2 days for focus time."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Each standup, we start with checking the new cards in our ",(0,r.yg)("a",{parentName:"li",href:"./kanban#packit-kanban-board"},"Kanban board"),". On Mondays, we also go through the blocked cards, cards that haven't had any progress for a while to see if any action can be taken and cards approaching their due-date."),(0,r.yg)("li",{parentName:"ol"},"To avoid stale issues, we also discuss one of the least recently updated issues from the backlog and check if it's still relevant."),(0,r.yg)("li",{parentName:"ol"},"We follow with the statuses -- everyone quickly shares what they were working on recently, what are working on and planning to do next. Also if there are any issues or blockers found on the way. This should be a monologue to make the most of the time. Any topic requiring more discussion is left to be discussed elsewhere (separate discussion/meeting or ",(0,r.yg)("a",{parentName:"li",href:"#architecture"},"architecture meeting"),") or discussed at the end of the standup."),(0,r.yg)("li",{parentName:"ol"},"For each standup, we have a standup question defined to engage a bit. Everyone answers the question after providing a status. It can be any warm-up question or short activity. Sometimes, it's just for fun, sometimes it allows us to show our current mood or energy level. This also makes us know others more, building a stronger team together."),(0,r.yg)("li",{parentName:"ol"},"So-called post-standup topics are discussed. To not disturb statuses, any announcement or topic requiring a small discussion/response is left to the end of the meeting.")),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)("p",null,"To not make ",(0,r.yg)("a",{parentName:"p",href:"#standup"},"Standup")," meetings too long, we've separated the longer discussions into a weekly organised meeting. As the name suggests, the main goal of this meeting is to discuss technical or architectural topics but there is a place to discuss anything. The topics are collected beforehand in a shared document.\nFor relevant topics (public, open for community input), one can create a discussion thread at ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/packit/packit/discussions/categories/architecture"},"GitHub Discussions")," and link it in the document. Alternatively, anyone can add a ",(0,r.yg)("a",{parentName:"p",href:"./kanban#discuss"},(0,r.yg)("inlineCode",{parentName:"a"},"discuss")," label")," to an issue."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"./roles#kanban-lead"},"Kanban Lead")," facilitates the discussion and shows a 5-minute timer for each topic (can be reset if everyone agrees to continue with a discussion). ",(0,r.yg)("a",{parentName:"p",href:"./roles#kanban-lead"},"Kanban Lead")," is also responsible for note-taking and making a clear conclusion from the discussion including the clear action items. Anyone is welcome to help with the notes since sometimes it's hard to facilitate discussion and make notes at the same time."),(0,r.yg)("p",null,"Meetings are a safe space. There are no dumb ideas or stupid questions - anyone can ask if they don\u2019t understand something."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If there is a strong decision needed, let people provide feedback also offline (either before or after the meeting). Some people might prefer written communication and/or asynchronous communication. Allow them to participate, so the best decision is chosen.")),(0,r.yg)("h2",{id:"refinement-meeting"},"Refinement meeting"),(0,r.yg)("p",null,"Weekly meetings to prepare our next cards to work on. This is not to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"plan"))," the work for the next week as done in Scrum. Kanban is based on a stream of cards going through ",(0,r.yg)("a",{parentName:"p",href:"./kanban#card-states-board-columns"},"the board columns"),". This activity is about moving the card from the top of the backlog (a ",(0,r.yg)("a",{parentName:"p",href:"./kanban#priority-backlog"},"priority one")," in our case) into the ",(0,r.yg)("a",{parentName:"p",href:"./kanban#refined"},(0,r.yg)("em",{parentName:"a"},"refined")," column")," by following ",(0,r.yg)("a",{parentName:"p",href:"./kanban#refine"},"our refinement process"),".\nBasically it's about making sure the task is clearly defined and understood by the team members so they can be taken by anyone to start the real work."),(0,r.yg)("p",null,"The discussion starts with a quick introduction of the card (done by a ",(0,r.yg)("a",{parentName:"p",href:"./roles#kanban-lead"},"Kanban Lead")," or a person the most familiar with the task). The card is being updated and the discussion continues until we agree it's clear and can be done in 5 days or less -- to help ourselves reach this agreement, there is a voting going on. We used to do a thumbs-up/down for the following questions:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Is this card clear?"),(0,r.yg)("li",{parentName:"ol"},"Is this doable in 5 days or less?")),(0,r.yg)("p",null,"Since there wasn't much disagreement and discussion, we switched to Scrum-like voting by hand about ",(0,r.yg)("a",{parentName:"p",href:"./kanban#story-points"},"story points"),". (A ",(0,r.yg)("a",{parentName:"p",href:"./kanban#story-point-scale"},"difference in story points")," helps us better find a difference in the understanding.) We collect the story points but it's not the main reason why we do the voting. Be respectful when asking people why they've chosen a different story point number. It's to help everyone with the understanding and also to share the possible risks, not to put someone on the spot!"),(0,r.yg)("p",null,"At the end of the meeting, make sure the order (=priority) of the cards in the ",(0,r.yg)("em",{parentName:"p"},"refined")," column is right and respects our priorities as shown on the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/orgs/packit/projects/7/views/29"},"epic board"),", but also considers any urgent tasks (e.g. maintenance like renewing certificates)."),(0,r.yg)("h2",{id:"retrospectives"},"Retrospectives"),(0,r.yg)("p",null,"Bi-weekly meetings to get a sense of how everyone feels. This is a safe space -- feel free to share anything openly and also be open to listening to others."),(0,r.yg)("p",null,"Miro board is created by the ",(0,r.yg)("a",{parentName:"p",href:"./roles#kanban-lead"},"Kanban Lead")," leading the Retrospective at the beginning of the week (ideally Monday morning) to provide time for adding notes to the board in advance.\nThere's a default Miro board template prepared, but any activity or board can be used to make it more interesting."),(0,r.yg)("p",null,"Action items from the previous retro board should be included to be discussed and checked."),(0,r.yg)("p",null,"At the end of the meeting, we revisit our ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/orgs/packit/projects/7/views/29"},"epics")," and how we are standing on our planned epics for the quarter."))}u.isMDXComponent=!0}}]);