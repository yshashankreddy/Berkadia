var express=require('express');
var mysql=require('mysql');

var app=express();
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'519'
});



connection.connect(function(error)
    {
        if(!!error)
        {
           console.log("error");
        }
        else
        {
            console.log("success");
        }
    });
app.get('/',function(req,res)
{
   connection.query("select * from login",function(error,rows,fields)
   {
         if(!!error)
        {
           console.log("error in query");
        }
        else
        {
            var str='';
            console.log("success query");
            for(var i=0;i<rows.length;i++)
            {
                str+="Rollno : "+rows[i].rollno+" Name : "+rows[i].name+" Mobile "+rows[i].mobile+"<br>";
            }
            res.send(str);
        }
   })
})
app.get('/insert',function(req,res)
{
   connection.query("insert into login values ('123','sreenu','1597864230')",function(error,rows,fields)
   {
         if(!!error)
        {
           console.log("error in query");
        }
        else
        {
            var str='success inserted';
            console.log("success inserted query");
            
            res.send(str);
        }
   })
})
app.get('/update',function(req,res)
{
   connection.query("update table login set mobile='1234567867' where rollno='123'",function(error,rows,fields)
   {
         if(!!error)
        {
           console.log("error in query");
        }
        else
        {
            var str='success updated';
            console.log("success updated query");
            
            res.send(str);
        }
   })
})
app.listen(8)

