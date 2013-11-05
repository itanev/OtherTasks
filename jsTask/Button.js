function Button(mainContainerId, backgroundColor, text, url) {
	this.text = text || "I'm a button";
	this.url = url || "http://google.com";
	
	ToolbarElement.call(this, mainContainerId, backgroundColor);
	
	var baseRender = this.render;
	
	this.render = function() {
		var link = document.createElement("a");
		link.onclick = function() { return false; }
		var linkText = document.createTextNode(this.text);
		link.appendChild(linkText);
		var element = baseRender();
		element.appendChild(link);
		
		this.main.appendChild(element);
		return element;
	}	
}

Button.prototype = new ToolbarElement();
Button.prototype.constructor = Button;