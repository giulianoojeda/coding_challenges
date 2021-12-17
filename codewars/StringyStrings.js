/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/
function stringy(size) {
  let stringy = "";
  for (let i = 1; i <= size; i++) {
    stringy += i % 2;
  }
  return stringy;
}

console.log(stringy(6), stringy(6).length);
console.log(stringy(4), stringy(4).length);
console.log(stringy(12), stringy(12).length);
console.log(stringy(8), stringy(8).length);
