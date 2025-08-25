import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialSurveySlice } from './survey.slice';
import { computed, inject } from '@angular/core';
import { getCorrectAnswers, loadFromLocalStorage, saveInLocalStorage } from './survey.helper';
import { addAnswer, previous, reset } from './survey.update';
import { AppStore } from 'src/app/store/app.store';
import { buildSurveyVm } from './survey-vm.builder';

export const SurveyStore = signalStore(
  withState(initialSurveySlice),
  withProps(_ => {
    const appStore = inject(AppStore);
    const questions = computed(() => appStore.selectedDictionary());
    return { _questions: questions, _changeLanguage: appStore.changeLanguage }
  }),
  withComputed((store) => {

    // const currentQuestion = computed(() => store._questions()[answersCount()]);
    // const answersCount = computed(() => store.answers().length);
    // const isDone = computed(() => answersCount() == store._questions().length);
    const summaryAnswers = computed(() => getCorrectAnswers(store.answers(), store._questions()));
    // const isFirst = computed(() => answersCount() == 0);
    const vm = computed(() => buildSurveyVm(store._questions(), store.answers()));
    return {
      vm,
      // currentQuestion,
      // isDone,
      // isFirst,
      // answersCount,
      summaryAnswers,
    }
  }),

  withMethods((store) => {

    return {
      setSelectedAnswer: (answer: string) => {
        patchState(store, { selectedAnswer: answer });
      },
      next: () => {
        patchState(store, addAnswer(store.selectedAnswer()), { selectedAnswer: '' })
        saveInLocalStorage(store.answers());
      },
      previous: () => {
        patchState(store, previous());
        saveInLocalStorage(store.answers());
      },
      reset: () => {
        patchState(store, reset())
        saveInLocalStorage([]);
      },

      changeLanguage: () => {
        store._changeLanguage();
        patchState(store, reset());
        saveInLocalStorage([]);

      },

    }
  }),
  withHooks((store) => ({
    onInit: () => {
      const answersLoaded = loadFromLocalStorage();
      const selectedAnswer = answersLoaded.length > 0 ? answersLoaded.slice(-1)[0] : '';

      patchState(store,
        { answers: answersLoaded },
        { selectedAnswer: selectedAnswer },
        // { possibleLanguages: store._languages },
        // setLanguage(store._dictionaries)
      );



    },
    onDestroy: () => {
      console.log("destroy");
    }

  }))

)
