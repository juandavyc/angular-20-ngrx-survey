import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  imports: [
    SharedModule,
  ],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToolbarComponent {


  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/home',
      command: () => this.closeDrawer()
    },
    {
      label: 'Survey',
      routerLink: '/survey',
      command: () => this.closeDrawer()
    }
  ]

  private visibleDrawer = signal<boolean>(false);

  public isVisible = computed(() => this.visibleDrawer())

  public openDrawer(): void {
    this.visibleDrawer.set(true)
  }
  public closeDrawer(): void {
    this.visibleDrawer.set(false)
  }

}
