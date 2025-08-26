import { Routes } from "@angular/router";
import { SummaryPageComponent } from "./pages/summary-page/summary-page.component";
import { QuizPageComponent } from "./pages/quiz-page/quiz-page.component";
import { SurveyPageComponent } from "./survey-page.component";

const SurveyRoutes: Routes = [

  {
    path: '',
    component: SurveyPageComponent,
    children: [
      {
        path: 'quiz',
        component: QuizPageComponent,
      },
      {
        path: 'summary',
        component: SummaryPageComponent,
      },
      {
        path: '**',
        redirectTo: 'quiz'
      }
    ]
  }
]

export default SurveyRoutes;
