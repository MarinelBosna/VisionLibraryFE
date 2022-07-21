import { Component, OnInit } from '@angular/core';
import {Book} from "../common/book";
import {Router} from "@angular/router";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.book.selectedLanguage = this.book.language[0];
    console.log(this.book.selectedLanguage);
  }

  saveBook(){
    let book: any = {...this.book};
    book.language = book.selectedLanguage.label;
    delete book.selectedLanguage;
    this.bookService.addBook(book).subscribe( data =>{
        console.log(data);
        this.goToBookList();
      },
      error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/getAllBooks']);
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }

}
