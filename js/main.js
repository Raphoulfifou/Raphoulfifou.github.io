function changeMode(button) {
	let buttonWhenDark = "Dark Mode";
	let buttonWhenLight = "Light Mode";
	var currentCSSFile = document.getElementById("lnk");
	
	if(button.innerHTML == buttonWhenDark) {
		button.innerHTML = buttonWhenLight;
		currentCSSFile.setAttribute("href", "css/dark.css");
	}
	
	else if(button.innerHTML == buttonWhenLight) {
		button.innerHTML = buttonWhenDark;
		currentCSSFile.setAttribute("href", "css/light.css");
	}
}
