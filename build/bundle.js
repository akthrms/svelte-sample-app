var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){t.value=null==e?"":e}let g;function $(t){g=t}const y=[],v=[],w=[],x=[],_=Promise.resolve();let k=!1;function I(t){w.push(t)}let E=!1;const O=new Set;function C(){if(!E){E=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];$(e),j(e.$$)}for($(null),y.length=0;v.length;)v.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];O.has(e)||(O.add(e),e())}w.length=0}while(y.length);for(;x.length;)x.pop()();k=!1,E=!1,O.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const A=new Set;function D(t,e){t&&t.i&&(A.delete(t),t.i(e))}function T(t,n,r){const{fragment:c,on_mount:i,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,r),I((()=>{const n=i.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(I)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,_.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(e,s,r,c,i,u,l=[-1]){const d=g;$(e);const f=s.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=r?r(e,f,((t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),h&&N(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();s.intro&&D(e.$$.fragment),T(e,s.target,s.anchor),C()}$(d)}class M{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[];const B={newItem:"",todos:[]},H=({newItem:t,todos:e})=>{return{newItem:"",todos:[(n=t,{item:n,isDone:!1}),...e]};var n},P=({todos:t})=>({newItem:"",todos:t}),z=(()=>{const{set:e,subscribe:n,update:o}=function(e,n=t){let o;const s=[];function c(t){if(r(e,t)&&(e=t,o)){const t=!q.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),q.push(n,e)}if(t){for(let t=0;t<q.length;t+=2)q[t][0](q[t+1]);q.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(r,i=t){const u=[r,i];return s.push(u),1===s.length&&(o=n(c)||t),r(e),()=>{const t=s.indexOf(u);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}(B);return{set:e,subscribe:n,update:o,addItem:()=>o(H),deleteItem:t=>()=>o((t=>e=>Object.assign({todos:e.todos.splice(t,1)},e))(t)),resetItem:()=>o(P)}})();function F(t,e,n){const o=t.slice();return o[4]=e[n].item,o[5]=e[n].isDone,o[6]=e,o[7]=n,o}function G(t){let e,n,s,r,c,b,g,$,y,v,w,x,_,k=t[4]+"";function I(){t[3].call(s,t[6],t[7])}return{c(){e=d("tr"),n=d("td"),s=d("input"),r=p(),c=d("td"),b=f(k),$=p(),y=d("td"),v=d("button"),v.textContent="削除する",w=p(),m(s,"class","checkbox"),m(s,"type","checkbox"),m(c,"class",g=i(t[5]?"done":"")+" svelte-1pwprbs"),m(v,"class","button is-danger is-rounded")},m(o,i){l(o,e,i),u(e,n),u(n,s),s.checked=t[5],u(e,r),u(e,c),u(c,b),u(e,$),u(e,y),u(y,v),u(e,w),x||(_=[h(s,"change",I),h(v,"click",z.deleteItem(t[7]))],x=!0)},p(e,n){t=e,2&n&&(s.checked=t[5]),2&n&&k!==(k=t[4]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(b,k),2&n&&g!==(g=i(t[5]?"done":"")+" svelte-1pwprbs")&&m(c,"class",g)},d(t){t&&a(e),x=!1,o(_)}}}function J(e){let n,s,r,c,i,g,$,y,v,w,x,_,k,I,E,O,C,j,A,D,T=e[1].todos,L=[];for(let t=0;t<T.length;t+=1)L[t]=G(F(e,T,t));return{c(){n=d("section"),n.innerHTML='<div class="hero-body"><div class="container"><h1 class="title">TODO アプリ</h1> \n      <p class="subtitle">written in Svelte - Cybernetically enhanced web apps</p></div></div>',s=p(),r=d("section"),c=d("div"),i=d("div"),g=d("div"),$=d("input"),y=p(),v=d("div"),w=d("button"),w.textContent="リセットする",x=p(),_=d("button"),k=f("追加する"),I=p(),E=d("br"),O=p(),C=d("table"),j=d("tbody");for(let t=0;t<L.length;t+=1)L[t].c();m(n,"class","hero is-primary"),m($,"type","text"),m($,"class","input"),m($,"placeholder","入力してください"),m(g,"class","control"),m(i,"class","field"),m(w,"class","button is-ghost"),m(_,"class","button is-primary"),_.disabled=e[0],m(v,"class","buttons"),m(C,"class","table is-striped is-hoverable is-fullwidth"),m(c,"class","container"),m(r,"class","section")},m(t,o){l(t,n,o),l(t,s,o),l(t,r,o),u(r,c),u(c,i),u(i,g),u(g,$),b($,e[1].newItem),u(c,y),u(c,v),u(v,w),u(v,x),u(v,_),u(_,k),u(c,I),u(c,E),u(c,O),u(c,C),u(C,j);for(let t=0;t<L.length;t+=1)L[t].m(j,null);A||(D=[h($,"input",e[2]),h(w,"click",z.resetItem),h(_,"click",z.addItem)],A=!0)},p(t,[e]){if(2&e&&$.value!==t[1].newItem&&b($,t[1].newItem),1&e&&(_.disabled=t[0]),2&e){let n;for(T=t[1].todos,n=0;n<T.length;n+=1){const o=F(t,T,n);L[n]?L[n].p(o,e):(L[n]=G(o),L[n].c(),L[n].m(j,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=T.length}},i:t,o:t,d(t){t&&a(n),t&&a(s),t&&a(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(L,t),A=!1,o(D)}}}function K(t,e,n){let o,s;return c(t,z,(t=>n(1,o=t))),t.$$.update=()=>{2&t.$$.dirty&&n(0,s=""===o.newItem.trim())},[s,o,function(){o.newItem=this.value,z.set(o)},function(t,e){t[e].isDone=this.checked,z.set(o)}]}class Q extends M{constructor(t){super(),S(this,t,K,J,r,{})}}function R(e){let n,o,s;return o=new Q({}),{c(){var t;n=d("main"),(t=o.$$.fragment)&&t.c()},m(t,e){l(t,n,e),T(o,n,null),s=!0},p:t,i(t){s||(D(o.$$.fragment,t),s=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(o.$$.fragment,t),s=!1},d(t){t&&a(n),L(o)}}}return new class extends M{constructor(t){super(),S(this,t,null,R,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
