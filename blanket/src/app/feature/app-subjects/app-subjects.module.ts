import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSubjectsComponent } from './app-subjects.component';
import { RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';
import { BehaviourSubjectsComponent } from './behaviour-subjects/behaviour-subjects.component';
import { ReplaySubjectsComponent } from './replay-subjects/replay-subjects.component';
import { AsyncSubjectsComponent } from './async-subjects/async-subjects.component';


@NgModule({
  declarations: [
    AppSubjectsComponent,
    SubjectsComponent,
    BehaviourSubjectsComponent,
    ReplaySubjectsComponent,
    AsyncSubjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppSubjectsComponent,
        children: [
          {
            path: 'subjects',
            component: SubjectsComponent,
          },
          {
            path: 'behaviour',
            component: BehaviourSubjectsComponent,
          },
          {
            path: 'replay',
            component: ReplaySubjectsComponent,
          },
          {
            path: 'async',
            component: AsyncSubjectsComponent,
          },
          {
            path: '**',
            redirectTo: 'subjects'
          },
        ]
      }
    ]),
  ]
})
export class AppSubjectsModule { }
