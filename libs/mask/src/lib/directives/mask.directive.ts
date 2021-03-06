/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { includes, findLastIndex, findIndex } from 'lodash';
import { maskDigitValidators, neverValidator } from '../shared/digit_validators';

import { BACKSPACE, DELETE, LEFT_ARROW, overWriteCharAtPosition, RIGHT_ARROW, SPECIAL_CHARACTERS, TAB } from '../shared/mask.utils';


@Directive({
  selector: '[ng-ar-mask]'
})
export class MaskDirective implements OnInit {

  @Input('ng-ar-mask') mask = '';
  @Input() rightClick = false;
  @Input() metaKeys = false;

  input!: HTMLInputElement;
  fullFieldSelected = false;

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

  calculatePreviousCursorPosition(cursorPosition: number): number {
    const valueBeforeCur = this.input.value.slice(0, cursorPosition);
    return findLastIndex(valueBeforeCur, char => ! includes(SPECIAL_CHARACTERS, char));
  }

  handleRightArrow(cursorPosition: number) {
    const valueAfterCursor = this.input.value.slice(cursorPosition + 1);
    const nextPosition = findIndex(valueAfterCursor, char => ! includes(SPECIAL_CHARACTERS, char));
    const newCursorPos = cursorPosition + nextPosition + 1;
    nextPosition >= 0 && this.input.setSelectionRange(newCursorPos, newCursorPos);
  }

  handleLeftArrow(cursorPosition: number) {
    const prevPos = this.calculatePreviousCursorPosition(cursorPosition);
    prevPos >= 0 && this.input.setSelectionRange(prevPos, prevPos);
  }

  handleBackspace(cursorPosition: number) {
    const prevPos = this.calculatePreviousCursorPosition(cursorPosition);

    if (prevPos >= 0) {
      overWriteCharAtPosition(this.input, prevPos, '_');
      this.input.setSelectionRange(prevPos, prevPos);
    }
  }

  handleDeleteBtn(cursorPosition: number) {
    overWriteCharAtPosition(this.input, cursorPosition, '_');
    this.input.setSelectionRange(cursorPosition, cursorPosition);
  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode: number) {

    if (this.metaKeys && ($event.metaKey || $event.ctrlKey)) {
      return;
    }

    keyCode !== TAB && $event.preventDefault();

    const key = String.fromCharCode(keyCode),
      cursorPos = (this.input.selectionStart) as number;

    // if meta keys allowed, when selected, we can clear the input by single key press
    if(this.fullFieldSelected && this.metaKeys) {
      this.input.value = this.buildPlaceHolder();
      const firstPlaceholderPos = findIndex(this.input.value, char => char === '_');
      this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);
    }

    switch(keyCode) {
      case LEFT_ARROW:
        this.handleLeftArrow(cursorPos);
        return;

      case RIGHT_ARROW:
        this.handleRightArrow(cursorPos);
        return;

      case BACKSPACE:
        this.handleBackspace(cursorPos);
        return;

      case DELETE:
        this.handleDeleteBtn(cursorPos);
        return;
    }

    const maskDigit = this.mask.charAt(cursorPos),
      digitValidator = maskDigitValidators[maskDigit] || neverValidator; // it will return an function (say numericValidator, neverValidator, etc) always.

    if(digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    }
  }

  @HostListener('select', ['$event'])
  onSelect($event: UIEvent) {
    this.fullFieldSelected = this.input.selectionStart === 0 &&
      this.input.selectionEnd === this.input.value.length;
  }

  // preventing right click
  @HostListener('contextmenu', ['$event'])
  onPreventRightClick($event: UIEvent) {
    !this.rightClick && $event.preventDefault();
  }

}