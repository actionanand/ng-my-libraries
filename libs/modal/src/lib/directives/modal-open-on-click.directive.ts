/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { NgArModalService } from '../services/modal.service';

@Directive({
  selector: '[ngArModalOpenOnClick]'
})
export class ModalOpenOnClickDirective implements OnInit, OnDestroy {

  elements!: HTMLBaseElement[];

  constructor(private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private modalServ: NgArModalService) { }

  @Input()
    set ngArModalOpenOnClick(els: any){
      

      if(els.length) {
        this.elements = els;
      } else {
        this.elements = [els];
      }

      this.elements.forEach(el => {
        el.addEventListener('click', this.clickHandler);
      });
    }

  ngOnInit(): void {
    this.modalServ.close$.subscribe(() => this.viewContainer.clear());
  }

  ngOnDestroy(): void {
    this.elements.forEach(el => el.removeEventListener('click', this.clickHandler));
  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);

}
