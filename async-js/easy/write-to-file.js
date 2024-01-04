// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs');
var d="lmao dead";
function wf(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("editted");
}
function rf(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
}
fs.writeFile('a.text',d,'utf8',wf);
fs.readFile('a.text','utf8',rf);