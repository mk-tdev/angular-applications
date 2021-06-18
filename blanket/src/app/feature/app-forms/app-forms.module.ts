import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsComponent } from './app-forms.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppSimpleFormComponent } from './app-simple-form/app-simple-form.component';
import { AppNestedFormComponent } from './app-nested-form/app-nested-form.component';
import { AppDynamicFormComponent } from './app-dynamic-form/app-dynamic-form.component';

@NgModule({
  declarations: [
    AppFormsComponent,
    AppSimpleFormComponent,
    AppNestedFormComponent,
    AppDynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppFormsComponent,
        children: [
          {
            path: 'simple-form',
            component: AppSimpleFormComponent,
          },
          {
            path: 'nested-form',
            component: AppNestedFormComponent,
          },
          {
            path: 'dynamic-form',
            component: AppDynamicFormComponent,
          },
          {
            path: '**',
            redirectTo: 'simple-form'
          },
        ]
      },
    ]),

  ]
})
export class AppFormsModule { }
