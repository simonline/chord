(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],h=0,d=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"176e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{color:"#766bf5",width:"350px",permanent:"",absolute:""}},[r("Controls",{key:t.generateKey(),attrs:{objects:t.objects,showGroup:t.showGroup,highlightItem:t.highlightItem,indirect:t.indirect},on:{"update:objects":function(e){t.objects=e},"update:showGroup":function(e){t.showGroup=e},"update:show-group":function(e){t.showGroup=e},"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e},"update:indirect":function(e){t.indirect=e},"update:file":t.loadFile,"update:url":t.loadURL}})],1),r("v-main",{staticClass:"main"},[r("Chart",{key:t.generateKey(),attrs:{objects:t.activeObjects,correlations:t.correlations,highlightItem:t.highlightItem,indirect:t.indirect},on:{"update:highlightItem":function(e){t.highlightItem=e},"update:highlight-item":function(e){t.highlightItem=e}}})],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"my-5"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"mb-4",attrs:{light:""}},"v-btn",i,!1),n),[t._v(" Öffnen ")])]}}])},[r("v-list",[r("v-list-item",{key:"file"},[r("v-list-item-title",{staticClass:"file-input",on:{click:function(e){return t.$refs.file.click()}}},[t._v(" Datei hochladen "),r("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.updateFile}})])],1),r("v-list-item",{key:"url"},[r("v-list-item-title",[r("OpenUrlModal",{attrs:{"url.sync":"url"},on:{"update:url":t.updateURL}})],1)],1)],1)],1),t._l(Object.keys(t.groups),(function(e){return r("ControlGroup",{key:e,attrs:{name:e,items:t.groups[e],showItems:t.showGroup===e,highlightItem:t.controlsHighlightItem},on:{"update:items":[function(r){return t.$set(t.groups,e,r)},function(r){return t.updateObjects(t.groups[e])}],"update:highlightItem":[function(e){t.controlsHighlightItem=e},function(e){return t.updateHighlightItem(t.controlsHighlightItem)}],"update:highlight-item":function(e){t.controlsHighlightItem=e},"update:showItems":function(r){return t.updateShowGroup(e)}}})})),r("div",{staticClass:"bottom"},[t.objects.length?r("v-switch",{staticClass:"indirect",attrs:{"input-value":t.indirect,label:t.indirect?"Indirekte Verbindungen (2 Hops)":"Direkte Verbindungen (1 Hop)"},on:{change:t.updateIndirect}}):t._e(),r("div",{staticClass:"d-flex flex-row"},[r("v-sheet",{staticClass:"d-flex flex-row",staticStyle:{background:"transparent"}},[r("v-sheet",{staticStyle:{background:"transparent"}},[r("a",{staticClass:"mt-3",attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/3.0/de/",target:"_blank"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons Lizenzvertrag",src:"https://i.creativecommons.org/l/by/3.0/de/88x31.png"}})])]),r("v-sheet",{staticClass:"mx-2",staticStyle:{background:"transparent","line-height":".9em"}},[r("small",[t._v(" Prof. Dr. Peter Dürr"),r("br"),t._v("& Simon Liedtke ")])])],1),r("v-chip",{staticClass:"version mb-2"},[t._v(" Version "+t._s(this.$store.state.packageVersion)+" ")])],1)],1)],2)},s=[],l=(r("13d5"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"mb-1 item"},[r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"ripple"},expression:"{ class: 'ripple' }"}],staticClass:"button",attrs:{icon:""},on:{click:t.toggleShowItems}},[r("v-icon",[t._v(" "+t._s(t.showItems?"mdi-minus-box":"mdi-plus-box")+" ")])],1),r("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":t.items.every((function(t){return t.active}))},on:{change:function(e){return t.setActiveItems(e)}}}),r("UpdateItemModal",{attrs:{items:t.coloredItems},on:{"update:items":[function(e){t.coloredItems=e},function(e){return t.updateItems(t.coloredItems)}]}}),r("label",{staticClass:"ml-2"},[t._v(" "+t._s(t.name)+" ")])],1),t.showItems?r("v-container",{staticClass:"pl-6"},t._l(t.items,(function(e){return r("v-row",{key:e.ID,staticClass:"item"},[r("v-checkbox",{staticClass:"checkbox",attrs:{"input-value":e.active},on:{change:function(r){return t.setActiveItem(e.ID,r)}},model:{value:e.active,callback:function(r){t.$set(e,"active",r)},expression:"item.active"}}),r("UpdateItemModal",{attrs:{item:e},on:{"update:item":[function(t){e=t},function(r){return t.updateItem(e)}]}}),r("label",{staticClass:"ml-2",on:{mouseover:function(r){return t.updateHighlightItem(e.ID)}}},[t._v(" "+t._s(e.Name)+" ")])],1)})),1):t._e()],1)}),c=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"button",attrs:{icon:""}},"v-btn",i,!1),n),[r("v-icon",{staticClass:"icon",style:{"background-color":t.color}},[t._v(" mdi-pencil-box-outline ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{attrs:{color:"#766bf5"}},[r("v-card-title",[r("span",{staticClass:"text-h5"},[t._v("Bearbeiten")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-color-picker",{attrs:{"dot-size":"25","swatches-max-height":"200",mode:"hexa",light:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")]),r("v-btn",{attrs:{text:""},on:{click:function(e){return t.setColor()}}},[t._v(" Speichern ")])],1)],1)],1)},h=[],d={props:["item","items"],data(){return{dialog:!1,color:this.item?this.item.Farbe:this.items[0].Farbe}},methods:{setColor(){if(this.dialog=!1,console.log(this.color),this.item){const t={...this.item,Farbe:this.color};this.$emit("update:item",t)}else this.$emit("update:items",this.items.map(t=>(t.Farbe=this.color,t)))}}},p=d,f=(r("622a"),r("2877")),g=r("6544"),m=r.n(g),v=r("8336"),b=r("b0af"),I=r("99d9"),w=r("62ad"),x=r("03a4"),y=r("a523"),C=r("169a"),j=r("132d"),_=r("0fd9"),A=r("2fa4"),k=Object(f["a"])(p,u,h,!1,null,null,null),V=k.exports;m()(k,{VBtn:v["a"],VCard:b["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:w["a"],VColorPicker:x["a"],VContainer:y["a"],VDialog:C["a"],VIcon:j["a"],VRow:_["a"],VSpacer:A["a"]});var $={props:["name","items","showItems","highlightItem"],components:{UpdateItemModal:V},data(){return{coloredItems:[...this.items]}},methods:{toggleShowItems(){this.$emit("update:showItems",!this.showItems)},setActiveItems(t){this.$emit("update:items",this.items.map(e=>(e.active=t,e)))},setActiveItem(t,e){this.$emit("update:items",this.items.map(r=>(r.ID===t.ID&&(t.active=e),r)))},updateHighlightItem(t){this.$emit("update:highlightItem",t)},updateItems(t){this.$emit("update:items",t)},updateItem(t){this.$emit("update:items",this.items.map(e=>e.ID===t.ID?t:e))}}},M=$,O=(r("c7f2"),r("ac7c")),S=r("269a"),D=r.n(S),P=r("5607"),U=Object(f["a"])(M,l,c,!1,null,null,null),R=U.exports;m()(U,{VBtn:v["a"],VCheckbox:O["a"],VContainer:y["a"],VIcon:j["a"],VRow:_["a"]}),D()(U,{Ripple:P["a"]});var G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"",width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("div",t._g(t._b({},"div",i,!1),n),[t._v(" URL öffnen ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{attrs:{color:"#766bf5"}},[r("v-card-title",[r("span",{staticClass:"text-h5"},[t._v("URL öffnen")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"URL",placeholder:"https://www.dropbox.com/s/1234567890abcde/input.xlsx?dl=0"},model:{value:t.newUrl,callback:function(e){t.newUrl=e},expression:"newUrl"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")]),r("v-btn",{attrs:{text:""},on:{click:function(e){return t.updateURL(t.newUrl)}}},[t._v(" Öffnen ")])],1)],1)],1)},F=[],L={props:["url"],data(){return{dialog:!1,newUrl:this.url}},methods:{updateURL(t){this.$emit("update:url",t),this.dialog=!1}}},H=L,T=r("8654"),B=Object(f["a"])(H,G,F,!1,null,null,null),E=B.exports;m()(B,{VBtn:v["a"],VCard:b["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:w["a"],VContainer:y["a"],VDialog:C["a"],VRow:_["a"],VSpacer:A["a"],VTextField:T["a"]});const N=(t,e)=>t.reduce((function(t,r){return t[r[e]]=t[r[e]]||[],t[r[e]].push(r),t}),Object.create(null));var z={props:["objects","showGroup","highlightItem","indirect","file","url"],components:{ControlGroup:R,OpenUrlModal:E},data:function(){return{groups:N(this.objects,"Familie"),controlsHighlightItem:this.highlightItem}},methods:{updateObjects(t){const e=t.reduce((t,e)=>Object.assign(t,{[e.ID]:e}),{});this.$emit("update:objects",this.objects.map(t=>t.ID in e?e[t.ID]:t))},updateShowGroup(t){this.$emit("update:showGroup",t!==this.showGroup?t:"")},updateHighlightItem(t){this.$emit("update:highlightItem",t)},updateIndirect(t){this.$emit("update:indirect",!!t)},updateFile(){const t=this.$refs.file.files;if(0===t.length)return;let e=new FileReader;e.readAsArrayBuffer(t[0]),e.onload=()=>this.$emit("update:file",e.result)},updateURL(t){this.$emit("update:url",t)}}},K=z,q=(r("69a9"),r("cc20")),J=r("8860"),Z=r("da13"),Q=r("5d23"),W=r("e449"),X=r("8dd9"),Y=r("b73d"),tt=Object(f["a"])(K,o,s,!1,null,null,null),et=tt.exports;m()(tt,{VBtn:v["a"],VChip:q["a"],VContainer:y["a"],VList:J["a"],VListItem:Z["a"],VListItemTitle:Q["a"],VMenu:W["a"],VSheet:X["a"],VSwitch:Y["a"]});var rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("div",{attrs:{id:"chart"}},[r("div",{attrs:{id:"alerts"}},t._l(t.visibleAlerts,(function(e){return r("v-alert",{key:e.index,attrs:{dismissible:"",width:"400",color:e.color,id:"alert-"+e.index,border:"left",icon:"mdi-information","colored-border":"",light:"",outlined:""}},[r("span",{domProps:{innerHTML:t._s(e.content)}})])})),1)])])},nt=[],it=r("6e58"),at={props:["objects","correlations","highlightItem","indirect"],data:()=>({svg:null,matrix:[],highlightedItems:[],visibleAlerts:[]}),mounted(){this.drawChart()},methods:{createAlert(t){const e=this.objects[t];var r=[`<strong>${e.Name}</strong>`,e.Beschreibung,`<i>${e.Familie}</i>`].join("<br>");return{index:t,color:e.Farbe,content:r}},highlightChords(t,e=!0){const r=[...this.highlightedItems];if(r.includes(t)?r.splice(r.indexOf(t),1):(!this.indirect||r.length<2)&&r.push(t),r===this.highlightedItems)return;if(e&&(this.highlightedItems=r),0===r.length)return void this.showAllChords();const n=t=>{const e=this.matrix.reduce((e,r,n)=>r[t]?e.concat(n):e,[]);return e.push(...this.matrix[t].reduce((t,e,r)=>e?t.concat(r):t,[])),e};let i=[];if(this.indirect&&2===r.length){const[t,e]=r;i.push("#title-"+t,"#arc-"+t,"#title-"+e,"#arc-"+e);const a=n(t),o=n(e);a.includes(e)&&i.push(`.chord-source-${t}.chord-target-${e}`,`.chord-source-${e}.chord-target-${t}`);const s=a.filter(t=>o.includes(t));for(const r of s)r!==t&&r!==e&&i.push("#title-"+r,"#arc-"+r,`.chord-source-${t}.chord-target-${r}`,`.chord-source-${e}.chord-target-${r}`,`.chord-source-${r}.chord-target-${t}`,`.chord-source-${r}.chord-target-${e}`)}else for(const a of r)if(i.push("#title-"+a,".title-rel-"+a,"#arc-"+a,".arc-rel-"+a,".chord-source-"+a,".chord-target-"+a),this.indirect)for(const t of n(a))i.push("#title-"+t,".title-rel-"+t,"#arc-"+t,".arc-rel-"+t,".chord-source-"+t,".chord-target-"+t);this.hideAllChords(),it["selectAll"](i.join(", ")).transition().duration(500).style("fill-opacity","1"),e&&it["selectAll"](r.map(t=>"#title-"+t).join(", ")).style("font-weight","bold"),this.visibleAlerts=r.map(t=>this.createAlert(t))},showAllChords(){it["selectAll"]("text.titles, path.arcs").transition().duration(500).style("fill-opacity","1").style("font-weight","normal"),it["selectAll"]("path.chord").transition().duration(500).style("fill-opacity",".7"),this.visibleAlerts=[]},hideAllChords(){it["selectAll"]("text.titles, path.arcs, path.chord").transition().duration(500).style("fill-opacity",".1").style("font-weight","normal"),this.visibleAlerts=[]},drawChart(){var t=this;this.matrix=new Array(this.objects.length).fill().map(()=>new Array(this.objects.length).fill().map(()=>0)),this.correlations.forEach(t=>{this.matrix[t.to][t.from]=t.quantity});var e=window.innerHeight-40,r={top:20,right:20,bottom:20,left:20},n=e-r.left-r.right,i=e-r.top-r.bottom,a=.39*Math.min(n,i),o=1.08*a;it["select"]("svg").remove();var s=it["select"]("#chart"),l=s.append("svg:svg").attr("width",n+r.left+r.right).attr("height",i+r.top+r.bottom).on("click",(function(){t.highlightedItems=[],t.showAllChords()})),c=l.append("g").attr("transform","translate("+(r.left+n/2)+","+(r.top+i/2)+")"),u=f().padding(.03).sortSubgroups(it["descending"]).sortChords(it["ascending"]).matrix(this.matrix),h=it["svg"].arc().innerRadius(a).outerRadius(o),d=c.selectAll("g.group").data(u.groups).enter().append("svg:g").attr("class",t=>"group group-"+this.objects[t.index].ID);d.append("svg:path").attr("d",h).attr("id",(t,e)=>"arc-"+e).attr("class",(function(t){return"arcs "+t.relations.map(t=>"arc-rel-"+t).join(" ")})).style("fill",t=>this.objects[t.index].Farbe).style("cursor","pointer").on("click",t=>{it["event"].stopPropagation(),this.highlightChords(t.index)}).on("mouseover",t=>{this.highlightChords(t.index,!1)}),d.append("text").each((function(t){t.angle=(t.startAngle+t.endAngle)/2})).attr("dy",".35em").attr("class",(function(t){return"titles "+t.relations.map(t=>"title-rel-"+t).join(" ")})).attr("id",(t,e)=>"title-"+e).attr("text-anchor",(function(t){return t.angle>Math.PI?"end":null})).attr("transform",(function(t){return"rotate("+(180*t.angle/Math.PI-90)+")translate("+(o+10)+")"+(t.angle>Math.PI?"rotate(180)":"")})).style("font-size","12px").style("font-family","'Roboto Condensed'").style("font-weight","400").style("cursor","pointer").attr("fill","#333").text((t,e)=>this.objects[e].Name).on("click",t=>{it["event"].stopPropagation(),this.highlightChords(t.index)}).on("mouseover",t=>{this.highlightChords(t.index,!1)}),c.selectAll("path.chord").data(u.chords).enter().append("svg:path").attr("class",(function(t){return"chord chord-source-"+t.source.index+" chord-target-"+t.target.index})).attr("d",g().radius(a)).style("fill",(function(t){return"url(#chordGradient-"+t.source.index+"-"+t.target.index+")"})).style("fill-opacity","0.7");var p=l.append("defs").selectAll("linearGradient").data(u.chords).enter().append("linearGradient").attr("id",(function(t){return"chordGradient-"+t.source.index+"-"+t.target.index})).attr("gradientUnits","userSpaceOnUse").attr("x1",(function(t){return a*Math.cos((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("y1",(function(t){return a*Math.sin((t.source.endAngle-t.source.startAngle)/2+t.source.startAngle-Math.PI/2)})).attr("x2",(function(t){return a*Math.cos((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)})).attr("y2",(function(t){return a*Math.sin((t.target.endAngle-t.target.startAngle)/2+t.target.startAngle-Math.PI/2)}));function f(){var t,e,r,n,i,a,o,s=Math.PI,l=2*s,c={},u=0;function h(){var i,a,s,c,h,p,f={},g=[],m=it["range"](n),v=[];t=[],e=[],i=0,c=-1;while(++c<n){a=0,h=-1,p=[];while(++h<n)a+=r[c][h]||r[h][c];g.push(a);for(var b=0;b<n;b++)p[b]=(n+(c-1)-b)%n;v.push(p),i+=a}i=(l-u*n)/i,a=0,c=-1;while(++c<n){s=a,h=-1;var I=0,w=[];while(++h<n){I=m[c];var x=v[I][h],y=r[I][x]||r[x][I],C=a,j=a+=y*i;f[I+"-"+x]={index:I,subindex:x,startAngle:C,endAngle:j,value:y},(y||r[x][I])&&w.push(x)}e[I]={index:I,startAngle:s,endAngle:a,value:(a-s)/i,relations:w},a+=u}c=-1;while(++c<n){h=c-1;while(++h<n){var _=f[c+"-"+h],A=f[h+"-"+c];(_.value||A.value)&&t.push(_.value<A.value?{source:A,target:_}:{source:_,target:A})}}o&&d()}function d(){t.sort((function(t,e){return o((t.source.value+t.target.value)/2,(e.source.value+e.target.value)/2)}))}return c.matrix=function(i){return arguments.length?(n=(r=i)&&r.length,t=e=null,c):r},c.padding=function(r){return arguments.length?(u=r,t=e=null,c):u},c.sortGroups=function(r){return arguments.length?(i=r,t=e=null,c):i},c.sortSubgroups=function(e){return arguments.length?(a=e,t=null,c):a},c.sortChords=function(e){return arguments.length?(o=e,t&&d(),c):o},c.chords=function(){return t||h(),t},c.groups=function(){return e||h(),e},c}function g(){var t=function(t){return t.source},e=function(t){return t.target},r=function(t){return t.radius},n=function(t){return t.startAngle},i=function(t){return t.endAngle};function a(r,n){var i=o(this,t,r,n),a=o(this,e,r,n);return"M"+i.p0+l(i.r,i.p1,i.a1-i.a0)+(s(i,a)?c(i.r,i.p1,i.a1,i.r,i.p0,i.a0):c(i.r,i.p1,i.a1,a.r,a.p0,a.a0)+l(a.r,a.p1,a.a1-a.a0)+c(a.r,a.p1,a.a1,i.r,i.p0,i.a0))+"Z"}function o(t,e,a,o){var s=e.call(t,a,o),l=r.call(t,s,o),c=n.call(t,s,o)-Math.PI/2,u=i.call(t,s,o)-Math.PI/2;return{r:l,a0:c,a1:u,p0:[l*Math.cos(c),l*Math.sin(c)],p1:[l*Math.cos(u),l*Math.sin(u)]}}function s(t,e){return t.a0===e.a0&&t.a1===e.a1}function l(t,e,r){return"A"+t+","+t+" 0 "+ +(r>Math.PI)+",1 "+e}function c(t,e,r,n,i,a){var o=Math.abs(u(a-r+Math.PI,2*Math.PI)-Math.PI),s=.9*Math.pow((Math.PI-o)/Math.PI,2),l=[e[0]*s,e[1]*s],c=[i[0]*s,i[1]*s];return"C "+l[0]+" "+l[1]+", "+c[0]+" "+c[1]+", "+i[0]+" "+i[1]}function u(t,e){return(t%e+e)%e}return a.radius=function(t){return arguments.length?(r="function"===typeof t?t:function(){return t},a):r},a.source=function(e){return arguments.length?(t="function"===typeof e?e:function(){return e},a):t},a.target=function(t){return arguments.length?(e="function"===typeof t?t:function(){return t},a):e},a.startAngle=function(t){return arguments.length?(n="function"===typeof t?t:function(){return t},a):n},a.endAngle=function(t){return arguments.length?(i="function"===typeof t?t:function(){return t},a):i},a}p.append("stop").attr("offset","0%").attr("stop-color",t=>this.objects[t.source.index].Farbe),p.append("stop").attr("offset","100%").attr("stop-color",t=>this.objects[t.target.index].Farbe)}},watch:{highlightItem:function(t){const e=this.objects.findIndex(e=>e.ID===t);e>-1&&this.highlightChords(e,!1)}}},ot=at,st=(r("e3e9"),r("0798")),lt=Object(f["a"])(ot,rt,nt,!1,null,null,null),ct=lt.exports;m()(lt,{VAlert:st["a"],VContainer:y["a"]});var ut=r("25ca");const ht=t=>t.map(t=>(t.active=!0,t));var dt={name:"App",components:{Controls:et,Chart:ct},data:()=>({objectsData:{},objects:[],correlationsData:{},showGroup:"",highlightItem:null,indirect:!1}),mounted(){window.location.hash&&this.loadURL(decodeURIComponent(window.location.hash.slice(1)))},computed:{activeObjects:function(){return this.objects.filter(t=>t.active)},correlations:function(){const t=[];for(const[e,r]of this.activeObjects.entries())if(!(this.correlationsData.length<=r.ID))for(const[n,i]of this.activeObjects.entries()){const a=this.correlationsData[r.ID][i.ID];"number"===typeof a&&t.push({from:e,to:n,quantity:a})}return t}},methods:{generateKey(){const t=this.activeObjects.map(t=>t.Farbe).join("");return`${this.activeObjects.length}-${t}-${this.indirect}`},loadFile(t,e){const r=ut["a"](t);this.objectsData=ut["b"].sheet_to_json(r.Sheets["Objekte"]),this.correlationsData=ut["b"].sheet_to_json(r.Sheets["Korrelationen"]),this.objects=ht(this.objectsData),window.location.hash=e?encodeURIComponent(e):""},loadURL(t){fetch(t).then(t=>t.arrayBuffer()).then(e=>this.loadFile(e,t))}}},pt=dt,ft=(r("034f"),r("7496")),gt=r("f6c4"),mt=r("f774"),vt=Object(f["a"])(pt,i,a,!1,null,null,null),bt=vt.exports;m()(vt,{VApp:ft["a"],VMain:gt["a"],VNavigationDrawer:mt["a"]});var It=r("2f62");n["a"].use(It["a"]);const wt={packageVersion:"1.0.10"};var xt=new It["a"].Store({state:wt}),yt=r("f309");n["a"].use(yt["a"]);var Ct=new yt["a"]({theme:{dark:!0,themes:{dark:{primary:"#ffffff",secondary:"#ffffff",background:"#ffffff"}}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:Ct,store:xt,render:t=>t(bt)}).$mount("#app")},"622a":function(t,e,r){"use strict";r("176e")},"69a9":function(t,e,r){"use strict";r("e0ab")},"74ff":function(t,e,r){},"85ec":function(t,e,r){},a0dc:function(t,e,r){},c7f2:function(t,e,r){"use strict";r("74ff")},e0ab:function(t,e,r){},e3e9:function(t,e,r){"use strict";r("a0dc")}});
//# sourceMappingURL=app.363d3ca5.js.map