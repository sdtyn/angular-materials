import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datefield-view',
  templateUrl: './datefield.view.html',
  styleUrls: [ './datefield.view.css' ]
})
export class DatefieldView {
   title = 'datefield-view';
   startDate = new Date(1990, 0, 1);
   inputValue = new Date(2000, 4, 2);

   focusOut(event){
      console.log(event);
   }
}
