import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FaInputModule } from '@ng-ar/fa-input';
import { TabModule } from '@ng-ar/tab';
import { ModalModule } from '@ng-ar/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './pages/tab/tab.component';
import { InputComponent } from './pages/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    InputComponent,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaInputModule,
    TabModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
