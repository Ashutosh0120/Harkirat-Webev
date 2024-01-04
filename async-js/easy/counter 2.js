// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

var c=0;

function help(){
    console.log(c);
    c++;
    setTimeout(help,1000);
}
setTimeout(help,1000);