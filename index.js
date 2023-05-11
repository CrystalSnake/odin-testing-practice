function capitalize(inputString) {
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
}

function reverse(inputString) {
  return inputString.split('').reverse().join('');
}

module.exports = { capitalize, reverse };
