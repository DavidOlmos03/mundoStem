import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserBase } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.URL_SERVICIOS +"user"

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  // Obtener todos los usuarios
  getAllUsers(): Observable<UserBase> {
    return this.http.get<UserBase>(this.apiUrl);
  }

  // Obtener usuario por id
  getUserById(id:number = 0):Observable<UserBase>{
    return this.http.get<UserBase>(`${this.apiUrl}/${id}`)
  }



  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
