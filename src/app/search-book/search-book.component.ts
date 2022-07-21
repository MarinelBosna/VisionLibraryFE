import { Component, OnInit } from '@angular/core';
import {Book} from "../common/book";
import {BookService} from "../services/book.service";
import { Router } from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  books!: Book[];
  book!: Book;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
      }
    )
  }

  public searchBooks(key: string): void {
    console.log(key);
    const results: Book[] = [];
    for (const employee of this.books) {
      if (employee.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.author.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.category.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.selectedLanguage.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      this.getBooks();
    }
  }


  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe( data => {
      console.log(data);
      this.getBooks();
    })
  }



  updateBook(id: number){
    // @ts-ignore
    this.router.navigate(['/getAllBooks'], id);
  }

}
