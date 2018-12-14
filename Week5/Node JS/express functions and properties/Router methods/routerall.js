let express=require('express');
let router=express.Router();
let app=express();

router.all('/',(req,res)=>{
    res.send("router methods");
});

app.listen(3000);
