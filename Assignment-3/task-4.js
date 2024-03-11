// Write a program to print all even number first and then all odd numbers
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) {
    evenNumbers.push(i);
  }
}
console.log("Even no", evenNumbers);
for (let i = 0; i < 50; i++) {
  if (i % 2 != 0) {
    oddNumbers.push(i);
  }
}
console.log("Odd no", oddNumbers);
