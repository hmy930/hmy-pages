var o=Object.defineProperty;var l=(s,e,t)=>e in s?o(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(l(s,typeof e!="symbol"?e+"":e,t),t);import{A as d,as as u,d as f,j as v,W as m,ap as g,c as x,a as _,o as w,_ as y}from"./commonMain-C4uPg2s6.js";var E="Expected a function";function R(s,e,t){var n=!0,a=!0;if(typeof s!="function")throw new TypeError(E);return d(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),u(s,e,{leading:n,maxWait:e,trailing:a})}const r={x:0,y:0};let c=!1;const p=()=>{c||(c=!0,window.addEventListener("mousemove",s=>{r.x=s.clientX,r.y=s.clientY},!1))};class A{constructor(e){i(this,"x",0);i(this,"y",0);i(this,"radius",0);i(this,"angle",0);i(this,"color","");i(this,"ctx");this.ctx=e,this.radius=60*Math.random(),this.angle=Math.PI*2*Math.random(),this.color=`hsl(${Math.random()*360}, 50%, 50%)`}draw(e){const t=this.ctx;t.beginPath(),t.strokeStyle=this.color,t.moveTo(this.x,this.y),this.angle+=.05,this.x=r.x+Math.cos(this.angle)*this.radius-e.left,this.y=r.y+Math.sin(this.angle)*this.radius-e.top,t.lineTo(this.x,this.y),t.lineWidth=3,t.stroke(),t.closePath()}}class h{constructor(e,t=20){i(this,"canvas");i(this,"ctx");i(this,"itemList",[]);i(this,"isRunning",!1);if(p(),this.canvas=e,this.canvas)this.resize(),window.addEventListener("resize",R(this.resize,100,{trailing:!0}),!1),this.ctx=this.canvas.getContext("2d"),this.createAllItem(t),this.isRunning=!0,this.runAnimate();else throw new Error("canvas is undefined")}resize(){const{height:e,width:t}=this.canvas.getBoundingClientRect();this.canvas.setAttribute("height",`${e}`),this.canvas.setAttribute("width",`${t}`)}createAllItem(e){this.itemList=[];for(let t=0;t<e;t++)this.itemList.push(new A(this.ctx))}runAnimate(){if(!this.isRunning)return;requestAnimationFrame(()=>{this.runAnimate()}),this.ctx.fillStyle="rgba(0, 0, 0, 0.05)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const e=this.canvas.getBoundingClientRect();this.itemList.forEach(t=>{t.draw(e)})}destroy(){this.isRunning=!1,this.canvas&&(this.canvas.remove(),this.ctx=this.canvas=null)}}i(h,"hasBindEvent",!1);const M=h,b={class:"container"},B=f({__name:"鼠标动画",setup(s){const e=v();let t;return m(()=>{t=new M(e.value)}),g(()=>{t.destroy()}),(n,a)=>(w(),x("div",b,[_("canvas",{ref_key:"canvasRef",ref:e},null,512)]))}}),C=y(B,[["__scopeId","data-v-aa87a207"]]);export{C as default};
