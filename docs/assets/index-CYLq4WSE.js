import{_ as l,l as h,o as $,c as u,F as d,n as v,p as B,b as M,a as g,X as m}from"./commonMain-C3ICm15a.js";const y={viewBox:"0 0 110 220"},b=["d"],e=4,t=25,k={__name:"oneNum",props:{value:{type:[Number,String],default:8}},setup(r){const p=r,s=`
 M ${e} 0
 L ${110-e} 0
 L ${110-t-e} ${t}
 L ${t+e} ${t}
 `,a=`
 M ${e} 220
 L ${110-e} 220
 L ${110-t-e} ${220-t}
 L ${t+e} ${220-t}
 `,_=`
 M ${.5*t+e} 110
 L ${t+e} ${110-.5*t}
 L ${110-t-e} ${110-.5*t}
 L ${110-.5*t-e} 110
 L ${110-t-e} ${110+.5*t}
 L ${t+e} ${110+.5*t}
 `,n=`
 M 0 ${e}
 L 0 ${110-e-.5*t}
 L ${.5*t} ${110-e}
 L ${t} ${110-e-.5*t}
 L ${t} ${t+e}
`,o=`
 M 110 ${e}
 L 110 ${110-e-.5*t}
 L ${110-.5*t} ${110-e}
 L ${110-t} ${110-e-.5*t}
 L ${110-t} ${t+e}
`,L=`
 M ${.5*t} ${110+e}
 L 0 ${110+e+.5*t}
 L 0 ${220-e}
 L ${t} ${220-e-t}
 L ${t} ${110+e+.5*t}
`,c=`
 M ${110-.5*t} ${110+e}
 L 110 ${110+e+.5*t}
 L 110 ${220-e}
 L ${110-t} ${220-e-t}
 L ${110-t} ${110+e+.5*t}
`,f={0:[s,a,n,L,o,c],1:[o,c],2:[s,_,a,o,L],3:[s,_,a,o,c],4:[_,n,o,c],5:[s,_,a,n,c],6:[s,_,a,n,L,c],7:[s,o,c],8:[s,_,a,n,L,o,c],9:[s,_,a,n,o,c]},x=h(()=>f[p.value]);return(O,V)=>($(),u("svg",y,[($(!0),u(d,null,v(x.value,i=>($(),u("path",{key:i,d:i},null,8,b))),128))]))}},S=l(k,[["__scopeId","data-v-f0c20318"]]),I={},N=r=>(B("data-v-0883ce33"),r=r(),M(),r),w={viewBox:"0 0 25 220"},E=N(()=>g("rect",{height:"25",width:"25",x:"0",y:195,rx:"5",ry:"5"},null,-1)),T=[E];function F(r,p){return $(),u("svg",w,T)}const P=l(I,[["render",F],["__scopeId","data-v-0883ce33"]]),R={class:"electron-number"},A={__name:"index",props:{number:{type:[Number,String],default:0}},setup(r){const p=r,s=h(()=>String(p.number).split(""));return(a,_)=>($(),u("div",R,[($(!0),u(d,null,v(s.value,(n,o)=>($(),u(d,{key:`${n}-${o}`},[n==="."?($(),m(P,{key:0,class:"point"})):($(),m(S,{key:1,class:"one-num",value:n},null,8,["value"]))],64))),128))]))}},j=l(A,[["__scopeId","data-v-1851d34a"]]);export{j as E};
