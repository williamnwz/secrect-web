import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  constructor(private authService : AuthService) { }


  public Login(login : string, password : string) {
    this.authService.Authenticate(login,password);
  }
  
  public GetLoggedUser() : User {
    return this.authService.GetAliasInfo();
  }
}
