import { Component, Input } from '@angular/core';
import { UIComponent } from '@sdtyn/fx/core';


@Component({
  selector: 'custom-ui-component',
  templateUrl: './custom.ui.component.html',
  styleUrls: [ './custom.ui.component.css' ]
})
export class CustomUIComponent extends UIComponent {
  description:string = "this component extended UIComponent from core"; 
}
