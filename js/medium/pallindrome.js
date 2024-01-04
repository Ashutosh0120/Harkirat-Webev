/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(s){
    var i=0, j=s.length-1;
    var t=true;
    while(i<=j){
        if(s[i++]!=s[j--]) {
            t=0;break;
        } 
    }
    return t==true?"Pallindrome":"Not";
}
var ans=isPalindrome("aba");
console.log(ans);
ans=isPalindrome("ab");
console.log(ans);

