
//Specify size
var width = 700,
    height = 700,
    radius = Math.min(width, height) / 2;

//Specify where colors come from
var color = d3.scale.category20();

//Specify pie chart layout?
var pie = d3.layout.pie()
    .value(function(d) { return d.apples; })
    .sort(null);

//Pie slice generator, I think? Also, arc has to be called arc, I think? Renaming arc broke things.
var arc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(radius - 20);

//Stick the SVG inside the piediv with the previously specified size
var svg = d3.select("#piediv").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//Now grab the data, create a path for each datum, and use the pie slice generator called arc
d3.tsv("/data/data4.tsv", type, function(error, data) {
  
  var path = svg.datum(data).selectAll("path")
      .data(pie)
    .enter().append("path")
      .attr("fill", function(d, i) { return color(i); })
      .attr("d", arc)
      .each(function(d) { this._current = d; }); // store the initial angles

  var text = svg.datum(data).selectAll("text")
      .data(pie)
    .enter().append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text(function(d) { return "label"; });



  d3.selectAll("input")
      .on("change", change);

  var timeout = setTimeout(function() {
    d3.select("input[value=\"oranges\"]").property("checked", true).each(change);
  }, 2000);

  function change() {
    var value = this.value;
    clearTimeout(timeout);
    pie.value(function(d) { return d[value]; }); // change the value function
    path = path.data(pie); // compute the new angles
    path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
    text = text.data(pie); // compute new label positions
    text.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; });
  }
});

function type(d) {
  d.apples = +d.apples || 0;
  d.oranges = +d.oranges || 0;
  return d;
}

// Store the displayed angles in _current.
// Then, interpolate from _current to the new angles.
// During the transition, _current is updated in-place by d3.interpolate.
function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}