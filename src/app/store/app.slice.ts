import { DICTIONARIES } from "../data/dictionary.data";
import { Dictionary } from "../models/dictionary.model";

export interface AppSlice {
  //dictionaries: Dictionary,
  languages: string[],
  selectedLanguage: string;
}

export const initialAppStore: AppSlice = {
  //dictionaries: DICTIONARIES,
  languages: [],
  selectedLanguage: '',
}
