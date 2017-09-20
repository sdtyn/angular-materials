import { Component, OnInit } from '@angular/core';
import {IMyDrpOptions} from 'mydaterangepicker';
@Component({
  selector: 'mydaterangepicker-view',
  templateUrl: './mydaterangepicker.view.html',
  styleUrls: [ './mydaterangepicker.view.css' ]
})
export class MyDateRangePickerView {
    title = 'mydaterangepicker-view';
   
    private myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

}
