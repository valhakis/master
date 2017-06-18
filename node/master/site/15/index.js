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


var xmlDoc = $.parseXML(data);

var $xml = $(xmlDoc);

var users = $xml.find('user');

users.each(function(index, item) {
  var name = $($(item).find('first_name')).text();
  var id = $($(item).find('id')).text();

  console.log(id, name);
});


