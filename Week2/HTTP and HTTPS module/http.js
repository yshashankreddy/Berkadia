var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('This ia a HTTP server');
  res.end();
}).listen(8080);
