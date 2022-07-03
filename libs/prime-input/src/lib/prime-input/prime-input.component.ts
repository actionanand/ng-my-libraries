/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';

import { InputRefDirective } from '../directives/input-ref.directive';
import { PrimeIcon } from '../model/prime.icon';

@Component({
  selector: 'ng-ar-prime-input',
  templateUrl: './prime-input.component.html',
  styleUrls: ['./prime-input.component.scss'],
})
export class PrimeInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string  = 'pencil';
  @ContentChild(InputRefDirective) inputEl!: InputRefDirective;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (!this.inputEl) {
      console.error('"ng-ar-prime-input" needed an "input" element inside.');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.inputEl ? this.inputEl.focus : false;
  }

  get classes() {
    const cssClasses: PrimeIcon = {};
    if (this.icon) {
      cssClasses['pi-' + this.icon] = true;
    }
    return cssClasses;
  }
}
