import{b as pa,r as di,_ as ma,g as xt,a as ya,C as va,L as re,F as wa,S as Ea,d as Ta,e as Ia,f as Sa,h as Aa,j as Ca,k as Na,l as ka}from"./fbinit.b2d12662.js";var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,ps=ps||{},T=Da||self;function He(){}function Gn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ve(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ba(e){return Object.prototype.hasOwnProperty.call(e,xn)&&e[xn]||(e[xn]=++Ra)}var xn="closure_uid_"+(1e9*Math.random()>>>0),Ra=0;function _a(e,t,n){return e.call.apply(e.bind,arguments)}function La(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function q(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q=_a:q=La,q.apply(null,arguments)}function Ve(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function gt(){this.s=this.s,this.o=this.o}var xa=0,Ma={};gt.prototype.s=!1;gt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),xa!=0)){var e=ba(this);delete Ma[e]}};gt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ur=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},hr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Va(e){t:{var t=Nu;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function fi(e){return Array.prototype.concat.apply([],arguments)}function ms(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function ze(e){return/^[\s\xa0]*$/.test(e)}var gi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function Mn(e,t){return e<t?-1:e>t?1:0}var Q;t:{var pi=T.navigator;if(pi){var mi=pi.userAgent;if(mi){Q=mi;break t}}Q=""}function ys(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function cr(e){const t={};for(const n in e)t[n]=e[n];return t}var yi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<yi.length;r++)n=yi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function vs(e){return vs[" "](e),e}vs[" "]=He;function Oa(e){var t=Ua;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Pa=W(Q,"Opera"),Mt=W(Q,"Trident")||W(Q,"MSIE"),dr=W(Q,"Edge"),Hn=dr||Mt,fr=W(Q,"Gecko")&&!(W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge"))&&!(W(Q,"Trident")||W(Q,"MSIE"))&&!W(Q,"Edge"),Fa=W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge");function gr(){var e=T.document;return e?e.documentMode:void 0}var We;t:{var Vn="",On=function(){var e=Q;if(fr)return/rv:([^\);]+)(\)|;)/.exec(e);if(dr)return/Edge\/([\d\.]+)/.exec(e);if(Mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Fa)return/WebKit\/(\S+)/.exec(e);if(Pa)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(On&&(Vn=On?On[1]:""),Mt){var Pn=gr();if(Pn!=null&&Pn>parseFloat(Vn)){We=String(Pn);break t}}We=Vn}var Ua={};function qa(){return Oa(function(){let e=0;const t=gi(String(We)).split("."),n=gi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Mn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Mn(i[2].length==0,r[2].length==0)||Mn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var zn;if(T.document&&Mt){var vi=gr();zn=vi||parseInt(We,10)||void 0}else zn=void 0;var Ba=zn,$a=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",He,t),T.removeEventListener("test",He,t)}catch{}return e}();function H(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};function oe(e,t){if(H.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fr){t:{try{vs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ja[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&oe.Z.h.call(this)}}K(oe,H);var ja={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),Ka=0;function Ga(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Ka,this.ca=this.fa=!1}function cn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ln(e){this.src=e,this.g={},this.h=0}ln.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Qn(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Ga(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Wn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=ur(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(cn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Qn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var ws="closure_lm_"+(1e6*Math.random()|0),Fn={};function pr(e,t,n,s,i){if(s&&s.once)return yr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)pr(e,t[r],n,s,i);return null}return n=Is(n),e&&e[we]?e.N(t,n,ve(s)?!!s.capture:!!s,i):mr(e,t,n,!1,s,i)}function mr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ve(i)?!!i.capture:!!i,a=Ts(e);if(a||(e[ws]=a=new ln(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ha(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)$a||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(wr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ha(){function e(n){return t.call(e.src,e.listener,n)}var t=za;return e}function yr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)yr(e,t[r],n,s,i);return null}return n=Is(n),e&&e[we]?e.O(t,n,ve(s)?!!s.capture:!!s,i):mr(e,t,n,!0,s,i)}function vr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)vr(e,t[r],n,s,i);else s=ve(s)?!!s.capture:!!s,n=Is(n),e&&e[we]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Qn(r,n,s,i),-1<n&&(cn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ts(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Qn(t,n,s,i)),(n=-1<e?t[e]:null)&&Es(n))}function Es(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[we])Wn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(wr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ts(t))?(Wn(n,e),n.h==0&&(n.src=null,t[ws]=null)):cn(e)}}}function wr(e){return e in Fn?Fn[e]:Fn[e]="on"+e}function za(e,t){if(e.ca)e=!0;else{t=new oe(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Es(e),e=n.call(s,t)}return e}function Ts(e){return e=e[ws],e instanceof ln?e:null}var Un="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(e){return typeof e=="function"?e:(e[Un]||(e[Un]=function(t){return e.handleEvent(t)}),e[Un])}function P(){gt.call(this),this.i=new ln(this),this.P=this,this.I=null}K(P,gt);P.prototype[we]=!0;P.prototype.removeEventListener=function(e,t,n,s){vr(this,e,t,n,s)};function B(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new H(t,e);else if(t instanceof H)t.target=t.target||e;else{var i=t;t=new H(s,e),lr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Oe(o,s,!0,t)&&i}if(o=t.g=e,i=Oe(o,s,!0,t)&&i,i=Oe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Oe(o,s,!1,t)&&i}P.prototype.M=function(){if(P.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)cn(n[s]);delete e.g[t],e.h--}}this.I=null};P.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};P.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Oe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Wn(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ss=T.JSON.stringify;function Wa(){var e=Tr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Qa{constructor(){this.h=this.g=null}add(t,n){const s=Er.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Er=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Xa,e=>e.reset());class Xa{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ya(e){T.setTimeout(()=>{throw e},0)}function As(e,t){Xn||Ja(),Yn||(Xn(),Yn=!0),Tr.add(e,t)}var Xn;function Ja(){var e=T.Promise.resolve(void 0);Xn=function(){e.then(Za)}}var Yn=!1,Tr=new Qa;function Za(){for(var e;e=Wa();){try{e.h.call(e.g)}catch(n){Ya(n)}var t=Er;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Yn=!1}function dn(e,t){P.call(this),this.h=e||1,this.g=t||T,this.j=q(this.kb,this),this.l=Date.now()}K(dn,P);p=dn.prototype;p.da=!1;p.S=null;p.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),B(this,"tick"),this.da&&(Cs(this),this.start()))}};p.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}p.M=function(){dn.Z.M.call(this),Cs(this),delete this.g};function Ns(e,t,n){if(typeof e=="function")n&&(e=q(e,n));else if(e&&typeof e.handleEvent=="function")e=q(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Ir(e){e.g=Ns(()=>{e.g=null,e.i&&(e.i=!1,Ir(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class tu extends gt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ir(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(e){gt.call(this),this.h=e,this.g={}}K(ae,gt);var wi=[];function Sr(e,t,n,s){Array.isArray(n)||(n&&(wi[0]=n.toString()),n=wi);for(var i=0;i<n.length;i++){var r=pr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ar(e){ys(e.g,function(t,n){this.g.hasOwnProperty(n)&&Es(t)},e),e.g={}}ae.prototype.M=function(){ae.Z.M.call(this),Ar(this)};ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fn(){this.g=!0}fn.prototype.Aa=function(){this.g=!1};function eu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function nu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function bt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+iu(e,n)+(s?" "+s:"")})}function su(e,t){e.info(function(){return"TIMEOUT: "+t})}fn.prototype.info=function(){};function iu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ss(n)}catch{return t}}var Nt={},Ei=null;function gn(){return Ei=Ei||new P}Nt.Ma="serverreachability";function Cr(e){H.call(this,Nt.Ma,e)}K(Cr,H);function ue(e){const t=gn();B(t,new Cr(t,e))}Nt.STAT_EVENT="statevent";function Nr(e,t){H.call(this,Nt.STAT_EVENT,e),this.stat=t}K(Nr,H);function X(e){const t=gn();B(t,new Nr(t,e))}Nt.Na="timingevent";function kr(e,t){H.call(this,Nt.Na,e),this.size=t}K(kr,H);function Ee(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var pn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Dr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ks(){}ks.prototype.h=null;function Ti(e){return e.h||(e.h=e.i())}function br(){}var Te={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ds(){H.call(this,"d")}K(Ds,H);function bs(){H.call(this,"c")}K(bs,H);var Jn;function mn(){}K(mn,ks);mn.prototype.g=function(){return new XMLHttpRequest};mn.prototype.i=function(){return{}};Jn=new mn;function Ie(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ae(this),this.P=ru,e=Hn?125:void 0,this.W=new dn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Rr}function Rr(){this.i=null,this.g="",this.h=!1}var ru=45e3,Zn={},Qe={};p=Ie.prototype;p.setTimeout=function(e){this.P=e};function ts(e,t,n){e.K=1,e.v=vn(ut(t)),e.s=n,e.U=!0,_r(e,null)}function _r(e,t){e.F=Date.now(),Se(e),e.A=ut(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Fr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Rr,e.g=io(e.l,n?t:null,!e.s),0<e.O&&(e.L=new tu(q(e.Ia,e,e.g),e.O)),Sr(e.V,e.g,"readystatechange",e.gb),t=e.H?cr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ue(1),eu(e.j,e.u,e.A,e.m,e.X,e.s)}p.gb=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.Ia(e)};p.Ia=function(e){try{if(e==this.g)t:{const c=ot(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||Hn||this.g&&(this.h.h||this.g.ga()||Ci(this.g)))){this.I||c!=4||t==7||(t==8||0>=l?ue(3):ue(2)),yn(this);var n=this.g.ba();this.N=n;e:if(Lr(this)){var s=Ci(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mt(this),ee(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,nu(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var h=a;break e}}h=null}if(n=h)bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,es(this,n);else{this.i=!1,this.o=3,X(12),mt(this),ee(this);break t}}this.U?(xr(this,c,o),Hn&&this.i&&c==3&&(Sr(this.V,this.W,"tick",this.fb),this.W.start())):(bt(this.j,this.m,o,null),es(this,o)),c==4&&mt(this),this.i&&!this.I&&(c==4?to(this.l,this):(this.i=!1,Se(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),mt(this),ee(this)}}}catch{}finally{}};function Lr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function xr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=ou(e,n),i==Qe){t==4&&(e.o=4,X(14),s=!1),bt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Zn){e.o=4,X(15),bt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else bt(e.j,e.m,i,null),es(e,i);Lr(e)&&i!=Qe&&i!=Zn&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fs(t),t.L=!0,X(11))):(bt(e.j,e.m,n,"[Invalid Chunked Response]"),mt(e),ee(e))}p.fb=function(){if(this.g){var e=ot(this.g),t=this.g.ga();this.C<t.length&&(yn(this),xr(this,e,t),this.i&&e!=4&&Se(this))}};function ou(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Qe:(n=Number(t.substring(n,s)),isNaN(n)?Zn:(s+=1,s+n>t.length?Qe:(t=t.substr(s,n),e.C=s+n,t)))}p.cancel=function(){this.I=!0,mt(this)};function Se(e){e.Y=Date.now()+e.P,Mr(e,e.P)}function Mr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ee(q(e.eb,e),t)}function yn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}p.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(su(this.j,this.A),this.K!=2&&(ue(3),X(17)),mt(this),this.o=2,ee(this)):Mr(this,this.Y-e)};function ee(e){e.l.G==0||e.I||to(e.l,e)}function mt(e){yn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Cs(e.W),Ar(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function es(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ns(n.i,e))){if(n.I=e.N,!e.J&&ns(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ze(n),Tn(n);else break t;Ps(n),X(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ee(q(n.ab,n),6e3));if(1>=Br(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else yt(n,11)}else if((e.J||n.g==e)&&Ze(n),!ze(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const c=h[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const g=h[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(W(v,"spdy")||W(v,"quic")||W(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ls(r,r.h),r.h=null))}if(s.D){const k=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,_(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=so(s,s.H?s.la:null,s.W),o.J){$r(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(yn(a),Se(a)),s.g=o}else Jr(s);0<n.l.length&&In(n)}else h[0]!="stop"&&h[0]!="close"||yt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?yt(n,7):Os(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}ue(4)}catch{}}function au(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Gn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Rs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Gn(e)||typeof e=="string")hr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Gn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=au(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function jt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof jt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}p=jt.prototype;p.R=function(){_s(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};p.T=function(){return _s(this),this.g.concat()};function _s(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Et(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Et(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}p.get=function(e,t){return Et(this.h,e)?this.h[e]:t};p.set=function(e,t){Et(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};p.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Et(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Vr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function uu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Tt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Tt){this.g=t!==void 0?t:e.g,Xe(this,e.j),this.s=e.s,Ye(this,e.i),Je(this,e.m),this.l=e.l,t=e.h;var n=new he;n.i=t.i,t.g&&(n.g=new jt(t.g),n.h=t.h),Ii(this,n),this.o=e.o}else e&&(n=String(e).match(Vr))?(this.g=!!t,Xe(this,n[1]||"",!0),this.s=ne(n[2]||""),Ye(this,n[3]||"",!0),Je(this,n[4]),this.l=ne(n[5]||"",!0),Ii(this,n[6]||"",!0),this.o=ne(n[7]||"")):(this.g=!!t,this.h=new he(null,this.g))}Tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(te(t,Si,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(te(t,Si,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(te(n,n.charAt(0)=="/"?fu:du,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",te(n,pu)),e.join("")};function ut(e){return new Tt(e)}function Xe(e,t,n){e.j=n?ne(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ye(e,t,n){e.i=n?ne(t,!0):t}function Je(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ii(e,t,n){t instanceof he?(e.h=t,mu(e.h,e.g)):(n||(t=te(t,gu)),e.h=new he(t,e.g))}function _(e,t,n){e.h.set(t,n)}function vn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function hu(e){return e instanceof Tt?ut(e):new Tt(e,void 0)}function cu(e,t,n,s){var i=new Tt(null,void 0);return e&&Xe(i,e),t&&Ye(i,t),n&&Je(i,n),s&&(i.l=s),i}function ne(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function te(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,lu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function lu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Si=/[#\/\?@]/g,du=/[#\?:]/g,fu=/[#\?]/g,gu=/[#\?@]/g,pu=/#/g;function he(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pt(e){e.g||(e.g=new jt,e.h=0,e.i&&uu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=he.prototype;p.add=function(e,t){pt(this),this.i=null,e=Kt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Or(e,t){pt(e),t=Kt(e,t),Et(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Et(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&_s(e)))}function Pr(e,t){return pt(e),t=Kt(e,t),Et(e.g.h,t)}p.forEach=function(e,t){pt(this),this.g.forEach(function(n,s){hr(n,function(i){e.call(t,i,s,this)},this)},this)};p.T=function(){pt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};p.R=function(e){pt(this);var t=[];if(typeof e=="string")Pr(this,e)&&(t=fi(t,this.g.get(Kt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=fi(t,e[n])}return t};p.set=function(e,t){return pt(this),this.i=null,e=Kt(this,e),Pr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Fr(e,t,n){Or(e,t),0<n.length&&(e.i=null,e.g.set(Kt(e,t),ms(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Kt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mu(e,t){t&&!e.j&&(pt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Or(this,s),Fr(this,i,n))},e)),e.j=t}var yu=class{constructor(e,t){this.h=e,this.g=t}};function Ur(e){this.l=e||vu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vu=10;function qr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Br(e){return e.h?1:e.g?e.g.size:0}function ns(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ls(e,t){e.g?e.g.add(t):e.h=t}function $r(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ur.prototype.cancel=function(){if(this.i=jr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function jr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ms(e.i)}function xs(){}xs.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};xs.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function wu(){this.g=new xs}function Eu(e,t,n){const s=n||"";try{Rs(e,function(i,r){let o=i;ve(i)&&(o=Ss(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Tu(e,t){const n=new fn;if(T.Image){const s=new Image;s.onload=Ve(Pe,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ve(Pe,n,s,"TestLoadImage: error",!1,t),s.onabort=Ve(Pe,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ve(Pe,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Pe(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ae(e){this.l=e.$b||null,this.j=e.ib||!1}K(Ae,ks);Ae.prototype.g=function(){return new wn(this.l,this.j)};Ae.prototype.i=function(e){return function(){return e}}({});function wn(e,t){P.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ms,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(wn,P);var Ms=0;p=wn.prototype;p.open=function(e,t){if(this.readyState!=Ms)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ce(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ce(this)),this.readyState=Ms};p.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ce(this)),this.g&&(this.readyState=3,ce(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Kr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}p.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ce(this):ce(this),this.readyState==3&&Kr(this)}};p.Ua=function(e){this.g&&(this.response=this.responseText=e,Ce(this))};p.Ta=function(e){this.g&&(this.response=e,Ce(this))};p.ha=function(){this.g&&Ce(this)};function Ce(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ce(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ce(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Iu=T.JSON.parse;function V(e){P.call(this),this.headers=new jt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Gr,this.K=this.L=!1}K(V,P);var Gr="",Su=/^https?$/i,Au=["POST","PUT"];p=V.prototype;p.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jn.g(),this.C=this.u?Ti(this.u):Ti(Jn),this.g.onreadystatechange=q(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ai(this,r);return}e=n||"";const i=new jt(this.headers);s&&Rs(s,function(r,o){i.set(o,r)}),s=Va(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=ur(Au,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wr(this),0<this.B&&((this.K=Cu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.pa,this)):this.A=Ns(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ai(this,r)}};function Cu(e){return Mt&&qa()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Nu(e){return e.toLowerCase()=="content-type"}p.pa=function(){typeof ps<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B(this,"timeout"),this.abort(8))};function Ai(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Hr(e),En(e)}function Hr(e){e.D||(e.D=!0,B(e,"complete"),B(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,B(this,"complete"),B(this,"abort"),En(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),V.Z.M.call(this)};p.Fa=function(){this.s||(this.F||this.v||this.l?zr(this):this.cb())};p.cb=function(){zr(this)};function zr(e){if(e.h&&typeof ps<"u"&&(!e.C[1]||ot(e)!=4||e.ba()!=2)){if(e.v&&ot(e)==4)Ns(e.Fa,0,e);else if(B(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Vr)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Su.test(i?i.toLowerCase():"")}n=s}if(n)B(e,"complete"),B(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Hr(e)}}finally{En(e)}}}}function En(e,t){if(e.g){Wr(e);const n=e.g,s=e.C[0]?He:null;e.g=null,e.C=null,t||B(e,"ready");try{n.onreadystatechange=s}catch{}}}function Wr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}p.ba=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};p.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Iu(t)}};function Ci(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Gr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}p.Da=function(){return this.m};p.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ku(e){let t="";return ys(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Vs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ku(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function Zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Qr(e){this.za=0,this.l=[],this.h=new fn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Zt("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Zt("baseRetryDelayMs",5e3,e),this.$a=Zt("retryDelaySeedMs",1e4,e),this.Ya=Zt("forwardChannelMaxRetries",2,e),this.ra=Zt("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Ur(e&&e.concurrentRequestLimit),this.Ca=new wu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}p=Qr.prototype;p.ma=8;p.G=1;function Os(e){if(Xr(e),e.G==3){var t=e.V++,n=ut(e.F);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),Ne(e,n),t=new Ie(e,e.h,t,void 0),t.K=2,t.v=vn(ut(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=io(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Se(t)}no(e)}p.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Tn(e){e.g&&(Fs(e),e.g.cancel(),e.g=null)}function Xr(e){Tn(e),e.u&&(T.clearTimeout(e.u),e.u=null),Ze(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function qn(e,t){e.l.push(new yu(e.Za++,t)),e.G==3&&In(e)}function In(e){qr(e.i)||e.m||(e.m=!0,As(e.Ha,e),e.C=0)}function Du(e,t){return Br(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Ee(q(e.Ha,e,t),eo(e,e.C)),e.C++,!0)}p.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ie(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=cr(r),lr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Yr(this,i,t),n=ut(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Ne(this,n),this.o&&r&&Vs(n,this.o,r),Ls(this.i,i),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",t),_(n,"SID","null"),i.$=!0,ts(i,n,null)):ts(i,n,t),this.G=2}}else this.G==3&&(e?Ni(this,e):this.l.length==0||qr(this.i)||Ni(this))};function Ni(e,t){var n;t?n=t.m:n=e.V++;const s=ut(e.F);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.U),Ne(e,s),e.o&&e.s&&Vs(s,e.o,e.s),n=new Ie(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Yr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Ls(e.i,n),ts(n,s,t)}function Ne(e,t){e.j&&Rs({},function(n,s){_(t,s,n)})}function Yr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?q(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{Eu(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Jr(e){e.g||e.u||(e.Y=1,As(e.Ga,e),e.A=0)}function Ps(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Ee(q(e.Ga,e),eo(e,e.A)),e.A++,!0)}p.Ga=function(){if(this.u=null,Zr(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ee(q(this.bb,this),e)}};p.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,X(10),Tn(this),Zr(this))};function Fs(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Zr(e){e.g=new Ie(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ut(e.oa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.N?"0":"1"),_(t,"AID",e.U),Ne(e,t),_(t,"TYPE","xmlhttp"),e.o&&e.s&&Vs(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=vn(ut(t)),n.s=null,n.U=!0,_r(n,e)}p.ab=function(){this.v!=null&&(this.v=null,Tn(this),Ps(this),X(19))};function Ze(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function to(e,t){var n=null;if(e.g==t){Ze(e),Fs(e),e.g=null;var s=2}else if(ns(e.i,t))n=t.D,$r(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=gn(),B(s,new kr(s,n,t,i)),In(e)}else Jr(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Du(e,t)||s==2&&Ps(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:yt(e,5);break;case 4:yt(e,10);break;case 3:yt(e,6);break;default:yt(e,2)}}}function eo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function yt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=q(e.jb,e);n||(n=new Tt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Xe(n,"https"),vn(n)),Tu(n.toString(),s)}else X(2);e.G=0,e.j&&e.j.va(t),no(e),Xr(e)}p.jb=function(e){e?(this.h.info("Successfully pinged google.com"),X(2)):(this.h.info("Failed to ping google.com"),X(1))};function no(e){e.G=0,e.I=-1,e.j&&((jr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ms(e.l),e.l.length=0),e.j.ua())}function so(e,t,n){let s=hu(n);if(s.i!="")t&&Ye(s,t+"."+s.i),Je(s,s.m);else{const i=T.location;s=cu(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&ys(e.aa,function(i,r){_(s,r,i)}),t=e.D,n=e.sa,t&&n&&_(s,t,n),_(s,"VER",e.ma),Ne(e,s),s}function io(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new V(new Ae({ib:!0})):new V(e.qa),t.L=e.H,t}function ro(){}p=ro.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Oa=function(){};function tn(){if(Mt&&!(10<=Number(Ba)))throw Error("Environmental error: no available transport.")}tn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){P.call(this),this.g=new Qr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ze(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ze(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Gt(this)}K(nt,P);nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),As(q(e.hb,e,t))),X(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=so(e,null,e.W),In(e)};nt.prototype.close=function(){Os(this.g)};nt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,qn(this.g,t)}else this.v?(t={},t.__data__=Ss(e),qn(this.g,t)):qn(this.g,e)};nt.prototype.M=function(){this.g.j=null,delete this.j,Os(this.g),delete this.g,nt.Z.M.call(this)};function oo(e){Ds.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(oo,Ds);function ao(){bs.call(this),this.status=1}K(ao,bs);function Gt(e){this.g=e}K(Gt,ro);Gt.prototype.xa=function(){B(this.g,"a")};Gt.prototype.wa=function(e){B(this.g,new oo(e))};Gt.prototype.va=function(e){B(this.g,new ao(e))};Gt.prototype.ua=function(){B(this.g,"b")};tn.prototype.createWebChannel=tn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;pn.NO_ERROR=0;pn.TIMEOUT=8;pn.HTTP_ERROR=6;Dr.COMPLETE="complete";br.EventType=Te;Te.OPEN="a";Te.CLOSE="b";Te.ERROR="c";Te.MESSAGE="d";P.prototype.listen=P.prototype.N;V.prototype.listenOnce=V.prototype.O;V.prototype.getLastError=V.prototype.La;V.prototype.getLastErrorCode=V.prototype.Da;V.prototype.getStatus=V.prototype.ba;V.prototype.getResponseJson=V.prototype.Qa;V.prototype.getResponseText=V.prototype.ga;V.prototype.send=V.prototype.ea;var bu=function(){return new tn},Ru=function(){return gn()},Bn=pn,_u=Dr,Lu=Nt,ki={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},xu=Ae,Fe=br,Mu=V;const Di="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Ta("@firebase/firestore");function bi(){return It.logLevel}function w(e,...t){if(It.logLevel<=re.DEBUG){const n=t.map(Us);It.debug(`Firestore (${Ht}): ${e}`,...n)}}function lt(e,...t){if(It.logLevel<=re.ERROR){const n=t.map(Us);It.error(`Firestore (${Ht}): ${e}`,...n)}}function Ri(e,...t){if(It.logLevel<=re.WARN){const n=t.map(Us);It.warn(`Firestore (${Ht}): ${e}`,...n)}}function Us(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: `+e;throw lt(t),new Error(t)}function D(e,t){e||I()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends wa{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ou{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class Pu{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ht,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ht)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new Vu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return D(t===null||typeof t=="string"),new Z(t)}}class Fu{constructor(t,n,s){this.type="FirstParty",this.user=Z.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Uu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Fu(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(D(typeof n.token=="string"),this.p=n.token,new qu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qs.A=-1;class uo{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=$u(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function Vt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return z.fromMillis(Date.now())}static fromDate(t){return z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new z(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new z(0,0))}static max(){return new A(new z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ho(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return le.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof le?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class b extends le{construct(t,n,s){return new b(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new m(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new b(n)}static emptyPath(){return new b([])}}const ju=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends le{construct(t,n,s){return new tt(t,n,s)}static isValidIdentifier(t){return ju.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new m(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new m(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new m(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.fields=t,t.sort(tt.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new j(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new j(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}j.EMPTY_BYTE_STRING=new j("");const Ku=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(e){if(D(!!e),typeof e=="string"){let t=0;const n=Ku.exec(e);if(D(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:M(e.seconds),nanos:M(e.nanos)}}function M(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ot(e){return typeof e=="string"?j.fromBase64String(e):j.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lo(e){const t=e.mapValue.fields.__previous_value__;return co(t)?lo(t):t}function de(e){const t=dt(e.mapValue.fields.__local_write_time__.timestampValue);return new z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Pt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Pt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return e==null}function en(e){return e===0&&1/e==-1/0}function Hu(e){return typeof e=="number"&&Number.isInteger(e)&&!en(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(b.fromString(t))}static fromName(t){return new E(b.fromString(t).popFirst(5))}static empty(){return new E(b.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&b.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return b.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new b(t.slice()))}}function St(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?co(e)?4:zu(e)?9:10:I()}function rt(e,t){if(e===t)return!0;const n=St(e);if(n!==St(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return de(e).isEqual(de(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=dt(s.timestampValue),o=dt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ot(s.bytesValue).isEqual(Ot(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=M(s.doubleValue),o=M(i.doubleValue);return r===o?en(r)===en(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Vt(e.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(_i(r)!==_i(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rt(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function fe(e,t){return(e.values||[]).find(n=>rt(n,t))!==void 0}function Ft(e,t){if(e===t)return 0;const n=St(e),s=St(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=M(i.integerValue||i.doubleValue),a=M(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Li(e.timestampValue,t.timestampValue);case 4:return Li(de(e),de(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Ot(i),a=Ot(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=N(o[u],a[u]);if(h!==0)return h}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=N(M(i.latitude),M(r.latitude));return o!==0?o:N(M(i.longitude),M(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=Ft(o[u],a[u]);if(h)return h}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=N(a[c],h[c]);if(l!==0)return l;const g=Ft(o[a[c]],u[h[c]]);if(g!==0)return g}return N(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function Li(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=dt(e),s=dt(t),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function _t(e){return is(e)}function is(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=dt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ot(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=is(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${is(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function xi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function rs(e){return!!e&&"integerValue"in e}function Bs(e){return!!e&&"arrayValue"in e}function Mi(e){return!!e&&"nullValue"in e}function Vi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Be(e){return!!e&&"mapValue"in e}function se(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=se(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=se(e.arrayValue.values[n]);return t}return Object.assign({},e)}function zu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Be(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=se(n)}setAll(t){let n=tt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=se(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Be(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Be(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){zt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new it(se(this.value))}}function fo(e){const t=[];return zt(e.fields,(n,s)=>{const i=new tt([n]);if(Be(s)){const r=fo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ss(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new G(t,0,A.min(),A.min(),it.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,A.min(),s,0)}static newNoDocument(t,n){return new G(t,2,n,A.min(),it.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,A.min(),it.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function Wu(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=A.fromTimestamp(s===1e9?new z(n+1,0):new z(n,s));return new Ut(i,E.empty(),t)}function Qu(e){return new Ut(e.readTime,e.key,-1)}class Ut{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Ut(A.min(),E.empty(),-1)}static max(){return new Ut(A.max(),E.empty(),-1)}}function Xu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Oi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Yu(e,t,n,s,i,r,o)}function $s(e){const t=S(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+_t(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Wt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>_t(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>_t(s)).join(",")),t.P=n}return t.P}function Ju(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${_t(s.value)}`;var s}).join(", ")}]`),Wt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>_t(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>_t(n)).join(",")),`Target(${t})`}function js(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!oh(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!rt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fi(e.startAt,t.startAt)&&Fi(e.endAt,t.endAt)}function os(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Y extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new Zu(t,n,s):n==="array-contains"?new nh(t,s):n==="in"?new sh(t,s):n==="not-in"?new ih(t,s):n==="array-contains-any"?new rh(t,s):new Y(t,n,s)}static V(t,n,s){return n==="in"?new th(t,s):new eh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Ft(n,this.value)):n!==null&&St(this.value)===St(n)&&this.v(Ft(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Zu extends Y{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class th extends Y{constructor(t,n){super(t,"in",n),this.keys=go("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class eh extends Y{constructor(t,n){super(t,"not-in",n),this.keys=go("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function go(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class nh extends Y{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Bs(n)&&fe(n.arrayValue,this.value)}}class sh extends Y{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fe(this.value.arrayValue,n)}}class ih extends Y{constructor(t,n){super(t,"not-in",n)}matches(t){if(fe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fe(this.value.arrayValue,n)}}class rh extends Y{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Bs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fe(this.value.arrayValue,s))}}class nn{constructor(t,n){this.position=t,this.inclusive=n}}class ie{constructor(t,n="asc"){this.field=t,this.dir=n}}function oh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Pi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Ft(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.D=null,this.C=null,this.startAt,this.endAt}}function ah(e,t,n,s,i,r,o,a){return new ke(e,t,n,s,i,r,o,a)}function po(e){return new ke(e)}function $e(e){return!Wt(e.limit)&&e.limitType==="F"}function sn(e){return!Wt(e.limit)&&e.limitType==="L"}function mo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function yo(e){for(const t of e.filters)if(t.S())return t.field;return null}function vo(e){return e.collectionGroup!==null}function ge(e){const t=S(e);if(t.D===null){t.D=[];const n=yo(t),s=mo(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new ie(n)),t.D.push(new ie(tt.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new ie(tt.keyField(),r))}}}return t.D}function At(e){const t=S(e);if(!t.C)if(t.limitType==="F")t.C=Oi(t.path,t.collectionGroup,ge(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ge(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new ie(r.field,o))}const s=t.endAt?new nn(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new nn(t.startAt.position,!t.startAt.inclusive):null;t.C=Oi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function uh(e,t,n){return new ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Sn(e,t){return js(At(e),At(t))&&e.limitType===t.limitType}function wo(e){return`${$s(At(e))}|lt:${e.limitType}`}function as(e){return`Query(target=${Ju(At(e))}; limitType=${e.limitType})`}function Ks(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Pi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ge(n),s)||n.endAt&&!function(i,r,o){const a=Pi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ge(n),s))}(e,t)}function hh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Eo(e){return(t,n)=>{let s=!1;for(const i of ge(e)){const r=ch(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ch(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ft(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:en(t)?"-0":t}}function Io(e){return{integerValue:""+e}}function lh(e,t){return Hu(t)?Io(t):To(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this._=void 0}}function dh(e,t,n){return e instanceof rn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof pe?Ao(e,t):e instanceof me?Co(e,t):function(s,i){const r=So(s,i),o=Ui(r)+Ui(s.k);return rs(r)&&rs(s.k)?Io(o):To(s.M,o)}(e,t)}function fh(e,t,n){return e instanceof pe?Ao(e,t):e instanceof me?Co(e,t):n}function So(e,t){return e instanceof on?rs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class rn extends An{}class pe extends An{constructor(t){super(),this.elements=t}}function Ao(e,t){const n=No(t);for(const s of e.elements)n.some(i=>rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class me extends An{constructor(t){super(),this.elements=t}}function Co(e,t){let n=No(t);for(const s of e.elements)n=n.filter(i=>!rt(i,s));return{arrayValue:{values:n}}}class on extends An{constructor(t,n){super(),this.M=t,this.k=n}}function Ui(e){return M(e.integerValue||e.doubleValue)}function No(e){return Bs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function gh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof pe&&s instanceof pe||n instanceof me&&s instanceof me?Vt(n.elements,s.elements,rt):n instanceof on&&s instanceof on?rt(n.k,s.k):n instanceof rn&&s instanceof rn}(e.transform,t.transform)}class ph{constructor(t,n){this.version=t,this.transformResults=n}}class vt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new vt}static exists(t){return new vt(void 0,t)}static updateTime(t){return new vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function je(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Cn{}function mh(e,t,n){e instanceof Nn?function(s,i,r){const o=s.value.clone(),a=$i(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof De?function(s,i,r){if(!je(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=$i(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ko(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function us(e,t,n){e instanceof Nn?function(s,i,r){if(!je(s.precondition,i))return;const o=s.value.clone(),a=ji(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Bi(i),o).setHasLocalMutations()}(e,t,n):e instanceof De?function(s,i,r){if(!je(s.precondition,i))return;const o=ji(s.fieldTransforms,r,i),a=i.data;a.setAll(ko(s)),a.setAll(o),i.convertToFoundDocument(Bi(i),a).setHasLocalMutations()}(e,t,n):function(s,i){je(s.precondition,i)&&i.convertToNoDocument(A.min())}(e,t)}function yh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=So(s.transform,i||null);r!=null&&(n==null&&(n=it.empty()),n.set(s.field,r))}return n||null}function qi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vt(n,s,(i,r)=>gh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Bi(e){return e.isFoundDocument()?e.version:A.min()}class Nn extends Cn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class De extends Cn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function ko(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function $i(e,t,n){const s=new Map;D(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,fh(o,a,n[i]))}return s}function ji(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,dh(r,o,t))}return s}class vh extends Cn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class wh extends Cn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,C;function Th(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Do(e){if(e===void 0)return lt("GRPC error has no .code"),d.UNKNOWN;switch(e){case x.OK:return d.OK;case x.CANCELLED:return d.CANCELLED;case x.UNKNOWN:return d.UNKNOWN;case x.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case x.INTERNAL:return d.INTERNAL;case x.UNAVAILABLE:return d.UNAVAILABLE;case x.UNAUTHENTICATED:return d.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case x.NOT_FOUND:return d.NOT_FOUND;case x.ALREADY_EXISTS:return d.ALREADY_EXISTS;case x.PERMISSION_DENIED:return d.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case x.ABORTED:return d.ABORTED;case x.OUT_OF_RANGE:return d.OUT_OF_RANGE;case x.UNIMPLEMENTED:return d.UNIMPLEMENTED;case x.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(C=x||(x={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){zt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ho(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new F(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new F(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ue(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ue(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ue(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ue(this.root,t,this.comparator,!0)}}class Ue{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??U.RED,this.left=i??U.EMPTY,this.right=r??U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new U(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return U.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.comparator=t,this.data=new F(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ki(this.data.getIterator())}getIteratorFrom(t){return new Ki(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof $)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $(this.comparator);return n.data=t,n}}class Ki{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new F(E.comparator);function Ct(){return Ih}const Sh=new F(E.comparator);function hs(){return Sh}function $n(){return new Qt(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ah=new F(E.comparator),Ch=new $(E.comparator);function R(...e){let t=Ch;for(const n of e)t=t.add(n);return t}const Nh=new $(N);function bo(){return Nh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,be.createSynthesizedTargetChangeForCurrentChange(t,n)),new kn(A.min(),s,bo(),Ct(),R())}}class be{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new be(j.EMPTY_BYTE_STRING,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.F=i}}class Ro{constructor(t,n){this.targetId=t,this.$=n}}class _o{constructor(t,n,s=j.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Gi{constructor(){this.B=0,this.L=zi(),this.U=j.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=R(),n=R(),s=R();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new be(this.U,this.q,t,n,s)}J(){this.K=!1,this.L=zi()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class kh{constructor(t){this.nt=t,this.st=new Map,this.it=Ct(),this.rt=Hi(),this.ot=new $(N)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.$.count,i=this.wt(n);if(i){const r=i.target;if(os(r))if(s===0){const o=new E(r.path);this.ct(n,o,G.newNoDocument(o,A.min()))}else D(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&os(a.target)){const u=new E(a.target.path);this.it.get(u)!==null||this.It(o,u)||this.ct(o,u,G.newNoDocument(u,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=R();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.wt(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new kn(t,n,this.ot,this.it,s);return this.it=Ct(),this.rt=Hi(),this.ot=new $(N),i}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Gi,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new $(N),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Gi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Hi(){return new F(E.comparator)}function zi(){return new F(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Rh{constructor(t,n){this.databaseId=t,this.N=n}}function an(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lo(e,t){return e.N?t.toBase64():t.toUint8Array()}function _h(e,t){return an(e,t.toTimestamp())}function at(e){return D(!!e),A.fromTimestamp(function(t){const n=dt(t);return new z(n.seconds,n.nanos)}(e))}function Gs(e,t){return function(n){return new b(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function xo(e){const t=b.fromString(e);return D(Oo(t)),t}function cs(e,t){return Gs(e.databaseId,t.path)}function jn(e,t){const n=xo(t);if(n.get(1)!==e.databaseId.projectId)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Mo(n))}function ls(e,t){return Gs(e.databaseId,t)}function Lh(e){const t=xo(e);return t.length===4?b.emptyPath():Mo(t)}function ds(e){return new b(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Mo(e){return D(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Wi(e,t,n){return{name:cs(e,t),fields:n.value.mapValue.fields}}function xh(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.N?(D(h===void 0||typeof h=="string"),j.fromBase64String(h||"")):(D(h===void 0||h instanceof Uint8Array),j.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?d.UNKNOWN:Do(u.code);return new m(h,u.message||"")}(o);n=new _o(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=jn(e,s.document.name),r=at(s.document.updateTime),o=new it({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Ke(u,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=jn(e,s.document),r=s.readTime?at(s.readTime):A.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ke([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=jn(e,s.document),r=s.removedTargetIds||[];n=new Ke([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Eh(i),o=s.targetId;n=new Ro(o,r)}}return n}function Mh(e,t){let n;if(t instanceof Nn)n={update:Wi(e,t.key,t.value)};else if(t instanceof vh)n={delete:cs(e,t.key)};else if(t instanceof De)n={update:Wi(e,t.key,t.data),updateMask:Kh(t.fieldMask)};else{if(!(t instanceof wh))return I();n={verify:cs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof rn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof me)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof on)return{fieldPath:r.field.canonicalString(),increment:o.k};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_h(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function Vh(e,t){return e&&e.length>0?(D(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?at(s.updateTime):at(i);return r.isEqual(A.min())&&(r=at(i)),new ph(r,s.transformResults||[])}(n,t))):[]}function Oh(e,t){return{documents:[ls(e,t.path)]}}function Ph(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ls(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ls(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const h=u.map(c=>function(l){if(l.op==="=="){if(Vi(l.value))return{unaryFilter:{field:Dt(l.field),op:"IS_NAN"}};if(Mi(l.value))return{unaryFilter:{field:Dt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Vi(l.value))return{unaryFilter:{field:Dt(l.field),op:"IS_NOT_NAN"}};if(Mi(l.value))return{unaryFilter:{field:Dt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dt(l.field),op:Bh(l.op),value:l.value}}}(c));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:Dt(c.field),direction:qh(c.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.N||Wt(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Fh(e){let t=Lh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){D(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=Vo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new ie(Rt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,Wt(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,g=c.values||[];return new nn(g,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,g=c.values||[];return new nn(g,l)}(n.endAt)),ah(t,i,o,r,a,"F",u,h)}function Uh(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Vo(e){return e?e.unaryFilter!==void 0?[jh(e)]:e.fieldFilter!==void 0?[$h(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Vo(t)).reduce((t,n)=>t.concat(n)):I():[]}function qh(e){return Dh[e]}function Bh(e){return bh[e]}function Dt(e){return{fieldPath:e.canonicalString()}}function Rt(e){return tt.fromServerFormat(e.fieldPath)}function $h(e){return Y.create(Rt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function jh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Rt(e.unaryFilter.field);return Y.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Rt(e.unaryFilter.field);return Y.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rt(e.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rt(e.unaryFilter.field);return Y.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Kh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Oo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Re(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&mh(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&us(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&us(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(A.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&Vt(this.mutations,t.mutations,(n,s)=>qi(n,s))&&Vt(this.baseMutations,t.baseMutations,(n,s)=>qi(n,s))}}class Hs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){D(t.mutations.length===s.length);let i=Ah;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Hs(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,n,s,i,r=A.min(),o=A.min(),a=j.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.Jt=t}}function Xh(e){const t=Fh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?uh(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.qe=new Jh}addToCollectionParentIndex(t,n){return this.qe.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getFieldIndex(t,n){return f.resolve(null)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Jh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new $(b.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new $(b.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new qt(0)}static yn(){return new qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Gh)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.changes=new Qt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,G.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,n,s){this.ds=t,this.Bs=n,this.indexManager=s}Ls(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Us(t,n,s))}Us(t,n,s){return this.ds.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Ks(t,n){return this.ds.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Qs(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(t,n.path):vo(n)?this.Ws(t,n,s):this.zs(t,n,s)}js(t,n){return this.Ls(t,new E(n)).next(s=>{let i=hs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ws(t,n,s){const i=n.collectionGroup;let r=hs();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const u=function(h,c){return new ke(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.zs(t,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}zs(t,n,s){let i;return this.ds.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.Bs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const u=a.key;let h=i.get(u);h==null&&(h=G.newInvalidDocument(u),i=i.insert(u,h)),us(a,h,o.localWriteTime),h.isFoundDocument()||(i=i.remove(u))}}).next(()=>(i.forEach((r,o)=>{Ks(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Hs=s,this.Js=i}static Ys(t,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new zs(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{Xs(t){this.Zs=t}Qs(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(A.min())?this.ti(t,n):this.Zs.Ks(t,i).next(r=>{const o=this.ei(n,r);return($e(n)||sn(n))&&this.ni(n.limitType,o,i,s)?this.ti(t,n):(bi()<=re.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.Zs.Qs(t,n,Wu(s,-1)).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}ei(t,n){let s=new $(Eo(t));return n.forEach((i,r)=>{Ks(t,r)&&(s=s.add(r))}),s}ni(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ti(t,n){return bi()<=re.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",as(n)),this.Zs.Qs(t,n,Ut.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,n,s,i){this.persistence=t,this.si=n,this.M=i,this.ii=new F(N),this.ri=new Qt(r=>$s(r),js),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(s)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new tc(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ii))}}function sc(e,t,n,s){return new nc(e,t,n,s)}async function Po(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Bs.getAllMutationBatches(s).next(r=>(i=r,n.ai(t),n.Bs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=R();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of r){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.ci.Ks(s,u).next(h=>({hi:h,removedBatchIds:o,addedBatchIds:a}))})})}function ic(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const c=u.batch,l=c.keys();let g=f.resolve();return l.forEach(y=>{g=g.next(()=>h.getEntry(a,y)).next(v=>{const k=u.docVersions.get(y);D(k!==null),v.version.compareTo(k)<0&&(c.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))})}),g.next(()=>o.Bs.removeMutationBatch(a,c))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.ci.Ks(s,i))})}function Fo(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.fs.getLastRemoteSnapshotVersion(n))}function rc(e,t){const n=S(e),s=t.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const a=[];t.targetChanges.forEach((h,c)=>{const l=i.get(c);if(!l)return;a.push(n.fs.removeMatchingKeys(r,h.removedDocuments,c).next(()=>n.fs.addMatchingKeys(r,h.addedDocuments,c)));let g=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(c)?g=g.withResumeToken(j.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(c,g),function(y,v,k){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(l,g,h)&&a.push(n.fs.updateTargetData(r,g))});let u=Ct();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(oc(r,o,t.documentUpdates).next(h=>{u=h})),!s.isEqual(A.min())){const h=n.fs.getLastRemoteSnapshotVersion(r).next(c=>n.fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.ci.Gs(r,u)).next(()=>u)}).then(r=>(n.ii=i,r))}function oc(e,t,n){let s=R();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Ct();return n.forEach((o,a)=>{const u=i.get(o);a.isNoDocument()&&a.version.isEqual(A.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),r})}function ac(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(s,t)))}function uc(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.fs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.fs.allocateTargetId(s).next(o=>(i=new wt(t,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ii.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(s.targetId,s),n.ri.set(t,s.targetId)),s})}async function fs(e,t,n){const s=S(e),i=s.ii.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Re(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.ii=s.ii.remove(t),s.ri.delete(i.target)}function Qi(e,t,n){const s=S(e);let i=A.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=S(a),l=c.ri.get(h);return l!==void 0?f.resolve(c.ii.get(l)):c.fs.getTargetData(u,h)}(s,o,At(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.si.Qs(o,t,n?i:A.min(),n?r:R())).next(a=>(hc(s,hh(t),a),{documents:a,li:r})))}function hc(e,t,n){let s=A.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.oi.set(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,n){return f.resolve(this.wi.get(n))}saveBundleMetadata(t,n){var s;return this.wi.set(n.id,{id:(s=n).id,version:s.version,createTime:at(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.mi.get(n))}saveNamedQuery(t,n){return this.mi.set(n.name,function(s){return{name:s.name,query:Xh(s.bundledQuery),readTime:at(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.overlays=new F(E.comparator),this.gi=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.gi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.gi.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=$n(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new F((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=r.get(h.largestBatchId);c===null&&(c=$n(),r=r.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=$n(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return f.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.gi.get(i.largestBatchId).delete(s.key);this.gi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Wh(n,s));let r=this.gi.get(n);r===void 0&&(r=R(),this.gi.set(n,r)),this.gi.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.yi=new $(O.pi),this.Ii=new $(O.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,n){const s=new O(t,n);this.yi=this.yi.add(s),this.Ii=this.Ii.add(s)}Ei(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ai(new O(t,n))}Ri(t,n){t.forEach(s=>this.removeReference(s,n))}Pi(t){const n=new E(new b([])),s=new O(n,t),i=new O(n,t+1),r=[];return this.Ii.forEachInRange([s,i],o=>{this.Ai(o),r.push(o.key)}),r}bi(){this.yi.forEach(t=>this.Ai(t))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const n=new E(new b([])),s=new O(n,t),i=new O(n,t+1);let r=R();return this.Ii.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new O(t,0),s=this.yi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class O{constructor(t,n){this.key=t,this.vi=n}static pi(t,n){return E.comparator(t.key,n.key)||N(t.vi,n.vi)}static Ti(t,n){return N(t.vi,n.vi)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new $(O.pi)}checkEmpty(t){return f.resolve(this.Bs.length===0)}addMutationBatch(t,n,s,i){const r=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new zh(r,n,s,i);this.Bs.push(o);for(const a of i)this.Di=this.Di.add(new O(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.xi(s),r=i<0?0:i;return f.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(t){return f.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new O(n,0),i=new O(n,Number.POSITIVE_INFINITY),r=[];return this.Di.forEachInRange([s,i],o=>{const a=this.Ci(o.vi);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new $(N);return n.forEach(i=>{const r=new O(i,0),o=new O(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([r,o],a=>{s=s.add(a.vi)})}),f.resolve(this.Ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new O(new E(r),0);let a=new $(N);return this.Di.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.vi)),!0)},o),f.resolve(this.Ni(a))}Ni(t){const n=[];return t.forEach(s=>{const i=this.Ci(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){D(this.ki(n.batchId,"removed")===0),this.Bs.shift();let s=this.Di;return f.forEach(n.mutations,i=>{const r=new O(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Di=s})}_n(t){}containsKey(t,n){const s=new O(n,0),i=this.Di.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Bs.length,f.resolve()}ki(t,n){return this.xi(t)}xi(t){return this.Bs.length===0?0:t-this.Bs[0].batchId}Ci(t){const n=this.xi(t);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t){this.Mi=t,this.docs=new F(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mi(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=Ct();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(t,n,s){let i=Ct();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Xu(Qu(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Oi(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new gc(this)}getSize(t){return f.resolve(this.size)}}class gc extends Zh{constructor(t){super(),this.Kn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Kn.getEntry(t,n)}getAllFromCache(t,n){return this.Kn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.persistence=t,this.Fi=new Qt(n=>$s(n),js),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Ws,this.targetCount=0,this.Li=qt.gn()}forEachTarget(t,n){return this.Fi.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),f.resolve()}Tn(t){this.Fi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Li=new qt(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.Tn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Tn(n),f.resolve()}removeTargetData(t,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Fi.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Bi.Ei(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Bi.Ri(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Bi.Pi(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Bi.Vi(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,n){this.Ui={},this.overlays={},this.es=new qs(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new pc(this),this.indexManager=new Yh,this.ds=function(s){return new fc(s)}(s=>this.referenceDelegate.qi(s)),this.M=new Qh(n),this._s=new cc(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new lc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ui[t.toKey()];return s||(s=new dc(n,this.referenceDelegate),this.Ui[t.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new yc(this.es.next());return this.referenceDelegate.Ki(),s(i).next(r=>this.referenceDelegate.Gi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Qi(t,n){return f.or(Object.values(this.Ui).map(s=>()=>s.containsKey(t,n)))}}class yc extends Hh{constructor(t){super(),this.currentSequenceNumber=t}}class Qs{constructor(t){this.persistence=t,this.ji=new Ws,this.Wi=null}static zi(t){return new Qs(t)}get Hi(){if(this.Wi)return this.Wi;throw I()}addReference(t,n,s){return this.ji.addReference(s,n),this.Hi.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.ji.removeReference(s,n),this.Hi.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Hi.add(n.toString()),f.resolve()}removeTarget(t,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Hi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ki(){this.Wi=new Set}Gi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hi,s=>{const i=E.fromPath(s);return this.Ji(t,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.Wi=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ji(t,n).next(s=>{s?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(t){return 0}Ji(t,n){return f.or([()=>f.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Qi(t,n)])}}class Xi{constructor(){this.activeTargetIds=bo()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vc{constructor(){this.$r=new Xi,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,n,s){this.Br[t]=n}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Xi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{Lr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.io=n+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,n,s,i,r){const o=this.uo(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.ao(a,i,r),this.co(t,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw Ri("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}ho(t,n,s,i,r){return this.oo(t,n,s,i,r)}ao(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ht,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}uo(t,n){const s=Ec[t];return`${this.io}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,i){return new Promise((r,o)=>{const a=new Mu;a.listenOnce(_u.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bn.NO_ERROR:const h=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(h)),r(h);break;case Bn.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new m(d.DEADLINE_EXCEEDED,"Request time out"));break;case Bn.HTTP_ERROR:const c=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new m(g,l.message))}else o(new m(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new m(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}lo(t,n,s){const i=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=bu(),o=Ru(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new xu({})),this.ao(a.initMessageHeaders,n,s),Ia()||Sa()||Aa()||Ca()||Na()||ka()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");w("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let c=!1,l=!1;const g=new Tc({Wr:v=>{l?w("Connection","Not sending because WebChannel is closed:",v):(c||(w("Connection","Opening WebChannel transport."),h.open(),c=!0),w("Connection","WebChannel sending:",v),h.send(v))},zr:()=>h.close()}),y=(v,k,L)=>{v.listen(k,J=>{try{L(J)}catch(st){setTimeout(()=>{throw st},0)}})};return y(h,Fe.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),y(h,Fe.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),g.no())}),y(h,Fe.EventType.ERROR,v=>{l||(l=!0,Ri("Connection","WebChannel transport errored:",v),g.no(new m(d.UNAVAILABLE,"The operation could not be completed")))}),y(h,Fe.EventType.MESSAGE,v=>{var k;if(!l){const L=v.data[0];D(!!L);const J=L,st=J.error||((k=J[0])===null||k===void 0?void 0:k.error);if(st){w("Connection","WebChannel received error:",st);const Yt=st.status;let Jt=function(ga){const li=x[ga];if(li!==void 0)return Do(li)}(Yt),ci=st.message;Jt===void 0&&(Jt=d.INTERNAL,ci="Unknown error status: "+Yt+" with message "+st.message),l=!0,g.no(new m(Jt,ci)),h.close()}else w("Connection","WebChannel received:",L),g.so(L)}}),y(o,Lu.STAT_EVENT,v=>{v.stat===ki.PROXY?w("Connection","Detected buffering proxy"):v.stat===ki.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.eo()},0),g}}function Kn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return new Rh(e,!0)}class Uo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Yn=t,this.timerId=n,this.fo=s,this._o=i,this.wo=r,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const n=Math.floor(this.mo+this.Eo()),s=Math.max(0,Date.now()-this.po),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),t())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,n,s,i,r,o,a,u){this.Yn=t,this.Ro=s,this.Po=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Uo(t,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,t!==4?this.Do.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(lt(n.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.qo(s,i)},s=>{t(()=>{const i=new m(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ko(i)})})}qo(t,n){const s=this.Uo(this.Vo);this.stream=this.Go(t,n),this.stream.Hr(()=>{s(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{s(()=>this.Ko(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sc extends qo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Go(t,n){return this.bo.lo("Listen",t,n)}onMessage(t){this.Do.reset();const n=xh(this.M,t),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?at(r.readTime):A.min()}(t);return this.listener.Qo(n,s)}jo(t){const n={};n.database=ds(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=os(a)?{documents:Oh(i,a)}:{query:Ph(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Lo(i,r.resumeToken):r.snapshotVersion.compareTo(A.min())>0&&(o.readTime=an(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=Uh(this.M,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=ds(this.M),n.removeTarget=t,this.Fo(n)}}class Ac extends qo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,n){return this.bo.lo("Write",t,n)}onMessage(t){if(D(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const n=Vh(t.writeResults,t.commitTime),s=at(t.commitTime);return this.listener.Yo(s,n)}return D(!t.writeResults||t.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=ds(this.M),this.Fo(t)}Jo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Mh(this.M,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.M=i,this.tu=!1}eu(){if(this.tu)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.oo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(d.UNKNOWN,i.toString())})}ho(t,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ho(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(d.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class Nc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,t==="Online"&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(lt(n),this.iu=!1):w("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=r,this._u.Lr(o=>{s.enqueueAndForget(async()=>{kt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=S(a);u.fu.add(4),await Le(u),u.wu.set("Unknown"),u.fu.delete(4),await bn(u)}(this))})}),this.wu=new Nc(s,i)}}async function bn(e){if(kt(e))for(const t of e.du)await t(!0)}async function Le(e){for(const t of e.du)await t(!1)}function Bo(e,t){const n=S(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),Js(n)?Ys(n):Xt(n).xo()&&Xs(n,t))}function $o(e,t){const n=S(e),s=Xt(n);n.lu.delete(t),s.xo()&&jo(n,t),n.lu.size===0&&(s.xo()?s.Mo():kt(n)&&n.wu.set("Unknown"))}function Xs(e,t){e.mu.Z(t.targetId),Xt(e).jo(t)}function jo(e,t){e.mu.Z(t),Xt(e).Wo(t)}function Ys(e){e.mu=new kh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),Xt(e).start(),e.wu.ru()}function Js(e){return kt(e)&&!Xt(e).Co()&&e.lu.size>0}function kt(e){return S(e).fu.size===0}function Ko(e){e.mu=void 0}async function Dc(e){e.lu.forEach((t,n)=>{Xs(e,t)})}async function bc(e,t){Ko(e),Js(e)?(e.wu.au(t),Ys(e)):e.wu.set("Unknown")}async function Rc(e,t,n){if(e.wu.set("Online"),t instanceof _o&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.lu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.lu.delete(o),s.mu.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await un(e,s)}else if(t instanceof Ke?e.mu.ut(t):t instanceof Ro?e.mu._t(t):e.mu.ht(t),!n.isEqual(A.min()))try{const s=await Fo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.mu.yt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.lu.get(u);h&&i.lu.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.lu.get(a);if(!u)return;i.lu.set(a,u.withResumeToken(j.EMPTY_BYTE_STRING,u.snapshotVersion)),jo(i,a);const h=new wt(u.target,a,1,u.sequenceNumber);Xs(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await un(e,s)}}async function un(e,t,n){if(!Re(t))throw t;e.fu.add(1),await Le(e),e.wu.set("Offline"),n||(n=()=>Fo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await bn(e)})}function Go(e,t){return t().catch(n=>un(e,n,t))}async function Rn(e){const t=S(e),n=ft(t);let s=t.hu.length>0?t.hu[t.hu.length-1].batchId:-1;for(;_c(t);)try{const i=await ac(t.localStore,s);if(i===null){t.hu.length===0&&n.Mo();break}s=i.batchId,Lc(t,i)}catch(i){await un(t,i)}Ho(t)&&zo(t)}function _c(e){return kt(e)&&e.hu.length<10}function Lc(e,t){e.hu.push(t);const n=ft(e);n.xo()&&n.Ho&&n.Jo(t.mutations)}function Ho(e){return kt(e)&&!ft(e).Co()&&e.hu.length>0}function zo(e){ft(e).start()}async function xc(e){ft(e).Zo()}async function Mc(e){const t=ft(e);for(const n of e.hu)t.Jo(n.mutations)}async function Vc(e,t,n){const s=e.hu.shift(),i=Hs.from(s,t,n);await Go(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Rn(e)}async function Oc(e,t){t&&ft(e).Ho&&await async function(n,s){if(i=s.code,Th(i)&&i!==d.ABORTED){const r=n.hu.shift();ft(n).ko(),await Go(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Rn(n)}var i}(e,t),Ho(e)&&zo(e)}async function Ji(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=kt(n);n.fu.add(3),await Le(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await bn(n)}async function Pc(e,t){const n=S(e);t?(n.fu.delete(2),await bn(n)):t||(n.fu.add(2),await Le(n),n.wu.set("Unknown"))}function Xt(e){return e.gu||(e.gu=function(t,n,s){const i=S(t);return i.eu(),new Sc(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Hr:Dc.bind(null,e),Yr:bc.bind(null,e),Qo:Rc.bind(null,e)}),e.du.push(async t=>{t?(e.gu.ko(),Js(e)?Ys(e):e.wu.set("Unknown")):(await e.gu.stop(),Ko(e))})),e.gu}function ft(e){return e.yu||(e.yu=function(t,n,s){const i=S(t);return i.eu(),new Ac(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Hr:xc.bind(null,e),Yr:Oc.bind(null,e),Xo:Mc.bind(null,e),Yo:Vc.bind(null,e)}),e.du.push(async t=>{t?(e.yu.ko(),await Rn(e)):(await e.yu.stop(),e.hu.length>0&&(w("RemoteStore",`Stopping write stream with ${e.hu.length} pending writes`),e.hu=[]))})),e.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Zs(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ti(e,t){if(lt("AsyncQueue",`${t}: ${e}`),Re(e))return new m(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=hs(),this.sortedSet=new F(this.comparator)}static emptySet(t){return new Lt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Lt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.pu=new F(E.comparator)}track(t){const n=t.doc.key,s=this.pu.get(n);s?t.type!==0&&s.type===3?this.pu=this.pu.insert(n,t):t.type===3&&s.type!==1?this.pu=this.pu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pu=this.pu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pu=this.pu.remove(n):t.type===1&&s.type===2?this.pu=this.pu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):I():this.pu=this.pu.insert(n,t)}Iu(){const t=[];return this.pu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Bt{constructor(t,n,s,i,r,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Bt(t,n,Lt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.Tu=void 0,this.listeners=[]}}class Uc{constructor(){this.queries=new Qt(t=>wo(t),Sn),this.onlineState="Unknown",this.Eu=new Set}}async function qc(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Fc),i)try{r.Tu=await n.onListen(s)}catch(o){const a=ti(o,`Initialization of query '${as(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Au(n.onlineState),r.Tu&&t.Ru(r.Tu)&&ei(n)}async function Bc(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function $c(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Ru(i)&&(s=!0);o.Tu=i}}s&&ei(n)}function jc(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ei(e){e.Eu.forEach(t=>{t.next()})}class Kc{constructor(t,n,s){this.query=t,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}Ru(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Bt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),n=!0):this.Su(t,this.onlineState)&&(this.Du(t),n=!0),this.Vu=t,n}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),n=!0),n}Su(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Cu||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(t){t=Bt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this.key=t}}class Qo{constructor(t){this.key=t}}class Gc{constructor(t,n){this.query=t,this.$u=n,this.Bu=null,this.current=!1,this.Lu=R(),this.mutatedKeys=R(),this.Uu=Eo(t),this.qu=new Lt(this.Uu)}get Ku(){return this.$u}Gu(t,n){const s=n?n.Qu:new Zi,i=n?n.qu:this.qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=$e(this.query)&&i.size===this.query.limit?i.last():null,h=sn(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const g=i.get(c),y=Ks(this.query,l)?l:null,v=!!g&&this.mutatedKeys.has(g.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let L=!1;g&&y?g.data.isEqual(y.data)?v!==k&&(s.track({type:3,doc:y}),L=!0):this.ju(g,y)||(s.track({type:2,doc:y}),L=!0,(u&&this.Uu(y,u)>0||h&&this.Uu(y,h)<0)&&(a=!0)):!g&&y?(s.track({type:0,doc:y}),L=!0):g&&!y&&(s.track({type:1,doc:g}),L=!0,(u||h)&&(a=!0)),L&&(y?(o=o.add(y),r=k?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),$e(this.query)||sn(this.query))for(;o.size>this.query.limit;){const c=$e(this.query)?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{qu:o,Qu:s,ni:a,mutatedKeys:r}}ju(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const r=t.Qu.Iu();r.sort((h,c)=>function(l,g){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return y(l)-y(g)}(h.type,c.type)||this.Uu(h.doc,c.doc)),this.Wu(s);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,u=a!==this.Bu;return this.Bu=a,r.length!==0||u?{snapshot:new Bt(this.query,t.qu,i,r,t.mutatedKeys,a===0,u,!1),Hu:o}:{Hu:o}}Au(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Zi,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=R(),this.qu.forEach(s=>{this.Ju(s.key)&&(this.Lu=this.Lu.add(s.key))});const n=[];return t.forEach(s=>{this.Lu.has(s)||n.push(new Qo(s))}),this.Lu.forEach(s=>{t.has(s)||n.push(new Wo(s))}),n}Yu(t){this.$u=t.li,this.Lu=R();const n=this.Gu(t.documents);return this.applyChanges(n,!0)}Xu(){return Bt.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class Hc{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class zc{constructor(t){this.key=t,this.Zu=!1}}class Wc{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Qt(a=>wo(a),Sn),this.na=new Map,this.sa=new Set,this.ia=new F(E.comparator),this.ra=new Map,this.oa=new Ws,this.ua={},this.aa=new Map,this.ca=qt.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function Qc(e,t){const n=rl(e);let s,i;const r=n.ea.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Xu();else{const o=await uc(n.localStore,At(t));n.isPrimaryClient&&Bo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Xc(n,t,s,a==="current")}return i}async function Xc(e,t,n,s){e.la=(c,l,g)=>async function(y,v,k,L){let J=v.view.Gu(k);J.ni&&(J=await Qi(y.localStore,v.query,!1).then(({documents:Jt})=>v.view.Gu(Jt,J)));const st=L&&L.targetChanges.get(v.targetId),Yt=v.view.applyChanges(J,y.isPrimaryClient,st);return er(y,v.targetId,Yt.Hu),Yt.snapshot}(e,c,l,g);const i=await Qi(e.localStore,t,!0),r=new Gc(t,i.li),o=r.Gu(i.documents),a=be.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=r.applyChanges(o,e.isPrimaryClient,a);er(e,n,u.Hu);const h=new Hc(t,n,r);return e.ea.set(t,h),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),u.snapshot}async function Yc(e,t){const n=S(e),s=n.ea.get(t),i=n.na.get(s.targetId);if(i.length>1)return n.na.set(s.targetId,i.filter(r=>!Sn(r,t))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),$o(n.remoteStore,s.targetId),gs(n,s.targetId)}).catch(_e)):(gs(n,s.targetId),await fs(n.localStore,s.targetId,!0))}async function Jc(e,t,n){const s=ol(e);try{const i=await function(r,o){const a=S(r),u=z.now(),h=o.reduce((l,g)=>l.add(g.key),R());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.ci.Ks(l,h).next(g=>{c=g;const y=[];for(const v of o){const k=yh(v,c.get(v.key));k!=null&&y.push(new De(v.key,k,fo(k.value.mapValue),vt.exists(!0)))}return a.Bs.addMutationBatch(l,u,y,o)})).then(l=>(l.applyToLocalDocumentSet(c),{batchId:l.batchId,changes:c}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.ua[r.currentUser.toKey()];u||(u=new F(N)),u=u.insert(o,a),r.ua[r.currentUser.toKey()]=u}(s,i.batchId,n),await xe(s,i.changes),await Rn(s.remoteStore)}catch(i){const r=ti(i,"Failed to persist write");n.reject(r)}}async function Xo(e,t){const n=S(e);try{const s=await rc(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ra.get(r);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Zu=!0:i.modifiedDocuments.size>0?D(o.Zu):i.removedDocuments.size>0&&(D(o.Zu),o.Zu=!1))}),await xe(n,s,t)}catch(s){await _e(s)}}function tr(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ea.forEach((r,o)=>{const a=o.view.Au(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.Au(o)&&(u=!0)}),u&&ei(a)}(s.eventManager,t),i.length&&s.ta.Qo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Zc(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ra.get(t),r=i&&i.key;if(r){let o=new F(E.comparator);o=o.insert(r,G.newNoDocument(r,A.min()));const a=R().add(r),u=new kn(A.min(),new Map,new $(N),o,a);await Xo(s,u),s.ia=s.ia.remove(r),s.ra.delete(t),ni(s)}else await fs(s.localStore,t,!1).then(()=>gs(s,t,n)).catch(_e)}async function tl(e,t){const n=S(e),s=t.batch.batchId;try{const i=await ic(n.localStore,t);Jo(n,s,null),Yo(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await xe(n,i)}catch(i){await _e(i)}}async function el(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.Bs.lookupMutationBatch(u,o).next(c=>(D(c!==null),h=c.keys(),a.Bs.removeMutationBatch(u,c))).next(()=>a.Bs.performConsistencyCheck(u)).next(()=>a.ci.Ks(u,h))})}(s.localStore,t);Jo(s,t,n),Yo(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await xe(s,i)}catch(i){await _e(i)}}function Yo(e,t){(e.aa.get(t)||[]).forEach(n=>{n.resolve()}),e.aa.delete(t)}function Jo(e,t,n){const s=S(e);let i=s.ua[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.ua[s.currentUser.toKey()]=i}}function gs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.na.get(t))e.ea.delete(s),n&&e.ta.fa(s,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach(s=>{e.oa.containsKey(s)||Zo(e,s)})}function Zo(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);n!==null&&($o(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),ni(e))}function er(e,t,n){for(const s of n)s instanceof Wo?(e.oa.addReference(s.key,t),nl(e,s)):s instanceof Qo?(w("SyncEngine","Document no longer in limbo: "+s.key),e.oa.removeReference(s.key,t),e.oa.containsKey(s.key)||Zo(e,s.key)):I()}function nl(e,t){const n=t.key,s=n.path.canonicalString();e.ia.get(n)||e.sa.has(s)||(w("SyncEngine","New document in limbo: "+n),e.sa.add(s),ni(e))}function ni(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new E(b.fromString(t)),s=e.ca.next();e.ra.set(s,new zc(n)),e.ia=e.ia.insert(n,s),Bo(e.remoteStore,new wt(At(po(n.path)),s,2,qs.A))}}async function xe(e,t,n){const s=S(e),i=[],r=[],o=[];s.ea.isEmpty()||(s.ea.forEach((a,u)=>{o.push(s.la(u,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const c=zs.Ys(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.ta.Qo(i),await async function(a,u){const h=S(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(u,l=>f.forEach(l.Hs,g=>h.persistence.referenceDelegate.addReference(c,l.targetId,g)).next(()=>f.forEach(l.Js,g=>h.persistence.referenceDelegate.removeReference(c,l.targetId,g)))))}catch(c){if(!Re(c))throw c;w("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const g=h.ii.get(l),y=g.snapshotVersion,v=g.withLastLimboFreeSnapshotVersion(y);h.ii=h.ii.insert(l,v)}}}(s.localStore,r))}async function sl(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await Po(n.localStore,t);n.currentUser=t,function(i,r){i.aa.forEach(o=>{o.forEach(a=>{a.reject(new m(d.CANCELLED,r))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await xe(n,s.hi)}}function il(e,t){const n=S(e),s=n.ra.get(t);if(s&&s.Zu)return R().add(s.key);{let i=R();const r=n.na.get(t);if(!r)return i;for(const o of r){const a=n.ea.get(o);i=i.unionWith(a.view.Ku)}return i}}function rl(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=il.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zc.bind(null,t),t.ta.Qo=$c.bind(null,t.eventManager),t.ta.fa=jc.bind(null,t.eventManager),t}function ol(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=el.bind(null,t),t}class al{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Dn(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return sc(this.persistence,new ec,t.initialUser,this.M)}wa(t){return new mc(Qs.zi,this.M)}_a(t){return new vc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ul{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sl.bind(null,this.syncEngine),await Pc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Uc}createDatastore(t){const n=Dn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Ic(i));var i;return function(r,o,a,u){return new Cc(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>tr(this.syncEngine,a,0),o=Yi.vt()?new Yi:new wc,new kc(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,h){const c=new Wc(s,i,r,o,a,u);return h&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);w("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Le(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=uo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ti(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function ll(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Po(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function dl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await fl(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Ji(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Ji(t.remoteStore,r)),e.onlineComponents=t}async function fl(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await ll(e,new al)),e.offlineComponents}async function ta(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await dl(e,new ul)),e.onlineComponents}function gl(e){return ta(e).then(t=>t.syncEngine)}async function pl(e){const t=await ta(e),n=t.eventManager;return n.onListen=Qc.bind(null,t.syncEngine),n.onUnlisten=Yc.bind(null,t.syncEngine),n}function ml(e,t,n={}){const s=new ht;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new hl({next:l=>{r.enqueueAndForget(()=>Bc(i,c)),l.fromCache&&a.source==="server"?u.reject(new m(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new Kc(o,h,{includeMetadataChanges:!0,Cu:!0});return qc(i,c)}(await pl(e),e.asyncQueue,t,n,s)),s.promise}const nr=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e,t,n){if(!n)throw new m(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yl(e,t,n,s){if(t===!0&&s===!0)throw new m(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sr(e){if(!E.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ir(e){if(E.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function _n(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ye(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new m(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_n(e);throw new m(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new m(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new m(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,yl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rr({}),this._settingsFrozen=!1,t instanceof Pt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new m(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pt(i.options.projectId)}(t))}get app(){if(!this._app)throw new m(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new m(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ou;switch(n.type){case"gapi":const s=n.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Uu(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new m(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=nr.get(t);n&&(w("ComponentProvider","Removing Datastore"),nr.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new et(this.firestore,t,this._key)}}class Me{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Me(this.firestore,t,this._query)}}class ct extends Me{constructor(t,n,s){super(t,n,po(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new et(this.firestore,null,new E(t))}withConverter(t){return new ct(this.firestore,t,this._path)}}function Fl(e,t,...n){if(e=xt(e),ea("collection","path",t),e instanceof si){const s=b.fromString(t,...n);return ir(s),new ct(e,null,s)}{if(!(e instanceof et||e instanceof ct))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(b.fromString(t,...n));return ir(s),new ct(e.firestore,null,s)}}function vl(e,t,...n){if(e=xt(e),arguments.length===1&&(t=uo.R()),ea("doc","path",t),e instanceof si){const s=b.fromString(t,...n);return sr(s),new et(e,null,new E(s))}{if(!(e instanceof et||e instanceof ct))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(b.fromString(t,...n));return sr(s),new et(e.firestore,e instanceof ct?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Uo(this,"async_queue_retry"),this.qa=()=>{const n=Kn();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const t=Kn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const n=Kn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new ht;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ma.push(t),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!Re(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(t){const n=this.ka.then(()=>(this.Ba=!0,t().catch(s=>{this.$a=s,this.Ba=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw lt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ba=!1,s))));return this.ka=n,n}enqueueAfterDelay(t,n,s){this.Ka(),this.Ua.indexOf(t)>-1&&(n=0);const i=Zs.createAndSchedule(this,t,n,s,r=>this.ja(r));return this.Fa.push(i),i}Ka(){this.$a&&I()}verifyOperationInProgress(){}async Wa(){let t;do t=this.ka,await t;while(t!==this.ka)}za(t){for(const n of this.Fa)if(n.timerId===t)return!0;return!1}Ha(t){return this.Wa().then(()=>{this.Fa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Wa()})}Ja(t){this.Ua.push(t)}ja(t){const n=this.Fa.indexOf(t);this.Fa.splice(n,1)}}class Ln extends si{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new wl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||sa(this),this._firestoreClient.terminate()}}function Ul(e=ya()){return ma(e,"firestore").getImmediate()}function na(e){return e._firestoreClient||sa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Gu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new cl(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new m(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $t(j.fromBase64String(t))}catch(n){throw new m(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $t(j.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new m(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new m(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=/^__.*__$/;class Tl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new De(t,this.data,this.fieldMask,n,this.fieldTransforms):new Nn(t,this.data,n,this.fieldTransforms)}}function ra(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class oi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Ya(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Za({path:s,ec:!1});return i.nc(t),i}sc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Za({path:s,ec:!1});return i.Ya(),i}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return hn(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(t.length===0)throw this.rc("Document fields must not be empty");if(ra(this.Xa)&&El.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class Il{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Dn(t)}ac(t,n,s,i=!1){return new oi({Xa:t,methodName:n,uc:s,path:tt.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ai(e){const t=e._freezeSettings(),n=Dn(e._databaseId);return new Il(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oa(e,t,n,s,i,r={}){const o=e.ac(r.merge||r.mergeFields?2:0,t,n,i);ha("Data must be an object, but it was:",o,s);const a=aa(s,o);let u,h;if(r.merge)u=new ss(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const l of r.mergeFields){const g=Al(t,l,n);if(!o.contains(g))throw new m(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Nl(c,g)||c.push(g)}u=new ss(c),h=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,h=o.fieldTransforms;return new Tl(new it(a),u,h)}function Sl(e,t,n,s=!1){return ui(n,e.ac(s?4:3,t))}function ui(e,t){if(ua(e=xt(e)))return ha("Unsupported field value:",t,e),aa(e,t);if(e instanceof ia)return function(n,s){if(!ra(s.Xa))throw s.rc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.rc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ec&&t.Xa!==4)throw t.rc("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ui(o,s.ic(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lh(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=z.fromDate(n);return{timestampValue:an(s.M,i)}}if(n instanceof z){const i=new z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:an(s.M,i)}}if(n instanceof ri)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $t)return{bytesValue:Lo(s.M,n._byteString)};if(n instanceof et){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.rc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gs(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.rc(`Unsupported field value: ${_n(n)}`)}(e,t)}function aa(e,t){const n={};return ho(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zt(e,(s,i)=>{const r=ui(i,t.tc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function ua(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof z||e instanceof ri||e instanceof $t||e instanceof et||e instanceof ia)}function ha(e,t,n){if(!ua(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=_n(n);throw s==="an object"?t.rc(e+" a custom object"):t.rc(e+" "+s)}}function Al(e,t,n){if((t=xt(t))instanceof ii)return t._internalPath;if(typeof t=="string")return ca(e,t);throw hn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Cl=new RegExp("[~\\*/\\[\\]]");function ca(e,t,n){if(t.search(Cl)>=0)throw hn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ii(...t.split("."))._internalPath}catch{throw hn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function hn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new m(d.INVALID_ARGUMENT,a+e+u)}function Nl(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(hi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kl extends la{data(){return super.data()}}function hi(e,t){return typeof t=="string"?ca(e,t):t instanceof ii?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Dl extends la{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ge(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(hi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ge extends Dl{data(t={}){return super.data(t)}}class bl{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new qe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ge(this._firestore,this._userDataWriter,s.key,s,new qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ge(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ge(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Rl(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e){if(sn(e)&&e.explicitOrderBy.length===0)throw new m(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ll{}function ql(e,...t){for(const n of t)e=n._apply(e);return e}class xl extends Ll{constructor(t,n,s){super(),this.lc=t,this.fc=n,this.dc=s,this.type="where"}_apply(t){const n=ai(t.firestore),s=function(i,r,o,a,u,h,c){let l;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new m(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){ar(c,h);const y=[];for(const v of c)y.push(or(a,i,v));l={arrayValue:{values:y}}}else l=or(a,i,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||ar(c,h),l=Sl(o,r,c,h==="in"||h==="not-in");const g=Y.create(u,h,l);return function(y,v){if(v.S()){const L=yo(y);if(L!==null&&!L.isEqual(v.field))throw new m(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${L.toString()}' and '${v.field.toString()}'`);const J=mo(y);J!==null&&Ml(y,v.field,J)}const k=function(L,J){for(const st of L.filters)if(J.indexOf(st.op)>=0)return st.op;return null}(y,function(L){switch(L){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(k!==null)throw k===v.op?new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${k.toString()}' filters.`)}(i,g),g}(t._query,"where",n,t.firestore._databaseId,this.lc,this.fc,this.dc);return new Me(t.firestore,t.converter,function(i,r){const o=i.filters.concat([r]);return new ke(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(t._query,s))}}function Bl(e,t,n){const s=t,i=hi("where",e);return new xl(i,s,n)}function or(e,t,n){if(typeof(n=xt(n))=="string"){if(n==="")throw new m(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vo(t)&&n.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(b.fromString(n));if(!E.isDocumentKey(s))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return xi(e,new E(s))}if(n instanceof et)return xi(e,n._key);throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_n(n)}.`)}function ar(e,t){if(!Array.isArray(e)||e.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new m(d.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ml(e,t,n){if(!n.isEqual(t))throw new m(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{convertValue(t,n="none"){switch(St(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ot(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return zt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new ri(M(t.latitude),M(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=lo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(de(t));default:return null}}convertTimestamp(t){const n=dt(t);return new z(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=b.fromString(t);D(Oo(s));const i=new Pt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||lt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class Ol extends Vl{constructor(t){super(),this.firestore=t}convertBytes(t){return new $t(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new et(this.firestore,null,n)}}function $l(e){e=ye(e,Me);const t=ye(e.firestore,Ln),n=na(t),s=new Ol(t);return _l(e._query),ml(n,e._query).then(i=>new bl(t,s,e,i))}function jl(e,t,n){e=ye(e,et);const s=ye(e.firestore,Ln),i=da(e.converter,t,n);return fa(s,[oa(ai(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,vt.none())])}function Kl(e,t){const n=ye(e.firestore,Ln),s=vl(e),i=da(e.converter,t);return fa(n,[oa(ai(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,vt.exists(!1))]).then(()=>s)}function fa(e,t){return function(n,s){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>Jc(await gl(n),s,i)),i.promise}(na(e),t)}(function(e,t=!0){(function(n){Ht=n})(Ea),pa(new va("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Ln(i,new Pu(n.getProvider("auth-internal")),new Bu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),di(Di,"3.4.8",e),di(Di,"3.4.8","esm2017")})();export{Ul as D,vl as T,jl as a,Bl as k,Kl as l,Fl as p,$l as r,ql as x};
