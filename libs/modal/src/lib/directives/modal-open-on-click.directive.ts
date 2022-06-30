/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { NgArModalService } from '../services/modal.service';

@Directive({
  selector: '[ngArModalOpenOnClick]'
})
export class ModalOpenOnClickDirective implements OnInit {

  constructor(private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private modalServ: NgArModalService) { }

  @Input()
    set ngArModalOpenOnClick(els: any){
      let elements: HTMLBaseElement[];

      if(els.length) {
        elements = els;
      } else {
        elements = [els];
      }

      elements.forEach(el => {
        el.addEventListener('click', () => {
          this.viewContainer.clear();
          this.viewContainer.createEmbeddedView(this.templateRef);
        });
      });
    }

  ngOnInit(): void {
    this.modalServ.close$.subscribe(() => this.viewContainer.clear());
  }

}
