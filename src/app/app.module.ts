import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BookListComponent } from './book-list/book-list.component';
import {BookService} from "./services/book.service";
import { CreateBookComponent } from './create-book/create-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { LoginBookComponent } from './login-book/login-book.component';


@NgModule({
  declarations: [
    CreateBookComponent,
    AppComponent,
    RegisterUserComponent,
    BookListComponent,
    SearchBookComponent,
    LoginBookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
