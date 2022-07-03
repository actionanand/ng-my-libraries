import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeInputComponent } from './prime-input/prime-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PrimeInputComponent],
  exports: [PrimeInputComponent]
})
export class PrimeInputModule {}
