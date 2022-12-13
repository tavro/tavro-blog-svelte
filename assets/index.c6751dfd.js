(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function w(){}function ot(t){return t()}function tt(){return Object.create(null)}function x(t){t.forEach(ot)}function st(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function lt(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function H(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function y(){return k(" ")}function et(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ut(t){return Array.from(t.childNodes)}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let U;function C(t){U=t}const A=[],F=[],z=[],K=[],at=Promise.resolve();let G=!1;function ct(){G||(G=!0,at.then(it))}function J(t){z.push(t)}function ft(t){K.push(t)}const I=new Set;let j=0;function it(){const t=U;do{for(;j<A.length;){const e=A[j];j++,C(e),dt(e.$$)}for(C(null),A.length=0,j=0;F.length;)F.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];I.has(n)||(I.add(n),n())}z.length=0}while(A.length);for(;K.length;)K.pop()();G=!1,I.clear(),C(t)}function dt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const M=new Set;let pt;function S(t,e){t&&t.i&&(M.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),pt.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function gt(t,e,n){const o=t.$$.props[e];o!==void 0&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function D(t){t&&t.c()}function T(t,e,n,o){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),o||J(()=>{const i=t.$$.on_mount.map(ot).filter(st);t.$$.on_destroy?t.$$.on_destroy.push(...i):x(i),t.$$.on_mount=[]}),r.forEach(J)}function B(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(A.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,o,s,r,i,f=[-1]){const h=U;C(t);const l=t.$$={fragment:null,ctx:[],props:r,update:w,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:tt(),dirty:f,skip_bound:!1,root:e.target||h.$$.root};i&&i(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,v,...p)=>{const m=p.length?p[0]:v;return l.ctx&&s(l.ctx[a],l.ctx[a]=m)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](m),_&&mt(t,a)),v}):[],l.update(),_=!0,x(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){const a=ut(e.target);l.fragment&&l.fragment.l(a),a.forEach(H)}else l.fragment&&l.fragment.c();e.intro&&S(t.$$.fragment),T(t,e.target,e.anchor,e.customElement),it()}C(h)}class W{$destroy(){B(this,1),this.$destroy=w}$on(e,n){if(!st(n))return w;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ht(t){let e,n,o,s,r,i,f,h,l,_,a,v;return{c(){e=g("div"),n=g("a"),o=g("h1"),s=k(t[0]),r=y(),i=g("hr"),f=y(),h=g("p"),l=k(t[1]),_=y(),a=g("p"),v=k(t[2]),b(o,"class","article-title svelte-l3gobb"),b(n,"href","#"),b(n,"class","link svelte-l3gobb"),b(i,"class","decorator svelte-l3gobb"),b(h,"class","article-date svelte-l3gobb"),b(a,"class","article-desc svelte-l3gobb"),b(e,"class","article-preview svelte-l3gobb")},m(p,m){R(p,e,m),u(e,n),u(n,o),u(o,s),u(e,r),u(e,i),u(e,f),u(e,h),u(h,l),u(e,_),u(e,a),u(a,v)},p(p,[m]){m&1&&P(s,p[0]),m&2&&P(l,p[1]),m&4&&P(v,p[2])},i:w,o:w,d(p){p&&H(e)}}}function _t(t,e,n){let{title:o}=e,{date:s}=e,{content:r}=e;return t.$$set=i=>{"title"in i&&n(0,o=i.title),"date"in i&&n(1,s=i.date),"content"in i&&n(2,r=i.content)},[o,s,r]}class nt extends W{constructor(e){super(),V(this,e,_t,ht,Q,{title:0,date:1,content:2})}}function vt(t){let e,n,o,s,r,i,f,h,l,_,a,v;return{c(){e=g("div"),n=g("div"),o=g("button"),o.textContent="\xAB",s=y(),r=g("div"),i=g("p"),f=k(t[0]),h=y(),l=g("div"),_=g("button"),_.textContent="\xBB",b(n,"class","left-button svelte-dukz62"),b(r,"class","page-nr svelte-dukz62"),b(l,"class","right-button svelte-dukz62"),b(e,"class","nav-container svelte-dukz62")},m(p,m){R(p,e,m),u(e,n),u(n,o),u(e,s),u(e,r),u(r,i),u(i,f),u(e,h),u(e,l),u(l,_),a||(v=[et(o,"click",t[2]),et(_,"click",t[1])],a=!0)},p(p,[m]){m&1&&P(f,p[0])},i:w,o:w,d(p){p&&H(e),a=!1,x(v)}}}function bt(t,e,n){let{maxCount:o}=e,{count:s=1}=e;const r=()=>{s<o&&n(0,s+=1)},i=()=>{s>1&&n(0,s-=1)};return t.$$set=f=>{"maxCount"in f&&n(3,o=f.maxCount),"count"in f&&n(0,s=f.count)},[s,r,i,o]}class yt extends W{constructor(e){super(),V(this,e,bt,vt,Q,{maxCount:3,count:0})}}const $t=1,wt={1:{title:"my first blog post!",date:"dec 13 12:25",content:"i am so happy to announce that i've started this blog and hopefully it will be further developed and turned into something useful. this is really just a way for me to stay motivated while learning svelte, but i will make sure to create posts every now and then!"}},c={postAmount:$t,posts:wt};function At(t){let e,n,o,s,r,i,f,h,l,_,a,v,p,m,X,E,L;f=new nt({props:{title:c.posts[c.postAmount-(-1+t[0])*2].title,date:c.posts[c.postAmount-(-1+t[0])*2].date,content:c.posts[c.postAmount-(-1+t[0])*2].content}}),l=new nt({props:{title:c.posts[c.postAmount-1-(-1+t[0])*2].title,date:c.posts[c.postAmount-1-(-1+t[0])*2].date,content:c.posts[c.postAmount-1-(-1+t[0])*2].content}});function rt(d){t[1](d)}let Y={maxCount:c.postAmount/2};return t[0]!==void 0&&(Y.count=t[0]),a=new yt({props:Y}),F.push(()=>gt(a,"count",rt)),{c(){e=g("main"),n=g("div"),n.innerHTML='<a href="#" target="_blank"><img src="https://github.com/tavro/tavro.github.io/raw/master/public/icon.png" class="tavro-logo svelte-1g6fi21" alt="tavro logo"/></a>',o=y(),s=g("h1"),s.textContent="tavro-blog",r=y(),i=g("div"),D(f.$$.fragment),h=y(),D(l.$$.fragment),_=y(),D(a.$$.fragment),p=y(),m=g("p"),m.innerHTML='check out <a href="https://isakhorvath.me" class="link svelte-1g6fi21" target="_blank">isakhorvath.me</a> to get to know me a little better!',X=y(),E=g("p"),E.textContent="2022 \xA9 all rights reserved",b(i,"class","preview svelte-1g6fi21"),b(E,"class","rights svelte-1g6fi21")},m(d,$){R(d,e,$),u(e,n),u(e,o),u(e,s),u(e,r),u(e,i),T(f,i,null),u(i,h),T(l,i,null),u(i,_),T(a,i,null),u(e,p),u(e,m),u(e,X),u(e,E),L=!0},p(d,[$]){const O={};$&1&&(O.title=c.posts[c.postAmount-(-1+d[0])*2].title),$&1&&(O.date=c.posts[c.postAmount-(-1+d[0])*2].date),$&1&&(O.content=c.posts[c.postAmount-(-1+d[0])*2].content),f.$set(O);const N={};$&1&&(N.title=c.posts[c.postAmount-1-(-1+d[0])*2].title),$&1&&(N.date=c.posts[c.postAmount-1-(-1+d[0])*2].date),$&1&&(N.content=c.posts[c.postAmount-1-(-1+d[0])*2].content),l.$set(N);const Z={};!v&&$&1&&(v=!0,Z.count=d[0],ft(()=>v=!1)),a.$set(Z)},i(d){L||(S(f.$$.fragment,d),S(l.$$.fragment,d),S(a.$$.fragment,d),L=!0)},o(d){q(f.$$.fragment,d),q(l.$$.fragment,d),q(a.$$.fragment,d),L=!1},d(d){d&&H(e),B(f),B(l),B(a)}}}function kt(t,e,n){let o=1;function s(r){o=r,n(0,o)}return[o,s]}class Ct extends W{constructor(e){super(),V(this,e,kt,At,Q,{})}}new Ct({target:document.getElementById("app")});
