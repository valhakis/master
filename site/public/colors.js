(function() {

  var colors = [
    {
      name: 'darkmagenta',
      value: 'darkmagenta',
      text: '#fff',
    },
    {
      name: 'brown',
      value: 'brown',
      text: '#fff',
    },
    {
      name: 'gold',
      value: 'gold',
      text: '#000',
    },
    {
      name: 'forestgreen',
      value: 'forestgreen',
      text: '#fff',
    },
    {
      name: 'khaki',
      value: 'khaki',
      text: '#000',
    },
    {
      name: 'indigo',
      value: 'indigo',
      text: '#000',
    },
    {
      name: 'greenyellow',
      value: 'greenyellow',
      text: '#000',
    },
    {
      name: 'lawngreen',
      value: 'lawngreen',
      text: '#000',
    },
    {
      name: 'lightsalmon',
      value: 'lightsalmon',
      text: '#fff',
    },
    {
      name: 'darkorchid',
      value: 'darkorchid',
      text: '#fff',
    },
    {
      name: 'goldenrod',
      value: 'goldenrod',
      text: '#fff',
    },
    {
      name: 'cadetblue',
      value: 'cadetblue',
      text: '#fff',
    },
    {
      name: 'blueviolet',
      value: 'blueviolet',
      text: '#fff',
    },
    {
      name: 'burlywood',
      value: 'burlywood',
      text: '#000',
    },
    {
      name: 'coral',
      value: 'coral',
      text: '#000',
    },
    {
      name: 'cornflowerblue',
      value: 'cornflowerblue',
      text: '#fff',
    },
  ];

  var container = document.querySelector('#colors');

  colors.forEach(color => {
    var div = document.createElement('div');

    var value = document.createElement('span');
    value.innerText = color.value;
    value.classList.add('value');

    var name = document.createElement('span');
    name.innerText = color.name;
    name.classList.add('name');

    div.style.backgroundColor = color.value;
    div.style.color = color.text;

    div.appendChild(name);
    div.appendChild(value);

    container.appendChild(div);
  });
})();
