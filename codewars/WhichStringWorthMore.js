/*
You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

In the event of a tie, you should return the first string, i.e. a.
*/
function highestValue(a, b) {
  return (a.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0) >= b.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0)) ?  a : b;
}

console.log(highestValue("hello", "world"), "hello");
console.log(highestValue("goodbye", "world") , "goodbye");
console.log(highestValue("world", "hello") , "world");
console.log(highestValue("world", "goodbye") , "goodbye");