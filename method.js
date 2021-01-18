var pi = 3.14;
var object={};
object.updateData=function(){
    console.log("Update Data")
}
object.deleteUser=function(){
    console.log("Delete User")
}
var update=function(){
    return "Update server";
}
var add=function(a,b){
    return a+b;
}
var sub=function(a,b){
    return a-b;
}
exports.pi=pi;
exports.add=add;
exports.sub=sub;
exports.update=update;
exports.data=object;
