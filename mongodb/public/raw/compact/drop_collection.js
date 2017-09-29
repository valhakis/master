db.collection('standards').drop(function(err, result) {
  if (err) return console.log('FAILED TO DROP COLLECTION');

  if (result) {
    console.log('COLLECTION DROPPED');
  }

  db.close();
});

// OR

db.dropCollection('standards', function(err, result) {
  if (err) return console.log('FAILED TO DROP COLLECTION');

  if (result) {
    console.log('COLLECTION DROPPED');
  }

  db.close();
});
