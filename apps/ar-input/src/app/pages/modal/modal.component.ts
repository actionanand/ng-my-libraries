/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

import { ICON_TYPE, ICON_NAME } from '@ng-ar/fa-input';

@Component({
  selector: 'ar-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  typeSolid = ICON_TYPE.SOLID;
  typeReg = ICON_TYPE.REGULAR;
  typeBrand = ICON_TYPE.BRAND;

  iconEmail = ICON_NAME.REG_SOLID.ENVELOPE;
  iconPassword = ICON_NAME.SOLID.LOCK;


  ngOnInit(): void {}
}