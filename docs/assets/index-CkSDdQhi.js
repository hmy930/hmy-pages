import{d as x,j as k,o as r,c as l,a as c,t as g,F as z,at as D,p as y,b as S,an as p,_ as v,au as F,av as L,z as $,e as I,X as T,y as A,n as R,v as W,w as H,f as u,al as V,am as O,aw as q,ax as M}from"./commonMain-DAAUsnTm.js";/* empty css                *//* empty css              */const P=""+new URL("logo-CPmPqqKk.png",import.meta.url).href,m=e=>(y("data-v-e60cc1d8"),e=e(),S(),e),X=m(()=>c("p",null,[p(" Recommended IDE setup: "),c("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),p(" + "),c("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),K=m(()=>c("p",null,[c("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),p(" | "),c("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),U=m(()=>c("p",null,[p(" Edit "),c("code",null,"components/HelloWorld.vue"),p(" to test hot module replacement. ")],-1)),Y=m(()=>c("div",{class:"h-100 w-full flex-none",style:{background:"red"}},null,-1)),J={class:"hello"},Q=D('<p data-v-e60cc1d8> For a guide and recipes on how to configure / customize this project,<br data-v-e60cc1d8> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vue-cli documentation</a>. </p><h3 data-v-e60cc1d8>Installed CLI Plugins</h3><ul data-v-e60cc1d8><li data-v-e60cc1d8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-e60cc1d8>typescript</a></li></ul><h3 data-v-e60cc1d8>Essential Links</h3><ul data-v-e60cc1d8><li data-v-e60cc1d8><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>Core Docs</a></li><li data-v-e60cc1d8><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>Forum</a></li><li data-v-e60cc1d8><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>Community Chat</a></li><li data-v-e60cc1d8><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-e60cc1d8>Twitter</a></li><li data-v-e60cc1d8><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>News</a></li></ul><h3 data-v-e60cc1d8>Ecosystem</h3><ul data-v-e60cc1d8><li data-v-e60cc1d8><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vue-router</a></li><li data-v-e60cc1d8><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vuex</a></li><li data-v-e60cc1d8><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-e60cc1d8>vue-devtools</a></li><li data-v-e60cc1d8><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-e60cc1d8>vue-loader</a></li><li data-v-e60cc1d8><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-e60cc1d8>awesome-vue</a></li></ul>',7),Z=x({__name:"HelloWorld",props:{msg:{type:String,default:""}},setup(e){const o=k(0);return(t,n)=>(r(),l(z,null,[c("h1",null,g(e.msg),1),X,K,c("button",{type:"button",onClick:n[0]||(n[0]=a=>o.value++)},"count is: "+g(o.value),1),U,Y,c("div",J,[c("h1",null,g(e.msg),1),Q])],64))}}),ee=v(Z,[["__scopeId","data-v-e60cc1d8"]]),te={},oe={alt:"Vue logo",src:P,class:"img"};function ce(e,o){return r(),l("img",oe)}const ae=v(te,[["render",ce],["__scopeId","data-v-adebcf9c"]]),ne={__name:"definePropsTest",props:{a:String},setup(e){const o=e;return console.log(o.a),console.log(F(o,"a")),console.log(L(o)),(t,n)=>(r(),l("div"))}},se={name:"circleLine",props:{config:{type:Object,default:()=>({boxSize:"250px",boxBgc:"#041d49",lineWidth:"2px",pointSize:"6px",pointBgc:"#19c7db",linearGradientStart:"rgba(25, 199, 219, 0)",linearGradientEnd:"rgba(25, 199, 219, 1)"})}},computed:{circleStyle(){const e=this.$options.props.config.default(),o=this.config.linearGradientStart??e.linearGradientStart,t=this.config.linearGradientEnd??e.linearGradientEnd;return{"--box-size":this.config.boxSize??e.boxSize,"--box-bgc":this.config.boxBgc??e.boxBgc,"--line-w":this.config.lineWidth??e.lineWidth,"--point-size":this.config.pointSize??e.pointSize,"--point-bgc":this.config.pointBgc??e.pointBgc,"--linear-gradient":`linear-gradient(to right, ${o} 20%, ${t} 80%)`}}}},B=e=>(y("data-v-d08b64c6"),e=e(),S(),e),ie=B(()=>c("div",{class:"left"},[c("div",{class:"circle-bg"})],-1)),re=B(()=>c("div",{class:"right"},[c("div",{class:"circle-bg"})],-1)),le=[ie,re];function de(e,o,t,n,a,s){return r(),l("div",{class:"circle",style:$({...s.circleStyle})},le,4)}const ue=v(se,[["render",de],["__scopeId","data-v-d08b64c6"]]),pe={name:"autoCalcPosition",components:{CircleLine:ue},props:{showCircle:{type:Boolean,default:!0},circleGap:{type:Number,default:25},circlePosition:{type:Object,default:null}},data(){return{circlePosi:{top:0,left:0},circleSize:0}},mounted(){this.chart=this.$echarts.init(this.$refs.chart);const e={series:[{name:"Access From",type:"pie",radius:[0,"50%"],center:["40%","40%"],data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"}]}]};this.chart.setOption(e),this.setCirclePosition()},methods:{formatToPx(e){return typeof e=="number"?`${e}px`:e},setCirclePosition(){if(this.circlePosition)return;const e=this.getPieInfo(this.chart);if(!e){this.circleSize=0;return}const o=this.circleGap;this.circlePosi.left=e.left-o,this.circlePosi.top=e.top-o,this.circleSize=e.radius*2+o*2},getPieInfo(e){const t=e.getOption().series.find(i=>i.type==="pie");if(!t)return null;const n=(i,G)=>typeof i=="number"?i:i.includes("%")?G*parseFloat(i)*.01:+i||0,a=e.getHeight(),s=e.getWidth(),d=Array.isArray(t.radius)?[...t.radius]:[t.radius],b=Math.max(...d.map(i=>n(i,Math.min(a,s)/2))),w=n(t.center[0],s),C=n(t.center[1],a),E=(i=>i*((s-w)/s))(n(t.left,s)),N=(i=>i*((a-C)/a))(n(t.top,a));return{left:w+E-b,top:C+N-b,radius:b}}}},he={class:"container-1"},_e={ref:"chart",class:"chart",style:{height:"500px"}};function ge(e,o,t,n,a,s){const d=I("CircleLine");return r(),l("div",he,[c("div",_e,null,512),t.showCircle&&(a.circleSize>0||t.circlePosition)?(r(),T(d,{key:0,class:"circle-line",style:$({...t.circlePosition?{top:s.formatToPx(t.circlePosition.top),left:s.formatToPx(t.circlePosition.left)}:{top:a.circlePosi.top+"px",left:a.circlePosi.left+"px"}}),config:{boxSize:t.circlePosition?t.circlePosition.size+"px":a.circleSize+"px"}},null,8,["style","config"])):A("",!0)])}const ve=v(pe,[["render",ge],["__scopeId","data-v-b318533e"]]),fe=e=>!isNaN(parseFloat(e))&&isFinite(e);let _,f;const j=[0,0,1,1],me=(e,o)=>{_||(_=document.createElement("canvas"),_.height=1,_.width=1,f=_.getContext("2d")),f.fillStyle=e,f.fillRect(...j);const[t,n,a,s]=f.getImageData(...j).data,d=fe(o)?o:(s/255).toFixed(2);return`rgba(${t}, ${n}, ${a}, ${+(d??1)})`},be={class:"p-20"},xe=x({__name:"hexToRgba",setup(e){const o=[["#abcdefdd"],["#abcdef"],["#555555dd"],["#5426"]].map(([t,n])=>me(t,n));return(t,n)=>(r(),l("div",be,[(r(!0),l(z,null,R(W(o),a=>(r(),l("div",{class:"h-20 w-200 mr-10 inline-block",style:$({backgroundColor:a})},g(a),5))),256))]))}}),ke={class:"mt-10"},ye=x({__name:"testWatch",setup(e){const o=k(0);let t=o.value;const n=()=>{o.value+=1,console.log("handleAdd end",t)};return H(o,a=>{t=a,console.log("watch",a)}),(a,s)=>{const d=O;return r(),l("div",null,[u(d,{onClick:n},{default:V(()=>[p("add one")]),_:1}),c("div",ke,g(o.value),1)])}}}),h=e=>(y("data-v-7ef846c4"),e=e(),S(),e),Se={class:"container"},$e=h(()=>c("div",{class:"gap-line"},null,-1)),Pe={class:"mb-20",style:{"background-color":"#041d49"}},we=h(()=>c("div",{class:"gap-line"},null,-1)),Ce=h(()=>c("div",{class:"arrow",style:{"font-size":"16px"}},null,-1)),je=h(()=>c("div",{class:"gap-line"},null,-1)),ze=h(()=>c("img",{alt:"Vue logo",src:P,class:"animate__animated animate__flash",style:{"--animate-duration":"3000ms"}},null,-1)),Ie={alt:"Vue logo",src:P},Ve=h(()=>c("div",{class:"gap-line"},null,-1)),Be=h(()=>c("div",{class:"gap-line"},null,-1)),Ee={__name:"index",props:{newsletterPopup:{type:String,default:""}},setup(e){const o=k(!0);return console.log(e.newsletterPopup),(n,a)=>{const s=I("router-link"),d=M("flash");return r(),l("div",Se,[u(xe),$e,c("div",Pe,[u(ve)]),we,Ce,je,ze,q(c("img",Ie,null,512),[[d,o.value]]),u(ee,{msg:"Hello Vue 3 + Vite"}),u(s,{to:"/test"},{default:V(()=>[p("/test")]),_:1}),u(ae),u(ne,{a:1212}),Ve,u(ye),Be])}}},Fe=v(Ee,[["__scopeId","data-v-7ef846c4"]]);export{Fe as default};