import { Component, OnInit } from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private apiUrl='http://localhost:59466/api/login/?userName=rahul&pwd=1234567';
  data:any={};
  constructor( private http:Http) { }

  ngOnInit() {
  }

  userNameValue:string;
  PassWord:string;
 

  LoginEvent(event)
  {
    console.log(this.userNameValue);
    console.log(this.PassWord);
    this.getAuthenticate();
 
  }

  getData()
  {
    return this.http.get(this.apiUrl)
              .map((res:Response)=>res.json())
  }

  getAuthenticate()
  {
    this.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }

}
