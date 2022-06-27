import { Component } from '@angular/core';

import { ICON_TYPE, ICON_NAME } from '@ng-ar/fa-input'

@Component({
  selector: 'ng-my-libraries-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ar-input';

  typeSolid = ICON_TYPE.SOLID;
  typeReg = ICON_TYPE.REGULAR;
  typeBrand = ICON_TYPE.BRAND;

  iconEmail = ICON_NAME.REG_SOLID.ENVELOPE;
  iconAddress = ICON_NAME.REG_SOLID.ADDRESS_CARD;
  iconFb = ICON_NAME.BRAND.FACEBOOK;
}
