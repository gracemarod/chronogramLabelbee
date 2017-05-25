// ###########################################################
// Chronogram
var vis;
var g_xRange = undefined,
    g_xZoom = undefined;

    
 function drawChrono() {
// Make rectangle
    var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        },
    vis = d3.select("#svgVisualize")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .call(zoom);
}