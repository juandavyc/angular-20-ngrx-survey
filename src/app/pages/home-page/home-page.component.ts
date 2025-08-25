import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-home-page',
  imports: [SharedModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  readonly appStore = inject(AppStore);
}
