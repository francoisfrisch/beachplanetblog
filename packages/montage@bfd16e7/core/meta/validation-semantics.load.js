montageDefine("bfd16e7","core/meta/validation-semantics",{dependencies:["montage","core/logger"],factory:function(e,t){"use strict";var n=e("montage").Montage,i=n;e("core/logger").logger("blueprint");var r=t.PropertyValidationSemantics=i.create(i,{constructor:{value:function r(){this.super()}},initWithBlueprint:{value:function(e){return this._blueprint=e,this}},_blueprint:{value:null},blueprint:{get:function(){return this._blueprint}},compile:{value:function(e,t){i.compile.call(this,e,t)}},operators:{value:{isBound:function(e){return!e}}},evaluators:{value:{isBound:function(e,t){var n=this;return function(i,r){return i=n.count(e(i,r)),t(i,r)}}}}});for(var a in i.operators)r.operators[a]=i.operators[a];for(var s in i.evaluators)r.evaluators[s]=i.evaluators[s]}});