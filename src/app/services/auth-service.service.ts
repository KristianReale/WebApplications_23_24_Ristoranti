import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthToken, Utente } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private backendUrl = "http://localhost:8080";
  public token?:string | null;

  getToken(){
    if (this.token == undefined){
      this.token = localStorage.getItem("ristoranti_token");
    }
    return this.token;
  }

  setToken(token:string){
    this.token = token;
    localStorage.setItem("ristoranti_token", token);

  }

  constructor(private http:HttpClient) { }

  login(username:string, password:string){
    var utente:Utente = {"username": username, "password": password};
    this.http.post<AuthToken>(this.backendUrl + "/login",utente)
    .subscribe(response => this.setToken(response.token));
  }
}
