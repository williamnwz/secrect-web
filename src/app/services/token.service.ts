import { Injectable } from '@angular/core';


const KEY = "token";
@Injectable()
export class TokenService {

  constructor() { }

  public HasToken() : boolean{
    return !!window.localStorage.getItem(KEY);
  }

  public SaveToken(token : string) : void {
    window.localStorage.setItem(KEY,token);
  }

  public RemoveToken(): void {
    window.localStorage.removeItem(KEY);
  }

  public GetToken() : string{
    return  window.localStorage.getItem(KEY);
  }
}
