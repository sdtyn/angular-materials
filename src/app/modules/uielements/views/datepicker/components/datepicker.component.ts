import { Component, OnInit } from '@angular/core';

import {
  MaterialModule, 
  MdDatepickerModule, 
  MdNativeDateModule, 
  MdButtonModule,
  MdButtonToggleModule,
  MdIconModule
} from '@angular/material';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: [ './datepicker.component.css' ]
})
export class Datepicker extends MdDatepickerModule {
	 title = 'datepicker';
}
