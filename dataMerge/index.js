// dataSet = [
//   { name: "Shanghai", population: 18, rank: 1 },
//   { name: "Devashish", population: 11, rank: 10 },
//   { name: "Nititn", population: 10, rank: 20 },
//   { name: "Prathmesh", population: 8, rank: 30 },
//   { name: "Nishchnt", population: 6, rank: 40 },
//   { name: "Peter", population: 4, rank: 50 },
// ];

var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", "250")
  .attr("height", "200");

var circles = svgContainer
  .selectAll("circle")
  .data(dataSet)
  .enter()
  .append("circle");

circles
  .attr("cx", function (d, i) {
    return (i + 1) * 25;
  })
  .attr("cy", function (d, i) {
    return (i + 1) * 25;
  })
  .attr("r", function (d, i) {
    return d.population;
  });
circles.style("fill", "purple");

var circleLabels = svgContainer
  .selectAll("text")
  .data(dataSet)
  .enter()
  .append("text");

circleLabels
  .attr("x", function (d, i) {
    return (i + 1) * 25;
  })

  .attr("y", function (d, i) {
    return (i + 1) * 25;
  });

circleLabels.text(function (d, i) {
  return d.name;
});

circleLabels.style("fill", "blue");

// circleLabels.text(function (d, i) {
//   return d.rank;
// });
circleLabels.text(function (d, i) {
  return "Rank:" + d.rank + " " + d.name;
});
