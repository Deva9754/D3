var margin = { top: 20, right: 20, bottom: 30, left: 50 },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var parseDate = d3.timeParse("%d-%b-%y");
var formatYear = d3.timeFormat("%Y");

var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom(x).tickSize(0).tickFormat(formatYear).tickPadding(10);

var yAxis = d3.axisLeft(y).tickSize(-width).tickPadding(10);

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = [
  { date: "01-Jan-20", close: 150 },
  { date: "02-Jan-21", close: 200 },
];

data.forEach(function (d) {
  d.date = parseDate(d.date);
  d.close = +d.close;
});

x.domain(
  d3.extent(data, function (d) {
    return d.date;
  })
);
y.domain(
  d3.extent(data, function (d) {
    return d.close;
  })
);

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
  .append("text")
  .attr("x", width / 2)
  .attr("y", margin.bottom - 10)
  .style("text-anchor", "middle")
  .text("Year");

svg
  .append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -margin.left)
  .attr("dy", ".71em")
  .style("text-anchor", "middle")
  .text("Price ($)");

svg.append("path").datum(callbackData).attr("class", "line").attr("d", line);
