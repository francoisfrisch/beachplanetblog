function Heap(e,t,i){return this instanceof Heap?(this.contentEquals=t||Object.equals,this.contentCompare=i||Object.compare,this.content=[],this.length=0,this.addEach(e),void 0):new Heap(e,t,i)}var ArrayChanges=require("./listen/array-changes"),Shim=require("./shim"),GenericCollection=require("./generic-collection"),MapChanges=require("./listen/map-changes"),RangeChanges=require("./listen/range-changes"),PropertyChanges=require("./listen/property-changes");module.exports=Heap,Heap.Heap=Heap,Object.addEach(Heap.prototype,GenericCollection.prototype),Object.addEach(Heap.prototype,PropertyChanges.prototype),Object.addEach(Heap.prototype,RangeChanges.prototype),Object.addEach(Heap.prototype,MapChanges.prototype),Heap.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare)},Heap.prototype.push=function(e){this.content.push(e),this.float(this.content.length-1),this.length++},Heap.prototype.pop=function(){var e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content.set(0,t),this.sink(0)),this.length--,e},Heap.prototype.add=function(e){this.push(e)},Heap.prototype.indexOf=function(e){for(var t=0;this.length>t;t++)if(this.contentEquals(this.content[t],e))return t;return-1},Heap.prototype.delete=function(e){var t=this.indexOf(e);if(-1===t)return!1;var i=this.content.pop();if(t===this.content.length)return!0;this.content.set(t,i);var n=this.contentCompare(i,e);return n>0?this.float(t):0>n&&this.sink(t),this.length--,!0},Heap.prototype.peek=function(){return this.length?this.content[0]:void 0},Heap.prototype.max=function(){return this.peek()},Heap.prototype.one=function(){return this.peek()},Heap.prototype.float=function(e){for(var t=this.content[e];e>0;){var i=Math.floor((e+1)/2)-1,n=this.content[i];if(!(0>this.contentCompare(n,t)))break;this.content.set(i,t),this.content.set(e,n),e=i}},Heap.prototype.sink=function(e){for(var t,i,n,a,r,o,s=this.content.length,c=this.content[e];;){if(a=2*(e+1),n=a-1,o=!1,s>n){var t=this.content[n],u=this.contentCompare(t,c);u>0&&(r=n,o=!0)}if(s>a){var i=this.content[a],u=this.contentCompare(i,o?t:c);u>0&&(r=a,o=!0)}if(!o)break;this.content.set(e,this.content[r]),this.content.set(r,c),e=r}},Heap.prototype.clear=function(){this.content.clear(),this.length=0},Heap.prototype.reduce=function(e,t){var i=arguments[2];return this.content.reduce(function(t,n,a){return e.call(i,t,n,a,this)},t,this)},Heap.prototype.reduceRight=function(e,t){var i=arguments[2];return this.content.reduceRight(function(t,n,a){return e.call(i,t,n,a,this)},t,this)},Heap.prototype.makeObservable=function(){this.content.addRangeChangeListener(this,"content"),this.content.addBeforeRangeChangeListener(this,"content"),this.content.addMapChangeListener(this,"content"),this.content.addBeforeMapChangeListener(this,"content")},Heap.prototype.handleContentRangeChange=function(e,t,i){this.dispatchRangeChange(e,t,i)},Heap.prototype.handleContentRangeWillChange=function(e,t,i){this.dispatchBeforeRangeChange(e,t,i)},Heap.prototype.handleContentMapChange=function(e,t){this.dispatchMapChange(t,e)},Heap.prototype.handleContentMapWillChange=function(e,t){this.dispatchBeforeMapChange(t,e)};