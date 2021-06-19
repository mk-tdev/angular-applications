import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormsComponent } from './app-forms.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppSimpleFormComponent } from './app-simple-form/app-simple-form.component';
import { AppNestedFormComponent } from './app-nested-form/app-nested-form.component';
import { AppDynamicFormComponent } from './app-dynamic-form/app-dynamic-form.component';
import { ReactiveWayComponent } from './reactive-way/reactive-way.component';
import { TemplateWayComponent } from './template-way/template-way.component';
import { RSimpleFormComponent } from './reactive-way/r-simple-form/r-simple-form.component';
import { RNestedFormComponent } from './reactive-way/r-nested-form/r-nested-form.component';
import { RDynamicFormComponent } from './reactive-way/r-dynamic-form/r-dynamic-form.component';

@NgModule({
  declarations: [
    AppFormsComponent,
    AppSimpleFormComponent,
    AppNestedFormComponent,
    AppDynamicFormComponent,
    ReactiveWayComponent,
    TemplateWayComponent,
    RSimpleFormComponent,
    RNestedFormComponent,
    RDynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppFormsComponent,
        children: [
          {
            path: 'reactive-form',
            component: ReactiveWayComponent,
            children: [
              {
                path: 'simple',
                component: RSimpleFormComponent,
              },
              {
                path: 'nested',
                component: RNestedFormComponent,
              },
              {
                path: 'dynamic',
                component: RDynamicFormComponent,
              },
              {
                path: '**',
                redirectTo: 'nested'
              },
            ]
          },
          {
            path: 'template-form',
            component: TemplateWayComponent,
          },
          {
            path: '**',
            redirectTo: 'reactive-form'
          },
        ]
      },
    ]),

  ]
})
export class AppFormsModule { }
