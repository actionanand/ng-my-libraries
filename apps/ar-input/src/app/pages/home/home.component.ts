/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

import { ICON_TYPE, ICON_NAME } from '@ng-ar/fa-input';

import { fadeInOut } from '../../animations/home.animation';

@Component({
  selector: 'ng-my-libraries-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut]
})
export class HomeComponent implements OnInit {
  constructor() {}

  typeSolid = ICON_TYPE.SOLID;
  typeReg = ICON_TYPE.REGULAR;
  typeBrand = ICON_TYPE.BRAND;

  iconEmail = ICON_NAME.REG_SOLID.ENVELOPE;
  iconStripe = ICON_NAME.BRAND.STRIPE;
  iconCc = ICON_NAME.REG_SOLID.CREDIT_CARD;

  ngOnInit(): void {}

  onAnimationStart() {
    console.info('FadeInOut Animation started');
  }

  onAnimationEnd() {
    console.info('FadeInOut Animation ended');
  }
}
