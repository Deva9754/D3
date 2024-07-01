d3.json("data.json")
  .then(function (data) {
    var svgWidth = 500;
    var svgHeight = 500;

    var maxValue = d3.max(data, function (d) {
      return d.age;
    });

    var yScale = d3.scaleLinear().domain([0, maxValue]).range([0, svgHeight]);

    var barWidth = 40;
    var barGap = 10;

    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    var groups = svg
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(" + i * (barWidth + barGap) + ", 0)";
      });

    groups
      .append("rect")
      .attr("width", barWidth)
      .attr("height", function (d) {
        return yScale(d.age);
      })
      .attr("y", function (d) {
        return svgHeight - yScale(d.age);
      })
      .attr("fill", "green");

    groups
      .append("text")
      .attr("fill", "white")
      .attr("transform", function (d) {
        return (
          "translate(" +
          barWidth / 2 +
          "," +
          (svgHeight - yScale(d.age) + yScale(d.age) / 2) +
          ")rotate(-90)"
        );
      })
      .attr("text-anchor", "end")
      .text(function (d) {
        return d.name;
      });
  })
  .catch(function (error) {
    console.error("Error loading the data: " + error);
  });

// ---------------- ARC -----------------

// var canvas1 = d3
//   .select("body")
//   .append("svg")
//   .attr("width", 500)
//   .attr("height", 500);
// var group = canvas1.append("g").attr("transform", "translate(100,100)");
// var r = 100;
// var p = Math.PI * 2;

// var arc = d3
//   .arc()
//   .innerRadius(r - 20)
//   .outerRadius(r)
//   .startAngle(0)
//   .endAngle(p - 1);

// group.append("path").attr("d", arc);

// ---------------------DONUT--------------------

var data = [33, 34, 35];
var r = 300;

var color = d3.scaleOrdinal().range(["red", "blue", "green"]);

var canvas2 = d3
  .select("body")
  .append("svg")
  .attr("width", 1500)
  .attr("height", 1000);

var group = canvas2.append("g").attr("transform", "translate(300,300)");

var arc = d3.arc().innerRadius(200).outerRadius(r);

var pie = d3.pie().value(function (d) {
  return d;
});

var arcs = group
  .selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");

arcs
  .append("path")
  .attr("d", arc)
  .attr("fill", function (d) {
    return color(d.data);
  });
arcs
  .append("text")
  .attr("transform", function (d) {
    return "translate(" + arc.centroid(d) + ")";
  })
  .attr("text-anchor", "middle")
  .attr("font-size", "1.5rem")
  .attr("fill", "white")
  .text(function (d) {
    return d.data;
  });
