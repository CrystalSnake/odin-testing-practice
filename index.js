const { off } = require('process');

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

function getNewIndex(char, offset) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  if (offset > alphabet.length) offset = offset % alphabet.length;
  const newIndex = alphabet.indexOf(char) + offset;
  if (newIndex > alphabet.length - 1) {
    return alphabet[newIndex - alphabet.length];
  } else if (newIndex < 0) {
    return alphabet[newIndex + alphabet.length];
  } else return alphabet[newIndex];
}

function makeOffset(char, offset) {
  if (char.match(/[a-z]/)) return getNewIndex(char, offset);
  else if (char.match(/[A-Z]/))
    return getNewIndex(char.toLowerCase(), offset).toUpperCase();
  else return char;
}

function caesar(inputString, offset) {
  const result = inputString
    .split('')
    .map((char) => makeOffset(char, offset))
    .join('');
  return result;
}

module.exports = { capitalize, reverse, calculator, caesar };
