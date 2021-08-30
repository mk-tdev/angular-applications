import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPipesComponent } from './app-pipes.component';
import { RouterModule } from '@angular/router';
import { ToKmPipe } from './to-km.pipe';



@NgModule({
  declarations: [
    AppPipesComponent,
    ToKmPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppPipesComponent,
      }
    ]),
  ]
})
export class AppPipesModule { }
