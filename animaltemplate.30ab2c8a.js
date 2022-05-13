import"./modulepreload-polyfill.6874861d.js";import{b as Ge,r as oe,_ as ze,a as Ke,g as Ie,C as Qe,F as He,d as Ye,L as te,S as Xe,v as We,c as Je}from"./fbinit.b2d12662.js";import{g as Ze,a as et,r as tt}from"./index.5791bf0f.js";import"./index.esm2017.be1eeb82.js";/**
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
 */class w{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}w.UNAUTHENTICATED=new w(null),w.GOOGLE_CREDENTIALS=new w("google-credentials-uid"),w.FIRST_PARTY=new w("first-party-uid"),w.MOCK_USER=new w("mock-user");/**
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
 */let L="9.6.11";/**
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
 */const P=new Ye("@firebase/firestore");function B(n,...e){if(P.logLevel<=te.DEBUG){const t=e.map(re);P.debug(`Firestore (${L}): ${n}`,...t)}}function ne(n,...e){if(P.logLevel<=te.ERROR){const t=e.map(re);P.error(`Firestore (${L}): ${n}`,...t)}}function nt(n,...e){if(P.logLevel<=te.WARN){const t=e.map(re);P.warn(`Firestore (${L}): ${n}`,...t)}}function re(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function N(n="Unexpected state"){const e=`FIRESTORE (${L}) INTERNAL ASSERTION FAILED: `+n;throw ne(e),new Error(e)}function g(n,e){n||N()}function G(n,e){return n}/**
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
 */const ue="ok",rt="cancelled",R="unknown",h="invalid-argument",it="deadline-exceeded",st="not-found",at="permission-denied",Q="unauthenticated",ot="resource-exhausted",F="failed-precondition",ut="aborted",ct="out-of-range",Ve="unimplemented",lt="internal",ht="unavailable";class c extends He{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(w.UNAUTHENTICATED))}shutdown(){}}class ft{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(g(typeof e.accessToken=="string"),new dt(e.accessToken,new w(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class pt{constructor(e,t,r){this.type="FirstParty",this.user=w.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class gt{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new pt(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(w.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yt{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wt{constructor(e){this.u=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(g(typeof e.token=="string"),new yt(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class St{constructor(e,t,r,i,s,a,u,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.useFetchStreams=o}}class k{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new k("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof k&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class q{constructor(e,t,r){t===void 0?t=0:t>e.length&&N(),r===void 0?r=e.length-t:r>e.length-t&&N(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return q.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class f extends q{construct(e,t,r){return new f(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new c(h,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new f(t)}static emptyPath(){return new f([])}}const vt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class b extends q{construct(e,t,r){return new b(e,t,r)}static isValidIdentifier(e){return vt.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),b.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new b(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new c(h,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new c(h,"Path has trailing escape character: "+e);const o=e[i+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new c(h,"Path has invalid escape sequence: "+e);r+=o,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new c(h,"Unterminated ` in path: "+e);return new b(t)}static emptyPath(){return new b([])}}/**
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
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(f.fromString(e))}static fromName(e){return new S(f.fromString(e).popFirst(5))}static empty(){return new S(f.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&f.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return f.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new f(e.slice()))}}/**
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
 */function Ce(n,e,t){if(!t)throw new c(h,`Function ${n}() cannot be called with an empty ${e}.`)}function ce(n){if(!S.isDocumentKey(n))throw new c(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function le(n){if(S.isDocumentKey(n))throw new c(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bt(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":N()}function Ne(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new c(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bt(n);throw new c(h,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function De(n){return n==null}function he(n){return n===0&&1/n==-1/0}/**
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
 */const _t={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var de,l;function me(n){if(n===void 0)return ne("RPC_ERROR","HTTP error has no status"),R;switch(n){case 200:return ue;case 400:return F;case 401:return Q;case 403:return at;case 404:return st;case 409:return ut;case 416:return ct;case 429:return ot;case 499:return rt;case 500:return R;case 501:return Ve;case 503:return ht;case 504:return it;default:return n>=200&&n<300?ue:n>=400&&n<500?F:n>=500&&n<600?lt:R}}/**
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
 */(l=de||(de={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";class Tt extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,r,i,s){const a=this.p(e,t);B("RestConnection","Sending: ",a,r);const u={};return this.g(u,i,s),this.v(e,a,u,r).then(o=>(B("RestConnection","Received: ",o),o),o=>{throw nt("RestConnection",`${e} failed with error: `,o,"url: ",a,"request:",r),o})}T(e,t,r,i,s){return this.m(e,t,r,i,s)}g(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+L,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}p(e,t){const r=_t[e];return`${this.h}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,r,i){const s=JSON.stringify(i);let a;try{a=await this.I(t,{method:"POST",headers:r,body:s})}catch(u){throw new c(me(u.status),"Request failed with error: "+u.statusText)}if(!a.ok)throw new c(me(a.status),"Request failed with error: "+a.statusText);return a.json()}}/**
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
 */function Et(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class At{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Et(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function U(n,e){return n<e?-1:n>e?1:0}function It(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class A{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new c(h,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new c(h,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new c(h,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new c(h,"Timestamp seconds out of range: "+e)}static now(){return A.fromMillis(Date.now())}static fromDate(e){return A.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new A(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?U(this.nanoseconds,e.nanoseconds):U(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _(e)}static min(){return new _(new A(0,0))}static max(){return new _(new A(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function fe(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ie(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class I{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new I(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new I(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return U(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}I.EMPTY_BYTE_STRING=new I("");const Vt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $(n){if(g(!!n),typeof n=="string"){let e=0;const t=Vt.exec(n);if(g(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:y(n.seconds),nanos:y(n.nanos)}}function y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function H(n){return typeof n=="string"?I.fromBase64String(n):I.fromUint8Array(n)}/**
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
 */function Pe(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fe(n){const e=n.mapValue.fields.__previous_value__;return Pe(e)?Fe(e):e}function Y(n){const e=$(n.mapValue.fields.__local_write_time__.timestampValue);return new A(e.seconds,e.nanos)}/**
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
 */function X(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pe(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9:10:N()}function W(n,e){if(n===e)return!0;const t=X(n);if(t!==X(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Y(n).isEqual(Y(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=$(r.timestampValue),a=$(i.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return H(r.bytesValue).isEqual(H(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return y(r.geoPointValue.latitude)===y(i.geoPointValue.latitude)&&y(r.geoPointValue.longitude)===y(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return y(r.integerValue)===y(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=y(r.doubleValue),a=y(i.doubleValue);return s===a?he(s)===he(a):isNaN(s)&&isNaN(a)}return!1}(n,e);case 9:return It(n.arrayValue.values||[],e.arrayValue.values||[],W);case 10:return function(r,i){const s=r.mapValue.fields||{},a=i.mapValue.fields||{};if(fe(s)!==fe(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!W(s[u],a[u])))return!1;return!0}(n,e);default:return N()}}function pe(n){return!!n&&"nullValue"in n}function ge(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function K(n){return!!n&&"mapValue"in n}function O(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ie(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=O(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=O(n.arrayValue.values[t]);return e}return Object.assign({},n)}class T{constructor(e){this.value=e}static empty(){return new T({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!K(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=O(t)}setAll(e){let t=b.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const o=this.getFieldsMap(t);this.applyChanges(o,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=O(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());K(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return W(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];K(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ie(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new T(O(this.value))}}/**
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
 */class v{constructor(e,t,r,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new v(e,0,_.min(),_.min(),T.empty(),0)}static newFoundDocument(e,t,r){return new v(e,1,t,_.min(),r,0)}static newNoDocument(e,t){return new v(e,2,t,_.min(),T.empty(),0)}static newUnknownDocument(e,t){return new v(e,3,t,_.min(),T.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=T.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=T.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof v&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new v(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ct{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.P=null}}function ye(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Ct(n,e,t,r,i,s,a)}class we{constructor(e,t){this.position=e,this.inclusive=t}}class M{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class Nt{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=o,this.$=null,this.S=null,this.startAt,this.endAt}}function Se(n){return!De(n.limit)&&n.limitType==="L"}function Dt(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Pt(n){for(const e of n.filters)if(e.N())return e.field;return null}function ve(n){const e=G(n);if(e.$===null){e.$=[];const t=Pt(e),r=Dt(e);if(t!==null&&r===null)t.isKeyField()||e.$.push(new M(t)),e.$.push(new M(b.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.$.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new M(b.keyField(),s))}}}return e.$}function Ft(n){const e=G(n);if(!e.S)if(e.limitType==="F")e.S=ye(e.path,e.collectionGroup,ve(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of ve(e)){const a=s.dir==="desc"?"asc":"desc";t.push(new M(s.field,a))}const r=e.endAt?new we(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new we(e.startAt.position,!e.startAt.inclusive):null;e.S=ye(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.S}/**
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
 */const kt=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lt=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Rt{constructor(e,t){this.databaseId=e,this.F=t}}function J(n){return g(!!n),_.fromTimestamp(function(e){const t=$(e);return new A(t.seconds,t.nanos)}(n))}function ke(n,e){return function(t){return new f(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Ot(n,e){return ke(n.databaseId,e.path)}function Z(n,e){const t=function(i){const s=f.fromString(i);return g(Le(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new c(h,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new c(h,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new S((g((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function be(n,e){return ke(n.databaseId,e)}function xt(n){return new f(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qt(n,e){return"found"in e?function(t,r){g(!!r.found),r.found.name,r.found.updateTime;const i=Z(t,r.found.name),s=J(r.found.updateTime),a=new T({mapValue:{fields:r.found.fields}});return v.newFoundDocument(i,s,a)}(n,e):"missing"in e?function(t,r){g(!!r.missing),g(!!r.readTime);const i=Z(t,r.missing),s=J(r.readTime);return v.newNoDocument(i,s)}(n,e):N()}function Ut(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=be(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=be(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(o){if(o.length===0)return;const d=o.map(V=>function(m){if(m.op==="=="){if(ge(m.value))return{unaryFilter:{field:D(m.field),op:"IS_NAN"}};if(pe(m.value))return{unaryFilter:{field:D(m.field),op:"IS_NULL"}}}else if(m.op==="!="){if(ge(m.value))return{unaryFilter:{field:D(m.field),op:"IS_NOT_NAN"}};if(pe(m.value))return{unaryFilter:{field:D(m.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:D(m.field),op:Mt(m.op),value:m.value}}}(V));return d.length===1?d[0]:{compositeFilter:{op:"AND",filters:d}}}(e.filters);i&&(t.structuredQuery.where=i);const s=function(o){if(o.length!==0)return o.map(d=>function(V){return{field:D(V.field),direction:$t(V.dir)}}(d))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const a=function(o,d){return o.F||De(d)?d:{value:d}}(n,e.limit);var u;return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(t.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),t}function $t(n){return kt[n]}function Mt(n){return Lt[n]}function D(n){return{fieldPath:n.canonicalString()}}function Le(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Bt(n){return new Rt(n,!0)}/**
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
 */class jt extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=r,this.q=i,this.J=!1}X(){if(this.J)throw new c(F,"The client has already been terminated.")}m(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.K.m(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Q&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new c(R,i.toString())})}T(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.K.T(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Q&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new c(R,i.toString())})}terminate(){this.J=!0}}async function Gt(n,e){const t=G(n),r=xt(t.q)+"/documents",i={documents:e.map(o=>Ot(t.q,o))},s=await t.T("BatchGetDocuments",r,i),a=new Map;s.forEach(o=>{const d=qt(t.q,o);a.set(d.key.toString(),d)});const u=[];return e.forEach(o=>{const d=a.get(o.toString());g(!!d),u.push(d)}),u}async function zt(n,e){const t=G(n),r=Ut(t.q,Ft(e));return(await t.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,a,u){const o=Z(s,a.name),d=J(a.updateTime),V=new T({mapValue:{fields:a.fields}}),m=v.newFoundDocument(o,d,V);return u&&m.setHasCommittedMutations(),u?m.setHasCommittedMutations():m}(t.q,i.document,void 0))}/**
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
 */const x=new Map;function Re(n){if(n._terminated)throw new c(F,"The client has already been terminated.");if(!x.has(n)){B("ComponentProvider","Initializing Datastore");const s=function(o){return new Tt(o,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,i=n._freezeSettings(),new St(e,t,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),a=Bt(n._databaseId),u=function(o,d,V,m){return new jt(o,d,V,m)}(n._authCredentials,n._appCheckCredentials,s,a);x.set(n,u)}var e,t,r,i;/**
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
*/return x.get(n)}class _e{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new c(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new c(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,s,a){if(i===!0&&a===!0)throw new c(h,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class se{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _e({}),this._settingsFrozen=!1,e instanceof k?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new c(h,'"projectId" not provided in firebase.initializeApp.');return new k(i.options.projectId)}(e))}get app(){if(!this._app)throw new c(F,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new c(F,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _e(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new mt;switch(t.type){case"gapi":const r=t.client;return g(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new gt(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new c(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=x.get(e);t&&(B("ComponentProvider","Removing Datastore"),x.delete(e),t.terminate())}(this),Promise.resolve()}}function Kt(n=Ke()){return ze(n,"firestore/lite").getImmediate()}/**
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
 */class E{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new C(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new E(this.firestore,e,this._key)}}class z{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new z(this.firestore,e,this._query)}}class C extends z{constructor(e,t,r){super(e,t,new Nt(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new E(this.firestore,null,new S(e))}withConverter(e){return new C(this.firestore,e,this._path)}}function Qt(n,e,...t){if(n=Ie(n),Ce("collection","path",e),n instanceof se){const r=f.fromString(e,...t);return le(r),new C(n,null,r)}{if(!(n instanceof E||n instanceof C))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(f.fromString(e,...t));return le(r),new C(n.firestore,null,r)}}function Oe(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=At.R()),Ce("doc","path",e),n instanceof se){const r=f.fromString(e,...t);return ce(r),new E(n,null,new S(r))}{if(!(n instanceof E||n instanceof C))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(f.fromString(e,...t));return ce(r),new E(n.firestore,n instanceof C?n.converter:null,new S(r))}}/**
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
 */class xe{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new c(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new b(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class j{constructor(e){this._byteString=e}static fromBase64String(e){try{return new j(I.fromBase64String(e))}catch(t){throw new c(h,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new j(I.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new c(h,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new c(h,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return U(this._lat,e._lat)||U(this._long,e._long)}}const Yt=new RegExp("[~\\*/\\[\\]]");function Xt(n,e,t){if(e.search(Yt)>=0)throw Te(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xe(...e.split("."))._internalPath}catch{throw Te(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Te(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let o="";return(s||a)&&(o+=" (found",s&&(o+=` in field ${r}`),a&&(o+=` in document ${i}`),o+=")"),new c(h,u+n+o)}/**
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
 */class qe{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new E(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ue(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ue extends qe{data(){return super.data()}}class Wt{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Jt(n,e){return typeof e=="string"?Xt(n,e):e instanceof xe?e._internalPath:e._delegate._internalPath}class $e extends class{convertValue(e,t="none"){switch(X(e)){case 0:return null;case 1:return e.booleanValue;case 2:return y(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(H(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw N()}}convertObject(e,t){const r={};return ie(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ht(y(e.latitude),y(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fe(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Y(e));default:return null}}convertTimestamp(e){const t=$(e);return new A(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=f.fromString(e);g(Le(r));const i=new k(r.get(1),r.get(3)),s=new S(r.popFirst(5));return i.isEqual(t)||ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new j(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new E(this.firestore,null,t)}}function Me(n){const e=Re((n=Ne(n,E)).firestore),t=new $e(n.firestore);return Gt(e,[n._key]).then(r=>{g(r.length===1);const i=r[0];return new qe(n.firestore,t,n._key,i.isFoundDocument()?i:null,n.converter)})}function Zt(n){(function(r){if(Se(r)&&r.explicitOrderBy.length===0)throw new c(Ve,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Ne(n,z))._query);const e=Re(n.firestore),t=new $e(n.firestore);return zt(e,n._query).then(r=>{const i=r.map(s=>new Ue(n.firestore,t,s.key,s,n.converter));return Se(n._query)&&i.reverse(),new Wt(n,i)})}(function(n){L=n})(`${Xe}_lite`),Ge(new Qe("firestore/lite",(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),r=new se(t,new ft(n.getProvider("auth-internal")),new wt(n.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),oe("firestore-lite","3.4.8",""),oe("firestore-lite","3.4.8","esm2017");const en=new URL(location.href),ee=en.searchParams.get("id");console.log(ee);function tn(){return We({apiKey:"AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",authDomain:"web-kompi.firebaseapp.com",projectId:"web-kompi",storageBucket:"web-kompi.appspot.com",messagingSenderId:"556298514839",appId:"1:556298514839:web:92e508e18c5685e99694d2",measurementId:"G-93MGP34YQN"})}const ae=tn(),nn=Ze(ae),Be=Kt(ae),rn=Je(),Ee=document.querySelector(".display"),Ae=document.querySelector(".login"),sn=document.querySelector(".profile-name");rn.onAuthStateChanged(function(n){n?(Ee.style.display="grid",Ae.style.display="none",En(n.email)):(Ee.style.display="none",Ae.style.display="flex")});let p=await Me(Oe(Be,"animals/aOXbYmSuDhJYxMdovnyC"));ee&&(p=await Me(Oe(Be,`animals/${ee}`)),console.log(p));const an=document.querySelector(".img1");document.querySelector(".img2");const on=document.querySelector(".info .name"),un=document.querySelector(".info .location"),cn=document.querySelector(".description p"),ln=document.querySelector(".animal-data .age"),hn=document.querySelector(".animal-data .breed"),dn=document.querySelector(".animal-data .gender"),mn=document.querySelector(".animal-data .size"),fn=document.querySelector(".animal-data .weight"),pn=document.querySelector(".animal-data .color"),gn=document.querySelector(".animal-data .hair"),yn=document.querySelector(".animal-data .microchip"),wn=document.querySelector(".animal-data .vaccination"),Sn=document.querySelector(".animal-data .certified"),vn=document.querySelector(".animal-data .esterilized"),bn=await et(tt(nn,p.data().Imagen1));an.src=bn;on.textContent=p.data().Nombre;un.textContent=p.data().Ubicacion;cn.textContent=p.data().Descripcion;ln.textContent=p.data().Edad;hn.textContent=p.data().Raza;dn.textContent=p.data().Sexo;mn.textContent=p.data().Tamano;fn.textContent=p.data().Peso;pn.textContent=p.data().Color;gn.textContent=p.data().Pelo;yn.textContent=p.data().Microchip;wn.textContent=p.data().Vacunacion;Sn.textContent=p.data().Certificado_ppp;vn.textContent=p.data().Esterilizacion;const _n=document.querySelector(".back"),Tn=document.querySelector(".next"),je=document.querySelector(".header-carousel");_n.addEventListener("click",()=>{je.style.transform="translateX(0)"});Tn.addEventListener("click",()=>{je.style.transform="translateX(-50%)"});async function En(n){const e=await Zt(Qt(ae,"usuarios"));let t="";e.forEach(r=>{r.id===n&&(t=r.data().name+" "+r.data().surname)}),t===""&&(t=n),sn.textContent=t}
