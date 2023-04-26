import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any|FormGroup;

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      customerName: new FormControl('', Validators.required),
      customerPassword: new FormControl('', Validators.required)
    });
  }

  responsedata:any;
  loginCustomer() {
    this.login.loginUser(this.loginForm.value).subscribe( response=>{

      console.log(response);
      this.responsedata=response;
      localStorage.setItem("jwt", this.responsedata.Token);
      console.log(localStorage.getItem("jwt"));

    }, error=> alert(error))
    this.loginForm.reset();

  }

}
