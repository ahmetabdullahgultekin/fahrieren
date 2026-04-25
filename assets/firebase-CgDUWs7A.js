var e=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,h=(3&t)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=r[e.charAt(s++)],o=s<e.length?r[e.charAt(s)]:0;++s;const a=s<e.length?r[e.charAt(s)]:64;++s;const c=s<e.length?r[e.charAt(s)]:64;if(++s,null==t||null==o||null==a||null==c)throw new n;const u=t<<2|o>>4;if(i.push(u),64!==a){const e=o<<4&240|a>>2;if(i.push(e),64!==c){const e=a<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},n=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},r=function(n){return function(n){const r=e(n);return t.encodeByteArray(r,!0)}(n).replace(/\./g,"")},i=function(e){try{return t.decodeString(e,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};
/**
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
*/
/**
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
*/
var s=()=>
/**
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
*/
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,o=()=>{try{return s()||(()=>{if("undefined"==typeof process)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&i(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},a=e=>o()?.emulatorHosts?.[e],c=e=>{const t=a(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},u=()=>o()?.config,h=e=>o()?.[`_${e}`],l=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}};
/**
* @license
* Copyright 2025 Google LLC
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
*/
function d(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function f(e){return(await fetch(e,{credentials:"include"})).ok}
/**
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
*/function p(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e};return[r(JSON.stringify({alg:"none",type:"JWT"})),r(JSON.stringify(o)),""].join(".")}var m={};var g=!1;function y(e,t){if("undefined"==typeof window||"undefined"==typeof document||!d(window.location.host)||m[e]===t||m[e]||g)return;function n(e){return`__firebase__banner__${e}`}m[e]=t;const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(m))m[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{g=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),o=document.getElementById(t)||document.createElement("span"),a=n("learnmore"),c=document.getElementById(a)||document.createElement("a"),u=n("preprendIcon"),h=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(c,a);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(h,u),t.append(h,o,c,n),document.body.appendChild(t)}i?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
/**
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
*/function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function _(){return!function(){const e=o()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}function E(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}
/**
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
*/
var T=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}},b=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(S,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new T(r,o,n)}};var S=/\{\$([^}]+)}/g;function C(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(A(n)&&A(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(e){return null!==e&&"object"==typeof e}
/**
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
*/function k(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function R(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}var D=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function P(){}
/**
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
*/function O(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
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
*/function L(e){return e&&e._delegate?e._delegate:e}var M=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},x="[DEFAULT]",V=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new l;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
*/(e))try{this.getOrInitializeService({instanceIdentifier:x})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=x){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=x){return this.instances.has(e)}getOptions(e=x){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===x?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=x){return this.component?this.component.multipleInstances?e:x:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}};
/**
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
*/var U,F,j=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new V(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},q=[];
/**
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
*/(F=U||(U={}))[F.DEBUG=0]="DEBUG",F[F.VERBOSE=1]="VERBOSE",F[F.INFO=2]="INFO",F[F.WARN=3]="WARN",F[F.ERROR=4]="ERROR",F[F.SILENT=5]="SILENT";var B,$,z={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},H=U.INFO,K={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},G=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=K[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)},W=class{constructor(e){this.name=e,this._logLevel=H,this._logHandler=G,this._userLogHandler=null,q.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?z[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}};var Q=new WeakMap,X=new WeakMap,Y=new WeakMap,J=new WeakMap,Z=new WeakMap;var ee={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return X.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Y.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return re(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function te(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?($||($=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ie(this),t),re(Q.get(this))}:function(...t){return re(e.apply(ie(this),t))}:function(t,...n){const r=e.call(ie(this),t,...n);return Y.set(r,t.sort?t.sort():[t]),re(r)}}function ne(e){return"function"==typeof e?te(e):(e instanceof IDBTransaction&&function(e){if(X.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});X.set(e,t)}(e),t=e,(B||(B=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,ee):e);var t}function re(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(re(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Q.set(t,e)}).catch(()=>{}),Z.set(t,e),t}(e);if(J.has(e))return J.get(e);const t=ne(e);return t!==e&&(J.set(e,t),Z.set(t,e)),t}var ie=e=>Z.get(e);function se(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=re(o);return r&&o.addEventListener("upgradeneeded",e=>{r(re(o.result),e.oldVersion,e.newVersion,re(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}var oe=["get","getKey","getAll","getAllKeys","count"],ae=["put","add","delete","clear"],ce=new Map;function ue(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ce.get(t))return ce.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ae.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!oe.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return ce.set(t,s),s}ee=(e=>({...e,get:(t,n,r)=>ue(t,n)||e.get(t,n,r),has:(t,n)=>!!ue(t,n)||e.has(t,n)}))(ee);
/**
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
*/
var he=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){return"VERSION"===e.getComponent()?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}};var le="@firebase/app",de="0.14.3",fe=new W("@firebase/app"),pe="@firebase/app-compat",me="@firebase/analytics-compat",ge="@firebase/analytics",ye="@firebase/app-check-compat",ve="@firebase/app-check",we="@firebase/auth",_e="@firebase/auth-compat",Ie="@firebase/database",Ee="@firebase/data-connect",Te="@firebase/database-compat",be="@firebase/functions",Se="@firebase/functions-compat",Ce="@firebase/installations",Ae="@firebase/installations-compat",ke="@firebase/messaging",Ne="@firebase/messaging-compat",Re="@firebase/performance",De="@firebase/performance-compat",Pe="@firebase/remote-config",Oe="@firebase/remote-config-compat",Le="@firebase/storage",Me="@firebase/storage-compat",xe="@firebase/firestore",Ve="@firebase/ai",Ue="@firebase/firestore-compat",Fe="firebase",je="[DEFAULT]",qe={[le]:"fire-core",[pe]:"fire-core-compat",[ge]:"fire-analytics",[me]:"fire-analytics-compat",[ve]:"fire-app-check",[ye]:"fire-app-check-compat",[we]:"fire-auth",[_e]:"fire-auth-compat",[Ie]:"fire-rtdb",[Ee]:"fire-data-connect",[Te]:"fire-rtdb-compat",[be]:"fire-fn",[Se]:"fire-fn-compat",[Ce]:"fire-iid",[Ae]:"fire-iid-compat",[ke]:"fire-fcm",[Ne]:"fire-fcm-compat",[Re]:"fire-perf",[De]:"fire-perf-compat",[Pe]:"fire-rc",[Oe]:"fire-rc-compat",[Le]:"fire-gcs",[Me]:"fire-gcs-compat",[xe]:"fire-fst",[Ue]:"fire-fst-compat",[Ve]:"fire-vertex","fire-js":"fire-js",[Fe]:"fire-js-all"},Be=new Map,$e=new Map,ze=new Map;function He(e,t){try{e.container.addComponent(t)}catch(n){fe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ke(e){const t=e.name;if(ze.has(t))return fe.debug(`There were multiple attempts to register component ${t}.`),!1;ze.set(t,e);for(const n of Be.values())He(n,e);for(const n of $e.values())He(n,e);return!0}function Ge(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function We(e){return null!=e&&void 0!==e.settings}var Qe=new b("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."}),Xe=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new M("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}},Ye="12.3.0";
/**
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
*/function Je(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const r={name:je,automaticDataCollectionEnabled:!0,...t},i=r.name;if("string"!=typeof i||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(n||(n=u()),!n)throw Qe.create("no-options");const s=Be.get(i);if(s){if(C(n,s.options)&&C(r,s.config))return s;throw Qe.create("duplicate-app",{appName:i})}const o=new j(i);for(const c of ze.values())o.addComponent(c);const a=new Xe(n,r,o);return Be.set(i,a),a}function Ze(e=je){const t=Be.get(e);if(!t&&"[DEFAULT]"===e&&u())return Je();if(!t)throw Qe.create("no-app",{appName:e});return t}function et(e,t,n){let r=qe[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void fe.warn(e.join(" "))}Ke(new M(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
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
*/var tt="firebase-heartbeat-store",nt=null;function rt(){return nt||(nt=se("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(tt)}catch(n){console.warn(n)}}}).catch(e=>{throw Qe.create("idb-open",{originalErrorMessage:e.message})})),nt}async function it(e,t){try{const n=(await rt()).transaction(tt,"readwrite");await n.objectStore(tt).put(t,st(e)),await n.done}catch(n){if(n instanceof T)fe.warn(n.message);else{const e=Qe.create("idb-set",{originalErrorMessage:n?.message});fe.warn(e.message)}}}function st(e){return`${e.name}!${e.options.appId}`}
/**
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
*/var ot=class{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ut(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=at();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
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
*/(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){fe.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=at(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ht(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ht(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=r(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return fe.warn(e),""}}};function at(){return(new Date).toISOString().substring(0,10)}var ct,ut=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!I()&&E().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await rt()).transaction(tt),n=await t.objectStore(tt).get(st(e));return await t.done,n}catch(t){if(t instanceof T)fe.warn(t.message);else{const e=Qe.create("idb-get",{originalErrorMessage:t?.message});fe.warn(e.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return it(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return it(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}};function ht(e){return r(JSON.stringify({version:2,heartbeats:e})).length}function lt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}ct="",Ke(new M("platform-logger",e=>new he(e),"PRIVATE")),Ke(new M("heartbeat",e=>new ot(e),"PRIVATE")),et(le,de,ct),et(le,de,"esm2020"),et("fire-js","");var dt=lt,ft=new b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),pt=new W("@firebase/auth");function mt(e,...t){pt.logLevel<=U.ERROR&&pt.error(`Auth (${Ye}): ${e}`,...t)}
/**
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
*/function gt(e,...t){throw _t(e,...t)}function yt(e,...t){return _t(e,...t)}function vt(e,t,n){const r={...dt(),[t]:n};return new b("auth","Firebase",r).create(t,{appName:e.name})}function wt(e){return vt(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _t(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ft.create(e,...t)}function It(e,t,...n){if(!e)throw _t(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mt(t),new Error(t)}function Tt(e,t){e||Et(t)}
/**
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
*/function bt(){return"undefined"!=typeof self&&self.location?.href||""}function St(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
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
*/function Ct(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==St()&&"https:"!==St()&&!w()&&!("connection"in navigator)||navigator.onLine}
/**
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
*/
var At=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ct()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};
/**
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
*/function kt(e,t){Tt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
*/var Nt=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},Rt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Dt=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pt=new At(3e4,6e4);
/**
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
*/function Ot(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Lt(e,t,n,r,i={}){return Mt(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=k({key:e.config.apiKey,...s}).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:a,...i};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&d(e.emulatorConfig.host)&&(c.credentials="include"),Nt.fetch()(await Vt(e,e.config.apiHost,n,o),c)})}async function Mt(e,t,n){e._canInitEmulator=!1;const r={...Rt,...t};try{const t=new Ft(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw jt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const[t,n]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw jt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw jt(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw jt(e,"user-disabled",s);const o=r[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(n)throw vt(e,o,n);gt(e,o)}}catch(i){if(i instanceof T)throw i;gt(e,"network-request-failed",{message:String(i)})}}async function xt(e,t,n,r,i={}){const s=await Lt(e,t,n,r,i);return"mfaPendingCredential"in s&&gt(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Vt(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?kt(e.config,i):`${e.config.apiScheme}://${i}`;return Dt.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())?s._getPersistence()._getFinalTarget(o).toString():o}function Ut(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Ft=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(yt(this.auth,"network-request-failed")),Pt.get())})}};function jt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(e,t,r);return i.customData._tokenResponse=n,i}function qt(e){return void 0!==e&&void 0!==e.enterprise}var Bt=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ut(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function $t(e,t){return Lt(e,"GET","/v2/recaptchaConfig",Ot(e,t))}
/**
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
*/async function zt(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}
/**
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
*/function Ht(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Kt(e){return 1e3*Number(e)}function Gt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return mt("JWT malformed, contained fewer than 3 sections"),null;try{const e=i(n);return e?JSON.parse(e):(mt("Failed to decode base64 JWT payload"),null)}catch(s){return mt("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Wt(e){const t=Gt(e);return It(t,"internal-error"),It(void 0!==t.exp,"internal-error"),It(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
*/async function Qt(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof T&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
*/(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}var Xt=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}},Yt=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ht(this.lastLoginAt),this.creationTime=Ht(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};
/**
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
*/
/**
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
*/
async function Jt(e){const t=e.auth,n=await e.getIdToken(),r=await Qt(e,zt(t,{idToken:n}));It(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=i.providerUserInfo?.length?Zt(i.providerUserInfo):[],o=(a=e.providerData,c=s,[...a.filter(e=>!c.some(t=>t.providerId===e.providerId)),...c]);var a,c;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||o?.length),l=!!u&&h,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yt(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,d)}function Zt(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
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
*/
/**
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
*/
var en=class e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){It(e.idToken,"internal-error"),It(void 0!==e.idToken,"internal-error"),It(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Wt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){It(0!==e.length,"internal-error");const t=Wt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(It(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Mt(e,{},async()=>{const n=k({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await Vt(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&d(e.emulatorConfig.host)&&(a.credentials="include"),Nt.fetch()(s,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new e;return r&&(It("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(It("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),s&&(It("number"==typeof s,"internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new e,this.toJSON())}_performRefresh(){return Et("not implemented")}};
/**
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
*/function tn(e,t){It("string"==typeof e||void 0===e,"internal-error",{appName:t})}var nn=class e{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Xt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return It(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=L(e),r=await n.getIdToken(t),i=Gt(r);It(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Ht(Kt(i.auth_time)),issuedAtTime:Ht(Kt(i.iat)),expirationTime:Ht(Kt(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=L(e);await Jt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(It(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(t){const n=new e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){It(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Jt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(wt(this.auth));const e=await this.getIdToken();return await Qt(this,async function(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:l,emailVerified:d,isAnonymous:f,providerData:p,stsTokenManager:m}=n;It(l&&m,t,"internal-error");const g=en.fromJSON(this.name,m);It("string"==typeof l,t,"internal-error"),tn(r,t.name),tn(i,t.name),It("boolean"==typeof d,t,"internal-error"),It("boolean"==typeof f,t,"internal-error"),tn(s,t.name),tn(o,t.name),tn(a,t.name),tn(c,t.name),tn(u,t.name),tn(h,t.name);const y=new e({uid:l,auth:t,email:i,emailVerified:d,displayName:r,isAnonymous:f,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:g,createdAt:u,lastLoginAt:h});return p&&Array.isArray(p)&&(y.providerData=p.map(e=>({...e}))),c&&(y._redirectEventId=c),y}static async _fromIdTokenResponse(t,n,r=!1){const i=new en;i.updateFromServerResponse(n);const s=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Jt(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];It(void 0!==i.localId,"internal-error");const s=void 0!==i.providerUserInfo?Zt(i.providerUserInfo):[],o=!(i.email&&i.passwordHash||s?.length),a=new en;a.updateFromIdToken(r);const c=new e({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash||s?.length)};return Object.assign(c,u),c}},rn=new Map;
/**
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
*/function sn(e){Tt(e instanceof Function,"Expected a class definition");let t=rn.get(e);return t?(Tt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,rn.set(e,t),t)}
/**
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
*/var on=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};on.type="NONE";var an=on;
/**
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
*/function cn(e,t,n){return`firebase:${e}:${t}:${n}`}var un=class e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=cn(this.userKey,r.apiKey,i),this.fullPersistenceKey=cn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await zt(this.auth,{idToken:e}).catch(()=>{});return t?nn._fromGetAccountInfoResponse(this.auth,t,e):null}return nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new e(sn(an),t,r);const i=(await Promise.all(n.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=i[0]||sn(an);const o=cn(r,t.config.apiKey,t.name);let a=null;for(const e of n)try{const n=await e._get(o);if(n){let r;if("string"==typeof n){const e=await zt(t,{idToken:n}).catch(()=>{});if(!e)break;r=await nn._fromGetAccountInfoResponse(t,e,n)}else r=nn._fromJSON(t,n);e!==s&&(a=r),s=e;break}}catch{}const c=i.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&c.length?(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async e=>{if(e!==s)try{await e._remove(o)}catch{}})),new e(s,t,r)):new e(s,t,r)}};
/**
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
*/function hn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ln(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gn(t))return"Blackberry";if(yn(t))return"Webos";if(dn(t))return"Safari";if((t.includes("chrome/")||fn(t))&&!t.includes("edge/"))return"Chrome";if(mn(t))return"Android";{const t=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(2===t?.length)return t[1]}return"Other"}function ln(e=v()){return/firefox\//i.test(e)}function dn(e=v()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fn(e=v()){return/crios\//i.test(e)}function pn(e=v()){return/iemobile/i.test(e)}function mn(e=v()){return/android/i.test(e)}function gn(e=v()){return/blackberry/i.test(e)}function yn(e=v()){return/webos/i.test(e)}function vn(e=v()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function wn(){return function(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function _n(e=v()){return vn(e)||mn(e)||yn(e)||gn(e)||/windows phone/i.test(e)||pn(e)}
/**
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
*/function In(e,t=[]){let n;switch(e){case"Browser":n=hn(v());break;case"Worker":n=`${hn(v())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ye}/${r}`}
/**
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
*/var En=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}};
/**
* @license
* Copyright 2023 Google LLC
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
*/
/**
* @license
* Copyright 2023 Google LLC
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
*/
var Tn=class{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}},bn=class{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cn(this),this.idTokenSubscription=new Cn(this),this.beforeStateQueue=new En(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ft,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=sn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await un.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await zt(this,{idToken:e}),n=await nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(We(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==i||!s?.user||(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return It(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jt(e)}catch(t){if("auth/network-request-failed"!==t?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(wt(this));const t=e?L(e):null;return t&&It(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&It(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Lt(e,"GET","/v2/passwordPolicy",Ot(e,t))}(this),t=new Tn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Lt(e,"POST","/v2/accounts:revokeToken",Ot(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&sn(e)||this._popupRedirectResolver;It(t,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(It(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return It(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=In(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){pt.logLevel<=U.WARN&&pt.warn(`Auth (${Ye}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}};function Sn(e){return L(e)}var Cn=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new D(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return It(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}},An={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};
/**
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
*/function kn(e){return An.loadJS(e)}function Nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}var Rn=class{constructor(){this.enterprise=new Dn}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Dn=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Pn="NO_RECAPTCHA",On=class{constructor(e){this.type="recaptcha-enterprise",this.auth=Sn(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;qt(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Pn)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?(new Rn).execute("siteKey",{action:"verify"}):new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{$t(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Bt(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(i=>{if(!t&&qt(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=An.recaptchaEnterpriseScript;0!==t.length&&(t+=i),kn(t).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}};async function Ln(e,t,n,r=!1,i=!1){const s=new On(e);let o;if(i)o=Pn;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mn(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ln(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ln(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Ln(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Ln(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await Ln(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}function xn(e,t,n){const r=Sn(e);It(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=Vn(t),{host:o,port:a}=function(e){const t=Vn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Un(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Un(t)}}}(t),c=null===a?"":`:${a}`,u={url:`${s}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return It(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void It(C(u,r.config.emulator)&&C(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,d(o)?(f(`${s}//${o}${c}`),y("Auth",!0)):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
*/()}function Vn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Un(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}var Fn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}};async function jn(e,t){return Lt(e,"POST","/v1/accounts:signUp",t)}
/**
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
*/async function qn(e,t){return xt(e,"POST","/v1/accounts:signInWithPassword",Ot(e,t))}
/**
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
*/
/**
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
*/
var Bn=class e extends Fn{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(t,n){return new e(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new e(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Mn(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",qn,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return xt(e,"POST","/v1/accounts:signInWithEmailLink",Ot(e,t))}(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Mn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jn,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return xt(e,"POST","/v1/accounts:signInWithEmailLink",Ot(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};
/**
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
*/async function $n(e,t){return xt(e,"POST","/v1/accounts:signInWithIdp",Ot(e,t))}
/**
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
*/var zn=class e extends Fn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const{providerId:n,signInMethod:r,...i}="string"==typeof t?JSON.parse(t):t;if(!n||!r)return null;const s=new e(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return $n(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$n(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$n(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=k(t)}return e}};
/**
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
*/
async function Hn(e,t){return Lt(e,"POST","/v1/accounts:sendVerificationCode",Ot(e,t))}var Kn={USER_NOT_FOUND:"user-not-found"};
/**
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
*/
var Gn=class e extends Fn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(t,n){return new e({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new e({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(e){return async function(e,t){return xt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ot(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await xt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ot(e,t));if(n.temporaryProof)throw jt(e,"account-exists-with-different-credential",n);return n}(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return async function(e,t){return xt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ot(e,{...t,operation:"REAUTH"}),Kn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=t;return r||n||i||s?new e({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}):null}};
/**
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
*/var Wn=class e{constructor(e){const t=N(R(e)),n=t.apiKey??null,r=t.oobCode??null,i=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);It(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(t){const n=function(e){const t=N(R(e)).link,n=t?N(R(t)).deep_link_id:null,r=N(R(e)).deep_link_id;return(r?N(R(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch{return null}}},Qn=class e{constructor(){this.providerId=e.PROVIDER_ID}static credential(e,t){return Bn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Wn.parseLink(t);return It(n,"argument-error"),Bn._fromEmailAndCode(e,n.code,n.tenantId)}};
/**
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
*/Qn.PROVIDER_ID="password",Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
*/
var Xn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}},Yn=class extends Xn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}},Jn=class e extends Yn{constructor(){super("facebook.com")}static credential(t){return zn._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};
/**
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
*/Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jn.PROVIDER_ID="facebook.com";
/**
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
*/
var Zn=class e extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zn._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return e.credential(n,r)}catch{return null}}};Zn.GOOGLE_SIGN_IN_METHOD="google.com",Zn.PROVIDER_ID="google.com";
/**
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
*/
var er=class e extends Yn{constructor(){super("github.com")}static credential(t){return zn._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};er.GITHUB_SIGN_IN_METHOD="github.com",er.PROVIDER_ID="github.com";
/**
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
*/
var tr=class e extends Yn{constructor(){super("twitter.com")}static credential(t,n){return zn._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return e.credential(n,r)}catch{return null}}};
/**
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
*/
async function nr(e,t){return xt(e,"POST","/v1/accounts:signUp",Ot(e,t))}
/**
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
*/tr.TWITTER_SIGN_IN_METHOD="twitter.com",tr.PROVIDER_ID="twitter.com";var rr=class e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await nn._fromIdTokenResponse(t,r,i),o=ir(r);return new e({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ir(r);return new e({user:t,providerId:i,_tokenResponse:r,operationType:n})}};function ir(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
*/var sr=class e extends T{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,e.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new e(t,n,r,i)}};function or(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw sr._fromErrorAndOperation(e,n,t,r);throw n})}
/**
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
*/
async function ar(e,t,n=!1){if(We(e.app))return Promise.reject(wt(e));const r="signIn",i=await or(e,r,t),s=await rr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
/**
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
*/
async function cr(e){const t=Sn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ur(e,t,n){if(We(e.app))return Promise.reject(wt(e));const r=Sn(e),i=await Mn(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nr,"EMAIL_PASSWORD_PROVIDER").catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cr(e),t}),s=await rr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function hr(e,t,n){return We(e.app)?Promise.reject(wt(e)):async function(e,t){return ar(Sn(e),t)}(L(e),Qn.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cr(e),t})}function lr(e,t,n,r){return L(e).onAuthStateChanged(t,n,r)}function dr(e){return L(e).signOut()}
/**
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
*/function fr(e,t){return Lt(e,"POST","/v2/accounts/mfaEnrollment:start",Ot(e,t))}var pr="__sak",mr=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}},gr=class extends mr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_n(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);wn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};
/**
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
*/gr.type="LOCAL";var yr=gr;
/**
* @license
* Copyright 2025 Google LLC
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
*/var vr=class extends mr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};vr.type="SESSION";var wr=vr;
/**
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
*/
/**
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
*/
var _r=class e{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(e=>e.isListeningto(t));if(n)return n;const r=new e(t);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};
/**
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
*/
function Ir(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
*/_r.receivers=[];var Er=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Ir("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}};
/**
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
*/function Tr(){return window}
/**
* @license
* Copyright 2020 Google LLC.
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
*/
function br(){return void 0!==Tr().WorkerGlobalScope&&"function"==typeof Tr().importScripts}
/**
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
*/
var Sr="firebaseLocalStorageDb",Cr="firebaseLocalStorage",Ar="fbase_key",kr=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Nr(e,t){return e.transaction([Cr],t?"readwrite":"readonly").objectStore(Cr)}function Rr(){const e=indexedDB.open(Sr,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Cr,{keyPath:Ar})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Cr)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Sr);return new kr(e).toPromise()}(),t(await Rr()))})})}async function Dr(e,t,n){const r=Nr(e,!0).put({[Ar]:t,value:n});return new kr(r).toPromise()}function Pr(e,t){const n=Nr(e,!0).delete(t);return new kr(n).toPromise()}var Or=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Rr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return br()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_r._getInstance(br()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Er(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rr();return await Dr(e,pr,"1"),await Pr(e,pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dr(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Nr(e,!1).get(t),r=await new kr(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Nr(e,!1).getAll();return new kr(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}};Or.type="LOCAL";var Lr=Or;
/**
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
*/function Mr(e,t){return Lt(e,"POST","/v2/accounts/mfaSignIn:start",Ot(e,t))}
/**
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
*/
Nn("rcb"),new At(3e4,6e4);var xr="recaptcha";async function Vr(e,t,n){if(!e._getRecaptchaConfig())try{await async function(e){const t=Sn(e),n=await $t(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Bt(n);null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()&&new On(t).verify()}
/**
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
*/(e)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){It("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Pn){It(n?.type===xr,e,"argument-error");return fr(e,await Ur(e,t,n))}return fr(e,t)};return(await Mn(e,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER").catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{It("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;It(i,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Pn){It(n?.type===xr,e,"argument-error");return Mr(e,await Ur(e,t,n))}return Mr(e,t)};return(await Mn(e,s,"mfaSmsSignIn",o,"PHONE_PROVIDER").catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(e,t)=>{if(t.captchaResponse===Pn){It(n?.type===xr,e,"argument-error");return Hn(e,await Ur(e,t,n))}return Hn(e,t)};return(await Mn(e,t,"sendVerificationCode",i,"PHONE_PROVIDER").catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function Ur(e,t,n){It(n.type===xr,e,"argument-error");const r=await n.verify();It("string"==typeof r,e,"argument-error");const i={...t};if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
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
*/var Fr=class e{constructor(t){this.providerId=e.PROVIDER_ID,this.auth=Sn(t)}verifyPhoneNumber(e,t){return Vr(this.auth,e,L(t))}static credential(e,t){return Gn._fromVerification(e,t)}static credentialFromResult(t){const n=t;return e.credentialFromTaggedObject(n)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Gn._fromTokenResponse(t,n):null}};Fr.PROVIDER_ID="phone",Fr.PHONE_SIGN_IN_METHOD="phone";
/**
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
*/
var jr=class extends Fn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function qr(e){return ar(e.auth,new jr(e),e.bypassAuthState)}function Br(e){const{auth:t,user:n}=e;return It(n,t,"internal-error"),
/**
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
*/
async function(e,t,n=!1){const{auth:r}=e;if(We(r.app))return Promise.reject(wt(r));const i="reauthenticate";try{const s=await Qt(e,or(r,i,t,e),n);It(s.idToken,r,"internal-error");const o=Gt(s.idToken);It(o,r,"internal-error");const{sub:a}=o;return It(e.uid===a,r,"user-mismatch"),rr._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===s?.code&&gt(r,"user-mismatch"),s}}(n,new jr(e),e.bypassAuthState)}async function $r(e){const{auth:t,user:n}=e;return It(n,t,"internal-error"),async function(e,t,n=!1){const r=await Qt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return rr._forOperation(e,"link",r)}(n,new jr(e),e.bypassAuthState)}
/**
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
*/var zr=class{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qr;case"linkViaPopup":case"linkViaRedirect":return $r;case"reauthViaPopup":case"reauthViaRedirect":return Br;default:gt(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}},Hr=new At(2e3,1e4);
/**
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
*/(class e extends zr{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,e.currentPopupAction&&e.currentPopupAction.cancel(),e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return It(e,this.auth,"internal-error"),e}async onExecution(){Tt(1===this.filter.length,"Popup operations only handle one event");const e=Ir();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,e.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Hr.get())};e()}}).currentPopupAction=null;
/**
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
*/
var Kr="pendingRedirect",Gr=new Map,Wr=class extends zr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return cn(Kr,e.config.apiKey,e.name)}(t),r=function(e){return sn(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}};function Qr(e,t){Gr.set(e._key(),t)}async function Xr(e,t,n=!1){if(We(e.app))return Promise.reject(wt(e));const r=Sn(e),i=
/**
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
*/
function(e,t){return t?sn(t):(It(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=await new Wr(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
*/var Yr=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zr(e);default:return!1}}
/**
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
*/(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Zr(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(yt(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jr(e))}saveEventToCache(e){this.cachedEventUids.add(Jr(e)),this.lastProcessedEventTime=Date.now()}};function Jr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Zr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
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
*/
var ei=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ti=/^https?/;async function ni(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Lt(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(ri(n))return}catch{}gt(e,"unauthorized-domain")}function ri(e){const t=bt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ti.test(n))return!1;if(ei.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
* @license
* Copyright 2020 Google LLC.
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
*/var ii=new At(3e4,6e4);function si(){const e=Tr().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function oi(e){return new Promise((t,n)=>{function r(){si(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{si(),n(yt(e,"network-request-failed"))},timeout:ii.get()})}if(Tr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Tr().gapi?.load){const t=Nn("iframefcb");return Tr()[t]=()=>{gapi.load?r():n(yt(e,"network-request-failed"))},kn(`${An.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw ai=null,e})}var ai=null;
/**
* @license
* Copyright 2020 Google LLC.
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
*/
var ci=new At(5e3,15e3),ui={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function li(e){const t=e.config;It(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Ye},i=hi.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${k(r).slice(1)}`}async function di(e){const t=await function(e){return ai=ai||oi(e)}(e),n=Tr().gapi;return It(n,e,"internal-error"),t.open({where:document.body,url:li(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ui,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=yt(e,"network-request-failed"),s=Tr().setTimeout(()=>{r(i)},ci.get());function o(){Tr().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
* @license
* Copyright 2020 Google LLC.
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
*/var fi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pi=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}};function mi(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...fi,width:r.toString(),height:i.toString(),top:s,left:o},u=v().toLowerCase();n&&(a=fn(u)?"_blank":n),ln(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=v()){return vn(e)&&!!window.navigator?.standalone}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
*/(t||"",a),new pi(null);const l=window.open(t||"",a,h);It(l,e,"popup-blocked");try{l.focus()}catch(d){}return new pi(l)}var gi="__/auth/handler",yi="emulator/auth/handler",vi=encodeURIComponent("fac");async function wi(e,t,n,r,i,s){It(e.config.authDomain,e,"auth-domain-config-required"),It(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ye,eventId:i};if(t instanceof Xn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Yn){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))void 0===a[h]&&delete a[h];const c=await e._getAppCheckToken(),u=c?`#${vi}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?kt(e,yi):`https://${e.authDomain}/${gi}`}
/**
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
*/(e)}?${k(a).slice(1)}${u}`}var _i="webStorageSupport",Ii=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wr,this._completeRedirectFn=Xr,this._overrideRedirectResult=Qr}async _openPopup(e,t,n,r){Tt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return mi(e,await wi(e,t,n,bt(),r),Ir())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Tr().location.href=e}(await wi(e,t,n,bt(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Tt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await di(e),n=new Yr(e);return t.register("authEvent",t=>(It(t?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_i,{type:_i},n=>{const r=n?.[0]?.[_i];void 0!==r&&t(!!r),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ni(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _n()||dn()||vn()}};var Ei="@firebase/auth",Ti="1.11.0",bi=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){It(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};var Si,Ci=h("authIdTokenMaxAge")||300,Ai=null;function ki(e=Ze()){const t=Ge(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ge(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(C(n.getOptions(),t??{}))return e;gt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ii,persistence:[Lr,yr,wr]}),r=h("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ci)return;const r=t?.token;Ai!==r&&(Ai=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){L(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){L(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const s=a("auth");return s&&xn(n,`http://${s}`),n}An={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=yt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Si="Browser",Ke(new M("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;It(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Si,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:In(Si)},c=new bn(n,r,i,a);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(sn);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ke(new M("auth-internal",e=>{return t=Sn(e.getProvider("auth").getImmediate()),new bi(t);var t},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Ei,Ti,
/**
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
*/
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Si)),et(Ei,Ti,"esm2020");var Ni,Ri,Di="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Pi={};(function(){var e;function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let s,o=e.g[3];s=t+(o^n&(i^o))+r[0]+3614090360&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[3]+3250441966&4294967295,s=t+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[4]+4118548399&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[7]+4249261313&4294967295,s=t+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[8]+1770035416&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[11]+2304563134&4294967295,s=t+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[12]+1804603682&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[15]+1236535329&4294967295,s=t+(i^o&((n=i+(s<<22&4294967295|s>>>10))^i))+r[1]+4129170786&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[0]+3921069994&4294967295,s=t+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[5]+3593408605&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[4]+3889429448&4294967295,s=t+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[9]+568446438&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[8]+1163531501&4294967295,s=t+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[13]+2850285829&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[12]+2368359562&4294967295,s=t+((n=i+(s<<20&4294967295|s>>>12))^i^o)+r[5]+4294588738&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[14]+4259657740&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[1]+2763975236&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[10]+3200236656&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[13]+681279174&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[6]+76029189&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[9]+3654602809&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[2]+3299628645&4294967295,s=t+(i^((n=i+(s<<23&4294967295|s>>>9))|~o))+r[0]+4096336452&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[5]+4237533241&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[12]+1700485571&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[1]+2240044497&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[8]+1873313359&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[13]+1309151649&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[4]+4149444226&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let i=e.length-1;i>=0;i--){const s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,i=this.C;let s=this.h,o=0;for(;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var i={};function s(e){return-128<=e&&e<128?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(e<0)return d(o(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),c=s(1),u=s(16777216);function h(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function l(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(h(t))throw Error("division by zero");if(h(e))return new m(a,a);if(l(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(l(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(e.g.length>30){if(l(e)||l(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;r.l(e)<=0;)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var u=s.add(r);u.l(e)<=0&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=a;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),u=(s=o(n)).j(t);l(u)||u.l(e)>0;)u=(s=o(n-=r)).j(t);h(s)&&(s=c),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function v(e,t){const n=t>>5;t%=32;const i=e.g.length-n,s=[];for(let r=0;r<i;r++)s[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(l(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(l(this))return"-"+d(this).toString(e);const t=o(Math.pow(e,6));var n=this;let r="";for(;;){const i=g(n,t).g;let s=(((n=f(n,i.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(h(n=i))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return l(e=f(this,e))?-1:h(e)?0:1},e.abs=function(){return l(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let i=0;for(let r=0;r<=t;r++){let t=i+(65535&this.i(r))+(65535&e.i(r)),s=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=s>>>16,t&=65535,s&=65535,n[r]=s<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(h(this)||h(e))return a;if(l(this))return l(e)?d(this).j(d(e)):d(d(this).j(e));if(l(e))return d(this.j(d(e)));if(this.l(u)<0&&e.l(u)<0)return o(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let t=0;t<e.g.length;t++){const r=this.i(i)>>>16,s=65535&this.i(i),o=e.i(t)>>>16,a=65535&e.i(t);n[2*i+2*t]+=s*a,p(n,2*i+2*t),n[2*i+2*t+1]+=r*a,p(n,2*i+2*t+1),n[2*i+2*t+1]+=s*o,p(n,2*i+2*t+1),n[2*i+2*t+2]+=r*o,p(n,2*i+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,Ri=Pi.Md5=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let i=a;for(let a=0;a<t.length;a+=8){var s=Math.min(8,t.length-a);const e=parseInt(t.substring(a,a+s),n);s<8?(s=o(Math.pow(n,s)),i=i.j(s).add(o(e))):(i=i.j(r),i=i.add(o(e)))}return i},Ni=Pi.Integer=r}).apply(void 0!==Di?Di:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Oi,Li,Mi,xi,Vi,Ui,Fi,ji,qi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Bi={};(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof qi&&qi];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});var i=i||{},s=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){return(c=a).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}var l="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){s.setTimeout(()=>{throw e},0)}function m(){var e=_;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,_=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},I=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(E)}};function E(){for(var e;e=m();){try{e.h.call(e.g)}catch(n){p(n)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function T(){this.u=this.u,this.C=this.C}function b(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},b.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function C(e){return/^[\s\xa0]*$/.test(e)}function A(e,t){b.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}h(A,b),A.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&A.Z.h.call(this)},A.prototype.h=function(){A.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),N=0;function R(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++N,this.da=this.fa=!1}function D(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function O(e){const t={};for(const n in e)t[n]=e[n];return t}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function x(e){this.src=e,this.g={},this.h=0}function V(e,t){const n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(D(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function U(e,t,n,r){for(let i=0;i<e.length;++i){const s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}x.prototype.add=function(e,t,n,r,i){const s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);const o=U(e,t,r,i);return o>-1?(t=e[o],n||(t.fa=!1)):((t=new R(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var F="closure_lm_"+(1e6*Math.random()|0),j={};function q(e,t,n,r,i){if(r&&r.once)return $(e,t,n,r,i);if(Array.isArray(t)){for(let s=0;s<t.length;s++)q(e,t[s],n,r,i);return null}return n=X(n),e&&e[k]?e.J(t,n,o(r)?!!r.capture:!!r,i):B(e,t,n,!1,r,i)}function B(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");const a=o(i)?!!i.capture:!!i;let c=W(e);if(c||(e[F]=c=new x(e)),(n=c.add(t,n,r,a,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=G;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)S||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(K(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function $(e,t,n,r,i){if(Array.isArray(t)){for(let s=0;s<t.length;s++)$(e,t[s],n,r,i);return null}return n=X(n),e&&e[k]?e.K(t,n,o(r)?!!r.capture:!!r,i):B(e,t,n,!0,r,i)}function z(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)z(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=X(n),e&&e[k]?(e=e.i,(s=String(t).toString())in e.g&&((n=U(t=e.g[s],n,r,i))>-1&&(D(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[s],e.h--)))):e&&(e=W(e))&&(t=e.g[t.toString()],e=-1,t&&(e=U(t,n,r,i)),(n=e>-1?t[e]:null)&&H(n))}function H(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[k])V(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(K(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=W(t))?(V(n,e),0==n.h&&(n.src=null,t[F]=null)):D(e)}}}function K(e){return e in j?j[e]:j[e]="on"+e}function G(e,t){if(e.da)e=!0;else{t=new A(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&H(e),e=n.call(r,t)}return e}function W(e){return(e=e[F])instanceof x?e:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function X(e){return"function"==typeof e?e:(e[Q]||(e[Q]=function(t){return e.handleEvent(t)}),e[Q])}function Y(){T.call(this),this.i=new x(this),this.M=this,this.G=null}function J(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new b(t,e);else if(t instanceof b)t.target=t.target||e;else{var i=t;M(t=new b(r,e),i)}let s,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)s=t.g=n[o],i=Z(s,r,!0,t)&&i;if(s=t.g=e,i=Z(s,r,!0,t)&&i,i=Z(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Z(s,r,!1,t)&&i}function Z(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let s=0;s<t.length;++s){const o=t[s];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&V(e.i,o),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function ee(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return Number(t)>2147483647?-1:s.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,ee(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(Y,T),Y.prototype[k]=!0,Y.prototype.removeEventListener=function(e,t,n,r){z(this,e,t,n,r)},Y.prototype.N=function(){if(Y.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)D(n[e]);delete e.g[t],e.h--}}this.G=null},Y.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Y.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class te extends T{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(e){T.call(this),this.h=e,this.g={}}h(ne,T);var re=[];function ie(e){P(e.g,function(e,t){this.g.hasOwnProperty(t)&&H(e)},e),e.g={}}ne.prototype.N=function(){ne.Z.N.call(this),ie(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var se=s.JSON.stringify,oe=s.JSON.parse,ae=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function ce(){}function ue(){}var he={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function le(){b.call(this,"d")}function de(){b.call(this,"c")}h(le,b),h(de,b);var fe={},pe=null;function me(){return pe=pe||new Y}function ge(e){b.call(this,fe.Ia,e)}function ye(e){const t=me();J(t,new ge(t))}function ve(e,t){b.call(this,fe.STAT_EVENT,e),this.stat=t}function we(e){const t=me();J(t,new ve(t,e))}function _e(e,t){b.call(this,fe.Ja,e),this.size=t}function Ie(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){e()},t)}function Ee(){this.g=!0}function Te(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const s=JSON.parse(t);if(s)for(e=0;e<s.length;e++)if(Array.isArray(s[e])){var n=s[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return se(s)}catch(s){return t}}(e,n)+(r?" "+r:"")})}fe.Ia="serverreachability",h(ge,b),fe.STAT_EVENT="statevent",h(ve,b),fe.Ja="timingevent",h(_e,b),Ee.prototype.ua=function(){this.g=!1},Ee.prototype.info=function(){};var be,Se={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ce={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Ae(){}function ke(e){return encodeURIComponent(String(e))}function Ne(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Re(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new De}function De(){this.i=null,this.g="",this.h=!1}h(Ae,ce),Ae.prototype.g=function(){return new XMLHttpRequest},be=new Ae;var Pe={},Oe={};function Le(e,t,n){e.M=1,e.A=st(et(t)),e.u=n,e.R=!0,Me(e,null)}function Me(e,t){e.F=Date.now(),Ue(e),e.B=et(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),wt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new De,e.g=on(e.j,n?t:null,!e.u),e.P>0&&(e.O=new te(c(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(re[0]=i.toString()),i=re);for(let s=0;s<i.length;s++){const e=q(n,i[s],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?O(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ye(),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s){var o="",a=s.split("&");for(let e=0;e<a.length;e++){var c=a[e].split("=");if(c.length>1){const e=c[0];c=c[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+c+"&":o+(e+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.v,e.B,e.l,e.S,e.u)}function xe(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Ve(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Oe:(n=Number(t.substring(n,r)),isNaN(n)?Pe:(r+=1)+n>t.length?Oe:(t=t.slice(r,r+n),e.C=r+n,t))}function Ue(e){e.T=Date.now()+e.H,Fe(e,e.H)}function Fe(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Ie(c(e.aa,e),t)}function je(e){e.D&&(s.clearTimeout(e.D),e.D=null)}function qe(e){0==e.j.I||e.K||en(e.j,e)}function Be(e){je(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ie(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function $e(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||We(n.h,e)))if(!e.L&&We(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(h){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Zt(n),$t(n)}Xt(n),we(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ie(c(n.Va,n),6e3));Ge(n.h)<=1&&n.ta&&(n.ta=void 0)}else nn(n,11)}else if((e.L||n.g==e)&&Zt(n),!C(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let c=i[t];const h=c[0];if(!(h<=n.K))if(n.K=h,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const t=c[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const i=c[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const h=c[5];null!=h&&"number"==typeof h&&h>0&&(r=1.5*h,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Qe(s,s.h),s.h=null))}if(r.G){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,it(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=e;if((r=n).na=sn(r,r.L?r.ba:null,r.W),o.L){Xe(r.h,o);var a=o,u=r.O;u&&(a.H=u),a.D&&(je(a),Ue(a)),r.g=o}else Qt(r);n.i.length>0&&Ht(n)}else"stop"!=c[0]&&"close"!=c[0]||nn(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?nn(n,7):Bt(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}ye()}catch(h){}}Re.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Ut(e)?t.j():this.Y(e)},Re.prototype.Y=function(e){try{if(e==this.g)e:{const c=Ut(this.g),u=this.g.ya();this.g.ca();if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||Ft(this.g)))){this.K||4!=c||7==u||ye(),je(this);var t=this.g.ca();this.X=t;var n=function(e){if(!xe(e))return e.g.la();const t=Ft(e.g);if(""===t)return"";let n="";const r=t.length,i=4==Ut(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Be(e),qe(e),"";e.h.i=new s.TextDecoder}for(let s=0;s<r;s++)e.h.h=!0,n+=e.h.i.decode(t[s],{stream:!(i&&s==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(r)){var o=r;break t}}o=null}if(!(e=o)){this.o=!1,this.m=3,we(12),Be(this),qe(this);break e}Te(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$e(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Ve(this,n),t==Oe){4==c&&(this.m=4,we(14),e=!1),Te(this.i,this.l,null,"[Incomplete Response]");break}if(t==Pe){this.m=4,we(15),Te(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}Te(this.i,this.l,t,null),$e(this,t)}if(xe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,we(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yt(a),a.P=!0,we(11))}}else Te(this.i,this.l,n,"[Invalid Chunked Response]"),Be(this),qe(this)}else Te(this.i,this.l,n,null),$e(this,n);4==c&&Be(this),this.o&&!this.K&&(4==c?en(this.j,this):(this.o=!1,Ue(this)))}else(function(e){const t={};e=(e.g&&Ut(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(C(e[r]))continue;var n=Ne(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),Be(this),qe(this)}}}catch(c){}},Re.prototype.cancel=function(){this.K=!0,Be(this)},Re.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ye(),we(17)),Be(this),this.m=2,qe(this)):Fe(this,this.T-e)};var ze=class{constructor(e,t){this.g=e,this.map=t}};function He(e){this.l=e||10,s.PerformanceNavigationTiming?e=(e=s.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ke(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ge(e){return e.h?1:e.g?e.g.size:0}function We(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Qe(e,t){e.g?e.g.add(t):e.h=t}function Xe(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ye(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}He.prototype.cancel=function(){if(this.i=Ye(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Je=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ze(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ze?(this.l=e.l,tt(this,e.j),this.o=e.o,this.g=e.g,nt(this,e.u),this.h=e.h,rt(this,_t(e.i)),this.m=e.m):e&&(t=String(e).match(Je))?(this.l=!1,tt(this,t[1]||"",!0),this.o=ot(t[2]||""),this.g=ot(t[3]||"",!0),nt(this,t[4]),this.h=ot(t[5]||"",!0),rt(this,t[6]||"",!0),this.m=ot(t[7]||"")):(this.l=!1,this.i=new pt(null,this.l))}function et(e){return new Ze(e)}function tt(e,t,n){e.j=n?ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nt(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function rt(e,t,n){t instanceof pt?(e.i=t,function(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(gt(this,t),wt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=at(t,dt)),e.i=new pt(t,e.l))}function it(e,t,n){e.i.set(t,n)}function st(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function at(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ct),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ct(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ze.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(at(t,ut,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(at(t,ut,!0),"@"),e.push(ke(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(at(n,"/"==n.charAt(0)?lt:ht,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",at(n,ft)),e.join("")},Ze.prototype.resolve=function(e){const t=et(this);let n=!!e.j;n?tt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)nt(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(".."==(i=r)||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const e=[];for(let t=0;t<i.length;){const n=i[t++];"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?rt(t,_t(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ut=/[#\/\?@]/g,ht=/[#\?:]/g,lt=/[#\?]/g,dt=/[#\?@]/g,ft=/#/g;function pt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let i,s=null;r>=0?(i=e[n].substring(0,r),s=e[n].substring(r+1)):i=e[n],t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function gt(e,t){mt(e),t=It(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function yt(e,t){return mt(e),t=It(e,t),e.g.has(t)}function vt(e,t){mt(e);let n=[];if("string"==typeof t)yt(e,t)&&(n=n.concat(e.g.get(It(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function wt(e,t,n){gt(e,t),n.length>0&&(e.i=null,e.g.set(It(e,t),d(n)),e.h+=n.length)}function _t(e){const t=new pt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function It(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Et(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Tt(){this.g=new ae}function bt(e){this.i=e.Sb||null,this.h=e.ab||!1}function St(e,t){Y.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ct(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function At(e){e.readyState=4,e.l=null,e.j=null,e.B=null,kt(e)}function kt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Nt(e){let t="";return P(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Rt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Nt(n),"string"==typeof e?null!=n&&ke(n):it(e,t,n))}function Dt(e){Y.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=pt.prototype).add=function(e,t){mt(this),this.i=null,e=It(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){mt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return mt(this),this.i=null,yt(this,e=It(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=vt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const i=ke(n);n=vt(this,n);for(let t=0;t<n.length;t++){let r=i;""!==n[t]&&(r+="="+ke(n[t])),e.push(r)}}return this.i=e.join("&")},h(bt,ce),bt.prototype.g=function(){return new St(this.i,this.h)},h(St,Y),(e=St.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,kt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||s).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,At(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kt(this)),this.g&&(this.readyState=3,kt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ct(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?At(this):kt(this),3==this.readyState&&Ct(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,At(this))},e.Na=function(e){this.g&&(this.response=e,At(this))},e.ga=function(){this.g&&At(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(St.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Dt,Y);var Pt=/^https?$/i,Ot=["POST","PUT"];function Lt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Mt(e),Vt(e)}function Mt(e){e.A||(e.A=!0,J(e,"complete"),J(e,"error"))}function xt(e){if(e.h&&void 0!==i)if(e.v&&4==Ut(e))setTimeout(e.Ca.bind(e),0);else if(J(e,"readystatechange"),4==Ut(e)){e.h=!1;try{const i=e.ca();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===i){let t=String(e.D).match(Je)[1]||null;!t&&s.self&&s.self.location&&(t=s.self.location.protocol.slice(0,-1)),r=!Pt.test(t?t.toLowerCase():"")}n=r}if(n)J(e,"complete"),J(e,"success");else{e.o=6;try{var o=Ut(e)>2?e.g.statusText:""}catch(a){o=""}e.l=o+" ["+e.ca()+"]",Mt(e)}}finally{Vt(e)}}}function Vt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const r=e.g;e.g=null,t||J(e,"ready");try{r.onreadystatechange=null}catch(n){}}}function Ut(e){return e.g?e.g.readyState:0}function Ft(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function jt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qt(e){this.za=0,this.i=[],this.j=new Ee,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jt("baseRetryDelayMs",5e3,e),this.Za=jt("retryDelaySeedMs",1e4,e),this.Ta=jt("forwardChannelMaxRetries",2,e),this.va=jt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new He(e&&e.concurrentRequestLimit),this.Ba=new Tt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Bt(e){if(zt(e),3==e.I){var t=e.V++,n=et(e.J);if(it(n,"SID",e.M),it(n,"RID",t),it(n,"TYPE","terminate"),Gt(e,n),(t=new Re(e,e.j,t)).M=2,t.A=st(et(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=t.A,n=!0),n||(t.g=on(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Ue(t)}rn(e)}function $t(e){e.g&&(Yt(e),e.g.cancel(),e.g=null)}function zt(e){$t(e),e.v&&(s.clearTimeout(e.v),e.v=null),Zt(e),e.h.cancel(),e.m&&("number"==typeof e.m&&s.clearTimeout(e.m),e.m=null)}function Ht(e){if(!Ke(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||I(),w||(v(),w=!0),_.add(t,e),e.D=0}}function Kt(e,t){var n;n=t?t.l:e.V++;const r=et(e.J);it(r,"SID",e.M),it(r,"RID",n),it(r,"AID",e.K),Gt(e,r),e.u&&e.o&&Rt(r,e.u,e.o),n=new Re(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Wt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Qe(e.h,n),Le(n,r,t)}function Gt(e,t){e.H&&P(e.H,function(e,n){it(t,n,e)}),e.l&&P({},function(e,n){it(t,n,e)})}function Wt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?c(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let c=!0;for(let h=0;h<n;h++){var s=i[h].g;const n=i[h].map;if((s-=t)<0)t=Math.max(0,i[h].g-100),c=!1;else try{s="req"+s+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[t,n]of a){let r=n;o(n)&&(r=se(n)),e.push(s+t+"="+encodeURIComponent(r))}}catch(u){throw e.push(s+"type=_badmap"),u}}catch(u){r&&r(n)}}if(c){a=e.join("&");break e}}a=void 0}return e=e.i.splice(0,n),t.G=e,a}function Qt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||I(),w||(v(),w=!0),_.add(t,e),e.A=0}}function Xt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Ie(c(e.Da,e),tn(e,e.A)),e.A++,!0)}function Yt(e){null!=e.B&&(s.clearTimeout(e.B),e.B=null)}function Jt(e){e.g=new Re(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=et(e.na);it(t,"RID","rpc"),it(t,"SID",e.M),it(t,"AID",e.K),it(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&it(t,"TO",e.ia),it(t,"TYPE","xmlhttp"),Gt(e,t),e.u&&e.o&&Rt(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=st(et(t)),n.u=null,n.R=!0,Me(n,e)}function Zt(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function en(e,t){var n=null;if(e.g==t){Zt(e),Yt(e),e.g=null;var r=2}else{if(!We(e.h,t))return;n=t.G,Xe(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;J(r=me(),new _e(r,n)),Ht(e)}else Qt(e);else if(3==(i=t.m)||0==i&&t.X>0||!(1==r&&function(e,t){return!(Ge(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=Ie(c(e.Ea,e,t),tn(e,e.D)),e.D++,0)))}(e,t)||2==r&&Xt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:nn(e,5);break;case 4:nn(e,10);break;case 3:nn(e,6);break;default:nn(e,2)}}function tn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function nn(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.bb,e),r=e.Ua;const t=!r;r=new Ze(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||tt(r,"https"),st(r),t?function(e,t){const n=new Ee;if(s.Image){const r=new Image;r.onload=u(Et,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(Et,n,"TestLoadImage: error",!1,t,r),r.onabort=u(Et,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(Et,n,"TestLoadImage: timeout",!1,t,r),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ee;const n=new AbortController,r=setTimeout(()=>{n.abort(),Et(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Et(0,0,!0,t):Et(0,0,!1,t)}).catch(()=>{clearTimeout(r),Et(0,0,!1,t)})}(r.toString(),n)}else we(2);e.I=0,e.l&&e.l.pa(t),rn(e),zt(e)}function rn(e){if(e.I=0,e.ja=[],e.l){const t=Ye(e.h);0==t.length&&0==e.i.length||(f(e.ja,t),f(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function sn(e,t,n){var r=n instanceof Ze?et(n):new Ze(n);if(""!=r.g)t&&(r.g=t+"."+r.g),nt(r,r.u);else{var i=s.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;const e=new Ze(null);r&&tt(e,r),t&&(e.g=t),i&&nt(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&it(r,n,t),it(r,"VER",e.ka),Gt(e,r),r}function on(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Dt(new bt({ab:n})):new Dt(e.ma)).Fa(e.L),t}function an(){}function cn(){}function un(e,t){Y.call(this),this.g=new qt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!C(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new dn(this)}function hn(e){le.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ln(){de.call(this),this.status=1}function dn(e){this.g=e}(e=Dt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():be.g(),this.g.onreadystatechange=l(c(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Lt(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=s.FormData&&e instanceof s.FormData,!(Array.prototype.indexOf.call(Ot,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(o){Lt(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,J(this,"complete"),J(this,"abort"),Vt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vt(this,!0)),Dt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?xt(this):this.Xa())},e.Xa=function(){xt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oe(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=qt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){we(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=sn(this,null,this.W),Ht(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Re(this,this.j,e);let s=this.o;if(this.U&&(s?(s=O(s),M(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Wt(this,i,t),it(n=et(this.J),"RID",e),it(n,"CVER",22),this.G&&it(n,"X-HTTP-Session-Id",this.G),Gt(this,n),s&&(this.R?t="headers="+ke(Nt(s))+"&"+t:this.u&&Rt(n,this.u,s)),Qe(this.h,i),this.Ra&&it(n,"TYPE","init"),this.S?(it(n,"$req",t),it(n,"SID","null"),i.U=!0,Le(i,n,null)):Le(i,n,t),this.I=2}}else 3==this.I&&(e?Kt(this,e):0==this.i.length||Ke(this.h)||Kt(this))},e.Da=function(){if(this.v=null,Jt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Ie(c(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),$t(this),Jt(this))},e.Va=function(){null!=this.C&&(this.C=null,$t(this),Xt(this),we(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=an.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},cn.prototype.g=function(e,t){return new un(e,t)},h(un,Y),un.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Bt(this.g)},un.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=se(e),e=n);t.i.push(new ze(t.Ya++,e)),3==t.I&&Ht(t)},un.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,un.Z.N.call(this)},h(hn,le),h(ln,de),h(dn,an),dn.prototype.ra=function(){J(this.g,"a")},dn.prototype.qa=function(e){J(this.g,new hn(e))},dn.prototype.pa=function(e){J(this.g,new ln)},dn.prototype.oa=function(){J(this.g,"b")},cn.prototype.createWebChannel=cn.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,ji=Bi.createWebChannelTransport=function(){return new cn},Fi=Bi.getStatEventTarget=function(){return me()},Ui=Bi.Event=fe,Vi=Bi.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Se.NO_ERROR=0,Se.TIMEOUT=8,Se.HTTP_ERROR=6,xi=Bi.ErrorCode=Se,Ce.COMPLETE="complete",Mi=Bi.EventType=Ce,ue.EventType=he,he.OPEN="a",he.CLOSE="b",he.ERROR="c",he.MESSAGE="d",Y.prototype.listen=Y.prototype.J,Li=Bi.WebChannel=ue,Bi.FetchXmlHttpFactory=bt,Dt.prototype.listenOnce=Dt.prototype.K,Dt.prototype.getLastError=Dt.prototype.Ha,Dt.prototype.getLastErrorCode=Dt.prototype.ya,Dt.prototype.getStatus=Dt.prototype.ca,Dt.prototype.getResponseJson=Dt.prototype.La,Dt.prototype.getResponseText=Dt.prototype.la,Dt.prototype.send=Dt.prototype.ea,Dt.prototype.setWithCredentials=Dt.prototype.Fa,Oi=Bi.XhrIo=Dt}).apply(void 0!==qi?qi:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var $i="@firebase/firestore",zi="4.9.2",Hi=class{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};
/**
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
*/Hi.UNAUTHENTICATED=new Hi(null),Hi.GOOGLE_CREDENTIALS=new Hi("google-credentials-uid"),Hi.FIRST_PARTY=new Hi("first-party-uid"),Hi.MOCK_USER=new Hi("mock-user");
/**
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
*/
var Ki="12.3.0",Gi=new W("@firebase/firestore");
/**
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
*/function Wi(){return Gi.logLevel}function Qi(e,...t){if(Gi.logLevel<=U.DEBUG){const n=t.map(Ji);Gi.debug(`Firestore (${Ki}): ${e}`,...n)}}function Xi(e,...t){if(Gi.logLevel<=U.ERROR){const n=t.map(Ji);Gi.error(`Firestore (${Ki}): ${e}`,...n)}}function Yi(e,...t){if(Gi.logLevel<=U.WARN){const n=t.map(Ji);Gi.warn(`Firestore (${Ki}): ${e}`,...n)}}function Ji(e){if("string"==typeof e)return e;try{
/**
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
		*/
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
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
*/function Zi(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,es(e,r,n)}function es(e,t,n){let r=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(i){r+=" CONTEXT: "+n}throw Xi(r),new Error(r)}function ts(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||es(t,i,r)}function ns(e,t){return e}
/**
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
*/var rs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},is=class extends T{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}},ss=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}},os=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},as=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Hi.UNAUTHENTICATED))}shutdown(){}},cs=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},us=class{constructor(e){this.t=e,this.currentUser=Hi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ts(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ss,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{Qi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Qi("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ss)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Qi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ts("string"==typeof t.accessToken,31837,{l:t}),new os(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ts(null===e||"string"==typeof e,2055,{h:e}),new Hi(e)}},hs=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Hi.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},ls=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new hs(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Hi.FIRST_PARTY))}shutdown(){}invalidateToken(){}},ds=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},fs=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ts(void 0===this.o,3512);const n=e=>{null!=e.error&&Qi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,Qi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Qi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Qi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ds(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(ts("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new ds(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};
/**
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
*/
function ps(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
*/var ms=class{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=ps(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}};function gs(e,t){return e<t?-1:e>t?1:0}function ys(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return _s(n)===_s(i)?gs(n,i):_s(n)?1:-1}return gs(e.length,t.length)}var vs=55296,ws=57343;function _s(e){const t=e.charCodeAt(0);return t>=vs&&t<=ws}function Is(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
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
*/var Es="__name__",Ts=class e{constructor(e,t,n){void 0===t?t=0:t>e.length&&Zi(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Zi(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(t){return 0===e.comparator(this,t)}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach(e=>{n.push(e)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const r=e.compareSegments(t.get(i),n.get(i));if(0!==r)return r}return gs(t.length,n.length)}static compareSegments(t,n){const r=e.isNumericId(t),i=e.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?e.extractNumericId(t).compare(e.extractNumericId(n)):ys(t,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}},bs=class e extends Ts{construct(t,n,r){return new e(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const e of t){if(e.indexOf("//")>=0)throw new is(rs.INVALID_ARGUMENT,`Invalid segment (${e}). Paths must not contain // in them.`);n.push(...e.split("/").filter(e=>e.length>0))}return new e(n)}static emptyPath(){return new e([])}},Ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Cs=class e extends Ts{construct(t,n,r){return new e(t,n,r)}static isValidIdentifier(e){return Ss.test(e)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Es}static keyField(){return new e([Es])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(0===r.length)throw new is(rs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new is(rs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new is(rs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=e,i+=2}else"`"===e?(o=!o,i++):"."!==e||o?(r+=e,i++):(s(),i++)}if(s(),o)throw new is(rs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(n)}static emptyPath(){return new e([])}},As=class e{constructor(e){this.path=e}static fromPath(t){return new e(bs.fromString(t))}static fromName(t){return new e(bs.fromString(t).popFirst(5))}static empty(){return new e(bs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===bs.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return bs.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(t){return new e(new bs(t.slice()))}};
/**
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
*/
function ks(e,t,n){if(!n)throw new is(rs.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ns(e,t,n,r){if(!0===t&&!0===r)throw new is(rs.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Rs(e){if(!As.isDocumentKey(e))throw new is(rs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ds(e){if(As.isDocumentKey(e))throw new is(rs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ps(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Os(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Zi(12329,{type:typeof e})}function Ls(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new is(rs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Os(e);throw new is(rs.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
* @license
* Copyright 2025 Google LLC
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
*/function Ms(e,t){const n={typeString:e};return t&&(n.value=t),n}function xs(e,t){if(!Ps(e))throw new is(rs.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new is(rs.INVALID_ARGUMENT,n);return!0}
/**
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
*/var Vs=-62135596800,Us=1e6,Fs=class e{static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Us);return new e(n,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new is(rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new is(rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vs)throw new is(rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new is(rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Us}_compareTo(e){return this.seconds===e.seconds?gs(this.nanoseconds,e.nanoseconds):gs(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(xs(t,e._jsonSchema))return new e(t.seconds,t.nanoseconds)}valueOf(){const e=this.seconds-Vs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Fs._jsonSchemaVersion="firestore/timestamp/1.0",Fs._jsonSchema={type:Ms("string",Fs._jsonSchemaVersion),seconds:Ms("number"),nanoseconds:Ms("number")};
/**
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
*/
var js=class e{static fromTimestamp(t){return new e(t)}static min(){return new e(new Fs(0,0))}static max(){return new e(new Fs(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};
/**
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
*/function qs(e){return new Bs(e.readTime,e.key,-1)}var Bs=class e{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new e(js.min(),As.empty(),-1)}static max(){return new e(js.max(),As.empty(),-1)}};function $s(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=As.comparator(e.documentKey,t.documentKey),0!==n?n:gs(e.largestBatchId,t.largestBatchId)
/**
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
*/)}var zs=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};
/**
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
*/
async function Hs(e){if(e.code!==rs.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Qi("LocalStore","Unexpectedly lost primary lease")}
/**
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
*/var Ks=class e{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(t,n){return this.callbackAttached&&Zi(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e((e,r)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(e,r)},this.catchCallback=t=>{this.wrapFailure(n,t).next(e,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(t){try{const n=t();return n instanceof e?n:e.resolve(n)}catch(n){return e.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):e.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):e.reject(n)}static resolve(t){return new e((e,n)=>{e(t)})}static reject(t){return new e((e,n)=>{n(t)})}static waitFor(t){return new e((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},e=>n(e))}),s=!0,i===r&&e()})}static or(t){let n=e.resolve(!1);for(const r of t)n=n.next(t=>t?e.resolve(t):r());return n}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(t,n){return new e((e,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;n(t[c]).next(t=>{s[c]=t,++o,o===i&&e(s)},e=>r(e))}})}static doWhile(t,n){return new e((e,r)=>{const i=()=>{!0===t()?n().next(()=>{i()},r):e()};i()})}};function Gs(e){return"IndexedDbTransactionError"===e.name}
/**
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
*/var Ws=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}};Ws.ce=-1;function Qs(e){return null==e}function Xs(e){return 0===e&&1/e==-1/0}function Ys(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Js(e){return e+""}
/**
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
*/var Zs="owner",eo="mutationQueues",to="mutations",no="documentMutations",ro="remoteDocumentGlobal",io="targets",so="targetDocuments",oo="targetGlobal",ao="collectionParents",co="clientMetadata",uo="bundles",ho="namedQueries",lo="documentOverlays",fo=[...[eo,to,no,"remoteDocumentsV14",io,Zs,oo,so,co,ro,ao,uo,ho,lo],"indexConfiguration","indexState","indexEntries"];
/**
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
*/
function po(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function mo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function go(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
*/var yo=class e{constructor(e,t){this.comparator=e,this.root=t||wo.EMPTY}insert(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,wo.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}},vo=class{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},wo=class e{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=null!=r?r:e.RED,this.left=null!=i?i:e.EMPTY,this.right=null!=s?s:e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Zi(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Zi(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Zi(27949);return e+(this.isRed()?0:1)}};wo.EMPTY=null,wo.RED=!0,wo.BLACK=!1,wo.EMPTY=new class{constructor(){this.size=0}get key(){throw Zi(57766)}get value(){throw Zi(16141)}get color(){throw Zi(16727)}get left(){throw Zi(29726)}get right(){throw Zi(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new wo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
*/
var _o=class e{constructor(e){this.comparator=e,this.data=new yo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Io(this.data.getIterator())}getIteratorFrom(e){return new Io(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const e=n.getNext().key,t=r.getNext().key;if(0!==this.comparator(e,t))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(t){const n=new e(this.comparator);return n.data=t,n}},Io=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}},Eo=class e{constructor(e){this.fields=e,e.sort(Cs.comparator)}static empty(){return new e([])}unionWith(t){let n=new _o(Cs.comparator);for(const e of this.fields)n=n.add(e);for(const e of t)n=n.add(e);return new e(n.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(e,t)=>e.isEqual(t))}},To=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}},bo=class e{constructor(e){this.binaryString=e}static fromBase64String(t){const n=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new To("Invalid base64 string: "+t):t}}(t);return new e(n)}static fromUint8Array(t){const n=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t);return new e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return gs(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};bo.EMPTY_BYTE_STRING=new bo("");var So=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Co(e){if(ts(!!e,39018),"string"==typeof e){let t=0;const n=So.exec(e);if(ts(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ao(e.seconds),nanos:Ao(e.nanos)}}function Ao(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ko(e){return"string"==typeof e?bo.fromBase64String(e):bo.fromUint8Array(e)}
/**
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
*/var No="server_timestamp",Ro="__type__",Do="__previous_value__",Po="__local_write_time__";function Oo(e){return(e?.mapValue?.fields||{})[Ro]?.stringValue===No}function Lo(e){const t=e.mapValue.fields[Do];return Oo(t)?Lo(t):t}function Mo(e){const t=Co(e.mapValue.fields[Po].timestampValue);return new Fs(t.seconds,t.nanos)}
/**
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
*/var xo=class{constructor(e,t,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u}},Vo="(default)",Uo=class e{constructor(e,t){this.projectId=e,this.database=t||Vo}static empty(){return new e("","")}get isDefaultDatabase(){return this.database===Vo}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}},Fo="__type__",jo="__max__",qo={fields:{__type__:{stringValue:jo}}},Bo="__vector__",$o="value";function zo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Oo(e)?4:aa(e)?9007199254740991:sa(e)?10:11:Zi(28295,{value:e})}function Ho(e,t){if(e===t)return!0;const n=zo(e);if(n!==zo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Mo(e).isEqual(Mo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Co(e.timestampValue),r=Co(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,ko(e.bytesValue).isEqual(ko(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ao(e.geoPointValue.latitude)===Ao(t.geoPointValue.latitude)&&Ao(e.geoPointValue.longitude)===Ao(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ao(e.integerValue)===Ao(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ao(e.doubleValue),r=Ao(t.doubleValue);return n===r?Xs(n)===Xs(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Is(e.arrayValue.values||[],t.arrayValue.values||[],Ho);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(po(n)!==po(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ho(n[i],r[i])))return!1;return!0}(e,t);default:return Zi(52216,{left:e})}var r}function Ko(e,t){return void 0!==(e.values||[]).find(e=>Ho(e,t))}function Go(e,t){if(e===t)return 0;const n=zo(e),r=zo(t);if(n!==r)return gs(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return gs(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ao(e.integerValue||e.doubleValue),r=Ao(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Wo(e.timestampValue,t.timestampValue);case 4:return Wo(Mo(e),Mo(t));case 5:return ys(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ko(e),r=ko(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=gs(n[i],r[i]);if(0!==e)return e}return gs(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=gs(Ao(e.latitude),Ao(t.latitude));return 0!==n?n:gs(Ao(e.longitude),Ao(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Qo(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[$o]?.arrayValue,s=r[$o]?.arrayValue,o=gs(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:Qo(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===qo&&t===qo)return 0;if(e===qo)return 1;if(t===qo)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ys(r[o],s[o]);if(0!==e)return e;const t=Go(n[r[o]],i[s[o]]);if(0!==t)return t}return gs(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Zi(23264,{he:n})}}function Wo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return gs(e,t);const n=Co(e),r=Co(t),i=gs(n.seconds,r.seconds);return 0!==i?i:gs(n.nanos,r.nanos)}function Qo(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Go(n[i],r[i]);if(e)return e}return gs(n.length,r.length)}function Xo(e){return Yo(e)}function Yo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Co(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ko(e.bytesValue).toBase64():"referenceValue"in e?function(e){return As.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Yo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Yo(e.fields[i])}`;return n+"}"}(e.mapValue):Zi(61005,{value:e})}function Jo(e){switch(zo(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Lo(e);return t?16+Jo(t):16;case 5:return 2*e.stringValue.length;case 6:return ko(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,t)=>e+Jo(t),0);case 10:case 11:return function(e){let t=0;return mo(e.fields,(e,n)=>{t+=e.length+Jo(n)}),t}(e.mapValue);default:throw Zi(13486,{value:e})}}function Zo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ea(e){return!!e&&"integerValue"in e}function ta(e){return!!e&&"arrayValue"in e}function na(e){return!!e&&"nullValue"in e}function ra(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ia(e){return!!e&&"mapValue"in e}function sa(e){return(e?.mapValue?.fields||{})[Fo]?.stringValue===Bo}function oa(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return mo(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=oa(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=oa(e.arrayValue.values[n]);return t}return{...e}}function aa(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===jo}var ca=class e{constructor(e){this.value=e}static empty(){return new e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ia(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(t)}setAll(e){let t=Cs.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=oa(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ia(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ho(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ia(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){mo(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new e(oa(this.value))}};
/**
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
*/function ua(e){const t=[];return mo(e.fields,(e,n)=>{const r=new Cs([e]);if(ia(n)){const e=ua(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Eo(t)
/**
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
*/}var ha=class e{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new e(t,0,js.min(),js.min(),js.min(),ca.empty(),0)}static newFoundDocument(t,n,r,i){return new e(t,1,n,js.min(),r,i,0)}static newNoDocument(t,n){return new e(t,2,n,js.min(),js.min(),ca.empty(),0)}static newUnknownDocument(t,n){return new e(t,3,n,js.min(),js.min(),ca.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(js.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ca.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ca.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=js.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}},la=class{constructor(e,t){this.position=e,this.inclusive=t}};
/**
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
*/function da(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?As.comparator(As.fromName(o.referenceValue),n.key):Go(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function fa(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ho(e.position[n],t.position[n]))return!1;return!0}
/**
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
*/var pa=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function ma(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
*/var ga=class{},ya=class e extends ga{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(t,n,r){return t.isKeyField()?"in"===n||"not-in"===n?this.createKeyFieldInFilter(t,n,r):new ba(t,n,r):"array-contains"===n?new ka(t,r):"in"===n?new Na(t,r):"not-in"===n?new Ra(t,r):"array-contains-any"===n?new Da(t,r):new e(t,n,r)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Sa(e,n):new Ca(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Go(t,this.value)):null!==t&&zo(this.value)===zo(t)&&this.matchesComparison(Go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Zi(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},va=class e extends ga{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(t,n){return new e(t,n)}matches(e){return wa(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}};function wa(e){return"and"===e.op}function _a(e){return function(e){for(const t of e.filters)if(t instanceof va)return!1;return!0}(e)&&wa(e)}function Ia(e){if(e instanceof ya)return e.field.canonicalString()+e.op.toString()+Xo(e.value);if(_a(e))return e.filters.map(e=>Ia(e)).join(",");{const t=e.filters.map(e=>Ia(e)).join(",");return`${e.op}(${t})`}}function Ea(e,t){return e instanceof ya?(n=e,(r=t)instanceof ya&&n.op===r.op&&n.field.isEqual(r.field)&&Ho(n.value,r.value)):e instanceof va?function(e,t){return t instanceof va&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Ea(n,t.filters[r]),!0)}(e,t):void Zi(19439);var n,r}function Ta(e){return e instanceof ya?`${(t=e).field.canonicalString()} ${t.op} ${Xo(t.value)}`:e instanceof va?function(e){return e.op.toString()+" {"+e.getFilters().map(Ta).join(" ,")+"}"}(e):"Filter";var t}var ba=class extends ya{constructor(e,t,n){super(e,t,n),this.key=As.fromName(n.referenceValue)}matches(e){const t=As.comparator(e.key,this.key);return this.matchesComparison(t)}},Sa=class extends ya{constructor(e,t){super(e,"in",t),this.keys=Aa("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Ca=class extends ya{constructor(e,t){super(e,"not-in",t),this.keys=Aa("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Aa(e,t){return(t.arrayValue?.values||[]).map(e=>As.fromName(e.referenceValue))}var ka=class extends ya{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ta(t)&&Ko(t.arrayValue,this.value)}},Na=class extends ya{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ko(this.value.arrayValue,t)}},Ra=class extends ya{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Ko(this.value.arrayValue,t)}},Da=class extends ya{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Ko(this.value.arrayValue,e))}},Pa=class{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}};function Oa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Pa(e,t,n,r,i,s,o)}function La(e){const t=ns(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Ia(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),Qs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Xo(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Xo(e)).join(",")),t.Te=e}return t.Te}function Ma(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ma(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ea(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fa(e.startAt,t.startAt)&&fa(e.endAt,t.endAt)}function xa(e){return As.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
*/var Va=class{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}};function Ua(e){return new Va(e)}function Fa(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ja(e){return null!==e.collectionGroup}function qa(e){const t=ns(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ie.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new _o(Cs.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new pa(r,n))}),e.has(Cs.keyField().canonicalString())||t.Ie.push(new pa(Cs.keyField(),n))}return t.Ie}function Ba(e){const t=ns(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return Oa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new pa(e.field,t)});const n=e.endAt?new la(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new la(e.startAt.position,e.startAt.inclusive):null;return Oa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,qa(e))),t.Ee}function $a(e,t){const n=e.filters.concat([t]);return new Va(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function za(e,t,n){return new Va(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ha(e,t){return Ma(Ba(e),Ba(t))&&e.limitType===t.limitType}function Ka(e){return`${La(Ba(e))}|lt:${e.limitType}`}function Ga(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Ta(e)).join(", ")}]`),Qs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Xo(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Xo(e)).join(",")),`Target(${t})`}(Ba(e))}; limitType=${e.limitType})`}function Wa(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):As.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of qa(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=da(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,qa(n),r)||n.endAt&&!function(e,t,n){const r=da(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,qa(n),r)));var n,r}function Qa(e){return(t,n)=>{let r=!1;for(const i of qa(e)){const e=Xa(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Xa(e,t,n){const r=e.field.isKeyField()?As.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Go(r,i):Zi(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Zi(19790,{direction:e.dir})}}
/**
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
*/var Ya=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mo(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return go(this.inner)}size(){return this.innerSize}},Ja=new yo(As.comparator);
/**
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
*/function Za(){return Ja}var ec=new yo(As.comparator);function tc(...e){let t=ec;for(const n of e)t=t.insert(n.key,n);return t}function nc(e){let t=ec;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function rc(){return sc()}function ic(){return sc()}function sc(){return new Ya(e=>e.toString(),(e,t)=>e.isEqual(t))}var oc=new yo(As.comparator),ac=new _o(As.comparator);function cc(...e){let t=ac;for(const n of e)t=t.add(n);return t}var uc=new _o(gs);
/**
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
*/
function hc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(t)?"-0":t}}function lc(e){return{integerValue:""+e}}function dc(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Xs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
*/(t)?lc(t):hc(e,t)}
/**
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
*/var fc=class{constructor(){this._=void 0}};function pc(e,t,n){return e instanceof yc?function(e,t){const n={fields:{[Ro]:{stringValue:No},[Po]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Oo(t)&&(t=Lo(t)),t&&(n.fields[Do]=t),{mapValue:n}}(n,t):e instanceof vc?wc(e,t):e instanceof _c?Ic(e,t):function(e,t){const n=gc(e,t),r=Tc(n)+Tc(e.Ae);return ea(n)&&ea(e.Ae)?lc(r):hc(e.serializer,r)}(e,t)}function mc(e,t,n){return e instanceof vc?wc(e,t):e instanceof _c?Ic(e,t):n}function gc(e,t){return e instanceof Ec?ea(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}var yc=class extends fc{},vc=class extends fc{constructor(e){super(),this.elements=e}};function wc(e,t){const n=bc(t);for(const r of e.elements)n.some(e=>Ho(e,r))||n.push(r);return{arrayValue:{values:n}}}var _c=class extends fc{constructor(e){super(),this.elements=e}};function Ic(e,t){let n=bc(t);for(const r of e.elements)n=n.filter(e=>!Ho(e,r));return{arrayValue:{values:n}}}var Ec=class extends fc{constructor(e,t){super(),this.serializer=e,this.Ae=t}};function Tc(e){return Ao(e.integerValue||e.doubleValue)}function bc(e){return ta(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
*/var Sc=class{constructor(e,t){this.field=e,this.transform=t}};var Cc=class{constructor(e,t){this.version=e,this.transformResults=t}},Ac=class e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function kc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var Nc=class{};function Rc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Bc(e.key,Ac.none()):new Mc(e.key,e.data,Ac.none());{const n=e.data,r=ca.empty();let i=new _o(Cs.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new xc(e.key,r,new Eo(i.toArray()),Ac.none())}}function Dc(e,t,n){var r;e instanceof Mc?function(e,t,n){const r=e.value.clone(),i=Uc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof xc?function(e,t,n){if(!kc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Uc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Vc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Pc(e,t,n,r){return e instanceof Mc?function(e,t,n,r){if(!kc(e.precondition,t))return n;const i=e.value.clone(),s=Fc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof xc?function(e,t,n,r){if(!kc(e.precondition,t))return n;const i=Fc(e.fieldTransforms,r,t),s=t.data;return s.setAll(Vc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=t,s=n,kc(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Oc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=gc(r.transform,e||null);null!=i&&(null===n&&(n=ca.empty()),n.set(r.field,i))}return n||null}function Lc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Is(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof vc&&r instanceof vc||n instanceof _c&&r instanceof _c?Is(n.elements,r.elements,Ho):n instanceof Ec&&r instanceof Ec?Ho(n.Ae,r.Ae):n instanceof yc&&r instanceof yc);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Mc=class extends Nc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}},xc=class extends Nc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function Vc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Uc(e,t,n){const r=new Map;ts(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mc(o,a,n[i]))}return r}function Fc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,pc(e,s,t))}return r}var jc,qc,Bc=class extends Nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},$c=class extends Nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}},zc=class{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Dc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Pc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Pc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ic();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Rc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(js.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),cc())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(e,t)=>Lc(e,t))&&Is(this.baseMutations,e.baseMutations,(e,t)=>Lc(e,t))}},Hc=class e{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(t,n,r){ts(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=oc;const s=t.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,r[e].version);return new e(t,n,r,i)}},Kc=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}},Gc=class{constructor(e,t){this.count=e,this.unchangedNames=t}};function Wc(e){if(void 0===e)return Xi("GRPC error has no .code"),rs.UNKNOWN;switch(e){case jc.OK:return rs.OK;case jc.CANCELLED:return rs.CANCELLED;case jc.UNKNOWN:return rs.UNKNOWN;case jc.DEADLINE_EXCEEDED:return rs.DEADLINE_EXCEEDED;case jc.RESOURCE_EXHAUSTED:return rs.RESOURCE_EXHAUSTED;case jc.INTERNAL:return rs.INTERNAL;case jc.UNAVAILABLE:return rs.UNAVAILABLE;case jc.UNAUTHENTICATED:return rs.UNAUTHENTICATED;case jc.INVALID_ARGUMENT:return rs.INVALID_ARGUMENT;case jc.NOT_FOUND:return rs.NOT_FOUND;case jc.ALREADY_EXISTS:return rs.ALREADY_EXISTS;case jc.PERMISSION_DENIED:return rs.PERMISSION_DENIED;case jc.FAILED_PRECONDITION:return rs.FAILED_PRECONDITION;case jc.ABORTED:return rs.ABORTED;case jc.OUT_OF_RANGE:return rs.OUT_OF_RANGE;case jc.UNIMPLEMENTED:return rs.UNIMPLEMENTED;case jc.DATA_LOSS:return rs.DATA_LOSS;default:return Zi(39323,{code:e})}}(qc=jc||(jc={}))[qc.OK=0]="OK",qc[qc.CANCELLED=1]="CANCELLED",qc[qc.UNKNOWN=2]="UNKNOWN",qc[qc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qc[qc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qc[qc.NOT_FOUND=5]="NOT_FOUND",qc[qc.ALREADY_EXISTS=6]="ALREADY_EXISTS",qc[qc.PERMISSION_DENIED=7]="PERMISSION_DENIED",qc[qc.UNAUTHENTICATED=16]="UNAUTHENTICATED",qc[qc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qc[qc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qc[qc.ABORTED=10]="ABORTED",qc[qc.OUT_OF_RANGE=11]="OUT_OF_RANGE",qc[qc.UNIMPLEMENTED=12]="UNIMPLEMENTED",qc[qc.INTERNAL=13]="INTERNAL",qc[qc.UNAVAILABLE=14]="UNAVAILABLE",qc[qc.DATA_LOSS=15]="DATA_LOSS";
/**
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
*/
var Qc=new Ni([4294967295,4294967295],0);function Xc(e){const t=(new TextEncoder).encode(e),n=new Ri;return n.update(t),new Uint8Array(n.digest())}function Yc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ni([n,r],0),new Ni([i,s],0)]}var Jc=class e{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Zc(`Invalid padding: ${t}`);if(n<0)throw new Zc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Zc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Zc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ni.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Ni.fromNumber(n)));return 1===r.compare(Qc)&&(r=new Ni([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=Xc(e),[n,r]=Yc(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);if(!this.we(e))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new e(s,i,n);return r.forEach(e=>o.insert(e)),o}insert(e){if(0===this.ge)return;const t=Xc(e),[n,r]=Yc(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);this.Se(e)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}},Zc=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}},eu=class e{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,tu.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new e(js.min(),i,new yo(gs),Za(),cc())}},tu=class e{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new e(r,n,cc(),cc(),cc())}},nu=class{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}},ru=class{constructor(e,t){this.targetId=e,this.Ce=t}},iu=class{constructor(e,t,n=bo.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}},su=class{constructor(){this.ve=0,this.Fe=cu(),this.Me=bo.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=cc(),t=cc(),n=cc();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Zi(38017,{changeType:i})}}),new tu(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=cu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ts(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}},ou=class{constructor(e){this.Ge=e,this.ze=new Map,this.je=Za(),this.Je=au(),this.He=au(),this.Ye=new yo(gs)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Zi(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(xa(i))if(0===n){const e=new As(i.path);this.et(t,e,ha.newNoDocument(e,js.min()))}else ts(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,e)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=ko(n).toUint8Array()}catch(a){if(a instanceof To)return Yi("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new Jc(s,r,i)}catch(a){return Yi(a instanceof Zc?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.ge?null:o}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&xa(i.target)){const t=new As(i.target.path);this.It(t).has(r)||this.Et(r,t)||this.et(r,t,ha.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=cc();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new eu(e,t,this.Ye,this.je,n);return this.je=Za(),this.Je=au(),this.He=au(),this.Ye=new yo(gs),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new su,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new _o(gs),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new _o(gs),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||Qi("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new su),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}};function au(){return new yo(As.comparator)}function cu(){return new yo(As.comparator)}var uu={asc:"ASCENDING",desc:"DESCENDING"},hu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lu={and:"AND",or:"OR"},du=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function fu(e,t){return e.useProto3Json||Qs(t)?t:{value:t}}function pu(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function gu(e,t){return pu(e,t.toTimestamp())}function yu(e){return ts(!!e,49232),js.fromTimestamp(function(e){const t=Co(e);return new Fs(t.seconds,t.nanos)}(e))}function vu(e,t){return wu(e,t).canonicalString()}function wu(e,t){const n=(r=e,new bs(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function _u(e){const t=bs.fromString(e);return ts(Uu(t),10190,{key:t.toString()}),t}function Iu(e,t){return vu(e.databaseId,t.path)}function Eu(e,t){const n=_u(t);if(n.get(1)!==e.databaseId.projectId)throw new is(rs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new is(rs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new As(Su(n))}function Tu(e,t){return vu(e.databaseId,t)}function bu(e){return new bs(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Su(e){return ts(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Cu(e,t,n){return{name:Iu(e,t),fields:n.value.mapValue.fields}}function Au(e,t){return{documents:[Tu(e,t.path)]}}function ku(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tu(e,i);const s=function(e){if(0!==e.length)return xu(va.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map(e=>{return{field:Lu((t=e).field),direction:Du(t.dir)};var t})}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=fu(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i};var c}function Nu(e){let t=function(e){const t=_u(e);return 4===t.length?bs.emptyPath():Su(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ts(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ru(e);return t instanceof va&&_a(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>{return new pa(Mu((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Qs(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new la(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new la(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new Va(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,u)}function Ru(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Mu(e.unaryFilter.field);return ya.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Mu(e.unaryFilter.field);return ya.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Mu(e.unaryFilter.field);return ya.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Mu(e.unaryFilter.field);return ya.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Zi(61313);default:return Zi(60726)}}(e):void 0!==e.fieldFilter?(t=e,ya.create(Mu(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Zi(58110);default:return Zi(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return va.create(e.compositeFilter.filters.map(e=>Ru(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Zi(1026)}}(e.compositeFilter.op))}(e):Zi(30097,{filter:e});var t}function Du(e){return uu[e]}function Pu(e){return hu[e]}function Ou(e){return lu[e]}function Lu(e){return{fieldPath:e.canonicalString()}}function Mu(e){return Cs.fromServerFormat(e.fieldPath)}function xu(e){return e instanceof ya?function(e){if("=="===e.op){if(ra(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NAN"}};if(na(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ra(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NOT_NAN"}};if(na(e.value))return{unaryFilter:{field:Lu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lu(e.field),op:Pu(e.op),value:e.value}}}(e):e instanceof va?function(e){const t=e.getFilters().map(e=>xu(e));return 1===t.length?t[0]:{compositeFilter:{op:Ou(e.op),filters:t}}}(e):Zi(54877,{filter:e})}function Vu(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Uu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
*/var Fu=class e{constructor(e,t,n,r,i=js.min(),s=js.min(),o=bo.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}},ju=class{constructor(e){this.yt=e}};
/**
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
*/function qu(e){const t=Nu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?za(t,t.limit,"L"):t}
/**
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
*/var Bu=class{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Ao(e.integerValue));else if("doubleValue"in e){const n=Ao(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Xs(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),"string"==typeof n&&(n=Co(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(ko(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?aa(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):sa(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):Zi(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const r of Object.keys(n))this.Ot(r,t),this.Ct(n[r],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const r=$o,i=n[r].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(Ao(i)),this.Ot(r,t),this.Ct(n[r],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const r of n)this.Ct(r,t)}Lt(e,t){this.Ft(t,37),As.fromName(e).path.forEach(e=>{this.Ft(t,60),this.Ut(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}};Bu.Kt=new Bu;
/**
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
*/
var $u=class{constructor(){this.Cn=new zu}addToCollectionParentIndex(e,t){return this.Cn.add(t),Ks.resolve()}getCollectionParents(e,t){return Ks.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Ks.resolve()}deleteFieldIndex(e,t){return Ks.resolve()}deleteAllFieldIndexes(e){return Ks.resolve()}createTargetIndexes(e,t){return Ks.resolve()}getDocumentsMatchingTarget(e,t){return Ks.resolve(null)}getIndexType(e,t){return Ks.resolve(0)}getFieldIndexes(e,t){return Ks.resolve([])}getNextCollectionGroupToUpdate(e){return Ks.resolve(null)}getMinOffset(e,t){return Ks.resolve(Bs.min())}getMinOffsetFromCollectionGroup(e,t){return Ks.resolve(Bs.min())}updateCollectionGroup(e,t,n){return Ks.resolve()}updateIndexEntries(e,t){return Ks.resolve()}},zu=class{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new _o(bs.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new _o(bs.comparator)).toArray()}},Hu=(new Uint8Array(0),{didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0}),Ku=41943040,Gu=class e{static withCacheSize(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}};
/**
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
*/Gu.DEFAULT_COLLECTION_PERCENTILE=10,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gu.DEFAULT=new Gu(Ku,Gu.DEFAULT_COLLECTION_PERCENTILE,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gu.DISABLED=new Gu(-1,0,0);
/**
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
*/
var Wu=class e{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new e(0)}static cr(){return new e(-1)}},Qu="LruGarbageCollector";
/**
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
*/function Xu([e,t],[n,r]){const i=gs(e,n);return 0===i?gs(t,r):i}var Yu=class{constructor(e){this.Ir=e,this.buffer=new _o(Xu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Xu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}},Ju=class{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){Qi(Qu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Gs(e)?Qi(Qu,"Ignoring IndexedDB error during garbage collection: ",e):await Hs(e)}await this.Vr(3e5)})}},Zu=class{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ks.resolve(Ws.ce);const n=new Yu(t);return this.mr.forEachTarget(e,e=>n.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>n.Ar(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Qi("LruGarbageCollector","Garbage collection skipped; disabled"),Ks.resolve(Hu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Qi("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Qi("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),Wi()<=U.DEBUG&&Qi("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),Ks.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}};
/**
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
*/
var eh=class{constructor(){this.changes=new Ya(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ha.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ks.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}},th=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}},nh=class{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Pc(n.mutation,e,Eo.empty(),Fs.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,cc()).next(()=>t))}getLocalViewOfDocuments(e,t,n=cc()){const r=rc();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tc();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=rc();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,cc()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Za();const s=sc(),o=sc();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof xc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Pc(o.mutation,t,o.mutation.getFieldMask(),Fs.now())):s.set(t.key,Eo.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>o.set(e,new th(t,s.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=sc();let r=new yo((e,t)=>e-t),i=cc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Eo.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||cc()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ic();c.forEach(e=>{if(!i.has(e)){const r=Rc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ks.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return i=t,As.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ja(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ks.resolve(rc());let o=-1,a=i;return s.next(t=>Ks.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ks.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,cc())).next(e=>({batchId:o,changes:nc(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new As(t)).next(e=>{let t=tc();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=tc();return this.indexManager.getCollectionParents(e,i).next(o=>Ks.forEach(o,o=>{const a=(c=t,u=o.child(i),new Va(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ha.newInvalidDocument(r)))});let n=tc();return e.forEach((e,r)=>{const s=i.get(e);void 0!==s&&Pc(s.mutation,r,Eo.empty(),Fs.now()),Wa(t,r)&&(n=n.insert(e,r))}),n})}},rh=class{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Ks.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,{id:(n=t).id,version:n.version,createTime:yu(n.createTime)}),Ks.resolve();var n}getNamedQuery(e,t){return Ks.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,{name:(n=t).name,query:qu(n.bundledQuery),readTime:yu(n.readTime)}),Ks.resolve();var n}},ih=class{constructor(){this.overlays=new yo(As.comparator),this.qr=new Map}getOverlay(e,t){return Ks.resolve(this.overlays.get(t))}getOverlays(e,t){const n=rc();return Ks.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Ks.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(n)),Ks.resolve()}getOverlaysForCollection(e,t,n){const r=rc(),i=t.length+1,s=new As(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ks.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new yo((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=rc(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=rc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Ks.resolve(o)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Kc(t,n));let i=this.qr.get(t);void 0===i&&(i=cc(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}},sh=class{constructor(){this.sessionToken=bo.EMPTY_BYTE_STRING}getSessionToken(e){return Ks.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ks.resolve()}},oh=class{constructor(){this.Qr=new _o(ah.$r),this.Ur=new _o(ah.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new ah(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new ah(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){const t=new As(new bs([])),n=new ah(t,e),r=new ah(t,e+1),i=[];return this.Ur.forEachInRange([n,r],e=>{this.Gr(e),i.push(e.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new As(new bs([])),n=new ah(t,e),r=new ah(t,e+1);let i=cc();return this.Ur.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new ah(e,0),n=this.Qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}},ah=class{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return As.comparator(e.key,t.key)||gs(e.Yr,t.Yr)}static Kr(e,t){return gs(e.Yr,t.Yr)||As.comparator(e.key,t.key)}},ch=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new _o(ah.$r)}checkEmpty(e){return Ks.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Zr=this.Zr.add(new ah(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ks.resolve(s)}lookupMutationBatch(e,t){return Ks.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r;return Ks.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ks.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return Ks.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ah(t,0),r=new ah(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],e=>{const t=this.Xr(e.Yr);i.push(t)}),Ks.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new _o(gs);return t.forEach(e=>{const t=new ah(e,0),r=new ah(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([t,r],e=>{n=n.add(e.Yr)})}),Ks.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;As.isDocumentKey(i)||(i=i.child(""));const s=new ah(new As(i),0);let o=new _o(gs);return this.Zr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Yr)),!0)},s),Ks.resolve(this.ti(o))}ti(e){const t=[];return e.forEach(e=>{const n=this.Xr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){ts(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return Ks.forEach(t.mutations,r=>{const i=new ah(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new ah(t,0),r=this.Zr.firstAfterOrEqual(n);return Ks.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ks.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}},uh=class{constructor(e){this.ri=e,this.docs=new yo(As.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ks.resolve(n?n.document.mutableCopy():ha.newInvalidDocument(t))}getEntries(e,t){let n=Za();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ha.newInvalidDocument(e))}),Ks.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Za();const s=t.path,o=new As(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||$s(qs(o),n)<=0||(r.has(o.key)||Wa(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ks.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Zi(9500)}ii(e,t){return Ks.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new hh(this)}getSize(e){return Ks.resolve(this.size)}},hh=class extends eh{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),Ks.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}},lh=class{constructor(e){this.persistence=e,this.si=new Ya(e=>La(e),Ma),this.lastRemoteSnapshotVersion=js.min(),this.highestTargetId=0,this.oi=0,this._i=new oh,this.targetCount=0,this.ai=Wu.ur()}forEachTarget(e,t){return this.si.forEach((e,n)=>t(n)),Ks.resolve()}getLastRemoteSnapshotVersion(e){return Ks.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ks.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Ks.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),Ks.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Wu(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Ks.resolve()}updateTargetData(e,t){return this.Pr(t),Ks.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Ks.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.si.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.si.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ks.waitFor(i).next(()=>r)}getTargetCount(e){return Ks.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return Ks.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),Ks.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Ks.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Ks.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return Ks.resolve(n)}containsKey(e,t){return Ks.resolve(this._i.containsKey(t))}},dh=class{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ws(0),this.li=!1,this.li=!0,this.hi=new sh,this.referenceDelegate=e(this),this.Pi=new lh(this),this.indexManager=new $u,this.remoteDocumentCache=new uh(e=>this.referenceDelegate.Ti(e)),this.serializer=new ju(t),this.Ii=new rh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ih,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new ch(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){Qi("MemoryPersistence","Starting transaction:",e);const r=new fh(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ai(e,t){return Ks.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}},fh=class extends zs{constructor(e){super(),this.currentSequenceNumber=e}},ph=class e{constructor(e){this.persistence=e,this.Ri=new oh,this.Vi=null}static mi(t){return new e(t)}get fi(){if(this.Vi)return this.Vi;throw Zi(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),Ks.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),Ks.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Ks.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ks.forEach(this.fi,n=>{const r=As.fromPath(n);return this.gi(e,r).next(e=>{e||t.removeEntry(r,js.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return Ks.or([()=>Ks.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}},mh=class e{constructor(e,t){this.persistence=e,this.pi=new Ya(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Js(t)),t=Ys(e.get(n),t);return Js(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new Zu(e,t)}(this,t)}static mi(t,n){return new e(t,n)}Ei(){}di(e){return Ks.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0;return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return Ks.forEach(this.pi,(n,r)=>this.br(e,n,r).next(e=>e?Ks.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,r=>this.br(e,r,t).next(e=>{e||(n++,i.removeEntry(r,js.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Ks.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ks.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ks.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Ks.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jo(e.data.value)),t}br(e,t,n){return Ks.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.pi.get(t);return Ks.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}},gh=class e{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(t,n){let r=cc(),i=cc();for(const e of n.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new e(t,n.fromCache,r,i)}},yh=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}},vh=class{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=_()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(v())>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ys(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ws(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new yh;return this.Ss(e,t,n).next(r=>{if(i.result=r,this.Vs)return this.bs(e,t,n,r.size)})}).next(()=>i.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(Wi()<=U.DEBUG&&Qi("QueryEngine","SDK will not create cache indexes for query:",Ga(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Ks.resolve()):(Wi()<=U.DEBUG&&Qi("QueryEngine","Query:",Ga(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(Wi()<=U.DEBUG&&Qi("QueryEngine","The SDK decides to create cache indexes for query:",Ga(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ba(t))):Ks.resolve())}ys(e,t){if(Fa(t))return Ks.resolve(null);let n=Ba(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=za(t,null,"F"),n=Ba(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=cc(...r);return this.ps.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Ds(t,r);return this.Cs(t,s,i,n.readTime)?this.ys(e,za(t,null,"F")):this.vs(e,s,t,n)}))})))}ws(e,t,n,r){return Fa(t)||r.isEqual(js.min())?Ks.resolve(null):this.ps.getDocuments(e,n).next(i=>{const s=this.Ds(t,i);return this.Cs(t,s,n,r)?Ks.resolve(null):(Wi()<=U.DEBUG&&Qi("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ga(t)),this.vs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=js.fromTimestamp(1e9===r?new Fs(n+1,0):new Fs(n,r));return new Bs(i,As.empty(),t)}(r,-1)).next(e=>e))})}Ds(e,t){let n=new _o(Qa(e));return t.forEach((t,r)=>{Wa(e,r)&&(n=n.add(r))}),n}Cs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return Wi()<=U.DEBUG&&Qi("QueryEngine","Using full collection scan to execute query:",Ga(t)),this.ps.getDocumentsMatchingQuery(e,t,Bs.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}},wh="LocalStore",_h=class{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new yo(gs),this.xs=new Ya(e=>La(e),Ma),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}};
/**
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
*/
/**
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
*/async function Ih(e,t){const n=ns(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=cc();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ls:e,removedBatchIds:i,addedBatchIds:s}))})})}function Eh(e){const t=ns(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Th(e,t){const n=ns(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Pi.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Pi.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);var h,l,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(bo.EMPTY_BYTE_STRING,js.min()).withLastLimboFreeSnapshotVersion(js.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),l=u,d=s,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Pi.updateTargetData(e,u))});let a=Za(),c=cc();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(function(e,t,n){let r=cc(),i=cc();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Za();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(js.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Qi(wh,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{ks:r,qs:i}})}(e,s,t.documentUpdates).next(e=>{a=e.ks,c=e.qs})),!r.isEqual(js.min())){const t=n.Pi.getLastRemoteSnapshotVersion(e).next(t=>n.Pi.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Ks.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.Ms=i,e))}function bh(e,t){const n=ns(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function Sh(e,t,n){const r=ns(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(o){if(!Gs(o))throw o;Qi(wh,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function Ch(e,t,n){const r=ns(e);let i=js.min(),s=cc();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=ns(e),i=r.xs.get(n);return void 0!==i?Ks.resolve(r.Ms.get(i)):r.Pi.getTargetData(t,n)}(r,e,Ba(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Fs.getDocumentsMatchingQuery(e,t,n?i:js.min(),n?s:cc())).next(e=>(function(e,t,n){let r=e.Os.get(t)||js.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Os.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Qs:s})))}var Ah=class{constructor(){this.activeTargetIds=uc}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}},kh=class{constructor(){this.Mo=new Ah,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ah,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}},Nh=class{Oo(e){}shutdown(){}},Rh="ConnectivityMonitor",Dh=class{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Qi(Rh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Qi(Rh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}},Ph=null;function Oh(){return null===Ph?Ph=268435456+Math.round(2147483648*Math.random()):Ph++,"0x"+Ph.toString(16)
/**
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
*/}var Lh="RestConnection",Mh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},xh=class{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===Vo?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const s=Oh(),o=this.zo(e,t.toUriEncodedString());Qi(Lh,`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(a,r,i);const{host:c}=new URL(o),u=d(c);return this.Jo(e,o,a,n,u).then(t=>(Qi(Lh,`Received RPC '${e}' ${s}: `,t),t),t=>{throw Yi(Lh,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Ho(e,t,n,r,i,s){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ki,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}zo(e,t){const n=Mh[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}},Vh=class{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}},Uh="WebChannelConnection",Fh=class extends xh{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const s=Oh();return new Promise((i,o)=>{const a=new Oi;a.setWithCredentials(!0),a.listenOnce(Mi.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xi.NO_ERROR:const t=a.getResponseJson();Qi(Uh,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case xi.TIMEOUT:Qi(Uh,`RPC '${e}' ${s} timed out`),o(new is(rs.DEADLINE_EXCEEDED,"Request time out"));break;case xi.HTTP_ERROR:const n=a.getStatus();if(Qi(Uh,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(rs).indexOf(t)>=0?t:rs.UNKNOWN}(t.status);o(new is(e,t.message))}else o(new is(rs.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new is(rs.UNAVAILABLE,"Connection failed."));break;default:Zi(9055,{l_:e,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{Qi(Uh,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);Qi(Uh,`RPC '${e}' ${s} sending request:`,r),a.send(t,"POST",c,n,15)})}T_(e,t,n){const r=Oh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ji(),o=Fi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.jo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Qi(Uh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=s.createWebChannel(u,a);this.I_(h);let l=!1,d=!1;const f=new Vh({Yo:t=>{d?Qi(Uh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(Qi(Uh,`Opening RPC '${e}' stream ${r} transport.`),h.open(),l=!0),Qi(Uh,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Zo:()=>h.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return p(h,Li.EventType.OPEN,()=>{d||(Qi(Uh,`RPC '${e}' stream ${r} transport opened.`),f.o_())}),p(h,Li.EventType.CLOSE,()=>{d||(d=!0,Qi(Uh,`RPC '${e}' stream ${r} transport closed`),f.a_(),this.E_(h))}),p(h,Li.EventType.ERROR,t=>{d||(d=!0,Yi(Uh,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),f.a_(new is(rs.UNAVAILABLE,"The operation could not be completed")))}),p(h,Li.EventType.MESSAGE,t=>{if(!d){const n=t.data[0];ts(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){Qi(Uh,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=jc[e];if(void 0!==t)return Wc(t)}(t),i=s.message;void 0===n&&(n=rs.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,f.a_(new is(n,i)),h.close()}else Qi(Uh,`RPC '${e}' stream ${r} received:`,n),f.u_(n)}}),p(o,Ui.STAT_EVENT,t=>{t.stat===Vi.PROXY?Qi(Uh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Vi.NOPROXY&&Qi(Uh,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.__()},0),f}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}};function jh(){return"undefined"!=typeof document?document:null}
/**
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
*/function qh(e){return new du(e,!0)}
/**
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
*/var Bh=class{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Qi("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}},$h="PersistentStream",zh=class{constructor(e,t,n,r,i,s,o,a){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Bh(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===rs.RESOURCE_EXHAUSTED?(Xi(t.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===rs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new is(rs.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Qi($h,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Qi($h,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Hh=class extends zh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Zi(39313,{state:r}),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(ts(void 0===t||"string"==typeof t,58123),bo.fromBase64String(t||"")):(ts(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),bo.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?rs.UNKNOWN:Wc(e.code);return new is(t,e.message||"")}(a);n=new iu(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Eu(e,r.document.name),s=yu(r.document.updateTime),o=r.document.createTime?yu(r.document.createTime):js.min(),a=new ca({mapValue:{fields:r.document.fields}}),c=ha.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new nu(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Eu(e,r.document),s=r.readTime?yu(r.readTime):js.min(),o=ha.newNoDocument(i,s),a=r.removedTargetIds||[];n=new nu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Eu(e,r.document),s=r.removedTargetIds||[];n=new nu([],s,i,null)}else{if(!("filter"in t))return Zi(11601,{Rt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Gc(r,i),o=e.targetId;n=new ru(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return js.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?js.min():t.readTime?yu(t.readTime):js.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=bu(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=xa(r)?{documents:Au(e,r)}:{query:ku(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=mu(e,t.resumeToken);const r=fu(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(js.min())>0){n.readTime=pu(e,t.snapshotVersion.toTimestamp());const r=fu(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Zi(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=bu(this.serializer),t.removeTarget=e,this.q_(t)}},Kh=class extends zh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ts(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ts(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){ts(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(ts(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?yu(e.updateTime):yu(t);return n.isEqual(js.min())&&(n=yu(t)),new Cc(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=yu(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=bu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof Mc)n={update:Cu(e,t.key,t.value)};else if(t instanceof Bc)n={delete:Iu(e,t.key)};else if(t instanceof xc)n={update:Cu(e,t.key,t.data),updateMask:Vu(t.fieldMask)};else{if(!(t instanceof $c))return Zi(16599,{Vt:t.type});n={verify:Iu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof yc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _c)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ec)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Zi(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:gu(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Zi(27497))),n;var r,i}(this.serializer,e))};this.q_(t)}},Gh=class{},Wh=class extends Gh{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new is(rs.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Go(e,wu(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new is(rs.UNKNOWN,e.toString())})}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ho(e,wu(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new is(rs.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}},Qh=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xi(t),this.aa=!1):Qi("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}},Xh="RemoteStore",Yh=class{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(e=>{n.enqueueAndForget(async()=>{ol(this)&&(Qi(Xh,"Restarting streams for network reachability change."),await async function(e){const t=ns(e);t.Ea.add(4),await Zh(t),t.Ra.set("Unknown"),t.Ea.delete(4),await Jh(t)}(this))})}),this.Ra=new Qh(n,r)}};
/**
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
*/async function Jh(e){if(ol(e))for(const t of e.da)await t(!0)}async function Zh(e){for(const t of e.da)await t(!1)}function el(e,t){const n=ns(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),sl(n)?il(n):bl(n).O_()&&nl(n,t))}function tl(e,t){const n=ns(e),r=bl(n);n.Ia.delete(t),r.O_()&&rl(n,t),0===n.Ia.size&&(r.O_()?r.L_():ol(n)&&n.Ra.set("Unknown"))}function nl(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(js.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}bl(e).Y_(t)}function rl(e,t){e.Va.Ue(t),bl(e).Z_(t)}function il(e){e.Va=new ou({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),bl(e).start(),e.Ra.ua()}function sl(e){return ol(e)&&!bl(e).x_()&&e.Ia.size>0}function ol(e){return 0===ns(e).Ea.size}function al(e){e.Va=void 0}async function cl(e){e.Ra.set("Online")}async function ul(e){e.Ia.forEach((t,n)=>{nl(e,t)})}async function hl(e,t){al(e),sl(e)?(e.Ra.ha(t),il(e)):e.Ra.set("Unknown")}async function ll(e,t,n){if(e.Ra.set("Online"),t instanceof iu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ia.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ia.delete(r),e.Va.removeTarget(r))}(e,t)}catch(r){Qi(Xh,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dl(e,r)}else if(t instanceof nu?e.Va.Ze(t):t instanceof ru?e.Va.st(t):e.Va.tt(t),!n.isEqual(js.min()))try{const t=await Eh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Va.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ia.get(r);i&&e.Ia.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ia.get(t);if(!r)return;e.Ia.set(t,r.withResumeToken(bo.EMPTY_BYTE_STRING,r.snapshotVersion)),rl(e,t);const i=new Fu(r.target,t,n,r.sequenceNumber);nl(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){Qi(Xh,"Failed to raise snapshot:",i),await dl(e,i)}}async function dl(e,t,n){if(!Gs(t))throw t;e.Ea.add(1),await Zh(e),e.Ra.set("Offline"),n||(n=()=>Eh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Qi(Xh,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await Jh(e)})}function fl(e,t){return t().catch(n=>dl(e,n,t))}async function pl(e){const t=ns(e),n=Sl(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;ml(t);)try{const e=await bh(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,gl(t,e)}catch(i){await dl(t,i)}yl(t)&&vl(t)}function ml(e){return ol(e)&&e.Ta.length<10}function gl(e,t){e.Ta.push(t);const n=Sl(e);n.O_()&&n.X_&&n.ea(t.mutations)}function yl(e){return ol(e)&&!Sl(e).x_()&&e.Ta.length>0}function vl(e){Sl(e).start()}async function wl(e){Sl(e).ra()}async function _l(e){const t=Sl(e);for(const n of e.Ta)t.ea(n.mutations)}async function Il(e,t,n){const r=e.Ta.shift(),i=Hc.from(r,t,n);await fl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await pl(e)}async function El(e,t){t&&Sl(e).X_&&await async function(e,t){if(function(e){switch(e){case rs.OK:return Zi(64938);case rs.CANCELLED:case rs.UNKNOWN:case rs.DEADLINE_EXCEEDED:case rs.RESOURCE_EXHAUSTED:case rs.INTERNAL:case rs.UNAVAILABLE:case rs.UNAUTHENTICATED:return!1;case rs.INVALID_ARGUMENT:case rs.NOT_FOUND:case rs.ALREADY_EXISTS:case rs.PERMISSION_DENIED:case rs.FAILED_PRECONDITION:case rs.ABORTED:case rs.OUT_OF_RANGE:case rs.UNIMPLEMENTED:case rs.DATA_LOSS:return!0;default:return Zi(15467,{code:e})}}(n=t.code)&&n!==rs.ABORTED){const n=e.Ta.shift();Sl(e).B_(),await fl(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await pl(e)}var n}(e,t),yl(e)&&vl(e)}async function Tl(e,t){const n=ns(e);n.asyncQueue.verifyOperationInProgress(),Qi(Xh,"RemoteStore received new credentials");const r=ol(n);n.Ea.add(3),await Zh(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Jh(n)}function bl(e){return e.ma||(e.ma=function(e,t,n){const r=ns(e);return r.sa(),new Hh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:cl.bind(null,e),t_:ul.bind(null,e),r_:hl.bind(null,e),H_:ll.bind(null,e)}),e.da.push(async t=>{t?(e.ma.B_(),sl(e)?il(e):e.Ra.set("Unknown")):(await e.ma.stop(),al(e))})),e.ma}function Sl(e){return e.fa||(e.fa=function(e,t,n){const r=ns(e);return r.sa(),new Kh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:wl.bind(null,e),r_:El.bind(null,e),ta:_l.bind(null,e),na:Il.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await pl(e)):(await e.fa.stop(),e.Ta.length>0&&(Qi(Xh,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
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
*/}var Cl=class e{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new e(t,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new is(rs.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Al(e,t){if(Xi("AsyncQueue",`${t}: ${e}`),Gs(e))return new is(rs.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
*/var kl,Nl,Rl=class e{static emptySet(t){return new e(t.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||As.comparator(t.key,n.key):(e,t)=>As.comparator(e.key,t.key),this.keyedMap=tc(),this.sortedSet=new yo(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const e=n.getNext().key,t=r.getNext().key;if(!e.isEqual(t))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(t,n){const r=new e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}},Dl=class{constructor(){this.ga=new yo(As.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Zi(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}},Pl=class e{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(e=>{o.push({type:0,doc:e})}),new e(t,n,Rl.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}},Ol=class{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}},Ll=class{constructor(){this.queries=Ml(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=ns(e),r=n.queries;n.queries=Ml(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new is(rs.ABORTED,"Firestore shutting down"))}};
/**
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
*/function Ml(){return new Ya(e=>Ka(e),Ha)}async function xl(e,t){const n=ns(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.ba()&&t.Da()&&(r=2):(s=new Ol,r=t.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const e=Al(o,`Initialization of query '${Ga(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.Sa.push(t),t.va(n.onlineState),s.wa&&t.Fa(s.wa)&&jl(n)}async function Vl(e,t){const n=ns(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.Sa.indexOf(t);e>=0&&(s.Sa.splice(e,1),0===s.Sa.length?i=t.Da()?0:1:!s.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ul(e,t){const n=ns(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.Sa)e.Fa(i)&&(r=!0);t.wa=i}}r&&jl(n)}function Fl(e,t,n){const r=ns(e),i=r.queries.get(t);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(t)}function jl(e){e.Ca.forEach(e=>{e.next()})}(Nl=kl||(kl={})).Ma="default",Nl.Cache="cache";var ql=class{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Pl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=Pl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kl.Cache}},Bl=class{constructor(e){this.key=e}},$l=class{constructor(e){this.key=e}},zl=class{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=cc(),this.mutatedKeys=cc(),this.eu=Qa(e),this.tu=new Rl(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Dl,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),h=Wa(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.su(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.eu(h,a)>0||c&&this.eu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:s,iu:n,Cs:o,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const s=e.iu.ya();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Zi(20277,{Rt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const o=t&&!r?this._u():[],a=0===this.Xa.size&&this.current&&!r?1:0,c=a!==this.Za;return this.Za=a,0!==s.length||c?{snapshot:new Pl(this.query,e.tu,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Dl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=cc(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Xa=this.Xa.add(e.key))});const t=[];return e.forEach(e=>{this.Xa.has(e)||t.push(new $l(e))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Bl(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=cc();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}},Hl="SyncEngine",Kl=class{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}},Gl=class{constructor(e){this.key=e,this.hu=!1}},Wl=class{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Ya(e=>Ka(e),Ha),this.Iu=new Map,this.Eu=new Set,this.du=new yo(As.comparator),this.Au=new Map,this.Ru=new oh,this.Vu={},this.mu=new Map,this.fu=Wu.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}};
/**
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
*/async function Ql(e,t,n=!0){const r=gd(e);let i;const s=r.Tu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Yl(r,t,n,!0),i}async function Xl(e,t){const n=gd(e);await Yl(n,t,!0,!1)}async function Yl(e,t,n,r){const i=await function(e,t){const n=ns(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Pi.getTargetData(e,t).next(i=>i?(r=i,Ks.resolve(r)):n.Pi.allocateTargetId(e).next(i=>(r=new Fu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Pi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.xs.set(t,e.targetId)),e})}(e.localStore,Ba(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.Cs&&(i=await Ch(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return hd(e,t.targetId,a.au),a.snapshot}(e,t,n,r);const s=await Ch(e.localStore,t,!0),o=new zl(t,s.Qs),a=o.ru(s.documents),c=tu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);hd(e,n,u.au);const h=new Kl(t,n,o);return e.Tu.set(t,h),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),u.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&el(e.remoteStore,i),a}async function Jl(e,t,n){const r=ns(e),i=r.Tu.get(t),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(e=>!Ha(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&tl(r.remoteStore,i.targetId),cd(r,i.targetId)}).catch(Hs)):(cd(r,i.targetId),await Sh(r.localStore,i.targetId,!0))}async function Zl(e,t){const n=ns(e),r=n.Tu.get(t),i=n.Iu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tl(n.remoteStore,r.targetId))}async function ed(e,t,n){const r=function(e){const t=ns(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=id.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sd.bind(null,t),t}(e);try{const e=await function(e,t){const n=ns(e),r=Fs.now(),i=t.reduce((e,t)=>e.add(t.key),cc());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Za(),c=cc();return n.Ns.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=Oc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new xc(e.key,t,ua(t.value.mapValue),Ac.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:nc(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Vu[e.currentUser.toKey()];r||(r=new yo(gs)),r=r.insert(t,n),e.Vu[e.currentUser.toKey()]=r}(r,e.batchId,n),await fd(r,e.changes),await pl(r.remoteStore)}catch(i){const e=Al(i,"Failed to persist write");n.reject(e)}}async function td(e,t){const n=ns(e);try{const e=await Th(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(ts(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?ts(r.hu,14607):e.removedDocuments.size>0&&(ts(r.hu,42227),r.hu=!1))}),await fd(n,e,t)}catch(r){await Hs(r)}}function nd(e,t,n){const r=ns(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=ns(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.Sa)i.va(t)&&(r=!0)}),r&&jl(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rd(e,t,n){const r=ns(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),s=i&&i.key;if(s){let e=new yo(As.comparator);e=e.insert(s,ha.newNoDocument(s,js.min()));const n=cc().add(s),i=new eu(js.min(),new Map,new yo(gs),e,n);await td(r,i),r.du=r.du.remove(s),r.Au.delete(t),dd(r)}else await Sh(r.localStore,t,!1).then(()=>cd(r,t,n)).catch(Hs)}async function id(e,t){const n=ns(e),r=t.batch.batchId;try{const e=await function(e,t){const n=ns(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ks.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);ts(null!==s,48541),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=cc();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);ad(n,r,null),od(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fd(n,e)}catch(i){await Hs(i)}}async function sd(e,t,n){const r=ns(e);try{const e=await function(e,t){const n=ns(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(ts(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);ad(r,t,n),od(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await fd(r,e)}catch(i){await Hs(i)}}function od(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function ad(e,t,n){const r=ns(e);let i=r.Vu[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function cd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(t=>{e.Ru.containsKey(t)||ud(e,t)})}function ud(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(tl(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),dd(e))}function hd(e,t,n){for(const r of n)r instanceof Bl?(e.Ru.addReference(r.key,t),ld(e,r)):r instanceof $l?(Qi(Hl,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||ud(e,r.key)):Zi(19791,{wu:r})}function ld(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(Qi(Hl,"New document in limbo: "+n),e.Eu.add(r),dd(e))}function dd(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new As(bs.fromString(t)),r=e.fu.next();e.Au.set(r,new Gl(n)),e.du=e.du.insert(n,r),el(e.remoteStore,new Fu(Ba(Ua(n.path)),r,"TargetPurposeLimboResolution",Ws.ce))}}async function fd(e,t,n){const r=ns(e),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((e,a)=>{o.push(r.pu(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){i.push(e);const t=gh.As(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(e,t){const n=ns(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ks.forEach(t,t=>Ks.forEach(t.Es,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ks.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!Gs(r))throw r;Qi(wh,"Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,i)}}}(r.localStore,s))}async function pd(e,t){const n=ns(e);if(!n.currentUser.isEqual(t)){Qi(Hl,"User change. New user:",t.toKey());const e=await Ih(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).mu.forEach(e=>{e.forEach(e=>{e.reject(new is(rs.CANCELLED,i))})}),r.mu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await fd(n,e.Ls)}var r,i}function md(e,t){const n=ns(e),r=n.Au.get(t);if(r&&r.hu)return cc().add(r.key);{let e=cc();const r=n.Iu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function gd(e){const t=ns(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=td.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=md.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rd.bind(null,t),t.Pu.H_=Ul.bind(null,t.eventManager),t.Pu.yu=Fl.bind(null,t.eventManager),t}var yd=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,r){return new _h(e,t,n,r)}(this.persistence,new vh,e.initialUser,this.serializer)}Cu(e){return new dh(ph.mi,this.serializer)}Du(e){return new kh}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};yd.provider={build:()=>new yd};var vd=class extends yd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ts(this.persistence.referenceDelegate instanceof mh,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ju(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?Gu.withCacheSize(this.cacheSizeBytes):Gu.DEFAULT;return new dh(e=>mh.mi(e,t),this.serializer)}},wd=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=pd.bind(null,this.syncEngine),await async function(e,t){const n=ns(e);t?(n.Ea.delete(2),await Jh(n)):t||(n.Ea.add(2),await Zh(n),n.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ll}createDatastore(e){const t=qh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Fh(r));var r;return function(e,t,n,r){return new Wh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>nd(this.syncEngine,e,0),s=Dh.v()?new Dh:new Nh,new Yh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Wl(e,t,n,r,i,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=ns(e);Qi(Xh,"RemoteStore shutting down."),t.Ea.add(5),await Zh(t),t.Aa.shutdown(),t.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}};wd.provider={build:()=>new wd};
/**
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
*/
/**
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
*/
var _d=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Xi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}},Id="FirestoreClient",Ed=class{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Hi.UNAUTHENTICATED,this.clientId=ms.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{Qi(Id,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Qi(Id,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Al(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}};
/**
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
*/async function Td(e,t){e.asyncQueue.verifyOperationInProgress(),Qi(Id,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ih(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function bd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Sd(e);Qi(Id,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Tl(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Tl(t.remoteStore,n)),e._onlineComponents=t}async function Sd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Qi(Id,"Using user provided OfflineComponentProvider");try{await Td(e,e._uninitializedComponentsProvider._offline)}catch(n){const r=n;if(!("FirebaseError"===(t=r).name?t.code===rs.FAILED_PRECONDITION||t.code===rs.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw r;Yi("Error using user provided cache. Falling back to memory cache: "+r),await Td(e,new yd)}}else Qi(Id,"Using default OfflineComponentProvider"),await Td(e,new vd(void 0));var t;return e._offlineComponents}async function Cd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Qi(Id,"Using user provided OnlineComponentProvider"),await bd(e,e._uninitializedComponentsProvider._online)):(Qi(Id,"Using default OnlineComponentProvider"),await bd(e,new wd))),e._onlineComponents}function Ad(e){return Sd(e).then(e=>e.persistence)}function kd(e){return Cd(e).then(e=>e.remoteStore)}async function Nd(e){const t=await Cd(e),n=t.eventManager;return n.onListen=Ql.bind(null,t.syncEngine),n.onUnlisten=Jl.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Xl.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Zl.bind(null,t.syncEngine),n}
/**
* @license
* Copyright 2023 Google LLC
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
*/
function Rd(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
*/}var Dd=new Map,Pd="firestore.googleapis.com",Od=!0,Ld=class{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new is(rs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pd,this.ssl=Od}else this.host=e.host,this.ssl=e.ssl??Od;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Ku;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new is(rs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ns("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rd(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new is(rs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new is(rs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new is(rs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}},Md=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ld({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new is(rs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new is(rs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ld(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new as;switch(e.type){case"firstParty":return new ls(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new is(rs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Dd.get(e);t&&(Qi("ComponentProvider","Removing Datastore"),Dd.delete(e),t.terminate())}(this),Promise.resolve()}};
/**
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
*/function xd(e,t,n,r={}){e=Ls(e,Md);const i=d(t),s=e._getSettings(),o={...s,emulatorOptions:e._getEmulatorOptions()},a=`${t}:${n}`;i&&(f(`https://${a}`),y("Firestore",!0)),s.host!==Pd&&s.host!==a&&Yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:a,ssl:i,emulatorOptions:r};if(!C(c,o)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Hi.MOCK_USER;else{t=p(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new is(rs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Hi(i)}e._authCredentials=new cs(new os(t,n))}}
/**
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
*/var Vd=class e{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(t){return new e(this.firestore,t,this._query)}},Ud=class e{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fd(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}toJSON(){return{type:e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(xs(n,e._jsonSchema))return new e(t,r||null,new As(bs.fromString(n.referencePath)))}};Ud._jsonSchemaVersion="firestore/documentReference/1.0",Ud._jsonSchema={type:Ms("string",Ud._jsonSchemaVersion),referencePath:Ms("string")};var Fd=class e extends Vd{constructor(e,t,n){super(e,t,Ua(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ud(this.firestore,null,new As(e))}withConverter(t){return new e(this.firestore,t,this._path)}};function jd(e,t,...n){if(e=L(e),ks("collection","path",t),e instanceof Md){const r=bs.fromString(t,...n);return Ds(r),new Fd(e,null,r)}{if(!(e instanceof Ud||e instanceof Fd))throw new is(rs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bs.fromString(t,...n));return Ds(r),new Fd(e.firestore,null,r)}}function qd(e,t,...n){if(e=L(e),1===arguments.length&&(t=ms.newId()),ks("doc","path",t),e instanceof Md){const r=bs.fromString(t,...n);return Rs(r),new Ud(e,null,new As(r))}{if(!(e instanceof Ud||e instanceof Fd))throw new is(rs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bs.fromString(t,...n));return Rs(r),new Ud(e.firestore,e instanceof Fd?e.converter:null,new As(r))}}
/**
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
*/var Bd="AsyncQueue",$d=class{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Bh(this,"async_queue_retry"),this._c=()=>{const e=jh();e&&Qi(Bd,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=jh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ss;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gs(e))throw e;Qi(Bd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,Xi("INTERNAL UNHANDLED ERROR: ",zd(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Cl.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Zi(47125,{Pc:zd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}};function zd(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
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
*/}function Hd(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}var Kd=class extends Md{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new $d,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $d(e),this._firestoreClient=void 0,await e}}};function Gd(e,t){const n="object"==typeof e?e:Ze(),r="string"==typeof e?e:t||Vo,i=Ge(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=c("firestore");e&&xd(i,...e)}return i}function Wd(e){if(e._terminated)throw new is(rs.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=(r=e._databaseId,i=e._app?.options.appId||"",s=e._persistenceKey,o=t,new xo(r,i,s,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Rd(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator));var r,i,s,o;e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Ed(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}function Qd(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Ad(e),n=await kd(e);return t.setNetworkEnabled(!0),function(e){const t=ns(e);return t.Ea.delete(0),Jh(t)}(n)})}(Wd(e=Ls(e,Kd)))}function Xd(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Ad(e),n=await kd(e);return t.setNetworkEnabled(!1),async function(e){const t=ns(e);t.Ea.add(0),await Zh(t),t.Ra.set("Offline")}(n)})}(Wd(e=Ls(e,Kd)))}
/**
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
*/var Yd=class e{constructor(e){this._byteString=e}static fromBase64String(t){try{return new e(bo.fromBase64String(t))}catch(n){throw new is(rs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new e(bo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(xs(t,e._jsonSchema))return e.fromBase64String(t.bytes)}};Yd._jsonSchemaVersion="firestore/bytes/1.0",Yd._jsonSchema={type:Ms("string",Yd._jsonSchemaVersion),bytes:Ms("string")};
/**
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
*/
var Jd=class{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new is(rs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cs(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}},Zd=class{constructor(e){this._methodName=e}},ef=class e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new is(rs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new is(rs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return gs(this._lat,e._lat)||gs(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:e._jsonSchemaVersion}}static fromJSON(t){if(xs(t,e._jsonSchema))return new e(t.latitude,t.longitude)}};
/**
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
*/ef._jsonSchemaVersion="firestore/geoPoint/1.0",ef._jsonSchema={type:Ms("string",ef._jsonSchemaVersion),latitude:Ms("number"),longitude:Ms("number")};
/**
* @license
* Copyright 2024 Google LLC
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
*/
var tf=class e{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(xs(t,e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>"number"==typeof e))return new e(t.vectorValues);throw new is(rs.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};tf._jsonSchemaVersion="firestore/vectorValue/1.0",tf._jsonSchema={type:Ms("string",tf._jsonSchemaVersion),vectorValues:Ms("object")};
/**
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
*/
var nf=/^__.*__$/,rf=class{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new xc(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mc(e,this.data,t,this.fieldTransforms)}},sf=class{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new xc(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function of(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Zi(40011,{Ac:e})}}var af=class e{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new e({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return If(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(of(this.Ac)&&nf.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}},cf=class{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||qh(e)}Cc(e,t,n,r=!1){return new af({Ac:e,methodName:t,Dc:n,path:Cs.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function uf(e){const t=e._freezeSettings(),n=qh(e._databaseId);return new cf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hf(e,t,n,r,i,s={}){const o=e.Cc(s.merge||s.mergeFields?2:0,t,n,i);yf("Data must be an object, but it was:",o,r);const a=mf(r,o);let c,u;if(s.merge)c=new Eo(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=vf(t,r,n);if(!o.contains(i))throw new is(rs.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ef(e,i)||e.push(i)}c=new Eo(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new rf(new ca(a),c,u)}var lf=class e extends Zd{_toFieldTransform(e){if(2!==e.Ac)throw 1===e.Ac?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(t){return t instanceof e}},df=class e extends Zd{_toFieldTransform(e){return new Sc(e.path,new yc)}isEqual(t){return t instanceof e}},ff=class e extends Zd{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Ec(e.serializer,dc(e.serializer,this.Fc));return new Sc(e.path,t)}isEqual(t){return t instanceof e&&this.Fc===t.Fc}};function pf(e,t){if(gf(e=L(e)))return yf("Unsupported field value:",t,e),mf(e,t);if(e instanceof Zd)return function(e,t){if(!of(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=pf(i,t.wc(r));e??={nullValue:"NULL_VALUE"},n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=L(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dc(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Fs.fromDate(e);return{timestampValue:pu(t.serializer,n)}}if(e instanceof Fs){const n=new Fs(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:pu(t.serializer,n)}}if(e instanceof ef)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Yd)return{bytesValue:mu(t.serializer,e._byteString)};if(e instanceof Ud){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Sc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vu(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof tf)return n=e,r=t,{mapValue:{fields:{[Fo]:{stringValue:Bo},[$o]:{arrayValue:{values:n.toArray().map(e=>{if("number"!=typeof e)throw r.Sc("VectorValues must only contain numeric values.");return hc(r.serializer,e)})}}}}};var n,r;throw t.Sc(`Unsupported field value: ${Os(e)}`)}(e,t)}function mf(e,t){const n={};return go(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):mo(e,(e,r)=>{const i=pf(r,t.mc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function gf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Fs||e instanceof ef||e instanceof Yd||e instanceof Ud||e instanceof Zd||e instanceof tf)}function yf(e,t,n){if(!gf(n)||!Ps(n)){const r=Os(n);throw"an object"===r?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function vf(e,t,n){if((t=L(t))instanceof Jd)return t._internalPath;if("string"==typeof t)return _f(e,t);throw If("Field path arguments must be of type string or ",e,!1,void 0,n)}var wf=new RegExp("[~\\*/\\[\\]]");function _f(e,t,n){if(t.search(wf)>=0)throw If(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jd(...t.split("."))._internalPath}catch(r){throw If(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function If(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new is(rs.INVALID_ARGUMENT,a+e+c)}function Ef(e,t){return e.some(e=>e.isEqual(t))}
/**
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
*/var Tf=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ud(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new bf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}},bf=class extends Tf{data(){return super.data()}};function Sf(e,t){return"string"==typeof t?_f(e,t):t instanceof Jd?t._internalPath:t._delegate._internalPath}
/**
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
*/function Cf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new is(rs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Af=class{},kf=class extends Af{};function Nf(e,t,...n){let r=[];t instanceof Af&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof Pf).length,n=e.filter(e=>e instanceof Rf).length;if(t>1||t>0&&n>0)throw new is(rs.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}var Rf=class e extends kf{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(t,n,r){return new e(t,n,r)}_apply(e){const t=this._parse(e);return Vf(e._query,t),new Vd(e.firestore,e.converter,$a(e._query,t))}_parse(e){const t=uf(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new is(rs.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){xf(o,s);const t=[];for(const n of o)t.push(Mf(r,e,n));a={arrayValue:{values:t}}}else a=Mf(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||xf(o,s),a=function(e,t,n,r=!1){return pf(n,e.Cc(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return ya.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function Df(e,t,n){const r=t,i=Sf("where",e);return Rf._create(i,r,n)}var Pf=class e extends Af{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(t,n){return new e(t,n)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:va.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Vf(n,i),n=$a(n,i)}(e._query,t),new Vd(e.firestore,e.converter,$a(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}},Of=class e extends kf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(t,n){return new e(t,n)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new is(rs.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new is(rs.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pa(t,n)}(e._query,this._field,this._direction);return new Vd(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Va(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}};function Lf(e,t="asc"){const n=t,r=Sf("orderBy",e);return Of._create(r,n)}function Mf(e,t,n){if("string"==typeof(n=L(n))){if(""===n)throw new is(rs.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ja(t)&&-1!==n.indexOf("/"))throw new is(rs.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(bs.fromString(n));if(!As.isDocumentKey(r))throw new is(rs.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zo(e,new As(r))}if(n instanceof Ud)return Zo(e,n._key);throw new is(rs.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Os(n)}.`)}function xf(e,t){if(!Array.isArray(e)||0===e.length)throw new is(rs.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vf(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new is(rs.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new is(rs.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}var Uf=class{convertValue(e,t="none"){switch(zo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ao(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ko(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Zi(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return mo(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[$o].arrayValue?.values?.map(e=>Ao(e.doubleValue));return new tf(t)}convertGeoPoint(e){return new ef(Ao(e.latitude),Ao(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Lo(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const t=Co(e);return new Fs(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=bs.fromString(e);ts(Uu(n),9688,{name:e});const r=new Uo(n.get(1),n.get(3)),i=new As(n.popFirst(5));return r.isEqual(t)||Xi(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}};
/**
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
*/function Ff(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}var jf=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},qf=class e extends Tf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Sf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new is(rs.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=e._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n):n}};qf._jsonSchemaVersion="firestore/documentSnapshot/1.0",qf._jsonSchema={type:Ms("string",qf._jsonSchemaVersion),bundleSource:Ms("string","DocumentSnapshot"),bundleName:Ms("string"),bundle:Ms("string")};var Bf=class extends qf{data(e={}){return super.data(e)}},$f=class e{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new jf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Bf(this._firestore,this._userDataWriter,n.key,n,new jf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new is(rs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Bf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new jf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Bf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new jf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:zf(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new is(rs.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=e._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ms.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(e=>{null!==e._document&&(n.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),i.push(e.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}};function zf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zi(61501,{type:e})}}
/**
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
*/function Hf(e){e=Ls(e,Ud);const t=Ls(e.firestore,Kd);return function(e,t,n={}){const r=new ss;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new _d({next:a=>{s.Nu(),t.enqueueAndForget(()=>Vl(e,o));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new is(rs.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new is(rs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new ql(Ua(n.path),s,{includeMetadataChanges:!0,qa:!0});return xl(e,o)}(await Nd(e),e.asyncQueue,t,n,r)),r.promise}(Wd(t),e._key).then(n=>ep(t,e,n))}$f._jsonSchemaVersion="firestore/querySnapshot/1.0",$f._jsonSchema={type:Ms("string",$f._jsonSchemaVersion),bundleSource:Ms("string","QuerySnapshot"),bundleName:Ms("string"),bundle:Ms("string")};var Kf=class extends Uf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ud(this.firestore,null,t)}};function Gf(e){e=Ls(e,Vd);const t=Ls(e.firestore,Kd),n=Wd(t),r=new Kf(t);return Cf(e._query),function(e,t,n={}){const r=new ss;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new _d({next:n=>{s.Nu(),t.enqueueAndForget(()=>Vl(e,o)),n.fromCache&&"server"===r.source?i.reject(new is(rs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new ql(n,s,{includeMetadataChanges:!0,qa:!0});return xl(e,o)}(await Nd(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new $f(t,r,e,n))}function Wf(e,t,n){e=Ls(e,Ud);const r=Ls(e.firestore,Kd),i=Ff(e.converter,t,n);return Zf(r,[hf(uf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ac.none())])}function Qf(e,t,n,...r){e=Ls(e,Ud);const i=Ls(e.firestore,Kd),s=uf(i);let o;return o="string"==typeof(t=L(t))||t instanceof Jd?function(e,t,n,r,i,s){const o=e.Cc(1,t,n),a=[vf(t,r,n)],c=[i];if(s.length%2!=0)throw new is(rs.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(vf(t,s[d])),c.push(s[d+1]);const u=[],h=ca.empty();for(let d=a.length-1;d>=0;--d)if(!Ef(u,a[d])){const e=a[d];let t=c[d];t=L(t);const n=o.yc(e);if(t instanceof lf)u.push(e);else{const r=pf(t,n);null!=r&&(u.push(e),h.set(e,r))}}const l=new Eo(u);return new sf(h,l,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.Cc(1,t,n);yf("Data must be an object, but it was:",i,r);const s=[],o=ca.empty();mo(r,(e,r)=>{const a=_f(t,e,n);r=L(r);const c=i.yc(a);if(r instanceof lf)s.push(a);else{const e=pf(r,c);null!=e&&(s.push(a),o.set(a,e))}});const a=new Eo(s);return new sf(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),Zf(i,[o.toMutation(e._key,Ac.exists(!0))])}function Xf(e){return Zf(Ls(e.firestore,Kd),[new Bc(e._key,Ac.none())])}function Yf(e,t){const n=Ls(e.firestore,Kd),r=qd(e),i=Ff(e.converter,t);return Zf(n,[hf(uf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ac.exists(!1))]).then(()=>r)}function Jf(e,...t){e=L(e);let n={includeMetadataChanges:!1,source:"default"},r=0;"object"!=typeof t[r]||Hd(t[r])||(n=t[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Hd(t[r])){const e=t[r];t[r]=e.next?.bind(e),t[r+1]=e.error?.bind(e),t[r+2]=e.complete?.bind(e)}let s,o,a;if(e instanceof Ud)o=Ls(e.firestore,Kd),a=Ua(e._key.path),s={next:n=>{t[r]&&t[r](ep(o,e,n))},error:t[r+1],complete:t[r+2]};else{const n=Ls(e,Vd);o=Ls(n.firestore,Kd),a=n._query;const i=new Kf(o);s={next:e=>{t[r]&&t[r](new $f(o,i,n,e))},error:t[r+1],complete:t[r+2]},Cf(e._query)}return function(e,t,n,r){const i=new _d(r),s=new ql(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>xl(await Nd(e),s)),()=>{i.Nu(),e.asyncQueue.enqueueAndForget(async()=>Vl(await Nd(e),s))}}(Wd(o),a,i,s)}function Zf(e,t){return function(e,t){const n=new ss;return e.asyncQueue.enqueueAndForget(async()=>ed(await function(e){return Cd(e).then(e=>e.syncEngine)}(e),t,n)),n.promise}(Wd(e),t)}function ep(e,t,n){const r=n.docs.get(t._key),i=new Kf(e);return new qf(e,i,t._key,r,new jf(n.hasPendingWrites,n.fromCache),t.converter)}function tp(){return new df("serverTimestamp")}function np(e){return new ff("increment",e)}!function(e,t=!0){Ki=Ye,Ke(new M("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Kd(new us(e.getProvider("auth-internal")),new fs(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new is(rs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(e.options.projectId,t)}(i,n),i);return r={useFetchStreams:t,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),et($i,zi,e),et($i,zi,"esm2020")}(),
/**
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
*/
et("firebase","12.3.0","app");var rp="@firebase/installations",ip="0.6.19",sp=1e4,op=`w:${ip}`,ap="FIS_v2",cp=36e5,up=new b("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function hp(e){return e instanceof T&&e.code.includes("request-failed")}
/**
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
*/function lp({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function dp(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function fp(e,t){const n=(await t.json()).error;return up.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function pp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function mp(e,{refreshToken:t}){const n=pp(e);return n.append("Authorization",function(e){return`${ap} ${e}`}
/**
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
*/(t)),n}async function gp(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
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
*/
function yp(e){return new Promise(t=>{setTimeout(t,e)})}
/**
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
*/
/**
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
*/
var vp=/^[cdef][\w-]{21}$/;function wp(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
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
*/(e);return vp.test(t)?t:""}catch{return""}}function _p(e){return`${e.appName}!${e.appId}`}
/**
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
*/var Ip=new Map;function Ep(e,t){const n=_p(e);Tp(n,t),function(e,t){const n=function(){!bp&&"BroadcastChannel"in self&&((bp=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{Tp(e.data.key,e.data.fid)});return bp}();n&&n.postMessage({key:e,fid:t});0===Ip.size&&bp&&(bp.close(),bp=null)}(n,t)}function Tp(e,t){const n=Ip.get(e);if(n)for(const r of n)r(t)}var bp=null;
/**
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
*/
var Sp="firebase-installations-store",Cp=null;function Ap(){return Cp||(Cp=se("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Sp)}})),Cp}async function kp(e,t){const n=_p(e),r=(await Ap()).transaction(Sp,"readwrite"),i=r.objectStore(Sp),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||Ep(e,t.fid),t}async function Np(e){const t=_p(e),n=(await Ap()).transaction(Sp,"readwrite");await n.objectStore(Sp).delete(t),await n.done}async function Rp(e,t){const n=_p(e),r=(await Ap()).transaction(Sp,"readwrite"),i=r.objectStore(Sp),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||Ep(e,o.fid),o}
/**
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
*/async function Dp(e){let t;const n=await Rp(e.appConfig,n=>{const r=function(e){const t=e||{fid:wp(),registrationStatus:0};return Lp(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(up.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=lp(e),i=pp(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:ap,appId:e.appId,sdkVersion:op},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await gp(()=>fetch(r,a));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:dp(e.authToken)}}throw await fp("Create Installation",c)}(e,t);return kp(e.appConfig,n)}catch(n){throw hp(n)&&409===n.customData.serverCode?await Np(e.appConfig):await kp(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Pp(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Pp(e){let t=await Op(e.appConfig);for(;1===t.registrationStatus;)await yp(100),t=await Op(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Dp(e);return n||t}return t}function Op(e){return Rp(e,e=>{if(!e)throw up.create("installation-not-found");return Lp(e)})}function Lp(e){return 1===(t=e).registrationStatus&&t.registrationTime+sp<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
*/}async function Mp({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${lp(e)}/${t}/authTokens:generate`}
/**
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
*/(e,n),i=mp(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:op,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await gp(()=>fetch(r,a));if(c.ok){return dp(await c.json())}throw await fp("Generate Auth Token",c)}async function xp(e,t=!1){let n;const r=await Rp(e.appConfig,r=>{if(!Up(r))throw up.create("not-registered");const i=r.authToken;if(t||2!==(s=i).requestStatus||function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+cp}(s)){if(1===i.requestStatus)return n=async function(e,t){let n=await Vp(e.appConfig);for(;1===n.authToken.requestStatus;)await yp(100),n=await Vp(e.appConfig);const r=n.authToken;return 0===r.requestStatus?xp(e,t):r}(e,t),r;{if(!navigator.onLine)throw up.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(r);return n=async function(e,t){try{const n=await Mp(e,t),r={...t,authToken:n};return await kp(e.appConfig,r),n}catch(n){if(!hp(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await kp(e.appConfig,n)}else await Np(e.appConfig);throw n}}(e,t),t}}return r;var s});return n?await n:r.authToken}function Vp(e){return Rp(e,e=>{if(!Up(e))throw up.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+sp<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
/**
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
*/})}function Up(e){return void 0!==e&&2===e.registrationStatus}
/**
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
*/
async function Fp(e,t=!1){const n=e;return await async function(e){const{registrationPromise:t}=await Dp(e);t&&await t}
/**
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
*/(n),(await xp(n,t)).token}function jp(e){return up.create("missing-app-config-values",{valueName:e})}
/**
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
*/var qp="installations",Bp=e=>{const t=Ge(e.getProvider("app").getImmediate(),qp).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Dp(t);return r?r.catch(console.error):xp(t).catch(console.error),n.fid}(t),getToken:e=>Fp(t,e)}};Ke(new M(qp,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw jp("App Configuration");if(!e.name)throw jp("App Name");for(const t of["projectId","apiKey","appId"])if(!e.options[t])throw jp(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Ge(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),Ke(new M("installations-internal",Bp,"PRIVATE")),et(rp,ip),et(rp,ip,"esm2020");
/**
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
*/
var $p="analytics",zp="https://www.googletagmanager.com/gtag/js",Hp=new W("@firebase/analytics"),Kp=new b("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
*/
function Gp(e){if(!e.startsWith(zp)){const t=Kp.create("invalid-gtag-resource",{gtagURL:e});return Hp.warn(t.message),""}return e}function Wp(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function Qp(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Gp}),r=document.createElement("script"),i=`${zp}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Xp(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Wp(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Hp.error(s)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Wp(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(a){Hp.error(a)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t,n]=s;e("consent",t,n)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){Hp.error(o)}}}
/**
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
*/
var Yp=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Jp(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zp(e,t=Yp,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Kp.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Kp.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rm;return setTimeout(async()=>{a.abort()},void 0!==n?n:6e4),em({appId:r,apiKey:i,measurementId:s},o,a,t)}async function em(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Yp){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Kp.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(a){if(o)return Hp.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:s,measurementId:o};throw a}try{const t=await async function(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:Jp(n)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",t),s=await fetch(i,r);if(200!==s.status&&304!==s.status){let e="";try{const t=await s.json();t.error?.message&&(e=t.error.message)}catch(o){}throw Kp.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(s),t}catch(a){const t=a;if(!function(e){if(!(e instanceof T&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),o)return Hp.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t?.message}]`),{appId:s,measurementId:o};throw a}const c=503===Number(t?.customData?.httpStatus)?O(n,i.intervalMillis,30):O(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(s,u),Hp.debug(`Calling attemptFetch again in ${c} millis`),em(e,u,r,i)}}var tm,nm,rm=class{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}};
/**
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
*/async function im(e,t,n,r,i,s,o){const a=Zp(e);a.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Hp.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>Hp.error(e)),t.push(a);const c=
/**
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
*/
async function(){if(!I())return Hp.warn(Kp.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await E()}catch(e){return Hp.warn(Kp.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[u,h]=await Promise.all([a,c]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(zp)&&n.src.includes(e))return n;return null})(s)||Qp(s,u.measurementId),nm&&(i("consent","default",nm),nm=void 0),i("js",new Date);const l=o?.config??{};return l.origin="firebase",l.update=!0,null!=h&&(l.firebase_id=h),i("config",u.measurementId,l),tm&&(i("set",tm),tm=void 0),u.measurementId}
/**
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
*/var sm,om,am=class{constructor(e){this.app=e}_delete(){return delete cm[this.app.options.appId],Promise.resolve()}},cm={},um=[],hm={},lm="dataLayer",dm=!1;function fm(){const e=[];if(w()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=Kp.create("invalid-analytics-context",{errorInfo:t});Hp.warn(n.message)}}function pm(e,t,n){fm();const r=e.options.appId;if(!r)throw Kp.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Kp.create("no-api-key");Hp.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=cm[r])throw Kp.create("already-exists",{id:r});if(!dm){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(lm);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Xp(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(cm,um,hm,lm,"gtag");om=e,sm=t,dm=!0}return cm[r]=im(e,um,hm,t,sm,lm,n),new am(e)}function mm(e=Ze()){const t=Ge(e=L(e),$p);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ge(e,$p);if(n.isInitialized()){const e=n.getImmediate();if(C(t,n.getOptions()))return e;throw Kp.create("already-initialized")}return n.initialize({options:t})}(e)}var gm="@firebase/analytics",ym="0.10.18";Ke(new M($p,(e,{options:t})=>pm(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),Ke(new M("analytics-internal",function(e){try{const t=e.getProvider($p).getImmediate();return{logEvent:(e,n,r)=>function(e,t,n,r){e=L(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,{...r,send_to:i})}}(om,cm[e.app.options.appId],t,n,r).catch(e=>Hp.error(e))}(t,e,n,r)}}catch(t){throw Kp.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),et(gm,ym),et(gm,ym,"esm2020");
/**
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
*/
var vm,wm,_m="firebasestorage.googleapis.com",Im=class e extends T{constructor(t,n,r=0){super(Em(t),`Firebase Storage: ${n} (${Em(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Em(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}};function Em(e){return"storage/"+e}function Tm(e){return new Im(vm.INVALID_ARGUMENT,e)}function bm(){return new Im(vm.APP_DELETED,"The Firebase app was deleted.")}(wm=vm||(vm={})).UNKNOWN="unknown",wm.OBJECT_NOT_FOUND="object-not-found",wm.BUCKET_NOT_FOUND="bucket-not-found",wm.PROJECT_NOT_FOUND="project-not-found",wm.QUOTA_EXCEEDED="quota-exceeded",wm.UNAUTHENTICATED="unauthenticated",wm.UNAUTHORIZED="unauthorized",wm.UNAUTHORIZED_APP="unauthorized-app",wm.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",wm.INVALID_CHECKSUM="invalid-checksum",wm.CANCELED="canceled",wm.INVALID_EVENT_NAME="invalid-event-name",wm.INVALID_URL="invalid-url",wm.INVALID_DEFAULT_BUCKET="invalid-default-bucket",wm.NO_DEFAULT_BUCKET="no-default-bucket",wm.CANNOT_SLICE_BLOB="cannot-slice-blob",wm.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",wm.NO_DOWNLOAD_URL="no-download-url",wm.INVALID_ARGUMENT="invalid-argument",wm.INVALID_ARGUMENT_COUNT="invalid-argument-count",wm.APP_DELETED="app-deleted",wm.INVALID_ROOT_OPERATION="invalid-root-operation",wm.INVALID_FORMAT="invalid-format",wm.INTERNAL_ERROR="internal-error",wm.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
/**
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
*/
var Sm,Cm,Am=class e{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=e.makeFromUrl(t,n)}catch(s){return new e(t,"")}if(""===r.path)return r;throw i=t,new Im(vm.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const a=n.replace(/[.]/g,"\\."),c=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${n===_m?"(?:storage.googleapis.com|storage.cloud.google.com)":n}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let u=0;u<c.length;u++){const n=c[u],i=n.regex.exec(t);if(i){const t=i[n.indices.bucket];let s=i[n.indices.path];s||(s=""),r=new e(t,s),n.postModify(r);break}}if(null==r)throw function(e){return new Im(vm.INVALID_URL,"Invalid URL '"+e+"'.")}(t);return r}},km=class{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function Nm(e,t,n,r){if(r<t)throw Tm(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Tm(`Invalid value for '${e}'. Expected ${n} or less.`)}(Cm=Sm||(Sm={}))[Cm.NO_ERROR=0]="NO_ERROR",Cm[Cm.NETWORK_ERROR=1]="NETWORK_ERROR",Cm[Cm.ABORT=2]="ABORT";
/**
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
*/
var Rm=class{constructor(e,t,n,r,i,s,o,a,c,u,h,l=!0,d=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=l,this.isUsingEmulator=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
/**
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
*/
function(e){return void 0!==e}(e)?n():n(e)}catch(s){r(s)}else if(null!==i){const e=new Im(vm.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?bm():new Im(vm.CANCELED,"User canceled the upload/download."))}else{r(new Im(vm.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new Dm(!1,null,!0)):this.backoffId_=
/**
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
*/
function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function h(...e){u||(u=!0,t.apply(null,e))}function l(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void h.call(null,e,...t);if(c()||o)return d(),void h.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),l(n)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),l(0)):e||(a=1)))}return l(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}((e,t)=>{if(t)return void e(!1,new Dm(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Sm.NO_ERROR,i=n.getStatus();if(!t||
/**
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
*/
function(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Sm.ABORT;return void e(!1,new Dm(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Dm(s,n))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}},Dm=class{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}};function Pm(e,t,n,r,i,s,o=!0,a=!1){const c=function(e){const t=encodeURIComponent;let n="?";for(const r in e)e.hasOwnProperty(r)&&(n=n+(t(r)+"=")+t(e[r])+"&");return n=n.slice(0,-1),n}(e.urlParams),u=e.url+c,h=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(h,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(h,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}(h,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(h,r),new Rm(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o,a)}
/**
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
*/var Om=class e{constructor(e,t){this._service=e,this._location=t instanceof Am?t:Am.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new e(t,n)}get root(){const e=new Am(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){const t=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;const n=new Am(this._location.bucket,t);return new e(this._service,n)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Im(vm.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}};
/**
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
*/function Lm(e,t){const n=t?.storageBucket;return null==n?null:Am.makeFromBucketSpec(n,e)}var Mm=class{constructor(e,t,n,r,i,s=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=_m,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?Am.makeFromBucketSpec(r,this._host):Lm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Am.makeFromBucketSpec(this._url,e):this._bucket=Lm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Om(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new km(bm());{const s=Pm(e,this._appId,n,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}},xm="@firebase/storage",Vm="0.14.0",Um="storage";function Fm(e=Ze(),t){const n=Ge(e=L(e),Um).getImmediate({identifier:t}),r=c("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`;const i=d(t);i&&(f(`https://${e.host}/b`),y("Storage",!0)),e._isUsingEmulator=!0,e._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:p(s,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}function jm(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Mm(n,r,i,t,Ye)}Ke(new M(Um,jm,"PUBLIC").setMultipleInstances(!0)),et(xm,Vm,""),et(xm,Vm,"esm2020");export{ki as $,Yi as A,Zf as B,$f as C,ms as D,tf as E,Xf as F,Jf as G,Gf as H,Xd as I,tp as J,Lf as K,qd as L,Yf as M,jd as N,as as O,xd as P,ur as Q,Qd as R,Of as S,Fs as T,Gd as U,Hf as V,np as W,Qf as X,Wf as Y,Df as Z,Vd as _,Yd as a,Bf as b,As as c,Jd as d,lr as et,Cs as f,ef as g,is as h,bo as i,Ns as j,Ls as k,Ud as l,Kd as m,mm as n,dr as nt,Fd as o,Zd as p,Nf as q,Uf as r,Je as rt,Uo as s,Fm as t,hr as tt,qf as u,Pf as v,jf as w,Rf as x,kf as y,Wd as z};