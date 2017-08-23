import { Component, Input } from '@angular/core';
import { FormatterUtils } from 'bow-lib/FormatterUtils';
import { UIComponent } from 'sdtyn-core/core';


@Component({
  selector: 'custom-ui-component',
  templateUrl: './custom.ui.component.html',
  styleUrls: [ './custom.ui.component.css' ]
})
export class CustomUIComponent extends UIComponent {
  description:string = "this component extended UIComponent from core"; 
}
