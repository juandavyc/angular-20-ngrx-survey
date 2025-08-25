import { Dictionary } from "../models/dictionary.model";
import { Question } from "../models/question.model";

export function getSelectedDictionary(
  selectedLanguage: string,
  dictionary: Dictionary,
): Question[] {
  return dictionary[selectedLanguage];
}


