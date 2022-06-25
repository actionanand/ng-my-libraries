import { Component } from '@angular/core';

import { SOLID_BIRTHDAY_CAKE } from '@ng-ar/fa-input'

@Component({
  selector: 'ng-my-libraries-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ar-input';
  icon = SOLID_BIRTHDAY_CAKE;
}
