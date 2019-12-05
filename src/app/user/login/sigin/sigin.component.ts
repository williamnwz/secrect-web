import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {


  public signInForm : FormGroup;

  public Login : string = "";
  public Password : string = "";

  constructor(private auth: AuthService, public formBuilder : FormBuilder) { }


  public LogIn(){
    this.auth.Authenticate(this.Login,this.Password);
  }
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      login : ['', Validators.required],
      password : ['',Validators.required]
    });
  }

}
