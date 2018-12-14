let express = require("express");
let app = express();

app.get('/, (req, res) => {

res.get('Content-Type');
// => "text/plain"

res.type('.html');   

res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);

res.attachment();
// Content-Disposition: attachment

res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });

res.end();
res.status(404).end();

res.format({
  'text/plain': function(){
    res.send('hey');
  }
  });
  
  res.json(null);
res.json({ user: 'tobi' });
res.status(500).json({ error: 'message' });

res.send('<p>some html</p>');

res.set('Content-Type', 'text/plain');

res.set({
  'Content-Type': 'text/plain',
  'Content-Length': '123',
  'ETag': '12345'
});
  
  
