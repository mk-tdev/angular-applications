import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './app-home.component';



@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AppHomeComponent]
})
export class AppHomeModule { }
