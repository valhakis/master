var data = `
<data>
  <group_user>
    <id type="integer">2671029</id>
    <created_at type="datetime">2013-01-20T21:42:01+00:00</created_at>
    <comments_count type="integer">0</comments_count>
    <moderator_at type="datetime" nil="true"/>
    <user>
      <id type="integer">5586131</id>
      <first_name>Melora</first_name>
    </user>
  </group_user>

  <group_user>
    <id type="integer">2026289</id>
    <created_at type="datetime">2012-06-08T04:22:38+00:00</created_at>
    <comments_count type="integer">38</comments_count>
    <moderator_at type="datetime" nil="true"/>
    <user>
      <id type="integer">6082517</id>
      <first_name>Cindy</first_name>
    </user>
  </group_user>
</data>
`;


// var element = document.getElementById('example');
//
// /* jQuery selection */
// var $element = $(element);
//
// /* DOMElement */
// var element = $element[0];

var xmlDoc = $.parseXML(data);

xmlDoc.querySelectorAll('user').forEach(function(item, index) {
  console.log(item, index);
});

/*
$(xmlDoc).find('user').each(function(index, tag) {

  // to jQuery to something
  var $tag = $(tag);

  // find first occurrence of <first_name> within <user>
  var firstName = $tag.find('first_name')[0];
  var $firstName = $(firstName);

  // can also use something like
  //
  //var firstName = tag.querySelector('first_name');
  //
  //var firstName = $tag[0].querySelector('first_name');
   var user = {
     name: firstName.textContent,
     // or
     name: $firstName.text()
   };

  // find first occurrence of <id> within <user>
  var id = $tag.find('id')[0];
  var $id = $(id);

  // user object creation
  var user = {
    id: $id.text(),
    name: $firstName.text()
  };

  console.log('id: ' + user.id);
  console.log('name: ' + user.name);
});

*/
