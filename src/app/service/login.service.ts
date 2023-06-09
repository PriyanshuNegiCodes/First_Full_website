import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) {}

  baseUrl:string ="http://localhost:5555/api/customer/v1/";

  loginUser(loginData:any){
    return this.httpClient.post(this.baseUrl+"login", loginData);
  }
}