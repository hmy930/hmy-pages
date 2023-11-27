import{_ as t,a0 as e,c as n,o as s}from"./commonMain-03e7a9fe.js";const r=`
M 0,2 L 0,4
 L 30,4
 L 30,2
 M 18,2.999
 A 3 3 0 1 0 18 3.001
z`,o={name:"Charts-pie",data(){return{}},mounted(){this.chart=null,this.init(),this.draw()},methods:{init(){this.chart=e(this.$refs.radar)},draw(){const a={title:{text:"Basic Radar Chart"},legend:{data:["Allocated Budget","Actual Spending"],icon:`path://${r}`,itemHeight:6},radar:{indicator:[{name:"Sales",max:6500},{name:"Administration",max:16e3},{name:"Information Technology",max:3e4},{name:"Customer Support",max:38e3},{name:"Development",max:52e3},{name:"Marketing",max:25e3}]},series:[{name:"Budget vs spending",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4,18e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,26e3,42e3,21e3],name:"Actual Spending"}]}]};this.chart.setOption(a),console.log(a)}}},i={ref:"radar",class:"canvas"};function d(a,c,m,l,p,_){return s(),n("div",i,null,512)}const u=t(o,[["render",d],["__scopeId","data-v-8367c449"]]);export{u as default};
