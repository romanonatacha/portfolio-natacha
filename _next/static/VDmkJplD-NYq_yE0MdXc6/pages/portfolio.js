(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3Mv1":function(a,t,e){"use strict";var i=e("q1tI"),n=e.n(i),o=e("wx14"),r=e("zLVn"),s=e("TSYQ"),l=e.n(s),c=e("vUet"),u=n.a.forwardRef((function(a,t){var e=a.bsPrefix,i=a.variant,s=a.pill,u=a.className,p=a.as,h=void 0===p?"span":p,d=Object(r.a)(a,["bsPrefix","variant","pill","className","as"]),f=Object(c.a)(e,"badge");return n.a.createElement(h,Object(o.a)({ref:t},d,{className:l()(u,f,s&&f+"-pill",i&&f+"-"+i)}))}));u.displayName="Badge",u.defaultProps={pill:!1};var p=u,h=n.a.createElement;t.a=function(a){var t=a.image,e=a.title,i=a.link,n=a.description,o=a.badges,r=a.git;return h("div",{className:"portfolio-card padding16"},h("div",{className:"padding16 radius8 card"},t&&h("a",{href:i,target:"_blank"},h("div",{className:"bottom16 portfolio-card-img"},h("img",{src:t,alt:e}))),h("div",{className:"portfolio-card-text bottom16"},e&&h("h4",{className:"font-sm bold uppercase"},e),n&&h("p",{className:"font-xs"},n)),h("div",{className:"font-xs flex_row_btw portfolio-card-footer"},h("div",null,o&&o.map((function(a,t){return h("div",{key:t,className:"inline-block"},h(p,{className:"mr-1 self_center badge padding4"},a))}))),r&&h("div",null,h("a",{href:r,target:"_blank"},h("i",{className:"fab fa-github font-sm git"}))))))}},AGzW:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return e("eAkX")}])},OHfK:function(a,t,e){"use strict";var i=e("q1tI"),n=e.n(i).a.createElement;t.a=function(){return n("ul",{id:"social-sidebar"},n("li",null,n("a",{href:"https://github.com/romanonatacha",target:"_blank"},n("i",{className:"icon fab fa-github"}),n("span",null,"Github"))),n("li",null,n("a",{href:"https://www.linkedin.com/in/natacha-romano/",target:"_blank"},n("i",{className:"icon fab fa-linkedin"}),n("span",null,"LinkedIn"))),n("li",null,n("a",{href:"https://www.upwork.com/fl/romanonatacha",target:"_blank"},n("i",{className:"icon fas fa-laptop-house"}),n("span",null,"upwork"))),n("li",null,n("a",{href:"mailto:natacharomanonr@gmil.com",target:"_blank"},n("i",{className:"icon fas fa-envelope"}),n("span",null,"Email"))))}},QA0p:function(a,t,e){"use strict";t.__esModule=!0,t.default=function(a,t){var e=void 0===t?{}:t,i=e.propTypes,o=e.defaultProps,r=e.allowFallback,s=void 0!==r&&r,l=e.displayName,c=void 0===l?a.name||a.displayName:l,u=function(t,e){return a(t,e)};return Object.assign(n.default.forwardRef||!s?n.default.forwardRef(u):function(a){return u(a,null)},{displayName:c,propTypes:i,defaultProps:o})};var i,n=(i=e("q1tI"))&&i.__esModule?i:{default:i}},Qetd:function(a,t,e){"use strict";var i=Object.assign.bind(Object);a.exports=i,a.exports.default=a.exports},TSYQ:function(a,t,e){var i;!function(){"use strict";var e={}.hasOwnProperty;function n(){for(var a=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)a.push(i);else if(Array.isArray(i)&&i.length){var r=n.apply(null,i);r&&a.push(r)}else if("object"===o)for(var s in i)e.call(i,s)&&i[s]&&a.push(s)}}return a.join(" ")}a.exports?(n.default=n,a.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(a.exports=i)}()},ZfN1:function(a,t,e){"use strict";var i=e("q1tI"),n=e.n(i),o=e("OHfK"),r=n.a.createElement,s=function(){return r("footer",null,r("div",{className:"footer"},r("div",{className:"footer-content"},r("div",{className:"padding16"},"developed by",r("span",{className:"bold"},r("a",{href:"https://www.linkedin.com/in/natacha-romano/",target:"_blank"}," natacha romano"))),r("div",{className:"padding16 bold mb_hide"},"|"),r("div",{className:"padding16"},"powered by",r("span",{className:"bold"},r("a",{href:"https://trich.ai",target:"_blank"}," trich.ai"))))))},l=n.a.createElement;t.a=function(a){return l("div",null,l("div",{className:"base ".concat(a.pageClass)},l("div",{className:"base_left"},l("div",{className:"text-right padding32 font-xl x-bold white uppercase title"},a.title),l(o.a,null)),l("div",{className:"base_right"},l("div",{className:"mobile-title dt_hide tb_hide uppercase top64 text-center bold font-xl default"},a.title),l("div",{className:"minHeightScreen"},a.children),l(s,null))))}},eAkX:function(a,t,e){"use strict";e.r(t);var i=e("q1tI"),n=e.n(i),o=e("ZfN1"),r=e("3Mv1"),s=[{image:"/images/trich.gif",title:"trich.ai",description:"Institutional website created for the company trich.ai.",link:"https://trich.ai",git:"https://github.com/romanonatacha/trich.ai",badges:["React","SASS","Materialize"]},{image:"/images/weather.gif",title:"Weather Forecast",description:"Personal weather forecasting project. The application makes a query in an API and returns the values of the weather forecast of the city that was consulted.",link:"https://romanonatacha.github.io/weather-forecast/",git:"https://github.com/romanonatacha/weather-forecast",badges:["React","SASS","Open Weather Map API"]},{image:"/images/artists.gif",title:"Artists Info",description:"Personal project. The application makes a query in an API of artists, and returns information about the artist that was consulted, such as hometown, musical genre, discography and biography.",link:"https://romanonatacha.github.io/artists-info",git:"https://github.com/romanonatacha/artists-info",badges:["React","SASS","The AudioDB API"]},{image:"/images/trich-p.gif",title:"trich.ai portfolio",description:"Portfolio built for the company trich.ai, to show the projects carried out by the company.",link:"https://trich-portfolio.herokuapp.com/",git:"https://github.com/romanonatacha/trich-portfolio",badges:["Python","Plotly Dash","CSS"]},{image:"/images/map.gif",title:"Vila Pompeia Food n' Bar",description:'Personal project. The application uses the Google Maps API and the Fousquare API, makes a query according to the neighborhood "Vila Pompeia", and returns the bars and restaurants in the region, also includes a filter to do the search by the name of the establishment.',link:"https://romanonatacha.github.io/vila-pompeia-map",git:"https://github.com/romanonatacha/vila-pompeia-map",badges:["React","Google Maps API","Foursquare API"]},{image:"/images/library.gif",title:"Dash trich components",description:"Open source library of UI components from the company trich.ai, to be used in Dash applications.",link:"https://romanonatacha.github.io/dash_trich_components/",git:"https://github.com/romanonatacha/dash_trich_components",badges:["Python","React","Plotly Dash"]},{image:"/images/shorturl.gif",title:"trich.ai shorturl",description:"URL shortening application.",link:"https://romanonatacha.github.io/url-shortening/",git:"https://github.com/romanonatacha/url-shortening",badges:[,"React","SASS","rel.ink API"]}],l=n.a.createElement;t.default=function(){return l(o.a,{title:"Portfolio"},l("div",{className:"portfolio boxed"},s&&s.map((function(a,t){return l(r.a,{key:t,image:a.image,title:a.title,description:a.description,link:a.link,badges:a.badges,git:a.git})}))))}},vUet:function(a,t,e){"use strict";e.d(t,"a",(function(){return r}));e("wx14"),e("QA0p");var i=e("q1tI"),n=e.n(i),o=n.a.createContext({});o.Consumer,o.Provider;function r(a,t){var e=Object(i.useContext)(o);return a||e[t]||t}},wx14:function(a,t,e){"use strict";function i(){return(i=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i])}return a}).apply(this,arguments)}e.d(t,"a",(function(){return i}))},zLVn:function(a,t,e){"use strict";function i(a,t){if(null==a)return{};var e,i,n={},o=Object.keys(a);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=a[e]);return n}e.d(t,"a",(function(){return i}))}},[["AGzW",0,1]]]);