import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeInputComponent } from './prime-input/prime-input.component';
import { InputRefDirective } from './directives/input-ref.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PrimeInputComponent, InputRefDirective],
  exports: [PrimeInputComponent, InputRefDirective]
})
export class PrimeInputModule {}
