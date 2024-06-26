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
