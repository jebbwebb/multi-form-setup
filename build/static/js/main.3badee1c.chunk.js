(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/icon-arcade.e999314c.svg"},14:function(e,t,a){e.exports=a.p+"static/media/icon-advanced.4f6f45aa.svg"},15:function(e,t,a){e.exports=a.p+"static/media/icon-pro.9321837a.svg"},35:function(e,t,a){e.exports=a.p+"static/media/icon-thank-you.a80e58e4.svg"},36:function(e,t,a){e.exports=a(51)},43:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(31),r=a.n(c),m=a(3);function o(){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("h3",null,"STEP 1")," ",l.a.createElement("p",null,"YOUR INFO")),l.a.createElement("li",null,l.a.createElement("h3",null,"STEP 2")," ",l.a.createElement("p",null,"Select Plan")),l.a.createElement("li",null,l.a.createElement("h3",null,"STEP 3")," ",l.a.createElement("p",null,"Add ons")),l.a.createElement("li",null,l.a.createElement("h3",null,"STEP 4")," ",l.a.createElement("p",null,"Summary"))))}a(43);var i=a(6),u=a(0),s=a(23),d=Object(s.b)({name:"counter",initialState:{time:!1,value:0,name:"",plan:"",addOns:[]},reducers:{increment:function(e,t){e.plan=t.payload},decrement:function(e,t){e.name=t.payload},incrementByAmount:function(e,t){e.value=t.payload},addOnName:function(e,t){e.addOns=t.payload},option:function(e){e.time=!0},removeOption:function(e){e.time=!1}}}),p=d.actions,E=p.increment,b=p.decrement,f=p.incrementByAmount,v=p.addOnName,h=p.option,y=p.removeOption,g=d.reducer;function N(e){var t=e.name,a=e.cost,n=e.text,c=e.id,r=e.handleStuff;return console.log(t),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Addon-container"},l.a.createElement("div",{className:"Addons"},l.a.createElement("div",{className:"addon"},l.a.createElement("label",{className:"addon-label",for:c},l.a.createElement("input",{className:"addon-input",type:"checkbox",name:t,value:a,id:c,"text-attribute":n,onClick:function(e){return r(e)}}),l.a.createElement("h2",null,t),l.a.createElement("p",null,n)),l.a.createElement("div",{className:"cost"},l.a.createElement("p",null,"+",a,"/mo"))))))}function O(e){var t=e.monthlyAdd,a=Object(u.l)(),n=[];console.log(n);var c=Object(i.b)(),r=function(e){var t={id:0,name:"",cost:0,text:""};if(e.target.checked)t.name=e.target.name,t.cost=e.target.value,t.id=e.target.id,t.text=e.target.getAttribute("text-attribute"),n.push(t);else{var a=n.findIndex(function(t){return t.id===e.target.id});n.splice(a,1)}console.log(n)},m=function(e){a("/summary")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content2"},l.a.createElement("div",{className:"content-text"},l.a.createElement("h1",null,"Pick add-ons"),l.a.createElement("p",null,"Add-ons help enchance your gaming experience.")),l.a.createElement("form",{onSubmit:function(){c(v(n)),m()}},t.map(function(e){return l.a.createElement(N,Object.assign({key:e.id},e,{handleStuff:r}))}),l.a.createElement("div",{className:"bottom-buttons2"},l.a.createElement("button",{onClick:function(){a("/selectplan")},className:"goBack",type:"button"},"Go Back"),l.a.createElement("button",{className:"nextStep",type:"submit"},"Next Step")))))}function x(e){var t={};return e.fullname.trim()||(t.fullname="This field is required"),e.emailAddress&&/\S+@\S+\.\S+/i.test(e.emailAddress)||(t.emailAddress="This field is required"),e.phoneNumber?e.phoneNumber.length<11&&(t.phoneNumber="This field is required"):t.phoneNumber="This field is required",t}var j=a(4),k=a(34),S=function(e,t){var a=Object(n.useState)({fullname:"",emailAddress:"",phoneNumber:""}),l=Object(m.a)(a,2),c=l[0],r=l[1],o=Object(n.useState)({}),i=Object(m.a)(o,2),u=i[0],s=i[1],d=Object(n.useState)(!1),p=Object(m.a)(d,2),E=p[0],b=p[1];return Object(n.useEffect)(function(){0===Object.keys(u).length&&E&&e()},[u]),{handleChange:function(e){var t=e.target,a=t.name,n=t.value;r(Object(k.a)({},c,Object(j.a)({},a,n)))},values:c,handleSubmit:function(e){e.preventDefault(),s(t(c)),b(!0)},errors:u}},C=function(e){var t=e.submitForm,a=S(t,x),n=a.handleChange,c=a.handleSubmit,r=a.values,m=a.errors;return l.a.createElement("div",{className:"content4"},l.a.createElement("div",{className:"content-4"},l.a.createElement("h1",null,"Personal Info"),l.a.createElement("p",null,"Please provide your name,email address, and phone number."),l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:c},l.a.createElement("label",null,l.a.createElement("div",{className:"info-text"},"Name",m.fullname&&l.a.createElement("p",null,m.fullname)),l.a.createElement("input",{type:"text",name:"fullname",placeholder:"e.g Stephen King",value:r.fullname,onChange:n})),l.a.createElement("label",null,l.a.createElement("div",{className:"info-text"},"Email Address",m.emailAddress&&l.a.createElement("p",null,m.emailAddress)),l.a.createElement("input",{type:"text",name:"emailAddress",placeholder:"e.g. stephenking@lorem.com",value:r.emailAddress,onChange:n})),l.a.createElement("label",null,l.a.createElement("div",{className:"info-text"},"Phone Number",m.phoneNumber&&l.a.createElement("p",null,m.phoneNumber)),l.a.createElement("input",{type:"number",name:"phoneNumber",placeholder:"e.g +1 234 567 890",value:r.phoneNumber,onChange:n})),l.a.createElement("div",{className:"info-next"},l.a.createElement("input",{id:"info-button",type:"submit",value:"Next Step"}))))))},A=a(24),T=a(13),L=a.n(T),w=a(14),I=a.n(w),P=a(15),B=a.n(P),F=L.a,$=I.a,q=B.a;function z(e){var t=e.yearlyOptions,a=e.handleStuff,c=Object(n.useState)("option2"),r=Object(m.a)(c,2),o=r[0],i=r[1],u=Object(n.useState)("option"),s=Object(m.a)(u,2),d=s[0],p=s[1],E=Object(n.useState)("option"),b=Object(m.a)(E,2),f=b[0],v=b[1];return l.a.createElement("div",{className:"options"},l.a.createElement("div",{className:o},l.a.createElement("label",{for:"planLabel"},l.a.createElement("span",null,l.a.createElement("input",{defaultChecked:!0,type:"radio",name:"plan",id:"planLabel",value:t[0].price,"text-attribute":t[0].planType,"name-attribute":t[0].name,onClick:function(e){return a(e)},onChange:function(){i("option2"),p("option"),v("option")}})),l.a.createElement("div",{className:"planImg"},l.a.createElement("img",{src:F})),l.a.createElement("div",{className:"planText"},l.a.createElement("h2",null,t[0].name),l.a.createElement("p",null,"$",t[0].price,"/yr"),l.a.createElement("span",null,"2 months free")))),l.a.createElement("div",{className:d},l.a.createElement("label",{for:"planLabel2"},l.a.createElement("input",{value:t[1].price,type:"radio",name:"plan","name-attribute":t[1].name,id:"planLabel2","text-attribute":t[1].planType,onClick:function(e){return a(e)},onChange:function(){p("option2"),i("option"),v("option")}}),l.a.createElement("div",{className:"planImg"},l.a.createElement("img",{src:$})),l.a.createElement("div",{className:"planText"},l.a.createElement("h2",null,t[1].name),l.a.createElement("p",null,"$",t[1].price,"/yr"),l.a.createElement("span",null,"2 months free")))),l.a.createElement("div",{className:f},l.a.createElement("label",{for:"planLabel3"},l.a.createElement("input",{value:t[2].price,type:"radio",name:"plan",id:"planLabel3","text-attribute":t[2].planType,"name-attribute":t[2].name,onClick:function(e){return a(e)},onChange:function(){v("option2"),i("option"),p("option")}}),l.a.createElement("div",{className:"planImg"},l.a.createElement("img",{src:q})),l.a.createElement("div",{className:"planText"},l.a.createElement("h2",null,t[2].name),l.a.createElement("p",null,"$",t[2].price,"/yr"),l.a.createElement("span",null,"2 months free")))))}var G=L.a,Y=I.a,W=B.a;function D(e){var t=e.monthlyOptions,a=e.handleStuff,c=Object(n.useState)("option2"),r=Object(m.a)(c,2),o=r[0],i=r[1],u=Object(n.useState)("option"),s=Object(m.a)(u,2),d=s[0],p=s[1],E=Object(n.useState)("option"),b=Object(m.a)(E,2),f=b[0],v=b[1];return l.a.createElement("div",{className:"options"},l.a.createElement("div",{className:o},l.a.createElement("label",{for:"planLabel"},l.a.createElement("span",null,l.a.createElement("input",{defaultChecked:!0,type:"radio",name:"plan",id:"planLabel",value:t[0].price,"text-attribute":t[0].planType,"name-attribute":t[0].name,onClick:function(e){return a(e)},onChange:function(){i("option2"),p("option"),v("option")}})),l.a.createElement("div",{className:"planImg"},l.a.createElement("img",{src:G})),l.a.createElement("div",{className:"planText"},l.a.createElement("h2",null,t[0].name),l.a.createElement("p",null,"$",t[0].price,"/mo")))),l.a.createElement("div",{className:d},l.a.createElement("label",{for:"planLabel2"},l.a.createElement("input",{value:t[1].price,type:"radio",name:"plan","name-attribute":t[1].name,id:"planLabel2","text-attribute":t[1].planType,onClick:function(e){return a(e)},onChange:function(){p("option2"),i("option"),v("option")}}),l.a.createElement("div",{className:"planImg"},l.a.createElement("img",{src:Y})),l.a.createElement("div",{className:"planText"},l.a.createElement("h2",null,t[1].name),l.a.createElement("p",null,"$",t[1].price,"/mo")))),l.a.createElement("div",{className:f},l.a.createElement("label",{for:"planLabel3"},l.a.createElement("input",{value:t[2].price,type:"radio",name:"plan",id:"planLabel3","text-attribute":t[2].planType,"name-attribute":t[2].name,onClick:function(e){return a(e)},onChange:function(){v("option2"),i("option"),p("option")}}),l.a.createElement("div",{className:"planImg"},l.a.createElement("img",{src:W})),l.a.createElement("div",{className:"planText"},l.a.createElement("h2",null,t[2].name),l.a.createElement("p",null,"$",t[2].price,"/mo")))))}function J(e){var t;Object(A.a)(e);var a=Object(u.l)(),c=Object(n.useState)(!1),r=Object(m.a)(c,2),o=r[0],s=r[1],d=Object(n.useState)("isChecked"),p=Object(m.a)(d,2),v=p[0],g=p[1],N=Object(n.useState)("notChecked"),O=Object(m.a)(N,2),x=O[0],k=O[1],S=Object(i.c)(function(e){return e.counter.time});console.log(S);var C="Arcade",T=9,L="monthly",w=function(e){C=e.target.getAttribute("name-attribute"),T=e.target.value,L=e.target.getAttribute("text-attribute")},I=function(e){a(e)},P=Object(i.b)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"planSubmit",onSubmit:function(){return P(f(T))&&P(b(C))&&P(E(L))&&void I(o?"/addonsyearly":"/addons")}},l.a.createElement("div",{className:"options-container"},o?l.a.createElement(z,{yearlyOptions:[{id:1,name:"Arcade",price:90,text:"2 months free",planType:"yearly"},{id:2,name:"Advanced",price:120,planType:"yearly"},{id:3,name:"Pro",price:150,planType:"yearly"}],handleStuff:w}):l.a.createElement(D,{monthlyOptions:[{id:1,name:"Arcade",price:9,planType:"monthly"},{id:2,name:"Advanced",price:12,planType:"monthly"},{id:3,name:"Pro",price:15,planType:"monthly"}],handleStuff:w}))),l.a.createElement("div",{className:"slider"},l.a.createElement("h4",{className:v},"Monthly"),l.a.createElement("label",{className:"switch"},l.a.createElement("input",(t={type:"checkbox",onClick:function(){return s(function(e){return!e})},onChange:function(){if(!0===o)return C="Arcade",T=90,L="yearly"}()},Object(j.a)(t,"onChange",function(){!1===o?(P(h()),g("notChecked"),k("isChecked")):!0===o&&(P(y()),g("isChecked"),k("notChecked"))}),Object(j.a)(t,"value",o),t)),l.a.createElement("span",{className:"slide"})),l.a.createElement("h4",{className:x},"Yearly")),l.a.createElement("div",{className:"bottom-buttons"},l.a.createElement("button",{onClick:function(){a("/yourinfo")},className:"goBack",type:"button"},"Go Back"),l.a.createElement("button",{className:"nextStep",type:"submit",form:"planSubmit"},"Next Step")))}function K(e){Object(A.a)(e);L.a,I.a,B.a;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content-text"},l.a.createElement("h1",null,"Select your plan"),l.a.createElement("p",null,"You have the option of monthly or yearly billing")),l.a.createElement(J,null)))}function M(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(u.l)();return l.a.createElement(l.a.Fragment,null,a?r("/selectplan"):l.a.createElement(C,{submitForm:function(){c(!0)}}))}function R(e){var t=e.name,a=e.cost,n=e.text,c=e.id,r=e.handleStuff;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Addon-container"},l.a.createElement("div",{className:"Addons"},l.a.createElement("div",{className:"addon"},l.a.createElement("label",{for:c,className:"addon-label"},l.a.createElement("input",{className:"addon-input",type:"checkbox",name:t,value:a,id:c,"text-attribute":n,onClick:function(e){return r(e)}}),l.a.createElement("h2",null,t),l.a.createElement("p",null,n))),l.a.createElement("div",{className:"cost"},l.a.createElement("p",null,"+$",a,"/yr")))))}function U(e){var t=e.yearlyAdd,a=Object(u.l)(),n=[];console.log(n);var c=Object(i.b)(),r=function(e){var t={id:0,name:"",cost:0,text:""};if(e.target.checked)t.name=e.target.name,t.cost=e.target.value,t.id=e.target.id,t.text=e.target.getAttribute("text-attribute"),n.push(t);else{var a=n.findIndex(function(t){return t.id===e.target.id});n.splice(a,1)}console.log(n)},m=function(e){a("/summary")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content2"},l.a.createElement("div",{className:"content-text"},l.a.createElement("h1",null,"Pick add-ons"),l.a.createElement("p",null,"Add-ons help enchance your gaming experience.")),l.a.createElement("form",{onSubmit:function(){c(v(n)),m()}},t.map(function(e){return l.a.createElement(R,Object.assign({key:e.id},e,{handleStuff:r}))}),l.a.createElement("div",{className:"bottom-buttons2"},l.a.createElement("button",{onClick:function(){a("/selectplan")},className:"goBack",type:"button"},"Go Back"),l.a.createElement("button",{className:"nextStep",type:"submit"},"Next Step")))))}function H(){return l.a.createElement("div",{className:"mobile-sidebar"},l.a.createElement("ol",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)))}function Q(e){var t=e.name,a=e.cost;e.text;return console.log(t),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"addon-container"},l.a.createElement("p",null,t),l.a.createElement("div",{className:"addon-price"},l.a.createElement("p",null,"+$",a,"/mo"))))}function V(e){var t=e.name,a=e.cost;e.text;return console.log(t),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"addon-text"},l.a.createElement("p",null,t),l.a.createElement("p",null,"+$",a,"/yr")))}function X(){var e=Object(i.c)(function(e){return e.counter.name}),t=Object(i.c)(function(e){return e.counter.value}),a=Object(i.c)(function(e){return e.counter.plan}),n=Object(i.c)(function(e){return e.counter.addOns}),c=Object(i.c)(function(e){return e.counter.time});console.log(c);var r=Object(u.l)(),m=n.reduce(function(e,t){return e+parseInt(t.cost)},0),o=parseInt(m)+parseInt(t);return l.a.createElement("form",null,l.a.createElement("div",{className:"content3"},l.a.createElement("div",{className:"content-text"},l.a.createElement("h1",null,"Finishing up"),l.a.createElement("p",null,"Double-check everything looks OK before confirming")),l.a.createElement("div",{className:"summary-box"},l.a.createElement("div",{className:"summary-text"},l.a.createElement("h2",null,e," (",a,")"),l.a.createElement("div",{className:"summary-price"},l.a.createElement("button",{className:"change"},"Change"),c?l.a.createElement("p",null,"$",t,"/yr"):l.a.createElement("p",null,"$",t,"/mo"))),l.a.createElement("div",{className:"addon-body"},n.map(function(e){return c?l.a.createElement(V,Object.assign({key:e.id},e)):l.a.createElement(Q,Object.assign({key:e.id},e))}))),l.a.createElement("div",{className:"total"},l.a.createElement("p",null,"Total(per month)"),l.a.createElement("h4",null,l.a.createElement("h4",null,"$",o))),l.a.createElement("div",{className:"bottom-buttons3"},l.a.createElement("button",{className:"goBack",onClick:function(){c?r("/addonsyearly"):c||r("/addons")}},"Go Back"),l.a.createElement("button",{className:"confirm-button",onClick:function(){r("/thankyou")}},"Confirm"))))}var Z=a(35),_=a.n(Z);function ee(){var e=_.a;return l.a.createElement("div",{className:"thank-container"},l.a.createElement("div",{className:"thank-image"},l.a.createElement("img",{src:e})),l.a.createElement("div",{className:"thank-text"},l.a.createElement("h1",null,"Thank You!")),l.a.createElement("div",{className:"thank-body"},l.a.createElement("p",null,"Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to mail us at support@loremgaming.com")))}var te=function(){var e=Object(n.useState)(window.innerWidth<850),t=Object(m.a)(e,2),a=(t[0],t[1]),c=function(){a(window.innerWidth<850)};return Object(n.useEffect)(function(){return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),l.a.createElement("div",{className:"main"},l.a.createElement(H,null),l.a.createElement("div",{className:"plan"},l.a.createElement(o,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/yourinfo",element:l.a.createElement(M,null)}),l.a.createElement(u.a,{path:"/selectplan",element:l.a.createElement(K,null)}),l.a.createElement(u.a,{path:"/addons",element:l.a.createElement(O,{monthlyAdd:[{id:1,name:"Online Services",cost:1,text:"Access to multiplayer games"},{id:2,name:"Larger Storage",cost:2,text:"Extra 1TB of cloud save"},{id:3,name:"Customizable Profile",cost:2,text:"Custom theme on your profile"}]})}),l.a.createElement(u.a,{path:"/addonsyearly",element:l.a.createElement(U,{yearlyAdd:[{id:1,name:"Online Services",cost:10,text:"Access to multiplayer games"},{id:2,name:"Larger Storage",cost:20,text:"Extra 1TB of cloud save"},{id:3,name:"Customizable Profile",cost:20,text:"Custom theme on your profile"}]})}),l.a.createElement(u.a,{path:"/summary",element:l.a.createElement(X,null)}),l.a.createElement(u.a,{path:"/thankyou",element:l.a.createElement(ee,null)}))))},ae=Object(s.a)({reducer:{counter:g}}),ne=a(9);r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ne.a,null,l.a.createElement(i.a,{store:ae},l.a.createElement(te,null)))))}},[[36,2,1]]]);
//# sourceMappingURL=main.3badee1c.chunk.js.map