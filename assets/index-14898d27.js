function Qf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xu={exports:{}},no={},Ku={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Jf=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),ep=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),rp=Symbol.for("react.memo"),ip=Symbol.for("react.lazy"),xs=Symbol.iterator;function op(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var Gu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,qu={};function Un(e,t,n){this.props=e,this.context=t,this.refs=qu,this.updater=n||Gu}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ec(){}ec.prototype=Un.prototype;function ha(e,t,n){this.props=e,this.context=t,this.refs=qu,this.updater=n||Gu}var ga=ha.prototype=new ec;ga.constructor=ha;Ju(ga,Un.prototype);ga.isPureReactComponent=!0;var ws=Array.isArray,tc=Object.prototype.hasOwnProperty,va={current:null},nc={key:!0,ref:!0,__self:!0,__source:!0};function rc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)tc.call(t,r)&&!nc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$r,type:e,key:o,ref:l,props:i,_owner:va.current}}function lp(e,t){return{$$typeof:$r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function ap(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cs=/\/+/g;function No(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):t.toString(36)}function ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case $r:case Xf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+No(l,0):r,ws(i)?(n="",e!=null&&(n=e.replace(Cs,"$&/")+"/"),ci(i,t,n,"",function(u){return u})):i!=null&&(ya(i)&&(i=lp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Cs,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ws(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+No(o,a);l+=ci(o,t,n,s,i)}else if(s=op(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+No(o,a++),l+=ci(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Hr(e,t,n){if(e==null)return e;var r=[],i=0;return ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function sp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},di={transition:null},up={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:di,ReactCurrentOwner:va};A.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Un;A.Fragment=Kf;A.Profiler=Jf;A.PureComponent=ha;A.StrictMode=Gf;A.Suspense=np;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ju({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=va.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)tc.call(t,s)&&!nc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$r,type:e.type,key:i,ref:o,props:r,_owner:l}};A.createContext=function(e){return e={$$typeof:ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qf,_context:e},e.Consumer=e};A.createElement=rc;A.createFactory=function(e){var t=rc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:tp,render:e}};A.isValidElement=ya;A.lazy=function(e){return{$$typeof:ip,_payload:{_status:-1,_result:e},_init:sp}};A.memo=function(e,t){return{$$typeof:rp,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=di.transition;di.transition={};try{e()}finally{di.transition=t}};A.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};A.useCallback=function(e,t){return ve.current.useCallback(e,t)};A.useContext=function(e){return ve.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};A.useEffect=function(e,t){return ve.current.useEffect(e,t)};A.useId=function(){return ve.current.useId()};A.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ve.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};A.useRef=function(e){return ve.current.useRef(e)};A.useState=function(e){return ve.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ve.current.useTransition()};A.version="18.2.0";Ku.exports=A;var h=Ku.exports;const F=Yf(h),cp=Qf({__proto__:null,default:F},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=h,fp=Symbol.for("react.element"),pp=Symbol.for("react.fragment"),mp=Object.prototype.hasOwnProperty,hp=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gp={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)mp.call(t,r)&&!gp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fp,type:e,key:o,ref:l,props:i,_owner:hp.current}}no.Fragment=pp;no.jsx=ic;no.jsxs=ic;Xu.exports=no;var g=Xu.exports,ul={},oc={exports:{}},Re={},lc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,_){var R=L.length;L.push(_);e:for(;0<R;){var V=R-1>>>1,X=L[V];if(0<i(X,_))L[V]=_,L[R]=X,R=V;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var _=L[0],R=L.pop();if(R!==_){L[0]=R;e:for(var V=0,X=L.length,nt=X>>>1;V<nt;){var Pe=2*(V+1)-1,mt=L[Pe],Le=Pe+1,Ae=L[Le];if(0>i(mt,R))Le<X&&0>i(Ae,mt)?(L[V]=Ae,L[Le]=R,V=Le):(L[V]=mt,L[Pe]=R,V=Pe);else if(Le<X&&0>i(Ae,R))L[V]=Ae,L[Le]=R,V=Le;else break e}}return _}function i(L,_){var R=L.sortIndex-_.sortIndex;return R!==0?R:L.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,m=null,v=3,x=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(L){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=L)r(u),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(u)}}function C(L){if(w=!1,f(L),!y)if(n(s)!==null)y=!0,Vt(E);else{var _=n(u);_!==null&&Te(C,_.startTime-L)}}function E(L,_){y=!1,w&&(w=!1,d(z),z=-1),x=!0;var R=v;try{for(f(_),m=n(s);m!==null&&(!(m.expirationTime>_)||L&&!ke());){var V=m.callback;if(typeof V=="function"){m.callback=null,v=m.priorityLevel;var X=V(m.expirationTime<=_);_=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(s)&&r(s),f(_)}else r(s);m=n(s)}if(m!==null)var nt=!0;else{var Pe=n(u);Pe!==null&&Te(C,Pe.startTime-_),nt=!1}return nt}finally{m=null,v=R,x=!1}}var P=!1,k=null,z=-1,W=5,T=-1;function ke(){return!(e.unstable_now()-T<W)}function Ut(){if(k!==null){var L=e.unstable_now();T=L;var _=!0;try{_=k(!0,L)}finally{_?Bt():(P=!1,k=null)}}else P=!1}var Bt;if(typeof c=="function")Bt=function(){c(Ut)};else if(typeof MessageChannel<"u"){var Zr=new MessageChannel,Lo=Zr.port2;Zr.port1.onmessage=Ut,Bt=function(){Lo.postMessage(null)}}else Bt=function(){N(Ut,0)};function Vt(L){k=L,P||(P=!0,Bt())}function Te(L,_){z=N(function(){L(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Vt(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(v){case 1:case 2:case 3:var _=3;break;default:_=v}var R=v;v=_;try{return L()}finally{v=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,_){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=v;v=L;try{return _()}finally{v=R}},e.unstable_scheduleCallback=function(L,_,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,L){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=R+X,L={id:p++,callback:_,priorityLevel:L,startTime:R,expirationTime:X,sortIndex:-1},R>V?(L.sortIndex=R,t(u,L),n(s)===null&&L===n(u)&&(w?(d(z),z=-1):w=!0,Te(C,R-V))):(L.sortIndex=X,t(s,L),y||x||(y=!0,Vt(E))),L},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(L){var _=v;return function(){var R=v;v=_;try{return L.apply(this,arguments)}finally{v=R}}}})(ac);lc.exports=ac;var vp=lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc=h,_e=vp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uc=new Set,gr={};function on(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(gr[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,yp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Es={},Ss={};function xp(e){return cl.call(Ss,e)?!0:cl.call(Es,e)?!1:yp.test(e)?Ss[e]=!0:(Es[e]=!0,!1)}function wp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cp(e,t,n,r){if(t===null||typeof t>"u"||wp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var xa=/[\-:]([a-z])/g;function wa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xa,wa);se[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xa,wa);se[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xa,wa);se[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ca(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cp(t,n,i,r)&&(n=null),r||i===null?xp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),Ea=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),Sa=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),ka=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),fc=Symbol.for("react.offscreen"),ks=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,zo;function tr(e){if(zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zo=t&&t[1]||""}return`
`+zo+e}var _o=!1;function Ro(e,t){if(!e||_o)return"";_o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{_o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tr(e):""}function Ep(e){switch(e.tag){case 5:return tr(e.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 2:case 15:return e=Ro(e.type,!1),e;case 11:return e=Ro(e.type.render,!1),e;case 1:return e=Ro(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case cn:return"Portal";case dl:return"Profiler";case Ea:return"StrictMode";case fl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dc:return(e.displayName||"Context")+".Consumer";case cc:return(e._context.displayName||"Context")+".Provider";case Sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ka:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function Sp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===Ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kp(e){var t=pc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=kp(e))}function mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hc(e,t){t=t.checked,t!=null&&Ca(e,"checked",t,!1)}function gl(e,t){hc(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ls(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nr=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function js(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(nr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function gc(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ns(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pp=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){Pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function xc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function wc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(Lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,kn=null,Pn=null;function zs(e){if(e=br(e)){if(typeof Sl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ao(t),Sl(e.stateNode,e.type,t))}}function Cc(e){kn?Pn?Pn.push(e):Pn=[e]:kn=e}function Ec(){if(kn){var e=kn,t=Pn;if(Pn=kn=null,zs(e),t)for(e=0;e<t.length;e++)zs(t[e])}}function Sc(e,t){return e(t)}function kc(){}var Mo=!1;function Pc(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return Sc(e,t,n)}finally{Mo=!1,(kn!==null||Pn!==null)&&(kc(),Ec())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var r=ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var kl=!1;if(ut)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){kl=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{kl=!1}function jp(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var ar=!1,ji=null,Ni=!1,Pl=null,Np={onError:function(e){ar=!0,ji=e}};function zp(e,t,n,r,i,o,l,a,s){ar=!1,ji=null,jp.apply(Np,arguments)}function _p(e,t,n,r,i,o,l,a,s){if(zp.apply(this,arguments),ar){if(ar){var u=ji;ar=!1,ji=null}else throw Error(S(198));Ni||(Ni=!0,Pl=u)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _s(e){if(ln(e)!==e)throw Error(S(188))}function Rp(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _s(i),e;if(o===r)return _s(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function jc(e){return e=Rp(e),e!==null?Nc(e):null}function Nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nc(e);if(t!==null)return t;e=e.sibling}return null}var zc=_e.unstable_scheduleCallback,Rs=_e.unstable_cancelCallback,Mp=_e.unstable_shouldYield,Tp=_e.unstable_requestPaint,G=_e.unstable_now,Ap=_e.unstable_getCurrentPriorityLevel,La=_e.unstable_ImmediatePriority,_c=_e.unstable_UserBlockingPriority,zi=_e.unstable_NormalPriority,Ip=_e.unstable_LowPriority,Rc=_e.unstable_IdlePriority,ro=null,et=null;function Op(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Dp,$p=Math.log,Fp=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-($p(e)/Fp|0)|0}var Kr=64,Gr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=rr(a):(o&=l,o!==0&&(r=rr(o)))}else l=n&~i,l!==0?r=rr(l):o!==0&&(r=rr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-He(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=bp(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mc(){var e=Kr;return Kr<<=1,!(Kr&4194240)&&(Kr=64),e}function To(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function Bp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ac,Na,Ic,Oc,$c,jl=!1,Jr=[],Lt=null,jt=null,Nt=null,xr=new Map,wr=new Map,Ct=[],Vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ms(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(t.pointerId)}}function Xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=br(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zp(e,t,n,r,i){switch(t){case"focusin":return Lt=Xn(Lt,e,t,n,r,i),!0;case"dragenter":return jt=Xn(jt,e,t,n,r,i),!0;case"mouseover":return Nt=Xn(Nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xr.set(o,Xn(xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wr.set(o,Xn(wr.get(o)||null,e,t,n,r,i)),!0}return!1}function Fc(e){var t=Ht(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Lc(n),t!==null){e.blockedOn=t,$c(e.priority,function(){Ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=br(n),t!==null&&Na(t),e.blockedOn=n,!1;t.shift()}return!0}function Ts(e,t,n){fi(e)&&n.delete(t)}function Wp(){jl=!1,Lt!==null&&fi(Lt)&&(Lt=null),jt!==null&&fi(jt)&&(jt=null),Nt!==null&&fi(Nt)&&(Nt=null),xr.forEach(Ts),wr.forEach(Ts)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Wp)))}function Cr(e){function t(i){return Kn(i,e)}if(0<Jr.length){Kn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Kn(Lt,e),jt!==null&&Kn(jt,e),Nt!==null&&Kn(Nt,e),xr.forEach(t),wr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Fc(n),n.blockedOn===null&&Ct.shift()}var Ln=pt.ReactCurrentBatchConfig,Ri=!0;function Hp(e,t,n,r){var i=$,o=Ln.transition;Ln.transition=null;try{$=1,za(e,t,n,r)}finally{$=i,Ln.transition=o}}function Qp(e,t,n,r){var i=$,o=Ln.transition;Ln.transition=null;try{$=4,za(e,t,n,r)}finally{$=i,Ln.transition=o}}function za(e,t,n,r){if(Ri){var i=Nl(e,t,n,r);if(i===null)Vo(e,t,r,Mi,n),Ms(e,r);else if(Zp(i,e,t,n,r))r.stopPropagation();else if(Ms(e,r),t&4&&-1<Vp.indexOf(e)){for(;i!==null;){var o=br(i);if(o!==null&&Ac(o),o=Nl(e,t,n,r),o===null&&Vo(e,t,r,Mi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Mi=null;function Nl(e,t,n,r){if(Mi=null,e=Pa(r),e=Ht(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function Dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case La:return 1;case _c:return 4;case zi:case Ip:return 16;case Rc:return 536870912;default:return 16}default:return 16}}var St=null,_a=null,pi=null;function bc(){if(pi)return pi;var e,t=_a,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return pi=i.slice(e,1<r?1-r:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function As(){return!1}function Me(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qr:As,this.isPropagationStopped=As,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=Me(Bn),Dr=Y({},Bn,{view:0,detail:0}),Yp=Me(Dr),Ao,Io,Gn,io=Y({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Ao=e.screenX-Gn.screenX,Io=e.screenY-Gn.screenY):Io=Ao=0,Gn=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),Is=Me(io),Xp=Y({},io,{dataTransfer:0}),Kp=Me(Xp),Gp=Y({},Dr,{relatedTarget:0}),Oo=Me(Gp),Jp=Y({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=Me(Jp),e0=Y({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t0=Me(e0),n0=Y({},Bn,{data:0}),Os=Me(n0),r0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o0[e])?!!t[e]:!1}function Ma(){return l0}var a0=Y({},Dr,{key:function(e){if(e.key){var t=r0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s0=Me(a0),u0=Y({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$s=Me(u0),c0=Y({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),d0=Me(c0),f0=Y({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),p0=Me(f0),m0=Y({},io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Me(m0),g0=[9,13,27,32],Ta=ut&&"CompositionEvent"in window,sr=null;ut&&"documentMode"in document&&(sr=document.documentMode);var v0=ut&&"TextEvent"in window&&!sr,Uc=ut&&(!Ta||sr&&8<sr&&11>=sr),Fs=String.fromCharCode(32),Ds=!1;function Bc(e,t){switch(e){case"keyup":return g0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function y0(e,t){switch(e){case"compositionend":return Vc(t);case"keypress":return t.which!==32?null:(Ds=!0,Fs);case"textInput":return e=t.data,e===Fs&&Ds?null:e;default:return null}}function x0(e,t){if(fn)return e==="compositionend"||!Ta&&Bc(e,t)?(e=bc(),pi=_a=St=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uc&&t.locale!=="ko"?null:t.data;default:return null}}var w0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w0[e.type]:t==="textarea"}function Zc(e,t,n,r){Cc(r),t=Ti(t,"onChange"),0<t.length&&(n=new Ra("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ur=null,Er=null;function C0(e){td(e,0)}function oo(e){var t=hn(e);if(mc(t))return e}function E0(e,t){if(e==="change")return t}var Wc=!1;if(ut){var $o;if(ut){var Fo="oninput"in document;if(!Fo){var Us=document.createElement("div");Us.setAttribute("oninput","return;"),Fo=typeof Us.oninput=="function"}$o=Fo}else $o=!1;Wc=$o&&(!document.documentMode||9<document.documentMode)}function Bs(){ur&&(ur.detachEvent("onpropertychange",Hc),Er=ur=null)}function Hc(e){if(e.propertyName==="value"&&oo(Er)){var t=[];Zc(t,Er,e,Pa(e)),Pc(C0,t)}}function S0(e,t,n){e==="focusin"?(Bs(),ur=t,Er=n,ur.attachEvent("onpropertychange",Hc)):e==="focusout"&&Bs()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(Er)}function P0(e,t){if(e==="click")return oo(t)}function L0(e,t){if(e==="input"||e==="change")return oo(t)}function j0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:j0;function Sr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cl.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zs(e,t){var n=Vs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vs(n)}}function Qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yc(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N0(e){var t=Yc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qc(n.ownerDocument.documentElement,n)){if(r!==null&&Aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zs(n,o);var l=Zs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var z0=ut&&"documentMode"in document&&11>=document.documentMode,pn=null,zl=null,cr=null,_l=!1;function Ws(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||pn==null||pn!==Li(r)||(r=pn,"selectionStart"in r&&Aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&Sr(cr,r)||(cr=r,r=Ti(zl,"onSelect"),0<r.length&&(t=new Ra("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Do={},Xc={};ut&&(Xc=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function lo(e){if(Do[e])return Do[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xc)return Do[e]=t[n];return e}var Kc=lo("animationend"),Gc=lo("animationiteration"),Jc=lo("animationstart"),qc=lo("transitionend"),ed=new Map,Hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){ed.set(e,t),on(t,[e])}for(var bo=0;bo<Hs.length;bo++){var Uo=Hs[bo],_0=Uo.toLowerCase(),R0=Uo[0].toUpperCase()+Uo.slice(1);Ft(_0,"on"+R0)}Ft(Kc,"onAnimationEnd");Ft(Gc,"onAnimationIteration");Ft(Jc,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(qc,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function Qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_p(r,t,void 0,e),e.currentTarget=null}function td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Qs(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Qs(i,a,u),o=s}}}if(Ni)throw e=Pl,Ni=!1,Pl=null,e}function b(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(nd(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),nd(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[ti]){e[ti]=!0,uc.forEach(function(n){n!=="selectionchange"&&(M0.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,Bo("selectionchange",!1,t))}}function nd(e,t,n,r){switch(Dc(t)){case 1:var i=Hp;break;case 4:i=Qp;break;default:i=za}n=i.bind(null,t,n,e),i=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Ht(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Pc(function(){var u=o,p=Pa(n),m=[];e:{var v=ed.get(e);if(v!==void 0){var x=Ra,y=e;switch(e){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":x=s0;break;case"focusin":y="focus",x=Oo;break;case"focusout":y="blur",x=Oo;break;case"beforeblur":case"afterblur":x=Oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=d0;break;case Kc:case Gc:case Jc:x=qp;break;case qc:x=p0;break;case"scroll":x=Yp;break;case"wheel":x=h0;break;case"copy":case"cut":case"paste":x=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$s}var w=(t&4)!==0,N=!w&&e==="scroll",d=w?v!==null?v+"Capture":null:v;w=[];for(var c=u,f;c!==null;){f=c;var C=f.stateNode;if(f.tag===5&&C!==null&&(f=C,d!==null&&(C=yr(c,d),C!=null&&w.push(Pr(c,C,f)))),N)break;c=c.return}0<w.length&&(v=new x(v,y,null,n,p),m.push({event:v,listeners:w}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==El&&(y=n.relatedTarget||n.fromElement)&&(Ht(y)||y[ct]))break e;if((x||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?Ht(y):null,y!==null&&(N=ln(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=Is,C="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=$s,C="onPointerLeave",d="onPointerEnter",c="pointer"),N=x==null?v:hn(x),f=y==null?v:hn(y),v=new w(C,c+"leave",x,n,p),v.target=N,v.relatedTarget=f,C=null,Ht(p)===u&&(w=new w(d,c+"enter",y,n,p),w.target=f,w.relatedTarget=N,C=w),N=C,x&&y)t:{for(w=x,d=y,c=0,f=w;f;f=sn(f))c++;for(f=0,C=d;C;C=sn(C))f++;for(;0<c-f;)w=sn(w),c--;for(;0<f-c;)d=sn(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=sn(w),d=sn(d)}w=null}else w=null;x!==null&&Ys(m,v,x,w,!1),y!==null&&N!==null&&Ys(m,N,y,w,!0)}}e:{if(v=u?hn(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var E=E0;else if(bs(v))if(Wc)E=L0;else{E=k0;var P=S0}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=P0);if(E&&(E=E(e,u))){Zc(m,E,n,p);break e}P&&P(e,v,u),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&vl(v,"number",v.value)}switch(P=u?hn(u):window,e){case"focusin":(bs(P)||P.contentEditable==="true")&&(pn=P,zl=u,cr=null);break;case"focusout":cr=zl=pn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ws(m,n,p);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":Ws(m,n,p)}var k;if(Ta)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else fn?Bc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Uc&&n.locale!=="ko"&&(fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&fn&&(k=bc()):(St=p,_a="value"in St?St.value:St.textContent,fn=!0)),P=Ti(u,z),0<P.length&&(z=new Os(z,e,null,n,p),m.push({event:z,listeners:P}),k?z.data=k:(k=Vc(n),k!==null&&(z.data=k)))),(k=v0?y0(e,n):x0(e,n))&&(u=Ti(u,"onBeforeInput"),0<u.length&&(p=new Os("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=k))}td(m,t)})}function Pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ti(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yr(e,n),o!=null&&r.unshift(Pr(e,o,i)),o=yr(e,t),o!=null&&r.push(Pr(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=yr(n,o),s!=null&&l.unshift(Pr(n,s,a))):i||(s=yr(n,o),s!=null&&l.push(Pr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var T0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(T0,`
`).replace(A0,"")}function ni(e,t,n){if(t=Xs(t),Xs(e)!==t&&n)throw Error(S(425))}function Ai(){}var Rl=null,Ml=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,I0=typeof clearTimeout=="function"?clearTimeout:void 0,Ks=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ks<"u"?function(e){return Ks.resolve(null).then(e).catch($0)}:Al;function $0(e){setTimeout(function(){throw e})}function Zo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Cr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Vn,Lr="__reactProps$"+Vn,ct="__reactContainer$"+Vn,Il="__reactEvents$"+Vn,F0="__reactListeners$"+Vn,D0="__reactHandles$"+Vn;function Ht(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gs(e);e!==null;){if(n=e[qe])return n;e=Gs(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[qe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ao(e){return e[Lr]||null}var Ol=[],gn=-1;function Dt(e){return{current:e}}function B(e){0>gn||(e.current=Ol[gn],Ol[gn]=null,gn--)}function D(e,t){gn++,Ol[gn]=e.current,e.current=t}var $t={},pe=Dt($t),Ce=Dt(!1),qt=$t;function _n(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Ii(){B(Ce),B(pe)}function Js(e,t,n){if(pe.current!==$t)throw Error(S(168));D(pe,t),D(Ce,n)}function rd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Sp(e)||"Unknown",i));return Y({},n,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,qt=pe.current,D(pe,e),D(Ce,Ce.current),!0}function qs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=rd(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,B(Ce),B(pe),D(pe,e)):B(Ce),D(Ce,n)}var ot=null,so=!1,Wo=!1;function id(e){ot===null?ot=[e]:ot.push(e)}function b0(e){so=!0,id(e)}function bt(){if(!Wo&&ot!==null){Wo=!0;var e=0,t=$;try{var n=ot;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,so=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),zc(La,bt),i}finally{$=t,Wo=!1}}return null}var vn=[],yn=0,$i=null,Fi=0,Ie=[],Oe=0,en=null,lt=1,at="";function Zt(e,t){vn[yn++]=Fi,vn[yn++]=$i,$i=e,Fi=t}function od(e,t,n){Ie[Oe++]=lt,Ie[Oe++]=at,Ie[Oe++]=en,en=e;var r=lt;e=at;var i=32-He(r)-1;r&=~(1<<i),n+=1;var o=32-He(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,lt=1<<32-He(t)+i|n<<i|r,at=o+e}else lt=1<<o|n<<i|r,at=e}function Ia(e){e.return!==null&&(Zt(e,1),od(e,1,0))}function Oa(e){for(;e===$i;)$i=vn[--yn],vn[yn]=null,Fi=vn[--yn],vn[yn]=null;for(;e===en;)en=Ie[--Oe],Ie[Oe]=null,at=Ie[--Oe],Ie[Oe]=null,lt=Ie[--Oe],Ie[Oe]=null}var ze=null,Ne=null,Z=!1,We=null;function ld(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ne=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ne=null,!0):!1;default:return!1}}function $l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(Z){var t=Ne;if(t){var n=t;if(!eu(e,t)){if($l(e))throw Error(S(418));t=zt(n.nextSibling);var r=ze;t&&eu(e,t)?ld(r,n):(e.flags=e.flags&-4097|2,Z=!1,ze=e)}}else{if($l(e))throw Error(S(418));e.flags=e.flags&-4097|2,Z=!1,ze=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function ri(e){if(e!==ze)return!1;if(!Z)return tu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=Ne)){if($l(e))throw ad(),Error(S(418));for(;t;)ld(e,t),t=zt(t.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=ze?zt(e.stateNode.nextSibling):null;return!0}function ad(){for(var e=Ne;e;)e=zt(e.nextSibling)}function Rn(){Ne=ze=null,Z=!1}function $a(e){We===null?We=[e]:We.push(e)}var U0=pt.ReactCurrentBatchConfig;function Ve(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Di=Dt(null),bi=null,xn=null,Fa=null;function Da(){Fa=xn=bi=null}function ba(e){var t=Di.current;B(Di),e._currentValue=t}function Dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){bi=e,Fa=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(bi===null)throw Error(S(308));xn=e,bi.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Qt=null;function Ua(e){Qt===null?Qt=[e]:Qt.push(e)}function sd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ua(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ua(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ja(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,p=u=s=null,a=o;do{var v=a.lane,x=a.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(v=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(x,m,v);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,v=typeof y=="function"?y.call(x,m,v):y,v==null)break e;m=Y({},m,v);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=x,s=m):p=p.next=x,l|=v;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;v=a,a=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(p===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nn|=l,e.lanes=l,e.memoizedState=m}}function ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var cd=new sc.Component().refs;function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Mt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Qe(t,e,i,r),hi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Mt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Qe(t,e,i,r),hi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Mt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(Qe(t,e,r,n),hi(t,e,r))}};function iu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,o):!0}function dd(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=Ee(t)?qt:pe.current,r=t.contextTypes,o=(r=r!=null)?_n(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=cd,Ba(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=Ee(t)?qt:pe.current,i.context=_n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&uo.enqueueReplaceState(i,i.state,null),Ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===cd&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lu(e){var t=e._init;return t(e._payload)}function fd(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Tt(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,C){return c===null||c.tag!==6?(c=Jo(f,d.mode,C),c.return=d,c):(c=i(c,f),c.return=d,c)}function s(d,c,f,C){var E=f.type;return E===dn?p(d,c,f.props.children,C,f.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&lu(E)===c.type)?(C=i(c,f.props),C.ref=Jn(d,c,f),C.return=d,C):(C=Ci(f.type,f.key,f.props,null,d.mode,C),C.ref=Jn(d,c,f),C.return=d,C)}function u(d,c,f,C){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=qo(f,d.mode,C),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function p(d,c,f,C,E){return c===null||c.tag!==7?(c=Gt(f,d.mode,C,E),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Jo(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return f=Ci(c.type,c.key,c.props,null,d.mode,f),f.ref=Jn(d,null,c),f.return=d,f;case cn:return c=qo(c,d.mode,f),c.return=d,c;case yt:var C=c._init;return m(d,C(c._payload),f)}if(nr(c)||Qn(c))return c=Gt(c,d.mode,f,null),c.return=d,c;ii(d,c)}return null}function v(d,c,f,C){var E=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:a(d,c,""+f,C);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:return f.key===E?s(d,c,f,C):null;case cn:return f.key===E?u(d,c,f,C):null;case yt:return E=f._init,v(d,c,E(f._payload),C)}if(nr(f)||Qn(f))return E!==null?null:p(d,c,f,C,null);ii(d,f)}return null}function x(d,c,f,C,E){if(typeof C=="string"&&C!==""||typeof C=="number")return d=d.get(f)||null,a(c,d,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Qr:return d=d.get(C.key===null?f:C.key)||null,s(c,d,C,E);case cn:return d=d.get(C.key===null?f:C.key)||null,u(c,d,C,E);case yt:var P=C._init;return x(d,c,f,P(C._payload),E)}if(nr(C)||Qn(C))return d=d.get(f)||null,p(c,d,C,E,null);ii(c,C)}return null}function y(d,c,f,C){for(var E=null,P=null,k=c,z=c=0,W=null;k!==null&&z<f.length;z++){k.index>z?(W=k,k=null):W=k.sibling;var T=v(d,k,f[z],C);if(T===null){k===null&&(k=W);break}e&&k&&T.alternate===null&&t(d,k),c=o(T,c,z),P===null?E=T:P.sibling=T,P=T,k=W}if(z===f.length)return n(d,k),Z&&Zt(d,z),E;if(k===null){for(;z<f.length;z++)k=m(d,f[z],C),k!==null&&(c=o(k,c,z),P===null?E=k:P.sibling=k,P=k);return Z&&Zt(d,z),E}for(k=r(d,k);z<f.length;z++)W=x(k,d,z,f[z],C),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?z:W.key),c=o(W,c,z),P===null?E=W:P.sibling=W,P=W);return e&&k.forEach(function(ke){return t(d,ke)}),Z&&Zt(d,z),E}function w(d,c,f,C){var E=Qn(f);if(typeof E!="function")throw Error(S(150));if(f=E.call(f),f==null)throw Error(S(151));for(var P=E=null,k=c,z=c=0,W=null,T=f.next();k!==null&&!T.done;z++,T=f.next()){k.index>z?(W=k,k=null):W=k.sibling;var ke=v(d,k,T.value,C);if(ke===null){k===null&&(k=W);break}e&&k&&ke.alternate===null&&t(d,k),c=o(ke,c,z),P===null?E=ke:P.sibling=ke,P=ke,k=W}if(T.done)return n(d,k),Z&&Zt(d,z),E;if(k===null){for(;!T.done;z++,T=f.next())T=m(d,T.value,C),T!==null&&(c=o(T,c,z),P===null?E=T:P.sibling=T,P=T);return Z&&Zt(d,z),E}for(k=r(d,k);!T.done;z++,T=f.next())T=x(k,d,z,T.value,C),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?z:T.key),c=o(T,c,z),P===null?E=T:P.sibling=T,P=T);return e&&k.forEach(function(Ut){return t(d,Ut)}),Z&&Zt(d,z),E}function N(d,c,f,C){if(typeof f=="object"&&f!==null&&f.type===dn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:e:{for(var E=f.key,P=c;P!==null;){if(P.key===E){if(E=f.type,E===dn){if(P.tag===7){n(d,P.sibling),c=i(P,f.props.children),c.return=d,d=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&lu(E)===P.type){n(d,P.sibling),c=i(P,f.props),c.ref=Jn(d,P,f),c.return=d,d=c;break e}n(d,P);break}else t(d,P);P=P.sibling}f.type===dn?(c=Gt(f.props.children,d.mode,C,f.key),c.return=d,d=c):(C=Ci(f.type,f.key,f.props,null,d.mode,C),C.ref=Jn(d,c,f),C.return=d,d=C)}return l(d);case cn:e:{for(P=f.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=qo(f,d.mode,C),c.return=d,d=c}return l(d);case yt:return P=f._init,N(d,c,P(f._payload),C)}if(nr(f))return y(d,c,f,C);if(Qn(f))return w(d,c,f,C);ii(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=Jo(f,d.mode,C),c.return=d,d=c),l(d)):n(d,c)}return N}var Mn=fd(!0),pd=fd(!1),Ur={},tt=Dt(Ur),jr=Dt(Ur),Nr=Dt(Ur);function Yt(e){if(e===Ur)throw Error(S(174));return e}function Va(e,t){switch(D(Nr,t),D(jr,e),D(tt,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}B(tt),D(tt,t)}function Tn(){B(tt),B(jr),B(Nr)}function md(e){Yt(Nr.current);var t=Yt(tt.current),n=xl(t,e.type);t!==n&&(D(jr,e),D(tt,n))}function Za(e){jr.current===e&&(B(tt),B(jr))}var H=Dt(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[];function Wa(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var gi=pt.ReactCurrentDispatcher,Qo=pt.ReactCurrentBatchConfig,tn=0,Q=null,te=null,re=null,Vi=!1,dr=!1,zr=0,B0=0;function ue(){throw Error(S(321))}function Ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Qa(e,t,n,r,i,o){if(tn=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gi.current=e===null||e.memoizedState===null?H0:Q0,e=n(r,i),dr){o=0;do{if(dr=!1,zr=0,25<=o)throw Error(S(301));o+=1,re=te=null,t.updateQueue=null,gi.current=Y0,e=n(r,i)}while(dr)}if(gi.current=Zi,t=te!==null&&te.next!==null,tn=0,re=te=Q=null,Vi=!1,t)throw Error(S(300));return e}function Ya(){var e=zr!==0;return zr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function be(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function _r(e,t){return typeof t=="function"?t(e):t}function Yo(e){var t=be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var p=u.lane;if((tn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,Q.lanes|=p,nn|=p}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Xe(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Xe(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hd(){}function gd(e,t){var n=Q,r=be(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,Xa(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Rr(9,yd.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(S(349));tn&30||vd(n,t,i)}return i}function vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yd(e,t,n,r){t.value=n,t.getSnapshot=r,wd(t)&&Cd(e)}function xd(e,t,n){return n(function(){wd(t)&&Cd(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Cd(e){var t=dt(e,1);t!==null&&Qe(t,e,1,-1)}function au(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},t.queue=e,e=e.dispatch=W0.bind(null,Q,e),[t.memoizedState,e]}function Rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ed(){return be().memoizedState}function vi(e,t,n,r){var i=Ge();Q.flags|=e,i.memoizedState=Rr(1|t,n,void 0,r===void 0?null:r)}function co(e,t,n,r){var i=be();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&Ha(r,l.deps)){i.memoizedState=Rr(t,n,o,r);return}}Q.flags|=e,i.memoizedState=Rr(1|t,n,o,r)}function su(e,t){return vi(8390656,8,e,t)}function Xa(e,t){return co(2048,8,e,t)}function Sd(e,t){return co(4,2,e,t)}function kd(e,t){return co(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ld(e,t,n){return n=n!=null?n.concat([e]):null,co(4,4,Pd.bind(null,t,e),n)}function Ka(){}function jd(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nd(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zd(e,t,n){return tn&21?(Xe(n,t)||(n=Mc(),Q.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function V0(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Qo.transition;Qo.transition={};try{e(!1),t()}finally{$=n,Qo.transition=r}}function _d(){return be().memoizedState}function Z0(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rd(e))Md(t,n);else if(n=sd(e,t,n,r),n!==null){var i=ge();Qe(n,e,r,i),Td(n,t,r)}}function W0(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))Md(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,l)){var s=t.interleaved;s===null?(i.next=i,Ua(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=sd(e,t,i,r),n!==null&&(i=ge(),Qe(n,e,r,i),Td(n,t,r))}}function Rd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Md(e,t){dr=Vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Td(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ja(e,n)}}var Zi={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},H0={readContext:De,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vi(4194308,4,Pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return vi(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z0.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:Ka,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=V0.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Ge();if(Z){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));tn&30||vd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,su(xd.bind(null,r,o,e),[e]),r.flags|=2048,Rr(9,yd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=oe.identifierPrefix;if(Z){var n=at,r=lt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q0={readContext:De,useCallback:jd,useContext:De,useEffect:Xa,useImperativeHandle:Ld,useInsertionEffect:Sd,useLayoutEffect:kd,useMemo:Nd,useReducer:Yo,useRef:Ed,useState:function(){return Yo(_r)},useDebugValue:Ka,useDeferredValue:function(e){var t=be();return zd(t,te.memoizedState,e)},useTransition:function(){var e=Yo(_r)[0],t=be().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:gd,useId:_d,unstable_isNewReconciler:!1},Y0={readContext:De,useCallback:jd,useContext:De,useEffect:Xa,useImperativeHandle:Ld,useInsertionEffect:Sd,useLayoutEffect:kd,useMemo:Nd,useReducer:Xo,useRef:Ed,useState:function(){return Xo(_r)},useDebugValue:Ka,useDeferredValue:function(e){var t=be();return te===null?t.memoizedState=e:zd(t,te.memoizedState,e)},useTransition:function(){var e=Xo(_r)[0],t=be().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:gd,useId:_d,unstable_isNewReconciler:!1};function An(e,t){try{var n="",r=t;do n+=Ep(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ko(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var X0=typeof WeakMap=="function"?WeakMap:Map;function Ad(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hi||(Hi=!0,Jl=r),Bl(e,t)},n}function Id(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new X0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=u1.bind(null,e,t,n),t.then(e,e))}function cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function du(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var K0=pt.ReactCurrentOwner,we=!1;function he(e,t,n,r){t.child=e===null?pd(t,null,n,r):Mn(t,e.child,n,r)}function fu(e,t,n,r,i){n=n.render;var o=t.ref;return jn(t,i),r=Qa(e,t,n,r,o,i),n=Ya(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(Z&&n&&Ia(t),t.flags|=1,he(e,t,r,i),t.child)}function pu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!is(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Od(e,t,o,r,i)):(e=Ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(l,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=Tt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Sr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ft(e,t,i)}return Vl(e,t,n,r,i)}function $d(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Cn,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Cn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Cn,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Cn,je),je|=r;return he(e,t,i,n),t.child}function Fd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,i){var o=Ee(n)?qt:pe.current;return o=_n(t,o),jn(t,i),n=Qa(e,t,n,r,o,i),r=Ya(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(Z&&r&&Ia(t),t.flags|=1,he(e,t,n,i),t.child)}function mu(e,t,n,r,i){if(Ee(n)){var o=!0;Oi(t)}else o=!1;if(jn(t,i),t.stateNode===null)yi(e,t),dd(t,n,r),Ul(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=Ee(n)?qt:pe.current,u=_n(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ou(t,l,r,u),xt=!1;var v=t.memoizedState;l.state=v,Ui(t,r,l,i),s=t.memoizedState,a!==r||v!==s||Ce.current||xt?(typeof p=="function"&&(bl(t,n,p,r),s=t.memoizedState),(a=xt||iu(t,n,a,r,v,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ud(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ve(t.type,a),l.props=u,m=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=Ee(n)?qt:pe.current,s=_n(t,s));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||v!==s)&&ou(t,l,r,s),xt=!1,v=t.memoizedState,l.state=v,Ui(t,r,l,i);var y=t.memoizedState;a!==m||v!==y||Ce.current||xt?(typeof x=="function"&&(bl(t,n,x,r),y=t.memoizedState),(u=xt||iu(t,n,u,r,v,y,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,o,i)}function Zl(e,t,n,r,i,o){Fd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&qs(t,n,!1),ft(e,t,o);r=t.stateNode,K0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mn(t,e.child,null,o),t.child=Mn(t,null,a,o)):he(e,t,a,o),t.memoizedState=r.state,i&&qs(t,n,!0),t.child}function Dd(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Va(e,t.containerInfo)}function hu(e,t,n,r,i){return Rn(),$a(i),t.flags|=256,he(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,t,n){var r=t.pendingProps,i=H.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(H,i&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=mo(l,r,0,null),e=Gt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hl(n),t.memoizedState=Wl,e):Ga(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return G0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tt(a,o):(o=Gt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Hl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return o=e.child,e=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ga(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&$a(r),Mn(t,e.child,null,n),e=Ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function G0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ko(Error(S(422))),oi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=mo({mode:"visible",children:r.children},i,0,null),o=Gt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Mn(t,e.child,null,l),t.child.memoizedState=Hl(l),t.memoizedState=Wl,o);if(!(t.mode&1))return oi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Ko(o,r,void 0),oi(e,t,l,r)}if(a=(l&e.childLanes)!==0,we||a){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),Qe(r,e,i,-1))}return rs(),r=Ko(Error(S(421))),oi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=c1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=zt(i.nextSibling),ze=t,Z=!0,We=null,e!==null&&(Ie[Oe++]=lt,Ie[Oe++]=at,Ie[Oe++]=en,lt=e.id,at=e.overflow,en=t),t=Ga(t,r.children),t.flags|=4096,t)}function gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dl(e.return,t,n)}function Go(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ud(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(he(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gu(e,n,t);else if(e.tag===19)gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Go(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Go(t,!0,n,null,o);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function J0(e,t,n){switch(t.tag){case 3:Dd(t),Rn();break;case 5:md(t);break;case 1:Ee(t.type)&&Oi(t);break;case 4:Va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(Di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?bd(e,t,n):(D(H,H.current&1),e=ft(e,t,n),e!==null?e.sibling:null);D(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ud(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,n)}return ft(e,t,n)}var Bd,Ql,Vd,Zd;Bd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};Vd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(tt.current);var o=null;switch(n){case"input":i=hl(e,i),r=hl(e,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=yl(e,i),r=yl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}wl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&b("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zd=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function q0(e,t,n){var r=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ee(t.type)&&Ii(),ce(t),null;case 3:return r=t.stateNode,Tn(),B(Ce),B(pe),Wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(ta(We),We=null))),Ql(e,t),ce(t),null;case 5:Za(t);var i=Yt(Nr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Yt(tt.current),ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[Lr]=o,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<ir.length;i++)b(ir[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Ps(r,o),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},b("invalid",r);break;case"textarea":js(r,o),b("invalid",r)}wl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,a,e),i=["children",""+a]):gr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&b("scroll",r)}switch(n){case"input":Yr(r),Ls(r,o,!0);break;case"textarea":Yr(r),Ns(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[Lr]=r,Bd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Cl(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<ir.length;i++)b(ir[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":Ps(e,r),i=hl(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),b("invalid",e);break;case"textarea":js(e,r),i=yl(e,r),b("invalid",e);break;default:i=r}wl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?wc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vr(e,s):typeof s=="number"&&vr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&b("scroll",e):s!=null&&Ca(e,o,s,l))}switch(n){case"input":Yr(e),Ls(e,r,!1);break;case"textarea":Yr(e),Ns(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Zd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Yt(Nr.current),Yt(tt.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ce(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ne!==null&&t.mode&1&&!(t.flags&128))ad(),Rn(),t.flags|=98560,o=!1;else if(o=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[qe]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else We!==null&&(ta(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ne===0&&(ne=3):rs())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Tn(),Ql(e,t),e===null&&kr(t.stateNode.containerInfo),ce(t),null;case 10:return ba(t.type._context),ce(t),null;case 17:return Ee(t.type)&&Ii(),ce(t),null;case 19:if(B(H),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)qn(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Bi(e),l!==null){for(t.flags|=128,qn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>In&&(t.flags|=128,r=!0,qn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Z)return ce(t),null}else 2*G()-o.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,qn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=H.current,D(H,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ns(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function e1(e,t){switch(Oa(t),t.tag){case 1:return Ee(t.type)&&Ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),B(Ce),B(pe),Wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return Tn(),null;case 10:return ba(t.type._context),null;case 22:case 23:return ns(),null;case 24:return null;default:return null}}var li=!1,de=!1,t1=typeof WeakSet=="function"?WeakSet:Set,j=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){K(e,t,r)}}var vu=!1;function n1(e,t){if(Rl=Ri,e=Yc(),Aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,m=e,v=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)v=m,m=x;for(;;){if(m===e)break t;if(v===n&&++u===i&&(a=l),v===o&&++p===r&&(s=l),(x=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},Ri=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ve(t.type,w),N);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(C){K(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return y=vu,vu=!1,y}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Yl(t,n,o)}i=i.next}while(i!==r)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Lr],delete t[Il],delete t[F0],delete t[D0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var le=null,Ze=!1;function gt(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(ro,n)}catch{}switch(n.tag){case 5:de||wn(n,t);case 6:var r=le,i=Ze;le=null,gt(e,t,n),le=r,Ze=i,le!==null&&(Ze?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ze?(e=le,n=n.stateNode,e.nodeType===8?Zo(e.parentNode,n):e.nodeType===1&&Zo(e,n),Cr(e)):Zo(le,n.stateNode));break;case 4:r=le,i=Ze,le=n.stateNode.containerInfo,Ze=!0,gt(e,t,n),le=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Yl(n,t,l),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!de&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,gt(e,t,n),de=r):gt(e,t,n);break;default:gt(e,t,n)}}function xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t1),t.forEach(function(r){var i=d1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ze=!1;break e;case 3:le=a.stateNode.containerInfo,Ze=!0;break e;case 4:le=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(le===null)throw Error(S(160));Qd(o,l,i),le=null,Ze=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}function Yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{fr(3,e,e.return),fo(3,e)}catch(w){K(e,e.return,w)}try{fr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var i=e.stateNode;try{vr(i,"")}catch(w){K(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hc(i,o),Cl(a,l);var u=Cl(a,o);for(l=0;l<s.length;l+=2){var p=s[l],m=s[l+1];p==="style"?wc(i,m):p==="dangerouslySetInnerHTML"?yc(i,m):p==="children"?vr(i,m):Ca(i,p,m,u)}switch(a){case"input":gl(i,o);break;case"textarea":gc(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Sn(i,!!o.multiple,x,!1):v!==!!o.multiple&&(o.defaultValue!=null?Sn(i,!!o.multiple,o.defaultValue,!0):Sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Lr]=o}catch(w){K(e,e.return,w)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){K(e,e.return,w)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(es=G())),r&4&&xu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||p,Be(t,e),de=u):Be(t,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(m=j=p;j!==null;){switch(v=j,x=v.child,v.tag){case 0:case 11:case 14:case 15:fr(4,v,v.return);break;case 1:wn(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:wn(v,v.return);break;case 22:if(v.memoizedState!==null){Cu(m);continue}}x!==null?(x.return=v,j=x):Cu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=xc("display",l))}catch(w){K(e,e.return,w)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){K(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&xu(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vr(i,""),r.flags&=-33);var o=yu(e);Gl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=yu(e);Kl(e,a,l);break;default:throw Error(S(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r1(e,t,n){j=e,Xd(e)}function Xd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||li;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||de;a=li;var u=de;if(li=l,(de=s)&&!u)for(j=i;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?Eu(i):s!==null?(s.return=l,j=s):Eu(i);for(;o!==null;)j=o,Xd(o),o=o.sibling;j=i,li=a,de=u}wu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):wu(e)}}function wu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ru(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ru(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Cr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&Xl(t)}catch(v){K(t,t.return,v)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Cu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Eu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fo(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){K(t,i,s)}}var o=t.return;try{Xl(t)}catch(s){K(t,o,s)}break;case 5:var l=t.return;try{Xl(t)}catch(s){K(t,l,s)}}}catch(s){K(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var i1=Math.ceil,Wi=pt.ReactCurrentDispatcher,Ja=pt.ReactCurrentOwner,Fe=pt.ReactCurrentBatchConfig,I=0,oe=null,q=null,ae=0,je=0,Cn=Dt(0),ne=0,Mr=null,nn=0,po=0,qa=0,pr=null,xe=null,es=0,In=1/0,rt=null,Hi=!1,Jl=null,Rt=null,ai=!1,kt=null,Qi=0,mr=0,ql=null,xi=-1,wi=0;function ge(){return I&6?G():xi!==-1?xi:xi=G()}function Mt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:U0.transition!==null?(wi===0&&(wi=Mc()),wi):(e=$,e!==0||(e=window.event,e=e===void 0?16:Dc(e.type)),e):1}function Qe(e,t,n,r){if(50<mr)throw mr=0,ql=null,Error(S(185));Fr(e,n,r),(!(I&2)||e!==oe)&&(e===oe&&(!(I&2)&&(po|=n),ne===4&&Et(e,ae)),Se(e,r),n===1&&I===0&&!(t.mode&1)&&(In=G()+500,so&&bt()))}function Se(e,t){var n=e.callbackNode;Up(e,t);var r=_i(e,e===oe?ae:0);if(r===0)n!==null&&Rs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rs(n),t===1)e.tag===0?b0(Su.bind(null,e)):id(Su.bind(null,e)),O0(function(){!(I&6)&&bt()}),n=null;else{switch(Tc(r)){case 1:n=La;break;case 4:n=_c;break;case 16:n=zi;break;case 536870912:n=Rc;break;default:n=zi}n=rf(n,Kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kd(e,t){if(xi=-1,wi=0,I&6)throw Error(S(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=_i(e,e===oe?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yi(e,r);else{t=r;var i=I;I|=2;var o=Jd();(oe!==e||ae!==t)&&(rt=null,In=G()+500,Kt(e,t));do try{a1();break}catch(a){Gd(e,a)}while(1);Da(),Wi.current=o,I=i,q!==null?t=0:(oe=null,ae=0,t=ne)}if(t!==0){if(t===2&&(i=Ll(e),i!==0&&(r=i,t=ea(e,i))),t===1)throw n=Mr,Kt(e,0),Et(e,r),Se(e,G()),n;if(t===6)Et(e,r);else{if(i=e.current.alternate,!(r&30)&&!o1(i)&&(t=Yi(e,r),t===2&&(o=Ll(e),o!==0&&(r=o,t=ea(e,o))),t===1))throw n=Mr,Kt(e,0),Et(e,r),Se(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Wt(e,xe,rt);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=es+500-G(),10<t)){if(_i(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Al(Wt.bind(null,e,xe,rt),t);break}Wt(e,xe,rt);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-He(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i1(r/1960))-r,10<r){e.timeoutHandle=Al(Wt.bind(null,e,xe,rt),r);break}Wt(e,xe,rt);break;case 5:Wt(e,xe,rt);break;default:throw Error(S(329))}}}return Se(e,G()),e.callbackNode===n?Kd.bind(null,e):null}function ea(e,t){var n=pr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Yi(e,t),e!==2&&(t=xe,xe=n,t!==null&&ta(t)),e}function ta(e){xe===null?xe=e:xe.push.apply(xe,e)}function o1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~qa,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Su(e){if(I&6)throw Error(S(327));Nn();var t=_i(e,0);if(!(t&1))return Se(e,G()),null;var n=Yi(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=ea(e,r))}if(n===1)throw n=Mr,Kt(e,0),Et(e,t),Se(e,G()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,xe,rt),Se(e,G()),null}function ts(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(In=G()+500,so&&bt())}}function rn(e){kt!==null&&kt.tag===0&&!(I&6)&&Nn();var t=I;I|=1;var n=Fe.transition,r=$;try{if(Fe.transition=null,$=1,e)return e()}finally{$=r,Fe.transition=n,I=t,!(I&6)&&bt()}}function ns(){je=Cn.current,B(Cn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I0(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ii();break;case 3:Tn(),B(Ce),B(pe),Wa();break;case 5:Za(r);break;case 4:Tn();break;case 13:B(H);break;case 19:B(H);break;case 10:ba(r.type._context);break;case 22:case 23:ns()}n=n.return}if(oe=e,q=e=Tt(e.current,null),ae=je=t,ne=0,Mr=null,qa=po=nn=0,xe=pr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Qt=null}return e}function Gd(e,t){do{var n=q;try{if(Da(),gi.current=Zi,Vi){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vi=!1}if(tn=0,re=te=Q=null,dr=!1,zr=0,Ja.current=null,n===null||n.return===null){ne=1,Mr=t,q=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=cu(l);if(x!==null){x.flags&=-257,du(x,l,a,o,t),x.mode&1&&uu(o,u,t),t=x,s=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){uu(o,u,t),rs();break e}s=Error(S(426))}}else if(Z&&a.mode&1){var N=cu(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),du(N,l,a,o,t),$a(An(s,a));break e}}o=s=An(s,a),ne!==4&&(ne=2),pr===null?pr=[o]:pr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Ad(o,s,t);nu(o,d);break e;case 1:a=s;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Rt===null||!Rt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Id(o,a,t);nu(o,C);break e}}o=o.return}while(o!==null)}ef(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function Jd(){var e=Wi.current;return Wi.current=Zi,e===null?Zi:e}function rs(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(nn&268435455)&&!(po&268435455)||Et(oe,ae)}function Yi(e,t){var n=I;I|=2;var r=Jd();(oe!==e||ae!==t)&&(rt=null,Kt(e,t));do try{l1();break}catch(i){Gd(e,i)}while(1);if(Da(),I=n,Wi.current=r,q!==null)throw Error(S(261));return oe=null,ae=0,ne}function l1(){for(;q!==null;)qd(q)}function a1(){for(;q!==null&&!Mp();)qd(q)}function qd(e){var t=nf(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?ef(e):q=t,Ja.current=null}function ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e1(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,q=null;return}}else if(n=q0(n,t,je),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ne===0&&(ne=5)}function Wt(e,t,n){var r=$,i=Fe.transition;try{Fe.transition=null,$=1,s1(e,t,n,r)}finally{Fe.transition=i,$=r}return null}function s1(e,t,n,r){do Nn();while(kt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Bp(e,o),e===oe&&(q=oe=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ai||(ai=!0,rf(zi,function(){return Nn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=$;$=1;var a=I;I|=4,Ja.current=null,n1(e,n),Yd(n,e),N0(Ml),Ri=!!Rl,Ml=Rl=null,e.current=n,r1(n),Tp(),I=a,$=l,Fe.transition=o}else e.current=n;if(ai&&(ai=!1,kt=e,Qi=i),o=e.pendingLanes,o===0&&(Rt=null),Op(n.stateNode),Se(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hi)throw Hi=!1,e=Jl,Jl=null,e;return Qi&1&&e.tag!==0&&Nn(),o=e.pendingLanes,o&1?e===ql?mr++:(mr=0,ql=e):mr=0,bt(),null}function Nn(){if(kt!==null){var e=Tc(Qi),t=Fe.transition,n=$;try{if(Fe.transition=null,$=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Qi=0,I&6)throw Error(S(331));var i=I;for(I|=4,j=e.current;j!==null;){var o=j,l=o.child;if(j.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:fr(8,p,o)}var m=p.child;if(m!==null)m.return=p,j=m;else for(;j!==null;){p=j;var v=p.sibling,x=p.return;if(Wd(p),p===u){j=null;break}if(v!==null){v.return=x,j=v;break}j=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}j=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,j=l;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,j=d;break e}j=o.return}}var c=e.current;for(j=c;j!==null;){l=j;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,j=f;else e:for(l=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fo(9,a)}}catch(E){K(a,a.return,E)}if(a===l){j=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,j=C;break e}j=a.return}}if(I=i,bt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{$=n,Fe.transition=t}}return!1}function ku(e,t,n){t=An(n,t),t=Ad(e,t,1),e=_t(e,t,1),t=ge(),e!==null&&(Fr(e,1,t),Se(e,t))}function K(e,t,n){if(e.tag===3)ku(e,e,n);else for(;t!==null;){if(t.tag===3){ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))){e=An(n,e),e=Id(t,e,1),t=_t(t,e,1),e=ge(),t!==null&&(Fr(t,1,e),Se(t,e));break}}t=t.return}}function u1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>G()-es?Kt(e,0):qa|=n),Se(e,t)}function tf(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=ge();e=dt(e,t),e!==null&&(Fr(e,t,n),Se(e,n))}function c1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tf(e,n)}function d1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),tf(e,n)}var nf;nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,J0(e,t,n);we=!!(e.flags&131072)}else we=!1,Z&&t.flags&1048576&&od(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yi(e,t),e=t.pendingProps;var i=_n(t,pe.current);jn(t,n),i=Qa(null,t,r,e,i,n);var o=Ya();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,Oi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ba(t),i.updater=uo,t.stateNode=i,i._reactInternals=t,Ul(t,r,e,n),t=Zl(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&Ia(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=p1(r),e=Ve(r,e),i){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=mu(null,t,r,e,n);break e;case 11:t=fu(null,t,r,e,n);break e;case 14:t=pu(null,t,r,Ve(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Vl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),mu(e,t,r,i,n);case 3:e:{if(Dd(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ud(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=An(Error(S(423)),t),t=hu(e,t,r,n,i);break e}else if(r!==i){i=An(Error(S(424)),t),t=hu(e,t,r,n,i);break e}else for(Ne=zt(t.stateNode.containerInfo.firstChild),ze=t,Z=!0,We=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===i){t=ft(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return md(t),e===null&&Fl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Tl(r,i)?l=null:o!==null&&Tl(r,o)&&(t.flags|=32),Fd(e,t),he(e,t,l,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return bd(e,t,n);case 4:return Va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),fu(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,D(Di,r._currentValue),r._currentValue=l,o!==null)if(Xe(o.value,l)){if(o.children===i.children&&!Ce.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=st(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Dl(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Dl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=De(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),pu(e,t,r,i,n);case 15:return Od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),yi(e,t),t.tag=1,Ee(r)?(e=!0,Oi(t)):e=!1,jn(t,n),dd(t,r,i),Ul(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return Ud(e,t,n);case 22:return $d(e,t,n)}throw Error(S(156,t.tag))};function rf(e,t){return zc(e,t)}function f1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new f1(e,t,n,r)}function is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p1(e){if(typeof e=="function")return is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sa)return 11;if(e===ka)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ci(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")is(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return Gt(n.children,i,o,t);case Ea:l=8,i|=8;break;case dl:return e=$e(12,n,t,i|2),e.elementType=dl,e.lanes=o,e;case fl:return e=$e(13,n,t,i),e.elementType=fl,e.lanes=o,e;case pl:return e=$e(19,n,t,i),e.elementType=pl,e.lanes=o,e;case fc:return mo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cc:l=10;break e;case dc:l=9;break e;case Sa:l=11;break e;case ka:l=14;break e;case yt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=$e(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gt(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function mo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=fc,e.lanes=n,e.stateNode={isHidden:!1},e}function Jo(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=To(0),this.expirationTimes=To(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function os(e,t,n,r,i,o,l,a,s){return e=new m1(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(o),e}function h1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function of(e){if(!e)return $t;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return rd(e,n,t)}return t}function lf(e,t,n,r,i,o,l,a,s){return e=os(n,r,!0,e,i,o,l,a,s),e.context=of(null),n=e.current,r=ge(),i=Mt(n),o=st(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Fr(e,i,r),Se(e,r),e}function ho(e,t,n,r){var i=t.current,o=ge(),l=Mt(i);return n=of(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,l),e!==null&&(Qe(e,i,l,o),hi(e,i,l)),l}function Xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ls(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function g1(){return null}var af=typeof reportError=="function"?reportError:function(e){console.error(e)};function as(e){this._internalRoot=e}go.prototype.render=as.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ho(e,t,null,null)};go.prototype.unmount=as.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){ho(null,e,null,null)}),t[ct]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Fc(e)}};function ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function v1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Xi(l);o.call(u)}}var l=lf(t,r,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=l,e[ct]=l.current,kr(e.nodeType===8?e.parentNode:e),rn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xi(s);a.call(u)}}var s=os(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=s,e[ct]=s.current,kr(e.nodeType===8?e.parentNode:e),rn(function(){ho(t,s,n,r)}),s}function yo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Xi(l);a.call(s)}}ho(t,l,e,i)}else l=v1(n,t,e,i,r);return Xi(l)}Ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(ja(t,n|1),Se(t,G()),!(I&6)&&(In=G()+500,bt()))}break;case 13:rn(function(){var r=dt(e,1);if(r!==null){var i=ge();Qe(r,e,1,i)}}),ls(e,1)}};Na=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ge();Qe(t,e,134217728,n)}ls(e,134217728)}};Ic=function(e){if(e.tag===13){var t=Mt(e),n=dt(e,t);if(n!==null){var r=ge();Qe(n,e,t,r)}ls(e,t)}};Oc=function(){return $};$c=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Sl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ao(r);if(!i)throw Error(S(90));mc(r),gl(r,i)}}}break;case"textarea":gc(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};Sc=ts;kc=rn;var y1={usingClientEntryPoint:!1,Events:[br,hn,ao,Cc,Ec,ts]},er={findFiberByHostInstance:Ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},x1={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{ro=si.inject(x1),et=si}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ss(t))throw Error(S(200));return h1(e,t,null,n)};Re.createRoot=function(e,t){if(!ss(e))throw Error(S(299));var n=!1,r="",i=af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=os(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,kr(e.nodeType===8?e.parentNode:e),new as(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=jc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return rn(e)};Re.hydrate=function(e,t,n){if(!vo(t))throw Error(S(200));return yo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!ss(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=af;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lf(t,null,e,1,n??null,i,!1,o,l),e[ct]=t.current,kr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new go(t)};Re.render=function(e,t,n){if(!vo(t))throw Error(S(200));return yo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!vo(e))throw Error(S(40));return e._reactRootContainer?(rn(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Re.unstable_batchedUpdates=ts;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return yo(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function sf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf)}catch(e){console.error(e)}}sf(),oc.exports=Re;var w1=oc.exports,ju=w1;ul.createRoot=ju.createRoot,ul.hydrateRoot=ju.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tr(){return Tr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Nu="popstate";function C1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return na("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ki(i)}return S1(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function us(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E1(){return Math.random().toString(36).substr(2,8)}function zu(e,t){return{usr:e.state,key:e.key,idx:t}}function na(e,t,n,r){return n===void 0&&(n=null),Tr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||E1()})}function Ki(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function S1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Pt.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(Tr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function m(){a=Pt.Pop;let N=p(),d=N==null?null:N-u;u=N,s&&s({action:a,location:w.location,delta:d})}function v(N,d){a=Pt.Push;let c=na(w.location,N,d);n&&n(c,N),u=p()+1;let f=zu(c,u),C=w.createHref(c);try{l.pushState(f,"",C)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(C)}o&&s&&s({action:a,location:w.location,delta:1})}function x(N,d){a=Pt.Replace;let c=na(w.location,N,d);n&&n(c,N),u=p();let f=zu(c,u),C=w.createHref(c);l.replaceState(f,"",C),o&&s&&s({action:a,location:w.location,delta:0})}function y(N){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof N=="string"?N:Ki(N);return ee(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return a},get location(){return e(i,l)},listen(N){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Nu,m),s=N,()=>{i.removeEventListener(Nu,m),s=null}},createHref(N){return t(i,N)},createURL:y,encodeLocation(N){let d=y(N);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:x,go(N){return l.go(N)}};return w}var _u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_u||(_u={}));function k1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zn(t):t,i=cs(r.pathname||"/",n);if(i==null)return null;let o=uf(e);P1(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=A1(o[a],$1(i));return l}function uf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(ee(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=At([r,s.relativePath]),p=n.concat(s);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uf(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:M1(u,o.index),routesMeta:p})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of cf(o.path))i(o,l,s)}),t}function cf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=cf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function P1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L1=/^:\w+$/,j1=3,N1=2,z1=1,_1=10,R1=-2,Ru=e=>e==="*";function M1(e,t){let n=e.split("/"),r=n.length;return n.some(Ru)&&(r+=R1),t&&(r+=N1),n.filter(i=>!Ru(i)).reduce((i,o)=>i+(L1.test(o)?j1:o===""?z1:_1),r)}function T1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function A1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",p=I1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let m=a.route;o.push({params:r,pathname:At([i,p.pathname]),pathnameBase:U1(At([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=At([i,p.pathnameBase]))}return o}function I1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=O1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,m)=>{if(p==="*"){let v=a[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return u[p]=F1(a[m]||"",p),u},{}),pathname:o,pathnameBase:l,pattern:e}}function O1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),us(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $1(e){try{return decodeURI(e)}catch(t){return us(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function F1(e,t){try{return decodeURIComponent(e)}catch(n){return us(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function cs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function D1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zn(e):e;return{pathname:n?n.startsWith("/")?n:b1(n,t):t,search:B1(r),hash:V1(i)}}function b1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function el(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function df(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ff(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zn(e):(i=Tr({},e),ee(!i.pathname||!i.pathname.includes("?"),el("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),el("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),el("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(r||l==null)a=n;else{let m=t.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}a=m>=0?t[m]:"/"}let s=D1(i,a),u=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const At=e=>e.join("/").replace(/\/\/+/g,"/"),U1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,V1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Z1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pf=["post","put","patch","delete"];new Set(pf);const W1=["get",...pf];new Set(W1);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}const ds=h.createContext(null),H1=h.createContext(null),Wn=h.createContext(null),xo=h.createContext(null),an=h.createContext({outlet:null,matches:[],isDataRoute:!1}),mf=h.createContext(null);function Q1(e,t){let{relative:n}=t===void 0?{}:t;Br()||ee(!1);let{basename:r,navigator:i}=h.useContext(Wn),{hash:o,pathname:l,search:a}=gf(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:At([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Br(){return h.useContext(xo)!=null}function wo(){return Br()||ee(!1),h.useContext(xo).location}function hf(e){h.useContext(Wn).static||h.useLayoutEffect(e)}function Y1(){let{isDataRoute:e}=h.useContext(an);return e?am():X1()}function X1(){Br()||ee(!1);let e=h.useContext(ds),{basename:t,navigator:n}=h.useContext(Wn),{matches:r}=h.useContext(an),{pathname:i}=wo(),o=JSON.stringify(df(r).map(s=>s.pathnameBase)),l=h.useRef(!1);return hf(()=>{l.current=!0}),h.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let p=ff(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:At([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,o,i,e])}function gf(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=h.useContext(an),{pathname:i}=wo(),o=JSON.stringify(df(r).map(l=>l.pathnameBase));return h.useMemo(()=>ff(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function K1(e,t){return G1(e,t)}function G1(e,t,n){Br()||ee(!1);let{navigator:r}=h.useContext(Wn),{matches:i}=h.useContext(an),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=wo(),u;if(t){var p;let w=typeof t=="string"?Zn(t):t;a==="/"||(p=w.pathname)!=null&&p.startsWith(a)||ee(!1),u=w}else u=s;let m=u.pathname||"/",v=a==="/"?m:m.slice(a.length)||"/",x=k1(e,{pathname:v}),y=nm(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:At([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:At([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?h.createElement(xo.Provider,{value:{location:Gi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pt.Pop}},y):y}function J1(){let e=lm(),t=Z1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),n?h.createElement("pre",{style:i},n):null,o)}const q1=h.createElement(J1,null);class em extends h.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?h.createElement(an.Provider,{value:this.props.routeContext},h.createElement(mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tm(e){let{routeContext:t,match:n,children:r}=e,i=h.useContext(ds);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),h.createElement(an.Provider,{value:t},r)}function nm(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=o.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||ee(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,s,u)=>{let p=s.route.id?l==null?void 0:l[s.route.id]:null,m=null;n&&(m=s.route.errorElement||q1);let v=t.concat(o.slice(0,u+1)),x=()=>{let y;return p?y=m:s.route.Component?y=h.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=a,h.createElement(tm,{match:s,routeContext:{outlet:a,matches:v,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?h.createElement(em,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var vf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vf||{}),Ji=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ji||{});function rm(e){let t=h.useContext(ds);return t||ee(!1),t}function im(e){let t=h.useContext(H1);return t||ee(!1),t}function om(e){let t=h.useContext(an);return t||ee(!1),t}function yf(e){let t=om(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function lm(){var e;let t=h.useContext(mf),n=im(Ji.UseRouteError),r=yf(Ji.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function am(){let{router:e}=rm(vf.UseNavigateStable),t=yf(Ji.UseNavigateStable),n=h.useRef(!1);return hf(()=>{n.current=!0}),h.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Gi({fromRouteId:t},o)))},[e,t])}function xf(e){ee(!1)}function sm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:o,static:l=!1}=e;Br()&&ee(!1);let a=t.replace(/^\/*/,"/"),s=h.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Zn(r));let{pathname:u="/",search:p="",hash:m="",state:v=null,key:x="default"}=r,y=h.useMemo(()=>{let w=cs(u,a);return w==null?null:{location:{pathname:w,search:p,hash:m,state:v,key:x},navigationType:i}},[a,u,p,m,v,x,i]);return y==null?null:h.createElement(Wn.Provider,{value:s},h.createElement(xo.Provider,{children:n,value:y}))}function um(e){let{children:t,location:n}=e;return K1(ra(t),n)}new Promise(()=>{});function ra(e,t){t===void 0&&(t=[]);let n=[];return h.Children.forEach(e,(r,i)=>{if(!h.isValidElement(r))return;let o=[...t,i];if(r.type===h.Fragment){n.push.apply(n,ra(r.props.children,o));return}r.type!==xf&&ee(!1),!r.props.index||!r.props.children||ee(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ra(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ia.apply(this,arguments)}function cm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fm(e,t){return e.button===0&&(!t||t==="_self")&&!dm(e)}const pm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],mm="startTransition",Mu=cp[mm];function hm(e){let{basename:t,children:n,future:r,window:i}=e,o=h.useRef();o.current==null&&(o.current=C1({window:i,v5Compat:!0}));let l=o.current,[a,s]=h.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=h.useCallback(m=>{u&&Mu?Mu(()=>s(m)):s(m)},[s,u]);return h.useLayoutEffect(()=>l.listen(p),[l,p]),h.createElement(sm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wt=h.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:p}=t,m=cm(t,pm),{basename:v}=h.useContext(Wn),x,y=!1;if(typeof u=="string"&&vm.test(u)&&(x=u,gm))try{let c=new URL(window.location.href),f=u.startsWith("//")?new URL(c.protocol+u):new URL(u),C=cs(f.pathname,v);f.origin===c.origin&&C!=null?u=C+f.search+f.hash:y=!0}catch{}let w=Q1(u,{relative:i}),N=ym(u,{replace:l,state:a,target:s,preventScrollReset:p,relative:i});function d(c){r&&r(c),c.defaultPrevented||N(c)}return h.createElement("a",ia({},m,{href:x||w,onClick:y||o?r:d,ref:n,target:s}))});var Tu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Tu||(Tu={}));var Au;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Au||(Au={}));function ym(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,a=Y1(),s=wo(),u=gf(e,{relative:l});return h.useCallback(p=>{if(fm(p,n)){p.preventDefault();let m=r!==void 0?r:Ki(s)===Ki(u);a(e,{replace:m,state:i,preventScrollReset:o,relative:l})}},[s,a,u,r,i,n,e,o,l])}var fe=function(){return fe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},fe.apply(this,arguments)};function Ar(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var U="-ms-",hr="-moz-",O="-webkit-",wf="comm",Co="rule",fs="decl",xm="@import",Cf="@keyframes",wm="@layer",Cm=Math.abs,ps=String.fromCharCode,oa=Object.assign;function Em(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function Ef(e){return e.trim()}function it(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Ei(e,t){return e.indexOf(t)}function ie(e,t){return e.charCodeAt(t)|0}function On(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Sf(e){return e.length}function or(e,t){return t.push(e),e}function Sm(e,t){return e.map(t).join("")}function Iu(e,t){return e.filter(function(n){return!it(n,t)})}var Eo=1,$n=1,kf=0,Ue=0,J=0,Hn="";function So(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Eo,column:$n,length:l,return:"",siblings:a}}function vt(e,t){return oa(So("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function un(e){for(;e.root;)e=vt(e.root,{children:[e]});or(e,e.siblings)}function km(){return J}function Pm(){return J=Ue>0?ie(Hn,--Ue):0,$n--,J===10&&($n=1,Eo--),J}function Ye(){return J=Ue<kf?ie(Hn,Ue++):0,$n++,J===10&&($n=1,Eo++),J}function Jt(){return ie(Hn,Ue)}function Si(){return Ue}function ko(e,t){return On(Hn,e,t)}function la(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lm(e){return Eo=$n=1,kf=Je(Hn=e),Ue=0,[]}function jm(e){return Hn="",e}function tl(e){return Ef(ko(Ue-1,aa(e===91?e+2:e===40?e+1:e)))}function Nm(e){for(;(J=Jt())&&J<33;)Ye();return la(e)>2||la(J)>3?"":" "}function zm(e,t){for(;--t&&Ye()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return ko(e,Si()+(t<6&&Jt()==32&&Ye()==32))}function aa(e){for(;Ye();)switch(J){case e:return Ue;case 34:case 39:e!==34&&e!==39&&aa(J);break;case 40:e===41&&aa(e);break;case 92:Ye();break}return Ue}function _m(e,t){for(;Ye()&&e+J!==47+10;)if(e+J===42+42&&Jt()===47)break;return"/*"+ko(t,Ue-1)+"*"+ps(e===47?e:Ye())}function Rm(e){for(;!la(Jt());)Ye();return ko(e,Ue)}function Mm(e){return jm(ki("",null,null,null,[""],e=Lm(e),0,[0],e))}function ki(e,t,n,r,i,o,l,a,s){for(var u=0,p=0,m=l,v=0,x=0,y=0,w=1,N=1,d=1,c=0,f="",C=i,E=o,P=r,k=f;N;)switch(y=c,c=Ye()){case 40:if(y!=108&&ie(k,m-1)==58){Ei(k+=M(tl(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=tl(c);break;case 9:case 10:case 13:case 32:k+=Nm(y);break;case 92:k+=zm(Si()-1,7);continue;case 47:switch(Jt()){case 42:case 47:or(Tm(_m(Ye(),Si()),t,n,s),s);break;default:k+="/"}break;case 123*w:a[u++]=Je(k)*d;case 125*w:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:d==-1&&(k=M(k,/\f/g,"")),x>0&&Je(k)-m&&or(x>32?$u(k+";",r,n,m-1,s):$u(M(k," ","")+";",r,n,m-2,s),s);break;case 59:k+=";";default:if(or(P=Ou(k,t,n,u,p,i,a,f,C=[],E=[],m,o),o),c===123)if(p===0)ki(k,t,P,P,C,o,m,a,E);else switch(v===99&&ie(k,3)===110?100:v){case 100:case 108:case 109:case 115:ki(e,P,P,r&&or(Ou(e,P,P,0,0,i,a,f,i,C=[],m,E),E),i,E,m,a,r?C:E);break;default:ki(k,P,P,P,[""],E,0,a,E)}}u=p=x=0,w=d=1,f=k="",m=l;break;case 58:m=1+Je(k),x=y;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&Pm()==125)continue}switch(k+=ps(c),c*w){case 38:d=p>0?1:(k+="\f",-1);break;case 44:a[u++]=(Je(k)-1)*d,d=1;break;case 64:Jt()===45&&(k+=tl(Ye())),v=Jt(),p=m=Je(f=k+=Rm(Si())),c++;break;case 45:y===45&&Je(k)==2&&(w=0)}}return o}function Ou(e,t,n,r,i,o,l,a,s,u,p,m){for(var v=i-1,x=i===0?o:[""],y=Sf(x),w=0,N=0,d=0;w<r;++w)for(var c=0,f=On(e,v+1,v=Cm(N=l[w])),C=e;c<y;++c)(C=Ef(N>0?x[c]+" "+f:M(f,/&\f/g,x[c])))&&(s[d++]=C);return So(e,t,n,i===0?Co:a,s,u,p,m)}function Tm(e,t,n,r){return So(e,t,n,wf,ps(km()),On(e,2,-2),0,r)}function $u(e,t,n,r,i){return So(e,t,n,fs,On(e,0,r),On(e,r+1,-1),r,i)}function Pf(e,t,n){switch(Em(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return hr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+hr+e+U+e+e;case 5936:switch(ie(e,t+11)){case 114:return O+e+U+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+U+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+U+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+U+e+e;case 6165:return O+e+U+"flex-"+e+e;case 5187:return O+e+M(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return O+e+U+"flex-item-"+M(e,/flex-|-self/g,"")+(it(e,/flex-|baseline/)?"":U+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return O+e+U+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+U+M(e,"shrink","negative")+e;case 5292:return O+e+U+M(e,"basis","preferred-size")+e;case 6060:return O+"box-"+M(e,"-grow","")+O+e+U+M(e,"grow","positive")+e;case 4554:return O+M(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!it(e,/flex-|baseline/))return U+"grid-column-align"+On(e,t)+e;break;case 2592:case 3360:return U+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,it(r.props,/grid-\w+-end/)})?~Ei(e+(n=n[t].value),"span")?e:U+M(e,"-start","")+e+U+"grid-row-span:"+(~Ei(n,"span")?it(n,/\d+/):+it(n,/\d+/)-+it(e,/\d+/))+";":U+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return it(r.props,/grid-\w+-start/)})?e:U+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+hr+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ei(e,"stretch")?Pf(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return U+i+":"+o+u+(l?U+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(ie(e,t+6)===121)return M(e,":",":"+O)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(ie(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+U+"$2box$3")+e;case 100:return M(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function qi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Am(e,t,n,r){switch(e.type){case wm:if(e.children.length)break;case xm:case fs:return e.return=e.return||e.value;case wf:return"";case Cf:return e.return=e.value+"{"+qi(e.children,r)+"}";case Co:if(!Je(e.value=e.props.join(",")))return""}return Je(n=qi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Im(e){var t=Sf(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Om(e){return function(t){t.root||(t=t.return)&&e(t)}}function $m(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case fs:e.return=Pf(e.value,e.length,n);return;case Cf:return qi([vt(e,{value:M(e.value,"@","@"+O)})],r);case Co:if(e.length)return Sm(n=e.props,function(i){switch(it(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(vt(e,{props:[M(i,/:(read-\w+)/,":"+hr+"$1")]})),un(vt(e,{props:[i]})),oa(e,{props:Iu(n,r)});break;case"::placeholder":un(vt(e,{props:[M(i,/:(plac\w+)/,":"+O+"input-$1")]})),un(vt(e,{props:[M(i,/:(plac\w+)/,":"+hr+"$1")]})),un(vt(e,{props:[M(i,/:(plac\w+)/,U+"input-$1")]})),un(vt(e,{props:[i]})),oa(e,{props:Iu(n,r)});break}return""})}}var Fm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ms=typeof window<"u"&&"HTMLElement"in window,Dm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),bm={},Po=Object.freeze([]),Dn=Object.freeze({});function Lf(e,t,n){return n===void 0&&(n=Dn),e.theme!==n.theme&&e.theme||t||n.theme}var jf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Um=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bm=/(^-|-$)/g;function Fu(e){return e.replace(Um,"-").replace(Bm,"")}var Vm=/(a)(d)/gi,Du=function(e){return String.fromCharCode(e+(e>25?39:97))};function sa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Du(t%52)+n;return(Du(t%52)+n).replace(Vm,"$1-$2")}var nl,En=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Nf=function(e){return En(5381,e)};function zf(e){return sa(Nf(e)>>>0)}function Zm(e){return e.displayName||e.name||"Component"}function rl(e){return typeof e=="string"&&!0}var _f=typeof Symbol=="function"&&Symbol.for,Rf=_f?Symbol.for("react.memo"):60115,Wm=_f?Symbol.for("react.forward_ref"):60112,Hm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ym=((nl={})[Wm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nl[Rf]=Mf,nl);function bu(e){return("type"in(t=e)&&t.type.$$typeof)===Rf?Mf:"$$typeof"in e?Ym[e.$$typeof]:Hm;var t}var Xm=Object.defineProperty,Km=Object.getOwnPropertyNames,Uu=Object.getOwnPropertySymbols,Gm=Object.getOwnPropertyDescriptor,Jm=Object.getPrototypeOf,Bu=Object.prototype;function Tf(e,t,n){if(typeof t!="string"){if(Bu){var r=Jm(t);r&&r!==Bu&&Tf(e,r,n)}var i=Km(t);Uu&&(i=i.concat(Uu(t)));for(var o=bu(e),l=bu(t),a=0;a<i.length;++a){var s=i[a];if(!(s in Qm||n&&n[s]||l&&s in l||o&&s in o)){var u=Gm(t,s);try{Xm(e,s,u)}catch{}}}}return e}function bn(e){return typeof e=="function"}function hs(e){return typeof e=="object"&&"styledComponentId"in e}function Xt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ua(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ir(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ca(e,t,n){if(n===void 0&&(n=!1),!n&&!Ir(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ca(e[r],t[r]);else if(Ir(t))for(var r in t)e[r]=ca(e[r],t[r]);return e}function gs(e,t){Object.defineProperty(e,"toString",{value:t})}function Vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Vr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Pi=new Map,eo=new Map,il=1,ui=function(e){if(Pi.has(e))return Pi.get(e);for(;eo.has(il);)il++;var t=il++;return Pi.set(e,t),eo.set(t,e),t},eh=function(e,t){Pi.set(e,t),eo.set(t,e)},th="style[".concat(Fn,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),nh=new RegExp("^".concat(Fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rh=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},ih=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(nh);if(s){var u=0|parseInt(s[1],10),p=s[2];u!==0&&(eh(p,u),rh(e,p,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function oh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Af=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Fn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Fn,"active"),r.setAttribute("data-styled-version","6.0.7");var l=oh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},lh=function(){function e(t){this.element=Af(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Vr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ah=function(){function e(t){this.element=Af(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vu=ms,uh={isServer:!ms,useCSSOMInjection:!Dm},to=function(){function e(t,n,r){t===void 0&&(t=Dn),n===void 0&&(n={});var i=this;this.options=fe(fe({},uh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ms&&Vu&&(Vu=!1,function(o){for(var l=document.querySelectorAll(th),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Fn)!=="active"&&(ih(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),gs(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(m){var v=function(d){return eo.get(d)}(m);if(v===void 0)return"continue";var x=o.names.get(v),y=l.getGroup(m);if(x===void 0||y.length===0)return"continue";var w="".concat(Fn,".g").concat(m,'[id="').concat(v,'"]'),N="";x!==void 0&&x.forEach(function(d){d.length>0&&(N+="".concat(d,","))}),s+="".concat(y).concat(w,'{content:"').concat(N,'"}').concat(`/*!sc*/
`)},p=0;p<a;p++)u(p);return s}(i)})}return e.registerId=function(t){return ui(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fe(fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sh(i):r?new lh(i):new ah(i)}(this.options),new qm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ch=/&/g,dh=/^\s*\/\/.*$/gm;function If(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=If(n.children,t)),n})}function fh(e){var t,n,r,i=e===void 0?Dn:e,o=i.options,l=o===void 0?Dn:o,a=i.plugins,s=a===void 0?Po:a,u=function(v,x,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):v},p=s.slice();p.push(function(v){v.type===Co&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(ch,n).replace(r,u))}),l.prefix&&p.push($m),p.push(Am);var m=function(v,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var N=v.replace(dh,""),d=Mm(y||x?"".concat(y," ").concat(x," { ").concat(N," }"):N);l.namespace&&(d=If(d,l.namespace));var c=[];return qi(d,Im(p.concat(Om(function(f){return c.push(f)})))),c};return m.hash=s.length?s.reduce(function(v,x){return x.name||Vr(15),En(v,x.name)},5381).toString():"",m}var ph=new to,da=fh(),Of=F.createContext({shouldForwardProp:void 0,styleSheet:ph,stylis:da});Of.Consumer;F.createContext(void 0);function fa(){return h.useContext(Of)}var mh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=da);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,gs(this,function(){throw Vr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=da),this.name+t.hash},e}(),hh=function(e){return e>="A"&&e<="Z"};function Zu(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;hh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $f=function(e){return e==null||e===!1||e===""},Ff=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!$f(o)&&(Array.isArray(o)&&o.isCss||bn(o)?r.push("".concat(Zu(i),":"),o,";"):Ir(o)?r.push.apply(r,Ar(Ar(["".concat(i," {")],Ff(o),!1),["}"],!1)):r.push("".concat(Zu(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Fm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function It(e,t,n,r){if($f(e))return[];if(hs(e))return[".".concat(e.styledComponentId)];if(bn(e)){if(!bn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return It(i,t,n,r)}var o;return e instanceof mh?n?(e.inject(n,r),[e.getName(r)]):[e]:Ir(e)?Ff(e):Array.isArray(e)?Array.prototype.concat.apply(Po,e.map(function(l){return It(l,t,n,r)})):[e.toString()]}function Df(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bn(n)&&!hs(n))return!1}return!0}var gh=Nf("6.0.7"),vh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Df(t),this.componentId=n,this.baseHash=En(gh,n),this.baseStyle=r,to.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Xt(i,this.staticRulesId);else{var o=ua(It(this.rules,t,n,r)),l=sa(En(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Xt(i,l),this.staticRulesId=l}else{for(var s=En(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")u+=m;else if(m){var v=ua(It(m,t,n,r));s=En(s,v),u+=v}}if(u){var x=sa(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=Xt(i,x)}}return i},e}(),vs=F.createContext(void 0);vs.Consumer;var ol={};function yh(e,t,n){var r=hs(e),i=e,o=!rl(e),l=t.attrs,a=l===void 0?Po:l,s=t.componentId,u=s===void 0?function(f,C){var E=typeof f!="string"?"sc":Fu(f);ol[E]=(ol[E]||0)+1;var P="".concat(E,"-").concat(zf("6.0.7"+E+ol[E]));return C?"".concat(C,"-").concat(P):P}(t.displayName,t.parentComponentId):s,p=t.displayName;p===void 0&&function(f){return rl(f)?"styled.".concat(f):"Styled(".concat(Zm(f),")")}(e);var m=t.displayName&&t.componentId?"".concat(Fu(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;x=function(f,C){return y(f,C)&&w(f,C)}}else x=y}var N=new vh(n,m,r?i.componentStyle:void 0);function d(f,C){return function(E,P,k){var z=E.attrs,W=E.componentStyle,T=E.defaultProps,ke=E.foldedComponentIds,Ut=E.styledComponentId,Bt=E.target,Zr=F.useContext(vs),Lo=fa(),Vt=E.shouldForwardProp||Lo.shouldForwardProp,Te=function(nt,Pe,mt){for(var Le,Ae=fe(fe({},Pe),{className:void 0,theme:mt}),jo=0;jo<nt.length;jo+=1){var Wr=bn(Le=nt[jo])?Le(Ae):Le;for(var ht in Wr)Ae[ht]=ht==="className"?Xt(Ae[ht],Wr[ht]):ht==="style"?fe(fe({},Ae[ht]),Wr[ht]):Wr[ht]}return Pe.className&&(Ae.className=Xt(Ae.className,Pe.className)),Ae}(z,P,Lf(P,Zr,T)||Dn),L=Te.as||Bt,_={};for(var R in Te)Te[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?_.as=Te.forwardedAs:Vt&&!Vt(R,L)||(_[R]=Te[R]));var V=function(nt,Pe){var mt=fa(),Le=nt.generateAndInjectStyles(Pe,mt.styleSheet,mt.stylis);return Le}(W,Te),X=Xt(ke,Ut);return V&&(X+=" "+V),Te.className&&(X+=" "+Te.className),_[rl(L)&&!jf.has(L)?"class":"className"]=X,_.ref=k,h.createElement(L,_)}(c,f,C)}var c=F.forwardRef(d);return c.attrs=v,c.componentStyle=N,c.shouldForwardProp=x,c.foldedComponentIds=r?Xt(i.foldedComponentIds,i.styledComponentId):"",c.styledComponentId=m,c.target=r?i.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?function(C){for(var E=[],P=1;P<arguments.length;P++)E[P-1]=arguments[P];for(var k=0,z=E;k<z.length;k++)ca(C,z[k],!0);return C}({},i.defaultProps,f):f}}),gs(c,function(){return".".concat(c.styledComponentId)}),o&&Tf(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function Wu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Hu=function(e){return Object.assign(e,{isCss:!0})};function bf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bn(e)||Ir(e)){var r=e;return Hu(It(Wu(Po,Ar([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?It(i):Hu(It(Wu(i,t)))}function pa(e,t,n){if(n===void 0&&(n=Dn),!t)throw Vr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,bf.apply(void 0,Ar([i],o,!1)))};return r.attrs=function(i){return pa(e,t,fe(fe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return pa(e,t,fe(fe({},n),i))},r}var Uf=function(e){return pa(yh,e)},me=Uf;jf.forEach(function(e){me[e]=Uf(e)});var xh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Df(t),to.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ua(It(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&to.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function wh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bf.apply(void 0,Ar([e],t,!1)),i="sc-global-".concat(zf(JSON.stringify(r))),o=new xh(r,i),l=function(s){var u=fa(),p=F.useContext(vs),m=F.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(m,s,u.styleSheet,p,u.stylis),F.useLayoutEffect(function(){if(!u.styleSheet.server)return a(m,s,u.styleSheet,p,u.stylis),function(){return o.removeStyles(m,u.styleSheet)}},[m,s,u.styleSheet,p,u.stylis]),null};function a(s,u,p,m,v){if(o.isStatic)o.renderStyles(s,bm,p,v);else{var x=fe(fe({},u),{theme:Lf(u,m,l.defaultProps)});o.renderStyles(s,x,p,v)}}return F.memo(l)}const Ch=wh`
  :root {
    --title: 'Ubuntu', sans-serif;
    --text: 'Noto Sans', sans-serif;
    --p1: #E6DFFF;
    --p2: #CFC1FF;
    --p3: #A38EFF;
    --p4: #735AE3;
    --p5: #4F3BC3;
    --p6: #20107D;
    --p7: #0E034D;
    --p8: #07002F;
    --w: #F7F7F7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
  
  .container {
    margin: 0 calc(100vw * 0.075);
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fromRight {
    from {
      transform: translateX(200px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Eh=me.header`
  background: var(--p8);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  a {
    color: var(--p1);
    font-family: var(--title);
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`,Sh=me.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  ul {
    display: flex;
    align-items: center;
    gap: 32px;

    a {
      font-family: var(--title);
      font-size: 1rem;
      font-weight: 400;
      color: var(--p2);
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 24px;
        left: 0;
        height: 0;
        width: 0;
        background: var(--p1);
        transition: width ease 0.3s;
      }

      &:hover::after {
        height: 2px;
        width: 100%;
      }

      // links mobile
      &.mobile {
        display: none;
      }
    }
  }

  // menu mobile
  &.mobile {
    position: absolute;
    top: 80px;
    left: 0;
    background: var(--p7);
    width: 100%;
    flex-direction: column;
    gap: 0;
    z-index: 1000;
    transition: all ease 0.3s;
    height: 0;
    visibility: hidden;
    overflow-y: hidden;

    ul {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 0;

      a {
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 72px;
        text-align: center;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        border-bottom: 2px solid var(--p8);
        color: var(--p1);
        transition: all ease 0.3s;

        &:hover,
        &:focus {
          background: var(--p6);
        }

        &::before,
        &::after {
          display: none;
        }
      }

      // links mobile
      a.mobile {
        display: flex;
      }
    }
  }

  #btn {
    font-family: var(--title);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: var(--p1);
    background: linear-gradient(to right, #09002f, #24175e);
    padding: 12px 24px;
    border-radius: 3px;
    transition: all ease 0.3s;

    &:hover,
    &:focus {
      filter: brightness(150%);
    }

    &.mobile {
      background: var(--p6);
      font-size: 1.5rem;
      margin-top: 20px;
      padding: 16px 32px;
      width: 80%;
    }
  }

  // menu mobile ativo
  &.mobile.active {
    height: 100vh;
    visibility: visible;
    overflow-y: auto;
  }
`,kh=me.button`
  background: none;
  padding: 16px;
  margin-right: -16px;
  display: none;

  #hamburguer {
    display: block;
    background: var(--p1);
    height: 2px;
    transition: all ease 0.3s;

    // traço do meio
    &::before,
    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      transition: all ease 0.3s;
    }

    // traço de cima
    &::before {
      box-shadow: 0 -8px 0 0 var(--p1);
    }

    // traço de baixo
    &::after {
      box-shadow: 0 6px 0 0 var(--p1);
    }

    // menu ativo (formar o X)
    &.active {
      // traço do meio
      background: none;

      // traço de cima
      &::before {
        box-shadow: 0 -2px 0 0 var(--p1);
        transform: rotate(-135deg) translateY(1px);
      }

      // traço de baixo
      &::after {
        box-shadow: 0 2px 0 0 var(--p1);
        transform: rotate(135deg);
      }
    }
  }

  &.mobile {
    display: block;
  }
`,Bf=e=>h.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M26.3666 6.64728L23.3666 5.07295C20.7332 3.69099 19.4165 3 18 3C16.5836 3 15.2669 3.69099 12.6335 5.07295L9.63347 6.64728C6.97286 8.04351 5.40889 8.86425 4.43958 9.96198L18 16.7423L31.5605 9.96198C30.5912 8.86425 29.0273 8.04351 26.3666 6.64728Z",fill:"#E6DFFF"}),h.createElement("path",{d:"M32.6226 11.9465L19.125 18.6953V32.856C20.2018 32.5878 21.4272 31.9448 23.3665 30.927L26.3665 29.3528C29.5941 27.659 31.2078 26.8122 32.1039 25.2905C33 23.7687 33 21.875 33 18.0878V17.9123C33 15.0734 33 13.2984 32.6226 11.9465Z",fill:"#E6DFFF"}),h.createElement("path",{d:"M16.875 32.856V18.6953L3.37746 11.9465C3 13.2984 3 15.0734 3 17.9123V18.0878C3 21.875 3 23.7687 3.8961 25.2905C4.79218 26.8122 6.40594 27.659 9.63343 29.3528L12.6334 30.927C14.5729 31.9448 15.7981 32.5878 16.875 32.856Z",fill:"#E6DFFF"})),Ph=e=>{const[t,n]=F.useState(null);return F.useEffect(()=>{function r(){const{matches:i}=window.matchMedia(e);n(i)}return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[e]),t},Lh=()=>{const[e,t]=F.useState(!1),n=Ph("(max-width: 728px)"),r=F.useRef();return F.useEffect(()=>{e?(document.documentElement.style.overflow="hidden",window.scroll({top:0,left:0,behavior:"smooth"})):(document.documentElement.style.overflowY="auto",document.documentElement.style.overflowX="hidden")},[e]),F.useEffect(()=>{n||t(!1);const i=new IntersectionObserver(o=>{const[l]=o;l.isIntersecting||(t(!1),document.body.style.overflowY="auto")},{threshold:.5});return r.current&&i.observe(r.current),()=>i.disconnect()},[n]),g.jsx(Eh,{children:g.jsxs("div",{className:"container",children:[g.jsxs(wt,{to:"/",children:["magic",g.jsx(Bf,{}),"box"]}),g.jsxs(Sh,{ref:r,className:n?`mobile ${e?"active":""}`:"",children:[g.jsxs("ul",{children:[g.jsx("a",{href:"#planos",children:"Planos"}),g.jsx("a",{href:"#modalidades",children:"Modalidades"}),g.jsx("a",{href:"#infraestrutura",className:"mobile",children:"Infraestrutura"}),g.jsx("a",{href:"#time",className:"mobile",children:"Time"}),g.jsx("a",{href:"#algomais",className:"mobile",children:"Algo mais"}),g.jsx("a",{href:"#contato",className:"mobile",children:"Contato"})]}),g.jsx("button",{id:"btn",className:n?"mobile":"",children:"Matricule-se"})]}),g.jsx(kh,{className:n?"mobile":"",onClick:()=>t(!e),children:g.jsx("span",{id:"hamburguer",className:e?"active":""})})]})})},jh=me.section`
  .content {
    height: 100%;
    display: flex;
    position: relative;

    &::before {
      content: '';
      display: block;
      background-color: var(--p4);
      position: absolute;
      top: 64px;
      left: 830px; // largura da imagem
      width: 360px;
      height: 400px;
      border-radius: 0 3px 3px 0;
      animation: fromRight ease-in 0.3s forwards;
    }

    &::after {
      content: '';
      display: block;
      background-color: var(--p5);
      height: 600px; // altura da imagem
      flex: 1;
    }
  }

  .img-box {
    max-width: 830px;
    height: 600px;
    background: var(--p8);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: -1px; //corrigindo a imagem (ela é um print mal tirado)
  }

  .circles {
    position: absolute;
    top: 40px;
    left: 40px;
  }

  .title {
    position: absolute;
    top: 120px;
    left: 600px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0)
    );
    opacity: 0;
    animation: fade 0.3s ease-in forwards;
    animation-delay: 0.6s;
  }

  .title h1 {
    font-family: var(--title);
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
    color: var(--p1);
    max-width: 16ch;

    span {
      text-transform: uppercase;
      color: var(--p6);
    }
  }

  .title button {
    position: absolute;
    bottom: -64px;
    right: 0;
    transition: all ease 0.3s;

    &:hover,
    &:focus {
      filter: brightness(150%);
    }
  }

  #arrow-down {
    position: absolute;
    top: 500px;
    left: 1073px;
    animation: fadeInFadeOut 0.5s alternate infinite;
  }

  /* ---------- RESPONSIVO ---------- */
  @media (max-width: 1240px) {
    .content::before {
      left: 730px;
    }

    .img-box {
      max-width: 730px;
    }

    .title {
      left: 540px;

      button {
        right: 36px;
      }
    }

    #arrow-down {
      left: 900px;
    }
  }

  @media (max-width: 1100px) {
    .content::before {
      display: none;
    }

    .img-box {
      max-width: 830px;
    }

    .title {
      left: 600px;

      h1 {
        font-size: 2.5rem;
      }

      button {
        right: 36px;
      }
    }

    #arrow-down {
      top: 460px;
      left: 900px;
    }
  }

  @media (max-width: 940px) {
    .title {
      top: 80px;

      h1 {
        font-size: 2rem;
      }

      button {
        bottom: -56px;
        right: 36px;
      }
    }

    #arrow-down {
      display: none;
    }
  }

  @media (max-width: 830px) {
    .content {
      flex-direction: column;

      &:after {
        display: none;
      }
    }

    .title {
      position: initial;
      margin-top: -240px;
      height: 240px;
      display: flex;
      align-items: center;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5) 30%,
        rgba(0, 0, 0, 0)
      );

      h1 {
        font-size: 3rem;
        max-width: 30ch;
        padding: 0 40px;

        span {
          color: var(--p3);
        }
      }

      button {
        display: none;
      }
    }
  }

  @media (max-width: 620px) {
    .circles {
      display: none;
    }

    .title {
      margin-top: -300px;

      h1 {
        font-size: 2.5rem;

        span {
          color: var(--p1);
        }
      }
    }
  }

  @keyframes fadeInFadeOut {
    to {
      opacity: 1;
    }
    from {
      opacity: 0.5;
      transform: translateY(-12px);
    }
  }
`,Nh="/magic-box/assets/img-intro-10ef2118.png",zh="/magic-box/assets/arrow-button-cf6a9382.svg",_h=me.button`
  font-family: var(--title);
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--p1);
  padding: 12px 48px 12px 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all ease 0.3s;

  &::after {
    content: '';
    display: inline;
    width: 16px;
    height: 16px;
    background: url(${zh});
    transform: scale(0.6);
  }
`;function ys({text:e,color:t}){return g.jsx(_h,{style:{background:t},children:e})}const Rh=e=>h.createElement("svg",{width:200,height:225,viewBox:"0 0 200 225",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M12.5001 97.9166C18.253 97.9166 22.9167 93.2529 22.9167 87.5C22.9167 84.9047 21.9677 82.5311 20.3976 80.7073L5.7074 95.3975C7.53117 96.9676 9.90477 97.9166 12.5001 97.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 77.0833C6.74707 77.0833 2.08337 81.747 2.08337 87.5C2.08337 90.0953 3.03248 92.4688 4.60253 94.2926L19.2926 79.6025C17.4689 78.0324 15.0954 77.0833 12.5 77.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 97.9166C118.253 97.9166 122.917 93.2529 122.917 87.5C122.917 84.9047 121.968 82.5311 120.398 80.7073L105.707 95.3975C107.531 96.9676 109.905 97.9166 112.5 97.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 77.0833C106.747 77.0833 102.083 81.747 102.083 87.5C102.083 90.0953 103.032 92.4688 104.603 94.2926L119.293 79.6025C117.469 78.0324 115.095 77.0833 112.5 77.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 197.917C18.253 197.917 22.9167 193.253 22.9167 187.5C22.9167 184.905 21.9677 182.531 20.3976 180.707L5.7074 195.397C7.53117 196.968 9.90477 197.917 12.5001 197.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 177.083C6.74707 177.083 2.08337 181.747 2.08337 187.5C2.08337 190.095 3.03248 192.469 4.60253 194.293L19.2926 179.602C17.4689 178.032 15.0954 177.083 12.5 177.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 222.917C18.253 222.917 22.9167 218.253 22.9167 212.5C22.9167 209.905 21.9677 207.531 20.3976 205.707L5.7074 220.397C7.53117 221.968 9.90477 222.917 12.5001 222.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 202.083C6.74707 202.083 2.08337 206.747 2.08337 212.5C2.08337 215.095 3.03248 217.469 4.60253 219.293L19.2926 204.602C17.4689 203.032 15.0954 202.083 12.5 202.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5001 147.917C93.253 147.917 97.9167 143.253 97.9167 137.5C97.9167 134.905 96.9677 132.531 95.3976 130.707L80.7074 145.397C82.5312 146.968 84.9048 147.917 87.5001 147.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5 127.083C81.7471 127.083 77.0834 131.747 77.0834 137.5C77.0834 140.095 78.0325 142.469 79.6025 144.293L94.2926 129.602C92.4689 128.032 90.0954 127.083 87.5 127.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 197.917C68.253 197.917 72.9167 193.253 72.9167 187.5C72.9167 184.905 71.9677 182.531 70.3976 180.707L55.7074 195.397C57.5312 196.968 59.9048 197.917 62.5001 197.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 177.083C56.7471 177.083 52.0834 181.747 52.0834 187.5C52.0834 190.095 53.0325 192.469 54.6025 194.293L69.2926 179.602C67.4689 178.032 65.0954 177.083 62.5 177.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 222.917C68.253 222.917 72.9167 218.253 72.9167 212.5C72.9167 209.905 71.9677 207.531 70.3976 205.707L55.7074 220.397C57.5312 221.968 59.9048 222.917 62.5001 222.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 202.083C56.7471 202.083 52.0834 206.747 52.0834 212.5C52.0834 215.095 53.0325 217.469 54.6025 219.293L69.2926 204.602C67.4689 203.032 65.0954 202.083 62.5 202.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 147.917C143.253 147.917 147.917 143.253 147.917 137.5C147.917 134.905 146.968 132.531 145.398 130.707L130.707 145.397C132.531 146.968 134.905 147.917 137.5 147.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 127.083C131.747 127.083 127.083 131.747 127.083 137.5C127.083 140.095 128.032 142.469 129.603 144.293L144.293 129.602C142.469 128.032 140.095 127.083 137.5 127.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 197.917C43.253 197.917 47.9167 193.253 47.9167 187.5C47.9167 184.905 46.9677 182.531 45.3976 180.707L30.7074 195.397C32.5312 196.968 34.9048 197.917 37.5001 197.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 177.083C31.7471 177.083 27.0834 181.747 27.0834 187.5C27.0834 190.095 28.0325 192.469 29.6025 194.293L44.2926 179.602C42.4689 178.032 40.0954 177.083 37.5 177.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 222.917C43.253 222.917 47.9167 218.253 47.9167 212.5C47.9167 209.905 46.9677 207.531 45.3976 205.707L30.7074 220.397C32.5312 221.968 34.9048 222.917 37.5001 222.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 202.083C31.7471 202.083 27.0834 206.747 27.0834 212.5C27.0834 215.095 28.0325 217.469 29.6025 219.293L44.2926 204.602C42.4689 203.032 40.0954 202.083 37.5 202.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 147.917C118.253 147.917 122.917 143.253 122.917 137.5C122.917 134.905 121.968 132.531 120.398 130.707L105.707 145.397C107.531 146.968 109.905 147.917 112.5 147.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 127.083C106.747 127.083 102.083 131.747 102.083 137.5C102.083 140.095 103.032 142.469 104.603 144.293L119.293 129.602C117.469 128.032 115.095 127.083 112.5 127.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 97.9166C68.253 97.9166 72.9167 93.2529 72.9167 87.5C72.9167 84.9047 71.9677 82.5311 70.3976 80.7073L55.7074 95.3975C57.5312 96.9676 59.9048 97.9166 62.5001 97.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 77.0833C56.7471 77.0833 52.0834 81.747 52.0834 87.5C52.0834 90.0953 53.0325 92.4688 54.6025 94.2926L69.2926 79.6025C67.4689 78.0324 65.0954 77.0833 62.5 77.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 72.9166C18.253 72.9166 22.9167 68.2529 22.9167 62.5C22.9167 59.9047 21.9677 57.5311 20.3976 55.7073L5.7074 70.3975C7.53117 71.9676 9.90477 72.9166 12.5001 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 52.0833C6.74707 52.0833 2.08337 56.747 2.08337 62.5C2.08337 65.0953 3.03248 67.4688 4.60253 69.2926L19.2926 54.6025C17.4689 53.0324 15.0954 52.0833 12.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 72.9166C118.253 72.9166 122.917 68.2529 122.917 62.5C122.917 59.9047 121.968 57.5311 120.398 55.7073L105.707 70.3975C107.531 71.9676 109.905 72.9166 112.5 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 52.0833C106.747 52.0833 102.083 56.747 102.083 62.5C102.083 65.0953 103.032 67.4688 104.603 69.2926L119.293 54.6025C117.469 53.0324 115.095 52.0833 112.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 172.917C18.253 172.917 22.9167 168.253 22.9167 162.5C22.9167 159.905 21.9677 157.531 20.3976 155.707L5.7074 170.397C7.53117 171.968 9.90477 172.917 12.5001 172.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 152.083C6.74707 152.083 2.08337 156.747 2.08337 162.5C2.08337 165.095 3.03248 167.469 4.60253 169.293L19.2926 154.602C17.4689 153.032 15.0954 152.083 12.5 152.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 172.917C68.253 172.917 72.9167 168.253 72.9167 162.5C72.9167 159.905 71.9677 157.531 70.3976 155.707L55.7074 170.397C57.5312 171.968 59.9048 172.917 62.5001 172.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 152.083C56.7471 152.083 52.0834 156.747 52.0834 162.5C52.0834 165.095 53.0325 167.469 54.6025 169.293L69.2926 154.602C67.4689 153.032 65.0954 152.083 62.5 152.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 72.9166C68.253 72.9166 72.9167 68.2529 72.9167 62.5C72.9167 59.9047 71.9677 57.5311 70.3976 55.7073L55.7074 70.3975C57.5312 71.9676 59.9048 72.9166 62.5001 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 52.0833C56.7471 52.0833 52.0834 56.747 52.0834 62.5C52.0834 65.0953 53.0325 67.4688 54.6025 69.2926L69.2926 54.6025C67.4689 53.0324 65.0954 52.0833 62.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M162.5 72.9166C168.253 72.9166 172.917 68.2529 172.917 62.5C172.917 59.9047 171.968 57.5311 170.398 55.7073L155.707 70.3975C157.531 71.9676 159.905 72.9166 162.5 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M162.5 52.0833C156.747 52.0833 152.083 56.747 152.083 62.5C152.083 65.0953 153.032 67.4688 154.603 69.2926L169.293 54.6025C167.469 53.0324 165.095 52.0833 162.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 22.9166C18.253 22.9166 22.9167 18.2529 22.9167 12.5C22.9167 9.9047 21.9677 7.5311 20.3976 5.70734L5.7074 20.3975C7.53117 21.9676 9.90477 22.9166 12.5001 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 2.08331C6.74707 2.08331 2.08337 6.74701 2.08337 12.5C2.08337 15.0953 3.03248 17.4688 4.60253 19.2926L19.2926 4.60247C17.4689 3.03242 15.0954 2.08331 12.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 22.9166C118.253 22.9166 122.917 18.2529 122.917 12.5C122.917 9.9047 121.968 7.5311 120.398 5.70734L105.707 20.3975C107.531 21.9676 109.905 22.9166 112.5 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 2.08331C106.747 2.08331 102.083 6.74701 102.083 12.5C102.083 15.0953 103.032 17.4688 104.603 19.2926L119.293 4.60247C117.469 3.03242 115.095 2.08331 112.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 122.917C18.253 122.917 22.9167 118.253 22.9167 112.5C22.9167 109.905 21.9677 107.531 20.3976 105.707L5.7074 120.397C7.53117 121.968 9.90477 122.917 12.5001 122.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 102.083C6.74707 102.083 2.08337 106.747 2.08337 112.5C2.08337 115.095 3.03248 117.469 4.60253 119.293L19.2926 104.602C17.4689 103.032 15.0954 102.083 12.5 102.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 122.917C68.253 122.917 72.9167 118.253 72.9167 112.5C72.9167 109.905 71.9677 107.531 70.3976 105.707L55.7074 120.397C57.5312 121.968 59.9048 122.917 62.5001 122.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 102.083C56.7471 102.083 52.0834 106.747 52.0834 112.5C52.0834 115.095 53.0325 117.469 54.6025 119.293L69.2926 104.602C67.4689 103.032 65.0954 102.083 62.5 102.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 122.917C118.253 122.917 122.917 118.253 122.917 112.5C122.917 109.905 121.968 107.531 120.398 105.707L105.707 120.397C107.531 121.968 109.905 122.917 112.5 122.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 102.083C106.747 102.083 102.083 106.747 102.083 112.5C102.083 115.095 103.032 117.469 104.603 119.293L119.293 104.602C117.469 103.032 115.095 102.083 112.5 102.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 22.9166C68.253 22.9166 72.9167 18.2529 72.9167 12.5C72.9167 9.9047 71.9677 7.5311 70.3976 5.70734L55.7074 20.3975C57.5312 21.9676 59.9048 22.9166 62.5001 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 2.08331C56.7471 2.08331 52.0834 6.74701 52.0834 12.5C52.0834 15.0953 53.0325 17.4688 54.6025 19.2926L69.2926 4.60247C67.4689 3.03242 65.0954 2.08331 62.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M162.5 22.9166C168.253 22.9166 172.917 18.2529 172.917 12.5C172.917 9.9047 171.968 7.5311 170.398 5.70734L155.707 20.3975C157.531 21.9676 159.905 22.9166 162.5 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M162.5 2.08331C156.747 2.08331 152.083 6.74701 152.083 12.5C152.083 15.0953 153.032 17.4688 154.603 19.2926L169.293 4.60247C167.469 3.03242 165.095 2.08331 162.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 47.9166C18.253 47.9166 22.9167 43.2529 22.9167 37.5C22.9167 34.9047 21.9677 32.5311 20.3976 30.7073L5.7074 45.3975C7.53117 46.9676 9.90477 47.9166 12.5001 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 27.0833C6.74707 27.0833 2.08337 31.747 2.08337 37.5C2.08337 40.0953 3.03248 42.4688 4.60253 44.2926L19.2926 29.6025C17.4689 28.0324 15.0954 27.0833 12.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 47.9166C118.253 47.9166 122.917 43.2529 122.917 37.5C122.917 34.9047 121.968 32.5311 120.398 30.7073L105.707 45.3975C107.531 46.9676 109.905 47.9166 112.5 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M112.5 27.0833C106.747 27.0833 102.083 31.747 102.083 37.5C102.083 40.0953 103.032 42.4688 104.603 44.2926L119.293 29.6025C117.469 28.0324 115.095 27.0833 112.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5001 147.917C18.253 147.917 22.9167 143.253 22.9167 137.5C22.9167 134.905 21.9677 132.531 20.3976 130.707L5.7074 145.397C7.53117 146.968 9.90477 147.917 12.5001 147.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M12.5 127.083C6.74707 127.083 2.08337 131.747 2.08337 137.5C2.08337 140.095 3.03248 142.469 4.60253 144.293L19.2926 129.602C17.4689 128.032 15.0954 127.083 12.5 127.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 147.917C68.253 147.917 72.9167 143.253 72.9167 137.5C72.9167 134.905 71.9677 132.531 70.3976 130.707L55.7074 145.397C57.5312 146.968 59.9048 147.917 62.5001 147.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 127.083C56.7471 127.083 52.0834 131.747 52.0834 137.5C52.0834 140.095 53.0325 142.469 54.6025 144.293L69.2926 129.602C67.4689 128.032 65.0954 127.083 62.5 127.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5001 47.9166C68.253 47.9166 72.9167 43.2529 72.9167 37.5C72.9167 34.9047 71.9677 32.5311 70.3976 30.7073L55.7074 45.3975C57.5312 46.9676 59.9048 47.9166 62.5001 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M62.5 27.0833C56.7471 27.0833 52.0834 31.747 52.0834 37.5C52.0834 40.0953 53.0325 42.4688 54.6025 44.2926L69.2926 29.6025C67.4689 28.0324 65.0954 27.0833 62.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M162.5 47.9166C168.253 47.9166 172.917 43.2529 172.917 37.5C172.917 34.9047 171.968 32.5311 170.398 30.7073L155.707 45.3975C157.531 46.9676 159.905 47.9166 162.5 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M162.5 27.0833C156.747 27.0833 152.083 31.747 152.083 37.5C152.083 40.0953 153.032 42.4688 154.603 44.2926L169.293 29.6025C167.469 28.0324 165.095 27.0833 162.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 22.9166C43.253 22.9166 47.9167 18.2529 47.9167 12.5C47.9167 9.9047 46.9677 7.5311 45.3976 5.70734L30.7074 20.3975C32.5312 21.9676 34.9048 22.9166 37.5001 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 2.08331C31.7471 2.08331 27.0834 6.74701 27.0834 12.5C27.0834 15.0953 28.0325 17.4688 29.6025 19.2926L44.2926 4.60247C42.4689 3.03242 40.0954 2.08331 37.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 22.9166C143.253 22.9166 147.917 18.2529 147.917 12.5C147.917 9.9047 146.968 7.5311 145.398 5.70734L130.707 20.3975C132.531 21.9676 134.905 22.9166 137.5 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 2.08331C131.747 2.08331 127.083 6.74701 127.083 12.5C127.083 15.0953 128.032 17.4688 129.603 19.2926L144.293 4.60247C142.469 3.03242 140.095 2.08331 137.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 122.917C43.253 122.917 47.9167 118.253 47.9167 112.5C47.9167 109.905 46.9677 107.531 45.3976 105.707L30.7074 120.397C32.5312 121.968 34.9048 122.917 37.5001 122.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 102.083C31.7471 102.083 27.0834 106.747 27.0834 112.5C27.0834 115.095 28.0325 117.469 29.6025 119.293L44.2926 104.602C42.4689 103.032 40.0954 102.083 37.5 102.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5001 122.917C93.253 122.917 97.9167 118.253 97.9167 112.5C97.9167 109.905 96.9677 107.531 95.3976 105.707L80.7074 120.397C82.5312 121.968 84.9048 122.917 87.5001 122.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5 102.083C81.7471 102.083 77.0834 106.747 77.0834 112.5C77.0834 115.095 78.0325 117.469 79.6025 119.293L94.2926 104.602C92.4689 103.032 90.0954 102.083 87.5 102.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 122.917C143.253 122.917 147.917 118.253 147.917 112.5C147.917 109.905 146.968 107.531 145.398 105.707L130.707 120.397C132.531 121.968 134.905 122.917 137.5 122.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 102.083C131.747 102.083 127.083 106.747 127.083 112.5C127.083 115.095 128.032 117.469 129.603 119.293L144.293 104.602C142.469 103.032 140.095 102.083 137.5 102.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5001 22.9166C93.253 22.9166 97.9167 18.2529 97.9167 12.5C97.9167 9.9047 96.9677 7.5311 95.3976 5.70734L80.7074 20.3975C82.5312 21.9676 84.9048 22.9166 87.5001 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5 2.08331C81.7471 2.08331 77.0834 6.74701 77.0834 12.5C77.0834 15.0953 78.0325 17.4688 79.6025 19.2926L94.2926 4.60247C92.4689 3.03242 90.0954 2.08331 87.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M187.5 22.9166C193.253 22.9166 197.917 18.2529 197.917 12.5C197.917 9.9047 196.968 7.5311 195.398 5.70734L180.707 20.3975C182.531 21.9676 184.905 22.9166 187.5 22.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M187.5 2.08331C181.747 2.08331 177.083 6.74701 177.083 12.5C177.083 15.0953 178.032 17.4688 179.603 19.2926L194.293 4.60247C192.469 3.03242 190.095 2.08331 187.5 2.08331Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 72.9166C43.253 72.9166 47.9167 68.2529 47.9167 62.5C47.9167 59.9047 46.9677 57.5311 45.3976 55.7073L30.7074 70.3975C32.5312 71.9676 34.9048 72.9166 37.5001 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 52.0833C31.7471 52.0833 27.0834 56.747 27.0834 62.5C27.0834 65.0953 28.0325 67.4688 29.6025 69.2926L44.2926 54.6025C42.4689 53.0324 40.0954 52.0833 37.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 72.9166C143.253 72.9166 147.917 68.2529 147.917 62.5C147.917 59.9047 146.968 57.5311 145.398 55.7073L130.707 70.3975C132.531 71.9676 134.905 72.9166 137.5 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 52.0833C131.747 52.0833 127.083 56.747 127.083 62.5C127.083 65.0953 128.032 67.4688 129.603 69.2926L144.293 54.6025C142.469 53.0324 140.095 52.0833 137.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 172.917C43.253 172.917 47.9167 168.253 47.9167 162.5C47.9167 159.905 46.9677 157.531 45.3976 155.707L30.7074 170.397C32.5312 171.968 34.9048 172.917 37.5001 172.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 152.083C31.7471 152.083 27.0834 156.747 27.0834 162.5C27.0834 165.095 28.0325 167.469 29.6025 169.293L44.2926 154.602C42.4689 153.032 40.0954 152.083 37.5 152.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5001 72.9166C93.253 72.9166 97.9167 68.2529 97.9167 62.5C97.9167 59.9047 96.9677 57.5311 95.3976 55.7073L80.7074 70.3975C82.5312 71.9676 84.9048 72.9166 87.5001 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5 52.0833C81.7471 52.0833 77.0834 56.747 77.0834 62.5C77.0834 65.0953 78.0325 67.4688 79.6025 69.2926L94.2926 54.6025C92.4689 53.0324 90.0954 52.0833 87.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M187.5 72.9166C193.253 72.9166 197.917 68.2529 197.917 62.5C197.917 59.9047 196.968 57.5311 195.398 55.7073L180.707 70.3975C182.531 71.9676 184.905 72.9166 187.5 72.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M187.5 52.0833C181.747 52.0833 177.083 56.747 177.083 62.5C177.083 65.0953 178.032 67.4688 179.603 69.2926L194.293 54.6025C192.469 53.0324 190.095 52.0833 187.5 52.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 47.9166C43.253 47.9166 47.9167 43.2529 47.9167 37.5C47.9167 34.9047 46.9677 32.5311 45.3976 30.7073L30.7074 45.3975C32.5312 46.9676 34.9048 47.9166 37.5001 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 27.0833C31.7471 27.0833 27.0834 31.747 27.0834 37.5C27.0834 40.0953 28.0325 42.4688 29.6025 44.2926L44.2926 29.6025C42.4689 28.0324 40.0954 27.0833 37.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 47.9166C143.253 47.9166 147.917 43.2529 147.917 37.5C147.917 34.9047 146.968 32.5311 145.398 30.7073L130.707 45.3975C132.531 46.9676 134.905 47.9166 137.5 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 27.0833C131.747 27.0833 127.083 31.747 127.083 37.5C127.083 40.0953 128.032 42.4688 129.603 44.2926L144.293 29.6025C142.469 28.0324 140.095 27.0833 137.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 147.917C43.253 147.917 47.9167 143.253 47.9167 137.5C47.9167 134.905 46.9677 132.531 45.3976 130.707L30.7074 145.397C32.5312 146.968 34.9048 147.917 37.5001 147.917Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 127.083C31.7471 127.083 27.0834 131.747 27.0834 137.5C27.0834 140.095 28.0325 142.469 29.6025 144.293L44.2926 129.602C42.4689 128.032 40.0954 127.083 37.5 127.083Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5001 47.9166C93.253 47.9166 97.9167 43.2529 97.9167 37.5C97.9167 34.9047 96.9677 32.5311 95.3976 30.7073L80.7074 45.3975C82.5312 46.9676 84.9048 47.9166 87.5001 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5 27.0833C81.7471 27.0833 77.0834 31.747 77.0834 37.5C77.0834 40.0953 78.0325 42.4688 79.6025 44.2926L94.2926 29.6025C92.4689 28.0324 90.0954 27.0833 87.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M187.5 47.9166C193.253 47.9166 197.917 43.2529 197.917 37.5C197.917 34.9047 196.968 32.5311 195.398 30.7073L180.707 45.3975C182.531 46.9676 184.905 47.9166 187.5 47.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M187.5 27.0833C181.747 27.0833 177.083 31.747 177.083 37.5C177.083 40.0953 178.032 42.4688 179.603 44.2926L194.293 29.6025C192.469 28.0324 190.095 27.0833 187.5 27.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5001 97.9166C43.253 97.9166 47.9167 93.2529 47.9167 87.5C47.9167 84.9047 46.9677 82.5311 45.3976 80.7073L30.7074 95.3975C32.5312 96.9676 34.9048 97.9166 37.5001 97.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M37.5 77.0833C31.7471 77.0833 27.0834 81.747 27.0834 87.5C27.0834 90.0953 28.0325 92.4688 29.6025 94.2926L44.2926 79.6025C42.4689 78.0324 40.0954 77.0833 37.5 77.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 97.9166C143.253 97.9166 147.917 93.2529 147.917 87.5C147.917 84.9047 146.968 82.5311 145.398 80.7073L130.707 95.3975C132.531 96.9676 134.905 97.9166 137.5 97.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M137.5 77.0833C131.747 77.0833 127.083 81.747 127.083 87.5C127.083 90.0953 128.032 92.4688 129.603 94.2926L144.293 79.6025C142.469 78.0324 140.095 77.0833 137.5 77.0833Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5001 97.9166C93.253 97.9166 97.9167 93.2529 97.9167 87.5C97.9167 84.9047 96.9677 82.5311 95.3976 80.7073L80.7074 95.3975C82.5312 96.9676 84.9048 97.9166 87.5001 97.9166Z",fill:"#735AE3"}),h.createElement("path",{d:"M87.5 77.0833C81.7471 77.0833 77.0834 81.747 77.0834 87.5C77.0834 90.0953 78.0325 92.4688 79.6025 94.2926L94.2926 79.6025C92.4689 78.0324 90.0954 77.0833 87.5 77.0833Z",fill:"#735AE3"})),Mh=e=>h.createElement("svg",{width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M26.625 8.5625C26.625 7.69956 25.9254 7 25.0625 7C24.1996 7 23.5 7.69956 23.5 8.5625V27.8333H12.5625C11.9304 27.8333 11.3608 28.214 11.119 28.7979C10.8771 29.3817 11.0106 30.0537 11.4575 30.5006L23.9575 43.0006C24.2506 43.2937 24.6481 43.4583 25.0625 43.4583C25.4769 43.4583 25.8744 43.2937 26.1673 43.0006L38.6673 30.5006C39.1142 30.0537 39.2479 29.3817 39.006 28.7979C38.7642 28.214 38.1944 27.8333 37.5625 27.8333H26.625V8.5625Z",fill:"#07002F"}));function Th(){return g.jsx(jh,{children:g.jsxs("div",{className:"content",children:[g.jsx(Rh,{className:"circles"}),g.jsx("div",{className:"img-box",children:g.jsx("img",{src:Nh,alt:"Mulher agaixada com as mãos apoiadas em anilhas de uma barra"})}),g.jsxs("div",{className:"title",children:[g.jsxs("h1",{children:["Espaço sagrado onde se molda o shape dos ",g.jsx("span",{children:"deuses"})]}),g.jsx("a",{href:"#planos",children:g.jsx(ys,{text:"Ver planos",color:"linear-gradient(to right, #09002f, #24175e)"})})]}),g.jsx(Mh,{id:"arrow-down"})]})})}const Ah=me.section`
  background: var(--p8);
  padding-bottom: 160px;

  h1 {
    font-family: var(--title);
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0 80px 0;

    transition: 0.3s;
    transform: translateX(200px);
    opacity: 0;

    &.show {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h1 #text-1 {
    color: var(--p6);
    display: flex;
    align-items: center;
    gap: 16px;

    &::after {
      content: '';
      display: inline-block;
      width: 240px;
      height: 2px;
      background: var(--p7);
    }
  }

  h1 #text-2 {
    color: var(--p1);
    display: flex;
    align-items: center;
    gap: 16px;

    &::before {
      content: '';
      display: inline-block;
      width: 360px;
      height: 2px;
      background: var(--p7);
    }
  }

  .grid {
    display: flex;
    aspect-ratio: 16/8;
  }

  .grid .img-box {
    width: 33.33%;
    height: 100%;
    position: relative;

    transition: 0.3s;
    opacity: 0;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.3;
      transition: 0.3s;
    }

    &:hover {
      width: 45%;

      &::before {
        opacity: 0.25;
      }

      p {
        opacity: 1;
        transform: translateY(0);
        pointer-events: initial;
      }
    }
  }

  .grid .img-box img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .grid #img1::before {
    background: #5a78e3;
  }

  .grid #img2::before {
    background: #d05ae3;
  }

  .grid #img3::before {
    background: #711c99;
  }

  .grid .img-box h2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: max-content;
    margin: 0 0 24px 40px;
    padding: 8px 40px 8px 16px;
    font-family: var(--title);
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
    text-transform: lowercase;
  }

  .grid #img1 h2 {
    color: var(--p2);
    background: rgba(7, 0, 47, 0.3);
  }
  .grid #img2 h2 {
    color: var(--p1);
    background: rgba(79, 59, 195, 0.3);
  }
  .grid #img3 h2 {
    color: var(--p8);
    background: rgba(163, 142, 255, 0.3);
  }

  .grid .img-box p {
    position: absolute;
    bottom: 200px;
    right: 64px;
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
    padding: 8px 4px 8px 12px;
    width: 22ch;
    color: var(--p2);
    background: rgba(7, 0, 47, 0.3);
    transition: 0.6s;
    opacity: 0;
    transform: translateY(-80px);
    pointer-events: none;
  }

   #img1.show {
    opacity: 1;
  }

  #img2.show {
    opacity: 1;
    transition-delay: 0.2s;
  }
    
  #img3.show {
    opacity: 1;
    transition-delay: 0.4s;
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 960px) {
    h1 {
      font-size: 2.5rem;
    }

    h1 #text-1::after {
      width: 180px;
    }

    h1 #text-2::before {
      width: 200px;
    }

    .grid .img-box h2 {
      font-size: 1.5rem;
      margin: 0 0px 24px 24px;
    }

    .grid .img-box p {
      bottom: 120px;
      right: 32px;
      font-size: 1rem;
      line-height: 1.5rem;
      width: 23ch;
    }
  }

  @media (max-width: 620px) {
    & {
      padding-bottom: 80px;
    }

    h1 {
      font-size: 2.25rem;
      padding-top: 160px;
    }

    h1 #text-1::after {
      width: 80px;
    }

    h1 #text-2::before {
      width: 120px;
    }

    .grid {
      flex-direction: column;
      aspect-ratio: initial;

      #img2.show {
        transition-delay: 0s;
      }

      #img3.show {
        transition-delay: 0s;
      }
    }

    .grid .img-box {
      width: auto;

      &:hover {
        width: auto;

        &::before {
          opacity: 0.3;
        }
      }
    }

    .grid .img-box p {
      bottom: 160px;
      right: 60px;
      font-size: 1.5rem;
      line-height: 2.25rem;
      width: 22ch;
      opacity: 1;
      transform: translateY(0);
      pointer-events: initial;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }

    h1 #text-1::after,
    h1 #text-2::before {
      display: none;
    }
  }
`,Ih="/magic-box/assets/img-musculacao-9ee9cc7b.jpg",Oh="/magic-box/assets/img-funcional-2107f010.jpg",$h="/magic-box/assets/img-pilates-00d2685e.jpg",Fh=[{id:1,url:Ih,desc:"Homem sem camisa fazendo tríceps corda",name:"Musculação",text:"Box com maquinário diverso e de altissíma qualidade escolhido a dedo para aumentar a perfomance do seu treino "},{id:2,url:Oh,desc:"Homem de frente para uma barra de levantamento de peso",name:"Funcional",text:"Box reservado com amplo espaço para fazer aquele treinamento de força e resistência sem preocupação"},{id:3,url:$h,desc:"Mulher fazendo uma posição de pilates",name:"Pilates",text:"Box ambientado num estilo que te forneçe tranquilidade na hora de fazer a manutenção do seu corpo"}];function Dh(){return g.jsxs(Ah,{id:"modalidades",children:[g.jsxs("h1",{className:"anime",children:[g.jsx("span",{id:"text-1",children:"Conheça nossas"})," ",g.jsx("span",{id:"text-2",children:"modalidades"})]}),g.jsx("ul",{className:"grid",children:Fh.map(e=>g.jsxs("li",{id:`img${e.id}`,className:"img-box anime",children:[g.jsx("img",{src:e.url,alt:e.desc}),g.jsx("h2",{children:e.name}),g.jsx("p",{children:e.text})]},e.id))})]})}const bh=me.section`
  height: 1000px;
  background: linear-gradient(to bottom, #d6cdff 20%, #0a0034);
  display: flex;
  justify-content: center;
  position: relative;

  .fold {
    position: absolute;
    top: 0;
    /* right: 0; */
    /* animation: fold ease-in 0.3s forwards; */

    transition: 0.3s;
    right: 30%;

    &.show {
      right: 0;
    }
  }

  .content {
    margin: 120px 0 0 -430px;
  }

  .content h1 {
    font-family: var(--title);
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    margin-bottom: 120px;

    transition: 0.3s;
    opacity: 0;

    &.show {
      opacity: 1;
    }

    #text-1 {
      font-size: 2rem;
      color: var(--p8);
    }
    #text-2 {
      font-size: 2rem;
      color: var(--p3);
    }

    #text-3 {
      font-size: 3rem;
      color: var(--p3);
    }

    strong {
      font-size: 4rem;
      color: var(--p8);
    }
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1300px) {
    & {
      height: 880px;
    }

    .content {
      margin-left: -460px;
    }
  }

  @media (max-width: 1080px) {
    & {
      height: 1000px;
    }

    .fold {
      width: 440px;
      height: 68px;
    }

    .content {
      margin-left: 0;
    }
  }

  @media (max-width: 880px) {
    .content h1 {
      padding-left: 60px;

      #text-1,
      #text-2 {
        font-size: 1.5rem;
      }

      #text-3 {
        font-size: 2.5rem;
      }

      strong {
        font-size: 3.5rem;
      }
    }
  }

  @media (max-width: 650px) {
    & {
      height: 770px;
    }

    .content {
      margin-top: 60px;
    }

    .content h1 {
      margin-bottom: 80px;

      #text-1,
      #text-2 {
        font-size: 1rem;
      }

      #text-3 {
        font-size: 2rem;
      }

      strong {
        font-size: 2.5rem;
      }
    }
  }

  @media (max-width: 520px) {
    & {
      height: 660px;
    }

    .fold {
      width: 220px;
      height: 34px;
    }

    .content h1 {
      padding-left: 32px;

      #text-3 {
        font-size: 1.5rem;
      }

      strong {
        font-size: 2rem;
      }
    }
  }

  @keyframes fold {
    from {
      right: 30%;
    }
    to {
      right: 0;
    }
  }
`,Vf=e=>h.createElement("svg",{width:880,height:136,viewBox:"0 0 880 136",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M559.123 136L0 0.000239088L880 0L559.123 136Z",fill:"#07002F"})),ma="/magic-box/assets/arrow-circle-light-a1ff51cd.svg",Uh=me.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  transition: .3s;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  .gallery.right {
    display: grid;
    align-items: center;
    max-width: 760px;

    // Todas imagens
    & :nth-child(n) {
      grid-area: 1/1;
      width: 100%;
      border-radius: 3px;
    }

    /* Imagem 1 */
    & :nth-child(1) {
      filter: drop-shadow(-1px 1px 10px rgba(0, 0, 0, 0.3));
      animation: fromLastToOne ease 0.3s forwards;
      z-index: 3;
    }

    /* Imagem 2 */
    & :nth-child(2) {
      filter: grayscale(50%) blur(2px);
      animation: fromOneToTwo ease 0.3s forwards;
      z-index: 2;
    }

    /* Imagem 3 */
    & :nth-child(3) {
      filter: grayscale(50%) blur(2px);
      animation: fromTwoToThree ease 0.3s forwards;
      z-index: 1;
    }

    /* Da imagem 4 adiante */
    & :nth-child(n + 4) {
      animation: animeRestRight ease 10s forwards;
    }
  }

  /* +-+-+-+-+-+-+-+ ANIMAÇÃO RIGHT +-+-+-+-+-+-+-+ */
  @keyframes fromLastToOne {
    from {
      transform: translateX(0) scale(0);
    }
    50% {
      transform: translateX(-340px) scale(0.8);
    }
    to {
      transform: translateX(0) scale(1);
    }
  }

  @keyframes fromOneToTwo {
    from {
      transform: translateX(0) scale(1);
    }
    to {
      transform: translateX(340px) scale(0.8);
    }
  }

  @keyframes fromTwoToThree {
    from {
      transform: translateX(340px) scale(0.8);
    }
    to {
      transform: translateX(580px) scale(0.6);
    }
  }

  @keyframes animeRestRight {
    from {
      transform: translateX(0) scale(0);
    }
    to {
      transform: scale(0);
    }
  }

  /* +-+-+-+-+-+-+-+ MOVE LEFT +-+-+-+-+-+-+-+ */
  .gallery.left {
    display: grid;
    align-items: center;
    max-width: 760px;

    // Todas imagens
    & :nth-child(n) {
      grid-area: 1/1;
      width: 100%;
      border-radius: 3px;
    }

    /* Imagem 1 */
    & :nth-child(1) {
      filter: drop-shadow(-1px 1px 10px rgba(0, 0, 0, 0.3));
      animation: fromTwoToOne ease 0.3s forwards;
      z-index: 3;
    }

    /* Imagem 2 */
    & :nth-child(2) {
      filter: grayscale(50%) blur(2px);
      animation: fromThreeToTwo ease 0.3s forwards;
      z-index: 2;
    }

    /* Imagem 3 */
    & :nth-child(3) {
      filter: grayscale(50%) blur(2px);
      animation: fromRestToThree ease 0.4s forwards;
      z-index: 1;
    }

    /* Da imagem 4 adiante */
    & :nth-child(n + 4) {
      animation: animeRestLeft ease 0.3s forwards;
    }
  }

  /* +-+-+-+-+-+-+-+ ANIMAÇÃO LEFT +-+-+-+-+-+-+-+ */
  @keyframes fromTwoToOne {
    from {
      transform: translateX(340px) scale(0.8);
    }
    to {
      transform: translateX(0) scale(1);
    }
  }

  @keyframes fromThreeToTwo {
    from {
      transform: translateX(580px) scale(0.6);
    }
    to {
      transform: translateX(340px) scale(0.8);
    }
  }

  @keyframes fromRestToThree {
    from {
      transform: translateX(340px) scale(0);
    }
    to {
      transform: translateX(580px) scale(0.6);
    }
  }
  @keyframes animeRestLeft {
    from {
      transform: translateX(0) scale(1);
    }
    50% {
      transform: translateX(-340px) scale(0.1);
    }
    to {
      transform: translateX(580px) scale(0);
    }
  }

  /* +-+-+-+-+-+-+-+ BUTTONS +-+-+-+-+-+-+-+ */
  .button-group {
    display: flex;
    gap: 4px;
    position: absolute;
    bottom: -36px;
    right: -200px;

    transition: 0.3s;
    transform: scale(0);

    &.show {
      transform: scale(1);
    }
  }

  .button-group button {
    width: 50px;
    height: 50px;
    background: url(${ma});
    cursor: pointer;

    &#btn-right {
      transform: rotate(180deg);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  /* +-+-+-+-+-+-+-+ RESPONSIVE +-+-+-+-+-+-+-+ */
  @media (max-width: 1300px) {
    .gallery.left,
    .gallery.right {
      max-width: 600px;
    }
  }

  @media (max-width: 1080px) {
    .gallery.left,
    .gallery.right {
      max-width: 760px;
      overflow: hidden;
    }

    .button-group {
      bottom: -90px;
      right: 32px;
    }
  }
`,Zf="/magic-box/assets/close-circle-da623bd3.svg",Bh=me.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background: rgba(7, 0, 47, 0.99);
  z-index: 1000;

  div.imgs {
    display: grid;
    z-index: 1;
    animation: zoom ease 0.3s forwards;
  }

  /* TODAS AS IMAGENS */
  .imgs :nth-child(n) {
    grid-area: 1/-1;
    width: 80vw;
    height: 90vh;
    object-fit: cover;
  }

  /* IMAGEM 1 */
  .imgs :nth-child(1) {
    z-index: 10;
    animation: fade ease 1s forwards;
  }

  /* DA IMAGEM 2 EM DIANTE  */
  .imgs :nth-child(n + 2) {
    opacity: 0;
  }

  button {
    position: fixed;
    opacity: 0.3;
    z-index: 10;
    transition: 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }

  #btn-left {
    top: 50%;
    left: 3%;
    width: 50px;
    height: 50px;
    background: url(${ma}) center center no-repeat;
  }

  #btn-right {
    top: 50%;
    right: 3%;
    width: 50px;
    height: 50px;
    background: url(${ma}) center center no-repeat;
    transform: rotate(180deg);
  }

  #btn-close {
    top: 3%;
    right: 3%;
    width: 50px;
    height: 50px;
    background: url(${Zf}) center center no-repeat;
  }
`;function Vh({imgs:e,handleClick:t,setZoom:n}){function r({target:i}){i.classList.contains("out")&&n(!1)}return g.jsxs(Bh,{onClick:r,className:"out",children:[g.jsx("div",{className:"imgs",children:e.map(i=>g.jsx("img",{id:i.id,src:i.url},i.id))}),g.jsx("button",{id:"btn-left",onClick:t}),g.jsx("button",{id:"btn-right",onClick:t}),g.jsx("button",{id:"btn-close",className:"out",onClick:r})]})}const Zh=({imgs:e,setImgs:t})=>{const[n,r]=F.useState(null),[i,o]=F.useState("left"),[l,a]=F.useState(!1);function s(y){const w=[...e],N=w.length-1,d=n-y;d<-60?(o("right"),w.unshift(e[N]),w.pop(),t(w)):d>60&&(o("left"),w.shift(),w.push(e[0]),t(w))}function u({pageX:y}){r(y)}function p({pageX:y}){s(y)}function m(y){r(y.changedTouches[0].pageX)}function v(y){s(y.changedTouches[0].pageX)}function x({target:y}){y.id==="btn-left"&&s(-61),y.id==="btn-right"&&s(1e4)}return g.jsxs(Uh,{className:"anime",children:[g.jsx("div",{className:`gallery ${i}`,onClick:()=>a(!0),onDragStart:u,onDragEnd:p,onTouchStart:m,onTouchEnd:v,children:e.map(y=>g.jsx("img",{id:y.id,src:y.url},y.id))}),g.jsxs("div",{className:"button-group anime",children:[g.jsx("button",{id:"btn-left",onClick:x}),g.jsx("button",{id:"btn-right",onClick:x})]}),l&&g.jsx(Vh,{imgs:e,handleClick:x,setZoom:a})]})},Wh="/magic-box/assets/img-gallery-1-30cfb7dc.jpg",Hh="/magic-box/assets/img-gallery-2-2467bf34.jpg",Qh="/magic-box/assets/img-gallery-3-487114f6.jpg",Yh="/magic-box/assets/img-gallery-4-c39fc35f.jpg",Xh="/magic-box/assets/img-gallery-5-de8f4f3b.jpg";function Kh(){const[e,t]=F.useState([{id:1,url:Wh},{id:2,url:Hh},{id:3,url:Qh},{id:4,url:Yh},{id:5,url:Xh}]);return g.jsxs(bh,{id:"infraestrutura",children:[g.jsx(Vf,{className:"fold anime"}),g.jsxs("div",{className:"content",children:[g.jsxs("h1",{className:"anime",children:[g.jsx("span",{id:"text-1",children:"Ambiente"})," ",g.jsx("span",{id:"text-2",children:"voltado para"}),g.jsx("br",{}),g.jsx("span",{id:"text-3",children:"sua"})," ",g.jsx("strong",{children:"performance"})]}),g.jsx(Zh,{imgs:e,setImgs:t})]})]})}const Gh="/magic-box/assets/circle-p3-81229f79.svg",Jh="/magic-box/assets/circle-p4-f04729b4.svg",qh="/magic-box/assets/arrow-circle-dark-57be6936.svg",e2=me.section`
  height: 840px;
  background: linear-gradient(to bottom, #080037 20%, #988ace, var(--w));
  display: flex;
  justify-content: center;

  h2 {
    font-family: var(--title);
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: lowercase;
  }

  p {
    font-family: var(--text);
    font-weight: 400;
    letter-spacing: 0.05rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content h1 {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;

    transition: 0.3s;
    margin: 40px 0 120px -200px;
    opacity: 0;

    &.show {
      margin-left: 0;
      opacity: 1;
    }

    #text-1 {
      font-size: 2rem;

      strong {
        color: var(--p3);
      }
    }

    #text-2 {
      font-size: 4rem;
      padding-left: 160px;
    }
  }

  .content .cards {
    width: 1050px;
    height: 400px;
    position: relative;

    /* CARD TRANSPARENTE SEM CONTEÚDO */
    &::after {
      content: '';
      display: block;
      width: 580px;
      height: 180px;
      background: rgba(7, 0, 47, 0.3);
      border-radius: 3px;
      position: absolute;
      bottom: 0;
      left: 64px;
    }
  }

  /* +-+-+-+-+ MAGIC CLUB +-+-+-+-+ */
  .content .cards #magic-club {
    width: 630px;
    border-radius: 3px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    transition: 0.3s;
    transition-delay: 0.3s;
    background: rgba(230, 223, 255, 0.3);
    opacity: 0;

    &.show {
      opacity: 1;
    }

    &:hover {
      background: var(--p3);

      button {
        transform: scale(1.5);
      }
    }

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background: url(${Gh});
      position: absolute;
      top: 24px;
      right: 24px;
    }
  }

  .content .cards #magic-club h2 {
    color: var(--p7);
    padding: 48px 0 0 48px;

    &::after {
      content: '';
      display: block;
      width: 65%;
      height: 2px;
      background: var(--p3);
      margin: 16px 0 16px 0;
    }
  }

  .content .cards #magic-club p {
    font-size: 2rem;
    line-height: 3rem;
    max-width: 30ch;
    padding: 0 0 48px 48px;
    color: var(--p1);
  }

  .content .cards #magic-club button {
    width: 25px;
    height: 25px;
    background: url(${qh});
    position: absolute;
    bottom: 48px;
    right: 48px;
    transition: 0.3s;

    &:hover,
    &focus {
      opacity: 0.8;
    }
  }

  /* +-+-+-+-+ PLAN PLUS +-+-+-+-+ */
  .content .cards #plan-plus {
    width: 500px;
    border-radius: 3px;
    position: absolute;
    top: 36px;
    left: 0;
    z-index: 1;

    transition: 0.3s;
    background: rgba(115, 90, 227, 0.3);
    opacity: 0;

    &.show {
      opacity: 1;
    }

    &:hover {
      background: var(--p3);
      z-index: 10;

      h2 {
        padding-left: 48px;
      }

      p {
        color: var(--p1);
        padding: 0 0 80px 48px;
      }

      button {
        bottom: 40px;
        left: 280px;
      }
    }

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background: url(${Jh});
      position: absolute;
      top: 24px;
      left: 24px;
    }
  }

  .content .cards #plan-plus h2 {
    color: var(--p6);
    padding: 48px 0 16px 80px;
  }

  .content .cards #plan-plus p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    max-width: 28ch;
    padding: 0 0 60px 80px;
    color: rgba(230, 223, 250, 0.5);
  }

  .content .cards #plan-plus button {
    position: absolute;
    bottom: -16px;
    left: 80px;

    &:hover,
    &:focus {
      filter: brightness(115%);
    }
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1080px) {
    .content .cards {
      width: 864px;

      &::after {
        display: none;
      }
    }
    .content .cards #magic-club {
      width: 500px;
      top: 0;
      right: 0;

      p {
        font-size: 1.5rem;
        line-height: 2.25rem;
      }
    }

    .content .cards #plan-plus {
      top: 36px;
      left: 0;
    }
  }

  @media (max-width: 880px) {
    & {
      height: 1000px;
    }

    .content h1 #text-1 {
      font-size: 1.5rem;
    }

    .content h1 #text-2 {
      font-size: 3.5rem;
      padding-left: 64px;
    }

    .content .cards {
      width: 0;
      height: 0;
      position: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content .cards #magic-club {
      position: relative;
    }

    .content .cards #plan-plus {
      position: relative;

      h2 {
        padding-left: 48px;
      }

      p {
        padding: 0 0 80px 48px;
        color: var(--p1);
      }

      button {
        bottom: 40px;
        left: 280px;
      }
    }
  }

  @media (max-width: 560px) {
    & {
      height: 1000px;
    }

    .content h1 #text-1 {
      font-size: 1rem;
    }

    .content h1 #text-2 {
      font-size: 2.5rem;
      padding-left: 28px;
    }

    .content .cards #magic-club,
    .content .cards #plan-plus {
      width: 340px;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.75rem;
      }
    }

    .content .cards #plan-plus {
      p {
        padding-bottom: 106px;
      }

      button {
        bottom: 40px;
        left: 110px;
      }

      &:hover {
        p {
          padding-bottom: 106px;
        }

        button {
          left: 110px;
        }
      }
    }
  }
`;function t2(){return g.jsx(e2,{id:"algomais",children:g.jsxs("div",{className:"content",children:[g.jsxs("h1",{className:"anime",children:[g.jsxs("span",{id:"text-1",children:["Na ",g.jsx("strong",{children:"Magic Box"})," sempre há"]}),g.jsx("br",{}),g.jsx("span",{id:"text-2",children:"algo a mais"})]}),g.jsxs("ul",{className:"cards",children:[g.jsxs("li",{id:"magic-club",className:"anime",children:[g.jsx("h2",{children:"Magic Club"}),g.jsx("p",{children:"Temos um clube de vantagens que garante as melhores ofertas e oportunidades"}),g.jsx("button",{"aria-label":"Saiba mais"})]}),g.jsxs("li",{id:"plan-plus",className:"anime",children:[g.jsx("h2",{children:"Plan Plus"}),g.jsx("p",{children:"Performance em primeiro lugar. Temos um plano especial para os amantes do esporte"}),g.jsx(ys,{text:"saiba mais",color:"linear-gradient(to right, #34248E, #5F4FB8)"})]})]})]})})}const n2=me.section`
  background: var(--w);
  padding-bottom: 240px;

  h1 {
    font-family: var(--title);
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 120px;

    transition: 0.3s;
    transform: translateX(200px);
    opacity: 0;

    &.show {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h1 #text-1 {
    color: var(--p3);
    display: flex;
    align-items: center;
    gap: 16px;

    &::after {
      content: '';
      display: inline-block;
      width: 240px;
      height: 2px;
      background: var(--p2);
    }
  }

  h1 #text-2 {
    color: var(--p6);
    display: flex;
    align-items: center;
    gap: 16px;

    &::before {
      content: '';
      display: inline-block;
      width: 170px;
      height: 2px;
      background: var(--p2);
    }
  }

  .team {
    padding: 0 40px 0 40px;
  }

  .team .list {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  .team .list .item {
    flex: 1 0 240px;
    border-radius: 3px;
    display: grid;
    cursor: pointer;
    overflow: hidden;

    transition: 0.3s;
    opacity: 0;

    &::before {
      content: '';
      display: block;
      position: relative; // só para que não seja static
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      grid-area: 1/-1;
      z-index: 1;
      transition: 0.3s;
    }
  }

  .team .list .item.show:nth-child(1),
  .team .list .item.show:nth-child(4) {
    opacity: 1;
  }

  .team .list .item.show:nth-child(2),
  .team .list .item.show:nth-child(5) {
    transition-delay: 0.2s;
    opacity: 1;
  }

  .team .list .item.show:nth-child(3),
  .team .list .item.show:nth-child(6) {
    transition-delay: 0.4s;
    opacity: 1;
  }

  .team .list .item h2 {
    grid-area: 1/-1;
    justify-self: center;
    align-self: center;
    color: var(--p1);
    font-family: var(--title);
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    text-transform: capitalize;
    z-index: 2;
    transition: 0.3s;
  }

  .team .list .item .label {
    grid-area: 1/-1;
    justify-self: end;
    align-self: end;
    width: 30%;
    height: 12.5%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 5%, #4d3baf);
    display: flex;
    justify-content: end;
    align-items: center;
    border-radius: 0 0 3px 3px;
    z-index: 2;
    transition: 0.3s;
  }

  .team .list .item .label p {
    color: var(--p3);
    font-family: var(--text);
    font-weight: 400;
    font-size: 1rem;
    padding-right: 16px;
  }

  .team .list .item img {
    grid-area: 1/-1;
    width: 100%;
    max-height: 460px;
    object-fit: cover;
    object-position: top;
    border-radius: 3px;
    transition: 0.3s;
  }

  .team .list .item:hover {
    &::before {
      background: rgba(0, 0, 0, 0.05);
    }

    h2 {
      font-size: 3rem;
      opacity: 0.6;
    }

    .label {
      width: 100%;
    }

    .label p {
      color: var(--p2);
    }

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.75rem;

      #text-1::after {
        display: none;
      }

      #text-2::before {
        display: none;
      }
    }

    .team .list .item.show:nth-child(2),
    .team .list .item.show:nth-child(5) {
     transition-delay: 0s;     
    }

    .team .list .item.show:nth-child(3),
    .team .list .item.show:nth-child(6) {
      transition-delay: 0s;
    }
  }

  @keyframes label {
    from {
      background: linear-gradient(to right, rgba(0, 0, 0, 0) 99%, #4d3baf);
    }
  }
`,r2="/magic-box/assets/daniel-cb07f7d8.jpg",i2="/magic-box/assets/gustavo-3a92c9a1.jpg",o2="/magic-box/assets/sheila-d3c2df47.jpg",l2="/magic-box/assets/thiago-c577322d.jpg",a2="/magic-box/assets/natalia-bf86b919.jpg",s2="/magic-box/assets/carlos-5bf5b73f.jpg",u2="/magic-box/assets/arrow-cf33b346.svg",c2=me.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(7, 0, 47, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  div {
    width: 60vw;
    animation: zoom ease 0.3s forwards;
  }

  h2 {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.05rem;
    text-transform: capitalize;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin: 12px 0 24px 0;
      background: var(--p5);
    }
  }

  li + li {
    margin-top: 16px;
  }

  li {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 12px;
      background: url(${u2});
    }
  }

  p {
    color: var(--p1);
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.25rem;
  }

  button {
    position: fixed;
    top: 10%;
    right: 5%;
    width: 50px;
    height: 50px;
    opacity: 0.3;
    background: url(${Zf});
    transition: 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 880px) {
    div {
      width: 80vw;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 620px) {
    div {
      width: 90vw;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;function d2({resumeName:e,setResumeName:t,resumeList:n}){function r({target:i}){i.classList.contains("out")&&t("")}return g.jsxs(c2,{onClick:r,className:"out",children:[g.jsxs("div",{children:[g.jsx("h2",{children:e}),g.jsx("ul",{children:n[e].map(i=>g.jsx("li",{children:g.jsx("p",{children:i})}))})]}),g.jsx("button",{className:"out"})]})}const Qu=[{name:"daniel",role:"personal",url:r2,desc:"Homem de braços cruzados com várias luvas de box na parede de fundo",resume:["Formado em educação física pela UniFap","Mestre em condicionamento físico pela Enfasema","Especialista em rendimento físico de alta durabilidade","10 anos de experiência com treinamento de alta performance"]},{name:"gustavo",role:"personal",url:i2,desc:"Homem em pé de boné com três luzes de neon verde na parede de fundo",resume:["Formado em educação física pela UFDERJ","Pós graduado pela Camsa em manutenção do corpo","Ex atleta do Ironman Triathlon","Amplo conhecimento de técnicas do atletismo","Vasta experiência com atletas de alta resistência"]},{name:"sheila",role:"coach",url:o2,desc:"Mulher de pernas grossas com as mãos na cintura em pé numa academia",resume:["Formada em educação física pelo Instituto Ventilar","Doutora em reconhecimento muscular pela Mugida Tech","Especialista em atletas de musculação e estética","Grande experiência no cenário de concursos estéticos","2x campeã do Body Contest como coach da Ana Vizza"]},{name:"thiago",role:"coach",url:l2,desc:"Homem forte com a cara fechada sentado num banco de academia",resume:["Formado em educação física pela FESP","Ex atleta profissional de fisiculturismo","Campeão do Mega Shape Campinas","Campeão do Body Festival como coach do Bruno Paz","Especialista em treinos para crescimento muscular acelerado"]},{name:"natália",role:"nutricionista",url:a2,desc:"Mulher esguia e estilosa de braços cruzados",resume:["Formada em Nutrição pela FFBEMT","Pós graduada em alimentação minimalista pela PCA","Criadora do método VASS para emagrecimento saudável","Especialista em variação de dietas de baixa caloria","Amplo conhecimento em preditivos alimentares"]},{name:"carlos",role:"nutricionista",url:s2,desc:"Homem careca fazendo um comprimento de 'hang loose'",resume:["Formado em nutrição pela Faculdade Castelo Branco","Especialista em dietas para ganho de massa muscular","Vasta experiência com atletas de levantamento de peso","Preparador físico alimentar de atletas de grande porte"]}];function f2(){const[e,t]=F.useState(""),n=Qu.reduce((r,i)=>({...r,[i.name]:i.resume}),{});return g.jsxs(n2,{id:"time",children:[g.jsxs("h1",{className:"anime",children:[g.jsx("span",{id:"text-1",children:"Conheça o nosso"})," ",g.jsx("span",{id:"text-2",children:"time de profissionais"})]}),g.jsx("div",{className:"team",children:g.jsxs("ul",{className:"list",children:[Qu.map(r=>g.jsxs("li",{id:r.name,onClick:({target:i})=>t(i.id),className:"item anime",children:[g.jsx("h2",{children:r.name}),g.jsx("div",{className:"label",children:g.jsx("p",{children:r.role})}),g.jsx("img",{src:r.url,alt:r.desc})]},r.name)),e&&g.jsx(d2,{resumeName:e,setResumeName:t,resumeList:n})]})})]})}const p2="/magic-box/assets/circle-p5-f25cc891.svg",m2="/magic-box/assets/circle-p8-9e2d72ea.svg",h2="/magic-box/assets/arrow-p3-b97b352d.svg",g2="/magic-box/assets/arrow-p7-cda9b06d.svg",v2="/magic-box/assets/arrow-p8-e25f432d.svg",y2=me.section`
  background: var(--p8);
  padding-bottom: 160px;
  position: relative;

  .fold {
    position: absolute;
    top: -136px;
    transform: rotate(180deg);
    
    transition: 0.3s;
    left: 200px;

    &.show {
      left: 0;
    }
  }

  h1 {
    font-family: var(--title);
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--p1);
    max-width: 1160px;
    margin: 0 auto;
    padding: 120px 0 120px 56px;
    display: flex;
    align-items: center;
    gap: 16px;

    transition: 0.3s;
    transition-delay: 0.3s;
    transform: translateY(-100px);
    opacity: 0;

    &.show {
      opacity: 1;
      transform: translateY(0);
    }

    &::after {
      content: '';
      display: block;
      width: 30%;
      height: 2px;
      background: var(--p7);
    }
  }

  .box {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .box .plan {
    flex: 0 0 360px;
    height: 537px;
    border-radius: 3px;
    background: var(--p4);
    display: flex;
    flex-direction: column;

    transition: 0.1s;
    transform: translateY(-100px);
    opacity: 0;

    &.show {
      transform: translateY(0);
      opacity: 1;
    }
    
    &.plan-active {
      height: 100%;
    }

    &:hover {
      filter: brightness(125%);
    }
  }

  .box .plan#semestral.show {
    transition-delay: 0.4s;
  }

  .box .plan#trimestral.show {
    transition-delay: 0.2s;
  }

  .box .plan .name {
    height: 72px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0) 10%, #4d3baf);
    display: flex;
    align-items: center;

    h2 {
      font-family: var(--title);
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: 0.05rem;
      text-transform: lowercase;
      color: var(--p6);
      padding: 20px 0 20px 56px;
    }
  }

  .box .plan ul {
    margin: 16px 40px 0 40px;
    min-height: 240px;
  }

  .box .plan ul li + li {
    border-top: 1px solid var(--p5);
  }

  .box .plan ul li p {
    color: var(--p2);
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.875rem;
    padding: 20px 0 20px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    transition: 0.1s;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 8px;
      background: url(${p2});
    }

    &::after {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(${h2});
      position: absolute;
      right: 0;
      transition: 0.3s;
    }
  }

  /* SPIN ARROW */
  .box .plan ul li p.item-active::after {
    transform: rotate(180deg);
  }

  .box .plan ul li .desc {
    color: var(--p2);
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.725rem;
    line-height: 1.25rem;
    max-width: 35ch;
    height: 0;
    margin-left: 20px;
    overflow-y: hidden;
    pointer-events: none;
    transition: 0.3s;

    &.desc-active {
      height: 100px;
      pointer-events: auto;
    }
  }

  .box .plan button {
    margin: 28px 0 40px 40px;
    width: max-content;
  }

  .box .plan .price {
    height: 100px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 10%, #4d3baf);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--title);
    font-weight: 700;

    #text-1 {
      font-size: 1rem;
      color: var(--p7);
      margin: -16px 4px 0 0;
    }

    #text-2 {
      font-size: 3rem;
      color: var(--p1);
    }
  }

  /* +-+-+-+-+-+ PLANO TRIMESTRAL +-+-+-+-+-+ */
  .box #trimestral {
    background: var(--p6);

    h2 {
      color: var(--p7);
    }

    li + li {
      border-top: 1px solid var(--p7);
    }

    li .desc {
      color: var(--p2);
    }

    p {
      color: var(--p3);

      &::after {
        background: url(${g2});
      }
    }

    .price #text-2 {
      color: var(--p3);
    }
  }

  /* +-+-+-+-+-+ PLANO MENSAL +-+-+-+-+-+ */
  .box #mensal {
    background: var(--p7);

    h2 {
      color: var(--p8);
    }

    li + li {
      border-top: 1px solid var(--p8);
    }

    li .desc {
      color: var(--p3);
    }

    p {
      color: var(--p4);

      &::before {
        background: url(${m2});
      }

      &::after {
        background: url(${v2});
      }
    }

    .price #text-2 {
      color: var(--p3);
    }
  }

  /* +-+-+-+-+-+ RESPONSIVE +-+-+-+-+-+ */
  @media (max-width: 1080px) {
    .fold {
      width: 440px;
      height: 68px;
      top: -68px;
    }

    h1::after {
      width: 15%;
    }
  }

  @media (max-width: 760px) {
    h1::after {
      display: none;
    }

    .box .plan#semestral.show {
      transition-delay: 0s;
    }

    .box .plan#trimestral.show {
      transition-delay: 0s;
    }
  }

  @media (max-width: 520px) {
    .fold {
      width: 220px;
      height: 34px;
      top: -34px;
    }
  }

  @keyframes grow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,x2=[{id:1,name:"semestral",desc:["Com cartão de crédito","Acesso a todas modalidades","Plan plus e clube de vantagens","Fidelidade de 6 meses"],btnColor:"linear-gradient(to right, #281367, #4C3495)",price:"69,90"},{id:2,name:"trimestral",desc:["Com cartão de crédito","Acesso a todas modalidades","Clube de vantagens","Fidelidade de 6 meses"],btnColor:"linear-gradient(to right, #09002F, #24175E)",price:"79,90"},{id:3,name:"mensal",desc:["À vista no débito","Acesso a 1 modalidade","Sem fidelidade"],btnColor:"linear-gradient(to right, #1E125B, #39269A)",price:"99,90"}];function w2(){const[e,t]=F.useState(null),[n,r]=F.useState(null),[i,o]=F.useState("");function l(a){const s=a.currentTarget.id,u=s.slice(0,s.length-1);t(u),n===s?(t(null),r(null)):r(s),i||o("show")}return g.jsxs(y2,{id:"planos",children:[g.jsx(Vf,{className:"fold anime"}),g.jsx("h1",{className:"anime",children:"Escolha o seu plano"}),g.jsx("div",{className:"box",children:x2.map(a=>g.jsxs("div",{id:a.name,className:a.name===e?`plan plan-active anime ${i}`:`plan anime ${i}`,children:[g.jsx("div",{className:"name",children:g.jsx("h2",{children:a.name})}),g.jsx("ul",{children:a.desc.map((s,u)=>g.jsxs("li",{children:[g.jsx("p",{id:a.name+u,className:n===a.name+u?"item-active":"",onClick:l,children:s}),g.jsx("div",{className:n===a.name+u?"desc desc-active":"desc",children:g.jsx("span",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et rerum quidem vitae veritatis quos necessitatibus voluptatem iure possimus"})})]},s))}),g.jsx(ys,{text:"matricule-se",color:a.btnColor}),g.jsxs("div",{className:"price",children:[g.jsx("span",{id:"text-1",children:"R$"}),g.jsx("span",{id:"text-2",children:a.price})]})]},a.id))})]})}const C2="/magic-box/assets/img-contato-31380a40.jpg",E2=me.section`
  background: var(--p8);
  display: grid;

  &::before {
    content: '';
    display: block;
    height: 730px;
    background: url(${C2}) bottom left no-repeat fixed;
    background-size: cover;
    opacity: 0.3;
    grid-area: 1/-1;
  }

  .content {
    margin: 0 80px;
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-area: 1/-1;
    align-self: center;
    z-index: 1;
  }

  .content .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    transition: 0.3s;
    transition-delay: 0.6s;
    transform: translateY(-100px);
    opacity: 0;
  }

  &.show .content .title {
    transform: translateY(0);
    opacity: 1;
  }

  .content .title h1 {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  .content .title p {
    color: var(--p2);
    font-family: var(--text);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 40ch;
  }

  .content .title a {
    color: var(--p3);
    font-family: var(--title);
    font-weight: 400;
    font-size: 1rem;
    margin-top: 8px;
  }

  form {
    background: var(--p8);
    border-radius: 3px;

    transition: 0.3s;
    transform: scale(0);

    &.show {
      transform: scale(1);
      opacity: 0.8;
    }

    &:hover {
      opacity: 1;
    }
  }

  form .fields {
    margin: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  form .fields label {
    color: var(--p1);
    font-family: var(--title);
    font-weight: 400;
    font-size: 1rem;
  }

  form .fields input[type='text'],
  form .fields input[type='email'] {
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: none;
    margin-top: 8px;
    padding: 0 16px;
    background: var(--p7);
    color: var(--p3);
    transition: 0.3s;
  }

  form .fields textarea {
    width: 100%;
    height: 140px;
    border-radius: 3px;
    border: none;
    resize: none;
    margin-top: 8px;
    padding: 8px 16px;
    background: var(--p7);
    color: var(--p3);
    transition: 0.3s;
  }

  form .fields input[type='text']:hover,
  form .fields input[type='email']:hover,
  form .fields textarea:hover {
    background: var(--p6);
  }

  form .fields input[type='text']:focus,
  form .fields input[type='email']:focus,
  form .fields textarea:focus {
    background: var(--p6);
    border: 1px solid var(--p5);
    box-shadow: 0px 0px 4px 1px var(--p6);
  }

  form .fields button {
    border: none;
    width: 100%;
    height: 46px;
    border-radius: 3px;
    background: var(--p4);
    color: var(--p8);
    font-family: var(--title);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  form .fields p.success,
  form .fields p.error {
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.75rem;
  }

  form .fields p.success {
    color: #6bbf59;
  }

  form .fields p.error {
    color: #ed4337;
    margin-top: 4px;
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1300px) {
    .content {
      margin: 0 40px;
    }
  }

  @media (max-width: 1080px) {
    &::before {
      height: 860px;
    }

    .content {
      height: auto;
      grid-template-columns: auto;
    }

    .content .title {
      margin-bottom: 40px;

      p {
        max-width: max-content;
        opacity: 0.5;
      }

      a {
        display: none;
      }
    }

    form .fields {
      margin: 40px;
    }
  }

  @media (max-width: 600px) {
    .content {
      margin: 0 20px;
    }

    .content .title p {
      font-size: 0.75rem;
      line-height: 1.25rem;
    }

    form .fields {
      margin: 20px;
      gap: 16px;

      label,
      button {
        font-size: 0.875rem;
      }

      p.success,
      p.error {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: 390px) {
    .content .title h1 {
      font-size: 1.75rem;
    }
  }
`,ll=({name:e,label:t,type:n,value:r,onChange:i,onBlur:o,error:l})=>g.jsxs("div",{className:"field-"+e,children:[g.jsx("label",{htmlFor:e,children:t}),n!=="textarea"?g.jsx("input",{id:e,name:e,type:n,value:r,onChange:i,onBlur:o}):g.jsx("textarea",{id:e,name:e,type:n,value:r,onChange:i,onBlur:o}),l&&g.jsx("p",{className:"error",children:l})]}),al={email:{regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Preencha um email válido"}};function sl(e){const[t,n]=F.useState(""),[r,i]=F.useState(null);function o(a){return e===!1?!0:a.length===0?(i("Preencha um valor"),!1):al[e]&&!al[e].regex.test(a)?(i(al[e].message),!1):(i(null),!0)}function l({target:a}){r&&o(a.value),n(a.value)}return{value:t,setValue:n,onChange:l,error:r,validate:()=>o(t),onBlur:()=>o(t)}}const Or={_origin:"https://api.emailjs.com"},S2=(e,t="https://api.emailjs.com")=>{Or._userID=e,Or._origin=t},Wf=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Yu{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const Hf=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const a=new Yu(l);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:l})=>{i(new Yu(l))}),o.open("POST",Or._origin+e,!0),Object.keys(n).forEach(l=>{o.setRequestHeader(l,n[l])}),o.send(t)}),k2=(e,t,n,r)=>{const i=r||Or._userID;return Wf(i,e,t),Hf("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},P2=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},L2=(e,t,n,r)=>{const i=r||Or._userID,o=P2(n);Wf(i,e,t);const l=new FormData(o);return l.append("lib_version","3.11.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),Hf("/api/v1.0/email/send-form",l)},j2={init:S2,send:k2,sendForm:L2};function N2(){const[e,t]=F.useState(null),n=sl(!1),r=sl("email"),i=sl();function o(l){if(l.preventDefault(),r.validate()&&i.validate()){const a={from_name:n.value,email:r.value,message:i.value};j2.send("service_ovc51pi","template_ra9q7ua",a,"s_YA3z6mo4qOe0thA").then(()=>{t(!0),n.setValue(""),r.setValue(""),i.setValue("")},s=>{console.log("Erro ao enviar o email"),console.log(s),n.setValue(""),r.setValue(""),i.setValue("")})}}return F.useEffect(()=>{(n.error||r.error||i.error)&&t(!1),e&&setTimeout(()=>{t(!1)},1e4)},[e,n.error,r.error,i.error]),g.jsx(E2,{id:"contato",className:"anime",children:g.jsxs("div",{className:"content",children:[g.jsxs("div",{className:"title",children:[g.jsx("h1",{children:"Precisando de mais informações?"}),g.jsx("p",{children:"Entre em contato conosco enviando uma mensagem. Responderemos o quanto antes :)"}),g.jsx(wt,{to:"mailto:contato@magicbox.com.br",children:"contato@magicbox.com.br"})]}),g.jsx("form",{onSubmit:o,className:"anime",children:g.jsxs("div",{className:"fields",children:[g.jsx(ll,{label:"Nome",type:"text",name:"name",...n}),g.jsx(ll,{label:"Email",type:"email",name:"email",...r}),g.jsx(ll,{label:"Menssagem",type:"textarea",name:"message",...i}),g.jsx("button",{children:"Enviar"}),e&&g.jsx("p",{className:"success",children:"Menssagem enviada com sucesso!"})]})})]})})}const z2="/magic-box/assets/instagram-05cedf63.svg",_2="/magic-box/assets/facebook-2378d3dc.svg",R2="/magic-box/assets/whatsapp-9518928e.svg",M2="/magic-box/assets/map-22b75a9d.jpg",T2=me.footer`
  background: var(--p8);

  p,
  h2,
  h3,
  a {
    letter-spacing: 0.05rem;
  }

  h2 {
    color: var(--p1);
    font-family: var(--title);
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 16px;
  }

  h3 {
    color: var(--p2);
    font-family: var(--text);
    font-size: 1rem;
    font-weight: 500;
    margin-top: 8px;
  }

  p {
    color: var(--p5);
    font-family: var(--text);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  a {
    color: var(--p2);
    font-family: var(--text);
    font-size: 0.875rem;
    width: max-content;
    transition: 0.3s;

    & + a {
      padding-top: 12px;
    }

    &:hover {
      color: var(--p3);
    }
  }

  span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-top: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.5);
    }
  }

  .content {
    padding: 80px 80px 40px 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .brand {
    margin-right: 60px;
  }

  .brand #logo {
    color: var(--p1);
    font-family: var(--title);
    font-size: 3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
      width: 56px;
      height: 56px;
    }
  }

  .brand p {
    max-width: 35ch;
    margin-top: 4px;
  }

  .brand #instagram {
    background: url(${z2}) no-repeat center center;
    margin-left: -8px;
    transition: 0.3s;
  }

  .brand #facebook {
    background: url(${_2}) no-repeat center center;
  }

  .brand #whatsapp {
    background: url(${R2}) no-repeat center center;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .links div {
    display: flex;
    flex-direction: column;
  }

  .location .map {
    background: url(${M2});
    width: 316px;
    height: 200px;
    border-radius: 3px;
    margin-bottom: 16px;

    iframe {
      border-radius: 3px;
      filter: grayscale(0.6);
    }
  }

  .copyright {
    grid-column: span 2;
    margin-top: -23px;
  }

  /* +-+-+-+-+ RESPONSIVE +-+-+-+-+ */
  @media (max-width: 1180px) {
    h3 {
      display: none;
    }

    p {
      font-size: 0.75rem;
    }

    .content {
      grid-template-columns: 1fr 1fr;
      padding: 80px 80px 40px 120px;
    }

    .brand #logo {
      font-size: 2.25rem;

      svg {
        width: 36px;
        height: 36px;
      }
    }

    .brand p {
      font-size: 0.75rem;
      line-height: 1.25rem;
    }

    .links {
      grid-area: 2;
      margin-top: 40px;
    }

    .location {
      grid-row: span 2;
      justify-self: center;
      align-self: center;
    }

    .location .map {
      margin-bottom: 8px;
    }

    .copyright {
      margin-top: 48px;
      text-align: center;
    }
  }

  @media (max-width: 880px) {
    .content {
      padding: 80px 40px 40px 40px;
    }

    .brand {
      margin: 0;
    }

    .location {
      justify-self: end;
    }
  }

  @media (max-width: 680px) {
    .content {
      padding: 80px 20px 20px 20px;
    }

    .content div {
      grid-column: span 2;
    }

    .brand {
      justify-self: center;
    }

    .brand #logo {
      font-size: 3rem;

      svg {
        width: 56px;
        height: 56px;
      }
    }

    .links {
      justify-self: center;
      margin-top: 60px;
      display: flex;
      gap: 110px;
    }

    .location {
      justify-self: center;
      margin: 60px 0 0 16px;
    }

    .location .map {
      margin-left: -12px;
    }

    .copyright {
      margin-top: 48px;
    }
  }
`;function A2(){return g.jsx(T2,{children:g.jsxs("div",{className:"content",children:[g.jsxs("div",{className:"brand",children:[g.jsxs(wt,{id:"logo",children:["magic",g.jsx(Bf,{}),"box"]}),g.jsx("h3",{children:"Academia Magic Box Ltda."}),g.jsx("p",{children:"Desenvolvimento esportivo de alta performance"}),g.jsx("span",{id:"instagram"}),g.jsx("span",{id:"facebook"}),g.jsx("span",{id:"whatsapp"})]}),g.jsxs("div",{className:"links",children:[g.jsxs("div",{className:"menu",children:[g.jsx("h2",{children:"Menu"}),g.jsx("a",{href:"#planos",children:"Planos"}),g.jsx("a",{href:"#modalidades",children:"Modalidades"}),g.jsx("a",{href:"#infraestrutura",children:"Infraestrutura"}),g.jsx("a",{href:"#time",children:"Time"}),g.jsx("a",{href:"#contato",children:"Contato"})]}),g.jsxs("div",{className:"network",children:[g.jsx("h2",{children:"Redes"}),g.jsx(wt,{children:"Intagram"}),g.jsx(wt,{children:"Facebook"}),g.jsx(wt,{children:"WhatsApp"}),g.jsx(wt,{children:"Youtube"}),g.jsx(wt,{children:"LinkedIn"})]})]}),g.jsxs("div",{className:"location",children:[g.jsx("h2",{children:"Localização"}),g.jsx("div",{className:"map",children:g.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6636085318605!2d-43.39518962697059!3d-22.999394295173477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb990e1fc13d%3A0xad7dbc00d175eedb!2sR.%20Isidoro%20Lopes%2C%20146%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-273!5e0!3m2!1spt-BR!2sbr!4v1693526535243!5m2!1spt-BR!2sbr",width:"316",height:"200",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),g.jsx("p",{children:"Rua Ali Perto, 255 - Barra da Tijuca, RJ"})]}),g.jsx("p",{className:"copyright",children:"© Copyright 2023 - 2024 | Magic Box | Todos os Direitos Reservados | Criado por BRITS"})]})})}const I2={root:null,rootMargin:"0px",threshold:0,trackVisibility:!0,delay:100};function O2(){const e=t=>{t.map(n=>{n.isIntersecting&&n.target.classList.add("show")})};return h.useEffect(()=>{const t=document.querySelectorAll(".anime"),n=new IntersectionObserver(e,I2);return t==null||t.forEach(r=>n.observe(r)),()=>{t.forEach(r=>{r.classList.contains("show")&&n.unobserve(r)})}},[])}const $2=()=>(O2(),g.jsxs(g.Fragment,{children:[g.jsx(Lh,{}),g.jsx(Th,{}),g.jsx(Dh,{}),g.jsx(Kh,{}),g.jsx(t2,{}),g.jsx(f2,{}),g.jsx(w2,{}),g.jsx(N2,{}),g.jsx(A2,{})]}));function F2(){return g.jsxs(hm,{children:[g.jsx(Ch,{}),g.jsx(um,{children:g.jsx(xf,{path:"/",element:g.jsx($2,{})})})]})}ul.createRoot(document.getElementById("root")).render(g.jsx(F2,{}));
