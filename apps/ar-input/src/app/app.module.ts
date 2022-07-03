import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faTimes,
  faTimesCircle,
  faTimesSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FaInputModule } from '@ng-ar/fa-input';
import { TabModule } from '@ng-ar/tab';
import { ModalModule } from '@ng-ar/modal';
import { MaskModule } from '@ng-ar/mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './pages/tab/tab.component';
import { InputComponent } from './pages/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './pages/modal/modal.component';
import { MaskComponent } from './pages/mask/mask.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    InputComponent,
    HeaderComponent,
    ModalComponent,
    MaskComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FaInputModule,
    TabModule,
    ModalModule.forRoot(),
    MaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(faLib: FaIconLibrary) {
    faLib.addIcons(faTimes, faTimesCircle, faTimesSquare);
  }
}
