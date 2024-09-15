import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookBase, BookCreate } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl: string = environment.URL_SERVICIOS +"book"

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  // Obtener todos los usuarios
  getAllBooks(): Observable<BookBase> {
    return this.http.get<BookBase>(this.apiUrl);
  }

  // Obtener usuario por id
  getBookById(id:number = 0):Observable<BookBase>{
    return this.http.get<BookBase>(`${this.apiUrl}/${id}`)
  }

  // Obtener libros por subjet y topic
  getBooksBySubjectAndTopic(subject: number = 1, topic:number = 1){
    return this.http.get<any[]>(`${this.apiUrl}/${subject}/${topic}`)
  }

  addBook(book:BookCreate):Observable<BookCreate>{
    return this.http.post<BookCreate>(this.apiUrl, book)
  }
}
