import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import { InputRefDirective } from '../directives/input-ref.directive';
import { ICON_TYPE, ICON_NAME } from '../model/fa-awesome-model';

@Component({
  selector: 'ng-ar-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss'],
})
export class FaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: IconName | any  = ICON_NAME.SOLID.PEN;
  @Input() iconType: IconPrefix | any = ICON_TYPE.SOLID;
  @ContentChild(InputRefDirective) inputEl!: InputRefDirective;
  // @ContentChild('input') inputEl!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // console.log(this.inputEl);
    if (!this.inputEl) {
      console.error('"ng-ar-fa-input" needed an "input" element inside.');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
      return this.inputEl ? this.inputEl.focus : false;
  }
}
