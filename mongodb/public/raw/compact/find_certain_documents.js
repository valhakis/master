db.collection('standards').find({}, { _id: false, name: true, address: true }).toArray(function(err, result) {
  if (err) return console.log('FAILEID TO FIND CERTAIN DOCUMENTS');

  console.log(result);

  db.close();
});
