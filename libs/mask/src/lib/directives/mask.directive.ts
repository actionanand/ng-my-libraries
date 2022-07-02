/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ng-ar-mask]'
})
export class MaskDirective implements OnInit {

  @Input('ng-ar-mask') mask = '';

  input!: HTMLInputElement;

  constructor(el: ElementRef) {
    console.log('mask ', this.mask);
    this.input = el.nativeElement;

    console.log('input ', this.input);
  }

  buildPlaceHolder(): string {
    const value = '';
    return value;
  }

  ngOnInit(): void {
    this.input.value = this.buildPlaceHolder();
  }

}
