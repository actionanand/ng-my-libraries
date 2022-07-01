import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from './pages/input/input.component';
import { ModalComponent } from './pages/modal/modal.component';
import { TabComponent } from './pages/tab/tab.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InputComponent
  },
  {
    path: 'tab',
    component: TabComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }