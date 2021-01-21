var http=require('http');
var fs=require('fs');
var myuser={
    "name":"Natthawut THongsai",
    "job":"Programmer",
    "age":21
}
http.createServer(function(req,res){
    //res.writeHead(200,{'Content-Type':'text/html'});
    //'text/plain'
    //res.end("Helloworld");
    //'text/html'
    //var myStream=fs.createReadStream(__dirname+"/"+'index.html','utf-8');
    //myStream.pipe(res);
    //'text/json'
    //res.end(JSON.stringify(myuser));
    if(req.url ==='/home'||req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+'index.html','utf-8');
        myStream.pipe(res);
    }
    else if(req.url ==='/facebook'){
        res.writeHead(200,{'Content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+'facebook.html','utf-8');
        myStream.pipe(res);
    }
    else if(req.url ==='/youtube'){
        res.writeHead(200,{'Content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+'youtube.html','utf-8');
        myStream.pipe(res);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+'notfound.html','utf-8');
        myStream.pipe(res);
    }
}).listen(8081,'127.0.0.1');