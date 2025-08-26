import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SurveyStore } from './pages/survey-page/store/survey.store';

export const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'survey',
    loadChildren: () => import('./pages/survey-page/survey.routes'),
    // providers: [SurveyStore]
  },
  {
    path: '**',
    redirectTo: '/home'
  }

];
