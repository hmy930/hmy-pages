/* empty css                *//* empty css              */import{aJ as B,_ as I,j as P,W as C,c as S,a as b,an as N,f,al as V,F as T,aK as U,am as M,ar as R,o as $,t as D,y as A,aL as F,aM as K,aN as G}from"./commonMain-P_Pf5vDy.js";const W={appeal:{id:"1788398485289013250",title:"坡头区海盛路华",eventOverview:"坡头区",eventVO:{id:"2584",eventName:"物业管理",eventOverview:"坡头",allocateSug:"请贵"},deptVo:{deptId:"deptVo1011",deptName:"deptVo坡头区住"},gridTimeLimit:"",thirdPartyEventId:"214577304",thirdPartyEventName:"坡头区人民",delayNums:0},log:[{DistributionVO:{id:"1788405840513",deptName:"DistributionVO-deptName1",distributorName:"che",nickName:"陈",distributionObjVO:{deptId:"1011",deptName:"坡头区住"}}},{DistributionVO:{id:"17884047",deptName:"DistributionVO-deptName2",distributorName:"che",nickName:"陈",distributionObjVO:{deptId:"1012",deptName:"坡头区住33"}}}],simpleLog:[{DistributionVO:{content:"请阅处",test:[{name:"张三",ids:[{id:"5"},{id:"1"},{id:"2"}]}],mm:[{id:"99"},{id:"00"}]}},{DistributionVO:{content:"受理",test:[{name:"李四",ids:[{id:"6"},{id:"3"},{id:"4"}]}],mm:[{id:"88"},{id:"11"}]}}]};function q(d,a){const e=[],o=[];a=a.filter(Boolean);let n=Array.isArray(d)?d:[d];return n=n.filter(Boolean),n.forEach(v=>{const _=z(v,[...a]);e.push(..._.MAP_LIST),o.push(..._.VALUE_LIST)}),{mapList:e,valueList:o}}function z(d,a){const e=[],o=[],n={};a.forEach(t=>{v({prePath:"",lastSuffixPath:t,preInfo:d,ruleObj:n,fullPath:t})});function v({prePath:t,lastSuffixPath:i,preInfo:r,ruleObj:s,fullPath:p}){if(!E(r)){s[p]=r;return}let{arrProp:c,suffixPath:m}=H(i);const l=t+c;if(c){s[l]||(s[l]=[]);const u=s[l];let O=B(r,w(c),[]);m||(O=O.map(h=>E(h)?JSON.stringify(h):h)),O.forEach((h,y)=>{u[y]||(u[y]={}),v({prePath:l,lastSuffixPath:m,preInfo:h,ruleObj:u[y],fullPath:p})})}else if(m){let u=B(r,w(m),"");s[p]=E(u)?JSON.stringify(u):u}}const _=x();function x(){const t=i([n],[]);function i(r,s,p=null){if(!Array.isArray(r))return[];const c=s.shift()||[],m=[];return r.forEach(l=>{const u=p?{...p}:{},O=[];Object.entries(l).forEach(([J,L])=>{Array.isArray(L)?L.length&&O.push(L):u[J]=L});const h=i(O.shift(),O,u),y=i(c,[...s],u),k=[h,y].filter(J=>J.length),j=i(k.shift(),k,u);j.length?m.push(...j):m.push(u)}),m}return t}const g=new Set;return _.forEach(t=>{const i={},r=[];a.forEach(p=>{const c=t[p]||"";i[p]=c,r.push(c)});const s=JSON.stringify(r);g.has(s)||(g.add(s),o.push(i),e.push(r))}),{MAP_LIST:o,VALUE_LIST:e,RULE_OBJ:n}}function H(d){const a=/(?<arrProp>((?!\[\*\]).)+\[\*\])?(?<less>.*)$/,e=d.match(a);return{arrProp:e==null?void 0:e.groups.arrProp,suffixPath:e==null?void 0:e.groups.less}}function w(d){return d.replace(/^\$?\./,"").replace(/\[\*\]$/,"")}function E(d){const a=Object.prototype.toString.call(d).slice(8,-1).toLowerCase();return a==="array"||a==="object"}const Q={class:"flex",style:{gap:"24px","margin-bottom":"24px"}},X={class:"flex-1"},Y={class:"flex-1"},Z={key:0,style:{overflow:"auto"}},tt={key:0},et={key:0},at={__name:"index",setup(d){const a=P(JSON.stringify(W)),e=P(JSON.stringify(["$.appeal.id","$.appeal.title","$.appeal.eventVO.id","$.appeal.eventVO.eventName","$.appeal.deptVo.deptId","$.appeal.deptVo.deptName","$.log[*].DistributionVO.id","$.log[*].DistributionVO.distributorName","$.log[*].DistributionVO.deptName","$.log[*].DistributionVO.distributionObjVO.deptId","$.log[*].DistributionVO.distributionObjVO.deptName","$.simpleLog[*].DistributionVO.content","$.simpleLog[*].DistributionVO.test[*].name","$.simpleLog[*].DistributionVO.test[*].ids[*].id","$.simpleLog[*].DistributionVO.mm[*].id","$.simpleLog[*].DistributionVO.mm[*]","$.simpleLog[*]","$.simpleLog"])),o=P({valueList:[],mapList:[]}),n=P(!1);function v(){a.value=JSON.stringify(JSON.parse(a.value),null,2)}function _(){e.value=JSON.stringify(JSON.parse(e.value),null,2)}C(()=>{v(),_()});function x(){let g={},t=[];try{g=JSON.parse(a.value)}catch{g={}}try{t=JSON.parse(e.value)}catch{t=[]}o.value=q(g,t),n.value=!0}return(g,t)=>{const i=U,r=M,s=F,p=K,c=G,m=R;return $(),S(T,null,[b("div",Q,[b("div",X,[N(" 详情对象： "),f(i,{value:a.value,"onUpdate:value":t[0]||(t[0]=l=>a.value=l),rows:30,onBlur:v},null,8,["value"])]),b("div",Y,[N(" 规则数组： "),f(i,{value:e.value,"onUpdate:value":t[1]||(t[1]=l=>e.value=l),rows:30,onBlur:_},null,8,["value"])])]),f(r,{type:"primary",onClick:x},{default:V(()=>[N(" 查看结果 ")]),_:1}),f(m,{visible:n.value,"onUpdate:visible":t[2]||(t[2]=l=>n.value=l),title:"结果",onOk:t[3]||(t[3]=l=>n.value=!1),width:"100%",wrapClassName:"full-modal"},{default:V(()=>[n.value?($(),S("div",Z,[f(c,null,{default:V(()=>[f(p,{key:"2",header:"valueList",disabled:!1},{default:V(()=>[o.value.valueList?($(),S("div",tt,[b("div",null,[f(s,{color:"#108ee9"},{default:V(()=>[N("结果条数")]),_:1}),N(": "+D(o.value.valueList.length),1)]),b("pre",null,D(JSON.stringify(o.value.valueList).replace(/\],\[/g,`],
[`).replace(/","/g,'", "')),1)])):A("",!0)]),_:1}),f(p,{key:"3",header:"mapList"},{default:V(()=>[o.value.mapList?($(),S("div",et,[b("div",null,[f(s,{color:"#108ee9"},{default:V(()=>[N("结果条数")]),_:1}),N(": "+D(o.value.mapList.length),1)]),b("pre",null,D(JSON.stringify(o.value.mapList,null,2)),1)])):A("",!0)]),_:1})]),_:1})])):A("",!0)]),_:1},8,["visible"])],64)}}},nt=I(at,[["__scopeId","data-v-b6807847"]]);export{nt as default};
