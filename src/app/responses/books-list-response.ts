interface Book {
  title: string;
  isbn: number;
  authors: string[];
  genres: string[];
  publisher: string;
}

export interface BooksList extends Array<Book> {

}
