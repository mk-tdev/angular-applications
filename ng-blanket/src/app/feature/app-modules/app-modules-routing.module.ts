import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModulesHomeComponent } from './app-modules-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppModulesHomeComponent,
    children: [
      {
        path: 'elements',
        loadChildren: () => import('../../apps/elements/elements.module').then(m => m.ElementsModule)
      },
      {
        path: 'collections',
        loadChildren: () => import('../../apps/collections/collections.module').then(m => m.CollectionsModule)
      },
      {
        path: 'mods',
        loadChildren: () => import('../../apps/mods/mods.module').then(m => m.ModsModule)
      },
      {
        path: 'views',
        loadChildren: () => import('../../apps/views/views.module').then(m => m.ViewsModule)
      },
      {
        path: '**',
        redirectTo: 'elements'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppModulesRoutingModule { }
