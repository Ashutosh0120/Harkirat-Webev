// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
//->>  hello     world    my    name   is       raman
// After the program runs, the output should be
//->>  hello world my name is raman

const fs=require('fs');
function clean(data){
    data=data.split(" ");
    data=data.join("");
    return data;
}
function rf(err,data){
    if(err){
        console.log(err);
        return;
    }
    data=clean(data);
    console.log(data);
}

fs.readFile('async-js/medium/a.text','utf8',rf);