montageDefine("8d02820","runtime/projection",{dependencies:["runtime/dependencies/gl-matrix","runtime/base"],factory:function(e,t){e("runtime/dependencies/gl-matrix");var i=e("runtime/base").Base;t.Projection=Object.create(i,{_matrix:{value:null,writable:!0},_type:{value:null,writable:!0},_xfov:{value:0,writable:!0},_yfov:{value:0,writable:!0},_xmag:{value:0,writable:!0},_ymag:{value:0,writable:!0},_znear:{value:0,writable:!0},_zfar:{value:0,writable:!0},_aspectRatio:{value:0,writable:!0},_dirtyFlag:{value:!1,writable:!0},projection:{get:function(){return this._type},set:function(e){this._type!==e&&(this._type=e,this._dirtyFlag=!0)}},xfov:{get:function(){return this._xfov},set:function(e){this._xfov!==e&&(this._xfov=e,this._dirtyFlag=!0)}},yfov:{get:function(){return this._yfov},set:function(e){this._yfov!==e&&(this._yfov=e,this._dirtyFlag=!0)}},xmag:{get:function(){return this._xmag},set:function(e){this._xmag!==e&&(this._xmag=e,this._dirtyFlag=!0)}},ymag:{get:function(){return this._ymag},set:function(e){this._ymag!==e&&(this._ymag=e,this._dirtyFlag=!0)}},znear:{get:function(){return this._znear},set:function(e){this._znear!==e&&(this._znear=e,this._dirtyFlag=!0)}},zfar:{get:function(){return this._zfar},set:function(e){this._zfar!==e&&(this._zfar=e,this._dirtyFlag=!0)}},aspectRatio:{get:function(){return this._aspectRatio},set:function(e){var t=this.matrix;t&&(this.yfov?t[0]=this._scaleX/e:this.xfov&&(t[5]=this._scaleY*e)),this._aspectRatio=e}},_scaleX:{value:0,writable:!0},_scaleY:{value:0,writable:!0},matrix:{get:function(){if(this._dirtyFlag){if("perspective"===this.projection){var e=3.14159265359/360,t=0,i=0;this.yfov&&(i=1/Math.tan(this.yfov*e)),t=this.xfov?1/Math.tan(this.xfov*e):i,0==i&&(i=t),this._scaleX=t,this._scaleY=i,this._matrix=mat4.create(),this._matrix[0]=t,this._matrix[1]=0,this._matrix[2]=0,this._matrix[3]=0,this._matrix[4]=0,this._matrix[5]=i,this._matrix[6]=0,this._matrix[7]=0,this._matrix[8]=0,this._matrix[9]=0,this._matrix[10]=(this.zfar+this.znear)/(this.znear-this.zfar),this._matrix[11]=-1,this._matrix[12]=0,this._matrix[13]=0,this._matrix[14]=2*this.zfar*this.znear/(this.znear-this.zfar),this._matrix[15]=0}else"orthographic"===this.projection?this._matrix=mat4.ortho(-this.xmag,this.xmag,-this.ymag,this.ymag,this.znear,this.zfar):console.log("WARNING: unhandled camera type:"+type);this._dirtyFlag=!1}return this._matrix},set:function(e){this._matrix=e}},initWithDescription:{value:function(e){this.__Base_init(),this.projection=e.type,e=e[this.projection],this.xfov=e.xfov?e.xfov:0,this.yfov=e.yfov?e.yfov:0,this.xmag=e.xmag?e.xmag:1,this.ymag=e.ymag?e.ymag:1,this.znear=null!=e.znear?e.znear:1,this.zfar=null!=e.zfar?e.zfar:100,this.aspectRatio=e.aspect_ratio?e.aspect_ratio:0,this.aspectRatio||(this.aspectRatio=e.aspectRatio?e.aspectRatio:0),this._dirtyFlag=!0}},init:{value:function(){this.__Base_init(),this.projection=null,this.xfov=0,this.yfov=0,this.xmag=1,this.ymag=1,this.znear=1,this.zfar=100,this.aspectRatio=4/3,this._dirtyFlag=!0}}})}});