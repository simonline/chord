(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],h=0,d=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"176e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{color:"#766bf5",width:"350px",permanent:"",absolute:""}},[n("Controls",{key:t.generateKey(),attrs:{objects:t.objects,showGroup:t.showGroup,highlightItem:t.highlightItem,indirect:t.indirect},on:{"update:objects":function(e){t.objects=e},"update:showGroup":function(e){t.showGroup=e},"update:show-group":function(e){t.showGroup=e},"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e},"update:indirect":function(e){t.indirect=e},"update:file":t.loadFile,"update:url":t.loadURL}})],1),n("v-main",{staticClass:"main"},[n("Chart",{key:t.generateKey(),attrs:{objects:t.activeObjects,correlations:t.correlations,highlightItem:t.highlightItem,indirect:t.indirect},on:{"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e}}})],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"my-5"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-4",attrs:{light:""}},"v-btn",i,!1),r),[t._v(" Öffnen ")])]}}])},[n("v-list",[n("v-list-item",{key:"file"},[n("v-list-item-title",{staticClass:"file-input",on:{click:function(e){return t.$refs.file.click()}}},[t._v(" Datei hochladen "),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.updateFile}})])],1),n("v-list-item",{key:"url"},[n("v-list-item-title",[n("OpenUrlModal",{attrs:{"url.sync":"url"},on:{"update:url":t.updateURL}})],1)],1)],1)],1),t._l(Object.keys(t.groups),(function(e){return n("ControlGroup",{key:e,attrs:{name:e,items:t.groups[e],showItems:t.showGroup===e,highlightItem:t.controlsHighlightItem},on:{"update:items":[function(n){return t.$set(t.groups,e,n)},function(n){return t.updateObjects(t.groups[e])}],"update:highlightItem":[function(e){t.controlsHighlightItem=e},function(e){return t.updateHighlightItem(t.controlsHighlightItem)}],"update:highlight-item":function(e){t.controlsHighlightItem=e},"update:showItems":function(n){return t.updateShowGroup(e)}}})})),n("div",{staticClass:"bottom"},[t.objects.length?n("v-switch",{staticClass:"indirect",attrs:{"input-value":t.indirect,label:t.indirect?"Indirekte Verbindungen (2 Hops)":"Direkte Verbindungen (1 Hop)"},on:{change:t.updateIndirect}}):t._e(),n("div",{staticClass:"d-flex flex-row"},[n("v-sheet",{staticClass:"d-flex flex-row",staticStyle:{background:"transparent"}},[n("v-sheet",{staticStyle:{background:"transparent"}},[n("a",{staticClass:"mt-3",attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/3.0/de/",target:"_blank"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons Lizenzvertrag",src:"https://i.creativecommons.org/l/by/3.0/de/88x31.png"}})])]),n("v-sheet",{staticClass:"mx-2",staticStyle:{background:"transparent","line-height":".9em"}},[n("small",[t._v(" Prof. Dr. Peter Dürr"),n("br"),t._v("& Simon Liedtke ")])])],1),n("v-chip",{staticClass:"version mb-2"},[t._v(" Version "+t._s(this.$store.state.packageVersion)+" ")])],1)],1)],2)},s=[],l=(n("13d5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mb-1 item"},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"ripple"},expression:"{ class: 'ripple' }"}],staticClass:"button",attrs:{icon:""},on:{click:t.toggleShowItems}},[n("v-icon",[t._v(" "+t._s(t.showItems?"mdi-minus-box":"mdi-plus-box")+" ")])],1),n("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":t.items.every((function(t){return t.active}))},on:{change:function(e){return t.setActiveItems(e)}}}),n("UpdateItemModal",{attrs:{items:t.coloredItems},on:{"update:items":[function(e){t.coloredItems=e},function(e){return t.updateItems(t.coloredItems)}]}}),n("label",{staticClass:"ml-2"},[t._v(" "+t._s(t.name)+" ")])],1),t.showItems?n("v-container",{staticClass:"pl-6"},t._l(t.items,(function(e){return n("v-row",{key:e.ID,staticClass:"item"},[n("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":e.active},on:{change:function(n){return t.setActiveItem(e.ID,n)}},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}}),n("UpdateItemModal",{attrs:{item:e},on:{"update:item":[function(t){e=t},function(n){return t.updateItem(e)}]}}),n("label",{staticClass:"ml-2",on:{mouseover:function(n){return t.updateHighlightItem(e.ID)}}},[t._v(" "+t._s(e.Name)+" ")])],1)})),1):t._e()],1)}),c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"button",attrs:{icon:""}},"v-btn",i,!1),r),[n("v-icon",{staticClass:"icon",style:{"background-color":t.color}},[t._v(" mdi-pencil-box-outline ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{color:"#766bf5"}},[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("Bearbeiten")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-color-picker",{attrs:{"dot-size":"25","swatches-max-height":"200",mode:"hexa",light:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.setColor()}}},[t._v(" Speichern ")])],1)],1)],1)},h=[],d={props:["item","items"],data(){return{dialog:!1,color:this.item?this.item.Farbe:this.items[0].Farbe}},methods:{setColor(){if(this.dialog=!1,console.log(this.color),this.item){const t={...this.item,Farbe:this.color};this.$emit("update:item",t)}else this.$emit("update:items",this.items.map(t=>(t.Farbe=this.color,t)))}}},p=d,f=(n("622a"),n("2877")),g=n("6544"),m=n.n(g),v=n("8336"),b=n("b0af"),I=n("99d9"),w=n("62ad"),y=n("03a4"),x=n("a523"),C=n("169a"),j=n("132d"),_=n("0fd9"),A=n("2fa4"),k=Object(f["a"])(p,u,h,!1,null,null,null),V=k.exports;m()(k,{VBtn:v["a"],VCard:b["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:w["a"],VColorPicker:y["a"],VContainer:x["a"],VDialog:C["a"],VIcon:j["a"],VRow:_["a"],VSpacer:A["a"]});var M={props:["name","items","showItems","highlightItem"],components:{UpdateItemModal:V},data(){return{coloredItems:[...this.items]}},methods:{toggleShowItems(){this.$emit("update:showItems",!this.showItems)},setActiveItems(t){this.$emit("update:items",this.items.map(e=>(e.active=t,e)))},setActiveItem(t,e){this.$emit("update:items",this.items.map(n=>(n.ID===t.ID&&(t.active=e),n)))},updateHighlightItem(t){this.$emit("update:highlightItem",t)},updateItems(t){this.$emit("update:items",t)},updateItem(t){this.$emit("update:items",this.items.map(e=>e.ID===t.ID?t:e))}}},$=M,O=(n("c7f2"),n("ac7c")),S=n("269a"),D=n.n(S),P=n("5607"),U=Object(f["a"])($,l,c,!1,null,null,null),F=U.exports;m()(U,{VBtn:v["a"],VCheckbox:O["a"],VContainer:x["a"],VIcon:j["a"],VRow:_["a"]}),D()(U,{Ripple:P["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[n("div",t._g(t._b({},"div",i,!1),r),[t._v(" URL öffnen ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{color:"#766bf5"}},[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("URL öffnen")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"URL",placeholder:"https://www.dropbox.com/s/1234567890abcde/input.xlsx?dl=0"},model:{value:t.newUrl,callback:function(e){t.newUrl=e},expression:"newUrl"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.updateURL(t.newUrl)}}},[t._v(" Öffnen ")])],1)],1)],1)},G=[],L={props:["url"],data(){return{dialog:!1,newUrl:this.url}},methods:{updateURL(t){this.$emit("update:url",t),this.dialog=!1}}},B=L,H=n("8654"),E=Object(f["a"])(B,R,G,!1,null,null,null),T=E.exports;m()(E,{VBtn:v["a"],VCard:b["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:w["a"],VContainer:x["a"],VDialog:C["a"],VRow:_["a"],VSpacer:A["a"],VTextField:H["a"]});const N=(t,e)=>t.reduce((function(t,n){return t[n[e]]=t[n[e]]||[],t[n[e]].push(n),t}),Object.create(null));var z={props:["objects","showGroup","highlightItem","indirect","file","url"],components:{ControlGroup:F,OpenUrlModal:T},data:function(){return{groups:N(this.objects,"Familie"),controlsHighlightItem:this.highlightItem}},methods:{updateObjects(t){const e=t.reduce((t,e)=>Object.assign(t,{[e.ID]:e}),{});this.$emit("update:objects",this.objects.map(t=>t.ID in e?e[t.ID]:t))},updateShowGroup(t){this.$emit("update:showGroup",t!==this.showGroup?t:"")},updateHighlightItem(t){this.$emit("update:highlightItem",t)},updateIndirect(t){this.$emit("update:indirect",!!t)},updateFile(){const t=this.$refs.file.files;if(0===t.length)return;let e=new FileReader;e.readAsArrayBuffer(t[0]),e.onload=()=>this.$emit("update:file",e.result)},updateURL(t){this.$emit("update:url",t)}}},K=z,q=(n("69a9"),n("cc20")),J=n("8860"),Z=n("da13"),Q=n("5d23"),W=n("e449"),X=n("8dd9"),Y=n("b73d"),tt=Object(f["a"])(K,o,s,!1,null,null,null),et=tt.exports;m()(tt,{VBtn:v["a"],VChip:q["a"],VContainer:x["a"],VList:J["a"],VListItem:Z["a"],VListItemTitle:Q["a"],VMenu:W["a"],VSheet:X["a"],VSwitch:Y["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{attrs:{id:"chart"}},[n("v-alert",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{dismissible:"",width:"400",color:"#766bf5",id:"alert",border:"left",icon:"mdi-information","colored-border":"",light:"",outlined:""}},[n("span")])],1)])},rt=[],it=n("6e58"),at={props:["objects","correlations","highlightItem","indirect"],data:()=>({svg:null,matrix:[],highlightedItems:[]}),mounted(){this.drawChart()},methods:{showAlert(t){const e=document.getElementById("alert"),n=this.objects[t],r=e.getElementsByClassName("v-alert__border")[0],i=e.getElementsByClassName("mdi-close-circle")[0];r.style.borderColor=n.Farbe,i.style.color=n.Farbe,i.style.caretColor=n.Farbe;var a=[`<strong>${n.Name}</strong>`,n.Beschreibung,`<i>${n.Familie}</i>`];e.getElementsByTagName("span")[0].innerHTML=a.join("<br>"),e.style.display="block"},hideAlert(){const t=document.getElementById("alert");t.style.display="none"},highlightChords(t,e=!0){const n=[...this.highlightedItems];if(n.includes(t)?n.splice(n.indexOf(t),1):(!this.indirect||n.length<2)&&n.push(t),n===this.highlightedItems)return;if(e&&(this.highlightedItems=n),0===n.length)return void this.showAllChords();const r=t=>{const e=this.matrix.reduce((e,n,r)=>n[t]?e.concat(r):e,[]);return e.push(...this.matrix[t].reduce((t,e,n)=>e?t.concat(n):t,[])),e};let i=[];if(this.indirect&&2===n.length)for(const a of n){i.push("#title-"+a,"#arc-"+a);const t=r(a);for(const e of n){if(a===e)continue;const n=r(e),o=t.filter(t=>n.includes(t));for(const t of o)i.push("#title-"+t,"#arc-"+t,`.chord-source-${a}.chord-target-${t}`,`.chord-source-${e}.chord-target-${t}`,`.chord-source-${t}.chord-target-${a}`,`.chord-source-${t}.chord-target-${e}`)}}else for(const a of n)if(i.push("#title-"+a,".title-rel-"+a,"#arc-"+a,".arc-rel-"+a,".chord-source-"+a,".chord-target-"+a),this.indirect)for(const t of r(a))i.push("#title-"+t,".title-rel-"+t,"#arc-"+t,".arc-rel-"+t,".chord-source-"+t,".chord-target-"+t);this.hideAllChords(),it["selectAll"](i.join(", ")).transition().duration(500).style("fill-opacity","1"),it["selectAll"](n.map(t=>"#title-"+t).join(", ")).style("font-weight","bold"),1===n.length?this.showAlert(n[0]):this.hideAlert()},showAllChords(){it["selectAll"]("text.titles, path.arcs").transition().duration(500).style("fill-opacity","1").style("font-weight","normal"),it["selectAll"]("path.chord").transition().duration(500).style("fill-opacity",".7"),this.hideAlert()},hideAllChords(){it["selectAll"]("text.titles, path.arcs, path.chord").transition().duration(500).style("fill-opacity",".1").style("font-weight","normal")},drawChart(){this.matrix=new Array(this.objects.length).fill().map(()=>new Array(this.objects.length).fill().map(()=>0)),this.correlations.forEach(t=>{this.matrix[t.to][t.from]=t.quantity});var t=window.innerHeight-40,e={top:20,right:20,bottom:20,left:20},n=t-e.left-e.right,r=t-e.top-e.bottom,i=.39*Math.min(n,r),a=1.08*i;it["select"]("svg").remove();var o=it["select"]("#chart"),s=o.append("svg:svg").attr("width",n+e.left+e.right).attr("height",r+e.top+e.bottom),l=s.append("g").attr("transform","translate("+(e.left+n/2)+","+(e.top+r/2)+")"),c=p().padding(.03).sortSubgroups(it["descending"]).sortChords(it["ascending"]).matrix(this.matrix),u=it["svg"].arc().innerRadius(i).outerRadius(a),h=l.selectAll("g.group").data(c.groups).enter().append("svg:g").attr("class",t=>"group group-"+this.objects[t.index].ID);h.append("svg:path").attr("d",u).attr("id",(t,e)=>"arc-"+e).attr("class",(function(t){return"arcs "+t.relations.map(t=>"arc-rel-"+t).join(" ")})).style("fill",t=>this.objects[t.index].Farbe).style("cursor","pointer").on("click",t=>this.highlightChords(t.index)).on("mouseover",t=>{console.log(t.index),this.highlightChords(t.index,!1)}),h.append("text").each((function(t){t.angle=(t.startAngle+t.endAngle)/2})).attr("dy",".35em").attr("class",(function(t){return"titles "+t.relations.map(t=>"title-rel-"+t).join(" ")})).attr("id",(t,e)=>"title-"+e).attr("text-anchor",(function(t){return t.angle>Math.PI?"end":null})).attr("transform",(function(t){return"rotate("+(180*t.angle/Math.PI-90)+")translate("+(a+10)+")"+(t.angle>Math.PI?"rotate(180)":"")})).style("font-size","12px").style("font-family","'Roboto Condensed'").style("font-weight","400").style("cursor","pointer").attr("fill","#333").text((t,e)=>this.objects[e].Name).on("click",t=>this.highlightChords(t.index)).on("mouseover",t=>{console.log(t.index),this.highlightChords(t.index,!1)}),l.selectAll("path.chord").data(c.chords).enter().append("svg:path").attr("class",(function(t){return"chord chord-source-"+t.source.index+" chord-target-"+t.target.index})).attr("d",f().radius(i)).style("fill",(function(t){return"url(#chordGradient-"+t.source.index+"-"+t.target.index+")"})).style("fill-opacity","0.7");var d=s.append("defs").selectAll("linearGradient").data(c.chords).enter().append("linearGradient").attr("id",(function(t){return"chordGradient-"+t.source.index+"-"+t.target.index})).attr("gradientUnits","userSpaceOnUse").attr("x1",(function(t){return i*Math.cos((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("y1",(function(t){return i*Math.sin((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("x2",(function(t){return i*Math.cos((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)})).attr("y2",(function(t){return i*Math.sin((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)}));function p(){var t,e,n,r,i,a,o,s=Math.PI,l=2*s,c={},u=0;function h(){var i,a,s,c,h,p,f={},g=[],m=it["range"](r),v=[];t=[],e=[],i=0,c=-1;while(++c<r){a=0,h=-1,p=[];while(++h<r)a+=n[c][h]||n[h][c];g.push(a);for(var b=0;b<r;b++)p[b]=(r+(c-1)-b)%r;v.push(p),i+=a}i=(l-u*r)/i,a=0,c=-1;while(++c<r){s=a,h=-1;var I=0,w=[];while(++h<r){I=m[c];var y=v[I][h],x=n[I][y]||n[y][I],C=a,j=a+=x*i;f[I+"-"+y]={index:I,subindex:y,startAngle:C,endAngle:j,value:x},(x||n[y][I])&&w.push(y)}e[I]={index:I,startAngle:s,endAngle:a,value:(a-s)/i,relations:w},a+=u}c=-1;while(++c<r){h=c-1;while(++h<r){var _=f[c+"-"+h],A=f[h+"-"+c];(_.value||A.value)&&t.push(_.value<A.value?{source:A,target:_}:{source:_,target:A})}}o&&d()}function d(){t.sort((function(t,e){return o((t.source.value+t.target.value)/2,(e.source.value+e.target.value)/2)}))}return c.matrix=function(i){return arguments.length?(r=(n=i)&&n.length,t=e=null,c):n},c.padding=function(n){return arguments.length?(u=n,t=e=null,c):u},c.sortGroups=function(n){return arguments.length?(i=n,t=e=null,c):i},c.sortSubgroups=function(e){return arguments.length?(a=e,t=null,c):a},c.sortChords=function(e){return arguments.length?(o=e,t&&d(),c):o},c.chords=function(){return t||h(),t},c.groups=function(){return e||h(),e},c}function f(){var t=function(t){return t.source},e=function(t){return t.target},n=function(t){return t.radius},r=function(t){return t.startAngle},i=function(t){return t.endAngle};function a(n,r){var i=o(this,t,n,r),a=o(this,e,n,r);return"M"+i.p0+l(i.r,i.p1,i.a1-i.a0)+(s(i,a)?c(i.r,i.p1,i.a1,i.r,i.p0,i.a0):c(i.r,i.p1,i.a1,a.r,a.p0,a.a0)+l(a.r,a.p1,a.a1-a.a0)+c(a.r,a.p1,a.a1,i.r,i.p0,i.a0))+"Z"}function o(t,e,a,o){var s=e.call(t,a,o),l=n.call(t,s,o),c=r.call(t,s,o)-Math.PI/2,u=i.call(t,s,o)-Math.PI/2;return{r:l,a0:c,a1:u,p0:[l*Math.cos(c),l*Math.sin(c)],p1:[l*Math.cos(u),l*Math.sin(u)]}}function s(t,e){return t.a0===e.a0&&t.a1===e.a1}function l(t,e,n){return"A"+t+","+t+" 0 "+ +(n>Math.PI)+",1 "+e}function c(t,e,n,r,i,a){var o=Math.abs(u(a-n+Math.PI,2*Math.PI)-Math.PI),s=.9*Math.pow((Math.PI-o)/Math.PI,2),l=[e[0]*s,e[1]*s],c=[i[0]*s,i[1]*s];return"C "+l[0]+" "+l[1]+", "+c[0]+" "+c[1]+", "+i[0]+" "+i[1]}function u(t,e){return(t%e+e)%e}return a.radius=function(t){return arguments.length?(n="function"===typeof t?t:function(){return t},a):n},a.source=function(e){return arguments.length?(t="function"===typeof e?e:function(){return e},a):t},a.target=function(t){return arguments.length?(e="function"===typeof t?t:function(){return t},a):e},a.startAngle=function(t){return arguments.length?(r="function"===typeof t?t:function(){return t},a):r},a.endAngle=function(t){return arguments.length?(i="function"===typeof t?t:function(){return t},a):i},a}d.append("stop").attr("offset","0%").attr("stop-color",t=>this.objects[t.source.index].Farbe),d.append("stop").attr("offset","100%").attr("stop-color",t=>this.objects[t.target.index].Farbe)}},watch:{highlightItem:function(t){const e=this.objects.findIndex(e=>e.ID===t);e>-1&&this.highlightChords(e,!1)}}},ot=at,st=(n("e3e9"),n("0798")),lt=Object(f["a"])(ot,nt,rt,!1,null,null,null),ct=lt.exports;m()(lt,{VAlert:st["a"],VContainer:x["a"]});var ut=n("25ca");const ht=t=>t.map(t=>(t.active=!0,t));var dt={name:"App",components:{Controls:et,Chart:ct},data:()=>({objectsData:{},objects:[],correlationsData:{},showGroup:"",highlightItem:null,indirect:!1}),mounted(){window.location.hash&&this.loadURL(decodeURIComponent(window.location.hash.slice(1)))},computed:{activeObjects:function(){return this.objects.filter(t=>t.active)},correlations:function(){const t=[];for(const[e,n]of this.activeObjects.entries())if(!(this.correlationsData.length<=n.ID))for(const[r,i]of this.activeObjects.entries()){const a=this.correlationsData[n.ID][i.ID];"number"===typeof a&&t.push({from:e,to:r,quantity:a})}return t}},methods:{generateKey(){const t=this.activeObjects.map(t=>t.Farbe).join("");return`${this.activeObjects.length}-${t}-${this.indirect}`},loadFile(t,e){const n=ut["a"](t);this.objectsData=ut["b"].sheet_to_json(n.Sheets["Objekte"]),this.correlationsData=ut["b"].sheet_to_json(n.Sheets["Korrelationen"]),this.objects=ht(this.objectsData),window.location.hash=e?encodeURIComponent(e):""},loadURL(t){fetch(t).then(t=>t.arrayBuffer()).then(e=>this.loadFile(e,t))}}},pt=dt,ft=(n("034f"),n("7496")),gt=n("f6c4"),mt=n("f774"),vt=Object(f["a"])(pt,i,a,!1,null,null,null),bt=vt.exports;m()(vt,{VApp:ft["a"],VMain:gt["a"],VNavigationDrawer:mt["a"]});var It=n("2f62");r["a"].use(It["a"]);const wt={packageVersion:"1.0.8"};var yt=new It["a"].Store({state:wt}),xt=n("f309");r["a"].use(xt["a"]);var Ct=new xt["a"]({theme:{dark:!0,themes:{dark:{primary:"#ffffff",secondary:"#ffffff",background:"#ffffff"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:Ct,store:yt,render:t=>t(bt)}).$mount("#app")},"622a":function(t,e,n){"use strict";n("176e")},"69a9":function(t,e,n){"use strict";n("e0ab")},"74ff":function(t,e,n){},"85ec":function(t,e,n){},a0dc:function(t,e,n){},c7f2:function(t,e,n){"use strict";n("74ff")},e0ab:function(t,e,n){},e3e9:function(t,e,n){"use strict";n("a0dc")}});
//# sourceMappingURL=app.c4d3089a.js.map