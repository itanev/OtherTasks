function ToolbarElement(mainContainerId, background) {
	var background = background || "#CCC";   
	this.main = mainContainerId ? mainContainerId : document.getElementById("main");
	
	this.render = function() {
		var div = document.createElement("div");
		div.className = "element";
		div.setBackground = function(background) {
			this.style.backgroundColor = background;
		};
		div.getBackground = function() {
			return this.style.backgroundColor;
		};
		
		div.setBackground(background);
		$(div).colpick({
			showEvent: "click",
			color: rgbToHex(div.getBackground()),
			onShow: function (colpkr) {
				$(colpkr).hide();
				$(div).dblclick(function() {
					$(colpkr).fadeIn(500)
				});
				//$(colpkr).draggable();
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				div.setBackground('#' + hex);
			}
		});
		
		$(div).draggable();
		return div;
	}
	
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(rgb) {
		var values = rgb.substring(4, rgb.length - 1).split(",");
		var r = parseInt(values[0]);
		var g = parseInt(values[1]);
		var b = parseInt(values[2]);
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
}
