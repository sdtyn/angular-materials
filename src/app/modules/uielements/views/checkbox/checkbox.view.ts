import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-view',
  templateUrl: './checkbox.view.html',
  styleUrls: [ './checkbox.view.css' ]
})
export class CheckboxView {
	title = 'checkbox-view';
	checked = false;
	indeterminate = false;
	align = 'start';
	disabled = false;
}
