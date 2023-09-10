import{A as X,y as d,D as F,M as q,q as N,u as z,J as E,L,j as R,v as H,e as x,B as J,S as Q,Q as W,o as h,c as p,w as y,C as l,d as k,t as m,f as w}from"./vue-libs-19c20d28.js";import{m as G,w as M,o as C,c as K,h as j,q as Z,p as P,a as ee}from"./use-translate-71d4880c.js";import{u as te}from"./use-touch-4e22f945.js";import{V as ae}from"./index-1ef61aa2.js";import{c as D}from"./closest-17b2cc6c.js";import{a as oe,m as ie,w as le}from"./with-install-560d59bf.js";import{V as S,b as ne}from"./index-4df09dfc.js";import{s as O}from"./function-call-6b639af0.js";import"./constant-ee6e27d7.js";import"./index-8bc2514f.js";import"./use-id-09c3f4cb.js";import"./use-expose-80cfd2b2.js";import"./use-route-751feeeb.js";import"./index-c7590142.js";import"./on-popup-reopen-6f4c2d78.js";import"./use-refs-c698ebdb.js";import"./index-7f2a8246.js";import"./interceptor-07dc6e0f.js";import"./mount-component-b555bf78.js";import"./index-140c52d7.js";import"./use-lock-scroll-01f1fb06.js";import"./use-lazy-render-e63df66f.js";import"./index-cd342d67.js";import"./index-2b75ebd8.js";function se(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!W(t)}const ce={gap:oe(24),icon:String,axis:ie("y"),magnetic:String,offset:{type:Object,default:()=>({x:-1,y:-1})},teleport:{type:[String,Object],default:"body"}},[ue,A]=K("floating-bubble"),re=X({name:ue,inheritAttrs:!1,props:ce,emits:["click","update:offset","offsetChange"],setup(t,{slots:n,emit:r,attrs:b}){const s=d(),a=d({x:0,y:0,width:0,height:0}),i=F(()=>({top:t.gap,right:M.value-a.value.width-t.gap,bottom:C.value-a.value.height-t.gap,left:t.gap})),c=d(!1);let f=!1;const Y=F(()=>{const e={},v=j(a.value.x),o=j(a.value.y);return e.transform=`translate3d(${v}, ${o}, 0)`,(c.value||!f)&&(e.transition="none"),e}),V=()=>{if(!g.value)return;const{width:e,height:v}=Z(s.value),{offset:o}=t;a.value={x:o.x>-1?o.x:M.value-e-t.gap,y:o.y>-1?o.y:C.value-v-t.gap,width:e,height:v}},u=te();let T=0,_=0;const $=e=>{u.start(e),c.value=!0,T=a.value.x,_=a.value.y};G("touchmove",e=>{if(e.preventDefault(),u.move(e),t.axis!=="lock"&&!u.isTap.value){if(t.axis==="x"||t.axis==="xy"){let o=T+u.deltaX.value;o<i.value.left&&(o=i.value.left),o>i.value.right&&(o=i.value.right),a.value.x=o}if(t.axis==="y"||t.axis==="xy"){let o=_+u.deltaY.value;o<i.value.top&&(o=i.value.top),o>i.value.bottom&&(o=i.value.bottom),a.value.y=o}const v=P(a.value,["x","y"]);r("update:offset",v)}},{target:s});const U=()=>{c.value=!1,N(()=>{if(t.magnetic==="x"){const e=D([i.value.left,i.value.right],a.value.x);a.value.x=e}if(t.magnetic==="y"){const e=D([i.value.top,i.value.bottom],a.value.y);a.value.y=e}if(!u.isTap.value){const e=P(a.value,["x","y"]);r("update:offset",e),(T!==e.x||_!==e.y)&&r("offsetChange",e)}})},I=e=>{u.isTap.value?r("click",e):e.stopPropagation()};q(()=>{V(),N(()=>{f=!0})}),z([M,C,()=>t.gap,()=>t.offset],V);const g=d(!0);return E(()=>{g.value=!0}),L(()=>{t.teleport&&(g.value=!1)}),()=>{const e=R(x("div",J({class:A(),ref:s,onTouchstartPassive:$,onTouchend:U,onTouchcancel:U,onClickCapture:I,style:Y.value},b),[n.default?n.default():x(ae,{name:t.icon,class:A("icon")},null)]),[[H,g.value]]);return t.teleport?x(Q,{to:t.teleport},se(e)?e:{default:()=>[e]}):e}}}),fe=le(re),B=fe,ve={class:"text"},de={class:"text"},xe={class:"text"},$e=X({__name:"index",setup(t){const n=ee({"zh-CN":{clickBubble:"点击气泡",freeMagnetic:"自由拖拽和磁吸",vModel:"双向绑定",basicUsageText:"在 x 轴默认位置，允许 y 轴方向拖拽",freeMagneticText:"允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边",vModelText:"使用 offset 控制位置，"},"en-US":{clickBubble:"Click bubble",freeMagnetic:"Free Magnetic",vModel:"vModel",basicUsageText:"In the default x position, drag in the y direction is allowed",freeMagneticText:"Allow x and y drags to attach to the nearest side of the x axis",vModelText:"Use offset to control the position,"}}),r=i=>{O(`x: ${i.x.toFixed(0)}, y: ${i.y.toFixed(0)}`)},b=()=>{O(n("clickBubble"))},s=d(0),a=d({x:200,y:400});return(i,c)=>(h(),p(l(ne),{active:s.value,"onUpdate:active":c[1]||(c[1]=f=>s.value=f)},{default:y(()=>[x(l(S),{title:l(n)("basicUsage")},{default:y(()=>[k("p",ve,m(l(n)("basicUsageText")),1),s.value===0?(h(),p(l(B),{key:0,icon:"chat",onClick:b})):w("",!0)]),_:1},8,["title"]),x(l(S),{title:l(n)("freeMagnetic")},{default:y(()=>[k("p",de,m(l(n)("freeMagneticText")),1),s.value===1?(h(),p(l(B),{key:0,icon:"chat",axis:"xy",magnetic:"x",onOffsetChange:r})):w("",!0)]),_:1},8,["title"]),x(l(S),{title:l(n)("vModel")},{default:y(()=>[k("p",xe,m(l(n)("vModelText"))+" x："+m(a.value.x.toFixed(0))+" y: "+m(a.value.y.toFixed(0)),1),s.value===2?(h(),p(l(B),{key:0,icon:"chat",offset:a.value,"onUpdate:offset":c[0]||(c[0]=f=>a.value=f),axis:"xy"},null,8,["offset"])):w("",!0)]),_:1},8,["title"])]),_:1},8,["active"]))}});export{$e as default};
