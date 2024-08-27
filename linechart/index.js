var callbackError;
var callbackData;

var margin = { top: 20, right: 20, bottom: 30, left: 50 },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var parseDate = d3.timeParse("%d-%b-%y");

var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", function (error, data) {
  if (error) throw error;

  callbackData = data;

  callbackData.forEach(function (d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
  });

  x.domain(
    d3.extent(callbackData, function (d) {
      return d.date;
    })
  );
  y.domain(
    d3.extent(callbackData, function (d) {
      return d.close;
    })
  );

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("price($)");
});
