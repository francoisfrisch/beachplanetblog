montageDefine("8d02820","runtime/webgl-renderer",{dependencies:["runtime/dependencies/gl-matrix","runtime/glsl-program","runtime/helpers/resource-manager"],factory:function(e,t){e("runtime/dependencies/gl-matrix");var i=e("runtime/glsl-program").GLSLProgram,n=e("runtime/helpers/resource-manager").WebGLTFResourceManager;t.WebGLRenderer=Object.create(Object.prototype,{MODEL:{value:"MODEL",writable:!1},VIEW:{value:"VIEW",writable:!1},PROJECTION:{value:"PROJECTION",writable:!1},MODELVIEW:{value:"MODELVIEW",writable:!1},VIEWPROJECTION:{value:"VIEWPROJECTION",writable:!1},MODELVIEWPROJECTION:{value:"MODELVIEWPROJECTION",writable:!1},MODELINVERSE:{value:"MODELINVERSE",writable:!1},VIEWINVERSE:{value:"VIEWINVERSE",writable:!1},PROJECTIONINVERSE:{value:"PROJECTIONINVERSE",writable:!1},MODELVIEWINVERSE:{value:"MODELVIEWINVERSE",writable:!1},VIEWPROJECTIONINVERSE:{value:"VIEWPROJECTIONINVERSE",writable:!1},MODELVIEWPROJECTIONINVERSE:{value:"MODELVIEWPROJECTIONINVERSE",writable:!1},MODELTRANSPOSE:{value:"MODELTRANSPOSE",writable:!1},VIEWTRANSPOSE:{value:"VIEWTRANSPOSE",writable:!1},PROJECTIONTRANSPOSE:{value:"PROJECTIONTRANSPOSE",writable:!1},MODELVIEWTRANSPOSE:{value:"MODELVIEWTRANSPOSE",writable:!1},VIEWPROJECTIONTRANSPOSE:{value:"VIEWPROJECTIONTRANSPOSE",writable:!1},MODELVIEWPROJECTIONTRANSPOSE:{value:"MODELVIEWPROJECTIONTRANSPOSE",writable:!1},MODELINVERSETRANSPOSE:{value:"MODELINVERSETRANSPOSE",writable:!1},VIEWINVERSETRANSPOSE:{value:"VIEWINVERSETRANSPOSE",writable:!1},PROJECTIONINVERSETRANSPOSE:{value:"PROJECTIONINVERSETRANSPOSE",writable:!1},MODELVIEWINVERSETRANSPOSE:{value:"MODELVIEWINVERSETRANSPOSE",writable:!1},VIEWPROJECTIONINVERSETRANSPOSE:{value:"VIEWPROJECTIONINVERSETRANSPOSE",writable:!1},MODELVIEWPROJECTIONINVERSETRANSPOSE:{value:"MODELVIEWPROJECTIONINVERSETRANSPOSE",writable:!1},_bindedProgram:{value:null,writable:!0},_debugProgram:{value:null,writable:!0},_resourceManager:{value:null,writable:!0},_webGLContext:{value:null,writable:!0},_projectionMatrix:{value:null,writable:!0},shininess:{value:200,writable:!0},light:{value:[0,0,-1],writable:!0},specularColor:{value:[1,1,1],writable:!0},GLContextDidChange:{value:function(){}},initWithWebGLContext:{value:function(e){return this.webGLContext=e,this._states={},this}},bindedProgram:{get:function(){return this._bindedProgram},set:function(e){this._bindedProgram!==e&&this._webGLContext&&(this._bindedProgram=e,this._bindedProgram&&this._bindedProgram.use(this._webGLContext,!1))}},projectionMatrix:{get:function(){return this._projectionMatrix},set:function(e){this._projectionMatrix=e}},debugProgram:{get:function(){if(!this._debugProgram){this._debugProgram=Object.create(i);var e="precision highp float;attribute vec3 vert;uniform mat4 u_mvMatrix; uniform mat4 u_projMatrix; void main(void) { gl_Position = u_projMatrix * u_mvMatrix * vec4(vert,1.0); }",t="precision highp float;void main(void) { gl_FragColor = vec4(1.,0.,0.,1.); }";this._debugProgram.initWithShaders({"x-shader/x-vertex":e,"x-shader/x-fragment":t}),this._debugProgram.build(this.webGLContext)||console.log(this._debugProgram.errorLogs)}return this._debugProgram}},webGLContext:{get:function(){return this._webGLContext},set:function(e){this._webGLContext=e,this.GLContextDidChange()}},resourceManager:{get:function(){return this._resourceManager||(this._resourceManager=Object.create(n),this._resourceManager.init()),this._resourceManager}},indicesDelegate:{value:{webGLContext:{value:null,writable:!0},handleError:function(e,t){console.log("ERROR:vertexAttributeBufferDelegate:"+e+" :"+t)},convert:function(e,t,i){var n=i,r=n.getParameter(n.ELEMENT_ARRAY_BUFFER_BINDING),a=n.createBuffer();return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r),a},resourceAvailable:function(){}}},setupCompressedMesh:{value:function(e,t,i){var n=e.primitives[0],r=this.webGLContext,a=r.getParameter(r.ELEMENT_ARRAY_BUFFER_BINDING),s=r.createBuffer();r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,s),r.bufferData(r.ELEMENT_ARRAY_BUFFER,i,r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,a),s.count=i.length,this.resourceManager.setResource(n.indices.id,s),n.indices={id:n.indices.id,count:s.count};var o,l=t.length/8,u=new Float32Array(3*l),h=new Float32Array(3*l),c=new Float32Array(2*l);for(o=0;l>o;o++){var d=8*o;u[3*o+0]=t[d+0],u[3*o+1]=t[d+1],u[3*o+2]=t[d+2],h[3*o+0]=t[d+5],h[3*o+1]=t[d+6],h[3*o+2]=t[d+7],c[2*o+0]=t[d+3],c[2*o+1]=t[d+4]}a=r.getParameter(r.ARRAY_BUFFER_BINDING),s=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,u,r.STATIC_DRAW),s.componentType=r.FLOAT,s.componentsPerAttribute=3,this.resourceManager.setResource(n.semantics.POSITION.id,s),n.semantics.POSITION={id:n.semantics.POSITION.id,count:l,byteStride:12},s=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,h,r.STATIC_DRAW),s.componentType=r.FLOAT,s.componentsPerAttribute=3,this.resourceManager.setResource(n.semantics.NORMAL.id,s),n.semantics.NORMAL={id:n.semantics.NORMAL.id,count:l,byteStride:12},c.length>0&&(s=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,c,r.STATIC_DRAW),s.componentType=r.FLOAT,s.componentsPerAttribute=2,this.resourceManager.setResource(n.semantics.TEXCOORD_0.id,s),n.semantics.TEXCOORD_0={id:n.semantics.TEXCOORD_0.id,count:l,byteStride:8}),r.bindBuffer(r.ARRAY_BUFFER,a)}},setupCompressedMesh2:{value:function(e,t,i,n,r,a,s){for(var o=this.webGLContext,l=0,u=0,h=e.primitives,c=0;h.length>c;c++){var d=e.primitives[c],m=d.indices.id;l=d.indices.count;var p=new Int16Array(s.subarray(u,u+l)),f=o.createBuffer();o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,f),o.bufferData(o.ELEMENT_ARRAY_BUFFER,p,o.STATIC_DRAW),this.resourceManager.setResource(m,f),f.count=l,d.indices={id:m,count:f.count},u+=l}for(var _,g={},c=0;h.length>c;c++){var d=e.primitives[c];for(_ in d.semantics){var v=d.semantics[_];g[v.baseId]=_}}for(var y in g){var b=a[y];if(null!=b){var C=r.GetFloatAttribute(b),_=g[y];if("JOINT"===_)for(var S=0;C.length>S;S++)C[S]=Math.floor(C[S]+.5);var T=r.GetFloatAttributeDim(b);f=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,f),o.bufferData(o.ARRAY_BUFFER,C,o.STATIC_DRAW),f.componentType=o.FLOAT,f.componentsPerAttribute=T,this.resourceManager.setResource(d.semantics[_].id,f),d.semantics[_]={id:d.semantics[_].id,count:l,byteStride:4*T}}}l=t,previousBuffer=o.getParameter(o.ARRAY_BUFFER_BINDING),f=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,f),o.bufferData(o.ARRAY_BUFFER,i,o.STATIC_DRAW),f.componentType=o.FLOAT,f.componentsPerAttribute=3,this.resourceManager.setResource(d.semantics.POSITION.id,f),d.semantics.POSITION={id:d.semantics.POSITION.id,count:l,byteStride:12},null!=n&&(f=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,f),o.bufferData(o.ARRAY_BUFFER,n,o.STATIC_DRAW),f.componentType=o.FLOAT,f.componentsPerAttribute=3,this.resourceManager.setResource(d.semantics.NORMAL.id,f),d.semantics.NORMAL={id:d.semantics.NORMAL.id,count:l,byteStride:12}),o.bindBuffer(o.ARRAY_BUFFER,previousBuffer)}},vertexAttributeBufferDelegate:{value:{_componentTypeForGLType:function(e,t){switch(t){case e.FLOAT:case e.FLOAT_VEC2:case e.FLOAT_VEC3:case e.FLOAT_VEC4:return e.FLOAT;case e.UNSIGNED_BYTE:return e.UNSIGNED_BYTE;case e.UNSIGNED_SHORT:return e.UNSIGNED_SHORT;default:return null}},_componentsPerElementForGLType:function(e,t){switch(t){case e.FLOAT:case e.UNSIGNED_BYTE:case e.UNSIGNED_SHORT:return 1;case e.FLOAT_VEC2:return 2;case e.FLOAT_VEC3:return 3;case e.FLOAT_VEC4:return 4;default:return null}},webGLContext:{value:null,writable:!0},handleError:function(e,t){console.log("ERROR:vertexAttributeBufferDelegate:"+e+" :"+t)},convert:function(e,t,i){var n=e,r=i,a=r.getParameter(r.ARRAY_BUFFER_BINDING),s=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW),s.componentType=this._componentTypeForGLType(r,n.type),s.componentsPerAttribute=this._componentsPerElementForGLType(r,n.type),r.bindBuffer(r.ARRAY_BUFFER,a),s},resourceAvailable:function(){}}},textureDelegate:{value:{getGLFilter:function(e){return null==e?WebGLRenderingContext.LINEAR:e},getGLWrapMode:function(e){return null==e?WebGLRenderingContext.REPEAT:e},handleError:function(e,t){console.log("ERROR:textureDelegate:"+e+" :"+t)},nextHighestPowerOfTwo:function(e){--e;for(var t=1;32>t;t<<=1)e|=e>>t;return e+1},isPowerOfTwo:function(e){return 0==(e&e-1)},installCubemapSide:function(e,t,i,n){e.bindTexture(e.TEXTURE_CUBE_MAP,i),e.texImage2D(t,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.bindTexture(e.TEXTURE_CUBE_MAP,null)},createTextureFromImageAndSampler:function(e,t,i){var n=i.getParameter(i.ACTIVE_TEXTURE),r=i.getParameter(i.TEXTURE_BINDING_2D);i.activeTexture(i.TEXTURE0);var a=null,s=this.getGLFilter(t.minFilter),o=this.getGLFilter(t.magFilter),l=this.getGLWrapMode(t.wrapS),u=this.getGLWrapMode(t.wrapT),h=!1,c=s===i.NEAREST_MIPMAP_NEAREST||s===i.LINEAR_MIPMAP_NEAREST||s===i.NEAREST_MIPMAP_LINEAR||s===i.LINEAR_MIPMAP_LINEAR;if(c||l===i.REPEAT||u===i.REPEAT){var d=parseInt(e.width),m=parseInt(e.height);if(this.isPowerOfTwo(d)||(d=this.nextHighestPowerOfTwo(d),h=!0),this.isPowerOfTwo(m)||(m=this.nextHighestPowerOfTwo(m),h=!0),h){a=document.createElement("canvas"),a.width=d,a.height=m;var p=a.getContext("2d");p.drawImage(e,0,0,parseInt(a.width),parseInt(a.height)),a.id=e.id,e=a}}var f=i.createTexture();return f.contextID=i.contextID,i.bindTexture(i.TEXTURE_2D,f),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,l),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,u),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,s),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,e),c&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,r),i.activeTexture(n),f},convert:function(e,t,i){var n=i;if(e){if(6===e.length){var r=n.createTexture();return n.bindTexture(n.TEXTURE_CUBE_MAP,r),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),this.installCubemapSide(n,n.TEXTURE_CUBE_MAP_POSITIVE_X,r,e[0]),this.installCubemapSide(n,n.TEXTURE_CUBE_MAP_NEGATIVE_X,r,e[1]),this.installCubemapSide(n,n.TEXTURE_CUBE_MAP_POSITIVE_Y,r,e[2]),this.installCubemapSide(n,n.TEXTURE_CUBE_MAP_NEGATIVE_Y,r,e[3]),this.installCubemapSide(n,n.TEXTURE_CUBE_MAP_POSITIVE_Z,r,e[4]),this.installCubemapSide(n,n.TEXTURE_CUBE_MAP_NEGATIVE_Z,r,e[5]),r}}else if("video"==e.type){t.source.videoElement=e;var a=n.createTexture();return n.bindTexture(n.TEXTURE_2D,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t.source.videoElement),n.bindTexture(n.TEXTURE_2D,null),a}return this.createTextureFromImageAndSampler(e,t.sampler,n)},resourceAvailable:function(){}}},_lastMaxEnabledArray:{value:0,writable:!0},_states:{value:null,writable:!0},setState:{value:function(e,t,i){var n=this.webGLContext;(null==this._states[e]||1==i||this._states[e]!==t)&&(this._states[e]=t,t?n.enable(e):n.disable(e))}},resetStates:{value:function(){var e=this.webGLContext;if(e&&-1!==this._lastMaxEnabledArray)for(var t=0;this._lastMaxEnabledArray>t;t++)e.disableVertexAttribArray(t);this._lastMaxEnabledArray=-1,this.bindedProgram=null,this.setState(e.BLEND,!1)}},renderPrimitive:{value:function(e,t,i,n){var r,a=!1,s=null,o=e.primitive,l=-1,u=this.webGLContext,h=this.bindedProgram,c=0;n||(n=o.material.parameters);var d=h.uniformSymbols;for(r=0;d.length>r;r++){var m=d[r],p=t.instanceProgram.uniforms[m];if(s=null,p=n[p],p&&null!=p.semantic){var f=p.semantic;f===this.PROJECTION?s=this.projectionMatrix:f===this.MODELVIEW?s=e.nodeWrapper.worldViewMatrix:f===this.MODELVIEWINVERSETRANSPOSE&&(s=e.nodeWrapper.worldViewInverseTransposeMatrix)}if(null==s&&null!=p)if(p.source){var _=e.nodeWrapper.scenePassRenderer._nodeWrappers[p.source.id];s=_.worldViewMatrix}else s=p.value;var g=null;if(null!=s){var v=h.getTypeForSymbol(m),y=v===u.SAMPLER_CUBE,b=v===u.SAMPLER_2D;if(y){if(g=this.resourceManager.getResource(s,this.textureDelegate,this.webGLContext)){u.activeTexture(u.TEXTURE0+c),u.bindTexture(u.TEXTURE_CUBE_MAP,g);var C=h.getLocationForSymbol(m);C!==void 0&&(h.setValueForSymbol(m,c),c++)}}else if(b){if(g=this.resourceManager.getResource(s,this.textureDelegate,this.webGLContext),null!=g){u.activeTexture(u.TEXTURE0+c),u.bindTexture(u.TEXTURE_2D,g),p.value.source.videoElement&&p.value.source.timeStamp!=i&&(u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,p.value.source.videoElement),p.value.source.timeStamp=i);var C=h.getLocationForSymbol(m);C!==void 0&&(h.setValueForSymbol(m,c),c++)}}else h.setValueForSymbol(m,s)}}h.commit(u);var S=0,T=t.instanceProgram.attributes,E=h.attributeSymbols;for(r=0;E.length>r;r++){var m=E[r],p=T[m];p=n[p];var f=p.semantic,x=o.semantics[f],A=null;if(A=e.compressed?this.resourceManager._getResource(x.id):this.resourceManager.getResource(x,this.vertexAttributeBufferDelegate,this.webGLContext)){u.bindBuffer(u.ARRAY_BUFFER,A);var O=h.getLocationForSymbol(m);O!==void 0&&(O>l&&(l=O),u.enableVertexAttribArray(O),u.vertexAttribPointer(O,A.componentsPerAttribute,A.componentType,!1,x.byteStride,0),a&&"POSITION"==f&&u.drawArrays(u.POINTS,0,x.count)),S++}else this._lastMaxEnabledArray=-1}var w=S===E.length;if(!a){if(w)for(var r=l+1;this._lastMaxEnabledArray>r;r++)u.disableVertexAttribArray(r);var R=null;R=e.compressed?this.resourceManager._getResource(o.indices.id):this.resourceManager.getResource(o.indices,this.indicesDelegate,this.webGLContext),R&&w&&(u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,R),u.drawElements(u.TRIANGLES,o.indices.count,u.UNSIGNED_SHORT,0))}return this._lastMaxEnabledArray=l,w}},programDelegate:{value:{handleError:function(e,t){console.log("ERROR:programDelegate:"+e+" :"+t)},convert:function(e,t,n){var r=n,a=Object.create(i);return a.initWithShaders(t),a.build(r)||(console.log(t),console.log(a.errorLogs)),a},resourceAvailable:function(){}}},bindRenderTarget:{value:function(e){var t=this.webGLContext,i=e.FBO?!1:!0;e.previousFBO=t.getParameter(t.FRAMEBUFFER_BINDING),e.FBO||(e.FBO=t.createFramebuffer(),i=!0),t.bindFramebuffer(t.FRAMEBUFFER,e.FBO);var n=e.extras,r=t.drawingBufferWidth!=e.width||t.drawingBufferHeight!=e.height,a=t.drawingBufferWidth,s=t.drawingBufferHeight;(i||r)&&e.attachments.forEach(function(e){if("COLOR_ATTACHMENT0"==e.semantic&&n.picking){var o=t.getParameter(t.TEXTURE_BINDING_2D);i&&(n.pickingTexture=t.createTexture()),r&&(t.bindTexture(t.TEXTURE_2D,n.pickingTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,a,s,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)),i&&t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n.pickingTexture,0),t.bindTexture(t.TEXTURE_2D,o)}if("DEPTH_ATTACHMENT"==e.semantic&&n.picking){var l=t.getParameter(t.RENDERBUFFER_BINDING);i&&(n.pickingRenderBuffer=t.createRenderbuffer()),r&&(t.bindRenderbuffer(t.RENDERBUFFER,n.pickingRenderBuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,a,s)),i&&t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,n.pickingRenderBuffer),t.bindRenderbuffer(t.RENDERBUFFER,l)}},this),t.clearColor(0,0,0,1),t.clear(t.DEPTH_BUFFER_BIT|t.COLOR_BUFFER_BIT)}},unbindRenderTarget:{value:function(e){var t=this.webGLContext;e.extras.picking&&(e.extras.pickedPixel||(e.extras.pickedPixel=new Uint8Array(4)),t.finish(),t.readPixels(e.extras.coords[0],e.extras.coords[1],1,1,t.RGBA,t.UNSIGNED_BYTE,e.extras.pickedPixel)),t.bindFramebuffer(t.FRAMEBUFFER,e.previousFBO);var i=!1;i&&e.attachments.forEach(function(t){"COLOR_ATTACHMENT0"===t.semantic&&e.extras.picking&&this.drawTexture(e.extras.pickingTexture)},this)}},renderPrimitivesWithPass:{value:function(e,t,i,n){var r=e.length,a=this.webGLContext;if(t.instanceProgram){var s=a,o=this.resourceManager.getResource(t.instanceProgram.program,this.programDelegate,s);if(o){var l=0,u=1,h=1,c=1,d=t.states,m=a.FUNC_ADD,p=a.SRC_ALPHA,f=a.ONE_MINUS_SRC_ALPHA,_="__PickingPass"===t.id;if(d&&(null!=d.blendEnable&&(l=d.blendEnable),null!=d.depthTestEnable&&(u=d.depthTestEnable),null!=d.depthMask&&(h=d.depthMask),null!=d.cullFaceEnable&&(c=d.cullFaceEnable),null!=d.blendEquation)){var g=d.blendFunc;null!=g&&(null!=g.sfactor&&(p=g.sfactor),null!=g.dfactor&&(f=g.dfactor))}if(this.setState(a.DEPTH_TEST,u),this.setState(a.CULL_FACE,c),a.enable(a.SAMPLE_ALPHA_TO_COVERAGE),a.depthMask(h),this.setState(a.BLEND,l),1===l&&(a.blendEquation(m),a.blendFunc(p,f)),this.bindedProgram=o,_)for(var v=0;r>v;v++){var y=e[v];if(!y.node.hidden){if(!y.pickingColor){var b=y.node.baseId;if(b){var C=t.extras.nodeIDToColor[b];C||(C=vec4.createFrom(Math.random(),Math.random(),Math.random(),1),t.extras.nodeIDToColor[b]=C),y.pickingColor=C}}this.bindedProgram.setValueForSymbol("u_pickingColor",y.pickingColor),this.renderPrimitive(y,t,n,i)}}else for(var v=0;r>v;v++){var y=e[v];if(!y.node.hidden){var S=1;i=y.primitive.material.parameters;var T=i.transparency;T&&null!=T.value&&(S*=T.value);var E=i.filterColor;E&&null!=E.value&&(S*=E.value[3]),1e-5>S||(1>S&&!l?(this.setState(a.BLEND,!0),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA),this.renderPrimitive(y,t,n),this.setState(a.BLEND,!1)):this.renderPrimitive(y,t,n))}}}}}},_BBOXProgram:{value:null,writable:!0},drawBBOX:{value:function(e,t,n,r){var a=this.webGLContext;if(this.bindedProgram=null,this.setState(a.CULL_FACE,!1),!this._BBOXProgram){this._BBOXProgram=Object.create(i);var s="precision highp float;attribute vec3 vert;uniform mat4 u_projMatrix; uniform mat4 u_vMatrix; uniform mat4 u_mMatrix; void main(void) { gl_Position = u_projMatrix * u_vMatrix * u_mMatrix * vec4(vert,1.0); }",o="precision highp float;uniform float u_transparency;  void main(void) {  gl_FragColor = vec4(vec3(1.,1.,1.) , u_transparency);}";this._BBOXProgram.initWithShaders({"x-shader/x-vertex":s,"x-shader/x-fragment":o}),this._BBOXProgram.build(a)||console.log(this._BBOXProgram.errorLogs)}var l=[e[0][0],e[0][1],e[0][2]],u=[e[1][0],e[1][1],e[1][2]],h=0,c=1,d=2;if(!this._BBOXIndices){var m=[0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,3,7,2,6,0,4,1,5];this._BBOXIndices=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this._BBOXIndices),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(m),a.STATIC_DRAW)}a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this._BBOXIndices),this._BBOXVertexBuffer||(this._BBOXVertexBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this._BBOXVertexBuffer)),a.bindBuffer(a.ARRAY_BUFFER,this._BBOXVertexBuffer);var p=[u[h],l[c],l[d],u[h],u[c],l[d],l[h],u[c],l[d],l[h],l[c],l[d],u[h],l[c],u[d],u[h],u[c],u[d],l[h],u[c],u[d],l[h],l[c],u[d]];a.bufferData(a.ARRAY_BUFFER,new Float32Array(p),a.STATIC_DRAW);var f=this._BBOXProgram.getLocationForSymbol("vert");null!=f&&(a.enableVertexAttribArray(f),a.vertexAttribPointer(f,3,a.FLOAT,!1,12,0)),this.bindedProgram=this._BBOXProgram;var _=this._BBOXProgram.getLocationForSymbol("u_projMatrix");_&&this._BBOXProgram.setValueForSymbol("u_projMatrix",r);var g=this._BBOXProgram.getLocationForSymbol("u_mMatrix");g&&this._BBOXProgram.setValueForSymbol("u_mMatrix",n);var v=this._BBOXProgram.getLocationForSymbol("u_vMatrix");v&&this._BBOXProgram.setValueForSymbol("u_vMatrix",t);var y=this._BBOXProgram.getLocationForSymbol("u_transparency");y&&this._BBOXProgram.setValueForSymbol("u_transparency",1),this._BBOXProgram.commit(a),a.drawElements(a.LINES,24,a.UNSIGNED_SHORT,0),a.disableVertexAttribArray(f),this.setState(a.BLEND,!1),this.setState(a.CULL_FACE,!0)}},drawTexture:{value:function(e){var t=this.webGLContext,n=t.isEnabled(t.DEPTH_TEST),r=t.isEnabled(t.CULL_FACE),a=t.isEnabled(t.BLEND);if(this.setState(t.DEPTH_TEST,0),this.setState(t.CULL_FACE,0),this.setState(t.BLEND,0),!this.displayTexture){this.displayTexture={},this.displayTexture.program=Object.create(i);var s="precision highp float;attribute vec3 vert;attribute vec2 uv;uniform mat4 u_projMatrix; varying vec2 v_uv;void main(void) { v_uv = uv;gl_Position = u_projMatrix * vec4(vert,1.0); }",o="precision highp float;uniform sampler2D u_texture;varying vec2 v_uv; void main(void) {  vec4 color = texture2D(u_texture, v_uv);  gl_FragColor = color; }";this.displayTexture.program.initWithShaders({"x-shader/x-vertex":s,"x-shader/x-fragment":o}),this.displayTexture.program.build(t)||console.log(this.displayTexture.program.errorLogs);var l=[-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,-1,1,0,0,1,1,-1,0,1,0,1,1,0,1,1];this.displayTexture.vertexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.displayTexture.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(l),t.STATIC_DRAW)}var u=this.displayTexture.program,h=this.displayTexture.vertexBuffer;t.bindBuffer(t.ARRAY_BUFFER,h);var c=mat4.ortho(-1,1,-1,1,0,1e3),d=u.getLocationForSymbol("vert"),m=d!==void 0;m&&(t.enableVertexAttribArray(d),t.vertexAttribPointer(d,3,t.FLOAT,!1,20,0));var p=u.getLocationForSymbol("uv"),f=p!==void 0;f&&(t.enableVertexAttribArray(p),t.vertexAttribPointer(p,2,t.FLOAT,!1,20,12));var _=t.getParameter(t.TEXTURE_BINDING_2D);t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e),this.bindedProgram=u;var g=u.getLocationForSymbol("u_projMatrix");g&&u.setValueForSymbol("u_projMatrix",c);var v=u.getLocationForSymbol("u_texture");v&&u.setValueForSymbol("u_texture",0),u.commit(t),t.drawArrays(t.TRIANGLES,0,6),t.bindTexture(t.TEXTURE_2D,_),m&&t.disableVertexAttribArray(d),f&&t.disableVertexAttribArray(p),this.setState(t.DEPTH_TEST,n),this.setState(t.CULL_FACE,r),this.setState(t.BLEND,a)}}})}});