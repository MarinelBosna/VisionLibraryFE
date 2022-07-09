import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {Book} from "../common/book";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Book[];
  book!: Book;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  saveBook(){
    this.bookService.addBook(this.book).subscribe( data =>{
        console.log(data);
        //this.getBooks();
      },
      error => console.log(error));
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
        || employee.language.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      this.getBooks();
    }
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }


}
