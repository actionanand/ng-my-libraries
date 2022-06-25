import { Component } from '@angular/core';

import { TYPE_BRAND_ICON, TYPE_REGULAR_ICON, TYPE_SOLID_ICON, REG_SOLID_ENVELOPE, REG_SOLID_ADDRESS_CARD, BRAND_FACEBOOK } from '@ng-ar/fa-input'

@Component({
  selector: 'ng-my-libraries-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ar-input';

  typeSolid = TYPE_SOLID_ICON;
  typeReg = TYPE_REGULAR_ICON;
  typeBrand = TYPE_BRAND_ICON;

  iconEmail = REG_SOLID_ENVELOPE;
  iconAddress = REG_SOLID_ADDRESS_CARD;
  iconFb = BRAND_FACEBOOK;
}
