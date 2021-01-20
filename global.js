console.log(__filename);
console.log(__dirname);
function printHello(){
    console.log("Helloworld");
}
var t = setTimeout(printHello,2000);
clearTimeout(t);
setInterval(printHello,2000);