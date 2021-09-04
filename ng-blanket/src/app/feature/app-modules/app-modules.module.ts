import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModulesRoutingModule } from './app-modules-routing.module';
import { AppModulesHomeComponent } from './app-modules-home.component';


@NgModule({
  declarations: [
    AppModulesHomeComponent
  ],
  imports: [
    CommonModule,
    AppModulesRoutingModule
  ]
})
export class AppModulesModule { }
