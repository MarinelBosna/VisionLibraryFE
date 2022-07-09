import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BookListComponent } from './book-list/book-list.component';
import {BookService} from "./services/book.service";
import { Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'books/findByTitle', component: BookListComponent},
  {path: '**', redirectTo: '/books', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    BookListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
