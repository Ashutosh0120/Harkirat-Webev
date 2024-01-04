// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
//->>  hello     world    my    name   is       raman
// After the program runs, the output should be
//->>  hello world my name is raman
const fs=require('fs');
function clean(x){
    x=x.split(" ");
    var ans=[];
    for(var i=0;i<x.length;i++){
        if(x[i].length!=0) ans.push(x[i]);
    }
    var t=ans.join(" ");
    return t;
}
function fw(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("File Written Successfully");
}
function rf(err,data){
    if(err){
        console.log(err);
        return;
    }
    data=clean(data);
    console.log(data);
    fs.writeFile('async-js/medium/a.text',data,'utf8',fw);
}
fs.readFile('async-js/medium/a.text','utf8',rf);