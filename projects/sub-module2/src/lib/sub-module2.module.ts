import { NgModule } from '@angular/core';
import { SubModule2Component } from './sub-module2.component';
import { SharedModule } from '@test/shared';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SubModule2Component
  }
];

@NgModule({
  declarations: [
    SubModule2Component
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    SubModule2Component
  ]
})
export class SubModule2Module { }
