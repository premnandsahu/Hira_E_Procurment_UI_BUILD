import{c as D,j as e,k as G,bj as O}from"./index-CcfvtG5A.js";const c=n=>n==null||n===""?"-":String(n),A=(n,l)=>n==null||n===""||Number.isNaN(Number(n))||n==="-"?c(n):Number(n).toFixed(l),J=n=>{var l,t;return((l=n==null?void 0:n.Date)==null?void 0:l.ViewFormat)||((t=n==null?void 0:n.Date)==null?void 0:t.viewFormat)||"DD/MM/YYYY"},R=n=>Array.isArray(n)?n.filter(Boolean):n?[n]:[],k=n=>Array.isArray(n)?n.map(l=>{if(l&&typeof l=="object"){const t=Object.values(l)[0];return typeof t=="string"||typeof t=="number"?t:void 0}return l}).filter(l=>l!=null&&l!==""):n!=null&&n!==""?[n]:[],X=(n,l)=>{let t=[],m;return l.forEach(g=>{const S=g.column||g.columnName;if(!S)return;const f=n[S];if(f==null||f==="")return;const p=typeof f=="number"?f:Number(f);Number.isNaN(p)||(m===void 0||p<m?(m=p,t=[S]):p===m&&t.push(S))}),{l1Column:t,l1Value:m!==void 0?[m]:[]}},_=({formService:n})=>{var T,K,P,B;const{config:l}=D(),{formData:t,csGridData:m,companyInfo:g}=n||{},S=(g==null?void 0:g.printingName)||(t==null?void 0:t.companyName),f=g==null?void 0:g.fullAddress,p=(m==null?void 0:m.vendors)||(m==null?void 0:m.vendorLocationDetail)||[],E=(m==null?void 0:m.groups)||[],L=p.filter(i=>!i.quotationId),U=((T=l==null?void 0:l.Qty)==null?void 0:T.PrecisionDefault)??3,I=((K=l==null?void 0:l.Amount)==null?void 0:K.PrecisionDefault)??2,W=J(l),H=p.length,Q=Math.max(297,Math.ceil((615+H*140)*.264583)+20),Y=(t==null?void 0:t.vendorSelectionBasisId)===1?((t==null?void 0:t.quotationParticipationDetail)||[]).filter(i=>i.isSelected):[],V=[];E.forEach((i,o)=>{var x,j,b,v;if(i.groupName==="Vendor"&&((x=i.heads)!=null&&x.length)){const s=`${i.groupName}-group-${o}`,N=i.heads.length;i.heads.forEach((d,u)=>{V.push({rowKind:"vendor-meta",rowGroupId:s,rowGroupSize:N,isRowGroupStart:u===0,itemDescription:u===0?"Vendor Detail":"",qty:"",unit:"",particular:d.head||"-",vendorValues:Object.fromEntries(p.map(a=>{var h;const r=a.column||a.columnName;return[r,c((h=d.values)==null?void 0:h[r])]})),l1Value:k(d.l1Value),l1:R(d.l1Column)})});return}if((j=i.items)!=null&&j.length){i.items.forEach(s=>{const N=`${i.groupName}-${s.itemId??"item"}`,d=(s.heads||[]).length;(s.heads||[]).forEach((u,a)=>{var r,h,y,w;V.push({rowKind:"item",rowGroupId:N,rowGroupSize:d,isRowGroupStart:a===0,itemDescription:a===0?`Rfq Line No. : ${(s==null?void 0:s.rfqLineNo)??"-"} ${s.description??s.itemName??"-"}`:"",qty:a===0?s.qty??"-":"",unit:a===0?((r=s.unit)==null?void 0:r.alias)??((h=s.unit)==null?void 0:h.unitAlias)??((y=s.unit)==null?void 0:y.unitCode)??s.unit??s.unitName??((w=s.itemUnit)==null?void 0:w.alias)??"-":"",particular:u.head||"-",vendorValues:Object.fromEntries(p.map(C=>{var z;const $=C.column||C.columnName;return[$,c((z=u.values)==null?void 0:z[$])]})),l1Value:k(u.l1Value),l1:R(u.l1Column)})})});return}if(i.item&&((b=i.heads)!=null&&b.length)){const s=i.item,N=`${i.groupName}-${s.itemId??"item"}`,d=i.heads.length;i.heads.forEach((u,a)=>{var r,h,y,w;V.push({rowKind:"item",rowGroupId:N,rowGroupSize:d,isRowGroupStart:a===0,itemDescription:a===0?`Rfq Line No. : ${(s==null?void 0:s.rfqLineNo)??"-"} ${s.description??s.itemName??"-"}`:"",qty:a===0?s.qty??"-":"",unit:a===0?((r=s.unit)==null?void 0:r.alias)??((h=s.unit)==null?void 0:h.unitAlias)??((y=s.unit)==null?void 0:y.unitCode)??s.unit??s.unitName??((w=s.itemUnit)==null?void 0:w.alias)??"-":"",particular:u.head||"-",vendorValues:Object.fromEntries(p.map(C=>{var z;const $=C.column||C.columnName;return[$,c((z=u.values)==null?void 0:z[$])]})),l1Value:k(u.l1Value),l1:R(u.l1Column)})});return}if((v=i.heads)!=null&&v.length){const s=i.groupName==="Summary",N=s?i.heads.filter(r=>!r.isDeleted):i.heads,d=`${i.groupName}-group-${o}`,u=N.length;let a=0;i.heads.forEach(r=>{s&&r.isDeleted||(V.push({rowKind:s?"summary":"item",rowGroupId:d,rowGroupSize:u,isRowGroupStart:a===0,itemDescription:a===0?i.groupName:"",qty:"",unit:"",particular:r.head||"-",vendorValues:Object.fromEntries(p.map(h=>{var w;const y=h.column||h.columnName;return[y,c((w=r.values)==null?void 0:w[y])]})),l1Value:k(r.l1Value),l1:R(r.l1Column)}),a+=1)})}});const F=p.filter(i=>!!i.quotationId),q={};F.forEach(i=>{const o=i.column||i.columnName;if(!o)return;let x=0,j=0;E.forEach(b=>{var N;const v=b.groupName==="Summary";(b.heads||((N=b.items)==null?void 0:N.flatMap(d=>d.heads))||[]).forEach(d=>{var u,a;if(d.head==="Net Amount"){const r=(u=d.values)==null?void 0:u[o];r&&!Number.isNaN(Number(r))&&(x+=Number(r))}if(v&&!d.isDeleted&&d.isNew){const r=(a=d.values)==null?void 0:a[o];r&&!Number.isNaN(Number(r))&&(j+=Number(r))}})}),q[o]=x+j});const M=X(q,F);return V.push({rowKind:"summary-total",rowGroupId:"Total-group",rowGroupSize:1,isRowGroupStart:!0,itemDescription:"Total",qty:"",unit:"",particular:"Total Amount",vendorValues:Object.fromEntries(p.map(i=>{const o=i.column||i.columnName;return[o,c(q[o])]})),l1Value:k(M.l1Value),l1:R(M.l1Column)}),e.jsxs("div",{className:"cs-print-wrapper print-preserve-colors",children:[e.jsx("style",{children:`
                .cs-print-wrapper {
                    width: 100%;
                    background: #f0f0f0;
                    padding: 20px 0;
                    font-family: Arial, Helvetica, sans-serif;
                    color: black;
                }
                @media print {
                    @page { size: ${Q}mm 210mm; margin: 8mm !important; }
                    .cs-print-wrapper { background: white !important; padding: 0 !important; min-height: auto !important; width: 100% !important; }
                    .print-preserve-colors, .print-preserve-colors * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    #print-area { position: static !important; display: block !important; width: 100% !important; margin: 0 !important; }
                    .cs-document-page { margin: 0 !important; box-shadow: none !important; width: 100% !important; max-width: none !important; padding: 0 !important; }
                }
                @media screen {
                    .cs-document-page {
                        background: white;
                        width: ${Q}mm;
                        min-width: 297mm;
                        margin: 0 auto;
                        padding: 8mm;
                        box-shadow: 0 0 15px rgba(0,0,0,0.2);
                        box-sizing: border-box;
                    }
                }
                table.master-print-container, table.grid-table {
                    width: 100%;
                    border-collapse: collapse;
                    border: 1px solid #7f7f7f;
                }
                .title-box { text-align: center; border-bottom: 1px solid #7f7f7f; padding: 8px; }
                .title-main { font-size: 18px; font-weight: bold; }
                .title-address { font-size: 12px; margin-top: 4px; }
                .title-sub { font-size: 15px; font-weight: bold; margin-top: 4px; text-transform: uppercase; }
                .meta-grid { border-bottom: 1px solid #7f7f7f; }
                .meta-grid td { border-right: 1px solid #7f7f7f; padding: 6px 8px; font-size: 12px; }
                .meta-grid td:last-child { border-right: none; }
                .meta-label { font-weight: bold; }
                .section-title { font-size: 12px; font-weight: bold; text-transform: uppercase; padding: 8px; border: 1px solid #7f7f7f; border-top: none; background: #e5e7eb; }
                .section-gap { margin-top: 30px; }
                .grid-table th, .grid-table td {
                    border: 1px solid #7f7f7f;
                    padding: 5px 6px;
                    font-size: 11px;
                    vertical-align: top;
                }
                .grid-table th { background: #d1d5db; font-weight: bold; }
                .text-right { text-align: right; }
                .text-center { text-align: center; }
                .muted { color: #444; font-size: 10px; }
                .summary-row { background: #f3f4f6; font-weight: bold; }
                .l1-highlight { background: cornsilk; }
                .signature-area {
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                }
                .signature-box {
                    flex: 1;
                    border-top: 1px solid #7f7f7f;
                    text-align: center;
                    padding-top: 6px;
                    font-size: 11px;
                    font-weight: bold;
                    min-height: 20px;
                }
            `}),e.jsx("div",{className:"cs-document-page",children:e.jsx("table",{className:"master-print-container",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{children:[e.jsxs("div",{className:"title-box",children:[e.jsx("div",{className:"title-main",children:c(S)}),f&&e.jsx("div",{className:"title-address",children:f}),e.jsx("div",{className:"title-sub",children:"Comparative Statement"})]}),e.jsx("table",{className:"meta-grid",style:{width:"100%",borderCollapse:"collapse"},children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"CS No:"})," ",c(t==null?void 0:t.docNoYearly)]}),e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"CS Date:"})," ",t!=null&&t.docDate?G(t.docDate).format((P=l==null?void 0:l.Date)==null?void 0:P.ViewFormat):"-"]}),e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"Ref. Doc Type:"})," ",((B=t==null?void 0:t.refDocType)==null?void 0:B.refDocTypeName)||((t==null?void 0:t.refDocTypeId)===O.RFQ?"RFQ":(t==null?void 0:t.refDocTypeId)===O.CS?"CS":"-")]}),e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"Validity Date:"})," ",t!=null&&t.validityDate?G(t.validityDate).format("DD/MM/YYYY"):"-"]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"Ref. Doc No:"})," ",c((t==null?void 0:t.rfqNo)||(t==null?void 0:t.refCsNo)||(t==null?void 0:t.refDocNo))]}),e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"Ref. Doc Date:"})," ",t!=null&&t.rfqDate||t!=null&&t.refCsDate||t!=null&&t.refDocDate?G((t==null?void 0:t.rfqDate)||(t==null?void 0:t.refCsDate)||(t==null?void 0:t.refDocDate)).format("DD/MM/YYYY"):"-"]}),e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"Selection Basis:"})," ",c((t==null?void 0:t.vendorSelectionBasisName)||((t==null?void 0:t.vendorSelectionBasisId)===1?"Quotation-wise":(t==null?void 0:t.vendorSelectionBasisId)===2?"Item-wise":"-"))]}),e.jsxs("td",{children:[e.jsx("span",{className:"meta-label",children:"CS Status:"})," ",c((t==null?void 0:t.docStatusName)||(t==null?void 0:t.docStatusDisplay))]})]})]})}),e.jsx("div",{className:"section-title",children:"Comparative Grid"}),e.jsxs("table",{className:"grid-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"170px"},children:"Group / Item"}),e.jsx("th",{style:{width:"65px"},children:"Qty"}),e.jsx("th",{style:{width:"65px"},children:"Unit"}),e.jsx("th",{style:{width:"150px"},children:"Particular"}),p.map((i,o)=>e.jsxs("th",{children:[e.jsx("div",{children:i.column||i.columnName||`V${o+1}`}),e.jsx("div",{className:"muted",children:i.vendorName||"-"})]},i.column||i.columnName||o)),e.jsx("th",{style:{width:"85px"},children:"L1 Value"}),e.jsx("th",{style:{width:"80px"},children:"L1"})]})}),e.jsx("tbody",{children:V.map((i,o)=>e.jsxs("tr",{className:i.rowKind==="summary"||i.rowKind==="summary-total"?"summary-row":"",children:[i.isRowGroupStart&&e.jsx("td",{rowSpan:i.rowGroupSize,children:c(i.itemDescription)}),e.jsx("td",{className:"text-right",children:A(i.qty,U)}),e.jsx("td",{className:"text-center",children:c(i.unit)}),e.jsx("td",{children:c(i.particular)}),p.map((x,j)=>{var r,h;const b=x.column||x.columnName||`V${j+1}`,v=i.l1.includes(b)&&i.rowKind!=="vendor-meta",s=i.vendorValues[b],N=((r=i.particular)==null?void 0:r.trim())==="Revision No.",d=((h=i.particular)==null?void 0:h.trim())==="Quotation Date",u=["Contact No","Quotation No"].includes(i.particular)||Number.isNaN(Number(s)),a=d&&G(s).isValid()?G(s).format(W):u?c(s):A(s,N?0:I);return e.jsx("td",{className:`${u?"":"text-right"} ${v?"l1-highlight":""}`,children:a},`cell-${b}-${j}-${o}`)}),e.jsx("td",{className:"text-right",children:i.l1Value.length?i.l1Value.map(x=>A(x,I)).join(", "):"-"}),e.jsx("td",{children:i.l1.length?i.l1.join(", "):"-"})]},`${i.rowKind}-${o}`))})]}),(t==null?void 0:t.remarks)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"section-title",children:"Remarks"}),e.jsx("table",{className:"grid-table",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{children:t.remarks})})})})]}),Y.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"section-title",children:"Selected Quotations"}),e.jsxs("table",{className:"grid-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"55px"},children:"SL."}),e.jsx("th",{children:"Vendor"}),e.jsx("th",{style:{width:"140px"},children:"Quotation No"}),e.jsx("th",{style:{width:"120px"},children:"Rank"})]})}),e.jsx("tbody",{children:Y.map((i,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-center",children:o+1}),e.jsx("td",{children:c(i.vendorName)}),e.jsx("td",{children:c(i.quotationNo)}),e.jsx("td",{children:c(i.rank)})]},`${i.quotationId||o}`))})]})]}),L.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"section-title section-gap",children:"Vendors Not Submitted Quotation"}),e.jsxs("table",{className:"grid-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"55px"},children:"SL."}),e.jsx("th",{children:"Vendor Name"}),e.jsx("th",{children:"Address"}),e.jsx("th",{style:{width:"180px"},children:"Contact No."})]})}),e.jsx("tbody",{children:L.map((i,o)=>{var x,j;return e.jsxs("tr",{children:[e.jsx("td",{className:"text-center",children:o+1}),e.jsx("td",{children:c(i.vendorName)}),e.jsx("td",{children:c(i.fullAddress||((x=i.vendorContactDetail)==null?void 0:x.fullAddress))}),e.jsx("td",{children:c(i.contactNo||((j=i.vendorContactDetail)==null?void 0:j.contactNo))})]},`${i.vendorId||i.vendorLocationId||o}`)})})]})]})]})})})})})]})};export{_ as default};
