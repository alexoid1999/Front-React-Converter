(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),i=a(4),c=a.n(i),o=(a(14),a(5)),l=a(6),h=a(1),r=a(8),u=a(7),d=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={arrow:"==",option:0,vector:1,dataNum1:0,dataNum2:0,firstType:0,secondType:0},s.getOption=s.getOption.bind(Object(h.a)(s)),s.Clear=s.Clear.bind(Object(h.a)(s)),s.handleNum1=s.handleNum1.bind(Object(h.a)(s)),s.handleNum2=s.handleNum2.bind(Object(h.a)(s)),s.setFirstType=s.setFirstType.bind(Object(h.a)(s)),s.setSecondType=s.setSecondType.bind(Object(h.a)(s)),s.getCoef=s.getCoef.bind(Object(h.a)(s)),s}return Object(l.a)(a,[{key:"getOption",value:function(e){this.setState({option:e.target.value,dataNum1:0,dataNum2:0,firstType:0,secondType:0})}},{key:"Clear",value:function(){this.setState({dataNum1:0,dataNum2:0,firstType:0,secondType:0})}},{key:"handleNum1",value:function(e){this.setState({vector:1,arrow:"==>",dataNum1:e.target.value,dataNum2:this.getCoef(e.target.value,this.state.option,this.state.firstType,this.state.secondType)})}},{key:"handleNum2",value:function(e){this.setState({vector:2,arrow:"<==",dataNum1:this.getCoef(e.target.value,this.state.option,this.state.secondType,this.state.firstType),dataNum2:e.target.value})}},{key:"setFirstType",value:function(e){this.setState({firstType:e.target.value}),1==this.state.vector?this.setState({dataNum2:this.getCoef(this.state.dataNum1,this.state.option,e.target.value,this.state.secondType)}):2==this.state.vector&&this.setState({dataNum1:this.getCoef(this.state.dataNum2,this.state.option,e.target.value,this.state.secondType)})}},{key:"setSecondType",value:function(e){this.setState({secondType:e.target.value}),1==this.state.vector?this.setState({dataNum2:this.getCoef(this.state.dataNum1,this.state.option,this.state.firstType,e.target.value)}):2==this.state.vector&&this.setState({dataNum1:this.getCoef(this.state.dataNum2,this.state.option,this.state.firstType,e.target.value)})}},{key:"getCoef",value:function(e,t,a,s){var n=0;return 0==a||0==s?n=0*e:a==s&&(n=1*e),1==t?1==a&&2==s?n=1.0936132983377*e:1==a&&3==s?n=.00067487312385272*e:2==a&&1==s?n=.9144*e:2==a&&3==s?n=.00061710398445092*e:3==a&&1==s?n=1481.76*e:3==a&&2==s&&(n=1620.4724409449*e):2==t?1==a&&3==s?n=1.8*e+32:1==a&&2==s?n=+e+273.15:2==a&&1==s?n=e-273.15:2==a&&3==s?n=1.8*(e-273.15):3==a&&1==s?n=(e-32)/1.8:3==a&&2==s&&(n=(e-32)/1.8+273.15):3==t&&(1==a&&2==s?n=e/1.609:1==a&&3==s?n=e/3.6:2==a&&1==s?n=1.609*e:2==a&&3==s?n=e/2.237:3==a&&1==s?n=3.6*e:3==a&&2==s&&(n=2.237*e)),n}},{key:"render",value:function(){return Object(s.jsxs)("div",{class:"tabbed",children:[Object(s.jsx)("input",{type:"radio",name:"tabs",id:"tab-nav-1",value:"1",onClick:this.getOption}),Object(s.jsx)("label",{for:"tab-nav-1",children:"\u0414\u043b\u0438\u043d\u0430"}),Object(s.jsx)("input",{type:"radio",name:"tabs",id:"tab-nav-2",value:"2",onClick:this.getOption}),Object(s.jsx)("label",{for:"tab-nav-2",children:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),Object(s.jsx)("input",{type:"radio",name:"tabs",id:"tab-nav-3",value:"3",onClick:this.getOption}),Object(s.jsx)("label",{for:"tab-nav-3",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"}),Object(s.jsxs)("div",{class:"tabs",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0414\u043b\u0438\u043d\u0443"}),Object(s.jsx)("input",{class:"form",type:"number",name:"num1",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",onChange:this.handleNum1,value:this.state.dataNum1}),Object(s.jsxs)("select",{class:"select",name:"type1",onChange:this.setFirstType,children:[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"\u041c\u0435\u0442\u0440\u044b"}),Object(s.jsx)("option",{value:"2",children:"\u042f\u0440\u0434\u044b"}),Object(s.jsx)("option",{value:"3",children:"\u041c\u0438\u043b\u0438"})]}),this.state.arrow,Object(s.jsx)("input",{class:"form",type:"number",name:"num2",placeholder:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",onChange:this.handleNum2,value:this.state.dataNum2}),Object(s.jsxs)("select",{class:"select",name:"type2",onChange:this.setSecondType,children:[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"\u041c\u0435\u0442\u0440\u044b"}),Object(s.jsx)("option",{value:"2",children:"\u042f\u0440\u0434\u044b"}),Object(s.jsx)("option",{value:"3",children:"\u041c\u0438\u043b\u0438"})]}),Object(s.jsx)("input",{type:"submit",class:"button",onClick:this.Clear,value:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0443"}),Object(s.jsx)("input",{class:"form",type:"number",name:"num1",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",onChange:this.handleNum1,value:this.state.dataNum1}),Object(s.jsxs)("select",{class:"select",name:"type1",onChange:this.setFirstType,children:[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"\u0426\u0435\u043b\u044c\u0441\u0438\u0439"}),Object(s.jsx)("option",{value:"2",children:"\u041a\u0435\u043b\u044c\u0432\u0438\u043d"}),Object(s.jsx)("option",{value:"3",children:"\u0424\u0430\u0440\u0435\u043d\u0433\u0435\u0439\u0442"})]}),this.state.arrow,Object(s.jsx)("input",{class:"form",type:"number",name:"num2",placeholder:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",onChange:this.handleNum2,value:this.state.dataNum2}),Object(s.jsxs)("select",{class:"select",name:"type2",onChange:this.setSecondType,children:[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"\u0426\u0435\u043b\u044c\u0441\u0438\u0439"}),Object(s.jsx)("option",{value:"2",children:"\u041a\u0435\u043b\u044c\u0432\u0438\u043d"}),Object(s.jsx)("option",{value:"3",children:"\u0424\u0430\u0440\u0435\u043d\u0433\u0435\u0439\u0442"})]}),Object(s.jsx)("input",{type:"submit",class:"button",onClick:this.Clear,value:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"}),Object(s.jsx)("input",{class:"form",type:"number",name:"num1",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",onChange:this.handleNum1,value:this.state.dataNum1}),Object(s.jsxs)("select",{class:"select",name:"type1",onChange:this.setFirstType,children:[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"\u043a\u043c/\u0447"}),Object(s.jsx)("option",{value:"2",children:"\u043c\u0438\u043b\u044c/\u0447"}),Object(s.jsx)("option",{value:"3",children:"\u043c/\u0441"})]}),this.state.arrow,Object(s.jsx)("input",{class:"form",type:"number",name:"num2",placeholder:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",onChange:this.handleNum2,value:this.state.dataNum2}),Object(s.jsxs)("select",{class:"select",name:"type2",onChange:this.setSecondType,children:[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"\u043a\u043c/\u0447"}),Object(s.jsx)("option",{value:"2",children:"\u043c\u0438\u043b\u044c/\u0447"}),Object(s.jsx)("option",{value:"3",children:"\u043c/\u0441"})]}),Object(s.jsx)("input",{type:"submit",class:"button",onClick:this.Clear,value:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})]})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(s.jsx)(d,{}),document.getElementById("conv")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ec219405.chunk.js.map