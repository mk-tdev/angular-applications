import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAnimationsComponent } from './app-animations.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppAnimationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppAnimationsComponent
      }
    ]),
  ]
})
export class AppAnimationsModule { }
