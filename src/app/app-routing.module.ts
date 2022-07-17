import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBookComponent} from "./create-book/create-book.component";
import {LoginBookComponent} from "./login-book/login-book.component";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {SearchBookComponent} from "./search-book/search-book.component";

const routes: Routes = [
  {path: 'books', component: CreateBookComponent},
  {path: 'login', component: LoginBookComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'getAllBooks', component: SearchBookComponent},
  {path: 'addBook', component: CreateBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
