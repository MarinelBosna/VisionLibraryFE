import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:8080/api/v1/registration";
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<any>{
        console.log(user);
        const responseOptions : Object = {
          responseType: "text"
        }
        return this.httpClient.post<any>(`${this.baseUrl}`, user, responseOptions);
  }

}
