import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDirectivesComponent } from './app-directives.component';
import { RouterModule } from '@angular/router';
import { StyleClassDirective } from './style-class.directive';
import { NoOfTimesDirective } from './no-of-times.directive';


@NgModule({
  declarations: [
    AppDirectivesComponent,
    StyleClassDirective,
    NoOfTimesDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppDirectivesComponent,
      }
    ]),
  ]
})
export class AppDirectivesModule { }
