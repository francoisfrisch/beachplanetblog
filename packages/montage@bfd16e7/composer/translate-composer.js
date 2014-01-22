var Montage=require("montage").Montage,Composer=require("composer/composer").Composer,defaultEventManager=require("core/event/event-manager").defaultEventManager,TranslateComposer=exports.TranslateComposer=Composer.specialize({_NATIVE_ELEMENTS:{value:["A","IFRAME","EMBED","OBJECT","VIDEO","AUDIO","CANVAS","LABEL","INPUT","BUTTON","SELECT","TEXTAREA","KEYGEN","DETAILS","COMMAND"]},_WHEEL_POINTER:{value:"wheel",writable:!1},_externalUpdate:{value:!0},isAnimating:{value:!1},isMoving:{value:!1},frame:{value:function(){this.isAnimating&&this._animationInterval(),this._externalUpdate=!1}},_pointerSpeedMultiplier:{value:1},pointerSpeedMultiplier:{get:function(){return this._pointerSpeedMultiplier},set:function(e){this._pointerSpeedMultiplier=e}},pointerStartEventPosition:{value:null},_shouldDispatchTranslate:{value:!1},_isSelfUpdate:{value:!1},_allowFloats:{value:!1},allowFloats:{get:function(){return this._allowFloats},set:function(e){this._allowFloats!==e&&(this._allowFloats=e,this.translateX=this._translateX,this.translateY=this._translateY)}},_translateX:{value:0},translateX:{get:function(){return this._translateX},set:function(e){if("vertical"===this._axis)this._translateX=this._minTranslateX||0;else{var t=isNaN(e)?0:this._allowFloats?parseFloat(e):e>>0;null!==this._minTranslateX&&this._minTranslateX>t&&(t=this._minTranslateX),null!==this._maxTranslateX&&t>this._maxTranslateX&&(t=this._maxTranslateX),this._isSelfUpdate||(this.isAnimating=!1),this._translateX=t}}},_translateY:{value:0},translateY:{get:function(){return this._translateY},set:function(e){if("horizontal"===this._axis)this._translateY=this._minTranslateY||0;else{var t=isNaN(e)?0:this._allowFloats?parseFloat(e):e>>0;null!==this._minTranslateY&&this._minTranslateY>t&&(t=this._minTranslateY),null!==this._maxTranslateY&&t>this._maxTranslateY&&(t=this._maxTranslateY),this._isSelfUpdate||(this.isAnimating=!1),this._translateY=t}}},_minTranslateX:{value:null},minTranslateX:{get:function(){return this._minTranslateX},set:function(e){null!==e&&(e=parseFloat(e)),this._minTranslateX!=e&&(null!==e&&e>this._translateX&&(this.translateX=e),this._minTranslateX=e)}},_maxTranslateX:{value:null},maxTranslateX:{get:function(){return this._maxTranslateX},set:function(e){null!==e&&(e=parseFloat(e)),this._maxTranslateX!=e&&(null!==e&&this._translateX>e&&(this.translateX=e),this._maxTranslateX=e)}},_minTranslateY:{value:null},minTranslateY:{get:function(){return this._minTranslateY},set:function(e){null!==e&&(e=parseFloat(e)),this._minTranslateY!=e&&(null!==e&&e>this._translateY&&(this.translateY=e),this._minTranslateY=e)}},_maxTranslateY:{value:null},maxTranslateY:{get:function(){return this._maxTranslateY},set:function(e){null!==e&&(e=parseFloat(e)),this._maxTranslateY!=e&&(null!==e&&this._translateY>e&&(this.translateY=e),this._maxTranslateY=e)}},_axis:{value:"both"},axis:{get:function(){return this._axis},set:function(e){switch(e){case"vertical":case"horizontal":this._axis=e,this.translateX=this._translateX,this.translateY=this._translateY;break;default:this._axis="both"}}},invertAxis:{depends:["invertXAxis","invertYAxis"],get:function(){return this._invertXAxis===this._invertYAxis?this._invertXAxis:null},set:function(e){this.invertXAxis=e,this.invertYAxis=e}},_invertXAxis:{value:!1},invertXAxis:{get:function(){return this._invertXAxis},set:function(e){this._invertXAxis=!!e}},_invertYAxis:{value:!1},invertYAxis:{get:function(){return this._invertYAxis},set:function(e){this._invertYAxis=!!e}},startTranslateSpeed:{value:500},startTranslateRadius:{value:8},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(e){this._hasMomentum=e?!0:!1}},__momentumDuration:{value:650},_momentumDuration:{get:function(){return this.__momentumDuration},set:function(e){this.__momentumDuration=isNaN(e)?1:e>>0,1>this.__momentumDuration&&(this.__momentumDuration=1)}},_pointerX:{value:null},_pointerY:{value:null},_touchIdentifier:{value:null},_isFirstMove:{value:!1},_start:{value:function(e,t,i){this.pointerStartEventPosition={pageX:e,pageY:t,target:i},this._pointerX=e,this._pointerY=t,window.Touch?(document.addEventListener("touchend",this,!0),this._element.addEventListener("touchmove",this,!1)):(document.addEventListener("mouseup",this,!0),this._element.addEventListener("mousemove",this,!1)),this.isAnimating&&(this.isAnimating=!1,this._dispatchTranslateEnd()),this._isFirstMove=!0}},_observedPointer:{value:null},_shouldPreventDefault:{value:function(e){return!!e.target.tagName&&-1===TranslateComposer._NATIVE_ELEMENTS.indexOf(e.target.tagName)&&!e.target.isContentEditable}},captureMousedown:{value:function(e){0===e.button&&(this._observedPointer="mouse",this._start(e.clientX,e.clientY,e.target))}},handleMousedown:{value:function(e){0!==e.button||this.eventManager.componentClaimingPointer(this._observedPointer)||this.eventManager.claimPointer(this._observedPointer,this)}},handleMousemove:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._firstMove()):("both"===this.axis||this._analyzeMovement(e))&&this._stealPointer()&&(e.preventDefault(),this._firstMove())}},captureMousemove:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._move(e.clientX,e.clientY)):("both"===this.axis||this._analyzeMovement(e))&&this._stealPointer()&&(e.preventDefault(),this._move(e.clientX,e.clientY))}},captureMouseup:{value:function(e){this._end(e)}},_releaseInterest:{value:function(){window.Touch?(document.removeEventListener("touchend",this,!0),this._isFirstMove?this._element.removeEventListener("touchmove",this,!1):document.removeEventListener("touchmove",this,!0)):(document.removeEventListener("mouseup",this,!0),this._isFirstMove?this._element.removeEventListener("mousemove",this,!1):document.removeEventListener("mousemove",this,!0)),this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},captureTouchstart:{value:function(e){null!==this._observedPointer&&this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)||e.targetTouches&&1===e.targetTouches.length&&(this._observedPointer=e.targetTouches[0].identifier,this._start(e.targetTouches[0].clientX,e.targetTouches[0].clientY,e.targetTouches[0].target))}},handleTouchstart:{value:function(e){this.eventManager.componentClaimingPointer(this._observedPointer)||e.targetTouches&&1===e.targetTouches.length&&(this._shouldPreventDefault(e)&&e.preventDefault(),this.eventManager.claimPointer(this._observedPointer,this))}},handleTouchmove:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._firstMove()):("both"===this.axis||this._analyzeMovement(e))&&this._stealPointer()&&(e.preventDefault(),this._firstMove())}},captureTouchmove:{value:function(e){for(var t=0,i=e.changedTouches.length;i>t&&e.changedTouches[t].identifier!==this._observedPointer;)t++;i>t&&(this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._move(e.changedTouches[t].clientX,e.changedTouches[t].clientY)):this._analyzeMovement(e.changedTouches[t]))}},captureTouchend:{value:function(e){for(var t=0,i=e.changedTouches.length;i>t&&e.changedTouches[t].identifier!==this._observedPointer;)t++;i>t&&this._end(e.changedTouches[t])}},_analyzeMovement:{value:function(e){var t=e.velocity;if(t){var i,n,r,s,a,o,l,u,h=.7853981633974483,c=2.356194490192345,d=-2.356194490192345,m=-.7853981633974483;if(o=t.speed,0!==t.speed&&!isNaN(t.speed))if(a=t.angle,"horizontal"===this.axis){if(r=h>=a&&a>=m,s=a>=c||d>=a,r||s)return this._stealPointer()}else if("vertical"===this.axis){if(i=m>=a&&a>=d,n=a>=h&&c>=a,i||n)return this._stealPointer()}else{if(o>=this.startTranslateSpeed)return this._stealPointer();if(l=this.pointerStartEventPosition.pageX-e.pageX,u=this.pointerStartEventPosition.pageY-e.pageY,l*l+u*u>this.startTranslateRadius*this.startTranslateRadius)return this._stealPointer()}}}},_stealPointer:{value:function(){return this.eventManager.claimPointer(this._observedPointer,this)}},_translateEndTimeout:{value:null},captureWheel:{value:function(){this.eventManager.componentClaimingPointer(this._WHEEL_POINTER)||this.eventManager.claimPointer(this._WHEEL_POINTER,this.component)}},handleWheel:{value:function(e){var t=this;if(this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this.component)){var i=this._translateY,n=e.wheelDeltaY||-e.deltaY||0;this._dispatchTranslateStart(),this.translateY=this._translateY-20*n/120,this._dispatchTranslate(),window.clearTimeout(this._translateEndTimeout),this._translateEndTimeout=window.setTimeout(function(){t._dispatchTranslateEnd()},400),i!==this._translateY&&this._shouldPreventDefault(e)&&e.preventDefault(),this.eventManager.forfeitPointer(this._WHEEL_POINTER,this.component)}}},_firstMove:{value:function(){this._isFirstMove&&(this._dispatchTranslateStart(this._translateX,this._translateY),this._isFirstMove=!1,this.isMoving=!0,window.Touch?(document.addEventListener("touchmove",this,!0),this._element.removeEventListener("touchmove",this,!1)):(document.addEventListener("mousemove",this,!0),this._element.removeEventListener("mousemove",this,!1)))}},_move:{value:function(e,t){var i;this._isSelfUpdate=!0,"vertical"!=this._axis&&(i=this._invertXAxis?this._pointerX-e:e-this._pointerX,this.translateX+=i*this._pointerSpeedMultiplier),"horizontal"!=this._axis&&(i=this._invertYAxis?this._pointerY-t:t-this._pointerY,this.translateY+=i*this._pointerSpeedMultiplier),this._isSelfUpdate=!1,this._pointerX=e,this._pointerY=t,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_bezierTValue:{value:function(e,t,i,n,r){var s,a,o,l,u=1-3*n+3*t,h=3*n-6*t,c=3*t,d=.5;for(a=0;10>a;a++)l=d*d,s=3*u*l+2*h*d+c,o=1-d,d-=(3*(o*o*d*t+o*l*n)+l*d-e)/s;return l=d*d,o=1-d,3*(o*o*d*i+o*l*r)+l*d}},_dispatchTranslateStart:{value:function(e,t){var i=document.createEvent("CustomEvent");i.initCustomEvent("translateStart",!0,!0,null),i.translateX=e,i.translateY=t,i.scroll=0,this.dispatchEvent(i)}},_dispatchTranslateEnd:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateEnd",!0,!0,null),e.translateX=this._translateX,e.translateY=this._translateY,e.scroll=0,this.dispatchEvent(e)}},_dispatchTranslate:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translate",!0,!0,null),e.translateX=this._translateX,e.translateY=this._translateY,e.scroll=0,this.dispatchEvent(e)}},animateBouncingX:{value:!1,enumerable:!1},startTimeBounceX:{value:!1,enumerable:!1},animateBouncingY:{value:!1,enumerable:!1},startTimeBounceY:{value:!1,enumerable:!1},animateMomentum:{value:!1,enumerable:!1},startTime:{value:null,enumerable:!1},startX:{value:null,enumerable:!1},posX:{value:null,enumerable:!1},endX:{value:null,enumerable:!1},startY:{value:null,enumerable:!1},posY:{value:null,enumerable:!1},endY:{value:null,enumerable:!1},translateStrideX:{value:null},translateStrideY:{value:null},translateStrideDuration:{value:330},_animationInterval:{value:function(){var e,t,i,n,r=Date.now(),s=!1;this.animateMomentum&&(e=r-this.startTime,this.__momentumDuration>e?(this.posX=this.startX-(this.momentumX+this.momentumX*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this.posY=this.startY-(this.momentumY+this.momentumY*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this.translateStrideX&&null===this.startStrideXTime&&(this.__momentumDuration-e<this.translateStrideDuration||Math.abs(this.posX-this.endX)<.75*this.translateStrideX)&&(this.startStrideXTime=r),this.translateStrideY&&null===this.startStrideYTime&&(this.__momentumDuration-e<this.translateStrideDuration||Math.abs(this.posY-this.endY)<.75*this.translateStrideY)&&(this.startStrideYTime=r)):this.animateMomentum=!1),t=Math.round(this.endX/this.translateStrideX),this.startStrideXTime&&r-this.startStrideXTime>0&&(r-this.startStrideXTime<this.translateStrideDuration?(e=this._bezierTValue((r-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),this.posX=this.posX*(1-e)+t*this.translateStrideX*e,s=!0):this.posX=t*this.translateStrideX),t=Math.round(this.endY/this.translateStrideY),this.startStrideYTime&&r-this.startStrideYTime>0&&(r-this.startStrideYTime<this.translateStrideDuration?(e=this._bezierTValue((r-this.startStrideYTime)/this.translateStrideDuration,.275,0,.275,1),this.posY=this.posY*(1-e)+t*this.translateStrideY*e,s=!0):this.posY=t*this.translateStrideY),i=this.posX,n=this.posY,this._isSelfUpdate=!0,this.translateX=i,this.translateY=n,this._shouldDispatchTranslate&&this._dispatchTranslate(),this._isSelfUpdate=!1,this.isAnimating=this.animateMomentum||s,this.isAnimating?this.needsFrame=!0:this._dispatchTranslateEnd()}},_end:{value:function(e){this.startTime=Date.now(),this.endX=this.posX=this.startX=this._translateX,this.endY=this.posY=this.startY=this._translateY,this._hasMomentum&&(e.velocity.speed>40||this.translateStrideX||this.translateStrideY)?(this.momentumX="vertical"!=this._axis?e.velocity.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):0,this.momentumY="horizontal"!=this._axis?e.velocity.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):0,this.endX=this.startX-this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY-this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||(this.isMoving=!1,this._dispatchTranslateEnd()),this._releaseInterest()}},surrenderPointer:{value:function(){return!this.isMoving}},eventManager:{get:function(){return defaultEventManager}},load:{value:function(){if(window.Touch)this._element.addEventListener("touchstart",this,!0),this._element.addEventListener("touchstart",this,!1);else{this._element.addEventListener("mousedown",this,!0),this._element.addEventListener("mousedown",this,!1);var e;e=window.onwheel!==void 0?"wheel":"mousewheel",this._element.addEventListener(e,this,!1),this._element.addEventListener(e,this,!0)}this.eventManager.isStoringPointerEvents=!0}},addEventListener:{value:function(e,t,i){Composer.addEventListener.call(this,e,t,i),"translate"===e&&(this._shouldDispatchTranslate=!0)}}});TranslateComposer.prototype.handleMousewheel=TranslateComposer.prototype.handleWheel,TranslateComposer.prototype.captureMousewheel=TranslateComposer.prototype.captureWheel;