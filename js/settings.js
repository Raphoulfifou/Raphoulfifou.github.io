/* JavaScript for settings.html */

function openMenu(evt, menuName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-links" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active_menu", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active_menu";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
