(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{18:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/start.ac656f98.svg"},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(20),r=a.n(n),s=(a(18),a(31),a(32),a(42),a(21)),l=a.n(s),o=a(6),d=a.n(o),b=a(1);function j(){var e=a(34).default;return Object(b.jsx)("section",{id:"profile",children:Object(b.jsxs)("div",{className:"profile-container mt-10 flex pl-2",children:[Object(b.jsx)("div",{className:"profile-parent",children:Object(b.jsx)("div",{className:"profile-details",children:Object(b.jsx)("div",{className:"cols"})})}),Object(b.jsxs)("div",{className:"profile-root w-full flex",children:[Object(b.jsxs)("div",{className:"profile-details-name flex flex-col w-1/2 pl-24 mt-10",children:[Object(b.jsx)("div",{className:"text-left",children:Object(b.jsxs)("span",{className:"primary-text text-left font-bold text-3xl",children:["Hi ",Object(b.jsx)("br",{})," "]})}),Object(b.jsx)("div",{className:"flex align-left",children:Object(b.jsxs)("h1",{className:"text-3xl",children:["I'm\xa0",Object(b.jsx)(l.a,{text:[" a Learner"," a Full-Stack Developer"," an Angular/Typescript Developer"," a React Developer"],speed:200,typingDelay:1e3})]})}),Object(b.jsx)("div",{className:"introduction text-left mt-5",children:"Hello, I'm Nicholas, I like to try out new things and building stuff. I am a soon to graduate from Hong Kong Polytechnic University"}),Object(b.jsxs)("div",{className:"introduction2 text-left",children:["-- ",Object(b.jsx)("br",{}),"Currently, I am experimenting with React.js, Tailwind, and Node.js. ",Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"This would be my first online portfolio, it's a static website (for now) but feel free to reach out and contact me if you are interested in me and/or have some feedback for this website!"})]}),Object(b.jsx)("div",{className:"showMore mt-8 text-left",children:Object(b.jsx)(d.a,{href:"#portfolio",className:"border-2 px-2 py-2 border-black hover:border-gray-600 rounded",children:"Show More"})})]}),Object(b.jsx)("div",{className:"icon w-1/2 flex items-center justify-center pt-10",children:Object(b.jsx)("img",{src:e,className:"logo-start",alt:"start"})})]})]})})}var u=a(3),x=(a(35),a(13));function f(){var e=Object(i.useState)("relative"),t=Object(u.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(0),r=Object(u.a)(n,2),s=r[0],l=r[1];Object(i.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]);var o=function(){if(void 0!==window){var e=window.scrollY;window.pageYOffset;l(e>650?2:e>500?1:0),console.log("active section",s," height: ",e),c(e>100?"fixed top-3 left-0 z-50":"relative")}};return Object(b.jsxs)("div",{className:"flex justify-between ".concat(a," w-full header-bg"),children:[Object(b.jsx)("div",{className:"logo"}),Object(b.jsxs)("div",{className:"header-container flex justify-center w-100  text-m font-bold ",children:[Object(b.jsx)(d.a,{href:"#profile",className:"uppercase px-2 header-menu ".concat(0===s?"active-header":""),children:"About"}),Object(b.jsx)(d.a,{href:"#portfolio",className:"uppercase px-2 header-menu ".concat(1===s?"active-header":""),children:"Portfolio"}),Object(b.jsx)(d.a,{href:"#skill",className:"uppercase px-2 header-menu ".concat(2===s?"active-header":""),children:"Skill"})]}),Object(b.jsxs)("div",{className:"socialMedia flex items-center",children:[Object(b.jsx)("a",{href:"https://www.linkedin.com/in/nicholas-matthew-kurniadi-5b28a21ab/",target:"_blank",className:"text-xl px-2",children:Object(b.jsx)(x.b,{})}),Object(b.jsx)("a",{href:"https://github.com/Velds/PortfolioWebsite",target:"_blank",className:"text-xl px-2",children:Object(b.jsx)(x.a,{})})]})]})}a(36),a(37),a(38),a(39);function m(e){var t=e.card,a=Object(i.useState)(!1),c=Object(u.a)(a,2),n=c[0],r=c[1];return Object(b.jsx)("div",{className:"flip-card-outer",onClick:function(){"click"==t.variant&&(console.log("click",t),r(!n))},onFocus:function(){"focus"==t.variant&&(console.log("focusing~"),r(!0))},onBlur:function(){"blur"==t.variant&&(console.log("blurring~"),r(!1))},children:Object(b.jsxs)("div",{className:"flip-card-inner ".concat(n?"showBack":""," ").concat("focus"==t.variant?"focus-trigger":""," "),children:[Object(b.jsx)("div",{className:"card front flex rounded shadow-lg",children:Object(b.jsxs)("div",{className:"card-body flex justify-start flex-col px-5",children:[Object(b.jsx)("div",{className:"card-text mt-10 text-xl font-bold text-left",children:t.front.title}),Object(b.jsx)("div",{className:"card-subtext mt-2 text-lg text-left",children:t.front.subtitle}),Object(b.jsx)("div",{className:"date-period text-sm text-left",children:t.front.period})]})}),Object(b.jsx)("div",{className:"card back overflow-hidden border-2 border-black rounded",children:Object(b.jsx)("div",{className:"card-body flex justify-center items-center",children:Object(b.jsx)("ul",{className:"card-text text-sm text-left px-5 mt-10 ",children:t.back.map((function(e,t){return Object(b.jsxs)("li",{className:"my-2",children:[" ",e," "]},t)}))})})})]})})}var h={workCards:[{id:"1",variant:"click",front:{title:"iPYGG Fintech Group Limited",subtitle:"Full Stack Developer in Research & Development",period:"July 2021 - Dec 2021"},back:["Participated in Creating, Maintaining, and Executing PHP admin Server and its\u2019 API with HMVC\n            architecture with CodeIgniter","Progressive application development with Ionic and Angular Typescript to implement stateful\n            behaviors for the application","Delivered the company main product that is listed on both google play store and app store\n            (iPYGG)","Collaborated in a team of 5 to deliver the company main product and the company\u2019s B2B\n            functions.","Experienced with implementing wireframes to a real design from designer software (e.g., Figma)","Mastered and taught engineering group\u2019s best practices and standard"]},{id:"2",variant:"click",front:{title:"PT Indonesia Global Solusindo",subtitle:"Application Developer",period:"July 2020 - Dec 2020"},back:["Migrating the company dashboard for internal resource management that are used by the\n            company for internal managements with the next framework version","Internal Database migration to a new framework version using MySQL","Redesigned and coded the Company internal dashboard with HTML Bootstrap and CSS","Collaborated with colleagues remotely using zoom meetings"]},{id:"3",variant:"click",front:{title:"PolyU Service Learning and Leadership Office",subtitle:"Student Assistant",period:"Aug 2020"},back:["Assisted in changing and developing the course website that is hosted on KEEP education website that are\n            used by the school service learning courses","Design implementation with HTML CSS"]}],extraCurricular:[{id:"4",variant:"click",front:{title:"AIESEC in PolyU",subtitle:"Finance and Information Management Officer",period:"Oct 2019 \u2013 Jul 2020"},back:["Developed a Local Committee website through that is hosted on Wordpress","Data analysis on AIESEC product through the usage of pivot table and charts on excel and google\n            sheet"]},{id:"5",variant:"click",front:{title:"Melco Student Challenge 2019",subtitle:"Semifinalist",period:"March 2020"},back:["Sustainable & environmental innovation category","Our solution was to integrate saved resources and hotel facilities to encourage energy saving\n            behavior"]},{id:"6",variant:"click",front:{title:"Hackathons",subtitle:"Hackathon participated",period:"--"},back:["SCMP Classified Post 2019","PwC HackaDay 2020","Code For Good (J.P Morgan & Chase) 2021"]}]};function p(){var e=Object(i.useState)({activeTab:0,workTab:0,extraTab:0,projectTab:0}),t=Object(u.a)(e,2),a=t[0],c=t[1],n=function(e){c({activeTab:e})};return Object(b.jsx)("section",{id:"portfolio",children:Object(b.jsxs)("div",{className:"w-full mt-24 flex flex-col",children:[Object(b.jsxs)("div",{className:"Resume-title text-right pr-24",children:[Object(b.jsxs)("span",{className:"primary-text text-right font-bold text-3xl",children:["Portfolio ",Object(b.jsx)("br",{})," "]}),Object(b.jsx)("span",{className:"resume-paragraph",children:"Here is my experiences that I want to showcase! "})]}),Object(b.jsxs)("div",{className:"pl-24 pr-10 py-6 mr-1/2",children:[Object(b.jsxs)("div",{className:"menu-resume flex relative ",children:[Object(b.jsx)("div",{className:"px-2 ".concat(0===a.activeTab?"menu-active":""),onClick:function(){return n(0)},children:"Work"}),Object(b.jsx)("div",{className:"px-2 ".concat(1===a.activeTab?"menu-active":""),onClick:function(){return n(1)},children:" Extracurricular"})]}),Object(b.jsxs)("div",{className:"flex border-2 border-black rounded resume-container",children:[Object(b.jsx)("div",{className:"selection-container w-full flex p-5 relative overflow-auto justify-center ".concat(0===a.activeTab?"":"hidden"),id:"work",children:h.workCards.map((function(e){return Object(b.jsx)(m,{card:e},e.id)}))}),Object(b.jsx)("div",{className:"selection-container w-full flex p-5 relative justify-center ".concat(1===a.activeTab?"":"hidden"),id:"extra",children:h.extraCurricular.map((function(e){return Object(b.jsx)(m,{card:e},e.id)}))})]})]})]})})}var v=a(48),g=a(24),O=a(7),w=a(49),N=a(50),y={padding:"0.5rem 1rem",marginBottom:".5rem",cursor:"move",borderRadius:"7px"},k=function(e){var t=e.id,a=e.text,c=e.index,n=e.moveCard,r=(e.color,"card"),s=Object(i.useRef)(null),l=Object(w.a)({accept:r,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var a;if(s.current){var i=e.index,r=c;if(i!==r){var l=null===(a=s.current)||void 0===a?void 0:a.getBoundingClientRect(),o=(l.bottom-l.top)/2,d=t.getClientOffset().y-l.top;i<r&&d<o||i>r&&d>o||(n(i,r),e.index=r)}}}}),o=Object(u.a)(l,2),d=o[0].handlerId,j=o[1],x=Object(N.a)({type:r,item:function(){return{id:t,index:c}},collect:function(e){return{isDragging:e.isDragging()}}}),f=Object(u.a)(x,2),m=f[0].isDragging?0:1;return(0,f[1])(j(s)),Object(b.jsx)("div",{className:"mx-2 w-3/4 text-md flex items-center justify-center border-2 ".concat(c%2==0?"border-white bg-black text-white":"border-black bg-white text-black"),ref:s,style:Object(O.a)(Object(O.a)({},y),{},{opacity:m}),"data-handler-id":d,children:a})},C=a(23),S=a.n(C),P=[{id:1,text:"Angular",color:!0},{id:2,text:"Typescript",color:!1},{id:3,text:"Javascript",color:!0},{id:4,text:"React",color:!1},{id:5,text:"HTML",color:!0},{id:6,text:"PHP",color:!1},{id:7,text:"Python",color:!0},{id:8,text:"Java",color:!1},{id:9,text:"Flask",color:!0},{id:10,text:"SA/CSS",color:!1},{id:11,text:"SQL",color:!0},{id:12,text:"C",color:!1}],I=(a(41),a.p+"static/media/chip.eb1fb9a9.svg");function T(){var e=Object(i.useState)(P),t=Object(u.a)(e,2),a=t[0],c=t[1],n=Object(i.useCallback)((function(e,t){var i=a[e];c(S()(a,{$splice:[[e,1],[t,0,i]]}))}),[a]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{id:"skill",children:Object(b.jsxs)("div",{className:"skill-main-container mt-24",children:[Object(b.jsxs)("div",{className:"flex flex-col w-1/2",children:[Object(b.jsxs)("div",{className:"Resume-title text-left pl-24 flex flex-col mb-10",children:[Object(b.jsx)("span",{className:"primary-text text-left font-bold text-3xl",children:"Skill"}),Object(b.jsx)("span",{className:"resume-paragraph",children:"Language that I use and am confident in"}),Object(b.jsx)("span",{className:"text-xs",children:"You can rearrange the skill by drag and drop :)"})]}),Object(b.jsx)("div",{className:"pl-24",children:Object(b.jsx)(v.a,{backend:g.a,children:Object(b.jsx)("div",{className:"grid grid-cols-3",children:a.map((function(e,t){return function(e,t){return Object(b.jsx)(k,{index:t,id:e.id,text:e.text,moveCard:n},e.id)}(e,t)}))})})})]}),Object(b.jsx)("div",{className:"flex w-1/2 justify-center items-center py-24",children:Object(b.jsx)("img",{className:"skill-decor",src:I,alt:"decoration-1"})})]})})})}var D=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{}),Object(b.jsx)(j,{}),Object(b.jsx)(p,{}),Object(b.jsx)(T,{})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),i(e),c(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),M()}},[[43,1,2]]]);
//# sourceMappingURL=main.ee3ae6da.chunk.js.map