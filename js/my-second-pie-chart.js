var cScale = d3.scale.linear().domain([0, 100]).range([0, 2 * Math.PI]);

data = [[0,50,"#999999"], [50,100,"#000000"]]

var vis = d3.select("#svg_donut");

var arc = d3.svg.arc()
.innerRadius(0)
.outerRadius(100)
.startAngle(function(d){return cScale(d[0]);})
.endAngle(function(d){return cScale(d[1]);});

vis.selectAll("path")
.data(data)
.enter()
.append("path")
.attr("d", arc)
.style("fill", function(d){return d[2];})
.attr("transform", "translate(300,200)");