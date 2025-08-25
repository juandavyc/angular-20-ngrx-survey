import { PartialStateUpdater } from "@ngrx/signals";
import { SurveySlice } from "./survey.slice";
import { Question } from "src/app/models/question.model";

export function addAnswer(answer: string): PartialStateUpdater<SurveySlice> {
  return (state) => ({
    answers: [...state.answers, answer]
  });
}
export function reset(): PartialStateUpdater<SurveySlice> {
  return _ => ({
    answers: [], selectedAnswer: ''
  });
}

export function previous(): PartialStateUpdater<SurveySlice> {

  return (state) => {
    const newAnswerList = [...state.answers].slice(0, -1);
    const selectedAnswer = newAnswerList.slice(-1)[0] ?? '';

    return {
      answers: newAnswerList, selectedAnswer
    }
  };
}

// export function reorder(questions: Question[]): PartialStateUpdater<SurveySlice> {
//   return (state) => {
//     const randomOrdered = [...questions].sort(() => Math.random() - Math.random())

//     return {
//       questions: randomOrdered
//     }
//   }
// }

// export function setLanguage(dictionary: Record<string, Question[]>): PartialStateUpdater<SurveySlice> {
//   return (state) => {
//     const languages = state.possibleLanguages;
//     const languageIndex = languages.indexOf(state.selectedLanguage);
//     const nextLanguage = languages[(languageIndex + 1) % languages.length];

//     return {
//       selectedLanguage: nextLanguage,
//       questions: dictionary[nextLanguage]
//     }
//   }
// }



