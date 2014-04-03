
/************************** Display d3 Map **************************/
//Width and height
var w = 960;
var h = 500;

var projection = d3.geo.albersUsa() .translate([w/2, h/2])
                           .scale([1000]);

//Define default path generator
var path = d3.geo.path() 
				 .projection(projection);

//Create SVG element
var svg = d3.select("div.map")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

d3.json("/data/us-states.json", function(json) {

	svg.selectAll("path")
	   .data(json.features)
	   .enter()
	   .append("path")
	   .attr("d", path);

});