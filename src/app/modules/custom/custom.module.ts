import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomUIComponent } from './components/custom.ui.component/custom.ui.component';
import { CustomExtendedUIComponent } from './components/custom.extended.ui.component/custom.extended.ui.component';

import { FxField, FxLabel, FxSpan, FxBlock } from '@sdtyn/fx/core';

import {
  MaterialModule, 
  MdDatepickerModule, 
  MdNativeDateModule, 
  MdButtonModule,
  MdButtonToggleModule, 
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { CustomMainView } from './views/main/custom.main.view';


const routes: Routes = [
  { path: 'custom', 			component: CustomMainView }
];


@NgModule({
  declarations: [
    CustomMainView,
    CustomUIComponent,
    CustomExtendedUIComponent,
    FxLabel,
    FxField,
    FxSpan,
    FxBlock
  ],
  imports: [
    BrowserModule,
  	RouterModule.forChild(routes),
  	NoopAnimationsModule,
  	FormsModule,
  	ReactiveFormsModule,
  	MaterialModule, 
    MdButtonModule,
    MdButtonToggleModule, 
  	MdNativeDateModule,
    MdDatepickerModule
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [
	  CustomMainView  
  ]
})
export class CustomModule { }
