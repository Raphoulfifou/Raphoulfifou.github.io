/* Functions for language */
let availableLanguages = {en, fr};

function getUserLanguage()
{}

function setActiveButton(button)
{
    var currentlyActive = document.getElementsByClassName("active_button");

    let en = document.getElementById("en");
    let fr = document.getElementById("fr");
    
    if (button == fr && button != currentlyActive)
    {
        button.setAttribute("class", "active_button")
    }
}
