import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSubjectsComponent } from './app-subjects.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppSubjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppSubjectsComponent
      }
    ]),
  ]
})
export class AppSubjectsModule { }
