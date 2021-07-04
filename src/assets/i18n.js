import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import roYaml from 'js-yaml-loader!../translations/messages.ro.yml';
import enYaml from 'js-yaml-loader!../translations/messages.en.yml';

const splitPlurals = (object) => {
    const newObject = {};
    Object.keys(object).forEach((key) => {
        let elem = object[key];
        if (typeof elem === 'object') {
            newObject[key] = splitPlurals(elem);
            return;
        }
        // replace all symfony parameters %param% with {{param}} in all strings for js
        elem = String(elem).replace(/%([^%]+(?=%))%/gi, '{{$1}}');

        // splits all plurales like "one apple|many apples" into different keys apple and apple_plural
        if (typeof elem === 'string' && elem.includes('|')) {
            const plural = elem.split('|');
            newObject[key] = plural.shift();
            newObject[`${key}_plural`] = plural.shift();

            return;
        }

        newObject[key] = elem;
    });

    return newObject;
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ro: {
                translation: splitPlurals(roYaml),
            },
            en: {
                translation: splitPlurals(enYaml),
            },
        },
        lng: (locale) || 'ro',
        fallbackLng: 'ro',
        // keySeparator: false, // don't count "." as separator
    });

export default i18n;