"use strict";function define(e,t){Object.defineProperty(Array.prototype,e,{value:t,writable:!0,configurable:!0,enumerable:!1})}function ArrayIterator(e,t,n){this.array=e,this.start=null==t?0:t,this.end=n}var Function=require("./shim-function"),GenericCollection=require("./generic-collection"),GenericOrder=require("./generic-order"),WeakMap=require("weak-map");module.exports=Array,Array.empty=[],Object.freeze&&Object.freeze(Array.empty),Array.from=function(e){var t=[];return t.addEach(e),t},Array.unzip=function(e){for(var t=[],n=1/0,r=0;e.length>r;r++){var i=e[r];e[r]=i.toArray(),n>i.length&&(n=i.length)}for(var r=0;e.length>r;r++)for(var i=e[r],a=0;i.length>a;a++)n>a&&a in i&&(t[a]=t[a]||[],t[a][r]=i[a]);return t},define("addEach",GenericCollection.prototype.addEach),define("deleteEach",GenericCollection.prototype.deleteEach),define("toArray",GenericCollection.prototype.toArray),define("toObject",GenericCollection.prototype.toObject),define("all",GenericCollection.prototype.all),define("any",GenericCollection.prototype.any),define("min",GenericCollection.prototype.min),define("max",GenericCollection.prototype.max),define("sum",GenericCollection.prototype.sum),define("average",GenericCollection.prototype.average),define("only",GenericCollection.prototype.only),define("flatten",GenericCollection.prototype.flatten),define("zip",GenericCollection.prototype.zip),define("enumerate",GenericCollection.prototype.enumerate),define("group",GenericCollection.prototype.group),define("sorted",GenericCollection.prototype.sorted),define("reversed",GenericCollection.prototype.reversed),define("constructClone",function(e){var t=new this.constructor;return t.addEach(e),t}),define("has",function(e,t){return-1!==this.find(e,t)}),define("get",function(e,t){if(+e!==e)throw Error("Indicies must be numbers");return!e in this?t:this[e]}),define("set",function(e,t){return this.splice(e,1,t),!0}),define("add",function(e){return this.push(e),!0}),define("delete",function(e,t){var n=this.find(e,t);return-1!==n?(this.splice(n,1),!0):!1}),define("find",function(e,t){t=t||this.contentEquals||Object.equals;for(var n=0;this.length>n;n++)if(n in this&&t(this[n],e))return n;return-1}),define("findLast",function(e,t){t=t||this.contentEquals||Object.equals;var n=this.length;do if(n--,n in this&&t(this[n],e))return n;while(n>0);return-1}),define("swap",function(e,t,n){var r=Array.prototype.slice.call(arguments,0,2);return n&&(Array.isArray(n)||(n=Array.prototype.slice.call(n)),r.push.apply(r,n)),this.splice.apply(this,r)}),define("one",function(){for(var e in this)if(Object.owns(this,e))return this[e]}),define("clear",function(){return this.length=0,this}),define("compare",function(e,t){t=t||Object.compare;var n,r,i,a,o;if(this===e)return 0;if(!e||!Array.isArray(e))return GenericOrder.prototype.compare.call(this,e,t);for(r=Math.min(this.length,e.length),n=0;r>n;n++)if(n in this){if(!(n in e))return-1;if(i=this[n],a=e[n],o=t(i,a))return o}else if(n in e)return 1;return this.length-e.length}),define("equals",function(e,t){t=t||Object.equals;var n,r,i=0,a=this.length;if(this===e)return!0;if(!e||!Array.isArray(e))return GenericOrder.prototype.equals.call(this,e);if(a!==e.length)return!1;for(;a>i;++i)if(i in this){if(!(i in e))return!1;if(n=this[i],r=e[i],!t(n,r))return!1}else if(i in e)return!1;return!0}),define("clone",function(e,t){if(void 0===e)e=1/0;else if(0===e)return this;t=t||new WeakMap;var n=[];for(var r in this)Object.owns(this,r)&&(n[r]=Object.clone(this[r],e-1,t));return n}),define("iterate",function(e,t){return new ArrayIterator(this,e,t)}),define("Iterator",ArrayIterator),ArrayIterator.prototype.next=function(){if(this.start===(null==this.end?this.array.length:this.end))throw StopIteration;return this.array[this.start++]};