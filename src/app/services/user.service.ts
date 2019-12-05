import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  constructor() { }


  public GetLoggedUser() : User {
    let user = new User();
    return user;
  }
}
