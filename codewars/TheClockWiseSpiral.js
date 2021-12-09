/*Do you know how to make a spiral? Let's test it!
Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

1    2    3    
8    9    4    
7    6    5    
N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7
N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

1   2   3   4   5    
16  17  18  19  6    
15  24  25  20  7    
14  23  22  21  8    
13  12  11  10  9

*/

function createSpiral(n) {

    if (N < 1 || !Number.isInteger(n)) return []
    let returnArray = Array(n).fill(null).map(() => Array(n).fill(0));

    let topBoundary = 0;
    let bottomBoundary = n-1;
    let leftBoundary = 0;
    let rightBoundary =  n-1;
    let counter = 1;
    let direction = 'LEFT';
    let x = 0;
    let y = 0;

    while (topBoundary <= bottomBoundary && leftBoundary <= rightBoundary) {
        if (direction === "LEFT" && x <= rightBoundary) {
            returnArray[y][x++] = counter++
        } else if (direction === "LEFT" && x > rightBoundary) {
            direction = "DOWN"
            x = rightBoundary
            y = ++topBoundary
        } else if (direction === 'DOWN' && y <= bottomBoundary) {
            returnArray[y++][x] = counter++
        } else if (direction === 'DOWN' && y > bottomBoundary) {
            direction = 'RIGHT'
            x = --rightBoundary
            y = bottomBoundary
        } else if (direction === 'RIGHT' && x >= leftBoundary) {
            returnArray[y][x--] = counter++
        } else if (direction === 'RIGHT' && x < leftBoundary) {
            direction = 'UP'
            x = leftBoundary
            y = --bottomBoundary
        }  else if (direction === 'UP' && y >= topBoundary) {
            returnArray[y--][x] = counter++
        } else if (direction === 'UP' && y < topBoundary) {
            direction = 'LEFT'
            x = ++leftBoundary
            y = topBoundary
        }
    }
    return returnArray
  }

console.log(createSpiral(1), "[[1]]");
console.log(createSpiral(3), "[[1,2,3],[8,9,4],[7,6,5]]");
console.log(createSpiral(4), "[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]");
console.log(createSpiral(5), "[[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]"); 
