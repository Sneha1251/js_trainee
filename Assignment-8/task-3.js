// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//   console.log('The value at index ' + i + ' is: ' + myArray[i]);
// }

// let total = 0;
// myArray.forEach(function(element) { total += element; });
// console.log('The total of all elements in the array is: ' + total);

// -------------ERROR-------------
// Use const instead of let for myArray
// We can use reduce instead of for each in the sum of myArray

const myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log('The value at index ' + i + ' is: ' + myArray[i]);
}

let total = 0;
myArray.forEach(function(element) { 
  total += element; 
});
console.log('The total of all elements in the array is: ' + total);