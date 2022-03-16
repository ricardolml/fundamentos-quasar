"use strict";(self["webpackChunkquasar_project"]=self["webpackChunkquasar_project"]||[]).push([[321],{5321:(e,o,s)=>{s.r(o),s.d(o,{default:()=>Z});var l=s(9835),a=s(6970);const r=(0,l._)("span",{class:"text-h3"},"Forms.vue",-1),t={class:"row justify-center"},n={class:"row justify-end"};function u(e,o,s,u,i,d){const m=(0,l.up)("q-separator"),c=(0,l.up)("q-input"),p=(0,l.up)("q-checkbox"),b=(0,l.up)("q-btn"),w=(0,l.up)("q-form"),f=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(f,{class:"q-ma-md"},{default:(0,l.w5)((()=>[r,(0,l.Wm)(m,{spaced:""}),(0,l._)("div",t,[(0,l.Wm)(w,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{filled:"",modelValue:e.userForm.email,"onUpdate:modelValue":o[0]||(o[0]=o=>e.userForm.email=o),label:"Correo","lazy-rules":"",rules:[e=>e&&e.length>0||"Este campo es obligatorio",e.isValidEmail]},null,8,["modelValue","rules"]),(0,l.Wm)(c,{filled:"",type:"password",modelValue:e.userForm.password1,"onUpdate:modelValue":o[1]||(o[1]=o=>e.userForm.password1=o),label:"Contraseña","lazy-rules":"",rules:[e=>e&&e.length>0||"Este campo es obligatorio"]},null,8,["modelValue","rules"]),(0,l.Wm)(c,{filled:"",type:"password",modelValue:e.userForm.password2,"onUpdate:modelValue":o[2]||(o[2]=o=>e.userForm.password2=o),label:"Repetir Contraseña","lazy-rules":"",rules:[e=>e&&e.length>0||"Este campo es obligatorio",e.isSamePassword]},null,8,["modelValue","rules"]),(0,l.Wm)(p,{"left-label":"",modelValue:e.userForm.conditions,"onUpdate:modelValue":o[3]||(o[3]=o=>e.userForm.conditions=o),label:"Acepto los terminos y condiciones",style:(0,a.j5)(e.userForm.errorInConditions&&!e.userForm.conditions&&"color: red")},null,8,["modelValue","style"]),(0,l._)("div",n,[(0,l.Wm)(b,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),(0,l.Wm)(b,{unelevated:"",label:"Submit",type:"submit",color:"primary"})])])),_:1},8,["onSubmit","onReset"])])])),_:1})}var i=s(499),d=s(9302);const m=(0,l.aZ)({name:"PageIndex",setup(){const e=(0,d.Z)(),o=(0,i.iH)({email:"",password1:"",password2:"",conditions:!1,errorInConditions:!1});return{userForm:o,onSubmit(){if(o.value.errorInConditions=!1,!o.value.conditions)return o.value.errorInConditions=!0,void e.notify({message:"Debe de aceptar las condiciones",icon:"las la-exclamation-circle"});console.log(o.value)},onReset(){o.value={email:"",password1:"",password2:"",conditions:!1,errorInConditions:!1}},isValidEmail(e){const o=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return o.test(e)||"El correo no parece ser válido"},isSamePassword(e){return e===o.value.password1||"Las contraseñas no son iguales"}}}});var c=s(1639),p=s(9885),b=s(926),w=s(8326),f=s(113),v=s(1221),y=s(963),g=s(9984),V=s.n(g);const F=(0,c.Z)(m,[["render",u]]),Z=F;V()(m,"components",{QPage:p.Z,QSeparator:b.Z,QForm:w.Z,QInput:f.Z,QCheckbox:v.Z,QBtn:y.Z})}}]);