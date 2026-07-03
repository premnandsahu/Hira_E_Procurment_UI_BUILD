import{c as A,j as t,a7 as S,r as N,A as k,g as T,a as B,k as v}from"./index-ChTqendy.js";function z(e){const i=["","One ","Two ","Three ","Four ","Five ","Six ","Seven ","Eight ","Nine ","Ten ","Eleven ","Twelve ","Thirteen ","Fourteen ","Fifteen ","Sixteen ","Seventeen ","Eighteen ","Nineteen "],d=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];if(e===0)return"Zero";const o=Math.floor(e).toString();if(o.length>9)return"overflow";const s=("000000000"+o).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(!s)return"";let c="";return c+=Number(s[1])!=0?(i[Number(s[1])]||d[s[1][0]]+" "+i[s[1][1]])+"Crore ":"",c+=Number(s[2])!=0?(i[Number(s[2])]||d[s[2][0]]+" "+i[s[2][1]])+"Lakh ":"",c+=Number(s[3])!=0?(i[Number(s[3])]||d[s[3][0]]+" "+i[s[3][1]])+"Thousand ":"",c+=Number(s[4])!=0?(i[Number(s[4])]||d[s[4][0]]+" "+i[s[4][1]])+"Hundred ":"",c+=Number(s[5])!=0?(c!=""?"and ":"")+(i[Number(s[5])]||d[s[5][0]]+" "+i[s[5][1]])+"Rupees Only":"Rupees Only",c.trim()}const C=({companyInfo:e})=>t.jsxs("div",{style:{padding:"10px 15px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"16px",fontWeight:"800",color:"#1e293b",textTransform:"",letterSpacing:"0.5px"},children:(e==null?void 0:e.printingName)||""}),t.jsx("div",{style:{fontSize:"10px",color:"#64748b",lineHeight:"1.4",marginTop:"4px"},children:e==null?void 0:e.fullAddress})]}),E=()=>t.jsx("div",{style:{borderTop:"1px solid #000",borderBottom:"1px solid #000",padding:"6px 0",textAlign:"center",backgroundColor:"#f8fafc"},children:t.jsx("div",{style:{display:"inline-block",border:"1.5px solid #000",padding:"2px 50px",fontSize:"14px",fontWeight:"bold",textTransform:"",letterSpacing:"1px"},children:"Quotation"})}),R=({formData:e,rfqData:i})=>{var o;const d=((o=e==null?void 0:e.informToDetail)==null?void 0:o[0])||(e==null?void 0:e.vendorData)||{};return t.jsx("table",{style:{width:"100%",borderCollapse:"collapse",borderBottom:"1.5px solid black",fontSize:"10px"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsxs("td",{style:{width:"45%",borderRight:"1.5px solid black",padding:"6px",verticalAlign:"top"},children:[t.jsx("div",{style:{fontWeight:"bold",color:"#475569",marginBottom:"4px"},children:"Vendor Details :"}),t.jsx("div",{style:{fontWeight:"800",fontSize:"11px",lineHeight:"1.2"},children:(i==null?void 0:i.vendorName)||"-"}),t.jsx("div",{style:{fontSize:"10px",lineHeight:"1.2",color:"#334155"},children:(i==null?void 0:i.vendorLocation)||"-"}),t.jsx("table",{style:{marginTop:"8px",fontSize:"10px",width:"100%"},children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{style:{width:"85px",color:"#64748b"},children:"Pin Code"}),t.jsxs("td",{children:[": ",d.pinCode||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#64748b"},children:"Email"}),t.jsxs("td",{children:[": ",d.email||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#64748b"},children:"Phone"}),t.jsxs("td",{children:[": ",d.contactNo||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#64748b"},children:"Fax"}),t.jsxs("td",{children:[": ",d.fax||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#64748b"},children:"GST No."}),t.jsxs("td",{children:[": ",d.gstNo||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#64748b"},children:"State Code."}),t.jsxs("td",{children:[": ",d.stateCode||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{color:"#64748b"},children:"Contact Person"}),t.jsxs("td",{children:[": ",t.jsx("span",{style:{fontWeight:"bold"},children:d.contactPersonName||"-"})]})]})]})})]}),t.jsxs("td",{style:{width:"55%",padding:"6px",verticalAlign:"top"},children:[t.jsx("table",{style:{width:"100%",fontSize:"10px"},children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{style:{width:"90px",paddingBottom:"4px",color:"#64748b"},children:"Quotation No."}),t.jsxs("td",{style:{paddingBottom:"4px",fontWeight:"800",fontSize:"11px"},children:[": ",e.quotationNo||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{paddingBottom:"4px",color:"#64748b"},children:"Quotation Date"}),t.jsxs("td",{style:{paddingBottom:"4px"},children:[": ",e.quotationDate?v(e.quotationDate).format("DD/MM/YYYY"):"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{paddingBottom:"4px",color:"#64748b"},children:"RFQ No."}),t.jsxs("td",{style:{paddingBottom:"4px"},children:[": ",(i==null?void 0:i.docNoYearly)||"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{paddingBottom:"4px",color:"#64748b"},children:"RFQ Date"}),t.jsxs("td",{style:{paddingBottom:"4px"},children:[": ",i!=null&&i.docDate?v(i.docDate).format("DD/MM/YYYY"):"-"]})]})]})}),t.jsx("div",{style:{marginTop:"2px",borderTop:"1px dashed #cbd5e1",paddingTop:"4px"},children:t.jsx("table",{style:{width:"100%",fontSize:"10px"},children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{style:{width:"90px",paddingBottom:"2px",color:"#64748b"},children:"Payment Mode"}),t.jsxs("td",{style:{width:"120px",paddingBottom:"2px"},children:[": ",e.paymentModeName||e.paymentMode||"-"]}),t.jsxs("td",{style:{paddingBottom:"2px",fontWeight:"bold"},children:["Validity : ",e.validityDate?v(e.validityDate).format("DD/MM/YYYY"):"-"]})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{paddingBottom:"2px",color:"#64748b"},children:"Freight"}),t.jsxs("td",{colSpan:2,style:{paddingBottom:"2px"},children:[": ",e.freightTypeName||"-"]})]})]})})})]})]})})})},F=({items:e,formatQty:i,onTotalComputed:d,startIndex:o=0})=>{const s=(e==null?void 0:e.filter(n=>n.isSelected||n.id>0))||e||[];let c=0;return s.forEach(n=>{const b=Number(n.qty)||0,g=Number(n.rate)||0,x=Number(n.discountPercent)||0,r=Number(n.taxPercent)||0,l=b*g,h=l*x/100,j=l-h,m=j*r/100;c+=j+m}),S.useEffect(()=>{d&&d(c)},[c,d]),t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsxs("table",{className:"print-grid-table",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"grid-header",children:[t.jsxs("th",{style:{width:"30px"},children:["Sl.",t.jsx("br",{}),"No."]}),t.jsx("th",{style:{width:"180px"},children:"Item Name"}),t.jsx("th",{style:{width:"35px"},children:"UOM"}),t.jsxs("th",{style:{width:"45px"},children:["Delivery",t.jsx("br",{}),"Days"]}),t.jsx("th",{style:{width:"50px"},children:"Qty."}),t.jsxs("th",{style:{width:"50px"},children:["Rate/",t.jsx("br",{}),"Unit"]}),t.jsx("th",{style:{width:"120px"},children:"Disc / Charges"}),t.jsx("th",{style:{width:"65px"},children:"Value"})]})}),t.jsxs("tbody",{children:[s.map((n,b)=>{const g=Number(n.qty)||0,x=Number(n.rate)||0,r=Number(n.discountPercent)||0,l=Number(n.taxPercent)||0,h=g*x,j=h*r/100,m=h-j,a=m*l/100,y=m+a;return t.jsxs("tr",{className:"grid-row",children:[t.jsx("td",{style:{textAlign:"center",verticalAlign:"top"},children:o+b+1}),t.jsxs("td",{style:{verticalAlign:"top"},children:[t.jsx("div",{style:{marginBottom:"2px"},children:n.itemName}),t.jsxs("div",{className:"item-secondary-info",style:{lineHeight:"1.2"},children:[n.itemCode&&t.jsx("div",{children:n.itemCode}),n.hsnCode&&t.jsxs("div",{children:["HSN Code - ",n.hsnCode]}),n.makeName&&t.jsxs("div",{children:["Make : ",n.makeName,n.makeName.toLowerCase()==="other"&&n.otherMakeName?` (${n.otherMakeName})`:""]}),n.techSpec&&t.jsxs("div",{children:["Tech. Spec. : [ ",n.techSpec," ]"]}),n.drawingNo&&t.jsxs("div",{children:["Drawing No. : ",n.drawingNo]})]})]}),t.jsx("td",{style:{textAlign:"center",verticalAlign:"top"},children:n.unit||n.uom||"MTS"}),t.jsx("td",{style:{textAlign:"right",verticalAlign:"top"},children:n.deliveryDays||"-"}),t.jsx("td",{style:{textAlign:"right",verticalAlign:"top"},children:i(n.qty)}),t.jsx("td",{style:{textAlign:"right",verticalAlign:"top"},children:i(n.rate)}),t.jsx("td",{style:{verticalAlign:"top",fontSize:"9px"},children:t.jsx("table",{style:{width:"100%",tableLayout:"fixed"},children:t.jsxs("tbody",{children:[r>0&&t.jsxs("tr",{children:[t.jsxs("td",{children:["DISC(",r,"%)"]}),t.jsx("td",{style:{textAlign:"right"},children:j.toLocaleString("en-IN",{minimumFractionDigits:2})})]}),l>0&&t.jsxs("tr",{children:[t.jsxs("td",{children:["CGST(",l/2,"%)"]}),t.jsx("td",{style:{textAlign:"right"},children:(a/2).toLocaleString("en-IN",{minimumFractionDigits:2})})]}),l>0&&t.jsxs("tr",{children:[t.jsxs("td",{children:["SGST(",l/2,"%)"]}),t.jsx("td",{style:{textAlign:"right"},children:(a/2).toLocaleString("en-IN",{minimumFractionDigits:2})})]})]})})}),t.jsx("td",{style:{textAlign:"right",verticalAlign:"top"},children:y.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})})]},b)}),t.jsxs("tr",{className:"grid-row",children:[t.jsx("td",{style:{height:"30px"}}),t.jsx("td",{}),t.jsx("td",{}),t.jsx("td",{}),t.jsx("td",{}),t.jsx("td",{}),t.jsx("td",{}),t.jsx("td",{})]})]})]}),t.jsxs("div",{style:{borderBottom:"1pt solid black",borderTop:"1pt solid black",padding:"4px 5px",textAlign:"right",fontWeight:"bold",fontSize:"10px"},children:["Total Amount : ",t.jsx("span",{style:{marginLeft:"12px"},children:c.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})})]})]})},L=({tncs:e,otherCharges:i})=>t.jsxs("div",{className:"terms-charges-section",style:{display:"flex",borderBottom:"1pt solid black",minHeight:"140px",fontSize:"10px"},children:[t.jsxs("div",{style:{width:"45%",borderRight:"1pt solid black",padding:"4px"},children:[t.jsx("div",{style:{fontWeight:"bold",textDecoration:"underline",marginBottom:"4px"},children:"Terms & Condition :"}),t.jsx("table",{style:{width:"100%",tableLayout:"fixed",fontSize:"10px"},children:t.jsx("tbody",{children:(e==null?void 0:e.length)>0?e.map((d,o)=>t.jsxs("tr",{children:[t.jsxs("td",{style:{width:"100px",verticalAlign:"top"},children:["• ",d.headName]}),t.jsxs("td",{style:{verticalAlign:"top"},children:[": ",d.status]})]},o)):t.jsx("tr",{children:t.jsx("td",{colSpan:2,children:"-"})})})})]}),t.jsxs("div",{style:{width:"55%",display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",fontWeight:"bold",textAlign:"center",borderBottom:"1pt solid black"},children:[t.jsx("div",{style:{width:"33.33%",borderRight:"1pt solid black",padding:"4px 0"},children:"Other Charges"}),t.jsx("div",{style:{width:"33.33%",borderRight:"1pt solid black",padding:"4px 0"},children:"Description"}),t.jsx("div",{style:{width:"33.33%",padding:"4px 0"},children:"Amount"})]}),t.jsxs("div",{style:{flex:1,display:"flex"},children:[t.jsx("div",{style:{width:"33.33%",borderRight:"1pt solid black",padding:"4px"},children:i==null?void 0:i.map((d,o)=>t.jsx("div",{children:d.chargeHead},o))}),t.jsx("div",{style:{width:"33.33%",borderRight:"1pt solid black",padding:"4px"},children:i==null?void 0:i.map((d,o)=>t.jsx("div",{children:d.chargeDesc},o))}),t.jsx("div",{style:{width:"33.33%",padding:"4px",textAlign:"right"},children:i==null?void 0:i.map((d,o)=>t.jsx("div",{children:Number(d.amount).toLocaleString("en-IN",{minimumFractionDigits:2})},o))})]})]})]}),P=({totalAmount:e})=>t.jsxs("div",{className:"net-amount-section",style:{display:"flex",borderBottom:"1pt solid black",fontSize:"10px",padding:"4px"},children:[t.jsxs("div",{style:{flex:1},children:["Rs. (In Words)    : ",t.jsx("span",{style:{fontWeight:"bold"},children:z(e)})]}),t.jsxs("div",{style:{fontWeight:"bold",paddingRight:"10px"},children:["Net Amount  : ",t.jsx("span",{style:{marginLeft:"12px"},children:e.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})})]})]}),M=({companyName:e,isLastPage:i})=>i?t.jsxs("div",{className:"signature-section",style:{padding:0},children:[t.jsxs("div",{style:{textAlign:"right",padding:"4px 10px",height:"60px",fontWeight:"bold",fontSize:"10px"},children:["For, ",`${e} (Head Office)`||"Real Ispat (Head Office)"]}),t.jsx("div",{style:{padding:"0 10px 10px",fontWeight:"bold",fontSize:"10px",marginTop:"-15px"},children:"(AUTHORIZED SIGNATORY)"}),t.jsxs("div",{style:{display:"flex",borderTop:"0px solid black",fontSize:"10px",padding:"15px 10px"},children:[t.jsx("div",{style:{flex:1,textAlign:"left"},children:"Prepared By"}),t.jsx("div",{style:{flex:1,textAlign:"center"},children:"Checked By"}),t.jsx("div",{style:{flex:1,textAlign:"right"},children:"Authorized By"})]})]}):null,W=({formData:e,rfqData:i,items:d,formatQty:o,isLastPage:s,pageNo:c,totalPages:n,startIndex:b})=>{const[g,x]=S.useState(0),{userProfileData:r}=N.useContext(k),[l,h]=N.useState(null);N.useEffect(()=>{var y,p;const a=async()=>{const f=`${await T("companies")}/info/${r==null?void 0:r.headOffice[0].id}`,w=await B({endpoint:f});h(w)};(p=(y=r==null?void 0:r.headOffice)==null?void 0:y[0])!=null&&p.id&&a()},[r]);const j=((e==null?void 0:e.otherCharges)||[]).reduce((a,y)=>a+(Number(y.amount)||0),0),m=g+j;return t.jsxs("div",{className:"master-print-container",children:[t.jsxs("div",{className:"master-header",children:[t.jsx(C,{companyInfo:l}),t.jsx(E,{}),t.jsx(R,{formData:e,rfqData:i})]}),t.jsxs("div",{className:"master-body",children:[t.jsx(F,{items:d,formatQty:o,onTotalComputed:x,startIndex:b}),s&&t.jsxs("div",{style:{breakInside:"avoid"},children:[t.jsx(L,{tncs:e.tncs,otherCharges:e.otherCharges}),t.jsx(P,{totalAmount:m}),t.jsx(M,{companyName:l==null?void 0:l.printingName,isLastPage:s})]})]}),t.jsx("div",{style:{flex:1}}),t.jsx("div",{className:"master-footer",children:t.jsx("div",{style:{borderTop:"1px solid black",padding:"10px",fontSize:"9px",display:"flex",justifyContent:"space-between"},children:t.jsxs("div",{className:"footer-page-info",children:["Page ",c," of ",n]})})})]})},I=({formService:e})=>{const i=(e==null?void 0:e.formData)||{},d=(e==null?void 0:e.rfqData)||{},{config:o}=A(),s=x=>{var r;return Number(x||0).toFixed(((r=o==null?void 0:o.Qty)==null?void 0:r.PrecisionDefault)||3)},c=x=>{const r=[];let l=[],h=0;const j=40,m=10;return x.forEach((a,y)=>{let p=1.5;a.itemCode&&(p+=1),a.hsnCode&&(p+=1),a.makeName&&(p+=1),a.drawingNo&&(p+=1),a.techSpec&&(p+=Math.ceil(a.techSpec.length/55)),p+=.5;const u=y===x.length-1,f=r.length===0&&u||l.length>0&&u?j-m:j;h+p>f&&l.length>0?(r.push(l),l=[a],h=p):(l.push(a),h+=p)}),l.length>0&&r.push(l),r},n=(i==null?void 0:i.items)||[],b=(n==null?void 0:n.filter(x=>x.isSelected||x.id>0))||n,g=c(b);return g.length===0&&g.push([]),t.jsxs("div",{className:"rfq-print-wrapper",children:[t.jsx("style",{children:`
                /* RESET & BASE */
                .rfq-print-wrapper {
                    width: 100%;
                    background: transparent;
                    min-height: 100vh;
                    padding: 40px 0;
                    font-family: 'Inter', Arial, sans-serif;
                    color: black;
                }

                @media print {
                    .rfq-print-wrapper {
                        background: white !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }

                    .rfq-document-page { 
                        margin: 0 !important; 
                        box-shadow: none !important; 
                        width: 210mm !important; 
                        height: 297mm !important; 
                        padding: 10mm !important;
                        display: flex !important;
                        flex-direction: column !important;
                        box-sizing: border-box !important;
                        page-break-after: always;
                        break-after: page;
                        background: white !important;
                    }

                    .rfq-document-page:last-child {
                        page-break-after: auto;
                        break-after: auto;
                    }
                }

                @media screen {
                    .rfq-document-page {
                        background: white;
                        width: 210mm;
                        height: 297mm;
                        margin: 0 auto 30px;
                        padding: 10mm;
                        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                        box-sizing: border-box;
                        border-radius: 4px;
                        display: flex;
                        flex-direction: column;
                    }
                }

                /* MASTER LAYOUT STYLES */
                .master-print-container {
                    width: 100%;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    border: 1.5px solid black;
                    box-sizing: border-box;
                    background: white;
                }

                .master-header {
                    flex: 0 0 auto;
                }

                .master-body {
                    flex: 0 0 auto;
                    display: flex;
                    flex-direction: column;
                }

                .master-footer {
                    flex: 0 0 auto;
                }

                /* GRID TABLES */
                table.print-grid-table {
                    width: 100%;
                    border-collapse: collapse;
                    table-layout: fixed;
                    border: none !important;
                }
                tr.grid-header th {
                    border: 1px solid black;
                    border-top: 1.5px solid black;
                    padding: 8px 6px;
                    background: #f1f5f9;
                    font-weight: bold;
                    font-size: 10px;
                    text-align: center;
                }
                tr.grid-row td {
                    border-left: 1px solid black;
                    border-right: 1px solid black;
                    border-top: 1px solid black;
                    padding: 6px;
                    font-size: 10px;
                    word-wrap: break-word;
                }

                /* Remove side borders on grid cells that touch the master frame */
                tr.grid-header th:first-child, tr.grid-row td:first-child { border-left: none !important; }
                tr.grid-header th:last-child, tr.grid-row td:last-child { border-right: none !important; }

                @media print {
                    .signature-section,
                    .terms-charges-section,
                    .net-amount-section {
                        page-break-inside: avoid;
                    }
                    tr {
                        page-break-inside: avoid;
                        break-inside: avoid;
                    }
                }
            `}),(()=>{let x=0;return g.map((r,l)=>{const h=x;return x+=r.length,t.jsx("div",{className:"rfq-document-page",children:t.jsx(W,{formData:i,rfqData:d,items:r,formatQty:s,isLastPage:l===g.length-1,pageNo:l+1,totalPages:g.length,startIndex:h})},l)})})()]})};export{I as default};
