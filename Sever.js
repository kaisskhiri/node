var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    if
    (req.url == "/"){
    fs.readFile('index.html',function(err,data){
        res.write(data);
        res.end()})}




}).listen(3000);