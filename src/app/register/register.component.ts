import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Name:string;
  UserName:string;
  Email:string;
  Password:string;
  Gender:string;

  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
    hide = true;

    Register(event){
      console.log(this.Name);
      console.log(this.Email)
      console.log(this.UserName);
      console.log(this.Password);
      
    }

}
