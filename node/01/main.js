const destination = './temp/somthing.pdf';
const fs = require('fs');

function encodeToBase64(destination, callback) {
  return fs.readFile(destination, function (err, data) {
    if (err) {
      return callback(err);
    }
    return callback(null, new Buffer(data).toString('base64'));
  });
}

encodeToBase64(destination, function(err, data) {
  console.log(data);
});
