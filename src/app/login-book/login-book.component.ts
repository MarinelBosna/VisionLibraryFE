import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-login-book',
  templateUrl: './login-book.component.html',
  styleUrls: ['./login-book.component.css']
})
export class LoginBookComponent implements OnInit {

  user:User = new User();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  loginRegister(){
    console.log(this.user);
    this.registerService.loginUser(this.user).subscribe(data=>{
      alert("Successfully User is login?" + data)
    });

    //, error=>alert("User is not register")
  }



}
