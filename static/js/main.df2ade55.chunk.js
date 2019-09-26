(window["webpackJsonpreact-user-app"]=window["webpackJsonpreact-user-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},34:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),l=a(7),i=a(8),o=a(23),u=(a(34),a(1)),p=a(2),m=a(4),f=a(3),d=a(5),h=Object(l.b)((function(e){return{filter:e.filter}}))((function(e){return r.a.createElement("div",{className:"search-input"},r.a.createElement("i",{className:"fas fa-search",id:"search-icon"}),r.a.createElement("input",{className:"form-control",id:"input",placeholder:"Search by User Name",type:"text",value:e.filter.text,onChange:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_TEXT_FILTER",text:e}}(t.target.value))}}))})),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){window.location.reload()},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("div",{className:"nav-left"},r.a.createElement("div",{className:"nav-left-content"},r.a.createElement("img",{src:"brand-logo.svg",alt:"",id:"nav-icon"}),r.a.createElement("p",{id:"nav-text",onClick:this.onClick},"Home"))),r.a.createElement("div",{className:"nav-right"},r.a.createElement(h,null))))}}]),t}(n.Component),v=a(11);a(35);v.initializeApp({apiKey:"AIzaSyCphV8WWaREKspVurhqTbsW-xlujyGw9wo",authDomain:"beezer-test-4a708.firebaseapp.com",databaseURL:"https://beezer-test-4a708.firebaseio.com",projectId:"beezer-test-4a708",storageBucket:"",messagingSenderId:"338977381279",appId:"1:338977381279:web:c110b636047cf9b8f5bbaa",measurementId:"G-VPC0CZHK7E"});var E=v.database();function y(e){return{type:"SELECT_USER",user:e}}var O=a(12),g=a.n(O),j=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"app-card"},r.a.createElement("div",{className:"app-card-avatar"},r.a.createElement("img",{src:"app-card.svg",alt:""})),r.a.createElement("div",{className:"app-card-content"},r.a.createElement("h5",null,"App Name: ",r.a.createElement("span",{className:"text-bold"},e.appName)),r.a.createElement("p",null,"Title: ",e.appTitle)))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.selectUser(a.props.user)},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a="user-card";return this.props.user===this.props.selectedUser&&(a+=" selected"),r.a.createElement("div",{className:a,onClick:this.handleClick},r.a.createElement(g.a,{flipOnHover:!1,flipOnClick:!0,flipDirection:"horizontal",ref:function(t){return e.flippy=t},style:{height:"280px"}},r.a.createElement(O.FrontSide,{style:{backgroundColor:"#ffc5a1",borderRadius:"5px",position:"relative"}},r.a.createElement("h5",{className:"text-white"},"Account ID: ",r.a.createElement("span",{className:"text-bold"},t.user.childData.account)),r.a.createElement("h2",{className:"text-grey",id:"margin-bottom-none"},t.user.childData.name),r.a.createElement("p",null,"(user name)"),r.a.createElement("img",{src:"user-card.svg",alt:"",className:"user-card-svg"})),r.a.createElement(O.BackSide,{style:{backgroundColor:"#3f847c",borderRadius:"5px",color:"white"}},r.a.createElement("div",{className:"app-cards"},t.apps.map((function(e){var t=Object.values(e)[0],a=Object.values(e)[1];return r.a.createElement(j,{key:t,appName:t[0],appTitle:a[0].title})}))))))}}]),t}(n.Component);var k=Object(l.b)((function(e){return{selectedUser:e.selectedUser}}),(function(e){return Object(i.b)({selectUser:y},e)}))(w),N=function(e,t){var a=t.text;return e.filter((function(e){return e.childData.name.toLowerCase().includes(a.toLowerCase())}))},S=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.startSetUsers(),this.props.startSetAccounts()}},{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{marginBottom:"20px"}},"User Dashboard"),r.a.createElement("p",{style:{fontSize:"20px",color:"#424444"}},"Click on the user to see associated account-app name and title"),r.a.createElement("div",{className:"user-list"},e.users.map((function(t){var a=[],n=[];return e.accounts.map((function(e){return t.childData.account===e.key&&(a.push(e.childData.apps),a.map((function(e){var t=Object.keys(e),a=Object.values(e);return n.push({appNames:t,appTitles:a})}))),a})),r.a.createElement(k,{key:t.childData.name,user:t,account:a,apps:n})}))))}}]),t}(n.Component);var C=Object(l.b)((function(e){return{users:N(e.users,e.filter),accounts:e.accounts}}),(function(e){return{startSetUsers:function(t){return e((function(e){return E.ref("users").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.key,n=e.val();a.push({key:t,childData:n})})),e(function(e){return{type:"SET_USERS",users:e}}(a))}))}))},startSetAccounts:function(t){return e((function(e){return E.ref("accounts").on("value",(function(t){var a=[];t.forEach((function(e){var t=e.key,n=e.val();a.push({key:t,childData:n})})),e(function(e){return{type:"SET_ACCOUNTS",accounts:e}}(a))}))}))}}}))(S),T=function(){return r.a.createElement("div",null,r.a.createElement(C,null))},x=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"https://github.com/elleelee",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/ellenleelbs/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("img",{src:"web-app.svg",alt:"",className:"footer-img"}),"This web app is made by Ellen Lee"))}}]),t}(n.Component),U=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(T,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(24);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(D.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R={text:""},I=Object(i.c)({users:function(e,t){if(void 0===e)return[];switch(t.type){case"SET_USERS":return t.users;default:return e}},accounts:function(e,t){if(void 0===e)return[];switch(t.type){case"SET_ACCOUNTS":return t.accounts;default:return e}},selectedUser:function(e,t){if(void 0===e)return null;switch(t.type){case"SELECT_USER":return t.user;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return A({},e,{text:t.text});default:return e}}}),P=Object(i.a)(o.a),L=Object(i.d)(I,P);s.a.render(r.a.createElement(l.a,{store:L},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.df2ade55.chunk.js.map