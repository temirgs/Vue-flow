(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],d=0,h=[];d<r.length;d++)a=r[d],i[a]&&h.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},4328:function(e,t,n){"use strict";var o=n("5bb0"),i=n.n(o);i.a},"50b0":function(e,t,n){"use strict";var o=n("a617"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v(" simple flowchart")]),n("div",{staticClass:"tool-wrapper"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.newNodeType,expression:"newNodeType"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.newNodeType=t.target.multiple?n:n[0]}}},e._l(e.nodeCategory,function(t,o){return n("option",{key:o,domProps:{value:o}},[e._v(e._s(t))])})),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newNodeLabel,expression:"newNodeLabel"}],attrs:{type:"text",placeholder:"Input node label"},domProps:{value:e.newNodeLabel},on:{input:function(t){t.target.composing||(e.newNodeLabel=t.target.value)}}}),n("button",{on:{click:e.addNode}},[e._v("ADD")]),n("button",{on:{click:e.showdata}},[e._v("Show Data")])]),n("simple-flowchart",{attrs:{scene:e.scene,height:800},on:{"update:scene":function(t){e.scene=t},nodeClick:e.nodeClick,nodeDelete:e.nodeDelete,linkBreak:e.linkBreak,linkAdded:e.linkAdded,canvasClick:e.canvasClick}})],1)},s=[],a=n("8afe"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flowchart-container",on:{mousemove:e.handleMove,mouseup:e.handleUp,mousedown:e.handleDown}},[n("svg",{attrs:{width:"100%",height:e.height+"px"}},e._l(e.lines,function(t,o){return n("flowchart-link",e._b({key:"link"+o,on:{deleteLink:function(n){e.linkDelete(t.id)}}},"flowchart-link",t,!1,!0))})),e._l(e.scene.nodes,function(t,o){return n("flowchart-node",e._b({key:"node"+o,attrs:{options:e.nodeOptions},on:{linkingStart:function(n){e.linkingStart(t.id)},linkingStop:function(n){e.linkingStop(t.id)},nodeSelected:function(n){e.nodeSelected(t.id,n)}}},"flowchart-node",t,!1,!0))})],2)},c=[],l=(n("f751"),n("20d6"),n("7514"),n("9393")),u=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{on:{mouseover:e.handleMouseOver,mouseleave:e.handleMouseLeave}},[n("path",{style:e.pathStyle,attrs:{d:e.dAttr}}),e.show.delete?n("a",{on:{click:e.deleteLink}},[n("text",{attrs:{"text-anchor":"middle",transform:e.arrowTransform,"font-size":"22"}},[e._v("×")])]):n("path",{style:e.arrowStyle,attrs:{d:"M -1 -1 L 0 1 L 1 -1 z",transform:e.arrowTransform}})])}),d=[],h={name:"FlowchartLink",props:{start:{type:Array,default:function(){return[0,0]}},end:{type:Array,default:function(){return[0,0]}},id:Number},data:function(){return{show:{delete:!1}}},methods:{handleMouseOver:function(){this.id&&(this.show.delete=!0)},handleMouseLeave:function(){this.show.delete=!1},caculateCenterPoint:function(){var e=(this.end[0]-this.start[0])/2,t=(this.end[1]-this.start[1])/2;return[this.start[0]+e,this.start[1]+t]},caculateRotation:function(){var e=-Math.atan2(this.end[0]-this.start[0],this.end[1]-this.start[1]),t=180*e/Math.PI;return t<0?t+360:t},deleteLink:function(){this.$emit("deleteLink")}},computed:{pathStyle:function(){return{stroke:"rgb(255, 136, 85)",strokeWidth:2.73205,fill:"none"}},arrowStyle:function(){return{stroke:"rgb(255, 136, 85)",strokeWidth:5.73205,fill:"none"}},arrowTransform:function(){var e=this.caculateCenterPoint(),t=Object(l["a"])(e,2),n=t[0],o=t[1],i=this.caculateRotation();return"translate(".concat(n,", ").concat(o,") rotate(").concat(i,")")},dAttr:function(){var e=this.start[0],t=this.start[1],n=this.end[0],o=this.end[1],i=e,s=t+50,a=n,r=o-50;return"M ".concat(e,", ").concat(t," C ").concat(i,", ").concat(s,", ").concat(a,", ").concat(r,", ").concat(n,", ").concat(o)}}},f=h,p=(n("6dc7"),n("2877")),m=Object(p["a"])(f,u,d,!1,null,"295297bd",null);m.options.__file="FlowchartLink.vue";var g=m.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flowchart-node",class:{selected:e.options.selected===e.id},style:e.nodeStyle,on:{mousedown:e.handleMousedown,mouseover:e.handleMouseOver,mouseleave:e.handleMouseLeave}},[n("div",{staticClass:"node-port node-input",on:{mousedown:e.inputMouseDown,mouseup:e.inputMouseUp}}),n("div",{staticClass:"node-main"},[n("div",{staticClass:"node-type",domProps:{textContent:e._s(e.label)}}),e._m(0)]),n("div",{staticClass:"node-port node-output",on:{mousedown:e.outputMouseDown}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.show.delete,expression:"show.delete"}],staticClass:"node-delete"},[e._v("×")])])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticStyle:{height:"53px",width:"70px"},attrs:{src:"data:image/jpeg;base64,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"}})])}],w={name:"FlowchartNode",props:{id:{type:Number,default:1e3,validator:function(e){return"number"===typeof e}},x:{type:Number,default:0,validator:function(e){return"number"===typeof e}},y:{type:Number,default:0,validator:function(e){return"number"===typeof e}},type:{type:String,default:"Default"},label:{type:String,default:"input name"},options:{type:Object,default:function(){return{centerX:1024,scale:1,centerY:140}}}},data:function(){return{show:{delete:!1}}},mounted:function(){},computed:{nodeStyle:function(){return{top:this.options.centerY+this.y*this.options.scale+"px",left:this.options.centerX+this.x*this.options.scale+"px",transform:"scale(".concat(this.options.scale,")")}}},methods:{handleMousedown:function(e){var t=e.target||e.srcElement;t.className.indexOf("node-input")<0&&t.className.indexOf("node-output")<0&&this.$emit("nodeSelected",e),e.preventDefault()},handleMouseOver:function(){this.show.delete=!0},handleMouseLeave:function(){this.show.delete=!1},outputMouseDown:function(e){this.$emit("linkingStart"),e.preventDefault()},inputMouseDown:function(e){e.preventDefault()},inputMouseUp:function(e){this.$emit("linkingStop"),e.preventDefault()}}},y=w,b=(n("4328"),Object(p["a"])(y,k,v,!1,null,"2685b15e",null));b.options.__file="FlowchartNode.vue";var A=b.exports;function N(e){var t=e.getBoundingClientRect(),n=window.pageYOffset,o=window.pageXOffset,i=t.top+n,s=t.left+o;return{top:Math.round(i),left:Math.round(s)}}function S(e,t){var n=t.pageX||t.clientX+document.documentElement.scrollLeft,o=t.pageY||t.clientY+document.documentElement.scrollTop,i=N(e),s=n-i.left,a=o-i.top;return[s,a]}var L={name:"VueFlowchart",props:{scene:{type:Object,default:function(){return{centerX:1024,scale:1,centerY:140,nodes:[],links:[]}}},height:{type:Number,default:400}},data:function(){return{action:{linking:!1,dragging:!1,scrolling:!1,selected:0},mouse:{x:0,y:0,lastX:0,lastY:0},draggingLink:null,rootDivOffset:{top:0,left:0}}},components:{FlowchartLink:g,FlowchartNode:A},computed:{nodeOptions:function(){return{centerY:this.scene.centerY,centerX:this.scene.centerX,scale:this.scene.scale,offsetTop:this.rootDivOffset.top,offsetLeft:this.rootDivOffset.left,selected:this.action.selected}},lines:function(){var e=this,t=this.scene.links.map(function(t){var n,o,i,s,a,r,c=e.findNodeWithID(t.from),u=e.findNodeWithID(t.to);n=e.scene.centerX+c.x,o=e.scene.centerY+c.y;var d=e.getPortPosition("bottom",n,o),h=Object(l["a"])(d,2);s=h[0],i=h[1],n=e.scene.centerX+u.x,o=e.scene.centerY+u.y;var f=e.getPortPosition("top",n,o),p=Object(l["a"])(f,2);return a=p[0],r=p[1],{start:[s,i],end:[a,r],id:t.id}});if(this.draggingLink){var n,o,i,s,a=this.findNodeWithID(this.draggingLink.from);n=this.scene.centerX+a.x,o=this.scene.centerY+a.y;var r=this.getPortPosition("bottom",n,o),c=Object(l["a"])(r,2);s=c[0],i=c[1],t.push({start:[s,i],end:[this.draggingLink.mx,this.draggingLink.my]})}return t}},mounted:function(){this.rootDivOffset.top=this.$el?this.$el.offsetTop:0,this.rootDivOffset.left=this.$el?this.$el.offsetLeft:0},methods:{findNodeWithID:function(e){return this.scene.nodes.find(function(t){return e===t.id})},getPortPosition:function(e,t,n){return"top"===e?[t+40,n]:"bottom"===e?[t+40,n+80]:void 0},linkingStart:function(e){this.action.linking=!0,this.draggingLink={from:e,mx:0,my:0}},linkingStop:function(e){var t=this;if(this.draggingLink&&this.draggingLink.from!==e){var n=this.scene.links.find(function(n){return n.from===t.draggingLink.from&&n.to===e});if(!n){var o=Math.max.apply(Math,[0].concat(Object(a["a"])(this.scene.links.map(function(e){return e.id})))),i={id:o+1,from:this.draggingLink.from,to:e};this.scene.links.push(i),this.$emit("linkAdded",i)}}this.draggingLink=null},linkDelete:function(e){var t=this.scene.links.find(function(t){return t.id===e});t&&(this.scene.links=this.scene.links.filter(function(t){return t.id!==e}),this.$emit("linkBreak",t))},nodeSelected:function(e,t){this.action.dragging=e,this.action.selected=e,this.$emit("nodeClick",e),this.mouse.lastX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouse.lastY=t.pageY||t.clientY+document.documentElement.scrollTop},handleMove:function(e){if(this.action.linking){var t=S(this.$el,e),n=Object(l["a"])(t,2);this.mouse.x=n[0],this.mouse.y=n[1];var o=[this.mouse.x,this.mouse.y];this.draggingLink.mx=o[0],this.draggingLink.my=o[1]}if(this.action.dragging){this.mouse.x=e.pageX||e.clientX+document.documentElement.scrollLeft,this.mouse.y=e.pageY||e.clientY+document.documentElement.scrollTop;var i=this.mouse.x-this.mouse.lastX,s=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.moveSelectedNode(i,s)}if(this.action.scrolling){var a=S(this.$el,e),r=Object(l["a"])(a,2);this.mouse.x=r[0],this.mouse.y=r[1];var c=this.mouse.x-this.mouse.lastX,u=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.scene.centerX+=c,this.scene.centerY+=u}},handleUp:function(e){var t=e.target||e.srcElement;this.$el.contains(t)&&(("string"!==typeof t.className||t.className.indexOf("node-input")<0)&&(this.draggingLink=null),"string"===typeof t.className&&t.className.indexOf("node-delete")>-1&&this.nodeDelete(this.action.dragging)),this.action.linking=!1,this.action.dragging=null,this.action.scrolling=!1},handleDown:function(e){var t=e.target||e.srcElement;if((t===this.$el||t.matches("svg, svg *"))&&1===e.which){this.action.scrolling=!0;var n=S(this.$el,e),o=Object(l["a"])(n,2);this.mouse.lastX=o[0],this.mouse.lastY=o[1],this.action.selected=null}this.$emit("canvasClick",e)},moveSelectedNode:function(e,t){var n=this,o=this.scene.nodes.findIndex(function(e){return e.id===n.action.dragging}),i=this.scene.nodes[o].x+e/this.scene.scale,s=this.scene.nodes[o].y+t/this.scene.scale;this.$set(this.scene.nodes,o,Object.assign(this.scene.nodes[o],{x:i,y:s}))},nodeDelete:function(e){this.scene.nodes=this.scene.nodes.filter(function(t){return t.id!==e}),this.scene.links=this.scene.links.filter(function(t){return t.from!==e&&t.to!==e}),this.$emit("nodeDelete",e)}}},D=L,x=(n("50b0"),Object(p["a"])(D,r,c,!1,null,"8730bea4",null));x.options.__file="SimpleFlowchart.vue";var E=x.exports,O={name:"app",components:{SimpleFlowchart:E},data:function(){return{scene:{centerX:1024,centerY:140,scale:1,nodes:[{id:1,x:-700,y:-69,type:"Action",label:"Mamed"},{id:2,x:-357,y:80,type:"Script",label:"Siroglan"},{id:3,x:-557,y:80,type:"Rule",label:"Cesaret"},{id:4,x:-213,y:80,type:"Rule",label:"Vaqif"}],links:[{id:1,from:1,to:2},{id:2,from:1,to:3},{id:3,from:1,to:4},{id:4,from:2,to:3}]},newNodeType:0,newNodeLabel:"",nodeCategory:["rule","action","script","decision","fork","join"]}},methods:{canvasClick:function(e){window.console.log("canvas Click, event:",e)},addNode:function(){var e=Math.max.apply(Math,[0].concat(Object(a["a"])(this.scene.nodes.map(function(e){return e.id}))));this.scene.nodes.push({id:e+1,x:-400,y:50,type:this.nodeCategory[this.newNodeType],label:this.newNodeLabel?this.newNodeLabel:"test".concat(e+1)})},nodeClick:function(e){window.console.log("node click",e)},nodeDelete:function(e){window.console.log("node delete",e)},linkBreak:function(e){window.console.log("link break",e)},linkAdded:function(e){window.console.log("new link added:",e)},showdata:function(){window.console.log(this.scene.nodes)}}},G=O,J=(n("5c0b"),Object(p["a"])(G,i,s,!1,null,null,null));J.options.__file="App.vue";var R=J.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(R)}}).$mount("#app")},"5bb0":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var o=n("2856"),i=n.n(o);i.a},"6dc7":function(e,t,n){"use strict";var o=n("ec2e"),i=n.n(o);i.a},a617:function(e,t,n){},ec2e:function(e,t,n){}});
//# sourceMappingURL=app.9bd62496.js.map