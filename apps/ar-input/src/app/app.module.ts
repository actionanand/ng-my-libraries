import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FaInputModule } from '@ng-ar/fa-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './pages/tab/tab.component';
import { InputComponent } from './pages/input/input.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, TabComponent, InputComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FaInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
