(this["webpackJsonpnasa-photo"]=this["webpackJsonpnasa-photo"]||[]).push([[0],{19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(15),l=t.n(c),r=(t(24),t(6)),s=t(1),i=function(){return o.a.createElement("div",{className:"home"},o.a.createElement(r.b,{className:"home-link",to:"/api_nasaphoto/Nasaphoto"},"See into the stars!"))},m=t(12),u=t.n(m),p=t(17),h=t(18),d=function(){return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement(r.b,{className:"link",to:"/api_nasaphoto/"},"Take me Home")))},E="A7zayae2opuST7hDGFYXdeuEh6NufJMdqwLwXd9X",f=function(){var e=Object(n.useState)(null),a=Object(h.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key="+E);case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t),console.log(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t?o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement("div",{className:"nasa-photo"},"image"===t.media_type?o.a.createElement("img",{className:"nasa-photo img",src:t.url,alt:t.title}):o.a.createElement("iframe",{title:"space-video",src:t.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),o.a.createElement("div",null,o.a.createElement("h1",{className:"h1"},t.title),o.a.createElement("p",{className:"date"},t.date),o.a.createElement("p",{className:"explanation"},t.explanation)))):o.a.createElement("div",null)};t(31);var v=function(){return o.a.createElement(r.a,null,o.a.createElement("div",{classNAme:"app"},o.a.createElement(s.a,{component:i,path:"/api_nasaphoto/",exact:!0}),o.a.createElement(s.a,{component:f,path:"/api_nasaphoto/Nasaphoto"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(r.a,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.925e6825.chunk.js.map