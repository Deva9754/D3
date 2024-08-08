// Set up the margins and dimensions
var margin = { top: 50, right: 50, bottom: 50, left: 50 },
  width = 300 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

// Create a linear scale
var myScale = d3.scaleLinear().domain([0, 100]).range([0, width]);

// Create the SVG container
var mySVG = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create and append the bottom axis
var bottomAxis = d3.axisBottom(myScale);
mySVG
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(bottomAxis);

// Create and append the top axis
var topAxis = d3.axisTop(myScale);
mySVG.append("g").call(topAxis);

// Create and append the left axis
var leftAxis = d3.axisLeft(myScale);
mySVG.append("g").call(leftAxis);

// Create and append the right axis
var rightAxis = d3.axisRight(myScale);
mySVG
  .append("g")
  .attr("transform", "translate(" + width + ",0)")
  .call(rightAxis);
