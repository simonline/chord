(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],h=0,d=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"176e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{color:"#766bf5",width:"350px",permanent:"",absolute:""}},[n("Controls",{key:t.generateKey(),attrs:{objects:t.objects,showGroup:t.showGroup,highlightItem:t.highlightItem,indirect:t.indirect},on:{"update:objects":function(e){t.objects=e},"update:showGroup":function(e){t.showGroup=e},"update:show-group":function(e){t.showGroup=e},"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e},"update:indirect":function(e){t.indirect=e},"update:file":t.loadFile,"update:url":t.loadURL}})],1),n("v-main",{staticClass:"main"},[n("Chart",{key:t.generateKey(),attrs:{objects:t.activeObjects,correlations:t.correlations,highlightItem:t.highlightItem,indirect:t.indirect},on:{"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e}}})],1)],1)},i=[],o=n("3835"),c=n("b85c"),s=(n("d81d"),n("fb6a"),n("4de4"),n("d3b7"),n("ddb0"),n("a15b"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"my-5"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-4",attrs:{light:""}},"v-btn",a,!1),r),[t._v(" Öffnen ")])]}}])},[n("v-list",[n("v-list-item",{key:"file"},[n("v-list-item-title",{staticClass:"file-input",on:{click:function(e){return t.$refs.file.click()}}},[t._v(" Datei hochladen "),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.updateFile}})])],1),n("v-list-item",{key:"url"},[n("v-list-item-title",[n("OpenUrlModal",{attrs:{"url.sync":"url"},on:{"update:url":t.updateURL}})],1)],1)],1)],1),t._l(Object.keys(t.groups),(function(e){return n("ControlGroup",{key:e,attrs:{name:e,items:t.groups[e],showItems:t.showGroup===e,highlightItem:t.controlsHighlightItem},on:{"update:items":[function(n){return t.$set(t.groups,e,n)},function(n){return t.updateObjects(t.groups[e])}],"update:highlightItem":[function(e){t.controlsHighlightItem=e},function(e){return t.updateHighlightItem(t.controlsHighlightItem)}],"update:highlight-item":function(e){t.controlsHighlightItem=e},"update:showItems":function(n){return t.updateShowGroup(e)}}})})),n("div",{staticClass:"bottom"},[t.objects.length?n("v-switch",{staticClass:"indirect",attrs:{"input-value":t.indirect,label:t.indirect?"Indirekte Verbindungen (2 Hops)":"Direkte Verbindungen (1 Hop)"},on:{change:t.updateIndirect}}):t._e(),n("v-chip",{staticClass:"version"},[t._v(" Version "+t._s(this.$store.state.packageVersion)+" ")])],1)],2)}),l=[],u=n("ade3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mb-1 item"},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"ripple"},expression:"{ class: 'ripple' }"}],staticClass:"button",attrs:{icon:""},on:{click:t.toggleShowItems}},[n("v-icon",[t._v(" "+t._s(t.showItems?"mdi-minus-box":"mdi-plus-box")+" ")])],1),n("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":t.items.every((function(t){return t.active}))},on:{change:function(e){return t.setActiveItems(e)}}}),n("UpdateItemModal",{attrs:{items:t.coloredItems},on:{"update:items":[function(e){t.coloredItems=e},function(e){return t.updateItems(t.coloredItems)}]}}),n("label",{staticClass:"ml-2"},[t._v(" "+t._s(t.name)+" ")])],1),t.showItems?n("v-container",{staticClass:"pl-6"},t._l(t.items,(function(e){return n("v-row",{key:e.ID,staticClass:"item"},[n("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":e.active},on:{change:function(n){return t.setActiveItem(e.ID,n)}},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}}),n("UpdateItemModal",{attrs:{item:e},on:{"update:item":[function(t){e=t},function(n){return t.updateItem(e)}]}}),n("label",{staticClass:"ml-2",on:{mouseover:function(n){return t.updateHighlightItem(e.ID)}}},[t._v(" "+t._s(e.Name)+" ")])],1)})),1):t._e()],1)},d=[],f=n("2909"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"button",attrs:{icon:""}},"v-btn",a,!1),r),[n("v-icon",{staticClass:"icon",style:{"background-color":t.color}},[t._v(" mdi-pencil-box-outline ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{color:"#766bf5"}},[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("Bearbeiten")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-color-picker",{attrs:{"dot-size":"25","swatches-max-height":"200",mode:"hexa",light:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.setColor()}}},[t._v(" Speichern ")])],1)],1)],1)},g=[],m=n("5530"),v={props:["item","items"],data:function(){return{dialog:!1,color:this.item?this.item.Farbe:this.items[0].Farbe}},methods:{setColor:function(){var t=this;if(this.dialog=!1,console.log(this.color),this.item){var e=Object(m["a"])(Object(m["a"])({},this.item),{},{Farbe:this.color});this.$emit("update:item",e)}else this.$emit("update:items",this.items.map((function(e){return e.Farbe=t.color,e})))}}},b=v,y=(n("622a"),n("2877")),I=n("6544"),w=n.n(I),x=n("8336"),j=n("b0af"),C=n("99d9"),_=n("62ad"),A=n("03a4"),O=n("a523"),V=n("169a"),k=n("132d"),M=n("0fd9"),D=n("2fa4"),$=Object(y["a"])(b,p,g,!1,null,null,null),S=$.exports;w()($,{VBtn:x["a"],VCard:j["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VCol:_["a"],VColorPicker:A["a"],VContainer:O["a"],VDialog:V["a"],VIcon:k["a"],VRow:M["a"],VSpacer:D["a"]});var P={props:["name","items","showItems","highlightItem"],components:{UpdateItemModal:S},data:function(){return{coloredItems:Object(f["a"])(this.items)}},methods:{toggleShowItems:function(){this.$emit("update:showItems",!this.showItems)},setActiveItems:function(t){this.$emit("update:items",this.items.map((function(e){return e.active=t,e})))},setActiveItem:function(t,e){this.$emit("update:items",this.items.map((function(n){return n.ID===t.ID&&(t.active=e),n})))},updateHighlightItem:function(t){this.$emit("update:highlightItem",t)},updateItems:function(t){this.$emit("update:items",t)},updateItem:function(t){this.$emit("update:items",this.items.map((function(e){return e.ID===t.ID?t:e})))}}},U=P,F=(n("c7f2"),n("ac7c")),R=n("269a"),G=n.n(R),L=n("5607"),B=Object(y["a"])(U,h,d,!1,null,null,null),H=B.exports;w()(B,{VBtn:x["a"],VCheckbox:F["a"],VContainer:O["a"],VIcon:k["a"],VRow:M["a"]}),G()(B,{Ripple:L["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("div",t._g(t._b({},"div",a,!1),r),[t._v(" URL öffnen ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{color:"#766bf5"}},[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("URL öffnen")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"URL",placeholder:"https://www.dropbox.com/s/1234567890abcde/input.xlsx?dl=0"},model:{value:t.newUrl,callback:function(e){t.newUrl=e},expression:"newUrl"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.updateURL(t.newUrl)}}},[t._v(" Öffnen ")])],1)],1)],1)},T=[],N={props:["url"],data:function(){return{dialog:!1,newUrl:this.url}},methods:{updateURL:function(t){this.$emit("update:url",t),this.dialog=!1}}},K=N,q=n("8654"),z=Object(y["a"])(K,E,T,!1,null,null,null),J=z.exports;w()(z,{VBtn:x["a"],VCard:j["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VCol:_["a"],VContainer:O["a"],VDialog:V["a"],VRow:M["a"],VSpacer:D["a"],VTextField:q["a"]});var Z=function(t,e){return t.reduce((function(t,n){return t[n[e]]=t[n[e]]||[],t[n[e]].push(n),t}),Object.create(null))},Q={props:["objects","showGroup","highlightItem","indirect","file","url"],components:{ControlGroup:H,OpenUrlModal:J},data:function(){return{groups:Z(this.objects,"Familie"),controlsHighlightItem:this.highlightItem}},methods:{updateObjects:function(t){var e=t.reduce((function(t,e){return Object.assign(t,Object(u["a"])({},e.ID,e))}),{});this.$emit("update:objects",this.objects.map((function(t){return t.ID in e?e[t.ID]:t})))},updateShowGroup:function(t){this.$emit("update:showGroup",t!==this.showGroup?t:"")},updateHighlightItem:function(t){this.$emit("update:highlightItem",t)},updateIndirect:function(t){this.$emit("update:indirect",!!t)},updateFile:function(){var t=this,e=this.$refs.file.files;if(0!==e.length){var n=new FileReader;n.readAsArrayBuffer(e[0]),n.onload=function(){return t.$emit("update:file",n.result)}}},updateURL:function(t){this.$emit("update:url",t)}}},W=Q,X=(n("69a9"),n("cc20")),Y=n("8860"),tt=n("da13"),et=n("5d23"),nt=n("e449"),rt=n("b73d"),at=Object(y["a"])(W,s,l,!1,null,null,null),it=at.exports;w()(at,{VBtn:x["a"],VChip:X["a"],VContainer:O["a"],VList:Y["a"],VListItem:tt["a"],VListItemTitle:et["a"],VMenu:nt["a"],VSwitch:rt["a"]});var ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{attrs:{id:"chart"}},[n("v-alert",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{dismissible:"",width:"400",color:"#766bf5",id:"alert",border:"left",icon:"mdi-information","colored-border":"",light:"",outlined:""}},[n("span")])],1)])},ct=[],st=(n("caad"),n("2532"),n("a434"),n("cb29"),n("159b"),n("4e827"),n("c740"),n("6e58")),lt={props:["objects","correlations","highlightItem","indirect"],data:function(){return{svg:null,matrix:[],highlightedItems:[]}},mounted:function(){this.drawChart()},methods:{showAlert:function(t){var e=document.getElementById("alert"),n=this.objects[t],r=e.getElementsByClassName("v-alert__border")[0],a=e.getElementsByClassName("mdi-close-circle")[0];r.style.borderColor=n.Farbe,a.style.color=n.Farbe,a.style.caretColor=n.Farbe;var i=["<strong>".concat(n.Name,"</strong>"),n.Beschreibung,"<i>".concat(n.Familie,"</i>")];e.getElementsByTagName("span")[0].innerHTML=i.join("<br>"),e.style.display="block"},hideAlert:function(){var t=document.getElementById("alert");t.style.display="none"},highlightChords:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=Object(f["a"])(this.highlightedItems);if(r.includes(t)?r.splice(r.indexOf(t),1):(!this.indirect||r.length<2)&&r.push(t),r!==this.highlightedItems)if(n&&(this.highlightedItems=r),0!==r.length){var a=function(t){var n=e.matrix.reduce((function(e,n,r){return n[t]?e.concat(r):e}),[]);return n.push.apply(n,Object(f["a"])(e.matrix[t].reduce((function(t,e,n){return e?t.concat(n):t}),[]))),n},i=[];if(this.indirect&&2===r.length){var o,s=Object(c["a"])(r);try{for(s.s();!(o=s.n()).done;){var l=o.value;i.push.apply(i,["#title-".concat(l),"#arc-".concat(l)]);var u,h=a(l),d=Object(c["a"])(r);try{var p=function(){var t=u.value;if(l===t)return"continue";var e,n=a(t),r=h.filter((function(t){return n.includes(t)})),o=Object(c["a"])(r);try{for(o.s();!(e=o.n()).done;){var s=e.value;i.push.apply(i,["#title-".concat(s),"#arc-".concat(s),".chord-source-".concat(l,".chord-target-").concat(s),".chord-source-".concat(t,".chord-target-").concat(s),".chord-source-".concat(s,".chord-target-").concat(l),".chord-source-".concat(s,".chord-target-").concat(t)])}}catch(d){o.e(d)}finally{o.f()}};for(d.s();!(u=d.n()).done;)p()}catch(w){d.e(w)}finally{d.f()}}}catch(w){s.e(w)}finally{s.f()}}else{var g,m=Object(c["a"])(r);try{for(m.s();!(g=m.n()).done;){var v=g.value;if(i.push.apply(i,["#title-".concat(v),".title-rel-".concat(v),"#arc-".concat(v),".arc-rel-".concat(v),".chord-source-".concat(v),".chord-target-".concat(v)]),this.indirect){var b,y=Object(c["a"])(a(v));try{for(y.s();!(b=y.n()).done;){var I=b.value;i.push.apply(i,["#title-".concat(I),".title-rel-".concat(I),"#arc-".concat(I),".arc-rel-".concat(I),".chord-source-".concat(I),".chord-target-".concat(I)])}}catch(w){y.e(w)}finally{y.f()}}}}catch(w){m.e(w)}finally{m.f()}}this.hideAllChords(),st["selectAll"](i.join(", ")).transition().duration(500).style("fill-opacity","1"),st["selectAll"](r.map((function(t){return"#title-".concat(t)})).join(", ")).style("font-weight","bold"),1===r.length?this.showAlert(r[0]):this.hideAlert()}else this.showAllChords()},showAllChords:function(){st["selectAll"]("text.titles, path.arcs").transition().duration(500).style("fill-opacity","1").style("font-weight","normal"),st["selectAll"]("path.chord").transition().duration(500).style("fill-opacity",".7"),this.hideAlert()},hideAllChords:function(){st["selectAll"]("text.titles, path.arcs, path.chord").transition().duration(500).style("fill-opacity",".1").style("font-weight","normal")},drawChart:function(){var t=this;this.matrix=new Array(this.objects.length).fill().map((function(){return new Array(t.objects.length).fill().map((function(){return 0}))})),this.correlations.forEach((function(e){t.matrix[e.to][e.from]=e.quantity}));var e=window.innerHeight-40,n={top:20,right:20,bottom:20,left:20},r=e-n.left-n.right,a=e-n.top-n.bottom,i=.39*Math.min(r,a),o=1.08*i;st["select"]("svg").remove();var c=st["select"]("#chart"),s=c.append("svg:svg").attr("width",r+n.left+n.right).attr("height",a+n.top+n.bottom),l=s.append("g").attr("transform","translate("+(n.left+r/2)+","+(n.top+a/2)+")"),u=p().padding(.03).sortSubgroups(st["descending"]).sortChords(st["ascending"]).matrix(this.matrix),h=st["svg"].arc().innerRadius(i).outerRadius(o),d=l.selectAll("g.group").data(u.groups).enter().append("svg:g").attr("class",(function(e){return"group group-"+t.objects[e.index].ID}));d.append("svg:path").attr("d",h).attr("id",(function(t,e){return"arc-"+e})).attr("class",(function(t){return"arcs "+t.relations.map((function(t){return"arc-rel-"+t})).join(" ")})).style("fill",(function(e){return t.objects[e.index].Farbe})).style("cursor","pointer").on("click",(function(e){return t.highlightChords(e.index)})),d.append("text").each((function(t){t.angle=(t.startAngle+t.endAngle)/2})).attr("dy",".35em").attr("class",(function(t){return"titles "+t.relations.map((function(t){return"title-rel-"+t})).join(" ")})).attr("id",(function(t,e){return"title-"+e})).attr("text-anchor",(function(t){return t.angle>Math.PI?"end":null})).attr("transform",(function(t){return"rotate("+(180*t.angle/Math.PI-90)+")translate("+(o+10)+")"+(t.angle>Math.PI?"rotate(180)":"")})).style("font-size","12px").style("font-family","'Roboto Condensed'").style("font-weight","400").style("cursor","pointer").attr("fill","#333").text((function(e,n){return t.objects[n].Name})).on("click",(function(e){return t.highlightChords(e.index)})),l.selectAll("path.chord").data(u.chords).enter().append("svg:path").attr("class",(function(t){return"chord chord-source-"+t.source.index+" chord-target-"+t.target.index})).attr("d",g().radius(i)).style("fill",(function(t){return"url(#chordGradient-"+t.source.index+"-"+t.target.index+")"})).style("fill-opacity","0.7");var f=s.append("defs").selectAll("linearGradient").data(u.chords).enter().append("linearGradient").attr("id",(function(t){return"chordGradient-"+t.source.index+"-"+t.target.index})).attr("gradientUnits","userSpaceOnUse").attr("x1",(function(t){return i*Math.cos((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("y1",(function(t){return i*Math.sin((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("x2",(function(t){return i*Math.cos((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)})).attr("y2",(function(t){return i*Math.sin((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)}));function p(){var t,e,n,r,a,i,o,c=Math.PI,s=2*c,l={},u=0;function h(){var a,i,c,l,h,f,p={},g=[],m=st["range"](r),v=[];t=[],e=[],a=0,l=-1;while(++l<r){i=0,h=-1,f=[];while(++h<r)i+=n[l][h]||n[h][l];g.push(i);for(var b=0;b<r;b++)f[b]=(r+(l-1)-b)%r;v.push(f),a+=i}a=(s-u*r)/a,i=0,l=-1;while(++l<r){c=i,h=-1;var y=0,I=[];while(++h<r){y=m[l];var w=v[y][h],x=n[y][w]||n[w][y],j=i,C=i+=x*a;p[y+"-"+w]={index:y,subindex:w,startAngle:j,endAngle:C,value:x},(x||n[w][y])&&I.push(w)}e[y]={index:y,startAngle:c,endAngle:i,value:(i-c)/a,relations:I},i+=u}l=-1;while(++l<r){h=l-1;while(++h<r){var _=p[l+"-"+h],A=p[h+"-"+l];(_.value||A.value)&&t.push(_.value<A.value?{source:A,target:_}:{source:_,target:A})}}o&&d()}function d(){t.sort((function(t,e){return o((t.source.value+t.target.value)/2,(e.source.value+e.target.value)/2)}))}return l.matrix=function(a){return arguments.length?(r=(n=a)&&n.length,t=e=null,l):n},l.padding=function(n){return arguments.length?(u=n,t=e=null,l):u},l.sortGroups=function(n){return arguments.length?(a=n,t=e=null,l):a},l.sortSubgroups=function(e){return arguments.length?(i=e,t=null,l):i},l.sortChords=function(e){return arguments.length?(o=e,t&&d(),l):o},l.chords=function(){return t||h(),t},l.groups=function(){return e||h(),e},l}function g(){var t=function(t){return t.source},e=function(t){return t.target},n=function(t){return t.radius},r=function(t){return t.startAngle},a=function(t){return t.endAngle};function i(n,r){var a=o(this,t,n,r),i=o(this,e,n,r);return"M"+a.p0+s(a.r,a.p1,a.a1-a.a0)+(c(a,i)?l(a.r,a.p1,a.a1,a.r,a.p0,a.a0):l(a.r,a.p1,a.a1,i.r,i.p0,i.a0)+s(i.r,i.p1,i.a1-i.a0)+l(i.r,i.p1,i.a1,a.r,a.p0,a.a0))+"Z"}function o(t,e,i,o){var c=e.call(t,i,o),s=n.call(t,c,o),l=r.call(t,c,o)-Math.PI/2,u=a.call(t,c,o)-Math.PI/2;return{r:s,a0:l,a1:u,p0:[s*Math.cos(l),s*Math.sin(l)],p1:[s*Math.cos(u),s*Math.sin(u)]}}function c(t,e){return t.a0===e.a0&&t.a1===e.a1}function s(t,e,n){return"A"+t+","+t+" 0 "+ +(n>Math.PI)+",1 "+e}function l(t,e,n,r,a,i){var o=Math.abs(u(i-n+Math.PI,2*Math.PI)-Math.PI),c=.9*Math.pow((Math.PI-o)/Math.PI,2),s=[e[0]*c,e[1]*c],l=[a[0]*c,a[1]*c];return"C "+s[0]+" "+s[1]+", "+l[0]+" "+l[1]+", "+a[0]+" "+a[1]}function u(t,e){return(t%e+e)%e}return i.radius=function(t){return arguments.length?(n="function"===typeof t?t:function(){return t},i):n},i.source=function(e){return arguments.length?(t="function"===typeof e?e:function(){return e},i):t},i.target=function(t){return arguments.length?(e="function"===typeof t?t:function(){return t},i):e},i.startAngle=function(t){return arguments.length?(r="function"===typeof t?t:function(){return t},i):r},i.endAngle=function(t){return arguments.length?(a="function"===typeof t?t:function(){return t},i):a},i}f.append("stop").attr("offset","0%").attr("stop-color",(function(e){return t.objects[e.source.index].Farbe})),f.append("stop").attr("offset","100%").attr("stop-color",(function(e){return t.objects[e.target.index].Farbe}))}},watch:{highlightItem:function(t){var e=this.objects.findIndex((function(e){return e.ID===t}));e>-1&&this.highlightChords(e,!1)}}},ut=lt,ht=(n("e3e9"),n("0798")),dt=Object(y["a"])(ut,ot,ct,!1,null,null,null),ft=dt.exports;w()(dt,{VAlert:ht["a"],VContainer:O["a"]});var pt=n("25ca"),gt=function(t){return t.map((function(t){return t.active=!0,t}))},mt={name:"App",components:{Controls:it,Chart:ft},data:function(){return{objectsData:{},objects:[],correlationsData:{},showGroup:"",highlightItem:null,indirect:!1}},mounted:function(){window.location.hash&&this.loadURL(decodeURIComponent(window.location.hash.slice(1)))},computed:{activeObjects:function(){return this.objects.filter((function(t){return t.active}))},correlations:function(){var t,e=[],n=Object(c["a"])(this.activeObjects.entries());try{for(n.s();!(t=n.n()).done;){var r=Object(o["a"])(t.value,2),a=r[0],i=r[1];if(!(this.correlationsData.length<=i.ID)){var s,l=Object(c["a"])(this.activeObjects.entries());try{for(l.s();!(s=l.n()).done;){var u=Object(o["a"])(s.value,2),h=u[0],d=u[1],f=this.correlationsData[i.ID][d.ID];"number"===typeof f&&e.push({from:a,to:h,quantity:f})}}catch(p){l.e(p)}finally{l.f()}}}}catch(p){n.e(p)}finally{n.f()}return e}},methods:{generateKey:function(){var t=this.activeObjects.map((function(t){return t.Farbe})).join("");return"".concat(this.activeObjects.length,"-").concat(t,"-").concat(this.indirect)},loadFile:function(t,e){var n=pt["a"](t);this.objectsData=pt["b"].sheet_to_json(n.Sheets["Objekte"]),this.correlationsData=pt["b"].sheet_to_json(n.Sheets["Korrelationen"]),this.objects=gt(this.objectsData),window.location.hash=e?encodeURIComponent(e):""},loadURL:function(t){var e=this;fetch(t).then((function(t){return t.arrayBuffer()})).then((function(n){return e.loadFile(n,t)}))}}},vt=mt,bt=(n("034f"),n("7496")),yt=n("f6c4"),It=n("f774"),wt=Object(y["a"])(vt,a,i,!1,null,null,null),xt=wt.exports;w()(wt,{VApp:bt["a"],VMain:yt["a"],VNavigationDrawer:It["a"]});var jt=n("2f62");r["a"].use(jt["a"]);var Ct={packageVersion:"1.0.6"},_t=new jt["a"].Store({state:Ct}),At=n("f309");r["a"].use(At["a"]);var Ot=new At["a"]({theme:{dark:!0,themes:{dark:{primary:"#ffffff",secondary:"#ffffff",background:"#ffffff"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:Ot,store:_t,render:function(t){return t(xt)}}).$mount("#app")},"622a":function(t,e,n){"use strict";n("176e")},"69a9":function(t,e,n){"use strict";n("e0ab")},"74ff":function(t,e,n){},"85ec":function(t,e,n){},a0dc:function(t,e,n){},c7f2:function(t,e,n){"use strict";n("74ff")},e0ab:function(t,e,n){},e3e9:function(t,e,n){"use strict";n("a0dc")}});
//# sourceMappingURL=app.6406d12c.js.map