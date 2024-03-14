//let myArray = [1, 2, 3, 4];
//for (let i = 0; i < myArray.length; i++) {
// console.log(myArray[i]);
//}

// let myNumber = myArray[5];
// if (myNumber) {
//   console.log('The number is: ' + myNumber);
// } else {
//   console.log('The number is undefined');
// }

// -------------ERROR-------------
// Use const instead of let for myArray and myNumber
// Write the correct index in myArray[]so that it can print myNumber

const myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

const myNumber = myArray[myArray.length - 1];
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The number is undefined");
}
