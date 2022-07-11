import { Component, OnInit } from '@angular/core';
import {Book} from "../common/book";
import {BookService} from "../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id!: number;
  book: Book = new Book();
  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }


  onSubmit(){
    this.bookService.updateBook(this.id, this.book).subscribe( data =>{
        this.gotoBookList();
      }
      , error => console.log(error));
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
  }

  gotoBookList(){
    this.router.navigate(['/books']);
  }

}
