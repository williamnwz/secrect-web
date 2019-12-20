import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private authService : AuthService,
    private tokenService : TokenService) { }


  public Login(login : string, password : string) {
    this.authService.Authenticate(login,password);
  }
  
  public GetLoggedUser() : User {
    return this.authService.GetAliasInfo();
  }

  public GetAuth(){
    return  {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenService.GetToken()
      })
    }
  }
}
