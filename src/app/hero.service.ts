import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Tasks } from './search/tasks';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroUrl = 'http://demo1268607.mockable.io/tasks';
  constructor(private http: HttpClient) { }

    getTask(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>('http://demo1268607.mockable.io/tasks').pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(errMsg);
  }
}
