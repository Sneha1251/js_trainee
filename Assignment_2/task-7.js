// All of the above questions from 3-6 needs to be done with arrow functions also

//3
const inner = () => {
  return "hello world!";
};

const outer = (inner) => {
  console.log(inner());
};

outer(inner);

//4
const squareOfNumbers = (length) => {
  return length * length;
};

console.log("Sqaure of number is ", squareOfNumbers(5));

// 5
const sumOfNumbers = (first, second) => {
  return first + second;
};

console.log("Sum of number is ", sumOfNumbers(5, 6));

//6
const checkNumber = (number) => {
  if (number % 2 !== 0) return false;

  return true;
};

console.log('Even Number: ', checkNumber(5));
