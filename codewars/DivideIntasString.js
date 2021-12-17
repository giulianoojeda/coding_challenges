/*
Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form [quotient, remainder] (vector<string> {quotient, remainder} in C++).

a and b can be very large (at the order of 10^150 to 10^200)
As usual, your result should not have leading 0s
require is disabled in JavaScript. Do it yourself ;-)
*/

function divideStrings(a, b) {
    var num = a + "",
    numLength = num.length,
    remainder = 0,
    answer = "",
    i = 0;
    console.log(num, numLength, remainder, answer, i);

  while (i < numLength ) {
    var digit = i < numLength ? parseInt(num[i]) : 0;
    answer = answer + Math.floor((digit + remainder * 10) / b);
    remainder = (digit + remainder * 10) % b;
    i++;
  }

  return answer;
}

  
console.log(divideStrings(35282012392263499629407684864723038585150279233311537420125526262042825920,67357950874079454008026282767384213255696802274405))
// Expected: ['523798778532032956467013', '1352971990424251230903263420604053580250286123655']