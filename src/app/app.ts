import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppFooterComponent } from './features/layouts/app-footer/app-footer.component';
import { AppToolbarComponent } from './features/layouts/app-toolbar/app-toolbar.component';
import { AppStore } from './store/app.store';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SharedModule,
    AppToolbarComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[AppStore]
})
export class App {
  protected readonly title = signal('surveys');
  appStore = inject(AppStore);
}
