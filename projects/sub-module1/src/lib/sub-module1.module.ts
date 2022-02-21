import { NgModule } from '@angular/core';
import { SubModule1Component } from './sub-module1.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@test/shared';

const routes: Routes = [
  {
    path: '',
    component: SubModule1Component
  }
];

@NgModule({
  declarations: [
    SubModule1Component
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    SubModule1Component
  ]
})
export class SubModule1Module { }
