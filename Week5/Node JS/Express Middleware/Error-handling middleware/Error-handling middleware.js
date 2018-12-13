var express = require('express');
var app = express();
//creation of error
app.get('/',(req, res,next)=>{
    let err = new Error("Error created here");
    next(err);
 });
 //Error handled here
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.send('OOPS!Sorry Shashank,An Error Occurred')
});

app.listen(4000);
