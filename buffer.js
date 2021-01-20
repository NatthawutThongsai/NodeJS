var buf = new Buffer("Natthawut");
console.log(buf.toString());
var buff = new Buffer(200);
len = buff.write("thongsai");
console.log(len);

var bufi = new Buffer(26);
for(var i=0;i<26;i++){
    bufi[i]=i+97;
}
console.log(bufi.toString('ascii'));
var bufj1= new Buffer("Buffer to json1");
var bufj2= new Buffer("Buffer to json2");
var bufj3=Buffer.concat([bufj1,bufj2]);
var json=buf.toJSON(bufj1);
console.log(json);
console.log(bufj3.toString());