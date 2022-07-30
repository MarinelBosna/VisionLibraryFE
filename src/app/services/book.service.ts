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

  public getBooks(pageIndex: number,pageSize: number): Observable<any> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/all?page=${pageIndex}&size=${pageSize}`);
  }

  public addBook(formData: any): Observable<Book> {
    return this.httpClient.post<Book>(`${this.baseUrl}/add`, formData);
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseUrl}/find/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update`, book);
  }

  deleteBook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  getBooksByLanguages(pageIndex: number,pageSize: number,language: string): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/findByLanguages?page=${pageIndex}&size=${pageSize}&language=${language}`);
  }

}
