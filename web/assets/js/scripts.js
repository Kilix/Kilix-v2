
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
!function(e,t){function n(e){var t=e.length,n=ot.type(e);return ot.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=ht[e]={};return ot.each(e.match(at)||[],function(e,n){t[n]=!0}),t}function i(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=ot.expando+Math.random()}function o(e,n,r){var i;if(r===t&&1===e.nodeType)if(i="data-"+n.replace(vt,"-$1").toLowerCase(),r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:yt.test(r)?JSON.parse(r):r}catch(o){}gt.set(e,n,r)}else r=t;return r}function s(){return!0}function a(){return!1}function u(){try{return X.activeElement}catch(e){}}function l(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function c(e,t,n){if(ot.isFunction(t))return ot.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return ot.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(jt.test(t))return ot.filter(t,e,n);t=ot.filter(t,e)}return ot.grep(e,function(e){return tt.call(t,e)>=0!==n})}function f(e,t){return ot.nodeName(e,"table")&&ot.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function d(e){var t=Wt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function h(e,t){for(var n=e.length,r=0;n>r;r++)mt.set(e[r],"globalEval",!t||mt.get(t[r],"globalEval"))}function g(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(mt.hasData(e)&&(o=mt.access(e),s=mt.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)ot.event.add(t,i,l[i][n])}gt.hasData(e)&&(a=gt.access(e),u=ot.extend({},a),gt.set(t,u))}}function m(e,n){var r=e.getElementsByTagName?e.getElementsByTagName(n||"*"):e.querySelectorAll?e.querySelectorAll(n||"*"):[];return n===t||n&&ot.nodeName(e,n)?ot.merge([e],r):r}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Pt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function v(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Zt.length;i--;)if(t=Zt[i]+n,t in e)return t;return r}function x(e,t){return e=t||e,"none"===ot.css(e,"display")||!ot.contains(e.ownerDocument,e)}function b(t){return e.getComputedStyle(t,null)}function w(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=mt.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&x(r)&&(o[s]=mt.access(r,"olddisplay",k(r.nodeName)))):o[s]||(i=x(r),(n&&"none"!==n||!i)&&mt.set(r,"olddisplay",i?n:ot.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function T(e,t,n){var r=Ut.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function C(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=ot.css(e,n+Kt[o],!0,i)),r?("content"===n&&(s-=ot.css(e,"padding"+Kt[o],!0,i)),"margin"!==n&&(s-=ot.css(e,"border"+Kt[o]+"Width",!0,i))):(s+=ot.css(e,"padding"+Kt[o],!0,i),"padding"!==n&&(s+=ot.css(e,"border"+Kt[o]+"Width",!0,i)));return s}function N(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=b(e),s=ot.support.boxSizing&&"border-box"===ot.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=It(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=s&&(ot.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+C(e,t,n||(s?"border":"content"),r,o)+"px"}function k(e){var t=X,n=Gt[e];return n||(n=E(e,t),"none"!==n&&n||(zt=(zt||ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(zt[0].contentWindow||zt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=E(e,t),zt.detach()),Gt[e]=n),n}function E(e,t){var n=ot(t.createElement(e)).appendTo(t.body),r=ot.css(n[0],"display");return n.remove(),r}function S(e,t,n,r){var i;if(ot.isArray(t))ot.each(t,function(t,i){n||tn.test(e)?r(e,i):S(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==ot.type(t))r(e,t);else for(i in t)S(e+"["+i+"]",t[i],n,r)}function j(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(at)||[];if(ot.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function D(e,t,n,r){function i(a){var u;return o[a]=!0,ot.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===xn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function A(e,n){var r,i,o=ot.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&ot.extend(!0,e,i),e}function L(e,n,r){for(var i,o,s,a,u=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)s=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){s=o;break}a||(a=o)}s=s||a}return s?(s!==l[0]&&l.unshift(s),r[s]):void 0}function q(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function H(){return setTimeout(function(){jn=t}),jn=ot.now()}function O(e,t,n){for(var r,i=(On[t]||[]).concat(On["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function F(e,t,n){var r,i,o=0,s=Hn.length,a=ot.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=jn||H(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:ot.extend({},t),opts:ot.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:jn||H(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ot.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(P(c,l.opts.specialEasing);s>o;o++)if(r=Hn[o].call(l,e,c,l.opts))return r;return ot.map(c,O,l),ot.isFunction(l.opts.start)&&l.opts.start.call(e,l),ot.fx.timer(ot.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function P(e,t){var n,r,i,o,s;for(n in e)if(r=ot.camelCase(n),i=t[r],o=e[n],ot.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=ot.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function R(e,n,r){var i,o,s,a,u,l,c=this,f={},p=e.style,d=e.nodeType&&x(e),h=mt.get(e,"fxshow");r.queue||(u=ot._queueHooks(e,"fx"),null==u.unqueued&&(u.unqueued=0,l=u.empty.fire,u.empty.fire=function(){u.unqueued||l()}),u.unqueued++,c.always(function(){c.always(function(){u.unqueued--,ot.queue(e,"fx").length||u.empty.fire()})})),1===e.nodeType&&("height"in n||"width"in n)&&(r.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===ot.css(e,"display")&&"none"===ot.css(e,"float")&&(p.display="inline-block")),r.overflow&&(p.overflow="hidden",c.always(function(){p.overflow=r.overflow[0],p.overflowX=r.overflow[1],p.overflowY=r.overflow[2]}));for(i in n)if(o=n[i],An.exec(o)){if(delete n[i],s=s||"toggle"===o,o===(d?"hide":"show")){if("show"!==o||!h||h[i]===t)continue;d=!0}f[i]=h&&h[i]||ot.style(e,i)}if(!ot.isEmptyObject(f)){h?"hidden"in h&&(d=h.hidden):h=mt.access(e,"fxshow",{}),s&&(h.hidden=!d),d?ot(e).show():c.done(function(){ot(e).hide()}),c.done(function(){var t;mt.remove(e,"fxshow");for(t in f)ot.style(e,t,f[t])});for(i in f)a=O(d?h[i]:0,i,c),i in h||(h[i]=a.start,d&&(a.end=a.start,a.start="width"===i||"height"===i?1:0))}}function M(e,t,n,r,i){return new M.prototype.init(e,t,n,r,i)}function W(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Kt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function $(e){return ot.isWindow(e)?e:9===e.nodeType&&e.defaultView}var B,I,// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
z=typeof t,_=e.location,X=e.document,U=X.documentElement,Y=e.jQuery,V=e.$,G={},J=[],Q="2.0.3",K=J.concat,Z=J.push,et=J.slice,tt=J.indexOf,nt=G.toString,rt=G.hasOwnProperty,it=Q.trim,ot=function(e,t){return new ot.fn.init(e,t,B)},st=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,at=/\S+/g,ut=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,lt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ct=/^-ms-/,ft=/-([\da-z])/gi,pt=function(e,t){return t.toUpperCase()},dt=function(){X.removeEventListener("DOMContentLoaded",dt,!1),e.removeEventListener("load",dt,!1),ot.ready()};ot.fn=ot.prototype={jquery:Q,constructor:ot,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ut.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof ot?n[0]:n,ot.merge(this,ot.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:X,!0)),lt.test(i[1])&&ot.isPlainObject(n))for(i in n)ot.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}return o=X.getElementById(i[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=X,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ot.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),ot.makeArray(e,this))},selector:"",length:0,toArray:function(){return et.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=ot.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ot.each(this,e,t)},ready:function(e){return ot.ready.promise().done(e),this},slice:function(){return this.pushStack(et.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(ot.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:Z,sort:[].sort,splice:[].splice},ot.fn.init.prototype=ot.fn,ot.extend=ot.fn.extend=function(){var e,n,r,i,o,s,a=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[1]||{},u=2),"object"==typeof a||ot.isFunction(a)||(a={}),l===u&&(a=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=a[n],i=e[n],a!==i&&(c&&i&&(ot.isPlainObject(i)||(o=ot.isArray(i)))?(o?(o=!1,s=r&&ot.isArray(r)?r:[]):s=r&&ot.isPlainObject(r)?r:{},a[n]=ot.extend(c,s,i)):i!==t&&(a[n]=i));return a},ot.extend({expando:"jQuery"+(Q+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===ot&&(e.$=V),t&&e.jQuery===ot&&(e.jQuery=Y),ot},isReady:!1,readyWait:1,holdReady:function(e){e?ot.readyWait++:ot.ready(!0)},ready:function(e){(e===!0?--ot.readyWait:ot.isReady)||(ot.isReady=!0,e!==!0&&--ot.readyWait>0||(I.resolveWith(X,[ot]),ot.fn.trigger&&ot(X).trigger("ready").off("ready")))},isFunction:function(e){return"function"===ot.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?G[nt.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==ot.type(e)||e.nodeType||ot.isWindow(e))return!1;try{if(e.constructor&&!rt.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||X;var r=lt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ot.buildFragment([e],t,i),i&&ot(i).remove(),ot.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var n,r;if(!e||"string"!=typeof e)return null;try{r=new DOMParser,n=r.parseFromString(e,"text/xml")}catch(i){n=t}return(!n||n.getElementsByTagName("parsererror").length)&&ot.error("Invalid XML: "+e),n},noop:function(){},globalEval:function(e){var t,n=eval;e=ot.trim(e),e&&(1===e.indexOf("use strict")?(t=X.createElement("script"),t.text=e,X.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ct,"ms-").replace(ft,pt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":it.call(e)},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ot.merge(r,"string"==typeof e?[e]:e):Z.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:tt.call(t,e,n)},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return K.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),ot.isFunction(e)?(i=et.call(arguments,2),o=function(){return e.apply(n||this,i.concat(et.call(arguments)))},o.guid=e.guid=e.guid||ot.guid++,o):t},access:function(e,n,r,i,o,s,a){var u=0,l=e.length,c=null==r;if("object"===ot.type(r)){o=!0;for(u in r)ot.access(e,n,u,r[u],!0,s,a)}else if(i!==t&&(o=!0,ot.isFunction(i)||(a=!0),c&&(a?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(ot(e),n)})),n))for(;l>u;u++)n(e[u],r,a?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):s},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),ot.ready.promise=function(t){return I||(I=ot.Deferred(),"complete"===X.readyState?setTimeout(ot.ready):(X.addEventListener("DOMContentLoaded",dt,!1),e.addEventListener("load",dt,!1))),I.promise(t)},ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()}),B=ot(X),/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */
function(e,t){function n(e,t,n,r){var i,o,s,a,u,l,c,f,h,g;if((t?t.ownerDocument||t:$)!==q&&L(t),t=t||q,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(O&&!r){if(i=xt.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&M(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return et.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&C.getElementsByClassName&&t.getElementsByClassName)return et.apply(n,t.getElementsByClassName(s)),n}if(C.qsa&&(!F||!F.test(e))){if(f=c=W,h=t,g=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(l=p(e),(c=t.getAttribute("id"))?f=c.replace(Tt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",u=l.length;u--;)l[u]=f+d(l[u]);h=dt.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return et.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return w(e.replace(ct,"$1"),t,n,r)}function r(){function e(n,r){return t.push(n+=" ")>k.cacheLength&&delete e[t.shift()],e[n]=r}var t=[];return e}function i(e){return e[W]=!0,e}function o(e){var t=q.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function s(e,t){for(var n=e.split("|"),r=e.length;r--;)k.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function f(){}function p(e,t){var r,i,o,s,a,u,l,c=_[e+" "];if(c)return t?0:c.slice(0);for(a=e,u=[],l=k.preFilter;a;){(!r||(i=ft.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=pt.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ct," ")}),a=a.slice(r.length));for(s in k.filter)!(i=yt[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return t?a.length:a?n.error(e):_(e,u).slice(0)}function d(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l,c=B+" "+o;if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[W]||(t[W]={}),(u=l[r])&&u[0]===c){if((a=u[1])===!0||a===N)return a===!0}else if(u=l[r]=[c],u[1]=e(t,n,s)||N,u[1]===!0)return!0}}function g(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function y(e,t,n,r,o,s){return r&&!r[W]&&(r=y(r)),o&&!o[W]&&(o=y(o,s)),i(function(i,s,a,u){var l,c,f,p=[],d=[],h=s.length,g=i||b(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?g:m(g,p,e,a,u),v=n?o||(i?e:h||r)?[]:s:y;if(n&&n(y,v,a,u),r)for(l=m(v,d),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?nt.call(i,f):p[c])>-1&&(i[l]=!(s[l]=f))}}else v=m(v===s?v.splice(h,v.length):v),o?o(null,s,v,u):et.apply(s,v)})}function v(e){for(var t,n,r,i=e.length,o=k.relative[e[0].type],s=o||k.relative[" "],a=o?1:0,u=h(function(e){return e===t},s,!0),l=h(function(e){return nt.call(t,e)>-1},s,!0),c=[function(e,n,r){return!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>a;a++)if(n=k.relative[e[a].type])c=[h(g(c),n)];else{if(n=k.filter[e[a].type].apply(null,e[a].matches),n[W]){for(r=++a;i>r&&!k.relative[e[r].type];r++);return y(a>1&&g(c),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ct,"$1"),n,r>a&&v(e.slice(a,r)),i>r&&v(e=e.slice(r)),i>r&&d(e))}c.push(n)}return g(c)}function x(e,t){var r=0,o=t.length>0,s=e.length>0,a=function(i,a,u,l,c){var f,p,d,h=[],g=0,y="0",v=i&&[],x=null!=c,b=D,w=i||s&&k.find.TAG("*",c&&a.parentNode||a),T=B+=null==b?1:Math.random()||.1;for(x&&(D=a!==q&&a,N=r);null!=(f=w[y]);y++){if(s&&f){for(p=0;d=e[p++];)if(d(f,a,u)){l.push(f);break}x&&(B=T,N=++r)}o&&((f=!d&&f)&&g--,i&&v.push(f))}if(g+=y,o&&y!==g){for(p=0;d=t[p++];)d(v,h,a,u);if(i){if(g>0)for(;y--;)v[y]||h[y]||(h[y]=K.call(l));h=m(h)}et.apply(l,h),x&&!i&&h.length>0&&g+t.length>1&&n.uniqueSort(l)}return x&&(B=T,D=b),v};return o?i(a):a}function b(e,t,r){for(var i=0,o=t.length;o>i;i++)n(e,t[i],r);return r}function w(e,t,n,r){var i,o,s,a,u,l=p(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&C.getById&&9===t.nodeType&&O&&k.relative[o[1].type]){if(t=(k.find.ID(s.matches[0].replace(Ct,Nt),t)||[])[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=yt.needsContext.test(e)?0:o.length;i--&&(s=o[i],!k.relative[a=s.type]);)if((u=k.find[a])&&(r=u(s.matches[0].replace(Ct,Nt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return et.apply(n,r),n;break}}return j(e,l)(r,t,!O,n,dt.test(e)),n}var T,C,N,k,E,S,j,D,A,L,q,H,O,F,P,R,M,W="sizzle"+-new Date,$=e.document,B=0,I=0,z=r(),_=r(),X=r(),U=!1,Y=function(e,t){return e===t?(U=!0,0):0},V=typeof t,G=1<<31,J={}.hasOwnProperty,Q=[],K=Q.pop,Z=Q.push,et=Q.push,tt=Q.slice,nt=Q.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},rt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",it="[\\x20\\t\\r\\n\\f]",st="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",at=st.replace("w","w#"),ut="\\["+it+"*("+st+")"+it+"*(?:([*^$|!~]?=)"+it+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+at+")|)|)"+it+"*\\]",lt=":("+st+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ut.replace(3,8)+")*)|.*)\\)|)",ct=new RegExp("^"+it+"+|((?:^|[^\\\\])(?:\\\\.)*)"+it+"+$","g"),ft=new RegExp("^"+it+"*,"+it+"*"),pt=new RegExp("^"+it+"*([>+~]|"+it+")"+it+"*"),dt=new RegExp(it+"*[+~]"),ht=new RegExp("="+it+"*([^\\]'\"]*)"+it+"*\\]","g"),gt=new RegExp(lt),mt=new RegExp("^"+at+"$"),yt={ID:new RegExp("^#("+st+")"),CLASS:new RegExp("^\\.("+st+")"),TAG:new RegExp("^("+st.replace("w","w*")+")"),ATTR:new RegExp("^"+ut),PSEUDO:new RegExp("^"+lt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+it+"*(even|odd|(([+-]|)(\\d*)n|)"+it+"*(?:([+-]|)"+it+"*(\\d+)|))"+it+"*\\)|)","i"),bool:new RegExp("^(?:"+rt+")$","i"),needsContext:new RegExp("^"+it+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+it+"*((?:-\\d)?\\d*)"+it+"*\\)|)(?=[^-]|$)","i")},vt=/^[^{]+\{\s*\[native \w/,xt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/^(?:input|select|textarea|button)$/i,wt=/^h\d$/i,Tt=/'|\\/g,Ct=new RegExp("\\\\([\\da-f]{1,6}"+it+"?|("+it+")|.)","ig"),Nt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{et.apply(Q=tt.call($.childNodes),$.childNodes),Q[$.childNodes.length].nodeType}catch(kt){et={apply:Q.length?function(e,t){Z.apply(e,tt.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}S=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},C=n.support={},L=n.setDocument=function(e){var t=e?e.ownerDocument||e:$,n=t.defaultView;return t!==q&&9===t.nodeType&&t.documentElement?(q=t,H=t.documentElement,O=!S(t),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){L()}),C.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),C.getElementsByTagName=o(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),C.getElementsByClassName=o(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),C.getById=o(function(e){return H.appendChild(e).id=W,!t.getElementsByName||!t.getElementsByName(W).length}),C.getById?(k.find.ID=function(e,t){if(typeof t.getElementById!==V&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},k.filter.ID=function(e){var t=e.replace(Ct,Nt);return function(e){return e.getAttribute("id")===t}}):(delete k.find.ID,k.filter.ID=function(e){var t=e.replace(Ct,Nt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),k.find.TAG=C.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==V?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},k.find.CLASS=C.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==V&&O?t.getElementsByClassName(e):void 0},P=[],F=[],(C.qsa=vt.test(t.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||F.push("\\["+it+"*(?:value|"+rt+")"),e.querySelectorAll(":checked").length||F.push(":checked")}),o(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&F.push("[*^$]="+it+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(C.matchesSelector=vt.test(R=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){C.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),P.push("!=",lt)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),M=vt.test(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Y=H.compareDocumentPosition?function(e,n){if(e===n)return U=!0,0;var r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);return r?1&r||!C.sortDetached&&n.compareDocumentPosition(e)===r?e===t||M($,e)?-1:n===t||M($,n)?1:A?nt.call(A,e)-nt.call(A,n):0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,u=[e],l=[n];if(e===n)return U=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:A?nt.call(A,e)-nt.call(A,n):0;if(o===s)return a(e,n);for(r=e;r=r.parentNode;)u.unshift(r);for(r=n;r=r.parentNode;)l.unshift(r);for(;u[i]===l[i];)i++;return i?a(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},t):q},n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){if((e.ownerDocument||e)!==q&&L(e),t=t.replace(ht,"='$1']"),!(!C.matchesSelector||!O||P&&P.test(t)||F&&F.test(t)))try{var r=R.call(e,t);if(r||C.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return n(t,q,null,[e]).length>0},n.contains=function(e,t){return(e.ownerDocument||e)!==q&&L(e),M(e,t)},n.attr=function(e,n){(e.ownerDocument||e)!==q&&L(e);var r=k.attrHandle[n.toLowerCase()],i=r&&J.call(k.attrHandle,n.toLowerCase())?r(e,n,!O):t;return i===t?C.attributes||!O?e.getAttribute(n):(i=e.getAttributeNode(n))&&i.specified?i.value:null:i},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},n.uniqueSort=function(e){var t,n=[],r=0,i=0;if(U=!C.detectDuplicates,A=!C.sortStable&&e.slice(0),e.sort(Y),U){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return e},E=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=E(t);return n},k=n.selectors={cacheLength:50,createPseudo:i,match:yt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ct,Nt),e[3]=(e[4]||e[5]||"").replace(Ct,Nt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||n.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&n.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return yt.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&gt.test(r)&&(n=p(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ct,Nt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+it+")"+e+"("+it+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(i){var o=n.attr(i,e);return null==o?"!="===t:t?(o+="","="===t?o===r:"!="===t?o!==r:"^="===t?r&&0===o.indexOf(r):"*="===t?r&&o.indexOf(r)>-1:"$="===t?r&&o.slice(-r.length)===r:"~="===t?(" "+o+" ").indexOf(r)>-1:"|="===t?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&v){for(c=m[W]||(m[W]={}),l=c[e]||[],d=l[0]===B&&l[1],p=l[0]===B&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[B,d,p];break}}else if(v&&(l=(t[W]||(t[W]={}))[e])&&l[0]===B)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[W]||(f[W]={}))[e]=[B,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var r,o=k.pseudos[e]||k.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return o[W]?o(t):o.length>1?(r=[e,e,"",t],k.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var r,i=o(e,t),s=i.length;s--;)r=nt.call(e,i[s]),e[r]=!(n[r]=i[s])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=j(e.replace(ct,"$1"));return r[W]?i(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return n(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:i(function(e){return mt.test(e||"")||n.error("unsupported lang: "+e),e=e.replace(Ct,Nt).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!k.pseudos.empty(e)},header:function(e){return wt.test(e.nodeName)},input:function(e){return bt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},k.pseudos.nth=k.pseudos.eq;for(T in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[T]=u(T);for(T in{submit:!0,reset:!0})k.pseudos[T]=l(T);f.prototype=k.filters=k.pseudos,k.setFilters=new f,j=n.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=p(e)),n=t.length;n--;)o=v(t[n]),o[W]?r.push(o):i.push(o);o=X(e,x(i,r))}return o},C.sortStable=W.split("").sort(Y).join("")===W,C.detectDuplicates=U,L(),C.sortDetached=o(function(e){return 1&e.compareDocumentPosition(q.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||s("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),C.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||s("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||s(rt,function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),ot.find=n,ot.expr=n.selectors,ot.expr[":"]=ot.expr.pseudos,ot.unique=n.uniqueSort,ot.text=n.getText,ot.isXMLDoc=n.isXML,ot.contains=n.contains}(e);var ht={};ot.Callbacks=function(e){e="string"==typeof e?ht[e]||r(e):ot.extend({},e);var n,i,o,s,a,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=s||0,s=0,a=l.length,o=!0;l&&a>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;!function r(t){ot.each(t,function(t,n){var i=ot.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})}(arguments),o?a=l.length:n&&(s=t,f(n))}return this},remove:function(){return l&&ot.each(arguments,function(e,t){for(var n;(n=ot.inArray(t,l,n))>-1;)l.splice(n,1),o&&(a>=n&&a--,u>=n&&u--)}),this},has:function(e){return e?ot.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],a=0,this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!l||i&&!c||(t=t||[],t=[e,t.slice?t.slice():t],o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},ot.extend({Deferred:function(e){var t=[["resolve","done",ot.Callbacks("once memory"),"resolved"],["reject","fail",ot.Callbacks("once memory"),"rejected"],["notify","progress",ot.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ot.Deferred(function(n){ot.each(t,function(t,o){var s=o[0],a=ot.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&ot.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?ot.extend(e,r):r}},i={};// All done!
return r.pipe=r.then,ot.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=et.call(arguments),s=o.length,a=1!==s||e&&ot.isFunction(e.promise)?s:0,u=1===a?e:ot.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?et.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&ot.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}}),ot.support=function(t){var n=X.createElement("input"),r=X.createDocumentFragment(),i=X.createElement("div"),o=X.createElement("select"),s=o.appendChild(X.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=s.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!s.disabled,n=X.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,ot(function(){var n,r,o="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",s=X.getElementsByTagName("body")[0];s&&(n=X.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",ot.swap(s,null!=s.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(X.createElement("div")),r.style.cssText=i.style.cssText=o,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),s.removeChild(n))}),t):t}({});var gt,mt,yt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,vt=/([A-Z])/g;i.uid=1,i.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},i.prototype={key:function(e){if(!i.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=i.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,ot.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(ot.isEmptyObject(o))ot.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,n){var r=this.cache[this.key(e)];return n===t?r:r[n]},access:function(e,n,r){var i;return n===t||n&&"string"==typeof n&&r===t?(i=this.get(e,n),i!==t?i:this.get(e,ot.camelCase(n))):(this.set(e,n,r),r!==t?r:n)},remove:function(e,n){var r,i,o,s=this.key(e),a=this.cache[s];if(n===t)this.cache[s]={};else{ot.isArray(n)?i=n.concat(n.map(ot.camelCase)):(o=ot.camelCase(n),n in a?i=[n,o]:(i=o,i=i in a?[i]:i.match(at)||[])),r=i.length;for(;r--;)delete a[i[r]]}},hasData:function(e){return!ot.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},gt=new i,mt=new i,ot.extend({acceptData:i.accepts,hasData:function(e){return gt.hasData(e)||mt.hasData(e)},data:function(e,t,n){return gt.access(e,t,n)},removeData:function(e,t){gt.remove(e,t)},_data:function(e,t,n){return mt.access(e,t,n)},_removeData:function(e,t){mt.remove(e,t)}}),ot.fn.extend({data:function(e,n){var r,i,s=this[0],a=0,u=null;if(e===t){if(this.length&&(u=gt.get(s),1===s.nodeType&&!mt.get(s,"hasDataAttrs"))){for(r=s.attributes;a<r.length;a++)i=r[a].name,0===i.indexOf("data-")&&(i=ot.camelCase(i.slice(5)),o(s,i,u[i]));mt.set(s,"hasDataAttrs",!0)}return u}return"object"==typeof e?this.each(function(){gt.set(this,e)}):ot.access(this,function(n){var r,i=ot.camelCase(e);if(s&&n===t){if(r=gt.get(s,e),r!==t)return r;if(r=gt.get(s,i),r!==t)return r;if(r=o(s,i,t),r!==t)return r}else this.each(function(){var r=gt.get(this,i);gt.set(this,i,n),-1!==e.indexOf("-")&&r!==t&&gt.set(this,e,n)})},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){gt.remove(this,e)})}}),ot.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=mt.get(e,t),n&&(!r||ot.isArray(n)?r=mt.access(e,t,ot.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=ot.queue(e,t),r=n.length,i=n.shift(),o=ot._queueHooks(e,t),s=function(){ot.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return mt.get(e,n)||mt.access(e,n,{empty:ot.Callbacks("once memory").add(function(){mt.remove(e,[t+"queue",n])})})}}),ot.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?ot.queue(this[0],e):n===t?this:this.each(function(){var t=ot.queue(this,e,n);ot._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&ot.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ot.dequeue(this,e)})},delay:function(e,t){return e=ot.fx?ot.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=ot.Deferred(),s=this,a=this.length,u=function(){--i||o.resolveWith(s,[s])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";a--;)r=mt.get(s[a],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var xt,bt,wt=/[\t\r\n\f]/g,Tt=/\r/g,Ct=/^(?:input|select|textarea|button)$/i;ot.fn.extend({attr:function(e,t){return ot.access(this,ot.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ot.removeAttr(this,e)})},prop:function(e,t){return ot.access(this,ot.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ot.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(ot.isFunction(e))return this.each(function(t){ot(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(at)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(wt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=ot.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(ot.isFunction(e))return this.each(function(t){ot(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(at)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(wt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?ot.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ot.isFunction(e)?this.each(function(n){ot(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,r=0,i=ot(this),o=e.match(at)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===z||"boolean"===n)&&(this.className&&mt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":mt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(wt," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=ot.isFunction(e),this.each(function(r){var o;1===this.nodeType&&(o=i?e.call(this,r,ot(this).val()):e,null==o?o="":"number"==typeof o?o+="":ot.isArray(o)&&(o=ot.map(o,function(e){return null==e?"":e+""})),n=ot.valHooks[this.type]||ot.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=ot.valHooks[o.type]||ot.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(Tt,""):null==r?"":r)}}}),ot.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(ot.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ot.nodeName(n.parentNode,"optgroup"))){if(t=ot(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=ot.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=ot.inArray(ot(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===z?ot.prop(e,n,r):(1===s&&ot.isXMLDoc(e)||(n=n.toLowerCase(),i=ot.attrHooks[n]||(ot.expr.match.bool.test(n)?bt:xt)),r===t?i&&"get"in i&&null!==(o=i.get(e,n))?o:(o=ot.find.attr(e,n),null==o?t:o):null!==r?i&&"set"in i&&(o=i.set(e,r,n))!==t?o:(e.setAttribute(n,r+""),r):(ot.removeAttr(e,n),void 0))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(at);if(o&&1===e.nodeType)for(;n=o[i++];)r=ot.propFix[n]||n,ot.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!ot.support.radioValue&&"radio"===t&&ot.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,s,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return s=1!==a||!ot.isXMLDoc(e),s&&(n=ot.propFix[n]||n,o=ot.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||Ct.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),bt={set:function(e,t,n){return t===!1?ot.removeAttr(e,n):e.setAttribute(n,n),n}},ot.each(ot.expr.match.bool.source.match(/\w+/g),function(e,n){var r=ot.expr.attrHandle[n]||ot.find.attr;ot.expr.attrHandle[n]=function(e,n,i){var o=ot.expr.attrHandle[n],s=i?t:(ot.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return ot.expr.attrHandle[n]=o,s}}),ot.support.optSelected||(ot.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),ot.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ot.propFix[this.toLowerCase()]=this}),ot.each(["radio","checkbox"],function(){ot.valHooks[this]={set:function(e,t){return ot.isArray(t)?e.checked=ot.inArray(ot(e).val(),t)>=0:void 0}},ot.support.checkOn||(ot.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Nt=/^key/,kt=/^(?:mouse|contextmenu)|click/,Et=/^(?:focusinfocus|focusoutblur)$/,St=/^([^.]*)(?:\.(.+)|)$/;ot.event={global:{},add:function(e,n,r,i,o){var s,a,u,l,c,f,p,d,h,g,m,y=mt.get(e);if(y){for(r.handler&&(s=r,r=s.handler,o=s.selector),r.guid||(r.guid=ot.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof ot===z||e&&ot.event.triggered===e.type?t:ot.event.dispatch.apply(a.elem,arguments)},a.elem=e),n=(n||"").match(at)||[""],c=n.length;c--;)u=St.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),h&&(p=ot.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=ot.event.special[h]||{},f=ot.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ot.expr.match.needsContext.test(o),namespace:g.join(".")},s),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(h,a,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),ot.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=mt.hasData(e)&&mt.get(e);if(m&&(u=m.events)){for(t=(t||"").match(at)||[""],l=t.length;l--;)if(a=St.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=ot.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||ot.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)ot.event.remove(e,d+t[l],n,r,!0);ot.isEmptyObject(u)&&(delete m.handle,mt.remove(e,"events"))}},trigger:function(n,r,i,o){var s,a,u,l,c,f,p,d=[i||X],h=rt.call(n,"type")?n.type:n,g=rt.call(n,"namespace")?n.namespace.split("."):[];if(a=u=i=i||X,3!==i.nodeType&&8!==i.nodeType&&!Et.test(h+ot.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=h.indexOf(":")<0&&"on"+h,n=n[ot.expando]?n:new ot.Event(h,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=g.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:ot.makeArray(r,[n]),p=ot.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!ot.isWindow(i)){for(l=p.delegateType||h,Et.test(l+h)||(a=a.parentNode);a;a=a.parentNode)d.push(a),u=a;u===(i.ownerDocument||X)&&d.push(u.defaultView||u.parentWindow||e)}for(s=0;(a=d[s++])&&!n.isPropagationStopped();)n.type=s>1?l:p.bindType||h,f=(mt.get(a,"events")||{})[n.type]&&mt.get(a,"handle"),f&&f.apply(a,r),f=c&&a[c],f&&ot.acceptData(a)&&f.apply&&f.apply(a,r)===!1&&n.preventDefault();return n.type=h,o||n.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),r)!==!1||!ot.acceptData(i)||c&&ot.isFunction(i[h])&&!ot.isWindow(i)&&(u=i[c],u&&(i[c]=null),ot.event.triggered=h,i[h](),ot.event.triggered=t,u&&(i[c]=u)),n.result}},dispatch:function(e){e=ot.event.fix(e);var n,r,i,o,s,a=[],u=et.call(arguments),l=(mt.get(this,"events")||{})[e.type]||[],c=ot.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(a=ot.event.handlers.call(this,e,l),n=0;(o=a[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(s=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(s.namespace))&&(e.handleObj=s,e.data=s.data,i=((ot.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,s,a=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)s=n[r],o=s.selector+" ",i[o]===t&&(i[o]=s.needsContext?ot(o,this).index(l)>=0:ot.find(o,this,null,[l]).length),i[o]&&i.push(s);i.length&&a.push({elem:l,handlers:i})}return u<n.length&&a.push({elem:this,handlers:n.slice(u)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||X,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[ot.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=kt.test(i)?this.mouseHooks:Nt.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new ot.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=X),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==u()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===u()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&ot.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return ot.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=ot.extend(new ot.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ot.event.trigger(i,null,t):ot.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ot.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},ot.Event=function(e,t){return this instanceof ot.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?s:a):this.type=e,t&&ot.extend(this,t),this.timeStamp=e&&e.timeStamp||ot.now(),this[ot.expando]=!0,void 0):new ot.Event(e,t)},ot.Event.prototype={isDefaultPrevented:a,isPropagationStopped:a,isImmediatePropagationStopped:a,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=s,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=s,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=s,this.stopPropagation()}},ot.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){ot.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!ot.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ot.support.focusinBubbles||ot.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){ot.event.simulate(t,e.target,ot.event.fix(e),!0)};ot.event.special[t]={setup:function(){0===n++&&X.addEventListener(e,r,!0)},teardown:function(){0===--n&&X.removeEventListener(e,r,!0)}}}),ot.fn.extend({on:function(e,n,r,i,o){var s,u;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=a;else if(!i)return this;return 1===o&&(s=i,i=function(e){return ot().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=ot.guid++)),this.each(function(){ot.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ot(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=a),this.each(function(){ot.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){ot.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?ot.event.trigger(e,t,n,!0):void 0}});var jt=/^.[^:#\[\.,]*$/,Dt=/^(?:parents|prev(?:Until|All))/,At=ot.expr.match.needsContext,Lt={children:!0,contents:!0,next:!0,prev:!0};ot.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(ot(e).filter(function(){for(t=0;i>t;t++)if(ot.contains(r[t],this))return!0}));for(t=0;i>t;t++)ot.find(e,r[t],n);return n=this.pushStack(i>1?ot.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=ot(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(ot.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(c(this,e||[],!0))},filter:function(e){return this.pushStack(c(this,e||[],!1))},is:function(e){return!!c(this,"string"==typeof e&&At.test(e)?ot(e):e||[],!1).length},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=At.test(e)||"string"!=typeof e?ot(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&ot.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?ot.unique(o):o)},index:function(e){return e?"string"==typeof e?tt.call(ot(e),this[0]):tt.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?ot(e,t):ot.makeArray(e&&e.nodeType?[e]:e),r=ot.merge(this.get(),n);return this.pushStack(ot.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ot.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ot.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ot.dir(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return ot.dir(e,"nextSibling")},prevAll:function(e){return ot.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ot.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ot.dir(e,"previousSibling",n)},siblings:function(e){return ot.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ot.sibling(e.firstChild)},contents:function(e){return e.contentDocument||ot.merge([],e.childNodes)}},function(e,t){ot.fn[e]=function(n,r){var i=ot.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ot.filter(r,i)),this.length>1&&(Lt[e]||ot.unique(i),Dt.test(e)&&i.reverse()),this.pushStack(i)}}),ot.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ot.find.matchesSelector(r,e)?[r]:[]:ot.find.matches(e,ot.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){for(var i=[],o=r!==t;(e=e[n])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&ot(e).is(r))break;i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var qt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ht=/<([\w:]+)/,Ot=/<|&#?\w+;/,Ft=/<(?:script|style|link)/i,Pt=/^(?:checkbox|radio)$/i,Rt=/checked\s*(?:[^=]|=\s*.checked.)/i,Mt=/^$|\/(?:java|ecma)script/i,Wt=/^true\/(.*)/,$t=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Bt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Bt.optgroup=Bt.option,Bt.tbody=Bt.tfoot=Bt.colgroup=Bt.caption=Bt.thead,Bt.th=Bt.td,ot.fn.extend({text:function(e){return ot.access(this,function(e){return e===t?ot.text(this):this.empty().append((this[0]&&this[0].ownerDocument||X).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=f(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=f(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?ot.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||ot.cleanData(m(n)),n.parentNode&&(t&&ot.contains(n.ownerDocument,n)&&h(m(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ot.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return ot.clone(this,e,t)})},html:function(e){return ot.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t&&1===n.nodeType)return n.innerHTML;if("string"==typeof e&&!Ft.test(e)&&!Bt[(Ht.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(qt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(ot.cleanData(m(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=ot.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),ot(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=K.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,f=this,h=c-1,g=e[0],y=ot.isFunction(g);if(y||!(1>=c||"string"!=typeof g||ot.support.checkClone)&&Rt.test(g))return this.each(function(r){var i=f.eq(r);y&&(e[0]=g.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=ot.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=ot.map(m(r,"script"),p),s=o.length;c>l;l++)a=r,l!==h&&(a=ot.clone(a,!0,!0),s&&ot.merge(o,m(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,ot.map(o,d),l=0;s>l;l++)a=o[l],Mt.test(a.type||"")&&!mt.access(a,"globalEval")&&ot.contains(u,a)&&(a.src?ot._evalUrl(a.src):ot.globalEval(a.textContent.replace($t,"")))}return this}}),ot.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ot.fn[e]=function(e){for(var n,r=[],i=ot(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),ot(i[s])[t](n),Z.apply(r,n.get());return this.pushStack(r)}}),ot.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=ot.contains(e.ownerDocument,e);if(!(ot.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ot.isXMLDoc(e)))for(s=m(a),o=m(e),r=0,i=o.length;i>r;r++)y(o[r],s[r]);if(t)if(n)for(o=o||m(e),s=s||m(a),r=0,i=o.length;i>r;r++)g(o[r],s[r]);else g(e,a);return s=m(a,"script"),s.length>0&&h(s,!u&&m(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=0,f=e.length,p=t.createDocumentFragment(),d=[];f>c;c++)if(i=e[c],i||0===i)if("object"===ot.type(i))ot.merge(d,i.nodeType?[i]:i);else if(Ot.test(i)){for(o=o||p.appendChild(t.createElement("div")),s=(Ht.exec(i)||["",""])[1].toLowerCase(),a=Bt[s]||Bt._default,o.innerHTML=a[1]+i.replace(qt,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;ot.merge(d,o.childNodes),o=p.firstChild,o.textContent=""}else d.push(t.createTextNode(i));for(p.textContent="",c=0;i=d[c++];)if((!r||-1===ot.inArray(i,r))&&(u=ot.contains(i.ownerDocument,i),o=m(p.appendChild(i),"script"),u&&h(o),n))for(l=0;i=o[l++];)Mt.test(i.type||"")&&n.push(i);return p},cleanData:function(e){for(var n,r,o,s,a,u,l=ot.event.special,c=0;(r=e[c])!==t;c++){if(i.accepts(r)&&(a=r[mt.expando],a&&(n=mt.cache[a]))){if(o=Object.keys(n.events||{}),o.length)for(u=0;(s=o[u])!==t;u++)l[s]?ot.event.remove(r,s):ot.removeEvent(r,s,n.handle);mt.cache[a]&&delete mt.cache[a]}delete gt.cache[r[gt.expando]]}},_evalUrl:function(e){return ot.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),ot.fn.extend({wrapAll:function(e){var t;return ot.isFunction(e)?this.each(function(t){ot(this).wrapAll(e.call(this,t))}):(this[0]&&(t=ot(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return ot.isFunction(e)?this.each(function(t){ot(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ot(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ot.isFunction(e);return this.each(function(n){ot(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ot.nodeName(this,"body")||ot(this).replaceWith(this.childNodes)}).end()}});var It,zt,_t=/^(none|table(?!-c[ea]).+)/,Xt=/^margin/,Ut=new RegExp("^("+st+")(.*)$","i"),Yt=new RegExp("^("+st+")(?!px)[a-z%]+$","i"),Vt=new RegExp("^([+-])=("+st+")","i"),Gt={BODY:"block"},Jt={position:"absolute",visibility:"hidden",display:"block"},Qt={letterSpacing:0,fontWeight:400},Kt=["Top","Right","Bottom","Left"],Zt=["Webkit","O","Moz","ms"];ot.fn.extend({css:function(e,n){return ot.access(this,function(e,n,r){var i,o,s={},a=0;if(ot.isArray(n)){for(i=b(e),o=n.length;o>a;a++)s[n[a]]=ot.css(e,n[a],!1,i);return s}return r!==t?ot.style(e,n,r):ot.css(e,n)},e,n,arguments.length>1)},show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){x(this)?ot(this).show():ot(this).hide()})}}),ot.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=It(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,s,a,u=ot.camelCase(n),l=e.style;return n=ot.cssProps[u]||(ot.cssProps[u]=v(l,u)),a=ot.cssHooks[n]||ot.cssHooks[u],r===t?a&&"get"in a&&(o=a.get(e,!1,i))!==t?o:l[n]:(s=typeof r,"string"===s&&(o=Vt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ot.css(e,n)),s="number"),null==r||"number"===s&&isNaN(r)||("number"!==s||ot.cssNumber[u]||(r+="px"),ot.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),a&&"set"in a&&(r=a.set(e,r,i))===t||(l[n]=r)),void 0)}},css:function(e,n,r,i){var o,s,a,u=ot.camelCase(n);return n=ot.cssProps[u]||(ot.cssProps[u]=v(e.style,u)),a=ot.cssHooks[n]||ot.cssHooks[u],a&&"get"in a&&(o=a.get(e,!0,r)),o===t&&(o=It(e,n,i)),"normal"===o&&n in Qt&&(o=Qt[n]),""===r||r?(s=parseFloat(o),r===!0||ot.isNumeric(s)?s||0:o):o}}),It=function(e,n,r){var i,o,s,a=r||b(e),u=a?a.getPropertyValue(n)||a[n]:t,l=e.style;return a&&(""!==u||ot.contains(e.ownerDocument,e)||(u=ot.style(e,n)),Yt.test(u)&&Xt.test(n)&&(i=l.width,o=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=a.width,l.width=i,l.minWidth=o,l.maxWidth=s)),u},ot.each(["height","width"],function(e,t){ot.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&_t.test(ot.css(e,"display"))?ot.swap(e,Jt,function(){return N(e,t,r)}):N(e,t,r):void 0},set:function(e,n,r){var i=r&&b(e);return T(e,n,r?C(e,t,r,ot.support.boxSizing&&"border-box"===ot.css(e,"boxSizing",!1,i),i):0)}}}),ot(function(){ot.support.reliableMarginRight||(ot.cssHooks.marginRight={get:function(e,t){return t?ot.swap(e,{display:"inline-block"},It,[e,"marginRight"]):void 0}}),!ot.support.pixelPosition&&ot.fn.position&&ot.each(["top","left"],function(e,t){ot.cssHooks[t]={get:function(e,n){return n?(n=It(e,t),Yt.test(n)?ot(e).position()[t]+"px":n):void 0}}})}),ot.expr&&ot.expr.filters&&(ot.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},ot.expr.filters.visible=function(e){return!ot.expr.filters.hidden(e)}),ot.each({margin:"",padding:"",border:"Width"},function(e,t){ot.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Kt[r]+t]=o[r]||o[r-2]||o[0];return i}},Xt.test(e)||(ot.cssHooks[e+t].set=T)});var en=/%20/g,tn=/\[\]$/,nn=/\r?\n/g,rn=/^(?:submit|button|image|reset|file)$/i,on=/^(?:input|select|textarea|keygen)/i;
ot.fn.extend({serialize:function(){return ot.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ot.prop(this,"elements");return e?ot.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ot(this).is(":disabled")&&on.test(this.nodeName)&&!rn.test(e)&&(this.checked||!Pt.test(e))}).map(function(e,t){var n=ot(this).val();return null==n?null:ot.isArray(n)?ot.map(n,function(e){return{name:t.name,value:e.replace(nn,"\r\n")}}):{name:t.name,value:n.replace(nn,"\r\n")}}).get()}}),ot.param=function(e,n){var r,i=[],o=function(e,t){t=ot.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=ot.ajaxSettings&&ot.ajaxSettings.traditional),ot.isArray(e)||e.jquery&&!ot.isPlainObject(e))ot.each(e,function(){o(this.name,this.value)});else for(r in e)S(r,e[r],n,o);return i.join("&").replace(en,"+")},ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ot.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ot.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var sn,an,un=ot.now(),ln=/\?/,cn=/#.*$/,fn=/([?&])_=[^&]*/,pn=/^(.*?):[ \t]*([^\r\n]*)$/gm,dn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,hn=/^(?:GET|HEAD)$/,gn=/^\/\//,mn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,yn=ot.fn.load,vn={},xn={},bn="*/".concat("*");try{an=_.href}catch(wn){an=X.createElement("a"),an.href="",an=an.href}sn=mn.exec(an.toLowerCase())||[],ot.fn.load=function(e,n,r){if("string"!=typeof e&&yn)return yn.apply(this,arguments);var i,o,s,a=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u),e=e.slice(0,u)),ot.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),a.length>0&&ot.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){s=arguments,a.html(i?ot("<div>").append(ot.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){a.each(r,s||[e.responseText,t,e])}),this},ot.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ot.fn[t]=function(e){return this.on(t,e)}}),ot.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:an,type:"GET",isLocal:dn.test(sn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":bn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ot.parseJSON,"text xml":ot.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?A(A(e,ot.ajaxSettings),t):A(ot.ajaxSettings,e)},ajaxPrefilter:j(vn),ajaxTransport:j(xn),ajax:function(e,n){function r(e,n,r,a){var l,f,v,x,w,C=n;2!==b&&(b=2,u&&clearTimeout(u),i=t,s=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,r&&(x=L(p,T,r)),x=q(p,x,T,l),l?(p.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(ot.lastModified[o]=w),w=T.getResponseHeader("etag"),w&&(ot.etag[o]=w)),204===e||"HEAD"===p.type?C="nocontent":304===e?C="notmodified":(C=x.state,f=x.data,v=x.error,l=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(n||C)+"",l?g.resolveWith(d,[f,C,T]):g.rejectWith(d,[T,C,v]),T.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[T,p,l?f:v]),m.fireWith(d,[T,C]),c&&(h.trigger("ajaxComplete",[T,p]),--ot.active||ot.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,s,a,u,l,c,f,p=ot.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?ot(d):ot.event,g=ot.Deferred(),m=ot.Callbacks("once memory"),y=p.statusCode||{},v={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=pn.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)y[t]=[y[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,p.url=((e||p.url||an)+"").replace(cn,"").replace(gn,sn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=ot.trim(p.dataType||"*").toLowerCase().match(at)||[""],null==p.crossDomain&&(l=mn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===sn[1]&&l[2]===sn[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(sn[3]||("http:"===sn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=ot.param(p.data,p.traditional)),D(vn,p,n,T),2===b)return T;c=p.global,c&&0===ot.active++&&ot.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!hn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(ln.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=fn.test(o)?o.replace(fn,"$1_="+un++):o+(ln.test(o)?"&":"?")+"_="+un++)),p.ifModified&&(ot.lastModified[o]&&T.setRequestHeader("If-Modified-Since",ot.lastModified[o]),ot.etag[o]&&T.setRequestHeader("If-None-Match",ot.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+bn+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===b))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=D(xn,p,n,T)){T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},p.timeout));try{b=1,i.send(v,r)}catch(C){if(!(2>b))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return ot.get(e,t,n,"json")},getScript:function(e,n){return ot.get(e,t,n,"script")}}),ot.each(["get","post"],function(e,n){ot[n]=function(e,r,i,o){return ot.isFunction(r)&&(o=o||i,i=r,r=t),ot.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),ot.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ot.globalEval(e),e}}}),ot.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ot.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=ot("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),X.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Tn=[],Cn=/(=)\?(?=&|$)|\?\?/;ot.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Tn.pop()||ot.expando+"_"+un++;return this[e]=!0,e}}),ot.ajaxPrefilter("json jsonp",function(n,r,i){var o,s,a,u=n.jsonp!==!1&&(Cn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Cn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=ot.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Cn,"$1"+o):n.jsonp!==!1&&(n.url+=(ln.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return a||ot.error(o+" was not called"),a[0]},n.dataTypes[0]="json",s=e[o],e[o]=function(){a=arguments},i.always(function(){e[o]=s,n[o]&&(n.jsonpCallback=r.jsonpCallback,Tn.push(o)),a&&ot.isFunction(s)&&s(a[0]),a=s=t}),"script"):void 0}),ot.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Nn=ot.ajaxSettings.xhr(),kn={0:200,1223:204},En=0,Sn={};e.ActiveXObject&&ot(e).on("unload",function(){for(var e in Sn)Sn[e]();Sn=t}),ot.support.cors=!!Nn&&"withCredentials"in Nn,ot.support.ajax=Nn=!!Nn,ot.ajaxTransport(function(e){var n;return ot.support.cors||Nn&&!e.crossDomain?{send:function(r,i){var o,s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(o in r)a.setRequestHeader(o,r[o]);n=function(e){return function(){n&&(delete Sn[s],n=a.onload=a.onerror=null,"abort"===e?a.abort():"error"===e?i(a.status||404,a.statusText):i(kn[a.status]||a.status,a.statusText,"string"==typeof a.responseText?{text:a.responseText}:t,a.getAllResponseHeaders()))}},a.onload=n(),a.onerror=n("error"),n=Sn[s=En++]=n("abort"),a.send(e.hasContent&&e.data||null)},abort:function(){n&&n()}}:void 0});var jn,Dn,An=/^(?:toggle|show|hide)$/,Ln=new RegExp("^(?:([+-])=|)("+st+")([a-z%]*)$","i"),qn=/queueHooks$/,Hn=[R],On={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Ln.exec(t),o=i&&i[3]||(ot.cssNumber[e]?"":"px"),s=(ot.cssNumber[e]||"px"!==o&&+r)&&Ln.exec(ot.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,ot.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};ot.Animation=ot.extend(F,{tweener:function(e,t){ot.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],On[n]=On[n]||[],On[n].unshift(t)},prefilter:function(e,t){t?Hn.unshift(e):Hn.push(e)}}),ot.Tween=M,M.prototype={constructor:M,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ot.cssNumber[n]?"":"px")},cur:function(){var e=M.propHooks[this.prop];return e&&e.get?e.get(this):M.propHooks._default.get(this)},run:function(e){var t,n=M.propHooks[this.prop];return this.pos=t=this.options.duration?ot.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):M.propHooks._default.set(this),this}},M.prototype.init.prototype=M.prototype,M.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ot.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ot.fx.step[e.prop]?ot.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ot.cssProps[e.prop]]||ot.cssHooks[e.prop])?ot.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},M.propHooks.scrollTop=M.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ot.each(["toggle","show","hide"],function(e,t){var n=ot.fn[t];ot.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(W(t,!0),e,r,i)}}),ot.fn.extend({fadeTo:function(e,t,n,r){return this.filter(x).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ot.isEmptyObject(e),o=ot.speed(t,n,r),s=function(){var t=F(this,ot.extend({},e),o);(i||mt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=ot.timers,s=mt.get(this);if(n)s[n]&&s[n].stop&&i(s[n]);else for(n in s)s[n]&&s[n].stop&&qn.test(n)&&i(s[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&ot.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=mt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ot.timers,s=r?r.length:0;for(n.finish=!0,ot.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ot.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ot.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ot.speed=function(e,t,n){var r=e&&"object"==typeof e?ot.extend({},e):{complete:n||!n&&t||ot.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ot.isFunction(t)&&t};return r.duration=ot.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ot.fx.speeds?ot.fx.speeds[r.duration]:ot.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){ot.isFunction(r.old)&&r.old.call(this),r.queue&&ot.dequeue(this,r.queue)},r},ot.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ot.timers=[],ot.fx=M.prototype.init,ot.fx.tick=function(){var e,n=ot.timers,r=0;for(jn=ot.now();r<n.length;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||ot.fx.stop(),jn=t},ot.fx.timer=function(e){e()&&ot.timers.push(e)&&ot.fx.start()},ot.fx.interval=13,ot.fx.start=function(){Dn||(Dn=setInterval(ot.fx.tick,ot.fx.interval))},ot.fx.stop=function(){clearInterval(Dn),Dn=null},ot.fx.speeds={slow:600,fast:200,_default:400},ot.fx.step={},ot.expr&&ot.expr.filters&&(ot.expr.filters.animated=function(e){return ot.grep(ot.timers,function(t){return e===t.elem}).length}),ot.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){ot.offset.setOffset(this,e,t)});var n,r,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return n=s.documentElement,ot.contains(n,i)?(typeof i.getBoundingClientRect!==z&&(o=i.getBoundingClientRect()),r=$(s),{top:o.top+r.pageYOffset-n.clientTop,left:o.left+r.pageXOffset-n.clientLeft}):o},ot.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=ot.css(e,"position"),f=ot(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=ot.css(e,"top"),u=ot.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),ot.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},ot.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===ot.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ot.nodeName(e[0],"html")||(r=e.offset()),r.top+=ot.css(e[0],"borderTopWidth",!0),r.left+=ot.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-ot.css(n,"marginTop",!0),left:t.left-r.left-ot.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||U;e&&!ot.nodeName(e,"html")&&"static"===ot.css(e,"position");)e=e.offsetParent;return e||U})}}),ot.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(n,r){var i="pageYOffset"===r;ot.fn[n]=function(o){return ot.access(this,function(n,o,s){var a=$(n);return s===t?a?a[r]:n[o]:(a?a.scrollTo(i?e.pageXOffset:s,i?s:e.pageYOffset):n[o]=s,void 0)},n,o,arguments.length,null)}}),ot.each({Height:"height",Width:"width"},function(e,n){ot.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){ot.fn[i]=function(i,o){var s=arguments.length&&(r||"boolean"!=typeof i),a=r||(i===!0||o===!0?"margin":"border");return ot.access(this,function(n,r,i){var o;return ot.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?ot.css(n,r,a):ot.style(n,r,i,a)},n,s?i:t,s,null)}})}),ot.fn.size=function(){return this.length},ot.fn.andSelf=ot.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=ot:"function"==typeof define&&define.amd&&define("jquery",[],function(){return ot}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=ot)}(window);
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);
window.JSON||(window.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var a,r,n,o,s,i=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,a=0;o>a;a+=1)s[a]=str(a,u)||"null";return n=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+i+"]":"["+s.join(",")+"]",gap=i,n}if(rep&&"object"==typeof rep)for(o=rep.length,a=0;o>a;a+=1)r=rep[a],"string"==typeof r&&(n=str(r,u),n&&s.push(quote(r)+(gap?": ":":")+n));else for(r in u)Object.hasOwnProperty.call(u,r)&&(n=str(r,u),n&&s.push(quote(r)+(gap?": ":":")+n));return n=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+i+"}":"{"+s.join(",")+"}",gap=i,n}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,a){var r;if(gap="",indent="","number"==typeof a)for(r=0;a>r;r+=1)indent+=" ";else"string"==typeof a&&(indent=a);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var a,r,n=e[t];if(n&&"object"==typeof n)for(a in n)Object.hasOwnProperty.call(n,a)&&(r=walk(n,a),void 0!==r?n[a]=r:delete n[a]);return reviver.call(e,t,n)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var a=e.History=e.History||{},r=e.jQuery;if("undefined"!=typeof a.Adapter)throw new Error("History.js Adapter has already been loaded...");a.Adapter={bind:function(e,t,a){r(e).bind(t,a)},trigger:function(e,t,a){r(e).trigger(t,a)},extractEventData:function(e,a,r){var n=a&&a.originalEvent&&a.originalEvent[e]||r&&r[e]||t;return n},onDomLoad:function(e){r(e)}},"undefined"!=typeof a.init&&a.init()}(window),function(e){"use strict";var t=e.document,a=e.setTimeout||a,r=e.clearTimeout||r,n=e.setInterval||n,o=e.History=e.History||{};if("undefined"!=typeof o.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){return"undefined"!=typeof o.initHtml4.initialized?!1:(o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t,a=o.getHashByIndex();return t=e===a},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return t="undefined"==typeof e?o.savedHashes[o.savedHashes.length-1]:0>e?o.savedHashes[o.savedHashes.length+e]:o.savedHashes[e]},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,a){var r,n=o.getHashByState(e);return r={discardedState:e,backState:a,forwardState:t},o.discardedStates[n]=r,!0},o.discardHash=function(e,t,a){var r={discardedHash:e,backState:a,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t,a=o.getHashByState(e);return t=o.discardedStates[a]||!1},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var a,r,s,i,u="";return o.isInternetExplorer()?(a="historyjs-iframe",r=t.createElement("iframe"),r.setAttribute("id",a),r.style.display="none",t.body.appendChild(r),r.contentWindow.document.open(),r.contentWindow.document.close(),s="",i=!1,o.checkerFunction=function(){if(i)return!1;i=!0;var t=o.getHash()||"",a=o.unescapeHash(r.contentWindow.document.location.hash)||"";return t!==u?(u=t,a!==t&&(s=a=t,r.contentWindow.document.open(),r.contentWindow.document.close(),r.contentWindow.document.location.hash=o.escapeHash(t)),o.Adapter.trigger(e,"hashchange")):a!==s&&(s=a,o.setHash(a,!1)),i=!1,!0}):o.checkerFunction=function(){var t=o.getHash();return t!==u&&(u=t,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(n(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(a){var r,n=a&&a.newURL||t.location.href,s=o.getHashByUrl(n),i=null,u=null;return o.isLastHash(s)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(s),s&&o.isTraditionalAnchor(s)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(s||t.location.href,!1),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(u=o.getHashByState(i),r=o.discardedState(i),r?(o.getHashByIndex(-2)===o.getHashByState(r.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,i.url,!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(a,r,n,s){if(o.getHashByUrl(n))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(s!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:s}),!1;o.busy(!0);var i=o.createStateObject(a,r,n),u=o.getHashByState(i),l=o.getState(!1),c=o.getHashByState(l),d=o.getHash();return o.storeState(i),o.expectedStateId=i.id,o.recycleState(i),o.setTitle(i),u===c?(o.busy(!1),!1):u!==d&&u!==o.getShortUrl(t.location.href)?(o.setHash(u,!1),!1):(o.saveState(i),o.Adapter.trigger(e,"statechange"),o.busy(!1),!0)},o.replaceState=function(e,t,a,r){if(o.getHashByUrl(a))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(r!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:r}),!1;o.busy(!0);var n=o.createStateObject(e,t,a),s=o.getState(!1),i=o.getStateByIndex(-2);return o.discardState(s,n,i),o.pushState(n.data,n.title,n.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")}),void 0)},"undefined"!=typeof o.init&&o.init()}(window),function(e,t){"use strict";var a=e.console||t,r=e.document,n=e.navigator,o=e.sessionStorage||!1,s=e.setTimeout,i=e.clearTimeout,u=e.setInterval,l=e.clearInterval,c=e.JSON,d=e.alert,p=e.History=e.History||{},f=e.history;if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,"undefined"!=typeof p.init)throw new Error("History.js Core has already been loaded...");p.init=function(){return"undefined"==typeof p.Adapter?!1:("undefined"!=typeof p.initCore&&p.initCore(),"undefined"!=typeof p.initHtml4&&p.initHtml4(),!0)},p.initCore=function(){if("undefined"!=typeof p.initCore.initialized)return!1;if(p.initCore.initialized=!0,p.options=p.options||{},p.options.hashChangeInterval=p.options.hashChangeInterval||100,p.options.safariPollInterval=p.options.safariPollInterval||500,p.options.doubleCheckInterval=p.options.doubleCheckInterval||500,p.options.storeInterval=p.options.storeInterval||1e3,p.options.busyDelay=p.options.busyDelay||250,p.options.debug=p.options.debug||!1,p.options.initialTitle=p.options.initialTitle||r.title,p.intervalList=[],p.clearAllIntervals=function(){var e,t=p.intervalList;if("undefined"!=typeof t&&null!==t){for(e=0;e<t.length;e++)l(t[e]);p.intervalList=null}},p.debug=function(){(p.options.debug||!1)&&p.log.apply(p,arguments)},p.log=function(){var e,t,n,o,s,i="undefined"!=typeof a&&"undefined"!=typeof a.log&&"undefined"!=typeof a.log.apply,u=r.getElementById("log");for(i?(o=Array.prototype.slice.call(arguments),e=o.shift(),"undefined"!=typeof a.debug?a.debug.apply(a,[e,o]):a.log.apply(a,[e,o])):e="\n"+arguments[0]+"\n",t=1,n=arguments.length;n>t;++t){if(s=arguments[t],"object"==typeof s&&"undefined"!=typeof c)try{s=c.stringify(s)}catch(l){}e+="\n"+s+"\n"}return u?(u.value+=e+"\n-----\n",u.scrollTop=u.scrollHeight-u.clientHeight):i||d(e),!0},p.getInternetExplorerMajorVersion=function(){var e=p.getInternetExplorerMajorVersion.cached="undefined"!=typeof p.getInternetExplorerMajorVersion.cached?p.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=r.createElement("div"),a=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&a[0];);return e>4?e:!1}();return e},p.isInternetExplorer=function(){var e=p.isInternetExplorer.cached="undefined"!=typeof p.isInternetExplorer.cached?p.isInternetExplorer.cached:Boolean(p.getInternetExplorerMajorVersion());return e},p.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(n.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(n.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8)},p.enabled=!p.emulated.pushState,p.bugs={setHash:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),safariPoll:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),ieDoubleCheck:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<7)},p.isEmptyObject=function(e){for(var t in e)return!1;return!0},p.cloneObject=function(e){var t,a;return e?(t=c.stringify(e),a=c.parse(t)):a={},a},p.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);return r.location.port&&(e+=":"+r.location.port),e+="/"},p.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,a="";return 1===e.length&&(t=e[0],a=t.href.replace(/[^\/]+$/,"")),a=a.replace(/\/+$/,""),a&&(a+="/"),a},p.getBaseUrl=function(){var e=p.getBaseHref()||p.getBasePageUrl()||p.getRootUrl();return e},p.getPageUrl=function(){var e,t=p.getState(!1,!1),a=(t||{}).url||r.location.href;return e=a.replace(/\/+$/,"").replace(/[^\/]+$/,function(e){return/\./.test(e)?e:e+"/"})},p.getBasePageUrl=function(){var e=r.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},p.getFullUrl=function(e,t){var a=e,r=e.substring(0,1);return t="undefined"==typeof t?!0:t,/[a-z]+\:\/\//.test(e)||(a="/"===r?p.getRootUrl()+e.replace(/^\/+/,""):"#"===r?p.getPageUrl().replace(/#.*/,"")+e:"?"===r?p.getPageUrl().replace(/[\?#].*/,"")+e:t?p.getBaseUrl()+e.replace(/^(\.\/)+/,""):p.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),a.replace(/\#$/,"")},p.getShortUrl=function(e){var t=e,a=p.getBaseUrl(),r=p.getRootUrl();return p.emulated.pushState&&(t=t.replace(a,"")),t=t.replace(r,"/"),p.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},p.store={},p.idToState=p.idToState||{},p.stateToId=p.stateToId||{},p.urlToId=p.urlToId||{},p.storedStates=p.storedStates||[],p.savedStates=p.savedStates||[],p.normalizeStore=function(){p.store.idToState=p.store.idToState||{},p.store.urlToId=p.store.urlToId||{},p.store.stateToId=p.store.stateToId||{}},p.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0);var a=p.getLastSavedState();return!a&&t&&(a=p.createStateObject()),e&&(a=p.cloneObject(a),a.url=a.cleanUrl||a.url),a},p.getIdByState=function(e){var t,a=p.extractId(e.url);if(!a)if(t=p.getStateString(e),"undefined"!=typeof p.stateToId[t])a=p.stateToId[t];else if("undefined"!=typeof p.store.stateToId[t])a=p.store.stateToId[t];else{for(;a=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"!=typeof p.idToState[a]||"undefined"!=typeof p.store.idToState[a];);p.stateToId[t]=a,p.idToState[a]=e}return a},p.normalizeState=function(e){var t,a;return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=p.getFullUrl(p.unescapeString(e.url||r.location.href)),t.hash=p.getShortUrl(t.url),t.data=p.cloneObject(e.data),t.id=p.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,a=!p.isEmptyObject(t.data),(t.title||a)&&(t.hash=p.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=p.getFullUrl(t.hash),(p.emulated.pushState||p.bugs.safariPoll)&&p.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},p.createStateObject=function(e,t,a){var r={data:e,title:t,url:a};return r=p.normalizeState(r)},p.getStateById=function(e){e=String(e);var a=p.idToState[e]||p.store.idToState[e]||t;return a},p.getStateString=function(e){var t,a,r;return t=p.normalizeState(e),a={data:t.data,title:e.title,url:e.url},r=c.stringify(a)},p.getStateId=function(e){var t,a;return t=p.normalizeState(e),a=t.id},p.getHashByState=function(e){var t,a;return t=p.normalizeState(e),a=t.hash},p.extractId=function(e){var t,a,r;return a=/(.*)\&_suid=([0-9]+)$/.exec(e),r=a?a[1]||e:e,t=a?String(a[2]||""):"",t||!1},p.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},p.extractState=function(e,t){var a,r,n=null;return t=t||!1,a=p.extractId(e),a&&(n=p.getStateById(a)),n||(r=p.getFullUrl(e),a=p.getIdByUrl(r)||!1,a&&(n=p.getStateById(a)),!n&&t&&!p.isTraditionalAnchor(e)&&(n=p.createStateObject(null,null,r))),n},p.getIdByUrl=function(e){var a=p.urlToId[e]||p.store.urlToId[e]||t;return a},p.getLastSavedState=function(){return p.savedStates[p.savedStates.length-1]||t},p.getLastStoredState=function(){return p.storedStates[p.storedStates.length-1]||t},p.hasUrlDuplicate=function(e){var t,a=!1;return t=p.extractState(e.url),a=t&&t.id!==e.id},p.storeState=function(e){return p.urlToId[e.url]=e.id,p.storedStates.push(p.cloneObject(e)),e},p.isLastSavedState=function(e){var t,a,r,n=!1;return p.savedStates.length&&(t=e.id,a=p.getLastSavedState(),r=a.id,n=t===r),n},p.saveState=function(e){return p.isLastSavedState(e)?!1:(p.savedStates.push(p.cloneObject(e)),!0)},p.getStateByIndex=function(e){var t=null;return t="undefined"==typeof e?p.savedStates[p.savedStates.length-1]:0>e?p.savedStates[p.savedStates.length+e]:p.savedStates[e]},p.getHash=function(){var e=p.unescapeHash(r.location.hash);return e},p.unescapeString=function(t){for(var a,r=t;a=e.unescape(r),a!==r;)r=a;return r},p.unescapeHash=function(e){var t=p.normalizeHash(e);return t=p.unescapeString(t)},p.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},p.setHash=function(e,t){var a,n,o;return t!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.setHash,args:arguments,queue:t}),!1):(a=p.escapeHash(e),p.busy(!0),n=p.extractState(e,!0),n&&!p.emulated.pushState?p.pushState(n.data,n.title,n.url,!1):r.location.hash!==a&&(p.bugs.setHash?(o=p.getPageUrl(),p.pushState(null,null,o+"#"+a,!1)):r.location.hash=a),p)},p.escapeHash=function(t){var a=p.normalizeHash(t);return a=e.escape(a),p.bugs.hashEscape||(a=a.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),a},p.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=p.unescapeHash(t)},p.setTitle=function(e){var t,a=e.title;a||(t=p.getStateByIndex(0),t&&t.url===e.url&&(a=t.title||p.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=a.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(n){}return r.title=a,p},p.queues=[],p.busy=function(e){if("undefined"!=typeof e?p.busy.flag=e:"undefined"==typeof p.busy.flag&&(p.busy.flag=!1),!p.busy.flag){i(p.busy.timeout);var t=function(){var e,a,r;if(!p.busy.flag)for(e=p.queues.length-1;e>=0;--e)a=p.queues[e],0!==a.length&&(r=a.shift(),p.fireQueueItem(r),p.busy.timeout=s(t,p.options.busyDelay))};p.busy.timeout=s(t,p.options.busyDelay)}return p.busy.flag},p.busy.flag=!1,p.fireQueueItem=function(e){return e.callback.apply(e.scope||p,e.args||[])},p.pushQueue=function(e){return p.queues[e.queue||0]=p.queues[e.queue||0]||[],p.queues[e.queue||0].push(e),p},p.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),p.busy()?p.pushQueue(e):p.fireQueueItem(e),p},p.clearQueue=function(){return p.busy.flag=!1,p.queues=[],p},p.stateChanged=!1,p.doubleChecker=!1,p.doubleCheckComplete=function(){return p.stateChanged=!0,p.doubleCheckClear(),p},p.doubleCheckClear=function(){return p.doubleChecker&&(i(p.doubleChecker),p.doubleChecker=!1),p},p.doubleCheck=function(e){return p.stateChanged=!1,p.doubleCheckClear(),p.bugs.ieDoubleCheck&&(p.doubleChecker=s(function(){return p.doubleCheckClear(),p.stateChanged||e(),!0},p.options.doubleCheckInterval)),p},p.safariStatePoll=function(){var t,a=p.extractState(r.location.href);if(!p.isLastSavedState(a))return t=a,t||(t=p.createStateObject()),p.Adapter.trigger(e,"popstate"),p},p.back=function(e){return e!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.back,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.back(!1)}),f.go(-1),!0)},p.forward=function(e){return e!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.forward,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.forward(!1)}),f.go(1),!0)},p.go=function(e,t){var a;if(e>0)for(a=1;e>=a;++a)p.forward(t);else{if(!(0>e))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(a=-1;a>=e;--a)p.back(t)}return p},p.emulated.pushState){var h=function(){};p.pushState=p.pushState||h,p.replaceState=p.replaceState||h}else p.onPopState=function(t,a){var n,o,s=!1,i=!1;return p.doubleCheckComplete(),n=p.getHash(),n?(o=p.extractState(n||r.location.href,!0),o?p.replaceState(o.data,o.title,o.url,!1):(p.Adapter.trigger(e,"anchorchange"),p.busy(!1)),p.expectedStateId=!1,!1):(s=p.Adapter.extractEventData("state",t,a)||!1,i=s?p.getStateById(s):p.expectedStateId?p.getStateById(p.expectedStateId):p.extractState(r.location.href),i||(i=p.createStateObject(null,null,r.location.href)),p.expectedStateId=!1,p.isLastSavedState(i)?(p.busy(!1),!1):(p.storeState(i),p.saveState(i),p.setTitle(i),p.Adapter.trigger(e,"statechange"),p.busy(!1),!0))},p.Adapter.bind(e,"popstate",p.onPopState),p.pushState=function(t,a,r,n){if(p.getHashByUrl(r)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&p.busy())return p.pushQueue({scope:p,callback:p.pushState,args:arguments,queue:n}),!1;p.busy(!0);var o=p.createStateObject(t,a,r);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,f.pushState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0},p.replaceState=function(t,a,r,n){if(p.getHashByUrl(r)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&p.busy())return p.pushQueue({scope:p,callback:p.replaceState,args:arguments,queue:n}),!1;p.busy(!0);var o=p.createStateObject(t,a,r);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,f.replaceState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0};if(o){try{p.store=c.parse(o.getItem("History.store"))||{}}catch(g){p.store={}}p.normalizeStore()}else p.store={},p.normalizeStore();p.Adapter.bind(e,"beforeunload",p.clearAllIntervals),p.Adapter.bind(e,"unload",p.clearAllIntervals),p.saveState(p.storeState(p.extractState(r.location.href,!0))),o&&(p.onUnload=function(){var e,t;try{e=c.parse(o.getItem("History.store"))||{}}catch(a){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in p.idToState)p.idToState.hasOwnProperty(t)&&(e.idToState[t]=p.idToState[t]);for(t in p.urlToId)p.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=p.urlToId[t]);for(t in p.stateToId)p.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=p.stateToId[t]);p.store=e,p.normalizeStore(),o.setItem("History.store",c.stringify(e))},p.intervalList.push(u(p.onUnload,p.options.storeInterval)),p.Adapter.bind(e,"beforeunload",p.onUnload),p.Adapter.bind(e,"unload",p.onUnload)),p.emulated.pushState||(p.bugs.safariPoll&&p.intervalList.push(u(p.safariStatePoll,p.options.safariPollInterval)),("Apple Computer, Inc."===n.vendor||"Mozilla"===(n.appCodeName||""))&&(p.Adapter.bind(e,"hashchange",function(){p.Adapter.trigger(e,"popstate")}),p.getHash()&&p.Adapter.onDomLoad(function(){p.Adapter.trigger(e,"hashchange")})))},p.init()}(window);
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(n){return e(n,t)}):e(t.jQuery,t)}(this,function(n,r){var o,i,l,s,c,a,u,f,h,d,p,v,y,w,g,m;return o=n(r),f=t.call(r,"ontouchstart")>=0,s={horizontal:{},vertical:{}},c=1,u={},a="waypoints-context-id",p="resize.waypoints",v="scroll.waypoints",y=1,w="waypoints-waypoint-ids",g="waypoint",m="waypoints",i=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+c++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},t.data(a,this.id),u[this.id]=this,t.bind(v,function(){var t;return e.didScroll||f?void 0:(e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},r.setTimeout(t,n[m].settings.scrollThrottle))}),t.bind(p,function(){var t;return e.didResize?void 0:(e.didResize=!0,t=function(){return n[m]("refresh"),e.didResize=!1},r.setTimeout(t,n[m].settings.resizeThrottle))})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!f||t.vertical.oldScroll&&t.vertical.newScroll||n[m]("refresh"),n.each(t,function(t,r){var o,i,l;return l=[],i=r.newScroll>r.oldScroll,o=i?r.forward:r.backward,n.each(e.waypoints[t],function(t,e){var n,o;return r.oldScroll<(n=e.offset)&&n<=r.newScroll?l.push(e):r.newScroll<(o=e.offset)&&o<=r.oldScroll?l.push(e):void 0}),l.sort(function(t,e){return t.offset-e.offset}),i||l.reverse(),n.each(l,function(t,e){return e.options.continuous||t===l.length-1?e.trigger([o]):void 0})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,r,o=this;return r=n.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},n.each(t,function(t,e){return n.each(o.waypoints[t],function(t,r){var o,i,l,s,c;return o=r.options.offset,l=r.offset,i=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp],n.isFunction(o)?o=o.apply(r.element):"string"==typeof o&&(o=parseFloat(o),r.options.offset.indexOf("%")>-1&&(o=Math.ceil(e.contextDimension*o/100))),r.offset=i-e.contextOffset+e.contextScroll-o,r.options.onlyOnScroll&&null!=l||!r.enabled?void 0:null!==l&&l<(s=e.oldScroll)&&s<=r.offset?r.trigger([e.backward]):null!==l&&l>(c=e.oldScroll)&&c>=r.offset?r.trigger([e.forward]):null===l&&e.oldScroll>=r.offset?r.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){return n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([p,v].join(" ")),delete u[this.id]):void 0},t}(),l=function(){function t(t,e,r){var o,i;r=n.extend({},n.fn[g].defaults,r),"bottom-in-view"===r.offset&&(r.offset=function(){var t;return t=n[m]("viewportHeight"),n.isWindow(e.element)||(t=e.$element.height()),t-n(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=r.horizontal?"horizontal":"vertical",this.callback=r.handler,this.context=e,this.enabled=r.enabled,this.id="waypoints"+y++,this.offset=null,this.options=r,e.waypoints[this.axis][this.id]=this,s[this.axis][this.id]=this,o=null!=(i=t.data(w))?i:[],o.push(this.id),t.data(w,o)}return t.prototype.trigger=function(t){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete s[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,r;return(r=n(t).data(w))?(e=n.extend({},s.horizontal,s.vertical),n.map(r,function(t){return e[t]})):[]},t}(),d={init:function(t,e){var r;return null==e&&(e={}),null==(r=e.handler)&&(e.handler=t),this.each(function(){var t,r,o,s;return t=n(this),o=null!=(s=e.context)?s:n.fn[g].defaults.context,n.isWindow(o)||(o=t.closest(o)),o=n(o),r=u[o.data(a)],r||(r=new i(o)),new l(t,r,e)}),n[m]("refresh"),this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){return e>0?t.push(n[e-1]):void 0})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){return e<n.length-1?t.push(n[e+1]):void 0})},_traverse:function(t,e,o){var i,l;return null==t&&(t="vertical"),null==e&&(e=r),l=h.aggregate(e),i=[],this.each(function(){var e;return e=n.inArray(this,l[t]),o(i,e,l[t])}),this.pushStack(i)},_invoke:function(t,e){return t.each(function(){var t;return t=l.getWaypointsByElement(this),n.each(t,function(t,n){return n[e](),!0})}),this}},n.fn[g]=function(){var t,r;return r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[r]?d[r].apply(this,t):n.isFunction(r)?d.init.apply(this,arguments):n.isPlainObject(r)?d.init.apply(this,[null,r]):r?n.error("The "+r+" method does not exist in jQuery Waypoints."):n.error("jQuery Waypoints needs a callback function or handler option.")},n.fn[g].defaults={context:r,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},h={refresh:function(){return n.each(u,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=r.innerHeight)?t:o.height()},aggregate:function(t){var e,r,o;return e=s,t&&(e=null!=(o=u[n(t).data(a)])?o.waypoints:void 0),e?(r={horizontal:[],vertical:[]},n.each(r,function(t,o){return n.each(e[t],function(t,e){return o.push(e)}),o.sort(function(t,e){return t.offset-e.offset}),r[t]=n.map(o,function(t){return t.element}),r[t]=n.unique(r[t])}),r):[]},above:function(t){return null==t&&(t=r),h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=r),h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=r),h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=r),h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;return e=n.extend({},s.vertical,s.horizontal),n.each(e,function(e,n){return n[t](),!0})},_filter:function(t,e,r){var o,i;return(o=u[n(t).data(a)])?(i=[],n.each(o.waypoints[e],function(t,e){return r(o,e)?i.push(e):void 0}),i.sort(function(t,e){return t.offset-e.offset}),n.map(i,function(t){return t.element})):[]}},n[m]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],h[n]?h[n].apply(null,t):h.aggregate.call(null,n)},n[m].settings={resizeThrottle:100,scrollThrottle:30},o.load(function(){return n[m]("refresh")})})}).call(this);
!function(t){var e,n,r="0.4.2",i="hasOwnProperty",a=/[\.\/]/,o="*",s=function(){},u=function(t,e){return t-e},h={n:{}},l=function(t,r){t=String(t);var i,a=n,o=Array.prototype.slice.call(arguments,2),s=l.listeners(t),h=0,c=[],f={},d=[],p=e;e=t,n=0;for(var g=0,y=s.length;y>g;g++)"zIndex"in s[g]&&(c.push(s[g].zIndex),s[g].zIndex<0&&(f[s[g].zIndex]=s[g]));for(c.sort(u);c[h]<0;)if(i=f[c[h++]],d.push(i.apply(r,o)),n)return n=a,d;for(g=0;y>g;g++)if(i=s[g],"zIndex"in i)if(i.zIndex==c[h]){if(d.push(i.apply(r,o)),n)break;do if(h++,i=f[c[h]],i&&d.push(i.apply(r,o)),n)break;while(i)}else f[i.zIndex]=i;else if(d.push(i.apply(r,o)),n)break;return n=a,e=p,d.length?d:null};l._events=h,l.listeners=function(t){var e,n,r,i,s,u,l,c,f=t.split(a),d=h,p=[d],g=[];for(i=0,s=f.length;s>i;i++){for(c=[],u=0,l=p.length;l>u;u++)for(d=p[u].n,n=[d[f[i]],d[o]],r=2;r--;)e=n[r],e&&(c.push(e),g=g.concat(e.f||[]));p=c}return g},l.on=function(t,e){if(t=String(t),"function"!=typeof e)return function(){};for(var n=t.split(a),r=h,i=0,o=n.length;o>i;i++)r=r.n,r=r.hasOwnProperty(n[i])&&r[n[i]]||(r[n[i]]={n:{}});for(r.f=r.f||[],i=0,o=r.f.length;o>i;i++)if(r.f[i]==e)return s;return r.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},l.f=function(t){var e=[].slice.call(arguments,1);return function(){l.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},l.stop=function(){n=1},l.nt=function(t){return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},l.nts=function(){return e.split(a)},l.off=l.unbind=function(t,e){if(!t)return l._events=h={n:{}},void 0;var n,r,s,u,c,f,d,p=t.split(a),g=[h];for(u=0,c=p.length;c>u;u++)for(f=0;f<g.length;f+=s.length-2){if(s=[f,1],n=g[f].n,p[u]!=o)n[p[u]]&&s.push(n[p[u]]);else for(r in n)n[i](r)&&s.push(n[r]);g.splice.apply(g,s)}for(u=0,c=g.length;c>u;u++)for(n=g[u];n.n;){if(e){if(n.f){for(f=0,d=n.f.length;d>f;f++)if(n.f[f]==e){n.f.splice(f,1);break}!n.f.length&&delete n.f}for(r in n.n)if(n.n[i](r)&&n.n[r].f){var y=n.n[r].f;for(f=0,d=y.length;d>f;f++)if(y[f]==e){y.splice(f,1);break}!y.length&&delete n.n[r].f}}else{delete n.f;for(r in n.n)n.n[i](r)&&n.n[r].f&&delete n.n[r].f}n=n.n}},l.once=function(t,e){var n=function(){return l.unbind(t,n),e.apply(this,arguments)};return l.on(t,n)},l.version=r,l.toString=function(){return"You are running Eve "+r},"undefined"!=typeof module&&module.exports?module.exports=l:"undefined"!=typeof define?define("eve",[],function(){return l}):t.eve=l}(this),function(t,e){"function"==typeof define&&define.amd?define(["eve"],function(n){return e(t,n)}):e(t,t.eve)}(this,function(t,e){var n=function(e){var n={},r=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,16)},i=Array.isArray||function(t){return t instanceof Array||"[object Array]"==Object.prototype.toString.call(t)},a=0,o="M"+(+new Date).toString(36),s=function(){return o+(a++).toString(36)},u=function(){return+new Date},h=function(t){var e=this;if(null==t)return e.s;var n=e.s-t;e.b+=e.dur*n,e.B+=e.dur*n,e.s=t},l=function(t){var e=this;return null==t?e.spd:(e.spd=t,void 0)},c=function(t){var e=this;return null==t?e.dur:(e.s=e.s*t/e.dur,e.dur=t,void 0)},f=function(){var t=this;delete n[t.id],e("mina.stop."+t.id,t)},d=function(){var t=this;t.pdif||(delete n[t.id],t.pdif=t.get()-t.b)},p=function(){var t=this;t.pdif&&(t.b=t.get()-t.pdif,delete t.pdif,n[t.id]=t)},g=function(){var t=0;for(var a in n)if(n.hasOwnProperty(a)){var o,s=n[a],u=s.get();if(t++,s.s=(u-s.b)/(s.dur/s.spd),s.s>=1&&(delete n[a],s.s=1,t--),i(s.start)){o=[];for(var h=0,l=s.start.length;l>h;h++)o[h]=s.start[h]+(s.end[h]-s.start[h])*s.easing(s.s)}else o=s.start+(s.end-s.start)*s.easing(s.s);s.set(o),1==s.s&&e("mina.finish."+s.id,s)}t&&r(g)},y=function(t,e,i,a,o,u,x){var m={id:s(),start:t,end:e,b:i,s:0,dur:a-i,spd:1,get:o,set:u,easing:x||y.linear,status:h,speed:l,duration:c,stop:f,pause:d,resume:p};n[m.id]=m;var v,b=0;for(v in n)if(n.hasOwnProperty(v)&&(b++,2==b))break;return 1==b&&r(g),m};return y.time=u,y.getById=function(t){return n[t]||null},y.linear=function(t){return t},y.easeout=function(t){return Math.pow(t,1.7)},y.easein=function(t){return Math.pow(t,.48)},y.easeinout=function(t){if(1==t)return 1;if(0==t)return 0;var e=.48-t/1.04,n=Math.sqrt(.1734+e*e),r=n-e,i=Math.pow(Math.abs(r),1/3)*(0>r?-1:1),a=-n-e,o=Math.pow(Math.abs(a),1/3)*(0>a?-1:1),s=i+o+.5;return 3*(1-s)*s*s+s*s*s},y.backin=function(t){if(1==t)return 1;var e=1.70158;return t*t*((e+1)*t-e)},y.backout=function(t){if(0==t)return 0;t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},y.elastic=function(t){return t==!!t?t:Math.pow(2,-10*t)*Math.sin(2*(t-.075)*Math.PI/.3)+1},y.bounce=function(t){var e,n=7.5625,r=2.75;return 1/r>t?e=n*t*t:2/r>t?(t-=1.5/r,e=n*t*t+.75):2.5/r>t?(t-=2.25/r,e=n*t*t+.9375):(t-=2.625/r,e=n*t*t+.984375),e},t.mina=y,y}("undefined"==typeof e?function(){}:e);!function(){function t(t){t=t||Object(t);for(var e,r,i=1,a=t.length+1,s=n(t,0);a>i;i++)e=r,r=s,s=n(t,i),this.raw+=r,o.call(this,r,s,e);return this._beforeEnd=function(){o.call(this,"","",r)},this}function n(t,e){return t&&(t.charAt?t.charAt(e):t[e])}function r(t,e){this.events=this.events||{},this.events[t]=this.events[t]||[],this.events[t].push(e)}function i(t,n,r){"function"==typeof e&&e("elemental."+t+(n?"."+n:""),null,n,r||"",this.raw);for(var i=this.events&&this.events[t],a=i&&i.length;a--;)try{this.events[t][a](n,r||"",this.raw)}catch(o){}this.raw=""}function a(){o.call(this,"eof"),this.event("eof")}function o(t,e,n){"\n"==t&&this.event("newline"),f[this.mode].call(this,t,e,n)}function s(e,n){var o=function(t){o.parse(t)};return o.mode="text",o.type=String(e||"html").toLowerCase(),o.textchunk="",o.raw="",o.parse=t,o.on=r,o.event=i,o.end=a,n&&(u=n),o}var u={lt:60,"lt;":60,"AMP;":38,AMP:38,"GT;":62,GT:62,"QUOT;":34,QUOT:34,"apos;":39,"bull;":8226,"bullet;":8226,"copy;":169,copy:169,"deg;":176,deg:176},h=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]/,l=function(t){var e;return"#"==t.charAt()&&(e="x"==t.charAt(1).toLowerCase()?parseInt(t.substring(2),16):parseInt(t.substring(1),10)),e=u[t],e?String.fromCharCode(e):"&"+t},c=function(){for(var t in this.attr)this.attr.hasOwnProperty(t)&&this.event("attr",t,{value:this.attr[t],tagname:this.tagname,attr:this.attr})},f={text:function(t){switch(t){case"<":case"eof":this.nodename="",this.attr={},this.mode="tag name start",this.raw=this.raw.slice(0,-1),this.textchunk&&this.event("text",this.textchunk),this.raw+=t,this.textchunk="";break;case"&":this.mode="entity",this.entity="";break;default:this.textchunk+=t}},entity:function(t){h.test(t)?(this.textchunk+=l(this.entity),this.mode="text"):";"==t?(this.textchunk+=l(this.entity+t),this.mode="text"):this.entity+=t},special:function(t,e,n){return"!"==n&&"-"==t&&"-"==e?(this.mode="comment start",void 0):"[CDATA"==this.textchunk&&"["==t?(this.mode="cdata",this.textchunk="",void 0):">"==t||"eof"==t?(this.event("special",this.textchunk),this.mode="text",this.textchunk="",void 0):(this.textchunk+=t,void 0)},cdata:function(t,e,n){return"]"==n&&"]"==t&&">"==e?(this.mode="cdata end",this.textchunk=this.textchunk.slice(0,-1),void 0):("eof"==t&&f["cdata end"].call(this),this.textchunk+=t,void 0)},"cdata end":function(){this.event("cdata",this.textchunk),this.textchunk="",this.mode="text"},"comment start":function(t,e){">"==e||"eof"==t?(this.event("comment",""),this.mode="skip"):this.mode="comment"},skip:function(){this.mode="text"},comment:function(t,e,n){"-"==t&&"-"==n&&">"==e?(this.mode="comment end",this.textchunk=this.textchunk.slice(0,-1)):"eof"==t?this.event("comment",this.textchunk):this.textchunk+=t},"comment end":function(){this.event("comment",this.textchunk),this.textchunk="",this.mode="text"},declaration:function(t,e){return"?"==t&&">"==e?(this.mode="declaration end",void 0):("eof"==t&&this.event("comment",this.textchunk),this.textchunk+=t,void 0)},"declaration end":function(){this.event("comment",this.textchunk),this.textchunk="",this.mode="text"},"tag name start":function(t,e,n){if("eof"==t)return this.event("text","<"),void 0;if(!h.test(t)){if(this.mode="tag name","/"==t)return this.mode="close tag name start",void 0;if("!"==t)return this.mode="special",this.textchunk="",void 0;if("?"==t)return this.mode="declaration",void 0;f[this.mode].call(this,t,e,n)}},"close tag name start":function(t,e,n){h.test(t)||(this.mode="close tag name",this.tagname="",this.nodename="",f[this.mode].call(this,t,e,n))},"close tag name":function(t){if(h.test(t))this.tagname=this.nodename;else switch(t){case">":this.event("/tag",this.tagname||this.nodename),this.mode="text";break;default:!this.tagname&&(this.nodename+=t)}},"tag name":function(t,e){if(h.test(t))this.tagname=this.nodename,this.nodename="",this.mode="attr start";else switch(t){case">":this.event("tag",this.nodename),this.mode="text";break;case"/":this.raw+=e,this.event("tag",this.nodename),this.event("/tag",this.nodename),this.mode="skip";break;default:this.nodename+=t}},"attr start":function(t,e,n){h.test(t)||(this.mode="attr",this.nodename="",f[this.mode].call(this,t,e,n))},attr:function(t){if(h.test(t)||"="==t)this.attr[this.nodename]="",this.mode="attr value start";else switch(t){case">":"/"==this.nodename?(delete this.attr["/"],this.event("tag",this.tagname,this.attr),c.call(this),this.event("/tag",this.tagname,!0)):(this.nodename&&(this.attr[this.nodename]=""),this.event("tag",this.tagname,this.attr),c.call(this)),this.mode="text";break;default:this.nodename+=t}},"attr value start":function(t,e,n){if(!h.test(t)){if(this.mode="attr value",this.quote=!1,"'"==t||'"'==t)return this.quote=t,void 0;f[this.mode].call(this,t,e,n)}},"attr value":function(t,e,n){if(h.test(t)&&!this.quote)this.mode="attr start";else if(">"!=t||this.quote)switch(t){case'"':case"'":this.quote==t&&"\\"!=n&&(this.mode="attr start");break;default:this.attr[this.nodename]+=t}else this.event("tag",this.tagname,this.attr),this.mode="text"}};s.version="0.2.4",("undefined"==typeof exports?this:exports).elemental=s}();var r=function(){function r(t,e){if(t){if(t.tagName)return A(t);if(t instanceof b)return t;if(null==e)return t=L.doc.querySelector(t),A(t)}return t=null==t?"100%":t,e=null==e?"100%":e,new S(t,e)}function i(t,e){if(e){if("string"==typeof t&&(t=i(t)),"string"==typeof e)return"xlink:"==e.substring(0,6)?t.getAttributeNS(oe,e.substring(6)):t.getAttribute(e);for(var n in e)if(e[P](n)){var r=R(e[n]);r?"xlink:"==n.substring(0,6)?t.setAttributeNS(oe,n.substring(6),r):t.setAttribute(n,r):t.removeAttribute(n)}}else t=L.doc.createElementNS("http://www.w3.org/2000/svg",t);return t}function a(t,e){return e=R.prototype.toLowerCase.call(e),"finite"==e?!$[P](+t):"array"==e&&(t instanceof Array||Array.isArray&&Array.isArray(t))?!0:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||Y.call(t).slice(8,-1).toLowerCase()==e}function o(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var n in t)t[P](n)&&(e[n]=o(t[n]));return e}function s(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return t.push(t.splice(n,1)[0])}function u(t,e,n){function r(){var i=Array.prototype.slice.call(arguments,0),a=i.join("â€"),o=r.cache=r.cache||{},u=r.count=r.count||[];return o[P](a)?(s(u,a),n?n(o[a]):o[a]):(u.length>=1e3&&delete o[u.shift()],u.push(a),o[a]=t.apply(e,i),n?n(o[a]):o[a])}return r}function h(t,e,n,r,i,a){if(null==i){var o=t-n,s=e-r;return o||s?(180+180*U.atan2(-s,-o)/I+360)%360:0}return h(t,e,i,a)-h(n,r,i,a)}function l(t){return t%360*I/180}function c(t){return 180*t/I%360}function f(){return this.x+V+this.y+V+this.width+" Ã— "+this.height}function d(t,e,n,r,i,a){return null==e&&"[object SVGMatrix]"==Y.call(t)?(this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.e=t.e,this.f=t.f,void 0):(null!=t?(this.a=+t,this.b=+e,this.c=+n,this.d=+r,this.e=+i,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0),void 0)}function p(t){var e=[];return t=t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(t,n,r){return r=r.split(/\s*,\s*/),"rotate"==n&&1==r.length&&r.push(0,0),"scale"==n&&(2==r.length&&r.push(0,0),1==r.length&&r.push(r[0],0,0)),"skewX"==n?e.push(["m",1,0,U.tan(l(r[0])),1,0,0]):"skewY"==n?e.push(["m",1,U.tan(l(r[0])),0,1,0,0]):e.push([n.charAt(0)].concat(r)),t}),e}function g(t,e){var n=ge(t),r=new d;if(n)for(var i=0,a=n.length;a>i;i++){var o,s,u,h,l,c=n[i],f=c.length,p=R(c[0]).toLowerCase(),g=c[0]!=p,y=g?r.invert():0;"t"==p&&3==f?g?(o=y.x(0,0),s=y.y(0,0),u=y.x(c[1],c[2]),h=y.y(c[1],c[2]),r.translate(u-o,h-s)):r.translate(c[1],c[2]):"r"==p?2==f?(l=l||e,r.rotate(c[1],l.x+l.width/2,l.y+l.height/2)):4==f&&(g?(u=y.x(c[2],c[3]),h=y.y(c[2],c[3]),r.rotate(c[1],u,h)):r.rotate(c[1],c[2],c[3])):"s"==p?2==f||3==f?(l=l||e,r.scale(c[1],c[f-1],l.x+l.width/2,l.y+l.height/2)):4==f?g?(u=y.x(c[2],c[3]),h=y.y(c[2],c[3]),r.scale(c[1],c[1],u,h)):r.scale(c[1],c[1],c[2],c[3]):5==f&&(g?(u=y.x(c[3],c[4]),h=y.y(c[3],c[4]),r.scale(c[1],c[2],u,h)):r.scale(c[1],c[2],c[3],c[4])):"m"==p&&7==f&&r.add(c[1],c[2],c[3],c[4],c[5],c[6])}return r}function y(t,e){if(null==e){var n=!0;if(e="linearGradient"==t.type||"radialGradient"==t.type?t.node.getAttribute("gradientTransform"):"pattern"==t.type?t.node.getAttribute("patternTransform"):t.node.getAttribute("transform"),!e)return new d;e=p(e)}else e=ye.test(e)?R(e).replace(/\.{3}|\u2026/g,t._.transform||X):p(e),a(e,"array")&&(e=r.path?r.path.toString.call(e):R(e)),t._.transform=e;var i=g(e,t.getBBox(1));return n?i:(t.matrix=i,void 0)}function x(t){if(r._.someDefs)return r._.someDefs;var e=t.paper||t.node.parentNode&&r(t.node.parentNode)||r.select("svg")||r(0,0),n=e.select("defs").node;return n||(n=C("defs",e.node).node),r._.someDefs=n,n}function m(t,e,n){function r(t){return null==t?X:t==+t?t:(i(h,{width:t}),h.getBBox().width)}function a(t){return null==t?X:t==+t?t:(i(h,{height:t}),h.getBBox().height)}function o(r,i){null==e?u[r]=i(t.attr(r)):r==e&&(u=i(null==n?t.attr(r):n))}var s=x(t),u={},h=s.querySelector(".svg---mgr");switch(h||(h=i("rect"),i(h,{width:10,height:10,"class":"svg---mgr"}),s.appendChild(h)),t.type){case"rect":o("rx",r),o("ry",a);case"image":o("width",r),o("height",a);case"text":o("x",r),o("y",a);break;case"circle":o("cx",r),o("cy",a),o("r",r);break;case"ellipse":o("cx",r),o("cy",a),o("rx",r),o("ry",a);break;case"line":o("x1",r),o("x2",r),o("y1",a),o("y2",a);break;case"marker":o("refX",r),o("markerWidth",r),o("refY",a),o("markerHeight",a);break;case"radialGradient":o("fx",r),o("fy",a);break;case"tspan":o("dx",r),o("dy",a);break;default:o(e,r)}return u}function v(t){a(t,"array")||(t=Array.prototype.slice.call(arguments,0));for(var e=0,n=0,r=this.node;this[e];)delete this[e++];for(e=0;e<t.length;e++)"set"==t[e].type?t[e].forEach(function(t){r.appendChild(t.node)}):r.appendChild(t[e].node);var i=r.childNodes;for(e=0;e<i.length;e++)i[e].snap&&(this[n++]=se[i[e].snap])}function b(t){if(t.snap in se)return se[t.snap];var e,n=this.id=ae();try{e=t.ownerSVGElement}catch(r){}if(this.node=t,e&&(this.paper=new S(e)),this.type=t.tagName,this.anims={},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},t.snap=n,se[n]=this,"g"==this.type){this.add=v;for(var i in S.prototype)S.prototype[P](i)&&(this[i]=S.prototype[i])}}function w(t){for(var e,n=0,r=t.length;r>n;n++)if(e=e||t[n])return e}function k(t){this.node=t}function C(t,e){var n=i(t);e.appendChild(n);var r=A(n);return r.type=t,r}function S(t,e){var n,r,a,o=S.prototype;if(t&&"svg"==t.tagName){if(t.snap in se)return se[t.snap];n=new b(t),r=t.getElementsByTagName("desc")[0],a=t.getElementsByTagName("defs")[0],r||(r=i("desc"),r.appendChild(L.doc.createTextNode("Created with Snap")),n.node.appendChild(r)),a||(a=i("defs"),n.node.appendChild(a)),n.defs=a;for(var s in o)o[P](s)&&(n[s]=o[s]);n.paper=n.root=n}else n=C("svg",L.doc.body),i(n.node,{height:e,version:1.1,width:t,xmlns:"http://www.w3.org/2000/svg"});return n}function A(t){return t?t instanceof b||t instanceof k?t:"svg"==t.tagName?new S(t):new b(t):t}function M(){return this.selectAll("stop")}function B(t,e){var n=i("stop"),a={offset:+e+"%"};return t=r.color(t),a["stop-color"]=t.hex,t.opacity<1&&(a["stop-opacity"]=t.opacity),i(n,a),this.node.appendChild(n),this}function F(){if("linearGradient"==this.type){var t=i(this.node,"x1")||0,e=i(this.node,"x2")||1,n=i(this.node,"y1")||0,a=i(this.node,"y2")||0;return r._.box(t,n,U.abs(e-t),U.abs(a-n))}var o=this.node.cx||.5,s=this.node.cy||.5,u=this.node.r||0;return r._.box(o-u,s-u,2*u,2*u)}function T(t,n){function r(t,e){for(var n=(e-h)/(t-l),r=l;t>r;r++)s[r].offset=+(+h+n*(r-l)).toFixed(2);l=t,h=e}var a,o=w(e("snap.util.grad.parse",null,n));if(!o)return null;o.params.unshift(t),a="l"==o.type.toLowerCase()?_.apply(0,o.params):q.apply(0,o.params),o.type!=o.type.toLowerCase()&&i(a.node,{gradientUnits:"userSpaceOnUse"});var s=o.stops,u=s.length,h=0,l=0;u--;for(var c=0;u>c;c++)"offset"in s[c]&&r(c,s[c].offset);for(s[u].offset=s[u].offset||100,r(u,s[u].offset),c=0;u>=c;c++){var f=s[c];a.addStop(f.color,f.offset)}return a}function _(t,e,n,r,a){var o=C("linearGradient",t);return o.stops=M,o.addStop=B,o.getBBox=F,null!=e&&i(o.node,{x1:e,y1:n,x2:r,y2:a}),o}function q(t,e,n,r,a,o){var s=C("radialGradient",t);return s.stops=M,s.addStop=B,s.getBBox=F,null!=e&&i(s.node,{cx:e,cy:n,r:r}),null!=a&&null!=o&&i(s.node,{fx:a,fy:o}),s}function N(t){return function(n){if(e.stop(),n instanceof k&&1==n.node.childNodes.length&&("radialGradient"==n.node.firstChild.tagName||"linearGradient"==n.node.firstChild.tagName||"pattern"==n.node.firstChild.tagName)&&(n=n.node.firstChild,x(this).appendChild(n),n=A(n)),n instanceof b)if("radialGradient"==n.type||"linearGradient"==n.type||"pattern"==n.type){n.node.id||i(n.node,{id:n.id});var a="url(#"+n.node.id+")"}else a=n.attr(t);else if(a=r.color(n),a.error){var o=T(x(this),n);o?(o.node.id||i(o.node,{id:o.id}),a="url(#"+o.node.id+")"):a=n}else a=R(a);var s={};s[t]=a,i(this.node,s),this.node.style[t]=X}}function j(t){for(var e=[],n=t.childNodes,r=0,i=n.length;i>r;r++){var a=n[r];3==a.nodeType&&e.push(a.nodeValue),"tspan"==a.tagName&&(1==a.childNodes.length&&3==a.firstChild.nodeType?e.push(a.firstChild.nodeValue):e.push(j(a)))}return e}r.version="0.1.0",r.toString=function(){return"Snap v"+this.version},r._={};var L={win:t,doc:t.document};r._.glob=L;var P="hasOwnProperty",R=String,E=parseFloat,G=parseInt,U=Math,O=U.max,z=U.min,D=U.abs,I=(U.pow,U.PI),X=(U.round,""),V=" ",Y=Object.prototype.toString,H=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,$={NaN:1,Infinity:1,"-Infinity":1},W=/^url\(#?([^)]+)\)$/,Q="   \n\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029",Z=new RegExp("[,"+Q+"]+"),J=(new RegExp("["+Q+"]","g"),new RegExp("["+Q+"]*,["+Q+"]*")),K={hs:1,rg:1},te=new RegExp("([a-z])["+Q+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+Q+"]*,?["+Q+"]*)+)","ig"),ee=new RegExp("([rstm])["+Q+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+Q+"]*,?["+Q+"]*)+)","ig"),ne=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+Q+"]*,?["+Q+"]*","ig"),re=0,ie="S"+(+new Date).toString(36),ae=function(){return ie+(re++).toString(36)},oe="http://www.w3.org/1999/xlink",se={};r._.$=i,r._.id=ae,r.format=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,n=function(t,n,r){var i=r;return n.replace(e,function(t,e,n,r,a){e=e||r,i&&(e in i&&(i=i[e]),"function"==typeof i&&a&&(i=i()))}),i=(null==i||i==r?t:i)+""};return function(e,r){return R(e).replace(t,function(t,e){return n(t,e,r)})}}();var ue=function(){function t(){this.parentNode.removeChild(this)}return function(e,n){var r=L.doc.createElement("img"),i=L.doc.body;r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){n.call(r),r.onload=r.onerror=null,i.removeChild(r)},r.onerror=t,i.appendChild(r),r.src=e}}();r._.clone=o,r._.cacher=u,r.rad=l,r.deg=c,r.angle=h,r.is=a,r.snapTo=function(t,e,n){if(n=a(n,"finite")?n:10,a(t,"array")){for(var r=t.length;r--;)if(D(t[r]-e)<=n)return t[r]}else{t=+t;var i=e%t;if(n>i)return e-i;if(i>t-n)return e-i+t}return e},function(t){function e(t){return t[0]*t[0]+t[1]*t[1]}function n(t){var n=U.sqrt(e(t));t[0]&&(t[0]/=n),t[1]&&(t[1]/=n)}t.add=function(t,e,n,r,i,a){var o,s,u,h,l=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,n,i],[e,r,a],[0,0,1]];for(t&&t instanceof d&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),o=0;3>o;o++)for(s=0;3>s;s++){for(h=0,u=0;3>u;u++)h+=c[o][u]*f[u][s];l[o][s]=h}return this.a=l[0][0],this.b=l[1][0],this.c=l[0][1],this.d=l[1][1],this.e=l[0][2],this.f=l[1][2],this},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new d(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new d(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){return this.add(1,0,0,1,t,e)},t.scale=function(t,e,n,r){return null==e&&(e=t),(n||r)&&this.add(1,0,0,1,n,r),this.add(t,0,0,e,0,0),(n||r)&&this.add(1,0,0,1,-n,-r),this},t.rotate=function(t,e,n){t=l(t),e=e||0,n=n||0;var r=+U.cos(t).toFixed(9),i=+U.sin(t).toFixed(9);return this.add(r,i,-i,r,e,n),this.add(1,0,0,1,-e,-n)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[R.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var r=[[this.a,this.c],[this.b,this.d]];t.scalex=U.sqrt(e(r[0])),n(r[0]),t.shear=r[0][0]*r[1][0]+r[0][1]*r[1][1],r[1]=[r[1][0]-r[0][0]*t.shear,r[1][1]-r[0][1]*t.shear],t.scaley=U.sqrt(e(r[1])),n(r[1]),t.shear/=t.scaley;var i=-r[0][1],a=r[1][1];return 0>a?(t.rotate=c(U.acos(a)),0>i&&(t.rotate=360-t.rotate)):t.rotate=c(U.asin(i)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this.split();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[+e.dx.toFixed(4),+e.dy.toFixed(4)]:X)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:X)+(e.rotate?"r"+[+e.rotate.toFixed(4),0,0]:X)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(d.prototype),r.Matrix=d,r.getRGB=u(function(t){if(!t||(t=R(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:fe};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:fe};if(!(K[P](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=he(t)),!t)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:fe};var e,n,i,o,s,u,h=t.match(H);return h?(h[2]&&(i=G(h[2].substring(5),16),n=G(h[2].substring(3,5),16),e=G(h[2].substring(1,3),16)),h[3]&&(i=G((s=h[3].charAt(3))+s,16),n=G((s=h[3].charAt(2))+s,16),e=G((s=h[3].charAt(1))+s,16)),h[4]&&(u=h[4].split(J),e=E(u[0]),"%"==u[0].slice(-1)&&(e*=2.55),n=E(u[1]),"%"==u[1].slice(-1)&&(n*=2.55),i=E(u[2]),"%"==u[2].slice(-1)&&(i*=2.55),"rgba"==h[1].toLowerCase().slice(0,4)&&(o=E(u[3])),u[3]&&"%"==u[3].slice(-1)&&(o/=100)),h[5]?(u=h[5].split(J),e=E(u[0]),"%"==u[0].slice(-1)&&(e/=100),n=E(u[1]),"%"==u[1].slice(-1)&&(n/=100),i=E(u[2]),"%"==u[2].slice(-1)&&(i/=100),("deg"==u[0].slice(-3)||"Â°"==u[0].slice(-1))&&(e/=360),"hsba"==h[1].toLowerCase().slice(0,4)&&(o=E(u[3])),u[3]&&"%"==u[3].slice(-1)&&(o/=100),r.hsb2rgb(e,n,i,o)):h[6]?(u=h[6].split(J),e=E(u[0]),"%"==u[0].slice(-1)&&(e/=100),n=E(u[1]),"%"==u[1].slice(-1)&&(n/=100),i=E(u[2]),"%"==u[2].slice(-1)&&(i/=100),("deg"==u[0].slice(-3)||"Â°"==u[0].slice(-1))&&(e/=360),"hsla"==h[1].toLowerCase().slice(0,4)&&(o=E(u[3])),u[3]&&"%"==u[3].slice(-1)&&(o/=100),r.hsl2rgb(e,n,i,o)):(e=z(U.round(e),255),n=z(U.round(n),255),i=z(U.round(i),255),o=z(O(o,0),1),h={r:e,g:n,b:i,toString:fe},h.hex="#"+(16777216|i|n<<8|e<<16).toString(16).slice(1),h.opacity=a(o,"finite")?o:1,h)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:fe}},r),r.hsb=u(function(t,e,n){return r.hsb2rgb(t,e,n).hex}),r.hsl=u(function(t,e,n){return r.hsl2rgb(t,e,n).hex}),r.rgb=u(function(t,e,n,r){if(a(r,"finite")){var i=U.round;return"rgba("+[i(t),i(e),i(n),+r.toFixed(2)]+")"}return"#"+(16777216|n|e<<8|t<<16).toString(16).slice(1)});var he=function(t){var e=L.doc.getElementsByTagName("head")[0],n="rgb(255, 0, 0)";return he=u(function(t){if("red"==t.toLowerCase())return n;e.style.color=n,e.style.color=t;var r=L.doc.defaultView.getComputedStyle(e,X).getPropertyValue("color");return r==n?null:r}),he(t)},le=function(){return"hsb("+[this.h,this.s,this.b]+")"},ce=function(){return"hsl("+[this.h,this.s,this.l]+")"},fe=function(){return 1==this.opacity||null==this.opacity?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")"},de=function(t,e,n){if(null==e&&a(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(n=t.b,e=t.g,t=t.r),null==e&&a(t,string)){var i=r.getRGB(t);t=i.r,e=i.g,n=i.b}return(t>1||e>1||n>1)&&(t/=255,e/=255,n/=255),[t,e,n]},pe=function(t,e,n,i){t=U.round(255*t),e=U.round(255*e),n=U.round(255*n);var o={r:t,g:e,b:n,opacity:a(i,"finite")?i:1,hex:r.rgb(t,e,n),toString:fe};return a(i,"finite")&&(o.opacity=i),o};r.color=function(t){var e;return a(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=r.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.opacity=1,t.hex=e.hex):a(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=r.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.opacity=1,t.hex=e.hex):(a(t,"string")&&(t=r.getRGB(t)),a(t,"object")&&"r"in t&&"g"in t&&"b"in t&&!("error"in t)?(e=r.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=r.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1,t.error=1)),t.toString=fe,t},r.hsb2rgb=function(t,e,n,r){a(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(n=t.b,e=t.s,t=t.h,r=t.o),t*=360;var i,o,s,u,h;return t=t%360/60,h=n*e,u=h*(1-D(t%2-1)),i=o=s=n-h,t=~~t,i+=[h,u,0,0,u,h][t],o+=[u,h,h,u,0,0][t],s+=[0,0,u,h,h,u][t],pe(i,o,s,r)},r.hsl2rgb=function(t,e,n,r){a(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(n=t.l,e=t.s,t=t.h),(t>1||e>1||n>1)&&(t/=360,e/=100,n/=100),t*=360;var i,o,s,u,h;return t=t%360/60,h=2*e*(.5>n?n:1-n),u=h*(1-D(t%2-1)),i=o=s=n-h/2,t=~~t,i+=[h,u,0,0,u,h][t],o+=[u,h,h,u,0,0][t],s+=[0,0,u,h,h,u][t],pe(i,o,s,r)},r.rgb2hsb=function(t,e,n){n=de(t,e,n),t=n[0],e=n[1],n=n[2];var r,i,a,o;return a=O(t,e,n),o=a-z(t,e,n),r=0==o?null:a==t?(e-n)/o:a==e?(n-t)/o+2:(t-e)/o+4,r=60*((r+360)%6)/360,i=0==o?0:o/a,{h:r,s:i,b:a,toString:le}},r.rgb2hsl=function(t,e,n){n=de(t,e,n),t=n[0],e=n[1],n=n[2];var r,i,a,o,s,u;return o=O(t,e,n),s=z(t,e,n),u=o-s,r=0==u?null:o==t?(e-n)/u:o==e?(n-t)/u+2:(t-e)/u+4,r=60*((r+360)%6)/360,a=(o+s)/2,i=0==u?0:.5>a?u/(2*a):u/(2-2*a),{h:r,s:i,l:a,toString:ce}},r.parsePathString=function(t){if(!t)return null;var e=r.path(t);if(e.arr)return r.path.clone(e.arr);var n={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},i=[];return a(t,"array")&&a(t[0],"array")&&(i=r.path.clone(t)),i.length||R(t).replace(te,function(t,e,r){var a=[],o=e.toLowerCase();if(r.replace(ne,function(t,e){e&&a.push(+e)}),"m"==o&&a.length>2&&(i.push([e].concat(a.splice(0,2))),o="l",e="m"==e?"l":"L"),"o"==o&&1==a.length&&i.push([e,a[0]]),"r"==o)i.push([e].concat(a));else for(;a.length>=n[o]&&(i.push([e].concat(a.splice(0,n[o]))),n[o]););}),i.toString=r.path.toString,e.arr=r.path.clone(i),i};var ge=r.parseTransformString=function(t){if(!t)return null;var e=[];return a(t,"array")&&a(t[0],"array")&&(e=r.path.clone(t)),e.length||R(t).replace(ee,function(t,n,r){var i=[];n.toLowerCase(),r.replace(ne,function(t,e){e&&i.push(+e)}),e.push([n].concat(i))}),e.toString=r.path.toString,e},ye=new RegExp("^[a-z]["+Q+"]*-?\\.?\\d");r._.transform2matrix=g,r._unit2px=m,r._.getSomeDefs=x,r.select=function(t){return A(L.doc.querySelector(t))},r.selectAll=function(t){for(var e=L.doc.querySelectorAll(t),n=(r.set||Array)(),i=0;i<e.length;i++)n.push(A(e[i]));return n},function(t){function o(t){function e(t,e){var n=i(t.node,e);n=n&&n.match(o),n=n&&n[2],n&&"#"==n.charAt()&&(n=n.substring(1),n&&(u[n]=(u[n]||[]).concat(function(n){var r={};r[e]="url(#"+n+")",i(t.node,r)})))}function n(t){var e=i(t.node,"xlink:href");e&&"#"==e.charAt()&&(e=e.substring(1),e&&(u[e]=(u[e]||[]).concat(function(e){t.attr("xlink:href","#"+e)})))}for(var r,a=t.selectAll("*"),o=/^\s*url\(("|'|)(.*)\1\)\s*$/,s=[],u={},h=0,l=a.length;l>h;h++){r=a[h],e(r,"fill"),e(r,"stroke"),e(r,"filter"),e(r,"mask"),e(r,"clip-path"),n(r);var c=i(r.node,"id");c&&(i(r.node,{id:r.id}),s.push({old:c,id:r.id}))}for(h=0,l=s.length;l>h;h++){var f=u[s[h].old];if(f)for(var d=0,p=f.length;p>d;d++)f[d](s[h].id)}}function s(t,e,n){return function(r){var i=r.slice(t,e);return 1==i.length&&(i=i[0]),n?n(i):i}}function u(t){return function(){var e=t?"<"+this.type:"",n=this.node.attributes,r=this.node.childNodes;if(t)for(var i=0,a=n.length;a>i;i++)e+=" "+n[i].name+'="'+n[i].value.replace(/"/g,'\\"')+'"';if(r.length){for(t&&(e+=">"),i=0,a=r.length;a>i;i++)3==r[i].nodeType?e+=r[i].nodeValue:1==r[i].nodeType&&(e+=A(r[i]).toString());t&&(e+="</"+this.type+">")}else t&&(e+="/>");return e}}t.attr=function(t,n){var r=this;if(r.node,!t)return r;if(a(t,"string")){if(!(arguments.length>1))return w(e("snap.util.getattr."+t,r));var i={};i[t]=n,t=i}for(var o in t)t[P](o)&&e("snap.util.attr."+o,r,t[o]);return r},t.getBBox=function(t){var e=this;if("use"==e.type&&(e=e.original),e.removed)return{};var n=e._;return t?((n.dirty||!n.bboxwt)&&(e.realPath=r.path.get[e.type](e),n.bboxwt=r.path.getBBox(e.realPath),n.bboxwt.toString=f,n.dirty=0),r._.box(n.bboxwt)):((n.dirty||n.dirtyT||!n.bbox)&&((n.dirty||!e.realPath)&&(n.bboxwt=0,e.realPath=r.path.get[e.type](e)),n.bbox=r.path.getBBox(r.path.map(e.realPath,e.matrix)),n.bbox.toString=f,n.dirty=n.dirtyT=0),r._.box(n.bbox))};var h=function(){return this.string};t.transform=function(t){var e=this._;if(null==t){var n=new d(this.node.getCTM()),r=y(this),a=r.toTransformString(),o=R(r)==R(this.matrix)?e.transform:a;return{string:o,globalMatrix:n,localMatrix:r,diffMatrix:n.clone().add(r.invert()),global:n.toTransformString(),local:a,toString:h}}return t instanceof d&&(t=t.toTransformString()),y(this,t),this.node&&("linearGradient"==this.type||"radialGradient"==this.type?i(this.node,{gradientTransform:this.matrix}):"pattern"==this.type?i(this.node,{patternTransform:this.matrix}):i(this.node,{transform:this.matrix})),this},t.parent=function(){return A(this.node.parentNode)},t.append=t.add=function(t){if("set"==t.type){var e=this;return t.forEach(function(t){e.append(t)}),this}return t=A(t),this.node.appendChild(t.node),t.paper=this.paper,this},t.prepend=function(t){return t=A(t),this.node.insertBefore(t.node,this.node.firstChild),t.paper=this.paper,this},t.before=function(t){return t=A(t),this.node.parentNode.insertBefore(t.node,this.node),t.paper=this.paper,this},t.after=function(t){return t=A(t),this.node.parentNode.insertBefore(t.node,this.node.nextSibling),t.paper=this.paper,this},t.insertBefore=function(t){return t=A(t),t.node.parentNode.insertBefore(this.node,t.node),this.paper=t.paper,this},t.insertAfter=function(t){return t=A(t),t.node.parentNode.insertBefore(this.node,t.node.nextSibling),this.paper=t.paper,this},t.remove=function(){return this.node.parentNode&&this.node.parentNode.removeChild(this.node),delete this.paper,this.removed=!0,this},t.select=function(t){return A(this.node.querySelector(t))},t.selectAll=function(t){for(var e=this.node.querySelectorAll(t),n=(r.set||Array)(),i=0;i<e.length;i++)n.push(A(e[i]));return n},t.asPX=function(t,e){return null==e&&(e=this.attr(t)),m(this,t,e)},t.use=function(){var t,e=this.node.id;return e||(e=this.id,i(this.node,{id:e})),t="linearGradient"==this.type||"radialGradient"==this.type||"pattern"==this.type?C(this.type,this.node.parentNode):C("use",this.node.parentNode),i(t.node,{"xlink:href":"#"+e}),t.original=this,t
},t.clone=function(){var t=A(this.node.cloneNode(!0));return i(t.node,"id")&&i(t.node,{id:t.id}),o(t),t.insertAfter(this),t},t.toDefs=function(){var t=x(this);return t.appendChild(this.node),this},t.pattern=function(t,e,n,r){var a=C("pattern",x(this));return null==t&&(t=this.getBBox()),t&&"x"in t&&(e=t.y,n=t.width,r=t.height,t=t.x),i(a.node,{x:t,y:e,width:n,height:r,patternUnits:"userSpaceOnUse",id:a.id,viewBox:[t,e,n,r].join(" ")}),a.node.appendChild(this.node),a},t.marker=function(t,e,n,r,a,o){var s=C("marker",x(this));return null==t&&(t=this.getBBox()),t&&"x"in t&&(e=t.y,n=t.width,r=t.height,a=t.refX||t.cx,o=t.refY||t.cy,t=t.x),i(s.node,{viewBox:[t,e,n,r].join(V),markerWidth:n,markerHeight:r,orient:"auto",refX:a||0,refY:o||0,id:s.id}),s.node.appendChild(this.node),s};var l=function(t,e,r,i){"function"!=typeof r||r.length||(i=r,r=n.linear),this.attr=t,this.dur=e,r&&(this.easing=r),i&&(this.callback=i)};r.animation=function(t,e,n,r){return new l(t,e,n,r)},t.inAnim=function(){var t=this,e=[];for(var n in t.anims)t.anims[P](n)&&function(t){e.push({anim:new l(t._attrs,t.dur,t.easing,t._callback),curStatus:t.status(),status:function(e){return t.status(e)},stop:function(){t.stop()}})}(t.anims[n]);return e},r.animate=function(t,r,i,a,o,s){"function"!=typeof o||o.length||(s=o,o=n.linear);var u=n.time(),h=n(t,r,u,u+a,n.time,i,o);return s&&e.once("mina.finish."+h.id,s),h},t.stop=function(){for(var t=this.inAnim(),e=0,n=t.length;n>e;e++)t[e].stop();return this},t.animate=function(t,r,i,o){"function"!=typeof i||i.length||(o=i,i=n.linear),t instanceof l&&(o=t.callback,i=t.easing,r=i.dur,t=t.attr);var u,h,c,f,d=[],p=[],g={},y=this;for(var x in t)if(t[P](x)){y.equal?(f=y.equal(x,R(t[x])),u=f.from,h=f.to,c=f.f):(u=+y.attr(x),h=+t[x]);var m=a(u,"array")?u.length:1;g[x]=s(d.length,d.length+m,c),d=d.concat(u),p=p.concat(h)}var v=n.time(),b=n(d,p,v,v+r,n.time,function(t){var e={};for(var n in g)g[P](n)&&(e[n]=g[n](t));y.attr(e)},i);return y.anims[b.id]=b,b._attrs=t,b._callback=o,e.once("mina.finish."+b.id,function(){delete y.anims[b.id],o&&o.call(y)}),e.once("mina.stop."+b.id,function(){delete y.anims[b.id]}),y};var c={};t.data=function(t,n){var i=c[this.id]=c[this.id]||{};if(1==arguments.length){if(r.is(t,"object")){for(var a in t)t[P](a)&&this.data(a,t[a]);return this}return e("snap.data.get."+this.id,this,i[t],t),i[t]}return i[t]=n,e("snap.data.set."+this.id,this,n,t),this},t.removeData=function(t){return null==t?c[this.id]={}:c[this.id]&&delete c[this.id][t],this},t.toString=u(1),t.innerSVG=u()}(b.prototype),r.parse=function(t){var n=L.doc.createDocumentFragment(),r=n;return e.on("elemental.tag",function(t,e){var n=i(t);e&&i(n,e),r.appendChild(n),r=n}),e.on("elemental.text",function(t){r.appendChild(L.doc.createTextNode(t))}),e.on("elemental./tag",function(){r=r.parentNode}),e.on("elemental.eof",function(){e.off("elemental.*"),e("snap.parsed",n)}),elemental().parse(t).end(),new k(n)},k.prototype.select=b.prototype.select,k.prototype.selectAll=b.prototype.selectAll,r.fragment=function(){for(var t=Array.prototype.slice.call(arguments,0),e=L.doc.createDocumentFragment(),n=0,i=t.length;i>n;n++){var a=t[n];a.node&&a.node.nodeType&&e.appendChild(a.node),a.nodeType&&e.appendChild(a),"string"==typeof a&&e.appendChild(r.parse(a).node)}return new k(e)},function(t){t.el=function(t,e){return C(t,this.node).attr(e)},t.rect=function(t,e,n,r,i,o){var s=C("rect",this.node);return null==o&&(o=i),a(t,"object")&&"x"in t?s.attr(t):null!=t&&(s.attr({x:t,y:e,width:n,height:r}),null!=i&&s.attr({rx:i,ry:o})),s},t.circle=function(t,e,n){var r=C("circle",this.node);return a(t,"object")&&"cx"in t?r.attr(t):null!=t&&r.attr({cx:t,cy:e,r:n}),r},t.image=function(t,e,n,r,o){var s=C("image",this.node);if(a(t,"object")&&"src"in t)s.attr(t);else if(null!=t){var u={"xlink:href":t,preserveAspectRatio:"none"};null!=e&&null!=n&&(u.x=e,u.y=n),null!=r&&null!=o?(u.width=r,u.height=o):ue(t,function(){i(s.node,{width:this.offsetWidth,height:this.offsetHeight})}),i(s.node,u)}return s},t.ellipse=function(t,e,n,r){var i=C("ellipse",this.node);return a(t,"object")&&"cx"in t?i.attr(t):null!=t&&i.attr({cx:t,cy:e,rx:n,ry:r}),i},t.path=function(t){var e=C("path",this.node);return a(t,"object")&&!a(t,"array")?e.attr(t):t&&e.attr({d:t}),e},t.group=t.g=function(e){var n=C("g",this.node);n.add=v;for(var r in t)t[P](r)&&(n[r]=t[r]);return 1==arguments.length&&e&&!e.type?n.attr(e):arguments.length&&n.add(Array.prototype.slice.call(arguments,0)),n},t.text=function(t,e,n){var r=C("text",this.node);return a(t,"object")?r.attr(t):null!=t&&r.attr({x:t,y:e,text:n||""}),r},t.line=function(t,e,n,r){var i=C("line",this.node);return a(t,"object")?i.attr(t):null!=t&&i.attr({x1:t,x2:n,y1:e,y2:r}),i},t.polyline=function(t){arguments.length>1&&(t=Array.prototype.slice.call(arguments,0));var e=C("polyline",this.node);return a(t,"object")&&!a(t,"array")?e.attr(t):null!=t&&e.attr({points:t}),e},t.polygon=function(t){arguments.length>1&&(t=Array.prototype.slice.call(arguments,0));var e=C("polygon",this.node);return a(t,"object")&&!a(t,"array")?e.attr(t):null!=t&&e.attr({points:t}),e},function(){t.gradient=function(t){return T(this.defs,t)},t.gradientLinear=function(t,e,n,r){return _(this.defs,t,e,n,r)},t.gradientRadial=function(t,e,n,r,i){return q(this.defs,t,e,n,r,i)},t.toString=function(){var t,e=L.doc.createDocumentFragment(),n=L.doc.createElement("div"),r=this.node.cloneNode(!0);return e.appendChild(n),n.appendChild(r),i(r,{xmlns:"http://www.w3.org/2000/svg"}),t=n.innerHTML,e.removeChild(e.firstChild),t},t.clear=function(){for(var t,e=this.node.firstChild;e;)t=e.nextSibling,"defs"!=e.tagName&&e.parentNode.removeChild(e),e=t}}()}(S.prototype),r.ajax=function(t,n,r,i){var o=new XMLHttpRequest,s=ae();if(o){if(a(n,"function"))i=r,r=n,n=null;else if(a(n,"object")){var u=[];for(var h in n)n.hasOwnProperty(h)&&u.push(encodeURIComponent(h)+"="+encodeURIComponent(n[h]));n=u.join("&")}return o.open(n?"POST":"GET",t,!0),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),n&&o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r&&(e.once("snap.ajax."+s+".0",r),e.once("snap.ajax."+s+".200",r),e.once("snap.ajax."+s+".304",r)),o.onreadystatechange=function(){4==o.readyState&&e("snap.ajax."+s+"."+o.status,i,o)},4==o.readyState?o:(o.send(n),o)}},r.load=function(t,e,n){r.ajax(t,function(t){var i=r.parse(t.responseText);n?e.call(n,i):e(i)})},e.on("snap.util.attr.mask",function(t){if(t instanceof b||t instanceof k){if(e.stop(),t instanceof k&&1==t.node.childNodes.length&&(t=t.node.firstChild,x(this).appendChild(t),t=A(t)),"mask"==t.type)var n=t;else n=C("mask",x(this)),n.node.appendChild(t.node),!n.node.id&&i(n.node,{id:n.id});i(this.node,{mask:"url(#"+n.id+")"})}}),function(t){e.on("snap.util.attr.clip",t),e.on("snap.util.attr.clip-path",t),e.on("snap.util.attr.clipPath",t)}(function(t){if(t instanceof b||t instanceof k){if(e.stop(),"clipPath"==t.type)var n=t;else n=C("clipPath",x(this)),n.node.appendChild(t.node),!n.node.id&&i(n.node,{id:n.id});i(this.node,{"clip-path":"url(#"+n.id+")"})}}),e.on("snap.util.attr.fill",N("fill")),e.on("snap.util.attr.stroke",N("stroke"));var xe=/^([lr])(?:\(([^)]*)\))?(.*)$/i;e.on("snap.util.grad.parse",function(t){t=R(t);var e=t.match(xe);if(!e)return null;var n=e[1],r=e[2],i=e[3];return r=r.split(/\s*,\s*/).map(function(t){return+t==t?+t:t}),1==r.length&&0==r[0]&&(r=[]),i=i.split("-"),i=i.map(function(t){t=t.split(":");var e={color:t[0]};return t[1]&&(e.offset=t[1]),e}),{type:n,params:r,stops:i}}),e.on("snap.util.attr.d",function(t){e.stop(),a(t,"array")&&a(t[0],"array")&&(t=r.path.toString.call(t)),t=R(t),t.match(/[ruo]/i)&&(t=r.path.toAbsolute(t)),i(this.node,{d:t})})(-1),e.on("snap.util.attr.#text",function(t){e.stop(),t=R(t);for(var n=L.doc.createTextNode(t);this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.node.appendChild(n)})(-1),e.on("snap.util.attr.path",function(t){e.stop(),this.attr({d:t})})(-1),e.on("snap.util.attr.viewBox",function(t){var n;n=a(t,"object")&&"x"in t?[t.x,t.y,t.width,t.height].join(" "):a(t,"array")?t.join(" "):t,i(this.node,{viewBox:n}),e.stop()})(-1),e.on("snap.util.attr.transform",function(t){this.transform(t),e.stop()})(-1),e.on("snap.util.attr.r",function(t){"rect"==this.type&&(e.stop(),i(this.node,{rx:t,ry:t}))})(-1),e.on("snap.util.attr.text",function(t){if("text"==this.type){for(var n=this.node,r=function(t){var e=i("tspan");if(a(t,"array"))for(var n=0;n<t.length;n++)e.appendChild(r(t[n]));else e.appendChild(L.doc.createTextNode(t));return e.normalize&&e.normalize(),e};n.firstChild;)n.removeChild(n.firstChild);for(var o=r(t);o.firstChild;)n.appendChild(o.firstChild)}e.stop()})(-1);var me={rect:{x:0,y:0,width:0,height:0,rx:0,ry:0,"class":0},circle:{cx:0,cy:0,r:0,"class":0},ellipse:{cx:0,cy:0,rx:0,ry:0,"class":0},line:{x1:0,y1:0,x2:0,y2:0,"class":0},polyline:{points:"","class":0},polygon:{points:"","class":0},text:{x:0,y:0,dx:0,dy:0,rotate:0,textLength:0,lengthAdjust:0,"class":0},tspan:{x:0,y:0,dx:0,dy:0,rotate:0,textLength:0,lengthAdjust:0,"class":0},textPath:{"xlink:href":0,startOffset:0,method:0,spacing:0,"class":0},marker:{viewBox:0,preserveAspectRatio:0,refX:0,refY:0,markerUnits:0,markerWidth:0,markerHeight:0,orient:0,"class":0},use:{"class":0,externalResourcesRequired:0,x:0,y:0,width:0,height:0,"xlink:href":0},linearGradient:{x1:0,y1:0,x2:0,y2:0,gradientUnits:0,gradientTransform:0,spreadMethod:0,"xlink:href":0,"class":0},radialGradient:{cx:0,cy:0,r:0,fx:0,fy:0,gradientUnits:0,gradientTransform:0,spreadMethod:0,"xlink:href":0,"class":0},stop:{offset:0,"class":0},pattern:{viewBox:0,preserveAspectRatio:0,x:0,y:0,width:0,height:0,patternUnits:0,patternContentUnits:0,patternTransform:0,"xlink:href":0,"class":0},clipPath:{transform:0,clipPathUnits:0,"class":0},mask:{x:0,y:0,width:0,height:0,maskUnits:0,maskContentUnits:0,"class":0},image:{preserveAspectRatio:0,transform:0,x:0,y:0,width:0,height:0,"xlink:href":0,"class":0},path:{d:"","class":0},g:{"class":0},feDistantLight:{azimuth:0,elevation:0},fePointLight:{x:0,y:0,z:0},feSpotLight:{x:0,y:0,z:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,specularExponent:0,limitingConeAngle:0},feBlend:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,in2:0,mode:0},feColorMatrix:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,type:0,values:0},feComponentTransfer:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0},feComposite:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,in2:0,operator:0,k1:0,k2:0,k3:0,k4:0},feConvolveMatrix:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,order:0,kernelMatrix:0,divisor:0,bias:0,targetX:0,targetY:0,edgeMode:0,kernelUnitLength:0,preserveAlpha:0},feDiffuseLighting:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,surfaceScale:0,diffuseConstant:0,kernelUnitLength:0},feDisplacementMap:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,in2:0,scale:0,xChannelSelector:0,yChannelSelector:0},feFlood:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"flood-color":0,"flood-opacity":0},feGaussianBlur:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,stdDeviation:0},feImage:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,externalResourcesRequired:0,preserveAspectRatio:0,"xlink:href":0},feMerge:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0},feMergeNode:{"in":0},feMorphology:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,operator:0,radius:0},feOffset:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,dx:0,dy:0},feSpecularLighting:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0,surfaceScale:0,specularConstant:0,specularExponent:0,kernelUnitLength:0},feTile:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,"in":0},feTurbulence:{height:0,result:0,width:0,x:0,y:0,"class":0,style:0,baseFrequency:0,numOctaves:0,seed:0,stitchTiles:0,type:0}};return me.feFuncR=me.feFuncG=me.feFuncB=me.feFuncA={type:0,tableValues:0,slope:0,intercept:0,amplitude:0,exponent:0,offset:0},e.on("snap.util.attr",function(t){var n=e.nt();n=n.substring(n.lastIndexOf(".")+1);var r=n.replace(/-(\w)/gi,function(t,e){return e.toUpperCase()});me[P](this.type)&&me[this.type][P](n)?null==t?this.node.removeAttribute(n):this.node.setAttribute(n,t):this.node.style[r]=null==t?X:t}),e.on("snap.util.getattr.transform",function(){return e.stop(),this.transform()})(-1),function(){function t(t){return function(){e.stop();var n=L.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+t);return"none"==n?n:r(L.doc.getElementById(n.match(W)[1]))}}function n(t){return function(n){e.stop();var r="marker"+t.charAt(0).toUpperCase()+t.substring(1);if(""==n||!n)return this.node.style[r]="none",void 0;if("marker"==n.type){var a=n.node.id;return a||i(n.node,{id:n.id}),this.node.style[r]="url(#"+a+")",void 0}}}e.on("snap.util.getattr.marker-end",t("end"))(-1),e.on("snap.util.getattr.markerEnd",t("end"))(-1),e.on("snap.util.getattr.marker-start",t("start"))(-1),e.on("snap.util.getattr.markerStart",t("start"))(-1),e.on("snap.util.getattr.marker-mid",t("mid"))(-1),e.on("snap.util.getattr.markerMid",t("mid"))(-1),e.on("snap.util.attr.marker-end",n("end"))(-1),e.on("snap.util.attr.markerEnd",n("end"))(-1),e.on("snap.util.attr.marker-start",n("start"))(-1),e.on("snap.util.attr.markerStart",n("start"))(-1),e.on("snap.util.attr.marker-mid",n("mid"))(-1),e.on("snap.util.attr.markerMid",n("mid"))(-1)}(),e.on("snap.util.getattr.r",function(){return"rect"==this.type&&i(this.node,"rx")==i(this.node,"ry")?(e.stop(),i(this.node,"rx")):void 0})(-1),e.on("snap.util.getattr.text",function(){if("text"==this.type||"tspan"==this.type){e.stop();var t=j(this.node);return 1==t.length?t[0]:t}})(-1),e.on("snap.util.getattr.#text",function(){return this.node.textContent})(-1),e.on("snap.util.getattr.viewBox",function(){e.stop();var t=i(this.node,"viewBox").split(Z);return r._.box(+t[0],+t[1],+t[2],+t[3])})(-1),e.on("snap.util.getattr.points",function(){var t=i(this.node,"points");return e.stop(),t.split(Z)}),e.on("snap.util.getattr.path",function(){var t=i(this.node,"d");return e.stop(),t}),e.on("snap.util.getattr",function(){var t=e.nt();return t=t.substring(t.lastIndexOf(".")+1),me[P](this.type)&&me[this.type][P](t)?this.node.getAttribute(t):L.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue(t)}),r.plugin=function(t){t(r,b,S,L)},L.win.Snap=r,r}();return r.plugin(function(t,e){function n(t){var e=n.ps=n.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var n in e)e[E](n)&&n!=t&&(e[n].sleep--,!e[n].sleep&&delete e[n])}),e[t]}function r(t,e,n,r){return null==t&&(t=e=n=r=0),null==e&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:r,h:r,x2:t+n,y2:e+r,cx:t+n/2,cy:e+r/2,r1:O.min(n,r)/2,r2:O.max(n,r)/2,r0:O.sqrt(n*n+r*r)/2,path:k(t,e,n,r),vb:[t,e,n,r].join(" ")}}function i(){return this.join(",").replace(G,"$1")}function a(t){var e=R(t);return e.toString=i,e}function o(t,e,n,r,i,a,o,s,h){return null==h?d(t,e,n,r,i,a,o,s):u(t,e,n,r,i,a,o,s,p(t,e,n,r,i,a,o,s,h))}function s(n,r){function i(t){return+(+t).toFixed(3)}return t._.cacher(function(t,a,s){t instanceof e&&(t=t.attr("d")),t=q(t);for(var h,l,c,f,d,p="",g={},y=0,x=0,m=t.length;m>x;x++){if(c=t[x],"M"==c[0])h=+c[1],l=+c[2];else{if(f=o(h,l,c[1],c[2],c[3],c[4],c[5],c[6]),y+f>a){if(r&&!g.start){if(d=o(h,l,c[1],c[2],c[3],c[4],c[5],c[6],a-y),p+=["C"+i(d.start.x),i(d.start.y),i(d.m.x),i(d.m.y),i(d.x),i(d.y)],s)return p;g.start=p,p=["M"+i(d.x),i(d.y)+"C"+i(d.n.x),i(d.n.y),i(d.end.x),i(d.end.y),i(c[5]),i(c[6])].join(),y+=f,h=+c[5],l=+c[6];continue}if(!n&&!r)return d=o(h,l,c[1],c[2],c[3],c[4],c[5],c[6],a-y)}y+=f,h=+c[5],l=+c[6]}p+=c.shift()+c}return g.end=p,d=n?y:r?g:u(h,l,c[0],c[1],c[2],c[3],c[4],c[5],1)},null,t._.clone)}function u(t,e,n,r,i,a,o,s,u){var h=1-u,l=X(h,3),c=X(h,2),f=u*u,d=f*u,p=l*t+3*c*u*n+3*h*u*u*i+d*o,g=l*e+3*c*u*r+3*h*u*u*a+d*s,y=t+2*u*(n-t)+f*(i-2*n+t),x=e+2*u*(r-e)+f*(a-2*r+e),m=n+2*u*(i-n)+f*(o-2*i+n),v=r+2*u*(a-r)+f*(s-2*a+r),b=h*t+u*n,w=h*e+u*r,k=h*i+u*o,C=h*a+u*s,S=90-180*O.atan2(y-m,x-v)/z;return{x:p,y:g,m:{x:y,y:x},n:{x:m,y:v},start:{x:b,y:w},end:{x:k,y:C},alpha:S}}function h(e,n,i,a,o,s,u,h){t.is(e,"array")||(e=[e,n,i,a,o,s,u,h]);var l=_.apply(null,e);return r(l.min.x,l.min.y,l.max.x-l.min.x,l.max.y-l.min.y)}function l(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height}function c(t,e){return t=r(t),e=r(e),l(e,t.x,t.y)||l(e,t.x2,t.y)||l(e,t.x,t.y2)||l(e,t.x2,t.y2)||l(t,e.x,e.y)||l(t,e.x2,e.y)||l(t,e.x,e.y2)||l(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)}function f(t,e,n,r,i){var a=-3*e+9*n-9*r+3*i,o=t*a+6*e-12*n+6*r;return t*o-3*e+3*n}function d(t,e,n,r,i,a,o,s,u){null==u&&(u=1),u=u>1?1:0>u?0:u;for(var h=u/2,l=12,c=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],d=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],p=0,g=0;l>g;g++){var y=h*c[g]+h,x=f(y,t,n,i,o),m=f(y,e,r,a,s),v=x*x+m*m;p+=d[g]*O.sqrt(v)}return h*p}function p(t,e,n,r,i,a,o,s,u){if(!(0>u||d(t,e,n,r,i,a,o,s)<u)){var h,l=1,c=l/2,f=l-c,p=.01;for(h=d(t,e,n,r,i,a,o,s,f);V(h-u)>p;)c/=2,f+=(u>h?1:-1)*c,h=d(t,e,n,r,i,a,o,s,f);return f}}function g(t,e,n,r,i,a,o,s){if(!(I(t,n)<D(i,o)||D(t,n)>I(i,o)||I(e,r)<D(a,s)||D(e,r)>I(a,s))){var u=(t*r-e*n)*(i-o)-(t-n)*(i*s-a*o),h=(t*r-e*n)*(a-s)-(e-r)*(i*s-a*o),l=(t-n)*(a-s)-(e-r)*(i-o);if(l){var c=u/l,f=h/l,d=+c.toFixed(2),p=+f.toFixed(2);if(!(d<+D(t,n).toFixed(2)||d>+I(t,n).toFixed(2)||d<+D(i,o).toFixed(2)||d>+I(i,o).toFixed(2)||p<+D(e,r).toFixed(2)||p>+I(e,r).toFixed(2)||p<+D(a,s).toFixed(2)||p>+I(a,s).toFixed(2)))return{x:c,y:f}}}}function y(t,e,n){var r=h(t),i=h(e);if(!c(r,i))return n?0:[];for(var a=d.apply(0,t),o=d.apply(0,e),s=~~(a/5),l=~~(o/5),f=[],p=[],y={},x=n?0:[],m=0;s+1>m;m++){var v=u.apply(0,t.concat(m/s));f.push({x:v.x,y:v.y,t:m/s})}for(m=0;l+1>m;m++)v=u.apply(0,e.concat(m/l)),p.push({x:v.x,y:v.y,t:m/l});for(m=0;s>m;m++)for(var b=0;l>b;b++){var w=f[m],k=f[m+1],C=p[b],S=p[b+1],A=V(k.x-w.x)<.001?"y":"x",M=V(S.x-C.x)<.001?"y":"x",B=g(w.x,w.y,k.x,k.y,C.x,C.y,S.x,S.y);if(B){if(y[B.x.toFixed(4)]==B.y.toFixed(4))continue;y[B.x.toFixed(4)]=B.y.toFixed(4);var F=w.t+V((B[A]-w[A])/(k[A]-w[A]))*(k.t-w.t),T=C.t+V((B[M]-C[M])/(S[M]-C[M]))*(S.t-C.t);F>=0&&1>=F&&T>=0&&1>=T&&(n?x++:x.push({x:B.x,y:B.y,t1:F,t2:T}))}}return x}function x(t,e){return v(t,e)}function m(t,e){return v(t,e,1)}function v(t,e,n){t=q(t),e=q(e);for(var r,i,a,o,s,u,h,l,c,f,d=n?0:[],p=0,g=t.length;g>p;p++){var x=t[p];if("M"==x[0])r=s=x[1],i=u=x[2];else{"C"==x[0]?(c=[r,i].concat(x.slice(1)),r=c[6],i=c[7]):(c=[r,i,r,i,s,u,s,u],r=s,i=u);for(var m=0,v=e.length;v>m;m++){var b=e[m];if("M"==b[0])a=h=b[1],o=l=b[2];else{"C"==b[0]?(f=[a,o].concat(b.slice(1)),a=f[6],o=f[7]):(f=[a,o,a,o,h,l,h,l],a=h,o=l);var w=y(c,f,n);if(n)d+=w;else{for(var k=0,C=w.length;C>k;k++)w[k].segment1=p,w[k].segment2=m,w[k].bez1=c,w[k].bez2=f;d=d.concat(w)}}}}}return d}function b(t,e,n){var r=w(t);return l(r,e,n)&&1==v(t,[["M",e,n],["H",r.x2+10]],1)%2}function w(t){var e=n(t);if(e.bbox)return R(e.bbox);if(!t)return r();t=q(t);for(var i,a=0,o=0,s=[],u=[],h=0,l=t.length;l>h;h++)if(i=t[h],"M"==i[0])a=i[1],o=i[2],s.push(a),u.push(o);else{var c=_(a,o,i[1],i[2],i[3],i[4],i[5],i[6]);s=s.concat(c.min.x,c.max.x),u=u.concat(c.min.y,c.max.y),a=i[5],o=i[6]}var f=D.apply(0,s),d=D.apply(0,u),p=I.apply(0,s),g=I.apply(0,u),y=r(f,d,p-f,g-d);return e.bbox=R(y),y}function k(t,e,n,r,a){if(a)return[["M",t+a,e],["l",n-2*a,0],["a",a,a,0,0,1,a,a],["l",0,r-2*a],["a",a,a,0,0,1,-a,a],["l",2*a-n,0],["a",a,a,0,0,1,-a,-a],["l",0,2*a-r],["a",a,a,0,0,1,a,-a],["z"]];var o=[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]];return o.toString=i,o}function C(t,e,n,r,a){if(null==a&&null==r&&(r=n),null!=a)var o=Math.PI/180,s=t+n*Math.cos(-r*o),u=t+n*Math.cos(-a*o),h=e+n*Math.sin(-r*o),l=e+n*Math.sin(-a*o),c=[["M",s,h],["A",n,n,0,+(a-r>180),0,u,l]];else c=[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return c.toString=i,c}function S(e){var r=n(e),o=String.prototype.toLowerCase;if(r.rel)return a(r.rel);t.is(e,"array")&&t.is(e&&e[0],"array")||(e=t.parsePathString(e));var s=[],u=0,h=0,l=0,c=0,f=0;"M"==e[0][0]&&(u=e[0][1],h=e[0][2],l=u,c=h,f++,s.push(["M",u,h]));for(var d=f,p=e.length;p>d;d++){var g=s[d]=[],y=e[d];if(y[0]!=o.call(y[0]))switch(g[0]=o.call(y[0]),g[0]){case"a":g[1]=y[1],g[2]=y[2],g[3]=y[3],g[4]=y[4],g[5]=y[5],g[6]=+(y[6]-u).toFixed(3),g[7]=+(y[7]-h).toFixed(3);break;case"v":g[1]=+(y[1]-h).toFixed(3);break;case"m":l=y[1],c=y[2];default:for(var x=1,m=y.length;m>x;x++)g[x]=+(y[x]-(x%2?u:h)).toFixed(3)}else{g=s[d]=[],"m"==y[0]&&(l=y[1]+u,c=y[2]+h);for(var v=0,b=y.length;b>v;v++)s[d][v]=y[v]}var w=s[d].length;switch(s[d][0]){case"z":u=l,h=c;break;case"h":u+=+s[d][w-1];break;case"v":h+=+s[d][w-1];break;default:u+=+s[d][w-2],h+=+s[d][w-1]}}return s.toString=i,r.rel=a(s),s}function A(e){var r=n(e);if(r.abs)return a(r.abs);if(P(e,"array")&&P(e&&e[0],"array")||(e=t.parsePathString(e)),!e||!e.length)return[["M",0,0]];var o,s=[],u=0,h=0,l=0,c=0,f=0;"M"==e[0][0]&&(u=+e[0][1],h=+e[0][2],l=u,c=h,f++,s[0]=["M",u,h]);for(var d,p,g=3==e.length&&"M"==e[0][0]&&"R"==e[1][0].toUpperCase()&&"Z"==e[2][0].toUpperCase(),y=f,x=e.length;x>y;y++){if(s.push(d=[]),p=e[y],o=p[0],o!=o.toUpperCase())switch(d[0]=o.toUpperCase(),d[0]){case"A":d[1]=p[1],d[2]=p[2],d[3]=p[3],d[4]=p[4],d[5]=p[5],d[6]=+(p[6]+u),d[7]=+(p[7]+h);break;case"V":d[1]=+p[1]+h;break;case"H":d[1]=+p[1]+u;break;case"R":for(var m=[u,h].concat(p.slice(1)),v=2,b=m.length;b>v;v++)m[v]=+m[v]+u,m[++v]=+m[v]+h;s.pop(),s=s.concat(j(m,g));break;case"O":s.pop(),m=C(u,h,p[1],p[2]),m.push(m[0]),s=s.concat(m);break;case"U":s.pop(),s=s.concat(C(u,h,p[1],p[2],p[3])),d=["U"].concat(s[s.length-1].slice(-2));break;case"M":l=+p[1]+u,c=+p[2]+h;default:for(v=1,b=p.length;b>v;v++)d[v]=+p[v]+(v%2?u:h)}else if("R"==o)m=[u,h].concat(p.slice(1)),s.pop(),s=s.concat(j(m,g)),d=["R"].concat(p.slice(-2));else if("O"==o)s.pop(),m=C(u,h,p[1],p[2]),m.push(m[0]),s=s.concat(m);else if("U"==o)s.pop(),s=s.concat(C(u,h,p[1],p[2],p[3])),d=["U"].concat(s[s.length-1].slice(-2));else for(var w=0,k=p.length;k>w;w++)d[w]=p[w];if(o=o.toUpperCase(),"O"!=o)switch(d[0]){case"Z":u=l,h=c;break;case"H":u=d[1];break;case"V":h=d[1];break;case"M":l=d[d.length-2],c=d[d.length-1];default:u=d[d.length-2],h=d[d.length-1]}}return s.toString=i,r.abs=a(s),s}function M(t,e,n,r){return[t,e,n,r,n,r]}function B(t,e,n,r,i,a){var o=1/3,s=2/3;return[o*t+s*n,o*e+s*r,o*i+s*n,o*a+s*r,i,a]}function F(e,n,r,i,a,o,s,u,h,l){var c,f=120*z/180,d=z/180*(+a||0),p=[],g=t._.cacher(function(t,e,n){var r=t*O.cos(n)-e*O.sin(n),i=t*O.sin(n)+e*O.cos(n);return{x:r,y:i}});if(l)S=l[0],A=l[1],k=l[2],C=l[3];else{c=g(e,n,-d),e=c.x,n=c.y,c=g(u,h,-d),u=c.x,h=c.y;var y=(O.cos(z/180*a),O.sin(z/180*a),(e-u)/2),x=(n-h)/2,m=y*y/(r*r)+x*x/(i*i);m>1&&(m=O.sqrt(m),r=m*r,i=m*i);var v=r*r,b=i*i,w=(o==s?-1:1)*O.sqrt(V((v*b-v*x*x-b*y*y)/(v*x*x+b*y*y))),k=w*r*x/i+(e+u)/2,C=w*-i*y/r+(n+h)/2,S=O.asin(((n-C)/i).toFixed(9)),A=O.asin(((h-C)/i).toFixed(9));S=k>e?z-S:S,A=k>u?z-A:A,0>S&&(S=2*z+S),0>A&&(A=2*z+A),s&&S>A&&(S-=2*z),!s&&A>S&&(A-=2*z)}var M=A-S;if(V(M)>f){var B=A,T=u,_=h;A=S+f*(s&&A>S?1:-1),u=k+r*O.cos(A),h=C+i*O.sin(A),p=F(u,h,r,i,a,0,s,T,_,[A,B,k,C])}M=A-S;var q=O.cos(S),N=O.sin(S),j=O.cos(A),L=O.sin(A),P=O.tan(M/4),R=4/3*r*P,E=4/3*i*P,G=[e,n],U=[e+R*N,n-E*q],D=[u+R*L,h-E*j],I=[u,h];if(U[0]=2*G[0]-U[0],U[1]=2*G[1]-U[1],l)return[U,D,I].concat(p);p=[U,D,I].concat(p).join().split(",");for(var X=[],Y=0,H=p.length;H>Y;Y++)X[Y]=Y%2?g(p[Y-1],p[Y],d).y:g(p[Y],p[Y+1],d).x;return X}function T(t,e,n,r,i,a,o,s,u){var h=1-u;return{x:X(h,3)*t+3*X(h,2)*u*n+3*h*u*u*i+X(u,3)*o,y:X(h,3)*e+3*X(h,2)*u*r+3*h*u*u*a+X(u,3)*s}}function _(t,e,n,r,i,a,o,s){var u,h=i-2*n+t-(o-2*i+n),l=2*(n-t)-2*(i-n),c=t-n,f=(-l+O.sqrt(l*l-4*h*c))/2/h,d=(-l-O.sqrt(l*l-4*h*c))/2/h,p=[e,s],g=[t,o];return V(f)>"1e12"&&(f=.5),V(d)>"1e12"&&(d=.5),f>0&&1>f&&(u=T(t,e,n,r,i,a,o,s,f),g.push(u.x),p.push(u.y)),d>0&&1>d&&(u=T(t,e,n,r,i,a,o,s,d),g.push(u.x),p.push(u.y)),h=a-2*r+e-(s-2*a+r),l=2*(r-e)-2*(a-r),c=e-r,f=(-l+O.sqrt(l*l-4*h*c))/2/h,d=(-l-O.sqrt(l*l-4*h*c))/2/h,V(f)>"1e12"&&(f=.5),V(d)>"1e12"&&(d=.5),f>0&&1>f&&(u=T(t,e,n,r,i,a,o,s,f),g.push(u.x),p.push(u.y)),d>0&&1>d&&(u=T(t,e,n,r,i,a,o,s,d),g.push(u.x),p.push(u.y)),{min:{x:D.apply(0,g),y:D.apply(0,p)},max:{x:I.apply(0,g),y:I.apply(0,p)}}}function q(t,e){var r=!e&&n(t);if(!e&&r.curve)return a(r.curve);for(var i=A(t),o=e&&A(e),s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},u={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(t,e){var n,r;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(F.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":n=e.x+(e.x-(e.bx||e.x)),r=e.y+(e.y-(e.by||e.y)),t=["C",n,r].concat(t.slice(1));break;case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"].concat(B(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(B(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(M(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(M(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(M(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(M(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var n=t[e];n.length;)t.splice(e++,0,["C"].concat(n.splice(0,6)));t.splice(e,1),d=I(i.length,o&&o.length||0)}},c=function(t,e,n,r,a){t&&e&&"M"==t[a][0]&&"M"!=e[a][0]&&(e.splice(a,0,["M",r.x,r.y]),n.bx=0,n.by=0,n.x=t[a][1],n.y=t[a][2],d=I(i.length,o&&o.length||0))},f=0,d=I(i.length,o&&o.length||0);d>f;f++){i[f]=h(i[f],s),l(i,f),o&&(o[f]=h(o[f],u)),o&&l(o,f),c(i,o,s,u,f),c(o,i,u,s,f);var p=i[f],g=o&&o[f],y=p.length,x=o&&g.length;s.x=p[y-2],s.y=p[y-1],s.bx=U(p[y-4])||s.x,s.by=U(p[y-3])||s.y,u.bx=o&&(U(g[x-4])||u.x),u.by=o&&(U(g[x-3])||u.y),u.x=o&&g[x-2],u.y=o&&g[x-1]}return o||(r.curve=a(i)),o?[i,o]:i}function N(t,e){if(!e)return t;var n,r,i,a,o,s,u;for(t=q(t),i=0,o=t.length;o>i;i++)for(u=t[i],a=1,s=u.length;s>a;a+=2)n=e.x(u[a],u[a+1]),r=e.y(u[a],u[a+1]),u[a]=n,u[a+1]=r;return t}function j(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4==r?a[3]={x:+t[0],y:+t[1]}:i-2==r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4==r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return n}var L=e.prototype,P=t.is,R=t._.clone,E="hasOwnProperty",G=/,?([a-z]),?/gi,U=parseFloat,O=Math,z=O.PI,D=O.min,I=O.max,X=O.pow,V=O.abs,Y=s(1),H=s(),$=s(0,1),W=t._unit2px,Q={path:function(t){return t.attr("path")},circle:function(t){var e=W(t);return C(e.cx,e.cy,e.r)},ellipse:function(t){var e=W(t);return C(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=W(t);return k(e.x,e.y,e.width,e.height,e.rx,e.ry)},image:function(t){var e=W(t);return k(e.x,e.y,e.width,e.height)},text:function(t){var e=t.node.getBBox();return k(e.x,e.y,e.width,e.height)},g:function(t){var e=t.node.getBBox();return k(e.x,e.y,e.width,e.height)},symbol:function(t){var e=t.getBBox();return k(e.x,e.y,e.width,e.height)},polyline:function(t){return"M"+t.attr("points")},polygon:function(t){return"M"+t.attr("points")+"z"}};t.path=n,t.path.getTotalLength=Y,t.path.getPointAtLength=H,t.path.getSubpath=function(t,e,n){if(this.getTotalLength(t)-n<1e-6)return $(t,e).end;var r=$(t,n,1);return e?$(r,e).end:r},L.getTotalLength=function(){return this.node.getTotalLength?this.node.getTotalLength():void 0},L.getPointAtLength=function(t){return H(this.attr("d"),t)},L.getSubpath=function(e,n){return t.path.getSubpath(this.attr("d"),e,n)},t._.box=r,t.path.findDotsAtSegment=u,t.path.bezierBBox=h,t.path.isPointInsideBBox=l,t.path.isBBoxIntersect=c,t.path.intersection=x,t.path.intersectionNumber=m,t.path.isPointInside=b,t.path.getBBox=w,t.path.get=Q,t.path.toRelative=S,t.path.toAbsolute=A,t.path.toCubic=q,t.path.map=N,t.path.toString=i,t.path.clone=a}),r.plugin(function(t){var e=Math.max,n=Math.min,r=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,n=t.length;n>e;e++)t[e]&&(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},i=r.prototype;i.push=function(){for(var t,e,n=0,r=arguments.length;r>n;n++)t=arguments[n],t&&(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},i.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},i.forEach=function(t,e){for(var n=0,r=this.items.length;r>n;n++)if(t.call(e,this.items[n],n)===!1)return this;return this},i.attr=function(t){for(var e=0,n=this.items.length;n>e;e++)this.items[e].attr(t);return this},i.clear=function(){for(;this.length;)this.pop()},i.splice=function(t,i){t=0>t?e(this.length+t,0):t,i=e(0,n(this.length-t,i));var a,o=[],s=[],u=[];for(a=2;a<arguments.length;a++)u.push(arguments[a]);for(a=0;i>a;a++)s.push(this[t+a]);for(;a<this.length-t;a++)o.push(this[t+a]);var h=u.length;for(a=0;a<h+o.length;a++)this.items[t+a]=this[t+a]=h>a?u[a]:o[a-h];for(a=this.items.length=this.length-=i-h;this[a];)delete this[a++];return new r(s)},i.exclude=function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]==t)return this.splice(e,1),!0;return!1},i.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},i.getBBox=function(){for(var t=[],r=[],i=[],a=[],o=this.items.length;o--;)if(!this.items[o].removed){var s=this.items[o].getBBox();t.push(s.x),r.push(s.y),i.push(s.x+s.width),a.push(s.y+s.height)}return t=n.apply(0,t),r=n.apply(0,r),i=e.apply(0,i),a=e.apply(0,a),{x:t,y:r,x2:i,y2:a,width:i-t,height:a-r,cx:t+(i-t)/2,cy:r+(a-r)/2}},i.clone=function(t){t=new r;for(var e=0,n=this.items.length;n>e;e++)t.push(this.items[e].clone());return t},i.toString=function(){return"Snapâ€˜s set"},i.type="set",t.set=function(){var t=new r;return arguments.length&&t.push.apply(t,Array.prototype.slice.call(arguments,0)),t}}),r.plugin(function(t,e){function n(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}}function r(e,r,i){r=c(r).replace(/\.{3}|\u2026/g,e),e=t.parseTransformString(e)||[],r=t.parseTransformString(r)||[];for(var a,o,h,l,f=Math.max(e.length,r.length),d=[],p=[],g=0;f>g;g++){if(h=e[g]||n(r[g]),l=r[g]||n(h),h[0]!=l[0]||"r"==h[0].toLowerCase()&&(h[2]!=l[2]||h[3]!=l[3])||"s"==h[0].toLowerCase()&&(h[3]!=l[3]||h[4]!=l[4])){e=t._.transform2matrix(e,i()),r=t._.transform2matrix(r,i()),d=[["m",e.a,e.b,e.c,e.d,e.e,e.f]],p=[["m",r.a,r.b,r.c,r.d,r.e,r.f]];break}for(d[g]=[],p[g]=[],a=0,o=Math.max(h.length,l.length);o>a;a++)a in h&&(d[g][a]=h[a]),a in l&&(p[g][a]=l[a])}return{from:u(d),to:u(p),f:s(d)}}function i(t){return t}function a(t){return function(e){return+e.toFixed(3)+t}}function o(e){return t.rgb(e[0],e[1],e[2])}function s(t){var e,n,r,i,a,o,s=0,u=[];for(e=0,n=t.length;n>e;e++){for(a="[",o=['"'+t[e][0]+'"'],r=1,i=t[e].length;i>r;r++)o[r]="val["+s++ +"]";a+=o+"]",u[e]=a}return Function("val","return Snap.path.toString.call(["+u+"])")}function u(t){for(var e=[],n=0,r=t.length;r>n;n++)for(var i=1,a=t[n].length;a>i;i++)e.push(t[n][i]);return e}var h={},l=/[a-z]+$/i,c=String;h.stroke=h.fill="colour",e.prototype.equal=function(e,n){var f,d,p=c(this.attr(e)||""),g=this;if(p==+p&&n==+n)return{from:+p,to:+n,f:i};if("colour"==h[e])return f=t.color(p),d=t.color(n),{from:[f.r,f.g,f.b,f.opacity],to:[d.r,d.g,d.b,d.opacity],f:o};if("transform"==e||"gradientTransform"==e||"patternTransform"==e)return r(p,n,function(){return g.getBBox(1)});if("d"==e||"path"==e)return f=t.path.toCubic(p,n),{from:u(f[0]),to:u(f[1]),f:s(f[0])};var y=p.match(l),x=n.match(l);return y&&y==x?{from:parseFloat(p),to:parseFloat(n),f:a(y)}:{from:this.asPX(e),to:this.asPX(e,n),f:i}}}),r.plugin(function(t,n,r,i){for(var a=n.prototype,o="hasOwnProperty",s=("createTouch"in i.doc),u=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],h={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},l=function(t){var e="y"==t?"scrollTop":"scrollLeft";
return i.doc.documentElement[e]||i.doc.body[e]},c=function(){this.returnValue=!1},f=function(){return this.originalEvent.preventDefault()},d=function(){this.cancelBubble=!0},p=function(){return this.originalEvent.stopPropagation()},g=function(){return i.doc.addEventListener?function(t,e,n,r){var i=s&&h[e]?h[e]:e,a=function(i){var a=l("y"),u=l("x"),c=i.clientX+u,d=i.clientY+a;if(s&&h[o](e))for(var g=0,y=i.targetTouches&&i.targetTouches.length;y>g;g++)if(i.targetTouches[g].target==t){var x=i;i=i.targetTouches[g],i.originalEvent=x,i.preventDefault=f,i.stopPropagation=p;break}return n.call(r,i,c,d)};return t.addEventListener(i,a,!1),function(){return t.removeEventListener(i,a,!1),!0}}:i.doc.attachEvent?function(t,e,n,r){var a=function(t){t=t||i.win.event;var e=l("y"),a=l("x"),o=t.clientX+a,s=t.clientY+e;return t.preventDefault=t.preventDefault||c,t.stopPropagation=t.stopPropagation||d,n.call(r,t,o,s)};t.attachEvent("on"+e,a);var o=function(){return t.detachEvent("on"+e,a),!0};return o}:void 0}(),y=[],x=function(n){for(var r,i=n.clientX,a=n.clientY,o=l("y"),u=l("x"),h=y.length;h--;){if(r=y[h],s){for(var c,f=n.touches.length;f--;)if(c=n.touches[f],c.identifier==r.el._drag.id){i=c.clientX,a=c.clientY,(n.originalEvent?n.originalEvent:n).preventDefault();break}}else n.preventDefault();var d=r.el.node;t._.glob,d.nextSibling,d.parentNode,d.style.display,i+=u,a+=o,e("snap.drag.move."+r.el.id,r.move_scope||r.el,i-r.el._drag.x,a-r.el._drag.y,i,a,n)}},m=function(n){t.unmousemove(x).unmouseup(m);for(var r,i=y.length;i--;)r=y[i],r.el._drag={},e("snap.drag.end."+r.el.id,r.end_scope||r.start_scope||r.move_scope||r.el,n);y=[]},v=u.length;v--;)!function(e){t[e]=a[e]=function(n,r){return t.is(n,"function")&&(this.events=this.events||[],this.events.push({name:e,f:n,unbind:g(this.shape||this.node||i.doc,e,n,r||this)})),this},t["un"+e]=a["un"+e]=function(t){for(var n=this.events||[],r=n.length;r--;)if(n[r].name==e&&(n[r].f==t||!t))return n[r].unbind(),n.splice(r,1),!n.length&&delete this.events,this;return this}}(u[v]);a.hover=function(t,e,n,r){return this.mouseover(t,n).mouseout(e,r||n)},a.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var b=[];a.drag=function(n,r,i,a,o,s){function u(u){(u.originalEvent||u).preventDefault();var h=l("y"),c=l("x");this._drag.x=u.clientX+c,this._drag.y=u.clientY+h,this._drag.id=u.identifier,!y.length&&t.mousemove(x).mouseup(m),y.push({el:this,move_scope:a,start_scope:o,end_scope:s}),r&&e.on("snap.drag.start."+this.id,r),n&&e.on("snap.drag.move."+this.id,n),i&&e.on("snap.drag.end."+this.id,i),e("snap.drag.start."+this.id,o||a||this,u.clientX+c,u.clientY+h,u)}if(!arguments.length){var h;return this.drag(function(t,e){this.attr({transform:h+(h?"T":"t")+[t,e]})},function(){h=this.transform().local})}return this._drag={},b.push({el:this,start:u}),this.mousedown(u),this},a.undrag=function(){for(var n=b.length;n--;)b[n].el==this&&(this.unmousedown(b[n].start),b.splice(n,1),e.unbind("snap.drag.*."+this.id));return!b.length&&t.unmousemove(x).unmouseup(m),this}}),r.plugin(function(t,n,r){var i=(n.prototype,r.prototype),a=/^\s*url\((.+)\)/,o=String,s=t._.$;t.filter={},i.filter=function(e){var r=this;"svg"!=r.type&&(r=r.paper);var i=t.parse(o(e)),a=t._.id(),u=r.node.offsetWidth,h=r.node.offsetHeight,l=s("filter");return s(l,{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:u,height:h}),l.appendChild(i.node),r.defs.appendChild(l),new n(l)},e.on("snap.util.getattr.filter",function(){e.stop();var n=s(this.node,"filter");if(n){var r=o(n).match(a);return r&&t.select(r[1])}}),e.on("snap.util.attr.filter",function(t){if(t instanceof n&&"filter"==t.type){e.stop();var r=t.node.id;r||(s(t.node,{id:t.id}),r=t.id),s(this.node,{filter:"url(#"+r+")"})}t&&"none"!=t||(e.stop(),this.node.removeAttribute("filter"))}),t.filter.blur=function(e,n){null==e&&(e=2);var r=null==n?e:[e,n];return t.format('<feGaussianBlur stdDeviation="{def}"/>',{def:r})},t.filter.blur.toString=function(){return this()},t.filter.shadow=function(e,n,r,i){return i=i||"#000",null==r&&(r=4),"string"==typeof r&&(i=r,r=4),null==e&&(e=0,n=2),null==n&&(n=e),i=t.color(i),t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:i,dx:e,dy:n,blur:r})},t.filter.shadow.toString=function(){return this()},t.filter.grayscale=function(e){return null==e&&(e=1),t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:.2126+.7874*(1-e),b:.7152-.7152*(1-e),c:.0722-.0722*(1-e),d:.2126-.2126*(1-e),e:.7152+.2848*(1-e),f:.0722-.0722*(1-e),g:.2126-.2126*(1-e),h:.0722+.9278*(1-e)})},t.filter.grayscale.toString=function(){return this()},t.filter.sepia=function(e){return null==e&&(e=1),t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:.393+.607*(1-e),b:.769-.769*(1-e),c:.189-.189*(1-e),d:.349-.349*(1-e),e:.686+.314*(1-e),f:.168-.168*(1-e),g:.272-.272*(1-e),h:.534-.534*(1-e),i:.131+.869*(1-e)})},t.filter.sepia.toString=function(){return this()},t.filter.saturate=function(e){return null==e&&(e=1),t.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-e})},t.filter.saturate.toString=function(){return this()},t.filter.hueRotate=function(e){return e=e||0,t.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:e})},t.filter.hueRotate.toString=function(){return this()},t.filter.invert=function(e){return null==e&&(e=1),t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:e,amount2:1-e})},t.filter.invert.toString=function(){return this()},t.filter.brightness=function(e){return null==e&&(e=1),t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:e})},t.filter.brightness.toString=function(){return this()},t.filter.contrast=function(e){return null==e&&(e=1),t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:e,amount2:.5-e/2})},t.filter.contrast.toString=function(){return this()}}),r});
var Kilix={colors:{col1:"#61AFF0",col2:"#ff4a46",col3:"#009884",col4:"#e79027",col5:"#087ec2"},init:function(){Kilix.resize(),Kilix.pushState(),Kilix.switchSVG(),Kilix.nav(),setTimeout(function(){Kilix[$(".container").data("page")].init()},300)},resize:function(){Kilix.resizeLanding(),$(window).resize(function(){Kilix.resizeLanding()})},resizeLanding:function(){var o=$(window).height();window.matchMedia("(min-width: 40em)").matches?($(".landing-home").css("height",o),$(".home .intro.desktop").css("margin-top",o)):($(".landing-home").attr("style",""),$(".home .intro.desktop").attr("style",""))},pushState:function(){function o(o){var i=o.url,a=$(".container").data("page");$("html, body").animate({scrollTop:0}),n=s[o.title.toLowerCase()],$(".nav-link.current").removeClass("current"),$('.nav-link[data-pos="'+n+'"]').addClass("current"),e=n>t?!0:!1,$(".main-wrapper").append("<div class='wrapper wrapper-new'></div>"),e||$(".wrapper-new").addClass("wrapper-prev"),$(".wrapper-new").load(i+" .container",function(){Kilix[a].destroy(),Kilix.resizeLanding(),$(".wrapper:first-child").transition({x:e?"-100%":"100%",opacity:1,delay:500},1200),$(".wrapper-new").css({opacity:0,x:"0%"}).transition({x:"0%",opacity:1,delay:500},1200,function(){$(".wrapper:first-child").remove(),$(".wrapper-new").attr("style","").removeClass("wrapper-new"),$(".wrapper-prev").attr("style","").removeClass("wrapper-prev"),$(".nav-links-wrapper a, .footer-links a").addClass("enabled"),Pos=$(".container").data("pos"),Kilix[o.title.toLowerCase()].init()})})}function i(i){o(i)}"file:"===document.location.protocol&&alert("The HTML5 History API (and thus History.js) do not work on files, please upload it to a server.");var t,n,a=window.History,e=(a.getState(),!0),s={home:1,team:2,agilite:3,contact:4};a.Adapter.bind(window,"statechange",function(){var o=a.getState();a.log("statechange:",o.data,o.title,o.url),i(o)}),$(".nav-links-wrapper a.enabled, .footer-links a.enabled").on("click",function(o){o.preventDefault(),$(this).hasClass("enabled")&&($(".nav-links-wrapper a, .footer-links a").removeClass("enabled"),$("body").removeClass("unfolded"),t=$(".nav-link.current").data("pos"),a.pushState(null,this.textContent,this.href),o.preventDefault())})},switchSVG:function(){Modernizr.svg?$("img.svg").each(function(){var o=$(this),i=o.attr("id"),t=o.attr("class"),n=o.attr("src");$.get(n,function(n){var a=$(n).find("svg");"undefined"!=typeof i&&(a=a.attr("id",i)),"undefined"!=typeof t&&(a=a.attr("class",t+" replaced-svg")),a=a.removeAttr("xmlns:a"),o.replaceWith(a)})}):$('img.svg[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")})},nav:function(){$(".toggle-menu").on("click",function(){$(".nav-links-wrapper").removeClass("nav-links-hidden"),$("body").toggleClass("unfolded"),window.setTimeout(function(){$("body").hasClass("unfolded")||$(".nav-links-wrapper").addClass("nav-links-hidden")},605)}),$(".back-to-top").on("click",function(){$("html, body").animate({scrollTop:0},"slow")}),$(".nav-link-contact").on("click",function(){$("html, body").animate({scrollTop:$("body").height()},"slow")})},wayPoints:function(){console.log("ThisIsAWayPoint"),$("footer").waypoint({handler:function(o){"down"==o?$(".back-to-top").addClass("force-opacity"):$(".back-to-top").removeClass("force-opacity")},offset:"bottom-in-view"}),$(".intro").waypoint(function(){$(".navbar").toggleClass("navbar-top")},{offset:"100px"}),$(".landing h1, .landing-main-text, #KILIX-logo").on("click",function(){$("html, body").animate({scrollTop:$(".intro").offset().top-80},"slow")})},changeXColor:function(o,i){"none"!=i?($(".logo").addClass("animated"),setTimeout(function(){$(".logo").removeClass("animated")},2e3),o.each(function(o){var t=$(this);setTimeout(function(){t.css("fill",i)},100*(o+1))})):($(".logo").addClass("animated"),setTimeout(function(){$(".logo").removeClass("animated")},2e3),o.each(function(o){var i=$(this);setTimeout(function(){i.attr("style","")},100*(o+1))}))},loadKilixSvg:function(){var o=Snap("#KILIX-logo");Snap.load("./assets/img/logo_big.svg",function(i){o.append(i.select("#kilixSvg"))})},animations:{},home:{init:function(){Kilix.wayPoints(),Kilix.resize(),Kilix.loadKilixSvg();var o="50%";$(".next-section").on("click",function(){$("html, body").animate({scrollTop:$(this).closest(".❤").next().offset().top-90},"slow")}),$(".losange").on("click",function(){$("html, body").animate({scrollTop:$(".svg-valeur").offset().top-90},"slow")});var i=$(".❤");i.waypoint({handler:function(){var o=Kilix.colors[$(this).data("color")];Kilix.changeXColor($(".logo svg polygon"),o)},offset:"25%"});var t=!1;Kilix.animations.risques.setAnimStatus(!1),$(".svg-risque").waypoint(function(){0==t&&Kilix.animations.risques.start(),t=!0},{offset:o});var n=!1;Kilix.animations.valeur.setValueAnimStatus(!0),Kilix.animations.valeur.setValueLoadingStatus(!1),$(".svg-valeur").waypoint(function(){0==n&&Kilix.animations.valeur.start(),n=!0},{offset:o});var a=!1;Kilix.animations.amelioration.setAnimStatus(!1),$(".svg-amelio").waypoint(function(){0==a&&Kilix.animations.amelioration.start(),a=!0},{offset:o});var e=!1;Kilix.animations.extia.setAnimStatus(!1),$(".svg-extia").waypoint(function(){0==e&&Kilix.animations.extia.start(),e=!0},{offset:o}),console.log("Init Home")},destroy:function(){Kilix.animations.extia.freeIntervals(),console.log("Destroy Home"),$.waypoints("destroy"),$(".next-section").off(),$(".navbar").addClass("navbar-top"),Kilix.changeXColor($(".logo svg polygon"),"none"),$(".landing h1, .landing-main-text, #KILIX-logo").off()}},agilite:{init:function(){Kilix.wayPoints(),Kilix.switchSVG(),$(".losange").on("click",function(){$("html, body").animate({scrollTop:$(".content.desktop").offset().top-90},"slow")}),setTimeout(function(){Kilix.changeXColor($(".logo svg polygon"),"#FFAD00")},300);var o=!1;$(".svg-agilite").waypoint(function(){0==o&&(Kilix.animations.agilite.start(),o=!0)},{offset:"50%"});var i=!1;$(".svg-agilite").waypoint(function(){0==i&&(Kilix.animations.agilite.startSecond(),i=!0)},{offset:"25%"}),console.log("Init AGILITY")},destroy:function(){console.log("Destroy AGILITY"),$(".navbar").addClass("navbar-top"),$.waypoints("destroy"),Kilix.changeXColor($(".logo svg polygon"),"none"),$(".landing h1, .landing-main-text, #KILIX-logo").off()}},team:{init:function(){Kilix.wayPoints(),console.log("Init Team");var o="70%";$(".losange").on("click",function(){$("html, body").animate({scrollTop:$(".svg-anim").offset().top-90},"slow")});var i=!1;Kilix.animations.team.setAnimStatus(!1),$(".svg-anim").waypoint(function(){0==i&&Kilix.animations.team.start(),i=!0},{offset:o}),setTimeout(function(){Kilix.changeXColor($(".logo svg polygon"),Kilix.colors.col3)},300)},destroy:function(){console.log("Destroy Team"),$.waypoints("destroy"),$(".navbar").addClass("navbar-top"),$(".landing h1, .landing-main-text, #KILIX-logo").off(),Kilix.changeXColor($(".logo svg polygon"),"none")}}};$(function(){console.log("init"),Kilix.init()});
// Move a group on an isometric axis
function move(element, xAxis, yAxis, px, duration, delay, callback, anim) {

  var x = px,
      y = px/2;

  (yAxis == 'top') ? y = -y : y = y;
  (xAxis == 'right') ? x = x : x = -x;

  if (element.matrix != undefined) {
    var matrix = element.matrix.add(element.matrix.a, 0, 0, element.matrix.d, x, y);
    element.animate({transform: matrix.toTransformString()}, duration, anim);
  }
  else {
    element.animate({transform: "t"+[x, y]}, duration, anim);
  }

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

function moveWithoutMatrix(element, xAxis, yAxis, px, duration, delay, callback) {

  var x = px,
      y = px/2;

  (yAxis == 'top') ? y = -y : y = y;
  (xAxis == 'right') ? x = x : x = -x;

  element.animate({transform: "t"+[x, y]}, duration);

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}


function moveTop(element, px, duration, delay, callback) {

  var x = px,
      y = px/2;

  if (element.matrix != undefined) {
    var matrix = element.matrix.add(element.matrix.a, 0, 0, element.matrix.d, 0, y-px);
    element.animate({transform: matrix.toTransformString()}, duration);
  }
  else {
    element.animate({transform: "t"+[0, y-px]}, duration);
  }
}

// Move element with a bounce
function moveWithBounce(element, xAxis, yAxis, px, duration, delay, callback) {

  var px2 = 40,
      px3 = 20;

  moveWithoutMatrix(element, xAxis, yAxis, px+15, duration - 120, duration - 120, function(){
    moveWithoutMatrix(element, xAxis, yAxis, px-15, 60, 60, function(){
      moveWithoutMatrix(element, xAxis, yAxis, px, 60);
    });
  });

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on svg element (fill-opacity)
function bounce(element, duration, delay, callback) {
    var x = element.getBBox().x;
    offset = x/2 + 25;

    element.attr({
      transform: "t"+offset+"s0.4, 0.4"
    });

    element.animate({'fill-opacity':1,transform:"t0s1,1,0,0"}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on svg element (opacity)
function alterBounce(element, duration, delay, callback) {
    var x = element.getBBox().x;
    offset = x/2 + 25;

    element.attr({
      transform: "t"+offset+"s0.4, 0.4"
    });

    element.animate({'opacity':1,transform:"t0s1,1,0,0"}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger pulse effect on the scale
function scalePulse(element, scale, duration, delay, callback) {
  var pulseDuration = duration*2;

    element.animate({transform:"t0s"+scale}, duration, function() {
      element.animate({transform:"t0s1"}, duration);
    });

  var interval = setInterval(function() {
    element.animate({transform:"t0s"+scale}, duration, function() {
    });
  }, pulseDuration);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }

  return interval;
}

// Trigger pulse effect on the scale
function scale(element, scale, duration, delay, callback) {

    element.animate({'opacity':1, transform:"t0s"+scale}, duration, function() {
    });

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger pulse effect on the color
function colorPulse(element, newColor, duration, delay, callback) {
  var pulseDuration = duration*2,
      color = element.attr('fill');

  element.animate({fill: newColor}, duration, function() {
    element.animate({fill: color}, duration);
  });

  var interval = setInterval(function() {
    element.animate({fill: newColor}, duration, function() {
      element.animate({fill: color}, duration);
    });
  }, pulseDuration);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
  return interval;
}

// Trigger bounce effect on svg element
function removeWithBounce(element, duration, delay, callback) {
    var x = element.getBBox().x;
    offset = x/2 + 25;


    element.animate({'fill-opacity':0}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on each svg element
function bounceAllElements(collection, duration, delay, callback) {
    j = 0;
    function cycle() {
        bounce(collection[j], duration);
        j++;
        if (j < collection.length) {
          setTimeout(cycle, 10);
        }
    }
    cycle();

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

function roll(element, duration, amp) {
  element.animate({transform:"t0, "+-amp}, duration, mina.elastic);
}

function drawPath(s, el, duration, delay, anim, callback) {

    var path = s.path(el.attr('d'));
    var l = path.getTotalLength();

    path.attr({"stroke-dasharray": l+" "+l,
      'stroke-dashoffset': l, 
      fill: 'none', 
      strokeWidth: el.attr('stroke-width'),
      stroke: el.attr('stroke') });

    path.animate({'stroke-dashoffset': 0}, duration, anim);

    if (typeof callback !== 'undefined') {
     window.setTimeout(callback, delay);
    }

    return path;
}

function drawLine(s, el, duration, delay, anim, callback) {

    var line = s.line(el.attr('x2'), el.attr('y2'), el.attr('x2'), el.attr('y2'));

    line.attr({"stroke-dasharray": el.attr('stroke-dasharray'),
      fill: 'none', 
      strokeWidth: el.attr('stroke-width'),
      stroke: el.attr('stroke') });

    line.animate({'x1': el.attr('x1'), 'y1': el.attr('y1')}, duration, anim);

    if (typeof callback !== 'undefined') {
     window.setTimeout(callback, delay);
    }

    return line;
}

function lineDistance( x1, y1, x2, y2 ) {

  var xs = 0;
  var ys = 0;
 
  xs = x2 - x1;
  xs = xs * xs;
 
  ys = y2 - y1;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

function showCheckmark(el) {

  $('li path', el).each(function(i){
      $(this).css('-webkit-transition-delay', i*0.3+'s');
  });
  el.addClass('checked');
}

Kilix.animations['valeur'] = {

  valueLoadingStatus: false,
  valueAnimStatus: false,

  setValueLoadingStatus: function(value) {
    Kilix.animations['valeur'].valueLoadingStatus = value;
  },

  setValueAnimStatus: function(value) {
    Kilix.animations['valeur'].valueAnimStatus = value;
  },

  start: function() {

    var s = Snap("#VALEUR-dispatch"),
            elements = new Array(),
            colouredElements = new Array(),
            kartElements = new Array(),
            intervalEvents = new Array(),
            kart = null,
            delay = 50,
            duration = 500
            topTransDuration = 200,
            topTransValue = -40,
            topTransDelay = 100,
            scatterDuration = 500;

      Kilix.animations['valeur'].valueAnimStatus = false;
      if (!Kilix.animations['valeur'].valueLoadingStatus) {
        loadValueSvg();
      }
      else {
        resetValueAnimation();
      }

      $('#VALEUR-dispatch').on('click', function() {
        if (Kilix.animations['valeur'].valueAnimStatus == true) {
          Kilix.animations['valeur'].valueAnimStatus = false;
          resetValueAnimation();
        }
      });

    function loadValueSvg() {

      Snap.load("./assets/img/svg/kilix_valeur_kart.svg", function(f) {
        getKartElements(f);
        kart = f.select("#valeur-kart");
        kart.attr({'fill-opacity': 0});

        for (var element in kartElements) {
          kartElements[element].attr({'fill-opacity': 0});
        }
        s.append(kart);

      });

      Snap.load("./assets/img/svg/kilix_valeur_dispatch.svg", function(f) {
        getDispatchElements(f);

        for (var element in elements) {
          elements[element].attr({'fill-opacity': 0});
          s.append(elements[element]);
        }

        for (var element in colouredElements) {
          colouredElements[element].attr({'fill-opacity': 0});
          s.append(colouredElements[element]);
        }
        valueAnimationBootstrap();
      });
      Kilix.animations['valeur'].valueLoadingStatus = true;
    }

    function getDispatchElements(file) {
      elements['roueBackRight'] = file.select("#dispatch-roue-back-right"),
      elements['roueBackLeft'] = file.select("#dispatch-roue-back-left"),
      elements['carenageRight'] = file.select("#dispatch-carenage-right"),
      elements['carenageLeft'] = file.select("#dispatch-carenage-left"),
      elements['roueFrontRight'] = file.select("#dispatch-roue-front-right"),
      elements['roueFrontLeft'] = file.select("#dispatch-roue-front-left"),
      elements['moteur'] = file.select("#dispatch-moteur"),
      elements['moteurElec'] = file.select("#dispatch-moteur-elec"),
      elements['siege'] = file.select("#dispatch-siege"),
      elements['carenageFront'] = file.select("#dispatch-carenage-front"),
      elements['klaxon'] = file.select("#dispatch-klaxon"),
      elements['phare1'] = file.select("#dispatch-phare1"),
      elements['phare2'] = file.select("#dispatch-phare2"),
      elements['aileron'] = file.select("#dispatch-aileron"),
      elements['janteBackLeft'] = file.select("#dispatch-jante-back-left"),
      elements['janteFrontLeft'] = file.select("#dispatch-jante-front-left"),
      elements['janteBackRight'] = file.select("#dispatch-jante-back-right"),
      elements['janteFrontRight'] = file.select("#dispatch-jante-front-right");

      colouredElements['carenageRight'] = file.select('#dispatch-carenage-right-vert');
      colouredElements['carenageLeft'] = file.select('#dispatch-carenage-left-vert');
      colouredElements['siege'] = file.select('#dispatch-siege-vert');
      colouredElements['roueBackLeft'] = file.select('#dispatch-roue-back-left-vert');
      colouredElements['roueFrontLeft'] = file.select('#dispatch-roue-front-left-vert');
      colouredElements['roueBackRight'] = file.select('#dispatch-roue-back-right-vert');
      colouredElements['roueFrontRight'] = file.select('#dispatch-roue-front-right-vert');
      colouredElements['moteurElec'] = file.select('#dispatch-moteur-elec-green');
      colouredElements['carenageFront'] = file.select('#dispatch-carenage-front-vert');
    }

    function getKartElements(file) {
      kartElements['pilote'] = file.select('#valeur-pilote');
      kartElements['reload'] = file.select('#valeur-reload');
      kartElements['moteurElec'] = file.select('#valeur-moteur-elec');
      kartElements['roueBackRight'] = file.select('#valeur-roue-back-right-1');
      kartElements['roueBackRight2'] = file.select('#valeur-roue-back-right-2');
      kartElements['roueBackLeft'] = file.select('#valeur-roue-back-left-1');
      kartElements['roueBackLeft2'] = file.select('#valeur-roue-back-left-2');
      kartElements['carenageRight'] = file.select('#valeur-carenage-right');
      kartElements['carenageLeft'] = file.select('#valeur-carenage-left');
      kartElements['roueFrontRight'] = file.select('#valeur-roue-front-right-1');
      kartElements['roueFrontRight2'] = file.select('#valeur-roue-front-right-2');
      kartElements['roueFrontLeft'] = file.select('#valeur-roue-front-left-1');
      kartElements['roueFrontLeft2'] = file.select('#valeur-roue-front-left-2');
      kartElements['siege'] = file.select('#valeur-siege');
      kartElements['carenageFront'] = file.select('#valeur-carenage-front');
    }

    function resetValueAnimation() {
      kartElements['reload'].animate({'fill-opacity': 0}, 100, function() {
        // We clear setInterval events
        for (var i = intervalEvents.length - 1; i >= 0; i--) {
          window.clearInterval(intervalEvents[i]);
        };
        kart = s.select("#valeur-kart");

        var x = 1000,
            y = 1000/2;

        kart.animate({transform: "t"+[x, y]}, 1000, mina.backin);

        window.setTimeout(function() {
          resetValueGroup();
          valueAnimationBootstrap();
        }, 2000);
      });
    }

    function valueAnimationBootstrap() {

        // STEP 1, all elements pop in the page with bounce effect
        bounce(elements['siege'], duration, delay, function() {
          bounce(elements['carenageLeft'], duration, delay, function() {
            bounce(elements['roueBackLeft'], duration, delay, function() {
              bounceAllElements(elements['moteurElec'].selectAll("g"), duration);
              bounce(elements['moteurElec'], duration);
              bounce(elements['roueFrontLeft'], duration, delay, function() {
                bounce(elements['klaxon'], duration, delay, function() {
                  bounce(elements['roueBackRight'], duration, delay, function() {
                    bounce(elements['carenageRight'], duration, delay, function() {
                      bounce(elements['roueFrontRight'], duration, delay, function() {
                        bounce(elements['carenageFront'], duration, delay, function() {
                          bounce(elements['janteBackLeft'], duration, delay, function() {
                            bounce(elements['phare2'], duration, delay, function() {
                              bounce(elements['janteFrontRight'], duration, delay, function() {
                                bounce(elements['aileron'], duration, delay, function() {
                                  bounce(elements['phare1'], duration, delay, function() {
                                    bounce(elements['janteFrontLeft'], duration, delay, function() {
                                      bounce(elements['janteBackRight'], duration, delay, function() {
                                        bounceAllElements(elements['moteur'].selectAll("g"), 600, 700, function() {
                                          
                                        });
                                        bounce(elements['moteur'], duration, 600, function() {

                                          // STEP 2
                                          showValuablePiecesAndCreateKart();
                                        });
                                      }); 
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        }); // STEP - 1
      }

    function showValuablePiecesAndCreateKart() {

      // STEP 3, we built the kart and change position of elements, translation on top
      window.setTimeout(function() {

        raiseColouredElement(colouredElements['siege'], topTransValue, topTransDuration);
        raisePiece(elements['siege'], topTransValue, topTransDuration, topTransDelay, function() {
          raiseColouredElement(colouredElements['carenageLeft'], topTransValue, topTransDuration);
          raisePiece(elements['carenageLeft'], topTransValue, topTransDuration, topTransDelay, function() {
            raiseColouredElement(colouredElements['roueBackLeft'], topTransValue, topTransDuration);
            raisePiece(elements['roueBackLeft'], topTransValue, topTransDuration, topTransDelay, function() {
              raiseColouredElement(colouredElements['roueFrontRight'], topTransValue, topTransDuration);
              raisePiece(elements['roueFrontRight'], topTransValue, topTransDuration, topTransDelay, function() {
                raiseColouredElement(colouredElements['roueFrontLeft'], topTransValue, topTransDuration);
                raisePiece(elements['roueFrontLeft'], topTransValue, topTransDuration, topTransDelay, function() {
                  raiseColouredElement(colouredElements['carenageRight'], topTransValue, topTransDuration);
                  raisePiece(elements['carenageRight'], topTransValue, topTransDuration, topTransDelay, function() {
                    raiseColouredElement(colouredElements['roueBackRight'], topTransValue, topTransDuration);
                    raisePiece(elements['roueBackRight'], topTransValue, topTransDuration, topTransDelay, function() {
                      raiseColouredElement(colouredElements['moteurElec'], topTransValue, topTransDuration);
                      raisePiece(elements['moteurElec'], topTransValue, topTransDuration, topTransDelay, function() {
                        raiseColouredElement(colouredElements['carenageFront'], topTransValue, topTransDuration);
                        raisePiece(elements['carenageFront'], topTransValue, topTransDuration, topTransDelay, function() {

                          window.setTimeout(function () {

                            move(elements['moteur'], 'left', 'top', 600, scatterDuration-100, 100, function() {
                              elements['moteur'].animate({'fill-opacity': 0}, duration);
                              var engineGroups = elements['moteur'].selectAll("g");
                              for (var i = engineGroups.length - 1; i >= 0; i--) {
                                engineGroups[i].animate({'fill-opacity': 0}, duration);
                              };
                            }, mina.backin);

                            // ... and we scatter elements
                            move(elements['janteBackLeft'], 'right', 'top', 700, scatterDuration, 100, 'undefined', mina.backin);
                            move(elements['janteFrontRight'], 'left', 'bot', 700, scatterDuration, 100, 'undefined', mina.backin);
                            move(elements['aileron'], 'left', 'top', 700, scatterDuration-100, 100, 'undefined', mina.backin);
                            move(elements['janteFrontLeft'], 'right', 'top', 700, scatterDuration, 100, 'undefined', mina.backin);
                            move(elements['janteBackRight'], 'left', 'bot', 700, scatterDuration, 100, 'undefined', mina.backin);
                            move(elements['phare2'], 'right', 'bot', 700, scatterDuration, 100, 'undefined', mina.backin);
                            move(elements['phare1'], 'right', 'bot', 700, scatterDuration, 100, 'undefined', mina.backin);
                            move(elements['klaxon'], 'right', 'bot', 700, scatterDuration, 800, function () {

                              for (var element in colouredElements) {
                                colouredElements[element].animate({'fill-opacity': 0}, 100);
                              }

                              // STEP 4
                              animatePilotAndWheel();

                            }, mina.backin);
                            
                          }, 500);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      }, 300); // STEP - 3
    } // STEP - 2

    function animatePilotAndWheel() {

      // STEP 4, pilote appear and elements moves to create the kart 
      for (var element in kartElements) {
        kartElements[element].attr({transform: 't'+[0, topTransValue]});
      }
      elements['siege'].attr({'fill-opacity': 0});
      kartElements['siege'].attr({'fill-opacity': 1});
      kartElements['pilote'].animate({'fill-opacity': 1}, 300, function() {
        gatherPiece(kartElements['carenageRight'], elements['carenageRight']);
        gatherPiece(kartElements['roueBackRight'], elements['roueBackRight']);
        gatherPiece(kartElements['carenageLeft'], elements['carenageLeft']);
        gatherPiece(kartElements['roueBackLeft'], elements['roueBackLeft']);
        gatherPiece(kartElements['roueFrontRight'], elements['roueFrontRight']);
        gatherPiece(kartElements['roueFrontLeft'], elements['roueFrontLeft']);
        gatherPiece(kartElements['carenageFront'], elements['carenageFront']);
        gatherPiece(kartElements['moteurElec'], elements['moteurElec'], 200, function() {

          for (var element in kartElements) {
            if (element != 'reload') {
              kartElements[element].attr({'fill-opacity': 1});
            }
          }

          for (var element in elements) {
            elements[element].attr({'fill-opacity': 0});

            if (element == 'moteurElec') {
              var elementGroup = elements['moteurElec'].selectAll("g");
              for (var i = elementGroup.length - 1; i >= 0; i--) {
                elementGroup[i].attr({'fill-opacity': 0});
              };
            }
          }

          window.setTimeout(function() {

            // Element fall to their initial position
            for (var element in kartElements) {
              kartElements[element].animate({transform: 't'+[0, -topTransValue]}, 500, mina.bounce);
            }

            var littleRoll = topTransValue+2,
                bigRoll = topTransValue+8;

            // STEP 5, animation of wheels
            window.setTimeout(function() {

              intervalEvents[0] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft'], duration, (littleRoll));
                roll(kartElements['roueFrontRight'], duration, (littleRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft'], duration, (littleRoll));
                  roll(kartElements['roueBackRight'], duration, (littleRoll));
                }, delay);  
              },250);
              intervalEvents[1] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft2'], duration, (littleRoll));
                roll(kartElements['roueFrontRight2'], duration, (littleRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft2'], duration, (littleRoll));
                  roll(kartElements['roueBackRight2'], duration, (littleRoll));
                }, delay);  
              },250);
              intervalEvents[2] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft'], duration, (bigRoll));
                roll(kartElements['roueFrontRight'], duration, (bigRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft'], duration, (bigRoll));
                  roll(kartElements['roueBackRight'], duration, (bigRoll));
                }, delay);  
              },3000);
              intervalEvents[3] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft2'], duration, (bigRoll));
                roll(kartElements['roueFrontRight2'], duration, (bigRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft2'], duration, (bigRoll));
                  roll(kartElements['roueBackRight2'], duration, (bigRoll));
                }, delay); 
              },3000);
              intervalEvents[4] = window.setInterval(function(){
                                kartElements['roueBackRight2'].attr({'fill-opacity': 0});
                                kartElements['roueBackLeft2'].attr({'fill-opacity': 0});
                                kartElements['roueFrontRight2'].attr({'fill-opacity': 0});
                                kartElements['roueFrontLeft2'].attr({'fill-opacity': 0});
                                kartElements['roueBackRight'].attr({'fill-opacity': 1});
                                kartElements['roueBackLeft'].attr({'fill-opacity': 1});
                                kartElements['roueFrontRight'].attr({'fill-opacity': 1});
                                kartElements['roueFrontLeft'].attr({'fill-opacity': 1});
                                setTimeout(function(){
                                  kartElements['roueBackRight2'].attr({'fill-opacity': 1});
                                  kartElements['roueBackLeft2'].attr({'fill-opacity': 1});
                                  kartElements['roueFrontRight2'].attr({'fill-opacity': 1});
                                  kartElements['roueFrontLeft2'].attr({'fill-opacity': 1});
                                  kartElements['roueBackRight'].attr({'fill-opacity': 0});
                                  kartElements['roueBackLeft'].attr({'fill-opacity': 0});
                                  kartElements['roueFrontRight'].attr({'fill-opacity': 0});
                                  kartElements['roueFrontLeft'].attr({'fill-opacity': 0});
                                }, delay);
                              }, 200);
              kartElements['reload'].animate({'fill-opacity': 1}, 400);
              Kilix.animations['valeur'].valueAnimStatus = true;
            }, 500); // STEP - 5
          }, 300);
        });
      }); // STEP - 4
    }

    function resetValueGroup() {

      for (var element in kartElements) {
        kartElements[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
      }

      for (var element in colouredElements) {
        colouredElements[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
      };

      for (var element in elements) {
        elements[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
      }

      kart.attr({transform: 't'+[0, 0],'fill-opacity': 0});
    }

    function gatherPiece(kartElement, piece, delay, callback) {

      var kartBBox = kartElement.getBBox(),
          pieceBBox = piece.getBBox();

      var kartX = kartBBox.x,
          kartY = kartBBox.y,
          pieceX = kartX - pieceBBox.x,
          pieceY = kartY - pieceBBox.y;

      piece.animate({transform: 't'+[pieceX, pieceY]}, 300, mina.backin);

      if (delay != 'undefined' && typeof callback !== 'undefined') {
        window.setTimeout(callback, delay);
      }
    }

    function raisePiece(element, px, duration, delay, callback) {

      element.animate({transform: 't'+[0, px]}, duration);

        if (delay != 'undefined' && typeof callback !== 'undefined') {
        window.setTimeout(callback, delay);
      }
    }

    function raiseColouredElement(element, px, duration) {
      element.animate({transform: 't'+[0, px], 'fill-opacity': 0.4}, duration);
    }
  }
}

Kilix.animations['risques'] = {

  setAnimStatus: function(status) {
    Kilix.animations["risques"].animStatus = status;
  },

  start: function () {

      var s = Snap("#RISK-dispatch"),
      intervalEvents = new Array(),
      elements = new Array(),
      elements2 = new Array(),
      delay = 50,
      duration = 100,
      intervalCounter = 0;

      $('#RISK-dispatch').on('click', function() {
        if (Kilix.animations["risques"].animStatus == true) {
          Kilix.animations["risques"].animStatus = false;
          resetRiskAnimation();
        }
      });

      function loadRiskSvg() {
        Snap.load("./assets/img/svg/kilix_anim_risque_1.svg", function(f) {
          getRiskElements(f);

          for (var element in elements) {
            elements[element].attr({'fill-opacity': 0});
            s.append(elements[element]);
          }

          startAnimRisk();
        });
      }

      function getRiskElements(f) {
        
        elements['kart']  = f.select("#kart2");
        elements['hole']  = f.select("#trou");
        elements['tree']  = f.select("#tree");
        elements['rocks'] = f.select("#rocks");
        elements['fence'] = f.select("#fence");
        elements['pole']  = f.select("#plot");
        elements2['roueBackRight'] = f.select("#roue-back-right-1");
        elements2['roueBackLeft'] = f.select("#roue-back-left-1");
        elements2['roueFrontRight'] = f.select("#roue-front-right-1");
        elements2['roueFrontLeft'] = f.select("#roue-front-left-1");
        elements['reload'] = f.select("#risk-reload");
      }

      function animRisk(svgElements, first) {

        if(first === true) {
          bounce(svgElements['kart'], duration);
        }

        setTimeout(function() {
          bounce(svgElements['fence'], duration, duration, function(){
            moveWithBounce(svgElements['fence'],'right','top', 1350, 2250, 700, function(){
              setTimeout(function(){removeWithBounce(svgElements['fence'],500)},1450);

              moveWithBounce(svgElements['kart'],'left','top', -250, 400);
              bounce(svgElements['pole'], duration, duration, function(){
                moveWithBounce(svgElements['pole'],'right','top', 1350, 2250, 500, function(){
                  setTimeout(function(){removeWithBounce(svgElements['pole'],500)},1450);

                  moveWithBounce(svgElements['kart'],'left','top', 0, 500);
                  bounce(svgElements['rocks'], duration, duration, function(){
                    moveWithBounce(svgElements['rocks'],'right','top', 1350, 2250, 500, function(){
                      setTimeout(function(){removeWithBounce(svgElements['rocks'],500)},1450);

                      moveWithBounce(svgElements['kart'],'left','top', 200, 500);
                      bounce(svgElements['tree'], duration, duration, function(){
                        moveWithBounce(svgElements['tree'],'right','top', 1350, 2250,500,function(){ // Arbre Avance
                          setTimeout(function(){removeWithBounce(svgElements['tree'],500)},1500);
                          
                          moveWithBounce(svgElements['kart'],'left','top', -250, 800);

                          setTimeout(function(){
                            bounce(svgElements['hole'], duration, duration, function(){
                              moveWithBounce(svgElements['hole'],'right','top', 1350, 2250, 500, function(){
                                setTimeout(function(){
                                  removeWithBounce(svgElements['hole'], 500, 3000, function() {

                                    // set config to reset animation
                                    if (intervalCounter > 1) {
                                      intervalCounter = 0;
                                      
                                      for (var i = intervalEvents.length - 1; i >= 0; i--) {
                                        window.clearInterval(intervalEvents[i]);
                                      };
                                      elements['reload'].animate({'fill-opacity': 1}, 400, function() {
                                        Kilix.animations["risques"].animStatus = true;
                                      });

                                    }

                                  })
                                },1450);

                                moveWithBounce(svgElements['kart'],'left','top', 0, 500);
                              });
                            });
                          },600);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        },duration);

        intervalCounter++;
      }

      function startAnimRisk() {
        animRisk(elements,true);
        intervalEvents[0] = setInterval(function(){animRisk(elements)},4500);

        intervalEvents[1] = window.setInterval(function(){
            roll(elements2['roueFrontLeft'], duration, 2);
            roll(elements2['roueFrontRight'], duration, 2);
            setTimeout(function(){
              roll(elements2['roueBackLeft'], duration, 2);
              roll(elements2['roueBackRight'], duration, 2);
            }, delay);
                
          },100);

        intervalEvents[2] = window.setInterval(function(){
            roll(elements2['roueFrontLeft'], duration, 8);
            roll(elements2['roueFrontRight'], duration, 8);
            setTimeout(function(){
              roll(elements2['roueBackLeft'], duration, 8);
              roll(elements2['roueBackRight'], duration, 8);
            }, delay);
          },3000);
      }

      function resetRiskAnimation() {

      elements['reload'].animate({'fill-opacity': 0}, 100, function() {

        for (var element in elements) {
          elements[element].attr({'fill-opacity': 0});
        }

        
          startAnimRisk();
        });
      }

      loadRiskSvg();
  }
}

Kilix.animations["amelioration"] = {

  setAnimStatus: function(status) {
    Kilix.animations["amelioration"].animStatus = status;
  },

  start: function () {
      var s = Snap("#AMELIO-transform"),
          elementsKart = new Array(),
          elementsFormula = new Array()
          formulaOne = null,
          delay = 50,
          duration = 500;

      $('#AMELIO-transform').on('click', function() {
        if (Kilix.animations['amelioration'].animStatus == true) {
          Kilix.animations['amelioration'].animStatus = false;
          resetImproveAnimation();
        }
      });

      function loadImproveSvg() {
        Snap.load("./assets/img/svg/kilix_anim_amelio_kart.svg", function(f) {
          getKartElement(f);

          for (var element in elementsKart) {
            elementsKart[element].attr({'fill-opacity': 0});
            s.append(elementsKart[element]);
          }
          for (var element in elementsKart) {
            elementsKart[element].animate({'fill-opacity': 1}, 800);
          }

        });

        Snap.load("./assets/img/svg/kilix_anim_amelio_f1.svg", function(f) {
          getFormulaElements(f);
          formulaOne = f.select("#F1");
          formulaOne.attr({'fill-opacity': 0});

          for (var element in elementsFormula) {
            elementsFormula[element].attr({'fill-opacity': 0});
          }
          s.append(formulaOne);
        });
      }

      function getKartElement(f) {
        elementsKart['moteurElec'] = f.select("#moteur-elec"),
        elementsKart['roueBackRight'] = f.select("#roue-back-right"),
        elementsKart['roueBackLeft'] = f.select("#roue-back-left"),
        elementsKart['carenageRight'] = f.select("#carenage-right"),
        elementsKart['carenageLeft'] = f.select("#carenage-left"),
        elementsKart['roueFrontRight'] = f.select("#roue-front-right"),
        elementsKart['roueFrontLeft'] = f.select("#roue-front-left"),
        elementsKart['siege'] = f.select("#siege"),
        elementsKart['carenageFront'] = f.select("#carenage-front"),
        elementsKart['pilote'] = f.select("#pilote");
      }

      function getFormulaElements(f) {
        elementsFormula['reload'] = f.select("#amelio-reload"),
        elementsFormula['roueBackLeft'] = f.select("#roue-back-left"),
        elementsFormula['roueFrontLeft'] = f.select("#roue-front-left"),
        elementsFormula['aileronFront'] = f.select("#aileron-front"),
        elementsFormula['carrosserie'] = f.select("#carrosserie"),
        elementsFormula['priseAir'] = f.select("#prise-air"),
        elementsFormula['siege'] = f.select("#siege-pilote"),
        elementsFormula['pilote'] = f.select("#pilote"),
        elementsFormula['aileronBack'] = f.select("#aileron-back"),
        elementsFormula['roueFrontRight'] = f.select("#roue-front-right"),
        elementsFormula['roueBackRight'] = f.select("#roue-back-right");

      }

      function resetImproveAnimation() {
        elementsFormula['reload'].animate({'fill-opacity': 0}, 100, function() {
          move(formulaOne, 'right', 'bot', 1500, 1000, 2000, function() {
            for (var element in elementsKart) {
              elementsKart[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
              elementsKart[element].animate({'fill-opacity': 1}, 700);
            }

            for (var element in elementsFormula) {
              elementsFormula[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
            };

            formulaOne.attr({transform: 't'+[0, 0],'fill-opacity': 0}, function() {
              improveAnimation();
            });

            window.setTimeout(function() {
              improveAnimation();
            }, 100);
          }, mina.backin);
        });
      }

      function improveAnimation() {
        setTimeout(function(){
          move(elementsKart['carenageRight'], "left", "bottom", 80, 400, 'undefined', function(){}, mina.easeinout);
          move(elementsKart['carenageLeft'], "right", "top", 80, 400, 'undefined', function(){}, mina.easeinout);
          move(elementsKart['carenageFront'], "right", "bottom", 120, 400, 'undefined', function(){}, mina.easeinout);
          move(elementsKart['moteurElec'], "left", "top", 80, 400, 'undefined', function(){}, mina.easeout);
          setTimeout(function(){
            elementsKart['carenageRight'].animate({'fill-opacity': 0}, 200);
            elementsKart['carenageLeft'].animate({'fill-opacity': 0}, 200);
            elementsKart['carenageFront'].animate({'fill-opacity': 0}, 200);
            elementsKart['moteurElec'].animate({'fill-opacity': 0}, 200);
          },400);
          setTimeout(function(){
            move(elementsKart['roueBackLeft'], "right", "top", 50, 250, 'undefined', function(){}, mina.linear);
            move(elementsKart['roueFrontLeft'], "right", "top", 30, 250, 'undefined', function(){}, mina.linear);
            move(elementsKart['roueBackRight'], "left", "bottom", 30, 250, 'undefined', function(){}, mina.linear);
            move(elementsKart['roueFrontRight'], "left", "bottom", 30, 250, 'undefined', function(){}, mina.linear);
          },200);
          setTimeout(function(){
            move(elementsKart['roueBackLeft'], "left", "top", 270, 500, 'undefined', function(){}, mina.easeout);
            move(elementsKart['roueFrontLeft'], "right", "bottom", 220, 500, 'undefined', function(){}, mina.easeout);
            move(elementsKart['roueBackRight'], "left", "top", 280, 500, 'undefined', function(){}, mina.easeout);
            move(elementsKart['roueFrontRight'], "right", "bottom", 220, 500, 'undefined', function(){}, mina.easeout);
          },500);
          setTimeout(function(){
            bounce(elementsFormula['roueBackLeft'], 600, 'undefined', function() {});
            bounce(elementsFormula['roueFrontLeft'], 600, 'undefined', function() {});
            bounce(elementsFormula['roueBackRight'], 600, 'undefined', function() {});
            bounce(elementsFormula['roueFrontRight'], 600, 100, function() {
            elementsKart['roueBackLeft'].attr({'fill-opacity': 0});
            elementsKart['roueFrontLeft'].attr({'fill-opacity': 0});
            elementsKart['roueBackRight'].attr({'fill-opacity': 0});
            elementsKart['roueFrontRight'].attr({'fill-opacity': 0});
            });
          },1000);

          setTimeout(function(){
            bounce(elementsFormula['pilote'], 200, delay);
            elementsKart['pilote'].attr({'fill-opacity': 0});
            elementsKart['siege'].attr({'fill-opacity': 0});
            bounce(elementsFormula['carrosserie'], duration, 100, function() {
              bounce(elementsFormula['siege'], duration, 100, function() {
                bounce(elementsFormula['aileronFront'], duration, 100, function() {
                  bounce(elementsFormula['priseAir'], duration, 100, function() {
                    bounce(elementsFormula['aileronBack'], duration, 1000, function() {
                      Kilix.animations['amelioration'].animStatus = true;
                      elementsFormula['reload'].animate({'fill-opacity': 1}, 400);
                    });
                    
                  });
                });
              });
            });
          },1400);
        },500);
      }

      loadImproveSvg();
      improveAnimation();
  }
}
Kilix.animations["team"] = {

  setAnimStatus: function(status) {
    Kilix.animations["team"].animStatus = status;
  },

  start: function () {
      var s = Snap("#TEAM-f1"),
          elementsFormula = new Array(),
          formulaOne = null,
          delay = 50,
          duration = 500;

      $('#TEAM-f1').on('click', function() {
        if (Kilix.animations['team'].animStatus == true) {
          Kilix.animations['team'].animStatus = false;
          resetTeamAnimation();
        }
      });

      function loadImproveSvg() {

        Snap.load("./assets/img/svg/kilix_anim_team_f1.svg", function(f) {
          getFormulaElements(f);
          formulaOne = f.select("#F1");
          formulaOne.attr({'fill-opacity': 0});

          for (var element in elementsFormula) {
            elementsFormula[element].attr({'fill-opacity': 0});
          }
          s.append(formulaOne);
        });
      }

      function getFormulaElements(f) {
        elementsFormula['reload'] = f.select("#reload"),
        elementsFormula['roueBackLeft'] = f.select("#roue-back-left"),
        elementsFormula['roueFrontLeft'] = f.select("#roue-front-left"),
        elementsFormula['aileronFront'] = f.select("#aileron-front"),
        elementsFormula['carrosserie'] = f.select("#carrosserie"),
        elementsFormula['priseAir'] = f.select("#prise-air"),
        elementsFormula['siege'] = f.select("#siege-pilote"),
        elementsFormula['pilote'] = f.select("#pilote"),
        elementsFormula['aileronBack'] = f.select("#aileron-back"),
        elementsFormula['roueFrontRight'] = f.select("#roue-front-right"),
        elementsFormula['roueBackRight'] = f.select("#roue-back-right");

      }

      function resetTeamAnimation() {
        elementsFormula['reload'].animate({'fill-opacity': 0}, 100, function() {
          move(formulaOne, 'right', 'bot', 1500, 1000, 2000, function() {

            for (var element in elementsFormula) {
              elementsFormula[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
            };

            formulaOne.attr({transform: 't'+[0, 0],'fill-opacity': 0}, function() {
              improveAnimation();
            });

            window.setTimeout(function() {
              improveAnimation();
            }, 100);
          }, mina.backin);
        });
      }

      function improveAnimation() {
        setTimeout(function(){
          bounce(elementsFormula['roueBackLeft'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueFrontLeft'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueBackRight'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueFrontRight'], 600, 100, function() {});
        },1000);
        setTimeout(function(){
          bounce(elementsFormula['pilote'], 200, delay);
          bounce(elementsFormula['carrosserie'], duration, 100, function() {
            bounce(elementsFormula['siege'], duration, 100, function() {
              bounce(elementsFormula['aileronFront'], duration, 100, function() {
                bounce(elementsFormula['priseAir'], duration, 100, function() {
                  bounce(elementsFormula['aileronBack'], duration, 1000, function() {
                    elementsFormula['reload'].animate({'fill-opacity': 1}, 400);
                    Kilix.animations['team'].animStatus = true;
                  });
                });
              });
            });
          });
        },1400);
    }
    loadImproveSvg();
    improveAnimation();
  }
}
Kilix.animations["extia"] = {

  animStatus: false,
  powerLinesIntervals: new Array(),
  colorInterval: null,
  riskInterval: null,


  setAnimStatus: function(status) {
    Kilix.animations["extia"].animStatus = status;
  },

  freeIntervals: function() {
    clearInterval(Kilix.animations["extia"].riskInterval);
    clearInterval(Kilix.animations["extia"].colorInterval);
    for (var powerLine in Kilix.animations["extia"].powerLinesIntervals) {
      clearInterval(powerLine);
    }
  },

  start: function () {

    var s = Snap("#EXTIA-animation"),
    elements = new Array(),
    extiaFactory = null,
    powerLinesColor = '#FFFFFF',
    extiaColor = '#E6B171',
    animStatus = null;

    $('#EXTIA-animation').on('click', function() {
      if (Kilix.animations["extia"].animStatus == true) {
        Kilix.animations["extia"].animStatus = false;
        resetAnim();
      }
    });

    function loadExtiaSvg() {
      Snap.load("./assets/img/svg/kilix_anim_extia.svg", function(f) {
        getElements(f);
        s.append(extiaFactory);
        s.append(elements['valeurText']);
        s.append(elements['risqueText']);
        s.append(elements['amelioText']);
        startAnimation();
      });
    }

    function getElements(f) {
      extiaFactory = f.select("#extia-factory");

      elements['reload'] = f.select("#extia-reload").attr({"fill-opacity": 0}),
      elements['logoExtia'] = f.select("#logo-extia").attr({"fill-opacity": 0}),
      elements['valeurText'] = f.select("#text-valeur").attr({"fill-opacity": 0}),
      elements['valeurKart'] = f.select("#valeur-kart").attr({"fill-opacity": 0}),
      elements['valeurDispatch'] = f.select("#valeur-dispatch"),
      elements['amelioText'] = f.select("#text-amelio").attr({"fill-opacity": 0}),
      elements['amelioF1'] = f.select("#amelio-f1").attr({"fill-opacity": 0}),
      elements['amelioKart'] = f.select("#amelio-kart"),
      elements['risqueText'] = f.select("#text-risques").attr({"fill-opacity": 0}),
      elements['risquePanneau'] = f.select("#risque-panneau").attr({"fill-opacity": 0}),
      elements['risqueRock'] = f.select('#risque-rock').attr({"fill-opacity": 0}),
      elements['risqueTrajectoire'] = f.select('#risque-trajectoire').attr({"fill-opacity": 0}),
      elements['risquePointe'] = f.select('#risque-pointe').attr({"fill-opacity": 0}),
      elements['filValeur'] = f.select("#fil-valeur").select("path"),
      elements['filRisque'] = f.select("#fil-risque").select("path"),
      elements['filAmelio'] = f.select("#fil-amelio").select("path"),
      elements['risquesMini'] = f.select("#risques-mini").attr({"fill-opacity": 0}),
      elements['valeurMini'] = f.select("#valeur-mini").attr({"fill-opacity": 0}),
      elements['amelioMini'] = f.select("#amelio-mini").attr({"fill-opacity": 0});
    }

    function startAnimation() {
      bounce(elements['logoExtia'], 700, 700, function() {
        Kilix.animations["extia"].colorInterval = colorPulse(elements['logoExtia'], extiaColor, 600, 700, function() {
          animValue();
        });
      });
    }

    /*
    * Value animation functions
    */

    function animValue() {
      animValuePowerLine();

      setTimeout(function(){
        bounce(elements['valeurMini'], 700, 700);

        setTimeout(function(){
          elements['valeurDispatch'].animate({transform: 't0,s0,0'}, 100, function() {
            bounce(elements['valeurKart'], 500, 500, function() {
              elements['valeurText'].animate({fillOpacity: 1}, 500);
              setTimeout(function(){animRisk();},500);
            });
          });

        },1000);
        
      },400);
    }

    function animValuePowerLine() {
      $("#fil-valeur path").css({'stroke': powerLinesColor});
      Kilix.animations["extia"].powerLinesIntervals[0] = setInterval(function() {
        $("#fil-valeur path").css({'stroke': powerLinesColor});
      }, 500);
    }

    /*
    * Risk animation functions
    */

    function animRisk() {
      animRiskPowerLine();

      setTimeout(function(){
          bounce(elements['risquesMini'], 700, 700, function() {
          elements['risqueRock'].animate({'fill-opacity': 1}, 600, function() {
            bounce(elements['risquePanneau'], 800);
            Kilix.animations["extia"].riskInterval = scalePulse(elements['risquePanneau'], 1.2, 300, 1000, function() {
              elements['risquePointe'].animate({'fill-opacity': 1}, 500);
              elements['risqueTrajectoire'].animate({'fill-opacity': 1}, 500, function() {
                elements['risqueText'].animate({fillOpacity: 1}, 500);
                setTimeout(function(){animImprove();},500);
              });
            });
          });
        });
      }, 400);
    }

    function animRiskPowerLine() {
      $("#fil-risque path").css({'stroke': powerLinesColor});
      Kilix.animations["extia"].powerLinesIntervals[1] = setInterval(function(){
        $("#fil-risque path").css({'stroke': powerLinesColor});
      }, 500);
    }

    /*
    * Improve animation functions
    */

    function animImprove() {
      animImprovePowerLine();

      setTimeout(function(){
        bounce(elements['amelioKart'], 700, 750, function() {
          elements['amelioKart'].attr({'fill-opacity': 0});
          bounce(elements['amelioF1'], 1000, 1000, function() {
            elements['amelioText'].animate({fillOpacity: 1}, 500);
            Kilix.animations["extia"].animStatus = true;
            elements['reload'].animate({'fill-opacity': 1}, 400);
          });
        });
      }, 400);
    }

    function animImprovePowerLine() {
      $("#fil-amelio path").css({'stroke': powerLinesColor});
      Kilix.animations["extia"].powerLinesIntervals[2] = setInterval(function(){
        $("#fil-amelio path").css({'stroke': powerLinesColor});
      }, 500);
    }

    function resetAnim() {
      elements['reload'].animate({'fill-opacity': 0}, 100, function() {
        // reset value elements
        elements['valeurKart'].animate({'fill-opacity': 0}, 400);
        elements['valeurText'].animate({'fill-opacity': 0}, 400);
        elements['valeurMini'].attr({'fill-opacity': 0});
        elements['valeurDispatch'].attr({transform: 't0,s1,1'});

        // reset risk elements
        elements['risqueRock'].animate({'fill-opacity': 0}, 400);
        elements['risquePointe'].animate({'fill-opacity': 0}, 400);
        elements['risqueTrajectoire'].animate({'fill-opacity': 0}, 400);
        elements['risquePanneau'].animate({'fill-opacity': 0}, 400);
        elements['risquesMini'].animate({'fill-opacity': 0}, 400);
        elements['risqueText'].animate({'fill-opacity': 0}, 400);

        // reset improve elements
        elements['amelioF1'].animate({'fill-opacity': 0}, 400);
        elements['amelioText'].animate({'fill-opacity': 0}, 400);
        
        Kilix.animations["extia"].freeIntervals();

        setTimeout(function() {
          animValue();
        }, 400);
      });
    }

    loadExtiaSvg();
  }
}
Kilix.animations["agilite"] = {

  setAnimStatus: function(status) {
    Kilix.animations["agilite"].animStatus = status;
  },

  start: function () {
      var valSVG = Snap("#AGI-value"),
          riskSVG = Snap("#AGI-risk"),
          elementsValue = new Array(),
          elementsRisk = new Array(),
          delay = 50,
          duration = 500;

      function loadValSvg() {

        Snap.load("./assets/img/svg/agi1.svg", function(f) {
          full = f.select("#full"),
          elementsValue['valueScales'] = f.select("#v-scales"),
          elementsValue['valuePointilles1'] = f.select("#v-pointilles1"),
          elementsValue['valuePointilles2'] = f.select("#v-pointilles2"),
          elementsValue['valueCourbeBleue'] = f.select("#v-courbe-bleue"),
          elementsValue['valueOldGris'] = f.select("#v-old-gris"),
          elementsValue['valuePointBleu'] = f.select("#v-point-bleu"),
          elementsValue['valueTime'] = f.select("#v-time"),
          elementsValue['valuePlan'] = f.select("#v-plan"),
          elementsValue['valuePlan2'] = f.select("#v-plan-2"),
          elementsValue['valueFleches'] = f.select("#v-fleches"),
          elementsValue['valueText'] = f.select("#v-valeur");

          for (var element in elementsValue) {
              elementsValue[element].attr({'opacity': 0});
              valSVG.append(elementsValue[element]);
          }

          elementsValue['valueScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function valAnimation() {
        showCheckmark($('.agility-item:eq(0)'));
        scale(elementsValue['valuePlan'], 1, 500, 200, function(){});
        scale(elementsValue['valuePlan2'], 1, 500, 200, function() {
          drawPath(valSVG, elementsValue['valueOldGris'], 900, 1200, mina.easeout, function(){
            drawPath(valSVG, elementsValue['valueCourbeBleue'], 780, 800, mina.easeinout, function(){
              alterBounce(elementsValue['valuePointBleu'], 400, 400, function() {
                elementsValue['valueText'].animate({opacity:1} ,400 );
                alterBounce(elementsValue['valueTime'], 600, 400, function() {
                  drawLine(valSVG, elementsValue['valuePointilles1'], 500, 700, mina.easeout, function(){
                    drawLine(valSVG, elementsValue['valuePointilles2'], 500, 1200, mina.easeout, function(){
                      riskAnimation();
                    });
                  });
                });
              });
            });
          });
        });
      }

      function loadRiskSvg() {

        Snap.load("./assets/img/svg/agi2.svg", function(f) {
          elementsRisk['riskScales'] = f.select("#r-scales"),
          elementsRisk['riskCourbeBleue'] = f.select("#r-courbe-bleue"),
          elementsRisk['riskOldGris'] = f.select("#r-old-gris"),
          elementsRisk['riskTime'] = f.select("#r-time"),
           elementsRisk['riskPlan'] = f.select("#r-plan"),
           elementsRisk['riskPlan2'] = f.select("#r-plan-2"),
          elementsRisk['riskText'] = f.select("#r-valeur");

          for (var element in elementsRisk) {
              elementsRisk[element].attr({'opacity': 0});
              riskSVG.append(elementsRisk[element]);
          }

          elementsRisk['riskScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function riskAnimation() {
        showCheckmark($('.agility-item:eq(1)'));
        scale(elementsRisk['riskPlan'], 1, 500, 200, function(){});
        scale(elementsRisk['riskPlan2'], 1, 500, 200, function() {
           drawPath(riskSVG, elementsRisk['riskOldGris'], 900, 1200, mina.easeout, function(){
             drawPath(riskSVG, elementsRisk['riskCourbeBleue'], 780, 800, mina.easeinout, function(){
                elementsRisk['riskText'].animate({opacity:1} ,400 );
                  alterBounce(elementsRisk['riskTime'], 600, 400, function() {
                });
             });
           });
         });
      }

    loadValSvg();
    loadRiskSvg();

    setTimeout(function(){valAnimation()}, 600);

  },

  startSecond: function() {
    var   adaptSVG = Snap("#AGI-adapt"),
          visSVG = Snap("#AGI-vis"),
          elementsAdapt = new Array(),
          elementsVis = new Array(),
          delay = 50,
          duration = 500;


      function loadAdaptabilitySvg() {

        Snap.load("./assets/img/svg/agi3.svg", function(f) {
          elementsAdapt['adaptScales'] = f.select("#a-scales"),
          elementsAdapt['adaptCourbeBleue'] = f.select("#a-courbe-bleue"),
          elementsAdapt['adaptOldGris'] = f.select("#a-old-gris"),
          elementsAdapt['adaptTime'] = f.select("#a-time"),
          elementsAdapt['adaptPlan'] = f.select("#a-plan"),
          elementsAdapt['adaptPlan2'] = f.select("#a-plan-2"),
          elementsAdapt['adaptText'] = f.select("#a-valeur");

          for (var element in elementsAdapt) {
              elementsAdapt[element].attr({'opacity': 0});
              adaptSVG.append(elementsAdapt[element]);
          }

          elementsAdapt['adaptScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function adaptabilityAnimation() {
        showCheckmark($('.agility-item:eq(2)'));
        scale(elementsAdapt['adaptPlan'], 1, 500, 200, function(){});
        scale(elementsAdapt['adaptPlan2'], 1, 500, 200, function() {
           drawPath(adaptSVG, elementsAdapt['adaptOldGris'], 900, 1200, mina.easeout, function(){
             drawPath(adaptSVG, elementsAdapt['adaptCourbeBleue'], 780, 800, mina.easeinout, function(){
                elementsAdapt['adaptText'].animate({opacity:1} ,400 );
                  alterBounce(elementsAdapt['adaptTime'], 600, 400, function() {
                    visibilityAnimation();
                });
             });
           });
         });
      }

      function loadVisibilitySvg() {

        Snap.load("./assets/img/svg/agi4.svg", function(f) {
          elementsVis['visScales'] = f.select("#vis-scales"),
          elementsVis['visCourbeBleue'] = f.select("#vis-courbe-bleue"),
          elementsVis['visOldGris'] = f.select("#vis-old-gris"),
          elementsVis['visTime'] = f.select("#vis-time"),
           elementsVis['visPlan'] = f.select("#vis-plan"),
           elementsVis['visPlan2'] = f.select("#vis-plan-2"),
          elementsVis['visText'] = f.select("#vis-valeur");

          for (var element in elementsVis) {
              elementsVis[element].attr({'opacity': 0});
              visSVG.append(elementsVis[element]);
          }

          elementsVis['visScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function visibilityAnimation() {
        showCheckmark($('.agility-item:eq(3)'));
        scale(elementsVis['visPlan'], 1, 500, 200, function(){});
        scale(elementsVis['visPlan2'], 1, 500, 200, function() {
           drawPath(visSVG, elementsVis['visOldGris'], 900, 1200, mina.easeout, function(){
             drawPath(visSVG, elementsVis['visCourbeBleue'], 780, 800, mina.easeinout, function(){
                elementsVis['visText'].animate({opacity:1} ,400 );
                  alterBounce(elementsVis['visTime'], 600, 400, function() {
                });
             });
           });
         });
      }

    loadAdaptabilitySvg();
    loadVisibilitySvg();
    setTimeout(function(){adaptabilityAnimation()}, 600);
  }
}
