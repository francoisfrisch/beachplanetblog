montageDefine("8d02820","runtime/technique",{dependencies:["runtime/base"],factory:function(e,t){var i=e("runtime/base").Base;t.Technique=Object.create(i,{_parameters:{value:null,writable:!0},_passName:{value:null,writable:!0},_passes:{value:null,writable:!0},init:{value:function(){return this.__Base_init(),this.passes={},this}},parameters:{get:function(){return this._parameters},set:function(e){this._parameters=e}},passName:{get:function(){return this._passName},set:function(e){this._passName!=e&&(this._passName=e)}},rootPass:{get:function(){return this._passes[this.passName]}},passesDidChange:{value:function(){var e=Object.keys(this.passes);this.passName=1==e.length?e[0]:null}},passes:{get:function(){return this._passes},set:function(e){this._passes!=e&&(this._passes=e,this.passesDidChange())}},execute:{value:function(e,t,i){e.resetStates(),this.rootPass.execute(e,t,i)}}})}});