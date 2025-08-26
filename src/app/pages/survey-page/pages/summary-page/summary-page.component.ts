import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SurveyStore } from '../../store/survey.store';
import { SharedModule } from '@shared/shared.module';
import { Router, RouterLink } from '@angular/router';
import { AnswerStatusPipe } from '../../pipes/answer-status.pipe';


@Component({
  selector: 'app-summary-page',
  imports: [
    SharedModule,
    RouterLink,
    AnswerStatusPipe,
  ],
  templateUrl: './summary-page.component.html',
  styleUrl: './summary-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryPageComponent {

  readonly router = inject(Router);
  readonly store = inject(SurveyStore);


  resetAndGoToQuiz(): void {
    this.store.reset();
    this.router.navigate(['/survey/quiz']);
  }

}
