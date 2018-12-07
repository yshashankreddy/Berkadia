Derby:
-----
       
       Derby is a model-view controller (MVC) JavaScript framework for both client-side and server-side. 
It is ideal for creating real-time mobile and web applications. Derby's Racer, a real-time data synchronization engine for Node.js allows multi-site, real-time concurrency and data synchronization across clients and servers. 
By leveraging ShareJS, Racer optimizes conflict resolution algorithm and allows real-time editing within an application. 
Moreover, server rendering is one such feature of Derby that allows fast page loads, search engine support and HTML templates to render in the browser or on the server.


Program:
-------


var http = require('http'),
  express = require('express'),
  derby = require('derby'),
  derbyApp = require('./derby-app');

var expressApp = new express(),
  server = http.createServer(expressApp);

var store = derby.createStore({
  listen: server
});
