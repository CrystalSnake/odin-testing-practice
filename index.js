const { number } = require('yargs');

function capitalize(inputString) {
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
}

function reverse(inputString) {
  return inputString.split('').reverse().join('');
}

function isNumber(firstOp, secondOp) {
  if (typeof firstOp != 'number' || typeof secondOp != 'number') return false;
  else return true;
}

const add = function (firstOp, secondOp) {
  if (isNumber(firstOp, secondOp)) return firstOp + secondOp;
  else return 'Arguments must be a number';
};

const subtract = function (firstOp, secondOp) {
  if (isNumber(firstOp, secondOp)) return firstOp - secondOp;
};

const multiply = function (firstOp, secondOp) {
  if (isNumber(firstOp, secondOp)) return firstOp * secondOp;
};

const divide = function (firstOp, secondOp) {
  if (isNumber(firstOp, secondOp))
    if (secondOp == 0) return `Error: can't divide by zero`;
    else return firstOp / secondOp;
};

const calculator = { add, subtract, multiply, divide };

module.exports = { capitalize, reverse, calculator };
