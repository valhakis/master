var app = require('root/app');

app.component('hello', {
  template: `
    <h4>THE HELLO COMPONENT</h4>
    <p>Name: {{ $ctrl.name }}</p>
  `,
  controller: function() {
    this.name = 'Arbuusi Kuningas';
  }
});
