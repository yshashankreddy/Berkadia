var express = require("express");
var app = express();

var router = express.Router();

router.get('/', function (req, res) {
    res.send('HELLO  SHASHANk REDDY!')
  });

router.use(function(req,res,next){
  console.log("/" + req.method);
  next();
});

app.use("/",router);

app.listen(4000);
