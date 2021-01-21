var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.end("Helloworld");
    var myStream=fs.createReadStream(__dirname+"/"+'index.html','utf-8');
    myStream.pipe(res);
}).listen(8081,'127.0.0.1');