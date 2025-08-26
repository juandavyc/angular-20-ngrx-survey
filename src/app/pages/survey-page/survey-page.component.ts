import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SurveyStore } from './store/survey.store';


@Component({
  selector: 'app-survey-page',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './survey-page.component.html',
  styleUrl: './survey-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SurveyStore]
})
export class SurveyPageComponent {

  items: MenuItem[] = [
    { label: 'Survey', routerLink: '/survey' },
  ];

  home: MenuItem = { icon: 'pi pi-home', routerLink: '/home' };

}
