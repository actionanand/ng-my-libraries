/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

import { NgArModalService } from '../services/modal.service';

@Component({
  selector: 'ng-ar-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() body!: TemplateRef<unknown>;
  @Input() hideOnEsc: boolean = true;
  @Input() hideOnClickOutside: boolean = true;
  @Input() showCloseIcon: boolean = true;

  constructor(private modalServ: NgArModalService, private eventManager: EventManager) {}

  @HostListener('window:keyup.esc', ['$event'])
  closeModalOnPressingEsc(event: KeyboardEvent) {
    this.hideOnEsc && this.modalServ.close();
  }

  ngOnInit(): void {}

  onClickOutsideModal() {
    this.hideOnClickOutside && this.modalServ.close();
  }

  onCancelClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
