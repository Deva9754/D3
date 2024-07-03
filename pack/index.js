var width = 800;
var height = 600;

var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(50,50)");

var pack = d3
  .pack()
  .size([width - 100, height - 100])
  .padding(10);

d3.json("data2.json")
  .then(function (data) {
    var root = d3.hierarchy(data).sum(function (d) {
      return d.value;
    });

    var nodes = pack(root).descendants();

    var node = canvas
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    node
      .append("circle")
      .attr("r", function (d) {
        return d.r;
      })
      .attr("fill", function (d) {
        return d.children ? "#fff" : "steelblue";
      })
      .attr("opacity", 0.5)
      .attr("stroke", function (d) {
        return d.children ? "#FFF" : "#ADADAD";
      })
      .attr("stroke-width", 2);

    node
      .append("text")
      .text(function (d) {
        return d.data.name;
      })
      .attr("text-anchor", "middle")
      .attr("dy", 4) // Adjust this value to position text properly
      .attr("fill", "black")
      .style("font-size", "10px");
  })
  .catch(function (error) {
    console.error("Error loading the data: " + error);
  });
