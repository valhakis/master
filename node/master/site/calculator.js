function Calculator(id) {
  // the container element
  var xContainer = document.getElementById(id);

  // the display element within container
  var xDisplay = document.createElement('div');

  var elements = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '.', '0', '=', '/',
    'del', 'clear', 
  ];

  // each button 'element' has click callback
  var click = function(event) {
    event.preventDefault();
    var value = this.innerText;

    if (value == '=') {
      // set display text to eval value 'some built in string calculation thing'
      xDisplay.innerText = eval(xDisplay.innerText); // jshint ignore:line
    } else if (value == 'del') {
      // remove the last character from display innerText string
      xDisplay.innerText = xDisplay.innerText.slice(0, -1);
    } else if (value == 'clear') {
      // set display innerText to empty string
      xDisplay.innerText = '';
    } else {
      // append the current button innerText to display innerText 
      xDisplay.innerText += value;
    }
  };

  // add display div to the container
  xContainer.appendChild(xDisplay);

  // for each element in elements
  var xRow;
  elements.forEach(function(element, index) {
    // create row after every 4th element
    if (index % 4 === 0) {
      xRow = document.createElement('div');
      // append row to container
      xContainer.appendChild(xRow);
    }
    var xElement = document.createElement('button');
    // set the 'button' innerText to the element
    xElement.innerText = element;
    xRow.appendChild(xElement);
    // set the click callback to each element
    xElement.addEventListener('click', click);
  });
}

var calc = new Calculator('calc1');
