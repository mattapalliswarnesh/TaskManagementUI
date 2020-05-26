import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { tassks } from './search/tasks';
import {FormGroup,Formcontrol,validations} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroUrl = 'http://demo1268607.mockable.io/tasks';
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new Formcontrol(null),
    taskDescription: new Formcontrol('',Validators.required),
    taskType: new Formcontrol(''),
    createddate: new Formcontrol(''),
    dueDate: new Formcontrol(''),
    status: new Formcontrol('')
  });

    /* getTask(): Observable<tassks[]> {
    return this.http.get<tassks[]>('http://demo1268607.mockable.io/tasks').pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
    }

    () addTask(task: tassks): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3020/addBook', task, { headers: options }).pipe(
      catchError(this.handleError));
    }

    updateTask(task: tassks): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>('http://localhost:3020/update', task, { headers: options }).pipe(
      tap(_ => console.log(`updated hero id=${task._id}`)),
      catchError(this.handleError)
    );
    }

    deleteTask(_Id: number) {
    const url = `${this.heroUrl}/${_Id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError));
    } */

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
