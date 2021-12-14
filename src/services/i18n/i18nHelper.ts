import translationCS from "../../locales/cs/translation.json";
import { Localization } from "./i18n-types";

/**
 * Generates helper object for localization from "public/locales/cs/translate.json" file
 *
 * @param result reference to final object
 */
const getLocalizationKeys = (result: any) => {
  iterateKeys(translationCS, result);
};

/**
 * Finds localization keys in the parent object and save the path to the keys into the result object
 *
 * @param parent object to search for keys
 * @param result reference to final object
 * @param path path to the localization key
 */
const iterateKeys = (parent: any, result: any, path?: string) => {
  Object.keys(parent).forEach((key) => {
    if (typeof parent[key] === "string") {
      path ? (result[path][key] = path + "." + key) : (result[key] = key);
    } else {
      result[key] = {};
      iterateKeys(
        parent[key],
        result,
        path && path.length > 0 ? path + "." + key : key
      );
    }
  });
};

const localizationHelper = {};

getLocalizationKeys(localizationHelper);

/**
 * Contains structure of localization keys with strings as values representing the path to the key
 *
 * Example: localizationHelper.Test.Translation has value "Test.Translation"
 */
export default localizationHelper as Localization;
