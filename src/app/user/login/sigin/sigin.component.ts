import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {


  public signInForm : FormGroup;

  constructor(
    private auth: AuthService, 
    public formBuilder : FormBuilder,
    private router : Router) { }


  public LogIn(){

    const login = this.signInForm.get('login').value;
    const password = this.signInForm.get('password').value;
    this.auth.Authenticate(login, password)
    .then(()=>{
      this.router.navigateByUrl('/posts')
    })
  }
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      login : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

}
