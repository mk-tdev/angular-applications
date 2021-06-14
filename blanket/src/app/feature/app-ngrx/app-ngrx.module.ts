import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNgrxComponent } from './app-ngrx.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppNgrxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppNgrxComponent
      }
    ]),
  ]
})
export class AppNgrxModule { }
