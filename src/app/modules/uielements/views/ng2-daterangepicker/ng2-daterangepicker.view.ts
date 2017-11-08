import { Component, OnInit } from '@angular/core';

import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Component({
  selector: 'ng2-daterangepicker-view',
  templateUrl: './ng2-daterangepicker.view.html',
  styleUrls: [ './ng2-daterangepicker.view.css' ]
})
export class NG2DateRangePickerView {
   title = 'ng2-daterangepicker-view';
   startDate = new Date(1990, 0, 1);
   inputValue = new Date(2000, 4, 2);

    currentMonth:Array<any> = [];


    constructor(private daterangepickerOptions: DaterangepickerConfig) {
        this.daterangepickerOptions.skipCSS = true;
    }

   focusOut(event){
      console.log(event);
   }

   public daterange: any = {};
   
      // see original project for full list of options
      // can also be setup using the config service to apply to multiple pickers
      public options: any = {
          locale: { format: 'YYYY-MM-DD' },
          alwaysShowCalendars: false,
          singleDatePicker: true,
          timePicker: true,
          template : this.getTemplate()

      };

      public getTemplate() {

        var template = '<div class="daterangepicker dropdown-menu">' +
                            '<div class="calendar left">' +
                                '<div class="daterangepicker_input">' +
                                    '<input class="input-mini form-control" type="text" name="" value="" />' +
                                    '<!-- i class="fa fa-calendar glyphicon glyphicon-calendar"></i-->' +
                                    '<div class="calendar-time">' +
                                        '<div></div>' +
                                        '<!--i class="fa fa-clock-o glyphicon glyphicon-time"></i-->' +
                                    '</div>' +
                                '</div>' +
                                '<div class="calendar-table"></div>' +
                            '</div>' +

                            '<div class="calendar right">' +
                                '<div class="daterangepicker_input">' +
                                    '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' +
                                    '<!-- i class="fa fa-calendar glyphicon glyphicon-calendar"></i-->' +
                                    '<div class="calendar-time">' +
                                        '<div></div>' +
                                        '<!-- i class="fa fa-clock-o glyphicon glyphicon-time"></i-->' +
                                    '</div>' +
                                '</div>' +
                                '<div class="calendar-table"></div>' +
                            '</div>' +

                            '<div class="calendar right">' +
                                '<div class="range_inputs">' +
                                    '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                                    '<button class="cancelBtn" type="button"></button>' +
                                '</div>' +
                            '</div>' +

                        '</div>';

        return template;
      }
   
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
