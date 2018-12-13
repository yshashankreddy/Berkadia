var express = require('express')
var app = express()

var cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("This is the Third-Party Middleware");
});
 app.listen(3000);
