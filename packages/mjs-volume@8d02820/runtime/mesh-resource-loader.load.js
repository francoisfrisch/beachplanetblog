montageDefine("8d02820","runtime/mesh-resource-loader",{dependencies:["runtime/resource-loader"],factory:function(e,t){var n=e("runtime/resource-loader").ResourceLoader;t.MeshResourceLoader=Object.create(n,{meshes:{value:null,writable:!0},fireMeshesDidLoadIfNeeded:{value:function(){var e=Object.keys(this._trackedIds);e&&0==e.length&&this.delegate&&this.delegate.meshesDidLoad&&this.delegate.meshesDidLoad(this.meshes)}},resourceAvailable:{value:function(e){this._removeTrackedId(e),this.fireMeshesDidLoadIfNeeded()}},_fetchResources:{value:function(e,t){var n=this.webGLRenderer.webGLContext,i=Object.keys(t);i.forEach(function(i){var r=this.webGLRenderer.resourceManager.getResource(t[i],e,n);null==r&&this._addTrackedId(i)},this)}},_fetchAllResources:{value:function(e){this.webGLRenderer.webGLContext,this._fetchResources(this.webGLRenderer.vertexAttributeBufferDelegate,e.vertexBuffers,!0),this._fetchResources(this.webGLRenderer.indicesDelegate,e.allIndices),this._fetchResources(this.webGLRenderer.textureDelegate,e.textures),this._fetchResources(this.webGLRenderer.programDelegate,e.programs),this.fireMeshesDidLoadIfNeeded()}},_trackProgramsFromMaterial:{value:function(e,t){var n=e.technique;if(n)for(var i in n.passes){var r=n.passes[i],a=r.instanceProgram;a&&(t[a.program.id]=a.program,this._addTrackedId(a.program.id))}}},_trackTexturesFromMaterial:{value:function(e,t){var n=e.parameters;if(n){var i=Object.keys(n);i.length>0&&i.forEach(function(e){var i=n[e];if(i&&i.value){var r=i.value;"texture"===r.type&&(t[r.id]=r,this._addTrackedId(r.id))}},this)}}},_trackIndicesFromPrimitive:{value:function(e,t){var n=e.indices;t[n.id]=n,this._addTrackedId(n.id)}},_trackVertexBuffersFromPrimitive:{value:function(e,t){for(var n in e.semantics){var i=e.semantics[n];t[i.id]=i,this._addTrackedId(i.id)}}},_trackMesh:{value:function(e,t){e.primitives.forEach(function(e){this._trackTexturesFromMaterial(e.material,t.textures),this._trackIndicesFromPrimitive(e,t.allIndices),this._trackVertexBuffersFromPrimitive(e,t.vertexBuffers),this._trackProgramsFromMaterial(e.material,t.programs)},this)}},_trackMeshes:{value:function(e){this.meshes.forEach(function(t){this._trackMesh(t,e,this.webGLRenderer)},this)}},loadMeshes:{value:function(){var e={};e.textures={},e.allIndices={},e.vertexBuffers={},e.programs={},this._trackMeshes(e),this._fetchAllResources(e,this.webGLRenderer)}},init:{value:function(e,t,n){return this.delegate=n,this.webGLRenderer=t,this.meshes=e,t.resourceManager.observers.push(this),this}}})}});