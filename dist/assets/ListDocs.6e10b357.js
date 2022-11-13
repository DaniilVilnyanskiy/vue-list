import{o,c as n,a as d,n as h,_ as M,r as m,b as f,t as v,F as y,d as g,e as p,f as A,g as I,h as k}from"./index.1a53baa6.js";const C=["xlink:href"];function $(t,s,e,a,l,u){return o(),n("svg",{class:h(u.concat)},[d("use",{"xlink:href":u.concatXlink},null,8,C)],2)}const D={props:["icon"],computed:{concat:function(){return"icon icon-"+this.icon},concatXlink:function(){return"/public/images/svg/sprite.svg#"+this.icon}}},E=M(D,[["render",$]]),L={class:"input-component"};function q(t,s,e,a,l,u){const c=m("Icon");return o(),n("div",L,[f(c,{icon:"search"}),d("input",{onInput:s[0]||(s[0]=(..._)=>this.eventInput&&this.eventInput(..._)),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430"},null,32)])}const B={components:{Icon:E},methods:{eventInput(t){this.$emit("eventInput",t)}}},P=M(B,[["render",q]]),j={class:"category-child border-b"},N={class:"second-title"},S={key:0,class:"d-inline-flex category-marks"},U={key:1,class:"category-child__required"},V={class:"category-child__subtitle"};function G(t,s,e,a,l,u){return o(),n("div",j,[d("span",N,v(e.object.title),1),e.object.marks?(o(),n("div",S,[(o(!0),n(y,null,g(e.object.marks,c=>(o(),n("span",{class:h(c)},null,2))),256))])):p("",!0),e.object.required?(o(),n("span",U,v(e.object.required),1)):p("",!0),d("span",V,v(e.object.info),1)])}const T={components:{Icon:E},props:["object"]},b=M(T,[["render",G],["__scopeId","data-v-908514ad"]]),z=["data-id"],F={class:"first-title"},X={key:0,class:"category-child__required"},H={key:1,class:"d-inline-flex category-marks"},O={class:"category-parent__subtitle"},J={class:"category-children accordion-body-custom border-l border-r"},K={class:"category-child-li d-block"};function Q(t,s,e,a,l,u){const c=m("Icon"),_=m("CategoryChild");return o(),n("div",{class:h(["category accordion-custom",e.object.isActiveAcc?"active":""])},[A(v(e.isActiveAcc),1),d("div",{class:"category-parent border accordion-head-custom","data-id":e.object.id,"data-parentt":!0},[d("button",{class:"btn btn-round",onClick:s[0]||(s[0]=(...r)=>this.clickBtnAcc&&this.clickBtnAcc(...r))},[f(c,{icon:"arrow-up"})]),d("span",F,v(e.object.title),1),e.object.required?(o(),n("span",X,v(e.object.required),1)):p("",!0),e.object.marks?(o(),n("div",H,[(o(!0),n(y,null,g(e.object.marks,r=>(o(),n("span",{class:h(r)},null,2))),256))])):p("",!0),d("span",O,v(e.object.info),1)],8,z),d("ul",J,[(o(!0),n(y,null,g(e.object.children,r=>(o(),n("li",K,[f(_,{onMouseup:this.mouseUp,onMousedown:this.mouseDown,object:r,class:h((r.isMove?"opacity":"")+(e.hoverElId===r.id?" hover":"")),"data-id":r.id},null,8,["onMouseup","onMousedown","object","class","data-id"]),r.isMove?(o(),I(_,{key:0,onMouseup:this.mouseUp,onMousedown:this.mouseDown,object:r,class:h("move"),"data-id":r.id,style:k({top:r.isMove?e.coords.y-20+"px":0,left:r.isMove?e.coords.x-80+"px":0})},null,8,["onMouseup","onMousedown","object","data-id","style"])):p("",!0)]))),256))])],2)}const R={components:{Icon:E,CategoryChild:b},props:["object","coords","hoverElId","isActiveAcc"],data(){return{data:{}}},methods:{clickBtnAcc(t){this.$emit("clickBtnAcc",{e:t})},mouseUp(){this.$emit("mouseUp")},mouseDown(){this.$emit("mouseDown")}}},W=M(R,[["render",Q],["__scopeId","data-v-489375f0"]]),Y=d("div",{class:"list__head"},[d("h1",null,"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")],-1),Z={class:"row"},tt={class:"col col-lg-6"},et={class:"category-list mb-4 mt-4"},st={class:"category-list__parent"},ot={class:"category-list category-extra"},it={class:"category-list__child"},nt=d("li",{class:"category-list-li_drag-here"},"\u041C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u0441\u044E\u0434\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",-1);function at(t,s,e,a,l,u){const c=m("Input"),_=m("CategoryParent"),r=m("CategoryChild");return o(),n("div",{class:h(["list",this.data.cursorGrab===!0?"cursor-grab":""])},[Y,d("div",Z,[d("div",tt,[f(c,{onEventInput:this.eventInput},null,8,["onEventInput"])])]),d("ul",et,[(o(!0),n(y,null,g(this.filterArrayParent,(i,w)=>(o(),n("li",st,[f(_,{object:i,coords:this.data.coords,hoverElId:this.data.hoverElId,onMousedown:this.onMouseDown,onClickBtnAcc:x=>this.initAccordion(i),onMouseDown:this.onMouseDown,class:h((i.isMove?"opacity":"")+(this.data.hoverElId===i.id?" hover":""))},null,8,["object","coords","hoverElId","onMousedown","onClickBtnAcc","onMouseDown","class"]),i.isMove?(o(),I(_,{key:0,object:i,coords:this.data.coords,hoverElId:this.data.hoverElId,onMousedown:this.onMouseDown,onClickBtnAcc:x=>this.initAccordion(i),onMouseDown:this.onMouseDown,class:h("move"),style:k({top:i.isMove?this.data.coords.y-20+"px":0,left:i.isMove?this.data.coords.x-80+"px":0})},null,8,["object","coords","hoverElId","onMousedown","onClickBtnAcc","onMouseDown","style"])):p("",!0)]))),256))]),d("ul",ot,[(o(!0),n(y,null,g(this.filterArrayChild,(i,w)=>(o(),n("li",it,[f(r,{object:i,onMousedown:this.onMouseDown,class:h((i.isMove?"opacity":"")+(this.data.hoverElId===i.id?" hover":"")),"data-id":i.id},null,8,["object","onMousedown","class","data-id"]),i.isMove?(o(),I(r,{key:0,class:"move",object:i,onMousedown:this.onMouseDown,"data-id":i.id,style:k({top:i.isMove?this.data.coords.y-20+"px":0,left:i.isMove?this.data.coords.x-80+"px":0})},null,8,["object","onMousedown","data-id","style"])):p("",!0)]))),256)),nt])],2)}const ct={components:{Icon:E,CategoryParent:W,CategoryChild:b,Input:P},data(){return{data:{coords:{},isMove:!1,hoverElId:-1,dataParent:""},init:[{name:"",title:"\u041C\u0435\u0434. \u043A\u043D\u0438\u0436\u043A\u0430",id:1,status:"child"},{name:"",title:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445",info:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0431\u0435\u0437 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",status:"parent",id:6,marks:["red-pink","yellow","yellow-shadow"],children:[{name:"",title:"\u041F\u0430\u0441\u043F\u043E\u0440\u0442",info:"\u0414\u043B\u044F \u0432\u0441\u0435\u0445",required:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",marks:["light-blue"],status:"child",id:7},{name:"",title:"\u0418\u041D\u041D",info:"\u0414\u043B\u044F \u0432\u0441\u0435\u0445",required:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",status:"child",id:8}]},{name:"",title:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043B\u044F \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",info:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u0431\u0435\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u043D\u0430 \u043A\u0430\u043A\u0443\u044E \u0431\u044B \u0442\u043E \u043D\u0438 \u0431\u044B\u043B\u043E \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0432\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u0430",status:"parent",id:5,children:[{name:"",title:"\u0422\u0440\u0443\u0434\u043E\u0432\u0430\u044F \u043A\u043D\u0438\u0436\u043A\u0430",status:"child",id:9},{name:"",title:"\u0421\u041D\u0418\u041B\u0421",status:"child",id:10},{name:"",title:"\u0412\u043E\u0435\u043D\u043D\u044B\u0439 \u0431\u0438\u043B\u0435\u0442",status:"child",id:11}]},{name:"",title:"\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435",status:"parent",id:4,children:[{name:"",title:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043E \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",status:"child",id:12},{name:"",title:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043F\u0435\u0440\u0435\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438",status:"child",id:13}]},{name:"",title:"\u0422\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0430",info:"\u0420\u043E\u0441\u0441\u0438\u044F, \u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u0438\u044F, \u0423\u043A\u0440\u0430\u0438\u043D\u0430, \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0444\u0438\u043B\u0438\u0430\u043B\u0430, \u043F\u043E\u0432\u0430\u0440-\u0441\u0443\u0448\u0438\u0441\u0442, \u043F\u043E\u0432\u0430\u0440-\u043F\u0438\u0446\u0446\u043C\u0435\u0439\u043A\u0435\u0440, \u043F\u043E\u0432\u0430\u0440 \u0433\u043E\u0440\u044F\u0447\u0435\u0433\u043E \u0446\u0435\u0445\u0430",id:2,status:"child"},{name:"",title:"\u0422\u0440\u0443\u0434\u043E\u0432\u043E\u0439 \u0434\u043E\u0433\u043E\u0432\u043E\u0440",info:"",marks:["blue","pink"],id:3,status:"child"}]}},computed:{filterArrayParent(){return this.init.filter(t=>t.status==="parent")},filterArrayChild(){return this.init.filter(t=>t.status!=="parent")}},methods:{setElementMove(t){this.init.filter(s=>{s.id===t?s.isMove=!0:s.isMove=!1,typeof s.children<"u"&&s.children.filter(e=>{e.id===t?e.isMove=!0:e.isMove=!1})})},onMouseDown(t){if(typeof t>"u"||t.target.closest("button"))return;this.data.cursorGrab=!0;let s=t.target.closest(".category-child");if(s||(s=t.target.closest(".category-parent")),!s)return;s.closest('[data-parentt="true"]')?this.data.dataParentt=!0:this.data.dataParentt=!1;const e=Number(s.dataset.id);this.data.isMove=!0,this.mouseEvent(t),this.data.moveElementId=e,this.setElementMove(e)},onMouseUpChild(t){typeof t>"u"||(this.data.cursorGrab=!1,this.data.isMove=!1,this.setElementMove(-1),this.data.hoverElId!==-1&&this.data.hoverElId!==this.data.moveElementId&&!this.data.dataParent&&this.changeArray(this.data.hoverElId))},executeElement(t){let s=!1;return this.init.filter((e,a)=>{if(e.id===t)return s=e,this.init.splice(a,1),s;typeof e.children<"u"&&e.children.filter((l,u)=>{if(l.id===t)return s=l,this.init[a].children.splice(u,1),s})}),s},includeElement(t){if(this.data.hoverElId===-100){this.init.push(t);return}this.init.filter((s,e)=>{s.id===this.data.hoverElId&&(s.status==="child"?this.init.splice(e+1,0,t):t.status==="parent"?this.init.splice(e+1,0,t):(this.init[e].children.splice(0,0,t),console.log("test"))),typeof s.children<"u"&&t.status!=="parent"&&s.children.filter((a,l)=>{a.id===this.data.hoverElId&&this.init[e].children.splice(l+1,0,t)})})},changeArray(t){const s=this.executeElement(this.data.moveElementId);this.includeElement(s)},initAccordion(t){typeof t>"u"||(t.isActiveAcc!==!0?t.isActiveAcc=!0:delete t.isActiveAcc)},mouseEvent(t){if(!this.data.isMove){this.data.hoverElId=-1;return}this.data.coords.y=t.y,this.data.coords.x=t.x,t.target.closest(".category-child")?this.data.dataParentt!==!0&&(this.data.hoverElId=Number(t.target.closest(".category-child").dataset.id)):t.target.closest(".category-parent")?this.data.hoverElId=Number(t.target.closest(".category-parent").dataset.id):t.target.closest(".category-extra")&&(this.data.hoverElId=-100)},eventInput(t){const s=t.target.value.toLowerCase();document.querySelectorAll(".category-child").forEach(a=>{const u=a.querySelector(".second-title").innerHTML.toLowerCase(),c=a.closest(".category");u.indexOf(s)>-1?(a.parentElement.classList.remove("d-none"),a.parentElement.classList.add("d-block"),c==null||c.classList.remove("d-none")):(a.parentElement.classList.add("d-none"),a.parentElement.classList.remove("d-block"),c&&(console.log(c.querySelectorAll(".category-child-li.d-block")),c.querySelectorAll(".category-child-li.d-block").length===0?c.classList.add("d-none"):c.classList.remove("d-none")))})}},mounted(){this.$nextTick(function(){this.initAccordion(),document.addEventListener("mousemove",t=>{this.mouseEvent(t)}),document.addEventListener("mouseup",this.onMouseUpChild)})}},dt=M(ct,[["render",at]]);export{dt as default};
