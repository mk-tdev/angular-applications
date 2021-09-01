import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDirectivesComponent } from './app-directives.component';
import { RouterModule } from '@angular/router';
import { StyleClassDirective } from './style-class.directive';


@NgModule({
  declarations: [
    AppDirectivesComponent,
    StyleClassDirective
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
