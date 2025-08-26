import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
// import { SurveyStore } from '../../store/survey.store';
import { SharedModule } from '@shared/shared.module';
import { SurveyStore } from '../../store/survey.store';
import { AppStore } from 'src/app/store/app.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  imports: [
    SharedModule,
    RouterLink,
],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPageComponent {


  // readonly appStore = inject(AppStore);
  readonly store = inject(SurveyStore);

  progress = computed(() => {
    const questions = this.store.vm().questionsCount;
    const answers = this.store.vm().answersCount;
    return (answers * 100) / questions;
  })
}
