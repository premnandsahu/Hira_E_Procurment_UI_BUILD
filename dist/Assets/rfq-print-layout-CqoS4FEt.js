import{a3 as y,bR as f,c as u,j as e,k as a,r as l,A as N,g as w,a as S}from"./index-CcfvtG5A.js";const c=()=>{const{userProfileData:t}=l.useContext(N),[s,i]=l.useState(null);return l.useEffect(()=>{(async()=>{const r=await w("companies")+`/info/${t==null?void 0:t.headOffice[0].id}`,d=await S({endpoint:r});i(d)})()},[t]),e.jsxs("div",{style:{borderBottom:"1pt solid black",padding:"10px 15px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",letterSpacing:"0.05em"},children:s==null?void 0:s.printingName}),e.jsx("div",{style:{fontSize:"11px",lineHeight:"1.4",marginTop:"4px"},children:s==null?void 0:s.fullAddress})]})},p=()=>e.jsx("div",{style:{borderBottom:"1pt solid black",padding:"6px 15px",textAlign:"center",fontSize:"15px",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Request For Quotation"}),x=({rfqItemDetail:t,formatQty:s})=>e.jsxs("div",{children:[e.jsx("h2",{style:{fontWeight:"bold",fontSize:"13px",padding:"8px 10px",margin:0,textTransform:"uppercase"},children:"Item Detail"}),e.jsxs("table",{className:"print-grid-table",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"grid-header",children:[e.jsx("th",{style:{width:"40px"},children:"Sl."}),e.jsx("th",{style:{width:"110px"},children:"Code"}),e.jsx("th",{children:"Description"}),e.jsx("th",{style:{width:"50px"},children:"Make"}),e.jsx("th",{style:{width:"50px"},children:"UOM"}),e.jsx("th",{style:{width:"120px"},children:"Qty."})]})}),e.jsx("tbody",{children:t==null?void 0:t.map((i,n)=>e.jsxs("tr",{className:"grid-row",children:[e.jsx("td",{style:{textAlign:"left",verticalAlign:"top"},children:n+1}),e.jsx("td",{style:{textAlign:"left",verticalAlign:"top"},children:i.itemCode}),e.jsxs("td",{style:{verticalAlign:"top"},children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:i.itemName}),(i.techSpecification||i.remarks)&&e.jsxs("div",{className:"item-secondary-info",children:[i.techSpecification&&e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"Spec:"})," ",i.techSpecification]}),i.remarks&&e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold",fontStyle:"italic"},children:"Rem:"})," ",i.remarks]})]})]}),e.jsx("td",{style:{textAlign:"left",verticalAlign:"top"},children:i.makeName}),e.jsx("td",{style:{textAlign:"left",verticalAlign:"top"},children:i.unitCode}),e.jsx("td",{style:{textAlign:"right",verticalAlign:"top"},children:s(i.qty)})]},n))})]})]}),h=({rfqTNCDetail:t})=>e.jsxs("div",{className:"tnc-section",children:[e.jsx("h2",{style:{fontWeight:"bold",fontSize:"12px",textTransform:"uppercase",marginBottom:"8px"},children:"Terms & Conditions :"}),t==null?void 0:t.map((s,i)=>e.jsxs("div",{className:"tnc-row",children:[e.jsx("span",{className:"tnc-head",children:s.tncHeadName}),e.jsxs("span",{className:"tnc-value",children:[": ",s.tncValue]})]},i))]}),m=({remarks:t})=>t&&e.jsxs("div",{className:"remarks-section",children:[e.jsx("span",{style:{fontWeight:"bold"},children:"REMARKS :"}),e.jsx("span",{children:t})]}),g=({companyName:t,createdBy:s,authorizedBy:i})=>e.jsxs("div",{className:"signature-section",children:[e.jsx("div",{style:{textAlign:"right",paddingRight:"10px",marginBottom:"100px"},children:e.jsxs("span",{style:{fontWeight:"bold",fontSize:"13px"},children:["For, ",t]})}),e.jsxs("div",{className:"signature-names",children:[e.jsxs("div",{className:"signature-row",children:[e.jsx("div",{className:"signature-name",children:(s==null?void 0:s.displayName)||"-"}),e.jsx("div",{className:"signature-label",children:"Created By"})]}),e.jsxs("div",{className:"signature-row right",children:[e.jsx("div",{className:"signature-name",children:(i==null?void 0:i.displayName)||"-"}),e.jsx("div",{className:"signature-label",children:"Authorized By"})]})]})]}),v=({formData:t,formatQty:s})=>e.jsxs("table",{className:"master-print-container",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsxs("td",{className:"master-content-cell border-bottom-none",children:[e.jsx(c,{}),e.jsx(p,{}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:"1pt solid black",fontSize:"11px",padding:"8px 15px"},children:[e.jsxs("span",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"ENQUIRY NO:"})," ",t.docNoYearly]}),e.jsxs("span",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"ENQUIRY DATE:"})," ",t.docDate?a(t.docDate).format("DD/MM/YYYY"):"-"]}),e.jsxs("span",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"DUE DATE:"})," ",t.dueDate?a(t.dueDate).format("DD/MM/YYYY"):"-"]})]})]})})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{className:"master-content-cell no-border-top",children:[e.jsx(x,{rfqItemDetail:t.rfqItemDetail,formatQty:s}),t.rfqVendorDetail&&t.rfqVendorDetail.length>0&&e.jsxs("div",{children:[e.jsx("h2",{style:{fontWeight:"bold",fontSize:"13px",padding:"8px 10px",textTransform:"uppercase",margin:0},children:"Vendor Detail"}),e.jsxs("table",{className:"print-grid-table",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"grid-header",children:[e.jsx("th",{style:{width:"45px"},children:"SL."}),e.jsx("th",{style:{width:"25%"},children:"Vendor Name"}),e.jsx("th",{style:{width:"40%"},children:"Vendor Address"}),e.jsx("th",{children:"Contact Detail"})]})}),e.jsx("tbody",{children:t.rfqVendorDetail.map((i,n)=>e.jsxs("tr",{className:"grid-row",children:[e.jsx("td",{style:{textAlign:"left"},children:n+1}),e.jsxs("td",{style:{padding:"8px"},children:[e.jsx("div",{style:{fontSize:"11px"},children:i.vendorName}),i.email&&e.jsx("div",{style:{fontStyle:"italic",fontSize:"10px"},children:i.email})]}),e.jsx("td",{style:{padding:"8px"},children:i.vendorLocationName}),e.jsxs("td",{style:{padding:"8px"},children:[i.contactPersonName&&e.jsx("div",{style:{fontSize:"11px"},children:i.contactPersonName}),i.contactNo&&e.jsx("div",{style:{fontSize:"10px"},children:i.contactNo}),i.contactEmail&&e.jsx("div",{style:{fontSize:"10px",fontStyle:"italic"},children:i.contactEmail})]})]},n))})]})]}),e.jsx(h,{rfqTNCDetail:t.rfqTNCDetail}),e.jsx(m,{remarks:t.remarks}),e.jsx(g,{companyName:t.companyName,createdBy:t.createdBy,authorizedBy:t.authorizedBy})]})})})]}),k=({formData:t,vendorIndex:s,formatQty:i})=>{var r;const n=(r=t.rfqVendorDetail)==null?void 0:r[s];return e.jsxs("table",{className:"master-print-container",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsxs("td",{className:"master-content-cell border-bottom-none",children:[e.jsx(c,{companyName:t.companyName}),e.jsx(p,{}),e.jsxs("div",{style:{display:"flex",borderBottom:"1pt solid black",fontSize:"11px",padding:"8px 15px"},children:[e.jsxs("div",{style:{flex:1,display:"flex",gap:"25px"},children:[e.jsxs("span",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"ENQUIRY NO:"})," ",t.docNoYearly]}),e.jsxs("span",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"ENQUIRY DATE:"})," ",t.docDate?a(t.docDate).format("DD/MM/YYYY"):"-"]})]}),e.jsxs("div",{style:{fontWeight:"bold"},children:["DUE DATE: ",t.dueDate?a(t.dueDate).format("DD/MM/YYYY"):"-"]})]})]})})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{className:"master-content-cell no-border-top",children:[e.jsxs("div",{style:{borderBottom:"1pt solid black",padding:"12px 15px",fontSize:"13px"},children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:"To,"}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"15px"},children:n==null?void 0:n.vendorName}),e.jsx("div",{style:{whiteSpace:"pre-wrap",margin:"4px 0"},children:n==null?void 0:n.vendorLocationName}),e.jsxs("div",{style:{display:"flex",marginTop:"10px",gap:"30px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"Email:"})," ",n==null?void 0:n.email]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:"Kind Atten.:"}),e.jsxs("span",{children:[" ",n==null?void 0:n.contactPersonName,(n==null?void 0:n.contactEmail)&&` (${n.contactEmail})`,(n==null?void 0:n.contactNo)&&` (${n.contactNo})`]})]})]})]}),e.jsxs("div",{style:{padding:"12px 15px",borderBottom:"1pt solid black",fontSize:"12px"},children:[e.jsx("p",{style:{fontWeight:"bold",marginBottom:"6px"},children:"Dear Sir ,"}),e.jsx("p",{style:{lineHeight:"1.5"},children:"We are pleased to place our enquiry for your rate for the following items. Please submit your quotation immediately along with technical data and other particular as delivery period, rate, tax discount and condition etc. with full literature."})]}),e.jsx(x,{rfqItemDetail:t.rfqItemDetail,formatQty:i}),e.jsx(h,{rfqTNCDetail:t.rfqTNCDetail}),e.jsx(m,{remarks:t.remarks}),e.jsx(g,{companyName:t.companyName,createdBy:t.createdBy,authorizedBy:t.authorizedBy})]})})})]})},E=({formService:t})=>{const{formData:s}=t,{templateKey:i}=y(),[n]=f(),{config:r}=u(),d=i==="vendor_wise",j=parseInt(n.get("vendorIndex")||"0"),o=b=>Number(b||0).toFixed(r.Qty.PrecisionDefault||3);return e.jsxs("div",{className:"rfq-print-wrapper",children:[e.jsx("style",{children:`
                /* RESET & BASE */
                .rfq-print-wrapper {
                    width: 100%;
                    background: #f0f0f0;
                    min-height: 100vh;
                    padding: 20px 0;
                    font-family: Arial, Helvetica, sans-serif;
                    color: black;
                }

                @media print {
                    @page { 
                        size: A4 portrait; 
                        margin: 8mm !important; 
                    }
                    
                    .rfq-print-wrapper { background: white !important; padding: 0 !important; min-height: auto !important; width: 100% !important; }
                    
                    #print-area { 
                        position: static !important; 
                        display: block !important; 
                        width: 100% !important; 
                        margin: 0 !important; 
                    }
                    #print-area * { 
                        visibility: visible !important; 
                        color: black !important; 
                        background: transparent !important; 
                    }

                    .rfq-document-page { 
                        margin: 0 !important; 
                        box-shadow: none !important; 
                        width: 100% !important; 
                        max-width: none !important; 
                        padding: 0 !important; 
                    }
                }

                @media screen {
                    .rfq-document-page {
                        background: white;
                        width: 210mm;
                        min-height: 297mm;
                        margin: 0 auto;
                        padding: 8mm;
                        box-shadow: 0 0 15px rgba(0,0,0,0.2);
                        box-sizing: border-box;
                    }
                }

                /* MASTER LAYOUT STYLES */
                table.master-print-container {
                    width: 100%;
                    border-collapse: collapse;
                    display: table;
                    border: 1pt solid black !important; /* Force outer frame */
                }
                thead { display: table-header-group; }
                tbody { display: table-row-group; }

                .master-content-cell {
                    border: none; /* Let the table container provide the frame */
                    padding: 0;
                    vertical-align: top;
                }

                /* GRID TABLES - REMOVE OVERLAPPING BORDERS */
                table.print-grid-table {
                    width: 100%;
                    border-collapse: collapse;
                    table-layout: fixed;
                    border: none !important; /* Remove outer table border to prevent doubling */
                }
                tr.grid-header th {
                    border: 1pt solid black;
                    padding: 6px 8px;
                    background: #f9f9f9;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 11px;
                }
                tr.grid-row td {
                    border: 1pt solid black;
                    padding: 8px 8px;
                    font-size: 11px;
                    word-wrap: break-word;
                }

                /* Remove side borders on grid cells that touch the master frame */
                tr.grid-header th:first-child, tr.grid-row td:first-child { border-left: none !important; }
                tr.grid-header th:last-child, tr.grid-row td:last-child { border-right: none !important; }
                
                /* T&C and Remarks also touch the frame */
                .tnc-section, .remarks-section, .signature-section {
                    border-left: none !important;
                    border-right: none !important;
                }

                /* SECTION STYLES */
                .item-secondary-info {
                    font-size: 11px;
                    margin-top: 4px;
                    line-height: 1.4;
                    color: #333;
                }
                .tnc-section {
                    padding: 12px 15px;
                    page-break-inside: avoid;
                }
                .tnc-row {
                    display: flex;
                    font-size: 11px;
                    margin-bottom: 4px;
                }
                .tnc-head { width: 140px; fontWeight: bold; text-transform: uppercase; }
                .tnc-value { flex: 1; }

                .remarks-section {
                    padding: 8px 15px;
                    border-top: 1pt solid black;
                    font-size: 12px;
                    display: flex;
                    gap: 10px;
                    page-break-inside: avoid;
                }

                .signature-section {
                    padding: 15px;
                    border-top: 1pt solid black;
                    page-break-inside: avoid;
                }
                .signature-names {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin: 0 40px;
                }
                .signature-row { 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    text-align: center;
                    min-width: 150px;
                }
                .signature-name { 
                    // text-decoration: underline; 
                    // text-decoration-style: double; 
                    // margin-bottom: 10px;
                    font-weight: normal;
                }
                .signature-label {
                    text-decoration: none;
                }

            `}),e.jsx("div",{className:"rfq-document-page",children:d?e.jsx(k,{formData:s,vendorIndex:j,formatQty:o}):e.jsx(v,{formData:s,formatQty:o})})]})};export{E as default};
