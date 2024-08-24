// dataSet = [
//   { name: "Devashish", population: 18, rank: 1 },
//   { name: "Prathmesh", population: 11, rank: 10 },
//   { name: "Nitin", population: 8, rank: 20 },
//   { name: "Sakina", population: 7, rank: 30 },
//   { name: "Bengali", population: 5, rank: 40 },
//   { name: "Audi", population: 4, rank: 50 },
// ];

// var svgViewport = d3
//   .select("body")
//   .append("svg")
//   .attr("width", 370)
//   .attr("height", 300);

// var margin = { top: 50, right: 50, bottom: 50, left: 50 },
//   width = 370 - margin.left - margin.right,
//   height = 300 - margin.top - margin.bottom;

// var innerSpace = svgViewport
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// var xAxisScale = d3.scaleLinear().domain([0, 20]).range([0, width]);

// var yAxisScale = d3.scaleLinear().domain([0, 50]).range([height, 0]);

// var circles = innerSpace
//   .append("g")
//   .selectAll("circle")
//   .data(dataSet)
//   .enter()
//   .append("circle");

// var circleAttributes = circles
//   .attr("cx", function (d) {
//     return xAxisScale(d.population);
//   })
//   .attr("cy", function (d) {
//     return yAxisScale(d.rank);
//   })
//   .attr("r", 5);

// var myXAxis = d3.axisBottom(xAxisScale);
// var myYAxis = d3.axisLeft(yAxisScale);

// var axisXGroup = innerSpace
//   .append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(myXAxis);
// var axisYGroup = innerSpace.append("g").call(myYAxis);

// var text = innerSpace
//   .append("g")
//   .selectAll("text")
//   .data(dataSet)
//   .enter()
//   .append("text");

// var textAttributes = text
//   .attr("x", function (d) {
//     return xAxisScale(d.population) + 8;
//   })
//   .attr("y", function (d) {
//     return yAxisScale(d.rank) - 2;
//   })
//   .text(function (d) {
//     return d.name;
//   })
//   .style("fill", "Green")
//   .style("font-weight", "bold")
//   .style("font-size", "16px");
