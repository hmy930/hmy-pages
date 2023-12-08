import{_ as i,l as m,o as _,c as u,F as l,n as h,p as f,b as g,a as B,X as v}from"./commonMain-48595d61.js";const M={viewBox:"0 0 110 220"},b=["d"],t=4,e=25,k={__name:"oneNum",props:{value:{type:[Number,String],default:8}},setup($){const p=$,n=`
 M ${t} 0
 L ${110-t} 0
 L ${110-e-t} ${e}
 L ${e+t} ${e}
 `,r=`
 M ${t} 220
 L ${110-t} 220
 L ${110-e-t} ${220-e}
 L ${e+t} ${220-e}
 `,a=`
 M ${.5*e+t} 110
 L ${e+t} ${110-.5*e}
 L ${110-e-t} ${110-.5*e}
 L ${110-.5*e-t} 110
 L ${110-e-t} ${110+.5*e}
 L ${e+t} ${110+.5*e}
 `,s=`
 M 0 ${t}
 L 0 ${110-t-.5*e}
 L ${.5*e} ${110-t}
 L ${e} ${110-t-.5*e}
 L ${e} ${e+t}
`,o=`
 M 110 ${t}
 L 110 ${110-t-.5*e}
 L ${110-.5*e} ${110-t}
 L ${110-e} ${110-t-.5*e}
 L ${110-e} ${e+t}
`,d=`
 M ${.5*e} ${110+t}
 L 0 ${110+t+.5*e}
 L 0 ${220-t}
 L ${e} ${220-t-e}
 L ${e} ${110+t+.5*e}
`,c=`
 M ${110-.5*e} ${110+t}
 L 110 ${110+t+.5*e}
 L 110 ${220-t}
 L ${110-e} ${220-t-e}
 L ${110-e} ${110+t+.5*e}
`,x={0:[n,r,s,d,o,c],1:[o,c],2:[n,a,r,o,d],3:[n,a,r,o,c],4:[a,s,o,c],5:[n,a,r,s,c],6:[n,a,r,s,d,c],7:[n,o,c],8:[n,a,r,s,d,o,c],9:[n,a,r,s,o,c]},y=m(()=>x[p.value]);return(O,V)=>(_(),u("svg",M,[(_(!0),u(l,null,h(y.value,L=>(_(),u("path",{key:L,d:L},null,8,b))),128))]))}},N=i(k,[["__scopeId","data-v-f0c20318"]]);const S={},I=$=>(f("data-v-0883ce33"),$=$(),g(),$),w={viewBox:"0 0 25 220"},E=I(()=>B("rect",{height:"25",width:"25",x:"0",y:220-25,rx:"5",ry:"5"},null,-1)),T=[E];function F($,p){return _(),u("svg",w,T)}const P=i(S,[["render",F],["__scopeId","data-v-0883ce33"]]);const R={class:"electron-number"},A={__name:"index",props:{number:{type:[Number,String],default:0}},setup($){const p=$,n=m(()=>String(p.number).split(""));return(r,a)=>(_(),u("div",R,[(_(!0),u(l,null,h(n.value,(s,o)=>(_(),u(l,{key:`${s}-${o}`},[s==="."?(_(),v(P,{key:0,class:"point"})):(_(),v(N,{key:1,class:"one-num",value:s},null,8,["value"]))],64))),128))]))}},j=i(A,[["__scopeId","data-v-1851d34a"]]);export{j as E};
