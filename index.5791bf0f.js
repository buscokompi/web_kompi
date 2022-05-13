import{D as Re,r as ee,p as te}from"./index.esm2017.be1eeb82.js";import{F as ke,g as O,a as Se,_ as Te,b as ve,C as Ce,r as X,S as xe,i as Ee,c as Ae}from"./fbinit.b2d12662.js";/**
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
 */const ne="firebasestorage.googleapis.com",re="storageBucket",Pe=2*60*1e3,Ue=10*60*1e3;/**
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
 */class u extends ke{constructor(e,n){super(D(e),`Firebase Storage: ${n} (${D(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}_codeEquals(e){return D(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function D(t){return"storage/"+t}function $(){const t="An unknown error occurred, please check the error payload for server response.";return new u("unknown",t)}function Ie(t){return new u("object-not-found","Object '"+t+"' does not exist.")}function Oe(t){return new u("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Be(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u("unauthenticated",t)}function Le(){return new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function De(t){return new u("unauthorized","User does not have permission to access '"+t+"'.")}function Fe(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function qe(){return new u("canceled","User canceled the upload/download.")}function Me(t){return new u("invalid-url","Invalid URL '"+t+"'.")}function Ne(t){return new u("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function $e(){return new u("no-default-bucket","No default bucket found. Did you set the '"+re+"' property when initializing the app?")}function He(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function je(){return new u("no-download-url","The given file does not have any download URLs.")}function N(t){return new u("invalid-argument",t)}function se(){return new u("app-deleted","The Firebase app was deleted.")}function ze(t){return new u("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(t,e){return new u("invalid-format","String does not match format '"+t+"': "+e)}function E(t){throw new u("internal-error","Internal error: "+t)}/**
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
 */class _{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_.makeFromUrl(e,n)}catch{return new _(e,"")}if(r.path==="")return r;throw Ne(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+s+i,"i"),a={bucket:1,path:3};function l(g){g.path_=decodeURIComponent(g.path)}const d="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${d}/b/${s}/o${f}`,"i"),w={bucket:1,path:3},C=n===ne?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",x=new RegExp(`^https?://${C}/${s}/${p}`,"i"),y=[{regex:c,indices:a,postModify:o},{regex:b,indices:w,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let g=0;g<y.length;g++){const P=y[g],B=P.regex.exec(e);if(B){const ye=B[P.indices.bucket];let L=B[P.indices.path];L||(L=""),r=new _(ye,L),P.postModify(r);break}}if(r==null)throw Me(e);return r}}class We{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Xe(t,e,n){let r=1,s=null,o=null,i=!1,c=0;function a(){return c===2}let l=!1;function d(...p){l||(l=!0,e.apply(null,p))}function m(p){s=setTimeout(()=>{s=null,t(b,a())},p)}function f(){o&&clearTimeout(o)}function b(p,...x){if(l){f();return}if(p){f(),d.call(null,p,...x);return}if(a()||i){f(),d.call(null,p,...x);return}r<64&&(r*=2);let y;c===1?(c=2,y=0):y=(r+Math.random())*1e3,m(y)}let w=!1;function C(p){w||(w=!0,f(),!l&&(s!==null?(p||(c=2),clearTimeout(s),m(0)):p||(c=1)))}return m(0),o=setTimeout(()=>{i=!0,C(!0)},n),C}function Ke(t){t(!1)}/**
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
 */function Ge(t){return t!==void 0}function Ve(t){return typeof t=="object"&&!Array.isArray(t)}function H(t){return typeof t=="string"||t instanceof String}function K(t){return j()&&t instanceof Blob}function j(){return typeof Blob<"u"}function G(t,e,n,r){if(r<e)throw N(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw N(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function z(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function oe(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var T;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(T||(T={}));/**
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
 */class Ye{constructor(e,n,r,s,o,i,c,a,l,d,m){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,b)=>{this.resolve_=f,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new U(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=c=>{const a=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const c=o.getErrorCode()===T.NO_ERROR,a=o.getStatus();if(!c||this.isRetryStatusCode_(a)){const d=o.getErrorCode()===T.ABORT;r(!1,new U(!1,null,d));return}const l=this.successCodes_.indexOf(a)!==-1;r(!0,new U(l,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());Ge(a)?o(a):o()}catch(a){i(a)}else if(c!==null){const a=$();a.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,a)):i(a)}else if(s.canceled){const a=this.appDelete_?se():qe();i(a)}else{const a=Fe();i(a)}};this.canceled_?n(!1,new U(!1,null,!0)):this.backoffId_=Xe(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ke(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||o}}class U{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Je(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ze(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qe(t,e){e&&(t["X-Firebase-GMPID"]=e)}function et(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function tt(t,e,n,r,s,o){const i=oe(t.urlParams),c=t.url+i,a=Object.assign({},t.headers);return Qe(a,e),Je(a,n),Ze(a,o),et(a,r),new Ye(c,t.method,a,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
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
 */function nt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rt(...t){const e=nt();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(j())return new Blob(t);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function st(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ot(t){return atob(t)}/**
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
 */const R={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(e,n){this.data=e,this.contentType=n||null}}function it(t,e){switch(t){case R.RAW:return new F(ie(e));case R.BASE64:case R.BASE64URL:return new F(ae(t,e));case R.DATA_URL:return new F(ct(e),lt(e))}throw $()}function ie(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch{throw A(R.DATA_URL,"Malformed data URL.")}return ie(e)}function ae(t,e){switch(t){case R.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw A(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case R.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw A(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ot(e)}catch{throw A(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ce{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw A(R.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ut(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ct(t){const e=new ce(t);return e.base64?ae(R.BASE64,e.rest):at(e.rest)}function lt(t){return new ce(t).contentType}function ut(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class k{constructor(e,n){let r=0,s="";K(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(K(this.data_)){const r=this.data_,s=st(r,e,n);return s===null?null:new k(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new k(r,!0)}}static getBlob(...e){if(j()){const n=e.map(r=>r instanceof k?r.data_:r);return new k(rt.apply(null,n))}else{const n=e.map(i=>H(i)?it(R.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)s[o++]=i[c]}),new k(s,!0)}}uploadData(){return this.data_}}/**
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
 */function le(t){let e;try{e=JSON.parse(t)}catch{return null}return Ve(e)?e:null}/**
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
 */function ht(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dt(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ue(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ft(t,e){return e}class h{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ft}}let I=null;function pt(t){return!H(t)||t.length<2?t:ue(t)}function he(){if(I)return I;const t=[];t.push(new h("bucket")),t.push(new h("generation")),t.push(new h("metageneration")),t.push(new h("name","fullPath",!0));function e(o,i){return pt(i)}const n=new h("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new h("size");return s.xform=r,t.push(s),t.push(new h("timeCreated")),t.push(new h("updated")),t.push(new h("md5Hash",null,!0)),t.push(new h("cacheControl",null,!0)),t.push(new h("contentDisposition",null,!0)),t.push(new h("contentEncoding",null,!0)),t.push(new h("contentLanguage",null,!0)),t.push(new h("contentType",null,!0)),t.push(new h("metadata","customMetadata",!0)),I=t,I}function gt(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new _(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function mt(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return gt(r,t),r}function de(t,e,n){const r=le(e);return r===null?null:mt(t,r,n)}function _t(t,e,n,r){const s=le(e);if(s===null||!H(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(l=>{const d=t.bucket,m=t.fullPath,f="/b/"+i(d)+"/o/"+i(m),b=z(f,n,r),w=oe({alt:"media",token:l});return b+w})[0]}function bt(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class fe{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pe(t){if(!t)throw $()}function wt(t,e){function n(r,s){const o=de(t,s,e);return pe(o!==null),o}return n}function yt(t,e){function n(r,s){const o=de(t,s,e);return pe(o!==null),_t(o,s,t.host,t._protocol)}return n}function ge(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Le():s=Be():n.getStatus()===402?s=Oe(t.bucket):n.getStatus()===403?s=De(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function Rt(t){const e=ge(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Ie(t.path)),o.serverResponse=s.serverResponse,o}return n}function kt(t,e,n){const r=e.fullServerUrl(),s=z(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,c=new fe(s,o,yt(t,n),i);return c.errorHandler=Rt(e),c}function St(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Tt(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=St(null,e)),r}function vt(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let y="";for(let g=0;g<2;g++)y=y+Math.random().toString().slice(2);return y}const a=c();i["Content-Type"]="multipart/related; boundary="+a;const l=Tt(e,r,s),d=bt(l,n),m="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+a+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+a+"--",b=k.getBlob(m,r,f);if(b===null)throw He();const w={name:l.fullPath},C=z(o,t.host,t._protocol),p="POST",x=t.maxUploadRetryTime,S=new fe(C,p,wt(t,n),x);return S.urlParams=w,S.headers=i,S.body=b.uploadData(),S.errorHandler=ge(e),S}class Ct{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=T.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=T.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=T.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw E("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw E("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xt extends Ct{initXhr(){this.xhr_.responseType="text"}}function me(){return new xt}/**
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
 */class v{constructor(e,n){this._service=e,n instanceof _?this._location=n:this._location=_.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new v(e,n)}get root(){const e=new _(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ue(this._location.path)}get storage(){return this._service}get parent(){const e=ht(this._location.path);if(e===null)return null;const n=new _(this._location.bucket,e);return new v(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ze(e)}}function Et(t,e,n){t._throwIfRoot("uploadBytes");const r=vt(t.storage,t._location,he(),new k(e,!0),n);return t.storage.makeRequestWithTokens(r,me).then(s=>({metadata:s,ref:t}))}function At(t){t._throwIfRoot("getDownloadURL");const e=kt(t.storage,t._location,he());return t.storage.makeRequestWithTokens(e,me).then(n=>{if(n===null)throw je();return n})}function Pt(t,e){const n=dt(t._location.path,e),r=new _(t._location.bucket,n);return new v(t.storage,r)}/**
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
 */function Ut(t){return/^[A-Za-z]+:\/\//.test(t)}function It(t,e){return new v(t,e)}function _e(t,e){if(t instanceof W){const n=t;if(n._bucket==null)throw $e();const r=new v(n,n._bucket);return e!=null?_e(r,e):r}else return e!==void 0?Pt(t,e):t}function Ot(t,e){if(e&&Ut(e)){if(t instanceof W)return It(t,e);throw N("To use ref(service, url), the first argument must be a Storage instance.")}else return _e(t,e)}function V(t,e){const n=e?.[re];return n==null?null:_.makeFromBucketSpec(n,t)}class W{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=ne,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pe,this._maxUploadRetryTime=Ue,this._requests=new Set,s!=null?this._bucket=_.makeFromBucketSpec(s,this._host):this._bucket=V(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_.makeFromBucketSpec(this._url,e):this._bucket=V(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new v(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new We(se());{const o=tt(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Y="@firebase/storage",J="0.9.5";/**
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
 */const be="storage";function nn(t,e,n){return t=O(t),Et(t,e,n)}function Bt(t){return t=O(t),At(t)}function Lt(t,e){return t=O(t),Ot(t,e)}function Dt(t=Se(),e){return t=O(t),Te(t,be).getImmediate({identifier:e})}function Ft(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new W(n,r,s,e,xe)}function qt(){ve(new Ce(be,Ft,"PUBLIC").setMultipleInstances(!0)),X(Y,J,""),X(Y,J,"esm2017")}qt();const Mt=Ee(),we=Re(),Nt=Dt(Mt),$t=Ae(),Z=document.querySelector(".display"),Q=document.querySelector(".login"),Ht=document.querySelector(".profile-name"),q=document.getElementsByClassName("card"),jt=document.querySelector(".group");let M="";Jt();$t.onAuthStateChanged(function(t){t?(Z.style.display="grid",Q.style.display="none",Vt(t.email)):(Z.style.display="none",Q.style.display="flex")});const zt=document.querySelectorAll(".burger-img");zt.forEach(t=>{t.addEventListener("click",Wt)});function Wt(){const t=document.querySelector(".burger"),e=document.querySelector(".burger-img");t.classList.toggle("active"),e.classList.toggle("active")}const Xt=document.querySelectorAll(".display");Xt.forEach(t=>{t.addEventListener("click",Kt)});function Kt(){document.querySelector(".display").classList.toggle("active")}const Gt=document.querySelectorAll(".question");Gt.forEach(t=>{t.addEventListener("click",e=>{const n=document.querySelector(".question.active");n&&n!==t&&(n.classList.toggle("active"),n.nextElementSibling.style.maxHeight=0),t.classList.toggle("active");const r=t.nextElementSibling;t.classList.contains("active")?r.style.maxHeight=r.scrollHeight+"px":r.style.maxHeight=0})});async function Vt(t){const e=await ee(te(we,"usuarios"));let n="";e.forEach(r=>{r.id===t&&(n=r.data().name+" "+r.data().surname)}),n===""&&(n=t),Ht.textContent=n}class Yt{constructor(e,n,r,s,o,i,c,a,l,d,m,f,b,w){this.id=e,this.url=n,this.urlfb=r,this.name=s,this.race=o,this.location=i,this.species=c,this.gender=a,this.age=l,this.size=d,this.color=m,this.vaccination=f,this.sterilization=b,this.certificationppp=w}}async function Jt(){const t=await ee(te(we,"animals")),e=[];t.forEach(n=>{if(e.length<=4){const r=new Yt(n.id,"",n.data().Imagen1,n.data().Nombre,n.data().Raza,n.data().Ubicacion,n.data().Especie,n.data().Sexo,n.data().Edad,n.data().Tamano,n.data().Color,n.data().Vacunacion,n.data().Esterilizacion,n.data().Certificado_ppp);e.push(r)}}),console.log();for(let n=0;n<e.length;n++)await Bt(Lt(Nt,e[n].urlfb)).then(r=>{e[n].url=r,Qt(n,e)}).catch(r=>{console.log(r)});Zt()}function Zt(){for(let t=0;t<q.length;t++){const e=q[t].getAttribute("data-value");q[t].addEventListener("click",()=>{window.location.href=`../animal-card-info.html?id=${e}`})}}function Qt(t,e){t===4?M+=`<div class="card-extra">
              <img src="./assets/icons/icono_logo_blanco.svg" alt="Kompi Logo" width="88" height="88">
              <p><span>+315 mascotas</span></p>
              <p>disponibles en kompi</p>
              <div class="footer">
                <a class="button" href="./filter-animals.html">Ver m\xE1s</a>
              </div>
            </div>`:M+=`<div class="card" data-value="${e[t].id}">
              <div class ="img-container">
                <img src="${e[t].url}" alt="mascota">
              </div>
              <h3 class="name">${e[t].name}</h3>
              <p><img src="./assets/icons/icono_logo_negro.svg" alt="">${e[t].location}</p>
            </div>`,jt.innerHTML=M}export{Bt as a,Dt as g,Lt as r,nn as u};
