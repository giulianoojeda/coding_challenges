/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

snail = function (array) {
 
    const sorted = []
    while(array.length){
      //take off the top row
      sorted.push(...array.shift())
      //take off the right column
      for(let i=0; i<array.length; i++){ sorted.push(array[i].pop()) }
      //take off the bottom row
      sorted.push(...(array.pop() || []).reverse())
      //take off the left column
      for(let i=array.length-1; i>=0; i--){ sorted.push(array[i].shift()) }
    }
    return sorted
};

var A = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

console.log(JSON.stringify(snail(A)));
