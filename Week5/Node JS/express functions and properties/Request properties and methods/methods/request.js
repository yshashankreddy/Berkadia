let express=require('express');
let app=express();

req.get('Content-Type');// => "text/plain"

req.is('text/html');  // => 'text/html'

// ?name=shashank
req.param('name')
// => "shashank"

var range = req.range(1000)

// the type of the range
if (range.type === 'bytes') {
  // the ranges
  range.forEach(function (r) {
    // do something with r.start and r.end
  })
}

// Accept: text/html
req.accepts('html');
// => "html"
