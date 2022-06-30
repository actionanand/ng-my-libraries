/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngArModalOpenOnClick]'
})
export class ModalOpenOnClickDirective {

  constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef) { }

  @Input()
    set ngArModalOpenOnClick(el: HTMLBaseElement | any){
      el.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
    }

}