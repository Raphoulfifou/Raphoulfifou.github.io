/* Functions for language */

const templates = document.querySelectorAll(".template");
const templatesArray = [...templates];

const translations = document.querySelectorAll("#translation");
const translationsArray = [...translations];

var dict = {
    en: {
        "SyncThemeWOS": "Synchronise theme with system:",
        "SyncLangWOS": "Synchronise language with system:",
        "ChooseLang": "Choose a language:",
        "Apply": "Apply",

        // Settings pages header
        "LanguageSettingsPage": "Language",
        "ThemeSettingsPage": "Theme",
        "GeneralSettingsPage": "General",

        // Menus
        "GeneralSettingsMenu": "General",
        "ThemeSettingsMenu": "Theme",
        "LanguageSettingsMenu": "Language"
    },

    fr: {
        "SyncThemeWOS": "Synchroniser le thème avec le système:",
        "SyncLangWOS": "Synchroniser la langue avec le système:",
        "ChooseLang": "Choisissez une langue:",
        "Apply": "Appliquer",

        "LanguageSettingsPage": "Language",
        "ThemeSettingsPage": "Thème",
        "GeneralSettingsPage": "Général",

        "GeneralSettingsMenu": "Général",
        "ThemeSettingsMenu": "Thème",
        "LanguageSettingsMenu": "Language"
    }
}

let langs = ["en", "fr"]
var lang = localStorage.getItem("lang");
//var tmpl = "<div>{{Goodbye}}, {{castle}}</div>";

for (let i = 0; i < templatesArray.length; i++)
{
    function translate(dict, lang, word) {
        return dict[lang][word];
    }
    
    function applyTemplate(tmpl, lang) {
        var regex = /\{\{([a-zA-Z])\w+\}\}/g
        return tmpl.replace(regex, function (word) {
            return translate(dict, lang, word.replace(/[\{\}]/g, ""));
        });
    }
    
    var tmpl = templatesArray[i].textContent;
    var translation  = translationsArray[i];
    var html = applyTemplate(tmpl, lang);
    translation.insertAdjacentHTML("afterbegin", html);
}

function changeLang()
{
    var val = document.querySelector("#lang").value;
    
    localStorage.setItem("lang", val);
    for (let i = 0; i < langs.length; i++)
    {
        if (langs[i] == val)
        {
            langIndex = i;
        }
    }
    window.location.reload();
} 

window.onload = function()
{
    var l = localStorage.getItem("lang");
    for (let i = 0; i < langs.length; i++)
    {
        if (langs[i] == l)
        {
            document.querySelector("#lang").selectedIndex = i;
        }
    }
}

/* => base code (only works for on element)
function translate(dict, lang, word) {
    return dict[lang][word];
}

function applyTemplate(tmpl, lang) {
    var regex = /\{\{([a-zA-Z])\w+\}\}/g
    return tmpl.replace(regex, function (word) {
        return translate(dict, lang, word.replace(/[\{\}]/g, ""));
    });
}

var tmpl = document.querySelector(".template").textContent;
var translation  = document.querySelector("#translation");
var html = applyTemplate(tmpl, lang);
translation.insertAdjacentHTML("afterbegin", html);*/
