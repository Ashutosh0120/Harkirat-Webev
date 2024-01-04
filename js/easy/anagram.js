/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function sort(a){
    a=a.split("");
    a.sort();
    a=a.join("");
    return a;
}
function anagram(a,b)
{   
    a=sort(a);
    b=sort(b);
    return (a==b)?"YES":"NO";
}
var ans=anagram("abc","cba");
console.log(ans);

