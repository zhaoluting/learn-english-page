import{_ as m,k as i,c as x,h as s,x as l,g as I,w,u as b,a as y,f as k,o as D,i as r,y as N,z as S}from"./index-8e7bf8f6.js";const v=o=>(N("data-v-c67ca0a1"),o=o(),S(),o),B={class:"error"},C={class:"container-floud"},V={class:"col-xs-12 ground-color text-center"},M={class:"container-error-404"},z={class:"clip"},E={class:"shadow"},H={class:"digit"},O={class:"clip"},R={class:"shadow"},T={class:"digit"},$={class:"clip"},j={class:"shadow"},q={class:"digit"},A=v(()=>s("div",{class:"msg"},[r(" OH! "),s("span",{class:"triangle"})],-1)),F=v(()=>s("h2",{class:"h1"},"很抱歉，您还没有权限访问该页面",-1)),_=30,G={__name:"401",setup(o){const u=y();function e(){return Math.floor(Math.random()*9)+1}const a=i(0),c=i(0),n=i(0);let t=0;const p=setInterval(function(){t>40?(clearInterval(p),a.value=4):(a.value=e(),t++)},_),h=setInterval(function(){t>80?(clearInterval(h),c.value=0):(c.value=e(),t++)},_),f=setInterval(function(){t>100?(clearInterval(f),n.value=1):(n.value=e(),t++)},_);return(J,d)=>{const g=k("van-button");return D(),x("div",B,[s("div",C,[s("div",V,[s("div",M,[s("div",z,[s("div",E,[s("span",H,l(a.value),1)])]),s("div",O,[s("div",R,[s("span",T,l(c.value),1)])]),s("div",$,[s("div",j,[s("span",q,l(n.value),1)])]),A]),F,I(g,{plain:"",class:"txt-btn no-border yellow-btn",onClick:d[0]||(d[0]=K=>b(u).push("/"))},{default:w(()=>[r("返回首页")]),_:1})])])])}}},P=m(G,[["__scopeId","data-v-c67ca0a1"]]);export{P as default};
