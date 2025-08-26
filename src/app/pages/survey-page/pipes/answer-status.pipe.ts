import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAnswerStatus',
})
export class AnswerStatusPipe implements PipeTransform {

  transform(isCorrect: boolean,): { severity: string, value: string } {

    return {
      severity: isCorrect ? 'success' : 'danger',
      value: isCorrect ? 'correct' : 'Incorrect'
    };
  }

}
