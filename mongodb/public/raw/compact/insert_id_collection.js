var standard = {
  _id: '1',
  title: 'Has To Be With _id of 1',
  description: 'Dolor similique ducimus adipisci recusandae iusto. Non quasi nam maxime!'
};

db.collection('standards').insertOne(standard, function(err, result) {
  if (err) return console.log('FAILED TO INSERT INTO COLLECTION');

  console.log('INSERTED INTO COLLECTION');

  db.close();
});
