import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

const API_URL = "http://localhost:58187";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient, 
    private tokenService : TokenService) { 
  }

  public Authenticate(login: string, password: string){
    this.http.post(API_URL + "/v1/users/login",
    {
      Login : login,
      Password : password
    })
    .pipe(tap(res =>{
      // criar o model do responde de login
      const token = res;
      console.log(`User ${login} authenticated with token ${token}`);
      this.tokenService.SaveToken(token.toString());
    }))
  }
}
