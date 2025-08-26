import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [
    RouterLink
  ],
  templateUrl: './app-logo.component.html',
  styleUrl: './app-logo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLogoComponent { }
