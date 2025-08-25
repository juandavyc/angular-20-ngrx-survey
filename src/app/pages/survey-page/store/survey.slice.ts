import { Question } from "src/app/models/question.model";

export interface SurveySlice {
  answers: string[];
  selectedAnswer: string;
  // selectedLanguage: string;
  // possibleLanguages: string[];
}

export const initialSurveySlice: SurveySlice = {
  answers: [],
  selectedAnswer: '',
  // selectedLanguage: '',
  // possibleLanguages: [],  ///sp,en...
}
