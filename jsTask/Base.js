var ToolbarElement = function(backgroundColor = "CCC") {
	this.backgroundColor = "#" + backgroundColor;
	
	this.setBackground(newBackgroundColor) {
		this.backgroundColor = newBackgroundColor;
	}
	
	this.getBackground() {
		return this.backgroundColor;
	}
	
	this.render(type, text) {
		var element = document.createElement(type);
		var elementText = document.createTextNode(text);
		element.appendChild(element);
	}
}
