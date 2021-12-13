/**
 * Generating types for i18n using this tool - http://json2ts.com:
 *  1) copy content of one of the translate.json files located in public/locales/{lang}
 *    - it should not matter which one, they should all have the same structure and keys, if they dont, you should fill in/edit the keys
 *  2) generate types using the tool and paste the resulting interfaces here
 *    - interface "Localization" will be named RootObject, rename it
 *  3) remove export of interfaces except from "Localization"
 */

export interface Localization {
  Test: Test;
  Common: Common;
  Inventory: Inventory;
  Auth: Auth;
  Permissions: Permissions;
  Sections: Sections;
}

interface Test {
  Translations: string;
}

interface Common {
  Inventory: string;
  Continue: string;
  Close: string;
  Save: string;
}

interface Inventory {
  ScannedLocations: string;
  LocationWithLabel: string;
  Finish: string;
  Overview: string;
  Scanners: string;
  SplitAssembly: string;
  LocationAndSection: string;
  Control: string;
  Readers: string;
  Attendance: string;
}

interface Auth {
  ID: string;
  SafetyAndProtection: string;
  ShortExplanationHowToScan: string;
  Agree: string;
  SignIn: string;
}

interface Permissions {
  Permissions: string;
}

interface Sections {
  SectionsAndLocations: string;
}
