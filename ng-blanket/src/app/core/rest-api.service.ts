import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:5000/posts').pipe(retry(1), catchError(this.handleError)) as any;
  }

  handleError(error: HttpErrorResponse) {

    console.log('API error: ', error);

    return throwError('Something\'s not right');
  }
}
