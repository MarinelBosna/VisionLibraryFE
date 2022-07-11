import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable } from "rxjs";
import { Book } from "../common/book";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl="http://localhost:8080/books";

  constructor(private httpClient: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/all`);
  }

  public addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.baseUrl}/add`, book);
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseUrl}/find/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Object>{
    return this.httpClient.put<Book>(`${this.baseUrl}/update`, book);
  }
}
