/* empty css                *//* empty css              */import{_ as p,c as d,f as l,al as r,a as m,am as u,o as _,an as h}from"./commonMain-DAAUsnTm.js";const w="vmQWnF6TH0Ao1IsKyO1WCyYwYX7gZGam";let o;const n="onBMapCallback",M=`http://api.map.baidu.com/api?v=3.0&ak=${w}&s=1&callback=${n}`,f={init(){return new Promise((e,t)=>{if(o)e(o);else{let a=document.createElement("script");a.type="text/javascript",a.src=M,document.body.appendChild(a),window[n]=()=>{delete window[n],o=window.BMap,a=null,e(o)}}})}};let c=null;const B={name:"baidu-map",mounted(){},methods:{handleLoad(){this.loadMap()},loadMap(){f.init().then(e=>{c=e;const t=new c.Map(this.$refs.map,{enableMapClick:!1,minZoom:1,maxZoom:20}),a=new window.BMap.Point(113.264385,23.12911);t.centerAndZoom(a,6),t.enableContinuousZoom(),t.enableScrollWheelZoom()})}}},b={class:"page-container"},C={ref:"map",class:"map"};function k(e,t,a,$,x,s){const i=u;return _(),d("div",b,[l(i,{type:"primary",onClick:s.handleLoad},{default:r(()=>[h("加载")]),_:1},8,["onClick"]),m("div",C,null,512)])}const v=p(B,[["render",k],["__scopeId","data-v-16acd482"]]);export{v as default};
