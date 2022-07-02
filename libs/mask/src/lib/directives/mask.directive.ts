/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { includes, findLastIndex, findIndex } from 'lodash';
import { maskDigitValidators } from '../shared/digit_validators';

import { LEFT_ARROW, overWriteCharAtPosition, RIGHT_ARROW, SPECIAL_CHARACTERS, TAB } from '../shared/mask.utils';


@Directive({
  selector: '[ng-ar-mask]'
})
export class MaskDirective implements OnInit {

  @Input('ng-ar-mask') mask = '';

  input!: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  buildPlaceHolder(): string {
    const chars = this.mask.split('');

    return chars.reduce((result, char) => {
      return result += includes(SPECIAL_CHARACTERS, char) ? char : '_';
    }, '');
  }

  ngOnInit(): void {
    this.input.value = this.buildPlaceHolder();
  }

  handleRightArrow(cursorPosition: number) {
    const valueAfterCursor = this.input.value.slice(cursorPosition + 1);
    const nextPosition = findIndex(valueAfterCursor, char => ! includes(SPECIAL_CHARACTERS, char));
    const newCursorPos = cursorPosition + nextPosition + 1;
    nextPosition >= 0 && this.input.setSelectionRange(newCursorPos, newCursorPos);
  }

  handleLeftArrow(cursorPosition: number) {
    const valueBeforeCur = this.input.value.slice(0, cursorPosition);
    const prevPos = findLastIndex(valueBeforeCur, char => ! includes(SPECIAL_CHARACTERS, char));
    prevPos >= 0 && this.input.setSelectionRange(prevPos, prevPos);
  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode: number) {
    keyCode !== TAB && $event.preventDefault();

    const key = String.fromCharCode(keyCode),
      cursorPos = (this.input.selectionStart) as number;

    switch(keyCode) {
      case LEFT_ARROW:
        this.handleLeftArrow(cursorPos);
        return;

      case RIGHT_ARROW:
        this.handleRightArrow(cursorPos);
        return;
    }

    const maskDigit = this.mask.charAt(cursorPos),
      digitValidator = maskDigitValidators[maskDigit]; // it will return an function (say numericValidator)

    if(digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    }
  }

}
