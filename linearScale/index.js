var margin = { top: 50, right: 50, bottom: 50, left: 50 },
  width = 300 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

var myScale = d3.scaleLinear().domain([0, 100]).range([0, width]);

var myAxis = d3.axisBottom(myScale);

var mySVG = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var axisGroup = mySVG.append("g").call(myAxis);
