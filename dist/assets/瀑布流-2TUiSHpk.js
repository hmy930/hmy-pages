import{n as N}from"./index.browser-zSPcFHrV.js";import{d as F,j as i,W as H,w as S,c as l,a as c,F as _,n as y,z as v,aF as B,o as h,t as x,an as C,_ as L}from"./commonMain-18EjtHMn.js";const R={class:"container"},T={class:"height-tips"},V=F({__name:"瀑布流",setup(z){const r=i([]),u=i(100),g=i(0),p=i([]);H(async()=>{r.value=m()}),S(r,async()=>{await B();const{heightArr:a,heightTotal:t}=w(),e=Math.ceil(t/3),n=Array(3).fill("").map(()=>({hArr:[],sum:0}));n.forEach((o,b)=>{const M=n.length===b+1;let d;do{const f=a.shift();o.hArr.push(f),o.sum+=f,d=a[0]}while(a.length&&(o.sum+d/2<=e||M))}),u.value=Math.max.apply(Math,n.map(o=>o.sum)),g.value=e,p.value=n.map(o=>o.sum)});function m(){return Array(20).fill("").map((s,a)=>({height:null,key:N(),text:"啊啊啊啊啊啊啊啊".repeat(Math.ceil(Math.random()*30+10))}))}function w(){let s=0;return{heightArr:r.value.map(t=>{const e=t.dom,n=window.getComputedStyle(e,null);return t.h=e.getBoundingClientRect().height,t.mt=parseFloat(n.getPropertyValue("margin-top")),t.mb=parseFloat(n.getPropertyValue("margin-bottom")),t.height=t.h+t.mt+t.mb,s+=t.height,t.height},0),heightTotal:s}}function A(s,a){s.dom=a}function k(){r.value=m()}return(s,a)=>(h(),l("div",R,[c("button",{class:"reset-btn",onClick:k},"reset"),c("div",{class:"masonry-layouts",style:v({height:u.value+"px","--aveHeight":g.value+"px"})},[(h(!0),l(_,null,y(p.value,(t,e)=>(h(),l("div",{class:"sum-line",style:v({height:t+"px",left:`calc(${30*(e+1)}% - 50px)`})},null,4))),256)),(h(!0),l(_,null,y(r.value,t=>(h(),l("div",{key:t.key,ref_for:!0,ref:e=>A(t,e),class:"masonry-item"},[c("div",T,x(JSON.stringify({h:t.h,height:t.height},null,2)),1),C(" "+x(t.text),1)]))),128))],4)]))}}),P=L(V,[["__scopeId","data-v-a7f97f54"]]);export{P as default};
