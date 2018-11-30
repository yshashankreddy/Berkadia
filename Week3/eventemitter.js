var events = require("events");
var fs = require('fs');
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('read',readFileContent);
eventsEmitter.on('display',displayFileContent);
eventsEmitter.on('finished',finished);
eventsEmitter.emit('read','file1.txt');


function readFileContent(fileName){
    console.log("Reading " + fileName + " file started:");
    fs.readFile(fileName, 'utf8', readFile);
}

function  displayFileContent(data){
    console.log("File Data:");
    console.log(data);
    eventsEmitter.emit('finished');
}

function finished(){
  console.log("Reading and Printing File content job is done successfully.");
}

function readFile(err,data,fileName) {
    console.log("Reading " + "file1.txt" + " file done successfully.");
    eventsEmitter.emit('display',data);
}