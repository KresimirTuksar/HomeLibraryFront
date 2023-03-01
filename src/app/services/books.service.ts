import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { BooksList } from '../responses/books-list-response';
import { environment } from 'src/environments/environment';

var baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BooksList>{
    return this.http.get(baseUrl + "api/Books/getAllbooks") as Observable<BooksList>
  }
}
