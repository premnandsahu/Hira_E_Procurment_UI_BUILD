import{r as p,j as t}from"./index-ChTqendy.js";const c=({src:s,icon:i,initials:l,alt:x="User Avatar",notificationBadge:r,statusBadge:o,size:n="md"})=>{const e=(()=>{switch(n){case"xs":return{width:"24px",height:"24px",fontSize:"6px"};case"sm":return{width:"32px",height:"32px",fontSize:"8px"};case"md":return{width:"40px",height:"40px",fontSize:"10px"};case"lg":return{width:"48px",height:"48px",fontSize:"12px"};case"xl":return{width:"56px",height:"56px",fontSize:"14px"};case"2xl":return{width:"64px",height:"64px",fontSize:"16px"};default:return{width:n,height:n,fontSize:`calc(${n} / 2.5)`}}})(),h=p.useMemo(()=>`#${Math.floor(Math.random()*16777214).toString(16).padStart(6,"0")}`,[]),a=()=>s?t.jsx("img",{src:s,alt:x,style:{width:"100%",height:"100%",objectFit:"cover"}}):i?t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:i}):l?t.jsx("div",{className:`flex items-center justify-center w-full h-full uppercase font-regular rounded-full text-white text-${n} `,style:{backgroundColor:`${h}`},children:l.substring(0,2)}):null;return t.jsxs("div",{style:{position:"relative",display:"inline-block",overflow:"hidden",...e},children:[a(),r!==void 0&&r!==!1&&t.jsx("div",{className:`
            absolute
            top-[1.5px]
            right-[1.5px]
            bg-red-9
            text-white
            rounded-full
            flex
            items-center
            justify-center
            transform
            translate-x-[25%]
            -translate-y-[25%]
            z-base
            border
            border-white
            px-px
          `,style:{fontSize:e.fontSize,minWidth:+e.fontSize.replace("px","")+2+"px",height:+e.fontSize.replace("px","")+2+"px"},children:typeof r=="number"&&r>0?r:""}),o&&t.jsx("div",{className:`
            absolute
            bg-green-9
            rounded-full
            transform
            translate-x-[25%]
            translate-y-[25%]
            z-base
            border
            border-white
            h-max-md
          `,style:{bottom:"6.5%",right:"6.5%",width:+e.fontSize.replace("px","")+2+"px",height:+e.fontSize.replace("px","")+2+"px"}})]})};export{c as A};
