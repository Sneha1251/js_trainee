// Write a program to print all even number first and then all odd numbers using only one iteration
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  } else {
    oddNumbers.push(i);
  }
}
console.log(evenNumbers, "\n", oddNumbers);
