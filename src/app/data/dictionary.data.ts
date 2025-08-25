import { Question } from "../models/question.model";
import { QUESTIONS_EN, QUESTIONS_SP } from "./questions.data";



export const DICTIONARIES: Record<string, Question[]> = {
  "sp": QUESTIONS_SP,
  "en": QUESTIONS_EN,
}
