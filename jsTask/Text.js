function Text(mainContainerId, backgroundColor, text) {
	this.text = text || "I'm a text";
	
	ToolbarElement.call(this, mainContainerId, backgroundColor || "#FF8");
	
	var baseRender = this.render;
	
	this.render = function() {
		var text = document.createTextNode(this.text);
		var element = baseRender();
		element.appendChild(text);
		
		this.main.appendChild(element);
		return element;
	}	
}

Text.prototype = new ToolbarElement();
Text.prototype.constructor = Text;