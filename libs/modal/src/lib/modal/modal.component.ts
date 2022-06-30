/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { NgArModalService } from '../services/modal.service';

@Component({
  selector: 'ng-ar-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() body!: TemplateRef<unknown>;

  constructor(private modalServ: NgArModalService) {}

  ngOnInit(): void {}

  onCloseModal() {
    this.modalServ.close();
  }

  onCancelClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
