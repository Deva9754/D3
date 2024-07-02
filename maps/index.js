var svgWidth = 900;
var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", 700)
  .append("g")
  .attr("transform", "translate(" + (svgWidth * 0.1 + 50) + "," + 50 + ")"); // Shifted 10% right

var tree = d3.cluster().size([500, 400]);

d3.json("data.json")
  .then(function (data) {
    console.log("Data loaded successfully:", data);

    var root = d3.hierarchy(data);
    var nodes = tree(root);
    var links = nodes.links();

    var node = canvas
      .selectAll(".node")
      .data(nodes.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    node.append("circle").attr("r", 5).attr("fill", "steelblue");

    node
      .append("text")
      .attr("dy", "1.35em")
      .attr("x", function (d) {
        return d.children ? -13 : 13;
      })
      .style("text-anchor", function (d) {
        return d.children ? "end" : "start";
      })
      .text(function (d) {
        return d.data.name;
      });

    canvas
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#ADADAD")
      .attr("d", function (d) {
        return (
          "M" +
          d.source.y +
          "," +
          d.source.x +
          "C" +
          (d.source.y + d.target.y) / 2 +
          "," +
          d.source.x +
          " " +
          (d.source.y + d.target.y) / 2 +
          "," +
          d.target.x +
          " " +
          d.target.y +
          "," +
          d.target.x
        );
      });
  })
  .catch(function (error) {
    console.error("Error loading data:", error);
  });
