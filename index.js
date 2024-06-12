// d3.select("body").append("p").style("color", "red").text("hey whats up!!"); // Method chaining

//SVG =Scaleable Vector Graphics.
// var width = 500;
// var height = 500;
var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 700)
  .attr("height", 700);

var circle = canvas //circle
  .append("circle")
  .attr("cx", 500)
  .attr("cy", 500)
  .attr("r", 50)
  .attr("fill", "blue");
// var rect = canvas //Rectangle
//   .append("rect")
//   .attr("x", 0)
//   .attr("y", 600)
//   .attr("width", 200)
//   .attr("height", 220)
//   .attr("fill", "purple");
// var square = canvas //Square
//   .append("rect")
//   .attr("x", 300)
//   .attr("y", 300)
//   .attr("width", 200)
//   .attr("height", 200)
//   .attr("fill", "black");

var line = canvas //Line
  .append("line")
  .attr("x1", 0)
  .attr("y1", 190)
  .attr("x2", 500)
  .attr("y2", 190)
  .attr("stroke", "green")
  .attr("stroke-width", 10);

//BARS

var dataArray = [20, 40, 60, 600];
// var widthScale = d3.scaleLinear().domain([0, 60]).range([0, width]);

var color = d3.scaleLinear().domain([0, 60]).range(["blue", "purple"]);
var bar = canvas
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", function (d) {
    return d * 10;
  })
  .attr("height", 50)
  .attr("fill", function (d) {
    return color(d);
  })
  .attr("y", function (d, i) {
    return i * 100;
  });
