import{_ as C,u as $,k as x,s as y,l as R,w as S,o as a,c as o,a as i,F as m,n as f,q as v,t as k,v as u,x as g,y as w,d as B,e as F,f as p}from"./commonMain-DAAUsnTm.js";const I={class:"layout-header"},L={class:"menus"},N=["onClick"],P={__name:"TopHeader",setup(b){const r=$(),d=x(),{topRoutes:c}=y(r),l=R(()=>c.value.find(t=>t.path===d.meta.rootPath));S(l,t=>{r.setSidebar(t==null?void 0:t.children)},{immediate:!0});const _=t=>{r.setSidebar(t.children)};return(t,n)=>(a(),o("div",I,[i("div",L,[(a(!0),o(m,null,f(u(c),s=>(a(),o("div",{class:v(["menu-item",{"is-active":s===l.value}]),onClick:e=>_(s)},k(s.meta.title),11,N))),256))])]))}},T=C(P,[["__scopeId","data-v-0cdbafb8"]]),V={class:"sidebar"},H={class:"the-route-box"},q=["onClick"],z={class:"name"},A={key:0,class:"children-box"},D=["onClick"],E={class:"name"},M={__name:"Sidebar",setup(b){const r=g(),d=x(),c=$(),{sidebars:l}=y(c);S(l,(n,s)=>{if(c.isFirst){c.isFirst=!1;return}const e=_(n[0]);r.push({path:e})},{immediate:!0});function _(n){var s;if(!n)return"/";if((s=n.children)!=null&&s.length){const e=n.children.find(Boolean);if(e)return _(e)}return n.path}function t({name:n,path:s}){r.push({path:s})}return(n,s)=>(a(),o("aside",V,[i("ul",H,[(a(!0),o(m,null,f(u(l),e=>(a(),o("li",{class:v(["the-route-link",{"is-active":u(d).path===e.path}])},[i("div",{class:"father-name",onClick:h=>t(e)},[i("span",z,k(e.meta.title||e.path),1)],8,q),e.children&&e.children.length?(a(),o("div",A,[(a(!0),o(m,null,f(e.children,h=>(a(),o("div",{class:v(["children-item",{"is-active":u(d).path===h.path}]),onClick:O=>t(h)},[i("span",E,k(e.meta.title||e.path),1)],10,D))),256))])):w("",!0)],2))),256))])]))}},j=C(M,[["__scopeId","data-v-a966a62f"]]),G={class:"layout"},J={class:"layout-main"},K=B({__name:"Layout",setup(b){return(r,d)=>{const c=F("router-view");return a(),o("div",G,[p(T),p(j),i("div",J,[p(c)])])}}}),U=C(K,[["__scopeId","data-v-5ec0c780"]]);export{U as default};
