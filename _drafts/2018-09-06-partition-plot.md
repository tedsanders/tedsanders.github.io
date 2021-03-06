---
layout: default
description: Partition plot
title: Partition plot
subtitle:
categories: graphs
#javascript: d3
---

<style>

.node rect {
  fill: #ddd;
}

.node text {
  font: 10px sans-serif;
}

.node tspan:last-child {
  font-size: 9px;
  fill-opacity: 0.8;
}

.node--internal text {
  font-weight: bold;
}

.node--leaf rect {
  fill-opacity: 0.6;
}

</style>
<svg width="960" height="4980"></svg>

<script src="https://d3js.org/d3.v4.min.js"></script>
<script src='{{ site.url }}/js/partition-plot.js'> </script>

<script>
var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var stratify = d3.stratify()
  .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var partition = d3.partition()
  .size([height, width])
  .padding(1)
  .round(true);

d3.csv("{{ site.url }}/data/flare.csv", function(error, data) {
if (error) throw error;

var root = stratify(data)
    .sum(function(d) { return d.value; })
    .sort(function(a, b) { return b.height - a.height || b.value - a.value; });

partition(root);

var cell = svg
  .selectAll(".node")
  .data(root.descendants())
  .enter().append("g")
    .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { return "translate(" + d.y0 + "," + d.x0 + ")"; });

cell.append("rect")
    .attr("id", function(d) { return "rect-" + d.id; })
    .attr("width", function(d) { return d.y1 - d.y0; })
    .attr("height", function(d) { return d.x1 - d.x0; })
  .filter(function(d) { return !d.children; })
    .style("fill", function(d) { while (d.depth > 1) d = d.parent; return color(d.id); });

cell.append("clipPath")
    .attr("id", function(d) { return "clip-" + d.id; })
  .append("use")
    .attr("xlink:href", function(d) { return "#rect-" + d.id + ""; });

cell.append("text")
    .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
    .attr("x", 4)
  .selectAll("tspan")
    .data(function(d) { return [d.id.substring(d.id.lastIndexOf(".") + 1), " " + format(d.value)]; })
  .enter().append("tspan")
    .attr("y", 13)
    .text(function(d) { return d; });

cell.append("title")
    .text(function(d) { return d.id + "\n" + format(d.value); });
});

</script>
