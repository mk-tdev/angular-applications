import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './feature/app-home/app-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: 'app-forms',
    loadChildren: () => import('./feature/app-forms/app-forms.module').then(m => m.AppFormsModule)
  },
  {
    path: 'app-animations',
    loadChildren: () => import('./feature/app-animations/app-animations.module').then(m => m.AppAnimationsModule)
  },
  {
    path: 'app-subjects',
    loadChildren: () => import('./feature/app-subjects/app-subjects.module').then(m => m.AppSubjectsModule)
  },
  {
    path: 'app-pipes',
    loadChildren: () => import('./feature/app-pipes/app-pipes.module').then(m => m.AppPipesModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
