(this["webpackJsonptest-tax"]=this["webpackJsonptest-tax"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),r=c.n(a),s=(c(9),c(2)),o=(c(10),c(0)),l=function(e){var t=e.onButtonClick;return Object(o.jsx)("div",{className:"button-wrapper",children:Object(o.jsx)("button",{className:"button",onClick:function(){return t(!0)},children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"})})},i=function(e){for(var t=[],c=26e4,n=function(e){return 12*Number(e)*.13}(e);c>0;)c>0&&c<n?(t.push(c),c=0):(t.push(n),c-=n);return t},u=function(e){var t="\u044b\u0439";return 3===e?t="\u0438\u0439":2!==e&&6!==e&&7!==e&&8!==e||(t="\u043e\u0439"),t},b=(c(12),function(e){var t=e.value;return Object(o.jsxs)("div",{className:"form__checkbox checkbox",children:[Object(o.jsx)("p",{className:"checkbox__text",children:"\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"}),t.map((function(e,t){var c=t+1;return Object(o.jsxs)("label",{className:"checkbox__label",children:[Object(o.jsx)("input",{className:"checkbox__input",type:"checkbox"}),Object(o.jsx)("span",{className:"checkbox__check"}),e," \u0440\u0443\u0431\u043b\u0435\u0439",Object(o.jsxs)("span",{children:[" \u0432 ",c,"-",u(c)," \u0433\u043e\u0434"]})]},e+t)}))]})}),j=(c(13),function(e){var t=e.onButtonClick,c=Object(n.useState)(""),a=Object(s.a)(c,2),r=a[0],l=a[1],u=Object(n.useState)(!1),j=Object(s.a)(u,2),m=j[0],d=j[1],f=Object(n.useState)([]),x=Object(s.a)(f,2),_=x[0],h=x[1];return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),l(""),h([])},children:[Object(o.jsx)("h2",{className:"form__title",children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(o.jsx)("p",{className:"form__text",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."}),Object(o.jsx)("label",{className:"form__label",htmlFor:"text",children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"}),Object(o.jsx)("input",{onChange:function(e){e.preventDefault(),l(e.currentTarget.value),Number(e.currentTarget.value)?d(!1):d(!0)},className:"form__field ".concat(m&&"form__field--error"),type:"text",name:"",id:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",required:!0,value:r}),Object(o.jsx)("button",{className:"form__calc-btn",type:"button",onClick:function(){r&&h(i(r))},children:"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),_.length>0?Object(o.jsx)(b,{value:_}):"",Object(o.jsxs)("div",{className:"form__group radio",children:[Object(o.jsx)("p",{className:"radio__text",children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c?"}),Object(o.jsxs)("div",{className:"radio__wrapper",children:[Object(o.jsx)("input",{className:"radio__input",type:"radio",name:"button",id:"payment",defaultChecked:!0}),Object(o.jsx)("label",{className:"radio__label",htmlFor:"payment",children:"\u041f\u043b\u0430\u0442\u0435\u0436"}),Object(o.jsx)("input",{className:"radio__input",type:"radio",name:"button",id:"term"}),Object(o.jsx)("label",{className:"radio__label",htmlFor:"term",children:"\u0421\u0440\u043e\u043a"})]})]}),Object(o.jsx)("button",{className:"form__close-btn","data-testid":"close",type:"button",onClick:function(){return t(!1)}}),Object(o.jsx)("button",{className:"form__submit-btn",type:"submit",disabled:m&&!0,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}),m=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=function(e){a(e)};return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.key&&(e.preventDefault(),a(!1))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[c]),Object(o.jsx)(o.Fragment,{children:c?Object(o.jsx)(j,{onButtonClick:r}):Object(o.jsx)(l,{onButtonClick:r})})};r.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.b93b4199.chunk.js.map