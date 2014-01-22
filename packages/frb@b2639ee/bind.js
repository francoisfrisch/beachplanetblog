function bind(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,r=n["<-"]||n["<->"]||"",a=n.twoWay="<->"in n;n.sourcePath=r,n.value;var s=n.parameters=n.parameters||i,o=n.document,l=n.components,u=n.trace,c=n.sourceScope=new Scope(i);c.parameters=s,c.document=o,c.components=l;var h=n.targetScope=new Scope(e);if(h.parameters=s,h.document=o,h.components=l,n.converter){var d=n.converter;d.convert&&(n.convert=d.convert.bind(d)),d.revert&&(n.revert=d.revert.bind(d))}else if(n.reverter){var p=n.reverter;p.convert&&(n.revert=p.convert.bind(p)),p.revert&&(n.convert=p.revert.bind(p))}var m=n.convert,f=n.revert,v=n.sourceSyntax=parse(r),_=n.targetSyntax=parse(t),g=solve(_,v);if(_=g[0],v=g[1],a&&"rangeContent"===_.type)return bindRangeContent(h,_.args[0],c,v,m,f,n,u?{sourcePath:stringify(v),targetPath:stringify(_.args[0])}:null);u&&console.log("DEFINE BINDING",t,"<-",r,e);var b=bindOneWay(h,_,c,v,m,n,u),g=solve(v,_);v=g[0],_=g[1];var y=Function.noop;return a&&(u&&console.log("DEFINE BINDING",t,"->",r,i),y=bindOneWay(c,v,h,_,f,n,u)),function(){b(),y()}}function bindOneWay(e,t,n,i,r,a,s){var o=compileObserver(i);r&&(o=Observers.makeConverterObserver(o,r,n));var l=compileBinder(t);return l(o,n,e,a,s?{sourcePath:stringify(i),targetPath:stringify(t)}:null)}function bindRangeContent(e,t,n,i,r,a,s,o){function l(e,t,n){p||(p=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"<-",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),h.swap(n,t.length,e),p=!1)}function u(e,t,n){p||(p=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"->",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),d.swap(n,t.length,e),p=!1)}function c(){if(d!==h){o&&console.log("RANGE CONTENT BOUND",o.targetPath,"<->",o.sourcePath),p=!0;var t=observeRangeChange(d,l,n),i=observeRangeChange(h,u,e);return p=!1,function(){o&&console.log("RANGE CONTENT UNBOUND",o.targetPath,"<->",o.sourcePath),t(),i()}}}var h,d,p,m=compileObserver(i),f=compileObserver(t),v=compileAssigner(i),_=compileAssigner(t),g=Function.noop;p=!0;var b=f(function(e){g(),g=Function.noop,o&&console.log("RANGE CONTENT TARGET",o.targetPath,"SET TO",e),e&&e.addRangeChangeListener&&(h=e,d&&h?(o&&console.log("RANGE CONTENT TARGET REPLACES SOURCE",o.targetPath,"->",o.sourcePath,"WITH",h),p=!0,d.swap(0,d.length,h),p=!1,g=c()):d||p||(o&&console.log("RANGE CONTENT TARGET INITIALIZED TO COPY OF SOURCE",o.targetPath,"<-",tarce.sourcePath,"WITH",d),v(h.clone(),n)))},e);p=!1;var y=m(function(t){g(),g=Function.noop,o&&console.log("RANGE CONTENT SOURCE",o.sourcePath,"SET TO",t),t&&t.addRangeChangeListener&&(d=t,h&&d?(o&&console.log("RANGE CONTENT SOURCE REPLACES TARGET",o.targetPath,"<-",o.sourcePath,"WITH",d),p=!0,h.swap(0,h.length,d),p=!1,g=c()):h||_(d.clone(),e))},n);return h||d||v([],n),function(){g(),b(),y()}}var parse=require("./parse"),solve=require("./algebra"),stringify=require("./stringify"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),compileAssigner=require("./compile-assigner"),Observers=require("./observers"),observeRangeChange=Observers.observeRangeChange,Binders=require("./binders"),Scope=require("./scope");module.exports=bind;