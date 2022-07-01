import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTimes, faTimesCircle, faTimesSquare } from '@fortawesome/free-solid-svg-icons';

import { ModalComponent } from './modal/modal.component';
import { ModalOpenOnClickDirective } from './directives/modal-open-on-click.directive';
import { NgArModalService } from './services/modal.service';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [ModalComponent, ModalOpenOnClickDirective],
  exports: [ModalComponent, ModalOpenOnClickDirective]
})
export class ModalModule {
  static forRoot(): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [NgArModalService]
    }
  }

  constructor(faLib: FaIconLibrary) {
    faLib.addIcons(faTimes, faTimesCircle, faTimesSquare);
  }
}
