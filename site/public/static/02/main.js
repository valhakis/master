var template = `
  <table>
    <thead>
      <tr>
        <td></td>
      </tr>
    </thead>
    <tbody>
      {{#data}}
      <tr>
        <td>item</td>
      </tr>
      {{/data}}
    </tbody>
  </table>
`;

var data = [
  {
    timeStamp: new Date(),
    category: 'books',
    value: 38
  },
  {
    timeStamp: new Date(),
    category: 'books',
    value: 22
  },
  {
    timeStamp: new Date(),
    category: 'books',
    value: 82
  },
  {
    timeStamp: new Date(),
    category: 'books',
    value: 52
  },
];

var table = Mustache.render(template, {
  data: data
});

document.body.innerHTML += table;

data.forEach(function(datum, index) {
  console.log(`For ${index} of ${data.length-1}`);
});
