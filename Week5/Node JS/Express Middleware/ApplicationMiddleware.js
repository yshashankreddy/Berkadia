var express = require('express');
var app = express();

app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   next();
});
 app.get('/student', function (req, res, next) {
    res.send(req.query.id);
  });
app.listen(4000);

//OUTPUT:
//Console: C:\Users\SHASHANK\Desktop\Week5\Node>node app.js -> A new request received at 1544705817883
//Browser:ID:100
