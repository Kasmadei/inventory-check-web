When adding/editing/removing localization keys in translate.json files,
add/edit/remove corresponding keys in interfaces in src\services\i18n\i18n-types.ts!

If you add/edit/remove multiple keys at once, you can use this tool to update the types - http://json2ts.com.
Guide is in src\services\i18n\i18n-types.ts file.

When using localization keys, you should use src\services\i18n\i18nHelper.ts and src\components\TranslatedText.tsx component (if possible)

Example of usage:

*other imports
import localizationHelper from "../services/i18n/i18nHelper"

const Example: React.FC = () => {
    <View>
       <TranslatedText>{localizationHelper.Test.Translation}</TranslatedText>
    </View>
}