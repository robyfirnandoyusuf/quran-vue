/*! For license information please see 815.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[815],{478:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".isHidden[data-v-33642ad4]{background-color:grey}",""]);const a=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},379:(t,e,r)=>{var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function s(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function c(t,e){for(var r={},n=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],u=r[c]||0,l="".concat(c," ").concat(u);r[c]=u+1;var d=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:m(f,e),references:1}),n.push(l)}return n}function u(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function h(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,v=0;function m(t,e){var r,n,o;if(e.singleton){var a=v++;r=p||(p=u(e)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=u(e),n=h.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=s(r[n]);i[o].references--}for(var a=c(t,e),u=0;u<r.length;u++){var l=s(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=a}}}},815:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),s=new E(n||[]);return a(i,"_invoke",{value:S(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function p(){}function v(){}function m(){}var y={};l(y,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(A([])));b&&b!==e&&r.call(b,s)&&(y=b);var w=m.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(a,i,s,c){var u=f(t[a],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==n(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),l(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(d(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),l(w,u,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}const i={name:"Detail",data:function(){return{dataAyat:[],dataSurah:[],nomor:null,selectedOption:"05",audio:"",audioFull:"",visible:!0}},mounted:function(){this.getAyat()},computed:{showSelectedOption:function(){console.log(this.selectedOption)}},watch:{selectedOption:function(){this.showSelectedOption}},methods:{getAyat:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get(e.url+"/api/v1/get-surah/"+e.$route.params.nomor).then((function(t){var r=JSON.parse(t.data.data).data.ayat;e.dataAyat=r,e.dataSurah=JSON.parse(t.data.data).data,e.nomor=e.$route.params.nomor,e.audioFull=e.dataSurah.audioFull[e.selectedOption]})).catch((function(t){console.log(t),e.dataAyat=[],e.dataSurah=[]}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()},toggleSoundAyat:function(t){var e=this.$refs["audioElm-"+t][0];e.paused&&document.querySelector(".toggle-sound-"+t).classList.contains("paused")?(console.log("play it"),e.play(),document.querySelector(".toggle-sound-"+t).classList.remove("paused")):(console.log("pause it"),e.pause(),document.querySelector(".toggle-sound-"+t).classList.add("paused")),e.onended=function(){document.querySelector(".toggle-sound-"+t).classList.add("paused")}},toggleSoundFull:function(){var t=this.$refs.audioElmFull;console.log(t),t.paused&&document.querySelector(".toggle-sound-full").classList.contains("paused")?(t.play(),t.addEventListener("ended",(function(){alert(1)})),document.querySelector(".toggle-sound-full").classList.remove("paused")):(console.log("pause it"),t.pause(),document.querySelector(".toggle-sound-full").classList.add("paused"))}}};var s=r(379),c=r.n(s),u=r(478),l={insert:"head",singleton:!1};c()(u.Z,l);u.Z.locals;const d=(0,r(900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"flex flex-wrap mt-2 bg-success"},[e("div",{staticClass:"col-12 p-1"},[e("div",{staticClass:"p-4 text-white dark:text-black"},[e("p",{staticClass:"h1 font-weight-bold mb-2 text-center"},[t._v(t._s(t.dataSurah.namaLatin)+" • "+t._s(t.dataSurah.nama))]),t._v(" "),e("p",{staticClass:"h6 text-center"},[t._v(t._s(t.dataSurah.tempatTurun)+" • "+t._s(t.dataSurah.arti)+" • "+t._s(t.dataSurah.jumlahAyat)+" Ayat")]),t._v(" "),e("p",{staticClass:"mt-5"},[e("audio",{ref:"audioElmFull",attrs:{src:t.audioFull}}),t._v(" "),e("button",{staticClass:"btn btn-outline-dark border-button-active-light hover-scale p-2 text-sm font-weight-bold toggle-sound-full paused bg-white",on:{click:function(e){return t.toggleSoundFull()}}},[t._v("▶️\n                        Audio")]),t._v(" "),e("router-link",{attrs:{to:{name:"tafsir",params:{nomor:t.nomor}},"exact-active-class":"exact-active"}},[e("button",{staticClass:"btn btn-light border-dark hover-scale p-2 text-sm font-weight-bold ml-1"},[t._v("📃Tafsir\n                        ")])]),t._v(" "),e("button",{staticClass:"btn btn-outline-dark border-button-active-light hover-scale p-2 text-sm font-weight-bold toggle-sound-full paused bg-white",on:{click:function(e){t.visible=!t.visible}}},[t._v("Tampilkan / Sembunyikan Lafadz Latin")])],1)])])]),t._v(" "),e("div",{staticClass:"d-flex flex-wrap mt-2 bg-primary-green-light bg-success"},[e("div",{staticClass:"w-100 p-1"},[e("div",{staticClass:"px-3 text-sm text-white"},[e("p",[t._v("\n                    Pilih Qari':\n                    "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedOption,expression:"selectedOption"}],staticClass:"form form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedOption=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"01"}},[t._v("Abdullah Al Juhany")]),t._v(" "),e("option",{attrs:{value:"02"}},[t._v("Abdul Muhsin Al Qasim")]),t._v(" "),e("option",{attrs:{value:"03"}},[t._v("Abdurrahman as Sudais")]),t._v(" "),e("option",{attrs:{value:"04"}},[t._v("Ibrahim Al Dossari")]),t._v(" "),e("option",{attrs:{value:"05"}},[t._v("Misyari Rasyid Al-Afasi")])])])])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.dataAyat,(function(r,n){return e("div",{key:n,staticClass:"col-md-12 mb-2"},[e("div",{staticClass:"p-4 bg-light border border-success"},[e("p",{staticClass:"mb-5 text-success"},[t._v(t._s(t.nomor)+":"+t._s(r.nomorAyat))]),t._v(" "),e("p",{staticClass:"text-end text-success"},[e("audio",{ref:"audioElm-"+n,refInFor:!0,attrs:{src:t.dataAyat[n].audio[t.selectedOption]}}),t._v(" "),e("button",{class:"teks-arab ml-auto toggle-sound-"+n+" paused",on:{click:function(e){return t.toggleSoundAyat(n)}}},[t._v(t._s(r.teksArab))])]),t._v(" "),t.visible?e("p",{staticClass:"text-end text-primary-hover-light text-sm font-semibold"},[t._v(t._s(r.teksLatin))]):t._e(),t._v(" "),t._m(2,!0),t._v(" "),e("p",{staticClass:"text-end text-primary-hover-light text-sm text-justify"},[t._v(t._s(r.teksIndonesia))])])])}))],2)}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex flex-wrap mt-2 bg-primary-green-light bg-success"},[t("div",{staticClass:"w-100 p-1"},[t("div",{staticClass:"px-3 text-sm text-white text-center"},[t("p",[this._v("Klik pada teks arab untuk mendengarkan audio per-ayat.")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"row mt-3 mb-2"},[t("div",{staticClass:"col-12 col-md-12 col-lg-12"},[t("div",{staticClass:"p-4 bg-light border border-success text-white text-center",staticStyle:{color:"black !important","font-size":"30px"}},[this._v("\n                بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"flex py-2 items-center"},[t("div",{staticClass:"flex-grow border-top border-success"})])}],!1,null,"33642ad4",null).exports}}]);