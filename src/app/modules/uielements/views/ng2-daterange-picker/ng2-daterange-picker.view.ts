import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterange-picker';

@Component({
  selector: 'ng2-daterange-picker-view',
  templateUrl: './ng2-daterange-picker.view.html',
  styleUrls: [ './ng2-daterange-picker.view.css' ],
  entryComponents: [DaterangePickerComponent],
})
export class NG2DateRangePicker2View {
   title = 'ng2-daterangepicker-view';
   startDate = new Date(1990, 0, 1);
   inputValue = new Date(2000, 4, 2);

   @ViewChild('daterangePicker', { read: ViewContainerRef }) daterangePickerParentViewContainer: ViewContainerRef;
   
     constructor(private componentFactory: ComponentFactoryResolver) { }
   
     showDaterangePickerSelector() {
       let daterangePickerComponentFactory = this.componentFactory.resolveComponentFactory(DaterangePickerComponent);
       let daterangePickerComponent: DaterangePickerComponent = DaterangePickerComponent.initWithData(this.daterangePickerParentViewContainer, daterangePickerComponentFactory);
   
       daterangePickerComponent.onSelectedDaterange.subscribe(
             data => {
                       this.showSelectedDaterange(data.startDate, data.endDate);
             }
       );
     }
   
     showSelectedDaterange(startDate: Date, endDate: Date) {
       console.log(startDate);
       console.log(endDate);
     }
}
