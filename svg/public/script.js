(function() {
  var svg = document.querySelector("#svg");
  var circle = svg.querySelector("circle");
  circle.setAttribute("r", 80);
  circle.setAttribute("cx", 480);
  circle.setAttribute("cy", 85);

  var NS = "http://www.w3.org/2000/svg";
  var circle = document.createElementNS(NS, "circle");
  circle.setAttribute("cx", 100);
  circle.setAttribute("cy", 300);
  circle.setAttribute("r", 80);
  circle.setAttribute("stroke", "#000");
  circle.setAttribute("stroke-width", 2);
  circle.setAttribute("fill", "#666");
  svg.appendChild(circle);

  for (var i=0; i<10; i++) {
    var circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", (i+1) * 30);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 10);
    circle.setAttribute("stroke", "#000");
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "#666");
    svg.appendChild(circle);
  }
})();
