var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t){return null==t?"":t}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const f=new Set;function h(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(h)}function p(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function _(){return y(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){t.value=null==e?"":e}const k=new Set;let I,E=0;function C(t,e,n,o,s,r,l,c=0){const i=16.666/o;let u="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*r(t);u+=100*t+`%{${l(o,1-o)}}\n`}const a=u+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,f=t.ownerDocument;k.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild($("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${a}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${d} ${o}ms linear ${s}ms 1 both`,E+=1,d}function O(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),E-=s,E||d((()=>{E||(k.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),k.clear())})))}function A(t){I=t}const D=[],S=[],j=[],R=[],T=Promise.resolve();let L=!1;function M(t){j.push(t)}let N=!1;const P=new Set;function q(){if(!N){N=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];A(e),z(e.$$)}for(A(null),D.length=0;S.length;)S.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];P.has(e)||(P.add(e),e())}j.length=0}while(D.length);for(;R.length;)R.pop()();L=!1,N=!1,P.clear()}}function z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let B;function F(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const H=new Set;let G;function J(t,e){t&&t.i&&(H.delete(t),t.i(e))}function K(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),G.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const Q={duration:0};function U(n,o,l,c){let i=o(n,l),u=c?0:1,p=null,m=null,g=null;function b(){g&&O(n,g)}function $(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(o){const{delay:r=0,duration:l=300,easing:c=e,tick:y=t,css:_}=i||Q,v={start:a()+r,b:o};o||(v.group=G,G.r+=1),p||m?m=v:(_&&(b(),g=C(n,u,o,l,r,c,_)),o&&y(0,1),p=$(v,l),M((()=>F(n,o,"start"))),function(t){let e;0===f.size&&d(h),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(m&&t>m.start&&(p=$(m,l),m=null,F(n,p.b,"start"),_&&(b(),g=C(n,u,p.b,p.duration,0,c,i.css))),p)if(t>=p.end)y(u=p.b,1-u),F(n,p.b,"end"),m||(p.b?b():--p.group.r||s(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;u=p.a+p.d*c(e/p.duration),y(u,1-u)}return!(!p&&!m)})))}return{run(t){r(i)?(B||(B=Promise.resolve(),B.then((()=>{B=null}))),B).then((()=>{i=i(),y(t)})):y(t)},end(){b(),p=m=null}}}function V(t){t&&t.c()}function W(t,e,o){const{fragment:l,on_mount:c,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,o),M((()=>{const e=c.map(n).filter(r);i?i.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(M)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(D.push(t),L||(L=!0,T.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,r,l,c,i,u=[-1]){const a=I;A(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let h=!1;if(f.ctx=r?r(e,d,((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),h&&Y(e,t)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&J(e.$$.fragment),W(e,n.target,n.anchor),q()}A(a)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(e){let n;return{c(){n=$("section"),n.innerHTML='<div class="hero-body"><div class="container"><h1 class="title">TODO アプリ</h1> \n      <p class="subtitle">written in Svelte - Cybernetically enhanced web apps</p></div></div>',w(n,"class","hero is-primary")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class nt extends tt{constructor(t){super(),Z(this,t,null,et,l,{})}}function ot(t,{delay:n=0,duration:o=400,easing:s=e}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>"opacity: "+t*r}}const st=[];const rt={newItem:"",todos:[]},lt=({newItem:t,todos:e})=>{return{newItem:"",todos:[(n=t,{item:n,isDone:!1}),...e]};var n},ct=({todos:t})=>({newItem:"",todos:t}),it=(()=>{const{set:e,subscribe:n,update:o}=function(e,n=t){let o;const s=[];function r(t){if(l(e,t)&&(e=t,o)){const t=!st.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(l,c=t){const i=[l,c];return s.push(i),1===s.length&&(o=n(r)||t),l(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}(rt);return{set:e,subscribe:n,update:o,addItem:()=>o(lt),deleteItem:t=>()=>o((t=>e=>Object.assign({todos:e.todos.splice(t,1)},e))(t)),resetItem:()=>o(ct)}})();function ut(t,e,n){const o=t.slice();return o[8]=e[n],o[10]=n,o}function at(t,e,n){const o=t.slice();return o[4]=e[n].item,o[5]=e[n].isDone,o[6]=e,o[7]=n,o}function dt(t){let e,n,o=t[8]+"",s=0!==t[10]&&function(t){let e;return{c(){e=$("br")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}();return{c(){s&&s.c(),e=_(),n=y(o)},m(t,o){s&&s.m(t,o),m(t,e,o),m(t,n,o)},p(t,e){2&e&&o!==(o=t[8]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,o)},d(t){s&&s.d(t),t&&g(e),t&&g(n)}}}function ft(t){let e,n,o,r,l,c,u,a,d,f,h,y,x,k;function I(){t[3].call(o,t[6],t[7])}let E=t[4].split(/\n/),C=[];for(let e=0;e<E.length;e+=1)C[e]=dt(ut(t,E,e));return{c(){e=$("tr"),n=$("td"),o=$("input"),r=_(),l=$("td");for(let t=0;t<C.length;t+=1)C[t].c();u=_(),a=$("td"),d=$("button"),d.textContent="削除する",f=_(),w(o,"class","checkbox"),w(o,"type","checkbox"),w(l,"class",c=i(t[5]?"done":"")+" svelte-1pwprbs"),w(d,"class","button is-danger is-rounded is-pulled-right")},m(s,c){m(s,e,c),p(e,n),p(n,o),o.checked=t[5],p(e,r),p(e,l);for(let t=0;t<C.length;t+=1)C[t].m(l,null);p(e,u),p(e,a),p(a,d),p(e,f),y=!0,x||(k=[v(o,"change",I),v(d,"click",it.deleteItem(t[7]))],x=!0)},p(e,n){if(t=e,2&n&&(o.checked=t[5]),2&n){let e;for(E=t[4].split(/\n/),e=0;e<E.length;e+=1){const o=ut(t,E,e);C[e]?C[e].p(o,n):(C[e]=dt(o),C[e].c(),C[e].m(l,null))}for(;e<C.length;e+=1)C[e].d(1);C.length=E.length}(!y||2&n&&c!==(c=i(t[5]?"done":"")+" svelte-1pwprbs"))&&w(l,"class",c)},i(t){y||(M((()=>{h||(h=U(e,ot,{},!0)),h.run(1)})),y=!0)},o(t){h||(h=U(e,ot,{},!1)),h.run(0),y=!1},d(t){t&&g(e),b(C,t),t&&h&&h.end(),x=!1,s(k)}}}function ht(t){let e,n,o,r,l,c,i,u,a,d,f,h,k,I,E,C,O,A,D,S,j;e=new nt({});let R=t[1].todos,T=[];for(let e=0;e<R.length;e+=1)T[e]=ft(at(t,R,e));const L=t=>K(T[t],1,1,(()=>{T[t]=null}));return{c(){V(e.$$.fragment),n=_(),o=$("section"),r=$("div"),l=$("div"),c=$("div"),i=$("textarea"),u=_(),a=$("div"),d=$("button"),d.textContent="リセットする",f=_(),h=$("button"),k=y("追加する"),I=_(),E=$("br"),C=_(),O=$("table"),A=$("tbody");for(let t=0;t<T.length;t+=1)T[t].c();w(i,"class","textarea"),w(i,"rows","3"),w(i,"placeholder","入力してください"),w(c,"class","control"),w(l,"class","field"),w(d,"class","button is-ghost is-medium"),w(h,"class","button is-primary is-medium"),h.disabled=t[0],w(a,"class","buttons"),w(O,"class","table is-striped is-hoverable is-fullwidth"),w(r,"class","container"),w(o,"class","section")},m(s,g){W(e,s,g),m(s,n,g),m(s,o,g),p(o,r),p(r,l),p(l,c),p(c,i),x(i,t[1].newItem),p(r,u),p(r,a),p(a,d),p(a,f),p(a,h),p(h,k),p(r,I),p(r,E),p(r,C),p(r,O),p(O,A);for(let t=0;t<T.length;t+=1)T[t].m(A,null);D=!0,S||(j=[v(i,"input",t[2]),v(d,"click",it.resetItem),v(h,"click",it.addItem)],S=!0)},p(t,[e]){if(2&e&&x(i,t[1].newItem),(!D||1&e)&&(h.disabled=t[0]),2&e){let n;for(R=t[1].todos,n=0;n<R.length;n+=1){const o=at(t,R,n);T[n]?(T[n].p(o,e),J(T[n],1)):(T[n]=ft(o),T[n].c(),J(T[n],1),T[n].m(A,null))}for(G={r:0,c:[],p:G},n=R.length;n<T.length;n+=1)L(n);G.r||s(G.c),G=G.p}},i(t){if(!D){J(e.$$.fragment,t);for(let t=0;t<R.length;t+=1)J(T[t]);D=!0}},o(t){K(e.$$.fragment,t),T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)K(T[t]);D=!1},d(t){X(e,t),t&&g(n),t&&g(o),b(T,t),S=!1,s(j)}}}function pt(t,e,n){let o,s;return c(t,it,(t=>n(1,o=t))),t.$$.update=()=>{2&t.$$.dirty&&n(0,s=""===o.newItem.trim())},[s,o,function(){o.newItem=this.value,it.set(o)},function(t,e){t[e].isDone=this.checked,it.set(o)}]}class mt extends tt{constructor(t){super(),Z(this,t,pt,ht,l,{})}}function gt(e){let n,o,s;return o=new mt({}),{c(){n=$("main"),V(o.$$.fragment)},m(t,e){m(t,n,e),W(o,n,null),s=!0},p:t,i(t){s||(J(o.$$.fragment,t),s=!0)},o(t){K(o.$$.fragment,t),s=!1},d(t){t&&g(n),X(o)}}}return new class extends tt{constructor(t){super(),Z(this,t,null,gt,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map