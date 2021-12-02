/*

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return 2, not 2.666666...:


eight(dividedBy(three()));

*/

function zero(operation) {
  return !operation ? 0 : operation(0);
}
function one(operation) {
  return !operation ? 1 : operation(1);
}
function two(operation) {
  return !operation ? 2 : operation(2);
}
function three(operation) {
  return !operation ? 3 : operation(3);
}
function four(operation) {
  return !operation ? 4 : operation(4);
}

function five(operation) {
  return !operation ? 5 : operation(5);
}

function six(operation) {
  return !operation ? 6 : operation(6);
}

function seven(operation) {
  return !operation ? 7 : operation(7);
}

function eight(operation) {
  return !operation ? 8 : operation(8);
}
function nine(operation) {
  return !operation ? 9 : operation(9);
}

function plus(first) {
  return function (second) {
    return second + first;
  };
}
function minus(first) {
  return function (second) {
    return second - first;
  };
}
function times(first) {
  return function (second) {
    return second * first;
  };
}
function dividedBy(first) {
  return function (second) {
    return Math.floor(second / first);
  };
}
