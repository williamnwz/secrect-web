import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { User } from '../models/user.model';
const API_URL = "http://localhost:58187";


@Injectable()
export class AuthService {

  constructor(
    private http : HttpClient, 
    private tokenService : TokenService) { 
  }

  public GetAliasInfo()  : User{
    const user = new User();
    user.Alias = window.localStorage.getItem("alias");
    user.Color = window.localStorage.getItem("color");
    user.Id = window.localStorage.getItem("id");
    return user;
  }

  public Authenticate(login: string, password: string) : any { 
    return this.http.post(API_URL + "/v1/users/login",
    {
      Login : login,
      Password : password
    })
    .pipe(tap((res : any) => {
      this.tokenService.SaveToken(res.token);
    }))
    .pipe(tap((res : any) => {

      const color = "#" +Math.floor(Math.random()*4096).toString(16);
      window.localStorage.setItem("alias",res.loginAlias);
      window.localStorage.setItem("color", color);
      window.localStorage.setItem("id", res.id);
     
    })).toPromise();


  }
}
