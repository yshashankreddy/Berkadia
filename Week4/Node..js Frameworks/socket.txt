Socket.io:
---------

           Socket.io is a Node.js server framework for building real-time web applications.
Being a Javascript library, it allows event-driven, bidirectional communication between web clients and server.
Socket.io works as a client-side library running in the browser and as a server-side library for node.js. 
            The framework allows real-time concurrency for document collaboration and data exchange.
Moreover, its key features also include asynchronous input/ output (I/O) processing, binary streaming, instant messaging ('Hello World' chat application) and more.


Program:
-------

var app = require('express')();
var http = require('http').Server(app);

app.get('/',(req, res)=> {
   res.sendfile('index.html');
});

http.listen(1998,()=> {
   console.log('listening on localhost:1998');
});
