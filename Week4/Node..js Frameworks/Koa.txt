Koa.js:
------

          Koa.js is a powerful server framework for Node.js to build efficient web applications and application programming interfaces (APIs). 
Koa.js efficiently uses generators to efficiently deal with call backs and increase error-handling capabilities. 
This also improves readability of the application.


Program:
-------

var koa = require('koa');
var app = koa();

app.use(function* (){
   this.body = 'Hello world!';
});

app.listen(3000, function(){
   console.log('Server running on https://localhost:3000')
});
