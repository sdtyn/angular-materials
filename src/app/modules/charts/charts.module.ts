import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { ChartsMainView } from './views/main/charts.main.view';

const routes: Routes = [
  { path: 'charts', 				component: ChartsMainView }
];


@NgModule({
  declarations: [
    ChartsMainView
  ],
  imports: [
    BrowserModule,
	RouterModule.forChild(routes),
	MdButtonModule, 
	MdCheckboxModule,
	NvD3Module,
	NoopAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [ChartsMainView]
})
export class ChartsModule { }
