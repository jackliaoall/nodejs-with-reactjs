var fs = require('fs');

fs.readFile('./test.sql', function(err, buffer) {
  if(err) throw err;
  //console.log(buffer);
  console.log(buffer.toString());
});
