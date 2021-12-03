/*

Have the function NUniqueCharacters(str) take the str parameter being passed
and find the longest substring that contains N unique characters, where N
will be the first character from the string. The substring will start from the
second position in the string because the first character will be the integer N.
For example: if str is "2aabbacbaa" there are several substrings that all contain
2 unique characters, namely: ["aabba", "ac", "cb", "ba"]. but your program should
return "aabba" because it is the longest substring. If there are multiple longest
substrings, then return the first substring encountered with the longest length, N
will range from 1 to 6
*/

function NUniqueCharacters(str) {
    let n = +str[0];
    return str.split('').splice(1).reduce((acc, val, idx) => {
        if ( new Set(acc[acc.length - 1].concat(val)).size > n )  { acc.push([str[idx ]]); }
        acc[acc.length - 1].push(val);
        return acc;
    },[[]]).map(x => x.join('')).sort((a,b) => b.length - a.length)[0];
}


console.log(NUniqueCharacters("2aabbacbaa"));