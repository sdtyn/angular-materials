import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { FormsMainView } from './views/main/forms.main.view';

const routes: Routes = [
  { path: 'forms', 				component: FormsMainView }
];


@NgModule({
  declarations: [
    FormsMainView
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    MdButtonModule, 
    MdCheckboxModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [FormsMainView]
})
export class MyFormsModule { }
