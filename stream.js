const { resolveTxt } = require('dns');
var fs=require('fs');
var data='';
var readStream=fs.createReadStream('code.txt');
readStream.setEncoding('utf-8');
readStream.on('data',function(txt){
    data+=txt;
});
readStream.on('end',function(){
    console.log(data);
});
readStream.on('error',function(err){
    console.log(err.stack);
});
var data2 = "WriterStream"
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data2,'utf-8');
writerStream.end();
writerStream.on('finish',function(){
    console.log("Output complete");
});