import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  imports: [SharedModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  items: MenuItem[] = [
    { label: 'Home', routerLink: '/home' },
  ];

  home: MenuItem = { icon: 'pi pi-home', routerLink: '/home' };

}
