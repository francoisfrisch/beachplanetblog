var Montage=require("montage").Montage,SelfSerializer=Montage.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},constructor:{value:function SelfSerializer(){}},initWithMalkerAndVisitorAndObject:{value:function(e,t,n){return this._malker=e,this._visitor=t,this._object=n,this}},getObjectLabel:{value:function(e){return this._visitor.labeler.getObjectLabel(e)}},addObject:{value:function(e){return"object"==typeof e?(this._malker.visit(e),e):void 0}},addObjectReference:{value:function(e){var t=this._visitor.builder,n=this._visitor.labeler,i=n.getObjectLabel(e);return{thisIsAReferenceCreatedByMontageSerializer:!0,reference:t.createObjectReference(i)}}},setProperty:{value:function(e,t,n){var i,r=this._visitor.builder;i=r.top.getProperty("properties"),r.push(i),this._visitor.setProperty(this._malker,e,t,n),r.pop()}},setAllProperties:{value:function(){var e,t=this._visitor.builder;e=t.top.getProperty("properties"),t.push(e),this._visitor.setSerializableObjectProperties(this._malker,this._object),t.pop()}},setUnit:{value:function(e){this._visitor.setObjectCustomUnit(this._malker,this._object,e)}},setAllUnits:{value:function(){this._visitor.setObjectCustomUnits(this._malker,this._object)}}});exports.SelfSerializer=SelfSerializer;