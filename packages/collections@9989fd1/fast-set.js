"use strict";function FastSet(e,t,i,a){return this instanceof FastSet?(t=t||Object.equals,i=i||Object.hash,a=a||Function.noop,this.contentEquals=t,this.contentHash=i,this.getDefault=a,this.buckets=new this.Buckets(null,this.Bucket),this.length=0,this.addEach(e),void 0):new FastSet(e,t,i,a)}var Shim=require("./shim"),Dict=require("./dict"),List=require("./list"),GenericCollection=require("./generic-collection"),GenericSet=require("./generic-set"),TreeLog=require("./tree-log"),PropertyChanges=require("./listen/property-changes"),object_has=Object.prototype.hasOwnProperty;module.exports=FastSet,FastSet.FastSet=FastSet,Object.addEach(FastSet.prototype,GenericCollection.prototype),Object.addEach(FastSet.prototype,GenericSet.prototype),Object.addEach(FastSet.prototype,PropertyChanges.prototype),FastSet.prototype.Buckets=Dict,FastSet.prototype.Bucket=List,FastSet.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},FastSet.prototype.has=function(e){var t=this.contentHash(e);return this.buckets.get(t).has(e)},FastSet.prototype.get=function(e){var t=this.contentHash(e),i=this.buckets;return i.has(t)?i.get(t).get(e):this.getDefault(e)},FastSet.prototype["delete"]=function(e){var t=this.contentHash(e),i=this.buckets;if(i.has(t)){var a=i.get(t);if(a["delete"](e))return this.length--,0===a.length&&i["delete"](t),!0}return!1},FastSet.prototype.clear=function(){this.buckets.clear(),this.length=0},FastSet.prototype.add=function(e){var t=this.contentHash(e),i=this.buckets;return i.has(t)||i.set(t,new this.Bucket(null,this.contentEquals)),i.get(t).has(e)?!1:(i.get(t).add(e),this.length++,!0)},FastSet.prototype.reduce=function(e,t){var i=arguments[2],a=this.buckets,n=0;return a.reduce(function(t,a){return a.reduce(function(t,a){return e.call(i,t,a,n++,this)},t,this)},t,this)},FastSet.prototype.one=function(){return this.length>0?this.buckets.one().one():void 0},FastSet.prototype.iterate=function(){return this.buckets.values().flatten().iterate()},FastSet.prototype.log=function(e,t,i,a){e=e||TreeLog.unicodeSharp,t=t||this.logNode,i||(i=console.log,a=console),i=i.bind(a);var n=this.buckets,r=n.keys();r.forEach(function(s,o){var l,u;o===r.length-1?(l=e.fromAbove,u=" "):0===o?(l=e.branchDown,u=e.strafe):(l=e.fromBoth,u=e.strafe);var c=n.get(s);i.call(a,l+e.through+e.branchDown+" "+s),c.forEach(function(n,r){var s,o;r===c.head.prev?(s=e.fromAbove,o=" "):(s=e.fromBoth,o=e.strafe);var l;t(r,function(t){l?i.call(a,u+" "+o+"  "+t):(i.call(a,u+" "+s+e.through+e.through+t),l=!0)},function(t){i.call(a,u+" "+e.strafe+"  "+t)})})})},FastSet.prototype.logNode=function(e,t){var i=e.value;Object(i)===i?JSON.stringify(i,null,4).split("\n").forEach(function(e){t(" "+e)}):t(" "+i)};