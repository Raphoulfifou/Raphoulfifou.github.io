/* Theme functions */

function loadUtils()
{
    applyMode();
    checkPressedSliders();
}

function changeMode()
{
    var currentUsedCSSFile = document.getElementById("theme");
	var currentUsedModeIcon = document.getElementById("mode_icon");

	if (currentUsedModeIcon.getAttribute("class") == "fas fa-sun")
    {
		currentUsedCSSFile.setAttribute("href", "css/light.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-moon");
		localStorage.setItem("mode", "light");
	}
	else if (currentUsedModeIcon.getAttribute("class") == "fas fa-moon")
    {
		currentUsedCSSFile.setAttribute("href", "css/dark.css");
		currentUsedModeIcon.setAttribute("class", "fas fa-sun");
		localStorage.setItem("mode", "dark");
	}
}

function applyMode() {
	var mode = localStorage.getItem("mode");
	var currentUsedModeIcon = document.getElementById("mode_icon");

    if (localStorage.getItem("SyncWOS") == true)
    {
        changeModeOS();
    }
    else if (localStorage.getItem("SyncWOS") ==  false)
    {
        if (mode == "dark")
        {
            document.getElementById("theme").setAttribute("href", "css/dark.css");
            currentUsedModeIcon.setAttribute("class", "fas fa-sun");
        }
        else if (mode == "light")
        {
            document.getElementById("theme").setAttribute("href", "css/light.css");
            currentUsedModeIcon.setAttribute("class", "fas fa-moon");
        }
    }	
}

function checkPressedSliders()
{
    if (localStorage.getItem("SyncWOS") == true)
    {
        document.getElementById("OSSlider").click.call;
    }
}

function setOSItem(doClick)
{
    if (doClick == true)
    {
        if (localStorage.getItem("SyncWOS") == null)
        {
            localStorage.setItem("SyncWOS", true);
        }
        else
        {
            if (localStorage.getItem("SyncWOS") == true)
            {
                localStorage.setItem("SyncWOS", false);
            }
            else if (localStorage.getItem("SyncWOS") == false)
            {
                localStorage.setItem("SyncWOS", true);
            }
        }
    }
}

function changeModeOS()
{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    var currentUsedCSSFile = document.getElementById("theme");
    var currentUsedModeIcon = document.getElementById("mode_icon");

    darkThemeMq.addListener(e => {
        if (e.matches)
        {
            if (currentUsedModeIcon.getAttribute("class") == "fas fa-moon")
            {
                currentUsedCSSFile.setAttribute("href", "css/dark.css");
                currentUsedModeIcon.setAttribute("class", "fas fa-sun");
                localStorage.setItem("mode", "dark");
            }
            currentUsedCSSFile.setAttribute("href", "css/light.css");
            currentUsedModeIcon.setAttribute("class", "fas fa-moon");
            localStorage.setItem("mode", "light");
        }
        else
        {
            if (currentUsedModeIcon.getAttribute("class") == "fas fa-moon")
            {
                currentUsedCSSFile.setAttribute("href", "css/light.css");
                currentUsedModeIcon.setAttribute("class", "fas fa-moon");
                localStorage.setItem("mode", "light");
            }
            currentUsedCSSFile.setAttribute("href", "css/dark.css");
            currentUsedModeIcon.setAttribute("class", "fas fa-sun");
            localStorage.setItem("mode", "dark");
        }
    });
}
