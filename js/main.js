/* Main page */
function changeMode(button) {
	let buttonWhileDark = "Light Mode";
	let buttonWhileLight = "Dark Mode";
	var currentCSSFile = document.getElementById("theme");

	if (button.innerHTML == buttonWhileDark) {
		button.innerHTML = buttonWhileLight;
		currentCSSFile.setAttribute("href", "css/light.css");
	}
	else if (button.innerHTML == buttonWhileLight) {
		button.innerHTML = buttonWhileDark;
		currentCSSFile.setAttribute("href", "css/dark.css");
	}
}
