import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FaInputModule } from '@ng-ar/fa-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './pages/tab/tab.component';

@NgModule({
  declarations: [AppComponent, TabComponent],
  imports: [BrowserModule, AppRoutingModule, FaInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
