/*
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

*/

function isPalindrome(line) {
  return line.toString().split("").reverse().join("") === line.toString();
}

console.log("Reverse Method")
console.log(isPalindrome("anna")); //==> true
console.log(isPalindrome("walter")); //==> false
console.log(isPalindrome(12321)); // ==> true
console.log(isPalindrome(123456)); // ==> false


function isPalindrome2(line) {
  word = line.toString();
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log("For Loop Method")
console.log(isPalindrome2("anna")); //==> true
console.log(isPalindrome2("walter")); //==> false
console.log(isPalindrome2(12321)); // ==> true
console.log(isPalindrome2(123456)); // ==> false