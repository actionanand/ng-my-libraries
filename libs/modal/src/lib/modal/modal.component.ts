/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'ng-ar-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() body!: TemplateRef<unknown>;

  constructor() {}

  ngOnInit(): void {}
}
