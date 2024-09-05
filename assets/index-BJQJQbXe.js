import{a as w}from"./index-Dwteuxnt.js";import{v as A}from"./index-BSAZhzZx.js";function f(e){const t=[];let n=-1,r=0,l=0;for(;++n<e.length;){const i=e.charCodeAt(n);let a="";if(i===37&&w(e.charCodeAt(n+1))&&w(e.charCodeAt(n+2)))l=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const s=e.charCodeAt(n+1);i<56320&&s>56319&&s<57344?(a=String.fromCharCode(i,s),l=1):a="�"}else a=String.fromCharCode(i);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+l+1,a=""),l&&(n+=l,l=0)}return t.join("")+e.slice(r)}function T(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function H(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function F(e,t){const n=t.value?t.value+`
`:"",r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,l={};r&&(l.className=["language-"+r]);let i={type:"element",tagName:"code",properties:l,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function U(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function E(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function L(e,t){const n=String(t.identifier).toUpperCase(),r=f(n.toLowerCase()),l=e.footnoteOrder.indexOf(n);let i;l===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,i=e.footnoteOrder.length):(e.footnoteCounts[n]++,i=l+1);const a=e.footnoteCounts[n],s={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function $(e,t){const n=e.footnoteById;let r=1;for(;r in n;)r++;const l=String(r);return n[l]={type:"footnoteDefinition",identifier:l,children:[{type:"paragraph",children:t.children}],position:t.position},L(e,{type:"footnoteReference",identifier:l,position:t.position})}function j(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function q(e,t){if(e.dangerous){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}return null}function I(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return{type:"text",value:"!["+t.alt+r};const l=e.all(t),i=l[0];i&&i.type==="text"?i.value="["+i.value:l.unshift({type:"text",value:"["});const a=l[l.length-1];return a&&a.type==="text"?a.value+=r:l.push({type:"text",value:r}),l}function z(e,t){const n=e.definition(t.identifier);if(!n)return I(e,t);const r={src:f(n.url||""),alt:t.alt};n.title!==null&&n.title!==void 0&&(r.title=n.title);const l={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,l),e.applyData(t,l)}function J(e,t){const n={src:f(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function V(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Z(e,t){const n=e.definition(t.identifier);if(!n)return I(e,t);const r={href:f(n.url||"")};n.title!==null&&n.title!==void 0&&(r.title=n.title);const l={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function _(e,t){const n={href:f(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function G(e,t,n){const r=e.all(t),l=n?K(n):S(t),i={},a=[];if(typeof t.checked=="boolean"){const o=r[0];let c;o&&o.type==="element"&&o.tagName==="p"?c=o:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const o=r[s];(l||s!==0||o.type!=="element"||o.tagName!=="p")&&a.push({type:"text",value:`
`}),o.type==="element"&&o.tagName==="p"&&!l?a.push(...o.children):a.push(o)}const u=r[r.length-1];u&&(l||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:i,children:a};return e.patch(t,p),e.applyData(t,p)}function K(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=S(n[r])}return t}function S(e){const t=e.spread;return t??e.children.length>1}function M(e,t){const n={},r=e.all(t);let l=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++l<r.length;){const a=r[l];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function Q(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function W(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function X(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const g=B("start"),x=B("end");function Y(e){return{start:g(e),end:x(e)}}function B(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function ee(e,t){const n=e.all(t),r=n.shift(),l=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),l.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=g(t.children[1]),u=x(t.children[t.children.length-1]);s.line&&u.line&&(a.position={start:s,end:u}),l.push(a)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(l,!0)};return e.patch(t,i),e.applyData(t,i)}function te(e,t,n){const r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let u=-1;const p=[];for(;++u<s;){const c=t.children[u],h={},b=a?a[u]:void 0;b&&(h.align=b);let y={type:"element",tagName:i,properties:h,children:[]};c&&(y.children=e.all(c),e.patch(c,y),y=e.applyData(t,y)),p.push(y)}const o={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(t,o),e.applyData(t,o)}function ne(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const k=9,v=32;function re(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),l=0;const i=[];for(;r;)i.push(C(t.slice(l,r.index),l>0,!0),r[0]),l=r.index+r[0].length,r=n.exec(t);return i.push(C(t.slice(l),l>0,!1)),i.join("")}function C(e,t,n){let r=0,l=e.length;if(t){let i=e.codePointAt(r);for(;i===k||i===v;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(l-1);for(;i===k||i===v;)l--,i=e.codePointAt(l-1)}return l>r?e.slice(r,l):""}function le(e,t){const n={type:"text",value:re(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function ie(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const ae={blockquote:T,break:H,code:F,delete:U,emphasis:E,footnoteReference:L,footnote:$,heading:j,html:q,imageReference:z,image:J,inlineCode:V,linkReference:Z,link:_,listItem:G,list:M,paragraph:Q,root:W,strong:X,table:ee,tableCell:ne,tableRow:te,text:le,thematicBreak:ie,toml:m,yaml:m,definition:m,footnoteDefinition:m};function m(){return null}function oe(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}const D={}.hasOwnProperty;function ce(e){const t=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return A(e,"definition",r=>{const l=P(r.identifier);l&&!D.call(t,l)&&(t[l]=r)}),n;function n(r){const l=P(r);return l&&D.call(t,l)?t[l]:null}}function P(e){return String(e||"").toUpperCase()}const d={}.hasOwnProperty;function pe(e,t){const n=t||{},r=n.allowDangerousHtml||!1,l={};return a.dangerous=r,a.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,a.footnoteLabel=n.footnoteLabel||"Footnotes",a.footnoteLabelTagName=n.footnoteLabelTagName||"h2",a.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},a.footnoteBackLabel=n.footnoteBackLabel||"Back to content",a.unknownHandler=n.unknownHandler,a.passThrough=n.passThrough,a.handlers={...ae,...n.handlers},a.definition=ce(e),a.footnoteById=l,a.footnoteOrder=[],a.footnoteCounts={},a.patch=se,a.applyData=ue,a.one=s,a.all=u,a.wrap=he,a.augment=i,A(e,"footnoteDefinition",p=>{const o=String(p.identifier).toUpperCase();d.call(l,o)||(l[o]=p)}),a;function i(p,o){if(p&&"data"in p&&p.data){const c=p.data;c.hName&&(o.type!=="element"&&(o={type:"element",tagName:"",properties:{},children:[]}),o.tagName=c.hName),o.type==="element"&&c.hProperties&&(o.properties={...o.properties,...c.hProperties}),"children"in o&&o.children&&c.hChildren&&(o.children=c.hChildren)}if(p){const c="type"in p?p:{position:p};oe(c)||(o.position={start:g(c),end:x(c)})}return o}function a(p,o,c,h){return Array.isArray(c)&&(h=c,c={}),i(p,{type:"element",tagName:o,properties:c||{},children:h||[]})}function s(p,o){return O(a,p,o)}function u(p){return N(a,p)}}function se(e,t){e.position&&(t.position=Y(e))}function ue(e,t){let n=t;if(e&&e.data){const r=e.data.hName,l=e.data.hChildren,i=e.data.hProperties;typeof r=="string"&&(n.type==="element"?n.tagName=r:n={type:"element",tagName:r,properties:{},children:[]}),n.type==="element"&&i&&(n.properties={...n.properties,...i}),"children"in n&&n.children&&l!==null&&l!==void 0&&(n.children=l)}return n}function O(e,t,n){const r=t&&t.type;if(!r)throw new Error("Expected node, got `"+t+"`");return d.call(e.handlers,r)?e.handlers[r](e,t,n):e.passThrough&&e.passThrough.includes(r)?"children"in t?{...t,children:N(e,t)}:t:e.unknownHandler?e.unknownHandler(e,t,n):fe(e,t)}function N(e,t){const n=[];if("children"in t){const r=t.children;let l=-1;for(;++l<r.length;){const i=O(e,r[l],t);if(i){if(l&&r[l-1].type==="break"&&(!Array.isArray(i)&&i.type==="text"&&(i.value=i.value.replace(/^\s+/,"")),!Array.isArray(i)&&i.type==="element")){const a=i.children[0];a&&a.type==="text"&&(a.value=a.value.replace(/^\s+/,""))}Array.isArray(i)?n.push(...i):n.push(i)}}}return n}function fe(e,t){const n=t.data||{},r="value"in t&&!(d.call(n,"hProperties")||d.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:N(e,t)};return e.patch(t,r),e.applyData(t,r)}function he(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ye(e){const t=[];let n=-1;for(;++n<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;const l=e.all(r),i=String(r.identifier).toUpperCase(),a=f(i.toLowerCase());let s=0;const u=[];for(;++s<=e.footnoteCounts[i];){const c={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+a+(s>1?"-"+s:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};s>1&&c.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(s)}]}),u.length>0&&u.push({type:"text",value:" "}),u.push(c)}const p=l[l.length-1];if(p&&p.type==="element"&&p.tagName==="p"){const c=p.children[p.children.length-1];c&&c.type==="text"?c.value+=" ":p.children.push({type:"text",value:" "}),p.children.push(...u)}else l.push(...u);const o={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+a},children:e.wrap(l,!0)};e.patch(r,o),t.push(o)}if(t.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[{type:"text",value:e.footnoteLabel}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(t,!0)},{type:"text",value:`
`}]}}function R(e,t){const n=pe(e,t),r=n.one(e,null),l=ye(n);return l&&r.children.push({type:"text",value:`
`},l),Array.isArray(r)?{type:"root",children:r}:r}const me=function(e,t){return e&&"run"in e?de(e,t):ge(e||t)},be=me;function de(e,t){return(n,r,l)=>{e.run(R(n,t),r,i=>{l(i)})}}function ge(e){return t=>R(t,e)}export{N as all,be as default,ae as defaultHandlers,O as one};
