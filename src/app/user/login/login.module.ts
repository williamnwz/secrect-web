import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './sigin/sigin.component';

@NgModule({
  declarations: [SiginComponent],
  imports: [
    CommonModule
  ],
  exports : [
    SiginComponent
  ]
})
export class LoginModule { }
