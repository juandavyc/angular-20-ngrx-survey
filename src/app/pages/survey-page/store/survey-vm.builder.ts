import { Question } from "src/app/models/question.model";
import { SurveyVm } from "./survey.vm";

export function buildSurveyVm(
  questions: Question[],
  answers: string[],
):SurveyVm {

  const questionsCount = questions.length;
  const answersCount = answers.length;
  const isCompleted = questionsCount == answersCount;
  const isFirst = answersCount === 0;
  const currentQuestion = questions[answersCount];

  return {
    answersCount,
    currentQuestion,
    isCompleted,
    isFirst,
    questionsCount,
  }
}
