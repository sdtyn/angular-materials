import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let d3: any;

import { ChartsService } from '../../services/charts.service';  


@Component({
  selector: 'charts-main-view',
  templateUrl: './charts.main.view.html',
  styleUrls: [ '../../../../../../node_modules/nvd3/build/nv.d3.css' ],
  encapsulation: ViewEncapsulation.None,
  providers: [ChartsService] 
})
export class ChartsMainView implements OnInit {
	title = 'charts-main-view';
	options;
	configurations;
  
	constructor(private chartsService: ChartsService) { }  
  
	ngOnInit() {  
		this.configurations = this.chartsService.getDiscreterBarChart();  
	}
}
