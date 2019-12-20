import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-components/shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './user/login/login.module';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    AuthService,
    TokenService,
    UserService,
    PostService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
