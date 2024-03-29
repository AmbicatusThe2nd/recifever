import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError  } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiUrl: string = 'https://localhost:7021/api'
  headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }

  createRecipe(data: Recipe): Observable<Object> {
    let API_URL = `${this.apiUrl}/Recipe`
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/Recipe`)
  }

  getSpecificRecipe(id: string | null): Observable<Recipe | undefined> {
    return this.http.get<Recipe>(`${this.apiUrl}/Recipe/${id}`)
  }

  uploadFiles(files: FormData): Observable<any> {
    return this.http.post('https://localhost:7021/upload', files)
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
