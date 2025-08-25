import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'survey',
    loadComponent: ()=>import('./pages/survey-page/survey-page.component')
  },
  {
    path: '**',
    redirectTo: '/home'
  }

];
