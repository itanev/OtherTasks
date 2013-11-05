function Toolbar(mainContainerId) {
	var mainContainer = mainContainerId ? document.getElementById(mainContainerId) : document.getElementById("main");
	var currentElement;
	
	this.init = function() {
		var createButton = document.getElementById("createButton");
		addEvent(createButton, "click", this.createButton);
		
		var createText = document.getElementById("createText");
		addEvent(createText, "click", this.createText);
	}
	
	this.render = function() {
		var addButton = createMainButton("Create button", "createButton");	
		var addText = createMainButton("Create text", "createText");
		var toolbar = document.createElement("div");
		toolbar.appendChild(addButton);
		toolbar.appendChild(addText);
		toolbar.id = "toolbar";
		$(toolbar).draggable();
		mainContainer.appendChild(toolbar);
		this.init();
	}
	
	this.createButton = function () {
		var button = new Button(mainContainer);
		var div = button.render();
	}
	
	this.createText = function() {
		var text = new Text(mainContainer);
		var div = text.render();
	}
	
	function changeElementColor(e) {
		currentElement.setBackground(e.target.value);
		e.target.style.display = "none";
	}
	
	function createMainButton(text, buttonId) {
		var btnButton = document.createElement("button");
		var btnText = document.createTextNode(text);
		btnButton.appendChild(btnText);
		btnButton.id = buttonId;
		
		return btnButton;
	}
	
	function addEvent(elem, event, func) {
		if (addEventListener) {
			elem.addEventListener(event, func, false);
		}
		else {
			elem.attachEvent('on' + event, func);
		}
	}
}

Toolbar.prototype.constructor = Toolbar;