(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1OyB":function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",(function(){return n}))},"6SVQ":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t("1OyB"),r=t("vuIU"),i=t("Ji7U"),s=t("md7G"),c=t("foSv"),l=t("q1tI"),o=t.n(l),u=t("ZfN1"),m=[{name:"html",class:"item1",bar:"bar-100 cyan"},{name:"javascript",class:"item2",bar:"bar-75 yellow"},{name:"css",class:"item3",bar:"bar-100 magenta"},{name:"react",class:"item1",bar:"bar-75 cyan"},{name:"angular",class:"item2",bar:"bar-50 yellow"},{name:"jquery",class:"item3",bar:"bar-75 magenta"},{name:"python",class:"item1",bar:"bar-24 cyan"},{name:"bootstrap",class:"item2",bar:"bar-75 yellow"},{name:"dash",class:"item3",bar:"bar-25 magenta"},{name:"git",class:"item1",bar:"bar-75 cyan"},{name:"sass",class:"item2",bar:"bar-75 yellow"},{name:"gulp",class:"item3",bar:"bar-50 magenta"},{name:"node",class:"item1",bar:"bar-25 cyan"},{name:"typescript",class:"item2",bar:"bar-50 yellow"}],f=o.a.createElement;function d(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(c.a)(e);if(a){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(s.a)(this,t)}}var b=function(e){Object(i.a)(t,e);var a=d(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return f(u.a,{title:"Skills"},f("div",{className:"boxed skills"},f("div",{className:"items mb_hide"},m&&m.map((function(e,a){return f(o.a.Fragment,null,f("input",{key:a,type:"radio",name:"switch-skill",id:e.name}),f("span",null,f("label",{name:"switch-skill",htmlFor:e.name,className:"item ".concat(e.class," font-md")},e.name)))})),f("div",{className:"break"}),f("div",{className:"chart margin-auto top24"},f("div",{className:"bar bar-75 white"},f("div",{className:"face top"},f("div",{className:"growing-bar"})),f("div",{className:"face side-0"},f("div",{className:"growing-bar"})),f("div",{className:"face floor"},f("div",{className:"growing-bar"})),f("div",{className:"face side-a"}),f("div",{className:"face side-b"}),f("div",{className:"face side-1"},f("div",{className:"growing-bar"})))),f("div",{className:"info font-md light uppercase"},"click on the skills to see the level")),f("div",{className:"skills-levels default"},f("div",{className:"skills-box"},m&&m.map((function(e,a){return f("div",{className:"skill padding24"},f("span",{className:"light uppercase default"},e.name),f("div",null,f("div",{className:"chart2 margin-auto"},f("div",{className:"bar top16 ".concat(e.bar)},f("div",{className:"face"},f("div",{className:"growing-bar"}))))))}))))))}}]),t}(l.Component)},Ji7U:function(e,a,t){"use strict";function n(e,a){return(n=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&n(e,a)}t.d(a,"a",(function(){return r}))},OHfK:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n).a.createElement;a.a=function(){return r("ul",{id:"social-sidebar"},r("li",null,r("a",{href:"https://github.com/romanonatacha",target:"_blank"},r("i",{className:"icon fab fa-github"}),r("span",null,"Github"))),r("li",null,r("a",{href:"https://www.linkedin.com/in/natacha-romano/",target:"_blank"},r("i",{className:"icon fab fa-linkedin"}),r("span",null,"LinkedIn"))),r("li",null,r("a",{href:"mailto:natacharomanonr@gmil.com",target:"_blank"},r("i",{className:"icon fas fa-envelope"}),r("span",null,"Email"))))}},Qetd:function(e,a,t){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},ZfN1:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("OHfK"),s=r.a.createElement,c=function(){return s("footer",null,s("div",{className:"footer"},s("div",{className:"footer-content"},s("div",{className:"padding16"},"developed by",s("span",{className:"bold"},s("a",{href:"https://www.linkedin.com/in/natacha-romano/",target:"_blank"}," natacha romano"))),s("div",{className:"padding16 bold mb_hide"},"|"),s("div",{className:"padding16"},"powered by",s("span",{className:"bold"},s("a",{href:"https://trich.ai",target:"_blank"}," trich.ai"))))))},l=r.a.createElement;a.a=function(e){return l("div",null,l("div",{className:"base ".concat(e.pageClass)},l("div",{className:"base_left"},l("div",{className:"text-right padding32 font-xl x-bold white uppercase title"},e.title),l(i.a,null)),l("div",{className:"base_right"},l("div",{className:"mobile-title dt_hide tb_hide uppercase top64 text-center bold font-xl default"},e.title),l("div",{className:"minHeightScreen"},e.children),l(c,null))))}},foSv:function(e,a,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.d(a,"a",(function(){return n}))},md7G:function(e,a,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,a){return!a||"object"!==n(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}t.d(a,"a",(function(){return r}))},ofEh:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){return t("6SVQ")}])},vuIU:function(e,a,t){"use strict";function n(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}t.d(a,"a",(function(){return r}))}},[["ofEh",0,1]]]);