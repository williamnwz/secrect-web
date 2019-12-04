import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UnloggedContainerComponent } from './unlogged-container/unlogged-container.component';
import { LoginModule } from 'src/app/user/login/login.module';
import { LoggedContainerComponent } from './logged-container/logged-container.component';
import { PostsModule } from 'src/app/posts/posts.module';



@NgModule({
  declarations: [
    HeaderComponent, 
    UnloggedContainerComponent, LoggedContainerComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    PostsModule
  ],
  exports : [
    HeaderComponent,
    UnloggedContainerComponent,
    PostsModule
  ]
})
export class SharedModule { }
