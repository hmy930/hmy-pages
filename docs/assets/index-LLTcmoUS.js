var H=Object.defineProperty;var J=(r,e,a)=>e in r?H(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var b=(r,e,a)=>(J(r,typeof e!="symbol"?e+"":e,a),a);/* empty css                *//* empty css              *//* empty css              */import{n as Q}from"./index.browser-vcSNLBTf.js";import{f as _,ao as Z,d as ee,j as m,l as te,aj as ne,W as ae,ap as le,c as C,a as y,F as oe,n as se,z as S,y as M,t as re,an as k,v as T,X as D,al as U,aq as ie,am as ce,o as h,ar as ue,_ as de}from"./commonMain-CWFol1v3.js";var ve={icon:function(e,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z",fill:a}},{tag:"path",attrs:{d:"M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",fill:e}}]}},name:"close-circle",theme:"twotone"};const fe=ve;function V(r){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(v){return Object.getOwnPropertyDescriptor(a,v).enumerable}))),i.forEach(function(v){pe(r,v,a[v])})}return r}function pe(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}var j=function(e,a){var i=V({},e,a.attrs);return _(Z,V({},i,{icon:fe}),null)};j.displayName="CloseCircleTwoTone";j.inheritAttrs=!1;const xe=j,me={class:"game-tools mt-20 flex justify-content-between"},ye=ee({__name:"index",setup(r){const e=m(800),a=m(30),i=te(()=>e.value/a.value),v=q(a.value-1,a.value-1);class B{constructor(n,t){b(this,"key");b(this,"xIndex");b(this,"yIndex");this.key=Q(),this.xIndex=n,this.yIndex=t}get indexKey(){return[this.xIndex,this.yIndex].join(",")}}const z=(o,n)=>new B(o,n),u=ne([]),p=m(),A=()=>{const o=new Set(v);u.forEach(({xIndex:l,yIndex:x})=>{o.delete([l,x].toString())});const n=Math.floor(Math.random()*o.size),[t,s]=[...o][n].split(",").map(Number);p.value=new B(t,s)};function q(o,n){const t=new Set;for(let s=0;s<=o;s++)for(let l=0;l<n;l++)t.add([s,l].toString());return t}const g=m("right"),d=m(g.value),X=()=>{var x;const o=u[0],{xIndex:n,yIndex:t}=o;let s,l;if(d.value==="up"?(s=n,l=t-1):d.value==="right"?(s=n+1,l=t):d.value==="down"?(s=n,l=t+1):d.value==="left"?(s=n-1,l=t):(s=n,l=t),s!==void 0&&l!==void 0){const O=z(s,l);if(R(O)){I();return}const L=u.map(f=>({...f}));if(u.forEach((f,G)=>{const K=L[G-1]||O;f.xIndex=K.xIndex,f.yIndex=K.yIndex}),O.indexKey===((x=p.value)==null?void 0:x.indexKey)){const f=L[L.length-1];u.push(z(f.xIndex,f.yIndex)),A(),Y()}g.value=d.value}},R=o=>{const n=t=>{ue.confirm({title:"游戏结束！",icon:_(xe),content:_("div",{style:"color: red;"},t),closable:!1,centered:!0,cancelButtonProps:{style:"display: none;"},onOk(){P()}})};return u.find(t=>t.indexKey===o.indexKey)?(I(),n("撞墙也就得了，你还撞自己？！"),!0):v.has(o.indexKey)?!1:(n("乖乖，你又想不开啦？！"),!0)},W=(o,n)=>{const t={up:4,right:5,down:6,left:7},s=t[o],x=t[n]-s;return Math.abs(x)!==2},N=o=>{const n=o.code;if(n==="Space"){c===1?I():F();return}let t;n==="ArrowUp"?t="up":n==="ArrowDown"?t="down":n==="ArrowLeft"?t="left":n==="ArrowRight"&&(t="right"),t!==void 0&&W(g.value,t)?d.value=t:d.value=g.value};let E;const w=m(1);let c=2;const F=()=>{P(),c=1,A(),$()},I=()=>{c=2,clearTimeout(E)},Y=()=>{c!==2&&w.value<100&&(w.value+=5)},P=()=>{w.value=1,u.splice(0),u.push(z(0,0)),c=2,p.value=null,g.value="right",d.value="right"},$=()=>{const o=1e3/Math.sqrt(w.value+50);E=setTimeout(()=>{c!==2&&(X(),$())},o)};return ae(()=>{window.addEventListener("keydown",N,!1)}),le(()=>{window.removeEventListener("keydown",N,!1),I()}),(o,n)=>{const t=ie,s=ce;return h(),C("div",{class:"container",style:S({"--box-size":e.value})},[y("div",{class:"game-box",style:S({height:e.value+"px",width:e.value+"px"})},[(h(!0),C(oe,null,se(u,l=>(h(),C("div",{key:l.key,class:"snake-item",style:S({height:i.value+"px",width:i.value+"px",transform:`translate3d(${l.xIndex*i.value}px, ${l.yIndex*i.value}px, 0)`})},null,4))),128)),p.value?(h(),C("div",{key:0,class:"food",style:S({height:i.value+"px",width:i.value+"px",transform:`translate3d(${p.value.xIndex*i.value}px, ${p.value.yIndex*i.value}px, 0)`})},null,4)):M("",!0)],4),y("div",me,[y("span",null," speed: "+re(w.value),1),y("span",null,[k(" 盒子大小： "),_(t,{value:e.value,"onUpdate:value":n[0]||(n[0]=l=>e.value=l),min:100,max:1200},null,8,["value"])]),y("span",null,[k(" 一行几个： "),_(t,{value:a.value,"onUpdate:value":n[1]||(n[1]=l=>a.value=l),min:e.value/(e.value/4),max:e.value/2},null,8,["value","min","max"])]),y("span",null,[T(c)===2?(h(),D(s,{key:0,type:"primary",disabled:T(c)===1,onClick:F},{default:U(()=>[k("开始（whitespace）")]),_:1},8,["disabled"])):M("",!0),T(c)===1?(h(),D(s,{key:1,type:"primary",disabled:T(c)===2,onClick:I},{default:U(()=>[k("结束（space）")]),_:1},8,["disabled"])):M("",!0)])])],4)}}}),Ce=de(ye,[["__scopeId","data-v-c7a10bf7"]]);export{Ce as default};
