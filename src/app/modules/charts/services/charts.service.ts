import { Injectable } from '@angular/core';  

@Injectable()
export class ChartsService {  



	getConfigurationsForScatterLineChart():Object
	{
		var configurations = {
								options : {
									chart: {
										type: 'scatterChart',
										height: 450,
										color: d3.scale.category10().range(),
										scatter: {
											onlyCircles: false
										},
										showDistX: true,
										showDistY: true,
										tooltipContent: function(key) {
											return '<h3>' + key + '</h3>';
										},
										duration: 350,
										xAxis: {
											axisLabel: 'X Axis',
											tickFormat: function(d){
												return d3.format('.02f')(d);
											}
										},
										yAxis: {
											axisLabel: 'Y Axis',
											tickFormat: function(d){
												return d3.format('.02f')(d);
											},
											axisLabelDistance: 30
										},
										zoom: {
											//NOTE: All attributes below are optional
											enabled: false,
											scaleExtent: [1, 10],
											useFixedDomain: true,
											useNiceScale: false,
											horizontalOff: false,
											verticalOff: false,
											unzoomEventType: 'dblclick.zoom'
										}
									}
								},

								data : this.generateData(4,40)
								
		};
		
		return configurations;
	}
	


	getConfigurationsForDiscreterBarChart(): Object { 
		
		var configurations = {
		
			options : {
					  chart: {
						type: 'discreteBarChart',
						height: 450,
						margin : {
						  top: 20,
						  right: 20,
						  bottom: 50,
						  left: 55
						},
						x: function(d){return d.label;},
						y: function(d){return d.value;},
						showValues: true,
						valueFormat: function(d){
						  return d3.format(',.4f')(d);
						},
						duration: 500,
						xAxis: {
						  axisLabel: 'X Axis'
						},
						yAxis: {
						  axisLabel: 'Y Axis',
						  axisLabelDistance: -10
						}
					  }
					},
					
					
			data : [
					  {
						key: "Cumulative Return",
						values: [
						  {
							"label" : "A" ,
							"value" : -29.765957771107
						  } ,
						  {
							"label" : "B" ,
							"value" : 0
						  } ,
						  {
							"label" : "C" ,
							"value" : 32.807804682612
						  } ,
						  {
							"label" : "D" ,
							"value" : 196.45946739256
						  } ,
						  {
							"label" : "E" ,
							"value" : 0.19434030906893
						  } ,
						  {
							"label" : "F" ,
							"value" : -98.079782601442
						  } ,
						  {
							"label" : "G" ,
							"value" : -13.925743130903
						  } ,
						  {
							"label" : "H" ,
							"value" : -5.1387322875705
						  }
						]
					  }
					]
		};
   
      return configurations; 
	} 
	
	
	 /* Random Data Generator (took from nvd3.org) */
    generateData(groups, points) { //# groups,# points per group
            var data = [],
                shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
                random = d3.random.normal();

            for (var i = 0; i < groups; i++) {
                data.push({
                    key: 'Group ' + i,
                    values: [],
                    slope: Math.random() - .01,
                    intercept: Math.random() - .5
                });

                for (var j = 0; j < points; j++) {
                    data[i].values.push({
                        x: random(),
                        y: random(),
                        size: Math.random(),
                        shape: shapes[j % 6]
                    });
                }
            }
            return data;
        }
	
} 