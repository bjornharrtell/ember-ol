"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,r,a){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,r["default"])(l,a["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var r=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:r})}),define("dummy/components/labeled-radio-button",["exports","ember-radio-button/components/labeled-radio-button"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ol-layer-tree-group",["exports","ember-ol/components/ol-layer-tree-group"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ol-layer-tree-item",["exports","ember-ol/components/ol-layer-tree-item"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ol-layer-tree",["exports","ember-ol/components/ol-layer-tree"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ol-map-panel",["exports","ember-ol/components/ol-map-panel"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ol-radio",["exports","ember-ol/components/ol-radio"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/radio-button-input",["exports","ember-radio-button/components/radio-button-input"],function(e,t){e["default"]=t["default"]}),define("dummy/components/radio-button",["exports","ember-radio-button/components/radio-button"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/index",["exports","ember","npm:openlayers"],function(e,t,n){e["default"]=t["default"].Controller.extend({init:function(){var e=new n["default"].layer.Vector({title:"Vector",source:new n["default"].source.Vector({features:[new n["default"].Feature({geometry:new n["default"].geom.Polygon([[[2,2],[98,2],[2,98],[2,2]]])})]})}),t=new n["default"].Map({layers:[new n["default"].layer.Tile({title:"OpenStreetMap",exclusive:!0,source:new n["default"].source.OSM}),new n["default"].layer.Tile({title:"MapQuest sat",exclusive:!0,visible:!1,source:new n["default"].source.MapQuest({layer:"sat"})}),new n["default"].layer.Group({title:"Layer group",layers:[e]})],controls:n["default"].control.defaults({attributionOptions:{collapsible:!1}}),target:"map",view:new n["default"].View({center:[0,0],zoom:2})});t.addControl(new n["default"].control.MousePosition({coordinateFormat:function(e){return parseInt(e[0],10)+", "+parseInt(e[1],10)}})),this.set("map",t),this.set("initialExtent",e.getSource().getExtent())}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/models/ol-layer",["exports","ember-ol/models/ol-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/labeled-radio-button",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"dummy/templates/components/labeled-radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),r},statements:[["inline","radio-button",[],["radioClass",["subexpr","@mut",[["get","radioClass",["loc",[null,[2,15],[2,25]]]]],[],[]],"radioId",["subexpr","@mut",[["get","radioId",["loc",[null,[3,12],[3,19]]]]],[],[]],"changed","innerRadioChanged","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[5,13],[5,21]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[6,15],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,9],[7,13]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,13],[8,21]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[9,10],[9,15]]]]],[],[]]],["loc",[null,[1,0],[9,17]]]],["content","yield",["loc",[null,[11,0],[11,9]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/ol-layer-item",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:4,column:4},end:{line:6,column:4}},moduleName:"dummy/templates/components/ol-layer-item.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","ol-layer-item",[],["layer",["subexpr","@mut",[["get","layer",["loc",[null,[5,28],[5,33]]]]],[],[]]],["loc",[null,[5,6],[5,35]]]]],locals:["layer"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"dummy/templates/components/ol-layer-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("h4"),r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"class","list-group");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("  ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[1]),0,0),r[1]=e.createMorphAt(e.childAt(t,[3]),1,1),r},statements:[["content","layer.title",["loc",[null,[2,6],[2,21]]]],["block","each",[["get","layer.layers",["loc",[null,[4,12],[4,24]]]]],[],0,null,["loc",[null,[4,4],[6,13]]]]],locals:[],templates:[e]}}(),t=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:9,column:2},end:{line:11,column:2}},moduleName:"dummy/templates/components/ol-layer-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("label"),r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode(" ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=new Array(2);return a[0]=e.createMorphAt(r,0,0),a[1]=e.createMorphAt(r,2,2),a},statements:[["inline","radio-button",[],["groupValue",["subexpr","@mut",[["get","group",["loc",[null,[10,35],[10,40]]]]],[],[]],"value","layer.title","changed","layer.visible"],["loc",[null,[10,9],[10,86]]]],["content","layer.title",["loc",[null,[10,87],[10,102]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:11,column:2},end:{line:18,column:2}},moduleName:"dummy/templates/components/ol-layer-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment('\n  <button class="btn btn-default btn-xs" {{action "removeSelected" layer}}>\n    <span class="glyphicon glyphicon-trash"></span>\n  </button>\n  ');e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,1,1,n),r[1]=e.createMorphAt(t,3,3,n),r},statements:[["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","layer.visible",["loc",[null,[12,34],[12,47]]]]],[],[]]],["loc",[null,[12,2],[12,49]]]],["content","layer.title",["loc",[null,[12,50],[12,65]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:8,column:0},end:{line:19,column:0}},moduleName:"dummy/templates/components/ol-layer-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","layer.exclusive",["loc",[null,[9,8],[9,23]]]]],[],0,1,["loc",[null,[9,2],[18,9]]]]],locals:[],templates:[e,t]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:20,column:0}},moduleName:"dummy/templates/components/ol-layer-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","layer.layers",["loc",[null,[1,6],[1,18]]]]],[],0,1,["loc",[null,[1,0],[19,7]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/components/radio-button",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"dummy/templates/components/radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("label"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=new Array(4);return a[0]=e.createAttrMorph(r,"class"),a[1]=e.createAttrMorph(r,"for"),a[2]=e.createMorphAt(r,1,1),a[3]=e.createMorphAt(r,3,3),a},statements:[["attribute","class",["concat",["ember-radio-button ",["subexpr","if",[["get","checked",["loc",[null,[2,40],[2,47]]]],"checked"],[],["loc",[null,[2,35],[2,59]]]]," ",["get","joinedClassNames",["loc",[null,[2,62],[2,78]]]]]]],["attribute","for",["get","radioId",["loc",[null,[2,88],[2,95]]]]],["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[4,14],[4,24]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[5,11],[5,18]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[6,17],[6,25]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,13],[7,17]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[8,17],[8,25]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[9,19],[9,29]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,14],[10,19]]]]],[],[]],"changed","changed"],["loc",[null,[3,4],[11,27]]]],["content","yield",["loc",[null,[13,4],[13,13]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:15,column:0},end:{line:25,column:0}},moduleName:"dummy/templates/components/radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","radio-button-input",[],["class",["subexpr","@mut",[["get","radioClass",["loc",[null,[17,12],[17,22]]]]],[],[]],"id",["subexpr","@mut",[["get","radioId",["loc",[null,[18,9],[18,16]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[19,15],[19,23]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[20,11],[20,15]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[21,15],[21,23]]]]],[],[]],"groupValue",["subexpr","@mut",[["get","groupValue",["loc",[null,[22,17],[22,27]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[23,12],[23,17]]]]],[],[]],"changed","changed"],["loc",[null,[16,2],[24,25]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:26,column:0}},moduleName:"dummy/templates/components/radio-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[25,7]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),r},statements:[["inline","ol-map-panel",[],["map",["subexpr","@mut",[["get","map",["loc",[null,[1,19],[1,22]]]]],[],[]],"initialExtent",["subexpr","@mut",[["get","initialExtent",["loc",[null,[1,37],[1,50]]]]],[],[]]],["loc",[null,[1,0],[1,52]]]],["inline","ol-layer-tree",[],["map",["subexpr","@mut",[["get","map",["loc",[null,[2,20],[2,23]]]]],[],[]]],["loc",[null,[2,0],[2,25]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-ol",version:"0.1.0+78c4cc28"});