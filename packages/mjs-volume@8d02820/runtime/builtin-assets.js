var Q=require("q"),RuntimeTFLoader=require("runtime/runtime-tf-loader").RuntimeTFLoader;exports.BuiltInAssets=Object.create(Object.prototype,{_deferredForName:{value:{},writable:!0},_assetInfos:{value:{},writable:!0},registerBuiltinAssetsIfNeeded:{value:function(){var e=require.location+"assets/picking/picking.json",t=require.location+"assets/gradient/gradient.json";this._assetInfos.pickingTechnique={location:e,options:{ids:["pickingTechnique"]}},this._assetInfos.gradient={location:t}}},assetInfosForName:{value:function(e){return this.registerBuiltinAssetsIfNeeded(),this._assetInfos[e]}},assetWithName:{value:function(e){var t=this._deferredForName[e];if(!t){t=Q.defer(),this._deferredForName[e]=t;var n={};n.loadCompleted=function(e){t.resolve(e)}.bind(this);var i=Object.create(RuntimeTFLoader),r=this.assetInfosForName(e);r?(i.initWithPath(r.location),i.delegate=n,i.load(null,r.options)):t.reject("ERROR:"+e+" isn't registered as a built-in asset")}return t.promise}}});