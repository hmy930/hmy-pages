import{d as x,j as y,o as r,c as l,a as c,t as v,F as z,at as L,p as k,b as S,an as _,_ as g,au as T,av as A,z as $,e as I,X as D,y as F,n as W,v as R,w as H,f as u,al as V,am as O,aw as M,ax as X}from"./commonMain-48595d61.js";/* empty css                *//* empty css              */const w=""+new URL("logo-03d6d6da.png",import.meta.url).href,m=e=>(k("data-v-e60cc1d8"),e=e(),S(),e),U=m(()=>c("p",null,[_(" Recommended IDE setup: "),c("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),_(" + "),c("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),Y=m(()=>c("p",null,[c("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),_(" | "),c("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),q=m(()=>c("p",null,[_(" Edit "),c("code",null,"components/HelloWorld.vue"),_(" to test hot module replacement. ")],-1)),J=m(()=>c("div",{class:"h-100 w-full flex-none",style:{background:"red"}},null,-1)),K={class:"hello"},Q=L('<p data-v-e60cc1d8> For a guide and recipes on how to configure / customize this project,<br data-v-e60cc1d8> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vue-cli documentation</a>. </p><h3 data-v-e60cc1d8>Installed CLI Plugins</h3><ul data-v-e60cc1d8><li data-v-e60cc1d8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-e60cc1d8>typescript</a></li></ul><h3 data-v-e60cc1d8>Essential Links</h3><ul data-v-e60cc1d8><li data-v-e60cc1d8><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>Core Docs</a></li><li data-v-e60cc1d8><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>Forum</a></li><li data-v-e60cc1d8><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>Community Chat</a></li><li data-v-e60cc1d8><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-e60cc1d8>Twitter</a></li><li data-v-e60cc1d8><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>News</a></li></ul><h3 data-v-e60cc1d8>Ecosystem</h3><ul data-v-e60cc1d8><li data-v-e60cc1d8><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vue-router</a></li><li data-v-e60cc1d8><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vuex</a></li><li data-v-e60cc1d8><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-e60cc1d8>vue-devtools</a></li><li data-v-e60cc1d8><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vue-loader</a></li><li data-v-e60cc1d8><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-e60cc1d8>awesome-vue</a></li></ul>',7),Z=x({__name:"HelloWorld",props:{msg:{type:String,default:""}},setup(e){const o=y(0);return(t,a)=>(r(),l(z,null,[c("h1",null,v(e.msg),1),U,Y,c("button",{type:"button",onClick:a[0]||(a[0]=n=>o.value++)},"count is: "+v(o.value),1),q,J,c("div",K,[c("h1",null,v(e.msg),1),Q])],64))}});const ee=g(Z,[["__scopeId","data-v-e60cc1d8"]]);const te={},oe={alt:"Vue logo",src:w,class:"img"};function ce(e,o){return r(),l("img",oe)}const ne=g(te,[["render",ce],["__scopeId","data-v-adebcf9c"]]),ae={__name:"definePropsTest",props:{a:String},setup(e){const o=e;return console.log(o.a),console.log(T(o,"a")),console.log(A(o)),(t,a)=>(r(),l("div"))}};const se={name:"circleLine",props:{config:{type:Object,default:()=>({boxSize:"250px",boxBgc:"#041d49",lineWidth:"2px",pointSize:"6px",pointBgc:"#19c7db",linearGradientStart:"rgba(25, 199, 219, 0)",linearGradientEnd:"rgba(25, 199, 219, 1)"})}},computed:{circleStyle(){const e=this.$options.props.config.default(),o=this.config.linearGradientStart??e.linearGradientStart,t=this.config.linearGradientEnd??e.linearGradientEnd;return{"--box-size":this.config.boxSize??e.boxSize,"--box-bgc":this.config.boxBgc??e.boxBgc,"--line-w":this.config.lineWidth??e.lineWidth,"--point-size":this.config.pointSize??e.pointSize,"--point-bgc":this.config.pointBgc??e.pointBgc,"--linear-gradient":`linear-gradient(to right, ${o} 20%, ${t} 80%)`}}}},B=e=>(k("data-v-d08b64c6"),e=e(),S(),e),ie=B(()=>c("div",{class:"left"},[c("div",{class:"circle-bg"})],-1)),re=B(()=>c("div",{class:"right"},[c("div",{class:"circle-bg"})],-1)),le=[ie,re];function de(e,o,t,a,n,s){return r(),l("div",{class:"circle",style:$({...s.circleStyle})},le,4)}const ue=g(se,[["render",de],["__scopeId","data-v-d08b64c6"]]);const _e={name:"autoCalcPosition",components:{CircleLine:ue},props:{showCircle:{type:Boolean,default:!0},circleGap:{type:Number,default:25},circlePosition:{type:Object,default:null}},data(){return{circlePosi:{top:0,left:0},circleSize:0}},mounted(){this.chart=this.$echarts.init(this.$refs.chart);const e={series:[{name:"Access From",type:"pie",radius:[0,"50%"],center:["40%","40%"],data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"}]}]};this.chart.setOption(e),this.setCirclePosition()},methods:{formatToPx(e){return typeof e=="number"?`${e}px`:e},setCirclePosition(){if(this.circlePosition)return;const e=this.getPieInfo(this.chart);if(!e){this.circleSize=0;return}const o=this.circleGap;this.circlePosi.left=e.left-o,this.circlePosi.top=e.top-o,this.circleSize=e.radius*2+o*2},getPieInfo(e){const t=e.getOption().series.find(i=>i.type==="pie");if(!t)return null;const a=(i,G)=>typeof i=="number"?i:i.includes("%")?G*parseFloat(i)*.01:+i||0,n=e.getHeight(),s=e.getWidth(),d=Array.isArray(t.radius)?[...t.radius]:[t.radius],b=Math.max(...d.map(i=>a(i,Math.min(n,s)/2))),P=a(t.center[0],s),C=a(t.center[1],n),E=(i=>i*((s-P)/s))(a(t.left,s)),N=(i=>i*((n-C)/n))(a(t.top,n));return{left:P+E-b,top:C+N-b,radius:b}}}},pe={class:"container-1"},he={ref:"chart",class:"chart",style:{height:"500px"}};function ve(e,o,t,a,n,s){const d=I("CircleLine");return r(),l("div",pe,[c("div",he,null,512),t.showCircle&&(n.circleSize>0||t.circlePosition)?(r(),D(d,{key:0,class:"circle-line",style:$({...t.circlePosition?{top:s.formatToPx(t.circlePosition.top),left:s.formatToPx(t.circlePosition.left)}:{top:n.circlePosi.top+"px",left:n.circlePosi.left+"px"}}),config:{boxSize:t.circlePosition?t.circlePosition.size+"px":n.circleSize+"px"}},null,8,["style","config"])):F("",!0)])}const ge=g(_e,[["render",ve],["__scopeId","data-v-b318533e"]]),fe=e=>!isNaN(parseFloat(e))&&isFinite(e);let h,f;const j=[0,0,1,1],me=(e,o)=>{h||(h=document.createElement("canvas"),h.height=1,h.width=1,f=h.getContext("2d")),f.fillStyle=e,f.fillRect(...j);const[t,a,n,s]=f.getImageData(...j).data,d=fe(o)?o:(s/255).toFixed(2);return`rgba(${t}, ${a}, ${n}, ${+(d??1)})`},be={class:"p-20"},xe=x({__name:"hexToRgba",setup(e){const o=[["#abcdefdd"],["#abcdef"],["#555555dd"],["#5426"]].map(([t,a])=>me(t,a));return(t,a)=>(r(),l("div",be,[(r(!0),l(z,null,W(R(o),n=>(r(),l("div",{class:"h-20 w-200 mr-10 inline-block",style:$({backgroundColor:n})},v(n),5))),256))]))}}),ye={class:"mt-10"},ke=x({__name:"testWatch",setup(e){const o=y(0);let t=o.value;const a=()=>{o.value+=1,console.log("handleAdd end",t)};return H(o,n=>{t=n,console.log("watch",n)}),(n,s)=>{const d=O;return r(),l("div",null,[u(d,{onClick:a},{default:V(()=>[_("add one")]),_:1}),c("div",ye,v(o.value),1)])}}});const p=e=>(k("data-v-7ef846c4"),e=e(),S(),e),Se={class:"container"},$e=p(()=>c("div",{class:"gap-line"},null,-1)),we={class:"mb-20",style:{"background-color":"#041d49"}},Pe=p(()=>c("div",{class:"gap-line"},null,-1)),Ce=p(()=>c("div",{class:"arrow",style:{"font-size":"16px"}},null,-1)),je=p(()=>c("div",{class:"gap-line"},null,-1)),ze=p(()=>c("img",{alt:"Vue logo",src:w,class:"animate__animated animate__flash",style:{"--animate-duration":"3000ms"}},null,-1)),Ie={alt:"Vue logo",src:w},Ve=p(()=>c("div",{class:"gap-line"},null,-1)),Be=p(()=>c("div",{class:"gap-line"},null,-1)),Ee={__name:"index",props:{newsletterPopup:{type:String,default:""}},setup(e){const o=y(!0);return console.log(e.newsletterPopup),(a,n)=>{const s=I("router-link"),d=M("flash");return r(),l("div",Se,[u(xe),$e,c("div",we,[u(ge)]),Pe,Ce,je,ze,X(c("img",Ie,null,512),[[d,o.value]]),u(ee,{msg:"Hello Vue 3 + Vite"}),u(s,{to:"/test"},{default:V(()=>[_("/test")]),_:1}),u(ne),u(ae,{a:1212}),Ve,u(ke),Be])}}},Te=g(Ee,[["__scopeId","data-v-7ef846c4"]]);export{Te as default};
