var Montage=require("core/core").Montage,WeakMap=require("collections/weak-map"),Map=require("collections/map"),parse=require("frb/parse"),evaluate=require("frb/evaluate"),assign=require("frb/assign"),observe=require("frb/observe"),bind=require("frb/bind"),compileObserver=require("frb/compile-observer"),Scope=require("frb/scope"),Observers=require("frb/observers"),autoCancelPrevious=Observers.autoCancelPrevious,pathChangeDescriptors=new WeakMap,pathPropertyDescriptors={getPath:{value:function(e,t,n,i){return evaluate(e,this,t||this,n,i)}},setPath:{value:function(e,t,n,i,r){return assign(this,e,t,n||this,i,r)}},observePath:{value:function(e,t){var n=parse(e),i=compileObserver(n);return i(autoCancelPrevious(t),new Scope(this))}},addRangeAtPathChangeListener:{value:function(e,t,n){function i(e,i,r){if(t[n])t[n](e,i,r);else{if(!t.call)throw Error("Can't dispatch range change to "+t);t.call(null,e,i,r)}}n=n||"handleRangeChange";var r=[];return this.addPathChangeListener(e,function(e){return e=e||[],i(e.slice(),r.slice(),0),r=e,e.addRangeChangeListener(i)})}},getPathChangeDescriptors:{value:function(){return pathChangeDescriptors.has(this)||pathChangeDescriptors.set(this,{}),pathChangeDescriptors.get(this)}},getPathChangeDescriptor:{value:function(e,t,n){var i=Montage.getPathChangeDescriptors.call(this);return Object.owns(i,e)||(i[e]={willChangeListeners:new Map,changeListeners:new Map}),i=i[e],i=n?i.willChangeListeners:i.changeListeners,i.has(t)||i.set(t,{path:e,handler:t,beforeChange:n,cancel:Function.noop}),i.get(t)}},addPathChangeListener:{value:function(e,t,n,i){var r=this;t=t||Function.noop;var a=Montage.getPathChangeDescriptor.call(this,e,t,i);a.cancel();var s,o,l,u=parse(e);if(t===Function.noop)l=function(t){if(o)throw Error("Path change handler needs a handler because it emits new values when the source changes: "+JSON.stringify(e));o=!0,s=t};else if(n)l=function(i){return t[n].call(t,i,e,r)};else if(t.handlePathChange)l=function(n){return t.handlePathChange.call(t,n,e,r)};else{if("function"!=typeof t)throw Error("Can't recognize handler type: "+t+". Must be function or delegate implementing handlePathChange.");l=function(n){return t.call(r,n,e,r)}}var c=compileObserver(u),h=c(autoCancelPrevious(l),new Scope(this));return a.cancel=h,o?s:h}},removePathChangeListener:{value:function(e,t,n){t=t||Function.noop;var i=Montage.getPathChangeDescriptors.call(this),r=n?"willChangeListeners":"changeListeners";if(!Object.owns(i,e))throw Error("Can't find "+r+" for "+JSON.stringify(e));var a=i[e],s=a[r];if(!s.has(t))throw Error("Can't find "+r+" for "+JSON.stringify(e));var o=s.get(t);o.cancel(),s["delete"](t),0===a.willChangeListeners.length&&0===a.changeListeners.length&&delete i[e];for(var l in i)return;pathChangeDescriptors["delete"](this)}},addBeforePathChangeListener:{value:function(e,t,n){return Montage.addPathChangeListener.call(this,e,t,n,!0)}},removeBeforePathChangeListener:{value:function(e,t){return Montage.removePathChangeListener.call(this,e,t,!0)}}};Montage.defineProperties(Montage,pathPropertyDescriptors),Montage.defineProperties(Montage.prototype,pathPropertyDescriptors);