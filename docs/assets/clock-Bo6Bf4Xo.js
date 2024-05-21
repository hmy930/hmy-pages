import{aj as P,l as m,j as g,aB as T,aC as b,aD as L,o as x,c as h,a as l,F as p,n as $,v as S,t as B,W as D,f as R}from"./commonMain-DAAUsnTm.js";const N=["viewBox"],F=l("defs",null,null,-1),I=["r","cx","cy"],A=["cx","cy"],C=["x1","y1","x2","y2","stroke-width","transform"],E=["x","y"],H=["x","y","height","width","transform"],j=["x","y","height","width","transform"],V=["x","y","height","width","transform"],W={__name:"clock-svg",setup(M){const t=P({radius:170,cx:200,cy:200}),y=`${t.cx} ${t.cy}`,c=m(()=>({x:t.cx-2/2,y:t.cy-t.radius-20,h:20+t.radius+40,w:2})),e=m(()=>({x:t.cx-4/2,y:t.cy-t.radius-10,h:10+t.radius+30,w:4})),r=m(()=>({x:t.cx-6/2,y:t.cy-t.radius- -10,h:-10+t.radius+20,w:6})),i=g(""),u=g(""),a=g(""),_=new T(()=>{const o=new Date().getSeconds()/60*360,s=new Date().getMinutes()/60*360,n=new Date().getHours()/24*360;i.value=`rotate(${+o.toFixed(2)})`,u.value=`rotate(${+s.toFixed(2)})`,a.value=`rotate(${+n.toFixed(2)})`});b(()=>{_.clear()});const w=Array(60).fill(null).map((o,s)=>{const n={rotate:s/60*360,x1:t.cx,y1:t.cy-t.radius-5,x2:t.cx,y2:t.cy-t.radius,w:2};if(s%5===0){n.w=3,n.y1-=3;const{xLen:f,yLen:v}=L(s/60*360,t.radius+20);n.text={value:s,x:t.cx-f,y:t.cy-v}}return n}),d=w.filter(o=>o.text);return(o,s)=>(x(),h("div",null,[(x(),h("svg",{class:"h-400 w-400",viewBox:`0 0 ${t.cx*2} ${t.cy*2}`},[F,l("circle",{r:t.radius,cx:t.cx,cy:t.cy,fill:"none",stroke:"black","stroke-width":"2"},null,8,I),l("circle",{r:3,cx:t.cx,cy:t.cy,fill:"black","stroke-width":"0"},null,8,A),(x(!0),h(p,null,$(S(w),n=>(x(),h("line",{x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2,stroke:"black","stroke-width":n.w,transform:`rotate(${n.rotate})`,"transform-origin":y},null,8,C))),256)),(x(!0),h(p,null,$(S(d),n=>(x(),h("text",{x:n.text.x,y:n.text.y,style:{"text-anchor":"middle","dominant-baseline":"middle","font-size":"14px"}},B(n.text.value),9,E))),256)),l("rect",{x:c.value.x,y:c.value.y,height:c.value.h,width:c.value.w,fill:"black",transform:`${i.value}`,"transform-origin":y},null,8,H),l("rect",{x:e.value.x,y:e.value.y,height:e.value.h,width:e.value.w,fill:"black",transform:`${u.value}`,"transform-origin":y},null,8,j),l("rect",{x:r.value.x,y:r.value.y,height:r.value.h,width:r.value.w,fill:"black",transform:`${a.value}`,"transform-origin":y},null,8,V)],8,N))]))}},z={class:"flex"},O={class:"flex-1"},U=l("div",{class:"w-24"},null,-1),X={class:"flex-1"},q={__name:"clock",setup(M){const t=g(null),y=async()=>{if(!t.value)return;const c=t.value;c.height=c.clientHeight,c.width=c.clientWidth;const e=c.getContext("2d"),r=c.height/2,i=r,u=r,a=r-30;e.beginPath(),e.strokeStyle="#000000",e.arc(i,u,a,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(i,u,3,0,Math.PI*2),e.stroke(),e.fillStyle="#000000",e.fill();const _=(d,o)=>L(d,o,!0);Array(60).fill(null).forEach((d,o)=>{const s=Math.PI*2*o/60,{xLen:n,yLen:f}=_(s,a);if(e.beginPath(),e.arc(i-n,u-f,2,0,Math.PI*2),e.fillStyle="#000000",e.strokeStyle="#000000",o%5===0&&(e.fillStyle="blue",e.strokeStyle="blue",e.setTransform(4,0,0,4,0,0)),e.fill(),e.stroke(),e.setTransform(1,0,0,1,0,0),o%5===0){const{xLen:v,yLen:k}=_(s,a+20);e.fillStyle="#000000",e.textAlign="center",e.textBaseline="middle",e.font="14px sans-serif",e.fillText(`${o}`,i-v,u-k)}});const w=[{clockScale:new Date().getSeconds(),scaleNum:60,x:-1,y:-(a+20),w:2,len:a+60},{clockScale:new Date().getMinutes(),scaleNum:60,x:-2,y:-(a+10),w:4,len:a+40},{clockScale:new Date().getHours(),scaleNum:24,x:-3,y:-(a-10),w:6,len:a+10}];for(const{clockScale:d,scaleNum:o,x:s,y:n,w:f,len:v}of w){e.save(),e.translate(i,u);const k=d?d/o*2*Math.PI:0;e.fillStyle="#000000",e.rotate(k),e.fillRect(s,n,f,v),e.restore()}};return D(()=>{const c=new T(()=>{y(),console.log(111)});b(()=>{c.clear()})}),(c,e)=>(x(),h("div",z,[l("div",O,[l("canvas",{ref_key:"canvasRef",ref:t,class:"h-400 w-400"},null,512)]),U,l("div",X,[R(W)])]))}};export{q as default};
