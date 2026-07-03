import{c as N,j as e,k as b}from"./index-BYh0kC1A.js";const y=({formService:j})=>{var c,m,x,p,h;const{formData:t,selectedCompanyInfo:a}=j,{config:n}=N(),l=i=>{var s;return i!=null?Number(i).toFixed(((s=n==null?void 0:n.Qty)==null?void 0:s.PrecisionDefault)||3):"-"},r=i=>{var s;return i?b(i).format(((s=n==null?void 0:n.Date)==null?void 0:s.ViewFormat)||"DD/MM/YYYY"):"-"},d=i=>i!=null?Number(i).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"-",o=(t==null?void 0:t.purchaseRequestItemDetail)||[],g=o.reduce((i,s)=>i+(Number(s.amount)||0),0);return e.jsxs("div",{className:"pr-print-wrapper",children:[e.jsx("style",{children:`
                .pr-print-wrapper {
                    width: 100%;
                    background: #f0f0f0;
                    padding: 20px 0;
                    font-family: Arial, Helvetica, sans-serif;
                    color: black;
                }

                @media print {
                    .pr-print-wrapper { background: white !important; padding: 0 !important; min-height: auto !important; width: 100% !important; }
                    #print-area { position: static !important; display: block !important; width: 100% !important; margin: 0 !important; }
                    .pr-document-page { margin: 0 !important; box-shadow: none !important; width: 100% !important; max-width: none !important; padding: 0 !important; }
                }

                @media screen {
                    .pr-document-page {
                        background: white;
                        width: 210mm;
                        margin: 0 auto;
                        padding: 8mm;
                        box-shadow: 0 0 15px rgba(0,0,0,0.2);
                        box-sizing: border-box;
                    }
                }

                table.master-print-container {
                    width: 100%;
                    border-collapse: collapse;
                    border: 1px solid #7f7f7f;
                    margin: 0 auto;
                    background-color: white;
                }

                .branding-section {
                    text-align: center;
                    padding: 5px;
                }

                .company-name {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .company-address {
                    font-size: 13px;
                    margin-bottom: 3px;
                }

                .company-cin {
                    font-size: 13px;
                    margin-bottom: 5px;
                }

                .document-title {
                    font-size: 16px;
                    font-weight: bold;
                    text-decoration: none;
                    margin-top: 1px;
                }

                .info-section {
                    display: flex;
                    border-top: 1px solid #7f7f7f;
                    border-bottom: 1px solid #7f7f7f;
                }

                .info-column {
                    flex: 1;
                    padding: 8px 15px;
                }

                .info-column:first-child {
                    border-right: 1px solid #7f7f7f;
                }

                .info-item {
                    display: flex;
                    font-size: 12px;
                    margin-bottom: 4px;
                    line-height: 1.4;
                }

                .info-label {
                    font-weight: bold;
                    width: 120px;
                    text-align: left;
                }

                .info-value {
                    flex: 1;
                    text-align: left;
                }

                .instruction-text {
                    padding: 8px 10px;
                    font-size: 11px;
                    border-bottom: 1px solid #7f7f7f;
                    font-style: normal;
                }

                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .items-table th {
                    background-color: #d1d5db; /* Grey header */
                    font-size: 11px;
                    font-weight: bold;
                    border: 1px solid #7f7f7f;
                    padding: 8px 4px;
                    text-align: center;
                }

                .items-table td {
                    border: 1px solid #7f7f7f;
                    padding: 6px 4px;
                    font-size: 11px;
                    vertical-align: top;
                }

                .item-details-cell {
                    line-height: 1.5;
                }

                .item-code { font-weight: bold; margin-bottom: 4px; }
                .item-name { font-weight: bold; }
                .item-sub-info { font-size: 10px; color: #333; margin-top: 2px; }

                .text-right { text-align: right; }
                .text-center { text-align: center; }

                .summary-row {
                    background-color: #d1d5db;
                    font-weight: bold;
                }

                .signature-section {
                    display: flex;
                    justify-content: space-around;
                    padding: 40px 10px 20px 10px;
                }

                .signature-box {
                    text-align: center;
                    min-width: 200px;
                }

                .signature-name {
                    font-size: 13px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .signature-label {
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    border-top: 1px solid transparent;
                }
            `}),e.jsx("div",{className:"pr-document-page",children:e.jsxs("table",{className:"master-print-container",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsxs("td",{colSpan:1,children:[e.jsxs("div",{className:"branding-section",children:[e.jsx("div",{className:"company-name",children:(a==null?void 0:a.printingName)||"-"}),e.jsx("div",{className:"company-address",children:(a==null?void 0:a.fullAddress)||t.companyAddress||"-"}),e.jsxs("div",{className:"company-cin",children:["CIN No :- ",(a==null?void 0:a.cinNo)||t.companyCINNo||"-"]}),e.jsx("div",{className:"document-title",children:"Purchase Request"})]}),e.jsxs("div",{className:"info-section",children:[e.jsxs("div",{className:"info-column",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Department"}),e.jsxs("span",{className:"info-value",children:[": ",t.departmentName||((c=t.department)==null?void 0:c.departmentName)||"-"]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Division"}),e.jsxs("span",{className:"info-value",children:[": ",t.divisionName||((m=t.division)==null?void 0:m.divisionName)||"-"]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Doc. Type"}),e.jsxs("span",{className:"info-value",children:[": ",t.docTypeName||((x=t.docType)==null?void 0:x.docTypeName)||"-"]})]})]}),e.jsxs("div",{className:"info-column",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Pur. Req. No."}),e.jsxs("span",{className:"info-value",children:[": ",t.docNoYearly||"-"]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Pur. Req. Date"}),e.jsxs("span",{className:"info-value",children:[": ",r(t.docDate)]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Approved Date"}),e.jsxs("span",{className:"info-value",children:[": ",r(t.authorizedDate)]})]})]})]}),e.jsx("div",{className:"instruction-text",children:"This material is required by the division(s) as per the priority indicated before them. Purchase Order may be raised to approved vendors for procuring material at the earliest."})]})})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{style:{padding:0},children:[e.jsxs("table",{className:"items-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"40px"},children:"SNo."}),e.jsx("th",{style:{width:"220px"},children:"Item Details"}),e.jsx("th",{style:{width:"50px"},children:"UOM"}),e.jsx("th",{style:{width:"70px"},children:"Schedule Date"}),e.jsx("th",{style:{width:"70px"},children:"Required Qty."}),e.jsx("th",{style:{width:"70px"},children:"Pur. Req. Qty."}),e.jsx("th",{style:{width:"80px"},children:"Rate"}),e.jsx("th",{style:{width:"80px"},children:"Amount"}),e.jsx("th",{style:{width:"70px"},children:"Priority"}),e.jsx("th",{children:"Cost Center"})]})}),e.jsxs("tbody",{children:[o.map((i,s)=>{var f,u;return e.jsxs("tr",{children:[e.jsx("td",{className:"text-center",children:s+1}),e.jsxs("td",{className:"item-details-cell",children:[e.jsx("div",{className:"item-code",children:i.itemCode||((f=i.item)==null?void 0:f.itemCode)||""}),e.jsx("div",{className:"item-name",children:i.itemName||((u=i.item)==null?void 0:u.itemName)||""}),e.jsxs("div",{className:"item-sub-info",children:[e.jsx("strong",{children:"Make : "}),i.makeName||"-"]}),e.jsxs("div",{className:"item-sub-info",children:[e.jsx("strong",{children:"Tech. Specification : "}),i.techSpecification||""]}),e.jsxs("div",{className:"item-sub-info",children:[e.jsx("strong",{children:"Remark : "}),i.remarks||""]})]}),e.jsx("td",{className:"text-center",children:i.unitAlias||""}),e.jsx("td",{className:"text-center",children:r(i.scheduleDate)}),e.jsx("td",{className:"text-right",children:l(i.requiredQty)}),e.jsx("td",{className:"text-right",children:l(i.prQty)}),e.jsx("td",{className:"text-right",children:d(i.rate)}),e.jsx("td",{className:"text-right",children:d(i.amount)}),e.jsx("td",{className:"text-center",children:i.priority||"-"}),e.jsx("td",{children:i.costCenterName||""})]},s)}),e.jsxs("tr",{className:"summary-row",children:[e.jsxs("td",{colSpan:2,children:["Document Remark : ",t.remarks||""]}),e.jsx("td",{colSpan:5,className:"text-right",children:"Total Value : "}),e.jsx("td",{className:"text-right",children:d(t.netAmount||g)}),e.jsx("td",{colSpan:3})]})]})]}),e.jsxs("div",{className:"signature-section",children:[e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"signature-name",children:((p=t.createdBy)==null?void 0:p.displayName)||t.createdByName||"-"}),e.jsx("div",{className:"signature-label",children:"Created By"})]}),e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"signature-name",children:((h=t.authorizedBy)==null?void 0:h.displayName)||t.authorizedByName||"-"}),e.jsx("div",{className:"signature-label",children:"AUTHORIZED BY"})]})]})]})})})]})})]})};export{y as default};
