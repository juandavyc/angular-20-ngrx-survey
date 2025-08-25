import { Question } from "src/app/models/question.model";

export function loadFromLocalStorage(): string[] {
  try {
    const answers = localStorage.getItem('survey');
    if (!answers) return [];

    const answersParse = JSON.parse(answers);
    return answersParse;

  } catch (error) {
    return [];
  }
}

export function saveInLocalStorage(answers: string[]): void {
  localStorage.setItem('survey', JSON.stringify(answers));
}

export function getCorrectAnswers(answers: string[], questions: Question[]): Summary[] {

  return answers.map((answer, index) => {
    const question = questions[index];
    const isCorrect = question.correctAnswer === answer;

    return {
      caption: question.caption,
      answer,
      isCorrect
    }
  })

}

