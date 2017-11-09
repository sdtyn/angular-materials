import { Component, OnInit } from '@angular/core';

import { Calendar } from '@sdtyn/fx/core';


@Component({
  selector: 'datefield-view',
  templateUrl: './datefield.view.html',
  styleUrls: [ './datefield.view.css' ]
})
export class DatefieldView {
   title = 'datefield-view';
   startDate = new Date(1990, 0, 1);
   inputValue = new Date(2000, 4, 2);

  MONTHS:string = 'month';
  YEARS:string = 'year';
  DAYS:string = "days";

  state:string = this.DAYS;

  public calendar:Calendar;
  public options:any = {year:2018, month:10, day:1};

  constructor() {
      var date = new Date();
      this.createCalendar(date);
  }


   focusOut(event){
      console.log(event);
   }

   refresh()
   {
     var date = new Date(this.options.year, this.options.month, this.options.day);
     this.createCalendar(date);
   }
   

   createCalendar(date:Date)
   {
      this.calendar = new Calendar();
      this.calendar.create(date);
   }

   prev_month()
   {    
      return this.createCalendar(new Date(this.calendar.selectedDate.getFullYear(), this.calendar.selectedDate.getMonth() - 1, 1)); 
   }

   next_month()
   {    
      return this.createCalendar(new Date(this.calendar.selectedDate.getFullYear(), this.calendar.selectedDate.getMonth() + 1, 1)); 
   }

   changeYear(year:number)
   {    
      this.createCalendar(new Date(year, this.calendar.selectedDate.getMonth(), 1)); 
      this.changeState(this.DAYS);
   }

   changeMonth(month:number)
   {    
      this.createCalendar(new Date(this.calendar.selectedDate.getFullYear(), month, 1)); 
      this.changeState(this.DAYS);
   }

   changeDay(day:number)
   {    
      this.createCalendar(new Date(this.calendar.selectedDate.getFullYear(), this.calendar.selectedDate.getMonth(), day)); 
      this.changeState(this.DAYS);
   }

   changeState(state:string)
   {    
      if(state == this.YEARS){
        this.calendar.createYearLists(this.calendar.selectedDate.getFullYear());
       }
       this.state = state;
   }

   changeYearLists(year:number)
   {
    this.state = this.DAYS;
      this.calendar.createYearLists(year);
      this.state = this.YEARS;
   }


}
