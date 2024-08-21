var margin = { top: 50, right: 50, bottom: 50, left: 50 },
  width = 300 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

var myScale = d3.scaleLinear().domain([0, 10]).range([0, width]);

var myXAxis = d3.axisBottom(myScale);
var myYAxis = d3.axisLeft(myScale);

var mySvg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

var innerSpace = mySvg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var axisXGroup = innerSpace
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(myXAxis);

var axisYGroup = innerSpace.append("g").attr("class", "y axis").call(myYAxis);

axisXGroup
  .selectAll(".tick text")
  .attr("dy", "0.8em")
  .style("text-anchor", "middle");

axisYGroup
  .selectAll(".tick text")
  .attr("dx", "-0.8em")
  .style("text-anchor", "end");

var myDataPoint = [{ x: 5, y: 5 }];

var circle = innerSpace
  .selectAll("circle")
  .data(myDataPoint)
  .enter()
  .append("circle");

var circleAttributes = circle
  .attr("cx", function (d, i) {
    return myScale(d.x);
  })
  .attr("cy", function (d, i) {
    return myScale(d.y);
  })
  .attr("r", 10);
