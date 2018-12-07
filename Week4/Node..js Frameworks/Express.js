 Express.js:
 ----------
 
               Express.js is one of the essential web frameworks for Node.js. 
It is a minimalist framework for building a host of web and mobile applications as well as application programming interfaces (APIs).
                A lot of popular applications and websites like MySpace, Geekli.st, Klout, Segment.io and Yummly are powered by Express.js. 
Express.js offer various features, like template engines, simplified multiple routing, database integration and more.


Program:
--------

const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(1998,()=>console.log("listening on port 1998"))
