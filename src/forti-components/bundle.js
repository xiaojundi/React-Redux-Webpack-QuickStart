/* eslint-disable */
import{axios as e}from"@bundled-es-modules/axios";import{LionSingleton as t,DisabledWithTabIndexMixin as s,SlotMixin as i,LitElement as o,html as n,browserDetection as r,css as a,ifDefined as l,dedupeMixin as d,nothing as c,render as h,TemplateResult as u,until as p,DisabledMixin as _}from"@lion/core";import{LocalizeMixin as m,normalizeDateTime as f,getMonthNames as b,getWeekdayNames as g,localize as v,getDecimalSeparator as y,getFractionDigits as k,formatNumber as w,getCurrencyName as E,parseDate as x,formatDate as C}from"@lion/localize";import"@lion/core/src/differentKeyEventNamesShimIE.js";import{LionInput as N}from"@lion/input";import{ChoiceInputMixin as S,ChoiceGroupMixin as T}from"@lion/choice-input";import{FormGroupMixin as L,LionFieldset as F}from"@lion/fieldset";import{FormRegistrarMixin as A,InteractionStateMixin as O,FormatMixin as V,FormControlMixin as D,FormControlsCollection as P,LionField as I,FormRegisteringMixin as R,FormRegistrarPortalMixin as M}from"@lion/field";import{OverlayMixin as B,withModalDialogConfig as U,withDropdownConfig as q}from"@lion/overlays";import{Unparseable as z,ValidateMixin as $,Validator as H,IsNumber as j,IsDate as W,IsEmail as K}from"@lion/validate";import{DisabledMixin as G}from"@lion/core/src/DisabledMixin.js";import{getAriaElementsInRightDomOrder as Q}from"@lion/field/src/utils/getAriaElementsInRightDomOrder.js";import{friendlyFormatIBAN as J,isValidIBAN as Y}from"ibantools";import Z from"@bundled-es-modules/message-format/MessageFormat.js";import{formRegistrarManager as X}from"@lion/field/src/registration/formRegistrarManager.js";import{LionButton as ee}from"@lion/button";import te from"autosize/src/autosize.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const se="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,ie=(e,t,s=null,i=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,i),t=s}},oe=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},ne=`{{lit-${String(Math.random()).slice(2)}}}`,re=`\x3c!--${ne}--\x3e`,ae=new RegExp(`${ne}|${re}`);class le{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],o=document.createTreeWalker(t.content,133,null,!1);let n=0,r=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=o.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)de(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=l[a],s=ue.exec(t)[2],i=s.toLowerCase()+"$lit$",o=e.getAttribute(i);e.removeAttribute(i);const n=o.split(ae);this.parts.push({type:"attribute",index:r,name:s,strings:n}),a+=n.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(ne)>=0){const i=e.parentNode,o=t.split(ae),n=o.length-1;for(let t=0;t<n;t++){let s,n=o[t];if(""===n)s=he();else{const e=ue.exec(n);null!==e&&de(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(n)}i.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===o[n]?(i.insertBefore(he(),e),s.push(e)):e.data=o[n],a+=n}}else if(8===e.nodeType)if(e.data===ne){const t=e.parentNode;null!==e.previousSibling&&r!==n||(r++,t.insertBefore(he(),e)),n=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(ne,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=i.pop()}for(const e of s)e.parentNode.removeChild(e)}}const de=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},ce=e=>-1!==e.index,he=()=>document.createComment(""),ue=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function pe(e,t){const{element:{content:s},parts:i}=e,o=document.createTreeWalker(s,133,null,!1);let n=me(i),r=i[n],a=-1,l=0;const d=[];let c=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,n=me(i,n),r=i[n]}d.forEach(e=>e.parentNode.removeChild(e))}const _e=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},me=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(ce(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const fe=new WeakMap,be=e=>(...t)=>{const s=e(...t);return fe.set(s,!0),s},ge=e=>"function"==typeof e&&fe.has(e),ve={},ye={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ke{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=se?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,n=0,r=0,a=i.nextNode();for(;n<s.length;)if(o=s[n],ce(o)){for(;r<o.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=t.pop(),a=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));n++}else this.__parts.push(void 0),n++;return se&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const we=` ${ne} `;class Ee{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===e.indexOf("--\x3e",o+1);const n=ue.exec(e);t+=null===n?e+(s?we:re):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+ne}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const xe=e=>null===e||!("object"==typeof e||"function"==typeof e),Ce=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Ne{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Se(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(xe(e)||!Ce(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Se{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===ve||xe(e)&&e===this.value||(this.value=e,ge(e)||(this.committer.dirty=!0))}commit(){for(;ge(this.value);){const e=this.value;this.value=ve,e(this)}this.value!==ve&&this.committer.commit()}}class Te{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(he()),this.endNode=e.appendChild(he())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=he()),e.__insert(this.endNode=he())}insertAfterPart(e){e.__insert(this.startNode=he()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;ge(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ve,e(this)}const e=this.__pendingValue;e!==ve&&(xe(e)?e!==this.value&&this.__commitText(e):e instanceof Ee?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ce(e)?this.__commitIterable(e):e===ye?(this.value=ye,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof ke&&this.value.template===t)this.value.update(e.values);else{const s=new ke(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const o of e)s=t[i],void 0===s&&(s=new Te(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(o),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){oe(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Le{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;ge(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ve,e(this)}if(this.__pendingValue===ve)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=ve}}class Fe extends Ne{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new Ae(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ae extends Se{}let Oe=!1;(()=>{try{const e={get capture(){return Oe=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class Ve{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;ge(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=ve,e(this)}if(this.__pendingValue===ve)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=De(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=ve}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const De=e=>e&&(Oe?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function Pe(e){let t=Ie.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ie.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(ne);return s=t.keyString.get(i),void 0===s&&(s=new le(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const Ie=new Map,Re=new WeakMap,Me=(e,t,s)=>{let i=Re.get(t);void 0===i&&(oe(t,t.firstChild),Re.set(t,i=new Te(Object.assign({templateFactory:Pe},s))),i.appendInto(t)),i.setValue(e),i.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Be=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,s,i){const o=t[0];if("."===o){return new Fe(e,t.slice(1),s).parts}return"@"===o?[new Ve(e,t.slice(1),i.eventContext)]:"?"===o?[new Le(e,t.slice(1),s)]:new Ne(e,t,s).parts}handleTextExpression(e){return new Te(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.0");const Ue=(e,...t)=>new Ee(e,t,"html",Be),qe=(e,t)=>`${e}--${t}`;let ze=!0;void 0===window.ShadyCSS?ze=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ze=!1);const $e=e=>t=>{const s=qe(t.type,e);let i=Ie.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Ie.set(s,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const n=t.strings.join(ne);if(o=i.keyString.get(n),void 0===o){const s=t.getTemplateElement();ze&&window.ShadyCSS.prepareTemplateDom(s,e),o=new le(t,s),i.keyString.set(n,o)}return i.stringsArray.set(t.strings,o),o},He=["html","svg"],je=new Set,We=(e,t,s)=>{je.add(e);const i=s?s.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const r=document.createElement("style");for(let e=0;e<n;e++){const t=o[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{He.forEach(t=>{const s=Ie.get(qe(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),pe(e,s)})})})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:o}=e;if(null==s)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let r=me(o),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===s&&(a=_e(t),s.parentNode.insertBefore(t,s));-1!==r&&o[r].index===l;){if(a>0){for(;-1!==r;)o[r].index+=a,r=me(o,r);return}r=me(o,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),pe(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Ke={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Ge=(e,t)=>t!==e&&(t==t||e==e),Qe={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Ge};class Je extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Qe){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Qe}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=Ge){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||Ke,o="function"==typeof i?i:i.fromAttribute;return o?o(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||Ke.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=Qe){const i=this.constructor,o=i._attributeNameForProperty(e,s);if(void 0!==o){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,o=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Je.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ye="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol();class Xe{constructor(e,t){if(t!==Ze)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Ye?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof Xe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new Xe(s,Ze)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.0");const tt={};class st extends Je{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ye?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==tt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return tt}}st.finalized=!0,st.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,o=Re.has(t),n=ze&&11===t.nodeType&&!!t.host,r=n&&!je.has(i),a=r?document.createDocumentFragment():t;if(Me(e,a,Object.assign({templateFactory:$e(i)},s)),r){const e=Re.get(a);Re.delete(a);const s=e.value instanceof ke?e.value.template:void 0;We(i,a,s),oe(t,t.firstChild),t.appendChild(a),Re.set(t,e)}!o&&n&&window.ShadyCSS.styleElement(t.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var it=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,s=e[Symbol.asyncIterator];return s?s.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=e[s]&&function(t){return new Promise((function(i,o){(function(e,t,s,i){Promise.resolve(i).then((function(t){e({value:t,done:s})}),t)})(i,o,(t=e[s](t)).done,t.value)}))}}};be((e,t)=>async s=>{var i,o;if(!(s instanceof Te))throw new Error("asyncAppend can only be used in text bindings");if(e===s.value)return;let n;s.value=e;let r=0;try{for(var a,l=it(e);!(a=await l.next()).done;){let i=a.value;if(s.value!==e)break;0===r&&s.clear(),void 0!==t&&(i=t(i,r));let o=s.startNode;void 0!==n&&(o=he(),n.endNode=o,s.endNode.parentNode.insertBefore(o,s.endNode)),n=new Te(s.options),n.insertAfterNode(o),n.setValue(i),n.commit(),r++}}catch(e){i={error:e}}finally{try{a&&!a.done&&(o=l.return)&&await o.call(l)}finally{if(i)throw i.error}}});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var ot=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,s=e[Symbol.asyncIterator];return s?s.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=e[s]&&function(t){return new Promise((function(i,o){(function(e,t,s,i){Promise.resolve(i).then((function(t){e({value:t,done:s})}),t)})(i,o,(t=e[s](t)).done,t.value)}))}}};be((e,t)=>async s=>{var i,o;if(!(s instanceof Te))throw new Error("asyncReplace can only be used in text bindings");if(e===s.value)return;const n=new Te(s.options);s.value=e;let r=0;try{for(var a,l=ot(e);!(a=await l.next()).done;){let i=a.value;if(s.value!==e)break;0===r&&(s.clear(),n.appendIntoPart(s)),void 0!==t&&(i=t(i,r)),n.setValue(i),n.commit(),r++}}catch(e){i={error:e}}finally{try{a&&!a.done&&(o=l.return)&&await o.call(l)}finally{if(i)throw i.error}}});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const nt=new WeakMap;be(e=>t=>{if(!(t instanceof Te))throw new Error("cache can only be used in text bindings");let s=nt.get(t);void 0===s&&(s=new WeakMap,nt.set(t,s));const i=t.value;if(i instanceof ke){if(e instanceof Ee&&i.template===t.options.templateFactory(e))return void t.setValue(e);{let e=s.get(i.template);void 0===e&&(e={instance:i,nodes:document.createDocumentFragment()},s.set(i.template,e)),ie(e.nodes,t.startNode.nextSibling,t.endNode)}}if(e instanceof Ee){const i=t.options.templateFactory(e),o=s.get(i);void 0!==o&&(t.setValue(o.nodes),t.commit(),t.value=o.instance)}t.setValue(e)});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class rt{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const at=new WeakMap,lt=(be(e=>t=>{if(!(t instanceof Se)||t instanceof Ae||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=t,{element:i}=s;let o=at.get(t);void 0===o&&(i.setAttribute("class",s.strings.join(" ")),at.set(t,o=new Set));const n=i.classList||new rt(i);o.forEach(t=>{t in e||(n.remove(t),o.delete(t))});for(const t in e){const s=e[t];s!=o.has(t)&&(s?(n.add(t),o.add(t)):(n.remove(t),o.delete(t)))}"function"==typeof n.commit&&n.commit()}),new WeakMap),dt=(be((e,t)=>s=>{const i=lt.get(s);if(Array.isArray(e)){if(Array.isArray(i)&&i.length===e.length&&e.every((e,t)=>e===i[t]))return}else if(i===e&&(void 0!==e||lt.has(s)))return;s.setValue(t()),lt.set(s,Array.isArray(e)?Array.from(e):e)}),new WeakMap),ct=(be(e=>t=>{const s=dt.get(t);if(void 0===e&&t instanceof Se){if(void 0!==s||!dt.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==s&&t.setValue(e);dt.set(t,e)}),(e,t)=>{const s=e.startNode.parentNode,i=void 0===t?e.endNode:t.startNode,o=s.insertBefore(he(),i);s.insertBefore(he(),i);const n=new Te(e.options);return n.insertAfterNode(o),n}),ht=(e,t)=>(e.setValue(t),e.commit(),e),ut=(e,t,s)=>{const i=e.startNode.parentNode,o=s?s.startNode:e.endNode,n=t.endNode.nextSibling;n!==o&&ie(i,t.startNode,n,o)},pt=e=>{oe(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},_t=(e,t,s)=>{const i=new Map;for(let o=t;o<=s;o++)i.set(e[o],o);return i},mt=new WeakMap,ft=new WeakMap,bt=(be((e,t,s)=>{let i;return void 0===s?s=t:void 0!==t&&(i=t),t=>{if(!(t instanceof Te))throw new Error("repeat can only be used in text bindings");const o=mt.get(t)||[],n=ft.get(t)||[],r=[],a=[],l=[];let d,c,h=0;for(const t of e)l[h]=i?i(t,h):h,a[h]=s(t,h),h++;let u=0,p=o.length-1,_=0,m=a.length-1;for(;u<=p&&_<=m;)if(null===o[u])u++;else if(null===o[p])p--;else if(n[u]===l[_])r[_]=ht(o[u],a[_]),u++,_++;else if(n[p]===l[m])r[m]=ht(o[p],a[m]),p--,m--;else if(n[u]===l[m])r[m]=ht(o[u],a[m]),ut(t,o[u],r[m+1]),u++,m--;else if(n[p]===l[_])r[_]=ht(o[p],a[_]),ut(t,o[p],o[u]),p--,_++;else if(void 0===d&&(d=_t(l,_,m),c=_t(n,u,p)),d.has(n[u]))if(d.has(n[p])){const e=c.get(l[_]),s=void 0!==e?o[e]:null;if(null===s){const e=ct(t,o[u]);ht(e,a[_]),r[_]=e}else r[_]=ht(s,a[_]),ut(t,s,o[u]),o[e]=null;_++}else pt(o[p]),p--;else pt(o[u]),u++;for(;_<=m;){const e=ct(t,r[m+1]);ht(e,a[_]),r[_++]=e}for(;u<=p;){const e=o[u++];null!==e&&pt(e)}mt.set(t,r),ft.set(t,l)}}),new WeakMap),gt=(be(e=>t=>{if(!(t instanceof Se)||t instanceof Ae||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:s}=t,{style:i}=s.element;let o=bt.get(t);void 0===o&&(i.cssText=s.strings.join(" "),bt.set(t,o=new Set)),o.forEach(t=>{t in e||(o.delete(t),-1===t.indexOf("-")?i[t]=null:i.removeProperty(t))});for(const t in e)o.add(t),-1===t.indexOf("-")?i[t]=e[t]:i.setProperty(t,e[t])}),new WeakMap),vt=(be(e=>t=>{if(!(t instanceof Te))throw new Error("unsafeHTML can only be used in text bindings");const s=gt.get(t);if(void 0!==s&&xe(e)&&e===s.value&&t.value===s.fragment)return;const i=document.createElement("template");i.innerHTML=e;const o=document.importNode(i.content,!0);t.setValue(o),gt.set(t,{value:e,fragment:o})}),new WeakMap),yt=(be((...e)=>t=>{let s=vt.get(t);void 0===s&&(s={lastRenderedIndex:2147483647,values:[]},vt.set(t,s));const i=s.values;let o=i.length;s.values=e;for(let n=0;n<e.length&&!(n>s.lastRenderedIndex);n++){const r=e[n];if(xe(r)||"function"!=typeof r.then){t.setValue(r),s.lastRenderedIndex=n;break}n<o&&r===i[n]||(s.lastRenderedIndex=2147483647,o=0,Promise.resolve(r).then(e=>{const i=s.values.indexOf(r);i>-1&&i<s.lastRenderedIndex&&(s.lastRenderedIndex=i,t.setValue(e),t.commit())}))}}),new WeakMap);function kt(e,t){return function(e){const t=[];let s=e;for(;s;)t.push(s),s=Object.getPrototypeOf(s);return t}(t).reduce((t,s)=>t||yt.get(s)===e,!1)}function wt(e){return t=>{if(kt(e,t))return t;const s=e(t);return yt.set(s,e),s}}wt(e=>class extends e{constructor(){super(),this.__eventsQueue=[],this.__propertiesQueue={},this.__setupPropertyDelegation()}get delegations(){return{target:null,events:[],methods:[],properties:[],attributes:[]}}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._connectDelegateMixin()}updated(...e){super.updated(...e),this._connectDelegateMixin()}addEventListener(e,...t){this.delegations.events.indexOf(e)>-1?this.delegationTarget?this.delegationTarget.addEventListener(e,...t):this.__eventsQueue.push({type:e,args:t}):super.addEventListener(e,...t)}setAttribute(e,t){this.delegations.attributes.indexOf(e)>-1?(this.delegationTarget&&this.delegationTarget.setAttribute(e,t),super.removeAttribute(e)):super.setAttribute(e,t)}removeAttribute(e){this.delegations.attributes.indexOf(e)>-1&&this.delegationTarget&&this.delegationTarget.removeAttribute(e),super.removeAttribute(e)}_connectDelegateMixin(){this.__connectedDelegateMixin||(this.delegationTarget||(this.delegationTarget=this.delegations.target()),this.delegationTarget&&(this.__emptyEventListenerQueue(),this.__emptyPropertiesQueue(),this.__initialAttributeDelegation(),this.__connectedDelegateMixin=!0))}__setupPropertyDelegation(){this.delegations.properties.concat(this.delegations.methods).forEach(e=>{Object.defineProperty(this,e,{get(){const t=this.delegationTarget;return t?"function"==typeof t[e]?t[e].bind(t):t[e]:this.__propertiesQueue[e]?this.__propertiesQueue[e]:this.getAttribute(e)},set(t){if(this.delegationTarget){const s=this.delegationTarget[e];this.delegationTarget[e]=t,"function"==typeof this.triggerObserversFor&&this.triggerObserversFor(e,t,s)}else this.__propertiesQueue[e]=t}})})}__initialAttributeDelegation(){this.delegations.attributes.forEach(e=>{const t=this.getAttribute(e);"string"==typeof t&&(this.delegationTarget.setAttribute(e,t),super.removeAttribute(e))})}__emptyEventListenerQueue(){this.__eventsQueue.forEach(e=>{this.delegationTarget.addEventListener(e.type,...e.args)})}__emptyPropertiesQueue(){Object.keys(this.__propertiesQueue).forEach(e=>{this.delegationTarget[e]=this.__propertiesQueue[e]})}});const Et=wt(e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.__requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){!1===this.__requestedToBeDisabled&&(this.__requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){!0===this.__requestedToBeDisabled&&(this.__requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}_requestUpdate(e,t){super._requestUpdate(e,t),"disabled"===e&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),!1===this.disabled&&!0===this.__requestedToBeDisabled&&this.__internalSetDisabled(!0))}});wt(e=>class extends(Et(e)){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),!1===this.__requestedToBeDisabled&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),!0===this.__requestedToBeDisabled&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}_requestUpdate(e,t){super._requestUpdate(e,t),"disabled"===e&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),"tabIndex"===e&&(this.__isUserSettingTabIndex&&(this.__restoreTabIndexTo=this.tabIndex),-1!==this.tabIndex&&!0===this.__requestedToBeDisabled&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}});wt(e=>class extends e{get slots(){return{}}constructor(){super(),this.__privateSlots=new Set(null)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._connectSlotMixin()}_connectSlotMixin(){this.__isConnectedSlotMixin||(Object.keys(this.slots).forEach(e=>{if(!this.querySelector(`[slot=${e}]`)){const t=(0,this.slots[e])();t instanceof Element&&(t.setAttribute("slot",e),this.appendChild(t),this.__privateSlots.add(e))}}),this.__isConnectedSlotMixin=!0)}_isPrivateSlot(e){return this.__privateSlots.has(e)}});function xt(e){this.wrapped=e}function Ct(e){var t,s;function i(t,s){try{var n=e[t](s),r=n.value,a=r instanceof xt;Promise.resolve(a?r.wrapped:r).then((function(e){a?i("return"===t?"return":"next",e):o(n.done?"return":"normal",e)}),(function(e){i("throw",e)}))}catch(e){o("throw",e)}}function o(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?i(t.key,t.arg):s=null}this._invoke=function(e,o){return new Promise((function(n,r){var a={key:e,arg:o,resolve:n,reject:r,next:null};s?s=s.next=a:(t=s=a,i(e,o))}))},"function"!=typeof e.return&&(this.return=void 0)}function Nt(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function St(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function Tt(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?St(Object(s),!0).forEach((function(t){Nt(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):St(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}"function"==typeof Symbol&&Symbol.asyncIterator&&(Ct.prototype[Symbol.asyncIterator]=function(){return this}),Ct.prototype.next=function(e){return this._invoke("next",e)},Ct.prototype.throw=function(e){return this._invoke("throw",e)},Ct.prototype.return=function(e){return this._invoke("return",e)};wt(e=>class extends e{updateStyles(e){const t=Tt({},(this.getAttribute("style")||this.getAttribute("data-style")||"").split(";").reduce((e,t)=>{const s=t.split(":");return 2===s.length&&(e[s[0]]=s[1]),e},{}),{},e);let s="";if("object"!=typeof ShadyCSS||ShadyCSS.nativeShadow)Object.keys(t).forEach(e=>{s+=`${e}: ${t[e]};`}),this.setAttribute("style",s);else{const e={};Object.keys(t).forEach(i=>{-1===i.indexOf("--")?s+=`${i}:${t[i]};`:e[i]=t[i]}),this.setAttribute("style",s),ShadyCSS.styleSubtree(this,e)}}}),/Trident/.test(window.navigator.userAgent);(class extends t{constructor(t){var s,i;if(super(),this.__config=Tt({lang:document.documentElement.getAttribute("lang"),languageHeader:!0,cancelable:!1,cancelPreviousOnNewRequest:!1},t),this.proxy=e.create(this.__config),this.__setupInterceptors(),this.requestInterceptors=[],this.requestErrorInterceptors=[],this.requestDataTransformers=[],this.requestDataErrorTransformers=[],this.responseDataTransformers=[],this.responseDataErrorTransformers=[],this.responseInterceptors=[],this.responseErrorInterceptors=[],this.__isInterceptorsSetup=!1,this.__config.languageHeader&&this.requestInterceptors.push((s=this.__config.lang,e=>{const t=e;if("string"==typeof s&&""!==s){"object"!=typeof t.headers&&(t.headers={});const e={headers:Tt({"Accept-Language":s},t.headers)};return Tt({},t,{},e)}return t})),this.__config.cancelable&&this.requestInterceptors.push(function(t){const s=[];return i=>{const o=e.CancelToken.source();return s.push(o),t.cancel=(e="Operation canceled by the user.")=>{s.forEach(t=>t.cancel(e))},Tt({},i,{cancelToken:o.token})}}(this)),this.__config.cancelPreviousOnNewRequest&&this.requestInterceptors.push(function(){let t;return s=>{t&&t.cancel("Concurrent requests not allowed.");const i=e.CancelToken.source();return t=i,Tt({},s,{cancelToken:i.token})}}()),this.__config.jsonPrefix){const e=(i=this.__config.jsonPrefix,e=>{let t=e;if("string"==typeof t){i.length>0&&0===t.indexOf(i)&&(t=t.substring(i.length));try{t=JSON.parse(t)}catch(e){}}return t});this.responseDataTransformers.push(e)}}set options(e){this.__config=e}get options(){return this.__config}request(e,t){return this.proxy.request.apply(this,[e,Tt({},this.__config,{},t)])}get(e,t){return this.proxy.get.apply(this,[e,Tt({},this.__config,{},t)])}delete(e,t){return this.proxy.delete.apply(this,[e,Tt({},this.__config,{},t)])}head(e,t){return this.proxy.head.apply(this,[e,Tt({},this.__config,{},t)])}post(e,t,s){return this.proxy.post.apply(this,[e,t,Tt({},this.__config,{},s)])}put(e,t,s){return this.proxy.put.apply(this,[e,t,Tt({},this.__config,{},s)])}patch(e,t,s){return this.proxy.patch.apply(this,[e,t,Tt({},this.__config,{},s)])}__setupInterceptors(){this.proxy.interceptors.request.use(e=>{const t=this.__setupTransformers(e);return this.requestInterceptors.reduce((e,t)=>t(e),t)},e=>(this.requestErrorInterceptors.forEach(t=>t(e)),Promise.reject(e))),this.proxy.interceptors.response.use(e=>this.responseInterceptors.reduce((e,t)=>t(e),e),e=>(this.responseErrorInterceptors.forEach(t=>t(e)),Promise.reject(e)))}__setupTransformers(e){const t=e.transformRequest[0],s=e.transformResponse[0];return Tt({},e,{transformRequest:(e,s)=>{try{const i=this.requestDataTransformers.reduce((e,t)=>t(e,s),e);return t(i,s)}catch(e){throw this.requestDataErrorTransformers.forEach(t=>t(e)),e}},transformResponse:e=>{try{const t=s(e);return this.responseDataTransformers.reduce((e,t)=>t(e),t)}catch(e){throw this.responseDataErrorTransformers.forEach(t=>t(e)),e}}})}}).getInstance();const Lt=e=>32===e.keyCode||13===e.keyCode;class Ft extends(s(i(o))){static get properties(){return{role:{type:String,reflect:!0},active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return n`
      <div class="btn">
        ${this._renderBefore()}
        ${r.isIE11?n`
              <div id="${this._buttonId}"><slot></slot></div>
            `:n`
              <slot></slot>
            `}
        ${this._renderAfter()}
        <slot name="_button"></slot>
        <div class="click-area"></div>
      </div>
    `}_renderBefore(){return n``}_renderAfter(){return n``}static get styles(){return[a`
        :host {
          display: inline-block;
          padding-top: 2px;
          padding-bottom: 2px;
          min-height: 40px; /* src = https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/ */
          outline: 0;
          background-color: transparent;
          box-sizing: border-box;
        }

        .btn {
          min-height: 24px;
          display: flex;
          align-items: center;
          position: relative;
          background: #eee; /* minimal styling to make it recognizable as btn */
          padding: 7px 15px;
          outline: none; /* focus style handled below, else it follows boundaries of click-area */
        }

        :host .btn ::slotted(button) {
          position: absolute;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          height: 1px;
          width: 1px;
        }

        .click-area {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: -3px -1px;
          padding: 0;
        }

        :host(:focus:not([disabled])) .btn {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        :host(:hover) .btn {
          /* if you extend, please overwrite */
          background: #f4f6f7;
        }

        :host(:active) .btn, /* keep native :active to render quickly where possible */
        :host([active]) .btn /* use custom [active] to fix IE11 */ {
          /* if you extend, please overwrite */
          background: gray;
        }

        :host([disabled]) {
          pointer-events: none;
        }

        :host([disabled]) .btn {
          /* if you extend, please overwrite */
          background: lightgray;
          color: #adadad;
          fill: #adadad;
        }
      `]}get _nativeButtonNode(){return Array.from(this.children).find(e=>"_button"===e.slot)}get _form(){return this._nativeButtonNode.form}get slots(){return Tt({},super.slots,{_button:()=>(this.constructor._button||(this.constructor._button=document.createElement("button"),this.constructor._button.setAttribute("tabindex","-1"),this.constructor._button.setAttribute("aria-hidden","true")),this.constructor._button.cloneNode())})}constructor(){super(),this.role="button",this.type="submit",this.active=!1,this.__setupDelegationInConstructor(),r.isIE11&&(this._buttonId=`button-${Math.random().toString(36).substr(2,10)}`,this.updateComplete.then(()=>this.setAttribute("aria-labelledby",this._buttonId)))}connectedCallback(){super.connectedCallback(),this.__setupEvents()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEvents()}updated(e){if(super.updated(e),e.has("type")){const e=this._nativeButtonNode;e&&(e.type=this.type)}}__clickDelegationHandler(e){if(("submit"===this.type||"reset"===this.type)&&e.target===this&&this._form){const e=document.createElement("button");e.type=this.type,this._form.appendChild(e),e.click(),this._form.removeChild(e)}}__setupDelegationInConstructor(){this.addEventListener("click",this.__clickDelegationHandler,!0)}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__teardownEvents(){this.removeEventListener("mousedown",this.__mousedownHandler),this.removeEventListener("keydown",this.__keydownHandler),this.removeEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const e=()=>{this.active=!1,document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}__keydownHandler(e){if(this.active||!Lt(e))return;(e=>32===e.keyCode)(e)&&e.preventDefault(),this.active=!0;const t=e=>{Lt(e)&&(this.active=!1,document.removeEventListener("keyup",t,!0))};document.addEventListener("keyup",t,!0)}__keyupHandler(e){if(Lt(e)){if(e.srcElement&&e.srcElement!==this)return;this.click()}}}a`
  :host {
    display: block;
  }

  .calendar {
    display: block;
  }

  .calendar__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #adadad;
    padding: 0 8px;
  }

  .calendar__month-heading {
    margin: 0.5em 0;
  }

  .calendar__previous-month-button,
  .calendar__next-month-button {
    background-color: #fff;
    border: 0;
    padding: 0;
    min-width: 40px;
    min-height: 40px;
  }

  .calendar__grid {
    width: 100%;
    padding: 8px 8px;
  }

  .calendar__weekday-header {
  }

  .calendar__day-cell {
    text-align: center;
  }

  .calendar__day-button {
    background-color: #fff;
    border: 0;
    color: black;
    padding: 0;
    min-width: 40px;
    min-height: 40px;
  }

  .calendar__day-button[today] {
    text-decoration: underline;
  }

  .calendar__day-button[selected] {
    background: #ccc;
  }

  .calendar__day-button[previous-month],
  .calendar__day-button[next-month] {
    color: rgb(115, 115, 115);
  }

  .calendar__day-button:hover {
    border: 1px solid green;
  }

  .calendar__day-button[disabled] {
    background-color: #fff;
    color: #eee;
    outline: none;
  }
`;m(o);class At extends(S(N)){connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.type="checkbox"}}T(L(o));d(e=>class extends(A(O(e))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.modelValue.value):e[0]?e[0].modelValue.value:""}set modelValue(e){this._setCheckedElements(e,(e,t)=>e.modelValue.value===t)}get serializedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.serializedValue.value):e[0]?e[0].serializedValue.value:""}set serializedValue(e){this._setCheckedElements(e,(e,t)=>e.serializedValue===t)}constructor(){super(),this.multipleChoice=!1}connectedCallback(){super.connectedCallback(),this.multipleChoice||this.addEventListener("model-value-changed",this._checkSingleChoiceElements)}disconnectedCallback(){super.disconnectedCallback(),this.multipleChoice||this.removeEventListener("model-value-changed",this._checkSingleChoiceElements)}addFormElement(e,t){this._throwWhenInvalidChildModelValue(e),this.__delegateNameAttribute(e),super.addFormElement(e,t)}_getFromAllFormElements(e,t=(()=>!0)){return"modelValue"===e||"serializedValue"===e?this[e]:this.formElements.filter(t).map(e=>e.property)}_throwWhenInvalidChildModelValue(e){if("boolean"!=typeof e.modelValue.checked||!Object.prototype.hasOwnProperty.call(e.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){const e=this.modelValue;return this.multipleChoice?0===this.modelValue.length:"string"==typeof e&&""===e||null==e}_checkSingleChoiceElements(e){const{target:t}=e;if(!1===t.checked)return;const s=t.name;this.formElements.filter(e=>e.name===s).forEach(e=>{e!==t&&(e.checked=!1)}),this.__triggerCheckedValueChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}async _setCheckedElements(e,t){this.__readyForRegistration||await this.registrationReady;for(let s=0;s<this.formElements.length;s+=1)this.multipleChoice?this.formElements[s].checked=e.includes(this.formElements[s].value):t(this.formElements[s],e)&&(this.formElements[s].checked=!0)}__triggerCheckedValueChanged(){const e=this.modelValue;null!=e&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}__delegateNameAttribute(e){if(e.name&&e.name!==this.name)throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with custom names (name="${e.name}" given)`);e.name=this.name}});B(o);const Ot=d(e=>class extends e{static get properties(){return{focused:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.__registerEventsForFocusMixin()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}focus(){const e=this._inputNode;e&&e.focus()}blur(){const e=this._inputNode;e&&e.blur()}__onFocus(){super.__onFocus&&super.__onFocus(),this.focused=!0}__onBlur(){super.__onBlur&&super.__onBlur(),this.focused=!1}__registerEventsForFocusMixin(){this.__redispatchFocus=e=>{e.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._inputNode.addEventListener("focus",this.__redispatchFocus),this.__redispatchBlur=e=>{e.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._inputNode.addEventListener("blur",this.__redispatchBlur),this.__redispatchFocusin=e=>{e.stopPropagation(),this.__onFocus(e),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._inputNode.addEventListener("focusin",this.__redispatchFocusin),this.__redispatchFocusout=e=>{e.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._inputNode.addEventListener("focusout",this.__redispatchFocusout)}__teardownEventsForFocusMixin(){this._inputNode.removeEventListener("focus",this.__redispatchFocus),this._inputNode.removeEventListener("blur",this.__redispatchBlur),this._inputNode.removeEventListener("focusin",this.__redispatchFocusin),this._inputNode.removeEventListener("focusout",this.__redispatchFocusout)}}),Vt=d(e=>class extends e{static get properties(){return{modelValue:{type:Object},formattedValue:{type:String},serializedValue:{type:String},formatOn:{type:String},formatOptions:{type:Object}}}_requestUpdate(e,t){super._requestUpdate(e,t),"modelValue"===e&&this.modelValue!==t&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:t}),"serializedValue"===e&&this.serializedValue!==t&&this._calculateValues({source:"serialized"}),"formattedValue"===e&&this.formattedValue!==t&&this._calculateValues({source:"formatted"})}parser(e){return e}formatter(e){return e}serializer(e){return void 0!==e?e:""}deserializer(e){return void 0===e?"":e}_calculateValues({source:e}={}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,"model"!==e&&("serialized"===e?this.modelValue=this.deserializer(this.serializedValue):"formatted"===e&&(this.modelValue=this.__callParser())),"formatted"!==e&&(this.formattedValue=this.__callFormatter()),"serialized"!==e&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1)}__callParser(e=this.formattedValue){if(""===e)return"";if("string"!=typeof e)return;const t=this.parser(e,this.formatOptions);return void 0!==t?t:new z(e)}__callFormatter(){return this.__isHandlingUserInput&&this.hasFeedbackFor&&this.hasFeedbackFor.length&&this.hasFeedbackFor.includes("error")&&this._inputNode?this._inputNode?this.value:void 0:this.modelValue instanceof z?this.modelValue.viewValue:this.formatter(this.modelValue,this.formatOptions)}_onModelValueChanged(...e){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...e)}_dispatchModelValueChangedEvent(){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,composed:!0}))}_syncValueUpwards(){this.modelValue=this.__callParser(this.value)}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=void 0!==this.formattedValue?this.formattedValue:"")}_reflectBackOn(){return!this.__isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new CustomEvent("user-input-changed",{bubbles:!0,composed:!0}))}_onUserInputChanged(){this.__isHandlingUserInput=!0,this._syncValueUpwards(),this.__isHandlingUserInput=!1}constructor(){super(),this.formatOn="change",this.formatOptions={}}connectedCallback(){super.connectedCallback(),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)},this.addEventListener("user-input-changed",this._onUserInputChanged),void 0===this.modelValue&&this._syncValueUpwards(),this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("user-input-changed",this._onUserInputChanged),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced))}});const Dt=new class{constructor(){this.__elements=[],this._fakeExtendsEventTarget(),this.ready=!1}add(e){this.__elements.push(e),this.ready=!1}remove(e){this.__elements.splice(this.__elements.indexOf(e),1)}becomesReady(){this.__elements.every(e=>!0===e.__readyForRegistration)&&(this.dispatchEvent(new Event("all-forms-open-for-registration")),this.ready=!0)}_fakeExtendsEventTarget(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...s)=>e[t](...s)})}},Pt=d(e=>class extends e{constructor(){super(),this.__boundDispatchRegistration=this._dispatchRegistration.bind(this)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.__setupRegistrationHook()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._unregisterFormElement()}__setupRegistrationHook(){Dt.ready?this._dispatchRegistration():Dt.addEventListener("all-forms-open-for-registration",this.__boundDispatchRegistration)}_dispatchRegistration(){this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0})),Dt.removeEventListener("all-forms-open-for-registration",this.__boundDispatchRegistration)}_unregisterFormElement(){this.__parentFormGroup&&this.__parentFormGroup.removeFormElement(this)}});function It(e,{reverse:t}={}){const s=e.filter(e=>e);return s.sort((e,t)=>{const s=e.compareDocumentPosition(t);return s===Node.DOCUMENT_POSITION_PRECEDING||s===Node.DOCUMENT_POSITION_CONTAINED_BY?r.isIE11?-1:1:r.isIE11?1:-1}),t&&s.reverse(),s}const Rt=d(e=>class extends(Pt(i(e))){static get properties(){return{name:{type:String,reflect:!0},label:String,helpText:{type:String,attribute:"help-text"},_ariaLabelledNodes:Array,_ariaDescribedNodes:Array}}get label(){return this.__label||this._labelNode&&this._labelNode.textContent}set label(e){const t=this.label;this.__label=e,this.requestUpdate("label",t)}get helpText(){return this.__helpText||this._helpTextNode&&this._helpTextNode.textContent}set helpText(e){const t=this.helpText;this.__helpText=e,this.requestUpdate("helpText",t)}set fieldName(e){this.__fieldName=e}get fieldName(){return this.__fieldName||this.label||this.name}get slots(){return Tt({},super.slots,{label:()=>{const e=document.createElement("label");return e.textContent=this.label,e},"help-text":()=>{const e=document.createElement("div");return e.textContent=this.helpText,e}})}updated(e){super.updated(e),e.has("_ariaLabelledNodes")&&this.__reflectAriaAttr("aria-labelledby",this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),e.has("_ariaDescribedNodes")&&this.__reflectAriaAttr("aria-describedby",this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),e.has("label")&&this._onLabelChanged({label:this.label}),e.has("helpText")&&this._onHelpTextChanged({helpText:this.helpText})}get _inputNode(){return this.__getDirectSlotChild("input")}get _labelNode(){return this.__getDirectSlotChild("label")}get _helpTextNode(){return this.__getDirectSlotChild("help-text")}get _feedbackNode(){return this.__getDirectSlotChild("feedback")}constructor(){super(),this._inputId=`${this.localName}-${Math.random().toString(36).substr(2,10)}`,this._ariaLabelledNodes=[],this._ariaDescribedNodes=[]}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:e,_labelNode:t,_helpTextNode:s,_feedbackNode:i}=this;e&&(e.id=e.id||this._inputId),t&&(t.setAttribute("for",this._inputId),this.addToAriaLabelledBy(t,{idPrefix:"label"})),s&&this.addToAriaDescribedBy(s,{idPrefix:"help-text"}),i&&(i.setAttribute("aria-live","polite"),this.addToAriaDescribedBy(i,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(e=["prefix","suffix","before","after"]){e.forEach(e=>{const t=this.__getDirectSlotChild(e);t&&(!0===t.hasAttribute("data-label")&&this.addToAriaLabelledBy(t,{idPrefix:e}),!0===t.hasAttribute("data-description")&&this.addToAriaDescribedBy(t,{idPrefix:e}))})}__reflectAriaAttr(e,t,s){if(this._inputNode){if(s){const e=t.filter(e=>this.contains(e)),s=t.filter(e=>!this.contains(e));t=[...It(e),...s]}const i=t.map(e=>e.id).join(" ");this._inputNode.setAttribute(e,i)}}_onLabelChanged({label:e}){this._labelNode&&(this._labelNode.textContent=e)}_onHelpTextChanged({helpText:e}){this._helpTextNode&&(this._helpTextNode.textContent=e)}render(){return n`
          <div class="form-field__group-one">
            ${this.groupOneTemplate()}
          </div>
          <div class="form-field__group-two">
            ${this.groupTwoTemplate()}
          </div>
        `}groupOneTemplate(){return n`
          ${this.labelTemplate()} ${this.helpTextTemplate()}
        `}groupTwoTemplate(){return n`
          ${this.inputGroupTemplate()} ${this.feedbackTemplate()}
        `}labelTemplate(){return n`
          <div class="form-field__label">
            <slot name="label"></slot>
          </div>
        `}helpTextTemplate(){return n`
          <small class="form-field__help-text">
            <slot name="help-text"></slot>
          </small>
        `}inputGroupTemplate(){return n`
          <div class="input-group">
            ${this.inputGroupBeforeTemplate()}
            <div class="input-group__container">
              ${this.inputGroupPrefixTemplate()} ${this.inputGroupInputTemplate()}
              ${this.inputGroupSuffixTemplate()}
            </div>
            ${this.inputGroupAfterTemplate()}
          </div>
        `}inputGroupBeforeTemplate(){return n`
          <div class="input-group__before">
            <slot name="before"></slot>
          </div>
        `}inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>"prefix"===e.slot)?n`
              <div class="input-group__prefix">
                <slot name="prefix"></slot>
              </div>
            `:c}inputGroupInputTemplate(){return n`
          <div class="input-group__input">
            <slot name="input"></slot>
          </div>
        `}inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>"suffix"===e.slot)?n`
              <div class="input-group__suffix">
                <slot name="suffix"></slot>
              </div>
            `:c}inputGroupAfterTemplate(){return n`
          <div class="input-group__after">
            <slot name="after"></slot>
          </div>
        `}feedbackTemplate(){return n`
          <div class="form-field__feedback">
            <slot name="feedback"></slot>
          </div>
        `}static get styles(){return[a`
            /**********************
          {block} .form-field
             ********************/

            :host {
              display: block;
            }

            :host([disabled]) {
              pointer-events: none;
            }

            :host([disabled]) .form-field__label ::slotted(*),
            :host([disabled]) .form-field__help-text ::slotted(*) {
              color: var(--disabled-text-color, #adadad);
            }

            /***********************
          {block} .input-group
             *********************/

            .input-group__container {
              display: flex;
            }

            .input-group__input {
              flex: 1;
              display: flex;
            }

            /***** {state} :disabled *****/
            :host([disabled]) .input-group ::slotted(slot='input') {
              color: var(--disabled-text-color, #adadad);
            }

            /***********************
          {block} .form-control
             **********************/

            .input-group__container > .input-group__input ::slotted(.form-control) {
              flex: 1 1 auto;
              margin: 0; /* remove input margin in Safari */
              font-size: 100%; /* normalize default input font-size */
            }
          `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(e,t={}){const{idPrefix:s,reorder:i}=Tt({reorder:!0},t);e.id=e.id||`${s}-${this._inputId}`,this._ariaLabelledNodes.includes(e)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,e],this.__reorderAriaLabelledNodes=Boolean(i))}addToAriaDescribedBy(e,t={}){const{idPrefix:s,reorder:i}=Tt({reorder:!0},t);e.id=e.id||`${s}-${this._inputId}`,this._ariaDescribedNodes.includes(e)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,e],this.__reorderAriaDescribedNodes=Boolean(i))}__getDirectSlotChild(e){return[...this.children].find(t=>t.slot===e)}}),Mt=d(e=>class extends e{static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},prefilled:{type:Boolean}}}_requestUpdate(e,t){super._requestUpdate(e,t),"touched"===e&&this.touched!==t&&this._onTouchedChanged(),"dirty"===e&&this.dirty!==t&&this._onDirtyChanged()}static _isPrefilled(e){let t=e;if(e instanceof z&&(t=e.viewValue),"object"==typeof t&&null!==t&&!(t instanceof Date))return!!Object.keys(t).length;const s="number"==typeof t&&(0===t||Number.isNaN(t));return!!t||s||"boolean"==typeof t&&!1===t}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=this.constructor._isPrefilled(this.modelValue)}_iStateOnLeave(){this.touched=!0,this.prefilled=this.constructor._isPrefilled(this.modelValue)}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.dirty=!1,this.prefilled=this.constructor._isPrefilled(this.modelValue)}_onTouchedChanged(){this.dispatchEvent(new CustomEvent("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new CustomEvent("dirty-changed",{bubbles:!0,composed:!0}))}});Rt(Mt(Ot(Vt($(G(i(o)))))));class Bt extends Array{keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}}d(e=>class extends(Pt(e)){static get properties(){return{_isFormOrFieldset:Boolean}}constructor(){super(),this.formElements=new Bt,this._isFormOrFieldset=!1,this.__readyForRegistration=!1,this.__hasBeenRendered=!1,this.registrationReady=new Promise(e=>{this.__resolveRegistrationReady=e}),this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Dt.add(this),this.__hasBeenRendered&&Dt.becomesReady()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Dt.remove(this)}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}firstUpdated(e){super.firstUpdated(e),this.__resolveRegistrationReady(),this.__readyForRegistration=!0,Dt.becomesReady(),this.__hasBeenRendered=!0}addFormElement(e,t){if(e.__parentFormGroup=this,t>0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){const{name:s}=e;if(!s)throw console.info("Error Node:",e),new TypeError("You need to define a name");if(s===this.name)throw console.info("Error Node:",e),new TypeError(`You can not have the same name "${s}" as your parent`);if("[]"===s.substr(-2))Array.isArray(this.formElements[s])||(this.formElements[s]=new Bt),t>0?this.formElements[s].splice(t,0,e):this.formElements[s].push(e);else{if(this.formElements[s])throw console.info("Error Node:",e),new TypeError(`Name "${s}" is already registered - if you want an array add [] to the end`);this.formElements[s]=e}}}removeFormElement(e){const t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){const{name:t}=e;if("[]"===t.substr(-2)&&this.formElements[t]){const s=this.formElements[t].indexOf(e);s>-1&&this.formElements[t].splice(s,1)}else this.formElements[t]&&delete this.formElements[t]}}_onRequestToAddFormElement(e){const t=e.detail.element;if(t===this)return;if(this.isRegisteredFormElement(t))return;e.stopPropagation();let s=-1;this.formElements&&Array.isArray(this.formElements)&&(s=this.formElements.indexOf(t.nextElementSibling)),this.addFormElement(t,s)}_onRequestToRemoveFormElement(e){const t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}}),d(e=>class extends e{constructor(){super(),this.formElements=[],this.registrationTarget=void 0,this.__hasBeenRendered=!1,this.__readyForRegistration=!1,this.registrationReady=new Promise(e=>{this.__resolveRegistrationReady=e})}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.__checkRegistrationTarget(),Dt.add(this),this.__hasBeenRendered&&Dt.becomesReady(),this.__redispatchEventForFormRegistrarPortalMixin=e=>{e.stopPropagation(),this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:e.detail.element},bubbles:!0}))},this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Dt.remove(this),this.removeEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}firstUpdated(e){super.firstUpdated(e),this.__resolveRegistrationReady(),this.__readyForRegistration=!0,Dt.becomesReady(this),this.__hasBeenRendered=!0}__checkRegistrationTarget(){if(!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget")}});class Ut extends H{constructor(){super(),this.name="FormElementsHaveNoError"}execute(e,t,s){return s.node._anyFormElementHasFeedbackFor("error")}static async getMessage(){return""}}const qt=d(e=>class extends(A(D($(G(i(e)))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements("modelValue")}set modelValue(e){this._setValueMapForAllFormElements("modelValue",e)}get serializedValue(){return this._getFromAllFormElements("serializedValue")}set serializedValue(e){this._setValueMapForAllFormElements("serializedValue",e)}get formattedValue(){return this._getFromAllFormElements("formattedValue")}set formattedValue(e){this._setValueMapForAllFormElements("formattedValue",e)}get prefilled(){return this._everyFormElementHas("prefilled")}constructor(){super(),this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener("focusin",this._syncFocused),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("dirty-changed",this._syncDirty),this.addEventListener("validate-performed",this.__onChildValidatePerformed),this.defaultValidators=[new Ut]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.__initInteractionStates()}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&(document.removeEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!1)}async __initInteractionStates(){this.__readyForRegistration||await this.registrationReady,this.formElements.forEach(e=>{"function"==typeof e.initInteractionState&&e.initInteractionState()})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),e.has("focused")&&!0===this.focused&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||(document.addEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!0)}_checkForOutsideClick(e){!this.contains(e.target)&&(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}inputGroupTemplate(){return n`
          <div class="input-group">
            <slot></slot>
          </div>
        `}submitGroup(){this.submitted=!0,this.formElements.forEach(e=>{"function"==typeof e.submitGroup?e.submitGroup():e.submitted=!0})}resetGroup(){this.formElements.forEach(e=>{"function"==typeof e.resetGroup?e.resetGroup():"function"==typeof e.reset&&e.reset()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(e=>{"function"==typeof e.resetInteractionState&&e.resetInteractionState()})}_getFromAllFormElements(e,t=(e=>!e.disabled)){const s={};return this.formElements.keys().forEach(i=>{const o=this.formElements[i];o instanceof P?s[i]=o.filter(e=>t(e)).map(t=>t[e]):t(o)&&("function"==typeof o._getFromAllFormElements?s[i]=o._getFromAllFormElements(e,t):s[i]=o[e])}),s}_setValueForAllFormElements(e,t){this.formElements.forEach(s=>{s[e]=t})}async _setValueMapForAllFormElements(e,t){this.__readyForRegistration||await this.registrationReady,t&&"object"==typeof t&&Object.keys(t).forEach(s=>{Array.isArray(this.formElements[s])&&this.formElements[s].forEach((i,o)=>{i[e]=t[s][o]}),this.formElements[s][e]=t[s]})}_anyFormElementHas(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!t[e]):!!this.formElements[t][e])}_anyFormElementHasFeedbackFor(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!t.hasFeedbackFor.includes(e)):!!this.formElements[t].hasFeedbackFor.includes(e))}_everyFormElementHas(e){return Object.keys(this.formElements).every(t=>Array.isArray(this.formElements[t])?this.formElements[t].every(t=>!!t[e]):!!this.formElements[t][e])}__onChildValidatePerformed(e){e&&this.isRegisteredFormElement(e.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas("focused")}_onFocusOut(e){const t=this.formElements[this.formElements.length-1];e.target===t&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas("dirty")}__linkChildrenMessagesToParent(e){let t=this;for(;t;)this.constructor._addDescriptionElementIdsToField(e,t._getAriaDescriptionElements()),t=t.__parentFormGroup}addFormElement(e,t){super.addFormElement(e,t),this.disabled&&e.makeRequestToBeDisabled(),this.__linkChildrenMessagesToParent(e),this.validate()}get _initialModelValue(){return this._getFromAllFormElements("_initialModelValue")}static _addDescriptionElementIdsToField(e,t){Q(t,{reverse:!0}).forEach(t=>{e.addToAriaDescribedBy&&e.addToAriaDescribedBy(t,{reorder:!1})})}removeFormElement(...e){super.removeFormElement(...e),this.validate()}});qt(o);class zt extends I{static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return Tt({},super.slots,{input:()=>{const e=document.createElement("input");return this.hasAttribute("value")&&e.setAttribute("value",this.getAttribute("value")),e}})}constructor(){super(),this.readOnly=!1,this.type="text"}_requestUpdate(e,t){super._requestUpdate(e,t),"readOnly"===e&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}m(N);m(N);m(N);m(N);let $t=class extends t{constructor(e={}){super(e),this._fakeExtendsEventTarget(),document.documentElement.lang||(document.documentElement.lang="en-GB"),this._autoLoadOnLocaleChange=!!e.autoLoadOnLocaleChange,this._fallbackLocale=e.fallbackLocale,this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={},this.formatNumberOptions={returnIfNaN:""},this._setupHtmlLangAttributeObserver()}teardown(){this._teardownHtmlLangAttributeObserver()}get locale(){return document.documentElement.lang}set locale(e){const t=document.documentElement.lang;this._teardownHtmlLangAttributeObserver(),document.documentElement.lang=e,this._setupHtmlLangAttributeObserver(),e.includes("-")||this.__handleLanguageOnly(e),this._onLocaleChanged(e,t)}__handleLanguageOnly(e){throw new Error(`\n      Locale was set to ${e}.\n      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.\n      See https://github.com/ing-bank/lion/issues/187 for more information.\n    `)}get loadingComplete(){return Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale]))}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}addData(e,t,s){if(this._isNamespaceInCache(e,t))throw new Error(`Namespace "${t}" has been already added for the locale "${e}".`);this.__storage[e]=this.__storage[e]||{},this.__storage[e][t]=s}setupNamespaceLoader(e,t){this.__namespacePatternsMap.set(e,t)}loadNamespaces(e,{locale:t}={}){return Promise.all(e.map(e=>this.loadNamespace(e,{locale:t})))}loadNamespace(e,{locale:t=this.locale}={locale:this.locale}){const s="object"==typeof e,i=s?Object.keys(e)[0]:e;if(this._isNamespaceInCache(t,i))return Promise.resolve();const o=this._getCachedNamespaceLoaderPromise(t,i);return o||this._loadNamespaceData(t,e,s,i)}msg(e,t,s={}){const i=s.locale?s.locale:this.locale,o=this._getMessageForKeys(e,i);return o?new Z(o,i).format(t):""}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(e=>{e.forEach(e=>{this._onLocaleChanged(document.documentElement.lang,e.oldValue)})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(e,t){return!(!this.__storage[e]||!this.__storage[e][t])}_getCachedNamespaceLoaderPromise(e,t){return this.__namespaceLoaderPromisesCache[e]?this.__namespaceLoaderPromisesCache[e][t]:null}_loadNamespaceData(e,t,s,i){const o=this._getNamespaceLoader(t,s,i),n=this._getNamespaceLoaderPromise(o,e,i);return this._cacheNamespaceLoaderPromise(e,i,n),n.then(t=>{const s=function(e){return!(!e||!e.default||"object"!=typeof e.default||1!==Object.keys(e).length)}(t)?t.default:t;this.addData(e,i,s)})}_getNamespaceLoader(e,t,s){let i=this.__namespaceLoadersCache[s];if(i||(t?(i=e[s],this.__namespaceLoadersCache[s]=i):(i=this._lookupNamespaceLoader(s),this.__namespaceLoadersCache[s]=i)),!i)throw new Error(`Namespace "${s}" was not properly setup.`);return this.__namespaceLoadersCache[s]=i,i}_getNamespaceLoaderPromise(e,t,s,i=this._fallbackLocale){return e(t,s).catch(()=>{const o=this._getLangFromLocale(t);return e(o,s).catch(()=>{if(i)return this._getNamespaceLoaderPromise(e,i,s,!1).catch(()=>{const e=this._getLangFromLocale(i);throw new Error(`Data for namespace "${s}" and current locale "${t}" or fallback locale "${i}" could not be loaded. `+`Make sure you have data either for locale "${t}" (and/or generic language "${o}") or for fallback "${i}" (and/or "${e}").`)});throw new Error(`Data for namespace "${s}" and locale "${t}" could not be loaded. `+`Make sure you have data for locale "${t}" (and/or generic language "${o}").`)})})}_cacheNamespaceLoaderPromise(e,t,s){this.__namespaceLoaderPromisesCache[e]||(this.__namespaceLoaderPromisesCache[e]={}),this.__namespaceLoaderPromisesCache[e][t]=s}_lookupNamespaceLoader(e){for(const[t,s]of this.__namespacePatternsMap){const i="string"==typeof t&&t===e,o="object"==typeof t&&"RegExp"===t.constructor.name&&t.test(e);if(i||o)return s}return null}_getLangFromLocale(e){return e.substring(0,2)}_fakeExtendsEventTarget(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...s)=>e[t](...s)})}_onLocaleChanged(e,t){e!==t&&(this._autoLoadOnLocaleChange&&this._loadAllMissing(e,t),this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:e,oldLocale:t}})))}_loadAllMissing(e,t){const s=this.__storage[t]||{},i=this.__storage[e]||{},o=[];return Object.keys(s).forEach(e=>{i[e]||o.push(this.loadNamespace(e))}),Promise.all(o)}_getMessageForKeys(e,t){if("string"==typeof e)return this._getMessageForKey(e,t);const s=Array.from(e).reverse();let i,o;for(;s.length;)if(i=s.pop(),o=this._getMessageForKey(i,t),o)return o}_getMessageForKey(e,t){if(-1===e.indexOf(":"))throw new Error(`Namespace is missing in the key "${e}". The format for keys is "namespace:name".`);const[s,i]=e.split(":"),o=this.__storage[t],n=o?o[s]:null;return i.split(".").reduce((e,t)=>e?e[t]:null,n)}}.getInstance({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});function Ht(e){const t=[];for(let s=0,i=e.length;s<i;s+=1)160===e.charCodeAt(s)?t.push(" "):8206===e.charCodeAt(s)?t.push(""):t.push(e.charAt(s));return t.join("")}function jt(e,t){if(!(e instanceof Date))return"";const s=t||{};t&&(!t||t.day||t.month||t.year)||(s.year="numeric",s.month="2-digit",s.day="2-digit");const i=s&&s.locale||($t&&$t.locale?$t.locale:"en-GB");let o="";try{o=new Intl.DateTimeFormat(i,s).format(e)}catch(e){o=""}return Ht(o)}function Wt(e){return e.match(/(\d{1,4})([^\d]+)(\d{1,4})([^\d]+)(\d{1,4})/)}((e,t)=>{const s={}})((function(){const e=new Date;e.setDate(20),e.setMonth(11),e.setFullYear(2012);const t=Wt(function(e){return function(e){return e.replace(/^[^\d]*/g,"").replace(/[^\d]*$/g,"")}(jt(e).replace(/[^\d-. /]/g,""))}(e)),s={};return s.positions=function(e){return[1,3,5].map((function(t){return{2012:"year",12:"month",20:"day"}[e[t]]}))}(t),`${s.positions[0]}-${s.positions[1]}-${s.positions[2]}`}),$t.locale);d(e=>class extends e{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this.__boundLocalizeOnLocaleChanged=(...e)=>this.__localizeOnLocaleChanged(...e),this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async performUpdate(){this.constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.performUpdate()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this.__localizeAddLocaleChangedListener()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.__localizeRemoveLocaleChangedListener()}msgLit(...e){return this.__localizeMessageSync?$t.msg(...e):p(this.localizeNamespacesLoaded.then(()=>$t.msg(...e)),c)}__getUniqueNamespaces(){const e=[],t=new Set;return this.constructor.localizeNamespaces.forEach(t.add.bind(t)),t.forEach(t=>{e.push(t)}),e}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=$t.loadNamespaces(this.__getUniqueNamespaces())}__localizeAddLocaleChangedListener(){$t.addEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}__localizeRemoveLocaleChangedListener(){$t.removeEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}__localizeOnLocaleChanged(e){this.onLocaleChanged(e.detail.newLocale,e.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(){this.localizeNamespacesLoaded=$t.loadNamespaces(this.__getUniqueNamespaces()),this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}});class Kt extends(_(S(R(o)))){static get properties(){return{active:{type:Boolean,reflect:!0},name:{type:String,reflect:!0}}}static get styles(){return[a`
        :host {
          display: block;
          background-color: white;
          padding: 4px;
        }

        :host([active]),
        :host(:hover) {
          background-color: #ddd;
        }

        :host([checked]) {
          background-color: #bde4ff;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}constructor(){super(),this.active=!1,this.__registerEventListeners()}_requestUpdate(e,t){super._requestUpdate(e,t),"active"===e&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return n`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.__onClick=()=>{this.disabled||(this.checked=!0)},this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}}const Gt=a`
  .global-overlays {
    position: fixed;
    z-index: 200;
  }

  .global-overlays__overlay {
    pointer-events: auto;
  }

  .global-overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .global-overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .global-overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .global-overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .global-overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }
  .global-overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .global-overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .global-overlays__overlay--bottom-sheet {
    width: 100%;
  }

  .global-overlays .global-overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    opacity: 0.3;
    display: none;
  }

  .global-overlays .global-overlays__backdrop--visible {
    display: block;
  }

  .global-overlays .global-overlays__backdrop--fade-in {
    animation: global-overlays-backdrop-fade-in 300ms;
  }

  .global-overlays .global-overlays__backdrop--fade-out {
    animation: global-overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes global-overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes global-overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  body > *[inert] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body.global-overlays-scroll-lock {
    overflow: hidden;
  }

  body.global-overlays-scroll-lock-ios-fix {
    position: fixed;
    width: 100%;
  }
`;const Qt=navigator.userAgent.match(/iPhone|iPad|iPod/i);const Jt=new class{static __createGlobalRootNode(){const e=document.createElement("div");return e.classList.add("global-overlays"),document.body.appendChild(e),e}static __createGlobalStyleNode(){const e=document.createElement("style");return e.setAttribute("data-global-overlays",""),e.textContent=Gt.cssText,document.head.appendChild(e),e}get globalRootNode(){return this.constructor.__globalRootNode||(this.constructor.__globalRootNode=this.constructor.__createGlobalRootNode(),this.constructor.__globalStyleNode=this.constructor.__createGlobalStyleNode()),this.constructor.__globalRootNode}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this.__siblingsInert=!1,this.__blockingMap=new WeakMap}add(e){if(this.list.find(t=>e===t))throw new Error("controller instance is already added");return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to remove");this.__list=this.list.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this.__siblingsInert=!1;const e=this.constructor.__globalRootNode;e&&(e.parentElement.removeChild(e),this.constructor.__globalRootNode=void 0,document.head.removeChild(this.constructor.__globalStyleNode),this.constructor.__globalStyleNode=void 0)}get siblingsInert(){return this.__siblingsInert}disableTrapsKeyboardFocusForAll(){this.shownList.forEach(e=>{!0===e.trapsKeyboardFocus&&e.disableTrapsKeyboardFocus&&e.disableTrapsKeyboardFocus({findNewTrap:!1})})}informTrapsKeyboardFocusGotEnabled(){!1===this.siblingsInert&&(this.constructor.__globalRootNode&&function(e){const t=e.parentElement.children;for(let s=0;s<t.length;s+=1){const i=t[s];i!==e&&(i.setAttribute("inert",""),i.setAttribute("aria-hidden","true"))}}(this.globalRootNode),this.__siblingsInert=!0)}informTrapsKeyboardFocusGotDisabled({disabledCtrl:e,findNewTrap:t=!0}={}){const s=this.shownList.find(t=>t!==e&&!0===t.trapsKeyboardFocus);s?t&&s.enableTrapsKeyboardFocus():!0===this.siblingsInert&&(this.constructor.__globalRootNode&&function(e){const t=e.parentElement.children;for(let s=0;s<t.length;s+=1){const i=t[s];i!==e&&(i.removeAttribute("inert",""),i.removeAttribute("aria-hidden","true"))}}(this.globalRootNode),this.__siblingsInert=!1)}requestToPreventScroll(){document.body.classList.add("global-overlays-scroll-lock"),Qt&&document.body.classList.add("global-overlays-scroll-lock-ios-fix")}requestToEnableScroll(){this.shownList.some(e=>!0===e.preventsScroll)||(document.body.classList.remove("global-overlays-scroll-lock"),Qt&&document.body.classList.remove("global-overlays-scroll-lock-ios-fix"))}requestToShowOnly(e){const t=this.shownList.filter(t=>t!==e);t.map(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){if(this.__blockingMap.has(e)){this.__blockingMap.get(e).map(e=>e.show())}}};const Yt=({visibility:e,display:t})=>"hidden"!==e&&"none"!==t;function Zt(e,t){const s=Math.max(e.tabIndex,0),i=Math.max(t.tabIndex,0);return 0===s||0===i?i>s:s>i}function Xt(e){const t=e.length;if(t<2)return e;const s=Math.ceil(t/2);return function(e,t){const s=[];for(;e.length>0&&t.length>0;)Zt(e[0],t[0])?s.push(t.shift()):s.push(e.shift());return[...s,...e,...t]}(Xt(e.slice(0,s)),Xt(e.slice(s)))}const es="matches"in Element.prototype?"matches":"msMatchesSelector";function ts(e){return function(e){return e[es]("input, select, textarea, button, object")?e[es](":not([disabled])"):e[es]("a[href], area[href], iframe, [tabindex], [contentEditable]")}(e)?Number(e.getAttribute("tabindex")||0):-1}function ss(e){return e.nodeType===Node.ELEMENT_NODE&&("slot"===e.localName||!!((t=e)&&t.isConnected&&Yt(t.style)&&Yt(window.getComputedStyle(t))&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)));var t}function is(e){const t=[];return function e(t,s){if(!ss(t))return!1;const i=t,o=ts(i);let n=o>0;o>=0&&s.push(i);const r=function(e){if("slot"===e.localName){return e.assignedNodes()}const{children:t}=e.shadowRoot||e;return t||[]}(i);for(let t=0;t<r.length;t+=1)n=e(r[t],s)||n;return n}(e,t)?Xt(t):t}const os=9;function ns(e,t){const s=is(e);let i;i=s.length>=2?[s[0],s[s.length-1]]:1===s.length?[s[0],s[0]]:[e,e],t.shiftKey&&i.reverse();const[o,n]=i,r=function(){let e=document.activeElement||document.body;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}();r===e||s.includes(r)&&n!==r||(t.preventDefault(),o.focus())}class rs{constructor(e={},t=Jt){this.__fakeExtendsEventTarget(),this.manager=t,this.__sharedConfig=e,this._defaultConfig={placementMode:null,contentNode:e.contentNode,invokerNode:e.invokerNode,referenceNode:null,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,handlesUserInteraction:!1,handlesAccessibility:!1,popperConfig:{placement:"top",positionFixed:!1,modifiers:{keepTogether:{enabled:!1},preventOverflow:{enabled:!0,boundariesElement:"viewport",padding:8},flip:{boundariesElement:"viewport",padding:16},offset:{enabled:!0,offset:"0, 8px"},arrow:{enabled:!1}}},viewportConfig:{placement:"center"}},this.manager.add(this),this._contentNodeWrapper=document.createElement("div"),this._contentId=`overlay-content--${Math.random().toString(36).substr(2,10)}`,this.updateConfig(e),this.__hasActiveTrapsKeyboardFocus=!1,this.__hasActiveBackdrop=!0}get invoker(){return this.invokerNode}get content(){return this._contentNodeWrapper}get _renderTarget(){return"global"===this.placementMode?this.manager.globalRootNode:this.__originalContentParent}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this._contentNodeWrapper&&(this._contentNodeWrapper.style.zIndex=e),this.backdropNode&&(this.backdropNode.style.zIndex=e)}get elevation(){return this._contentNodeWrapper.zIndex}updateConfig(e){this._handleFeatures({phase:"teardown"}),e.contentNode&&e.contentNode.isConnected&&(this.__originalContentParent=e.contentNode.parentElement),this.__prevConfig=this.config||{},this.config=Tt({},this._defaultConfig,{},this.__sharedConfig,{},e,{popperConfig:Tt({},this._defaultConfig.popperConfig||{},{},this.__sharedConfig.popperConfig||{},{},e.popperConfig||{},{modifiers:Tt({},this._defaultConfig.popperConfig&&this._defaultConfig.popperConfig.modifiers||{},{},this.__sharedConfig.popperConfig&&this.__sharedConfig.popperConfig.modifiers||{},{},e.popperConfig&&e.popperConfig.modifiers||{})})}),this.__validateConfiguration(this.config),Object.assign(this,this.config),this._init({cfgToAdd:e})}__validateConfiguration(e){if(!e.placementMode)throw new Error('You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`"${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("You need to provide a .contentNode")}async _init({cfgToAdd:e}){this.__initContentNodeWrapper(),this.__initConnectionTarget(),this.handlesAccessibility&&this.__initAccessibility({cfgToAdd:e}),"local"===this.placementMode&&(this.constructor.popperModule||(this.constructor.popperModule=async function(){return importShim("./popper.min-98d92381.js")}())),this._handleFeatures({phase:"init"})}__initConnectionTarget(){this.contentNode!==this.__prevConfig.contentNode&&this._contentNodeWrapper.appendChild(this.contentNode),this._renderTarget&&this._renderTarget!==this._contentNodeWrapper.parentNode&&this._renderTarget.appendChild(this._contentNodeWrapper)}__initContentNodeWrapper(){Array.from(this._contentNodeWrapper.attributes).forEach(e=>{this._contentNodeWrapper.removeAttribute(e.name)}),this._contentNodeWrapper.style.cssText=null,this._contentNodeWrapper.style.display="none",this._contentNodeWrapper.slot="_overlay-shadow-outlet","absolute"===getComputedStyle(this.contentNode).position&&(this.contentNode.style.position="static")}_handleZIndex({phase:e}){if("local"===this.placementMode&&"setup"===e){const e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this._contentNodeWrapper.style.zIndex=1)}}__initAccessibility(){this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute("aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&this.invokerNode.setAttribute("aria-expanded",this.isShown),this.contentNode.role||this.contentNode.setAttribute("role","dialog"))}get isShown(){return Boolean("none"!==this._contentNodeWrapper.style.display)}async show(e=this.elementToFocusAfterHide){if(this.manager&&this.manager.show(this),this.isShown)return;const t=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(this._contentNodeWrapper.style.display="local"===this.placementMode?"inline-block":"",await this._handleFeatures({phase:"show"}),await this._handlePosition({phase:"show"}),this.elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")))}async _handlePosition({phase:e}){if("global"===this.placementMode){const t="show"===e?"add":"remove",s=`global-overlays__overlay-container--${this.viewportConfig.placement}`;this._contentNodeWrapper.classList[t]("global-overlays__overlay-container"),this._contentNodeWrapper.classList[t](s),this.contentNode.classList[t]("global-overlays__overlay")}else"local"===this.placementMode&&"show"===e&&(await this.__createPopperInstance(),this._popper.update())}async hide(){if(this.manager&&this.manager.hide(this),!this.isShown)return;const e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this._contentNodeWrapper.style.display="none",this._handleFeatures({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus())}async transitionHide({backdropNode:e,contentNode:t}){}_restoreFocus(){this.elementToFocusAfterHide&&this.elementToFocusAfterHide.focus()}async toggle(){return this.isShown?this.hide():this.show()}async _handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth()}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll()}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this)}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({animation:e=!0,phase:t}){if("local"===this.placementMode)return;const{backdropNode:s}=this;switch(t){case"init":this.backdropNode=document.createElement("div"),this.backdropNode.classList.add("global-overlays__backdrop"),this.backdropNode.slot="_overlay-shadow-outlet",this._contentNodeWrapper.parentElement.insertBefore(this.backdropNode,this._contentNodeWrapper);break;case"show":s.classList.add("global-overlays__backdrop--visible"),!0===e&&s.classList.add("global-overlays__backdrop--fade-in"),this.__hasActiveBackdrop=!0;break;case"hide":if(!s)return;if(s.classList.remove("global-overlays__backdrop--fade-in"),e){let e;s.classList.add("global-overlays__backdrop--fade-out"),this.__backDropAnimation=new Promise(t=>{e=()=>{s.classList.remove("global-overlays__backdrop--fade-out"),s.classList.remove("global-overlays__backdrop--visible"),s.removeEventListener("animationend",e),t()}}),s.addEventListener("animationend",e)}else s.classList.remove("global-overlays__backdrop--visible");this.__hasActiveBackdrop=!1;break;case"teardown":if(!s)return;e&&this.__backDropAnimation?this.__backDropAnimation.then(()=>{s.parentNode.removeChild(s)}):s.parentNode.removeChild(s)}}get hasActiveTrapsKeyboardFocus(){return this.__hasActiveTrapsKeyboardFocus}_handleTrapsKeyboardFocus({phase:e}){"show"===e?this.enableTrapsKeyboardFocus():"hide"===e&&this.disableTrapsKeyboardFocus()}enableTrapsKeyboardFocus(){this.__hasActiveTrapsKeyboardFocus||(this.manager&&this.manager.disableTrapsKeyboardFocusForAll(),this._containFocusHandler=function(e){const t=is(e).find(e=>e.hasAttribute("autofocus"))||e;function s(t){t.keyCode===os&&ns(e,t)}return t===e&&(e.tabIndex=-1,e.style.setProperty("outline","none")),t.focus(),window.addEventListener("keydown",s),{disconnect:function(){window.removeEventListener("keydown",s),e.style.removeProperty("outline")}}}(this.contentNode),this.__hasActiveTrapsKeyboardFocus=!0,this.manager&&this.manager.informTrapsKeyboardFocusGotEnabled())}disableTrapsKeyboardFocus({findNewTrap:e=!0}={}){this.__hasActiveTrapsKeyboardFocus&&(this._containFocusHandler&&(this._containFocusHandler.disconnect(),this._containFocusHandler=void 0),this.__hasActiveTrapsKeyboardFocus=!1,this.manager&&this.manager.informTrapsKeyboardFocusGotDisabled({disabledCtrl:this,findNewTrap:e}))}_handleHidesOnEsc({phase:e}){"show"===e?(this.__escKeyHandler=e=>"Escape"===e.key&&this.hide(),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)):"hide"===e&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){"show"===e?(this.__escKeyHandler=e=>"Escape"===e.key&&this.hide(),document.addEventListener("keyup",this.__escKeyHandler)):"hide"===e&&document.removeEventListener("keyup",this.__escKeyHandler)}_handleInheritsReferenceWidth(){if(!this._referenceNode)return;const e=`${this._referenceNode.clientWidth}px`;switch(this.inheritsReferenceWidth){case"max":this._contentNodeWrapper.style.maxWidth=e;break;case"full":this._contentNodeWrapper.style.width=e;break;case"min":this._contentNodeWrapper.style.minWidth=e}}_handleHidesOnOutsideClick({phase:e}){const t="show"===e?"addEventListener":"removeEventListener";if("show"===e){let e=!1;this.__preventCloseOutsideClick=()=>{e=!0,setTimeout(()=>{e=!1})},this.__onCaptureHtmlClick=()=>{setTimeout(()=>{!1===e&&this.hide()})}}this._contentNodeWrapper[t]("click",this.__preventCloseOutsideClick,!0),this.invokerNode&&this.invokerNode[t]("click",this.__preventCloseOutsideClick,!0),document.documentElement[t]("click",this.__onCaptureHtmlClick,!0)}_handleAccessibility({phase:e}){this.invokerNode&&!this.isTooltip&&this.invokerNode.setAttribute("aria-expanded","show"===e)}teardown(){this._handleFeatures({phase:"teardown"}),this._contentNodeWrapper&&this._contentNodeWrapper.parentElement&&this._contentNodeWrapper.parentElement.removeChild(this._contentNodeWrapper)}async __createPopperInstance(){this._popper&&(this._popper.destroy(),this._popper=null);const{default:e}=await this.constructor.popperModule;this._popper=new e(this._referenceNode,this._contentNodeWrapper,Tt({},this.config.popperConfig))}__fakeExtendsEventTarget(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...s)=>e[t](...s)})}}d(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}constructor(){super(),this.opened=!1,this.config={}}get config(){return this.__config}set config(e){this._overlayCtrl&&this._overlayCtrl.updateConfig(e),this.__config=e}_requestUpdate(e,t){super._requestUpdate(e,t),"opened"===e&&this.dispatchEvent(new Event("opened-changed"))}_defineOverlay({contentNode:e,invokerNode:t}){return new rs(Tt({contentNode:e,invokerNode:t},this._defineOverlayConfig(),{},this.config,{popperConfig:Tt({},this._defineOverlayConfig().popperConfig||{},{},this.config.popperConfig||{},{modifiers:Tt({},this._defineOverlayConfig().popperConfig&&this._defineOverlayConfig().popperConfig.modifiers||{},{},this.config.popperConfig&&this.config.popperConfig.modifiers||{})})}))}_defineOverlayConfig(){return{placementMode:"local"}}updated(e){super.updated(e),e.has("opened")&&this._overlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}firstUpdated(e){super.firstUpdated(e),this._setupOverlayCtrl()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._overlayCtrl&&this._teardownOverlayCtrl()}get _overlayInvokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _overlayContentNode(){if(this._cachedOverlayContentNode)return this._cachedOverlayContentNode;const e=Array.from(this.children).find(e=>"_overlay-shadow-outlet"===e.slot);return this._cachedOverlayContentNode=e?Array.from(e.children).find(e=>"content"===e.slot):Array.from(this.children).find(e=>"content"===e.slot),this._cachedOverlayContentNode}get _overlayContentNodeWrapper(){return this._overlayContentNode.parentElement}_setupOverlayCtrl(){this._overlayCtrl=this._defineOverlay({contentNode:this._overlayContentNode,invokerNode:this._overlayInvokerNode}),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown()}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{const t=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&e.preventDefault()},this.__onBeforeHide=e=>{const t=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&e.preventDefault()},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}});class as extends(S(N)){connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.type="radio"}}T(L(o));class ls extends ee{static get properties(){return{selectedElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:"readonly"}}}get slots(){return Tt({},super.slots,{after:()=>{const e=document.createElement("span");return e.textContent="▼",e}})}get contentWrapper(){return this.shadowRoot.getElementById("content-wrapper")}constructor(){super(),this.selectedElement=null,this.type="button"}_contentTemplate(){if(this.selectedElement){const e=Array.from(this.selectedElement.querySelectorAll("*"));return e.length>0?e.map(e=>e.cloneNode(!0)):this.selectedElement.textContent}return""}_renderBefore(){return n`
      <div id="content-wrapper">
        ${this._contentTemplate()}
      </div>
    `}_renderAfter(){return n`
      <slot name="after"></slot>
    `}}customElements.define("lion-select-invoker",ls);const ds=KeyboardEvent.prototype,cs=Object.getOwnPropertyDescriptor(ds,"key");if(cs){const e={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};Object.defineProperty(ds,"key",{get:function(){const t=cs.get.call(this);return e.hasOwnProperty(t)?e[t]:t}})}class hs extends(T(B(A(O($(D(i(o)))))))){static get properties(){return{disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,reflect:!0,attribute:"readonly"},interactionMode:{type:String,attribute:"interaction-mode"},name:{type:String}}}static get styles(){return[a`
        :host {
          display: block;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}get slots(){return Tt({},super.slots,{invoker:()=>document.createElement("lion-select-invoker")})}get _invokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>"input"===e.slot)}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get modelValue(){const e=this.formElements.find(e=>e.checked);return e?e.modelValue.value:""}set modelValue(e){const t=this.formElements.find(t=>t.modelValue.value===e);t?t.checked=!0:this.__cachedUserSetModelValue=e,this.__syncInvokerElement(),this.requestUpdate("modelValue")}get serializedValue(){return this.modelValue}get checkedIndex(){let e=-1;return this.formElements.forEach((t,s)=>{t.checked&&(e=s)}),e}set checkedIndex(e){this._listboxNode.children[e]&&(this._listboxNode.children[e].checked=!0)}get activeIndex(){return this.formElements.findIndex(e=>!0===e.active)}get scrollTarget(){return this._overlayContentNode.scrollTarget||this._overlayContentNode}set activeIndex(e){if(this.formElements[e]){const t=this.formElements[e];t.active=!0,function(e,t,s=!1){const i=e.scrollTop,o=i+e.clientHeight,n=t.offsetTop,r=n+t.clientHeight,a=n>=i&&r<=o;let l;return!0===s?l=n<i&&r>i||r>o&&n<o:"number"==typeof s&&(n<i&&r>i?l=100*(r-i)/t.clientHeight>s:r>o&&n<o&&(l=100*(o-n)/t.clientHeight>s)),a||l}(this.scrollTarget,t)||t.scrollIntoView({behavior:"smooth",block:"nearest"})}}constructor(){super(),this.interactionMode="auto",this.disabled=!1,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this.__setupEventListeners()}connectedCallback(){this._listboxNode.registrationTarget=this,super.connectedCallback&&super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.__teardownEventListeners(),this.__teardownOverlay(),this.__teardownInvokerNode(),this.__teardownListboxNode()}firstUpdated(e){super.firstUpdated(e),this.__setupOverlay(),this.__setupInvokerNode(),this.__setupListboxNode(),X.addEventListener("all-forms-open-for-registration",()=>{this.__cachedUserSetModelValue&&(this.modelValue=this.__cachedUserSetModelValue)}),this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this.__toggleInvokerDisabled()}_requestUpdate(e,t){super._requestUpdate(e,t),"interactionMode"===e&&"auto"===this.interactionMode&&(this.interactionMode=-1!==navigator.appVersion.indexOf("Mac")?"mac":"windows/linux"),"disabled"!==e&&"readOnly"!==e||this.__toggleInvokerDisabled()}get _inputNode(){return this.querySelector('[slot="input"]')}render(){return n`
      ${this.labelTemplate()} ${this.helpTextTemplate()} ${this.inputGroupTemplate()}
      ${this.feedbackTemplate()}
      <slot name="_overlay-shadow-outlet"></slot>
    `}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?(this._invokerNode.makeRequestToBeDisabled(),this.__requestOptionsToBeDisabled()):(this._invokerNode.retractRequestToBeDisabled(),this.__retractRequestOptionsToBeDisabled())),this._inputNode&&this._invokerNode&&(e.has("_ariaLabelledNodes")&&this._invokerNode.setAttribute("aria-labelledby",`${this._inputNode.getAttribute("aria-labelledby")} ${this._invokerNode.id}`),e.has("_ariaDescribedNodes")&&this._invokerNode.setAttribute("aria-describedby",this._inputNode.getAttribute("aria-describedby")),e.has("showsFeedbackFor")&&this._invokerNode.setAttribute("aria-invalid",this._hasFeedbackVisibleFor("error")))}toggle(){this.opened=!this.opened}inputGroupInputTemplate(){return n`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <slot name="input"></slot>
      </div>
    `}addFormElement(e,t){super.addFormElement(e,t),e.id=e.id||`${this.localName}-option-${Math.random().toString(36).substr(2,10)}`,this.disabled&&e.makeRequestToBeDisabled(),this.__hasInitialSelectedFormElement||e.disabled&&!this.disabled||(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),e.setAttribute("aria-posinset",this.formElements.length),this.__onChildModelValueChanged({target:e}),this.resetInteractionState()}__setupEventListeners(){this.__onChildActiveChanged=this.__onChildActiveChanged.bind(this),this.__onChildModelValueChanged=this.__onChildModelValueChanged.bind(this),this.__onKeyUp=this.__onKeyUp.bind(this),this._listboxNode.addEventListener("active-changed",this.__onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__onChildModelValueChanged),this.addEventListener("keyup",this.__onKeyUp)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this.__onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__onChildModelValueChanged),this._listboxNode.removeEventListener("keyup",this.__onKeyUp)}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__onChildActiveChanged({target:e}){!0===e.active&&(this.formElements.forEach(t=>{t!==e&&(t.active=!1)}),this._listboxNode.setAttribute("aria-activedescendant",e.id))}__setAttributeForAllFormElements(e,t){this.formElements.forEach(s=>{s.setAttribute(e,t)})}__onChildModelValueChanged({target:e}){e.checked&&(this.formElements.forEach(t=>{t!==e&&(t.checked=!1)}),this.modelValue=e.value)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex])}__getNextEnabledOption(e,t=1){for(let s=e+t;s<this.formElements.length;s+=1)if(this.formElements[s]&&!this.formElements[s].disabled)return s;return e}__getPreviousEnabledOption(e,t=-1){for(let s=e+t;s>=0;s-=1)if(this.formElements[s]&&!this.formElements[s].disabled)return s;return e}__listboxOnKeyUp(e){if(this.disabled)return;const{key:t}=e;switch(t){case"Escape":e.preventDefault(),this.opened=!1;break;case"Enter":case" ":e.preventDefault(),"mac"===this.interactionMode&&(this.checkedIndex=this.activeIndex),this.opened=!1;break;case"ArrowUp":e.preventDefault(),this.activeIndex=this.__getPreviousEnabledOption(this.activeIndex);break;case"ArrowDown":e.preventDefault(),this.activeIndex=this.__getNextEnabledOption(this.activeIndex);break;case"Home":e.preventDefault(),this.activeIndex=this.__getNextEnabledOption(0,0);break;case"End":e.preventDefault(),this.activeIndex=this.__getPreviousEnabledOption(this.formElements.length-1,0)}["ArrowUp","ArrowDown","Home","End"].includes(t)&&"windows/linux"===this.interactionMode&&(this.checkedIndex=this.activeIndex)}__listboxOnKeyDown(e){if(this.disabled)return;const{key:t}=e;switch(t){case"Tab":e.preventDefault(),this.opened=!1}}__onKeyUp(e){if(this.disabled)return;if(this.opened)return;const{key:t}=e;switch(t){case"ArrowUp":e.preventDefault(),"mac"===this.interactionMode?this.opened=!0:this.checkedIndex=this.__getPreviousEnabledOption(this.checkedIndex);break;case"ArrowDown":e.preventDefault(),"mac"===this.interactionMode?this.opened=!0:this.checkedIndex=this.__getNextEnabledOption(this.checkedIndex)}}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute("aria-haspopup","listbox"),this.__setupInvokerNodeEventListener()}__setupInvokerNodeEventListener(){this.__invokerOnClick=()=>{this.disabled||this.readOnly||this._overlayCtrl.toggle()},this._invokerNode.addEventListener("click",this.__invokerOnClick),this.__invokerOnBlur=()=>{this.dispatchEvent(new Event("blur"))},this._invokerNode.addEventListener("blur",this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener("click",this.__invokerOnClick),this._invokerNode.removeEventListener("blur",this.__invokerOnBlur)}__setupListboxNode(){if(this._listboxNode)this.__setupListboxNodeEventListener();else{const e=this.shadowRoot.querySelector("slot[name=input]");e&&e.addEventListener("slotchange",()=>{this.__setupListboxNodeEventListener()})}}__setupListboxNodeEventListener(){this.__listboxOnClick=()=>{this.opened=!1},this._listboxNode.addEventListener("click",this.__listboxOnClick),this.__listboxOnKeyUp=this.__listboxOnKeyUp.bind(this),this._listboxNode.addEventListener("keyup",this.__listboxOnKeyUp),this.__listboxOnKeyDown=this.__listboxOnKeyDown.bind(this),this._listboxNode.addEventListener("keydown",this.__listboxOnKeyDown)}__teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("click",this.__listboxOnClick),this._listboxNode.removeEventListener("keyup",this.__listboxOnKeyUp),this._listboxNode.removeEventListener("keydown",this.__listboxOnKeyDown))}_defineOverlayConfig(){return Tt({},q())}__setupOverlay(){this.__overlayOnShow=()=>{null!=this.checkedIndex&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()},this._overlayCtrl.addEventListener("show",this.__overlayOnShow),this.__overlayOnHide=()=>{this._invokerNode.focus()},this._overlayCtrl.addEventListener("hide",this.__overlayOnHide),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.scrollTarget.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__teardownOverlay(){this._overlayCtrl.removeEventListener("show",this.__overlayOnShow),this._overlayCtrl.removeEventListener("hide",this.__overlayOnHide),this.scrollTarget.removeEventListener("keydown",this.__overlayOnHide)}__preventScrollingWithArrowKeys(e){if(this.disabled)return;const{key:t}=e;switch(t){case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault()}}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}set fieldName(e){this.__fieldName=e}get fieldName(){const e=this.label||this.querySelector("[slot=label]")&&this.querySelector("[slot=label]").textContent;return this.__fieldName||e||this.name}}class us extends(M(o)){static get properties(){return{role:{type:String,reflect:!0},tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.role="listbox",this.tabIndex=0}createRenderRoot(){return this}}class ps extends(s(o)){static get properties(){return{role:{type:String,reflect:!0},checked:{type:Boolean,reflect:!0}}}static get styles(){return[a`
        :host {
          display: inline-block;
          position: relative;
          width: 36px;
          height: 16px;
          outline: 0;
        }

        .btn {
          position: relative;
          height: 100%;
          outline: 0;
        }

        :host(:focus:not([disabled])) .switch-button__thumb {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        .switch-button__track {
          background: #eee;
          width: 100%;
          height: 100%;
        }

        .switch-button__thumb {
          background: #ccc;
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
        }

        :host([checked]) .switch-button__thumb {
          right: 0;
        }
      `]}render(){return n`
      <div class="btn">
        <div class="switch-button__track"></div>
        <div class="switch-button__thumb"></div>
      </div>
    `}constructor(){super(),this.role="switch",this.checked=!1,this.addEventListener("click",this.__handleToggleStateChange),this.addEventListener("keydown",this.__handleKeydown),this.addEventListener("keyup",this.__handleKeyup)}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-checked",`${this.checked}`)}__handleToggleStateChange(){this.disabled||(this.focus(),this.checked=!this.checked,this.dispatchEvent(new Event("checked-changed",{composed:!0,bubbles:!0})))}__handleKeydown(e){32===e.keyCode&&e.preventDefault()}__handleKeyup(e){-1!==[32,13].indexOf(e.keyCode)&&this.__handleToggleStateChange()}_requestUpdate(e,t){super._requestUpdate(e,t),this.isConnected&&"checked"===e&&this.setAttribute("aria-checked",`${this.checked}`)}}customElements.define("lion-switch-button",ps);class _s extends(S(I)){static get styles(){return[super.styles,a`
        :host([disabled]) {
          color: #adadad;
        }
      `]}get slots(){return Tt({},super.slots,{input:()=>document.createElement("lion-switch-button")})}render(){return n`
      <div class="form-field__group-one">
        ${this.groupOneTemplate()}
      </div>
      <div class="form-field__group-two">
        ${this.groupTwoTemplate()}
      </div>
    `}groupOneTemplate(){return n`
      ${this.labelTemplate()} ${this.helpTextTemplate()} ${this.feedbackTemplate()}
    `}groupTwoTemplate(){return n`
      ${this.inputGroupTemplate()}
    `}connectedCallback(){super.connectedCallback(),this._inputNode.addEventListener("checked-changed",this.__handleButtonSwitchCheckedChanged.bind(this)),this._syncButtonSwitch(),this.submitted=!0}updated(e){super.updated(e),this._syncButtonSwitch()}_isEmpty(){}__handleButtonSwitchCheckedChanged(){this.checked=this._inputNode.checked}_syncButtonSwitch(){this._inputNode.checked=this.checked,this._inputNode.disabled=this.disabled}}B(o);class ms{constructor(e,t){!function(e){const t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(s=>{e[s]=(...e)=>t[s](...e)})}(this),this.name="",this.async=!1,this.__param=e,this.__config=t||{},this.type=t&&t.type||"error"}execute(){if(!this.name)throw new Error("You must provide a name like \"this.name = 'IsCat'\" for your Validator")}set param(e){this.__param=e,this.dispatchEvent(new Event("param-changed"))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event("config-changed"))}get config(){return this.__config}async _getMessage(e){const t=Tt({name:this.name,type:this.type,params:this.param,config:this.config},e);if(this.config.getMessage){if("function"==typeof this.config.getMessage)return this.config.getMessage(t);throw new Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return this.constructor.getMessage(t)}static async getMessage(){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}}class fs extends ms{executeOnResults({validationResult:e,prevValidationResult:t,validators:s}){}}class bs{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(e=>{this.__callComplete=e}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete())}}const gs=d(e=>class extends e{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(e){super.firstUpdated(e),this.__SyncUpdatableNamespace.connected=!0,this.__syncUpdatableInitialize()}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static __syncUpdatableHasChanged(e,t,s){const i=this._classProperties;return i.get(e)&&i.get(e).hasChanged?i.get(e).hasChanged(t,s):t!==s}__syncUpdatableInitialize(){const e=this.__SyncUpdatableNamespace,t=this.constructor;e.initialized=!0,e.queue&&Array.from(e.queue).forEach(e=>{t.__syncUpdatableHasChanged(e,this[e],void 0)&&this.updateSync(e,void 0)})}_requestUpdate(e,t){super._requestUpdate(e,t),this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};const s=this.__SyncUpdatableNamespace,i=this.constructor;s.connected?i.__syncUpdatableHasChanged(e,this[e],t)&&this.updateSync(e,t):(s.queue=s.queue||new Set,s.queue.add(e))}updateSync(e,t){}});class vs extends ms{constructor(...e){super(...e),this.name="Required"}onFormControlConnect(e){e._inputNode&&e._inputNode.setAttribute("aria-required","true")}onFormControlDisconnect(e){e._inputNode&&e._inputNode.removeAttribute("aria-required")}}function ys(e=[],t=[]){return e.filter(e=>!t.includes(e)).concat(t.filter(t=>!e.includes(t)))}d(e=>class extends(gs(i(e))){static get properties(){return{validators:Array,hasFeedbackFor:{type:Array},shouldShowFeedbackFor:{type:Array},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:e=>e.split(","),toAttribute:e=>e.join(",")}},validationStates:{type:Object},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},modelValue:Object,defaultValidators:Array,_visibleMessagesAmount:Number,fieldName:String}}static get validationTypes(){return["error"]}get slots(){return Tt({},super.slots,{feedback:()=>document.createElement("lion-validation-feedback")})}get _feedbackNode(){return this.querySelector("[slot=feedback]")}get _allValidators(){return[...this.validators,...this.defaultValidators]}constructor(){super(),this.hasFeedbackFor=[],this.shouldShowFeedbackFor=[],this.showsFeedbackFor=[],this.validationStates={},this._visibleMessagesAmount=1,this.isPending=!1,this.validators=[],this.defaultValidators=[],this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__onValidatorUpdated=this.__onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}connectedCallback(){super.connectedCallback(),v.addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),v.addEventListener("localeChanged",this._updateFeedbackComponent)}async _loadFeedbackComponent(){await importShim("./lion-validation-feedback-b51cbefb.js")}firstUpdated(e){super.firstUpdated(e),this.__validateInitialized=!0,this.validate(),this._loadFeedbackComponent()}updateSync(e,t){if(super.updateSync(e,t),"validators"===e?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):"modelValue"===e&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","submitted","hasFeedbackFor"].includes(e)&&this._updateShouldShowFeedbackFor(),"showsFeedbackFor"===e){this._inputNode&&this._inputNode.setAttribute("aria-invalid",this._hasFeedbackVisibleFor("error"));const e=ys(this.showsFeedbackFor,t);e.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),e.forEach(e=>{var t;this.dispatchEvent(new Event(`showsFeedbackFor${t=e,t.charAt(0).toUpperCase()+t.slice(1)}Changed`,{bubbles:!0}))})}if("shouldShowFeedbackFor"===e){ys(this.shouldShowFeedbackFor,t).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}}async validate({clearCurrentResult:e}={}){if(this.disabled)return this.__clearValidationResults(),this.__validationResult=[],void this._updateFeedbackComponent();this.__validateInitialized&&(this.__storePrevResult(),e&&this.__clearValidationResults(),await this.__executeValidators())}__storePrevResult(){this.__prevValidationResult=this.__validationResult}async __executeValidators(){this.validateComplete=new Promise(e=>{this.__validateCompleteResolve=e});const e=this.modelValue instanceof class{constructor(e){this.type="unparseable",this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}?this.modelValue.viewValue:this.modelValue,t=this._allValidators.find(e=>e instanceof vs);if(this.__isEmpty(e))return t&&(this.__syncValidationResult=[t]),void this.__finishValidation({source:"sync"});const s=this._allValidators.filter(e=>!(e instanceof fs||e instanceof vs)),i=s.filter(e=>!e.async),o=s.filter(e=>e.async);this.__executeSyncValidators(i,e,{hasAsync:Boolean(o.length)}),await this.__executeAsyncValidators(o,e)}__executeSyncValidators(e,t,{hasAsync:s}){e.length&&(this.__syncValidationResult=e.filter(e=>e.execute(t,e.param,{node:this}))),this.__finishValidation({source:"sync",hasAsync:s})}async __executeAsyncValidators(e,t){if(e.length){this.isPending=!0;const s=e.map(e=>e.execute(t,e.param,{node:this})),i=await Promise.all(s);this.__asyncValidationResult=i.map((t,s)=>e[s]).filter((e,t)=>i[t]),this.__finishValidation({source:"async"}),this.isPending=!1}}__executeResultValidators(e){return this._allValidators.filter(e=>!e.async&&e instanceof fs).filter(t=>t.executeOnResults({regularValidationResult:e,prevValidationResult:this.__prevValidationResult}))}__finishValidation({source:e,hasAsync:t}){const s=[...this.__syncValidationResult,...this.__asyncValidationResult],i=this.__executeResultValidators(s);this.__validationResult=[...i,...s];const o=this.constructor.validationTypes.reduce((e,t)=>Tt({},e,{[t]:{}}),{});this.__validationResult.forEach(e=>{o[e.type]||(o[e.type]={}),o[e.type][e.name]=!0}),this.validationStates=o,this.hasFeedbackFor=[...new Set(this.__validationResult.map(e=>e.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0})),"async"!==e&&t||this.__validateCompleteResolve()}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}__onValidatorUpdated(e){"param-changed"!==e.type&&"config-changed"!==e.type||this.validate()}__setupValidators(){const e=["param-changed","config-changed"];this.__prevValidators&&this.__prevValidators.forEach(t=>{e.forEach(e=>t.removeEventListener(e,this.__onValidatorUpdated)),t.onFormControlDisconnect(this)}),this._allValidators.forEach(t=>{if(!(t instanceof ms)){const e=`Validators array only accepts class instances of Validator. Type "${Array.isArray(t)?"array":typeof t}" found.`;throw console.error(e,this),new Error(e)}if(-1===this.constructor.validationTypes.indexOf(t.type)){const e=`This component does not support the validator type "${t.type}" used in "${t.name}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(e,this),new Error(e)}e.forEach(e=>t.addEventListener(e,this.__onValidatorUpdated)),t.onFormControlConnect(this)}),this.__prevValidators=this._allValidators}static _hasObjectChanged(e,t){return JSON.stringify(e)!==JSON.stringify(t)}__isEmpty(e){return"function"==typeof this._isEmpty?this._isEmpty(e):null==e||""===e}async __getFeedbackMessages(e){let t=await this.fieldName;return Promise.all(e.map(async e=>(e.config.fieldName&&(t=await e.config.fieldName),{message:await e._getMessage({modelValue:this.modelValue,formControl:this,fieldName:t}),type:e.type,validator:e})))}_updateFeedbackComponent(){this.__feedbackQueue||(this.__feedbackQueue=new bs),this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{this.__prioritizedResult=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult});const e=await this.__getFeedbackMessages(this.__prioritizedResult);this._feedbackNode.feedbackData=e.length?e:[]}):this.__feedbackQueue.add(async()=>{this._feedbackNode.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete}_showFeedbackConditionFor(){return this.touched&&this.dirty||this.prefilled||this.submitted}_hasFeedbackVisibleFor(e){return this.hasFeedbackFor&&this.hasFeedbackFor.includes(e)&&this.shouldShowFeedbackFor&&this.shouldShowFeedbackFor.includes(e)}updated(e){super.updated(e),(e.has("shouldShowFeedbackFor")||e.has("hasFeedbackFor"))&&(this.showsFeedbackFor=this.constructor.validationTypes.map(e=>this._hasFeedbackVisibleFor(e)?e:void 0).filter(e=>!!e),this._updateFeedbackComponent())}_updateShouldShowFeedbackFor(){this.shouldShowFeedbackFor=this.constructor.validationTypes.map(e=>this._showFeedbackConditionFor(e)?e:void 0).filter(e=>!!e)}_prioritizeAndFilterFeedback({validationResult:e}){const t=this.constructor.validationTypes;return e.sort((e,s)=>t.indexOf(e.type)-t.indexOf(s.type)).slice(0,this._visibleMessagesAmount)}});class ks extends o{static get properties(){return{feedbackData:Array}}_messageTemplate({message:e}){return e}updated(){super.updated(),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type,window.clearTimeout(this.removeMessage),"success"===this.currentType&&(this.removeMessage=window.setTimeout(()=>{this.removeAttribute("type"),this.feedbackData=""},3e3))):"success"!==this.currentType&&this.removeAttribute("type")}render(){return n`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:s})=>n`
            ${this._messageTemplate({message:e,type:t,validator:s})}
          `)}
    `}}const ws=et`
  :host([disabled]) .btn {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    opacity: 0.65;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .btn {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
  }
`,Es=et`
  :host([visual='primary']) .btn {
    background-color: #5dabfb;
    border-color: #2b91fa;
    color: #fff;
  }

  :host([visual='primary']:hover) .btn,
  :host([visual='primary']:active) .btn {
    background: #8fc5fc;
    border-color: #2b91fa;
    color: #fff;
  }

  :host([visual='success']) .btn {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }

  :host([visual='success']:hover) .btn,
  :host([visual='success']:active) .btn {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
  }

  :host([visual='info']) .btn {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
  }

  :host([visual='info']:hover) .btn,
  :host([visual='info']:active) .btn {
    color: #fff;
    background-color: #31b0d5;
    border-color: #269abc;
  }

  :host([visual='warning']) .btn {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
  }

  :host([visual='warning']:hover) .btn,
  :host([visual='warning']:active) .btn {
    color: #fff;
    background-color: #ec971f;
    border-color: #d58512;
  }

  :host([visual='danger']) .btn {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
  }

  :host([visual='danger']:hover) .btn,
  :host([visual='danger']:active) .btn {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
  }
`;customElements.define("fi-ui-button",class extends Ft{static get styles(){return[super.styles,ws,Es]}});const xs=et`
  :host {
    position: relative;
    height: 30px;
    align-items: center;
  }

  :host([disabled]) {
    color: #ccc;
  }

  ::slotted(label) {
    padding-left: 0px;
  }

  ::slotted(input) {
    display: block;
  }

  .choice-field__graphic-container {
    pointer-events: none;
    display: block;
    position: absolute;
    left: 1px;
    height: 14px;
    width: 14px;
    background-color: #eee; // light grey
  }

  :host(:hover) .choice-field__graphic-container {
    background-color: #ccc; // deep grey
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }

  :host([checked]) .choice-field__graphic-container {
    background-color: var(--primary-color, #3498db);
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }

  :host([disabled]:hover) > .choice-field__graphic-container {
    background: #ccc; // deep grey
    width: 14px;
    height: 14px;
  }

  /* Show the checkmark when checked */
  :host([checked]) .choice-field__graphic-container .checkmark {
    display: block;
  }

  /* Style the checkmark/indicator */
  .choice-field__graphic-container > .checkmark {
    left: 4px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: '';
    position: absolute;
    display: none;
  }
`;customElements.define("fi-ui-checkbox",class extends At{_enhanceLightDomClasses(){super._enhanceLightDomClasses(),this._inputNode.classList.remove("form-control")}static get styles(){return[super.styles,xs]}choiceGraphicTemplate(){return Ue`
    <span name="label" class="checkmark"></span>
  `}});customElements.define("fi-ui-input",class extends zt{});customElements.define("fi-ui-header",class extends st{static get styles(){return et`
      :host {
        display: flex;
        height: 3rem;
        padding: 0 20px;
        background-color: var(--primary-color, #3077b7);
        color: #c4dbf0;
        position: relative;
      }

      ::slotted(*) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    `}render(){return Ue`
      <slot></slot>
    `}});customElements.define("fi-ui-menu",class extends st{static get styles(){return et`
      :host {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        -webkit-font-feature-settings: 'tnum';
        font-feature-settings: 'tnum';
        margin-bottom: 0;
        padding-left: 0;
        color: rgba(0, 0, 0, 0.65);
        line-height: 0;
        list-style: none;
        background: #fff;
        outline: none;
        -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
          0 9px 28px 8px rgba(0, 0, 0, 0.05);
        box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
          0 9px 28px 8px rgba(0, 0, 0, 0.05);
        -webkit-transition: background 0.3s, width 0.2s;
        transition: background 0.3s, width 0.2s;
      }
    `}render(){return Ue`
      <slot @menu-item-clicked="${this.menuItemClickedCallback}"></slot>
    `}menuItemClickedCallback(e){console.log("fi-menu-item clicked",e.target);const t=this.getElementsByTagName("fi-ui-menu-item");for(let e=0;e<t.length;e+=1)t[e].removeAttribute("active");e.target.hasAttribute("active")||e.target.setAttribute("active","")}});customElements.define("fi-ui-menu-item",class extends st{static get styles(){return et`
      :host {
        position: relative;
        display: block;
        margin: 0;
        padding: 0 20px;
        white-space: nowrap;
        cursor: pointer;
        -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
        height: 40px;
        line-height: 40px;
      }

      :host([active]) {
        color: #fff;
        background-color: var(--sidebar-active-color, #5badfb);
      }

      :host(:hover) {
        color: #fff;
        background-color: rgba(91, 173, 251, 0.7);
      }
    `}firstUpdated(){this.addEventListener("click",this.clickCallback)}render(){return Ue`
      <slot></slot>
    `}clickCallback(){const e=new CustomEvent("menu-item-clicked",{detail:{message:"menu-item clicked"},bubbles:!0,composed:!0});this.dispatchEvent(e)}});customElements.define("fi-ui-sider",class extends st{static get styles(){return et`
      :host {
        width: 250px;
      }
    `}render(){return Ue`
      <aside>
        <slot></slot>
      </aside>
    `}});customElements.define("fi-ui-sub-menu",class extends st{static get styles(){return et`
      :host(.open) #menu-content {
        display: block;
      }

      #menu-content {
        display: none;
        padding: 0 20px;
      }

      .fi-ui-menu-submenu-title {
        cursor: pointer;
        height: 40px;
        margin-top: 4px;
        margin-bottom: 4px;
        padding: 0 16px;
        overflow: hidden;
        font-size: 14px;
        line-height: 40px;
        text-overflow: ellipsis;
        -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .fi-ui-menu-submenu-title:hover {
        color: #fff;
        background-color: rgba(91, 173, 251, 0.7);
      }

      .fi-ui-menu-submenu-arrow {
        display: inline-block;
        font-size: 11px;
        margin-left: 10px;
        float: right;
        right: 16px;
        transform: rotate(0deg);
        transition: all 150ms ease-in-out;
      }

      :host(.open) .fi-ui-menu-submenu-arrow {
        transform: rotate(90deg);
      }
    `}constructor(){super(),this.open=!1}render(){return Ue`
      <div
        class="fi-ui-menu-submenu-title"
        role="button"
        aria-expanded="true"
        aria-owns="sub1$Menu"
        aria-haspopup="true"
        @click="${this.clickCallback}"
      >
        <slot name="title"></slot>
        <i class="fi-ui-menu-submenu-arrow">></i>
      </div>
      <slot id="menu-content"></slot>
    `}clickCallback(){console.log("cilcked",this),this.open=!this.open,this.open?this.classList.add("open"):this.classList.remove("open")}});const Cs=et`
  :host {
    position: relative;
    height: 30px;
    align-items: center;
  }

  .choice-field__graphic-container {
    pointer-events: none;
    display: block;
    position: absolute;
    top: 9px;
    left: 2px;
    height: 14px;
    width: 14px;
    background-color: #eee;
  }

  :host(:hover) .choice-field__graphic-container {
    background-color: #ccc;
  }

  :host([checked]) .choice-field__graphic-container {
    background-color: var(--primary-color, #3498db);
  }

  /* Show the checkmark when checked */
  :host([checked]) .choice-field__graphic-container .checkmark {
    display: block;
  }

  ::slotted(label) {
    padding-left: 10px;
  }

  .choice-field__graphic-container {
    border-radius: 50%;
  }

  /* Style the checkmark/indicator */
  .choice-field__graphic-container > .checkmark {
    top: 5px;
    left: 5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: white;
    content: '';
    position: absolute;
    display: none;
  }
  :host([disabled]) {
    color: #ccc;
  }
  :host([disabled]) > .choice-field__graphic-container {
    background: #ccc;
  }
`;customElements.define("fi-ui-radio",class extends as{_enhanceLightDomClasses(){super._enhanceLightDomClasses(),this._inputNode.classList.remove("form-control")}static get styles(){return[super.styles,Cs]}choiceGraphicTemplate(){return Ue`
    <span name="label" class="checkmark"></span>
  `}});customElements.define("fi-ui-option",class extends Kt{static get styles(){return[super.styles,et`
        :host {
          padding: 4px 10px;
        }

        :host([checked]) {
          background-color: var(--primary-color, #3077b7);
          color: #fff;
          border-color: #255d8f;
        }
      `]}});customElements.define("fi-ui-options",class extends us{});customElements.define("fi-ui-select-invoker",class extends ls{static get styles(){return[super.styles,et`
        :host {
          position: relative;
          background-color: #fff;
          border: 1px solid #d9d9d9;
          border-radius: 2px;
          -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          width: 100%;
          height: 26px;
          min-height: 26px;
          padding: 0;
        }

        .btn {
          background: transparent;
          padding: 0 10px;
        }

        :host(:focus:not([disabled])) .btn {
          outline: inherit;
        }

        :host(:focus:not([disabled])) {
          border-color: var(--primary-color, #3077b7);
        }

        :host(:hover) .btn {
          background: transparent;
        }

        #content-wrapper {
          flex: 1;
        }

        ::slotted([slot='after']) {
          display: inline-block;
          color: inherit;
          font-style: normal;
          line-height: 0;
          text-transform: none;
          vertical-align: -0.125em;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: absolute;
          top: 53%;
          right: 11px;
          width: 12px;
          height: 12px;
          margin-top: -6px;
          color: rgba(0, 0, 0, 0.25);
          font-size: 12px;
          line-height: 1;
          text-align: center;
          pointer-events: none;
          transition: transform 0.3s;
        }

        :host([aria-expanded='true']) ::slotted([slot='after']) {
          transform: rotate(180deg);
        }

        ::slotted([slot='_overlay-shadow-outlet']) {
          outline: var(--primary-color, #3077b7) auto 1px;
        }
      `]}_renderBefore(){this.querySelectorAll('span[slot=""]').forEach(e=>e.parentNode.removeChild(e));const e=document.createElement("span");e.setAttribute("slot",""),Me(Ue`
        ${this._contentTemplate()}
      `,e),this.appendChild(e)}});customElements.define("fi-ui-select-rich",class extends hs{static get styles(){return et``}get slots(){return Tt({},super.slots,{invoker:()=>document.createElement("fi-ui-select-invoker")})}_enhanceLightDomClasses(){super._enhanceLightDomClasses(),this._inputNode.classList.remove("form-control")}_defineOverlayConfig(){return Tt({},super._defineOverlayConfig(),{inheritsReferenceWidth:"full"})}});customElements.define("fi-ui-switch-button",class extends ps{static get styles(){return et`
      .button-switch {
        pointer-events: none;
        height: 1.875em;
        margin-bottom: 0.625em;
        position: relative;
        width: 4.5em;
      }
      .button-switch .lbl-off,
      .button-switch .lbl-on {
        cursor: pointer;
        display: block;
        font-weight: bold;
        line-height: 1em;
        position: absolute;
        top: 0.5em;
        -webkit-transition: opacity 0.25s ease-out 0.1s;
        transition: opacity 0.25s ease-out 0.1s;
        text-transform: uppercase;
      }
      .button-switch .lbl-off {
        right: 0.4375em;
      }
      .button-switch .lbl-on {
        color: #fefefe;
        opacity: 0;
        left: 0.4375em;
      }
      .button-switch .switch {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        height: 0;
        left: 0;
        line-height: 0;
        outline: none;
        position: absolute;
        top: 0;
        width: 0;
      }
      .button-switch .switch:before,
      .button-switch .switch:after {
        content: '';
        position: absolute;
      }
      .button-switch .switch:before {
        border-radius: 1.25em;
        background: #bdc3c7;
        height: 1.875em;
        left: -0.25em;
        top: -0.1875em;
        -webkit-transition: background-color 0.25s ease-out 0.1s;
        transition: background-color 0.25s ease-out 0.1s;
        width: 4.5em;
      }
      .button-switch .switch:after {
        box-shadow: 0 0.0625em 0.375em 0 #666;
        border-radius: 50%;
        background: #fefefe;
        height: 1.5em;
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-transition: -webkit-transform 0.25s ease-out 0.1s;
        transition: -webkit-transform 0.25s ease-out 0.1s;
        transition: transform 0.25s ease-out 0.1s;
        transition: transform 0.25s ease-out 0.1s, -webkit-transform 0.25s ease-out 0.1s;
        width: 1.5em;
      }
      .button-switch .switch:checked:after {
        -webkit-transform: translate(2.5em, 0);
        transform: translate(2.5em, 0);
      }
      .button-switch .switch:checked ~ .lbl-off {
        opacity: 0;
      }
      .button-switch .switch:checked ~ .lbl-on {
        opacity: 1;
      }
      .button-switch .switch#switch-checkbox:checked:before {
        background: var(--primary-color, #3498db);
      }
    `}render(){return Ue`
      <div class="button-switch">
        <input type="checkbox" id="switch-checkbox" class="switch" ?checked="${this.checked}" />
        <label for="switch-blue" class="lbl-off">Off</label>
        <label for="switch-blue" class="lbl-on">On</label>
      </div>
    `}_requestUpdate(e,t){super._requestUpdate(e,t),this.isConnected&&"checked"===e&&this.shadowRoot.querySelector("input")&&(this.shadowRoot.querySelector("input").checked=this.checked)}});customElements.define("fi-ui-switch",class extends _s{get slots(){return Tt({},super.slots,{input:()=>document.createElement("fi-ui-switch-button")})}_enhanceLightDomClasses(){super._enhanceLightDomClasses(),this._inputNode.classList.remove("form-control")}});export{ks as L,Tt as _};
