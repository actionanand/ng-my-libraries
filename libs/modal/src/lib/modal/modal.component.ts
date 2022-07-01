/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

import { NgArModalService } from '../services/modal.service';

enum FA_CLOSE_ICONS {
  cross = 'times',
  circle = 'times-circle',
  square = 'times-square'
};

@Component({
  selector: 'ng-ar-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() body!: TemplateRef<unknown>;
  @Input() context: any;
  @Input() hideOnEsc: boolean = true;
  @Input() hideOnClickOutside: boolean = true;
  @Input() showCloseIcon: boolean = true;
  @Input() closeIconSymbol: string = 'circle';

  readonly closeIconKeys: (keyof typeof FA_CLOSE_ICONS)[] = Object.keys(FA_CLOSE_ICONS) as (keyof typeof FA_CLOSE_ICONS)[];

  constructor(private modalServ: NgArModalService, private eventManager: EventManager) {}

  @HostListener('window:keyup.esc', ['$event'])
  closeModalOnPressingEsc(event: KeyboardEvent) {
    this.hideOnEsc && this.modalServ.close();
  }

  ngOnInit(): void {
    // console.log(this.closeIconKeys)
  }

  onClickOutsideModal() {
    this.hideOnClickOutside && this.modalServ.close();
  }

  onCancelClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onCloseModal() {
    this.modalServ.close();
  }

  get getCloseIconSymbol(): any {
    let iconKeyIndx: number;
    iconKeyIndx = Object.keys(FA_CLOSE_ICONS).indexOf(this.closeIconSymbol as unknown as FA_CLOSE_ICONS);

    if (iconKeyIndx === -1) {
      iconKeyIndx = 1;
    }

    // for(const key in this.closeIconKeys) {
    //   if (this.closeIconSymbol == key) {
    //     iconKeyIndx = Object.keys(FA_CLOSE_ICONS).indexOf(this.closeIconSymbol as unknown as FA_CLOSE_ICONS);
    //   } else {
    //     iconKeyIndx = 1
    //   }
    // }

    return Object.values(FA_CLOSE_ICONS)[iconKeyIndx]
  }
}
