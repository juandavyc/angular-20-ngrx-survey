import { PartialStateUpdater } from "@ngrx/signals";
import { AppSlice } from "./app.slice";
import { Dictionary } from "../models/dictionary.model";


export function changeLanguage(dictionary: Dictionary): PartialStateUpdater<AppSlice> {
  return (state) => {
    const languages = state.languages;
    const languageIndex = languages.indexOf(state.selectedLanguage);
    const nextLanguage = languages[(languageIndex + 1) % languages.length];
     return {
      selectedLanguage: nextLanguage,
      questions: dictionary[nextLanguage]
    }
  }
}
export function restartLanguage(languages:string[]): PartialStateUpdater<AppSlice> {
  return (state) => {
    return {
      languages: languages,
      selectedLanguage: languages[0]
    }
  }
}
