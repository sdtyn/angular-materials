import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } 		from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { InputView } from './views/input/input.view';


const routes: Routes = [
  { path: 'uielements/input', 			component: InputView }
];


@NgModule({
  declarations: [
    InputView
  ],
  imports: [
    BrowserModule,
	RouterModule.forChild(routes),
	NoopAnimationsModule,
	MaterialModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [InputView]
})
export class UIElementsModule { }
