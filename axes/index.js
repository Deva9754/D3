var margin = { top: 50, right: 50, bottom: 50, left: 50 },
  width = 300 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

var xScale = d3.scaleLinear().domain([0, 10]).range([0, width]);
var yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);

var xAxis = d3.axisTop(xScale);
var yAxis = d3.axisLeft(yScale);

var mySVG = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

mySVG.append("g").call(xAxis);

mySVG.append("g").attr("transform", "translate(0,0)").call(yAxis);
