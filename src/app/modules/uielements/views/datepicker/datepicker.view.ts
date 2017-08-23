import { Component, OnInit } from '@angular/core';

import {
  MaterialModule, 
  MdDatepickerModule, 
  MdNativeDateModule, 
  MdButtonModule,
  MdButtonToggleModule, 
} from '@angular/material';

@Component({
  selector: 'datepicker-view',
  templateUrl: './datepicker.view.html',
  styleUrls: [ './datepicker.view.css' ]
})
export class DatepickerView {
	 title = 'datepicker-view';
}
