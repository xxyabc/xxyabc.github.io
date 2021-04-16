import en from './locale/en.json'
import cn from './locale/cn.json'

var DEFAULT_LANG = 'cn';
var langs = {
    'en': en,
    'cn': cn,
};

export function gettext(text) {
    var args = [].slice.call(arguments);
    var res, locale = window.sessionStorage.getItem('lang') || DEFAULT_LANG;
    var transText = langs[locale]
    res = transText[text]

    return res;
}
