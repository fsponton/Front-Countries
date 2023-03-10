(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},78:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(36),i=n.n(r),s=(n(67),n(68),n(52),n(8)),o=n(22),l=n(6),u=n(12),d=n(10),j=n(11),b=n(18),m=n(19),h=(n(69),n(9)),O=n(27),p=n(34),f=n.n(p),v="GET_ALL_COUNTRIES",x="GET_COUNTRY_BY_NAME",g="GET_COUNTRY_BY_ID",y="GET_ACTIVITIES",N="CREATE_ACTIVITY",C=function(){return function(e){return O.a.get("https://api-countries-np9g.onrender.com/countries").then((function(t){e({type:v,payload:t.data})})).catch((function(e){return alert("EROR_NETWORK")}))}},A=function(e){return function(t){return O.a.get("https://api-countries-np9g.onrender.com/countries?name=".concat(e)).then((function(e){t({type:x,payload:e.data})})).catch((function(t){void 0===t.response&&alert("No internet connection"),400===t.response.status&&alert("Country with name: ".concat(e," does not exist"))}))}},w=function(e){return O.a.get("https://api-countries-np9g.onrender.com/countries?name=".concat(e)).then((function(e){return e.data})).catch((function(t){void 0===t.response&&alert("No internet connection"),400===t.response.status&&alert("Country with name: ".concat(e," does not exist"))}))},S=function(){return function(e){return O.a.get("https://api-countries-np9g.onrender.com/activities").then((function(t){e({type:y,payload:t.data})}))}},F=function(e){var t=e.name,n=e.difficulty,c=e.duration,a=e.season,r=e.idCountries,i=e.review;return function(e){return O.a.post("https://api-countries-np9g.onrender.com/activities",{name:t,difficulty:parseInt(n),duration:parseInt(c),season:a,idCountries:r,review:i}).then((function(n){n.data[0][1]?(e({type:N,payload:n.data}),f()("Se creo la actividad",'"'.concat(t,'"'),"success")):f()("La actividad ya se encuentra registrada",'"'.concat(t,'"'),"error")})).catch((function(e){e.response.data&&alert("Faltan datos")}))}};var P="GET_COUNTRIES_PER_CONTINENT",k="GET_COUNTRIES_PER_ACTIVITY",T="CHANGE_PAGE_NUMBER",E=" ORDER_ALPHABETICALLY",R=" CLEAN_FILTERS",I="ORDER_POPULATION",D="GET_ALL_ID_COUNTRIES",_="CHANGE_FLAG",L="CHANGE_FLAG_RESET",G="CHANGE_FLAG_ACTIVITY",M=function(e){return{type:P,payload:e}},U=function(e){return{type:k,payload:e}},B=function(){return{type:T}},H=function(){return{type:R}},Y=function(){return{type:D}},q=function(e){return{type:_,payload:e}},z=function(e){return{type:L,payload:e}},V=function(e){return{type:G,payload:e}},W=(n(78),n(13)),J=n(1),K=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsxs)("div",{className:"countryCard d-flex flex-column align-items-center",children:[Object(J.jsx)("h3",{children:this.props.country}),Object(J.jsx)(W.b,{to:"/countries/".concat(this.props.id),children:Object(J.jsx)("img",{src:this.props.img,alt:"flag ".concat(this.props.country)})}),Object(J.jsx)("p",{children:this.props.continent})]})}}]),n}(a.a.Component),X=(Object(h.b)((function(e){return{country:e.country}}),null)(K),n(85),function(e){var t=e.pageNumbers,n=e.handleClick,c=e.selectedPage;return Object(J.jsx)(J.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e){return c===e?Object(J.jsx)("button",{className:"btnPage btnActive btn btn-sm btn-outline-primary",id:e,onClick:n,children:e},e):Object(J.jsx)("button",{className:"btnPage btn btn-sm btn-outline-primary",id:e,onClick:n,children:e},e)}))})}),Z=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).componentDidMount=Object(u.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.props.getAllCountries();case 2:return e.next=4,c.props.getActivities();case 4:return e.next=6,c.props.getallidCountries();case 6:case"end":return e.stop()}}),e)}))),c.updateCurrentPage=function(e){var t=e.target.name,n=c.state.currentPage,a=Math.max.apply(Math,Object(o.a)(c.props.pageNumbers)),r=Math.min.apply(Math,Object(o.a)(c.props.pageNumbers));if("next"===t){if(n===a)return;var i=n+1;c.setState((function(){return{currentPage:i,selectedPage:i}}))}else if("prev"===t){if(n===r)return;var s=n-1;c.setState((function(){return{currentPage:s,selectedPage:s}}))}else c.setState((function(){return{currentPage:Number(e.target.id),selectedPage:Number(e.target.id)}}))},c.handleClick=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.updateCurrentPage(t);case 2:if(!0!==c.props.flag||!1!==c.state.flag2){e.next=6;break}return console.log(c.state),c.setState((function(){return{currentPage:c.state.currentPage-(c.state.currentPage-2),selectedPage:c.state.currentPage-(c.state.currentPage-2),flag2:!0}})),e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.state={pageOne:1,currentPage:1,countriesPerPage:9,pageNumbersHome:c.props.pageNumbers,selectedPage:1,flag2:!1},c}return Object(j.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;!1===this.props.flag&&!0===this.state.flag2?this.setState((function(){return{currentPage:e.state.pageOne,selectedPage:e.state.pageOne,flag2:!1}})):!0===this.props.flag&&!1===this.state.flag2?this.setState((function(){return{currentPage:e.state.pageOne,selectedPage:e.state.pageOne,flag2:!0}})):!1===this.props.flag&&!1===this.state.flag2&&!0===this.props.flagReset&&(this.props.changeFlagReset(),this.setState((function(){return{currentPage:e.state.pageOne,selectedPage:e.state.pageOne}})))}},{key:"updateCountriesPerPage",value:function(e){this.setState((function(){return{countriesPerPage:e}}))}},{key:"render",value:function(){var e,t=this.props,n=t.countriesFiltered,c=t.countries,a=t.pageNumbers,r=this.state.countriesPerPage,i=this.state,s=i.currentPage,o=i.selectedPage,l=s*r,u=l-r,d=[];return d=(d=(null===n||void 0===n?void 0:n.length)>0?n:c).slice(u,l),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:"countries row",children:"No hay paises con esa actividad"===d[0]?Object(J.jsx)("div",{children:Object(J.jsx)("p",{className:"noCountries",children:"No hay paises con esa actividad en el continente filtrado"})}):null===(e=d)||void 0===e?void 0:e.map((function(e,t){return Object(J.jsx)("div",{className:"col-lg-4  col-md-6 col-sm-6 ",children:Object(J.jsx)(K,{id:e.id,img:e.flags,country:e.name,continent:e.continent},t)},t)}))}),Object(J.jsxs)("div",{className:"pagination mb-4 d-flex justify-content-center mt-3",children:[Object(J.jsx)("button",{className:"btn btn-sm btn-outline-primary",type:"button",name:"prev",onClick:this.handleClick,children:"Prev"}),Object(J.jsx)(X,{pageNumbers:a,handleClick:this.handleClick,selectedPage:o}),Object(J.jsx)("button",{className:"btn btn-sm btn-outline-primary",type:"button",name:"next",onClick:this.handleClick,children:"Next"})]})]})}}]),n}(a.a.Component),$=Object(h.b)((function(e){return{countries:e.countries,countriesFiltered:e.countriesFiltered,activities:e.activities,pageNumbers:e.pageNumbers,flag:e.flag,flagReset:e.flagReset}}),(function(e){return{getAllCountries:function(){return e(C())},getActivities:function(){return e(S())},getallidCountries:function(){return e(Y())},cleanFilters:function(){return e(H())},changeFlag:function(){return e(q())},changeFlagReset:function(){return e(z())}}}))(Z),Q=n(26),ee=n(4),te=n(50),ne=(n(86),n(28)),ce=n(23),ae=function(){var e=a.a.useState({name:""}),t=Object(te.a)(e,2),n=t[0],r=t[1],i=a.a.useState({continent:"",activity:""}),s=Object(te.a)(i,2),o=s[0],d=s[1],j=Object(h.c)(),b=Object(h.d)((function(e){return e.activities})),m=(Object(h.d)((function(e){return e.countriesFiltered})),Object(h.d)((function(e){return e.flagReset}))),O=[];b.map((function(e){return!O.includes(e)&&O.push(e.name)}));var p=O.filter((function(e,t){return O.indexOf(e)===t}));Object(c.useEffect)((function(){j(S())}),[j]);var f=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=n.name)||alert("Please insert a name"),j(A(c)),e.t0=j,e.t1=B,e.next=8,w(c);case 8:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var n,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,c=o.activity,d(Object(ee.a)(Object(ee.a)({},o),{},{continent:n})),c&&d(Object(ee.a)(Object(ee.a)({},o),{},{activity:""})),j(M(n)),j(B()),d(Object(ee.a)(Object(ee.a)({},o),{},{activity:""})),d(Object(ee.a)(Object(ee.a)({},o),{},{continent:""})),j(q(!0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var n,c,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,c=o.continent,a=o.activity,c||(d(Object(ee.a)(Object(ee.a)({},o),{},{activity:n})),j(H()),j(U(n))),c&&!a&&(j(M(c)),j(U(n))),c&a&&(j(M(c)),j(U(n)),d(Object(ee.a)(Object(ee.a)({},o),{},{activity:""})),d(Object(ee.a)(Object(ee.a)({},o),{},{continent:""}))),j(B());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){e.preventDefault();var t=e.target.value;j({type:E,payload:t})},y=function(e){e.preventDefault();var t=e.target.value;j({type:I,payload:t}),j(B())};return Object(J.jsxs)("div",{className:"",children:[Object(J.jsx)("form",{className:"searchCountry m-1 mt-3 mb-2",onSubmit:f,children:Object(J.jsx)("input",{type:"text",name:"name",className:"form-control form-control-sm",placeholder:"Search Country",value:n.name,onChange:function(e){var t=e.target,c=t.name,a=t.value;r(Object(ee.a)(Object(ee.a)({},n),{},Object(Q.a)({},c,a)))}})}),Object(J.jsxs)("div",{className:"row justify-content-center mb-4",children:[Object(J.jsxs)("button",{className:"col-lg-4 col-sm-5 btn btn-sm btn-outline-light m-1",children:[" ",Object(J.jsx)(W.b,{to:"/createMultipleActivity",children:"Create Activity"})]}),Object(J.jsx)("button",{className:"col-lg-4 col-sm-5 btn  btn-sm  btn-outline-light m-1",type:"reset",onClick:function(){if(d(Object(ee.a)(Object(ee.a)({},o),{},{activity:""})),d(Object(ee.a)(Object(ee.a)({},o),{},{continent:""})),d(Object(ee.a)(Object(ee.a)({},n),{},{name:""})),j(H()),!m)return j(z(!0))},children:"Clear Filters"})]}),Object(J.jsxs)("div",{className:"filterContinent mb-3",children:[Object(J.jsxs)("div",{children:[" ",Object(J.jsx)("label",{className:"h2 ms-1",children:"CONTINENT "})," ",Object(J.jsx)(ne.c,{style:{color:"#e6f3ff"},className:"ms-1"})]}),Object(J.jsx)("button",{className:"btn btnContinent btn-sm btn-outline-light m-1",name:"continent",id:"North America",value:"North America",onClick:v,children:"North America"}),Object(J.jsx)("button",{className:"btn btnContinent btn-sm btn-outline-light m-1",name:"continent",id:"South America",value:"South America",onClick:v,children:" South America"}),Object(J.jsx)("button",{className:"btn btnContinent btn-sm btn-outline-light m-1",name:"continent",id:"Antarctica",value:"Antarctica",onClick:v,children:"Antarctica"}),Object(J.jsx)("button",{className:"btn btnContinent btn-sm btn-outline-light m-1",name:"continent",id:"Africa",value:"Africa",onClick:v,children:"Africa "}),Object(J.jsx)("button",{className:"btn btnContinent btn-sm btn-outline-light m-1",name:"continent",id:"Europe",value:"Europe",onClick:v,children:" Europe "}),Object(J.jsx)("button",{className:"btn btnContinent btn-sm btn-outline-light m-1",name:"continent",id:"Oceania",value:"Oceania",onClick:v,children:"Oceania "})]}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("div",{className:"filterActivities mb-2",children:[Object(J.jsx)("label",{className:"h2 ms-1",htmlFor:"activities",children:"ACTIVITY "}),Object(J.jsxs)("select",{onChange:x,className:"ms-2",name:"activities",id:"activity-select",children:[Object(J.jsx)("option",{className:"option1",children:" Choose Activity"}),p.map((function(e,t){return Object(J.jsx)("option",{value:e,children:e},t)}))]})]}),Object(J.jsxs)("div",{className:"row ",children:[Object(J.jsxs)("div",{className:"order col-lg-6 col-sm-12 col-sm-12",children:[Object(J.jsx)("label",{className:"h2 ms-1",children:"NAME "}),Object(J.jsx)("br",{}),Object(J.jsx)("button",{className:"btn btnSort btn-outline-light m-1",value:"atoz",onClick:g,children:Object(J.jsx)(ce.c,{})}),Object(J.jsx)("button",{className:"btn  btnSort btn-outline-light m-1",value:"ztoa",onClick:g,children:Object(J.jsx)(ce.b,{})})]}),Object(J.jsxs)("div",{className:"order col-lg-6 col-sm-12 col-sm-12",children:[Object(J.jsx)("label",{className:"h2 ms-1",children:"POPULATION"}),Object(J.jsx)("br",{}),Object(J.jsx)("button",{className:"btn btnSort btn-outline-light m-1",value:"menor",onClick:y,children:Object(J.jsx)(ce.e,{})}),Object(J.jsxs)("button",{className:"btn btnSort btn-outline-light m-1",value:"mayor",onClick:y,children:[" ",Object(J.jsx)(ce.d,{})]})]})]})]})]})},re=(n(87),n(88),n(0)),ie=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handlerDelete=function(e){e.preventDefault();var t=c.props,n=function(e,t,n){return O.a.delete("http://api-countries-np9g.onrender.com/activities/".concat(e,"/").concat(t)).then((function(e){if(e.data)return f()("Activity delete",'"'.concat(n,'"'),"success"),e.data;f()("An error occurred while deleting",'"'.concat(n,'"'),"error")}))}(t.idCountry,t.id,t.name);n&&(c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{redirection:!0})),c.props.changeFlagActivity(!0))},c.state={redirection:!1},c}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.redirection,t=this.props,n=t.idCountry,c=t.name,a=t.difficulty,r=t.duration,i=t.season,o=t.review;console.log(this.props);return e?Object(J.jsx)(s.a,{to:"/countries/".concat(n)}):Object(J.jsxs)("div",{className:"activityDetail row d-flex justify-content-center",children:[Object(J.jsxs)("div",{className:"row",children:[Object(J.jsxs)("div",{className:"col-lg-3",children:[" ",Object(J.jsxs)("p",{children:[Object(J.jsx)("span",{className:"span",children:"Name"})," ",Object(J.jsx)("br",{}),c]})]}),Object(J.jsxs)("div",{className:"col-lg-3",children:[Object(J.jsx)("span",{className:"span ",children:"Difficulty "})," ",Object(J.jsx)("br",{}),Object(J.jsxs)("div",{className:"d-flex",children:[" ",[1,2,3,4,5].map((function(e){return e<=a?Object(J.jsx)(re.b.Provider,{value:{color:"gold",size:"20px"},children:Object(J.jsx)("div",{children:Object(J.jsx)(ne.a,{})},e)}):Object(J.jsx)(re.b.Provider,{value:{color:"white",size:"20px"},children:Object(J.jsx)("div",{children:Object(J.jsx)(ne.d,{})},e)})}))," "]})]}),Object(J.jsxs)("div",{className:"col-lg-3",children:[" ",Object(J.jsxs)("p",{children:[Object(J.jsx)("span",{className:"span",children:"Duration"}),Object(J.jsx)("br",{})," ",Object(J.jsx)(ce.f,{})," ",r," hour "]})]}),Object(J.jsxs)("div",{className:"col-lg-3",children:[" ",Object(J.jsxs)("p",{children:[Object(J.jsx)("span",{className:"span",children:"Season"}),Object(J.jsx)("br",{}),i]})]})]}),Object(J.jsxs)("div",{className:"row",children:[Object(J.jsx)("div",{className:"col-lg-12",children:Object(J.jsxs)("p",{className:"review",children:[Object(J.jsx)("span",{className:"span",children:"Review:"})," ",Object(J.jsx)("span",{className:"review",children:o})]})}),Object(J.jsxs)("div",{className:"d-flex justify-content-end",children:[" ",Object(J.jsxs)(W.b,{to:"/",children:[Object(J.jsx)("button",{className:"btn col-lg-12 btn-sm btn-outline-warning ",onClick:this.handlerDelete.bind(this),children:" Delete Activity "})," "]}),"  "]})]}),Object(J.jsx)(ne.b,{})]})}}]),n}(a.a.Component),se=(Object(h.b)(null,(function(e){return{getActivities:function(){return e(S())}}}))(ie),n(60)),oe=n(59),le=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).componentDidMount=Object(u.a)(Object(l.a)().mark((function e(){var t,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.props.match.params.id,e.next=3,c.props.getCountryById(t);case 3:(n=e.sent)&&c.setState((function(){return{country:n,flag:!0}}));case 5:case"end":return e.stop()}}),e)}))),c.componentDidUpdate=Object(u.a)(Object(l.a)().mark((function e(){var t,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.props.match.params.id,!c.state.flag||!0!==c.props.flagActivity){e.next=8;break}return e.next=4,c.props.getCountryById(t);case 4:return n=e.sent,c.setState((function(){return{country:n,flag:!1}})),c.props.changeFlagActivity(!1),e.abrupt("return");case 8:case"end":return e.stop()}}),e)}))),c.handlerFlag=function(){c.props.changeFlagActivity(!0),c.setState((function(){return{flag:!0}}))},c.clean=function(){H(),z(!0)},c.state={country:{},flag:!1},c}return Object(j.a)(n,[{key:"render",value:function(){var e,t,n=this.state.country;return Object(J.jsx)("div",{className:"container-fluid",children:Object(J.jsxs)("div",{className:"row",children:[Object(J.jsxs)("div",{className:"infoCountry col-lg-5 col-sm-12",children:[Object(J.jsx)("div",{className:"d-flex justify-content-center",children:Object(J.jsx)("img",{src:n.flags,alt:"flag ".concat(n.flags)})}),Object(J.jsxs)("div",{className:"description d-flex justify-content-center text-center",children:[Object(J.jsxs)("div",{className:"col-6",children:[Object(J.jsx)("span",{className:"title",children:"COUNTRY"}),Object(J.jsxs)("p",{children:[" ",n.name,"  "]}),Object(J.jsx)("span",{className:"title",children:"CODE"}),Object(J.jsxs)("p",{children:[" ",n.id]}),Object(J.jsx)("span",{className:"title",children:"CAPITAL"})," ",Object(J.jsx)("p",{children:n.capital})]}),Object(J.jsxs)("div",{className:"col-6",children:[Object(J.jsx)("span",{className:"title",children:"SUB REGION"}),Object(J.jsxs)("p",{children:[Object(J.jsx)(re.b.Provider,{value:{color:"green",size:"22px"},children:Object(J.jsx)(oe.a,{})}),n.subregion]}),Object(J.jsx)("span",{className:"title",children:"AREA"}),Object(J.jsxs)("p",{children:[Object(J.jsx)(re.b.Provider,{value:{color:"brown",size:"22px"},children:Object(J.jsx)(se.a,{})}),n.area," km2"]}),Object(J.jsx)("span",{className:"title",children:"POPULATION"}),Object(J.jsxs)("p",{children:[Object(J.jsx)(re.b.Provider,{value:{color:"white",size:"22px"},children:Object(J.jsx)(ce.a,{})}),n.population]})]})]})]}),Object(J.jsxs)("div",{className:"activity col-lg-7 col-sm-12",children:[Object(J.jsxs)("div",{className:"row align-items-start",children:[Object(J.jsxs)("div",{className:"col-lg-8 col-sm-12",children:[" ",Object(J.jsx)("p",{id:"titleTourist",children:"Tourist Activities"})," "]}),Object(J.jsx)("div",{className:"col-lg-4 col-sm-12 align-self-center",children:Object(J.jsxs)(W.b,{to:"/addActivity",children:[" ",Object(J.jsx)("button",{className:"btn btn-sm btn-outline-light",onClick:this.handlerFlag,children:"Add new activity"})]})})]}),0===(null===(e=n.activities)||void 0===e?void 0:e.length)?Object(J.jsx)("div",{children:Object(J.jsx)("p",{className:"activityDetail text-center",children:"This country doesn't have any activities"})}):null===(t=n.activities)||void 0===t?void 0:t.map((function(e,t){return Object(J.jsx)(ie,{idCountry:n.id,id:e.id,name:e.name,difficulty:e.difficulty,duration:e.duration,season:e.season,review:e.review,changeFlagActivity:V},t)}))]}),Object(J.jsx)("div",{className:"d-flex justify-content-center mt-2 mb-2",children:Object(J.jsx)(W.b,{className:"btn btnContinent btn-sm btn-outline-light m-1",to:"/",onClick:this.clean,children:"Back to Home"})})]})})}}]),n}(a.a.Component),ue=Object(h.b)((function(e){return{country:e.country,flagActivity:e.flagActivity}}),(function(e){return{getActivities:function(){return e(S())},getCountryById:function(t){return e((n=t,function(e){return O.a.get("https://api-countries-np9g.onrender.com/countries/".concat(n)).then((function(t){return e({type:g,payload:t.data}),t.data})).catch((function(e){void 0===e.response&&alert("No internet connection"),400===e.response.status&&alert("Country with id: ".concat(n," does not exist"))}))}));var n},cleanFilters:function(){return e(H())},changeFlagReset:function(){return e(z())},changeFlagActivity:function(t){return e(V(t))}}}))(le),de=(n(89),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handlerClean=function(e){c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{name:"",difficulty:"",duration:"",season:"",idCountries:[],namesCountries:[],review:""}))},c.handlerReview=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{review:n}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.handlerChangeName=function(e){var t=e.target.value;t.match("^[ a-zA-Z ]+$")?c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{name:t})):(alert("nombre invalido"),c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{name:""})))},c.handlerChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},Object(Q.a)({},a,n)))},c.handlerSubmit=function(e){e.preventDefault(),c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{idCountries:[].concat(Object(o.a)(c.state.idCountries),[c.props.country.id])}));var t=c.state,n=t.name,a=t.difficulty,r=t.duration,i=t.season,s=t.idCountries,l=t.review;c.props.createActivity({name:n,difficulty:a,duration:r,season:i,idCountries:s,review:l})&&c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{redirection:!0}))},c.state={name:"",difficulty:"",duration:"",season:"",idCountries:c.props.country.id,namesCountries:[],review:"",redirection:!1,nameCountry:c.props.country.name},c}return Object(j.a)(n,[{key:"render",value:function(){for(var e=this.state,t=e.name,n=e.difficulty,c=e.season,a=e.duration,r=e.review,i=e.idCountries,o=e.redirection,l=e.nameCountry,u=[],d=0;d<24;d++)u.push(d);return o?Object(J.jsx)(s.a,{to:"/countries/".concat(i)}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("p",{className:"createActivity",children:["Create Activity for ",l," "]}),Object(J.jsxs)("div",{className:"",children:[Object(J.jsxs)("form",{className:"formulario row g-2 justify-content-evenly",onSubmit:this.handlerSubmit,children:[Object(J.jsxs)("div",{className:"col-md-4 col-sm-12 m-1",children:[Object(J.jsxs)("label",{htmlFor:"name",className:"form-label",children:[Object(J.jsx)("p",{children:"Name"}),"    "]}),Object(J.jsx)("input",{className:"form-control form-control-sm",id:"name",type:"text",value:t,onChange:this.handlerChangeName,required:!0})]}),Object(J.jsxs)("div",{className:"col-md-2 col-sm-3  m-1",children:[Object(J.jsx)("label",{htmlFor:"difficulty",className:"form-label",children:Object(J.jsx)("p",{children:"Difficulty"})}),Object(J.jsxs)("select",{className:"form-select form-select-sm",name:"difficulty",id:"difficulty",value:n,onChange:this.handlerChange,required:!0,children:[Object(J.jsx)("option",{className:"option",children:"Select option..."}),[1,2,3,4,5].map((function(e,t){return Object(J.jsx)("option",{value:e.value,children:e},t)}))]})]}),Object(J.jsxs)("div",{className:"col-md-2 col-sm-3 m-1 ps-5 pi-5",children:[Object(J.jsxs)("label",{htmlFor:"duration",className:"form-label",children:[Object(J.jsx)("p",{children:"Hours"}),"   "]}),Object(J.jsxs)("select",{className:"form-select form-select-sm",name:"duration",id:"duration",value:a,onChange:this.handlerChange,required:!0,children:[Object(J.jsx)("option",{children:" "}),u.map((function(e,t){return Object(J.jsx)("option",{value:e.value,children:e},t)}))]})]}),Object(J.jsxs)("div",{className:"col-md-2 col-sm-3 m-1",children:[Object(J.jsx)("label",{htmlFor:"season",className:"form-label",children:Object(J.jsx)("p",{children:"Season"})}),Object(J.jsxs)("select",{className:"form-select form-select-sm",type:"text",name:"season",id:"season",value:c,onChange:this.handlerChange,required:!0,children:[Object(J.jsx)("option",{children:" "}),["Summer","Autumn","Winter","Spring"].map((function(e,t){return Object(J.jsx)("option",{value:e.value,children:e},t)}))]})]}),Object(J.jsxs)("div",{className:"reviewForm row ",children:[Object(J.jsxs)("label",{className:"form-label col-lg-2 col-sm-12",htmlFor:"review",children:[" ",Object(J.jsx)("p",{children:"Review "})]}),Object(J.jsx)("textarea",{className:"form-control col-lg-10 col-sm-12",type:"text",id:"review",value:r,placeholder:"Review",onChange:this.handlerReview}),Object(J.jsxs)("div",{className:" d-flex justify-content-between m-2",children:[Object(J.jsx)("button",{className:"btn btn-sm btn-outline-warning",onClick:this.handlerClean,children:"Clear"}),Object(J.jsx)("button",{className:"btn btn-sm btn-outline-success",type:"submit",children:"Add Activity"})]})]})]}),Object(J.jsx)("div",{className:"d-flex justify-content-center mt-2",children:Object(J.jsx)(W.b,{to:"/",children:Object(J.jsx)("button",{className:"btn btn-sm btn-outline-light",children:"Back to Home"})})})]})]})}}]),n}(a.a.Component)),je=Object(h.b)((function(e){return{country:e.country,flagActivity:e.flagActivity}}),(function(e){return{createActivity:function(t){return e(F(t))}}}))(de),be=(n(90),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).componentDidMount=Object(u.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.props.getAllCountries();case 2:return e.next=4,c.props.getallidCountries();case 4:case"end":return e.stop()}}),e)}))),c.handlerClean=function(){c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{name:"",difficulty:"",duration:"",season:"",idCountries:[],namesCountries:[],review:"",redirection:!1}))},c.handlerChangeName=function(e){var t=e.target.value;c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{name:t}))},c.handlerReview=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{review:n}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.handlerAddCountry=function(e){var t=e.target.value,n=c.props.countries.filter((function(e){return e.id===t}));c.state.idCountries.includes(t)||c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{idCountries:[].concat(Object(o.a)(c.state.idCountries),[t]),namesCountries:[].concat(Object(o.a)(c.state.namesCountries),[n[0].name])}))},c.handlerDeleteCountry=function(e){e.preventDefault();var t=c.state.namesCountries.filter((function(t){return t!==e.target.value}));c.setState({namesCountries:t})},c.handlerChange=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var n,a,r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target,a=n.value,r=n.name,e.next=4,c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},Object(Q.a)({},r,a)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.handlerSubmit=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var n,a,r,i,s,o,u,d;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=c.state,a=n.name,r=n.difficulty,i=n.duration,s=n.season,o=n.idCountries,u=n.review,d=c.props.createActivity({name:a,difficulty:r,duration:i,season:s,idCountries:o,review:u}),c.handlerClean(),d&&c.setState(Object(ee.a)(Object(ee.a)({},c.state),{},{redirection:!0}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.state={name:"",difficulty:0,duration:0,season:"",idCountries:[],namesCountries:[],review:""},c}return Object(j.a)(n,[{key:"render",value:function(){for(var e=this,t=this.state,n=t.name,c=t.difficulty,a=t.season,r=t.duration,i=t.namesCountries,o=t.review,l=t.redirection,u=this.props,d=u.storeIdCountries,j=u.countries.map((function(e){return{name:e.name,id:e.id}})),b=[],m=0;m<12;m++)b.push(m);return l?Object(J.jsx)(s.a,{to:"/"}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("p",{className:"createActivity",children:"Create Activity"}),Object(J.jsxs)("form",{className:"formulario row g-2 ",onSubmit:this.handlerSubmit,children:[Object(J.jsxs)("div",{className:"row justify-content-evenly",children:[Object(J.jsxs)("div",{className:"col-md-4 col-sm-12 m-1",children:[Object(J.jsxs)("label",{htmlFor:"name",className:"form-label",children:[Object(J.jsx)("p",{children:"Name"}),"    "]}),Object(J.jsx)("input",{className:"form-control form-control-sm",id:"name",type:"text",value:n,onChange:this.handlerChangeName,required:!0})]}),Object(J.jsxs)("div",{className:"col-md-2 col-sm-3  m-1",children:[Object(J.jsx)("label",{htmlFor:"difficulty",className:"form-label",children:Object(J.jsx)("p",{children:"Difficulty"})}),Object(J.jsxs)("select",{className:"form-select form-select-sm",name:"difficulty",id:"difficulty",value:c,onChange:this.handlerChange,required:!0,children:[Object(J.jsx)("option",{className:"option",children:"Select option..."}),[1,2,3,4,5].map((function(e,t){return Object(J.jsx)("option",{value:e.value,children:e},t)}))]})]}),Object(J.jsxs)("div",{className:"col-md-2 col-sm-3 m-1 ps-5 pi-5",children:[Object(J.jsxs)("label",{htmlFor:"duration",className:"form-label",children:[Object(J.jsx)("p",{children:"Hours"}),"   "]}),Object(J.jsxs)("select",{className:"form-select form-select-sm",name:"duration",id:"duration",value:r,onChange:this.handlerChange,required:!0,children:[Object(J.jsx)("option",{children:" "}),b.map((function(e,t){return Object(J.jsx)("option",{value:e.value,children:e},t)}))]})]}),Object(J.jsxs)("div",{className:"col-md-2 col-sm-3 m-1",children:[Object(J.jsx)("label",{htmlFor:"season",className:"form-label",children:Object(J.jsx)("p",{children:"Season"})}),Object(J.jsxs)("select",{className:"form-select form-select-sm",type:"text",name:"season",id:"season",value:a,onChange:this.handlerChange,required:!0,children:[Object(J.jsx)("option",{children:" "}),["Summer","Autumn","Winter","Spring"].map((function(e,t){return Object(J.jsx)("option",{value:e.value,children:e},t)}))]})]})]}),Object(J.jsxs)("div",{className:"reviewForm p-3",children:[Object(J.jsxs)("label",{className:"form-label col-lg-2 col-sm-12",htmlFor:"review",children:[" ",Object(J.jsx)("p",{children:"Review "})]}),Object(J.jsx)("textarea",{className:"form-control  col-lg-8 col-sm-12",type:"text",id:"review",value:o,placeholder:"Review",onChange:this.handlerReview})]}),Object(J.jsxs)("div",{className:"col-lg-2 col-md-12 col-sm-12 m-3",children:[Object(J.jsxs)("label",{className:"form-label ",htmlFor:"countries",children:["    ",Object(J.jsx)("p",{children:"Select Countries to create activity:"}),"   "]}),Object(J.jsx)("select",{className:"form-select form-select-sm  ",type:"text",id:"idCountries",name:"countries",value:d,onChange:this.handlerAddCountry,required:!0,children:j.map((function(e,t){return Object(J.jsx)("option",{value:e.id,children:e.name},t)}))})]}),Object(J.jsxs)("div",{className:"box col-lg-9 col-md-12 col-sm-12 m-3",children:[Object(J.jsx)("h2",{children:"Countries selected:"}),Object(J.jsx)("div",{className:"arrCountriesToCreate",children:i.map((function(t,n){return Object(J.jsxs)("button",{className:"btn btn-sm btn-outline-warning",value:t,onClick:e.handlerDeleteCountry,children:["  \xa0",t,"\xa0X"]},n)}))})]}),Object(J.jsx)("div",{className:"row m-1",children:Object(J.jsxs)("div",{className:" d-flex justify-content-between mt-3 mb-2",children:[Object(J.jsx)("button",{className:"btn btn-sm btn-outline-warning",onClick:this.handlerClean,children:"Clear"}),Object(J.jsx)("button",{className:"btn btn-sm btn-outline-success",type:"submit",children:"Add Activity"})]})})]}),Object(J.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(J.jsx)(W.b,{to:"/",children:Object(J.jsx)("button",{className:"btn btn-sm btn-outline-light",children:"Back to Home"})})})]})}}]),n}(a.a.Component)),me=Object(h.b)((function(e){return{country:e.country,countries:e.countries,storeIdCountries:e.storeIdCountries,activities:e.activities}}),(function(e){return{createActivity:function(t){return e(F(t))},getAllCountries:function(){return e(C())},getallidCountries:function(){return e(Y())},cleanFilters:function(){return e(H())},getActivities:function(){return e(S())},clearFilters:function(){return e(H())}}}))(be);var he=function(){return Object(J.jsxs)("div",{className:"container APP",children:[Object(J.jsx)("h1",{children:"App Country Finder"}),Object(J.jsxs)("div",{className:"row top",children:[Object(J.jsx)("div",{className:"left col-12 col-sm-12 col-md-3 col-lg-3",children:Object(J.jsx)(s.b,{exact:!0,path:"/",component:ae})}),Object(J.jsxs)("div",{className:"right col-12 col-sm-12 col-md-9 col-lg-9",children:[Object(J.jsx)(s.b,{exact:!0,path:"/",component:$}),Object(J.jsx)(s.b,{exact:!0,path:"/",component:X})]})]}),Object(J.jsx)(s.b,{exact:!0,path:"/countries/:id",component:ue}),Object(J.jsx)(s.b,{exact:!0,path:"/addActivity",component:je}),Object(J.jsx)(s.b,{exact:!0,path:"/createMultipleActivity",component:me})]})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},pe=n(48),fe=function(e,t){return t?e.filter((function(e){return e.continent===t})):e},ve=function(e,t){var n=[],c=[];if(void 0===e[0].activities)return[];for(var a=0;a<e.length;a++)if(e[a].activities.length)for(var r=0;r<e[a].activities.length;r++)e[a].activities[r].name===t&&(n.push(e[a]),c.includes(e[a].name)||c.push(e[a].name));for(var i=[],s=[],o=0,l=c;o<l.length;o++){var u,d=l[o],j=Object(pe.a)(n);try{for(j.s();!(u=j.n()).done;){var b=u.value;d!==b.name||i.includes(d)||(i.push(d),s.push(b))}}catch(m){j.e(m)}finally{j.f()}}return 0===s.length?[]:s},xe=function(e){for(var t=[],n=1;n<=Math.ceil(e.length/10);n++)t.push(n);return t},ge=function(e,t){var n=function(e){return e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}(e);return"ztoa"===t?n.reverse():n},ye=function(e,t){var n=e.sort((function(e,t){return t.population-e.population}));return"menor"===t?n.reverse():n},Ne=function(e){var t,n=[],c=Object(pe.a)(e);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.push(a.id)}}catch(r){c.e(r)}finally{c.f()}return n},Ce={countries:[],country:{},countriesFiltered:[],activities:[],pageNumbers:Array.from({length:25},(function(e,t){return t+1})),storeIdCountries:[],flag:!1,flagReset:!1,flagActivity:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ee.a)(Object(ee.a)({},e),{},{countries:t.payload,countriesFiltered:t.payload});case x:return Object(ee.a)(Object(ee.a)({},e),{},{countriesFiltered:t.payload,pageNumbers:xe(e.countriesFiltered)});case g:return Object(ee.a)(Object(ee.a)({},e),{},{country:t.payload});case P:return Object(ee.a)(Object(ee.a)({},e),{},{countriesFiltered:fe(e.countries,t.payload)});case y:return Object(ee.a)(Object(ee.a)({},e),{},{activities:t.payload});case k:return Object(ee.a)(Object(ee.a)({},e),{},{countriesFiltered:ve(e.countriesFiltered,t.payload)});case N:return Object(ee.a)(Object(ee.a)({},e),{},{activities:[].concat(Object(o.a)(e.activities),[t.payload])});case T:return Object(ee.a)(Object(ee.a)({},e),{},{pageNumbers:xe(e.countriesFiltered)});case E:return Object(ee.a)(Object(ee.a)({},e),{},{countriesFiltered:ge(e.countriesFiltered,t.payload),pageNumbers:xe(e.countriesFiltered)});case R:return Object(ee.a)(Object(ee.a)({},e),{},{country:{},countriesFiltered:e.countries,pageNumbers:Array.from({length:25},(function(e,t){return t+1})),flag:!1});case I:return Object(ee.a)(Object(ee.a)({},e),{},{countriesFiltered:ye(e.countriesFiltered,t.payload),pageNumbers:xe(e.countriesFiltered)});case D:return Object(ee.a)(Object(ee.a)({},e),{},{storeIdCountries:Ne(e.countries)});case _:return Object(ee.a)(Object(ee.a)({},e),{},{flag:t.payload});case L:return Object(ee.a)(Object(ee.a)({},e),{},{flagReset:t.payload});case G:return Object(ee.a)(Object(ee.a)({},e),{},{flagActivity:t.payload});default:return Object(ee.a)({},e)}},we=n(44),Se=n(61),Fe=n(62),Pe=Object(we.createStore)(Ae,Object(Se.composeWithDevTools)(Object(we.applyMiddleware)(Fe.a)));i.a.render(Object(J.jsx)(h.a,{store:Pe,children:Object(J.jsx)(W.a,{children:Object(J.jsx)(he,{})})}),document.getElementById("root")),Oe()}},[[91,1,2]]]);
//# sourceMappingURL=main.eddc3c4c.chunk.js.map