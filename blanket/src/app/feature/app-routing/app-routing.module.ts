import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingComponent } from './app-routing.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppRoutingComponent
      }
    ]),
  ]
})
export class AppRoutingModule { }
