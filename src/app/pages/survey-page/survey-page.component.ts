import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SurveyStore } from './store/survey.store';
import { SharedModule } from '@shared/shared.module';
import { AppStore } from 'src/app/store/app.store';



@Component({
  selector: 'app-survey-page',
  imports: [
    SharedModule
  ],
  templateUrl: './survey-page.component.html',
  styleUrl: './survey-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SurveyStore]
})
export default class SurveyPageComponent {

  appStore =inject(AppStore);
  store = inject(SurveyStore);

}
