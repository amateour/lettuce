(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var n=new Map;n.set("Array",(function(e){return Array.isArray(e)})),n.set("String",(function(e){return"string"==typeof e})),n.set("Number",(function(e){return"number"==typeof e})),n.set("Object",(function(e){return e instanceof Object})),n.set("Browser",(function(){return"undefined"!=typeof window&&"[object Window]"==={}.toString.call(window)})),n.set("Browser",(function(){return void 0!==e.g&&"[object global]"==={}.toString.call(e.g)}));function t(e,n){"undefined"!=typeof window&&"[object Window]"==={}.toString.call(window)?function(e){throw e}(e):function(e,n){throw{statusCode:n,message:e.message,errors:e.errors}}(e,n)}function r(e){return n=this,r=void 0,u=function(){var n;return function(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,(function(r){return n={errors:[],message:"args_validation_successful"},e.length?(n.errors=e,n.message="args_validation_errors",t(n,400),[2]):[2,n]}))},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{s(u.next(e))}catch(e){t(e)}}function a(e){try{s(u.throw(e))}catch(e){t(e)}}function s(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}s((u=u.apply(n,r||[])).next())}));var n,r,o,u}var o=function(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}s((r=r.apply(e,n||[])).next())}))},u=function(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},i=function(e){return{message:"{key}_expected_data_type_{type}".replace("{key}",e.key).replace("{type}",e.type).toLowerCase()}},a=function(e,n,t){return"Array"===n.name?n.from(e):["String","Number","Object"].includes(n.name)?new n(e):n(e,t)};function s(e){var r=e.value,s=e.key,l=e.scheme;return o(this,void 0,void 0,(function(){var e,o,c,f;return u(this,(function(u){return e=l.type,o=l.strict,c=l.required,e?(f=e.name,c&&r&&function(e,r,o,u){var a,s=n.get(r);e&&s&&(s(u)||t({message:"args_validation_errors",errors:[(a={},a[o]=[i({key:o,type:r})],a)]},400))}(o,f,s,r),null==r?[2,r]:[2,a(r,e,l)]):(t({message:"".concat(s," => ").concat(r," no data type")},500),[2])}))}))}function l(e,n,t,r){return new Promise((function(o){var u=e.value,a=e.scheme,s=e.message,l=e.key;(function(e,n){switch(e){case"required":return function(e){var n=e.validValue,t=e.value;return!n||!!t||0===t}(n);case"min":return function(e){var n,t,r,o,u=e.type,i=e.validValue;return"number"==typeof e.value?(null!=i?i:0)>=(null!=i?i:0):(null!==(t=null!==(n=null==u?void 0:u.length)&&void 0!==n?n:0)&&void 0!==t?t:null!==(o=null===(r=null==u?void 0:u.toString())||void 0===r?void 0:r.length)&&void 0!==o?o:0)>=(null!=i?i:0)}(n);case"max":return function(e){var n,t,r,o,u=e.type,i=e.validValue,a=e.value;return"number"==typeof a?(null!=a?a:0)<=(null!=i?i:0):(null!==(t=null!==(n=null==u?void 0:u.length)&&void 0!==n?n:0)&&void 0!==t?t:null!==(o=null===(r=null==u?void 0:u.toString())||void 0===r?void 0:r.length)&&void 0!==o?o:0)<=(null!=i?i:0)}(n);case"validation":return(0,(t=n).validValue)(t.value);default:throw"non-specific validation function"}var t})(r,{validValue:t,value:u,type:n,scheme:a})||o(function(e,n){if(n.message&&e){if("string"==typeof n.message)return n.message;if(n.message[e])return n.message}switch(e){case"validation":return{message:"validation_custom"};case"required":return{message:"required_field"};case"min":return function(e){return{message:"minimum_characters",value:e.validValue}}(n);case"max":return function(e){return{message:"maximum_characters",value:e.validValue}}(n);case"strict":return i(n);default:throw"non-specific validation function: undefined response message"}}(r,{validValue:t,value:u,type:n,keyValid:r,keyMain:l,message:s})),o(!1)}))}function c(e,n){return o(this,void 0,void 0,(function(){var t,r,o;return u(this,(function(u){switch(u.label){case 0:return t=[],(r=e.scheme).required?[4,l(e,n,r.required,"required")]:[3,2];case 1:(o=u.sent())&&t.push(o),u.label=2;case 2:return r.min?[4,l(e,n,r.min,"min")]:[3,4];case 3:(o=u.sent())&&t.push(o),u.label=4;case 4:return r.max?[4,l(e,n,r.max,"max")]:[3,6];case 5:(o=u.sent())&&t.push(o),u.label=6;case 6:return r.validation?[4,l(e,n,r.validation,"validation")]:[3,8];case 7:(o=u.sent())&&t.push(o),u.label=8;case 8:return[2,t]}}))}))}function f(e){return o(this,void 0,void 0,(function(){return u(this,(function(n){return[2,!e.length]}))}))}function v(e){return o(this,void 0,void 0,(function(){var n,t,r;return u(this,(function(o){switch(o.label){case 0:return[4,s(e)];case 1:return n=o.sent(),[4,c(e,n)];case 2:return[4,f(t=o.sent())];case 3:return r=o.sent(),[2,{errors:t,success:r,value:n}]}}))}))}function h(e,n,t){var r,o=null!==(r=n.value)&&void 0!==r?r:e[t];return o instanceof Function?o():o}function p(e,n,r){var i,a;return o(this,void 0,void 0,(function(){var o,s,l,c,f,p,d,y,b,m;return u(this,(function(u){switch(u.label){case 0:for(f in o={},s={},l=[],r||t({message:"schemes is ".concat(r)},500),c=[],r)c.push(f);p=0,u.label=1;case 1:return p<c.length?(d=c[p],(y=null!==(i=r[d])&&void 0!==i?i:null)?[4,v({value:h(n,y,d),key:d,message:null!==(a=y.message)&&void 0!==a?a:null,scheme:y})]:[3,3]):[3,4];case 2:b=u.sent(),Object.defineProperty(o,d,{enumerable:!0,value:b}),Object.defineProperty(s,d,{enumerable:!0,value:e||!b.value?b.value:b.value.valueOf()}),b.errors.length&&l.push(((m={})[d]=b.errors,m)),u.label=3;case 3:return p++,[3,1];case 4:return[2,{argument:o,body:s,errors:l}]}}))}))}var d,y=function(){function e(){this.String=String,this.Number=Number,this.Array=Array,this.Boolean=Boolean,this.Object=Object}return e.String=String,e.Number=Number,e.Array=Array,e.Boolean=Boolean,e.Object=Object,e}(),b=(d=function(e,n){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},d(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}d(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),m=function(e){function n(n){var t=e.call(this)||this;return t.values=void 0,t.valueOf=!0,t.schemes=null!=n?n:null,t}return b(n,e),n.prototype.parserSchemes=function(e){var n;return function(e,n,t){return o=void 0,u=void 0,a=function(){var o,u;return function(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,(function(i){switch(i.label){case 0:return[4,p(null==e||e,null!=t?t:{},n)];case 1:return[4,r((o=i.sent()).errors)];case 2:return u=i.sent(),[2,{schemes:o.argument,args:o.body,errors:u.errors,message:u.message}]}}))},new((i=void 0)||(i=Promise))((function(e,n){function t(e){try{s(a.next(e))}catch(e){n(e)}}function r(e){try{s(a.throw(e))}catch(e){n(e)}}function s(n){var o;n.done?e(n.value):(o=n.value,o instanceof i?o:new i((function(e){e(o)}))).then(t,r)}s((a=a.apply(o,u||[])).next())}));var o,u,i,a}(this.valueOf,this.schemes,null!==(n=this.values)&&void 0!==n?n:e)},n.prototype.reset=function(){this.valueOf=!0,this.schemes=null,this.values=void 0},n}(y),g=function(){return g=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},g.apply(this,arguments)},w=new m,O=function(e){var n;w.schemes=Object.assign(null!==(n=w.schemes)&&void 0!==n?n:{},e)};!function(){function e(e){w.reset(),w.valueOf=null==e||e}e.prototype.parserSchemes=function(e){return(n=Object.entries(this),new Promise((function(e){e(Object.fromEntries(n))})).then((function(e){w.schemes=Object.assign(w.schemes,e)}))).then((function(){return w.parserSchemes(e)}));var n},e.prototype.addSchemes=function(e){O(e)},e.prototype.addScheme=function(e,n){var t;t=function(t){var r,o;if("string"==typeof n)t(((r={})[n]=e,r));else for(var u={},i=1;i<=n.length;i++)u=g(((o={})[n[i-1]]=e,o),u),i==n.length&&t(u)},new Promise((function(e){t(e)})).then((function(e){O(e)}))}}()})();
//# sourceMappingURL=index.es.mjs.map