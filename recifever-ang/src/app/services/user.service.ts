import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { LoginModel } from '../models/login.model';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { JsonWebToken } from '../models/token.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'https://localhost:7021'
  headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) { }

  createUser(data: User): Observable<Object> {
    let API_URL = `${this.apiUrl}/api/user`
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  loginUser(data: LoginModel): Observable<JsonWebToken | undefined> {
    return this.http.post<JsonWebToken>(`${this.apiUrl}/login`, data)
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
