import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './sigin/sigin.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@NgModule({
  declarations: [SiginComponent],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports : [
    SiginComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
