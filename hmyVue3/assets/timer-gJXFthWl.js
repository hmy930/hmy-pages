import{E as t}from"./index-LLL9jC_b.js";import{j as r,ap as d,c as v,an as _,t as u,a as o,f as a,v as n,o as p}from"./commonMain-18EjtHMn.js";const b={class:"font-50 flex mt-24"},f=o("div",null,":",-1),g=o("div",null,":",-1),S=o("div",{class:"flex",style:{"align-items":"flex-end"}}," . ",-1),E={__name:"timer",setup(h){const c=r("00"),i=r("00"),l=r("00"),s=r("000"),m=setInterval(()=>{const e=new Date;c.value=e.getHours().toString().padStart(2,"0"),i.value=e.getMinutes().toString().padStart(2,"0"),l.value=e.getSeconds().toString().padStart(2,"0"),s.value=e.getMilliseconds().toString().padStart(3,"0")},111);return d(()=>{clearInterval(m)}),(e,x)=>(p(),v("div",null,[_(u(c.value)+":"+u(i.value)+":"+u(l.value)+"."+u(s.value)+" ",1),o("div",b,[a(n(t),{number:c.value},null,8,["number"]),f,a(n(t),{number:i.value},null,8,["number"]),g,a(n(t),{number:l.value},null,8,["number"]),S,a(n(t),{number:s.value},null,8,["number"])]),a(n(t),{class:"mt-24",number:`${l.value}.${s.value}`},null,8,["number"])]))}};export{E as default};