import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {RegisterService} from "../register.service";
import {Login} from "../login";

@Component({
  selector: 'app-login-book',
  templateUrl: './login-book.component.html',
  styleUrls: ['./login-book.component.css']
})
export class LoginBookComponent implements OnInit {

  login:Login = new Login();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  loginRegister(){
    console.log(this.login);
    this.registerService.loginUser(this.login).subscribe(data=>{
      alert("Successfully User is login?" + data)
    });

    //, error=>alert("User is not register")
  }



}
