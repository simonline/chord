(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],h=0,f=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"176e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{color:"#766bf5",width:"350px",permanent:"",absolute:""}},[n("Controls",{key:t.generateKey(),attrs:{objects:t.objects,showGroup:t.showGroup,highlightItem:t.highlightItem},on:{"update:objects":function(e){t.objects=e},"update:showGroup":function(e){t.showGroup=e},"update:show-group":function(e){t.showGroup=e},"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e}}})],1),n("v-main",{staticClass:"main"},[n("Chart",{key:t.generateKey(),attrs:{objects:t.activeObjects,correlations:t.correlations,highlightItem:t.highlightItem},on:{"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e}}})],1)],1)},a=[],i=n("3835"),s=n("b85c"),c=(n("d81d"),n("d3b7"),n("4de4"),n("ddb0"),n("a15b"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"my-5"},[t._l(Object.keys(t.groups),(function(e){return n("ControlGroup",{key:e,attrs:{name:e,items:t.groups[e],showItems:t.showGroup===e,highlightItem:t.controlsHighlightItem},on:{"update:items":[function(n){return t.$set(t.groups,e,n)},function(n){return t.updateObjects(t.groups[e])}],"update:highlightItem":[function(e){t.controlsHighlightItem=e},function(e){return t.updateHighlightItem(t.controlsHighlightItem)}],"update:highlight-item":function(e){t.controlsHighlightItem=e},"update:showItems":function(n){return t.updateShowGroup(e)}}})})),n("v-chip",{staticClass:"version"},[t._v(" Version "+t._s(this.$store.state.packageVersion)+" ")])],2)}),u=[],l=n("ade3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mb-1 item"},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"ripple"},expression:"{ class: 'ripple' }"}],staticClass:"button",attrs:{icon:""},on:{click:t.toggleShowItems}},[n("v-icon",[t._v(" "+t._s(t.showItems?"mdi-minus-box":"mdi-plus-box")+" ")])],1),n("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":t.items.every((function(t){return t.active}))},on:{change:function(e){return t.setActiveItems(e)}}}),n("UpdateItemModal",{attrs:{items:t.coloredItems},on:{"update:items":[function(e){t.coloredItems=e},function(e){return t.updateItems(t.coloredItems)}]}}),n("label",{staticClass:"ml-2"},[t._v(" "+t._s(t.name)+" ")])],1),t.showItems?n("v-container",{staticClass:"pl-6"},t._l(t.items,(function(e){return n("v-row",{key:e.ID,staticClass:"item"},[n("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":e.active},on:{change:function(n){return t.setActiveItem(e.ID,n)}},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}}),n("UpdateItemModal",{attrs:{item:e},on:{"update:item":[function(t){e=t},function(n){return t.updateItem(e)}]}}),n("label",{staticClass:"ml-2",on:{mouseover:function(n){return t.updateHighlightItem(e.ID-1)}}},[t._v(" "+t._s(e.Name)+" ")])],1)})),1):t._e()],1)},f=[],d=n("2909"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"button",attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",{staticClass:"icon",style:{"background-color":t.color}},[t._v(" mdi-pencil-box-outline ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{color:"#766bf5"}},[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("Bearbeiten")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-color-picker",{attrs:{"dot-size":"25","swatches-max-height":"200",mode:"hexa",light:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.setColor()}}},[t._v(" Speichern ")])],1)],1)],1)},g=[],m=n("5530"),v={props:["item","items"],data:function(){return{dialog:!1,color:this.item?this.item.Farbe:this.items[0].Farbe}},methods:{setColor:function(){var t=this;if(this.dialog=!1,console.log(this.color),this.item){var e=Object(m["a"])(Object(m["a"])({},this.item),{},{Farbe:this.color});this.$emit("update:item",e)}else this.$emit("update:items",this.items.map((function(e){return e.Farbe=t.color,e})))}}},b=v,I=(n("622a"),n("2877")),y=n("6544"),w=n.n(y),j=n("8336"),x=n("b0af"),C=n("99d9"),A=n("62ad"),_=n("03a4"),M=n("a523"),O=n("169a"),k=n("132d"),V=n("0fd9"),P=n("2fa4"),D=Object(I["a"])(b,p,g,!1,null,null,null),$=D.exports;w()(D,{VBtn:j["a"],VCard:x["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VCol:A["a"],VColorPicker:_["a"],VContainer:M["a"],VDialog:O["a"],VIcon:k["a"],VRow:V["a"],VSpacer:P["a"]});var G={props:["name","items","showItems","highlightItem"],components:{UpdateItemModal:$},data:function(){return{coloredItems:Object(d["a"])(this.items)}},methods:{toggleShowItems:function(){this.$emit("update:showItems",!this.showItems)},setActiveItems:function(t){this.$emit("update:items",this.items.map((function(e){return e.active=t,e})))},setActiveItem:function(t,e){this.$emit("update:items",this.items.map((function(n){return n.ID===t.ID&&(t.active=e),n})))},updateHighlightItem:function(t){this.$emit("update:highlightItem",t)},updateItems:function(t){this.$emit("update:items",t)},updateItem:function(t){this.$emit("update:items",this.items.map((function(e){return e.ID===t.ID?t:e})))}}},S=G,F=(n("c7f2"),n("ac7c")),E=n("269a"),H=n.n(E),B=n("5607"),N=Object(I["a"])(S,h,f,!1,null,null,null),T=N.exports;w()(N,{VBtn:j["a"],VCheckbox:F["a"],VContainer:M["a"],VIcon:k["a"],VRow:V["a"]}),H()(N,{Ripple:B["a"]});var R=function(t,e){return t.reduce((function(t,n){return t[n[e]]=t[n[e]]||[],t[n[e]].push(n),t}),Object.create(null))},U={props:["objects","showGroup","highlightItem"],components:{ControlGroup:T},data:function(){return{groups:R(this.objects,"Familie"),controlsHighlightItem:this.highlightItem}},methods:{updateObjects:function(t){var e=t.reduce((function(t,e){return Object.assign(t,Object(l["a"])({},e.ID,e))}),{});this.$emit("update:objects",this.objects.map((function(t){return t.ID in e?e[t.ID]:t})))},updateShowGroup:function(t){this.$emit("update:showGroup",t!==this.showGroup?t:"")},updateHighlightItem:function(t){this.$emit("update:highlightItem",t)}}},K=U,q=(n("69a9"),n("cc20")),z=Object(I["a"])(K,c,u,!1,null,null,null),J=z.exports;w()(z,{VChip:q["a"],VContainer:M["a"]});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{attrs:{id:"chart"}},[n("v-alert",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{dismissible:"",width:"400",color:"#766bf5",id:"alert",border:"left",icon:"mdi-information","colored-border":"",light:"",outlined:""}},[n("span")])],1)])},Z=[],Q=(n("cb29"),n("159b"),n("4e827"),n("6e58")),W={props:["objects","correlations","highlightItem"],data:function(){return{svg:null}},mounted:function(){this.drawChart()},methods:{showAlert:function(t){var e=document.getElementById("alert"),n=this.objects[t],r=e.getElementsByClassName("v-alert__border")[0],o=e.getElementsByClassName("mdi-close-circle")[0];r.style.borderColor=n.Farbe,o.style.color=n.Farbe,o.style.caretColor=n.Farbe;var a=["<strong>".concat(n.Name,"</strong>"),n.Beschreibung,"<i>".concat(n.Familie,"</i>")];e.getElementsByTagName("span")[0].innerHTML=a.join("<br>"),e.style.display="block"},hideAlert:function(){var t=document.getElementById("alert");t.style.display="none"},highlightChords:function(t){this.hideAllChords(),Q["selectAll"]("#title-".concat(t,", .title-rel-").concat(t,", #arc-").concat(t,", .arc-rel-").concat(t,", .chord-source-").concat(t,", .chord-target-").concat(t)).transition().duration(500).style("fill-opacity","1"),this.showAlert(t)},showAllChords:function(){Q["selectAll"]("text.titles, path.arcs").transition().duration(500).style("fill-opacity","1"),Q["selectAll"]("path.chord").transition().duration(500).style("fill-opacity",".7"),this.hideAlert()},hideAllChords:function(){Q["selectAll"]("text.titles, path.arcs, path.chord").transition().duration(500).style("fill-opacity",".1")},drawChart:function(){var t=this,e=new Array(this.objects.length).fill().map((function(){return new Array(t.objects.length).fill().map((function(){return 0}))}));this.correlations.forEach((function(t){e[t.to][t.from]=t.quantity}));var n=window.innerHeight-40,r={top:20,right:20,bottom:20,left:20},o=n-r.left-r.right,a=n-r.top-r.bottom,i=.39*Math.min(o,a),s=1.08*i;Q["select"]("svg").remove();var c=Q["select"]("#chart"),u=c.append("svg:svg").attr("width",o+r.left+r.right).attr("height",a+r.top+r.bottom),l=u.append("g").attr("transform","translate("+(r.left+o/2)+","+(r.top+a/2)+")").on("click",(function(){t.showAllChords()})),h=g().padding(.04).sortSubgroups(Q["descending"]).sortChords(Q["ascending"]).matrix(e),f=Q["svg"].arc().innerRadius(i).outerRadius(s),d=l.selectAll("g.group").data(h.groups).enter().append("svg:g").attr("class",(function(e){return"group group-"+t.objects[e.index].ID}));d.append("svg:path").attr("d",f).attr("id",(function(t,e){return"arc-"+e})).attr("class",(function(t){return"arcs "+t.relations.map((function(t){return"arc-rel-"+t})).join(" ")})).style("fill",(function(e){return t.objects[e.index].Farbe})).style("cursor","pointer").on("mouseover",(function(e){return t.highlightChords(e.index)})),d.append("text").each((function(t){t.angle=(t.startAngle+t.endAngle)/2})).attr("dy",".35em").attr("class",(function(t){return"titles "+t.relations.map((function(t){return"title-rel-"+t})).join(" ")})).attr("id",(function(t,e){return"title-"+e})).attr("text-anchor",(function(t){return t.angle>Math.PI?"end":null})).attr("transform",(function(t){return"rotate("+(180*t.angle/Math.PI-90)+")translate("+(s+10)+")"+(t.angle>Math.PI?"rotate(180)":"")})).style("font-size","12px").style("font-family","'Roboto Condensed'").style("font-weight","400").style("cursor","pointer").attr("fill","#333").text((function(e,n){return t.objects[n].Name})).on("mouseover",(function(e){return t.highlightChords(e.index)})),l.selectAll("path.chord").data(h.chords).enter().append("svg:path").attr("class",(function(t){return"chord chord-source-"+t.source.index+" chord-target-"+t.target.index})).attr("d",m().radius(i)).style("fill",(function(t){return"url(#chordGradient-"+t.source.index+"-"+t.target.index+")"})).style("fill-opacity","0.7");var p=u.append("defs").selectAll("linearGradient").data(h.chords).enter().append("linearGradient").attr("id",(function(t){return"chordGradient-"+t.source.index+"-"+t.target.index})).attr("gradientUnits","userSpaceOnUse").attr("x1",(function(t){return i*Math.cos((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("y1",(function(t){return i*Math.sin((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("x2",(function(t){return i*Math.cos((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)})).attr("y2",(function(t){return i*Math.sin((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)}));function g(){var t,e,n,r,o,a,i,s=Math.PI,c=2*s,u={},l=0;function h(){var o,a,s,u,h,d,p={},g=[],m=Q["range"](r),v=[];t=[],e=[],o=0,u=-1;while(++u<r){a=0,h=-1,d=[];while(++h<r)a+=n[u][h]||n[h][u];g.push(a);for(var b=0;b<r;b++)d[b]=(r+(u-1)-b)%r;v.push(d),o+=a}o=(c-l*r)/o,a=0,u=-1;while(++u<r){s=a,h=-1;var I=0,y=[];while(++h<r){I=m[u];var w=v[I][h],j=n[I][w]||n[w][I],x=a,C=a+=j*o;p[I+"-"+w]={index:I,subindex:w,startAngle:x,endAngle:C,value:j},(j||n[w][I])&&y.push(w)}e[I]={index:I,startAngle:s,endAngle:a,value:(a-s)/o,relations:y},a+=l}u=-1;while(++u<r){h=u-1;while(++h<r){var A=p[u+"-"+h],_=p[h+"-"+u];(A.value||_.value)&&t.push(A.value<_.value?{source:_,target:A}:{source:A,target:_})}}i&&f()}function f(){t.sort((function(t,e){return i((t.source.value+t.target.value)/2,(e.source.value+e.target.value)/2)}))}return u.matrix=function(o){return arguments.length?(r=(n=o)&&n.length,t=e=null,u):n},u.padding=function(n){return arguments.length?(l=n,t=e=null,u):l},u.sortGroups=function(n){return arguments.length?(o=n,t=e=null,u):o},u.sortSubgroups=function(e){return arguments.length?(a=e,t=null,u):a},u.sortChords=function(e){return arguments.length?(i=e,t&&f(),u):i},u.chords=function(){return t||h(),t},u.groups=function(){return e||h(),e},u}function m(){var t=function(t){return t.source},e=function(t){return t.target},n=function(t){return t.radius},r=function(t){return t.startAngle},o=function(t){return t.endAngle};function a(n,r){var o=i(this,t,n,r),a=i(this,e,n,r);return"M"+o.p0+c(o.r,o.p1,o.a1-o.a0)+(s(o,a)?u(o.r,o.p1,o.a1,o.r,o.p0,o.a0):u(o.r,o.p1,o.a1,a.r,a.p0,a.a0)+c(a.r,a.p1,a.a1-a.a0)+u(a.r,a.p1,a.a1,o.r,o.p0,o.a0))+"Z"}function i(t,e,a,i){var s=e.call(t,a,i),c=n.call(t,s,i),u=r.call(t,s,i)-Math.PI/2,l=o.call(t,s,i)-Math.PI/2;return{r:c,a0:u,a1:l,p0:[c*Math.cos(u),c*Math.sin(u)],p1:[c*Math.cos(l),c*Math.sin(l)]}}function s(t,e){return t.a0===e.a0&&t.a1===e.a1}function c(t,e,n){return"A"+t+","+t+" 0 "+ +(n>Math.PI)+",1 "+e}function u(t,e,n,r,o,a){var i=Math.abs(l(a-n+Math.PI,2*Math.PI)-Math.PI),s=.9*Math.pow((Math.PI-i)/Math.PI,2),c=[e[0]*s,e[1]*s],u=[o[0]*s,o[1]*s];return"C "+c[0]+" "+c[1]+", "+u[0]+" "+u[1]+", "+o[0]+" "+o[1]}function l(t,e){return(t%e+e)%e}return a.radius=function(t){return arguments.length?(n="function"===typeof t?t:function(){return t},a):n},a.source=function(e){return arguments.length?(t="function"===typeof e?e:function(){return e},a):t},a.target=function(t){return arguments.length?(e="function"===typeof t?t:function(){return t},a):e},a.startAngle=function(t){return arguments.length?(r="function"===typeof t?t:function(){return t},a):r},a.endAngle=function(t){return arguments.length?(o="function"===typeof t?t:function(){return t},a):o},a}p.append("stop").attr("offset","0%").attr("stop-color",(function(e){return t.objects[e.source.index].Farbe})),p.append("stop").attr("offset","100%").attr("stop-color",(function(e){return t.objects[e.target.index].Farbe}))}},watch:{highlightItem:function(t){this.highlightChords(t)}}},X=W,Y=(n("e3e9"),n("0798")),tt=Object(I["a"])(X,L,Z,!1,null,null,null),et=tt.exports;w()(tt,{VAlert:Y["a"],VContainer:M["a"]});var nt=n("25ca"),rt=function(t){return t.map((function(t){return t.active=!0,t}))},ot={name:"App",components:{Controls:J,Chart:et},data:function(){return{objectsData:{},objects:[],correlationsData:{},showGroup:"",highlightItem:null}},mounted:function(){var t=this,e="./input.xlsx";fetch(e).then((function(t){return t.arrayBuffer()})).then((function(e){var n=nt["a"](e);t.objectsData=nt["b"].sheet_to_json(n.Sheets["Objekte"]),t.correlationsData=nt["b"].sheet_to_json(n.Sheets["Korrelationen"]),t.objects=rt(t.objectsData),console.log(t.objects)}))},computed:{activeObjects:function(){return this.objects.filter((function(t){return t.active}))},correlations:function(){var t,e=[],n=Object(s["a"])(this.activeObjects.entries());try{for(n.s();!(t=n.n()).done;){var r=Object(i["a"])(t.value,2),o=r[0],a=r[1];if(!(this.correlationsData.length<=a.ID)){var c,u=Object(s["a"])(this.activeObjects.entries());try{for(u.s();!(c=u.n()).done;){var l=Object(i["a"])(c.value,2),h=l[0],f=l[1],d=this.correlationsData[a.ID][f.ID];"number"===typeof d&&e.push({from:o,to:h,quantity:d})}}catch(p){u.e(p)}finally{u.f()}}}}catch(p){n.e(p)}finally{n.f()}return e}},methods:{generateKey:function(){var t=this.activeObjects.map((function(t){return t.Farbe})).join("");return"".concat(this.activeObjects.length,"-").concat(t)}}},at=ot,it=(n("034f"),n("7496")),st=n("f6c4"),ct=n("f774"),ut=Object(I["a"])(at,o,a,!1,null,null,null),lt=ut.exports;w()(ut,{VApp:it["a"],VMain:st["a"],VNavigationDrawer:ct["a"]});var ht=n("2f62");r["a"].use(ht["a"]);var ft={packageVersion:"1.0.3"},dt=new ht["a"].Store({state:ft}),pt=n("f309");r["a"].use(pt["a"]);var gt=new pt["a"]({theme:{dark:!0,themes:{dark:{primary:"#ffffff",secondary:"#ffffff",background:"#ffffff"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:gt,store:dt,render:function(t){return t(lt)}}).$mount("#app")},"622a":function(t,e,n){"use strict";n("176e")},"69a9":function(t,e,n){"use strict";n("e0ab")},"74ff":function(t,e,n){},"85ec":function(t,e,n){},a0dc:function(t,e,n){},c7f2:function(t,e,n){"use strict";n("74ff")},e0ab:function(t,e,n){},e3e9:function(t,e,n){"use strict";n("a0dc")}});
//# sourceMappingURL=app.672931f8.js.map