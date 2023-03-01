import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { BooksList } from './responses/books-list-response';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books: BooksList = [];
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.booksService.getBooks().subscribe({
      next: (data) => {
        console.log(data);

        this.books = data;
      }
    })
  }

}
