var fs = require('fs');

fs.readFile('file1.txt', (err, data) => {
  if (err) {
    console.error(err);
    return
  }
  console.log(data.toString());
  console.log('successfully read');
});
