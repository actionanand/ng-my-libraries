/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { includes } from 'lodash';

import { SPECIAL_CHARACTERS } from '../shared/mask.utils';


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

}
