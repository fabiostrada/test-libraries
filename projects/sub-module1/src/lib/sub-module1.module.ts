import { NgModule } from '@angular/core';
import {SubModule1Component } from './sub-module1.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@test/shared';
import { CommonModule } from '@angular/common';

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
    SharedModule,
    CommonModule
  ],
  exports: [
    SubModule1Component
  ]
})
export class SubModule1Module { }
