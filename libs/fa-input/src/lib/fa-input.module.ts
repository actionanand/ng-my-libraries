import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input/fa-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FaInputComponent],
  exports: [FaInputComponent]
})
export class FaInputModule {}
