import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RestApiService } from './rest-api.service';
import { RestApiInterceptorService } from './rest-api-interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: RestApiInterceptorService, multi: true },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RestApiService,
    httpInterceptorProviders,
  ],
})
export class CoreModule { }
