// d3.select("body").append("p").style("color", "red").text("hey whats up!!"); // Method chaining

//SVG =Scaleable Vector Graphics.
// var width = 800;
// var height = 800;
// var canvas = d3
//   .select("body")
//   .append("svg")
//   .attr("width", width)
//   .attr("height", height)
//   .append("g")
//   .attr("transform", "translate(50,20)");

// var circle = canvas //circle
//   .append("circle")
//   .attr("cx", 0)
//   .attr("cy", 520)
//   .attr("r", 50)
//   .attr("fill", "blue");
// circle
//   .transition()
//   .duration(1500)
//   .delay(1500)
//   .attr("cx", 300)
//   .each("end", function () {
//     d3.select(this).attr("fill", "red");
//   });
// circle.transition().duration(3000).delay(3000).attr("cy", 700);
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

// var line = canvas //Line
//   .append("line")
//   .attr("x1", 0)
//   .attr("y1", 190)
//   .attr("x2", 500)
//   .attr("y2", 190)
//   .attr("stroke", "green")
//   .attr("stroke-width", 10);
// //Scale
// //BARS

// var dataArray = [20, 40, 60, 600];
// var widthScale = d3.scaleLinear().domain([0, 60]).range([0, width]);

// var color = d3.scaleLinear().domain([0, 60]).range(["blue", "purple"]);
// var bar = canvas
//   .selectAll("rect")
//   .data(dataArray)
//   .enter()
//   .append("rect")
//   .attr("width", function (d) {
//     return widthScale(d);
//   })
//   .attr("height", 50)
//   .attr("fill", function (d) {
//     return color(d);
//   })
//   .attr("y", function (d, i) {
//     return i * 100;
//   });

// var axisScale = d3.scaleLinear().domain([0, 100]).range([0, 300]);
// var xAxis = d3.axisTop().scale(axisScale); // Using d3.svg.axis() instead of d3.axis()
// canvas.append("g").attr("transform", "translate(50, 400)").call(xAxis);

var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", "500")
  .attr("height", "500");
var circles = [
  {
    cx: 25,
    cy: 25,
    r: 20,
  },
  {
    cx: 75,
    cy: 75,
    r: 30,
  },
  {
    cx: 135,
    cy: 135,
    r: 40,
  },
  {
    cx: 215,
    cy: 215,
    r: 40,
  },
];

var svgCircles = svgContainer
  .selectAll("circle")
  .data(circles)
  .enter()
  .append("circle");

svgCircles
  .attr("cx", function (d, i) {
    return d.cx;
  })
  .attr("cy", function (d, i) {
    return d.cy;
  })
  .attr("r", function (d, i) {
    return d.r;
  });

{
  /* <svg width="100" height="100">
  <line x1="5" y1="5" x2="40" y2="40" stroke="gray" stroke-width="5" />
</svg>; */
}
