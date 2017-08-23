import { Component, Input } from '@angular/core';
import { FormatterUtils } from 'bow-lib/FormatterUtils';
import { ExtendedUIComponent } from 'sdtyn-core/core';


@Component({
  selector: 'custom-extended-ui-component',
  templateUrl: './custom.extended.ui.component.html',
  styleUrls: [ './custom.extended.ui.component.css' ]
})
export class CustomExtendedUIComponent extends ExtendedUIComponent {
   description:string = "this component extended ExtendedUIComponent from core";
}
