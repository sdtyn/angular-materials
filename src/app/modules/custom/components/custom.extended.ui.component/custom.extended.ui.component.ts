import { Component, Input } from '@angular/core';
import { ExtendedUIComponent, FxField, FxLabel, FxSpan, FxBlock } from 'sdtyn-core/core';


@Component({
  selector: 'custom-extended-ui-component',
  templateUrl: './custom.extended.ui.component.html',
  styleUrls: [ './custom.extended.ui.component.css' ]
})
export class CustomExtendedUIComponent extends ExtendedUIComponent {
   description:string = "this component extended ExtendedUIComponent from core";
}
