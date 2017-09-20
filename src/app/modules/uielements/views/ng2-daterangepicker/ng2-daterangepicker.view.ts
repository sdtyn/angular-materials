import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-daterangepicker-view',
  templateUrl: './ng2-daterangepicker.view.html',
  styleUrls: [ './ng2-daterangepicker.view.css' ]
})
export class NG2DateRangePickerView {
   title = 'ng2-daterangepicker-view';
   startDate = new Date(1990, 0, 1);
   inputValue = new Date(2000, 4, 2);

   focusOut(event){
      console.log(event);
   }

   public daterange: any = {};
   
      // see original project for full list of options
      // can also be setup using the config service to apply to multiple pickers
      public options: any = {
          locale: { format: 'YYYY-MM-DD' },
          alwaysShowCalendars: false,
      };
   
      public selectedDate(value: any, datepicker?: any) {
          // this is the date the iser selected
          console.log(value);
   
          // any object can be passed to the selected event and it will be passed back here
          datepicker.start = value.start;
          datepicker.end = value.end;
   
          // or manupulat your own internal property
          this.daterange.start = value.start;
          this.daterange.end = value.end;
          this.daterange.label = value.label;
      }
}
