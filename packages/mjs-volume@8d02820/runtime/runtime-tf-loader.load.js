montageDefine("8d02820","runtime/runtime-tf-loader",{dependencies:["runtime/dependencies/gl-matrix","runtime/glTF-parser","runtime/resource-description","runtime/technique","runtime/pass","runtime/glsl-program","runtime/glTF-material","runtime/mesh","runtime/glTF-node","runtime/primitive","runtime/projection","runtime/camera","runtime/skin","runtime/glTF-scene","runtime/transform","runtime/animation","runtime/animation-manager"],factory:function(e,t){e("runtime/dependencies/gl-matrix");var i=e("runtime/glTF-parser").glTFParser,n=e("runtime/resource-description").ResourceDescription,r=e("runtime/technique").Technique,s=e("runtime/pass").ProgramPass;e("runtime/pass").Pass,e("runtime/pass").ScenePass;var a=e("runtime/glsl-program").GLSLProgram,o=e("runtime/glTF-material").glTFMaterial,l=e("runtime/mesh").Mesh,u=e("runtime/glTF-node").glTFNode,h=e("runtime/primitive").Primitive,c=e("runtime/projection").Projection,d=e("runtime/camera").Camera,m=e("runtime/skin").Skin,p=e("runtime/glTF-scene").glTFScene,f=e("runtime/transform").Transform,_=e("runtime/animation").KeyframeAnimation,g=e("runtime/animation-manager").AnimationManager;t.RuntimeTFLoader=Object.create(i,{_materials:{writable:!0,value:null},_scenes:{writable:!0,value:null},_animations:{writable:!0,value:null},totalBufferSize:{value:0,writable:!0},handleBuffer:{value:function(e,t){var i=Object.create(n).init(e,t);return i.id=e,this.storeEntry(e,i,t),this.totalBufferSize+=t.byteLength,!0}},handleBufferView:{value:function(e,t){var i=Object.create(n).init(e,t);i.id=e;var r=this.getEntry(i.description.buffer);return t.type="ArrayBufferView",i.buffer=r,this.storeEntry(e,i,t),!0}},handleShader:{value:function(e,t){var i=Object.create(n).init(e,t);return i.id=e,i.type="shader",this.storeEntry(e,i,t),!0}},handleProgram:{value:function(e,t){var i=Object.create(n).init(e,t);i.id=e,i.type="program";var r=this.getEntry(i.description.vertexShader),s=this.getEntry(i.description.fragmentShader);return i[a.VERTEX_SHADER]=r.entry,i[a.FRAGMENT_SHADER]=s.entry,this.storeEntry(e,i,t),!0}},handleImage:{value:function(e,t){var i=t.path,r=Object.create(n).init(i,{path:i});return r.type="image",this.storeEntry(e,r,t),!0}},handleVideo:{value:function(e,t){var i=t.path,r=Object.create(n).init(i,{path:i});return r.type="video",this.storeEntry(e,r,t),!0}},handleTechnique:{value:function(e,t){var i=Object.create(r);i.id=e;var n=this.storeEntry(e,i,t),a=t.pass;i.passName=a;var o=t.passes;if(!o)return console.log("ERROR: technique does not contain pass"),!1;var l={},u=Object.keys(t.passes);return u.forEach(function(e){var t=o[e],i=t.instanceProgram;if(!i)return console.log("ERROR: A Pass with type=program must have a program property"),!1;var r=Object.create(s).init();r.id=n+"_"+a,r.instanceProgram=t.instanceProgram,r.instanceProgram.program=this.getEntry(i.program).entry,r.states=t.states,l[e]=r},this),i.parameters=t.parameters,i.passes=l,!0}},handleMaterial:{value:function(e,t){var i=Object.create(o).init(e);this.storeEntry(e,i,t);var n=t.instanceTechnique,r=n.values;i.name=t.name;var s=this.getEntry(n.technique);if(!s)return console.log("ERROR: invalid file, cannot find referenced technique:"+t.technique),!1;i.technique=s.entry;var a=i.technique.parameters;if(i.parameters=JSON.parse(JSON.stringify(a)),r){var l;for(l in r){var u=i.parameters[l];if(u)switch(u.value=r[l],u.type){case WebGLRenderingContext.SAMPLER_CUBE:case WebGLRenderingContext.SAMPLER_2D:var h=this.getEntry(u.value);h&&(u.value=h.entry);break;default:}}}return this._materials||(this._materials=[]),this._materials.push(i),!0}},handleLight:{value:function(){return!0}},handleAccessor:{value:function(e,t){t.id=e;var i=this.getEntry(t.bufferView);t.bufferView=i.entry,t.byteOffset||(t.byteOffset=0),this.storeEntry(e,t,t)}},handleMesh:{value:function(e,t){var i=Object.create(l).init();i.id=e,i.name=t.name;var n=!1,r=t.extensions;r&&(r["won-compression"]&&(n=!0,i.compression=r["won-compression"],i.compression.type="won-compression",i.compression.compressedData.bufferView=this.getEntry(i.compression.compressedData.bufferView).entry,i.compression.compressedData.id=e+"_compressedData"),r["Open3DGC-compression"]&&(n=!0,i.compression=r["Open3DGC-compression"],i.compression.type="Open3DGC-compression",i.compression.compressedData.bufferView=this.getEntry(i.compression.compressedData.bufferView).entry,i.compression.compressedData.id=e+"_compressedData")),this.storeEntry(e,i,t);var s=t[l.PRIMITIVES];if(!s)return console.log("MISSING_PRIMITIVES for mesh:"+e),!1;for(var a=0;s.length>a;a++){var o=s[a];if(o.primitive===WebGLRenderingContext.TRIANGLES){var u=Object.create(h).init(),c=this.getEntry(o.material);u.material=c.entry,i.primitives.push(u);var d=o.attributes,m=Object.keys(d);m.forEach(function(e){var t=d[e],i=this.getEntry(t);u.addVertexAttribute({semantic:e,attribute:i.entry})},this);var p=o.indices,f=this.getEntry(p);u.indices=f.entry}}return!0}},handleCamera:{value:function(e,t){var i=Object.create(d).init();i.id=e,this.storeEntry(e,i,t);var n=Object.create(c);return n.initWithDescription(t),i.projection=n,!0}},handleLight:{value:function(){return!0}},buildNodeHirerachy:{value:function(e){var t=e.entry,i=e.description.children;i&&i.forEach(function(e){var i=this.getEntry(e),n=i.entry;null==n.parent?t.children.push(n):t.children.push(n.copy()),this.buildNodeHirerachy(i)},this)}},resolveParameterSources:{value:function(){this._materials&&this._materials.forEach(function(e){if(e.parameters){var t=Object.keys(e.parameters);t.forEach(function(t){var i=e.parameters[t];i&&i.source&&(i.source=this.getEntry(i.source).entry)},this)}},this)}},buildSkeletons:{value:function(e){if(e.instanceSkin){var t=e.instanceSkin.skin;if(t){e.instanceSkin.skeletons.forEach(function(e){var i=this.getEntry(e);if(i){var n=i.entry,r=t.jointsIds,s=[];r.forEach(function(t){var i=n.nodeWithJointID(t);i?s.push(i):console.log("WARNING: jointId:"+t+" cannot be found in skeleton:"+e)},this),t.nodesForSkeleton[e]=s}},this);var i=[];e.instanceSkin.sources.forEach(function(e){var t=this.getEntry(e);t&&i.push(t.entry)},this),t.sources=i}}var n=e.children;n&&n.forEach(function(e){this.buildSkeletons(e)},this)}},handleScene:{value:function(e,t){if(this._scenes||(this._scenes=[]),!t.nodes)return console.log("ERROR: invalid file required nodes property is missing from scene"),!1;var i=Object.create(p).init();i.ids=this._ids,i.id=e,i.name=t.name,i.baseURL=this.baseURL,this.storeEntry(e,i,t);var n=Object.create(u).initWithID();return t.nodes&&t.nodes.forEach(function(e){var t=this.getEntry(e);n.children.push(t.entry),this.buildNodeHirerachy(t)},this),this.resolveParameterSources(),this.buildSkeletons(n),i.rootNode=n,this._scenes.push(i),!0}},handleSkin:{value:function(e,t){var i=Object.create(m).init();i.bindShapeMatrix=mat4.create(t.bindShapeMatrix),i.jointsIds=t.joints,i.inverseBindMatricesDescription=t.inverseBindMatrices,i.inverseBindMatricesDescription.id=e+"_inverseBindMatrices",i.inverseBindMatricesDescription.bufferView=this.getEntry(i.inverseBindMatricesDescription.bufferView).entry,this.storeEntry(e,i,t)}},handleNode:{value:function(e,t){var i=Object.create(u).init();i.id=e,i.jointId=t.jointId,i.name=t.name,this.storeEntry(e,i,t),i.transform=Object.create(f).initWithDescription(t);var n;if(t.mesh&&(n=this.getEntry(t.mesh),i.meshes.push(n.entry)),t.meshes&&t.meshes.forEach(function(e){n=this.getEntry(e),n&&i.meshes.push(n.entry)},this),t.camera){var r=this.getEntry(t.camera);r&&i.cameras.push(r.entry)}if(t.instanceSkin){t.instanceSkin.skin=this.getEntry(t.instanceSkin.skin).entry,i.instanceSkin=t.instanceSkin;var s=i.instanceSkin.sources;s&&s.forEach(function(e){n=this.getEntry(e),n&&i.meshes.push(n.entry)},this)}return!0}},handleLoadCompleted:{value:function(){if(this.delegate){var e=null;if(this._state.options&&(e=this._state.options.ids),e)e.forEach(function(e){var t=this.getEntry(e);t&&this.delegate.loadCompleted(t.entry)},this);else if(this._scenes&&this.delegate&&this._scenes.length>0){var t=Object.create(g).init();t.animations=this._animations,this._scenes[0].animationManager=t,this.delegate.loadCompleted(this._scenes[0])}}}},handleAnimation:{value:function(e,t){this._animations||(this._animations=[]);var i=Object.create(_).initWithDescription(t);i.id=e,this.storeEntry(e,i,t);var n={};Object.keys(t.parameters).forEach(function(r){var s=t.parameters[r];switch(parameterDescription=this.getEntry(s).entry,parameterDescription.type){case WebGLRenderingContext.FLOAT_VEC4:componentsPerAttribute=4;break;case WebGLRenderingContext.FLOAT_VEC3:componentsPerAttribute=3;break;case WebGLRenderingContext.FLOAT_VEC2:componentsPerAttribute=2;break;case WebGLRenderingContext.FLOAT:componentsPerAttribute=1;break;default:console.log("type:"+parameterDescription.type+" byteStride not handled")}if(parameterDescription.extensions){var a=parameterDescription.extensions;if(a){var o=a["Open3DGC-compression"];if(o){var l=o.compressedData;l&&(l.bufferView=this.getEntry(l.bufferView).entry,l.id=e+r+"_compressedData")}}}parameterDescription.byteStride=4*componentsPerAttribute,parameterDescription.componentsPerAttribute=componentsPerAttribute,parameterDescription.id=i.id+r,n[r]=parameterDescription},this),i.parameters=n,i.channels.forEach(function(e){var t=e.target.id;e.path=e.target.path,e.target=this.getEntry(t).entry},this),Object.keys(i.samplers).forEach(function(e){var r=t.samplers[e],s=i.samplers[e],a=r.input,o=r.output;s.input=n[a],s.output=n[o]},this),this._animations.push(i)}},handleTexture:{value:function(e,t){if(t.source&&t.sampler)t.type="texture",t.source=this.getEntry(t.source).entry,t.sampler=this.getEntry(t.sampler).entry,t.id=e,this.storeEntry(e,t,t);else if(t.sources&&t.sampler){t.type="texture";for(var i=0;t.sources.length>i;i++)t.sources[i]=this.getEntry(t.sources[i]).entry;t.sampler=this.getEntry(t.sampler).entry,t.id=e,this.storeEntry(e,t,t)}else console.log("ERROR: texture"+e+" must contain both source and sampler properties")}},handleSampler:{value:function(e,t){t.id=t,this.storeEntry(e,t,t)}},handleError:{value:function(){}},_delegate:{value:null,writable:!0},delegate:{enumerable:!0,get:function(){return this._delegate},set:function(e){this._delegate=e}},_entries:{enumerable:!1,value:null,writable:!0},removeAllEntries:{value:function(){this._entries={}}},containsEntry:{enumerable:!1,value:function(e){return this._entries?this._entries[e]?!0:!1:!1}},storeEntry:{enumerable:!1,value:function(e,t,i){return null==this._entries&&(this._entries={}),null==this._ids&&(this._ids={}),t.baseId=e,this._ids[e]=t,(e+=this.loaderContext())?(t.id=e,this.containsEntry[e]&&console.log("WARNING: entry:"+e+" is already stored, overriding"),this._entries[e]={id:e,entry:t,description:i},e):(console.log("ERROR: not id provided, cannot store"),void 0)}},getEntry:{enumerable:!1,value:function(e){return e+=this.loaderContext(),this._entries?this._entries[e]:null}}})}});