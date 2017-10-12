var standards = [
  {
    title: 'Best Standard Element',
    description: 'Dolor similique ducimus adipisci recusandae iusto. Non quasi nam maxime!'
  },
  {
    title: 'Best Books of the Centure',
    description: 'Dolor dolores nesciunt fugit eveniet doloribus obcaecati Placeat cum expedita!'
  },
  {
    title: 'Programming Tips for Masters',
    description: 'Lorem nemo aut rerum pariatur asperiores! Iusto inventore quas cupiditate?'
  },
];

db.collection('standards').insertMany(standards, function(err, result) {
  if (err) return console.log('FAILED TO INSERT MANY INTO COLLECTION');

  console.log('MANY INSERTED INTO COLLECTION');

  db.close();
});
