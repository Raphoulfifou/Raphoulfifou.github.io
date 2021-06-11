/* Main page */
function changeMode(self) {
	var currentUsedCSSFile = document.getElementById("theme");
	var currentUsedModeIcon = document.getElementById("mode_icon");

	if (currentUsedModeIcon.getAttribute("class") == "fas fa-sun" ) {
		currentUsedCSSFile.setAttribute("href", "css/light.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-moon")
	}
	else if (currentUsedModeIcon.getAttribute("class") == "fas fa-moon") {
		currentUsedCSSFile.setAttribute("href", "css/dark.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-sun")
	}
}
