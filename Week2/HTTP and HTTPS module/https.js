var https = require('https');

https.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This ia a HTTPS server');
    res.end();
}).listen(8080);
