var view = {
  title: "Joe",
  calc: function() {
    return 2 + 4;
  }
};

var output = Mustache.render("{{title}} spends {{calc}} dollars per day.", view);

console.log(output);

window.addEventListener('load', function() {
  var template = $('#template').html();
  Mustache.parse(template); // optional, speeds up future uses

  var rendered = Mustache.render(template, {name: "Luke"});
  $('#target').html(rendered);

  $.get('template.mst', function(template) {
    $.get('master.mst', function(masterTemplate) {
      var rendered = Mustache.render(template, {
        place: 'hell', 
        name: 'John', 
        authenticated: true,
        info: {
          label: 'information',
          num: 32,
        },
        friends: [
          { name: "Viktor" },
          { name: "William" },
          { name: "Thomas" },
        ],
        persons: [
          { firstName: "William", lastName: "Aurelius" },
          { firstName: "Viktor", lastName: "Doonth" },
          { firstName: "Thomas", lastName: "Lumberbridge" },
        ],
        fullName: function() {
          return this.firstName + " " + this.lastName;
        },
        musketeers: [ "Athos", "Aramis", "Porthos", "D'Artagnan" ],
      }, {
        master: masterTemplate
      });
      $('#target-2').html(rendered);
    });
  });
});
