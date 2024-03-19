// let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//   console.log(property + ': ' + myObject.property);
//}

// -------------ERROR-------------
// Use const instead of let for myObject
// Use myObject.property instead of myObject[property]
// Put const for property in for loop

const myObject = { name: "John", age: 30 };
for (const property in myObject) {
  console.log(property + ": " + myObject[property]);
}
