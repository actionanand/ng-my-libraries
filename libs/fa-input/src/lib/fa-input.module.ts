import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faAngular as fabStar } from '@fortawesome/free-brands-svg-icons';

import { FaInputComponent } from './fa-input/fa-input.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [FaInputComponent],
  exports: [FaInputComponent]
})
export class FaInputModule {
  constructor(faLib: FaIconLibrary) {
    faLib.addIcons(fasStar, farStar, fabStar);
  }
}
