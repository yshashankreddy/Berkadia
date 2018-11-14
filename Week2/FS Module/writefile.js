var fs = require('fs');

fs.writeFile('file1.txt', 'Hi everyone', function (err) {
  if (err)
  {
      console.log('error in writing to a file');
  }
  console.log('Saved!');
});
