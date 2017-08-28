import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MaterialModule, 
  MdDatepickerModule, 
  MdNativeDateModule, 
  MdButtonModule,
  MdButtonToggleModule, 
  MdIconModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { InputView } from './views/input/input.view';
import { AutocompleteView } from './views/autocomplete/autocomplete.view';
import { CheckboxView } from './views/checkbox/checkbox.view';
import { RadioView } from './views/radio/radio.view';
//import { DatepickerView } from './views/datepicker/datepicker.view';
import { SelectView } from './views/select/select.view';
import { SliderView } from './views/slider/slider.view';
//import { Datepicker } from './views/datepicker/components/datepicker.component';


const routes: Routes = [
  { path: 'uielements/input', 			component: InputView },
  { path: 'uielements/autocomplete', 	component: AutocompleteView },
  { path: 'uielements/checkbox', 		component: CheckboxView },
  { path: 'uielements/radio', 			component: RadioView },
  //{ path: 'uielements/datepicker', 		component: DatepickerView },
  { path: 'uielements/select', 			component: SelectView },
  { path: 'uielements/slider', 			component: SliderView }
];


@NgModule({
  declarations: [
    InputView,
	  AutocompleteView,
	  CheckboxView,
	  RadioView,
	  SelectView,
    SliderView
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
    MdDatepickerModule,
    MdIconModule
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [
	  InputView,
	  AutocompleteView,
	  CheckboxView,
	  RadioView,
	  SelectView,
    SliderView
  ]
})
export class UIElementsModule { }
