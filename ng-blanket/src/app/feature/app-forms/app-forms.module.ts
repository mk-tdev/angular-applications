import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsComponent } from './app-forms.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppFormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppFormsComponent,
      }
    ]),
  ]
})
export class AppFormsModule { }
