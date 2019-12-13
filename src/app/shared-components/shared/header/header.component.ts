import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public IsLogged : boolean;
  public User : User;

  constructor(private userService : UserService, private tockenSer : AuthService) {

  }

  ngOnInit() {
    let user = this.userService.GetLoggedUser();
    this.IsLogged = !!user.Id;
    this.User = user;
  }

}
