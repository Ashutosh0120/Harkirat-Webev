/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function time_passed(x){
    var s=new Date().getTime();
    var t=0;
    for(var i=0;i<x;i++) t+=i;
    var e=new Date().getTime();
    return ((e-s)/1000);
}
var ans=time_passed(10000000);
console.log(ans);