import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FaInputModule } from '@ng-ar/fa-input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FaInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
