/* Functions for language */

const templates = document.querySelectorAll(".template");
const templatesArray = [...templates];

const translations = document.querySelectorAll("#translation");
const translationsArray = [...translations];

var dict = {
    en: {
        "SyncThemeWOS": "Synchronise theme with system:",
        "SyncLangWOS": "Synchronise language with system:",
        "ChooseLang": "Choose a language:"
    },

    fr: {
        "SyncThemeWOS": "Synchroniser le thème avec le système:",
        "SyncLangWOS": "Synchroniser la langue avec le système:",
        "ChooseLang": "Choisissez une langue:"
    }
}

var lang = "en";
//var tmpl = "<div>{{Goodbye}}, {{castle}}</div>";
/*
translationsArray.forEach(element2 => {
    var translation = element2;
    let trlt = translation;
});

templatesArray.forEach(element => {
        function translate(dict, lang, word) {
            return dict[lang][word];
        }
        
        function applyTemplate(tmpl, lang) {
            var regex = /\{\{([a-zA-Z])\w+\}\}/g
            return tmpl.replace(regex, function (word) {
                return translate(dict, lang, word.replace(/[\{\}]/g, ""));
            });
        }
        
        var tmpl = element.textContent;
        var translation  = translationsArray[element];
        var html = applyTemplate(tmpl, lang);
        translation.insertAdjacentHTML("afterbegin", html);
});*/

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

/*
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
