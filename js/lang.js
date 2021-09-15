/* Functions for language */

var dict = {
    en: {
        "SyncThemeWOS": "Synchronise language with system:",
        "SyncLangWOS": "Synchronise language with system:"
    },

    fr: {
        "SyncThemeWOS": "Synchronise language with system:",
        "SyncLangWOS": "Synchroniser la langue avec le système:"
    }
}

var lang = "en";
//var tmpl = "<div>{{Goodbye}}, {{castle}}</div>";

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
translation.insertAdjacentHTML("afterbegin", html);
