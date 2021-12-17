/*
Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
Don't worry about uppercase vowels.

*/

function shortcut(string) {
    return string.replace(/[aeiou]/gi, '');
}


console.log(shortcut("hello"));
console.log(shortcut("codewars"));
console.log(shortcut("goodbye"));
console.log(shortcut("HELLO"));
console.log(shortcut("hEllo"));
