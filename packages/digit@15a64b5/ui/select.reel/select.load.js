montageDefine("15a64b5","ui/select.reel/select",{dependencies:["montage/ui/base/abstract-select"],factory:function(e,t){var r=e("montage/ui/base/abstract-select").AbstractSelect;t.Select=r.specialize({constructor:{value:function(){this.super(),this.classList.add("digit-Select"),this.addPathChangeListener("content",this,"handleContentChange")}},enterDocument:{value:function(e){this.super(e),this.element.addEventListener("change",this,!1)}},handleChange:{value:function(){var e=this.contentController.organizedContent,t=this.element.selectedIndex;this.value=e[t]}},handleContentChange:{value:function(){null==this.value&&(this.value=this.contentController.organizedContent[0])}},draw:{value:function(){var e,t=this.contentController.organizedContent;this._contentIsDirty&&(this.drawOptions(),this._contentIsDirty=!1),e=t.indexOf(this.value),-1==e&&(e=0),this.element.selectedIndex=e}},drawOptions:{value:function(){for(var e,t,r=this.contentController.organizedContent,n=document.createDocumentFragment(),i=0,o=r.length;o>i;i++)e=document.createElement("option"),t=r[i],e.textContent=t[this.labelPropertyName],n.appendChild(e);this.element.innerHTML="",this.element.appendChild(n)}}})}});