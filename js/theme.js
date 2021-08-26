/* Theme functions */

let syncThemeWithOS = Boolean(document.getElementById("syncWithOS"));
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function getUserOSMode()
{
    window.matchMedia("(prefers-color-scheme)")
}

function setUserModeFromOS()
{
    var selectedTheme = document.getElementById("Theme");

    if (syncThemeWithOS == true)
    {
        if (darkThemeMq.matches)
        {
            setMode("dark");
        }
        if (!darkThemeMq.matches)
        {
            setMode("light");
        }
        
    }
    if (syncThemeWithOS == false)
    {
        if (selectedTheme == "Dark Mode")
        {
            changeMode();
        }
        if (selectedTheme == false)
        {
            changeMode();
        }
    }
}

function changeMode() {
	var currentUsedCSSFile = document.getElementById("theme");
	var currentUsedModeIcon = document.getElementById("mode_icon");

	if (currentUsedModeIcon.getAttribute("class") == "fas fa-sun" ) {
		currentUsedCSSFile.setAttribute("href", "css/light.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-moon");
		localStorage.setItem("mode", "light");
	}
	else if (currentUsedModeIcon.getAttribute("class") == "fas fa-moon") {
		currentUsedCSSFile.setAttribute("href", "css/dark.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-sun");
		localStorage.setItem("mode", "dark");
	}
}

function applyMode() {
	var mode = localStorage.getItem("mode");
	var currentUsedModeIcon = document.getElementById("mode_icon");

	if (mode == "dark") {
		document.getElementById("theme").setAttribute("href", "css/dark.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-sun");
	}
	else if (mode == "light") {
		document.getElementById("theme").setAttribute("href", "css/light.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-moon");
    }
}
