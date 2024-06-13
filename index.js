// d3.select("body").append("p").style("color", "red").text("hey whats up!!"); // Method chaining

//SVG =Scaleable Vector Graphics.
var width = 800;
var height = 800;
var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(50,20)");

var circle = canvas //circle
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 420)
  .attr("r", 50)
  .attr("fill", "blue");
// var rect = canvas //Rectangle
//   .append("rect")
//   .attr("x", 0)
//   .attr("y", 500)
//   .attr("width", 200)
//   .attr("height", 220)
//   .attr("fill", "purple");
// var square = canvas //Square
//   .append("rect")
//   .attr("x", 400)
//   .attr("y", 420)
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
//Scale
//BARS

var dataArray = [20, 40, 60, 600];
var widthScale = d3.scaleLinear().domain([0, 60]).range([0, width]);

var color = d3.scaleLinear().domain([0, 60]).range(["blue", "purple"]);
var bar = canvas
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", function (d) {
    return widthScale(d);
  })
  .attr("height", 50)
  .attr("fill", function (d) {
    return color(d);
  })
  .attr("y", function (d, i) {
    return i * 100;
  });

var axisScale = d3.scaleLinear().domain([0, 100]).range([0, 300]);
var xAxis = d3.scale().axis().scale(axisScale).ticks(5); // Using d3.svg.axis() instead of d3.axis()
svg.append("g").attr("transform", "translate(50, 400)").call(xAxis);
