import { Component } from '@angular/core';

@Component({
  selector: 'main-view',
  templateUrl: './main.view.html',
  styleUrls: ['./main.view.css']
})
export class MainView {
	title = 'Kitchen Sink';
	fullImagePath = ('assets/logo.png');
}
