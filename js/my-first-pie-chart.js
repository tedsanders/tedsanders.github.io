    var sampleSVG = d3.select("#viz")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);    

    sampleSVG.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 240)
        .attr("cx", 250)
        .attr("cy", 250)