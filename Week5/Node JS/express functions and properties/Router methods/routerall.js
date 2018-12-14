let express=require('express');
let router=express.Router();

router.all('/',(req,res)=>{
    res.send("router methods");
});

module.exports=router;
