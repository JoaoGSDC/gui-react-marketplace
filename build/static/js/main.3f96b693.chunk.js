(this["webpackJsonpgui-react-marketplace"]=this["webpackJsonpgui-react-marketplace"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.4ddbf19d.png"},44:function(e,t,a){e.exports=a.p+"static/media/ninja.13345793.png"},50:function(e,t,a){e.exports=a(83)},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),o=a(12),l=a(2),m=a(14),s=a(22),p=a.n(s),d=a(9),u=Object(d.a)({nav:{display:"flex",alignItems:"center",padding:"5px 50px 5px 15px",backgroundColor:"#ff8000",justifyContent:"space-between",boxShadow:"0px 5px 10px rgba(0, 0, 0, 0.1)"},logo:{height:"75px"},cart:{display:"flex",fontSize:"20px",alignItems:"center",color:"rgba(0, 0, 0, 0.6)",textDecoration:"none","&:hover":{cursor:"pointer",color:"rgba(0, 0, 0, 0.7)"}},cartText:{display:"flex"},svg:{marginRight:"15px"},"@media (max-width: 600px)":{cartText:{display:"none"}}}),g=function(){var e=u();return r.a.createElement("nav",{className:e.nav},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:p.a,alt:"logo",className:e.logo})),r.a.createElement(o.b,{className:e.cart,to:"/cart"},r.a.createElement(m.b,{className:e.svg,size:"40"}),r.a.createElement("label",{className:e.cartText},"Carrinho")))},x=function(){return r.a.createElement("div",null,r.a.createElement(g,null))},f=a(25),b=a(19),h=a.n(b),E=a(11),N=Object(d.a)({imgSize:{height:"150px"},card:{margin:"15px",width:"300px",padding:"10px",height:"300px",display:"flex",textAlign:"center",borderRadius:"3px",alignItems:"center",flexDirection:"column",backgroundColor:"#dadada",transition:"transform 0.2s",backgroundImage:"linear-gradient(#f3f3f3, #e0e0e0)","&:hover":{transform:"scale(1.1)"}},product:{display:"flex",flex:"1 0 21%",justifyContent:"center"},productText:{margin:"15px"},textLink:{display:"flex",fontSize:"20px",alignItems:"center",textDecoration:"none",justifyContent:"center",color:"rgba(0, 0, 0, 0.6)","&:hover":{cursor:"pointer",color:"#ff8000"}},"@media (max-width: 600px)":{card:{width:"calc(100% - 50px)",margin:"15px 10px 15px 7px"}}}),v=function(e){var t=N();return r.a.createElement("div",{className:t.product},r.a.createElement("div",{className:t.card},r.a.createElement(o.b,{to:"/details/".concat(e.id)},r.a.createElement("img",{className:t.imgSize,src:e.image,alt:"product"})),r.a.createElement(o.b,{className:t.textLink,to:"/details/".concat(e.id)},r.a.createElement("label",{className:t.productText},e.name)),r.a.createElement("label",{className:t.productText},"R$ ",e.price.toFixed(2).toString().replace(".",",")),r.a.createElement("button",{onClick:e.onClick},"Comprar")))},y=Object(d.a)({home:{margin:"30px",borderRadius:"5px",backgroundColor:"#f7f7f7",boxShadow:"0 0px 7px rgba(0, 0, 0, 0.3)"},searchContainer:{display:"flex",marginLeft:"30px",marginTop:"-15px",color:"#ff8000"},inputWidth:{width:"calc(100% - 90px)"},productsContainer:{display:"flex",flexWrap:"wrap"},imgs:{display:"flex",alignItems:"center",flexDirection:"column",borderRadius:"5px",backgroundColor:"#dadada",backgroundImage:"linear-gradient(#ffffff, #cecece)"},imgsNinja:{height:"400px",animation:"0.75s ease-out 0s 1 slideInFromRight"},imgsLogo:{height:"300px",marginTop:"-125px",animation:"0.75s ease-out 0s 1 slideInFromLeft"},"@keyframes slideInFromLeft":{"0%":{transform:"translateX(-100%)"},"100%":{transform:"translateX(0)"}},"@keyframes slideInFromRight":{"0%":{transform:"translateX(100%)"},"100%":{transform:"translateX(0)"}},"@media (max-width: 600px)":{imgsNinja:{height:"200px"},imgsLogo:{height:"100px",marginTop:"-50px"}}}),C=a(44),j=a.n(C),O=function(){var e=y(),t=Object(E.c)((function(e){return e.data})),a=Object(E.b)(),i=Object(l.e)(),c="http://localhost:3001/products",o=Object(n.useState)([]),s=Object(f.a)(o,2),d=s[0],u=s[1];return Object(n.useEffect)((function(){h.a.get(c).then((function(e){u(e.data)}))}),[]),r.a.createElement("div",{className:e.home},r.a.createElement("div",{className:e.imgs},r.a.createElement("img",{className:e.imgsNinja,src:j.a,alt:"ninja"}),r.a.createElement("img",{className:e.imgsLogo,src:p.a,alt:"logo"})),r.a.createElement("div",{className:e.searchContainer},r.a.createElement("input",{type:"text",className:e.inputWidth,placeholder:"Pesquisar...",onChange:function(e){var t=isNaN(Number(e.target.value))||""===e.target.value?"".concat(c,"?q=").concat(e.target.value):"".concat(c,"?id=").concat(e.target.value);h.a.get(t).then((function(e){u(e.data)}))}}),r.a.createElement(m.a,{size:"40"})),r.a.createElement("div",{className:e.productsContainer},d.map((function(e){return r.a.createElement(v,{key:e.id,id:e.id,image:e.image,name:e.name,price:e.price,onClick:function(){return function(e){t.find((function(t){return t.id===e.id}))||(e.amount=1,a({type:"ADD_PRODUCT",product:e}),i.push("/cart"))}(e)}})}))))},D=a(48),R=Object(d.a)({cardCart:{margin:"30px",display:"flex",borderRadius:"5px",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"#f7f7f7",padding:"30px 45px 15px 45px",boxShadow:"0 0px 7px rgba(0, 0, 0, 0.3)"},textCart:{display:"flex",alignItems:"center",marginBottom:"15px"},svg:{marginRight:"15px","&:hover":{transition:"0.2s",cursor:"pointer",color:"#3e3e3e"}},amountInput:{marginTop:"15px"},productItem:{width:"100%",display:"flex",borderRadius:"3px",alignItems:"center",margin:"0 10px 15px 10px",border:"1px solid #c3c3c3",backgroundColor:"#f5f5f5",padding:"15px 20px 15px 20px",justifyContent:"space-between"},productImg:{width:"270px",height:"150px",marginRight:"30px",border:"1px solid #e6e6e6"},containerImg:{display:"flex"},containerFields:{display:"flex",flexDirection:"column"},productName:{display:"flex",fontSize:"22px",marginTop:"30px",color:"#181818",alignItems:"center",justifyContent:"space-between"},inputNumberButtons:{width:"40px",height:"100%"},inputNumber:{textAlign:"right"},textPrice:{marginTop:"0px"},"@media (max-width: 600px)":{containerImg:{flexDirection:"column"},productImg:{width:"auto",height:"110px",marginRight:"0px"},productItem:{flexDirection:"column"},textPrice:{fontSize:"24px",marginTop:"15px"}}}),k=function(){var e=R(),t=Object(E.c)((function(e){return e.data})),a=Object(E.b)();function n(e,t){var n=t.amount,r={Add:function(){return n>=30?n:n+1},Reduce:function(){return n<=1?n:n-1}};t.amount=r[e](),a({type:"UPDATE_AMOUNT_PRODUCT",product:t})}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.cardCart},0===t.length?r.a.createElement("label",{className:e.textCart},r.a.createElement(m.b,{className:e.svg,size:"40"}),"Nenhum produto adicionado ao carrinho."):t.map((function(i){return r.a.createElement("div",{className:e.productItem,key:i.id},r.a.createElement("label",{className:e.containerImg},r.a.createElement("img",{className:e.productImg,src:i.image,alt:"product"}),r.a.createElement("div",{className:e.containerFields},r.a.createElement("label",{className:e.productName},i.name,r.a.createElement("label",{onClick:function(){return function(e){var n=t.indexOf(e);t.splice(n,1),a({type:"DELETE_PRODUCT",i:n})}(i)}},r.a.createElement(m.c,{className:e.svg,size:"16"}))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:e.inputNumberButtons,onClick:function(){return n("Reduce",i)}},"-"),r.a.createElement(D.a,{className:e.inputNumber,min:1,max:30,step:1,value:i.amount,readOnly:!0}),r.a.createElement("button",{type:"button",className:e.inputNumberButtons,onClick:function(){return n("Add",i)}},"+")))),r.a.createElement("label",{className:e.textPrice},"R$ ",i.price.toFixed(2).toString().replace(".",",")))}))))},w=Object(d.a)({details:{margin:"30px",padding:"30px",borderRadius:"5px",backgroundColor:"#f7f7f7",boxShadow:"0 0px 7px rgba(0, 0, 0, 0.3)"},containerDetails:{display:"flex"},containerImgDetails:{padding:"5px",marginRight:"15px",borderRadius:"3px",flexDirection:"column",border:"1px solid #cecece"},nameProduct:{display:"flex",padding:"10px",color:"#ffffff",borderRadius:"3px",marginBottom:"15px",backgroundColor:"#ff8000"},imgHeight:{height:"350px"},containerDescription:{display:"flex",padding:"30px",borderRadius:"3px",flexDirection:"column",border:"1px solid #cecece"},price:{fontSize:"23px",textAlign:"right",margin:"30px 30px 30px 30px"},containerPrice:{display:"flex",marginBottom:"45px",alignItems:"center",flexDirection:"column"},nameProductMobile:{display:"none"},"@media (max-width: 600px)":{containerDetails:{flexDirection:"column"},containerImgDetails:{marginRight:0,marginBottom:"15px"},imgHeight:{height:"145px",width:"100%"},nameProduct:{display:"none"},nameProductMobile:{display:"flex",padding:"10px",color:"#ffffff",borderRadius:"3px",marginBottom:"15px",backgroundColor:"#ff8000"}}}),I=function(){var e=w(),t=Object(E.c)((function(e){return e.data})),a=Object(E.b)(),i=Object(l.e)(),c=Object(n.useState)([]),o=Object(f.a)(c,2),m=o[0],s=o[1];return Object(n.useEffect)((function(){!function(){var e=Number(window.location.href.split("/")[window.location.href.split("/").length-1]),t="".concat("http://localhost:3001/products","?id=").concat(e);h.a.get(t).then((function(e){s(e.data)}))}()}),[]),r.a.createElement("div",{className:e.details},m.map((function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.nameProductMobile},r.a.createElement("label",null,n.name)),r.a.createElement("div",{className:e.containerDetails},r.a.createElement("div",{className:e.containerImgDetails},r.a.createElement("img",{className:e.imgHeight,src:n.image,alt:"produto"})),r.a.createElement("div",{className:e.containerDescription},r.a.createElement("div",{className:e.nameProduct},r.a.createElement("label",null,n.name)),r.a.createElement("div",{className:e.containerPrice},r.a.createElement("label",{className:e.price},"R$ ",n.price.toFixed(2).toString().replace(".",",")),r.a.createElement("button",{type:"button",onClick:function(){return function(e){t.find((function(t){return t.id===e.id}))||(e.amount=1,a({type:"ADD_PRODUCT",product:e}),i.push("/cart"))}(n)}},"Comprar")),r.a.createElement("label",null,n.description))))})))};var T=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{path:"/",component:x}),r.a.createElement(l.a,{path:"/",exact:!0,component:O}),r.a.createElement(l.a,{path:"/cart",component:k}),r.a.createElement(l.a,{path:"/details",component:I}))},P=a(49),S=a(15),A=a(24),F={data:[]},z=Object(A.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":return Object(S.a)(Object(S.a)({},e),{},{data:[].concat(Object(P.a)(e.data),[t.product])});case"DELETE_PRODUCT":return Object(S.a)(Object(S.a)({},e),{},{data:e.data.filter((function(e,a){return a!==t.product}))});case"UPDATE_AMOUNT_PRODUCT":return console.log(t),console.log(e.data),e.data.map((function(e,a){e.id===t.product.id&&(e=t.product)})),console.log(e.data),Object(S.a)(Object(S.a)({},e),{},{data:e.data});default:return e}})),U=Object(d.a)({"@global":{"@import":"url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')",html:{margin:0,padding:0,backgroundColor:"#0272cc",fontFamily:"'Roboto', sans-serif"},body:{margin:0,padding:0,backgroundColor:"#0272cc",fontFamily:"'Roboto', sans-serif"},input:{height:"40px",color:"#030303",fontSize:"16px",borderRadius:"3px",padding:"0 10px 0 10px",border:"2px solid #ffa850",backgroundColor:"#ffffff"},button:{height:"40px",width:"150px",transition:"0.2s",fontWeight:700,borderRadius:"3px",border:"1px solid #c6c6c6",color:"rgba(0, 0, 0, 0.7)",backgroundColor:"#ff8000","&:hover":{cursor:"pointer",backgroundColor:"#e87500"}}}}),L=function(){return U(),r.a.createElement(E.a,{store:z},r.a.createElement("div",{className:"App"},r.a.createElement(T,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.3f96b693.chunk.js.map