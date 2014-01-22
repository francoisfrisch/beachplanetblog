montageDefine("9989fd1","lru-map",{dependencies:["./shim","./lru-set","./generic-collection","./generic-map","./listen/property-changes","lru-map"],factory:function(e,t,n){"use strict";function r(e,t,n,a,o){return this instanceof r?(n=n||Object.equals,a=a||Object.hash,o=o||Function.noop,this.contentEquals=n,this.contentHash=a,this.getDefault=o,this.store=new i(void 0,t,function(e,t){return n(e.key,t.key)},function(e){return a(e.key)}),this.length=0,this.addEach(e),void 0):new r(e,t,n,a,o)}e("./shim");var i=e("./lru-set"),a=e("./generic-collection"),o=e("./generic-map"),s=e("./listen/property-changes");n.exports=r,r.LruMap=r,Object.addEach(r.prototype,a.prototype),Object.addEach(r.prototype,o.prototype),Object.addEach(r.prototype,s.prototype),r.prototype.constructClone=function(e){return new this.constructor(e,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},r.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},r.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)},r.prototype.addMapChangeListener=function(){if(!this.dispatchesMapChanges){var e=this;this.store.addBeforeRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchBeforeMapChange(n[0].key,void 0)}),this.store.addRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchMapChange(n[0].key,void 0)})}o.prototype.addMapChangeListener.apply(this,arguments)}}});