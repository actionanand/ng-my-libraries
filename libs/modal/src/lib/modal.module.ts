import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { ModalOpenOnClickDirective } from './directives/modal-open-on-click.directive';
import { NgArModalService } from './services/modal.service';

@NgModule({
  imports: [CommonModule],
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
}
