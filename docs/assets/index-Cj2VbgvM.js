/* empty css                *//* empty css              */import{d as h,j as u,aC as y,aE as w,c as k,an as i,f as m,al as p,v as L,a as v,am as R,o as B}from"./commonMain-C4uPg2s6.js";const g=v("div",{class:"gap-line"},null,-1),s="video/webm",j=h({__name:"index",setup(x){const l=u();let o,d;const n=u(!1);let t;const f=async()=>{t=null,c();const e=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});l.value.srcObject=e,d=new MediaRecorder(e,{mimeType:(MediaRecorder.isTypeSupported(s),s)});const a=[];d.addEventListener("dataavailable",r=>{a.push(r.data)}),d.addEventListener("stop",()=>{n.value=!1,t=new Blob(a,{type:a[0].type})}),d.start(),n.value=!0},_=()=>{l.value.play()},b=()=>{var a;if(!t)return;o=URL.createObjectURL(t);const e=document.createElement("a");e.href=o,e.download=`video-${new Date().toLocaleString()}.${((a=s.match(/video\/(\w+)/))==null?void 0:a[1])||"webm"}`,e.click()},c=()=>{o&&URL.revokeObjectURL(o)};return y(()=>{c()}),w(()=>{c()}),(e,a)=>{const r=R;return B(),k("div",null,[i(" MediaRecorder： "),m(r,{disabled:n.value,onClick:f},{default:p(()=>[i("开始录制")]),_:1},8,["disabled"]),m(r,{class:"ml-16",type:"primary",disabled:n.value||!L(t),onClick:b},{default:p(()=>[i("下载")]),_:1},8,["disabled"]),g,v("video",{class:"w-full",style:{background:"#000",height:"700px"},ref_key:"video",ref:l,muted:"",onLoadedmetadata:_},null,544)])}}});export{j as default};
