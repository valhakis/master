function dynInput(cbox) {
  if (cbox.checked) {

    var input = document.createElement("input");
    input.type = "text";
    input.className = "cbox";

    var div = document.createElement("div");
    div.className = "cbox-div";
    div.id =  cbox.name;
    div.innerHTML = cbox.name;

    div.appendChild(input);

    document.getElementById("insertinputs").appendChild(div);

  } else {
    document.getElementById(cbox.name).remove();
  }
}

var btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  var items = document.querySelectorAll('.cbox');
  var values = [];
  items.forEach(function(item) {
    values.push(item.value);
  });
  console.log(values);
});
