import { patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from "@ngrx/signals";
import { initialAppStore } from "./app.slice";
import { computed } from "@angular/core";
import { DICTIONARIES } from "../data/dictionary.data";
import { changeLanguage, restartLanguage } from "./app.updater";
import { getSelectedDictionary } from "./app.helper";

export const AppStore = signalStore(
  withState(initialAppStore),
  withProps(_ => {
    const _dictionaries = DICTIONARIES;
    const _languages = Object.keys(_dictionaries);
    return {
      _dictionaries,_languages
    }
  }),
  withComputed((store) => {


    const selectedDictionary = computed(() => {
      return getSelectedDictionary(store.selectedLanguage(), store._dictionaries);
    })
    return {
      selectedDictionary
    }
  }),
  withMethods((store) => {



    return {
      changeLanguage: () => patchState(store, changeLanguage(store._dictionaries))
      // redorder:()=> {
      //   const questions = store.selectedDictionary();
      //   const ordered  = [...questions].sort((a,b)=>Math.random() - Math.random());
      //   patchState(store, {que})
      // }
    }
  }),
  withHooks((store) => ({
    onInit: () => patchState(store,restartLanguage(store._languages))
  }))
)
