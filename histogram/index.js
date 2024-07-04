d3.csv("data.csv")
  .then(function (data) {
    var ages = data.map(function (d) {
      return parseInt(d.age);
    });

    var histogram = d3.bin().thresholds(12)(ages);

    var maxFrequency = d3.max(histogram, function (d) {
      return d.length;
    });

    var canvasWidth = 800;
    var canvasHeight = 400;
    var margin = { top: 20, right: 20, bottom: 30, left: 40 };
    var width = canvasWidth - margin.left - margin.right;
    var height = canvasHeight - margin.top - margin.bottom;

    var yScale = d3.scaleLinear().domain([0, maxFrequency]).range([height, 0]);

    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var barWidth = width / histogram.length;

    var bars = svg
      .selectAll(".bar")
      .data(histogram)
      .enter()
      .append("g")
      .attr("class", "bar")
      .attr("transform", function (d, i) {
        return "translate(" + i * barWidth + ", 0)";
      });

    bars
      .append("rect")
      .attr("x", 1)
      .attr("width", barWidth - 2)
      .attr("height", function (d) {
        return height - yScale(d.length);
      })
      .attr("fill", "steelblue");

    bars
      .append("text")
      .attr("x", barWidth / 2)
      .attr("y", function (d) {
        return height - yScale(d.length) + 15;
      })
      .attr("dy", ".75em")
      .text(function (d) {
        return d.length;
      });

    var yAxis = d3.axisLeft().scale(yScale);
  })
  .catch(function (error) {
    console.error("Error loading CSV file:", error);
  });
