import{d as g,f as p,_ as w,e as x,o as N,X as I,ay as S,aj as h,au as j,av as E,j as F,l as m,w as V,c as L,a as t,al as k,an as d,t as _,v as b,F as z,p as A,b as P,az as C}from"./commonMain-P_Pf5vDy.js";const X=()=>{},q=g({name:"Render",props:{render:{type:[Function],default:()=>X}},setup(o,n){return()=>o.render(n.attrs)}});function G(o,n){let u=Date.now();const i=u;let e=0;const a=()=>{setTimeout(()=>{const s=Date.now();e=s-u-1e3;const c=Math.round((o*1e3-(s-i))/1e3);u=s,c>=0&&(c>0&&a(),n(c===-0?0:c))},1e3-e)};a()}function H(o,n){const u=Date.now();let i=u,e=o*1e3-Math.floor(o)*1e3;e||(e=1e3);const a=()=>{setTimeout(()=>{const s=Date.now();e=1e3-(s-i-e),i=s;const r=o*1e3-(s-u);r<e&&(e=r),r>=500&&a();const c=Math.round(r/1e3);n(c===0?0:c)},e)};n(o),a()}H(4.3,(o,n)=>{console.log(o,n)});const J={components:{comp:{render(){return p("button",{onClick:this.handleNodeClick},["test event"])},methods:{handleNodeClick(){this.$emit("node-click")}}}},methods:{handleNodeClick(){console.log("node-click-1")}}};function K(o,n,u,i,e,a){const s=x("comp");return N(),I(s,S(o.$attrs,{onNodeClick:a.handleNodeClick}),null,16,["onNodeClick"])}const O=w(J,[["render",K]]),l=o=>(A("data-v-f946256a"),o=o(),P(),o),Q={class:"container"},U=l(()=>t("div",null,"this is test.vue",-1)),W=l(()=>t("br",null,null,-1)),Y=l(()=>t("br",null,null,-1)),Z=l(()=>t("br",null,null,-1)),oo=l(()=>t("br",null,null,-1)),eo=l(()=>t("br",null,null,-1)),to=l(()=>t("br",null,null,-1)),no=l(()=>t("br",null,null,-1)),so=l(()=>t("br",null,null,-1)),lo=l(()=>t("br",null,null,-1)),ao=l(()=>t("br",null,null,-1)),co=l(()=>t("br",null,null,-1)),uo=l(()=>t("div",{class:"inner-box"},null,-1)),ro=[uo],io=g({__name:"test",setup(o){G(3,f=>{console.log(f)});const n=h({a:1,b:2}),u=j(n,"a"),i=E(n),e=F(0),a=h({a:1}),s=m(()=>e.value+1),r=m(()=>a.a+1),c=m(()=>a);console.log(s.value,r.value,c.value.a);const M=h({comp1:s,comp2:r,comp3:c});V(e,(f,B)=>{a.a+=2});function R(){e.value++}function T(){console.log(1)}function $(){console.log(2)}function y(f){return C("div",{style:{color:"red","user-select":"none!important"},onClick:()=>{e.value++}},["asdfasdfsadf",C("span",{style:{"margin-left":"5px"}},e.value)])}function D(){console.log("node-click-2")}return(f,B)=>{const v=x("RouterLink");return N(),L(z,null,[t("div",Q,[U,W,p(v,{to:"/"},{default:k(()=>[d("/index")]),_:1}),Y,Z,p(v,{to:"/xxsdfas"},{default:k(()=>[d("/xxsdfas")]),_:1}),oo,t("button",{onClick:R},"do something"),eo,d(" "+_(u.value)+" ",1),to,d(" "+_(n)+" ",1),no,d(" "+_(b(i))+" ",1),so,d(" "+_(s.value)+" "+_(M.comp1)+" ",1),lo,d(" "+_(r.value)+" ",1),ao,d(" "+_(c.value)+" ",1),co]),p(O,{"on-click":D}),p(b(q),{render:y,aaa:1}),t("div",{class:"test-mouseover",onMouseenter:T,onMouseleave:$},ro,32)],64)}}}),po=w(io,[["__scopeId","data-v-f946256a"]]);export{po as default};
