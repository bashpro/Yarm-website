import{s as k,n as x,f as y}from"../chunks/scheduler.13ff1175.js";import{S as H,i as P,g as h,m,s as j,h as g,j as $,n as _,f as b,c as C,x as L,k as E,a as M,y as c,o as S}from"../chunks/index.c6531af0.js";import{d as T}from"../chunks/singletons.6e4e9d80.js";const q=()=>{const t=T;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},w={subscribe(t){return q().page.subscribe(t)}};function z(t){let e,s,r=t[0].status+"",i,f,l=t[0].error.message+"",u,d,o,v='<a href="/" class="text-zinc-600">click here</a> to redirect';return{c(){e=h("div"),s=h("h1"),i=m(r),f=m(": Page "),u=m(l),d=j(),o=h("span"),o.innerHTML=v,this.h()},l(n){e=g(n,"DIV",{class:!0});var a=$(e);s=g(a,"H1",{class:!0});var p=$(s);i=_(p,r),f=_(p,": Page "),u=_(p,l),p.forEach(b),d=C(a),o=g(a,"SPAN",{"data-svelte-h":!0}),L(o)!=="svelte-1fkixa1"&&(o.innerHTML=v),a.forEach(b),this.h()},h(){E(s,"class","text-4xl pb-2"),E(e,"class","flex w-full h-screen justify-center items-center flex-col")},m(n,a){M(n,e,a),c(e,s),c(s,i),c(s,f),c(s,u),c(e,d),c(e,o)},p(n,[a]){a&1&&r!==(r=n[0].status+"")&&S(i,r),a&1&&l!==(l=n[0].error.message+"")&&S(u,l)},i:x,o:x,d(n){n&&b(e)}}}function A(t,e,s){let r;return y(t,w,i=>s(0,r=i)),[r]}let V=class extends H{constructor(e){super(),P(this,e,A,z,k,{})}};export{V as component};
