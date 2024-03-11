// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checkNumber = function (number) {
  if (number % 2 !== 0) return false;

  return true;
};

console.log(checkNumber(5));
