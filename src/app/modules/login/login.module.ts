import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { LoginMainView } from './views/main/login.main.view';

const routes: Routes = [
  { path: 'login', 				component: LoginMainView }
];


@NgModule({
  declarations: [
    LoginMainView
  ],
  imports: [
    BrowserModule,
	RouterModule.forChild(routes),
	MdButtonModule, 
	MdCheckboxModule,
	NoopAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [LoginMainView]
})
export class LoginModule { }
