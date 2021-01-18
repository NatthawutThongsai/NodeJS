var fs=require('fs');
var readFile=fs.readFileSync('code.txt','utf-8')
console.log(readFile)
fs.writeFileSync('HelloNodeJS.txt',readFile)
fs.mkdir('TestWriteFile',function(){
    fs.writeFileSync('./TestWriteFile/Readme.txt',readFile)
});