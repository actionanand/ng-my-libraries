import { Component, OnInit } from '@angular/core';

import { ICON_TYPE, ICON_NAME } from '@ng-ar/fa-input';

@Component({
  selector: 'ng-my-libraries-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  typeSolid = ICON_TYPE.SOLID;
  typeReg = ICON_TYPE.REGULAR;
  typeBrand = ICON_TYPE.BRAND;

  iconEmail = ICON_NAME.REG_SOLID.ENVELOPE;
  iconAddress = ICON_NAME.REG_SOLID.ADDRESS_CARD;
  iconFb = ICON_NAME.BRAND.FACEBOOK;

  ngOnInit(): void {}
}
