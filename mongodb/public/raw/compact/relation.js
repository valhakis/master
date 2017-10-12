db.collection('standards').aggregate([
  {
    $lookup: {
      from: 'codes',
      localField: 'code_id',
      foreignField: '_id',
      as: 'code'
    }
  }
], function(err, result) {
  if (err) {
    console.log('FAILED TO AGGREGATE DOCUMENT YOU KNOW');
  } else {
    console.log(JSON.stringify(result));
  }

  db.close();
});
