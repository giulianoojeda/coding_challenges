/*
Count the number of ways of splitting a given string into three parts, such that each part contains the same number of letters 'a'.
*/

console.log(solution("babaa")); // ["ba | ba | a" , "bab | a | a"]
console.log(solution("ababa")); // ["a | ba | ba" , "ab | ab | a", "a | bab | a" , "ab | a | ba" ]
console.log(solution("aba")); // 0
console.log(solution("bbbbb")); //

function solution(S) {
  let count = (S.match(/a/g) || []).length;
  if (count % 3 !== 0) return 0;
  if (count === 0) return (((S.length - 1) * (S.length - 2)) / 2) % 1000000007;
  var indices = S.split("")
    .map((e, i) => (e === "a" ? i : ""))
    .filter(String);
  var f = indices[count / 3] - indices[count / 3 - 1];
  var g = indices[(count / 3) * 2] - indices[(count / 3) * 2 - 1];
  console.log(indices, count / 3, count / 3 - 1, f, g);
  return (f * g) % 1000000007;
}
