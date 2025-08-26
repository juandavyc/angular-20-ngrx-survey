import { Question } from "src/app/models/question.model";

export interface SurveyVm {
  answersCount: number;
  currentQuestion: Question;
  isCompleted: boolean;
  isFirst: boolean;
  questionsCount: number;
  selectedLanguage: string;
}
