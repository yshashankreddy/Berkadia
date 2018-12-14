let express=require('express');
let app=express();
let router=express.Router();

router.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
